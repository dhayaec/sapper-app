<script>
  import { onMount, afterUpdate } from "svelte";
  import flatpickr from "flatpickr";

  export let value;
  export let placeholder;
  export let label;
  export let name;
  export let errors = [];
  export let options = {};

  let errorMessage = "";
  if (errors.length) {
    errors.forEach(i =>
      i.path === name ? (errorMessage = i.message) : (errorMessage = "")
    );
  }

  let fp;
  onMount(() => {
    fp = flatpickr(document.getElementById(`dateInput${name}`), options);
  });

  afterUpdate(() => {
    if (fp && !value) {
      fp.setDate(value, true);
    }
  });
</script>

<style>
  input {
    background: #fcfcfc;
    border: 1px solid #ccc;
    font-size: 1rem;
    text-indent: 0.6rem;
    border-radius: 0.4rem;
    height: 2.2rem;
    width: 100%;
    padding: 0;
  }
  input:focus {
    background: #ffffff;
    border: 1px solid var(--primary_color);
    outline: #f0f0f0;
  }
  ::placeholder {
    padding-left: 0.1rem;
  }
  span {
    color: red;
  }
</style>

<label for={`dateInput${name}`}>
  {label}
  <input id={`dateInput${name}`} type="text" bind:value {placeholder} />
  <span>{errorMessage}</span>
</label>
