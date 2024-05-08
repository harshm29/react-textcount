import { useState } from "react";

import "./App.css";

function App() {
  const [limit, setLimit] = useState(150);
  const [isEnable, setIsenable] = useState(false);
  const [values, setValues] = useState("");
  const [count, setCount] = useState(0);
  const [nagtive, setNagtive] = useState(0);
  const [isdone, setIsdone] = useState(false);
  const [Link, setLink] = useState("");

  const [error, setError] = useState("");

  const OnchnageText = (e) => {
    setIsdone(false);
    const str = e.target.value;
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (!format.test(str)) {
      setValues(str);
      if (str.length <= limit) {
        setError("");
        setIsenable(false);
        setNagtive(0);
        if (!isNaN(str.length)) {
          setCount(str.length);
        }
      } else {
        setNagtive(Number(limit) - Number(str.length));
        setIsenable(true);
        setError(
          `You have added ${str.length} character in value so please remove extra character we allow only ${limit} character`
        );
      }
    } else {
      setLink(`https://www.google.com/search?q=${str.slice(-1)}`);
      setIsenable(true);
      setError(`We don't allow symbols in value `);
    }
  };

  const onsubmit = () => {
    console.log(values);
    setIsdone(true);
  };

  return (
    <>
      <div>
        <h1>please change the limit ?</h1>
        <input
          type="number"
          placeholder="limit"
          onChange={(e) => setLimit(e.target.value)}
          value={limit}
          min={15}
        />
      </div>

      <h1>please add the values ?</h1>

      <div className="myinput">
        <div className={`right_class ${nagtive < 0 ? "read-the-docs" : ""}`}>
          character count is {nagtive < 0 ? nagtive : count} /{" "}
          {limit ? limit : 0}
        </div>
        <textarea
          className="text-value"
          name="text"
          value={values}
          onChange={(e) => OnchnageText(e)}
          cols={10}
          rows={10}
        ></textarea>

        {error ? <p className="read-the-docs">{error}</p> : ""}
      </div>
      {/* <div className="card">character count is {count}</div> */}

      <div className="card">
        <button onClick={onsubmit} disabled={isEnable}>
          submit
        </button>
      </div>
      {isdone && <p className="done-read-the-docs">{values}</p>}
      {Link && (
        <a href={Link} target="_blank">
          please check the link
        </a>
      )}
    </>
  );
}

export default App;
