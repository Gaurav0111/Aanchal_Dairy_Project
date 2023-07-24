import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/css/loginPage";
import { useAppContext } from "../context/appContext";

const initialState ={
    name:'',
    email:'',
    password:'',
    isMember:true,
}

const Login = () => {
    const [values, setValues] = useState(initialState)

    const {isLoading, showAlert, displayAlert} = useAppContext()
    
const checkMember=()=>{
    setValues({...values, isMember:!values.isMember})
}

const handleChange=(e)=>{
    setValues({...values, [e.target.name]:e.target.value})
}
const onSubmit=(e)=>{
    e.preventDefault()
    const {name, email, password, isMember} = values
    if (!email || !password || (!isMember && !name)){
        displayAlert()
        return
    }
    console.log(values);
}

    return <Wrapper>
        <form onSubmit={onSubmit} >
        <div className="factoryLogo" >
            <Logo/>
            <h1 className='factoryName' href='/' >Aanchal Dairy</h1>
        </div>
            <h3>{values.isMember ? 'Login':'Register'}</h3>
        {showAlert && <Alert/> }
        {!values.isMember &&(
        <FormRow  type='text' name='name' value={values.name} handleChange={handleChange} />
        )}
        <FormRow  type='email' name='email' value={values.email} handleChange={handleChange} />
        <FormRow  type='password' name='password' value={values.password} handleChange={handleChange} />

            <button type="submit" className="btn" >Submit</button>
            <p>
                {values.isMember?'Not a member yet?':'Already a member?'}
                <button type="button" onClick={checkMember} className="member-btn" >
                {values.isMember?'Register':'Login'}
                </button>
            </p>
        </form>
    </Wrapper>
}

export default Login