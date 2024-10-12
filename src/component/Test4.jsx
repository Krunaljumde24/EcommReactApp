import React, { useEffect, useState } from 'react'

function Test4() {

    const [userMap, setUserMap] = useState(new Map())

    useEffect(() => {

        setUserMap(prev => new Map(prev.set(101, {
            name: 'krunal',
            age: 25,
            email: 'krunaljumde24@gmail.com'
        })));

        setUserMap(prev => new Map(prev.set(102, {
            name: 'aarti',
            age: 24,
            email: 'aartiyadav2405@gmail.com'
        })));

    }, [])
    return (
        <div>

            <table>
                <thead>
                    <tr className=''>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(userMap, ([id, user]) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <ul className='list-disc'>
                <li>test</li>
                {Array.from(userMap, ([id, user]) => (
                    <li key={id}>
                        <h3>{user.name}</h3>
                        <p>Age : {user.age}</p>
                        <p>Email : {user.email}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default Test4