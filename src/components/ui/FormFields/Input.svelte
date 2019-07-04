<script>
  export let value;
  export let placeholder;
  export let label;
  export let name;
  export let errors = [];

  let errorMessage = "";
  if (errors.length) {
    errors.forEach(i =>
      i.path === name ? (errorMessage = i.message) : (errorMessage = "")
    );
  }
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
    border: 1px solid #0d47a1;
    outline: #f0f0f0;
  }
  ::placeholder {
    padding-left: 0.1rem;
  }
  span {
    color: red;
  }
</style>

<label for="input-{name}">
  {label}
  <input id="input-{name}" type="text" bind:value {placeholder} />
  <span>{errorMessage}</span>
</label>
