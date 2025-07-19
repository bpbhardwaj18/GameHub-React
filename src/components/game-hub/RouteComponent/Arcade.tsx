import axios from "axios"
import { useEffect } from "react"

function Arcade() {

    useEffect(() => {
        const apiCallForGameData = () => {
            axios.get("http://localhost:8080/game/Action", {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiaGFudSIsImlhdCI6MTc0MzM0NDQ4NSwiZXhwIjoxNzQzMzQ1Mzg1fQ.IrP5fz7CjxxpPsXbe33zIcgiyjNJmOq-jHlet6uWsMQ"
                }
            }).then(
                (data) => {
                    console.log("shriji")
                    console.log(data)
                }
            ).catch((e) => {
                console.log("jaya")
                console.log(e)
            })
        }
        apiCallForGameData()
    }, [])
    return (
        <>
            <h1 className="mt-3 mx-2"  >Action Games</h1 >
            <div className="list-group m-3" id="list-tab" role="tablist">
                <p>bdhfvbsxhjvhjvh</p>
            </div >
        </>
    );
}

export default Arcade;