import React from 'react';
import { Box, HStack, Text, VStack } from 'native-base';

interface Cell {
  content?: string | number | React.ReactNode;
  fontWeight?: number | string;
  textAlign?: string;
  width?: string | number;
  sideBorder?: boolean;
  bottomBorder?: boolean;
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
          {...heading}
        />
      ))}
    </HStack>
  );
};

export const TableCell = ({ width, textAlign, sideBorder, bottomBorder, content, fontWeight }: Cell) => {
  return (
    <>
      {typeof content === 'object' ? (
        <Box width={width}>{content}</Box>
      ) : (
        <Text
          fontSize={'xs'}
          fontWeight={fontWeight}
          width={width}
          // @ts-expect-error force text align string
          textAlign={textAlign}
          borderRightWidth={sideBorder ? 1 : 0}
          borderBottomWidth={bottomBorder ? 1 : 0}
          borderRightColor={'secondary.100'}
        >
          {content}
        </Text>
      )}
    </>
  );
};

export const TableRow = ({ children, values }: { children?: React.ReactNode; values?: Cell[] }) => {
  return (
    <HStack alignItems={'center'} justifyContent={'space-between'} marginBottom={1}>
      {values?.map((item: Cell, id: number) => (
        <TableCell key={`cell-${id}`} width={item.width ?? `${100 / values.length}%`} {...item} />
      ))}
      {children}
    </HStack>
  );
};
