import { useState } from "react"
import { AddCategoy } from "./components/AddCategoy";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    //const categories = ['One punch', 'Pokemon','Dragon ball'];
    const [categories, setCategories] = useState(['ditto']);

    /*const handleAdd = () => {
        setCategories( [...categories, 'HunterXHunter'] );
        //setCategories( cats => [...cats,'HxH'] );
    }*/

            return(
            <><h2>GifExpertApp</h2>
            <AddCategoy setCategoria={setCategories}/>
            <hr />

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                        key={category}
                        category={category} />
                    ))
                }
            </ol>
            </>
            )
}