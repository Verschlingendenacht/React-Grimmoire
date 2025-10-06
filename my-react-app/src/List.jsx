function List(){
    const fruits = [{id: 1, name:"apple", calories:95},
        {id: 2, name:"orange", calories:45},
        {id: 3, name:"banana", calories: 105},
        {id: 4, name:"coconuh", calories: 159}];
    
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL SORT
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALHPAVETICAL
    //fruits.sort((a, b) => a.calories - b.calories) //NUMERIC
    //fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC

    //filter by certain criteria
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems1 = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b></li>);

    const listItems2 = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
        {lowCalFruit.name}: &nbsp;
        <b>{lowCalFruit.calories}</b></li>);

    const listItems3 = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
        {highCalFruit.name}: &nbsp;
        <b>{highCalFruit.calories}</b></li>);

    return (<ul>{listItems3}</ul>)
}   

export default List