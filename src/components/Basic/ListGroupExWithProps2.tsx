import { Fragment } from "react";
import { useState } from "react";

interface Props {
    items: string[];
    heading: string

}

function ListGroupExWithProp({ items, heading }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <Fragment> {/* or <>*/}
            <h1>{heading}xcf</h1>
            {
                items.length == 0 ? (
                    <p>No items</p>
                ) : (<ul className="list-group">
                    {items.map((item, index) => (
                        <li key={item} className={index === selectedIndex ? "list-group-item active" : "list-group-item"} onClick={() => {
                            console.log(item);
                            setSelectedIndex(index);
                        }}> {item}</li>
                    ))
                    }
                </ul >)
            }
        </Fragment >

    );
}

export default ListGroupExWithProp;