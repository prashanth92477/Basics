const parentcontainer = document.querySelector('#parent-container');
const userinputbox = document.querySelector('#userinput-div');
const userinput = document.querySelector('#userinput');
const errmsg = document.createElement('p');
// const useroutput = document.querySelector('#useroutput-div');
// console.log(userinput);
const btn = document.querySelector('.btn-primary');
btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (userinput.value === '' && userinput.value.length === 0) {
    errmsg.innerHTML = 'Please enter a value';
    parentcontainer.appendChild(errmsg);
  }
  console.log(userinput.value.length);
  // console.log('Hello');
  // console.log('event = ', event);
  // console.log('userinput = ', userinput.value);
  // const inputvalue = userinput.value;

  // console.log(event.target);
  // console.log(typeof userinput);
  // console.log(userinput.value.length);
  if (userinput.value != null && userinput.value.length > 0) {
    errmsg.style.display = 'none';
    createChildDivElement(userinput.value);
  }
  // const errmsg = document.createElement('p');
  // errmsg.innerHTML = 'Please enter a value';
  // parentcontainer.appendChild(errmsg);
});
function createChildDivElement(inputval) {
  const objectinfo = [
    {
      tagname: 'div',
      attribute: { id: 'onediv', class: 'outtest' },
      textcontent: '',
    },
    {
      tagname: 'p',
      attribute: { id: 'onepid', class: 'onepclass' },
      textcontent: lengthOfString(inputval),
    },
    {
      tagname: 'p',
      attribute: { id: 'twopid', class: 'onepclass' },
      textcontent: toLowerString(inputval),
    },
    {
      tagname: 'p',
      attribute: { id: 'threepid', class: 'onepclass' },
      textcontent: toUpperString(inputval),
    },
    {
      tagname: 'ul',
      attribute: { id: 'ulid', class: 'outtest' },
      textcontent:
        'Access character frm string <br> you can access charater using []<br> bypassing index',
    },
    {
      tagname: 'p',
      attribute: { id: 'singlecharcterid', class: 'onepclass' },
      textcontent: toUpperString(inputval),
    },
  ];
  objectinfo.forEach((data) => {
    const { tagname, attribute, textcontent } = data;
    createOutputElement(tagname, attribute, textcontent);
  });
}
function lengthOfString(inval) {
  return 'Length of String = ' + inval.length;
}
function toLowerString(inval) {
  return 'LowerCase = ' + inval.toLowerCase();
}
function toUpperString(inval) {
  return 'UpperCase = ' + inval.toUpperCase();
}

function createOutputElement(tagname, attribute, textcontent) {
  const outputdiv = document.createElement(tagname);
  for (const att in attribute) {
    // console.log('att = ', att);
    // console.log('attributes[att] = ', attribute[att]);
    outputdiv.setAttribute(att, attribute[att]);
  }
  outputdiv.innerHTML = textcontent;
  if (tagname === 'div') {
    parentcontainer.append(outputdiv);
  }

  const onediv = document.querySelector('#onediv');
  if (onediv != null && tagname != 'div') {
    console.log('onediv not null', onediv);
    onediv.appendChild(outputdiv);
  }
  if (tagname === 'ul') {
    parentcontainer.append(outputdiv);
    const ul = document.querySelector('#ulid');
    console.log('ul', ul);
    // const li = document.createElement('li');
    console.log('userinput.length', userinput.value.length);
    // li.innerHTML = 'Li Element';
    // ul.appendChild(li);
    for (let index = 0; index < userinput.value.length; index++) {
      const li = document.createElement('li');
      // const element = array[index];
      li.innerHTML = userinput.value[index];
      ul.appendChild(li);
    }
    userinput.value = '';

    // if (outputdiv != null) {
    //   console.log('outputdiv not null =', outputdiv);
    // }
  }

  // clearInputData();
}
// function clearInputData() {
//   userinput.value = '';
// }
// userinput.value = '';
function createChildParagraphElement() {}
// if (useroutput === null) {
//   console.log('useroutput', useroutput);
//   console.log('divis null');
//   console.log('tagname', tagname);
//   console.log('attribute', attribute);
//   console.log('textcontent', textcontent);

// const generictag = document.querySelector(tagname);
// when onediv is null need to create a div element for adding child eleemnt to it.
// addAttributeToElements(generictag, attributes, textcontent);
// }
// if (onediv != null) {
// }
// }
// function addAttributeToElements(generictag, attributes, textcontent) {
//   for (att in attributes) {
//     generictag.setAttribute(att, attributes[att]);
//   }
//   generictag.innerHTML = textcontent;
//   gncontainer.appendChild(generictag);
//   // gncontainer.append(body);
// }

// function createOutputElement(tagname, attributes, text) {
// console.log('tagname', tagname);
// if (tagname === 'div') {
//   const divelement = document.createElement(tagname);
//   console.log('onediv', onediv);
//   returnAttributes(divelement, attributes, text);
// }
// if (onediv != null) {
//   const pelement = document.createElement(tagname);
//   returnAttributes(pelement, attributes, text);
// }
//  for (att in attributes) {
//   console.log(attributes[att]);
//   divelement.setAttribute(att, attributes[att]);
// }
// }
// const divelement = document.createElement(tagname);
// console.log(typeof attributes);
// // console.log(attributes.length);
// for (att in attributes) {
//   console.log(attributes[att]);
//   divelement.setAttribute(att, attributes[att]);
// }
// divelement.innerHTML = context;
// gncontainer.appendChild(divelement);
// }
// function returnAttributes(elemt, attributes, text) {
//   console.log('element', elemt);
//   console.log('attributes', attributes);
//   console.log('text', text);
//   for (att in attributes) {
//     console.log(attributes[att]);
//     elemt.setAttribute(att, attributes[att]);
//   }
//   elemt.innerHTML = text;

//   gncontainer.appendChild(elemt);
// }
