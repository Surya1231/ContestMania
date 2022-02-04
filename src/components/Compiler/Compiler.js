import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './Compiler.css';

const Compiler = () => {
  // Functionality States
  const [Loading, setLoading] = useState(true);
  const [compiling, setCompiling] = useState(false);

  // Data States
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [outputText, setOutputText] = useState('');
  const [languageId, setLanguageId] = useState('');
  const [userInput, setUserInput] = useState('');

  // Fetching Data locally
  useEffect(() => {
    setInput(localStorage.getItem('CM_input_data') ? localStorage.getItem('CM_input_data') : '');
    setOutput(localStorage.getItem('CM_output_data') ? localStorage.getItem('CM_output_data') : '');
    setLanguageId(localStorage.getItem('CM_lang_data') ? localStorage.getItem('CM_lang_data') : '');
    setUserInput(localStorage.getItem('CM_user_data') ? localStorage.getItem('CM_user_data') : '');
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // Post Request
  const post = {
    method: 'POST',
    url: 'https://judge0-ce.p.rapidapi.com/submissions',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
      'x-rapidapi-key': '8336def730mshb6c05e3b5010f28p1b3a16jsn2728043dd193',
    },
    data: {
      language_id: Number(languageId),
      source_code: input,
      stdin: userInput,
    },
  };

  const get = (token) => {
    return {
      method: 'GET',
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
        'x-rapidapi-key': '8336def730mshb6c05e3b5010f28p1b3a16jsn2728043dd193',
      },
    };
  };

  const Submit = () => {
    setCompiling(true);
    setOutputText('Creating Submission...\n');
    console.log(input);
    console.log(post);
    axios
      .request(post)
      .then((response) => {
        console.log(response.data);
        setOutputText('Submission Created...\nChecking Submission...');
        axios
          .request(get(response.data.token))
          .then((res) => {
            console.log(res.data);
            setCompiling(false);
            setOutputText(`${res.data.status.description} (time-taken: ${res.data.time * 1000}ms)`);
            setOutput(res.data.stdout);
          })
          .catch((error) => {
            setOutputText('some Error occured...\n');
            console.log(error.response.data);
            setCompiling(false);
          });
      })
      .catch((error) => {
        console.error(error.response.data);
        setCompiling(false);
      });
  };

  return (
    <div className="container-fluid">
      {Loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary mt-5" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <br />
          <span className="text-muted display-4">Setting Up Compiler</span>
        </div>
      ) : (
        <>
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-9">
                <label htmlFor="solution ">
                  <span className="badge badge-info heading mt-2 ">
                    <i className="fas fa-code fa-fw fa-lg" />
                    Code Here
                  </span>
                </label>
                <textarea
                  required
                  name="solution"
                  id="source"
                  onChange={(e) => {
                    setInput(e.target.value);
                    localStorage.setItem('CM_input_data', e.target.value);
                  }}
                  className="source form-control"
                  value={input}
                />
                <div className="mt-2">
                  <span className="badge badge-primary heading my-2 ">
                    <i className="fas fa-user fa-fw fa-md" />
                    User Input
                  </span>
                  <br />
                  <textarea
                    id="input"
                    value={userInput}
                    onChange={(e) => {
                      localStorage.setItem('CM_user_data', e.target.value);
                      setUserInput(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-3">
                <div>
                  <button type="submit" className="btn btn-danger mr-2 mb-2" onClick={Submit}>
                    {compiling ? (
                      <div className="spinner-border spinner-border-sm text-light mr-2" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <i className="fas fa-cog fa-fw mr-2" />
                    )}
                    Compiler & Run
                  </button>
                  <br />
                  {outputText?.length > 0 ? (
                    <span className="muted-text" style={{ fontSize: '12px', color: 'green', fontWeight: 'bolder' }}>
                      {outputText}
                    </span>
                  ) : null}
                  <br />
                  <label htmlFor="tags" className="mr-1">
                    <b className="heading">Language:</b>
                  </label>
                  <select
                    value={languageId}
                    onChange={(e) => {
                      setLanguageId(e.target.value);
                      localStorage.setItem('CM_lang_data', e.target.value);
                    }}
                    id="tags"
                    className="form-control form-inline mb-2 language"
                  >
                    <option value="54">C++</option>
                    <option value="50">C</option>
                    <option value="62">Java</option>
                    <option value="71">Python</option>
                  </select>
                </div>
                <div>
                  <span className="badge badge-info heading my-2 ">
                    <i className="fas fa-exclamation fa-fw fa-md" />
                    Output
                  </span>
                  <textarea id="output" className="form-control" value={output} readOnly />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Compiler;
