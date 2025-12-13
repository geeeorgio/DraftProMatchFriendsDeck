import { TASKS } from 'src/constants';

export const getRandomTask = () => {
  const randomIndex = Math.floor(Math.random() * TASKS.length);

  return TASKS[randomIndex];
};
