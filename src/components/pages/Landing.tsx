import { useCallback, useState, useEffect } from "react";
import ExtractBox from "../ExtractBox";
import DetailsLink from "../DetailsLink";

import {
  QuestionType,
  getPrevExtractions,
  saveExtractions,
} from "../../services/questions";
import { Questions } from "../../types/collections";

const Landing = () => {
  const [extractions, setExtractions] = useState<Questions[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    try {
      const { data, error } = await getPrevExtractions();
      if (error) throw error;
      setExtractions(data ?? []);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching questions:", error);
      setLoading(false);
    }
  }

  const saveQuestions = useCallback(
    async (questions: string[]) => {
      try {
        // check if question already asked
        const newExtractions: QuestionType[] = await Promise.all(
          questions.map(async (question) => {
            let count = extractions.reduce((acc, extract) => {
              const matchingQuestion = extract.questions.filter((q) => {
                const { question: que } = q as QuestionType;
                return que === question;
              });
              return acc + matchingQuestion.length;
            }, 0);
            return { question, count: count + 1 };
          })
        );
        const { data, error } = await saveExtractions(newExtractions);

        if (error) throw error;
        setExtractions((prev) => [...data, ...prev]);
      } catch (error) {
        console.log("Error saving questions:", error);
      }
    },
    [extractions]
  );

  return (
    <div className="flex flex-col w-full md:max-w-2xl m-auto text-gray-700">
      <ExtractBox questionsFound={saveQuestions} />
      <div className="flex flex-col container p-10">
        <div className="flex justify-center mb-5">
          <h4 className="text-2xl">Previous Extractions</h4>
        </div>
        <div className="flex flex-col justify-start space-y-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            extractions?.map(({ id, inserted_at }) => (
              <DetailsLink key={id} id={id} date={inserted_at} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
