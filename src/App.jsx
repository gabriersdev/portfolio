import './App.css'
import Menu from './components/menu/Menu'
import Title from './components/title/Title'
import Main from './components/main/Main'
import Dialog from './components/dialog/Dialog'
import Footer from './components/footer/Footer'
import { useEffect } from 'react'

function App() {
  const upPage = (e) => {
    e.preventDefault
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    document.querySelectorAll('a').forEach(link => link.setAttribute('rel', 'noopener noreferrer'));
  }, [])

  return (
    <>
      <Menu fnc={upPage} />
      <Title />
      <Main />
      <Dialog />
      <Footer fnc={upPage} theme={{}} />
    </>
  )
}

export default App
