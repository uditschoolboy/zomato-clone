import React from 'react'

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style,
            background:"lightgray",
            borderRadius: "50%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            padding:"4px" }}
        onClick={onClick}
        />
    );
}

export default PrevArrow
