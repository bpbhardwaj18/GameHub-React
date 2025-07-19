import React from "react";

interface Props {
    children: React.ReactNode;
    // color :  | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link"; // to set default set of values which can be accepted
    color?: string; // to tell typescript that color is optional
    onClick: () => void;
}
function Button({ children, color = "primary", onClick }: Props) {
    return (
        <button className={'btn btn-' + color + ''} onClick={onClick}> {children}</button >
    );
}

export default Button;
