/*
NextJs supports the following HTTP methods:

- Get, Post, Put, Patch, Delete, Head, Options
- Put will update or replace data. Patch partially updates data.
- Head retrieves the head of a resource without fetching the body.
- Options will retrieve the supported HTTP methods and other communication options for a resource.

An example of a get request to get user data:
The  URL will look like this: https://localhost:3000/api/users/

export async function GET(request) {
    const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'James'},
        {id: 3, name: 'Jack'},
    ]
    return new Response(JSON.stringify(users));
}

For other methods, replace GET with the other method.

*/
