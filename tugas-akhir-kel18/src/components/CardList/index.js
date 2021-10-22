import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function CardList(props) {
  const { restaurant, isNameBold } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [location, setLoc] = useState("");
  const [url, setUrl] = useState("");
  const [menu, setMenu] = useState([]);

  const toggle = (index) => {
    setName(restaurant[index].name);
    setDesc(restaurant[index].desc);
    setImg(restaurant[index].img);
    setLoc(restaurant[index].location);
    setUrl(restaurant[index].url);
    if (restaurant[index].menu.length > 0) {
      setMenu(restaurant[index].menu);
    } else {
      setMenu([{ f: "-", p: "0" }]);
    }
    setModal(!modal);
  };

  const toggleNested = () => {
    setNestedModal(!nestedModal);
  };

  const close = () => {
    setModal(!modal);
  };

  return (
    <div className="shadow">
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="modal-dialog-centered"
        backdrop={false}
        scrollable={true}
      >
        <ModalHeader toggle={close}>{name}</ModalHeader>
        <ModalBody>
          <button
            onClick={toggleNested}
            style={{ width: "100%", cursor: "zoom-in" }}
          >
            <img src={img} className="w-80 mx-auto" alt="img" />
          </button>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            size="lg"
            scrollable={true}
          >
            <ModalHeader>{name}</ModalHeader>
            <ModalBody>
              <img src={img} className="w-100 mx-auto" alt="img" />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggleNested}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
          <table className="table">
            <tbody>
              <tr>
                <td colSpan={4} style={{ textAlign: "justify" }}>
                  {desc}
                </td>
              </tr>
              <tr>
                <td
                  rowSpan={menu.length + 1}
                  style={{ verticalAlign: "middle" }}
                >
                  Menu
                  <br />
                  Favorit
                </td>
                <td
                  rowSpan={menu.length + 1}
                  style={{ verticalAlign: "middle" }}
                >
                  :
                </td>
                <td>Makanan</td>
                <td>Harga</td>
              </tr>
              {menu.map((menuItem) => (
                <tr>
                  <td>{menuItem.f}</td>
                  <td>Rp. {menuItem.p},-</td>
                </tr>
              ))}
              <tr>
                <td>Alamat</td>
                <td>:</td>
                <td colSpan={"2"}>{location}</td>
              </tr>
              <tr>
                <td>Lokasi</td>
                <td>:</td>
                <td colSpan={"2"}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <button className="btn btn-outline-light">
                      <img
                        src="https://kahuripan.kemensos.go.id/wp-content/uploads/2021/01/Google_Maps_Icon.png"
                        width="30px"
                        alt="maps"
                      />
                      Lihat di Maps
                    </button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={close}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
      <div className="max-w-2x1 mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2x1 font-extrabold tracking-tight text-gray-900">
          Daftar Kuliner Kota Semarang
        </h2>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
          {restaurant.map((resto, index) => (
            <div className="mt-6 grid" key={index}>
              <div className="group relative shadow">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 sm:h-80 lg:aspect-none">
                  <img
                    src={resto.img}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    alt="resto"
                  />
                </div>
                <div className="px-6 pb-6 pt-3 mt-4 flex justify-between">
                  <div>
                    <h3
                      className={`${
                        isNameBold ? "font-bold " : ""
                      } text-sm text-gray-700`}
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {resto.id}. {resto.name}
                    </h3>
                    <p
                      className="mt-1 text-sm text-gray-500"
                      style={{ minHeight: "40px" }}
                    >
                      {resto.location}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Rating: {resto.rating} stars
                    {resto.rating === 5 && (
                      <p style={{ fontSize: "50px", color: "orange" }}>
                        &#8902;&#8902;&#8902;&#8902;&#8902;
                      </p>
                    )}
                    {resto.rating >= 4 && resto.rating < 5 && (
                      <p style={{ fontSize: "50px", color: "orange" }}>
                        &#8902;&#8902;&#8902;&#8902;
                      </p>
                    )}
                    {resto.rating >= 3 && resto.rating < 4 && (
                      <p style={{ fontSize: "50px", color: "orange" }}>
                        &#8902;&#8902;&#8902;
                      </p>
                    )}
                    {resto.rating >= 2 && resto.rating < 3 && (
                      <p style={{ fontSize: "50px", color: "orange" }}>
                        &#8902;&#8902;
                      </p>
                    )}
                    {resto.rating < 2 && (
                      <p style={{ fontSize: "50px", color: "orange" }}>
                        &#8902;
                      </p>
                    )}
                  </p>
                </div>
              </div>
              <Button
                color="info"
                style={{
                  zIndex: "5",
                }}
                size="lg"
                onClick={() => toggle(index)}
              >
                Detail
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
