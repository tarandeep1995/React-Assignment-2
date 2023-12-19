import "./App.css";
import Cards from "./components/Cards/Card";
import Header from "./components/Headers/Header";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Header/>
      <Cards/>
      <Footer/>
    </div>
  );
};

export default App;