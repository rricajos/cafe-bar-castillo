<script>
  import { Banner } from './lib/Banner.js';
  import { Schedule } from './lib/Schedule.js';
  import { Location } from './lib/Location.js';
  import { Menu } from './lib/Menu.js';
</script>

<main>
  <section>
    <Banner />
    <Schedule />
    <Location />
  </section>
  <section>
    <Menu />
  </section>
</main>

<style>
  section {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1024px;
    min-height: 100vh;
    background-color: #eee;
  }
</style>
