import React from "react";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-dark py-3 ">
      <div className="container footer">
        <p className=" text-white my-auto">
          &copy; 2021 Skillify Education Private Limited. All rights reserved.
        </p>
        <div>
          <ul className="list-unstyled d-flex gap-4">
            <li className="li">
              <a className="a" href="/" target="_blank">
                <GrFacebookOption />{" "}
              </a>
            </li>
            <li className="li">
              <a className="a" href="/" target="_blank">
                <GrTwitter />{" "}
              </a>
            </li>
            <li className="li">
              <a className="a" href="/" target="_blank">
                <GrLinkedinOption />{" "}
              </a>
            </li>
            <li className="li">
              <a className="a" href="/" target="_blank">
                <FaInstagram />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
