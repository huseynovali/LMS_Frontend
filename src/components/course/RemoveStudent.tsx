
function RemoveStudent({ checkedStudent }: { checkedStudent: number | null }) {
  return (
    <div>
        <div>
            <button className="bg-red-500 text-white  px-2 py-2 rounded hover:bg-red-600">
            Tələbəni Qrupdan Çıxar
            </button>
        </div>
    </div>
  )
}

export default RemoveStudent