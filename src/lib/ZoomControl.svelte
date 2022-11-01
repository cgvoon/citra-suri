<script lang="ts">
  export let zoom = 1
  export let el: HTMLElement

  $: if (el) {
    // @ts-ignore
    el.style.zoom = zoom

    if (zoom > 1) {
      el.style.transformOrigin = '0 0'
    }
  }
</script>

<div class="container">
  <!-- click to zoom out -->
  <button on:click={() => (zoom = zoom - 0.1)}>-</button>

  <!-- click to zoom in -->
  <button on:click={() => (zoom = zoom + 0.1)}>+</button>
</div>

<style>
  .container {
    position: fixed;
    bottom: 10vh;
    right: 5vw;
    z-index: 10;
    display: flex;
    column-gap: 10px;
  }

  button {
    width: 50px;
    height: 50px;
    background: linear-gradient(to right, darkgreen, rgb(43, 228, 30))
      border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 2rem;
  }
</style>
