const input = document.querySelector("#nameid");

function clicked() {
  const gen = document.querySelector('input[name="gender"]:checked').value;
  document.getElementById("imageid").setAttribute("src", `https://joeschmoe.io/api/v1/${gen}/${input.value}`);
}