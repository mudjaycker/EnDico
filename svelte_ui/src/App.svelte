<script>
  import { testObject } from "./libs/read";
  import Nav from "./components/Nav.svelte";
</script>

<main>
  <Nav />
  <section>
    <aside class="meaning">
      <h1>Meanings</h1>
      <button on:click={testObject}>test</button>
      <div class="definitions">
        <p>Noun:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          ipsam? Aliquam eligendi laboriosam ad consequuntur laudantium iure
          natus. Consequatur, eius sapiente! Quasi odio nisi inventore provident
          dolore saepe perspiciatis excepturi.
        </p>
      </div>
      <div class="definitions">
        <p>Verb:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          ipsam? Aliquam eligendi laboriosam ad consequuntur laudantium iure
          natus. Consequatur, eius sapiente! Quasi odio nisi inventore provident
          dolore saepe perspiciatis excepturi.
        </p>
      </div>
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
        font-size: larger;
      }
    }

    .synonyms {
      margin-top: 2%;
      @include block;
      div{
        margin-left: 5%;
      }
    }
  }
</style>
