/* eslint-disable */
function SearchFormView(props) {


    function searchTextACB(evt){
       props.onSearchText(evt.target.value);
     }


     function searchButtonACB(){
        props.onDoSearch();

    }


    return (
        <div>
            <input onChange={searchTextACB}></input>
            <button onClick={searchButtonACB}>Search!</button>
           
        </div>

    )





}

export default SearchFormView;