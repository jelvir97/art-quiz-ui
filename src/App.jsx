import { Outlet, useLocation, Link } from 'react-router-dom'
import './App.css'


function App() {
  const {pathname} = useLocation()

  return (
    <div className=' flex flex-col align-middle'>

        <h1 className="text-4xl font-bold hover:scale-50 mb-8">
          Art Quiz!
        </h1>
        {pathname !== "/quiz" ? <Link to="/quiz"><button className="m-3">New Quiz</button></Link> : ""}
        <Outlet />
    </div>
  )
}

export default App
