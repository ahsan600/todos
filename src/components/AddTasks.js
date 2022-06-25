import React from 'react'
import { useState } from 'react'

const AddTasks = ({onAddTask}) => {
 const [text,setText]=useState('');
 const [day,setDay]=useState('');
 const [reminder,setReminder]=useState(false);
 const onSubmit=(e)=>{
    e.preventDefault()
    if(!text){
        alert('Enter task')
        return
    }
    if(!day){
        alert('Enter Day')
        return
    }
    onAddTask({text,day,reminder})
    setDay('')
    setReminder(false)
    setText('')
 }
 const text1=document.getElementById('text');
 const day1=document.getElementById('day');
 const check1=document.getElementById('check');
 const onclick1=()=>{
    text1.value='';
    day1.value='';
    check1.checked=false;
 }
  return (
    <form onSubmit={onSubmit}>
      <div className='add-form'>
        <div className='form-control'>
        <label>Task</label>
        <input id='text'type='text' placeholder='Add Task' onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
        <label>Day && Time</label>
        <input id='day'type='text' placeholder='Day && Time' onChange={(e)=>setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input id='check' check={reminder} type='checkbox'onClick={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <button onClick={onclick1} className='btn btn-block' type='submit'>AddTasks</button>
      </div>
    </form>
  )
}

export default AddTasks
