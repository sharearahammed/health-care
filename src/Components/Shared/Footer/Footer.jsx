
const Footer = () => {
    return (
        <footer className="footer bg-[#020043] text-gray-400 p-10 md:p-20">
  <aside>
    <img className="h-6 md:h-[30px] md:w-[120px]" src="/logo light.png" alt="" />
    <br />
    <p>
    123 Main Street Anytown, USA 
    <br />
    Postal Code: 12345
    <br />
    <br />

Support: support@oyolloo.com
<br />
(Available : 10:00am to 07:00pm)
      <br />
    </p>
  </aside>
  <nav className="font-semibold">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Success Page</a>
    <a className="link link-hover">Terms And Condition</a>
  </nav>
  <nav className="font-semibold">
    <a className="link link-hover">Services</a>
    <a className="link link-hover">Scheduling</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Patient Portal</a>
  </nav>
  <nav className="">
    <a className="link link-hover font-semibold">Follow Us</a>
    <div className="flex gap-5 mb-[20px]">
    <a className="link link-hover"><img className="text-gray-400 h-[18px]" src="/facebook.svg" alt="" /></a>
    <a className="link link-hover"><img className="text-gray-400 h-[18px]" src="/instagram.svg" alt="" /></a>
    <a className="link link-hover"><img className="text-gray-400 h-[18px]" src="/linkedin.svg" alt="" /></a>
    <a className="link link-hover"><img className="text-gray-400 h-[18px]" src="/youtube.svg" alt="" /></a>
    </div>
    <p></p>
    <a className="link link-hover">@Docplus 2024</a>
  </nav>
</footer>
    );
};

export default Footer;