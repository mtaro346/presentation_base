export interface Slide {
  id: string;
  content: React.ReactNode;
}

export interface SlideNavigationState {
  currentSlideIndex: number;
  totalSlides: number;
}

export interface SlideControlProps {
  onNext: () => void;
  onPrev: () => void;
  onJump: (index: number) => void;
  currentSlideIndex: number;
  totalSlides: number;
} 