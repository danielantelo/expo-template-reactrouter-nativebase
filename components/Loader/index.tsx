import { Center, Spinner } from 'native-base';

export const Loader = () => (
  <Center height={'100%'}>
    <Spinner accessibilityLabel="Loading" />
  </Center>
);
