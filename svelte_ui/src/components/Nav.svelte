<script>
  import { searchWord } from "../libs/utils";
  import { searched } from "../store";
</script>

<nav>
  <section>
    <aside style="text-transform: uppercase; color:white">
      {$searched}
    </aside>
    <aside>
      <form action="" on:submit|preventDefault={() => searchWord($searched)}>
        <input
          bind:value={$searched}
          type="text"
          placeholder="type a world..."
        />
        <button>Search</button>
      </form>
    </aside>
  </section>
</nav>

<style lang="scss">
  @use "../style_vars.scss" as var;
  nav {
    position: fixed;
    top: 0;
    background-color: var.$blue;
    width: 100%;
    height: 10%;
    section {
      margin-top: 2%;
      margin-left: 2%;
      margin-right: 2%;
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 1919px) {
    nav {
      height: 7%;
    }
  }
</style>
