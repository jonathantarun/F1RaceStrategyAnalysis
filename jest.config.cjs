// jest.config.cjs (or jest.config.js if not using cjs)
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'node',
};
