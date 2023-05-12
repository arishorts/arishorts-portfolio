import axios from "axios";

function getRepoData(username, repoName) {
  return axios
    .get(`https://api.github.com/repos/${username}/${repoName}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function getReposData(username, repoList) {
  const promises = repoList.map((repoName) => getRepoData(username, repoName));

  return Promise.all(promises)
    .then((repoDataArray) => repoDataArray)
    .catch((error) => console.log(error));
}
