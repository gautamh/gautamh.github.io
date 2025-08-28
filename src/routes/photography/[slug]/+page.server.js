import fs from 'fs';
import path from 'path';
import { error } from '@sveltejs/kit';

const photosBaseDir = path.resolve('static/photos');
const photosPublicPath = '/photos'; // Base URL path for full photos
const thumbsBaseDir = path.resolve('static/thumbs');
const thumbsPublicPath = '/thumbs'; // Base URL path for thumbnails

const ALBUM_MAP = {
  "summer-25": {
      albumName: "Summer 2025",
      albumDescription: "Summer 2025 photos (that aren't in the other collections)",
    },
    "window-sunsets-25": {
      albumName: "Window Sunsets 2025",
      albumDescription: "From late May through mid-July, the sun sets outside my window. If it's not too cloudy, there are often some nice pictures that result.",
    },
    "no-kings-june-2025": {
      albumName: "No Kings Protest (June 2025)",
      albumDescription: "Photos from the No Kings NYC protest on June 14, 2025. This was the protest that coincided with Trump's birthday parade and also Flag Day (which may explain the large number of American flags that people had at the protest in particular).",
    },
    "almost-manhattanhenge-may-25": {
      albumName: "(Almost) Manhattanhenge May 2025",
      albumDescription: "Not-quite-Manhattanhenge photos from May 2025, taken at Tudor City Bridge. The first set of photos are from a couple of days before Manhattanhenge, when the sun didn't quite line up with the streets but the weather was good. The second set of photos are from the day in May when Manhattanhenge was supposed to happen but clouds (just barely) got in the way.",
    },
    "spring-25": {
      albumName: "Spring 2025",
      albumDescription: "Spring 2025 photos",
    },
    "cherry-blossoms": {
      albumName: "NYC Cherry Blossoms 2025",
      albumDescription: "Cherry trees in bloom across Central Park in NYC during the spring of 2025",
    },
    "no-kings": {
      albumName: "No Kings Protest (April 2025)",
      albumDescription: "Photos from the No Kings NYC protest on April 19, 2025 (note that this is a smaller, earlier protest than the <a href='./no-kings-june-2025'>big No Kings protest on June 14, 2025</a>)",
    },
    "hands-off": {
      albumName: "Hands Off Protest",
      albumDescription: "Photos from the Hands Off NYC protest on April 5, 2025",
    },
    "winter-2425": {
      albumName: "Winter 2024-25",
      albumDescription: "Winter 2024-25 photos",
    },
    "fall-24": {
      albumName: "Fall 2024",
      albumDescription: "Fall 2024 photos",
    },
    "summer-24": {
      albumName: "Summer 2024",
      albumDescription: "Summer 2024 photos",
    },
    "cherry-blossoms-24": {
      albumName: "NYC Cherry Blossoms 2024",
      albumDescription: "Cherry trees in bloom across Central Park in NYC during the spring of 2024",
    },
    "eclipse-24": {
      albumName: "2024 Solar Eclipse",
      albumDescription: "Photos of the April 8, 2024 total solar eclipse",
    },
    "winter-2324": {
      albumName: "Winter 2023-24",
      albumDescription: "Winter 2023-24 photos",
    },
    "fall-23": {
      albumName: "Fall 2023",
      albumDescription: "Fall 2023 photos",
    },
    "manhattanhenge-23": {
      albumName: "Manhattanhenge 2023",
      albumDescription: "Photos from Manhattanhenge in May 2023. Some of these photos are taken from the Tudor City Bridge while others are from the 14th St side of Union Square.",
    },
    "winter-2223": {
      albumName: "Winter 2022-23",
      albumDescription: "Winter 2022-23 photos",
    },
    "fall-22": {
      albumName: "Fall 2022",
      albumDescription: "Fall 2022 photos",
    },
    "summer-22": {
      albumName: "Summer 2022",
      albumDescription: "Summer 2022 photos",
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