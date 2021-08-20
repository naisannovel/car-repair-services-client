import React from "react";

const HorizontalLine = ({position,mTop,mBottom}) => {
  return (
    <div className="about__horizontal__line__container" style={{justifyContent:`${position}`,marginTop:`${mTop}`,marginBottom:`${mBottom}`}}>
      <hr className="about__horizontal__line-1" />
      <hr className="about__horizontal__line-2" />
      <hr className="about__horizontal__line-3" />
    </div>
  );
};

export default HorizontalLine;
