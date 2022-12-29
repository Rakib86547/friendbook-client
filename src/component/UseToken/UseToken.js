const setAuthToken = (user, name, image,  university, address) => {
    const currentUser = {
        email: user?.email,
        name: name,
        image: image,
        university,
        address
    };
    fetch(`${process.env.REACT_APP_API_KEY}/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('accessToken', data.accessToken)
    })
};

export default setAuthToken;