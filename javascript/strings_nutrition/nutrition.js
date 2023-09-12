// export function getDescription(text) {
//   // console.log(text);
//   console.log(text);
//   // return text.substring(0, 10);
//   return text.substring(0, 10) + '...';
// }

/*
 * @param { string } label
 * @param { string } text
 */
export function renderTableRow(label, value) {
  console.log(label, value);
  return `<tr>
      <td>${label}</td>
      <td>${value}</td>
    </tr>`;
}
