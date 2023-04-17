function Analysis(props) {
  return (
    <>
      <div>
        <h5>Results:</h5>
        <p>
          <span className="fst-italic">Score:</span>&nbsp;
          {props.analysis.score}
          <br />
          <span className="fst-italic">Comparative:</span>&nbsp;
          {props.analysis.comparative}
          <br />
          <span className="fst-italic">Conclusion:</span>&nbsp;
          {props.analysis.score === 0
            ? "Neutral"
            : props.analysis.score > 0
            ? "Positive"
            : "Negative"}
        </p>
        <p>
          <span className="fst-italic">Interpretation:</span>
          <br />
          This text's sentiment score is <b>{props.analysis.score}</b> with a
          comparative of <i>{props.analysis.comparative.toFixed(3)}</i>. This
          indicates that the overall tone or sentiment of this text is{" "}
          {props.analysis.score === 0
            ? "neutral"
            : props.analysis.score > 0
            ? "positive"
            : "negative"}
          .
        </p>
      </div>
    </>
  );
}

export default Analysis;
