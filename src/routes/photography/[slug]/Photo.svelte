<script>
    /**
     * @type {string}
     */
    export let img_src;
    /**
     * @type {string}
     */
    export let caption;
    /**
     * @type {string}
     */
    export let img_src_thumb;
</script>

<a href="{img_src}" data-sveltekit-preload-data="off" data-fancybox="gallery" data-caption="{caption}" rel="external">
    <img class="photo-img" src="{img_src_thumb}" data-holder-rendered="true"> 
</a>