export default function List(props){

    const taskList = props.items.map(item => (
        <li key={item.id}>{item.item}</li>
    ))
    
    return (
        <ul>
            {taskList}
        </ul>
    )
}