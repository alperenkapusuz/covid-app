import React, {useEffect} from 'react'
import Navi from './components/navi/Navi'
import {fetchTurkeyData} from './components/covidTable/Api'
import CovidTable from './components/covidTable/CovidTable'

const App = () => {

  

  return (
    <div>
      <Navi/>
      <CovidTable/>
    </div>
  )
}

export default App

