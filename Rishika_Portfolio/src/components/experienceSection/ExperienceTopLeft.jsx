import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Year" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="2" text="Websites" />
      </div>
      <p className="text-center">
        Developed multiple dynamic and user-friendly web applications. Achieved
        2nd place in the project competition at Masai School
      </p>
      <ExperienceInfo number="1st" text="Runner-Up" />
    </div>
  );
};

export default ExperienceTopLeft;
