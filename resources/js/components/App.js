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
         <AdminRoute exact path="/admin" ><AdminPanel /> </AdminRoute> 
         <AdminRoute exact path="/admin/edit/:id" > <Update /></AdminRoute>


      </Switch>
    </Router>

  );
}

export default App;
if (document.getElementById('app')) {
  ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
}