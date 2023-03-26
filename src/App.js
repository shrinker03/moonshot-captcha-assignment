import React, { useContext } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme === 'light' ? 'bg-red-300 h-[100vh] text-purple-500' : 'bg-gray-700 h-[100vh] text-slate-300'}>
      <Header />
      <div className='flex justify-center p-10'>
        <Form />
      </div>
    </div>
  )
}

export default App