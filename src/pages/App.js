import "./App.css";
import { useEffect, useState, useCallback } from "react";
// import icon from "../newsIMG.png";
import { article } from "../dummyData";
import { HfInference } from "@huggingface/inference";

function App() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");

  const fetchTranslation = useCallback(
    async (text) => {
      try {
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
        console.log(err.message);
      }
    },
    [summary]
  );

  useEffect(() => {
    fetchTranslation(article);
  }, [fetchTranslation]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <input className="submitter" type="submit" value="Submit"></input>
        </form>
      </div>
      <div className="feedback">
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default App;
