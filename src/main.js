/* eslint-disable */

import { render, h } from "vue";

window.React = { createElement: h };
import { initializeApp } from "firebase/app";
import firebaseConfig from '../src/Model/firebaseConfig';

// Initialize Firebase Authentication and get a reference to the service
initializeApp(firebaseConfig);

require("../src/views/navigation").default
const VueRoot = require('/src/vuejs/VueRoot.js').default

// TODO render VueRoot into the "root" div
render(<VueRoot />, document.getElementById('root'))




