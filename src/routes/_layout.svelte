<script>
  import Nav from "../components/Nav.svelte";
  import NProgress from "nprogress";
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";

  export let segment;

  const { preloading } = stores();
  onMount(async () => {
    preloading.subscribe(v => (v ? NProgress.start() : NProgress.done()));
  });
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 1rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
