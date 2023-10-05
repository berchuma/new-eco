const  = () => {
    return ( 
        <div>
            {State.map((item)=>(
                <div>
                    <img>{item.img}</img>
                </div>
            ))}
        </div>
     );
}
 
export default ;
