import React, { useState } from "react";
import Task from "./Task";
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [Goal, setGoal] = useState("");
  const [Description, setDescription] = useState("");

  const submitHnadler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { Goal, Description }]);
  };
  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i !== index;
    });
    console.log(filteredArray);
    setTasks(filteredArray);
  };
  return (
    <div className="container">
      <form onSubmit={submitHnadler}>
        <input
          type="text"
          placeholder="Goal"
          value={Goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="Add your goal here "
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
      {tasks.map((item, index) => (
        <Task key={index} 
        Goal={item.Goal} 
        Description={item.Description}
        deleteTask={deleteTask} 
        index={index}
        />
      ))}
    </div>
  );
};

export default Home;
