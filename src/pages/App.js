import "./App.css";
import { useEffect, useState, useCallback } from "react";
// import icon from "../newsIMG.png";
// import { article } from "../dummyData";
import { parse } from "../utils.js/parser";
import { HfInference } from "@huggingface/inference";

function App() {
  const [inputURL, setUrl] = useState(
    "https://www.washingtonpost.com/weather/2023/03/26/mississippi-tornadoes-alabama-storm-damage/"
  );
  const [summary, setSummary] = useState("");

  const fetchTranslation = useCallback(
    async (url) => {
      try {
        const text = await parse(url);
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
    fetchTranslation(inputURL);
  }, [fetchTranslation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTranslation(inputURL);
  };

  return (
    <div className="App">
      <div className="Title">
        <a className="px-2" href="/">
          Rosetta News
        </a>
      </div>
      <div className="searchBar">
        <form action="submit" onSubmit={handleSubmit}>
          <input
            className="searcher"
            type="text"
            placeholder="Enter URL"
            value={inputURL}
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <input className="submitter" type="submit" value="Submit"></input>
        </form>
      </div>
      <div className="textArea flex">
      <div>
        </div
      <div className="feedback flex-fr justify-center w-24 border-black border-2 border-double">
        <p>{summary}</p>
      </div>
      </div>
    </div>
  );
}

export default App;
