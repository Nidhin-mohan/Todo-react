import { useState, useEffect } from "react";
import { REACT_APP_URL } from "../config";
import { useAuth } from "../context/auth";


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [auth]= useAuth()
  console.log(auth.token)

useEffect(() => {
  const fetchTasks = async () => {
    try {
      const response = await fetch(`${REACT_APP_URL}/task/getall`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTasks(data.tasks);
    } catch (error) {
      console.error(error);
    }
  };
  fetchTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const handleUpdateTask = (taskId, status) => {
  const body = JSON.stringify({ status });
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body,
  };
  fetch(`${REACT_APP_URL}/task/update/${taskId}`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const updatedTasks = tasks.map((task) =>
        task._id === taskId ? data.task : task
      );
      setTasks(updatedTasks);
    })
    .catch((error) => {
      console.error(error);
    });

};

 const handleDeleteTask = async (taskId) => {
   try {
     const response = await fetch(
       `${REACT_APP_URL}/task/delete/${taskId}`,
       {
         method: "DELETE",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${auth.token}`,
         },
       }
     );
     if (!response.ok) {
       throw new Error("Failed to delete task");
     }
     setTasks(tasks.filter((task) => task._id !== taskId));
   } catch (error) {
     console.error(error);
   }
 };



  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Task List</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task._id}
            className={`flex items-center py-3 w-96 justify-between p-2 rounded-lg ${
              task.status.includes("completed")
                ? "bg-green-100"
                : task.status.includes("canceled")
                ? "bg-red-100"
                : "bg-gray-100"
            }`}
          >
            <div className="flex items-center">
              <span className="mr-2">{task.title}</span>
              <span>{`(${task.priority})`}</span>
            </div>
            <div className="flex items-center">
              <span>
                {task.status.includes("completed") ? (
                  <span className="text-green-500">&#10004;</span>
                ) : task.status.includes("canceled") ? (
                  <span className="text-red-500">&#10060;</span>
                ) : (
                  <span>&#9744;</span>
                )}
              </span>
              {task.status.includes("pending") && (
                <>
                  <button
                    className="ml-4 text-green-500 rounded  hover:bg-gray-300"
                    onClick={() => handleUpdateTask(task._id, "completed")}
                  >
                    Complete
                  </button>
                  <button
                    className="ml-2 text-red-500 rounded  hover:bg-gray-300"
                    onClick={() => handleUpdateTask(task._id, "canceled")}
                  >
                    Cancel
                  </button>
                </>
              )}

              <button
                className="ml-2 text-red-500 rounded  hover:bg-gray-300"
                onClick={() => handleDeleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default TaskList;