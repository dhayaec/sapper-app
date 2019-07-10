<script>
  import {
    Button,
    Checkbox,
    Input,
    Select,
    Radio,
    TextArea,
    DateInput
  } from "../components/ui/FormFields";
  import NProgress from "nprogress";
  import { validate, upperCase, sleep } from "../utils/utils";
  import { fade } from "svelte/transition";

  const initialValue = {
    name: "",
    email: "",
    value: "",
    date: "",
    accepted: false,
    gender: "",
    about: ""
  };

  let v = { ...initialValue };
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
    // clearValues();
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
    v = { ...initialValue };
    showResults = false;
  };

  $: disabled = validate(v);

  $: isSubmitting ? (disabled = true) : (isSubmitting = false);

  const dateOptions = {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    disable: [
      {
        from: "2019-04-01",
        to: "2019-05-01"
      },
      {
        from: "2019-09-01",
        to: "2019-12-01"
      }
    ],
    defaultDate: new Date(),
    minDate: new Date()
  };
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
    <Input
      name="name"
      label="Full Name"
      bind:value={v.name}
      placeholder="Enter name" />
  </div>
  <div class="input">
    <Input
      name="email"
      label="Email Address"
      bind:value={v.email}
      placeholder="Enter email" />
  </div>
  <div class="input">
    <Select
      name="age"
      label="Select a number"
      selectLabel="Select Number"
      {options}
      bind:value={v.value} />
  </div>
  <div class="input">
    <Select
      disabled={true}
      name="age"
      label="Select a number"
      selectLabel="Select Number"
      {options}
      bind:value={v.value} />
  </div>
  <div class="input">
    <Checkbox
      name="accept"
      bind:checked={v.accepted}
      label="Accept this checkbox?" />
  </div>
  <div class="input">
    <div class="radio-group">
      <Radio name="gender" bind:group={v.gender} value="Male" label="Male" />
      <Radio
        name="gender"
        bind:group={v.gender}
        value="Female"
        label="Female" />
    </div>
  </div>
  <div class="input">
    <TextArea name="about" bind:value={v.about} placeholder="About yourself" />
  </div>
  <div class="input">
    <DateInput
      name="date"
      label="Date"
      bind:value={v.date}
      placeholder="Enter Date"
      options={dateOptions} />
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
    <div transition:fade>
      {#each Object.keys(v) as i}
        <p>
          {`${upperCase(i)} : ${typeof v[i] === 'object' ? v[i].text : v[i]}`}
        </p>
      {/each}
    </div>
  {/if}
</div>
