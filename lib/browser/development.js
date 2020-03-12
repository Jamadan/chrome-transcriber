import 'core-js/modules/es.array.concat';
import 'core-js/modules/es.array.join';
import 'core-js/modules/es.regexp.exec';
import 'core-js/modules/es.string.split';
import React, { useState } from 'react';

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var Recorder = (function () {
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

var index = {
  Recorder: Recorder
};

export default index;
//# sourceMappingURL=development.js.map
