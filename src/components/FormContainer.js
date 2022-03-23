import React from 'react';
import bgImage from '../image/bgImage.png'

const FormContainer = () => {
    return (
        <div>
            <div className='grid grid-cols-[70rem_1fr] min-h-screen'>
                <div className='bg-gradient-to-r from-[#443453] via-[#232323] to-[#252425]'>
                    <img src={bgImage} alt="bgimage" className='h-[58rem] mt-1 ml-24' />
                </div>

            </div>
        </div>
    );
};

export default FormContainer;