const listRepos = async username => {
    const repos = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
        .then((response) => response.json())
        .then((data) => { 
            console.log(data);
        
            return data;
        })
        .catch((error) => console.error(error));

    const markup = repos.map((repo) => `
        <li>
            <a href="${repo.html_url}${repo.name}"></a>
            ${repo.name}
            (⭐️ ${repo.stargazers_count} ${repo.name})
        </li>
    `).join('');

    const content = document.getElementById('content');

    content.innerHTML = `<ul>${markup}</ul>`;

    
}

listRepos('pratapdd');