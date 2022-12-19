/* eslint-disable */
function SearchFormView(props) {


    function searchTextACB(evt){
       props.onSearchText(evt.target.value);
     }


     function searchButtonACB(){
        props.onDoSearch();

    }
    function chooseLeagueACB(evt){
        props.onTypeChoose(evt.target.value);
    }

    function showLeaguesACB(league){
        return <option>{league.league}</option>
    }
    function backToStadionACB(){
        window.location.hash = "#stadion";
    }


    return (
        <div>
            <input onChange={searchTextACB}></input>
            <select optionValue = {chooseLeagueACB} > <option value=""> Choose League</option> {props.league.map(showLeaguesACB)} </select>
            <button onClick={searchButtonACB} class="serachbtnn">Search!</button>
            <button onClick={backToStadionACB} class="cancelbtnn">Back</button>
           
        </div>

    )





}

export default SearchFormView;