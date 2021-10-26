export const convertToPercentage = (value: number, maxValue = 5): number => Math.min(value, maxValue) / maxValue * 100;
