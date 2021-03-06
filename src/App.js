import './App.css';
import ColorNudger from './components/ColorNudger';
import Copyleft from './components/Copyleft';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>React-Redux Experiments</h1>
      </header>

      <main>
        {/* <section>
          <h2>Counters, again?!</h2>
          <div>
            <button>-</button>
            <input type="number"/>
            <button>+</button>
          </div>
        </section> */}

        <section>
          <h2>Color Nudge</h2>
          <ColorNudger/>
        </section>
      </main>

      <footer>
        <Copyleft/> <a href="https://github.com/tif-calin/color-nudge" target="_blank" rel="noreferrer" >steal this</a>
      </footer>
    </div>
  )
};

export default App;
