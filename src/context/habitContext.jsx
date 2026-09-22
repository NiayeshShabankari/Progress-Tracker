import { createContext, useState ,useEffect } from "react";


export const HabitContext = createContext(null);

export const HabitContextProvider = (props)=>{
    const [habitName , setHabitName] = useState("")
    const [overallProgress, setOverallProgress] = useState(()=> {
        const savedPercent = localStorage.getItem("overal-percent");
        return savedPercent ? JSON.parse(savedPercent) : 0;
    })

    const [habitItem , setHabitItem] = useState(()=> {
        const savedHabits = localStorage.getItem("my-habits");
        return savedHabits ? JSON.parse(savedHabits) : [];
    });

    useEffect(()=>{
        localStorage.setItem("my-habits" , JSON.stringify(habitItem));
    },[habitItem])


    useEffect(()=>{
        localStorage.setItem("overal-percent" , JSON.stringify(overallProgress));
    },[overallProgress])

    const handleHabitName =(e)=>{
        setHabitName(e.target.value)
    }


    const progressTracker =(id , e)=>{
        const{name , checked} = e.target;

        setHabitItem((prev) =>{ 
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


    const addNewHabit = (habitName)=> {
        const alreadyExist = habitItem.some(item=> item.name === habitName);
        if(alreadyExist){
            alert('This Habit Already exist!');
            return;
        }else if(habitName === ""){
            alert('Please pick a name for your habit!');
            return;
        }
        
        setHabitItem(prev=> [...prev , {id : Date.now()  , name : habitName , count : 0 , percent : 0,
            days:{monday:false, tuesday:false, wednesday:false, thursday:false , friday:false,saturday:false ,sunday:false}}])
        
        setHabitName("");
    }
    
    
    const deleteHabit = (habitName)=> {
        setHabitItem(prev=> prev.filter(item => 
            item.name !== habitName)
    )
        // fix the overal percent after you delete a habit
    }

        

    const contextValue = {habitName ,habitItem , handleHabitName , addNewHabit , deleteHabit, overallProgress ,progressTracker}
    return <HabitContext.Provider value={contextValue}>{props.children}</HabitContext.Provider>
}