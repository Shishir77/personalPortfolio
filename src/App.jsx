import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProductList from "./components/productList/productList"
import  Contact  from "./components/contact/contact";
import Toggle  from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
<div 
style={{
  backgroundColor: darkMode ? "white" : "#333",
  color: darkMode? "#333": "white",
}
}>

 
  <Toggle/>
  <Intro/>
  <About/>
  <ProductList/>
  <Contact/>
</div> 

  );// calling intro.jsx from components

};
export default App;