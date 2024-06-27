import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ButtonClick from './ButtonClick.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import Onchange from './Onchange.jsx'
import ColorPicker from './ColorPicker.jsx'
import UpdaterFunction from './UpdaterFunction.jsx'
import UpdaterCar from './UpdaterCar.jsx'
import FoodList from './FoodList.jsx'
import Car from './Car.jsx'
import TodoList from './TodoList.jsx'



function App() {

  const fruits = [{id:1, name: "Guava", calories:95},
                  {id:2, name: "Mango", calories:98},
                  {id:3, name: "Banana", calories :43}];

  const vegetables = [{id:1, name: "Potato", calories:95},
                      {id:2, name: "Carrots", calories:98},
                      {id:3, name: "Broccoli", calories :43}];

  return(
    <>
      <Header></Header>
      {/* <Food></Food>
      <Footer></Footer> */}
      <Card></Card> <br /><br />
      <Button></Button>
      <Student name="Basswell" age={23} isStudent = {true}/>
      <Student/>
      <UserGreeting isLoggedIn = {true} username = "Bass"/>

      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="vegetables"/>
      <ButtonClick/><br />
      <ProfilePicture/>
      <MyComponent/>
      <Counter/> <br /><br />
      <Onchange/>
      <ColorPicker></ColorPicker>
      <UpdaterFunction></UpdaterFunction>
      <UpdaterCar></UpdaterCar>
      <FoodList></FoodList>
      <Car></Car>
      <TodoList></TodoList>

    </>
    
  );
}

export default App
