import React from 'react'

function Button({variable, handler, btn}) {
  return (
    <div
        className={btn}
        onClick={() => handler(variable)}
    >
        {variable}
    </div>
  )
}

export default Button