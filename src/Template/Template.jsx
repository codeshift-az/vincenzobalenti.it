import React from "react";
import "../Template/template.css";
import suit1 from "../assets/bg1.jpeg";
import suit2 from "../assets/bg2.jpeg";
import btn from "../assets/btn5.png";

function Template() {
  const [isMovedLeft, setIsMovedLeft] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);

  const handleMoveLeftClick = () => {
    setIsMovedLeft(!isMovedLeft);
  };

  React.useEffect(() => {
    if (isMovedLeft) {
      const timer = setTimeout(() => {
        setIsHidden(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isMovedLeft]);

  function leftRight() {
    return (
        
      <div className={`leftRight ${isHidden ? "hidden" : ""}`}>
        <div className={`box-left ${isMovedLeft ? "move-left" : ""}`}>
          <img src={suit1} alt="" />
          <div className="wrap2">
	<span className="left">Vincenzo</span>
	<span className="centre"></span>
	<span className="right">&nbsp;</span>
</div>
        </div>
        <div className={`box-right ${isMovedLeft ? "move-right" : ""}`}>
          <img src={suit2} alt="" />
          <div className="wrap">
	<span className="left"></span>
	<span className="centre"></span>
	<span className="right">Balenti&nbsp;</span>
</div>
        </div>
        <div className="circleAndButton">
          <div
            className={isMovedLeft ? "displayNone" : "btn1"}
            onClick={handleMoveLeftClick}
          >
            <img src={btn} alt="" />
          </div>
          <div className={isMovedLeft ? "" : "circle"}></div>
        </div>
  
      </div>
    );
  }

  return (
    <div className="container">
      {leftRight()}
      <div className="mainCnt">
        <div className="bgMain"></div>
        <section className="wrapper">
          <div className="top">Vincenzo Balenti</div>
          <div className="bottom" aria-hidden="true">
            Vincenzo Balenti
          </div>
        </section>
        <section className="wrapper2">
          <div className="top2">Coming Soon</div>
          <div className="bottom2" aria-hidden="true">
            Coming Soon
          </div>
        </section>
      </div>

    </div>
  );
}

export default Template;
