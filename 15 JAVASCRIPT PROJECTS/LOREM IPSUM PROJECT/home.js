const text = [
  `number one Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi porro adipisci ea ad voluptatum ex consequuntur architecto cum atque nulla provident quis beatae autem velit, laborum illum tempore recusandae et facilis harum, eos voluptas nostrum. Id distinctio, repudiandae mollitia laborum voluptatum inventore facere ipsum non maxime, neque doloremque tenetur recusandae!
    `,
  `number two Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id animi soluta repellendus ea odio mollitia voluptate iure molestias sint dolorem laboriosam tenetur delectus doloremque fugiat, nisi, illum in obcaecati veniam?
    `,
  `number three Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iste ea tenetur, nihil neque exercitationem non consectetur, earum reprehenderit distinctio est, sint nemo assumenda necessitatibus dolore officiis nostrum in magnam. Consectetur alias iste porro facere doloremque ipsum iusto ducimus laudantium repudiandae? Ullam nisi voluptatem, fuga optio voluptas ipsam! Optio officiis impedit tempora voluptatibus nostrum minus fugiat voluptatum, blanditiis necessitatibus maiores?
    `,
  `number four Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo similique, quia nesciunt maxime iure numquam in aliquam incidunt eligendi, accusamus ipsam quam, sunt quibusdam iusto nihil quasi rem dolorum voluptatibus. Sit dolorum voluptatem nesciunt accusamus iste laboriosam soluta nihil maiores, molestiae nulla atque est fuga voluptatibus obcaecati itaque illo odio qui. Unde consequuntur illum soluta ea possimus a eos repudiandae, repellendus rem eum commodi error ipsam obcaecati magnam minima officia quasi accusantium quidem. Ad atque sunt recusandae labore eaque qui?
    `,
  `number five Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus nobis aliquid illum nostrum ratione distinctio eum animi tempora earum nemo deleniti reprehenderit voluptatem eveniet officiis veniam architecto laborum molestias, maiores est sapiente. Fuga, autem aut illo eos tenetur ut asperiores?
    `,
  `number six Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, cumque ratione soluta facere nisi nemo? Corporis ex doloribus provident, numquam iure error unde, nulla et eligendi quaerat minus quisquam, similique molestias tempore excepturi laboriosam? Aperiam, mollitia impedit. Minima neque iure natus tenetur quaerat, a impedit tempore rerum labore voluptate doloribus magnam. Quia, aspernatur. Molestias sequi quam eos ad quo ipsa deleniti repellendus sit nemo corrupti, ipsum architecto obcaecati quos magnam!
    `,
  `number seven Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus porro, quos quis dolorem sunt esse quaerat doloribus aliquid voluptatem et blanditiis, repellat dolor maiores aspernatur maxime ratione officiis voluptate culpa similique soluta sapiente architecto numquam unde. Quia modi enim voluptates est qui, aut esse nisi aliquam id aspernatur dolores eveniet, culpa delectus sapiente aperiam corrupti, at rem perspiciatis tempore tenetur. Molestiae deserunt quis sed totam, atque ipsa sequi earum suscipit quidem. Velit, sit odio harum optio dolorum ipsa doloribus esse, obcaecati fugiat porro ut voluptas minus facilis maiores sapiente deleniti.
    `,
  `nmber eight Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam commodi accusantium tempora. Sunt ab consequatur aliquam accusantium, autem assumenda eveniet eos, voluptatem quam maxime nostrum rerum hic iusto accusamus? Fugit laboriosam repellat earum perferendis placeat molestiae modi recusandae voluptatem ea ab! Maxime, qui sint aliquid nesciunt itaque quidem quaerat laborum, quas optio eos delectus, minus hic exercitationem ab atque fuga aperiam aut ipsa odio error assumenda quibusdam beatae obcaecati! A, aspernatur harum suscipit aut odit et, voluptas enim est fugit sit excepturi laboriosam? Quis non labore minima corporis fuga, sed incidunt provident voluptatum esse, culpa tempore, reiciendis quam ullam!
    `,
  `number nine Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas officiis dolorem dolores nostrum, quis adipisci tempora quibusdam ipsa obcaecati error aliquid distinctio enim blanditiis ab illum corrupti beatae. Laudantium eveniet consequuntur obcaecati praesentium! Autem nisi labore commodi rem explicabo pariatur, numquam vel vero suscipit non!
    `,
];

const form = document.querySelector(".paragraphs");
const input = document.querySelector("input");
const loremTexts = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = parseInt(input.value);
  const random = Math.floor(Math.random() * text.length);
  //empty value
  //negative values i,e less than one
  //greater than nine
  if (isNaN(value) || value <= 0 || value > 9) {
    loremTexts.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    console.log(tempText);

    loremTexts.innerHTML = tempText;
  }
});
