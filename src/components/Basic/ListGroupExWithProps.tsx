import { Fragment } from "react";
import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroupExWithProps(props: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <Fragment> {/* or <>*/}
            <h1>{props.heading}</h1>
            {
                props.items.length == 0 ? (
                    <p>No items</p>
                ) : (<ul className="list-group">
                    {props.items.map((item, index) => (
                        <li key={item} className={index === selectedIndex ? "list-group-item active" : "list-group-item"} onClick={() => {
                            setSelectedIndex(index);
                            props.onSelectItem(item);
                        }}> {item}</li>
                    ))
                    }
                </ul >)
            }
        </Fragment >

    );
}

export default ListGroupExWithProps;