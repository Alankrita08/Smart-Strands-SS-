const API_URL = 'http://localhost:5000/api';
$.get(`${API_URL}/user`)
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(`Error: ${error}`);
});
$.get(`${API_URL}/user`)
.then(response => {
  response.forEach(user => {
    $('#users tbody').append(`
      <tr>
        <td>${user.name1}</td>
        <td>${user.username1}</td>
        <td>${user.phoneno1}</td>
        <td>${user.password1}</td>
      </tr>`
    );
  });
})

.catch(error => {
  console.error(`Error: ${error}`);
});
 
$('#store').on('click', () => {
  const name1 = $('#name1').val();
  const username1 = $('#username1').val();
  const phoneno1 = $('#phoneno1').val();
  const password1 = $('#password1').val();

  const body = {
    name1,
    username1,
    phoneno1,
    password1
  };
  

  $.post(`${API_URL}/user`, body)
  .then(response => {
    location.href = '/menu';
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});

$('#check').on('click', () => {
    const username = $('#username1').val();
    const password = $('#password1').val();
    const body = {
      username,
      password
    };
    if(username1 == username && password1 == password)
    {
        alert('You are loged in.');
        window.open('menu.html');
    }
    else{
        alert('Please check your Username and Password');
    }
});  