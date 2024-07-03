import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="inter bg-[#020043]">
      <footer className="footer container mx-auto text-white p-10 py-[120px]">
        <aside>
          <img
            src="https://i.ibb.co/RT0kzhH/logolight.png"
            className="mb-[33px]"
          ></img>
          <p>
            123 Main Street Anytown, USA <br /> Postal Code: 12345
            
            <br /><br />
            Support:
            support@oyolloo.com <br /> (Available : 10:00am to 07:00pm)
          </p>
        </aside>
        <nav className="space-y-4 mt-6">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms and Condition</a>
        </nav>
        <nav className="space-y-4 mt-6">
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>
        <nav className="mt-5">
        <p>Follow Us:</p>
        <div className="flex gap-6 mt-3 hover:cursor-pointer">
            <FaFacebook className="text-2xl"></FaFacebook>
            <FaInstagram className="text-2xl"></FaInstagram>
            <FaLinkedin className="text-2xl"></FaLinkedin>
            <FaYoutube className="text-2xl"></FaYoutube>
        </div>
        <p className="mt-[45px]">@docplus 2024</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
