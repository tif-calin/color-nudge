import { useDispatch, useSelector } from 'react-redux';
import './ColorNudger.css';

const colorComponents = [
  'red', 'green', 'blue',
  'hue', 'saturation', 'lightness'
];

const ColorNudger = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector(state => state.color);
  const currentLightness = useSelector(state => state.spaces.hsl.lightness);
  const currentSteps = useSelector(state => state.steps);

  const handleChangeColor = e => {
    const { value } = e.target;
    dispatch({ type: 'SET_COLOR', payload:  value });
  };

  const renderButton = offset => {
    const seed = Math.round(Math.exp(offset + currentSteps, offset + currentSteps)) % Number.MAX_SAFE_INTEGER;

    const decrement = seed % 2 === 0;
    const component = colorComponents[seed % colorComponents.length];
    const space = ['red', 'green', 'blue'].includes(component) ? 'rgb' : 'hsl';

    return (
      <button
        onClick={e => dispatch({ type: 'NUDGE_COMPONENT', payload: { component, space, decrement } })}
      >{decrement ? 'decrement' : 'increment'} {component} ({space})</button>
    );
  };

  return (
    <div className="ColorNudger" style={{ 
      backgroundColor: currentColor,
      color: currentLightness > 50 ? 'black' : 'white'
    }}>
      <span>number of steps: {currentSteps}</span>
      <div>
        <input type="color" value={currentColor} onChange={handleChangeColor}/>
        <input type="text" value={currentColor} onChange={handleChangeColor}/>
      </div>
      <div>
        {renderButton(5)}
        {renderButton(53)}
        {renderButton(157)}
      </div>
    </div>
  );
};

export default ColorNudger;