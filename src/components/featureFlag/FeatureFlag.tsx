import Accordion from '../accordion/Accordion';
import ColorGenerator from '../colorGenerator/ColorGenerator';
import Slider from '../slider/Slider';
import StarRating from '../star-rating/StarRating';
import TicTacToe from '../tic-tac-toe/TicTacToe';
import { useFeatureFlagContext } from './content/FeatureFlagProvider';

const FeatureFlag = () => {
  const { featureFlags, isLoading } = useFeatureFlagContext();

  const featureFlagsComponents = [
    {
      label: 'accordion',
      component: <Accordion />,
    },
    {
      label: 'colorGenerator',
      component: <ColorGenerator />,
    },
    {
      label: 'slider',
      component: <Slider />,
    },
    {
      label: 'starRating',
      component: <StarRating />,
    },
    {
      label: 'ticTacToe',
      component: <TicTacToe />,
    },
  ];

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>FeatureFlag</h1>
      {featureFlagsComponents.map((feature) =>
        featureFlags[feature.label] ? feature.component : null
      )}
    </div>
  );
};
export default FeatureFlag;
