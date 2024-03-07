<script>
  export let response;

//   function groupPeriodsByDay(periods) {
//     const groupedPeriods = {};

//     periods.forEach(period => {
//         const openDay = period.open.day;
//         const closeDay = period.close.day;

//         if (!groupedPeriods[openDay]) {
//             groupedPeriods[openDay] = [];
//         }

//         if (!groupedPeriods[closeDay]) {
//             groupedPeriods[closeDay] = [];
//         }

//         groupedPeriods[openDay].push(period);  
//         groupedPeriods[closeDay].push(period);
//     });

//     return groupedPeriods;
// }

// const groupedPeriods = groupPeriodsByDay();
// console.log(groupedPeriods);
</script>

<header>
  {#await response then response}
    <!-- Banner -->
    <div id="banner">
      
      <fieldset>
        <legend>
          <aside>
            {#each { length: response.rating-0.5 } as _, i}
              <span class="fa fa-star checked"></span>
            {/each}
            {#if (response.rating*10)%2 != 0}
            <div>
              <span class="fa fa-star half-star-a">
                <span class="fa fa-star-half checked half-star-b"></span>
              </span>
            </div>
            {/if}
          </aside>
    
        </legend>
        <table>
          <tr>
            <h1>{response.displayName.text}</h1>
            
          </tr>
        </table>
      </fieldset>
      <!-- <a href="{response.googleMapsUri}" target="_blank">
        <p>{response.userRatingCount} reseñas en Google Maps</p>
      </a>  -->
    

     
    </div>
    <img src="{response.photos[0].name}" alt="">
    <!-- Schedule -->
    <!-- <div id="schedule">
      {#each response.currentOpeningHours.weekdayDescriptions as day}
      <div class="schedule-card">
        <h3>{day.split(' ')[0].split(':')[0]}</h3>
        <p>{day.split(' ')[1].split('–')[0]}</p>
        <p>{day.split(' ')[1].split('–')[1]}</p>
      </div>
      
      {/each}
    </div> -->

    <!-- Location -->
    <!-- <div id="location">
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
    </div> -->
  {/await}
</header>

<style>
  .half-star-a {
    position: relative;
  }

  .half-star-b {
    position: absolute;
    top: 0;
    transform: translate(-210%, -11%);
    z-index: 2;

  }


  #banner {
    min-height: 20vh;
    margin: 2rem 2rem 0 2rem;
  }
  h1 {
    margin: 0 1rem;
  }

  header {

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
  table { 
    width: 100%;
  }
  fieldset {
    text-align: center;
    padding: 2rem 0;
    position: relative;

    border: 3px double #333;

  }
  aside {
    padding: 0 1rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background: white;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
  span {
    margin: 0.2rem;
    font-size: 1.8rem;
    text-shadow: 0px 0px 1rem #3333335d;
  }
  .checked {
    color: orange;
  }


</style>
