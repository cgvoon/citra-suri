<script lang="ts">
  import { ConfettiExplosion } from 'svelte-confetti-explosion'
  import { tick } from 'svelte'

  export let src
  let video

  let cofetti = false
</script>

<div>
  {#if cofetti}
    <ConfettiExplosion
      stageWidth={500}
      --x="120px"
      particleCount={20}
      particleSize={6}
    />
  {/if}
  <iframe
    title={src}
    bind:this={video}
    {src}
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    allowfullscreen={true}
    frameborder="0"
    width={'100%'}
    height={360}
  />
</div>

<style>
  div {
    position: relative;
  }
</style>
