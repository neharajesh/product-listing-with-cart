import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout"
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products"
import "./styles.css"

const App = () => {
  return (
      <Routes>
          <Route path="/"> <Layout> <Products /> </Layout> </Route>
            <Route path="/cart"> <Layout> <Cart /> </Layout> </Route>
      </Routes>
      
  );
}

export default App;
