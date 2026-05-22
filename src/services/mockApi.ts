export const mockDelay = async <T>(payload: T, fail = false, ms = 350): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  if (fail) throw new Error('Mock network error. Try again.');
  return payload;
};
