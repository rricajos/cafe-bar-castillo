<script>
  export let response;
  
</script>

{#await response then response}

<h2>
  Reseñas
  <hr>
</h2>
  <!-- Banner -->
  <div id="banner">
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
              <h3>{review.authorAttribution.displayName}</h3>
              <div class="review-head-details">
                <h3><sup>{review.relativePublishTimeDescription}</sup></h3>

                <div>
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
  .review-head-details {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
  .reviews {
    display: flex;
    flex-flow: row wrap;
    justify-content: center
  }
  .review {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: left;

    box-sizing: border-box;
    max-width: 400px;
    margin-top: 1rem;
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

  #location {
    min-height: 40vh;
  }
  #banner {
    min-height: 20vh;
    margin: 2rem;
  }
  h1,
  h2,
  h3 {
    margin: 0 1rem;
  }
  article {
  }
  header {
    min-height: 100vh;
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
    margin: 0;
  }

  iframe > * {
    font-size: 1.25rem;
  }

  h2 {
    text-align: left;
    margin: 0;
    padding: 5rem 2rem 0 2rem;
  }
  hr {

    border: none;
    border-top: 3px double #333;
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
  }
</style>
