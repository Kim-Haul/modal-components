## app.js

```javascript
import React, { useState } from "react";
import Modal from "./commons/Modal";

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
```

## modal.js

```javascript
import React from "react";

const Modal = (props) => {
  const { open, close, header } = props;

  return (
    <Wrap>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={close}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Wrap>
  );
};

export default Modal;
```
