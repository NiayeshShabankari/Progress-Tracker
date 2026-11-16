// import { useContext, useState } from "react";

import { useContext } from "react"
import { TaskContext } from "../context/taskContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"



export const OpenModal = ({handleModal})=> {
    const {taskName , handleTaskName , addNewTask} = useContext(TaskContext)
    return (
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="flex flex-col w-72 h-52 p-4 bg-Gray rounded-xl gap-3 border border-Silver">
            <button className="self-end hover:bg-Yellow w-8 h-10 rounded-3xl cursor-pointer" onClick={handleModal}><FontAwesomeIcon icon={faClose}/></button>
            <span>Please type your task name :</span>
            <input className="focus:border border-Yellow focus:outline-none p-3 rounded-sm text-gray-900 bg-Silver font-sans" type="text" placeholder=" Your task name..." value={taskName} onChange={handleTaskName}/>
            <button className="w-fit p-1.5 h-10 bg-Yellow rounded-sm cursor-pointer  hover:scale-105 transition-transform" onClick={()=> {
                addNewTask(taskName);
                handleModal();
            }}>Add to task list</button>
        </div>
        </div>
        </>
    )
}
