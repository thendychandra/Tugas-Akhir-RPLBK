import { useState } from "react";
export default function Footer(props) {
  const { author, image, image2, quotes } = props;

  const [src, setSrc] = useState(image2);
  const [name, setName] = useState(
    "Pemerintah Kota Semarang (semarangkota.go.id)"
  );
  const [position, setPosition] = useState("1");

  const changeSlider = () => {
    setSrc(position === "2" ? image : image2);
    setName(
      position === "2"
        ? author
        : "Pemerintah Kota Semarang (semarangkota.go.id)"
    );
    setPosition(position === "1" ? "2" : "1");
  };
  return (
    <>
      <div
        className={"flex flex-col items-center justify-center shadow-md pb-6"}
        style={{
          height: "250px",
          backgroundImage:
            "url(https://infowisata.semarangkota.go.id/assets/images/portfolio_bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h3 className="pt-4 pb-3 font-bold text-xl text-white">{quotes}</h3>
        <div className="flex flex-row">
          <button
            className="btn btn-outline-light mt-4"
            style={{
              padding: "10px",
              height: "45px",
              zIndex: 5,
            }}
            onClick={changeSlider}
          >
            &#10094;
          </button>
          <div className="flex flex-col">
            <img className="w-20 h-30 mx-auto mb-1" src={src} alt="logo"></img>
            <p
              className="text-white-50"
              style={{
                width: "230px",
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              {name}
            </p>
          </div>
          <button
            className="btn btn-outline-light mt-4"
            style={{
              padding: "10px",
              height: "45px",
              zIndex: 5,
            }}
            onClick={changeSlider}
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
}
