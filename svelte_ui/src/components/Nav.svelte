<script>
  import { searchWord } from "../libs/utils";
  import { data_is_cached, searched } from "../store";
  import CachedData from "../libs/search_history";
  import { onMount } from "svelte";
  onMount(() => {
    let history = new CachedData();
    if (!!localStorage.getItem(history.db_name)) {
      $data_is_cached = true;
    } else {
      $data_is_cached = false;
    }
  });
  let history = new CachedData();
  const next = () => {
    $searched = history.next();
    searchWord($searched, false);
  };
  const previous = () => {
    $searched = history.previous();
    searchWord($searched, false);
  };
</script>

<nav>
  <section>
    <aside style="text-transform: uppercase; color:white">
      {$searched}
      {#if $data_is_cached}
       <div>
        <button on:click={previous}>previous</button>
        <button on:click={next}>next</button>
       </div>
      {/if}
    </aside>
    <aside>
      <form
        action=""
        on:submit|preventDefault={() => searchWord($searched, true)}
      >
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
    height: 15%;
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
      height: 10%;
    }
  }
</style>
