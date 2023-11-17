import { Callback } from "./Callback"

export interface Events {
  on: (eventName: string, callback: Callback) => void;
  trigger: (eventName: string) => void;
}