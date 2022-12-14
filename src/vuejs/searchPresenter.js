/* eslint-disable */
import resolvePromise from "../resolvePromise"
import {searchPlayers} from "../searchPlayers";
import promiseNoData from "../views/promiseNoData";
import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import {leagues} from "../league";
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

        updateChooseLeagueACB(league){
            this.setLeague = league.id;
        },
        testACB(player){
            this.message.addToTeam(player);
         }
        
       
     },
     created(){
        resolvePromise(searchPlayers({}),this.searchResultsPromiseState);
    },
    render(){ 
        
        return  (<div class = "searchSideBar"><SearchFormView league = {leagues} 
        onSearchText={this.updateSearchTextACB}  
        onDoSearch={this.updateDoSearch}
        onTypeChoose={this.updateChooseLeagueACB}/>
        {promiseNoData(this.searchResultsPromiseState)|| <SearchResultsView 
        searchResults={this.searchResultsPromiseState.data} 
        choosePlayer={this.testACB}
       />}</div>);
},
    };

    export default Search;