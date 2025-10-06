import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

import Card from './Card.jsx'

import Button from './Button/Button.jsx'
import Button2 from './Button2.jsx'

import Student from './Students.jsx'
import UserGreeting from './UserGreeting.jsx'

import List from './List.jsx'
import List2 from './List2.jsx'

//just noticed that, if something ain't working or defined it'll output as a blank page

//props = read-only properties that are shared between components
// a parent component can send data to a child component
//<component key=value />

//propTypes = ensures that the passed value is of the correct datatype
//age: PropTypes.number

//conditional rendering = allows to control what gets rendered based on conditions
//(show, hide or change components)

function App() {

  const fruits = [{id: 1, name:"apple", calories:95},
    {id: 2, name:"orange", calories:45},
    {id: 3, name:"banana", calories: 105},
    {id: 4, name:"coconuh", calories: 159}];

  const vegetables = [{id: 6, name: "potato", calories: 110},
    {id: 7, name: "celery", calories: 15},
    {id: 8, name: "carrots", calories: 105},
    {id: 9, name: "corn", calories: 63}];

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

      <Footer/>
    </>
  );
}

export default App
