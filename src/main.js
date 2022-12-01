/* eslint-disable */
import { render, h } from 'vue'

window.React = { createElement: h }

const VueRoot = require('/src/vuejs/VueRoot.js').default

// TODO render VueRoot into the "root" div
render(<VueRoot />, document.getElementById('root'))
