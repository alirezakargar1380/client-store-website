export async function getLandingSection() {
    const res = await fetch('http://localhost:3001/api/landing-section-name')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data: any = res.json()
    return data
}

export function getData() {
    return fetch('http://localhost:3001/api/products?data_per_page=10&page=1')
    // const res = await fetch('http://localhost:3001/api/products?data_per_page=10&page=1')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    // if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        // throw new Error('Failed to fetch data')
    // }

    // const data: any = res.json()
    // return data
}
