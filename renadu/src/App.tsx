import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaBars } from "react-icons/fa";

const products = [
  {
    name: "Renadu Premium Chilli Powder",
    // price: "₹65",
    image: "../assets/images/chilli-powder.png",
  },
  {
    name: "Renadu Premium Coriander Powder",
    // price: "₹33",
    image: "../assets/images/coriander-powder.png",
  },
  {
    name: "Renadu Premium Spices",
    // price: "₹55",
    image: "../assets/images/spicies.png",
  },
  {
    name: "Renadu Premium Turmeric Powder",
    // price: "₹30",
    image: "../assets/images/turmeric-powder.png",
  },
];

const bannerImages = [
  "https://5.imimg.com/data5/AN/BX/MY-29089558/organic-seasoning-spices-to-kuwait.jpg",
  "https://as1.ftcdn.net/jpg/02/65/84/38/1000_F_265843841_1oDPwnEg8ICihrawj8ApEyPcCnbWMuTE.jpg",
  "https://static.vecteezy.com/system/resources/previews/003/139/051/non_2x/a-set-of-spices-and-herbs-indian-cuisine-photo.JPG",
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <main className="min-h-screen bg-white font-Figtree flex flex-col justify-between perspective-[1500px] animate-fadeIn">
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 w-full px-[2rem] py-[1rem] bg-gradient-to-r from-[#b3c2c2] to-[#b95151] shadow-md transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } relative`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[1rem]">
          <img
            src="../assets/images/renadu-logo.png"
            alt="Renadu Spices Logo"
            className="h-[2.5rem] object-contain"
          />
          <h1 className="text-[1.75rem] font-extrabold text-white tracking-wide transform hover:rotate-y-12 transition-transform duration-500">
            RENADU SPICES
          </h1>
          </div>
          <ul className="hidden sm:flex gap-[2rem] text-white text-[1rem] font-medium">
            <li className="cursor-pointer hover:text-black transition duration-200 transform hover:rotate-y-12">
              Home
            </li>
            <li className="cursor-pointer hover:text-black transition duration-200 transform hover:rotate-y-12">
              Products
            </li>
            <li className="cursor-pointer hover:text-black transition duration-200 transform hover:rotate-y-12">
              About
            </li>
            <li className="cursor-pointer hover:text-black transition duration-200 transform hover:rotate-y-12">
              Contact
            </li>
          </ul>
          <button
            className="block sm:hidden text-white text-[1.5rem]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>
        {menuOpen && (
          <ul className="absolute top-[100%] left-0 w-full bg-gradient-to-r from-[#b3c2c2] to-[#b95151] p-[1rem] flex flex-col gap-[0.75rem] text-white text-[1rem] font-medium animate-slideDown">
            <li className="cursor-pointer hover:text-black transition duration-200">
              Home
            </li>
            <li className="cursor-pointer hover:text-black transition duration-200">
              Products
            </li>
            <li className="cursor-pointer hover:text-black transition duration-200">
              About
            </li>
            <li className="cursor-pointer hover:text-black transition duration-200">
              Contact
            </li>
          </ul>
        )}
      </nav>

      {/* Banner */}
      <div className="w-full h-[17rem] md:h-[25rem] sm:max:h-[15rem]">
        <img
          src={bannerImages[currentBanner]}
          alt={`Banner ${currentBanner + 1}`}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>

      {/* Intro & Info */}
      <div className="px-[1rem] py-[2rem] sm:max:px-[0.5rem] text-center">
        <h2 className="text-[2rem] font-bold text-[#2e2e2e] mb-[1rem] animate-fadeUp sm:max:text-[1.5rem]">
          Welcome to Renadu Spices
        </h2>
        <p className="text-[1rem] text-[#444] max-w-[48rem] mx-auto sm:max:text-[0.875rem]">
          At Renadu, we bring the tradition of Indian kitchens to your table.
          Our spices are sourced directly from the finest farms and processed
          with care to preserve purity, aroma, and health benefits. Taste the
          legacy of flavor that generations have trusted.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#FFF] px-[1rem] py-[2rem] sm:max:px-[0.5rem]">
        <h3 className="text-[1.5rem] font-semibold text-center text-[#2e2e2e] mb-[1rem] sm:max:text-[1.25rem]">
          Why Choose Renadu?
        </h3>
        <ul className="max-w-[48rem] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[1rem] text-[1rem] text-[#444] sm:max:text-[0.875rem]">
          <li className="bg-white p-[1rem] rounded-xl shadow-sm hover:shadow-md transition">
            ✅ 100% Pure & Natural Ingredients
          </li>
          <li className="bg-white p-[1rem] rounded-xl shadow-sm hover:shadow-md transition">
            ✅ No Added Colors or Preservatives
          </li>
          <li className="bg-white p-[1rem] rounded-xl shadow-sm hover:shadow-md transition">
            ✅ Traditional Stone-Grinding Methods
          </li>
          <li className="bg-white p-[1rem] rounded-xl shadow-sm hover:shadow-md transition">
            ✅ Hygienically Processed & Packed
          </li>
        </ul>
      </div>

      {/* Best Sellers */}
      <div className="px-[1rem] py-[2rem] sm:max:px-[0.5rem]">
        <h2 className="text-[2rem] font-bold text-center text-[#2e2e2e] mb-[2rem] animate-flipUp sm:max:text-[1.5rem]">
          Products
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[2rem] sm:max:gap-[1rem]">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md flex px-4 py-4 flex-col overflow-hidden transform transition duration-500 hover:rotate-y-6 hover:scale-[1.05] hover:shadow-2xl bg-white sm:max:px-2 sm:max:py-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover transition duration-300 hover:opacity-90"
              />
              <div className="p-[1rem] sm:max:p-[0.5rem]">
                <h3 className="text-[1.25rem] font-semibold text-[#1f1f1f] mb-[0.5rem] sm:max:text-[1rem]">
                  {product.name}
                </h3>
                <p className="text-[1rem] text-[#444] mb-[1rem] sm:max:text-[0.875rem]">
                  {/* {product.price ?? 0} */}
                </p>
                
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Customer Reviews */}
      <div className="px-[1rem] py-[2rem] bg-[#FFF] sm:max:px-[0.5rem]">
        <h2 className="text-[2rem] font-bold text-center text-[#2e2e2e] mb-[2rem] sm:max:text-[1.5rem]">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.5rem] max-w-[80rem] mx-auto">
          {[
            {
              name: "Ravi Kumar",
              review:
                "Renadu spices bring back memories of my grandmother’s kitchen. The aroma and flavor are unmatched. Highly recommended!",
            },
            {
              name: "Meena Joshi",
              review:
                "Absolutely love the purity and packaging. You can feel the freshness the moment you open it. Great job Renadu!",
            },
            {
              name: "Suresh Naik",
              review:
                "Using Renadu turmeric powder in our daily cooking has truly elevated the taste. Authentic and trustworthy!",
            },
            {
              name: "Divya Reddy",
              review:
                "Finally found spices that I can trust for my kids too. No colors, no chemicals, just pure goodness.",
            },
            {
              name: "Amit Sharma",
              review:
                "I’m a chef by profession and Renadu has become my go-to for consistent quality in Indian dishes.",
            },
            {
              name: "Lakshmi Iyer",
              review:
                "Loved the coriander powder! It’s so flavorful, and I even got compliments on my food. Keep it up!",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-[1.25rem] transition hover:shadow-xl transform hover:scale-[1.03] animate-fadeUp"
            >
              <p className="text-[1rem] text-[#444] mb-[1rem]">
                "{review.review}"
              </p>
              <p className="text-[0.95rem] font-semibold text-[#2e7d32]">
                - {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Details */}
<div className="px-[1rem] py-[2rem] sm:max:px-[0.5rem] bg-[#FFF]">
  <h2 className="text-[2rem] font-bold text-center text-[#2e2e2e] mb-[2rem] sm:max:text-[1.5rem]">
    Contact Us
  </h2>
  <div className=" flex justify-center mx-auto   sm:grid-cols-2 gap-[2rem] sm:max:grid-cols-1">
    <div className="bg-white p-[1.5rem] rounded-xl shadow-md text-[#444]">
      <h3 className="text-[1.5rem] font-semibold text-[#2e2e2e] mb-[1rem]">Our Office</h3>
      <p className="mb-[1rem]">Mahendramani Enterprises</p>
      <p className="mb-[1rem]">1-1-473/B/ New Bakaram Street No. 10, Gandhi Nagar,</p>
      <p className="mb-[1rem]">Musheerabad Gandhi Nagar, Hyderabad - 500080, Telangana, India</p>
      <p className="mb-[1rem]">Phone: +91 9014735835</p>
      
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="bg-[#2f2f2f] text-white px-[2rem] py-[2.5rem] flex justify-start items-start flex-col text-center text-[0.875rem] animate-slideUp sm:max:px-[1rem] sm:max:py-[1.5rem]">
        <div className="mb-[1rem]">
          <h4 className="text-[1.125rem] font-semibold mb-[0.5rem] sm:max:text-[1rem]">
            Follow Us
          </h4>
          <div className="flex justify-center gap-[1rem]">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition transform hover:scale-125"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#ff914d] transition transform hover:scale-125"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition transform hover:scale-125"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <p className="mb-[0.25rem]">
          &copy; {new Date().getFullYear()} Renadu Foods. All rights reserved.
        </p>
        <p className="mb-[0.25rem] text-start">
          1-1-473/B/ New Bakaram Street No. 10, Gandhi Nagar,
          <br />
          Musheerabad Gandhi Nagar, Hyderabad - 500080, Telangana, India
        </p>
        <p>Contact: +91 9014735835</p>
      </footer>
    </main>
  );
}
