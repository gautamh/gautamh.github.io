
    <script>
        import Project from './Project.svelte';
        let projects = [
        {
            "title": "ML for data generation",
            "project_desc": "A paper based on a project I worked on at Google to generate structured data by training Variational Auto Encoders.",
            "img_src": "alala_path.PNG",
            "link": "https://arxiv.org/abs/1904.10446"
        },
        {
            "title": "Who The Hill", 
            "project_desc": "A facial recognition app that allowed reporters to snap a picture of a member of Congress, text it to our service, and get a name back for that member. Co-created as an intern on the New York Times' Interactive News team.",
            "img_src": "shazongress.png",
            "link": "https://open.nytimes.com/how-the-new-york-times-uses-software-to-recognize-members-of-congress-29b46dd426c7"
        },
        {
            "title": "FactPopUp",
            "project_desc": "A Chrome extension used by PolitiFact to deliver live fact checking during the 2016 Presidential Debates. Created for the Duke Reporters' Lab.",
            "img_src": "factpopup.jpg",
            "link": "https://www.poynter.org/news/tired-second-screen-tool-will-live-fact-check-debate-you"
        },
        {
            "title": "StoryTracer",
            "project_desc": "A Chrome extension to identify the source information that a web page is based upon. Created for the Duke Reporters' Lab.",
            "img_src": "storytracer.png",
            "link": "https://reporterslab.org/storytracer-google-chrome-extension-original-source/"
        },
        {
            "title": "DSG Voting Networks",
            "project_desc": "A news article I wrote analyzing voting networks and phantom political parties in Duke's student government.",
            "img_src": "dsg_voting_networks.png",
            "link": "https://www.dukechronicle.com/article/2016/05/dsg-records-show-networks-of-voting-patterns"
        },
        {
            "title": "Talking Points",
            "project_desc": "A data analysis and visualization project that looked at speeches made by members of Congress. This was a class project that used to live on a website but still has interesting components available to look at.",
            "img_src": "talking_points.PNG",
            "link": "https://app.powerbi.com/view?r=eyJrIjoiZjJjOWExZjUtYzAwMS00NmJhLWJhNWEtZjZmYjUxYWVjNzY2IiwidCI6IjYxOWUzOWZmLWQ2MTItNDFmZi1iYjEzLTI3Mjk0Nzg2MjQ4MSIsImMiOjN9"
        },
        {
            "title": "Window Seat",
            "project_desc": "A quick analysis of which side of the plane has the better view.",
            "img_src": "window_seat.PNG",
            "link": "https://gautamh.github.io/window-seat/"
        }
    ];
    </script>
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
                    <img class="header-img" src="../../GKH_FB_4_3.jpg"/>
                </div>
                
            </div>
            <div class="row main-content">
                <div class="col-md-10 offset-md-1" id="projects">
                    <h1>Projects</h1>
                </div>
                <div class="row col-md-10 offset-md-1"> 
                    {#each projects as project, i}
                        <Project title='{project.title}' project_desc={project.project_desc} img_src={project.img_src} link={project.link}/>
                    {/each}
                </div>
                <div class="col-md-10 offset-md-1" id="writing">
                    <h1>Writing</h1>
                </div>
                <div class="col-md-10 offset-md-1">
                    <p>See also the <a href="../../thoughts/index.html">Thoughts</a> page.</p>
                </div>
                <div class="row col-md-10 offset-md-1">
                    <div class="col-sm-6 col-md-4">
                        <blockquote class="blockquote">
                            <h3>&#39;I&#39;ve not encountered a process...that is less fair&#39;</h3> 
                            <p class="mb-0">"&#39;I&#39;ve not encountered a process or an administration of the process in any school that is less fair than the undergraduate conduct board hearings that Duke students go through,&#39; said Robert Ekstrand, Law School &#39;98—a Durham lawyer who was involved in the lacrosse case and has worked on hundreds of disciplinary cases involving students at Duke and institutions across the country."</p>
                            <footer class="blockquote-footer"><cite title="Source Title">Duke Chronicle</cite></footer>
                            <p><a href="https:&#x2F;&#x2F;www.dukechronicle.com&#x2F;article&#x2F;2017&#x2F;05&#x2F;ive-not-encountered-a-process-that-is-less-fair" class="btn btn-default" role="button">Read...</a></p> 
                        </blockquote>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <blockquote class="blockquote">
                            <h3>&#39;A very young person in the White House on a power trip&#39;</h3> 
                            <p class="mb-0">"Stephen Miller’s path from Duke to Capitol Hill to the White House foreshadowed his actions in the Trump administration."</p>
                            <footer class="blockquote-footer"><cite title="Source Title">Duke Chronicle</cite></footer>
                            <p><a href="https:&#x2F;&#x2F;www.dukechronicle.com&#x2F;article&#x2F;2017&#x2F;01&#x2F;very-young-person-in-the-white-house-on-a-power-trip" class="btn btn-default" role="button">Read...</a></p> 
                        </blockquote>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <blockquote class="blockquote">
                            <h3>Duke community feels threat from Trump</h3> 
                            <p class="mb-0">"Although the volatility in the stock market was temporary, the anxiety flowing through campus was more permanent. Student activists who had spent years working for policy goals shared with Hillary Clinton saw their hopes come tumbling down, and students in groups—including Muslims, Latinx, immigrants and women—that had borne the brunt of Donald Trump’s vicious attacks saw him as a personal threat."</p>
                            <footer class="blockquote-footer"><cite title="Source Title">Duke Chronicle</cite></footer>
                            <p><a href="https:&#x2F;&#x2F;www.dukechronicle.com&#x2F;article&#x2F;2016&#x2F;11&#x2F;duke-community-feels-threat-from-trump" class="btn btn-default" role="button">Read...</a></p> 
                        </blockquote>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <blockquote class="blockquote">
                            <h3>The Rules of the Internet Game</h3> 
                            <p class="mb-0">"How billions of people around the world interact with, profit from, or get damaged by the internet will be determined by the interactions between the lobbying dollars in Silicon Valey and the egos in Washington DC."</p>
                            <footer class="blockquote-footer"><cite title="Source Title">Duke Political Review</cite></footer>
                            <p><a href="https:&#x2F;&#x2F;issuu.com&#x2F;dukedpr&#x2F;docs&#x2F;dpr_2015_spring_web&#x2F;8" class="btn btn-default" role="button">Read...</a></p> 
                        </blockquote>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <blockquote class="blockquote">
                            <h3>A Clash of Resurgent Empires</h3> 
                            <p class="mb-0">"India and China have been fighting over their border for more than fifty years. There may be signs that things are changing, but is either country willing to find an agreement, and could things really be getting worse?"</p>
                            <footer class="blockquote-footer"><cite title="Source Title">Duke Political Review</cite></footer>
                            <p><a href="https:&#x2F;&#x2F;issuu.com&#x2F;dukedpr&#x2F;docs&#x2F;dprfall2014_1&#x2F;8" class="btn btn-default" role="button">Read...</a></p> 
                        </blockquote>
                    </div>
                </div>
                <div class="col-md-10 offset-md-1" id="photos">
                    <h1>Photography</h1>
                    <p>In my free time I like to take photos. Here are some samples (click to enlarge and view in a gallery):</p>
                </div>
                <div class="row col-md-10 offset-md-1" id="photo-imgs"> 
                    <a href="photos&#x2F;site_photos-1.jpg" data-fancybox="gallery" data-caption="Sunset over Goat Rocks">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-1.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-2.jpg" data-fancybox="gallery" data-caption="Into the lens">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-2.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-3.jpg" data-fancybox="gallery" data-caption="Looking into the sunset">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-3.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-4.jpg" data-fancybox="gallery" data-caption="San Francisco City Hall">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-4.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-5.jpg" data-fancybox="gallery" data-caption="A tree in snow">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-5.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-6.jpg" data-fancybox="gallery" data-caption="Sihlpromenade, Zürich">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-6.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-35.jpg" data-fancybox="gallery" data-caption="Rearview mirror">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-35.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-8.jpg" data-fancybox="gallery" data-caption="Shadows on the wall">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-8.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-9.jpg" data-fancybox="gallery" data-caption="A swan">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-9.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-10.jpg" data-fancybox="gallery" data-caption="Leavenworth, WA">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-10.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-11.jpg" data-fancybox="gallery" data-caption="Star trails">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-11.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-12.jpg" data-fancybox="gallery" data-caption="A mosque">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-12.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-13.jpg" data-fancybox="gallery" data-caption="Dana, Jordan">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-13.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-14.jpg" data-fancybox="gallery" data-caption="Stars over Wadi Rum">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-14.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-15.jpg" data-fancybox="gallery" data-caption="Grossmünster">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-15.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-16.jpg" data-fancybox="gallery" data-caption="Whirling Dervishes">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-16.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-34.jpg" data-fancybox="gallery" data-caption="Snowfall">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-34.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-36.jpg" data-fancybox="gallery" data-caption="Fall scatterplots">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-36.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-20.jpg" data-fancybox="gallery" data-caption="Market Street">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-20.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-21.jpg" data-fancybox="gallery" data-caption="Sunrise over San Francisco">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-21.jpg" data-holder-rendered="true"> 
                    </a>
                    <a href="photos&#x2F;site_photos-25.jpg" data-fancybox="gallery" data-caption="Sunset over the Hudson">
                        <img class="photo-img" src="../../thumbs&#x2F;site_photos_t-25.jpg" data-holder-rendered="true"> 
                    </a>
                </div>
            </div>
    