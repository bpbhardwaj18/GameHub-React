import UpdateArray from "./UpdateArray";
import { useState } from "react";

function UpdateArrayApp() {
    // const [array, setArray] = useState(["1", "2", "3", "4", "5"]);
    const [array, setArray] = useState([{ id: "1", name: "Bhanu" }, { id: "2", name: "Shriji Kaushik" }]);
    const handlingAdd = () => {
        setArray([...array, { id: "3", name: "Rohit Bhardwaj" }])
    }

    const handlingUpdate = () => {
        setArray(array.map(item => {
            return item.id === "2" ? { ...item, name: "Shriji Bhardwaj" } : item;
        }));
    }

    const handlingRemove = () => {
        setArray(array.filter(item => item.id != "3"));
    }
    return (
        <UpdateArray items={array} onAdd={handlingAdd} onRemove={handlingRemove} onUpdate={handlingUpdate} />
    );
}

export default UpdateArrayApp;