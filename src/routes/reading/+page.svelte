<svelte:head>
    <title>Reading | Gautam Hathi</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" integrity="sha256-Vzbj7sDDS/woiFS3uNKo8eIuni59rjyNGtXfstRzStA=" crossorigin="anonymous" />
    <style lang="scss">
        @import "../../lib/thoughts/thoughts.scss";
    </style>
</svelte:head>

<script>
    let books = [
        {
            title: "Troy",
            goodreads_link: "https://www.goodreads.com/book/show/53443339-troy",
            author: "Stephen Fry",
        },
        {
            title: "Interview With History",
            goodreads_link: "https://www.goodreads.com/en/book/show/70688",
            author: "Oriana Fallaci",
        },
        {
            title: "G-Man",
            goodreads_link: "https://www.goodreads.com/en/book/show/60417618",
            author: "Beverly Gage",
            notes_link: "https://drive.google.com/file/d/12reWshSXDSVm-L1Ht7xbZxnpzj9t7E0X/view?usp=sharing"
        },
        {
            title: "The Doctor and the Saint",
            goodreads_link: "https://www.goodreads.com/book/show/31945021-the-doctor-and-the-saint",
            author: "Arundhati Roy",
            notes_link: "https://drive.google.com/file/d/1xurLRNJWdgnxpoA1eYBi9TvCTaAAejNe/view?usp=sharing"
        },
        {
            title: "Memoirs of Hadrian",
            goodreads_link: "https://www.goodreads.com/book/show/12172.Memoirs_of_Hadrian",
            author: "Marguerite Yourcenar",
        },
        {
            title: "De Gaulle",
            goodreads_link: "https://www.goodreads.com/book/show/39204022-de-gaulle",
            author: "Julian Jackson",
            notes_link: "https://drive.google.com/file/d/1V3EcMuqG2hhPgTGRV5_xJFSyNbvbrLZX/view?usp=sharing"
        },
        {
            title: "Kaikeyi",
            goodreads_link: "https://www.goodreads.com/book/show/57127277-kaikeyi",
            author: "Vaishnavi Patel",
        },
        {
            title: "Blowout",
            goodreads_link: "https://www.goodreads.com/book/show/60596882-blowout",
            author: "Rachel Maddow",
            notes_link: "https://drive.google.com/file/d/1ArglMZ9Niqg62KJO4rqUcdn8TdQygj3T/view?usp=sharing"
        },
        {
            title: "Tarkin",
            goodreads_link: "https://www.goodreads.com/book/show/22012250-tarkin",
            author: "James Luceno",
        },
        {
            title: "Watergate",
            goodreads_link: "https://www.goodreads.com/en/book/show/56898146",
            author: "Garrett M. Graff",
            notes_link: "https://drive.google.com/file/d/1MkkfJlBxIufp3T5m4SXkvLHsAqLjJf2n/view?usp=sharing"
        },
        {
            title: "The Burning God",
            goodreads_link: "https://www.goodreads.com/en/book/show/45857086",
            author: "R.F. Kuang",
        },
        {
            title: "China's Gilded Age",
            author: "Yuen Yuen Ang",
            goodreads_link: "https://www.goodreads.com/en/book/show/49105000",
            notes_link: "https://drive.google.com/file/d/1D7gbdgkq7ivvnYz8kO3DvFBRE_u1GIAm/view?usp=sharing",
        },
        {
            title: "Consider Phlebas",
            goodreads_link: "https://www.goodreads.com/book/show/8935689-consider-phlebas",
            author: "Ian M. Banks",
        },
        {
            title: "The End of Everything",
            goodreads_link: "https://www.goodreads.com/book/show/52767659-the-end-of-everything",
            author: "Katie Mack",
            notes_link: "https://drive.google.com/file/d/16pUbMAz6va_CpuLech5sccrzIDKTp88h/view?usp=share_link"
        },
        {
            title: "The Dragon Republic",
            goodreads_link: "https://www.goodreads.com/en/book/show/41118857",
            author: "R.F. Kuang",
        },
        {
            title: "Rainbow Six",
            goodreads_link: "https://www.goodreads.com/en/book/show/5720",
            author: "Tom Clancy",
        },
        {
            title: "Liar's Poker",
            goodreads_link: "https://www.goodreads.com/book/show/7865083-liar-s-poker",
            author: "Michael Lewis",
            notes_link: "https://drive.google.com/file/d/1Yk2wr3hCvJnhMNXdedyWnG3s3vcewIzd/view?usp=share_link"
        },
        {
            title: "What If? 2",
            goodreads_link: "https://www.goodreads.com/en/book/show/60190659",
            author: "Randall Munroe",
        },
        {
            title: "The Poppy War",
            goodreads_link: "https://www.goodreads.com/book/show/35068705-the-poppy-war",
            author: "R.F. Kuang",
        },
        {
            title: "The Name of the Rose",
            goodreads_link: "https://www.goodreads.com/book/show/119073.The_Name_of_the_Rose",
            author: "Umberto Eco",
        },
        {
            title: "The Patient Assassin",
            goodreads_link: "https://www.goodreads.com/book/show/40539176-the-patient-assassin",
            author: "Anita Anand",
            notes_link: "https://drive.google.com/file/d/1alvfW3feIh6GlxK56yYObGxIOX0W-wjE/view?usp=share_link"
        },
        {
            title: "The Final Cut",
            goodreads_link: "https://www.goodreads.com/en/book/show/870764",
            author: "Michael Dobbs",
        },
        {
            title: "To Play the King",
            goodreads_link: "https://www.goodreads.com/book/show/870760.To_Play_the_King",
            author: "Michael Dobbs",
        },
        {
            title: "House of Cards",
            goodreads_link: "https://www.goodreads.com/book/show/1408078.House_of_Cards",
            author: "Michael Dobbs",
        },
        {
            title: "American Bonds",
            goodreads_link: "https://www.goodreads.com/en/book/show/42585076",
            author: "Sarah L. Quinn",
            notes_link: "https://drive.google.com/file/d/1mw0Mp-jPV-ztgeAKRBQWnZn4cNK7syGl/view?usp=share_link"
        },
        {
            title: "Rogues",
            goodreads_link: "https://www.goodreads.com/book/show/59148726-rogues",
            author: "Patrick Radden Keefe",
        },
        {
            title: "Debt",
            goodreads_link: "https://www.goodreads.com/book/show/6617037-debt",
            author: "David Graeber",
            notes_link: "https://drive.google.com/file/d/12T5mrszh0wiNON6Mv2rrN35f74EWFqAm/view?usp=share_link"
        },
        {
            title: "The Witness for the Dead",
            goodreads_link: "https://www.goodreads.com/en/book/show/41302953",
            author: "Katherine Addison",
        },
        {
            title: "The Chancellor",
            goodreads_link: "https://www.goodreads.com/en/book/show/56897484",
            author: "Kati Marton",
            notes_link: "https://drive.google.com/file/d/1usMmrMZy2viCLRwqFOrjE8_rnQcWzC8q/view?usp=share_link"
        },
        {
            title: "The Goblin Emperor",
            goodreads_link: "https://www.goodreads.com/book/show/17910048-the-goblin-emperor",
            author: "Katherine Addison",
        },
        {
            title: "The Only Plane in the Sky",
            goodreads_link: "https://www.goodreads.com/book/show/43821581-the-only-plane-in-the-sky",
            author: "Garrett M. Graff",
            notes_link: "https://drive.google.com/file/d/1LqOzKzpKj04LK7cea1fLefgQDbDx-TaV/view?usp=share_link"
        },
        {
            title: "The Origins of Totalitarianism",
            goodreads_link: "https://www.goodreads.com/en/book/show/396931",
            author: "Hannah Arendt",
            notes_link: "https://drive.google.com/file/d/1JxorX4BphnbRWZOeBOeVFds3yigOYLkJ/view?usp=sharing"
        },
        {
            title: "Bring the War Home",
            goodreads_link: "https://www.goodreads.com/en/book/show/36228413",
            author: "Kathleen Belew",
            notes_link: "https://drive.google.com/file/d/1PZG3YZZ0xXRHeCYE369qqRu9Dvd5gJjP/view?usp=share_link"
        },
        {
            title: "Imagining India",
            goodreads_link: "https://www.goodreads.com/book/show/5501276-imagining-india",
            author: "Nandan Nilekani",
            notes_link: "https://drive.google.com/file/d/1SLu4bKRBUa-6pq8Wdx_dVZEEJcwRmBCL/view?usp=share_link"
        },
        {
            title: "Return of a King",
            goodreads_link: "https://www.goodreads.com/en/book/show/13454654",
            author: "William Dalrymple",
            notes_link: "https://drive.google.com/file/d/1dK1gOfrnKePSa3Iv2u4Jlv-M_FbATj2V/view?usp=share_link"
        },
        {
            title: "Midnight in Chernobyl",
            goodreads_link: "https://www.goodreads.com/book/show/40538681-midnight-in-chernobyl",
            author: "Adam Higginbotham",
            notes_link: "https://drive.google.com/file/d/1P09Vst6KQxD4ptSJNdB7HdddZjUGgxwY/view?usp=share_link"
        },
        {
            title: "Invisible Cities",
            goodreads_link: "https://www.goodreads.com/book/show/9809.Invisible_Cities",
            author: "Italo Calvino",
        },
        {
            title: "The Code Breaker",
            goodreads_link: "https://www.goodreads.com/en/book/show/54968118",
            author: "Walter Isaacson",
            notes_link: "https://drive.google.com/file/d/15w9LH2ZIhSK9vVmSn6FsvtTAfBOJGmg8/view?usp=share_link"
        },
        {
            title: "How Long 'til Black Future Month",
            goodreads_link: "https://www.goodreads.com/book/show/40855636-how-long-til-black-future-month",
            author: "N.K. Jemisin",
        },
        {
            title: "A Wizard of Earthsea",
            goodreads_link: "https://www.goodreads.com/book/show/13642.A_Wizard_of_Earthsea",
            author: "Ursula K. Le Guin",
        },
    ];
</script>

<body>
    <article>
        <h1>
            Reading
        </h1>
        <section>
            <p>Here are (most of) the things I've been reading, going back some indeterminate amount of time, along with my notes for (most of) the non-fiction stuff:</p>
        </section>
        <ul>
            {#each books as book}
            <li>
                <em><a href={book.goodreads_link} target="_blank" rel="noopener noreferrer">{book.title}</a></em>, {book.author} {#if "notes_link" in book && book.notes_link !== ""}<a href={book.notes_link} target="_blank" rel="noopener noreferrer">(Notes)</a>{/if}
            </li>
            {/each}
        </ul>
    </article>
</body>
