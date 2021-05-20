/* eslint-disable*/
import { ccContestDataHtml } from './data/ccContestData';
import { getHtmlResponse } from './utilsApi';

function extractContestFromTable(table, type, list) {
  if (!table || !table.rows) return;

  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    //if (i < 2) console.dir(row.cells[1]);
    const contest = {
      code: row.cells[0].innerText,
      name: row.cells[1].children[0].innerText,
      link: 'https://www.codechef.com/' + row.cells[1].children[0].pathname,
      startTime: row.cells[2].innerText,
      endTime: row.cells[3].innerText,
      phase: type,
    };
    list.push(contest);
  }
}

export async function getCodeChefContestList() {
  const url = 'https://cors-anywhere.herokuapp.com/https://www.codechef.com/contests/';
  const html = ccContestDataHtml;

  console.log(html);

  const domElement = document.createElement('div');
  domElement.innerHTML = html;
  const tables = domElement.querySelectorAll('.dataTable');
  const currentTable = tables[0];
  const futureTable = tables[1];
  const pastTable = tables[2];

  console.log(futureTable);

  const ccContestList = [];
  extractContestFromTable(futureTable, 'Future', ccContestList);
  extractContestFromTable(currentTable, 'Present', ccContestList);
  extractContestFromTable(pastTable, 'Past', ccContestList);
  domElement.remove();
  return ccContestList;
}
