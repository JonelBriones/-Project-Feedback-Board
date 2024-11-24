export interface FeedbackFormState<T> {
  zodErrors?: StringMap;
  successMsg?: string;
  data?: T;
}

export interface StringMap {
  [key: string]: string;
}
export interface stringToBooleanMap {
  [key: string]: boolean;
}
