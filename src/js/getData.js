// GET Data from JSON
export const getData = async () => {
  const url = `/data/ebooks.json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  return data.ebooks;
};
