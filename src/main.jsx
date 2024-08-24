import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.jsx'
import Quiz from './Quiz.jsx'
import Search from './Search.jsx'
import Details from './Details.jsx'
import './index.css'
import axios from 'axios'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/quiz" element={<Quiz />} />
    <Route path="/search/:query" element={<Search />} 
      loader={async({params})=>{
        const {data} =  await axios.get(import.meta.env.VITE_BASE_URL+"/search/"+params.query)
        return data
    }}/>
    <Route path="/details" element={<Details />} />
  </Route>
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
