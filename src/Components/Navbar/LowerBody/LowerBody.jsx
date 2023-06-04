import React from 'react';
import './lowerbody.css';

function LowerBody(props) {
    return (
        <div className='container1'>
           <h2>Our Features</h2> 
           <div className='main'>
            <div className='submain'>
               <img src='https://cdn1.vectorstock.com/i/1000x1000/33/70/fully-responsive-web-design-icon-vector-5813370.jpg' width="50px" height="50px"/>
               <h3>Fully Responsive</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam modi aliquid temporibus suscipit facere debitis officiis nobis ipsam a.</p>
            </div>
            <div className='submain'>
               <img src='https://cdn-icons-png.flaticon.com/512/8358/8358886.png' width="50px" height="50px"/>
               <h3>Trusted Author</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam modi aliquid temporibus suscipit facere debitis officiis nobis ipsam a.</p>
            </div>
            <div className='submain'>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNqHcdUXgoURcQVrbM5lnUghec7RzO7Pr7w&usqp=CAU'width="50px" height="50px"/>
               <h3>Reusable Elements</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam modi aliquid temporibus suscipit facere debitis officiis nobis ipsam a.</p>
            </div>
           </div> 
        </div>
    );
}

export default LowerBody;