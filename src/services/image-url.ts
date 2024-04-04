const getCroppedImageURL = (url: string) => {
  if (!url) return "https://fakeimg.pl/600x400?text=Image+not+found";
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageURL;
