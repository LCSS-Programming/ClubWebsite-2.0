import { useState } from 'react'
import Calendar from './Calendar' 
import Title from './Title'
import Work from './Work.jsx'
import Front from './Front.jsx'
import ProjectsPage from './Projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Front />
      <Calendar />
      <Work />
      <Title />
      <ProjectsPage />
    </>
  )
}

export default App
