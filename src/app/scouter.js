import { immeasurable, tenThousandTimes } from "./calc";

export const scouter = (fightningPower) => {
  const calculatedFightingPower =
    fightningPower <= 53 ? tenThousandTimes(fightningPower) : immeasurable();

  return `私の戦闘力は${calculatedFightingPower}です。`;
};
