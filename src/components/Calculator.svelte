<script>
  import { Input } from "./ui/FormFields";
  const calculate = (a, b) => {
    const res = +a + +b;
    return !isNaN(res) ? res : 0;
  };

  let fieldOne = "";
  let fieldTwo = "";
  let total = 0;

  $: total = calculate(fieldOne, fieldTwo);
</script>

<div class="container">
  <div class="input">
    <Input
      name="one"
      label="One"
      bind:value={fieldOne}
      placeholder="Enter Value One" />
  </div>
  <div class="input">
    <Input
      name="two"
      label="Two"
      bind:value={fieldTwo}
      placeholder="Enter Value Two" />
  </div>
  <div>
    <h1>{total}</h1>
  </div>
</div>
