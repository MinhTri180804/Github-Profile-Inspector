export default async function userApi() {
  const response = fetch(`https://api.github.com/users/MinhTri180804`).then(
    (res) => res.json()
  );
  const data = await response;
  return data;
}
