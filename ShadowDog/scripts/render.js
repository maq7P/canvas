import { streamSelect } from "./events.js";

const renderSelect = (id, name ,options) => {  
  const select = document.createElement("select");
  select.id = id;
  select.name = name;

  const elOption = options.map(option => {
    return `
    <option value="${option}">
      ${option}
    </option>
    `
  });

  select.innerHTML = elOption;
  document.body.appendChild(select);

  select.addEventListener('change', (event) => {
    streamSelect.fire(() => event.target.value);
  })
}

export { renderSelect }