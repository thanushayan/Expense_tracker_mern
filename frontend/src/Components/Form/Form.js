import React from 'react'
import styled from 'styled-components';

function Form() {
    const [inputState,setInputState] = useState({
        title:'',
        amount:'',
        date:'',
        category:'',
        description:'',

    })

    const {title,amount,date,category,description} = inputState;
    const handleInput =  name =>e =>{
        setInputState({...inputState,[name]:e.target.value})
    }
  return (
    <FormStyled>
     <div className="input-control">
        <input 
        type="text"
        value={title}
        name={'title'}
        placeholder="Salary Title"
        onChange={handleInput('title')}
        />
     </div>
     <div className="input-control">
        <input  value={amount}
        type="text"
        name={'amount'}
        id={'amount'}
        placeholder="Salary Amount"
        onChange={handleInput('amount')}
        />
     </div>
     <div className="input-control">
        
     </div>
    </FormStyled>
  )
}
const FormStyled = styled.form`
`;

export default Form
