/* eslint-disable */

const Show={  
    props:["hash"],  
    data(){ return {hashState: window.location.hash}; }, //  copy the value in component state
    methods:{
        someACB(){
            this.hashState = window.location.hash;
        }
    },
    created(){   //    1: The component has been created    
          window.addEventListener("hashchange", this.someACB);
    },
    unmounted(){   //  2: The component is being taken down
        window.removeEventListener("hashchange", this.someACB);
    },
    render(){
        return <div class ={(this.hashState === this.hash)?"":"hidden"}>{this.$slots.default()}</div>
    },
    };
    
export default Show;