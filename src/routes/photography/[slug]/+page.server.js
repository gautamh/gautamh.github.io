import fs from 'fs';
import path from 'path';
import { error } from '@sveltejs/kit';

const photosBaseDir = path.resolve('static/photos');
const photosPublicPath = '/photos'; // Base URL path for full photos
const thumbsBaseDir = path.resolve('static/thumbs');
const thumbsPublicPath = '/thumbs'; // Base URL path for thumbnails

const ALBUM_MAP = {
    "cherry-blossoms": {
      albumName: "NYC Cherry Blossoms 2025",
      albumDescription: "Cherry trees in bloom across Central Park in NYC",
    },
    "no-kings": {
      albumName: "No Kings Protest",
      albumDescription: "Photos from the No Kings NYC protest on April 19, 2025",
    },
  };


export async function load({ params }) {
    const { slug } = params;

    // Check if album metadata exists
    if (!ALBUM_MAP[slug]) {
        console.warn(`Album metadata not found for slug: ${slug}`);
        throw error(404, `Album configuration for '${slug}' not found`);
    }

    const albumDiskPath = path.join(photosBaseDir, slug);
    const thumbsDiskPath = path.join(thumbsBaseDir, slug);
    const albumItems = []; // Array to hold { photoUrl, thumbUrl } pairs

    try {
        // Check if the specific album photo directory exists
        if (!fs.existsSync(albumDiskPath) || !fs.lstatSync(albumDiskPath).isDirectory()) {
            console.warn(`Album photo directory not found: ${albumDiskPath}`);
            throw error(404, `Album photos directory '${slug}' not found`);
        }
         // Check if the thumbs directory exists. If not, we'll always use the fallback.
         const thumbsDirExists = fs.existsSync(thumbsDiskPath) && fs.lstatSync(thumbsDiskPath).isDirectory();
         if (!thumbsDirExists) {
            console.warn(`Album thumbs directory not found: ${thumbsDiskPath}. Will use full photos as thumbnails.`);
         }


        const photoFiles = fs.readdirSync(albumDiskPath);

        for (const photoFile of photoFiles) {
            // Regex to match '<filename>-<number>.<extension>'
            const photoMatch = photoFile.match(/^(.+?)-(\d+)(\.\w+)$/i);

            // Proceed only if the photo filename matches the expected pattern
            if (photoMatch) {
                const [, baseName, number, ] = photoMatch; // photoExtension captured but not needed for logic here

                // Construct the public URL path for the main photo
                const photoUrl = `${photosPublicPath}/${slug}/${photoFile}`;
                let thumbUrl = ''; // Initialize thumbUrl

                // Construct the expected thumbnail filename based on the rule: <filename>_t-<number>.jpg
                const expectedThumbFilename = `${baseName}_t-${number}.jpg`;
                const expectedThumbPath = path.join(thumbsDiskPath, expectedThumbFilename);

                // Check if the corresponding thumbnail file actually exists *and* the thumbs dir exists
                if (thumbsDirExists && fs.existsSync(expectedThumbPath)) {
                    // Thumbnail exists: Use its specific URL
                    thumbUrl = `${thumbsPublicPath}/${slug}/${expectedThumbFilename}`;
                } else {
                    // Thumbnail doesn't exist OR thumbs dir is missing: Use the main photo URL as fallback
                    thumbUrl = photoUrl; // Fallback to the original photo URL
                    // Optional: Log only if the specific thumb was expected but not found
                    if (thumbsDirExists && !fs.existsSync(expectedThumbPath)) {
                         console.log(`Thumbnail not found for ${photoFile}, using full photo as thumbnail fallback.`);
                    }
                }

                // Add the pair to our results array (always add if pattern matches)
                albumItems.push({ photoUrl, thumbUrl });

            } else {
                 // Optional: Log files that don't match the expected pattern
                 if (/\.(jpg|jpeg|png|gif|webp)$/i.test(photoFile)) { // Only log if it looks like an image
                    console.log(`Skipping photo file due to non-matching pattern: ${photoFile}`);
                 }
            }
        }

    } catch (err) {
        // Re-throw specific known errors (like our 404s)
        if (err.status === 404) throw err;

        // Log unexpected errors and throw a generic 500
        console.error(`Error loading photos for album ${slug}:`, err);
        throw error(500, 'Could not load album photos');
    }

    // Get album metadata
    const { albumName, albumDescription } = ALBUM_MAP[slug];

    // Sort items if needed, e.g., numerically based on the number in the filename
    albumItems.sort((a, b) => {
        const numA = parseInt(a.photoUrl.match(/-(\d+)\.\w+$/i)?.[1] || '0');
        const numB = parseInt(b.photoUrl.match(/-(\d+)\.\w+$/i)?.[1] || '0');
        return numA - numB;
    });


    return {
        albumItems, // Contains pairs of { photoUrl, thumbUrl }
        albumName,
        albumDescription,
        slug // Pass slug along if needed by the page component
    };
}