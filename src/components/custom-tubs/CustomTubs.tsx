import { useCallback, useState } from 'react';
import { Tab } from './TubExample';
import './style.css';

interface CustomTubsProps {
  tabs: Tab[];
  onChange?: (index: number) => void;
}

const CustomTubs = ({ onChange, tabs }: CustomTubsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  const handleClick = useCallback(
    (index: number) => {
      setCurrentTabIndex(index);
      onChange && onChange(index);
    },
    [onChange]
  );

  return (
    <div className='tabs-container'>
      <div className='tabs-header'>
        {tabs &&
          tabs.length &&
          tabs.map(({ label }, index) => (
            <div
              className={`tab-label${
                currentTabIndex === index ? ' active' : ''
              }`}
              key={label}
              onClick={() => handleClick(index)}
            >
              {label}
            </div>
          ))}
      </div>
      <div className='tabs-content'>
        {tabs[currentTabIndex] && tabs[currentTabIndex].content}
      </div>
    </div>
  );
};
export default CustomTubs;
