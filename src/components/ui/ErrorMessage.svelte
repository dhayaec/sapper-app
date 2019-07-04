<script>
  const handleClick = () => console.log("Clicked");
  const data = [
    {
      id: 1,
      value: "One"
    },
    {
      id: 2,
      value: "Two"
    }
  ];
</script>

<style>
  p {
    color: red;
  }
</style>

<div on:click={handleClick} id="ErrorMessage">
  <p>Error: this is an error</p>
  {#each data as d}
    <p>{d.value}</p>
  {/each}
</div>
