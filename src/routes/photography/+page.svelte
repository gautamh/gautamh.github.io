<script>
    import Album from './Album.svelte';
    let albums = [
        {
            "title": "No Kings",
            "album_desc": "Photos from the No Kings protest in New York City on April 19, 2025.",
            "img_src": "/photos/no-kings/no_kings-36.jpg",
            "link": "/photography/no-kings"
        },
        {
            "title": "Cherry Blossoms 2025", 
            "album_desc": "Photos of Spring 2025 cherry blossoms in Central Park.",
            "img_src": "/photos/site_photos-2.jpg",
            "link": "/photography/cherry-blossoms"
        },
    ];
</script>
<svelte:head>
    <title>Photography | Gautam Hathi</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" integrity="sha256-Vzbj7sDDS/woiFS3uNKo8eIuni59rjyNGtXfstRzStA=" crossorigin="anonymous" />
    <style lang="scss">
        @import "../../lib/photography/photography.scss";
    </style>
</svelte:head>
<body>
    <div class="row main-content">
        <div class="col-md-10 offset-md-1" id="photos">
            <h1>Photography</h1>
        </div>
        <div class="row col-md-10 offset-md-1"> 
            {#each albums as album}
                <Album title={album.title} album_desc={album.album_desc} img_src={album.img_src} link={album.link}/>
            {/each}
        </div>
    </div>
</body>