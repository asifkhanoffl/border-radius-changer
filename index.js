document.addEventListener("DOMContentLoaded", () => {
  const allBoarder = document.getElementById("all");
  const all_values = document.getElementById("all_values");
  const code = document.getElementById("code");
  const container = document.querySelector(".container");
  const copybtn = document.querySelector("#btn");
  const border_style_element = document.querySelector("#border-style");
  const border_value_element = document.getElementById("border");
  const allsize = document.getElementById("border_value");
  var coding = "";
  var all_radius = 10;
  var border_style = "solid";
  var border_size = 5;

  function allBoarderUpdate() {
    all_radius = allBoarder.value;
    border_size = border_value_element.value;
    all_values.innerText = all_radius + "px";
    allsize.innerText = border_size + "px";
    coding = `
    border:${border_size}px ${border_style} red;
    border-radius:${all_radius}px;
    `;
    code.value = coding;
    container.style.cssText = coding;
  }

  allBoarder.addEventListener("mousemove", allBoarderUpdate);
  allBoarder.addEventListener("change", allBoarderUpdate);

  border_value_element.addEventListener("change", allBoarderUpdate);
  border_value_element.addEventListener("mousemove", allBoarderUpdate);

  copybtn.addEventListener("click", () => {
    document.querySelector("textarea").select();
    document.execCommand("copy");
    alert("Code copyed");
  });

  border_style_element.addEventListener("change", function () {
    border_style = this.value;
    allBoarderUpdate();
  });
  allBoarderUpdate();
});
