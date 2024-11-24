import { IoRemoveCircleOutline } from 'react-icons/io5'
import { RiAdminLine } from 'react-icons/ri'

function RemoveAdmin({admin}) {
  return (
    <div
    key={admin.id}
    className="flex gap-x-2 my-1 hover:scale-[1.02] items-center"
  >
    <RiAdminLine />
    <span className="text-[16px] font-bold min-w-[120px]">
      {admin.name} {admin.surname}
    </span>
    <button className="text-red-500">
      <IoRemoveCircleOutline size={20} />
    </button>
  </div>
  )
}

export default RemoveAdmin