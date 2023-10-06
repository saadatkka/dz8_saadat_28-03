import React from 'react';
import twitter from'../../images/twitter.png'
import insta from '../../images/insta.png'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-wrapper"> 
                    <div>
                        <p>
                            наши соц.сети:
                        </p>
                        <p>
                            наш номер:
                        </p>
                    </div>
                    <div> 
                        
                        <div>
                            <a href=""><img className='logo' src={twitter} alt=""/></a>
                            <a href=""><img className='logo' src={insta} alt=""/></a>
                        </div>
                        <p>0565646476</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;