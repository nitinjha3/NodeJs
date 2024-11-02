const fs=require('fs')
const filePath="./task.json"

const loadTasks=()=>{
    try {
        const dataBuffer=fs.readFileSync(filePath)
        const  dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const SaveTasks=(tasks)=>{
    const dataJSON=JSON.stringify(tasks)
    fs.writeFileSync(filePath,dataJSON)
}

const addTask=(task)=>{
    const tasks=loadTasks()
    tasks.push({task})
    SaveTasks(tasks)
    console.log("task added ",task);
    
}

const command=process.argv[2]
const argument=process.argv[3]

if(command==='add'){
    addTask(argument)
}else if(command=='list'){
    listTask()
}else{
    console.log("command not found!");
    
}