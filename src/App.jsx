
import {useState } from 'react';
import './App.css'
import { Header } from './components/Header'
import {HabitContextProvider} from './context/habitContext'
import { Habit } from './components/Habit';
import { AddTasks } from './components/AddTasks';


function App() {

  const [isModalOpen , setIsModalOpen] = useState(false);
  const handleModal =()=> {
        setIsModalOpen((prev)=> !prev)
    }

  return (
      <div className='app m-auto w-3xl min-h-120 bg-[#171f27] rounded-2xl mt-36 border border-[#415A77] shadow-[0_4px_8px_0_rgba(0,0,0,0.3),0_6px_20px_0_rgba(0,0,0,0.19)]'>
        <HabitContextProvider>
        <Header isModalOpen={isModalOpen} handleModal={handleModal}/>
        <AddTasks/>
        <Habit/>
        </HabitContextProvider>
      </div>
  )
}

export default App
