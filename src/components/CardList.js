import React from 'react';
import Card from './Card';
const CardList = ({ robots }) => {
    return (
        <div className="cards-container">
            {
                robots.map(e => {
                    return <Card key={e.id}
                        name={e.name}
                        email={e.email}
                        id={e.id}
                    />
                })
            }
        </div>
    );
}

export default CardList;
