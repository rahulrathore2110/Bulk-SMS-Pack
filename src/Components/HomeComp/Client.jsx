import React from 'react'
import client_1 from '../../Assets/images/client-1.jpg'
import client_2 from '../../Assets/images/client-2.jpg'
import client_3 from '../../Assets/images/client-3.jpg'
import client_4 from '../../Assets/images/client-4.jpg'
import client_5 from '../../Assets/images/client-5.jpg'
import client_6 from '../../Assets/images/client-6.jpg'
import client_7 from '../../Assets/images/client-7.jpeg'
import client_8 from '../../Assets/images/client-8.jpeg'
import client_9 from '../../Assets/images/client-9.jpeg'
import client_10 from '../../Assets/images/client-10.jpeg'
import client_11 from '../../Assets/images/client-11.jpeg'
import Marquee from 'react-fast-marquee'
import './client.css'

const Client = () => {
    return (
      <div className='c-outer'>
        <Marquee speed={200}>
          <div className="client">
            <img src={client_1} alt="clients" />
            <img src={client_2} alt="clients" />
            <img src={client_3} alt="clients" />
            <img src={client_4} alt="clients" />
            <img src={client_5} alt="clients" />
            <img src={client_6} alt="clients" />
            <img src={client_7} alt="clients" />
            <img src={client_8} alt="clients" />
            <img src={client_9} alt="clients" />
            <img src={client_10} alt="clients" />
            <img src={client_11} alt="clients" />
          </div>
        </Marquee>
      </div>
    );
}

export default Client