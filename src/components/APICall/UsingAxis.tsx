import axios from "axios";
import { useEffect, useState } from "react";

interface User {
    name: string;
    id: number
}

interface Error {
    message: string;
    code: string
}


function UsingAxis() {
    const [user, setUser] = useState<User[]>([]);
    const [error, setError] = useState<Error>();
    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
                console.log(res);
                setUser(res.data);
            }).catch(err => {
                console.log(err);
                setError(err)
            })
        }, []
    )

    return (
        <>
            {user.map(d => {
                return <p>{d.name}</p>
            })}
            {error?.message}
        </>
    );
}

export default UsingAxis;
