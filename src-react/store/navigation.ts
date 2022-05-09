export default function reducer (
  state: NavState = { current: Page.home, stack: [] },
  { type, current }: NavAction
): NavState {
  switch (type) {
    case NavType.push:
      return {
        current,
        stack: [
          ...state.stack,
          state.current
        ]
      };
    case NavType.pop:
      return {
        current: state.stack[state.stack.length - 1],
        stack: [...state.stack.slice(0, state.stack.length - 1)]
      };
    default:
      return state;
  }
}
