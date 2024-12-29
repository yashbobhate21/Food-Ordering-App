import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Explore from '../../components/Exploremenu/Explore'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import Appdownload from '../../components/Appdownload/Appdownload'

function Home() {

const [category, setcategory] = useState("All")

    return (
        <div>
      <Header/>
      <Explore category={category} setcategory={setcategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
      </div>
    )
}

export default Home
