let uploads = JSON.parse(localStorage.getItem('uploads')) || [];

export const addUpload = (uploadId) => {
  if (uploads.find(id => id === uploadId)) {
    // Gif has already been added to uploads
    return;
  }

  uploads.push(uploadId);
  localStorage.setItem('uploads', JSON.stringify(uploads));
};

export const removeUpload = (uploadId) => {
  uploads = uploads.filter(id => id !== uploadId);
  localStorage.setItem('uploads', JSON.stringify(uploads));
};

export const getUploads = () => [...uploads];
