<script>
  import Nav from "./components/Nav.svelte";
  import { meanings, synonyms, antonyms } from "./store";
</script>

<main>
  <Nav />
  <section>
    <aside class="meaning">
      <h1>Meanings</h1>
      {#each $meanings as meaning}
        <div class="definitions">
          <p>{meaning[0]}:</p>
          <p>
            {meaning[1]}
          </p>
        </div>
      {/each}
    </aside>

    <aside class="synonyms">
      <h1>Synonyms</h1>
      <div>
        {#each $synonyms as synonym}
          <p>{synonym}</p>
        {/each}
      </div>
    </aside>

    <aside class="synonyms">
      <h1>Antonyms</h1>
      {#each $antonyms as antonym}
        <div>
          <p>{antonym}</p>
        </div>
      {/each}
    </aside>
  </section>
</main>

<style lang="scss">
  @mixin block {
    border: 1px solid red;
    padding: 1%;
  }
  section {
    margin-top: 10%;
    width: 80%;
    height: 100vh;
    margin-bottom: 60%;
    margin-left: 10%;
    .meaning {
      @include block;
    }
    .definitions {
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

    .synonyms {
      margin-top: 2%;
      @include block;
      div {
        margin-left: 5%;
      }
    }
  }
</style>
