import React from 'react'
import CardItem from './CardItem';
import './Card.css';
import Logo from"../images/img-3.jpg";
import Pic from"../images/img-1.jpg";
import Img from"../images/img-2.jpg";

function Card() {
    return (
        <div className="cards">
            <h1>Our Services</h1>
              <div className="cards__container">
                  <div className="cards__wrapper">
                      <ul className="cards__items">
           <CardItem
              src={Logo}
              text='Explore the hidden waterfall deep inside the Amazon
               Jungle with Sqwizoor from Nxozimond Area'
              label='Adventure'
              path='/services'
            />
           <CardItem
              src={Img}
              text='Explore the hidden waterfall deep inside the Amazon
               Jungle with Sqwizoor from Nxozimond Area'
              label='Adventure'
              path='/services'
            />
                      </ul>
                      <ul className="cards__items">
           <CardItem
              src={Logo}
              text='Explore the hidden waterfall deep inside the Amazon
               Jungle with Sqwizoor from Nxozimond Area'
              label='Adventure'
              path='/services'
            />
          <CardItem
              src={Pic}
              text='Explore the hidden waterfall deep inside the Amazon
               Jungle with Sqwizoor from Nxozimond Area'
              label='Adventure'
              path='/services'
            />     
          <CardItem
              src={Img}
              text='Explore the hidden waterfall deep inside the Amazon
               Jungle with Sqwizoor from Nxozimond Area'
              label='Adventure'
              path='/services'
            />
                      </ul>
                  </div>
              </div>
            
        </div>
    )
}

export default Card
