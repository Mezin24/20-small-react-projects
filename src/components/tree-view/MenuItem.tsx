import { useState } from 'react';
import MenuList from './MenuList';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface IMenuItem {
  label: string;
  to: string;
  children?: IMenuItem[];
}

interface MenuItemProps {
  item: IMenuItem;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [displayChildren, setDisplayChildren] = useState<
    Record<string, boolean>
  >({});

  const handleClick = (label: string) => {
    setDisplayChildren((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <li className='tree-item'>
      <p>
        {' '}
        {item.label}{' '}
        {item.children && (
          <span onClick={() => handleClick(item.label)}>
            {displayChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        )}
      </p>
      {item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList menus={item.children} />
      ) : null}
    </li>
  );
};
export default MenuItem;
