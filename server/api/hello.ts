import pkg from 'graphql';
import { useBody, useCookies, useQuery } from 'h3'

const { buildSchema, graphql } = pkg;
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello: () => {
    return 'Hello world!';
  },
};

// Run the GraphQL query '{ hello }' and print out the response
export default async (req, res) => {
  const body = await useBody(req) // only for POST request
  console.log(body)

  return graphql({
    schema,
    source: body.query,
    rootValue
  })
}