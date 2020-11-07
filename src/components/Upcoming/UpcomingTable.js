import React from 'react';

function convertMS(milliseconds) {
  let hour;
  let minute;
  let seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds %= 60;
  hour = Math.floor(minute / 60);
  minute %= 60;
  const day = Math.floor(hour / 24);
  hour %= 24;
  let ans = '';
  if (day > 0) ans += `${day} Days `;
  if (hour > 0) ans += `${hour} hours `;
  if (minute > 0) ans += `${minute} minutes`;
  return ans;
}

const ICON_BASE_URL = 'https://clist.by';
function UpcomingTable(props) {
  const { contestList, filter } = props;
  let index = 0;
  return (
    <div className="upcoming-content">
      <div className="row mx-0 py-3">
        <div className="col-md-12 px-1  order-12">
          <table className="table table-bordered bg-white shadow-sm rounded" id="upcoming-table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col"> </th>
                <th scope="col">Platform</th>
                <th scope="col">Contest</th>
                <th scope="col">Date</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody>
              {contestList.map((contest) => {
                const { duration, event, href, id, resource, start } = contest;
                const { icon, name } = resource;
                const localStartDate = new Date(start).toLocaleString();
                if (filter[resource.id].show) {
                  index += 1;
                  if (!filter[resource.id].count) filter[resource.id].count = 0;
                  filter[resource.id].count += 1;

                  return (
                    <tr key={id}>
                      <td>{index}</td>
                      <td>
                        <img src={`${ICON_BASE_URL}/${icon}`} alt="" className="upcoming-logo" />
                      </td>
                      <td>{name}</td>
                      <td>
                        <a rel="noopener noreferrer" target="_blank" href={href}>
                          {event}
                        </a>
                      </td>
                      <td>{localStartDate}</td>
                      <td>{convertMS(duration * 1000)}</td>
                    </tr>
                  );
                }
                return <React.Fragment key={id} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UpcomingTable;
