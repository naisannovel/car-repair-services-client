import React from "react";
import GoogleMap from '../../utilities/GoogleMap';

const ContactMap = () => {
  return (
    <div>
        <div class="contact__map__container">
          <GoogleMap/>
          <div className="contact__map__content">
            <h4>Contact Info</h4>
            Lorem, ipsum dolor sitdd amet consectetur adipisicing elit. Facere,
            tenetur. Tempora dolorem nesciunt, impedit ipsum dicta quia sapiente
            numquam nulla saepe ratione eaque in? Nemo excepturi officiis quas
            temporibus atque.
          </div>
        </div>
      </div>
  );
};

export default ContactMap;
