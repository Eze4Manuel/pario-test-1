import './App.scss';
import Purchase from './screens/purchase/purchase';

function App() {
  return (
    <div className="App">
      <div className='background-container'>
        <div className='background-section'>
          <div className='background-upper-section'>
          </div>
        </div>
        <div className='background-lower-section'>
        </div>
      </div>

      <div className='content-container'>
        <div className='content-section'>
          <div className='content-upper-section'>
            <Purchase />

          </div>
        </div>
        <div className='content-lower-section'>
        </div>
      </div>
    </div>
  );
}

export default App;
