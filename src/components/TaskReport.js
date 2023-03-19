import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";
import { REACT_APP_URL } from "../config";

const TasksReport = () => {
  const [counts, setCounts] = useState(null);
  const [auth] = useAuth()

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Add authorization header to axios config
        const config = {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        };

        const response = await axios.get(
          `${REACT_APP_URL}/task/getcount`,
          config
        );
        setCounts(response.data.counts);
        console.log(counts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Tasks Report</h1>
      {counts ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Pending Tasks</h2>
            <p className="text-2xl font-bold">{counts.pending}</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Canceled Tasks</h2>
            <p className="text-2xl font-bold">{counts.canceled}</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Deleted Tasks</h2>
            <p className="text-2xl font-bold">{counts.deleted}</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Completed Tasks</h2>
            <p className="text-2xl font-bold">{counts.completed}</p>
          </div>
        </div>
      ) : (
        <p>Loading counts...</p>
      )}
    </div>
  );
};

export default TasksReport;
