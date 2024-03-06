<!--------------------------------- js --------------------------------------->
<script>
  

  const categories = [];
  fetch("https://sheetdb.io/api/v1/441ejl4ro8ev3")
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
    });

  function generateId() {
    return new String(Math.random().toString(16).slice(2));
  }

  function toggleVisible() {
    document
      .querySelector("#" + this.id + " .menu-item-details")
      .classList.toggle("not-visible");

    document.querySelector("#" + this.id).classList.toggle("align-stretch");
  }
</script>

<!--------------------------------- html ------------------------------------->
<main>
  <section>
    <h1>Carta Cafe Bar Castillo</h1>

    {#each Object.keys(categories) as category}
      <article>
        <h2 class="menu-category">{category}</h2>
        <hr />
        <div class="menu-container">
          {#each categories[category] as item}
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

                <div class="menu-item-details not-visible"></div>
              </div>
            </button>
          {/each}
        </div>
      </article>
    {/each}
    <!-- <div class="menu-container">
      {#each menu as item}
       
      {/each}
    </div> -->
  </section>

  <section class="section-about">
    <div style="text-align: left; ">
      <h2>Sobre nosotros</h2>
      <hr />
      <p>
        <strong> Café Bar Castillo</strong> destaca por su oferta adaptada a todos
        los bolsillos, desde café hasta cócteles con asientos al aire libre y además
        de una experiencia gastronómica completa.
      </p>
      <p>
        <strong>Ofrecemos opciones saludables y deliciosas</strong> para
        desayunos, almuerzos, cenas y postres en un ambiente informal y
        acogedor.
        <strong>Aceptamos encargos, reservas y pagos anticipados</strong> con
        dispositivos móviles.
        <strong>Las opiniones elogian nuestra comida casera </strong>, por sus
        porciones generosas y trato amigable.
      </p>
      <p>
        Ubicado en Maceda, Ourense y <strong>
          conocidos por nuestra calidad a precios asequibles
        </strong>. Para una experiencia culinaria local y auténtica, visita Café
        Bar Castillo.
      </p>
    </div>

    <h2 style="width: 100%; margin: 1em 0">¿Dónde y Cuándo?</h2>

    <div style="max-width: 460px; width: 100%">
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

    <div
      style="max-width: 460px; text-align:left; margin: 0 auto; font-size:1.2em;"
    >
      <p id="w1">8:30 - 22:30 · Lunes</p>
      <p id="w2">8:30 - 22:30 · Martes</p>
      <p id="w3">8:30 - 22:30 · Miércoles</p>
      <p id="w4">8:30 - 16:00 · Jueves</p>
      <p id="w5">8:30 - 24:00 · Viernes</p>
      <p id="w6">8:30 - 24:00 · Sabado</p>
      <p id="w7">8:30 - 24:00 · Domingo</p>
    </div>
  </section>
</main>

<!--------------------------------- css -------------------------------------->
<style>
  .section-about {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    align-items: center;
  }
  section {
    min-height: 100vh;
    padding-bottom: 2em;
    font-size: 1.4em;
  }
  main {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }
  hr {
    margin: 0.1rem;
  }
  h2 {
    margin-bottom: 0;
  }

  .menu-category {
    text-align: left;
    margin-bottom: 0;
  }

  .menu-container {
    padding: 0.5rem;
    display: -webkit-box;
    widows: 100%;
    overflow-x: auto;
  }
  .menu-item-container:focus {
    outline: none;
  }
  .menu-item-container {
    overflow: hidden;
    border: none;
    border-radius: 1em;
    padding: 0;
    margin: 1rem;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.525);
    width: 160px;
    height: 256px;
    background-position: center;
    background-size: cover;
    transition: all 1s ease-in-out;
    display: flex;
    align-items: flex-end;
  }

  .align-stretch {
    align-items: stretch;
  }

  .menu-item {
    border-radius: 1rem;
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
    font-size: 0.8em;
    margin: 0.5em;
  }
  .menu-item-details {
    border-radius: 0 0 1em 1em;
    background-color: #101010d8;
    color: aliceblue;

    width: 100%;
    height: 100%;
  }
  .not-visible {
    display: none;
  }
</style>
