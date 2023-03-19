import React from 'react'
import Layout from '../components/Layout/Layout'

const HomePage = () => {
  return (
    <Layout>
        <section class="text-gray-600 body-font text-center">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Personalised
        <br class="hidden lg:inline-block"/>Todo List application
      </h1>
      <p class="mb-8 leading-relaxed">Welcome to My To-Do List App, the perfect tool to help you stay organized and on top of your tasks. With our easy-to-use platform, you can create tasks, set deadlines, and even receive reminders to ensure you never miss a deadline again. </p>
     
    </div>
   
  </div>
</section>

    </Layout>
  )
}

export default HomePage