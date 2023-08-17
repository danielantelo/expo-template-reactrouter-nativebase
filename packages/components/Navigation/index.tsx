import { useEffect } from 'react';
import { Center, HStack, Icon, Pressable, Text } from 'native-base';
import { Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigate, NavigateFunction, useLocation } from 'expo-react-router-wrapper';
import { useStoredState } from 'react-native-use-stored-state';

interface Tab {
  label: string;
  icon: string;
  target: string;
}

const tabs: Tab[] = [
  {
    label: 'Home',
    icon: 'home',
    target: '/',
  },
  {
    label: 'About',
    icon: 'information',
    target: '/About',
  },
];

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useStoredState<number>('ACTIVE_NAV_TAB', 0);

  useEffect(() => {
    tabs.forEach((tab: Tab, id: number) => {
      if (tab.label && location.pathname.includes(tab.label)) {
        setSelectedTab(id);
      }
    });
  }, [location, setSelectedTab]);

  return (
    <HStack
      alignItems={'center'}
      bg={'primary.100'}
      safeAreaBottom
      shadow={5}
      //@ts-expect-error forced web styles for sticky nav
      style={Platform.OS === 'web' ? { position: 'fixed', bottom: 0, left: 0, width: '100%' } : {}}
    >
      {tabs.map((tab: Tab, id: number) => (
        <Pressable
          key={`nav-tab-${id}`}
          flex={1}
          opacity={selectedTab === id ? 1 : 0.5}
          paddingY={2}
          onPress={() => {
            setSelectedTab(id);
            navigate(tab.target)
          }}
        >
          <Center>
            <Icon name={tab.icon} as={MaterialCommunityIcons} size={'md'} />
            <Text>{tab.label}</Text>
          </Center>
        </Pressable>
      ))}
    </HStack>
  );
};
