import './App.css';
import UserList from './components/UserList';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar NavBar={NavBar} />
      <UserList />
    </div>
  );
}

export default App;

// Objective
// In this checkpoint,we are going to consume an API that provides us with list of users. Just follow the instructions:

// Instructions
// - Create a project using create-react-app.
// - Create UserList.js file in src folder
// - Install axios.
// - You gone to use jsonplaceholder API to get list of user 
// - Use axios to Get data from Link inside useEffect hooks
// - Use UseState hooks to save data into listOfUSer state 
// - Map listOfUser to display list of user into screen 
// Style your App as you wish