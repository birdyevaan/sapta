import React from "react";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const ButtonMailto = ({ mailto, label }) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <footer className="bg-gray-200/30 text-black py-10 px-5 lg:px-20 font-sans">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-10">
  {/* Contact Section */}
  <div className="flex flex-col ">
    <h3 className="text-xl lg:text-2xl font-semibold mb-4">Contact Us</h3>
    <div className="flex items-center my-2">
      <IoCallOutline className="h-5 w-5 lg:h-6 lg:w-6 mr-3" />
      <a href="tel:+91 9632410101" className="font-light lg:text-lg">
        +91 9632410101
      </a>
    </div>
    <div className="flex items-center my-2">
      <MdOutlineEmail className="h-5 w-5 lg:h-6 lg:w-6 mr-3" />
      <a href="mailto:saptacommunications@gmail.com" className="font-light lg:text-lg">
      saptacommunications@gmail.com
      </a>
    </div>
    <div className="flex items-center my-2">
      <IoLocationOutline className="h-5 w-5 lg:h-6 lg:w-6 mr-3" />
      <p className="font-light lg:text-lg">7094, Prestige Jade Pavillion</p>
    </div>
  </div>

  {/* Social Media Section */}
  <div className="flex flex-col lg:items-center">
    <h3 className="text-xl lg:text-2xl font-semibold mb-4">Reach Us</h3>
    <div className="flex flex-col space-y-2">
      <a
        href="https://wa.me/+9632410101?text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center "
      >
        <FaWhatsapp className="h-5 w-5 lg:h-6 lg:w-6 text-green-500 mr-3 lg:ml-1" />
        <span className="font-light lg:text-lg">WhatsApp</span>
      </a>
      <a
        href="https://www.linkedin.com/in/al-ahsan-facilities-b83876305/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center  "
      >
        <FaLinkedinIn className="h-5 w-5 lg:h-6 lg:w-6 text-blue-500 mr-3 lg:ml-1" />
        <span className="font-light lg:text-lg">LinkedIn</span>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61558650190323&mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center "
      >
        <FaFacebookF className="h-5 w-5 lg:h-6 lg:w-6 text-blue-800 mr-3 lg:ml-1" />
        <span className="font-light lg:text-lg">Facebook</span>
      </a>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
