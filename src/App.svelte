<script>
  import { Banner } from "./lib/Banner.js";
  import { Schedule } from "./lib/Schedule.js";
  import { Menu } from "./lib/Menu.js";
  import { Reviews } from "./lib/Reviews.js";
  import { Map } from "./lib/Map.js";

  const id = "ChIJ_____0yoOg0RsOKhy-g0La8";
  const key = "AIzaSyC7WEdWGr1XSBSEysKV420dzzmqtriFguI";
  export const promise = Promise.resolve(
    fetch(`https://places.googleapis.com/v1/places/${id}?fields=*&key=${key}`),
  );

  export const json = promise.then((response) => response.json());
  json.then((data) => console.log(data));

  export const periods = json.then((data) => {
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
    <Banner response={json} />
  </section>
  <section>
    <Menu />
  </section>
  <section>
    <Schedule response={json} {periods} />
    <Map />
  </section>
  <section>
    <Reviews response={json} />
  </section>
</main>

<style>
  section {
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1024px;
    min-height: 100vh;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
</style>
