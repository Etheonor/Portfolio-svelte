<script lang="ts">
  import { page } from '$app/stores';
</script>

<header>
  <nav class="mb-10 flex bg-slate-50 p-3">
    <ul class="m-auto flex space-x-3 text-xl">
      <li class={$page.url.pathname === '/' ? 'font-bold underline' : ''}>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      <li class={$page.url.pathname === '/about' ? 'font-bold underline' : ''}>
        <a id="about" sveltekit:prefetch href="/about">About</a>
      </li>
    </ul>
  </nav>
</header>
