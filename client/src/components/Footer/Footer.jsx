import facebookImg from "../../assets/facebook-footer.png";
import xImg from "../../assets/twitter-footer.png";
import instagramImg from "../../assets/instagram-footer.png";

const Footer = () => {
  return (
    <>
      <section className="flex flex-col sm:flex-row justify-between gap-8 px-2 py-16 sm:py-[6.5rem] sm:px-4">
        <div>
          <p className="font-extrabold text-blue-500 mb-2">Infomart</p>
          <div className="flex gap-2 text-sm mb-3">
            <nav>
              <img
                src={facebookImg}
                alt="facebook"
                className="size-5"
                loading="lazy"
              />
            </nav>
            <nav>
              <img
                src={instagramImg}
                alt="instagram"
                className="size-5"
                loading="lazy"
              />
            </nav>
            <nav>
              <img src={xImg} alt="twitter" className="size-5" loading="lazy" />
            </nav>
          </div>
          <p className="text-[.95rem]">
            &copy; 2024 Infomart. All Rights Reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-[1.06rem] mb-5">Services</p>
            <div className="flex flex-col gap-5 text-base">
              <nav>Become an Affiliate</nav>
              <nav>Sell Courses</nav>
              <nav>Refer and Earn</nav>
            </div>
          </div>
          <div>
            <p className="font-bold text-[1.06rem] mb-5">Support</p>
            <div className="flex flex-col gap-5 text-base">
              <nav>FAQs</nav>
              <nav>Contact Us</nav>
            </div>
          </div>
          <div>
            <p className="font-bold text-[1.06rem] mb-5">Legal</p>
            <div className="flex flex-col gap-5 text-base">
              <nav>Terms & Conditions</nav>
              <nav>Privacy Policy</nav>
              <nav>Copyright Policy</nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
