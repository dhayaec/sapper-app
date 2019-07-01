<script>
  export let disabled = false;

  const colors = new Set(["orange", "blue", "green", "red"]);

  export let variant = [...colors][0];
  export let fullWidth = false;
  let fullWidthClass = "";
  if (fullWidth) {
    fullWidthClass = "full-width";
  }
</script>

<style>
  button {
    color: #f0f0f0;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.4rem;
    margin: 0.1rem;
  }
  button:hover {
    cursor: pointer;
    color: #fff;
  }

  button.full-width {
    width: 100%;
  }

  button.orange {
    background: #ff5722;
    border: 1px solid #ff5722;
  }

  button.orange:hover {
    background: #e64a19;
    border: 1px solid #e64a19;
  }

  button.orange:active {
    background: #bf360c;
    border: 1px solid #bf360c;
  }

  button.blue {
    background: #1e88e5;
    border: 1px solid #1e88e5;
  }

  button.blue:hover {
    background: #1976d2;
    border: 1px solid #1976d2;
  }

  button.blue:active {
    background: #0d47a1;
    border: 1px solid #0d47a1;
  }

  button.green {
    background: #43a047;
    border: 1px solid #43a047;
  }

  button.green:hover {
    background: #2e7d32;
    border: 1px solid #2e7d32;
  }

  button.green:active {
    background: #1b5e20;
    border: 1px solid #1b5e20;
  }

  button.red {
    background: #e53935;
    border: 1px solid #e53935;
  }

  button.red:hover {
    background: #c62828;
    border: 1px solid #c62828;
  }

  button.red:active {
    background: #b71c1c;
    border: 1px solid #b71c1c;
  }

  button[disabled],
  button[disabled]:hover,
  button[disabled]:active {
    background: grey;
    color: #ccc;
    cursor: not-allowed;
    border: 1px solid grey;
  }

  button:focus {
    outline: 1px dotted #0d47a1;
  }
</style>

<button class={`${variant} ${fullWidthClass}`} on:click {disabled}>
  <slot>Button</slot>
</button>
