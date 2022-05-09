declare type NavState = {
  current: Page;
  stack: Page[];
};

declare const enum Page {
  home
}

declare type NavAction = {
  type: NavType;
  current: Page;
};

declare const enum NavType {
  push,
  pop
}
