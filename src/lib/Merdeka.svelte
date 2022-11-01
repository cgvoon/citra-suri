<script lang="ts">
  import logoMerdeka from '../assets/logo-merdeka.png'
  export let show = true
</script>

{#if show}
  <div>
    <img src={logoMerdeka} alt="teguh malaysia logo" />
  </div>
{/if}

<style>
  div {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: 0.1;
    background-color: white;
    display: grid;
    place-items: center;
  }
  img {
    width: 100%;
    object-fit: contain;
    border: 30px solid white;
  }

  @media screen and (min-width: 480px) {
    img {
      width: 40%;
      max-width: 40%;
    }
  }
</style>
