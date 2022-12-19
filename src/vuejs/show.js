/* eslint-disable */

const Show={
    props:["hash"],
    data(){ return {hashState: window.location.hash}; }, //  copy the value in component state
        methods:{
        hashListenerACB(){ this.hashState= window.location.hash; },//    when notified, update state with current value
        checkThehashState(){
            if (this.hashState!==this.hash)
                return false; 
            if (this.hashState===this.hash)
                return true; 
        }
    },
        created(){   //    1: The component has been created
              window.addEventListener("hashchange", this.hashListenerACB);
        },
        unmounted(){   //  2: The component is being taken down
            window.removeEventListener("hashchange",  this.hashListenerACB);
        }
        ,
    render(){return<div class= {(this.checkThehashState())? "":"hidden"}>{this.$slots.default()}</div>},
     };
    export default Show;
    