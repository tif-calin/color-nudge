import { hex2rgb, hsl2rgb, rgb2hex, rgb2hsl } from '../utils/color';

const initialState = {
  color: '#7f7f7f',
  steps: 0,
  spaces: {
    rgb: {
      red: 127,
      green: 127,
      blue: 127
    },
    hsl: {
      hue: 0,
      saturation: 0,
      lightness: 50
    }
  }
};

const colorReducer = (state = initialState, action) => {
  let newRGB, newHEX, newHSL;

  const getUpdatedComponents = () => {
    return {
      ...state,
      color: newHEX,
      spaces: {
        ...state.spaces,
        rgb: {
          red: Math.min(255, newRGB[0]),
          green: Math.min(255, newRGB[1]),
          blue: Math.min(255, newRGB[2])
        },
        hsl: {
          hue: newHSL[0] % 360,
          saturation: Math.min(100, newHSL[1]),
          lightness: Math.min(100, newHSL[2])
        }
      }
    };
  }

  switch (action.type) {
    case 'SET_COLOR':
      newHEX = action.payload;
      newRGB = hex2rgb(newHEX);
      newHSL = rgb2hsl(newRGB);

      return { ...getUpdatedComponents(), steps: 0 };
    case 'NUDGE_COMPONENT':
      const { component, space, decrement } = action.payload;

      let min = 0;
      let max = space === 'rgb' ? 255 : 99;
      if (component === 'hue') max = 360;

      let newValue = state.spaces[space][component] + (decrement ? -1 : 1);
      if (component === 'hue') newValue = (360 + newValue) % 360;
      else {
        newValue = Math.max(newValue, min);
        newValue = Math.min(newValue, max);
      }

      const newSpace = Object.values({ ...state.spaces[space], [component]: newValue });

      if (space === 'hsl') {
        newHSL = newSpace;
        newRGB = hsl2rgb(newHSL);
        newHEX = rgb2hex(newRGB);
      } else if (space === 'rgb') {
        newRGB = newSpace;
        newHSL = rgb2hsl(newRGB);
        newHEX = rgb2hex(newRGB);
      }

      console.log(newHEX, newRGB, newHSL);
      return { ...getUpdatedComponents(), steps: state.steps + 1 };
    default: 
      return { ...state };
  }
};

export default colorReducer;
