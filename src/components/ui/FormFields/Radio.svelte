<script>
  export let group;
  export let value;
  export let label = "Radio Label";
  let checked = "";
</script>

<style>
  input[type="radio"] {
    -webkit-appearance: none;
    background-color: #fafafa;
    border: 1px solid #cacece;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 50px;
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    top: -1px;
    outline: #fafafa;
  }

  input[type="radio"]:focus {
    outline: 1px dotted #0d47a1;
  }

  input[type="radio"]:checked:after {
    content: " ";
    width: 12px;
    height: 12px;
    border-radius: 50px;
    position: absolute;
    top: 3px;
    background: #0d47a1;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);
    text-shadow: 0px;
    left: 3px;
    font-size: 32px;
  }

  input[type="radio"]:checked {
    background-color: #e9ecee;
    color: #99a1a7;
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
      inset 15px 10px -12px rgba(255, 255, 255, 0.1),
      inset 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  input[type="radio"]:active,
  input[type="radio"]:checked:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  }
  label {
    width: 100%;
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

<label for={`radio-${value}`}>
  <input type="radio" bind:group {value} {checked} id={`radio-${value}`} />
  <p>{label}</p>
</label>
