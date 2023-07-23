const FormRow = ({type, name, value, handleChange, lableText}) =>{
    return(
        <div>
            <lable htmlFor={name} className='lableInput' >{lableText || name}</lable>
            <input type={type} value={value} className='formInput' name={name} onChange={handleChange} />
        </div>
    )
}

export default FormRow