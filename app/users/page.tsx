import React from 'react'

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

const UsersPage = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {next : { revalidate: 10}})
    const users : User[] = await response.json()
  return (
    <div>
        <h1>Users</h1>
        <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </div>
  )
}

export default UsersPage