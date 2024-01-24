import React,{useState} from 'react'

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const [discriptionText, setDiscriptionText] = useState('');
    
  return (
    <div className='input-container'>
    <input type='text' className='input-box-todo' placeholder='TODO Name' value={inputText}
    onChange={e=>{
     setInputText(e.target.value)

    }}
    />
    <input type='text' className='input-box-todo-discription'placeholder='TODO Discription' value={discriptionText} onChange={e=>{
     setDiscriptionText(e.target.value)

    }}/>
    <button className='add-btn' onClick={()=>{
        props.addList(inputText,discriptionText);
        setInputText('');
        setDiscriptionText('');
    }}>Add Todo</button>
    
    </div>
    

  )
}
export default TodoInput;