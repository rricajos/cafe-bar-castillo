<script>
  let categories = [];
  async function getMenu() {
    fetch("https://sheetdb.io/api/v1/z06niergdoro5")
      .then((response) => response.json())
      .then((data) => {
        // Group data by category
        data.forEach((item) => {
          const category = item.category;

          if (!categories[category]) {
            categories[category] = [];
          }

          categories[category].push(item);
        });
        // menu = data;
        // sodas = menu.filter((item) => item.category === "soda");
        // console.log(menu);
      })
      .then((res) => console.log(categories));
  }
</script>

<div class="container">
  {#await getMenu()}
  <span>cargando</span>
{:then c}
  {#each Object.keys(categories) as category}
    <article>
      <h2>
        {category}
        <hr />
      </h2>
      {#each categories[category] as item}
        <div class="item">
          <p>{item.name}</p>
          <span class="separator"></span>
          <p>{item.price}</p>
        </div>
      {/each}
    </article>
  {/each}
{/await}
</div>


<style>
  article {
    width: 100%;
    max-width: 512px;
    padding: 1rem 2rem;
    box-sizing: border-box;
  }
  hr {
    margin: 0 0 1rem 0;
    border: none;
    border-top: 3px double #333;
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
  }
  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom: 1rem;
  }
  .separator {

    width: 100%;
    border-bottom: 1px dotted #000;
  }
  /* hr::after {
    background: #ffffff00;
    content: "§";
    padding: 0 4px;
    position: relative;
    top: -5px;
  } */
  h2 {
    text-align: left;
    margin-bottom: 0;
  }
  .item {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: baseline;
    font-size: 1.25rem;
  }
  .dotted {
    border-top: dotted 1px;
  }
  p{
    text-wrap: nowrap;
    margin: 0;
  }
</style>
