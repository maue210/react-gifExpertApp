import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategoy = ({setCategoria}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
//        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
       // console.log('Submit hecho');
       if(inputValue.trim().length>2) {
       setCategoria( categos => [inputValue,...categos]);
       setInputValue('');
       }
    }

  return (
     <form onSubmit={ handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange}></input>
    </form>  
  )
}

AddCategoy.propTypes ={
    setCategoria: PropTypes.func.isRequired
}
