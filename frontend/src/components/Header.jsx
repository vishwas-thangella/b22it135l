import React from 'react'
import icon from '../Assets/shop.png';

const Header = () => {
    return (
        <div className='p-4 flex justify-between'>
            <div className='flex items-center gap-3'>
                <img src={icon} alt="" className='w-10 h-10' />
                <h1 className='text-2xl customfont'>ECommerce</h1>
            </div>
            <div className='flex items-center gap-2'>
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>
        </div>
    )
}

export default Header