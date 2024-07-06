export const getFeedbackWord = (count) => {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod100 >= 11 && mod100 <= 19) {
    return 'відгуків';
  } else if (mod10 === 1) {
    return 'відгук';
  } else if (mod10 >= 2 && mod10 <= 4) {
    return 'відгуки';
  } else {
    return 'відгуків';
  }
};