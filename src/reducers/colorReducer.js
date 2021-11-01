
const initialState = {
  color: '#000000',
  components: {
    red: 0,
    green: 0,
    blue: 0,
    hue: 0,
    saturation: 0,
    lightness: 0,
  }
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        color: action.payload
      };
    default: return { ...state };
  }
};

export default colorReducer;
