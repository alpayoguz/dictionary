


const Word = () => {

  return (
    <div className='container xl mx-auto px-8'>
      <div className=''>
        <h3 className='text-orange-900 text-6xl '>key</h3>
      </div>
      <div>
        <p className='py-2'>"/kiː/"</p>
        <audio className='py-2'
        controls
        src="https://api.dictionaryapi.dev/media/pronunciations/en/key-uk.mp3">
            Your browser does not support the
            <code>audio</code> element.
      </audio>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, praesentium!</p>
      </div>
     
    
    </div>
  )
}

export default Word