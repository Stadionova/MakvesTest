import React from "react";

export const CustomizedDot = (props: any) => {
    const {cx, cy, r, stroke, zScoreDotIndex, index} = props;
    return (
        <circle cx={cx} cy={cy} r={r} strokeWidth={1}
                fill={zScoreDotIndex.includes(String(index)) ? 'red' : stroke}/>
    );
};