import React from 'react'

function Task({Goal, Description , index, deleteTask}) {

  return (
    <div className='task'>
      <div>
        <p>{Goal}</p>
        <span>{Description}</span>

      </div>
      <button type='submit' onClick={()=>{deleteTask(index)}}>X</button>
    </div>
  )
}

export default Task;
