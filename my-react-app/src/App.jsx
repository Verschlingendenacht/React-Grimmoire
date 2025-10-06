import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

import Card from './Card.jsx'

import Button from './Button/Button.jsx'
import Button2 from './Button2.jsx'

import Student from './Students.jsx'

//just noticed that, if something ain't working or defined it'll output as a blank page

//props = read-only properties that are shared between components
// a parent component can send data to a child component
//<component key=value />

//propTypes = ensures that the passed value is of the correct datatype
//age: PropTypes.number

function App() {
  return(
    <> {/*this is a fragment*/}
      <Header/>

      <Card/>
      <Button/>
      <Button2/>
      <Food/>

      <h2>Student list:</h2>
      <Student name='Alex Kreutzer' age={22} isStudent={true}/>
      <Student name='Yuo Lygnzhe' age={20} isStudent={false}/>
      <Student/> {/*Trying out default prop values*/}

      <Footer/>
    </>
  );
}

export default App
