<script>
  import { Button } from "../components/ui/FormFields";
  import Calculator from "../components/Calculator.svelte";

  let count = 0;

  const incrementCount = () => (count += 1);

  const decrementCount = () => (count -= 1);

  $: doubled = count * 2;
  $: quadrupled = doubled * 2;

  let state = false;

  const toggle = () => (state = !state);
</script>

<h1>Contact Us Page</h1>

<h1>{count}</h1>

<h1>Doubled {doubled}</h1>

<h1>Quadrupled {quadrupled}</h1>

<p>Welcome to contact us page</p>

<Button on:click={incrementCount}>
  <b>Hello World</b>
</Button>
<br />
<Button variant="blue" on:click={incrementCount}>
  <strong>Proceed</strong>
</Button>
<br />
<Button fullWidth={true} variant="green" on:click={incrementCount}>
  <b>Proceed</b>
</Button>
<br />
<Button variant="red" on:click={toggle}>Failure</Button>
<br />

<Button disabled={state} on:click={toggle}>Disabled</Button>

<Button on:click={decrementCount}>Disabled</Button>

<div>
  <Calculator />
</div>

<a href="http://www.google.co.in">Google Here</a>
