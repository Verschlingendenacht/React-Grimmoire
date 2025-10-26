import React, {useState} from 'react'; //object destructuring

function MyComponent(){

    //we can call the setter from the actual event handlers of an element within the component
    const [name, setName] = useState("Anonymous"); //array destructuring, we can pass an initial state
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Alejandro")
    }
    const updateAge = () => {
        const a = age + 1
        setAge(a)
    }
    const employedStatus = () => {

        setIsEmployed(!isEmployed)
        
        /*
        if(isEmployed == false){
            setIsEmployed(true)
        }else{
            setIsEmployed(false)
        }
        */
    }

    return(
        <>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Update Age</button>
            <p>is employed?: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={employedStatus}>Update Employment Status</button>

        </>
    );
}

export default MyComponent