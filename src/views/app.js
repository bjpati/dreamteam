/* eslint-disable */
import observerReacap from '../firebaseModel';
/**
 * Here we can put all presenter so they can be shown in the index.html
 * @param {*} props  props.model will be the inctance of the object Team
 * @returns all components and pages that will be shown in the website...
 */

const Stadion=require("../vuejs/stadionPresenter.js").default;
const Search=require("../vuejs/searchPresenter.js").default;

export default function App (props) {
  return (
    <div class="flexParent">
       <div class = "stadion" ><Stadion model={props.model}/></div>
       <div class = "" ><Search model={props.model}/></div>
    
    </div>
  )
}
