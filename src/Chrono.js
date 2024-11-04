import React, { useEffect, useState } from 'react';



const Chrono = () => {
   
      const [message, setMessage] = useState('Hello, world!');
      const [time, setTime] = useState(new Date());
    
      useEffect(() => {
        const timeout = setTimeout(() => {
          setMessage('Timeout triggered!');
          setTime(new Date())
        }, 1000); // 3 seconds
    

      }, [time]);
    
      return (
        <div>
          <p>{message} {time.toLocaleTimeString()}</p>
        </div>
      );
    };

    

export default Chrono