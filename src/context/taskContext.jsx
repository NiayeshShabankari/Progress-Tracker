import { createContext, useState ,useEffect } from "react";


export const TaskContext = createContext(null);

export const TaskContextProvider = (props)=>{
    const [taskName , setTaskName] = useState("");
    const [overallProgress, setOverallProgress] = useState(()=> {
        const savedPercent = localStorage.getItem("overal-percent");
        return savedPercent ? JSON.parse(savedPercent) : 0;
    })

    const [taskItem , setTaskItem] = useState(()=> {
        const savedTasks = localStorage.getItem("my-tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(()=>{
        localStorage.setItem("my-tasks" , JSON.stringify(taskItem));
    },[taskItem])


    useEffect(()=>{
        localStorage.setItem("overal-percent" , JSON.stringify(overallProgress));
    },[overallProgress])

    const handleTaskName =(e)=>{
        setTaskName(e.target.value)
    }


    const progressTracker =(id , e)=>{
        const{name , checked} = e.target;

        setTaskItem((prev) =>{ 
            const updated = prev.map((item)=>{
                if(item.id === id){
                    const updateDays = {...item.days , [name]: checked,};
                    const count = Object.values(updateDays).filter((day)=> day).length;
                    const percent = (count / 7) * 100;
                    return {...item , days: updateDays , count: count , percent: percent}; 
                }
                return item;
            });
            

            const totalCount = updated.reduce(
            (total , item) => total + item.count , 0);
            setOverallProgress(()=>{
                const percentage = totalCount / (updated.length * 7) *100 ;
                return Number((percentage).toFixed(1));
            })
            return updated;
        });

    };

    const addNewTask = (taskName)=> {
        const alreadyExist = taskItem.some(item=> item.name === taskName);
        if(alreadyExist){
            alert('This Task Already exist!');
            return;
        }else if(taskName === ""){
            alert('Please pick a name for your task!');
            return;
        }
        
        setTaskItem(prev=> [...prev , {id : Date.now()  , name : taskName , count : 0 , percent : 0,
            days:{monday:false, tuesday:false, wednesday:false, thursday:false , friday:false,saturday:false ,sunday:false}}])
        
        setTaskName("");
    }
    
    
    const deleteTask = (taskName) => {
    setTaskItem(prev => {
        const updated = prev.filter(item => item.name !== taskName);

        const totalCount = updated.reduce(
            (total, item) => total + item.count, 0
        );

        const totalDays = updated.length * 7;

        const percentage = totalDays === 0
            ? 0
            : (totalCount / totalDays) * 100;

        setOverallProgress(Number(percentage.toFixed(1)));

        return updated;
    });
};

        

    const contextValue = {taskName ,taskItem , handleTaskName , addNewTask , deleteTask, overallProgress ,progressTracker}
    return <TaskContext.Provider value={contextValue}>{props.children}</TaskContext.Provider>
}