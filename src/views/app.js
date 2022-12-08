/* eslint-disable */

/**
 * Here we can put all presenter so they can be shown in the index.html
 * @param {*} props  props.model will be the inctance of the object Team
 * @returns all components and pages that will be shown in the website...
 */

const Stadion=require("../vuejs/stadionPresenter.js").default;
const Search=require("../vuejs/searchPresenter.js").default;
const Details=require("../vuejs/detailsPresenter.js").default;

export default function App (props) {
  return (
    <div>
    <h1 class="title">Your Dream Team</h1>
    <div class="flexParent">
      <div><Search model={props.model}/></div>
       <div class = "stadion" ><Stadion model={props.model}/></div>
       <div class="playerInformation"><Details model={props.model}/> </div>
    
    </div>
    </div>
  )
}
