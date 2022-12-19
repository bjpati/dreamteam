/* eslint-disable */

import { render, h } from "vue";

window.React = { createElement: h };
import { initializeApp } from "firebase/app";
import firebaseModel from "../src/firebaseModel.js";
import firebaseConfig from './firebaseConfig';


initializeApp(firebaseConfig);
const VueRoot = require('/src/vuejs/VueRoot.js').default


// Initialize Firebase Authentication and get a reference to the service



// TODO render VueRoot into the "root" div
render(<VueRoot />, document.getElementById('root'))




