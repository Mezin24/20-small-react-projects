import { useCallback, useState } from 'react';
import './Accordion.css';
import data from './data';

const Accordion = () => {
  const [selectedItem, setSelectedItem] = useState<null | string>(null);

  const handleSelect = useCallback(
    (id: string) => {
      setSelectedItem(selectedItem === id ? null : id);
    },
    [selectedItem]
  );

  return (
    <div className='accordion'>
      {data && data.length > 0 ? (
        data.map(({ id, question, answer }) => (
          <div className='item' key={id}>
            <h3 className='title' onClick={() => handleSelect(id)}>
              {question} <span>{selectedItem === id ? '-' : '+'}</span>
            </h3>
            {selectedItem === id && <p className='answer'>{answer}</p>}
          </div>
        ))
      ) : (
        <h1>No items exists</h1>
      )}
    </div>
  );
};
export default Accordion;
