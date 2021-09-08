/** @format */

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduser from "../redux/contacts/contacs-reduser";

const store = createStore(rootReduser, composeWithDevTools());

export default store;
