import React from "react";

const FractionNotation = (props) => {
    // const num
    return (
        <div className="text-black w-[65px] grid justify-items-center " >
            <div className="grid justify-items-center" >
                <h1 className="text-center lg:text-sm sm:text-xs" >{props.numerator}</h1>
                <hr className="w-[40px] " />
            </div>
            <h1 className="text-center  lg:text-sm sm:text-xs" >{props.denominator}</h1>
        </div>
    )
}
export default FractionNotation;
