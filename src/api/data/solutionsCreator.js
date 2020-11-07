/* eslint-disable */
const { getCfUserInfo } = require('../cfApi');

export const globalSolutionUsers = ['ashishgup', 'tourist', 'KrK', 'uwi', 'neal'];

const fetchUserData = async (user, globalSolutionData) => {
  return new Promise((resolve) => {
    getCfUserInfo(user)
      .then((data) => {
        data.forEach((submission) => {
          const { contestId, verdict, problem, id } = submission;
          const { index } = problem;
          if (!globalSolutionData[contestId]) globalSolutionData[contestId] = {};
          if (verdict === 'OK' && problem && index && !globalSolutionData[contestId][index]) {
            globalSolutionData[contestId][index] = [];
            const solutionLink = `https://codeforces.com/contest/${contestId}/submission/${id}`;
            globalSolutionData[contestId][index].push({ user, solutionLink });
          }
        });
        console.log(user, 'passed');
        resolve();
      })
      .catch(() => {
        console.log(user, 'failed');
        resolve();
      });
  });
};

export const buildGlobalSolutionData = async () => {
  const globalSolutionData = {};
  for (let i = 0; i < globalSolutionUsers.length; i += 1) {
    await fetchUserData(globalSolutionUsers[i], globalSolutionData);
  }
  console.log(JSON.stringify(globalSolutionData));
};

// function htmlResponse(url) {
//   fetch(url, { mode: 'no-cors' })
//     .then((res) => {
//       console.log('Raw Result', res);
//       return res.text();
//     })
//       .then((res) => {
//         console.log('Text Results', res);
//       })
//       .catch((err) => {
//         console.log('Text Conversion error ', err);
//       })
//     .catch((err) => {
//       console.log('Fetch Error ', err);
//     });
// }
