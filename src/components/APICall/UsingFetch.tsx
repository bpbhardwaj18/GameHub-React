import { useEffect, useState } from "react";

interface User {
    name: string;
    id: number
}

function UsingFetch() {
    const [user, setUser] = useState<User[]>([]);
    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
                return res.json();
            }).then((data) => {
                setUser(data)
            }).catch(err => console.log(err))
        }, []
    )

    return (
        <>
            {user.map(d => {
                console.log(d)

                return <p>{d.name}</p>
            })}
        </>
    );
}

export default UsingFetch;

// import { useState, useEffect } from 'react';
// const UsingFetch = () => {
//     const [photos, setPhotos] = useState([]);
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/photos')
//             .then((res) => {
//                 return res.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 setPhotos(data);
//             });
//     }, []);
//     return (
//         <div>

//             {photos.map((photo) => (
//                 <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
//             ))}
//         </div>
//     );
// };
// export default UsingFetch;