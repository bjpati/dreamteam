/* eslint-disable */

import DreamTeam from '@/DreamTeam.js'
import App from '../views/app.js'
import {updateFirebaseFromModel } from "../firebaseModel";


/**
 * Here define the component VueRoot.
 * The component will be used to get the data from fireBase
 * and store it there.
 */
const VueRoot = {
  props: ['model'],
  data () {
    return { rootModel: this.model, promiseState: {} }
  },
  created () {
    this.promiseState.data = new DreamTeam();
   this.notifyACB();
  },
  methods: {
    notifyACB(){
        updateFirebaseFromModel(this.promiseState.data);
  }
  },

  render () {
    return  <App model={this.promiseState.data} />
  }
}

export default VueRoot
