<script>
  export let response;

  // Crear un objeto Date con la información proporcionada

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

<h2>
  Horarios y Reservas
  <hr />
</h2>
{#await response then groupedData}
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
            <tr>{getWeekDay(day.open.date)}</tr>
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
{/await}

<style>
  .second-legend {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background: white;
  }
  fieldset {
    position: relative;

    box-sizing: border-box;
  }
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 512px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 2rem;
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

  hr {
    border: none;
    border-top: 3px double #333;
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
  }
  h2 {
    text-align: left;
    margin: 2rem 2rem 0 2rem;
  }
</style>
