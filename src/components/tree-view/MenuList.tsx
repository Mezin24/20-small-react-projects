import MenuItem from './MenuItem';
import { menus } from './data';

interface MenuListProps {
  menus: typeof menus;
}

const MenuList = ({ menus }: MenuListProps) => {
  return (
    <ul className='tree-menu'>
      {menus && menus.length
        ? menus.map((item) => <MenuItem key={item.label} item={item} />)
        : null}
    </ul>
  );
};
export default MenuList;
