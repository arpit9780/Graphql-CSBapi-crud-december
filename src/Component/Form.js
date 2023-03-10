// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";

// function Form() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

//   const addUser = () => {
//     createUser({
//       variables: {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         password: password,
//       },
//     });

//     if (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="First Name"
//         onChange={(e) => {
//           setFirstName(e.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         onChange={(e) => {
//           setLastName(e.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Password"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <button onClick={addUser}> Create User</button>
//     </div>
//   );
// }

// export default Form;



// ----------------------------------------------------------------------------------
// const deleteMutation = useQuery(DELETE_USER, { variables: { id: 8 }});
// const editMutation = useQuery(EDIT_USER, { variables: { id: 9, name: "Username", email: "email", job_title: "job" }});
// const createMutation = useQuery(ADD_USER, { variables: { name: "Username", email: "email", job_title: "job" }});
