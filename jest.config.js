/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
