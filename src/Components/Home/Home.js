import React from 'react'
import './Home.css'
import Product from '../Proudct/Product'

function Home() {
  return (
    <div className="home">
    <div className="home__container">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row ">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div> 
      <div className="home__row">
        <Product
          id="90829332"
          title="Dell XPS 8950 Desktop (2022) | Core i9-2TB SSD - 32GB RAM - 3070 Ti | 16 Cores @ 5.1 GHz - 8GB GDDR5 Win 11 Pro (Renewed)"
          price={1094.98}
          rating={4}
          image="https://m.media-amazon.com/images/I/81rt17lGrmL._AC_UY218_.jpg"
        />
        <Product
          id="90829332"
          title="Lenovo IdeaPad 3 – (2023) - Everyday Notebook - Windows 11-14 Full HD – 8GB Memory – 128GB Storage - Intel Core i3-1115G - Platinum Grey"
          price={1094.98}
          rating={4}
          image="https://m.media-amazon.com/images/I/81sq-a+suJL._AC_UY218_.jpg"
        />
        <Product
          id="90829332"
          title="Parthcksi 5V 1A AC Adapter for Animal Planet Electronic Pet Feeder Power Supply Charger"
          price={57}
          rating={4}
          image="https://m.media-amazon.com/images/I/61gSBYCQ67L._AC_UL320_.jpg"
        />
      </div> 
      <div className="home__row">
        <Product
          id="12321341"
          title="CISSOOK Turquoise Cover for MacBook Pro 14 Case 2021 2023 Release A2442 A2779, Hard Shell Case with Keyboard Cover Screen Protector for MacBook Pro 14 Inch M1 M2 - Turquoise"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51imGp1JyLL._AC_UL400_.jpg"
        />
        <Product
          id="49538094"
          title="Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers, Gym Equipment for Work from Home Fitness, Black JX-7301"
          price={239.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_UL400_.jpg"
        />
      </div>
    </div>
  </div>
  )
}

export default Home