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


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route path="/login" > <Login /></Route>
        
        <Route path="/register" > <Register /></Route>
        <Route path="/profile" > <Profile /></Route>

        
        <Route path="/" exact><Home /> </Route>

      </Switch>
    </Router>

  );
}

export default App;
if (document.getElementById('app')) {
  ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
}