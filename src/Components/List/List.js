import React, { useState, lazy, Suspense, useEffect } from "react";
import Filter from "../Filter/Filter";
import servers from "../../Data/ServerData.json";
import Context from "../../Context/Context";
import "./List.css";

const ServerList = lazy(() => import("./ServerList"));

function List() {
  const initialvalue = {
    storage: "all",
    ram: [],
    harddisk: "all",
    location: "all",
  };
  const [serverData, setServerData] = useState(servers);
  const [filterData, setFilterData] = useState(initialvalue);
  const [displayLimit, setDisplayLimit] = useState(12);

  useEffect(() => {
    let filteredData = [];
    let filterIs = false;
    if (filterData.storage !== "all") {
      const filteredServers = servers.filter((server) => {
        const matchResult = server.HDD.match(/x(\d+)/);
        let number = matchResult ? parseInt(matchResult[1]) : null;
        if (parseInt(filterData.storage.match(/\d+/)[0]) <= 72) {
          if (number <= 72) {
            return (
              number * 1000 <=
              parseInt(filterData.storage.match(/\d+/)[0]) * 1000
            );
          } else {
            return (
              number <= parseInt(filterData.storage.match(/\d+/)[0]) * 1000
            );
          }
        } else {
          if (number <= 72) {
            return (
              number * 1000 <= parseInt(filterData.storage.match(/\d+/)[0])
            );
          } else {
            return (
              number <= parseInt(filterData.storage.match(/\d+/)[0]) * 1000
            );
          }
        }
      });

      filteredData = [...filteredData, ...filteredServers];
      filterIs = true;
    }
    if (filterData.ram.length > 0) {
      const result = servers.filter((item) =>
        filterData.ram.some((r) => item.RAM.includes(r))
      );
      filteredData = [...filteredData, ...result];
      filterIs = true;
    }
    if (filterData.harddisk !== "all") {
      const result = servers.filter((item) =>
        item.HDD.includes(filterData.harddisk)
      );
      filteredData = [...filteredData, ...result];
      filterIs = true;
    }
    if (filterData.location !== "all") {
      const result = servers.filter((item) =>
        item.Location.includes(filterData.location)
      );
      filteredData = [...filteredData, ...result];
      filterIs = true;
    }

    if (filterIs) {
      setServerData(filteredData);
    } else {
      setServerData(servers);
    }
  }, [filterData]);

  return (
    <div className="list">
      <div className="list_filter">
        <Context.Provider value={{ filterData, setFilterData }}>
          <Filter />
        </Context.Provider>
        <div className="server_list">
          <label className="list_head">Servers</label>
          <Suspense fallback={<div>Loading...</div>}>
            <ServerList servers={serverData} displayLimit={displayLimit} />
          </Suspense>
          <button
            className="load_more_btn"
            onClick={() => setDisplayLimit(displayLimit + 12)}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
