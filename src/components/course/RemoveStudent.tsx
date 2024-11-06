function RemoveStudent({ checkedStudent }: { checkedStudent: number | null }) {
  const removeStudent = () => {
    if (confirm("Tələbəni qrupdan çıxarmaq istədiyinizə əminsiniz?")) {
      console.log({ checkedStudent });
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={removeStudent}
          className="bg-red-500 text-white  px-2 py-2 rounded hover:bg-red-600"
        >
          Tələbəni Qrupdan Çıxar
        </button>
      </div>
    </div>
  );
}

export default RemoveStudent;
