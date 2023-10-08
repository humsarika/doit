import React, { useEffect, useState } from "react";
import Task from "./Task";

// TO  get the data from local storage

const getdata = ()=>{
  let list = localStorage.getItem('lists')
}


const Home = () => {
  const [tasks, setTasks] = useState([]);
  // const [Goal, setGoal] = useState("");
  const [Description, setDescription] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, {  Description }]);
    
  };
  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i !== index;
    });
    console.log(filteredArray);
    setTasks(filteredArray);
  };

  // add data to local storage
  useEffect(() => {
    localStorage.setItem("desc",JSON.stringify(Description))
  }, [Description]);

  return (
    <div className="main">
      <div className="container">
        <form onSubmit={submitHandler}>
          {/* <input
            type="text"
            placeholder="Goal"
            value={Goal}
            onChange={(e) => setGoal(e.target.value)}
          /> */}
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Add your goal here "
            value={Description}
            onChange={(e) => setDescription(e.target.value)
            } required
          ></textarea>
          <button type="submit">Add</button>
        </form>
        {tasks.map((item, index) => (
          <Task key={index} 
          // Goal={item.Goal} 
          Description={item.Description}
          deleteTask={deleteTask} 
          index={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
