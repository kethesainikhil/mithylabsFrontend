async function addUserApi(data) {
    const { name, email, password } = data;
    
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/addUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            }),
            credentials: 'include' // Include credentials (cookies) in the request
        });

        console.log(response,"response after fetch");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res = await response.json();
        console.log(res,"res after json");

        return res;

    } catch (e) {
        console.error(e, "error in api function");
        return { error: e.message }; // Return error message
    }
}


export default addUserApi;