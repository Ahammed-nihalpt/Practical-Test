/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import {
  stopPoints,
  ramValue,
  hardDiskValue,
  locations,
} from "../../Data/FilterData";
import "./Filter.css";
import Context from "../../Context/Context";
import Slider from "@mui/material/Slider";

function Filter() {
  const { filterData, setFilterData } = useContext(Context);
  function valuetext(value) {
    let val = stopPoints.filter((points) => points.value === value);
    return `${val.lable}`;
  }
  const handleSliderChange = (e) => {
    const stopPoint = stopPoints.find(
      (point) => point.value === e.target.value
    );
    const lable = stopPoint ? stopPoint.label : null;
    setFilterData((prevState) => ({
      ...prevState,
      storage: lable,
    }));
  };

  const onRamCheck = (e) => {
    const { name, checked, value } = e.target;
    setFilterData((prevState) => {
      if (checked) {
        return { ...prevState, ram: [...prevState.ram, value] };
      } else {
        const newRamArray = prevState.ram.filter((item) => item !== value);
        return { ...prevState, ram: newRamArray };
      }
    });
  };

  const onDiskFilterChange = (e) => {
    setFilterData((prevState) => ({
      ...prevState,
      harddisk: e.target.value,
    }));
  };

  const onLocationFilter = (e) => {
    setFilterData((prevState) => ({
      ...prevState,
      location: e.target.value,
    }));
  };

  return (
    <div className="filter">
      <div className="filter_head_div">
        <label className="Filter_head">Filter</label>
      </div>
      <div className="slid_filter">
        <div className="filter_lable">
          <label>Storage:</label>
        </div>
        <div className="sld_range">
          <Slider
            defaultValue={0}
            getAriaValueText={valuetext}
            step={1}
            marks={stopPoints}
            onChange={handleSliderChange}
            max={stopPoints.length - 1}
          />
        </div>
      </div>
      <div className="range_filter">
        <div className="filter_lable">
          <label>Ram:</label>
        </div>
        <div className="chk_box">
          {ramValue.map((value) => (
            <div key={value}>
              <label htmlFor="">{value}:</label>
              <input
                type="checkbox"
                name="ram"
                value={value}
                onChange={onRamCheck}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="dropdown_filter">
        <div style={{ display: "flex" }}>
          <div className="filter_lable">
            <label>Hard disk:</label>
          </div>
          <select name="disk" onChange={onDiskFilterChange}>
            <option value="all">All</option>
            {hardDiskValue.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex" }}>
          <div className="filter_lable">
            <label>Location:</label>
          </div>
          <select name="loaction" onChange={onLocationFilter}>
            <option value="all">All</option>
            {locations.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
