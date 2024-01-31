import { useState, useRef, useEffect } from "react";

import data from "../data/myWork.json";
import "../scss/myWork.scss";
import swipeHint from "../assets/swipeUp.svg";
import code from "../assets/programistyczne_kody.png";

function MyWork() {
  const [isTileSwiped, setTileSwiped] = useState(false);
  const startY = useRef([]);
  const tileRefs = useRef([]);

  const handleTouchStart = (e, index) => {
    startY.current[index] = e.touches[0].clientY;
  };

  const handleTouchMove = (e, index) => {
    if (startY.current[index] !== undefined && tileRefs.current[index]) {
      const deltaY = e.touches[0].clientY - startY.current[index];

      if (deltaY < -50) {
        setTileSwiped(true);
        tileRefs.current[index].classList.add("Work__TileMobileText-swiped");
      } else if (deltaY > -50) {
        tileRefs.current[index].classList.remove("Work__TileMobileText-swiped");
      }
    }
  };

  const handleTouchEnd = (index) => {
    startY.current[index] = undefined;
  };

  useEffect(() => {
    const handleTouchMoveWrapper = (e, index) => {
      handleTouchMove(e, index);
      e.preventDefault(); // Prevent the default scrolling behavior
    };

    tileRefs.current.forEach((tileRef, index) => {
      tileRef.addEventListener(
        "touchmove",
        (e) => handleTouchMoveWrapper(e, index),
        { passive: false }
      );
    });

    return () => {
      tileRefs.current.forEach((tileRef, index) => {
        tileRef.removeEventListener("touchmove", (e) =>
          handleTouchMoveWrapper(e, index)
        );
      });
    };
  }, []); // Run this effect once when the component mounts

  return (
    <section className="Work" id="MyWork">
      <div className="ContentWrapper">
        <h2 className="About__Heading sectionHeading">
          <span>2. </span>
          My work
        </h2>

        <div className="Work__Content">
          <div className="Work__Grid Work__GridMobile">
            {data.map((tile, index) => (
              <div
                key={tile.id}
                className="Work__Tile"
                style={{ backgroundImage: `url('${tile.image}')` }}
              >
                <div
                  className="Work__TileText Work__TileMobileText"
                  ref={(el) => el && tileRefs.current.push(el)}
                  onTouchStart={(e) => handleTouchStart(e, index)}
                  onTouchMove={(e) => handleTouchMove(e, index)}
                  onTouchEnd={() => handleTouchEnd(index)}
                >
                  <span
                    className={index === 0 && !isTileSwiped ? "text-left" : ""}
                  >
                    {tile.title}
                  </span>
                  {index === 0 && !isTileSwiped && (
                    <img
                      src={swipeHint}
                      className="Work__TileMobileSwipeHint"
                    />
                  )}
                  <p className="Work__TileTextAdditional">{tile.content}</p>
                  <a href={tile.link}>Proceed to website</a>
                </div>
              </div>
            ))}
          </div>

          <div className="Work__Grid Work__GridDesktop">
            {data.map((tile, index) => (
              <a
                key={index}
                className="Work__Tile"
                style={{ backgroundImage: `url('${tile.image}')` }}
                href={tile.link}
                target="_blank"
                rel="noreferrer"
              >
                <p className="Work__TileText">
                  {tile.title}
                  <p className="Work__TileTextAdditional">{tile.content}</p>
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="Work__codeImageWrapper">
        <img src={code} className="Work__codeImage" />
      </div>
    </section>
  );
}

export default MyWork;
