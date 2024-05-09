import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="md:flex mx-auto w-5/6 md:items-center md:justify-between md:h-5/6 "
      >
        {/* Main header */}
        <div className="z-10 mt-32 md:w-[40%]">
          {/* Heading */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            // so the amount is how many percent of the animation do i want to see before the animation triggers
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-28 before:z-[-1] before:-top-20 md:before:content-evolvetext before:scale-90">
                <img src={HomePageText} alt="" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Unrivaled Gym. Unparalled Training Fitness Classes. World Class
              Studios to ge tht Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 md:justify-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>

            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* image */}
        <div className="flex justify-center md:z-10">
          <img
            src={HomePageGraphic}
            alt="home page graphics"
            className=" md:scale-75"
          />
        </div>
      </motion.div>

      {/* Sponsors */}

      {isAboveMediumScreens && (
        <div className="h-[120px] w-full bg-primary-100 py-8">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img
                src={SponsorRedBull}
                alt="redbull-sponsor"
                className="scale-75"
              />
              <img
                src={SponsorForbes}
                alt="forbes-sponsor"
                className="scale-75"
              />
              <img
                src={SponsorFortune}
                alt="fortune-sponsor"
                className="scale-75"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Home;
