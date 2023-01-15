export default function Todo({ele}) {
    return (
        <div className="Item">
        <br/>
            <h2>{ele.task}</h2>
            <h3>{ele.category}</h3>
            <h3>{ele.details}</h3>
            <h4>Complete?</h4>
            {ele.isComplete === true ?
            (<input type='checkbox' checked></input>) : (<input type='checkbox'></input>)}
        </div>
    )
}