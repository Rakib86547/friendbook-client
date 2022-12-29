import React from 'react';

const AboutModal = ({users}) => {
    return (
        <div>
            <input type="checkbox" id="about-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                   <form>
                   <input type="text" placeholder="update name" className="mb-3 input input-bordered w-full" />
                   <input type="email" placeholder="update email" className="mb-3 input input-bordered w-full" />
                   <input type="text" placeholder="update university" className="mb-3 input input-bordered w-full" />
                   <input type="text" placeholder="update address" className="mb-3 input input-bordered w-full" />
                   </form>
                    <div className="modal-action">
                    <label htmlFor="about-modal" className="cursor-pointer bg-secondary text-white mt-2 px-[25px] py-[6px] rounded-md">Submit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutModal;