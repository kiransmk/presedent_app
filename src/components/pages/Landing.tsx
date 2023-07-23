import React, { useState, useEffect } from "react";
import supabase from "../../config/supabase_client";
import { Questions } from "../../types/collections";
import ExtractBox from "../ExtractBox";
import DetailsLink from "../DetailsLink";

const Landing: React.FC = () => {
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    try {
      const { data, error } = await supabase.from("questions").select();
      if (error) throw error;
      setQuestions(data || []);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching questions:", error);
      setLoading(false);
    }
  }

  async function saveQuestions(questions: string[]) {
    try {
      const { error } = await supabase.from("questions").insert({ questions });
      if (error) throw error;
      getQuestions();
    } catch (error) {
      console.log("Error saving questions:", error);
    }
  }

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
            questions.map(({ id, inserted_at }) => (
              <DetailsLink key={id} id={id} date={inserted_at} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
