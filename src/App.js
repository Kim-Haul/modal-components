import React, { useState } from "react";
import Modal from "./commons/Modal";
import styled from "styled-components";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <Wrap>
        <button className="openBtn" onClick={openModal}>
          모달팝업
        </button>
        <Modal open={modalOpen} close={closeModal} header="Modal heading">
          리액트 모달을 띄워봅시다.
        </Modal>
      </Wrap>
    </React.Fragment>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .openBtn {
    padding: 10px;
    border-radius: 5px;
    border: 0;
    width: 20%;
    height: 10%;
    font-size: 3rem;
    cursor: pointer;

    &:hover {
      outline: red solid 3px;
    }
  }
`;
