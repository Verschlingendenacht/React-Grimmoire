function Button3(){

    let count = 0;

    const handleClick = () => console.log("clicked!");
    const handleClick2 = (name) => console.log(name)
    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} clicked ${count} times`)
        } else{
            console.log("stop click here dude")
        }
    }

    //el objeto e contiene informacion util como el tiempo en el sucedio el evento asi como a quien fue dirijido
    //e -> evento
    //target -> objeto donde sucedio el evento, contiene sus propiedades las cuales podemos manipular
    const handleClick4 = (e) => e.target.textContent = "Clicked!";
    const handleClick5 = (e) => e.target.textContent = "you double clicked me!";

    return(
        <>
            <button onClick={handleClick4}>Click Me</button>
            <button onDoubleClick={handleClick5}>I'm a double click button!</button>
        </>
        //<button onClick={handleClick}>Click Me!</button>
        //<button onClick={() => handleClick2("Alex Kreutzer")}>Click here</button>//for passing arguments to the handler we must use an arrow func
        //<button onClick={() => handleClick3("Alex")}>Click Me!</button>

    );
}

export default Button3