import React, { useContext, useEffect } from "react";
import PhotosContext from "./PhotosContext";
import ThemeContext from "./ThemeContext";

function setTextColor(theme) {
  return theme === "light" ? "black" : "white";
}

function setBgColor(theme) {
  return theme === "light" ? "white" : "black";
}

function PhotoItem({ imgSrc, title, theme }) {
  const textStyle = {
    color: setTextColor(theme),
  };

  return (
    <li>
      <img src={imgSrc} alt={title} />
      <h3 style={textStyle}>{title}</h3>
    </li>
  );
}

export default function PhotosList() {
  const { photos, fetchPhotos } = useContext(PhotosContext.Context);
  const { theme } = useContext(ThemeContext.Consumer);


  const containerStyle = {
    background: setBgColor(theme),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const buttonStyle = {
    margin: "10px",
  };

  const handleFetchPhotos = async () => {
    try {
      await fetchPhotos();
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    handleFetchPhotos();
  }, []);


  return (
    <div id="photos-list-container" style={containerStyle}>
      <ul id="photos-list" style={ulStyle}>
        {photos.map((photoItem, index) => (
          <PhotoItem
            key={index}
            imgSrc={photoItem.imgSrc}
            title={photoItem.title}
            theme={theme}
          />
        ))}
      </ul>
      <footer>
        <button id="fetch-photos" style={buttonStyle} onClick={handleFetchPhotos}>
          Fetch Photos
        </button>
      </footer>
    </div>
  );
}