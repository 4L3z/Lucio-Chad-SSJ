import { Routes, Route } from 'react-router-dom'
import Home from './Routes/home.jsx'
import Xd from './Routes/xd.jsx'
import transformationsData from './transformations.json'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {transformationsData.map((transformation, index) => (
        <Route
          key={index}
          path={transformation.path}
          element={<Xd {...transformation} />}
        />
      ))}
    </Routes>
  )
}

export default App
