// import { useContext, useState } from "react";

import { useContext } from "react"
import { HabitContext } from "../context/habitContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"



export const OpenModal = ({handleModal})=> {
    const {habitName , handleHabitName , addNewHabit} = useContext(HabitContext)
    return (
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="flex flex-col w-60 h-50 p-2 bg-[#403d39f1] rounded-xl gap-3">
            <button className="hover:bg-[#EB5E28] w-8 h-10 rounded-3xl cursor-pointer ml-48 " onClick={handleModal}><FontAwesomeIcon icon={faClose}/></button>
            <span>Please type your habit name :</span>
            <input className="bg-amber-100 border-2 border-amber-50 w-48 h-12 rounded-sm text-gray-900" type="text" placeholder=" Your habit name..." value={habitName} onChange={handleHabitName}/>
            <button className="w-34 h-10 bg-[#EB5E28] rounded-sm hover:cursor-pointer" onClick={()=> {
                addNewHabit(habitName);
                handleModal();
            }}>Add to habit list</button>
        </div>
        </div>
        </>
    )
}
