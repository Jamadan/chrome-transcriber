import React, { useState } from 'react';
// eslint-disable-next-line
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

export default () => {
  const [recorder, setRecorder] = useState({ isRecording: false });
  const [transcripts, setTranscripts] = useState([]);

  const newRecognition = () => {
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-GB';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onend = () => {
      // console.log('onend');
    };

    recognition.onstart = () => {
      // console.log('onstart');
      setRecorder({ isRecording: true });
    };

    recognition.onresult = event => {
        const last = event.results.length - 1;
        const result = event.results[last][0];
        // console.log([...transcripts], result);
        setTranscripts([...transcripts, result.transcript]);
    
        console.log('Confidence: ' + result.confidence, result.transcript);
      };
    
      recognition.onnomatch = event => {
        // console.log("I didn't recognise that...");
      };
    
      recognition.onerror = event => {
        // console.log('Error occurred in recognition: ' + event.error);
      };

      return recognition;
  };

  let recognition = newRecognition();

  const startRecording = () => {
    // console.log('start-clicked');
    recognition.start();
  };

  const stopRecording = () => {
    // console.log('stop-clicked');
    recognition.stop();
    recognition = newRecognition();
    setRecorder({ isRecording: false });
  };

  return (
    <div height="200px">
      <hr />
      <textarea
        className="text-area"
        rows="30"
        value={transcripts.join(`
`)}
        onChange={e =>
          setTranscripts(
            e.target.value.split(`
`)
          )
        }
      ></textarea>
      <div className="App-intro">
        {recorder.isRecording && (
          <div className="stop" onClick={e => stopRecording()}>
            STOP
          </div>
        )}
        {!recorder.isRecording && (
          <div onClick={e => startRecording()}>START</div>
        )}
        <br />
        <br />
      </div>
      <hr />
    </div>
  );
};
