/* eslint-disable */
import Axios from 'axios';

export async function getUpcomingContest(resouceIdList) {
  const startTime = new Date().toISOString();
  const resourceString = resouceIdList.join('%2C');
  const url = `https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/json/contest/?&start__gt=${startTime}&resource__id__in=${resourceString}&order_by=start&username=swiggy123&api_key=a0fc6e7ce627ee61b7fced4c976609b97bb65b76`;
  console.log(url);
  return new Promise((resolve) => {
    Axios(url)
      .then((res) => {
        const { objects } = res.data;
        console.log(objects);
        resolve(objects);
      })
      .catch((err) => {
        console.log(err);
        resolve([]);
      });
  });
}
