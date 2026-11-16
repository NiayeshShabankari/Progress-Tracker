import { useContext } from "react"
import { TaskContext } from "../context/taskContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export const Task =()=> {
    const {taskItem , deleteTask, progressTracker} = useContext(TaskContext);
    const hasTask = taskItem.length > 0;
    const weekdays = ["MON","TUE","WED","THU","FRI","SAT","SUN"];
    const day = new Date();
    const weekday = weekdays[day.getDay()];

    const showToday = (day)=>{
        return weekday === day;
    }

    return (
        <>
        <section className="p-2">
                {hasTask && 
        (<ul className="flex justify-center gap-3.5 text-xs text-Silver md:text-sm md:gap-7 p-2.5 pl-5 ">
        {weekdays.map((day)=>(
            <li key={day} className={showToday(day)? "border-b-2 border-Yellow pb-1" : ""}>{day}</li>
        ))}
        </ul>)}
        {taskItem?.map((item)=> (
            <div key={item.id} className="flex flex-col justify-evenly h-14 border-b border-b-Silver" >
                <div className="flex md:justify-between items-center">
                    <span className="text-xs md:text-sm w-12">{item.name}</span>
                    <div className="flex gap-5.5 ml-5.5 justify-center items-center md:gap-10.5 md:ml-6">
                        <input className="appearance-none w-4 h-4 border-2 border-Yellow rounded-4xl cursor-pointer checked:bg-Yellow checked:border-Yellow transition-all
  " type="checkbox" checked={item.days.monday} onChange={(e)=> progressTracker(item.id , e)} name="monday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-Yellow rounded-4xl cursor-pointer checked:bg-Yellow checked:border-Yellow transition-all
  " type="checkbox" checked={item.days.tuesday} onChange={(e)=> progressTracker(item.id , e) } name="tuesday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-Yellow rounded-4xl cursor-pointer checked:bg-Yellow checked:border-Yellow transition-all
  " type="checkbox" checked={item.days.wednesday} onChange={(e)=> progressTracker(item.id , e)} name="wednesday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-Yellow rounded-4xl cursor-pointer checked:bg-Yellow checked:border-Yellow transition-all
  " type="checkbox" checked={item.days.thursday} onChange={(e)=> progressTracker(item.id , e)} name="thurday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-Yellow rounded-4xl cursor-pointer checked:bg-Yellow checked:border-Yellow transition-all
  " type="checkbox" checked={item.days.friday} onChange={(e)=> progressTracker(item.id , e)} name="friday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-Yellow rounded-4xl cursor-pointer checked:bg-Yellow checked:border-Yellow transition-all
  " type="checkbox" checked={item.days.saturday} onChange={(e)=> progressTracker(item.id , e)} name="saturday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-Yellow rounded-4xl cursor-pointer checked:bg-Yellow checked:border-Yellow transition-all
  " type="checkbox" checked={item.days.sunday} onChange={(e)=> progressTracker(item.id , e)} name="sunday"/>
                    </div>
                    <button className="hover:bg-Yellow w-8 h-8 ml-7.5 rounded-2xl cursor-pointer" onClick={()=>deleteTask(item.name)}><FontAwesomeIcon icon={faTrash}/></button>
                </div>
            </div> 
        ))}
        </section>
        </>
        )

           
}
