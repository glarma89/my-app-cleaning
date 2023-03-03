import React, { useState } from "react";

function ModalWithCheckboxes() {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("checked items:", checkedItems);
    setIsOpen(false);
  };

  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleModalToggle}>
        {isOpen ? "Close Modal" : "Open Modal"}
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="checkbox"
                  name="option1"
                  checked={checkedItems.option1}
                  onChange={handleCheckboxChange}
                />
                Option 1
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="option2"
                  checked={checkedItems.option2}
                  onChange={handleCheckboxChange}
                />
                Option 2
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalWithCheckboxes;