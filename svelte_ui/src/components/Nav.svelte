<script>
  import { Read } from "../libs/read";
  let text = "";
  const read = async (txt) => {
    text = txt;
    const read = new Read(txt);
    await read.search();
  };
</script>

<nav>
  <section>
    <aside style="text-transform: capitalize; color:white">
      {text}
    </aside>
    <aside>
      <form action="" on:submit|preventDefault={() => read(text)}>
        <input bind:value={text} type="text" placeholder="type a world..." />
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
</style>
