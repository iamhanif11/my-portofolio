import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

function FooterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:mhirfan173@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact from Portofolio",
    )}&body=${encodeURIComponent(
      `Name:${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink
  };
  return (
    <footer className="relative py-24 px-6 lg:px-24 overflow-hidden bg-linear-to-b from-[#020813] via-[#11284c]/30 to-[#020813] border-t border-slate-800/60 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          <div className="lg:col-span-5 space-y-6 h-full">
            <div>
              <p className="text-lg uppercase tracking-wide font-semibold text-primary-blue">
                Contact Me
              </p>
              <h2 className="text-4xl mt-2 font-bold tracking-tight">
                Let's Connect
              </h2>
              <p>
                I am open to discuss opportunities, Web Developer Project or
                Collaborative engineering challanges. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {/* email */}
              <a
                href="mailto:mhirfan173@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-light/20 border border-slate-800/80 hover:border-primary-hover hover:text-primary-hover transition-all duration-500 group"
              >
                <div className="p-3 rounded-lg bg-slate-900/60 group-hover:text-primary-hover transition-colors">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm font-semibold">mhirfan173@gmail.com</p>
                </div>
              </a>

              {/* wa */}
              <a
                href="https://wa.me/6282285084125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-navy-light/20 border border-slate-800/80 hover:border-primary-hover hover:text-primary-hover transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-slate-900/60 group-hover:text-primary-hover transition-colors">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    No.HP / WhatsApp
                  </p>
                  <p className="text-sm font-semibold">+62 822-8508-4125</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-light/20 border border-slate-800/60 text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/60 group-hover:text-primary-hover transition-colors">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-semibold">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-full">
            <form
              onSubmit={handleSubmit}
              className="bg-navy-light/30 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 lg:p-8 space-y-4 shadow-2xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-navy-light/80 border border-slate-800/80 rounded-xl placeholder-slate-500 focus:outline-hidden focus:border-primary-hover focus:ring-1 focus:ring-primary-hover text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-navy-light/80 border border-slate-800/80 rounded-xl placeholder-slate-500 focus:outline-hidden focus:border-primary-hover focus:ring-1 focus:ring-primary-hover text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-navy-light/80 border border-slate-800/80 rounded-xl placeholder-slate-500 focus:outline-hidden focus:border-primary-hover focus:ring-1 focus:ring-primary-hover text-sm transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-navy-light/80 border border-slate-800/80 rounded-xl placeholder-slate-500 focus:outline-hidden focus:border-primary-hover focus:ring-1 focus:ring-primary-hover text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 p-4 font-semibold rounded-xl placeholder-slate-500 focus:outline-hidden bg-primary-blue hover:bg-primary-hover shadow-lg text-sm cursor-pointer"
              >
                Send Message
                <FaPaperPlane size={16} className=" ml-1"/>
              </button>
            </form>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-slate-900/60 text-center">
            <p className="text-xs text-slate-600">
                © {new Date().getFullYear()} M. Hanif Irfan. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
