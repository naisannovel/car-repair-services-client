import React from "react";
import HorizontalLine from "../utilities/HorizontalLine";

const Works = () => {
  const worksData = [
    {
      title: "Choose YOUR SERVICE",
      icon: "assets/images/how-works-01.png",
    },
    {
      title: "Make an APPOINTMENT",
      icon: "assets/images/how-works-02.png",
    },
    {
      title: "We'll take YOUR CAR for repair",
      icon: "assets/images/how-works-03.png",
    },
    {
      title: "PICK UP your car keys",
      icon: "assets/images/how-works-04.png",
    },
  ];

  const workLayout = worksData.map((data,i) => {
    return (
        <div className="col-md-3 works__col__container" key={i}>
          <img src={data.icon} alt="service" />
          <p>{data.title}</p>
        </div>
    );
  });

  return (
    <div className="container works__container">
      <h1>How It Works</h1>
      <p>These few steps will help return your car to a working condition</p>
      <HorizontalLine position="center" mTop="2.2rem" mBottom="2.5rem" />
      <div className="row">
        {workLayout}
      </div>
    </div>
  );
};

export default Works;
