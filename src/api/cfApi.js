/* eslint-disable no-param-reassign */
import Axios from 'axios';

export async function getCfContest() {
  const url = 'https://codeforces.com/api/contest.list?gym=false';
  return new Promise((resolve) => {
    Axios.get(url)
      .then((res) => {
        if (res && res.data && res.data.status === 'OK') {
          const { result } = res.data;
          resolve(result);
        }
        resolve([]);
      })
      .catch(() => {
        resolve([]);
      });
  });
}

export async function getCfUserInfo(username) {
  const url = `https://codeforces.com/api/user.status?handle=${username}`;
  return new Promise((resolve, reject) => {
    Axios.get(url)
      .then((res) => {
        if (res.data.status === 'OK') {
          const { result } = res.data;
          resolve(result);
        }
        reject(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export async function getCfProblems() {
  const url = 'https://codeforces.com/api/problemset.problems';
  return new Promise((resolve) => {
    Axios.get(url)
      .then((res) => {
        if (res.data.status === 'OK') {
          const { result } = res.data;
          const mp = {};
          result.problemStatistics.forEach((p) => {
            const { contestId, index, solvedCount } = p;
            if (!mp[contestId]) mp[contestId] = {};
            mp[contestId][index] = solvedCount;
          });
          const { problems } = result;
          problems.forEach((p) => {
            p.userSolved = (mp[p.contestId] && mp[p.contestId][p.index]) || 0;
            if (!p.rating) p.rating = 10000;
          });
          problems.sort((p1, p2) => p1.rating - p2.rating);
          resolve(problems);
        }
        resolve([]);
      })
      .catch(() => {
        resolve([]);
      });
  });
}
