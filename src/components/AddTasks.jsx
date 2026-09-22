import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCalendar } from '@fortawesome/free-solid-svg-icons';
import image1 from '../assets/image1.png'

export const AddTasks = () => {
    return(
        <>
            <section className='flex flex-col gap-2 justify-center items-center mt-6'>
                <img src={image1} className='w-40 h-26 pt-2'/>
                <h2 className='text-2xl'>Build your first task list</h2>
                <span className='text-sm text-gray-400'>Track your progress one day at a time</span>
                <button className='w-46 h-12 rounded-xl bg-[#02c39a]'><FontAwesomeIcon icon={faAdd}/>  Add your first task</button>
                <span className='text-sm text-gray-400'><FontAwesomeIcon icon={faCalendar}/> You can check your tasks from Monday to Sunday</span>
            </section>
        </>
    )
}