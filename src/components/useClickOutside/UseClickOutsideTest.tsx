import { useRef, useState } from 'react';
import { useClickOutside } from '.';

const UseClickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside({ ref, handler: () => setShowContent(false) });

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>UseClickOutsideTest</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, dicta asperiores quia nam sint quibusdam laudantium est
            distinctio corporis officiis.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
    </div>
  );
};
export default UseClickOutsideTest;
