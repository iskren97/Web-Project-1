const uploads = JSON.parse(localStorage.getItem('uploads')) || [];

/**
 * Add the uploaded gif id to localStorage.
 * @param {String} uploadId The id of the gif.
 */
export const addUpload = (uploadId) => {
  if (uploads.find((id) => id === uploadId)) {
    // Gif has already been added to uploads
    return;
  }
  uploads.push(uploadId);
  localStorage.setItem('uploads', JSON.stringify(uploads));
};


/**
 * @return {Array} Array of all gifs in uploads.
 */
export const getUploads = () => [...uploads];
