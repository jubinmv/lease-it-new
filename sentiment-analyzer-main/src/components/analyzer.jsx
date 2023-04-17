import { useRef, useState } from "react";
import Sentiment from "sentiment";
import Chart from "./chart";

function Analyzer() {
  const sentiment = useRef();
  const [result, setResult] = useState(null);
  const sentimood = new Sentiment();

  function getAnalyze() {
    if(sentiment.current.value !== ""){
      setResult(sentimood.analyze(sentiment.current.value));
    } 
  }

  function clear(){
    sentiment.current.value="";
    setResult(null);
  }

  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Paste sentiment here"
              ref={sentiment}
              style={{ height: "300px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2"> Please enter your feedback Here</label>
          </div>
          <button className="btn mt-3" onClick={clear}>Clear text</button>

          <button
            className="btn btn-primary mt-5 float-end"
            onClick={getAnalyze}
          >
Submit          </button>
        </div>
      </div>
      {result == null? null: <Chart data={result} />}
    </>
  );
}

export default Analyzer;
