<script lang="ts">
  import flag from '../assets/malaysia-flag.svg'
  import suri from '../assets/logo-suri.svg'
  import { ConfettiExplosion } from 'svelte-confetti-explosion'
  import { onMount, tick } from 'svelte'
  let isVisible

  onMount(() => {
    setTimeout(() => {
      isVisible = true
    }, 6000)
  })

  async function handleClick() {
    isVisible = false
    await tick()
    isVisible = true
  }
</script>

<section>
  <p>
    <span class="text-pop-up-bottom"> Citra Merdeka SK Suri 2022 </span>

    {#if isVisible}
      <ConfettiExplosion
        particleCount={200}
        stageWidth={1200}
        stageHeight={800}
        --x="380px"
        --y="-300px"
      />
    {/if}
  </p>
  <div class="container flex">
    <img
      on:click={handleClick}
      src={suri}
      width="120px"
      class=" wobble-hor-top suri-logo"
      alt="Logo Suri"
    />
    <img
      on:click={handleClick}
      src={flag}
      width="120px"
      class="m-flag wobble-hor-top "
      alt="Malaysia flag"
    />
  </div>

  <div class="container" style:margin-top="4rem">
    <svg
      class="fade-in-top"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </div>
</section>

<style>
  section {
    scroll-snap-align: start;
    padding: 1rem;
    font-size: 8rem;
    display: grid;
    place-items: start;
    text-align: left;
    height: 65vh;
    font-family: 'PT Serif', serif;
    line-height: 1.2;
    margin-bottom: 4em;
    width: 100%;
  }

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    text-align: center;
  }

  svg {
    width: 40px;
    height: 40px;
  }

  .suri-logo {
    margin-left: -2rem;
  }

  .m-flag {
    transform: rotate(10deg);
    cursor: pointer;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
      rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
      rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  }

  .fade-in-top {
    -webkit-animation: fade-in-top 1s cubic-bezier(0.39, 0.575, 0.565, 1)
      infinite alternate both;
    animation: fade-in-top 1s cubic-bezier(0.39, 0.575, 0.565, 1) infinite
      alternate both;
  }

  .wobble-hor-top {
    -webkit-animation: wobble-hor-top 6s 200ms infinite both;
    animation: wobble-hor-top 6s 200ms infinite both;
  }

  .text-pop-up-bottom {
    -webkit-animation: text-pop-up-bottom 4s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
    animation: text-pop-up-bottom 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s
      both;
  }

  @-webkit-keyframes text-pop-up-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      text-shadow: none;
    }
    100% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
        0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
        0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
    }
  }

  @-webkit-keyframes text-pop-up-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      text-shadow: none;
    }
    100% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
        0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
        0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
    }
  }
  @keyframes text-pop-up-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      text-shadow: none;
    }
    100% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
        0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
        0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
    }
  }

  @-webkit-keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  /**
 * ----------------------------------------
 * animation wobble-hor-top
 * ----------------------------------------
 */
  @-webkit-keyframes wobble-hor-top {
    0%,
    100% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateX(-30px) rotate(6deg);
      transform: translateX(-30px) rotate(6deg);
    }
    30% {
      -webkit-transform: translateX(15px) rotate(-6deg);
      transform: translateX(15px) rotate(-6deg);
    }
    45% {
      -webkit-transform: translateX(-15px) rotate(3.6deg);
      transform: translateX(-15px) rotate(3.6deg);
    }
    60% {
      -webkit-transform: translateX(9px) rotate(-2.4deg);
      transform: translateX(9px) rotate(-2.4deg);
    }
    75% {
      -webkit-transform: translateX(-6px) rotate(1.2deg);
      transform: translateX(-6px) rotate(1.2deg);
    }
  }
  @keyframes wobble-hor-top {
    0%,
    100% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    15% {
      -webkit-transform: translateX(-30px) rotate(6deg);
      transform: translateX(-30px) rotate(6deg);
    }
    30% {
      -webkit-transform: translateX(15px) rotate(-6deg);
      transform: translateX(15px) rotate(-6deg);
    }
    45% {
      -webkit-transform: translateX(-15px) rotate(3.6deg);
      transform: translateX(-15px) rotate(3.6deg);
    }
    60% {
      -webkit-transform: translateX(9px) rotate(-2.4deg);
      transform: translateX(9px) rotate(-2.4deg);
    }
    75% {
      -webkit-transform: translateX(-6px) rotate(1.2deg);
      transform: translateX(-6px) rotate(1.2deg);
    }
  }
</style>
