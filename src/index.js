
(function() {
  $.get("/users", function( users ) {
    const userList = document.getElementById('userList')
    users.forEach(({id, firstName, lastName}) => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.text = firstName
      a.href = '/user.html?id='+id
      li.appendChild(a)
      userList.appendChild(li)
    })
  })
})()
