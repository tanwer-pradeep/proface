import React, { useEffect } from "react";
import MainHeader from "./content/MainHeader";
import MainContent from "./content/MainContent";
import MainFooter from "./content/MainFooter";
import axios from "axios";
const url = `https://qa-backend.proface.com/jsonapi/menu_link_content/menu-main-en`;

const ProfaceApp = () => {
  useEffect(() => {
    fetchApiResponse();
  }, []);

  const fetchApiResponse = () => {
    var config = {
      method: "get",
      url: "https://qa-backend.proface.com/jsonapi/menu_link_content/menu-main-en",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="proface-wrapper proface-wrapper">
        <MainHeader />
        <div className="main-content">
          <div className="main">
            <MainContent />
            <div className="footer-wrapper">
              <MainFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfaceApp;
