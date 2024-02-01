<script>
  import { searchWord } from "../libs/utils";
  import { searched } from "../store";

  export let values;
  export let title;
  export let hasBtns = false;

  async function searchWord2(word, save) {
    await searchWord(word, save);
    searched.set(word);
  }
</script>

<aside>
  <h1>{title}</h1>
  <ul>
    {#each values as value}
      {#if hasBtns == false}
        <li>{value}</li>
      {:else}
        <li>
          <button
            style="margin-bottom:1%; cursor:pointer"
            on:click={() => searchWord2(value, true)}>{value}</button
          >
        </li>
      {/if}
    {/each}
  </ul>
</aside>

<style lang="scss">
  @use "../style_vars.scss" as vars;
  aside {
    margin-top: 2%;
    margin-bottom: 2%;
    border: 3px double vars.$red;
    border-radius: 10px;
    padding: 1%;
    ul {
      max-height: 300px;
      overflow-y: auto;
    }
  }
</style>
