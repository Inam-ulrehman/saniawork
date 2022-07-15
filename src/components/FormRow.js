import React from 'react'

const FormRow = ({ name, type, value, handleChange, labelText }) => {
  return (
    <div>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  )
}

export default FormRow
