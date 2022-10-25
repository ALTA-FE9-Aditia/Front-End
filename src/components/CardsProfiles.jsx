import React from "react";
import { MdLogout } from "react-icons/md";
import EditModal from "../components/EditModal";

const Profiles = () => {
  return (
    <div className="w-[30%] h-[30rem] p-5 bg-white rounded-xl  shadow-xl">
      <img
        src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        className="object-cover h-[18rem] w-[20rem] rounded-lg "
      />
      <h1 className="text-3xl font-bold text-base-green mt-6">Earth Market</h1>
      <p className="text-[16px] font-normal text-base-green mt-1 mb-6">
        earthmarket@gmail.com
      </p>
      <div className="flex justify-between items-center">
        <label
          htmlFor="modal-edit"
          className=" w-[3rem]  cursor-pointer flex justify-center items-center h-[1.2rem] md:w-[9rem] md:h-[2.8rem] bg-base font-medium rounded-sm md:rounded-lg text-putih md:text-[16px] text-[5px] all-btn"
        >
          Change Profile
        </label>
        <MdLogout size={25} className="text-base-green cursor-pointer" />
      </div>

      <input type="checkbox" id="modal-edit" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white h-[40rem] w-[35%]">
          <label
            htmlFor="modal-edit"
            className="cursor-pointer btn-sm  absolute right-2 top-2 bg-white border-white"
          >
            ✕
          </label>
          <EditModal />
        </div>
      </div>
    </div>
  )
};

export default Profiles;