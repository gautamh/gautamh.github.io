<script>
    /**
     * @type {string}
     */
    export let title;
    /**
     * @type {string}
     */
    export let img_src;
    /**
     * @type {string}
     */
    export let album_desc;
    /**
     * @type {string}
     */
    export let link;
</script>

<div class="col-sm-6 col-md-4"> 
    <h3>{title}</h3> 
    <div class="thumbnail"> 
        <a href="{link}">
            <img class="album-img" alt="100%x200" src="{img_src}" data-holder-rendered="true">
        </a>
        <div class="caption"> 
            <p class="caption-text">{album_desc}</p> 
            <p><a href="{link}" class="btn btn-default" role="button">View...</a></p> 
        </div> 
    </div>
</div>