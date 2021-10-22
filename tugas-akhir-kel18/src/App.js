import { useContext, createContext, useState } from "react";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Gambar from "./assets/images/smg.png";
import Logo from "./assets/images/smg1.png";

const title = "Kuliner Semarang";
const author = "Kelompok 18";

const themes = {
  light: {
    background: "0",
    main: "bg-blue-100 flex flex-col",
  },
  dark: {
    background: "0.5",
    main: "bg-indigo-500 flex flex-col",
  },
};

const ThemeContext = createContext();

export default function App() {
  const [valueTheme, setValueTheme] = useState(themes.light);

  const theme = () => {
    setValueTheme(valueTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <>
      <ThemeContext.Provider value={valueTheme}>
        <button
          className={
            valueTheme === themes.light
              ? "btn btn-secondary"
              : "btn btn-light"
          }
          style={{
            position: "sticky",
            width: "50px",
            height: "50px",
            left: "100%",
            top: "20px",
            zIndex: "10",
            marginRight: "20px",
            textAlign: "center",
          }}
          onClick={theme}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="20px"
            fill="currentColor"
            className="bi bi-moon-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          </svg>
        </button>
        <View />
      </ThemeContext.Provider>
    </>
  );
}

function View() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Header header={title} author={author} image={Gambar} tema={theme.background} />
      <Main tema={theme.main} />
      <Footer
        author="Dinas Kebudayaan dan Pariwisata Kota Semarang"
        image={Logo}
        image2={Gambar}
        quotes={title}
      />
    </>
  );
}