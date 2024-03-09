<script>
  export let response;
</script>

{#await response then response}
  <div style="margin: 0 2rem; text-align:center">
    <fieldset style="position: relative; padding: 2rem 2rem 3rem 2rem; margin: 1rem 0 0 0">
      <legend style="position: absolute; bottom: 0rem; left: 50%;  transform: translate(-50%, 50%);">
        <button>Escribenos</button>
      </legend>
      <table>
        <tr>
          <h2>Gracias por hacernos más visibles y decirnos como mejorar cada día.</h2>
    
        </tr>
      </table>
    </fieldset>
  </div>
  <!-- Banner -->
  <div style="margin: 0 2rem;">
    <div class="reviews">
      {#each response.reviews as review}
        <article class="review">
          <div class="review-head">
            <a href={review.authorAttribution.uri}>
              <img
                src={review.authorAttribution.photoUri}
                alt=""
                width="64rem"
              />
            </a>

            <div>
              <a href={review.authorAttribution.uri}>
                <h3>{review.authorAttribution.displayName}</h3>
              </a>

              <div class="review-head-details">
                <h4><sup>{review.relativePublishTimeDescription}</sup></h4>

                <div class="review-head-sub-details">
                  {#each { length: review.rating } as _, i}
                    <span
                      class="fa fa-star checked"
                      style="font-size: 1rem; margin: 0.1rem;"
                    ></span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>
              {review.originalText.text}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </div>
{/await}

<style>
  hr {
    margin: 0;
  }
  .review-head-sub-details {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: baseline;
  }
  .review-head-details {
    margin-top: 0.25rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
  .reviews {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 3rem;
  }
  .review {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: left;

    box-sizing: border-box;
    max-width: 400px;
    margin-top: 3rem;

    margin-inline: 1rem;
  }

  .review-head {
    width: 100%;
    margin: 0 1rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
  }

  h2,
  h3,
  h4 {
    margin: 0 1rem;
  }

  span {
    margin: 1rem;
    font-size: 2rem;
  }
  .checked {
    color: orange;
  }

  p {
    margin: 0;
  }

  h2 {
    text-align: center;
    margin: 0;
    padding: 0rem 0rem 0 0rem;
  }
  hr {

    border: none;
    border-top: 3px double #333;
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
  }

  fieldset {
    border: none;
    border: 3px double #333;

  }
  table {
    width: 100%;
  }
  i {
    margin: 0 0 0 1rem;
  }
  tr {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
  }

  button {
    border: none;
    border: 3px double #333;
  }
</style>
