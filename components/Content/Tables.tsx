import React from 'react';
import { HStack, Text, VStack } from 'native-base';

interface Cell {
  content?: string;
  fontWeight?: number | string;
  textAlign?: string;
  width?: string;
  sideBorder?: boolean;
}

export const Table = ({ children }: { children: React.ReactNode }) => <VStack>{children}</VStack>;

export const TableHeader = ({ headings }: { headings: Cell[] }) => {
  return (
    <HStack
      alignItems={'center'}
      justifyContent={'space-between'}
      borderBottomWidth={1}
      borderBottomColor={'secondary.100'}
      marginBottom={1}
    >
      {headings.map((heading, id) => (
        <TableCell
          key={`${id}-${heading.content}`}
          width={`${100 / headings.length}%`}
          textAlign={heading.textAlign ?? 'center'}
          fontWeight={500}
          sideBorder={heading.sideBorder}
        >
          {heading.content}
        </TableCell>
      ))}
    </HStack>
  );
};

export const TableCell = ({ width, textAlign, sideBorder, children, fontWeight }: { children: React.ReactNode } & Cell) => {
  return (
    <Text
      fontSize={'xs'}
      fontWeight={fontWeight}
      width={width}
      //@ts-expect-error forced string to native base textAlign prop
      textAlign={textAlign}
      borderRightWidth={sideBorder ? 1 : 0}
      borderRightColor={'secondary.100'}
    >
      {children}
    </Text>
  );
};

export const TableRow = ({ children, values }: { children?: React.ReactNode; values?: Cell[] }) => {
  return (
    <HStack alignItems={'center'} justifyContent={'space-between'} marginBottom={1}>
      {values?.map((item, id) => (
        <TableCell key={`${id}-${item.content}`} width={`${100 / values.length}%`} {...item}>
          {item.content}
        </TableCell>
      ))}
      {children}
    </HStack>
  );
};
