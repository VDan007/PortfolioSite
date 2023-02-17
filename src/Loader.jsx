import React from "react";


function Loading(){
    return(
      <div className="loader">
        <h1>Loading...</h1>
        <img id="loaderImg" src="/load.gif" alt="" />
      </div>
    );
  }

  export default Loading;