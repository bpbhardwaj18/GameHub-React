
import { BsBootstrapFill } from "react-icons/bs";
import { useState } from "react";

interface Props {
    size: string;
    color?: string;
    onClick: () => void;
}

function ReactIconEx(props: Props) {
    const [ItemColor, setItemColor] = useState("Red");
    return <BsBootstrapFill color={props.color} onClick={props.onClick
        // () => {
        //     if (ItemColor === "Red") {
        //         setItemColor("Black");
        //     }
        //     else {
        //         setItemColor("Red");
        //     }
        // }
    } size={props.size} />
}

export default ReactIconEx;