import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Contact from './components/Contact'
// import Footer from './components/Footer'
import Error from './components/Error'


function App() {
  let routes = [
    {
      id: 1,
      link: '/',
      component: <Home/>
    },
    {
      id: 2,
      link: '/about',
      component: <About/>
    },
    {
      id: 3,
      link: '/experience',
      component: <Experience/>
    },
    {
      id: 4,
      link: '/work',
      component: <Work/>
    },
    {
      id: 5,
      link: '/contact',
      component: <Contact/>
    },
    // {
    //   id: 6,
    //   link: '/footer',
    //   component: <Footer/>
    // },
    {
      id: 6,
      link: '*',
      component: <Error/>
    },
  ]

  return (
    
    <>
      
    <Header/>
    <Routes>
      {
        routes.map((el, id) => (
          <Route key={id} path={el.link} element={el.component}/>
        ))
      }
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
