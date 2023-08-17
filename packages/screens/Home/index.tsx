import { Heading } from 'native-base';
import { Link,  RoutingButton } from 'expo-react-router-wrapper';

import { DefaultLayout, Paragraph } from '@myapp/components';

export default function Home() {
  return (
    <DefaultLayout>
      <Heading>Home</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <Link to={'/About'} label={'Link to About'} />
      </Paragraph>
      <RoutingButton to={'/About'}>Routing Button to About</RoutingButton>
    </DefaultLayout>
  );
}
