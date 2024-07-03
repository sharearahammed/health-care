
const Navbar = () => {
    const links = <>
    <li className="text-[#020043]"><a>Home</a></li>
    <li className="text-[#020043]"><a>Services</a></li>
    <li className="text-[#020043]"><a>Blog</a></li>
    <li className="text-[#020043]"><a>About us</a></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className="h-4 md:h-[32px] md:w-[124px]" src="/logo dark.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="border border-[#020043] px-2 py-1 md:px-6 md:py-2 text-[12px] md:text-[16px] font-bold rounded-xl flex justify-center items-center gap-2">Appointment <img src="/Arrow.svg" alt="" /></a>
  </div>
</div>
    );
};

export default Navbar;