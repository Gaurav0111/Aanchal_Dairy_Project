import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/css/loginPage";

const initialState ={
    name:'',
    email:'',
    password:'',
    isMember:true,
    showAlert:false,
}

const Login = () => {
    const [values, setValues] = useState(initialState)

const checkMember=()=>{
    setValues({...values, isMember:!values.isMember})
}

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
            <h3>{values.isMember ? 'Login':'Register'}</h3>
        {values.showAlert && <Alert/> }
        {!values.isMember && (
            <>
            <p>You can't register yourself Kindly contact Admin Team</p>
            <p>
                <button type="button" onClick={checkMember} className="member-btn" >
                    Already have an account? <span>Login</span>
                </button>
            </p>
            </>
        )}
        {values.isMember && (
          <>
        <FormRow  type='email' name='email' value={values.email} handleChange={handleChange} />
        <FormRow  type='password' name='password' value={values.password} handleChange={handleChange} />
        <button type="submit" className="btn" >Submit</button>
            <p>
                <button type="button" onClick={checkMember} className="member-btn" >
                    Don't have an account? <span>Register</span>
                </button>
            </p>
          </>
        )}

        </form>
    </Wrapper>
}

export default Login