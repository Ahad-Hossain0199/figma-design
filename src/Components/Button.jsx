import React from 'react'

const Button = ({ className, children,text }) => {
    return (
        <div>
            <div className='flex items-center gap-6'>
                <span className='font-normal text-[15px] text-secondary'>{text}</span>
                <button className={`bg-primary py-6 px-8 rounded-full  font-medium text-[#FAFAFA] ${className}`}>
                    {children}
                </button>
            </div>

        </div>
    )
}

export default Button