import React from "react";

const Button = ({ onClick, children, href, ...other }) => {
    const Tag = href ? "a" : "button"; 
    return (
        <Tag className="bg-black text-white px-10 py-2 rounded hover:bg-blue-800 my-2" onClick={onClick} {...other} href={href}>{children}
        </Tag>
    )
}
export default Button;