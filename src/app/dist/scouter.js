"use strict";
exports.__esModule = true;
exports.scouter = void 0;
var calc_1 = require("./calc");
exports.scouter = function (fightningPower) {
    var calculatedFightingPower = fightningPower <= 53 ? calc_1.tenThousandTimes(fightningPower) : calc_1.immeasurable();
    return "\u79C1\u306E\u6226\u95D8\u529B\u306F" + calculatedFightingPower + "\u3067\u3059\"";
};
