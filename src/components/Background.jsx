import React from 'react';
import bg from './../img/taps.jpg';

function Background(){


  return (
    <div>
      <style jsx>{`
        body {
          background-image: url(${bg});
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-clip: content-box;
        }
        `}</style>
    </div>
  );
}

export default Background;
