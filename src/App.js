import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import GetUser from './Component/GetUser';
import { Route, Routes } from 'react-router-dom';
import { ViewUser } from './Component/ViewUser';
import { GetTodos } from './Component/GetTodos';
import { Payloads } from './Component/Payloads';
import { Todos } from './CodeSandBox/Todos';
import { AddTodo } from './CodeSandBox/AddTodo';

function App() {


  return (
    <>
    <div className='App'>

      <h2>My first Apollo app 🚀</h2>
    {/* <Routes>
      <Route path='/' element={<GetUser />} />
      <Route path='/view' element={<ViewUser />} />
    </Routes> */}
    {/* <Form /> */}
    {/* <GetUser /> */}
    {/* <ViewUser /> */}
    {/* <GetTodos /> */}
    {/* <Payloads /> */}
        <AddTodo />
        <Todos />

    </div>
    </>
  );
}

export default App;
