export default async function repositoriesApi() {
  const response = fetch(
    `https://api.github.com/users/MinhTri180804/repos`
  ).then((res) => res.json());
  const data = await response;
  return data;
}
