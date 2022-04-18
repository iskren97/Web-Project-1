import { q, create } from "../helpers/helpers.js";
import { addUpload } from "../helpers/uploads.js";

/**
 * Generates the upload-gif view.
 */
export const uploadView = () => {
  const main = q("main");
  main.innerHTML = "";

  const container = create("section");
  container.className = "gif-grid";

  const containerTitle = create("h1");
  containerTitle.innerHTML = "Upload a GIF:";
  containerTitle.className = "gif-category";

  main.appendChild(containerTitle);

  const inputField = create("input");
  inputField.type = "file";
  inputField.id = "fileInput";
  inputField.className = "upload-input";
  inputField.accept = ".gif";
  main.appendChild(inputField);

  const responseMsg = create("h1");
  responseMsg.className = "gif-category";
  main.appendChild(responseMsg);

  const fileInput = q("#fileInput");

  const uploadFile = async (file) => {
    if (file.type.match("image/gif")) {
      responseMsg.innerHTML = "Uploading a GIF...";
      const API_ENDPOINT =
        "https://upload.giphy.com/v1/gifs?api_key=L6yFCUcFk8wlKFtQK3IemTQQd7JLiHv5";

      const formData = new FormData();
      formData.append("file", file);

      const req = await fetch(API_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const res = await req.json();
      addUpload(res.data.id);


      if (res.meta.status == 200) {
        responseMsg.innerHTML = "File uploaded successfully!";
      }
    } else {
      responseMsg.innerHTML = "Please upload a gif file!";
    }
  };

  fileInput.addEventListener("change", (event) => {
    const files = event.target.files;
    uploadFile(files[0]);
  });
};
