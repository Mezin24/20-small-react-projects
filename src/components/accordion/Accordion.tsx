import { useCallback, useState } from 'react';
import './Accordion.css';
import data from './data';

const Accordion = () => {
  const [selectedItem, setSelectedItem] = useState<null | string>(null);
  const [enableMultiSelected, setEnableMultiSelected] = useState(false);
  const [multiSelected, setMultiSelected] = useState<string[]>([]);

  const handleSingleSelect = useCallback(
    (id: string) => {
      setSelectedItem(selectedItem === id ? null : id);
    },
    [selectedItem]
  );

  const handleMultiSelect = useCallback(
    (id: string) => {
      const cpyMultiSelected = [...multiSelected];
      if (cpyMultiSelected.includes(id)) {
        setMultiSelected(cpyMultiSelected.filter((item) => item !== id));
      } else {
        setMultiSelected((prev) => [...prev, id]);
      }
    },
    [multiSelected]
  );

  const toggleSelection = useCallback(() => {
    setSelectedItem(null);
    setMultiSelected([]);
    setEnableMultiSelected((prev) => !prev);
  }, []);

  return (
    <div className='wrapper'>
      <button className='toggle-btn' onClick={toggleSelection}>
        {enableMultiSelected ? 'Multi' : 'Single'} Selected
      </button>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map(({ id, question, answer }) => {
            const isSelected = enableMultiSelected
              ? multiSelected.includes(id)
              : selectedItem === id;
            return (
              <div className='item' key={id}>
                <h3
                  className='title'
                  onClick={
                    enableMultiSelected
                      ? () => handleMultiSelect(id)
                      : () => handleSingleSelect(id)
                  }
                >
                  {question} <span>{isSelected ? '-' : '+'}</span>
                </h3>
                {isSelected && <p>{answer}</p>}
              </div>
            );
          })
        ) : (
          <h1>No items exists</h1>
        )}
      </div>
    </div>
  );
};
export default Accordion;
