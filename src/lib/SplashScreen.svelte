<script lang="ts">
  import { fade } from 'svelte/transition'
  import { onMount } from 'svelte'
  import logo from '../assets/logo-suri.svg'

  export let show = true // default value

  onMount(() => {
    setTimeout(() => {
      show = false
    }, 2000)
  })
</script>

{#if show}
  <div transition:fade>
    <img src={logo} width="500px" alt="Suri logo" />
  </div>
{/if}

<style>
  div {
    pointer-events: none;
    background-color: #f3c621;
    width: 100vw;
    height: 100%;
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
  }

  img {
    animation: pulse-fwd 1s ease-in-out infinite;
  }

  /**
 * ----------------------------------------
 * animation pulse-fwd
 * ----------------------------------------
 */
  @-webkit-keyframes pulse-fwd {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes pulse-fwd {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
