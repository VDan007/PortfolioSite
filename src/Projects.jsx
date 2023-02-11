import React from "react";

export default function Projects(){

    const [activated,setActivated] = React.useState(false);

    return(
        <div className={activated ? "compScreenActivated" : "compScreen"}>
          
          {!activated && 
          <>
             <p>WELLCOME!</p>
            <p>Press to Activate!</p>
          
          </>}



            
            
        </div>);
}