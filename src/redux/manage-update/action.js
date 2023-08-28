export const updateBookData = (status, data) => {
  return {
    type: "UPDATE",
    payload: { status, data },
  };
};
