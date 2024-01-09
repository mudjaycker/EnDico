<script>
  import { Read } from "../libs/read";
  let text = "";
  const read = (txt) =>{
    text = txt
    new Read(txt).search()
  }
</script>

<nav>
  <section>
    <aside>
      <h1>{text}</h1>
    </aside>
    <aside>
      <form action="" on:submit|preventDefault={()=>read(text)}>
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
      :first-child {
        color: white;
      }
      :nth-child(2){
        color: black;
      }
    }
  }
</style>
