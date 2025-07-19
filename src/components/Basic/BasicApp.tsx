import Message from "./Message";
import ListGroupEx from "./ListGroupEx";
import ListGroupExProps from "./ListGroupExWithProps";
import Alert from "./Alert";
import Button from "./Button";
import { useState } from "react";
import ReactIconEx from "./ReactIconEx";

function BasicApp() {
    // return  <div> <Message /> </div>;
    const [alertVisible, setAlertVisibility] = useState(false);
    const [ItemColor, setItemColor] = useState("Red");

    return (
        <div>
            {/* <ListGroupExProps items={["India", "USA"]} heading={"Bhanu"} onSelectItem={(item: string) => { console.log(item) }} /> */}
            {/* <Alert text="Bhanu Prakash" />  without children possible with props */}
            {/* <Alert>Bhanu Prakash </Alert>  only possible with children */}
            {/* {alertVisible ? <Alert onClick={() => setAlertVisibility(false)}>ButtonClicked</Alert> : null}
      <Button onClick={() => { setAlertVisibility(true) }}>BUtton   </Button> */}
            {/* <ReactIconEx color={ItemColor} size="40" onClick={() => { setItemColor("Black") }} /> */}
        </div >
    );

}

export default BasicApp;