import React from "react";
import { useState } from "react";

export function Event_onMouseOut(){

    const [images] = useState(["m1.jpg", "m2.jpg", "m3.jpg", "m4.jpg"]);
    const [preview, setPreview] = useState('m1.jpg');

    function handleMouseout(e){
        setPreview(e.target.src);
    }

    return(
        <div className="container-fluid">
        <p className="bold">Mouse out Envet</p>
            <section className="mt-4 row">
                <nav className="col-2">
                   {
                     images.map(imagePath=>
                        <div className="mb-4 p-2" style={{width:'120px'}}>
                            <img style={{cursor:'grab'}} onMouseOut={handleMouseout} src={imagePath} width="100" height="100" />
                        </div>
                        )
                   }
                </nav>
                <main className="col-10">
                   <div style={{height:'400px', width:'400px', overflow:'hidden'}}>
                    <img src={preview} width="400" height="400" />
                   </div>
                </main>
            </section>
        </div>
    )
} 