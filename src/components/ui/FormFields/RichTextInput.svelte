<script>
  import { onMount } from "svelte";

  onMount(() => {
    const { jQuery } = window;
    if (jQuery) {
      jQuery("#richTextEditor").trumbowyg({
        btns: [["strong", "em"], ["insertImage"]],
        autogrow: true
      });
    }
  });
</script>

<style>
  .container {
    width: 80%;
    height: 50vh;
    margin: auto;
  }
</style>

<div class="container">
  <div id="richTextEditor" />
</div>
