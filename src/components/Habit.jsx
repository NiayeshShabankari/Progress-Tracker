import { useContext } from "react"
import { HabitContext } from "../context/habitContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export const Habit =()=> {
    const {habitItem , deleteHabit, progressTracker} = useContext(HabitContext);
    const hasHabit = habitItem.length > 0;

    return (
        <>
        {hasHabit && 
        (<ul className="flex gap-7 justify-center text-sm p-2.5 pl-6 text-amber-100">
        <li>MON</li>
        <li>TUE</li>
        <li>WED</li>
        <li>THU</li>
        <li>FRI</li>
        <li>SAT</li>
        <li>SUN</li></ul>)}
        {habitItem?.map((item)=> (
            <div key={item.id} className="flex flex-col justify-evenly h-14" >
                <div className="flex justify-between">
                    <span className="w-12">{item.name}</span>
                    <div className="flex gap-10 justify-center items-center">
                        <input className="appearance-none w-4 h-4 border-2 border-[#EB5E28] rounded-4xl cursor-pointer checked:bg-[#EB5E28] checked:border-[#EB5E28] transition-all
  " type="checkbox" checked={item.days.mondey} onChange={(e)=> progressTracker(item.id , e)} name="monday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-[#EB5E28] rounded-4xl cursor-pointer checked:bg-[#EB5E28] checked:border-[#EB5E28] transition-all
  " type="checkbox" checked={item.days.tuesday} onChange={(e)=> progressTracker(item.id , e) } name="tuesday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-[#EB5E28] rounded-4xl cursor-pointer checked:bg-[#EB5E28] checked:border-[#EB5E28] transition-all
  " type="checkbox" checked={item.days.wednesday} onChange={(e)=> progressTracker(item.id , e)} name="wednesday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-[#EB5E28] rounded-4xl cursor-pointer checked:bg-[#EB5E28] checked:border-[#EB5E28] transition-all
  " type="checkbox" checked={item.days.thurday} onChange={(e)=> progressTracker(item.id , e)} name="thurday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-[#EB5E28] rounded-4xl cursor-pointer checked:bg-[#EB5E28] checked:border-[#EB5E28] transition-all
  " type="checkbox" checked={item.days.friday} onChange={(e)=> progressTracker(item.id , e)} name="friday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-[#EB5E28] rounded-4xl cursor-pointer checked:bg-[#EB5E28] checked:border-[#EB5E28] transition-all
  " type="checkbox" checked={item.days.saturday} onChange={(e)=> progressTracker(item.id , e)} name="saturday"/>
                        <input className="appearance-none w-4 h-4 border-2 border-[#EB5E28] rounded-4xl cursor-pointer checked:bg-[#EB5E28] checked:border-[#EB5E28] transition-all
  " type="checkbox" checked={item.days.sunday} onChange={(e)=> progressTracker(item.id , e)} name="sunday"/>
                    </div>
                    <button className="hover:bg-[#EB5E28] w-8 h-8 rounded-2xl cursor-pointer" onClick={()=>deleteHabit(item.name)}><FontAwesomeIcon icon={faTrash}/></button>
                </div>
            </div> 
        ))}
        </>
        )

           
}
