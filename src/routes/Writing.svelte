<script>
    /**
     * @type {string}
     */
    export let title;
    /**
     * @type {string}
     */
    export let pullquote;
    /**
     * @type {string}
     */
    export let source;
    /**
     * @type {string}
     */
    export let link;
</script>

<div class="col-sm-6 col-md-4">
    <blockquote class="blockquote">
        <h3>{title}</h3> 
        <p class="mb-0">"{pullquote}"</p>
        <footer class="blockquote-footer"><cite title="Source Title">{source}</cite></footer>
        <p><a href="{link}" class="btn btn-default" role="button">Read...</a></p> 
    </blockquote>
</div>