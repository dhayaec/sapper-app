<script context="module">
  import { client, REGISTER } from "../graphql";
  import { formatErrors, clone } from "../utils/utils";
  import { gql } from "apollo-boost";

  const GET_MAIN_CATEGORY = gql`
    {
      getMainCategory {
        id
        name
        slug
        children {
          id
          name
          slug
        }
      }
    }
  `;

  export async function preload() {
    const { data, errors } = await client.query({
      query: GET_MAIN_CATEGORY
    });

    return {
      data,
      errors
    };
  }
</script>

<script>
  import { restore, mutate } from "svelte-apollo";
  import { Button, Input } from "../components/ui/FormFields";

  export let data;
  export let errors;

  restore(client, GET_MAIN_CATEGORY, data);
  //   setClient(client);
  const initialValue = {
    name: "",
    email: "",
    password: ""
  };

  let disabled = false;

  let v = clone(initialValue);

  let response = null;

  const handleClick = async () => {
    try {
      response = await mutate(client, {
        mutation: REGISTER,
        variables: {
          data: v
        }
      });
    } catch (error) {
      errors = formatErrors(error);
    }
  };
  console.log(response);
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
  .error {
    color: red;
  }
</style>

<!-- {#if data}
  <ul>
    {#each data.getMainCategory as category}
      <li>{category.name}</li>
    {/each}
  </ul>
{/if} -->

<div class="container">

  {#if errors}{JSON.stringify(errors)}{/if}

  {#if errors && errors.length}
    {#each errors as error}
      <p class="error">{error.message}</p>
    {/each}
  {/if}

  <div class="input">
    <Input
      label="Full Name"
      name="name"
      bind:value={v.name}
      placeholder="Enter name"
      errors={errors && errors.formErrors} />
  </div>
  <div class="input">
    <Input
      label="Email Address"
      name="email"
      bind:value={v.email}
      placeholder="Enter email"
      errors={errors && errors.formErrors} />
  </div>
  <div class="input">
    <Input
      label="Password"
      name="password"
      bind:value={v.password}
      placeholder="Enter password"
      errors={errors && errors.formErrors} />
  </div>
  <div class="input">
    <Button {disabled} variant="blue" on:click={handleClick}>Register</Button>
  </div>
</div>
