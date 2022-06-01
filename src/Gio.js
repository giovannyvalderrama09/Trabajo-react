import { Fragment } from "react"

export function Nombre() {

let variable="React";

let resultado= 11

    return(
        <> 
        <h1>Titulo 1</h1>
        <h2>Titulo 2</h2>
        <h3>Titulo con {variable}</h3>
        <h4>La suma de {resultado}</h4>
        </>
    )
    
}