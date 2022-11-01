<script lang="ts">
  export let src
  export let alt
  export let height = 'auto'
  export let ar = '16/9'
</script>

<img {src} {alt} style:--h={height} style:--ar={ar} />

<style>
  img {
    width: 100%;
    height: var(--h);
    object-fit: cover;
    aspect-ratio: var(--ar);
    border-radius: 15px;
    background: linear-gradient(var(--color-bg), var(--color-bg)) padding-box,
      linear-gradient(to right, darkblue, darkorchid) border-box;
    border: 4px solid transparent;
  }
</style>
