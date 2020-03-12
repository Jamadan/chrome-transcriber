import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.join";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import _toConsumableArray from "/Users/jamieh/jam-src/jam-chrome-transcriber (jamscript)/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "/Users/jamieh/jam-src/jam-chrome-transcriber (jamscript)/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
export default (function () {
  var _useState = useState({
    isRecording: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      recorder = _useState2[0],
      setRecorder = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      transcripts = _useState4[0],
      setTranscripts = _useState4[1];

  var newRecognition = function newRecognition() {
    var recognition = new SpeechRecognition();
    recognition.lang = 'en-GB';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onend = function () {};

    recognition.onstart = function () {
      setRecorder({
        isRecording: true
      });
    };

    recognition.onresult = function (event) {
      var last = event.results.length - 1;
      var result = event.results[last][0];
      setTranscripts([].concat(_toConsumableArray(transcripts), [result.transcript]));
      console.log('Confidence: ' + result.confidence, result.transcript);
    };

    recognition.onnomatch = function (event) {};

    recognition.onerror = function (event) {};

    return recognition;
  };

  var recognition = newRecognition();

  var startRecording = function startRecording() {
    recognition.start();
  };

  var stopRecording = function stopRecording() {
    recognition.stop();
    recognition = newRecognition();
    setRecorder({
      isRecording: false
    });
  };

  return React.createElement("div", {
    height: "200px"
  }, React.createElement("hr", null), React.createElement("textarea", {
    className: "text-area",
    rows: "30",
    value: transcripts.join("\n"),
    onChange: function onChange(e) {
      return setTranscripts(e.target.value.split("\n"));
    }
  }), React.createElement("div", {
    className: "App-intro"
  }, recorder.isRecording && React.createElement("div", {
    className: "stop",
    onClick: function onClick(e) {
      return stopRecording();
    }
  }, "STOP"), !recorder.isRecording && React.createElement("div", {
    onClick: function onClick(e) {
      return startRecording();
    }
  }, "START"), React.createElement("br", null), React.createElement("br", null)), React.createElement("hr", null));
});
//# sourceMappingURL=Recorder.js.map