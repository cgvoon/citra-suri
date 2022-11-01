<script lang="ts">
  import Scrolly from './lib/Scrolly.svelte'
  import { quintOut } from 'svelte/easing'
  import { pelancaran, mewarna, sukaneka, penangguhan } from './lib/steps'
  import { typewriter } from './lib/typewriter'
  import suri from './assets/logo-suri.svg'
  import SplashScreen from './lib/SplashScreen.svelte'
  import Cover from './lib/Cover.svelte'
  import Calender from './lib/extraIcons/Calender.svelte'
  import Merdeka from './lib/Merdeka.svelte'
  import ImageCard from './lib/ImageCard.svelte'
  import VideoCard from './lib/VideoCard.svelte'
  import { fade } from 'svelte/transition'
  import { ConfettiExplosion } from 'svelte-confetti-explosion'
  import { tick } from 'svelte'
  import ZoomControl from './lib/ZoomControl.svelte'

  let stepIndex = 0
  let stepRatios = []
  let stepsCompleted = []

  let mainRef = null

  // const INDICES = {
  //   fade: 1,
  //   transform: 4,
  //   side: 6,
  //   behind: 9,
  //   caption: 11,
  // }

  $: stepRatio = stepRatios[stepIndex] || 0
  $: stepRatios.forEach((ratio, i) => {
    if (ratio === 1) {
      stepsCompleted[i] = true
    }
  })

  // video
  let duration
  let time = 0

  $: time = duration * stepRatio
  // make

  function thumbBounce(node, clicked) {
    if (clicked) {
      return {
        duration: 500,
        easing: quintOut,
        css: (t: number) => {
          const scale = clicked ? 1.2 : 1
          return `transform: scale(${scale})`
        },
      }
    }
    return
  }
</script>

<SplashScreen />
<Merdeka />

<main bind:this={mainRef}>
  <ZoomControl el={mainRef} />

  <Cover />

  <section class="tarikh">
    <h1>🗓 08 OGOS 2022 - 02 SEPTEMBER 2022</h1>
    <p>📍 Sekolah Kebangsaan Suri</p>
    <p>⏰ Sepanjang bulan kemerdekaan</p>
  </section>

  <section class="jadual">
    <h1 style:position="relative">
      Jadual Aktiviti <span><Calender /></span>
    </h1>
    <ul>
      <li>08/08/2022 <br /> <span>Pelancaran</span></li>
      <li>26/08/2022 <br /> <span>Pertandingan Mewarna</span></li>
      <li>27/08/2022 <br /> <span>Acara Sukaneka Citra</span></li>
      <li>28/08/2022 <br /> <span>Pertandingan Sajak dan Syair</span></li>
      <li>
        28/08/2022 <br />
        <span>Pertandingan Pakaian Seragam Pra Sekolah</span>
      </li>
      <li>28/08/2022 <br /> <span>Pertandingan Lagu Patriotik</span></li>
      <li>
        02/09/2022 <br />
        <span>Majlis Pernangguhan dan Penyampaian Hadiah</span>
      </li>
    </ul>
  </section>

  <Scrolly bind:stepIndex bind:stepRatios>
    <section class="tema">
      <h1>Tema Hari Kemerdekaan 2022</h1>

      <p style:font-size="1.2rem">
        <span style:color="yellow">Keluarga Malaysia Teguh Bersama</span>
        ditetapkan sebagai tema sambutan Hari Kebangsaan ke 65 dan Hari Malaysia
        ke 59 yang bermaksud keprihatinan, kesungguhan dan ketabahan warga Malaysia
        dalam mengharungi cabaran dan dugaan pandemik Covid-19.
      </p>
    </section>

    {#each pelancaran as step, i}
      {@const completed = stepsCompleted[i + 1]}
      {@const stepRatio = stepRatios[i + 1] || 0}
      <section id={step.tag} style:opacity={completed ? 1 : stepRatio}>
        {#if step.type === 'image'}
          <ImageCard src={step.media} ar={step.ar} alt={step.title} />
        {/if}
        {#if step.type === 'video'}
          <VideoCard src={step.media} />
        {/if}

        <div style:padding="1em">
          <h1
            style:font-size="2rem"
            style:transform={completed ? '' : `scale(${stepRatio})`}
            style:opacity={completed ? 1 : stepRatio}
          >
            {step.title}
          </h1>
        </div>

        <p style:font-size="1.2rem" style:padding="1em">
          {typewriter(step.content, completed ? 1 : stepRatio)}
        </p>
      </section>
    {/each}

    {#each mewarna as step, i}
      {@const completed = stepsCompleted[i + pelancaran.length + 1]}
      {@const stepRatio = stepRatios[i + pelancaran.length + 1] || 0}
      <section id={step.tag}>
        <ImageCard src={step.media} ar={step.ar} alt={step.title} />
        <div style:padding="1em">
          <h1
            style:font-size="2rem"
            style:transform={completed ? '' : `scale(${stepRatio})`}
            style:opacity={completed ? 1 : stepRatio}
          >
            {step.title}
          </h1>
        </div>
        <p style:font-size="1.2rem" style:padding="1em">
          {typewriter(step.content, completed ? 1 : stepRatio)}
        </p>
      </section>
    {/each}

    {#each sukaneka as step, i}
      {@const completed =
        stepsCompleted[i + pelancaran.length + mewarna.length + 1]}
      {@const stepRatio =
        stepRatios[i + pelancaran.length + mewarna.length + 1] || 0}

      <section id={step.tag}>
        {#if step.type === 'image'}
          <ImageCard src={step.media} ar={step.ar} alt={step.title} />
        {/if}
        {#if step.type === 'video'}
          <VideoCard src={step.media} />
        {/if}
        <div style:padding="1em">
          <h1
            style:font-size="2rem"
            style:padding-inline="1em"
            style:transform={completed ? '' : `scale(${stepRatio})`}
            style:opacity={completed ? 1 : stepRatio}
          >
            {step.title}
          </h1>
        </div>
        {#if step.content}
          <p style:font-size="1.2rem" style:padding="1em">
            {typewriter(step.content, completed ? 1 : stepRatio)}
          </p>
        {/if}
      </section>
    {/each}

    {#each penangguhan as step, i}
      {@const index =
        i + pelancaran.length + mewarna.length + sukaneka.length + 1}
      {@const completed = stepsCompleted[index]}
      {@const stepRatio = stepRatios[index] || 0}

      <section id={step.tag}>
        {#if step.type === 'image'}
          <ImageCard src={step.media} ar={step.ar} alt={step.title} />
        {/if}
        {#if step.type === 'video'}
          <VideoCard src={step.media} />
        {/if}
        <h1
          style:font-size="2rem"
          style:padding-inline="1em"
          style:transform={completed ? '' : `scale(${stepRatio})`}
          style:opacity={completed ? 1 : stepRatio}
        >
          {step.title}
        </h1>
        {#if step.content}
          <p style:font-size="1.2rem" style:padding="1em">
            {typewriter(step.content, completed ? 1 : stepRatio)}
          </p>
        {/if}
      </section>
    {/each}

    <!-- // sini -->
    <section
      style:margin-top="3rem"
      style:height="600px"
      style:word-break="break-all"
      style:display="grid"
      style:place-items="center"
    >
      <p style:font-size="4rem" style:text-align="center">
        Majlis <br /> Penutupan <br /> Rasmi <br /> Bulan <br /> Citra Merdeka
      </p>
    </section>
    <section id="rev" style:display="grid" style:place-items="center">
      <img
        src="https://lh3.googleusercontent.com/46Dd107hfdPmYhNgFqTu-gLHTbzFBr0uh0diB7im4udef7QhejV6R1aPSC7RBGoELLA=w2400"
        style:aspect-ratio="1"
        alt="penutupan"
        width="100%"
        height="auto"
      />
    </section>

    <section id="rev2" style:display="grid" style:place-items="center">
      <img
        src="https://lh4.googleusercontent.com/j17spz8qbMDA2iJ7jTux2mRT6ZHKKy94o6_WoV04z42uWp794bnGm7rRYZCgtTWYjJU=w2400"
        alt="penutupan"
        width="100%"
        style:aspect-ratio="4/3"
        height="auto"
      />
    </section>

    <section
      style:margin-top="3rem"
      style:height="600px"
      style:word-break="break-all"
      style:display="grid"
      style:place-items="center"
    >
      <p style:font-size="4rem" style:text-align="center">
        Kunjungi FB Rasmi <br /> SK Suri untuk <br /> gambar-gambar. 🥰<br />
      </p>
    </section>
    <section
      style:margin-top="3rem"
      style:height="600px"
      style:word-break="break-all"
      style:display="grid"
      style:place-items="center"
    >
      <p style:font-size="4rem" style:text-align="center">
        Jumpa lagi tahun depan!! <br />😁👍🏼
      </p>
    </section>
  </Scrolly>
</main>

<aside>
  <img class="logo" src={suri} alt="suri" width="50px" height="50px" />
  <a href="https://www.facebook.com/100057277705376">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-facebook"
    >
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      />
    </svg>
  </a>
</aside>

<footer>© Copyright 2022 SK SURI. Crafted by Cikgu Voon</footer>

<style>
  /* pre {
    font-size: 11px;
    color: white;
    position: fixed;
    inset: 0;
    width: 50px;
    height: 50px;
    background: transparent;
  } */

  h1 {
    transition: 600ms ease all;
  }
  section {
    width: 100%;
    max-height: 80%;
    height: auto;
    border-style: dotted;
    border-width: 2px;
    margin-block: 2rem;
    border-radius: 15px;
    position: relative;
    scroll-snap-align: center;
  }

  section.tarikh,
  section.jadual,
  section.tema {
    padding: 1em;
  }

  section.tarikh p {
    font-size: 1.4rem;
  }

  section.jadual {
    height: auto;
  }

  section.jadual ul {
    font-size: 1rem;
    list-style: none;
    padding-left: 0;
    display: grid;
    gap: 1rem;
    color: rgb(152, 152, 152);
  }

  section.jadual ul li span {
    color: rgb(32, 255, 162);
    font-size: larger;
  }

  img:not(.logo) {
    width: 80%;
    height: 80%;
    object-fit: cover;
    aspect-ratio: auto;
  }
  /* .side {
    display: grid;
    place-items: center;
    position: fixed;
    top: 15vh;
    right: 5%;
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
    border-radius: 15px;
    font-size: 4rem;
  } */

  /* .caption p {
    border-style: dotted;
    border-width: 2px;
    width: 30ch;
  } */

  p {
    font-size: 2rem;
    line-height: 1.5;
  }
</style>
