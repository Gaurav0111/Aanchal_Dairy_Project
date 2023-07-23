import { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/css/loginPage";

const initialState ={
    name:'',
    email:'',
    password:'',
    isMember:true,
}

const Login = () => {
    const [values, setValues] = useState(initialState)

const handleChange=(e)=>{
        console.log(e.target)
}
const onSubmit=(e)=>{
    e.preventDefault()
    console.log(e.target)
}

    return <Wrapper>
        <form onSubmit={onSubmit} >
        <div className="factoryLogo" >
            <Logo/>
            <h1 className='factoryName' href='/' >Aanchal Dairy</h1>
        </div>
            <h3>Login</h3>
        <div  >
            <lable htmlFor='name' className='lableInput' >Name</lable>
            <input type="text" value={values.name} className='formInput' name="name" onChange={handleChange} />
        </div>
            <button type="submit" className="btn" >Submit</button>
        </form>
    </Wrapper>
}

export default Login