const panelContent = [
  {class: "panel-one", text: ["One", "I", "Two"]},
  {class: "panel-two", text: ["Three", "II", "Four"]},
  {class: "panel-three", text: ["Five", "III", "Six"]},
  {class: "panel-four", text: ["Seven", "IV", "Eight"]},
  {class: "panel-five", text: ["Nine", "V", "Ten"]}
];

const panels = document.querySelector(".panels");

for (let content of panelContent) {
  const panel = document.createElement("div");
  panels.appendChild(panel);
  panel.classList.add("panel", `${content.class}`);

  const firtstParagh = document.createElement("p");
  panel.appendChild(firtstParagh);
  firtstParagh.innerHTML = `${content.text[0]}`;

  const secondParagh = document.createElement("p");
  panel.appendChild(secondParagh);
  secondParagh.innerHTML = `${content.text[1]}`;

  const thirdParagh = document.createElement("p");
  panel.appendChild(thirdParagh);
  thirdParagh.innerHTML = `${content.text[2]}`;

  panel.addEventListener("click", () => {
    firtstParagh.classList.toggle("show-text");
    thirdParagh.classList.toggle("show-text");
    panel.classList.toggle("open-horizontal");
  })
}

