import { Button, IButtonProps, Text } from 'native-base';
import { Platform } from 'react-native';
import { HashRouter, Link as DomLink, useNavigate as useNavigateDom } from 'react-router-dom';
import { NativeRouter, Link as NativeLink, useNavigate as useNavigateNative } from 'react-router-native';

export * from 'react-router';

export const Router = ({ children }: { children: React.ReactNode }) =>
  Platform.OS === 'web' ? <HashRouter>{children}</HashRouter> : <NativeRouter>{children}</NativeRouter>;

export const useNavigate = () => (Platform.OS === 'web' ? useNavigateDom() : useNavigateNative());

export const Link = ({ to, label }: { to: string; label: string }) => {
  return Platform.OS === 'web' ? (
    <DomLink to={to}>
      <Text>{label}</Text>
    </DomLink>
  ) : (
    <NativeLink to={to}>
      <Text>{label}</Text>
    </NativeLink>
  );
};

export const RoutingButton = ({
  children,
  to,
  onPress,
  ...rest
}: {
  children: React.ReactNode;
  to: string;
  secondary?: boolean;
  onPress?: () => void;
} & IButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      {...rest}
      onPress={() => {
        onPress && onPress();
        navigate(to);
      }}
    >
      {children}
    </Button>
  );
};
