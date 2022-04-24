import  {  useEffect, useState, useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../context/ThemeContext';
import Word from './Word';
import baseUrl from './constants/baseurl';
const Main = () => {
    const {theme, setTheme, toggleTheme} = useContext(ThemeContext);
    const [word, setWord] = useState("")
    const [data, setData] = useState(null)
    const [isSubmit, setIsSubmit] = useState(false);
   
   

    const sunSvg = 
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  const moonSvg =
   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>


    function handleSubmit(event){
        event.preventDefault();
        fetch(`${baseUrl}${word}`)
        .then(response => response.json())
        .then(data => setData(data))
        setIsSubmit(true)

    }

    
    

    

    const changeTheme = () => {
        toggleTheme()
        theme === "light" ? document.body.style.backgroundColor = "white" : document.body.style.backgroundColor = "#11181c";
    }
  return (

    <div>
        <div className='flex justify-end p-4'>{theme === "light" ? (<span onClick={changeTheme} className='cursor-pointer text-white'>{sunSvg}</span>) : (<span onClick={changeTheme} className='cursor-pointer'>{moonSvg}</span>)}</div>
        <main className='container lg mx-auto p-2 min-h-[20vh] flex flex-col justify-center items-center'>
            <h1 className='mx-5 text-3xl font-mono text-violet-300 p-4'>Search for a word</h1>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor='search'>
                </label>
                <input value={word} onChange={({target})=>{setWord(target.value)}} className='border p-2 mx-2 rounded-sm border-gray-500 outline-0' id='search' type="search" placeholder='Search...'/>
                <button className='border py-2 px-6 rounded bg-amber-500 text-white' type='submit'>Search</button>
            </form>
        </main>
        {data && <Word data={data}/>}
    </div>
  )
}

export default Main