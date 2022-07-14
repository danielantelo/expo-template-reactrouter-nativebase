import { HStack, VStack } from 'native-base';

export const InlineField = ({ children, allowWrap = false }: { children: React.ReactNode; allowWrap?: boolean }) => (
  <HStack paddingBottom={1} justifyContent={'space-between'} alignItems={'center'} flexWrap={allowWrap ? 'wrap' : 'nowrap'}>
    {children}
  </HStack>
);

export const StackedField = ({ children }: { children: React.ReactNode }) => <VStack paddingBottom={1}>{children}</VStack>;
