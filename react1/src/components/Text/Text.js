//@flow
import React from 'react';
import "./Text.css"
import { useQuery } from "@apollo/client";
import  {LoadText} from "../Graphql/Querries";


function Text(){
    const { error, loading, data } = useQuery(LoadText);
    if (data){
    return(
        <div>
            <h1 className="Head1">{data.text[0].Text}</h1>
            <p className="Body">{data.text[1].Text}</p>
            <h2 className="Type">{data.text[2].Text}</h2>
            <p className="Type2">{data.text[3].Text}</p>
        </div>);}
    if (error){
        return(<h1 className="Head1">Error</h1>)}
    if (loading){
        return(<h1 className="Head1">Loading</h1>)}}

export default Text;