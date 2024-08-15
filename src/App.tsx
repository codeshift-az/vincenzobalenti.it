import { useState } from "react";

// Assets
import ButtonIMG from "@/assets/images/btn.webp";
import BackgroundLeft from "@/assets/images/background/left.webp";
import BackgroundRight from "@/assets/images/background/right.webp";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className={`box`}>
        <div className={`box-left ${isOpen ? "move-left" : ""}`}>
          <img src={BackgroundLeft} alt="Left Background Image" />
          <div className="wrap">
            <span className="left">Vincenzo</span>
          </div>
        </div>

        <div className={`box-right ${isOpen ? "move-right" : ""}`}>
          <img src={BackgroundRight} alt="Right Background Image" />
          <div className="wrap">
            <span className="right">Balenti</span>
          </div>
        </div>

        <div className={!isOpen ? "box-open" : "hidden"}>
          <div className="btn-open" onClick={() => setIsOpen(!isOpen)}>
            <img src={ButtonIMG} alt="Button Image" />
          </div>
          <div className="btn-shade"></div>
        </div>
      </div>

      <main>
        <div className="bg-cover"></div>

        <section className="wrapper">
          <div className="text-style title">
            <div className="top">Vincenzo Balenti</div>
            <div className="bottom" aria-hidden="true">
              Vincenzo Balenti
            </div>
          </div>

          <div className="text-style content">
            <div className="top">Coming Soon</div>
            <div className="bottom" aria-hidden="true">
              Coming Soon
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
