import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { TaskContext } from '../context/taskContext';
import { OpenModal } from '../components/Modal';

export const AddTasks = ({handleModal , isModalOpen}) => {
    const {taskItem} = useContext(TaskContext);
    return(
        <>
            {taskItem == 0 && <section className='flex flex-col gap-2 justify-center items-center mt-18'>
                <h2 className='text-2xl text-silver'>Build your first task list</h2>
                <span className='text-xs text-gray-300'>Track your progress one day at a time</span>
                <button  onClick={handleModal} className='w-46 h-12 text-silver cursor-pointer rounded-xl font-sans bg-Yellow hover:scale-105 transition-transform duration-300'><FontAwesomeIcon icon={faAdd}/>  Add your first task</button>
                {isModalOpen && (<OpenModal handleModal={handleModal}/>)}
                <span className='text-xs text-gray-300 font-sans'><FontAwesomeIcon icon={faCalendar}/> You can check your tasks from Monday to Sunday</span>
            </section>}
        </>
    )
}