import React from 'react'
import AccountStat from './AccoutStat'
import Chart from './Chart'

import './Home.css'
import Table from './Table'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <AccountStat />
        <Chart />
        <Table />
      </div>
    </div>
  )
}

export default Home
