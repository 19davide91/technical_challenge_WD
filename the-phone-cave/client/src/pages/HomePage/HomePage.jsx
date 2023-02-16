import axios from "axios";
import PhoneCardList from "../components/PhoneCardList";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function PhoneListPage() {
  const [phones, setphones] = useState([]);

  const getAllPhones = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/phones`)
      .then((res) => {
        setphones(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <h1 className="p-0 m-b-20 m-t-10 t">All Phones:</h1>
          {phones.map((phone) => {
            return (
              <>
                <PhoneCardList
                  key={phone._id}
                  {...phone}
                  handleHover={handleHover}
                />
              </>
            );
          })}
        </Col>
        <Col>{id && <img src={id} alt="phone"></img>}</Col>
      </Row>
    </>
  );
}

export default PhoneListPage;
