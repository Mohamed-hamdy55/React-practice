import Header from './header/header'
import AddUser from './users/addUser';
import Users from './users/users'
import UsersFunctional from './users/usersFunctional';


function App() {
  return (
    <div className="App">
      <Header />
      <Users />
      <hr />
      <UsersFunctional/>
      <hr />
      <div className='container-md my-4' >
        <AddUser/>
      </div>
    </div>
  );
}

export default App;
