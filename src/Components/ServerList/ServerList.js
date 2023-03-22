import React from "react";

function ServerList({ servers, displayLimit }) {
  return (
    <div className="servers">
      {servers.slice(0, displayLimit).map((server, index) => (
        <div className="server_details" key={index}>
          <label>Model: {server.Model}</label>
          <label htmlFor="">RAM: {server.RAM}</label>
          <label htmlFor="">HDD: {server.HDD}</label>
          <label htmlFor="">Location: {server.Location}</label>
          <label htmlFor=""> Price: {server.Price}</label>
        </div>
      ))}
      {servers.length <= 0 && (
        <div className="server_details">
          <label htmlFor=""> No servers</label>
        </div>
      )}
    </div>
  );
}

export default ServerList;
