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

  // When a panel is clicked, it opens
  panel.addEventListener("click", () => {
    firtstParagh.classList.add("show-text");
    thirdParagh.classList.add("show-text");
    panel.classList.add("open-horizontal");
  })

  // When the panel transition ends, it closes
  panel.addEventListener("transitionend", (event) => {
    if (event.propertyName.includes("flex")) {
      firtstParagh.classList.remove("show-text");
      thirdParagh.classList.remove("show-text");
      panel.classList.remove("open-horizontal");
    };
  })
}

