import "./App.css";
import { useEffect, useState, useCallback } from "react";
// import icon from "../newsIMG.png";
// import { article } from "../dummyData";
// import { parse } from "../utils.js/parser";
import { HfInference } from "@huggingface/inference";

function App() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");

  const fetchSummary = useCallback(
    async (text) => {
      try {
        console.log("Text: ", text);
        const hf = await new HfInference(process.env.REACT_APP_HF_KEY, {
          retry_on_error: true,
          wait_for_model: true,
        });
        const res = await hf.summarization({
          model: "facebook/bart-large-cnn",
          inputs: text,
          parameters: {
            max_length: 100,
          },
        });
        setSummary(res.summary_text);
        console.log("Summary: ", summary);
      } catch (err) {
        console.log(err);
      }
    },
    [summary]
  );

  useEffect(() => {
    fetchSummary(input);
  }, [fetchSummary]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSummary(input);
  };

  return (
    <body>
    <div className="App">
      <div className="Title">
        <a className="px-2" href="/">
          Rosetta News
        </a>
      </div>
      <div className="my-20 min-h-fit">
        <form
          className="flex flex-col mx-auto max-w-xl"
          action="submit"
          onSubmit={handleSubmit}
        >
          <textarea
            className="searcher min-h-[20rem]"
            placeholder="Enter Article Text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <input className="submitter" type="submit" value="Submit"></input>
        </form>
      </div>
      <div className="textArea h-1000 mt-3">
        <div className="feedback self-center border-black border-2 border-double">
          <p className="p-2">{summary}</p>
        </div>
      </div>
    </div>
    </body>
  );
}

export default App;
