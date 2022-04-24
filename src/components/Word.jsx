import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
const Word = ({data}) => {
  const {theme} = useContext(ThemeContext);

  return  (
      <>
          {  data?.hasOwnProperty("title")  ? (<div className="container xl mx-auto p-8">
        <p className="font-medium">{data.title}</p>
      </div>) :( <div className='container xl mx-auto px-8'>
<div className=''>
  <h3 className='text-orange-900 text-6xl '>{data[0].word}</h3>
</div>
<div className={`${theme === "dark" ? "text-black" : "text-white"}`}>
  <p className='py-2'>{data[0].phonetic}</p>
  <audio className='py-2'
  controls
  src={`${data[0].phonetics[0].audio}`}>
      Your browser does not support the
      <code>audio</code> element.
</audio>

     <p className='py-4'>{data[0].meanings[0].definitions[0].definition}</p>
</div>


</div>)

          }
      </>
    
  )
 
   
  
}

export default Word

// ( <div className='container xl mx-auto px-8'>
// <div className=''>
//   <h3 className='text-orange-900 text-6xl '>{data[0].word}</h3>
// </div>
// <div>
//   <p className='py-2'>{data[0].phonetic}</p>
//   <audio className='py-2'
//   controls
//   src={`${data[0].phonetics[0].audio}`}>
//       Your browser does not support the
//       <code>audio</code> element.
// </audio>

//      <p className='py-4'>{data[0].meanings[0].definitions[0].definition}</p>
// </div>


// </div>)


// (<div className="container xl mx-auto p-8">
// <p className="font-medium">There is no such word! Please make sure that the word is written correct</p>
// </div>)

