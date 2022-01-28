import './App.css';
import AdminNav from './components/AdminNav';
import Header from './components/Header';
import Inventory from './components/Inventory';

function App() {
  return (
    <>
      <Header/>
        <div className="row">
          <div className="col-md-auto">
          <AdminNav/>
          </div>
          <div className="col">
          <Inventory/>
          </div>
        </div>
      
    </>
  );
}

export default App;
