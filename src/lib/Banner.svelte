<script>
  export let response;
</script>

<header>
  <div style=" height: 100%"></div>
  <div style="box-shadow: 0px -25px 20px -36px rgba(0,0,0,0.45); z-index:2;">
    {#await response then response}
      <div id="banner">
        <fieldset>
          <legend style="padding: 0 1rem;">
            <a href={response.googleMapsUri} target="_blank">
              <p>{response.userRatingCount} reseñas en Google Maps</p>
            </a>
          </legend>
          <legend>
            <aside>
              {#each { length: response.rating - 0.5 } as _, i}
                <span class="fa fa-star checked"></span>
              {/each}
              {#if (response.rating * 10) % 2 != 0}
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
      </div>
      <img src={response.photos[0].name} alt="" />
    {/await}
  </div>
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
    margin: 1rem 2rem 1rem 2rem;
  }
  h1 {
    margin: 0 1rem;
  }

  header {
    height: 100%;
    width: 100%;
    bottom: 0;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;

  }
  table {
    width: 100%;
  }
  fieldset {
    text-align: center;
    padding: 0 0 2.2rem 0;
    position: relative;
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
