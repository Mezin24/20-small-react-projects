import { useWindowResize } from '.';

const UseWindowResizeTest = () => {
  const { height, width } = useWindowResize();

  return (
    <div>
      <h1>UseWindowResizeTest</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};
export default UseWindowResizeTest;
