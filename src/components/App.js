
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const imgUrl = [
  "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80&q=80",
  "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/GLS/9791/1704772236530/front-left-side-47.jpg",
  "https://imgd.aeplcdn.com/642x336/n/cw/ec/162929/e-class-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"
]

const App = () => {
  const [currUrl, setUrl] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let url = currUrl;
      if(url+1 >= 3 ) {
        url = -1;
      }
      console.log(url+1);
      setUrl(url+1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currUrl]);

  // console.log(currUrl);

  return (
    <div>
        <img src={imgUrl[currUrl]} />
    </div>
  )
}

export default App
