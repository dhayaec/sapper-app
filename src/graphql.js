import ApolloClient, { gql } from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  fetch,
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.error(`
        [GraphQL]: ${message}
        Location: ${JSON.stringify(locations)}
        Path: ${path}
        `)
      })
    }
    if (networkError) {
      console.log('Network:' + networkError)
    }
  },
  credentials: 'include'
})

export const GET_MAIN_CATEGORY = `
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
`

export const REGISTER = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      name
      email
    }
  }
`
