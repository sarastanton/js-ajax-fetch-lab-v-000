function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return '';
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  $('#results').html(`<a href="${json.html_url}"> ${json.html_url}</a>`)
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const parameters = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(`https://api.github.com/repos/sarastanton/js-ajax-fetch-lab/issues`, {
    method: 'POST',
    body: JSON.stringify(parameters),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`https://api.github.com/repos/sarastanton/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => displayIssues(json));
  }

function displayIssues(json) {
  const results = json.map(issue => `<li><p><strong> Title: </strong> ${issue.title}</p> <p><strong> Issue: </strong> ${issue.body} </p></li>`);
  $('#issues').html(`<ul> ${results} </ul>`)
}
