<script>
  import { searchWord } from "../libs/utils";
  import {
    data_is_cached,
    histories,
    is_history_showed,
    searched,
  } from "../store";
  import CachedData from "../libs/search_history";
  import { onMount } from "svelte";

  let history = new CachedData();
  function toggleHistory() {
    $is_history_showed = !$is_history_showed;
  }
  let show_history_text = "Show history";
  $: {
    if (!$is_history_showed) show_history_text = "Show history";
    else show_history_text = "Hide history";
  }

  onMount(() => {
    if (!!localStorage.getItem(history.db_name)) {
      $data_is_cached = true;
      $histories = history.data();
    } else {
      $data_is_cached = false;
    }
  });
</script>

<nav>
  <section>
    <aside style="text-transform: uppercase; color:white">
      {$searched}
      {#if $data_is_cached}
        <div>
          {#if $data_is_cached}
            <button on:click={toggleHistory}>{show_history_text}</button>
          {/if}
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
