const apiUrl = 'https://api.github.com/orgs/google/repos';
let repos = [];

document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredRepos = repos.filter(repo => 
        repo.url.toLowerCase().includes(searchTerm) ||
        repo.name.toLowerCase().includes(searchTerm) ||
        (repo.language && repo.language.toLowerCase().includes(searchTerm)) ||
        repo.git_url.toLowerCase().includes(searchTerm) ||
        repo.updated_at.toLowerCase().includes(searchTerm)
    );
    displayTable(filteredRepos);
});

function fetchRepos() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            repos = data.map(repo => ({
                url: repo.html_url,
                name: repo.name,
                language: repo.language,
                git_url: repo.git_url,
                updated_at: repo.updated_at
            }));
            displayTable(repos);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayTable(repos) {
    const tableBody = document.querySelector('#repoTable tbody');
    tableBody.innerHTML = '';
    repos.forEach(repo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="${repo.url}" target="_blank">${repo.url}</a></td>
            <td>${repo.name}</td>
            <td>${repo.language || ''}</td>
            <td>${repo.git_url}</td>
            <td>${repo.updated_at}</td>
        `;
        tableBody.appendChild(row);
    });
}

function sortTable(column) {
    repos.sort((a, b) => {
        if (a[column] < b[column]) return -1;
        if (a[column] > b[column]) return 1;
        return 0;
    });
    displayTable(repos);
}

fetchRepos();
