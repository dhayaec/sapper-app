<script>
  import Button from "../components/Button.svelte";

  let count = 0;

  function handleClick() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }

  $: doubled = count * 2;
  $: quadrupled = doubled * 2;
</script>

<h1>Contact Us Page</h1>

<h1>{count}</h1>

<h1>Doubled {doubled}</h1>

<h1>Quadrupled {quadrupled}</h1>

<p>Welcome to contact us page</p>

<Button onClick={handleClick}>
  <b>Hello World</b>
</Button>
<br />
<Button variant="blue" onClick={handleClick}>
  <strong>Proceed</strong>
</Button>
<br />
<Button fullWidth={true} variant="green" onClick={handleClick}>
  <b>Proceed</b>
</Button>
<br />
<Button variant="red" onClick={decrement}>Failure</Button>
<br />

<Button disabled={true} onClick={decrement}>Disabled</Button>
