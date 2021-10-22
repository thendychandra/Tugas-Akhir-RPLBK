import CardList from "../CardList";
import { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import axios from "axios";

export default function Main() {
  var number = 6;
  var key = 0;
  var button = [];
  var items = [];

  const [number_new, setNumber] = useState(3);
  const [contacts, setContacts] = useState([]);
  const [data, setData] = useState([]);
  const [buttons, setBtn] = useState([]);
  const [card, setCard] = useState(false);

  useEffect(() => {
    axios({
      url: "http://localhost:3000/data",
    })
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const showList = () => {
    changeShow();
    setCard(!card);
  };

  const changeList = (pages) => {
    number = number_new;
    key = (pages - 1) * number;
    changeShow();
  };

  const changeShow = () => {
    if (data.length > number) {
      setNumber(number);
      const but_num = data.length / number;
      var last_data = key + (number - 1);
      if (last_data >= data.length) {
        last_data = data.length - 1;
      }
      for (var i = key; i <= last_data; i++) {
        items.push(data[i]);
      }
      for (var but = 0; but < but_num; but++) {
        button.push(but);
      }
      setBtn(button);
      setContacts(items);
    } else {
      setNumber(data.length);
      setContacts(data);
      button.push(0);
      setBtn(button);
    }
  };

  const changeNumber = (num) => {
    if (num >= data.length) {
      number = data.length;
    } else {
      number = num;
    }
    changeShow();
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
      <div className="bg-blue-100 flex flex-col">
        <button
          className="btn btn-primary"
          style={{
            width: "92vw",
            padding: "20px",
            margin: "3vw",
            zIndex: "5",
          }}
          onClick={showList}
        >
          {card ? "Hide" : "Show"} List!
        </button>
        {card && (
          <>
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-md-auto align-self-center">
                  <span
                    style={{
                      marginLeft: "-10px",
                    }}
                  >
                    <strong>Showing:</strong>
                  </span>
                </div>
                <div className="col-md-auto">
                  <Dropdown
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    style={{
                      zIndex: "5",
                    }}
                  >
                    <DropdownToggle color="dark" caret>
                      {number_new}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={() => changeNumber(3)}>
                        3
                      </DropdownItem>
                      <DropdownItem onClick={() => changeNumber(6)}>
                        6
                      </DropdownItem>
                      <DropdownItem onClick={() => changeNumber(9)}>
                        9
                      </DropdownItem>
                      <DropdownItem onClick={() => changeNumber(data.length)}>
                        Show All
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <CardList restaurant={contacts} isNameBold />
            <center
              style={{
                zIndex: "5",
              }}
            >
              <span
                style={{
                  marginLeft: "-10px",
                }}
              >
                Page:
              </span>
              {buttons.map((index) => (
                <button
                  className="btn btn-primary"
                  style={{
                    margin: "10px",
                  }}
                  onClick={() => changeList(index + 1)}
                  key={index}
                >
                  {index + 1}
                </button>
              ))}
            </center>
          </>
        )}
      </div>
  );
}
