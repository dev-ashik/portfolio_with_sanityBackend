import React, { useState } from "react";

import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiWechat } from "react-icons/si";
import { images } from "../constants";
import { ReactModal } from "./ReactModal/ReactModal";

const weChatContent = {
  name: "Wechat",
  message: "Scan the QR code to add me as friend.",
  image: images.wechat_qr_code,
};

const SocialMedia = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const hendleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="app__social">
        <a
          href="https://www.linkedin.com/in/dev-ashik/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <BsLinkedin />
          </div>
        </a>
        <div onClick={hendleOpenModal}>
          <SiWechat />
        </div>
        <a
          href="https://www.facebook.com/Ashik100100/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <FaFacebookF />
          </div>
        </a>
      </div>
      <ReactModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        content={weChatContent}
      />
    </>
  );
};

export default SocialMedia;
