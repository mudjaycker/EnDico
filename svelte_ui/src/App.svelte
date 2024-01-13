<script>
  import { is_word_found, meanings, synonyms, antonyms } from "./store";
  import Nav from "./components/Nav.svelte";

  let section;
  const percent = (perc, num) => (num * perc) / 100;

  $: if (!!section) {
    let height = section.offsetHeight;
    let size =
      height > 700
        ? percent(5, height)
        : height < 300
          ? percent(55, height)
          : percent(25, height);

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
          <div>
            {#each $synonyms as synonym}
              <p>{synonym}</p>
            {/each}
          </div>
        </aside>
      {/if}

      {#if $antonyms.length > 0}
        <aside class="synonyms">
          <h1>Antonyms</h1>
          {#each $antonyms as antonym}
            <div>
              <p>{antonym}</p>
            </div>
          {/each}
        </aside>
      {/if}
    </section>
  {/if}
</main>

<style lang="scss">
  @use "./style_vars.scss" as vars;
  @mixin block {
    border: 1px solid red;
    padding: 1%;
  }
  section {
    margin-top: 10%;
    width: 80%;
    // height: 100vh;
    // margin-bottom: 60%;
    margin-left: 10%;
    .meaning {
      @include block;
    }
    .definitions {
      display: block;
      border: 1px solid vars.$blue;
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
      div {
        margin-left: 5%;
      }
    }
  }
</style>
