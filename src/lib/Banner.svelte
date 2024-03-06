<script>
  // @ts-nocheck

  let response = fetch(
    "https://places.googleapis.com/v1/places/ChIJ_____0yoOg0RsOKhy-g0La8?fields=*&key=AIzaSyC7WEdWGr1XSBSEysKV420dzzmqtriFguI",
  )
    .then((res) => res.json())
    .then((data) => {
      response = data;
      console.log(response);
    });
</script>

<header>
  {#await response}
    <h1>cargando</h1>
  {:then response}
    <!-- Banner -->
    <div id="banner">
      <h1>{response.displayName.text}</h1>
      <hr>
      <h2> «Disfruta de la vida con cada bocado y trago.» </h2>
      <aside>
        {#each { length: response.rating } as _, i}
          <span class="fa fa-star checked"></span>
        {/each}
      </aside>
    </div>

    <!-- Schedule -->
    <div id="schedule">
      {#each response.currentOpeningHours.weekdayDescriptions as day}
      <div class="schedule-card">
        <h3>{day.split(' ')[0].split(':')[0]}</h3>
        <p>{day.split(' ')[1].split('–')[0]}</p>
        <p>{day.split(' ')[1].split('–')[1]}</p>
      </div>
      
      {/each}
    </div>

    <!-- Location -->
    <div id="location">
      <iframe
        title="Google Maps Cafe Bar Castillo Maceda"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=1000&amp;hl=en&amp;q=R%C3%BAa%20As%20Canteiras,%201,%2032700%20Maceda,%20Province%20of%20Ourense+(Cafe%20Bar%20Castillo)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ><a href="https://www.gps.ie/sport-gps/">swimming watch</a></iframe
      >
    </div>
  {/await}
</header>

<style>
  #location {
    min-height: 40vh;
  }
  #banner {
    min-height: 20vh;
    margin: 2rem;
  }
  h1, h2, h3 {
    margin: 0;
  }
  header {
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;

  }
  aside {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  span {
    margin: 1rem;
    font-size: 2rem;
  }
  .checked {
    color: orange;
  }

  #schedule {
 
    display: flex;
    flex-flow: row nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: center;
  } 
  .schedule-card {
    min-width: 8rem;
    border-radius: 50%;

    margin: 0.5rem;
    padding: 1.5rem 0;
    background-color: #10101034;
  }

  p {
    margin: 0
  }

  iframe > * {
    font-size: 1.25rem;
  }
</style>
