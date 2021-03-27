import './App.css';
import Header from './components/Header';
import ListAll from './components/ListAll';
import New from './components/New';
// import Edit from './components/Edit';
// import Details from './components/Details';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ListAll path='/product' />
        <New path="/product/new" />
        {/* <Edit path="/product/:id/edit" />
        <Details path="/product/:id" /> */}
      </Router>
    </div>
  );
}

export default App;
