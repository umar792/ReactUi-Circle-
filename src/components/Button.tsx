import * as React from 'react';

type PropType = {
    children: React.ReactNode,
}

const Button = ({ children }: PropType) => {
    return (
        <button
            style={{
                backgroundColor: 'blue',
                color: 'white',
                borderRadius: '5px',
                padding: '10px',
                margin: '10px',
                cursor: 'pointer'
            }}
        >
            {children}
        </button>
    )
}

export {Button};