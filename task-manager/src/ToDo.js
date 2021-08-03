function ToDo ({ id, input, priority }) {   
    function handleRemove(e) {
        console.log(e.target)
        fetch(`http://localhost:8000/todos/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    return(
        <>
            <div className={priority}>
                <h3>{input}</h3>
                <button onClick={handleRemove}>X</button>
                <input type="checkbox" />
                <label>Completed?</label>
            </div>
        </>
    )
}

export default ToDo