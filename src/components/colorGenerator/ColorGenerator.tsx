import { useCallback, useEffect, useState } from 'react';

type Color = 'hex' | 'rgb';

const ColorGenerator = () => {
  const [color, setColor] = useState<string>('#000');
  const [typeOfColor, setTypeOfColor] = useState<Color>('hex');

  const colorUtil = (length: number) => Math.floor(Math.random() * length);

  const generateRGBColor = useCallback(() => {
    const r = colorUtil(255);
    const g = colorUtil(255);
    const b = colorUtil(255);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }, []);

  const generateHexColor = useCallback(() => {
    const hexValues = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];
    let hex = '#';

    for (let index = 0; index < 6; index++) {
      hex += hexValues[colorUtil(hexValues.length)];
    }
    setColor(hex);
  }, []);

  useEffect(() => {
    if (typeOfColor === 'hex') {
      generateHexColor();
    } else {
      generateRGBColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        color: 'white',
        backgroundColor: color,
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div
        style={{
          margin: '0 auto',

          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <button onClick={() => setTypeOfColor('hex')}>
          Generate HEX color
        </button>
        <button onClick={() => setTypeOfColor('rgb')}>
          Generate RGB color
        </button>
        <button
          onClick={() =>
            typeOfColor === 'hex' ? generateHexColor() : generateRGBColor()
          }
        >
          Generate random color
        </button>
      </div>
      <div
        style={{
          height: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          fontWeight: 'bold',
        }}
      >
        {typeOfColor === 'hex' ? 'HEX' : 'RGB'} COLOR {color}
      </div>
    </div>
  );
};
export default ColorGenerator;
