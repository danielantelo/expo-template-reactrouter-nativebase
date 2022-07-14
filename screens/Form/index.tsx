import { Heading, Input, Select, Text } from 'native-base';
import { useStoredReducer } from 'react-native-use-stored-state';

import { Paragraph } from '../../components/Content';
import { InlineField } from '../../components/Forms';
import { DefaultLayout } from '../../components/Layouts';
import { Loader } from '../../components/Loader';

interface FormData {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  gender: string;
}

type FormDataAction = 'set_data';

const dataReducer = (formData: FormData, action: { type: FormDataAction; payload: { field: keyof FormData; value: string } }) => {
  const { type, payload } = action;
  const newFormData = { ...formData };
  switch (type) {
    case 'set_data':
      newFormData[payload.field] = payload.value;
      return newFormData;
    default:
      throw new Error();
  }
};

export default function Form() {
  const [values, dispatch, valuesLoaded] = useStoredReducer<FormData, FormDataAction>('DATA_KEY', dataReducer);

  if (!valuesLoaded) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <Heading>Form</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <InlineField>
        <Text>{`Field 1`}</Text>
        <Input
          width={50}
          value={values?.field1 ?? ''}
          onChangeText={(value: string) => {
            dispatch({ type: 'set_data', payload: { field: 'field1', value } });
          }}
        />
      </InlineField>
      <InlineField>
        <Text>{`Field 2`}</Text>
        <Input
          width={50}
          value={values?.field2 ?? ''}
          onChangeText={(value: string) => {
            dispatch({ type: 'set_data', payload: { field: 'field2', value } });
          }}
        />
      </InlineField>
      <InlineField>
        <Text>{`Select`}</Text>
        <Select
          selectedValue={values?.gender || ''}
          placeholder={'select...'}
          minWidth={220}
          onValueChange={(value: string) => {
            dispatch({ type: 'set_data', payload: { field: 'gender', value } });
          }}
        >
          <Select.Item value={'Male'} label={'Male'} />
          <Select.Item value={'Female'} label={'Female'} />
        </Select>
      </InlineField>
      <InlineField>
        <Text>{`Field 3`}</Text>
        <Input
          width={50}
          value={values?.field3 ?? ''}
          onChangeText={(value: string) => {
            dispatch({ type: 'set_data', payload: { field: 'field3', value } });
          }}
        />
      </InlineField>
      <InlineField>
        <Text>{`Field 4`}</Text>
        <Input
          width={50}
          value={values?.field4 ?? ''}
          onChangeText={(value: string) => {
            dispatch({ type: 'set_data', payload: { field: 'field4', value } });
          }}
        />
      </InlineField>
    </DefaultLayout>
  );
}
