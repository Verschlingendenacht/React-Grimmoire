import PropTypes from 'prop-types' //npm install prop-types

//in React 19+ you don't need to use props object to send data
//we can simply go with destructuring and even assign default values as if in python
function Student({name = "John Doe", age=-1, isStudent=false}){
    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? 'No' : 'Yes'}</p>
        </div>
    );   
}

Student.propTypes = { //argument type definition
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default Student