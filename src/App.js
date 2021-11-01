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
import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import MyOrders from './components/Profile/MyOrders';
import AllOrders from './components/Profile/AllOrders';
import Domestics from './components/Domestics/Domestics';
import TourBooking from './components/TourBooking/TourBooking';
import Internationals from './components/Internationals/Internationals';
import Hotels from './components/Hotels/Hotels';
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

            <Route path="/about-us">
              <About></About>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/tours/domestic">
              <Domestics></Domestics>
            </Route>

            <Route path="/tours/international">
              <Internationals></Internationals>
            </Route>

            <PrivateRoute path="/tours/booking/:id">
              <TourBooking></TourBooking>
            </PrivateRoute>

            <Route path="/hotels">
              <Hotels></Hotels>
            </Route>

            <Route path="/contact-us">
              <Contact></Contact>
            </Route>

            <PrivateRoute path="/profile/view">
              <Profile></Profile>
            </PrivateRoute>

            <PrivateRoute path="/profile/update">
              <UpdateProfile></UpdateProfile>
            </PrivateRoute>

            <PrivateRoute path="/profile/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/profile/all-orders">
              <AllOrders></AllOrders>
            </PrivateRoute>

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
