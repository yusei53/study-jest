"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scouter = void 0;

var _calc = require("./calc");

var scouter = function scouter(fightningPower) {
  var calculatedFightingPower = fightningPower <= 53 ? (0, _calc.tenThousandTimes)(fightningPower) : (0, _calc.immeasurable)();
  return "\u79C1\u306E\u6226\u95D8\u529B\u306F".concat(calculatedFightingPower, "\u3067\u3059\u3002");
};

exports.scouter = scouter;