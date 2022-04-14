import { q } from "../helpers/helpers.js";
import { addUpload } from "../helpers/uploads.js";

export const uploadView = () => {
  const main = q("main");
  main.innerHTML = "";

  const container = document.createElement("section");
  container.className = "gif-grid";

  const containerTitle = document.createElement("h1");
  containerTitle.innerHTML = "Upload a GIF:";
  containerTitle.className = "gif-category";

  main.appendChild(containerTitle);

  const inputField = document.createElement("input");
  inputField.type = "file";
  inputField.id = "fileInput";
  inputField.className = "upload-input";
  inputField.accept = ".gif";
  main.appendChild(inputField);

  const responseMsg = document.createElement("h1");
  responseMsg.className = "gif-category";
  main.appendChild(responseMsg);

  const fileInput = document.querySelector("#fileInput");

  const uploadFile = (file) => {
    responseMsg.innerHTML = "Uploading a GIF...";
    if (file.type.match("image/gif")) {
      const API_ENDPOINT =
        "https://upload.giphy.com/v1/gifs?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5";
      const request = new XMLHttpRequest();
      const formData = new FormData();

      request.open("POST", API_ENDPOINT, true);
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          let response = JSON.parse(request.responseText);
          addUpload(response.data.id);
          responseMsg.innerHTML = "File uploaded successfully!";
        }
      };
      formData.append("file", file);
      request.send(formData);
    } else {
      responseMsg.innerHTML = "Please upload a gif file!";
    }
  };

  fileInput.addEventListener("change", (event) => {
    const files = event.target.files;
    uploadFile(files[0]);
  });
};
