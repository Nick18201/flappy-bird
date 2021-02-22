module.exports = {
  root: true,

  env: {
    node: true,
    es6: true,
  },

  extends: [],

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 9,
  },

  rules: {
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
