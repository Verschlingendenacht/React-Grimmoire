import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

import Card from './Card.jsx'

import Button from './Button/Button.jsx'
import Button2 from './Button2.jsx'
import Button3 from './Button3.jsx'

import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

import List from './List.jsx'
import List2 from './List2.jsx'

import ProfilePicture from './ProfilePicture.jsx'

import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'

//just noticed that, if something ain't working or defined it'll output as a blank page

//props = read-only properties that are shared between components
// a parent component can send data to a child component
//<component key=value />

//propTypes = ensures that the passed value is of the correct datatype
//age: PropTypes.number

//conditional rendering = allows to control what gets rendered based on conditions
//(show, hide or change components)

//click event = an interaction when a user clicks a specific element
// we can respond to clicks by passing a callback to the onClick event handler

//---------------------------------------------------------------------------

//state -> in react, state is a JS object that represents the current condition 
//or data of a component, it hold information that can change over time, typically in response
//to user interactions or data fetching. When a component's state changes
//react automatically re-renders the component to reflect the updated information
//in the UI

//react hooks -> before hooks, only class components could manage state, with hooks
//you can allow functional components to declare and update state variables

//class component vs functional component -> to change the state of a class component
//you need to extend from React.Component which will grant you render() and extended methods for hooks so
//you can update it, since, by default, react class components are stateless (cannot change)
//as for functional components, you take advantage of using few lines of code to obtain the same result by
//simply importing and calling

//useState() -> allows the creation of a stateful variable AND a setter function
//to update its value in the DOM [name, setName]

function App() {

  const fruits = [
    {id: 1, name:"apple", calories:95},
    {id: 2, name:"orange", calories:45},
    {id: 3, name:"banana", calories: 105},
    {id: 4, name:"coconuh", calories: 159}
  ];

  const vegetables = [
    {id: 6, name: "potato", calories: 110},
    {id: 7, name: "celery", calories: 15},
    {id: 8, name: "carrots", calories: 105},
    {id: 9, name: "corn", calories: 63}
  ];

  return(
    <> {/*this is a fragment*/}
      <Header/>

      <Card/>

      {/*styling*/}
      <Button/>
      <Button2/>
      <Food/>

      {/*props*/}
      <h2>Student list:</h2>
      <Student name='Alex Kreutzer' age={22} isStudent={true}/>
      <Student name='Yuo Lygnzhe' age={20} isStudent={false}/>
      <Student/> {/*Trying out default prop values*/}
      
      {/*conditional rendering*/}
      <UserGreeting isLoggedIn={true} username="Alex"/>

      {/*render lists*/}
      <List/>
      <List2 items={fruits} category="Fruits"/> {/*reusable list*/}
      {vegetables.length > 0 ? <List2 items={vegetables} category="Vegetables"/> : null} {/*do not display if empty*/}

      {/*onClick event*/}
      <Button3/>
      <ProfilePicture/>

      <MyComponent/>
      <Counter/>

      <Footer/>
    </>
  );
}

export default App
