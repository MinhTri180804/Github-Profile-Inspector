export default async function repositoriesApi({ username }) {
  const response = fetch(`http://localhost:3000/0`).then((res) => res.json());
  const data = await response;
  return data;
}
