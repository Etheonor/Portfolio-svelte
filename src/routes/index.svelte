<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Mail from '../components/Mail.svelte';
  import Linkedin from '../components/Linkedin.svelte';
  import Twitter from '../components/Twitter.svelte';
</script>

<svelte:head>
  <title>📓 My Portfolio</title>
</svelte:head>

<section class="flex flex-row">
  <div class="flex h-screen w-full flex-col bg-stone-900">
    <div
      class="m-auto grid h-screen w-full grid-flow-col auto-rows-max grid-rows-3">
      <div
        class="m-auto font-body text-base text-slate-100 md:text-xl xl:text-2xl">
        <img
          src="/images/avatar.svg"
          alt="an arrow"
          class="m-auto mt-14 mb-5 w-28 md:w-40 lg:mt-16 xl:mt-20" />
        <p class="max-w-xl px-5 text-center md:leading-relaxed lg:px-0">
          I’m <span class="text-amber-500">Michael</span>, a web developer
          available to work with you on your next awesome website.
        </p>
      </div>
      <p class="m-auto font-title text-big font-bold text-slate-100 sm:mr-5">
        H
      </p>
      <div class="m-auto" />
    </div>
  </div>
  <div
    class="grid h-screen w-full grid-flow-col auto-rows-max grid-rows-3 bg-slate-100">
    <div class="m-auto mr-10 mt-10 flex space-x-4 ">
      <a href="/contact"><Mail /></a>
      <a href="https://www.twitter.com/michael_webdev" target="_blank">
        <Twitter />
      </a>
      <a
        href="https://www.linkedin.com/in/micha%C3%ABl-breyton-a88aa146/"
        target="_blank">
        <Linkedin />
      </a>
    </div>
    <p class="m-auto font-title text-big font-bold text-stone-900 sm:ml-5">I</p>
    <div class="m-auto flex flex-col px-5 text-center">
      <div
        class="m-auto mb-5 max-w-xl px-5 text-center font-body text-base md:text-xl lg:px-0 xl:text-2xl">
        <p>Want to see some of my projects?</p>
        <p>Scroll down!</p>
      </div>
      <img
        src="/images/arrow-down.svg"
        alt="an arrow"
        class="m-auto mt-0 w-10" />
    </div>
  </div>
</section>
