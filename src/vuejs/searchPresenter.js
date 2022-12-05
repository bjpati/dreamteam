/* eslint-disable */
import resolvePromise from "../resolvePromise"
import {searchPlayers} from "../searchPlayers";
import promiseNoData from "../views/promiseNoData";
import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
const Search={ 
    props: ["model"],
    

    data(){  
        return{message: this.model, setLeague:61 ,  setSearch:"" , searchResultsPromiseState:{}};},


    methods:{
        updateSearchTextACB(player){
            this.setSearch=player;
         },  
        updateDoSearch(){
           
            resolvePromise(searchPlayers({ league:this.setLeague, search:this.setSearch}),this.searchResultsPromiseState);
         },
        // updateSearchResult(player){
        //     this.message.setCurrentPlayer(player.id);
        //  }    
     },
     created(){
        resolvePromise(searchPlayers({}),this.searchResultsPromiseState);
    },
    render(){ 
        return    (<div><SearchFormView 
        onSearchText={this.updateSearchTextACB}  
        onDoSearch={this.updateDoSearch}/>
        {promiseNoData(this.searchResultsPromiseState)|| <SearchResultsView 
        searchResults={this.searchResultsPromiseState.data} 
       />}</div>);
},
    };

    export default Search;

    //  onSearchResult={this.updateSearchResult}