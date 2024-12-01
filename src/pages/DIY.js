import React, { Fragment, useState } from 'react';

const DIY = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <Fragment>
      <div className="content">
        <h1>DIY Heritage</h1>
        <p>Under development, soon to be shared.</p>
        <p>Here are some screenshots from it.</p>
        <div className="views">
          <div className="imgcont">
            <img
              src="../media/diy/ss_1.jpg"
              onClick={() => openModal("../media/diy/ss_1.jpg")}
              alt="Screenshot"
            />
          </div>
          <div className="imgcont">
          <img
            src="../media/diy/ss_2.jpg"
            onClick={() => openModal("../media/diy/ss_2.jpg")}
            alt="Screenshot"
          />
          </div>
          <div className="imgcont">
          <img
            src="../media/diy/ss_3.jpg"
            onClick={() => openModal("../media/diy/ss_3.jpg")}
            alt="Screenshot"
          />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Enlarged Screenshot" />
          </div>
        </div>
      )}

     
    </Fragment>
  );
};

export default DIY;

