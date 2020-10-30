export default function getCharacterPages() {
  return fetch(
    "https://rickandmortyapi.com/api/character/?page=2"
  ).then((res) => res.json());
}

// export default async function getCharacterPages() {
//   let allData = [];
//   let morePagesAvailable = true;
//   let currentPage = 0;

//   while (morePagesAvailable) {
//     currentPage++;
//     const response = await fetch(
//       `https://rickandmortyapi.com/api/character/?page=${currentPage}`
//     );

//     let { data, total_pages } = await response.json();

//     console.log("IIIIIIIIIIIIIII", await response.json());
//     data.forEach((e) => allData.unshift(e));
//     morePagesAvailable = currentPage < total_pages;
//   }

//   return allData;
// }
