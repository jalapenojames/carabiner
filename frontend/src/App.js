import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom"
import MainContainer from './components/MainContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <MainContainer/>
      </div>
    </Router>
  );
}

export default App;
