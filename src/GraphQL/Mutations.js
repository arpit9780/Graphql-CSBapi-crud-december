import { gql } from "@apollo/client";

 
export const ADD_TODO = gql`
mutation AddTodo($type:String!){
  addTodo(type:$type){
    id
    type
  }
}
`

export const UPDATE_TODO = gql`
 mutation Update($id:String!,$type:String!){
  updateTodo(id:$id,type:$type){
    id
    type
  }
 }`



// export const CREATE_USER_MUTATION = gql`
//   mutation createUser(
//     $firstName: String!
//     $lastName: String!
//     $email: String!
//     $password: String
//   ) {
//     createUser(
//       firstName: $firstName
//       lastName: $lastName
//       email: $email
//       password: $password
//     ) {
//       id
//     }
//   }
// `;






//--------------------------------------For document purpose
/*

import { gql } from 'apollo-boost';

export const GET_USERS = gql`
  {
    getUsers {
      id,
      name,
      job_title,
      email
    }
  }
`;

export const VIEW_USERS = gql`
  query ($id: Int){
    getUserInfo(id: $id) {
      id,
      name,
      job_title,
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation($name: String, $email: String, $job_title: String) 
  {
    createUser (name: $name, email: $email, job_title: $job_title)
  }
`;

export const EDIT_USER = gql`
  mutation($id: Int, $name: String, $email: String, $job_title: String) 
  {
    updateUserInfo (id: $id, name: $name, email: $email, job_title: $job_title)
  }
`;

export const DELETE_USER = gql`
  mutation($id: Int) 
  {
    deleteUser(id: $id)
  }
` 

*/