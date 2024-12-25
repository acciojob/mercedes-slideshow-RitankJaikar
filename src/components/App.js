
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const imgUrl = [
  "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem/image/MQ6-0-image-20220419101504/01-mercedes-benz-the-new-eqs-suv-x296-2021-1080x1350.jpeg",
  "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
  "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_354875624/image/MQ6-0-image-20220419101505/03-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg"
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
