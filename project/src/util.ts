export const convertToPercentage = (value: number, maxValue = 5) => Math.min(value, maxValue) / maxValue * 100;
