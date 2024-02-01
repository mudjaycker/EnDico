<script>
  import {
    is_word_found,
    meanings,
    synonyms,
    antonyms,
    similars,
    is_history_showed,
    histories,
  } from "./store";
  import Nav from "./components/Nav.svelte";
  import Aside from "./components/Aside.svelte";
</script>

<main>
  <Nav />
  <div id="content">
    {#if $is_history_showed}
      <section>
        <Aside title="History" values={$histories} hasBtns={true} />
      </section>
    {/if}
    {#if $is_word_found && !$is_history_showed}
      <section>
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
          <Aside values={$synonyms} title="Synonyms" />
        {/if}

        {#if $antonyms.length > 0}
          <Aside title="Antonyms" values={$antonyms} />
        {/if}
      </section>
    {:else if !$is_history_showed}
      <section>
        {#if $similars.length > 0}
          <Aside
            title="Similar spelled words"
            values={$similars}
            hasBtns={true}
          />
        {/if}
      </section>
    {/if}
  </div>
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
  }
  @media screen and (max-width: 1919px) {
    #content {
      margin-top: 15%;
    }
  }
  @media screen and (max-width: 900px) {
    #content {
      margin-top: 25%;
    }
  }
</style>
