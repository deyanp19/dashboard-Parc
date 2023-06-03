
export default function Jumbotron({image,title,text}){

    return (
        <div className="mt-4 p-5 shadow   rounded">
           
            <div className="row justify-content-start ">
                <div className="col-3 ">
                        <img style={{"width":"20vw"}} src={image}  alt="Payarc Logo tilted" />
                </div>
                <div className="col-9">
                    <h1 style={{"font-weight":"700","fontFamily":"Quicksand"}}>{title}</h1>
                    <p style={{"font-weight":"300","fontFamily":"Quicksand"}}>{text}</p>
                </div>
                
            </div>
 
        </div>
    );
}