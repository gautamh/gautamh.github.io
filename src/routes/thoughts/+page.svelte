<svelte:head>
    <title>Thoughts | Gautam Hathi</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" integrity="sha256-Vzbj7sDDS/woiFS3uNKo8eIuni59rjyNGtXfstRzStA=" crossorigin="anonymous" />
    <style lang="scss">
        @import "../../lib/thoughts/thoughts.scss";
    </style>
</svelte:head>
<script>
    /**
	 * @type {{ content: any; }}
	 */
     export let data;

</script>
<body>
    <article>
        <h1>
            Thoughts
        </h1>
        <section>
            <p>Most of my thoughts aren't particularly interesting to anyone but me. When they might be interesting, in most cases enough other people have already written up something similar enough that you don't need to read my version. In a few cases, though, I think my thoughts might be interesting to other people and I haven't found too many other good pieces on a similar topic:</p>
        </section>
        <ul>
            {#each data.snippets as snippet}
            <li>
                <a href={"./thoughts/" + snippet.slug}>{@html snippet.title + " - " + snippet.date}</a>
            </li>
            {/each}
            <li>
                <a href="./thoughts/caste">Issues with <em>Caste</em></a> - December 2020
            </li>
            <li>
                <a href="./thoughts/english_class">Was Holden Caulfield abducted by aliens?</a> - November 2020
            </li>
            <li>
                <a href="./thoughts/media_internships">Hiring in Journalism is Behind the Times</a> - August 2018
            </li>
            <li>
                <a href="https://www.dukechronicle.com/article/2017/05/a-deal-with-the-blue-devil">A deal with the Blue Devil (or why we should think about things besides college sports)</a> - April 2017
            </li>
        </ul>
    </article>
</body>