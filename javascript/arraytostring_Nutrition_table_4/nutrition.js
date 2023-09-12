export function nutritionTable(tabledata) {
  // console.log('data =', tabledata);
  let tbody = '-';
  // tabledata.forEach(function (tbdata) {
  //   // console.log(tbdata);
  //   tbody += `<tr>
  //       <td>${tbdata[0]}</td>
  //       <td>${tbdata[1]}</td>
  //     </tr>`;
  // });
  // return tbody;
  return tabledata
    .map(
      (tab) => `<tr>
                  <td>${tab[0]}</td>
                  <td>${tab[1]}</td>
                </tr>`
    )
    .join(' ');
}
