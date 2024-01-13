<script>
  import { is_word_found, meanings, synonyms, antonyms } from "./store";
  import Nav from "./components/Nav.svelte";

  let section;
  const percent = (perc, num) => (num * perc) / 100;

  $: if (!!section) {
    let height = section.offsetHeight;
    let size = percent(10, height);
    console.log({ height });
    section.setAttribute("style", `margin-bottom: ${size}px;`);
  }
</script>

<main>
  <Nav />
  {#if $is_word_found}
    <section bind:this={section}>
      {#if $meanings.length > 0}
        <aside class="meaning">
          <h1>Meanings</h1>
          {#each $meanings as meaning}
            <div class="definitions">
              <span class="meanings">
                <p>{meaning[0]}:</p>
                <p>
                  {meaning[1]}
                </p>
              </span>

              {#if meaning[2].length > 0}
                <span class="relateds">
                  <p>Related words:</p>
                  <ul>
                    {#each meaning[2] as related}
                      <li>{related}</li>
                    {/each}
                  </ul>
                </span>
              {/if}

              {#if meaning[3].length > 0}
                <span class="relateds">
                  <p>Examples:</p>
                  <ul>
                    {#each meaning[3] as example}
                      <li>{example}</li>
                    {/each}
                  </ul>
                </span>
              {/if}
            </div>
          {/each}
        </aside>
      {/if}

      {#if $synonyms.length > 0}
        <aside class="synonyms">
          <h1>Synonyms</h1>
          <ul>
            {#each $synonyms as synonym}
              <li>{synonym}</li>
            {/each}
          </ul>
        </aside>
      {/if}

      {#if $antonyms.length > 0}
        <aside class="synonyms">
          <h1>Antonyms</h1>
          <ul>
            {#each $antonyms as antonym}
              <li>{antonym}</li>
            {/each}
          </ul>
        </aside>
      {/if}
    </section>
  {/if}
</main>

<style lang="scss">
  @use "./style_vars.scss" as vars;
  @mixin block {
    border: 3px double vars.$red;
    border-radius: 10px;
    padding: 1%;
  }
  section {
    margin-top: 10%;
    width: 80%;
    margin-left: 10%;
    .meaning {
      @include block;
    }
    .definitions {
      display: block;
      border: 2px solid vars.$blue;
      margin-bottom: 1%;
      padding-left: 0.5%;
      .meanings {
        display: flex;
        :first-child {
          margin-right: 1%;
          text-decoration: underline;
          font-size: medium;
        }
        :nth-child(2) {
          text-transform: uppercase;
        }
      }
      .relateds {
        p {
          text-decoration: underline;
          font-size: medium;
        }
      }
    }

    .synonyms {
      margin-top: 2%;
      @include block;
    }
  }
</style>
