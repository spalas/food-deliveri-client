import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contacts/Contact';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFount/NotFound';
import Delivery from './components/Delivery/Delivery';
import Login from './components/Login/Login';
import SingleItem from './components/SingleItem/SingleItem';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/about">
              <About></About>

            </Route>
            <Route exact path="/contact">
              <Contact></Contact>

            </Route>
            <Route exact path="/delivery">
              <Delivery></Delivery>

            </Route>
            <Route exact path="/singleitem/:serviceId">
              <SingleItem></SingleItem>

            </Route>
            <Route exact path="/login">
              <Login></Login>

            </Route>
            {/* <Route path="*">
            <NotFound></NotFound>

        </Route> */}
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div >
  );
}

export default App;
