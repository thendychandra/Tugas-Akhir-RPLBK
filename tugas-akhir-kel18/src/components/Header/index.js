export default function Quotes(props) {
  const { header, author, image, tema } = props;
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0,0,0," + tema + ")",
          position: "fixed",
          top: "0px",
          zIndex: "2",
          height: "100%",
          width: "100%",
        }}
      ></div>
      <div
        className="C"
        style={{
          marginTop: "-10vh",
          backgroundImage:
            "url(https://infowisata.semarangkota.go.id/assets/images/cover-three.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 10px",
        }}
      >
        <img
          className="pt-7 pl-7 ml-7"
          width="90px"
          src={image}
          alt="logo"
        ></img>
        <div
          className={"flex items-center justify-center"}
          style={{ height: "110vh" }}
        >
          <h2
            className="text-3xl pt-3 font-extrabold tracking-tight sm:text-4xl text-center"
            style={{
              height: "110vh",
            }}
          >
            <span className="font-weight-bold block text-white">{header}</span>
            <span className="font-weight-light text-white">{author}</span>
          </h2>
        </div>
      </div>
    </>
  );
}
