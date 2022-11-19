export function diffDates(prevDate: any) {
  let dayNow = Date.now();
  prevDate = Date.parse(prevDate);
  return Math.ceil((dayNow - prevDate) / (60 * 60 * 24 * 1000));
}

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export let keyRandom = () => randomIntFromInterval(0, 1000000000);
