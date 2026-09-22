import { useContext } from "react"
import {OpenModal} from "./Modal"
import { HabitContext } from "../context/habitContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons/faAdd";
import headerLogo from '../assets/headerLogo.png'

export const Header = ({isModalOpen , handleModal})=> {
    const {overallProgress} = useContext(HabitContext);
    return (
        <>
        <header className="flex flex-col gap-4">
            <div className="flex justify-between p-3 bg-[#212a3a] rounded-r-2xl rounded-l-2xl rounded-b-none">
                <div className="flex items-center gap-2 text-2xl">
                    <img src={headerLogo} alt="icon" className="w-10 h-10"/>
                    <h1>To Do List</h1>
                </div>
                <button className="bg-[#02c39a] w-8 h-8 rounded-2xl hover:cursor-pointer transition-transform duration-300 hover:scale-110" onClick={handleModal}><FontAwesomeIcon icon={faAdd}/></button>{isModalOpen && (
            <OpenModal handleModal={handleModal}/>
        )}
            </div>
            <div className="bg-[#212a3a] pl-2 pb-1.5 mr-4 ml-4 border border-[#415A77] h-15 rounded-xl">
                <span className="text-[12px] text-gray-300">Overall weekly progress</span><br />
                <div className="flex gap-2.5 justify-center items-center">
                    <span>{overallProgress}%</span>
                    <div className="bg-cyan-50 h-1.5 rounded-sm w-10/12 ">
                        <section className="bg-[#02c39a] h-1.5 rounded-sm" style={{width : `${overallProgress}%`}}></section>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}