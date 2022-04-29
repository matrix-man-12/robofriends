import React from 'react';
import Card from './Card';


const CardList = (props) => {
    const { robots } = props

    // const cardsArray = robots.map((card, index) => {
    //     return (
    //         <Card  
    //             key={card.id} 
    //             name={card.name} 
    //             email={card.email} 
    //             id={card.id}
    //         />
    //     )
    // })


    return (
        <div>
            {
                robots.map((card, index) => {
                    return (
                        <Card  
                            key={card.id} 
                            name={card.name} 
                            email={card.email} 
                            id={card.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;