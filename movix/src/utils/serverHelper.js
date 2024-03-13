import {backendUrl} from "./config";

const makeUnauthenticatedPOSTRequest=async(route,body)=>{
    const response=await fetch(backendUrl+ route,{
        method: "POST",
        headers:{"content-Typw":"application/json",},
        body:JSON.stringify(body),
    });
    const formattedResponse=await response.json();
    return formattedResponse;

}
export default makeUnauthenticatedPOSTRequest