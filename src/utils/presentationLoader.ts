import type { Presentation, Slide } from "../types/presentation";
import { loadImages } from "./imageLoader";

export const getPresentations = (): Presentation[] => {
  const images = loadImages();

  const presentations: Record<string, Slide[]> = {};

  Object.entries(images).forEach(([path, image]) => {
    const parts = path.split("/");

    const folderName = parts[parts.length - 2];

    if (!presentations[folderName]) {
      presentations[folderName] = [];
    }

    presentations[folderName].push({
      id: presentations[folderName].length + 1,
      image: image as string,
    });
  });


  return Object.keys(presentations).map((folder) => {
    const slides = presentations[folder].sort((a, b) => {
      return a.id - b.id;
    });

    return {
      id: folder,
      title: folder,
      folder,
      thumbnail: slides[0]?.image || "",
      slides,
    };
  });
};