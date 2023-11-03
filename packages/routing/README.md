

Simply install via yarn or npm:

```bash
yarn add expo-react-router-wrapper
# or 
npm i expo-react-router-wrapper
```

Then add the wrapped router to your to level app, this will automatically load the native or web version.

```jsx
import { Route, Routes, Router } from 'expo-react-router-wrapper';

export default function App() {
  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/About'} element={<About />} />
        </Routes>
      </Router>
    </NativeBaseProvider>
  );
}
```

Then within your components you can use the react router hooks as normal, a wrapped Link or a wrapped native base button `RoutingButton`. They will ensure to load the native or web version accordingly.

```jsx
import { Link, RoutingButton, useNavigate, useLocation } from 'expo-react-router-wrapper';

export const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // you can use the Link provided
    <Link to={'/home'} label={'Label'} />

    // or you can use an onclick
    <Pressable onPress={() => navigate('/home')}>
        <Text>{'label'}</Text>
    </Pressable>

    // or a button
    <RoutingButton to={'/home'} onPress={'any function that should execute before routing to new page'}>
        <Icon> Text
    </RoutingButton>
};
```
