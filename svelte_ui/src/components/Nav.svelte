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
    <aside id="aside-text" style="text-transform: uppercase; color:white">
      {$searched}
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
        <button id="search-btn">search</button>
      </form>
      {#if $data_is_cached}
        <button id="history-btn" on:click={toggleHistory}
          >{show_history_text}</button
        >
      {/if}
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

  #history-btn {
    position: absolute;
    top: 40%;
    right: 80%;
  }

  @media screen and (max-width: 1200px) {
    nav {
      height: 30%;
    }
  }
  @media screen and (max-width: 500px) {
    nav {
      height: 10%;
    }
    #search-btn {
      font-size: small;
      position: absolute;
      top: 40%;
      height: 45px;
      left: 5%;
    }
    #history-btn {
      position: absolute;
      top: 40%;
      right: 5%;
      height: 45px;
      font-size: 12px;
    }
    input {
      width: 90vw;
      // margin-left: 2%;
      // margin-right: 2%;
    }


    #aside-text {
      display: none;
    }
  }
</style>
