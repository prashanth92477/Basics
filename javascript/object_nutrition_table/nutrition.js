export function Nutrition(nutritionval) {
  console.log(nutritionval);
  return `<tr>
    <td>${nutritionval.title}</td>
    <td>${nutritionval.value}g</td>
</tr>`;
}
