/* eslint-disable */
function promiseNoData(promiseState){
    return !promiseState.promise && <div>no data</div>
    ||  promiseState.error && <div>{promiseState.error.error}</div>
    || !promiseState.data &&  <img src = "https://media2.giphy.com/media/L05HgB2h6qICDs5Sms/200w.gif?cid=6c09b952njka1gxk3s78jt2m4wcqf1n0z89pjep6jnmt02es&rid=200w.gif&ct=s"/>
    || false
    

}

export default promiseNoData