import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const head ={pagename : "Haryana"};

function Haryana(){
    return<>
        <Heading title={head.pagename}></Heading>

    </>
}
function Heading(props){
  return<> <div className="nav-box w-75">
  {props.title}   
</div>
</>
}

function Slide(){
    return<>
        
    </>
}



export default Haryana;

