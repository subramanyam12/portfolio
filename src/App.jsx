import { useState,createContext } from 'react'
import './App.css'
import  Navbar  from './components/Navbar'
import Content from './components/Content'

export const scrollvalue=createContext()

  
 export function App() {
  const [scroll, setscroll] = useState(0)
  const [highlight, sethighlight] = useState('About')


  return (
    <div className='w-full flex h-[100vh]'>
      <scrollvalue.Provider value={{scroll,setscroll,highlight,sethighlight}}>
        <Navbar />
        <Content />
      </scrollvalue.Provider>

    </div>
  )
}


