import logo from '../../../public/assets/logo.svg';
import '../../../public/assets/app.css';
import Navbar from './Navbar';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import AdminPanel from './AdminPanel';
import Update from './Update';
import News from './News';
import AddNews from './AddNews';
import AdminProfile from './AdminProfile';
import EditNews from './EditNews';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/login" > <Login /></Route>
        <Route  exact path="/register" > <Register /></Route>
        <Route exact path="/" ><Home /> </Route>
        <PrivateRoute exact path= "/profile" > <Profile/> </PrivateRoute>
        <AdminRoute exact path="/admin" ><AdminProfile /> </AdminRoute> 
         <AdminRoute exact path="/admin/users" ><AdminPanel /> </AdminRoute> 
         <AdminRoute exact path="/admin/users/edit/:id" > <Update /></AdminRoute>
         <AdminRoute exact path="/admin/news/edit/:id" > <EditNews /></AdminRoute>
         <Route  exact path="/admin/news" > <News/></Route>
         <Route  exact path="/admin/addNews" > <AddNews/></Route>


      </Switch>
    </Router>

  );
}

export default App;
if (document.getElementById('app')) {
  ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
}