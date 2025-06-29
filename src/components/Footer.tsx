export default function Footer() {
  return (
    <div className=" bg-[#1f1f1f] h-[120px] p-5">
      <div className=" p-3 w-[70%] md:w-[30%] ml-[10%] mb-6  flex justify-between ">
        <a className="text-[#726a61] hover:text-white" href="/#">
          Home
        </a>
        <a className="text-[#726a61] hover:text-white" href="/#about">
          About
        </a>
        <a className="text-[#726a61] hover:text-white" href="/#blog">
          Blog
        </a>
        <a className="text-[#726a61] hover:text-white" href="/contact#contact">
          Contacts
        </a>
      </div>
      <p className="animate-pulse cursor-pointer float-right text-[#726a61] mr-[10%] hover:text-white">
        All Rights Reserved. © {new Date().getFullYear()} (by XiTiZ)
      </p>
    </div>
  );
}
