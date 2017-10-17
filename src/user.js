(function() {
  const idQuery = window.location.search.replace("?id=", "");
  $.get("http://localhost:8081/user/" + idQuery, function({ id, firstName, lastName, age, nat }) {
    const userProfile = document.getElementById("userProfile");
    document.getElementById("firstName").textContent = firstName;
    document.getElementById("lastName").textContent = lastName;
    document.getElementById("age").textContent = age;
    document.getElementById("nationality").textContent = nat;
  }).fail(function() {
    console.log("failing");
    window.location.href = "/404.html";
  });
})();

function onButtonClick() {
  console.log("Clicked!");
  window.history.back();
}
