import MenuList from './MenuList';
import { menus as data } from './data';
import './styles.css';

interface TreeViewProps {
  menus?: typeof data;
}

const TreeView = ({ menus = data }: TreeViewProps) => {
  return (
    <div className='tree-page'>
      <MenuList menus={menus} />
    </div>
  );
};
export default TreeView;
