<script>
  export let name = "textarea";
  export let cols = 30;
  export let rows = 20;
  export let value = "";
  export let placeholder = "";
</script>

<style>
  textarea {
    width: 100%;
    background: #fcfcfc;
    border: 1px solid #ccc;
    font-size: 1rem;
    text-indent: 0.5rem;
    border-radius: 0.4rem;
    resize: none;
    padding: 0.5rem;
    height: 20vh;
  }
  textarea:focus {
    background: #ffffff;
    border: 1px solid var(--primary_color);
    outline: #f0f0f0;
  }
</style>

<textarea bind:value {name} {cols} {rows} {placeholder} />
