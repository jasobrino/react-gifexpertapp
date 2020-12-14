
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['rick and morty']);
  
  // const handleAdd = () => { 
  //   setCategories([ ...categories,'Monguer Guaper'  ]); 
  //   // usando el callback
  //   // setCategories( categ => [ ...categ, 'Monguer Guaper'] );
  //}
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />
 
      <ol>
        {  
          categories.map( category => 
            <GifGrid 
              key={ category }
              category={ category } 
            />
          )
        }
      </ol>
    
    </>
  ) 

}


