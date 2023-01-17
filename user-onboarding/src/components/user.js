import React from "react";

export default function Users(props){
    const {details} = props;
    
    return (
        <div className="user" key={details.id}>
            <h2>{details.first_name} {details.last_name}</h2>
            <h3>{details.email}</h3>
            <h4>{details.civil}</h4>
        </div>
    )
}