import "./App.css";
import { useEffect, useState } from "react";
import icon from "../newsIMG.png";
import { HfInference } from "@huggingface/inference";

function App() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");

  const hf = new HfInference(process.env.REACT_APP_HF_KEY);

  const fetchTranslation = async (text) => {
    const res = await hf.textGeneration({
      model: "psyche/gpt2-translation",
      inputs: [text],
    });
    return res;
  };

  useEffect(() => {
    const translation = fetchTranslation("Это тест перевода gpt2");
    console.log(translation);
  }, []);

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
        <p>Here is your response.</p>
      </div>
    </div>
  );
}

export default App;
