<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Lead from '../components/Lead.svelte';
  import Project from '../components/Project.svelte';
  import Contact from '../components/Contact.svelte';
</script>

<svelte:head>
  <title>📓 My Portfolio</title>
</svelte:head>

<Lead />
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
<Contact bg="light" />
