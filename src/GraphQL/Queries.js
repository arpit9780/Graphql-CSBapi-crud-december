import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query loadUsers{
       users  {
            id
            email
            name
        }
  }
`;

// export const GET_TODOS = gql`
// query getTodos{
//   todos  {
//       id
//       description
//   }
// }
// `;

export const GET_CORE = gql`
query getCore{
   cores {
   id
   missions {
     flight
     name
     }
   }
   }
   `
  export const GET_DRAGONS = gql`
   query dragons {
    dragons {
     id
     description
      }
    }
  `
  export const GET_A_DRAGON = gql`
  query Dragon($dragonId : ID!) {
  dragon(id: $dragonId) {
    id
    active
    }
  }
  `
  export const GET_PAYLOADS = gql`
  query Payloads($limit: Int,$offset: Int) {
  payloads(limit: $limit, offset: $offset) {
    id
    manufacturer
    customers
    nationality
  }
}
  `

  export const GET_TODOS = gql`
  query Todos{
    todos{
      id
      type
    }
  }
  `

  export const GET_TODO = gql`
  query Todo($id:String!){
    todo(id:$id){
      id
      type
    }
  }`