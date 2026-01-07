import React from "react";
import "./Biography.css";

const Biography = ({ imageUrl }) => {
  return (
    <section className="biography-section">
      <div className="biography-container">
        <div className="bio-image">
          <img src={imageUrl} alt="Who We Are" />
        </div>

        <div className="bio-content">
          <span className="bio-tag">Biography</span>
          <h3 className="bio-title">Who We Are</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            blanditiis sequi aperiam. Debitis fugiat harum ex maxime illo
            consequatur mollitia voluptatem omnis nihil nesciunt beatae esse
            ipsam, sapiente totam aspernatur porro ducimus aperiam nisi.
          </p>

          <p>
            Ex magnam voluptatum consectetur reprehenderit fugiat recusandae aut
            similique illum natus velit, praesentium nostrum nesciunt. Deleniti,
            nesciunt laboriosam totam iusto!
          </p>

          <p className="highlight">We are all in 2024!</p>
          <p className="highlight">We are working on a MERN STACK PROJECT.</p>

          <p>
            Dolores assumenda exercitationem accusamus sit repellendus quo optio
            dolorum corporis corrupti. Quas similique vel minima veniam tenetur
            obcaecati atque magni suscipit laboriosam!
          </p>

          <p className="closing">Coding is fun!</p>
        </div>
      </div>
    </section>
  );
};

export default Biography;
