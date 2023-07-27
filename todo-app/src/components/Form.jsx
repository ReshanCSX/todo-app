import {useState} from 'react'

export default function Form(props){

    const [input, setInput] = useState('')


    function updateInput(event){
        setInput(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()

        props.saveData({
            text : input
        })
        
        setInput("")
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Add a todo' value={input} onChange={updateInput}/>
                <button className='todoFormButton'>Add todo</button>
            </form>
        </div>
    )
}