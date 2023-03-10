import React, {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import { EmailShareButton, OKShareButton, WhatsappShareButton } from 'react-share';

const PrintComponent = () => {
    const conponentRef =useRef();

    const handlePrint = useReactToPrint({
        content: ()=>conponentRef.current,
    });

  return (
    <>
      <div className="col-md-12">
          <button onClick={handlePrint} className="print__button">  Print </button> 
          <div ref={conponentRef} className="card">
            <div className="float__start">
              <h3 className="card-title mb-0">Information</h3>
            </div>
            <hr />
            <div className="float__infoss">
              <ul>
                <li> Name : <span> Dr Andrew C S Koh </span> </li>
                <li> Email : <span> Andrew@gmail.com </span> </li>
                <li> Gender : <span> Male </span> </li>
                <li> Date of Birth : <span> 07-24-1982</span> </li>
                <li> Phone No: <span> </span> 9856231456 </li>
                <li> Address : <span> 26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD </span> </li>
                <li> Website : <span> www.Andrew.com </span> </li>
                <li> Country : <span> United states </span> </li> 
              </ul>
            </div>
          </div>
        
          </div>
          <EmailShareButton>Email</EmailShareButton>
         <OKShareButton>Of Share</OKShareButton>
         <WhatsappShareButton>Share</WhatsappShareButton>
    </>
  )
}

export default PrintComponent