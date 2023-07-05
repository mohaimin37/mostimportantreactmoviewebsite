function Heading (props){
    return (<>
<div className='cards'>
<div className='card'>
<img height="300px" width = "300px" src ={props.img} alt = ""  className='img1' />
<div className='movies'>
<h3 className='moviename'>
{props.moviename}
    
</h3>
<span className='details'>
{props.description}    </span>

</div>
<a href= {props.link}><button className="btn"> click here</button></a>

</div>
</div>


</>);
}

export default Heading;