export default function Footer() {
  return (
    <div className=" bg-[#1f1f1f] h-[120px] p-5">
      <div className=" p-3 w-[300px] ml-40 flex justify-around ">
        <a className="text-[#726a61] hover:text-white" href="#">
          Home
        </a>
        <a className="text-[#726a61] hover:text-white" href="#about">
          About
        </a>
        <a className="text-[#726a61] hover:text-white" href="#blog">
          Blog
        </a>
        <a className="text-[#726a61] hover:text-white" href="#">
          Contacts
        </a>
      </div>
      <p className="cursor-pointer float-right text-[#726a61] mr-[65px] hover:text-white">
        All Rights Reserved. © 2023 (by XiTiZ)
      </p>
    </div>
  );
}
