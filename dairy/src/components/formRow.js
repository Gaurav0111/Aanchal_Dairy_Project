const FormRow = ({ type, name, value, handleChange, labelText }) => {
    return (
        <div>
            <label htmlFor={name} className='lableInput' >{labelText || name}</label>
            <input type={type} value={value} className='formInput' name={name} onChange={handleChange} />
        </div>
    )
}

export default FormRow