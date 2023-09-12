// document.addEventListener('DOMContentLoaded', function () {
// if (typeof window !== 'undefined') {
const appDiv = document.querySelector('#mainid');
const searching = [18, 12, 9, 14, 7, 50, 100, -5, 2, 120, 10];
// const searching = [];
const target = 0;
linearSearch(searching, target);
function linearSearch(search, target) {
  if (search.length === 0) {
    return (appDiv.innerHTML = 'length of array 0');
  }
  for (let i = 0; i < search.length; i++) {
    //console.log(search[i]);
    if (target === search[i]) {
      appDiv.innerHTML = search[i];
      // console.log(search[i]);
      return (appDiv.innerHTML = 'Found Search Item  = ' + search[i]);
    }
  }
  appDiv.innerHTML = `Search Item ${target}  Not Found`;

  // appDiv.innerHTML=search;
}
// });
// }
