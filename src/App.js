import FormInput from "./components/FormInput";
import './App.css'
import { useState } from "react";
const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  })

  const inputs = [
    {
      id: 1, 
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
      pattern: `^[A-Za-z0-9]{3,16}$`,
      errorMessage: "Username should be 3-16 characters and shouldn't incude any special character! and username shouldn't contain whitespaces!!!",
    },
    {
      id: 2, 
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorMessage: "It should be valid email address!"
    },
    {
      id: 3, 
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4, 
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character"
    },
    {
      id: 5, 
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      errorMessage: "Passwords don't match",
      pattern: values.password,
    },
  ]

  const onChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  
  console.log(values);
  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
          <FormInput onChange={onChange} key={input.id} {...input} value={values[input.name]} />
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
