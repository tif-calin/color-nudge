import { 
  hex2rgb, 
  rgb2hex 
} from '../color';

describe('color.js', () => {
  it('hex2rgb and back', () => {
    const input = [
      '#123456',
      '#aabbcc',
      '#AABBcc',
      '#99ccCC'
    ];

    const actual = input.map(hex2rgb);

    const expected = [
      [18, 52, 86],
      [170, 187, 204],
      [170, 187, 204],
      [153, 204, 204]
    ];

    expect(actual).toEqual(expected);

    const actual2 = actual.map(rgb => rgb2hex(rgb, false));
    const expected2 = input.map(hex => hex.toLowerCase());

    expect(actual2).toEqual(expected2);
  });
});
