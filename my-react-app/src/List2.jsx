function List2({items, category}){

    //make a new list based on certain logic
    const listItems = items.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b></li>);


    return (
    <>
        <h3 className="list-category">Category: {category}</h3>
        <ul className="list-items">{listItems}</ul>
    </>
    )
}   

export default List2