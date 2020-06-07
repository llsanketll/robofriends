import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{position:'sticky', top:'0', zIndex: 1}}>
            { props.children }
        </div>
    ) 
};

export default Scroll;