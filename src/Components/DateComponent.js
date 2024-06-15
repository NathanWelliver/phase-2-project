import React from "react";

function DateComponent({date}){
    return (
        <span className="date">{date.toDateString()}</span>
    )
}

export default DateComponent;