
import {useState } from 'react';
import './App.css'
import { Header } from './components/Header'
import {TaskContextProvider} from './context/taskContext'
import { Task } from './components/Task';
import { AddTasks } from './components/AddTasks';


function App() {

  const [isModalOpen , setIsModalOpen] = useState(false);
  const handleModal =()=> {
        setIsModalOpen((prev)=> !prev)
  }

  return (
      <div className='w-full min-h-screen bg-Gray border border-gray-600 shadow-2xl md:w-3xl md:min-h-120 md:m-auto md:rounded-2xl md:mt-36'>
        <TaskContextProvider>
        <Header isModalOpen={isModalOpen} handleModal={handleModal}/>
        <AddTasks handleModal={handleModal} isModalOpen={isModalOpen}/>
        <Task/>
        </TaskContextProvider>
      </div>
  )
}

export default App;
