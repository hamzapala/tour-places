
import './App.css';
import Card from './components/cards/Card';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import {data} from "./helper/data";

// console.log(data)
function App() {

  let tempData = data;
  console.log(tempData)
  return (
    <div>
      <Navbar />
      <Header />
      <div className="card-container">
        <Card tempDataProp={tempData} />
      </div>
    </div>
  );
}

export default App;