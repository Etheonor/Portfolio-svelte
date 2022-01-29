<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Mail from '../components/Mail.svelte';
  import Linkedin from '../components/Linkedin.svelte';
  import Twitter from '../components/Twitter.svelte';
  import Project from '../components/Project.svelte';
</script>

<svelte:head>
  <title>📓 My Portfolio</title>
</svelte:head>

<section class="flex h-screen flex-row">
  <div class="flex w-full flex-col bg-stone-800 text-slate-100">
    <div
      class="m-auto grid h-screen w-full grid-flow-col auto-rows-max grid-rows-3">
      <div class="m-auto font-body text-base md:text-xl xl:text-2xl">
        <img
          src="/images/avatar.svg"
          alt="an arrow"
          class="m-auto mt-14 mb-5 w-28 md:w-32 lg:mt-16 xl:mt-20" />
        <p class="max-w-xl px-5 text-center md:leading-relaxed lg:px-0">
          I’m <span class="text-amber-500">Michael</span>, a web developer
          available to work with you on your next awesome website.
        </p>
      </div>
      <p class="m-auto font-title text-big font-bold  sm:mr-5">H</p>
      <div class="m-auto" />
    </div>
  </div>
  <div
    class="grid w-full grid-flow-col auto-rows-max grid-rows-3 bg-slate-100 text-stone-800">
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
    <p class="m-auto font-title text-big font-bold sm:ml-5">I</p>
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
<Project
  project="Multy"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Duis a sagittis lorem, ut porta libero. Etiam congue cursus ornare. 
  Ut enim felis, venenatis ac porta pellentesque, finibus pellentesque ante. 
  Donec euismod malesuada tortor, at efficitur dolor. Interdum et malesuada 
  fames ac ante ipsum primis in faucibus. Sed erat nisl, egestas vitae tortor elementum, 
  dignissim vestibulum metus. Proin sodales blandit eleifend. Nunc posuere dui ut suscipit interdum."
  image="/images/multy.png"
  link="https://www.multy.me"
  bg="dark" />
<Project
  project="SupaNexTail"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Duis a sagittis lorem, ut porta libero. Etiam congue cursus ornare. 
  Ut enim felis, venenatis ac porta pellentesque, finibus pellentesque ante. 
  Donec euismod malesuada tortor, at efficitur dolor. Interdum et malesuada 
  fames ac ante ipsum primis in faucibus. Sed erat nisl, egestas vitae tortor elementum, 
  dignissim vestibulum metus. Proin sodales blandit eleifend. Nunc posuere dui ut suscipit interdum."
  image="/images/supanextail.png"
  link="https://www.supanextail.dev"
  bg="light" />
<Project
  project="Travelogue"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Duis a sagittis lorem, ut porta libero. Etiam congue cursus ornare. 
  Ut enim felis, venenatis ac porta pellentesque, finibus pellentesque ante. 
  Donec euismod malesuada tortor, at efficitur dolor. Interdum et malesuada 
  fames ac ante ipsum primis in faucibus. Sed erat nisl, egestas vitae tortor elementum, 
  dignissim vestibulum metus. Proin sodales blandit eleifend. Nunc posuere dui ut suscipit interdum."
  image="/images/travelogue.png"
  link="https://www.travelogue.earth"
  bg="dark" />
