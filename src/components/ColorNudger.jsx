import { useDispatch, useSelector } from 'react-redux';
import './ColorNudger.css';

// const colorComponents = [
//   'red', 'green', 'blue',
//   'hue', 'saturation', 'lightness'
// ];

const ColorNudger = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector(state => state.color);

  return (
    <div className="ColorNudger">
      <span>number of steps: 0</span>
      <div>
        <input type="color" onChange={e => console.log(e.target.value)}/>
        <input type="text" value={currentColor}/>
      </div>
      <div>
        <button>increment red</button>
        <button>decrement hue</button>
        <button>increment saturation</button>
      </div>
    </div>
  );
};

export default ColorNudger;