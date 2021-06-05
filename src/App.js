
import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title = "Welcome to ReactJs Tutorial";
  const by = "Net Ninja 🐱‍👤";


  return (
    <div className="App">
    <Navbar />
     <div className="content">
      <Home />
     </div>
    </div>
  );
}

export default App;
 