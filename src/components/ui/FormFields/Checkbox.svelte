<script>
  export let checked;
  export let label = "Checkbox Label";
  export let name;
</script>

<style>
  input[type="checkbox"] {
    -webkit-appearance: none;
    background-color: #fafafa;
    border: 1px solid #cacece;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    top: -1px;
    outline: #fafafa;
  }
  input[type="checkbox"]:active,
  input[type="checkbox"]:checked:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }

  input[type="checkbox"]:focus {
    outline: 1px dotted var(--primary_color);
  }

  input[type="checkbox"]:checked {
    background-color: #e9ecee;
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
      inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    color: #99a1a7;
  }
  input[type="checkbox"]:checked:after {
    content: "\2714";
    font-size: 18px;
    position: absolute;
    top: 0px;
    left: 3px;
    color: var(--primary_color);
  }
  label {
    height: 2.2rem;
    display: block;
    padding-left: 2rem;
    text-indent: -2rem;
  }
  label p {
    display: inline;
    margin-left: 0.5rem;
    vertical-align: baseline;
    line-height: 1.5rem;
  }
</style>

<label for="checkbox">
  <input type="checkbox" bind:checked id="checkbox" />
  <p>{label}</p>
</label>
