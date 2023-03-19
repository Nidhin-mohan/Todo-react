import React from 'react'
import CreateTaskForm from '../../components/Forms/TaskForm'
import Layout from '../../components/Layout/Layout'
import TaskList from '../../components/TaskList'


const Task = () => {
  
  return (
    <>
    <Layout>
      <div className='flex flex-col '>
        <div >
          <CreateTaskForm/>

        </div>
        <div>
         <TaskList/>

        </div>




      </div>
        
    </Layout>

    </>
  )
}

export default Task