export default async function GetCharacterPages() {
   let allData = [];
   let morePagesAvailable = true;
   let currentPage = 0;

   while (morePagesAvailable) {
     currentPage++;
      const response = await fetch('https://rickandmortyapi.com/api/character/?page='+ currentPage)
      await response.json().then(info => allData.push(...info.results));
      morePagesAvailable = currentPage < 20;
   }

   return allData;
 }
