import { ChangeEvent, useState, useCallback } from "react";

type ExtractBoxProps = {
  questionsFound: Function;
};

const QUESTION_REGEX = /[^\s.][^.?!]*(\?)/g;
const ExtractBox = ({ questionsFound }: ExtractBoxProps) => {
  const [searchText, setSearchText] = useState("");

  const handleExtract = useCallback(() => {
    if (searchText.length > 1) {
      const matches = searchText.match(QUESTION_REGEX);
      setSearchText("");
      // call parent to present questions
      if (matches) {
        questionsFound(matches);
      }
    }
  }, [searchText, questionsFound]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleExtract();
  };

  return (
    <form
      className="flex flex-col container p-5 pt-10 sticky top-0 bg-white"
      onSubmit={handleSubmit}
    >
      <textarea
        onChange={handleChange}
        value={searchText}
        className="flex rounded outline outline-1 outline-gray-200 p-2 caret-cyan-500 focus:outline-cyan-500"
        rows={5}
        placeholder="Enter content to extract questions..."
      />
      <div className="grid justify-items-center mt-8">
        <button
          type="submit"
          className="rounded outline w-40 bg-cyan-500  border-none text-white p-2"
        >
          Extract!
        </button>
      </div>
    </form>
  );
};

export default ExtractBox;
