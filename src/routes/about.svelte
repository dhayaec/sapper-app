<script>
  import {
    Button,
    Checkbox,
    Input,
    Select,
    Radio,
    TextArea
  } from "../components/ui/FormFields";
  import NProgress from "nprogress";
  import { validate, upperCase, clone, sleep } from "../utils/utils";

  const initialValue = {
    name: "",
    email: "",
    value: "",
    accepted: false,
    gender: "",
    about: ""
  };

  let v = clone(initialValue);
  let showResults = false;
  let isSubmitting = false;
  const options = [
    { id: 1, text: "One" },
    { id: 2, text: "Two" },
    { id: 3, text: "Three" },
    { id: 4, text: "Four" }
  ];

  const handleClick = async () => {
    isSubmitting = true;
    NProgress.start();
    await sleep(1000);
    NProgress.done();
    showResults = true;
    clearValues();
  };

  const assignValues = () => {
    v = {
      ...v,
      name: "name",
      email: "blah@blah.com",
      about: "About value",
      value: options[1],
      accepted: true
    };
  };

  const clearValues = () => {
    v = clone(initialValue);
    showResults = false;
  };

  $: disabled = validate(v);

  $: isSubmitting ? (disabled = true) : (isSubmitting = false);
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .input {
    margin-bottom: 0.5rem;
  }
  .radio-group {
    display: flex;
  }
</style>

<div class="container">
  <div class="input">
    <Input bind:value={v.name} placeholder="Enter name" />
  </div>
  <div class="input">
    <Input bind:value={v.email} placeholder="Enter email" />
  </div>
  <div class="input">
    <Select selectLabel="Select Number" {options} bind:value={v.value} />
  </div>
  <div class="input">
    <Checkbox bind:checked={v.accepted} label="Accept this checkbox?" />
  </div>
  <div class="input">
    <div class="radio-group">
      <Radio bind:group={v.gender} value="Male" label="Male" />
      <Radio bind:group={v.gender} value="Female" label="Female" />
    </div>
  </div>
  <div class="input">
    <TextArea bind:value={v.about} placeholder="About yourself" />
  </div>
  <div class="input">
    <Button {disabled} variant="blue" on:click={handleClick}>Values</Button>
  </div>
  <div class="input">
    <Button variant="green" on:click={clearValues}>Clear Values</Button>
  </div>
  <div class="input">
    <Button variant="orange" on:click={assignValues}>Assign Values</Button>
  </div>

  {#if showResults}
    <div>
      {#each Object.keys(v) as i}
        <p>
           {`${upperCase(i)} : ${typeof v[i] === 'object' ? v[i].text : v[i]}`}
        </p>
      {/each}
    </div>
  {/if}
</div>
