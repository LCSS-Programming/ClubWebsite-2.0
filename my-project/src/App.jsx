import { useState } from 'react'
import Title from './Title'
import Front from './Front.jsx'
import About from './About'
import ProjectsPage from './Projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Front />
      <Title />
      <About />
      <ProjectsPage />
    </>
  )
}

export default App
