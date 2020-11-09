export function record(state, action) {
    switch (action.type) {
      case "RECORD_CASE":
        return { ...state, record: action.payload };
      default:
        return state;
    }
  }
