import type { FactVariantType } from 'src/constants';
import { FACTS, TASKS } from 'src/constants';

export const getRandomTask = () => {
  const randomIndex = Math.floor(Math.random() * TASKS.length);

  return TASKS[randomIndex];
};

export const getRandomFact = () => {
  const randomIndex = Math.floor(Math.random() * FACTS.length);

  return FACTS[randomIndex];
};

export const shufflePlayersChoices = (
  currentOptions: FactVariantType[],
  choice1: FactVariantType,
  choice2: FactVariantType,
): FactVariantType[] => {
  const shuffledOptions = currentOptions.map((option) => {
    if (option.index === choice1.index) return choice2;

    if (option.index === choice2.index) return choice1;

    return option;
  });

  return shuffledOptions;
};

export const checkIfPlayerChoiceIsCorrect = (
  userOrderedList: FactVariantType[],
  originalVariants: FactVariantType[],
) => {
  const correctOrder = [...originalVariants].sort((a, b) => a.index - b.index);

  return userOrderedList.map((item, i) => ({
    ...item,
    isCorrect: item.index === correctOrder[i]?.index,
  }));
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
