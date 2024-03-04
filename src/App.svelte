<!--------------------------------- js --------------------------------------->
<script>
  let menu = [];

  fetch("https://sheetdb.io/api/v1/ylzf2nd5d2pht")
    .then((response) => response.json())
    .then((data) => {
      menu = data;
    });

  function generateId() {
    return new String(Math.random().toString(16).slice(2));
  }

  function toggleVisible() {
    document
      .querySelector("#" + this.id + " .menu-item-details")
      .classList.toggle("not-visible");

    document
      .querySelector("#"+ this.id)
      .classList.toggle("align-stretch");
  }
</script>

<!--------------------------------- html ------------------------------------->
<main>
  <section>
    <h1>Cafe Bar Castillo</h1>
    <h3>
      Café Bar Castillo es una acogedora cafetería ubicada en Maceda, provincia
      de Ourense.
    </h3>
    <div style="width: 100%">
      <iframe
        title="Google Maps Cafe Bar Castillo Maceda"
        width="100%"
        height="400px"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R%C3%BAa%20As%20Canteiras,%201,%2032700%20Maceda,%20Province%20of%20Ourense+(Cafe%20Bar%20Castillo)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ><a href="https://www.gps.ie/sport-gps/">swimming watch</a></iframe
      >
    </div>
  </section>

  <section>
    <div class="menu-container">
      {#each menu as item}
        <button
          on:click={toggleVisible}
          class="menu-item-container {item.category}"
          id="menu-item-{generateId()}"
          style="background-image: url({item.image});"
        >
          <div class="menu-item">
            <div class="menu-item-name-container">
              <h3 class="menu-item-name">{item.name}</h3>
            </div>

            <div class="menu-item-details not-visible">
              <p>Precio: {item.price}€</p>
              
            </div>
          </div>
        </button>
      {/each}
    </div>
  </section>
</main>

<!--------------------------------- css -------------------------------------->
<style>
  section {
    height: 100vh;
  }
  main {
    max-width: 960px;
  }

  .menu-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  .menu-item-container {
    padding: 0;
    overflow: hidden;
    width: 22%;
    height: 40vh;

    background-size: cover;
    transition: all 3s ease-in-out;
    display: flex;
    align-items: flex-end;
  }

  .align-stretch {
    align-items: stretch;
  }

  .menu-item {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
  }
  .menu-item-name-container {
    background-color: #101010;
    color: aliceblue;
    width: 100%;
  }
  .menu-item-name {
  }
  .menu-item-details {
    background-color: #10101092;
    color: aliceblue;

    width: 100%;
    height: 100%;
  }
  .not-visible {
    display: none;
  }
</style>
