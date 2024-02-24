import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { featureFlagDataFetching } from '../data';

interface FeatureFlagContextValues {
  isLoading: boolean;
  featureFlags: Record<string, boolean>;
}

export const FeatureFlagContext = createContext<FeatureFlagContextValues>({
  isLoading: false,
  featureFlags: {},
});

export const FeatureFlagProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [featureFlags, setfeatureFlags] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await featureFlagDataFetching();
        setfeatureFlags(response as Record<string, boolean>);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ isLoading, featureFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlagContext = () => useContext(FeatureFlagContext);
