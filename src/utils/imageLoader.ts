export const loadImages = () => {
  const images = import.meta.glob(
    "../assets/presentations/**/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      import: "default",
    }
  );

  return images;
};