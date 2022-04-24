


const Word = ({data}) => {

  return  (
      <>
          {data  && ( <div className='container xl mx-auto px-8'>
        <div className=''>
          <h3 className='text-orange-900 text-6xl '>{data.word}</h3>
        </div>
        <div>
          <p className='py-2'>{data.phonetic}</p>
          <audio className='py-2'
          controls
          src={`${data.phonetics[0].audio}`}>
              Your browser does not support the
              <code>audio</code> element.
        </audio>

             <p className='py-4'>{data.meanings[0].definitions[0].definition}</p>
        </div>
      
      
      </div>) 
          }
      </>
    
  )
 
   
  
}

export default Word

