
    <script>
        import Project from './Project.svelte';
        import Writing from './Writing.svelte';
        import Photo from './Photo.svelte';
        // import alala_path from '/alala_path.PNG';
        let projects = [
        {
            "title": "ML for data generation",
            "project_desc": "A paper based on a project I worked on at Google to generate structured data by training Variational Auto Encoders.",
            "img_src": "/img/alala_path.PNG",
            "link": "https://arxiv.org/abs/1904.10446"
        },
        {
            "title": "Who The Hill", 
            "project_desc": "A facial recognition app that allowed reporters to snap a picture of a member of Congress, text it to our service, and get a name back for that member. Co-created as an intern on the New York Times' Interactive News team.",
            "img_src": "/img/shazongress.png",
            "link": "https://open.nytimes.com/how-the-new-york-times-uses-software-to-recognize-members-of-congress-29b46dd426c7"
        },
        {
            "title": "FactPopUp",
            "project_desc": "A Chrome extension used by PolitiFact to deliver live fact checking during the 2016 Presidential Debates. Created for the Duke Reporters' Lab.",
            "img_src": "/img/factpopup.jpg",
            "link": "https://www.poynter.org/news/tired-second-screen-tool-will-live-fact-check-debate-you"
        },
        {
            "title": "StoryTracer",
            "project_desc": "A Chrome extension to identify the source information that a web page is based upon. Created for the Duke Reporters' Lab.",
            "img_src": "/img/storytracer.png",
            "link": "https://reporterslab.org/storytracer-google-chrome-extension-original-source/"
        },
        {
            "title": "DSG Voting Networks",
            "project_desc": "A news article I wrote analyzing voting networks and phantom political parties in Duke's student government.",
            "img_src": "/img/dsg_voting_networks.png",
            "link": "https://www.dukechronicle.com/article/2016/05/dsg-records-show-networks-of-voting-patterns"
        },
        {
            "title": "Talking Points",
            "project_desc": "A data analysis and visualization project that looked at speeches made by members of Congress. This was a class project that used to live on a website but still has interesting components available to look at.",
            "img_src": "/img/talking_points.PNG",
            "link": "https://app.powerbi.com/view?r=eyJrIjoiZjJjOWExZjUtYzAwMS00NmJhLWJhNWEtZjZmYjUxYWVjNzY2IiwidCI6IjYxOWUzOWZmLWQ2MTItNDFmZi1iYjEzLTI3Mjk0Nzg2MjQ4MSIsImMiOjN9"
        },
        {
            "title": "Window Seat",
            "project_desc": "A quick analysis of which side of the plane has the better view.",
            "img_src": "/img/window_seat.PNG",
            "link": "https://gautamh.github.io/window-seat/"
        }
    ];
    let writings = [
        {
            "story_title": "'I've not encountered a process...that is less fair'",
            "pullquote": "'I've not encountered a process or an administration of the process in any school that is less fair than the undergraduate conduct board hearings that Duke students go through,' said Robert Ekstrand, Law School '98—a Durham lawyer who was involved in the lacrosse case and has worked on hundreds of disciplinary cases involving students at Duke and institutions across the country.",
            "source": "Duke Chronicle",
            "link": "https://www.dukechronicle.com/article/2017/05/ive-not-encountered-a-process-that-is-less-fair"
        },
        {
            "story_title": "'A very young person in the White House on a power trip'",
            "pullquote": "Stephen Miller’s path from Duke to Capitol Hill to the White House foreshadowed his actions in the Trump administration.",
            "source": "Duke Chronicle",
            "link": "https://www.dukechronicle.com/article/2017/01/very-young-person-in-the-white-house-on-a-power-trip"
        },
        {
            "story_title": "Duke community feels threat from Trump",
            "pullquote": "Although the volatility in the stock market was temporary, the anxiety flowing through campus was more permanent. Student activists who had spent years working for policy goals shared with Hillary Clinton saw their hopes come tumbling down, and students in groups—including Muslims, Latinx, immigrants and women—that had borne the brunt of Donald Trump’s vicious attacks saw him as a personal threat.",
            "source": "Duke Chronicle",
            "link": "https://www.dukechronicle.com/article/2016/11/duke-community-feels-threat-from-trump"
        },
        {
            "story_title": "The Rules of the Internet Game",
            "pullquote": "How billions of people around the world interact with, profit from, or get damaged by the internet will be determined by the interactions between the lobbying dollars in Silicon Valey and the egos in Washington DC.",
            "source": "Duke Political Review",
            "link": "https://issuu.com/dukedpr/docs/dpr_2015_spring_web/8"
        },
        {
            "story_title": "A Clash of Resurgent Empires",
            "pullquote": "India and China have been fighting over their border for more than fifty years. There may be signs that things are changing, but is either country willing to find an agreement, and could things really be getting worse?",
            "source": "Duke Political Review",
            "link": "https://issuu.com/dukedpr/docs/dprfall2014_1/8"
        }
    ];
    let photos = [
        {
            "img_src": "/photos/site_photos-44.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-44.jpg",
            "caption": "Leaning into Manhattanhenge"
        },
        {
            "img_src": "/photos/site_photos-48.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-48.jpg",
            "caption": "The Little Red Lighthouse"
        },
        {
            "img_src": "/photos/site_photos-1.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-1.jpg",
            "caption": "Sunset over Goat Rocks"
        },
        {
            "img_src": "/photos/site_photos-2.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-2.jpg",
            "caption": "Into the lens"
        },
        {
            "img_src": "/photos/site_photos-3.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-3.jpg",
            "caption": "Looking into the sunset"
        },
        {
            "img_src": "/photos/site_photos-4.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-4.jpg",
            "caption": "San Francisco City Hall"
        },
        {
            "img_src": "/photos/site_photos-5.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-5.jpg",
            "caption": "A tree in snow"
        },
        {
            "img_src": "/photos/site_photos-6.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-6.jpg",
            "caption": "Sihlpromenade, Zürich"
        },
        {
            "img_src": "/photos/site_photos-51.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-51.jpg",
            "caption": "Corona"
        },
        {
            "img_src": "/photos/site_photos-8.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-8.jpg",
            "caption": "Shadows on the wall"
        },
        {
            "img_src": "/photos/site_photos-9.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-9.jpg",
            "caption": "A swan"
        },
        {
            "img_src": "/photos/site_photos-43.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-43.jpg",
            "caption": "Grey mist"
        },
        {
            "img_src": "/photos/site_photos-52.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-52.jpg",
            "caption": "Eclipse at Lac Fraser"
        },
        {
            "img_src": "/photos/site_photos-49.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-49.jpg",
            "caption": "Tree Trio"
        },
        {
            "img_src": "/photos/site_photos-14.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-14.jpg",
            "caption": "Stars over Wadi Rum"
        },
        {
            "img_src": "/photos/site_photos-16.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-16.jpg",
            "caption": "Whirling Dervishes"
        },
        {
            "img_src": "/photos/site_photos-34.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-34.jpg",
            "caption": "Snowfall"
        },
        {
            "img_src": "/photos/site_photos-47.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-47.jpg",
            "caption": "Fall Spectra"
        },
        {
            "img_src": "/photos/site_photos-20.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-20.jpg",
            "caption": "Market Street"
        },
        {
            "img_src": "/photos/site_photos-53.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-53.jpg",
            "caption": "Cherry Blossoms"
        },
        {
            "img_src": "/photos/site_photos-45.jpg",
            "img_src_thumb": "/thumbs/site_photos_t-45.jpg",
            "caption": "Manhattanhenge at Madame Tussauds"
        }
    ];
    </script>
    <svelte:head>
        <title>Gautam Hathi</title>
    </svelte:head>
    <div class="row header">
        <div class="header-left col-md-7 col-sm-12 offset-md-1">
            <div class="jumbotron">
                <h1>Gautam Hathi</h1>
                <hr/>
                <h4><i>find me on Twitter <a href="https://twitter.com/gautamhathi">@gautamhathi</a> and on <a href="https://github.com/gautamh">GitHub</a></i></h4>
                <h5><i>also maybe try <a rel="me" href="https://mastodon.social/@gautamh">Mastodon</a></i></h5>
            </div>
        </div>
        <div class="col-md-3 header-right"> 
            <img class="header-img" src="/img/GKH_FB_4_3.jpg"/>
        </div>
        
    </div>
    <div class="row main-content">
        <div class="col-md-10 offset-md-1" id="projects">
            <h1>Projects</h1>
        </div>
        <div class="row col-md-10 offset-md-1"> 
            {#each projects as project}
                <Project title={project.title} project_desc={project.project_desc} img_src={project.img_src} link={project.link}/>
            {/each}
        </div>
        <div class="col-md-10 offset-md-1" id="writing">
            <h1>Writing</h1>
        </div>
        <div class="col-md-10 offset-md-1">
            <p>See also the <a href="../../thoughts">Thoughts</a> page.</p>
        </div>
        <div class="row col-md-10 offset-md-1">
            {#each writings as writing}
                <Writing title={writing.story_title} pullquote={writing.pullquote} source={writing.source} link={writing.link} />
            {/each}
        </div>
        <div class="col-md-10 offset-md-1" id="photos">
            <h1>Photography</h1>
            <p>In my free time I like to take photos. Here are some samples (click to enlarge and view in a gallery):</p>
        </div>
        <div class="row col-md-10 offset-md-1" id="photo-imgs"> 
            {#each photos as photo}
                <Photo img_src={photo.img_src} caption={photo.caption} img_src_thumb={photo.img_src_thumb} />
            {/each}
        </div>
    </div>
    