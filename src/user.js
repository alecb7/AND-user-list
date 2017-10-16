
(function() {
  const idQuery = window.location.search.replace('?id=', '')
  $.get("/user/"+idQuery, function( {
    id,
    firstName,
    lastName,
    age,
    nat
  } ) {
    const userProfile = document.getElementById('userProfile')
    document.getElementById('firstName').textContent = firstName
    document.getElementById('lastName').textContent = lastName
    document.getElementById('age').textContent = age
    document.getElementById('nationality').textContent = nat
  })
  $('#back').click(function () {
    window.location.href= 'index.html';
  })
})()
