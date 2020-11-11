export function record(state, action) {
    switch (action.type) {
      case "RECORD_CASE":
        return { ...state, record: action.payload };
      case "PODIUM_CASE":
        return { ...state, podium: action.payload };
      default:
        return state;
    }
  }