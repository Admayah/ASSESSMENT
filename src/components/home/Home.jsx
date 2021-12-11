import React from 'react'
import Formpage from '../formpage/Formpage';
import Frontpage from '../frontpage/Frontpage';


import "./home.css"

function Home() {
    return (
        <div className="home">
              <Frontpage/>
            <Formpage/>
          
        </div>
    )
}

export default Home
