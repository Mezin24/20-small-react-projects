import Accordion from './components/accordion/Accordion';
import ColorGenerator from './components/colorGenerator/ColorGenerator';
import TubExample from './components/custom-tubs/TubExample';
import FeatureFlag from './components/featureFlag/FeatureFlag';
import { FeatureFlagProvider } from './components/featureFlag/content/FeatureFlagProvider';
import GithubFinder from './components/github-finder/GithubFinder';
import LoadMore from './components/load-more/LoadMore';
import ModalExample from './components/modal/ModalExample';
import QrCodeGenerator from './components/qr-code-generator/QrCodeGenerator';
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator';
import SearchAutocomplete from './components/serach-autocomplete/SearchAutocomplete';
import Slider from './components/slider/Slider';
import StarRating from './components/star-rating/StarRating';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import TreeView from './components/tree-view/TreeView';
import UseClickOutsideTest from './components/useClickOutside/UseClickOutsideTest';
import UseFetchTest from './components/useFetch/UseFetchTest';

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <ColorGenerator /> */}
      {/* <StarRating numOfStars={10} /> */}
      {/* <StarRating numOfStars={10} /> */}
      {/* <Slider /> */}
      {/* <LoadMore /> */}
      {/* <TreeView /> */}
      {/* <QrCodeGenerator /> */}
      {/* <ThemeSwitcher /> */}
      {/* <ScrollIndicator dataUrl='https://dummyjson.com/products?limit=100' /> */}
      {/* <TubExample /> */}
      {/* <ModalExample /> */}
      {/* <GithubFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagProvider>
        <FeatureFlag />
      </FeatureFlagProvider> */}
      {/* <UseFetchTest /> */}
      <UseClickOutsideTest />
    </>
  );
}

export default App;
