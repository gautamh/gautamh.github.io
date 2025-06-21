<script>
    export let data;
    import Photo from './Photo.svelte';
</script>

<svelte:head>
    <title>Photography: {data.albumName}</title>
    <meta name="description" content="Photos from the {data.albumName} album" />
    <style lang="scss">
        @import "../../../lib/photography/photography.scss";
    </style>
</svelte:head>

<div class="col-md-10 offset-md-1" id="photos">
    <h1>{data.albumName}</h1>
    <p>{@html data.albumDescription}</p>
    <p>(Click to enlarge)</p>
</div>

<div class="row main-content">
    <div id="photo-imgs" class="row col-md-10 offset-md-1">
        {#each data.albumItems as albumItem}
            <Photo img_src={albumItem.photoUrl} caption="" img_src_thumb={albumItem.thumbUrl} />
        {/each}
    </div>
</div>