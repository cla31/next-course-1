

export default async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log("fetch ok");

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}

