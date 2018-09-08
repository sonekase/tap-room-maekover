import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props) {
  return(
    <div className="errorStyle">
      <style jsx>{`
        .errorStyle {
          color: #FFF;
          background-color: rgba(0,0,0,0.8);
          height: 275%;
          width: 104%;
          margin-top: 5%;
          padding-top: 10%;
          margin-bottom: 50%;
        }
        a {
          color: #FA5900;
        }
        a:hover {
          color: #FFF;
        }
        `}</style>
      <h2>PAGE {props.location.pathname} NO CAN FIND...</h2>
      <br/>
      <h2>LIKE GO <Link to='/'> HOME?</Link></h2>
    </div>
  );
}

export default Error404;
