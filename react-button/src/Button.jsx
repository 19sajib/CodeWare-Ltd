import React from 'react'

const Button = () => {
    const [count, setCount] = React.useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        setCount(prev => prev+1)
    }
  return (
    <div>
        <button style={{padding: '10px', fontSize: '30px', border: 'none', borderRadius: '5px',
                        backgroundColor : (count!== 0 && count % 3 === 0) ? 'red': 'green'}} 
                onClick={handleClick} >
                {(count!== 0 && count % 3 === 0) ? 'Bang' : 'Click Me'}
        </button>
    </div>
  )
}

export default Button