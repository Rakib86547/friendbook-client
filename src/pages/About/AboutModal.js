import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const AboutModal = ({users, edit, setEdit}) => {
    const {user} = useContext(AuthContext)
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedUniversity, setEditedUniversity] = useState('');
    const [editedAddress, setEditedAddress] = useState('');
    // console.log(user)
    // console.log(user?.email)
    
    const handleUpdate = () => {
        // e.preventDefault()
        const updateUser = {
            email: editedEmail,
            address: editedAddress,
            name: editedName,
            university: editedUniversity
        }
        console.log(updateUser)
        fetch(`${process.env.REACT_APP_API_KEY}/update/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.modifiedCount > 0) {
                console.log(data)
                setEdit(updateUser)
                toast.success('Update Successfully')
                console.log(updateUser)
                localStorage.setItem('update', JSON.stringify(updateUser))
            }
            // setEdit(data)
        })
    }

    return (
        <div>
            <input type="checkbox" id="about-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                   <form >
                    <label htmlFor="">Name</label>
                   <input type="text" placeholder='update name' onChange={(e) => setEditedName(e.target.value)} className="mb-3 input input-bordered w-full" />

                   <label htmlFor="">Email</label>
                   <input type="email"  onChange={(e) => setEditedEmail(e.target.value)}  placeholder="update email" className="mb-3 input input-bordered w-full" />

                   <label htmlFor="">University</label>
                   <input type="text"  onChange={(e) => setEditedUniversity(e.target.value)} placeholder="update university" className="mb-3 input input-bordered w-full" />

                   <label htmlFor="">Address</label>
                   <input type="text"  onChange={(e) => setEditedAddress(e.target.value)} placeholder="update address" className="mb-3 input input-bordered w-full" />

                    <div onClick={handleUpdate} className="modal-action">
                    <label htmlFor="about-modal" className="cursor-pointer bg-secondary text-white mt-2 px-[25px] py-[6px] rounded-md">Update</label>
                    </div>
                   </form>
                </div>
            </div>
        </div>
    );
};

export default AboutModal;