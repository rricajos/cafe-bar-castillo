<script>
  import { Banner } from "./lib/Banner.js";
  import { Schedule } from "./lib/Schedule.js";
  import { Location } from "./lib/Location.js";
  import { Menu } from "./lib/Menu.js";
  import { Reviews } from "./lib/Reviews.js";

  export const promise = Promise.resolve(
    fetch(
      "https://places.googleapis.com/v1/places/ChIJ_____0yoOg0RsOKhy-g0La8?fields=*&key=AIzaSyC7WEdWGr1XSBSEysKV420dzzmqtriFguI",
    ),
  );
  export const maps = promise.then((response) => response.json());
  maps.then(data => console.log(data));

  export const periods = maps.then((data) => {
    const groups = {};

    data.currentOpeningHours.periods.forEach((entry) => {
      const { open, close } = entry;
      const key = `${open.hour}:${open.minute}-${close.hour}:${close.minute}`;

      if (!groups[key]) {
        groups[key] = [];
      }

      groups[key].push(entry);
    });

    console.log(Object.values(groups));
    return Object.values(groups);
  });

</script>

<main>
  <section>
    <Location response={maps}/>
    <Banner response={maps} />
    

  </section>
  <section>
    <Menu />
  </section>
  <section>
  <Schedule response={periods} />
    <Reviews response={maps} />
  </section>
</main>

<style>
  section {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1024px;
    min-height: 100vh;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
</style>
