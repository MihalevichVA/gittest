import React, { useState } from 'react'
import './App.css'

function Todo({ done, name, id, onDone, onDelete }) {
  console.log(`todo ${name} randers`)
  const [isHover, setIsHover] = useState(false)
  const handleCheck = (e) => onDone(e.target.checked, id)

  const handleDelete = () => {
    onDelete(name)
  }

  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div
      className={done ? 'done' : 'todo'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={handleCheck}
      />
      <span>{name}</span>
      {isHover && (
        <button className="delete" onClick={handleDelete}>
          delete
        </button>
      )}
    </div>
  )
}

export default React.memo(Todo)
