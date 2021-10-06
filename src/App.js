import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About';
import NoteState from './Contexts/notes/noteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './Contexts/alert/alert';
import AlertC from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Alert>
        <Router>
          <Navbar />
          <AlertC alert={alert}/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
        </Alert>
      </NoteState>
    </>
  );
}

export default App;
