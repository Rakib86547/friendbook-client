

 export const setBooking = async booking => {
   const res = await fetch(`${process.env.REACT_APP_API_KEY}/post`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(booking)
    })
    const data = await res.json()
    return data
};

export const postComment = async comment => {
    
    const bookComment = {comment}
   const res = await fetch(`${process.env.REACT_APP_API_KEY}/comment`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(bookComment)
    })
    const data = await res.json()
    return data
};
