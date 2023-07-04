module.exports = {
  roots: ['./apps', './packages'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node', 'cjs'],
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
};
