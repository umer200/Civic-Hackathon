import React, { useState,useRef, Component } from "react";
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import  FormComponent from "./formDataComponent";



class App extends Component
{

  render(){

    return(
  
<FormComponent />
  
);

}

}

export default App ;





// function App() {

//   const[cnic,setCnic]=useState("");
//   const[name,setName]=useState("");
//   const[age,setAge]=useState("");


//   function head(){

    
//     return(
    
//     <h1>REGISTRATION FORM</h1>
    
//     );
//   }
  

//  const handleSubmit=()=>{
//     alert("What are you doing?");

//   }


//   return(

    
//     <div className="RegistrationForm" 
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "lightblue"
//     }}>

//       <head/>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <label>
//             <p>NAME :</p>
//             <input name="name" />
//           </label>
          


//           <label>
//             <p>CNIC :</p>
//             <input name="CNIC"/> 
//           </label>
//           <br/>
          
//           <label>
//             <p>AGE :</p>
//             <input name="AGE"/>
//           </label>
//           <br/>


//         </fieldset>
//         <button type="submit">Submit</button>
//       </form>

//     </div>


//   );
// }





// export default App;

// import { Form, Input, Button, Checkbox } from 'antd';

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

// const App = () => {
//   const onFinish = values => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = errorInfo => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <Form
//       {...layout}
//       name="basic"
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[{ required: true, message: 'Please input your username!' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Demo;