// Typesafe check if not null or undefined
export const notEmpty = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;
