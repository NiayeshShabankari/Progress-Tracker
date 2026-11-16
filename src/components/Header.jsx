import { useContext } from "react"
import {OpenModal} from "./Modal"
import { TaskContext } from "../context/taskContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons/faAdd";


export const Header = ({isModalOpen , handleModal})=> {
    const {overallProgress} = useContext(TaskContext);
    return (
        <>
        <header className="flex flex-col gap-4">
            <div className="flex justify-between p-3 rounded-r-2xl rounded-l-2xl rounded-b-none border-b border-Silver">
                <div className="flex items-center text-2xl">
                    <h1>To Do List</h1>
                </div>
                <button className="bg-Yellow w-8 h-8 rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110" onClick={handleModal}><FontAwesomeIcon icon={faAdd}/></button>{isModalOpen && (
            <OpenModal handleModal={handleModal}/>
        )}
            </div>
            <div className="p-2 mr-4 ml-4 border border-Silver h-15 rounded-xl md:pl-2 md:pb-1.5">
                <span className="text-xs font-sans">Overall weekly progress</span><br />
                <div className="flex gap-2.5 justify-center items-center">
                    <span>{overallProgress}%</span>
                    <div className="bg-cyan-50 h-1.5 rounded-sm w-[90%] ">
                        <section className="bg-Yellow h-1.5 rounded-sm" style={{width : `${overallProgress}%`}}></section>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}