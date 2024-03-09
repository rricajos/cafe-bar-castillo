<script>
  export let response;
  export let periods;

  const date = new Date(Date());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  function getWeekDay(d) {
    const date = new Date(d.year, d.month - 1, d.day); // El mes está en base 0 (enero es 0)
    // Obtener el día de la semana en formato texto
    const daysOfWeek = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    return daysOfWeek[date.getDay()];
  }

  function pad(num) {
    const number = num;
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
    //Output: 09
  }
</script>

{#await response then response}
{#await periods then groupedData}
  <header>
    <!-- <h2>Viernes {groupedData[0][1].open.date.day}</h2> -->
    <h2>Horario y Contacto</h2>
  </header>
  <hr />
  <!-- <i>Fecha actual: {date.toLocaleDateString('es-ES')}</i> -->
  <article>
    <div class="container">
      {#each groupedData as group, i}
        <fieldset class="group">
          <legend
            ><strong>
              {pad(group[0].open.hour)}:{pad(group[0].open.minute)}
            </strong>
          </legend>

          <table>
            {#each group as day, x}
              <tr>{getWeekDay(day.open.date)} </tr>
            {/each}
          </table>
          <legend class="second-legend">
            <strong>
              {pad(group[0].close.hour)}:{pad(group[0].close.minute)}
            </strong>
          </legend>
        </fieldset>
      {/each}
    </div>

    <div class="container-b">
     
        <a href="tel:{response.nationalPhoneNumber}" target="_blank">
          <button>
            <span class="fa fa-phone"></span>
            Llamar
          </button>
        </a>
        <a href={response.googleMapsUri} target="_blank">
          <button>
            <span class="fa fa-map-pin"></span>
            Localizar
            <!-- {response.addressComponents[0].longText} -->
          </button>
        </a>

    </div>
  </article>
{/await}
{/await}

<style>
  span {
    margin: 0 0.5rem 0 1rem;
  }
  button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem 0.5rem 0;
    margin: 0 0.5rem;
    outline: none;
    background-color: #101010;
    color: aliceblue;
  }
  article {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .second-legend {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background: white;
  }
  fieldset {
    min-width: 30%;
    position: relative;
    margin-bottom: 1rem;
    box-sizing: border-box;
  }
  .container-b {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 512px;
    width: 100%;

    box-sizing: border-box;
    padding: 1rem 2rem;
  }
  .group {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    width: 0;
    padding: 0.3rem 0 1rem 0;

    border: 3px double #333;
  }
  header {
    margin: 2rem 2rem 0rem 2rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
  }
  hr {
    border: none;
    border-top: 3px double #333;
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
    margin: 0 2rem;
  }
  h2 {
    margin: 0;
    text-align: left;
  }
</style>
