import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import DoctorList from "./pages/doctors/DoctorList";
import SpecialistList from "./pages/specialist/SpecialistList";
import StaffList from "./pages/staff/StaffList";
import ReceptionList from "./pages/reception/ReceptionList"
import Labs from "./pages/labs/Labs"
import Opt from "./pages/opt/Opt"
import Statusopt from "./pages/statusopt/Statusopt"
import Pharmacy from "./pages/pharmacy/Pharmacy"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/doctors">
            <DoctorList />
          </Route>
          <Route path="/specialists">
            <SpecialistList />
          </Route>
          <Route path="/staff">
            <StaffList />
          </Route>
          <Route path="/reception">
            <ReceptionList />
          </Route>
          <Route path="/labs">
            <Labs />
          </Route>
          <Route path="/opt">
            <Opt />
          </Route>
          <Route path="/statusopt">
            <Statusopt />
          </Route>
          <Route path="/pharmacy">
            <Pharmacy />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
