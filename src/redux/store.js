const { createStore } = require("redux");
const { default: productReducer } = require("./reducers/productReducer");

const store = createStore(productReducer);

export default store;
