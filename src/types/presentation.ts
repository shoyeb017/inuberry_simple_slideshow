export interface Slide {
  id: number;
  image: string;
}

export interface Presentation {
  id: string;
  title: string;
  folder: string;
  thumbnail: string;
  slides: Slide[];
}

export interface ViewerState {
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
  zoom: number;
}