import React from 'react'
import ReactDOM from 'react-dom' 
import Heading from "./Heading"
import Lists from "./Lists"
import "./index.css"
function raju(value) {
    return (<>
        <Heading 
img ={ value.img}
moviename = {value.moviename}
description = {value.description}
link = {value.link}
></Heading>
    </>);

}


ReactDOM.render(<>
<h1 className='heading'>some movies for you guys</h1>


{ Lists.map (raju )}


</>,document.getElementById("root"))