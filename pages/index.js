import DesktopLayout from "../components/Layout/DefaultLayout";
import Chapter from "../components/Chapter";
import Title from "../components/Title";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

const projects = [
  { name: "Aero Auction", href: "/" },
  {
    name: "Garuda Eleven Game",
    href: "https://nft-landing.k3s.bangun-kreatif.com/",
  },
  {
    name: "Lorem Ipsum",
    href: "/",
  },
  {
    name: "Dolor Sit Amet",
    href: "/",
  },
];

const icon = [
  { name: "nextjs", icon: "/next.svg" },
  { name: "react", icon: "/react.svg" },
  { name: "nodejs", icon: "/node.svg" },
  { name: "tailwind", icon: "/tailwind.svg" },
  { name: "bootstrap", icon: "/bootstrap.svg" },
];

const useParallax = ({ value, distance }) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export default function Home() {
  return (
    <div className="pb-20">
      <div className="w-full bg-[url('/Hero.svg')] h-60 md:h-96 bg-cover bg-center">
        {/* <img src="/Hero.svg" className="w-full" /> */}
      </div>
      <div className="px-8 md:px-20 xl:px-60 divide-y-2 divide-dashed">
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ x: "-4vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <Chapter number={"One"} />
            <Title
              text={"Get Closer"}
              size={"text-5xl"}
              className={"mt-2 md:text-6xl lg:text-8xl"}
            />
          </motion.div>
          <motion.div
            initial={{ x: "10vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="flex mt-10 gap-x-6 lg:gap-x-10 xl:gap-x-20 flex-wrap"
          >
            <div className="flex-initial sm:flex-1">
              <img src={"/photo.svg"} className={"w-full"} />
            </div>
            <div className="flex-initial lg:flex-1 mt-4 lg:mt-0">
              <p className="text-base lg:text-lg text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                accumsan et ut dolor proin. Curabitur facilisis justo, molestie
                neque ultrices fames. Faucibus mauris lobortis ultrices
                pellentesque.
                <br /> <br />
                Pulvinar cum blandit quis aliquam. Adipiscing euismod
                ullamcorper nunc, faucibus. A, blandit dictumst massa at
                ultrices sollicitudin id. Cursus diam egestas nunc gravida
                sollicitudin lectus volutpat.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="mt-20 pt-20">
          <Chapter number={"Two"} />
          <div className="flex gap-x-12 xl:gap-x-40 flex-wrap gap-y-8">
            <div className="flex-initial sm:flex-1">
              <Title
                text={"The Projects I Work On."}
                size={"text-5xl"}
                className={"mt-2 md:text-6xl lg:text-8xl"}
              />
              <p className="mt-4 text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                sit risus vehicula hac.
              </p>
            </div>
            <div className="flex-1 divide-y-[1px]">
              {projects.map((e, index) => {
                return (
                  <div
                    className="flex gap-x-4 items-center mb-6 pt-6"
                    key={index}
                  >
                    <img src="/arrowDown.svg" className="-rotate-90" />
                    <Link href={e.href}>
                      <p className="hover:underline text-xl md:text-3xl font-semibold cursor-pointer text-dark">
                        {e.name}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-20 pt-20">
          <Chapter number={"Three"} />
          <Title
            text={"Ma Skillz."}
            size={"text-5xl"}
            className={"mt-2 md:text-6xl lg:text-8xl"}
          />
          <div className={"flex flex-wrap gap-y-10 justify-between mt-10"}>
            {icon.map((e, index) => {
              return (
                <img
                  src={e.icon}
                  key={index}
                  className={"w-auto h-10 md:h-16"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function (page) {
  return <DesktopLayout navbarTheme={"dark"}>{page}</DesktopLayout>;
};
