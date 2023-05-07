import React from "react";

export const LogoutIcon = React.memo(() => (
  <svg
    height="13"
    width="13"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 7.5L10.5 10.75M13.5 7.5L10.5 4.5M13.5 7.5L4 7.5M8 13.5H1.5L1.5 1.5L8 1.5"
      stroke="#FFFFFF"
      strokeWidth="2"
    />
  </svg>
));

export const MenuIcon = React.memo(() => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="13"
    width="13"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "rgb(255, 255, 255)" }}
  >
    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
  </svg>
));

export const AdminIcon = React.memo(() => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 32 32"
    height="13"
    width="13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title />
    <path d="M22.56,16.53a9.95,9.95,0,0,1-13.12,0A15,15,0,0,0,1,30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1A15,15,0,0,0,22.56,16.53Z" />
    <circle cx={16} cy={9} r={8} />
  </svg>
));
