const Chapter = ({ number }) => {
  return (
    <div className="flex gap-x-2">
      <img src="/arrowDown.svg" className="w-3 md:w-4" />
      <p className="text-sm md:text-lg lg:text-xl font-semibold text-secondary">
        Chapter {number}
      </p>
    </div>
  );
};

export default Chapter;
