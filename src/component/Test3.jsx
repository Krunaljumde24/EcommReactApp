import React, { useState } from 'react'
import toast from 'react-hot-toast'
function Test3() {

    const [val, setVal] = useState('')
    const [todo, setTodo] = useState([])

    let addItemToList = (event) => {
        event.preventDefault();

        let res = todo.filter((obj) => obj === val);
        console.log(res);


        if (res && res.length > 0) {
            toast.error('Item already exists.')
        } else {
            setTodo([...todo, val]);
            toast.success('Item added.')
        }
        setVal('');
    }

    return (
        <div className='mx-10'>

            <h4 className='text-xl font-bold'>ToDo List</h4>

            <label htmlFor="ToDo Item">ToDo Item</label>
            <input className='border border-black' type="text" name="todo" id="" value={val} onChange={(event) => setVal(event.target.value)} />
            <button className='border border-black' onClick={(event) => addItemToList(event)}>Add</button>
            <ul className='list-disc'>
                {todo.map((td, index) => {
                    return (
                        <li key={index}>{td}</li>
                    )
                })}

            </ul>

        </div>
    )
}

export default Test3