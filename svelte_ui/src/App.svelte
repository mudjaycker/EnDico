<script>
  import Nav from "./components/Nav.svelte";
  import { meanings } from "./store";
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
        <p>Lorem</p>
        <p>test</p>
        <p>test3</p>
      </div>
    </aside>

    <aside class="synonyms">
      <h1>Antonyms</h1>
      <div>
        <p>Lorem</p>
        <p>test</p>
        <p>test3</p>
      </div>
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
    margin-bottom: 5%;
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
      :nth-child(2){
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
