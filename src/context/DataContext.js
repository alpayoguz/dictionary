import { createContext, useContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [word, setWord] = useState("")
    const fetchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    // useEffect(()=>{
    //     function fetchDataFromAPI(){
    //         fetch(fetchUrl)
    //         .then(response => response.json())
         
    //     }
      

    //     fetchDataFromAPI();
    // }, [])
    const value = {
        word, setWord
    }


    console.log(word);



    return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  
}

export {useContext}