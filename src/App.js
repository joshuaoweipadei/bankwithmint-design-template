import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';
import Sidebar from './components/SideBar';
import Payments from './pages/Payments'

function App() {
  const { pathname } = useLocation(); 
    
  return (
    <>
      <Router>
        <TopNavbar />
        <div className="app">
          <div className="app__container">
            <Sidebar />
            <Switch>
              <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
              <Route exact path="/" component={Home} />
              <Route path="/payments" component={Payments} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
