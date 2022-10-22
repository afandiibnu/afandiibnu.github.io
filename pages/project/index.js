import DesktopLayout from "../../components/Layout/DesktopLayout/DesktopLayout";

const Project = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-4xl font-semibold text-dark text-center">
        Sorry, This content is under construction 😥
      </p>
    </div>
  );
};

Project.getLayout = function (page) {
  return <DesktopLayout navbarTheme={"dark"}>{page}</DesktopLayout>;
};

export default Project;
