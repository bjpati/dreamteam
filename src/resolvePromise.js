/* eslint-disable */
function resolvePromise(promiseToResolve, promiseState, notify){


    if(!promiseToResolve)
    return;

    promiseState.promise=promiseToResolve;
    promiseState.data= null; 
    promiseState.error= null;
    if(notify) 
        notify(); 
    function saveDataACB(result){ 
    
       if(promiseState.promise!==promiseToResolve)
       return;
        promiseState.data= result; 
        if(notify)
          notify()    
    
    } 
    function saveErrorACB(err) {  
    if(promiseState.promise!==promiseToResolve)
       return;
    promiseState.error= err;  
    if(notify)
        notify()    
 
} 
    promiseToResolve.then(saveDataACB).catch(saveErrorACB);

    }
    
    
  export default resolvePromise;