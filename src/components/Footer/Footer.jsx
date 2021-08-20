import React from 'react';
import GoogleMap from '../utilities/GoogleMap';

const Footer = () => {
    return (
        <div style={{position:'relative'}}>
            <GoogleMap/>
            <div className="footer__content" style={{padding:'50px',position:'absolute',width:'400px',top:'0',backgroundColor:'#D3D3D3',height:'100%',left:'6%'}}>
                <h4>Contact Info</h4>
                Lorem, ipsum dolor sitd amet consectetur adipisicing elit. Facere, tenetur. Tempora dolorem nesciunt, impedit ipsum dicta quia sapiente numquam nulla saepe ratione eaque in? Nemo excepturi officiis quas temporibus atque.
            </div>
        </div>
    );
};

export default Footer;