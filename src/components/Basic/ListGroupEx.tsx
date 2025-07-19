import { Fragment } from "react";
import { useState } from "react";

interface Props {
    items: string[];

}

function ListGroupEx() {
    const items = ["India", "USA", "UK", "Canada"];
    const condition = items.length == 0 ? (
        <p>No items</p>
    ) : (<ul className="list-group">
        {items.map((item) => (
            <li key={item} className="list-group-item">{item}</li>
        ))}
    </ul>);

    // let selectedIndex = 0;

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getCondition = () => {
        return items.length == 0 ? (
            <p>No items</p>
        ) : (<ul className="list-group">
            {items.map((item) => (
                <li key={item} className="list-group-item">{item}</li>
            ))}
        </ul>);
    }
    return (
        <Fragment> {/* or <>*/}
            <h1>List Group Example</h1>
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

export default ListGroupEx;