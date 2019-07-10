<script>
  import { RichTextInput, Button } from "../components/ui/FormFields";
  import { count, doubled } from "../store/count";
</script>

<RichTextInput />

<h1>{$count}</h1>
<h2>{$doubled}</h2>

<Button on:click={count.increment}>Inc</Button>
<Button on:click={count.decrement}>Dec</Button>
<Button on:click={count.reset}>Reset</Button>
