<script>
  export let project;
  export let description;
  export let image;
  export let link;
  export let bg;
  import Link from './Link.svelte';
</script>

<section
  class={`flex h-screen flex-row flex-wrap ${
    bg === 'dark'
      ? 'bg-stone-800 text-slate-100'
      : 'bg-slate-100 text-stone-800'
  }`}>
  <div class="flex flex-col m-auto">
    <div class="m-auto">
      <div class="m-auto font-body text-base md:text-xl xl:text-2xl">
        <div class="flex flex-col max-w-md">
          <h2 class="m-auto text-7xl font-title">{project}</h2>
          <div
            class={`h-24 border-l relative left-1/2 my-5 ${
              bg === 'dark' ? 'border-slate-100' : 'border-stone-900'
            }`} />
          <p
            class="max-w-xl px-5 text-center md:leading-relaxed lg:px-0 text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="m-auto">
    <div class="m-auto max-w-lg p-5">
      <img
        src={image}
        alt="Multy website presentation"
        class="shadow-md rounded-md" />
      <div class="flex mt-5">
        <Link {bg} />
        <a
          href={link}
          target="_blank"
          class={`text-lg tracking-widest transition duration-200 ease-in-out
            hover:text-amber-500`}>{link}</a>
      </div>
    </div>
  </div>
</section>
