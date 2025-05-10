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
            "img_src": "/photos/cherry-blossoms/cherry_blossoms-25.jpg",
            "link": "/photography/cherry-blossoms"
        },
        {
            "title": " Hands Off",
            "album_desc": "Photos from the Hands Off protest in New York City on April 5, 2025.",
            "img_src": "/photos/hands-off/hands_off-46.jpg",
            "link": "/photography/hands-off"
        },
        {
            "title": " Winter 2024-25",
            "album_desc": "Winter 2024-25 photos.",
            "img_src": "/photos/winter-2425/winter_2425-10.jpg",
            "link": "/photography/winter-2425"
        },
        {
            "title": " Fall 2024",
            "album_desc": "Fall 2024 photos.",
            "img_src": "/photos/fall-24/fall_24-14.jpg",
            "link": "/photography/fall-24"
        },
        {
            "title": " Summer 2024",
            "album_desc": "Summer 2024 photos.",
            "img_src": "/photos/summer-24/summer_24-7.jpg",
            "link": "/photography/summer-24"
        },
        {
            "title": "Cherry Blossoms 2024", 
            "album_desc": "Photos of Spring 2024 cherry blossoms in Central Park.",
            "img_src": "/photos/cherry-blossoms-24/cherry_blossoms_24-6.jpg",
            "link": "/photography/cherry-blossoms-24"
        },
        {
            "title": "2024 Solar Eclipse", 
            "album_desc": "Photos of the April 8, 2024 total solar eclipse.",
            "img_src": "/photos/eclipse-24/eclipse_24-18.jpg",
            "link": "/photography/eclipse-24"
        },
        {
            "title": " Winter 2023-24",
            "album_desc": "Winter 2023-24 photos.",
            "img_src": "/photos/winter-2324/winter_2324-1.jpg",
            "link": "/photography/winter-2324"
        },
        {
            "title": "Fall 2023",
            "album_desc": "Fall 2023 photos.",
            "img_src": "/photos/fall-23/fall_23-3.jpg",
            "link": "/photography/fall-23"
        },
        {
            "title": "Manhattanhenge 2023",
            "album_desc": "Manhattanhenge 2023 photos.",
            "img_src": "/photos/manhattanhenge-23/manhattanhenge_23-8.jpg",
            "link": "/photography/manhattanhenge-23"
        },
        {
            "title": " Winter 2022-23",
            "album_desc": "Winter 2022-23 photos.",
            "img_src": "/photos/winter-2223/winter_2223-6.jpg",
            "link": "/photography/winter-2223"
        },
        {
            "title": "Fall 2022",
            "album_desc": "Fall 2022 photos.",
            "img_src": "/photos/fall-22/fall_22-5.jpg",
            "link": "/photography/fall-22"
        },
        {
            "title": " Summer 2022",
            "album_desc": "Summer 2022 photos.",
            "img_src": "/photos/summer-22/summer_22-5.jpg",
            "link": "/photography/summer-22"
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