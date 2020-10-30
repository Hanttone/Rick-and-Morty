export default function getData() {
  return fetch("https://rickandmortyapi.com/api/character/").then((res) =>
    res.json()
  );
}
