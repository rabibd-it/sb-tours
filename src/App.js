import './App.css';
import 'animate.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from "./components/NotFound/NotFound";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import AddSlider from './components/AdminPanel/AddSlider';
import AddService from './components/AdminPanel/AddService';
import AddTour from './components/AdminPanel/AddTour';
import AddHotel from './components/AdminPanel/AddHotel';
import Tour from './components/Tour/Tour';
import Services from './components/Services/Services';
function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Header Start */}
        <Header></Header>

        {/* Main Body */}
        <main>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/tour/:id">
              <Tour></Tour>
            </PrivateRoute>

            <Route path="/about-us">
              <About></About>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/contact-us">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            {/*start admin panel route */}
            <PrivateRoute path="/admin/sliders">
              <AddSlider></AddSlider>
            </PrivateRoute>

            <PrivateRoute path="/admin/services">
              <AddService></AddService>
            </PrivateRoute>

            <PrivateRoute path="/admin/tours">
              <AddTour></AddTour>
            </PrivateRoute>

            <PrivateRoute path="/admin/hotels">
              <AddHotel></AddHotel>
            </PrivateRoute>
            {/*end admin panel route */}

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </main>
        {/* Main Body */}

        {/* Footer Start */}
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
