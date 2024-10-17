function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginData = {};
    loginData.UserName = username;
    loginData.PassWord = password;
    var jsonData = JSON.stringify(loginData);
    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify2', {
         method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TUe60e210564670c9cf7c526b6535e93290f52b5d6ceccbc3a62c0adefc1dd0ed2bfda4102770c142c52ec699204487bab'
        },
        body: jsonData,
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('massage');
        resultDiv.innerHTML = `
            <p><strong>Status :</strong> ${data.status ? 'Success' : 'Failed'}</p>
            <p><strong>Name :</strong> ${data.displayname_en || 'N/A'}</p>
            <p><strong>Username :</strong> ${data.username|| 'N/A'}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const resultDiv = document.getElementById('massage');
        resultDiv.innerHTML = '<p>Error fetching data. Please try again.</p>';
    });
}
