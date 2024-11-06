import React, { useState } from "react";

function AddStudent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>
        <button
          className="bg-[#3e80f9] text-white px-2 py-2 rounded-md text-sm"
          onClick={() => setShowModal(true)}
        >
          Tələbə əlavə et
        </button>
      </div>
    </div>
  );
}

export default AddStudent;
