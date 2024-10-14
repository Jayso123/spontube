import React, { Component } from "react";
import "../Css/Homepage.css";
import { GrHomeRounded } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi2";

export class Homepage extends Component {
  render() {
    return (
      <div className="display">
        <div className="left">
          <div className="one">
            <div className="home">
              <GrHomeRounded className="icon" />
              <h2 className="left-text">Home</h2>
            </div>
            <div className="search">
              <FaSearch className="icon" />
              <h2 className="left-text">Search</h2>
            </div>
          </div>
          <div className="two">
            <div className="sm-nav">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="Svg-sc-ytk21e-0 burger"
              >
                <path
                  d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1
                 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                ></path>
              </svg>
              <span className="lib">Your Library</span>
              <ul className="icons-ul">
                <li className="icons">
                  <AiOutlinePlus />
                </li>
                <li className="icons">
                  <HiArrowRight />
                </li>
              </ul>
            </div>
            <div className="box-ro">
              <div className="cy"></div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="container-mid">
            <h1>Container middle</h1>
          </div>
        </div>
        <div className="right">
          <h1 className="text">Container right</h1>
        </div>
      </div>
    );
  }
}

export default Homepage;
