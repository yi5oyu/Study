import React, {useState} from 'react';

function O(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i) => i !== index));
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
             const updatedTask = [...tasks];
             [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
             setTasks(updatedTask);
        }
    }

    return(
        <div>
            <h2>List</h2>
            <div>
                <input type="text" placeholder="목록작성" value={newTask} onChange={handleInputChange} />
                <button onClick={addTask}>목록등록</button>
            </div>

            <ol>
                {tasks.map((task,index) =>
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => deleteTask(index)}>삭제</button>
                        <button onClick={() => moveTaskUp(index)}>위로</button>
                        <button onClick={() => moveTaskDown(index)}>아래로</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default O
