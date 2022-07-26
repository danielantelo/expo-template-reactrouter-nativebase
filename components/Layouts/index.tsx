import { Box, ScrollView } from 'native-base';

import { Navigation } from '../Navigation';

export const DefaultLayout = ({ children, showNav = true }: { showNav?: boolean; children: React.ReactNode }) => {
  return (
    <>
    <Box flex={1} backgroundColor={backgroundColor}>
      <Box safeArea flex={1} maxWidth={600} width={'95%'} marginX={'auto'} paddingY={5}>
        <ScrollView>
          {showLogo && (
            <Center paddingY={5}>
              <Logo size={'md'} />
            </Center>
          )}
          {children}
        </ScrollView>
      </Box>
    </Box>
    {showNav && <Navigation />}
  </>
  );
};
