const Devices_new = JSON.parse(localStorage.getItem('devices_new')) || [];

Devices_new.forEach(function(device) {
    $('#devices_new tbody').append(`
      <tr>
        <td>${device.email}</td>
        <td>${device.feedback}</td>
      </tr>`
    );
});

$('#add-device').on('click', function () {
    
    const email = $('#email').val();
    const feedback = $('#feedback').val();
    Devices_new.push({  email, feedback });
    localStorage.setItem('devices_new', JSON.stringify(Devices_new));
    location.href = 'feedbacklist.html';
});

