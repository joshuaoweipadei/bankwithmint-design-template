import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';

function App() {
  const { pathname } = useLocation(); 
    
  return (
    <>
      <Router>
        <TopNavbar />
        <div className="app">
          <div className="app__container">
            <Switch>
              <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
