import DreamTeam from '@/DreamTeam.js'
import App from '../views/app.js'

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
  created () {},
  methods: {},

  render () {
    this.promiseState.data = new DreamTeam()
    return <App model={this.promiseState.data} />
  }
}

export default VueRoot
