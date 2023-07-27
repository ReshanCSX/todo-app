import {useState} from 'react'
import Form from './components/Form'
import List from './components/List'

export default function App(){

    const [items, setItems] = useState([])

    console.log(items)
    
    function saveData(props){

        setItems(prev => [...prev, {id: (items.length + 1), item: props.text}])
    }
    return(
        <>
            <Form saveData={saveData}/>
            <List items={items}/>
        </>
    )
}