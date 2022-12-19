/* eslint-disable */

import DreamTeam from '@/DreamTeam.js'
import App from '../views/app.js'
import { firebaseModelPromise, updateFirebaseFromModel } from "../firebaseModel";
import resolvePromise from "../resolvePromise.js";
import promiseNoData from "../views/promiseNoData";


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
    /*if(!this.promiseState.promise){
      resolvePromise(firebaseModelPromise(), this.promiseState, this.notifyACB);
  }*/
  //firebaseModelPromise()
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
