import React from "react";

function DateComponent({date}){
    return (
        <span>{date.toDateString()}</span>
    )
}

export default DateComponent;