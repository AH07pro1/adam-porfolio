import React from 'react'
import ProjectList from '../components/projectList'
import projectList from '@/app/data'

function page() {
    
  return (
    <div>
       <ProjectList projects={projectList} />;
    </div>
  )
}

export default page
