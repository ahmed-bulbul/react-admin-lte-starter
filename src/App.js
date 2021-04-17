
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/templates/Header'
import Menu from './components/templates/Menu'
import Footer from './components/templates/Footer'
import TemplateBody from './components/templates/TemplateBody';
import Login from './components/Auth/Login'


function App() {
  return (
    <div class="wrapper">

      <Router>
           
                    <Switch> 
                          <Route path = "/" exact component = {Login}></Route>
                          <Route path = "/login" component = {Login}></Route>
                          <Route path = "/dashboard" component = {TemplateBody}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
             
        </Router>
    </div>
  );
}

export default App;
