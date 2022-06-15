import { Center, HStack, Icon, Pressable, Text } from 'native-base';
import { NavigateFunction, useNavigate } from 'react-router';
import { ImageSourcePropType, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useStoredState from 'react-native-use-stored-state';

import { goToAbout, goToHome } from '../../utils/routing';
import { Loader } from '../Loader';

interface Tab {
  label?: string;
  icon?: string;
  image?: ImageSourcePropType;
  action: (navigate: NavigateFunction) => void;
}

const tabs: Tab[] = [
  {
    label: 'Home',
    icon: 'home',
    action: goToHome,
  },
  {
    label: 'About',
    icon: 'information',
    action: goToAbout,
  },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab, selectedTabLoaded] = useStoredState<number>('ACTIVE_NAV_TAB', 0);

  if (!selectedTabLoaded) {
    return <Loader />;
  }

  return (
    <HStack
      bg={'primary.100'}
      alignItems={'center'}
      safeAreaBottom
      shadow={5}
      paddingTop={2}
      //@ts-expect-error forced web styles for sticky nav
      style={Platform.OS === 'web' ? { position: 'fixed', bottom: 0, left: 0, width: '100%' } : {}}
    >
      {tabs.map((tab, id) => (
        <Pressable
          key={`nav-tab-${id}`}
          opacity={selectedTab === id ? 1 : 0.5}
          py={2}
          flex={1}
          onPress={() => {
            setSelectedTab(id);
            tab.action(navigate);
          }}
        >
          <Center>
            {tab.icon && <Icon mb={1} as={MaterialCommunityIcons} name={tab.icon} size={'md'} />}
            {tab.label && <Text>{tab.label}</Text>}
          </Center>
        </Pressable>
      ))}
    </HStack>
  );
};
