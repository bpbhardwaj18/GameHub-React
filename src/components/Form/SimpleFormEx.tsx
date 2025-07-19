import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

function SimpleFormEx() {
    const nameRef = useRef<HTMLInputElement>(null)
    const [address, setAddress] = useState("Radhakund");
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (nameRef.current !== null)
            console.log(nameRef.current.value);
        console.log(address)
    }
    return (
        <form action="" onSubmit={(event) => {
            handleSubmit(event)
        }}>
            <div className="input-group m-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input ref={nameRef} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group m-3">
                <label className="input-group-text" htmlFor="inputGroupFile01">Adress</label>
                <input type="text" className="form-control" id="inputGroupFile01" value={address} onChange={(event) => { setAddress(event.target.value) }} />
            </div>
            <button type="submit" className="btn btn-primary m-3">Submit</button>
        </form>
    );
}

export default SimpleFormEx;