import React from "react";


export function Overlay(props){

    if(props.display == "home"){
      return  <div className="content">
                <p>Hello There!</p>
                <p>I am Daneil Varjaskeri</p>
                <div>
                    <button id="aboutBtn" onClick = {e => btnClick(e)}>About</button>
                    <button id="projectsBtn" onClick = {e => btnClick(e)}>Projects</button>
                    <button id="contactBtn" onClick = {e => btnClick(e)}>Contact</button>
                </div>
              </div>
    }

    else return(
        <div className="content">testasd</div>
    );
}


