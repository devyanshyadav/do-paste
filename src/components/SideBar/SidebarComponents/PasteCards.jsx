import React, { useEffect, useState } from "react";
import { RiMore2Line } from "react-icons/ri";

function PasteCards({searchvalue}) {
  const [showOptions, setShowOptions] = useState(null);

  const allDatas = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  const [allData, setAllData] = useState(allDatas);

  const toggleOptions = (id) => {
    setShowOptions(showOptions === id ? null : id);
  };

  const handleEdit = (id) => {
    alert("this will edit")
  }

  const handleDelete = (id) => {
   const afterDelete = allData.filter((item) => item.id !== id);
   setAllData(afterDelete)
  }

  const handleView = (id) => {
    alert("this will view")
  }

  useEffect(() => {
      const filterData = allDatas.filter((item) => item.id.toString().includes(searchvalue))
      setAllData(filterData)
  },[searchvalue])

  return (
    <div className="w-full">
      {allData &&
        allData.map((item) => (
          <div
            key={item.id}
            className="w-full hover:bg-primary  transition-all py-3 px-3 bg-white border-[1.3px] border-solid border-secondary  mt-4 rounded-md"
          >
            <div className="flex justify-between">
              <p className="text-lg font-semibold">{item.id} Title</p>
              <div className="relative">
                <RiMore2Line
                  className="text-secondary cursor-pointer text-2xl"
                  onClick={() => toggleOptions(item.id)}
                />
                {showOptions === item.id && (
                  <div className="absolute transition-all select-none w-[150px] border-solid border-secondary border-[1.2px]  overflow-hidden rounded-md   top-7 right-3 bg-white">
                    <p className="text-secondary  py-[6px] cursor-pointer px-2 transition-all hover:bg-[#87f88730]" onClick={() => handleEdit(item.id)}>Edit</p>
                    <p className="text-secondary py-[6px] cursor-pointer px-2 transition-all hover:bg-[#ff20201c]" onClick={() => handleDelete(item.id)}>Delete</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="text-secondary">Author</p>
            </div>
            <div className="mt-5 flex gap-3">
              <button onClick={() => handleEdit(item.id)} className="text-secondary rounded-full px-6 py-1 border-solid border-secondary border-[1.5px]">
                Edit
              </button>
              <button onClick={() => handleView(item.id)} className="text-white bg-secondary rounded-full px-6 py-1 border-solid border-secondary border-[1.5px]">
                View
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default PasteCards;
