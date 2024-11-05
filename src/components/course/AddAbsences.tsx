import { useState } from "react";

import AbsencesModal from "./AbsencesModal";

function AddAbsences({ allDates }: { allDates: string[] }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="bg-[#3e80f9] text-white px-2 py-2 rounded-md text-sm"
        onClick={() => setShowModal(true)}
      >
        Qayıb əlavə et
      </button>

      {showModal && (
        <AbsencesModal
          showModal={showModal}
          setShowModal={setShowModal}
          allDates={allDates}
        />
      )}
    </div>
  );
}

export default AddAbsences;
