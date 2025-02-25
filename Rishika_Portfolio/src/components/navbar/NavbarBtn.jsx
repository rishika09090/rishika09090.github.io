import { BsDownload } from "react-icons/bs";

const NavbarBtn = () => {
  const handleResumeClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const resumeUrl = `${import.meta.env.BASE_URL}Rishika_Kumari_Resume.pdf`; // Your resume URL
    window.open(resumeUrl, "_blank"); // Open in a new tab
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Rishika_Kumari_Resume.pdf"; // Customize filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500); // Delay to allow opening before downloading
  };

  return (
    <button
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
      onClick={handleResumeClick} // Handle the click event
    >
      <span>My Resume</span> {/* Replace "Hire Me" with a new label */}
      <div className="sm:hidden md:block">
        <BsDownload />{" "}
      </div>
    </button>
  );
};

export default NavbarBtn;
