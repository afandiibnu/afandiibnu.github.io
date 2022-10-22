import DesktopLayout from "../../components/Layout/DesktopLayout/DesktopLayout";

const Blog = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-5xl font-semibold text-dark">
        Sorry, This content is under construction 😥
      </p>
    </div>
  );
};

Blog.getLayout = function (page) {
  return <DesktopLayout navbarTheme={"dark"}>{page}</DesktopLayout>;
};

export default Blog;
