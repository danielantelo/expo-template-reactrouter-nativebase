import { Box, Center, ScrollView } from 'native-base';

import { Navigation } from './Navigations';

export const DefaultLayout = ({
  showLogo,
  children,
  showNav,
}: {
  showLogo?: boolean;
  showNav?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Box flex={1}>
        <Box safeArea flex={1} maxWidth={600} width={'95%'} marginX={'auto'} paddingY={5}>
          <ScrollView>
            {showLogo && (
              <Center paddingY={5}>{/* <Image alt={'logo'} resizeMode={'contain'} source={require(`./logo.png`)} /> */}</Center>
            )}
            {children}
          </ScrollView>
        </Box>
      </Box>
      {showNav && <Navigation />}
    </>
  );
};
