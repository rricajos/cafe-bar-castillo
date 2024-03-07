<script>
  export let response;
  let srcs = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
    "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    "https://media1.thrillophilia.com/filestore/l9fcy3sj95mwp23zvk13hdefpx0o_49090236931_e27408bbcc_o.jpg",
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/10/e6/b0.jpg",
  ];
  let srcsb = [
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/10/e6/b0.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
    "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    "https://media1.thrillophilia.com/filestore/l9fcy3sj95mwp23zvk13hdefpx0o_49090236931_e27408bbcc_o.jpg",
  ];
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
</script>

<div class="scroller">
  <div class="row">
    {#each srcs as src}
    <img {src} alt="" width="{getRandomArbitrary(5, 9)*10 }%" />
    {/each}
  </div>
  <div class="row">
    {#each srcsb as src}
      <img {src} alt="" width="{getRandomArbitrary(5, 9)*10 }%" />
    {/each}
  </div>
</div>

<style>
  .scroller {
    overflow-x: scroll;
    scrollbar-width: none;
    padding: 1rem;
    max-width: 100%;
    mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
    max-height: 80vh;
   
  }
  div.row {
    display: flex;
    flex-flow: row nowrap;
    max-height: 40vh;
    animation: scroll 5s linear infinite;
  }
  img {
    padding: 1rem;
    aspect-ratio: 16/9;
  }

  @keyframes scroll {
    to {
      transform: translate(-100%);
    }
  }
</style>
