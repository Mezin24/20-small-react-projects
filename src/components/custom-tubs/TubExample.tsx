import { ReactNode } from 'react';
import CustomTubs from './CustomTubs';

export interface Tab {
  label: string;
  content: ReactNode;
}

const RandomComponent = () => <p>Random component</p>;

const TubExample = () => {
  const tabs: Tab[] = [
    {
      label: 'Tab 1',
      content: <p>Content for tab 1</p>,
    },
    {
      label: 'Tab 2',
      content: <p>Content for tab 2</p>,
    },
    {
      label: 'Tab 3',
      content: <RandomComponent />,
    },
  ];

  const handleChange = (index: number) => {
    console.log(`active ${index}`);
  };

  return <CustomTubs tabs={tabs} onChange={handleChange} />;
};
export default TubExample;
