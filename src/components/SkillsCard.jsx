const SkillsCard = ({ img, name }) => {
  return (
    <div className="mx-3">
      <div className="w-20 h-20">
        <img src={img} alt="logo" />
      </div>
      <p className="rounded-3xl p-1 my-4 text-center text-white bg-[#0b1120] shadow-lg">
        {name}
      </p>
    </div>
  );
};

export default SkillsCard;