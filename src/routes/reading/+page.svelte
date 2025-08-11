<svelte:head>
    <title>Reading | Gautam Hathi</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" integrity="sha256-Vzbj7sDDS/woiFS3uNKo8eIuni59rjyNGtXfstRzStA=" crossorigin="anonymous" />
    <style lang="scss">
        @import "../../lib/thoughts/thoughts.scss";
    </style>
</svelte:head>

<script>
    let books2025 = [
        {
            title: "The Tomb of Dragons",
            goodreads_link: "https://www.goodreads.com/book/show/211004174-the-tomb-of-dragons",
            author: "Katherine Addison",
        },
        {
            title: "The Golden Road",
            goodreads_link: "https://www.goodreads.com/en/book/show/201608148-the-golden-road",
            author: "William Dalrymple",
            notes_link: "https://drive.google.com/file/d/1yXaJJ0FFT5-L7rLZYg8JRnHdXAr4t4_Q/view?usp=sharing"
        },
        {
            title: "Five Ways to Forgiveness",
            goodreads_link: "https://www.goodreads.com/book/show/36366224-five-ways-to-forgiveness",
            author: "Ursula K. Le Guin",
        },
        {
            title: "Bad Samaritans",
            goodreads_link: "https://www.goodreads.com/book/show/1032019.Bad_Samaritans",
            author: "Ha-Joon Chang",
            notes_link: "https://drive.google.com/file/d/1mrR6aP9u3EueZi4-k4tKKCI9TC2krAOk/view?usp=sharing"
        },
        {
            title: "The Good Shepherd",
            goodreads_link: "https://www.goodreads.com/book/show/42748909-the-good-shepherd",
            author: "C.S. Forester",
        },
        {
            title: "A Desolation Called Peace",
            goodreads_link: "https://www.goodreads.com/book/show/45154547-a-desolation-called-peace",
            author: "Arkady Martine",
        },
        {
            title: "The Death and Life of Great American Cities",
            goodreads_link: "https://www.goodreads.com/book/show/30833.The_Death_and_Life_of_Great_American_Cities",
            author: "Jane Jacobs",
            notes_link: "https://drive.google.com/file/d/1NA6hOV-b7yZVW6GkxRO013NaFXrQB5hY/view?usp=sharing"
        },
        {
            title: "A Memory Called Empire",
            goodreads_link: "https://www.goodreads.com/book/show/37794149-a-memory-called-empire",
            author: "Arkady Martine",
        },
        {
            title: "The Space Between Worlds",
            goodreads_link: "https://www.goodreads.com/book/show/43301353-the-space-between-worlds",
            author: "Micaiah Johnson",
        },
        {
            title: "Public Opinion",
            goodreads_link: "https://www.goodreads.com/book/show/920442.Public_Opinion",
            author: "Walter Lippmann",
            notes_link: "https://drive.google.com/file/d/1GUL_6IYpbSq91P68wiyXOw90YGOTGJHX/view?usp=sharing"
        },
        {
            title: "Sink the Bismarck!",
            goodreads_link: "https://www.goodreads.com/book/show/45729565-sink-the-bismarck",
            author: "C.S. Forester",
        },
        {
            title: "Wages of Guilt",
            goodreads_link: "https://www.goodreads.com/book/show/2253712.Wages_of_Guilt",
            author: "Ian Buruma",
            notes_link: "https://drive.google.com/file/d/1xqM51CvdwpZs1Yg5P5teKi2K9fkmTRCM/view?usp=sharing"
        },
        {
            title: "The Tainted Cup",
            goodreads_link: "https://www.goodreads.com/en/book/show/150247395-the-tainted-cup",
            author: "Robert Jackson Bennett",
        },
        {
            title: "Recoding America",
            goodreads_link: "https://www.goodreads.com/nl/book/show/61796680",
            author: "Jennifer Pahlka",
            notes_link: "https://drive.google.com/file/d/13MUIOFSio_6Ra_s22szVMMgavEDEC1AY/view?usp=sharing"
        },
        {
            title: "Why Didn't They Ask Evans?",
            goodreads_link: "https://www.goodreads.com/book/show/102303.Why_Didn_t_They_Ask_Evans_",
            author: "Agatha Christie",
        },
        {
            title: "Nuclear War",
            goodreads_link: "https://www.goodreads.com/book/show/182733784-nuclear-war",
            author: "Annie Jacobsen",
            notes_link: "https://drive.google.com/file/d/1odwdtxXVa8Ur3SDz_O7PQzf0uZIvTzTi/view?usp=sharing"
        },
        {
            title: "The Grief of Stones",
            goodreads_link: "https://www.goodreads.com/book/show/58724898-the-grief-of-stones",
            author: "Katherine Addison",
        },
    ]
    let books2024 = [
        {
            title: "The Dark Side",
            goodreads_link: "https://www.goodreads.com/en/book/show/3280003-the-dark-side",
            author: "Jane Mayer",
            notes_link: "https://drive.google.com/file/d/1E-AGRvSBxzRnhaHp384EfRX1Slx77_6-/view?usp=sharing"
        },
        {
            title: "The Rise and Fall of the Galactic Empire",
            goodreads_link: "https://www.goodreads.com/book/show/208713594-star-wars",
            author: "Chris Kempshall",
        },
        {
            title: "Everyday Utopia",
            goodreads_link: "https://www.goodreads.com/book/show/62919855-everyday-utopia",
            author: "Kristen R. Ghodsee",
            notes_link: "https://drive.google.com/file/d/12Pfl0d5wScPOdkyL6BArNiGupcvsIATE/view?usp=sharing"
        },
        {
            title: "Old Man's War",
            goodreads_link: "https://www.goodreads.com/book/show/36510196-old-man-s-war",
            author: "John Scalzi",
        },
        {
            title: "Redshirts",
            goodreads_link: "https://www.goodreads.com/book/show/13055592-redshirts",
            author: "John Scalzi",
        },
        {
            title: "The Jennifer Morgue",
            goodreads_link: "https://www.goodreads.com/book/show/14150.The_Jennifer_Morgue",
            author: "Charles Stross",
        },
        {
            title: "The Art of Power",
            goodreads_link: "https://www.goodreads.com/book/show/211143818-the-art-of-power",
            author: "Nancy Pelosi",
            notes_link: "https://drive.google.com/file/d/1N-aiMKQpKJB_g9np8b7x1G60ajTYVj52/view?usp=sharing"
        },
        {
            title: "Beyond the Big Lie",
            goodreads_link: "https://www.goodreads.com/book/show/207293812-beyond-the-big-lie",
            author: "Bill Adair",
            notes_link: "https://drive.google.com/file/d/1VQB0gmJeYiugfZj-j7hONtVytjtFdduv/view?usp=sharing"
        },
        {
            title: "The Atrocity Archives",
            goodreads_link: "https://www.goodreads.com/book/show/101869.The_Atrocity_Archives",
            author: "Charles Stross",
        },
        {
            title: "The Kingdom, the Power, and the Glory",
            goodreads_link: "https://www.goodreads.com/book/show/127653704-the-kingdom-the-power-and-the-glory",
            author: "Tim Alberta",
            notes_link: "https://drive.google.com/file/d/1M-qzxl4hyZSiaduxcUQsrRW3lFHA5ufK/view?usp=sharing"
        },
        {
            title: "The Witness for the Prosecution and Other Stories",
            goodreads_link: "https://www.goodreads.com/book/show/909870.The_Witness_for_the_Prosecution_and_Other_Stories",
            author: "Agatha Christie",
        },
        {
            title: "Killers of the Flower Moon",
            goodreads_link: "https://www.goodreads.com/book/show/193388249-killers-of-the-flower-moon",
            author: "David Grann",
            notes_link: "https://drive.google.com/file/d/1tnQZ300MCcQrwbO9dP8zsrC_vb1NIOJ-/view?usp=sharing"
        },
        {
            title: "The Invisible Life of Addie LaRue",
            goodreads_link: "https://www.goodreads.com/book/show/50623864-the-invisible-life-of-addie-larue",
            author: "V. E. Schwab",
        },
        {
            title: "The Slave's Cause",
            goodreads_link: "https://www.goodreads.com/book/show/26196550-the-slave-s-cause",
            author: "Manisha Sinha",
            notes_link: "https://drive.google.com/file/d/1Tx2PG_0eMCCytkZaGuQpTbAnH9aABGoI/view?usp=sharing"
        },
        {
            title: "Emperor of Rome",
            goodreads_link: "https://www.goodreads.com/book/show/128747007-emperor-of-rome",
            author: "Mary Beard",
            notes_link: "https://drive.google.com/file/d/1glUzoyCr-U5ObuFhJcVpPBVe_4zBIu83/view?usp=sharing"
        },
        {
            title: "Starter Villain",
            goodreads_link: "https://www.goodreads.com/book/show/61885029-starter-villain",
            author: "John Scalzi",
        },
        {
            title: "An Immense World",
            goodreads_link: "https://www.goodreads.com/en/book/show/59575939",
            author: "Ed Yong",
            notes_link: "https://drive.google.com/file/d/1b9Y5v0bRX0DGB4Fsr6BDK57bbRN57ZZb/view?usp=sharing"
        },
        {
            title: "Shogun",
            goodreads_link: "https://www.goodreads.com/book/show/52382796-sh-gun",
            author: "James Clavell",
        },
        {
            title: "The New Jim Crow",
            goodreads_link: "https://www.goodreads.com/book/show/6792458-the-new-jim-crow",
            author: "Michelle Alexander",
            notes_link: "https://drive.google.com/file/d/1i3_jmNREBBCleW7IrqZ1vMQ-pQeWhcxn/view?usp=sharing"
        },
        {
            title: "The Steerswoman",
            goodreads_link: "https://www.goodreads.com/en/book/show/793297",
            author: "Rosemary Kirstein",
        },
        {
            title: "All Systems Red",
            goodreads_link: "https://www.goodreads.com/book/show/32758901-all-systems-red",
            author: "Martha Wells",
        },
        {
            title: "The Great Post Office Scandal",
            goodreads_link: "https://www.goodreads.com/book/show/59581993-the-great-post-office-scandal",
            author: "Nick Wallis",
            notes_link: "https://drive.google.com/file/d/12Sd5L6Mgv6I7yw_Mz-n13njCQWRf1zZ4/view?usp=sharing"
        },
        {
            title: "A City on Mars",
            goodreads_link: "https://www.goodreads.com/en/book/show/125084292",
            author: "Kelly and Zach Weinersmith",
        },
        {
            title: "Babel",
            goodreads_link: "https://www.goodreads.com/en/book/show/57945316",
            author: "R. F. Kuang",
        },
        {
            title: "The Restless Republic",
            goodreads_link: "https://www.goodreads.com/en/book/show/57293228",
            author: "Anna Keay",
            notes_link: "https://drive.google.com/file/d/1tP-5sumDM27vX_uMlLy4-q0kB1Id8vSt/view?usp=sharing"
        },
        {
            title: "How Not to Be a Politician",
            goodreads_link: "https://www.goodreads.com/book/show/112974863-how-not-to-be-a-politician",
            author: "Rory Stewart",
            notes_link: "https://drive.google.com/file/d/1O9ZA38UEw-6u9AaNr-UrHImuT4Sivd0P/view?usp=sharing"
        },
    ]
    let books2023 = [
        {
            title: "The Iliad",
            goodreads_link: "https://www.goodreads.com/book/show/77265004-the-iliad",
            author: "Homer, trans. Emily Wilson",
        },
        {
            title: "The Singapore Story",
            goodreads_link: "https://www.goodreads.com/en/book/show/326981",
            author: "Lee Kuan Yew",
            notes_link: "https://drive.google.com/file/d/1RazwhzzsFTzVSeacoCgo7ghroIDDJsnc/view?usp=sharing"
        },
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
            author: "Marguerite Yourcenar, trans. Grace Frick",
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
    ]
    let books2022 = [
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
    ]
    let books2021 = [
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
            <p>Here are (most of) the things I've been reading, going back a while, along with my notes for (most of) the non-fiction stuff:</p>
        </section>
        <h3 id="2025">2025</h3>
        <ul>
            {#each books2025 as book}
            <li>
                <em><a href={book.goodreads_link} target="_blank" rel="noopener noreferrer">{book.title}</a></em> - {book.author} {#if "notes_link" in book && book.notes_link !== ""}<a href={book.notes_link} target="_blank" rel="noopener noreferrer">(Notes)</a>{/if}
            </li>
            {/each}
        </ul>
        <h3 id="2024">2024</h3>
        <ul>
            {#each books2024 as book}
            <li>
                <em><a href={book.goodreads_link} target="_blank" rel="noopener noreferrer">{book.title}</a></em> - {book.author} {#if "notes_link" in book && book.notes_link !== ""}<a href={book.notes_link} target="_blank" rel="noopener noreferrer">(Notes)</a>{/if}
            </li>
            {/each}
        </ul>
        <h3 id="2023">2023</h3>
        <ul>
            {#each books2023 as book}
            <li>
                <em><a href={book.goodreads_link} target="_blank" rel="noopener noreferrer">{book.title}</a></em> - {book.author} {#if "notes_link" in book && book.notes_link !== ""}<a href={book.notes_link} target="_blank" rel="noopener noreferrer">(Notes)</a>{/if}
            </li>
            {/each}
        </ul>
        <h3 id="2022">2022</h3>
        <ul>
            {#each books2022 as book}
            <li>
                <em><a href={book.goodreads_link} target="_blank" rel="noopener noreferrer">{book.title}</a></em> - {book.author} {#if "notes_link" in book && book.notes_link !== ""}<a href={book.notes_link} target="_blank" rel="noopener noreferrer">(Notes)</a>{/if}
            </li>
            {/each}
        </ul>
        <h3 id="2021">2021</h3>
        <ul>
            {#each books2021 as book}
            <li>
                <em><a href={book.goodreads_link} target="_blank" rel="noopener noreferrer">{book.title}</a></em> - {book.author} {#if "notes_link" in book && book.notes_link !== ""}<a href={book.notes_link} target="_blank" rel="noopener noreferrer">(Notes)</a>{/if}
            </li>
            {/each}
        </ul>
    </article>
</body>
