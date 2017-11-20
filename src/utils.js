function isStartLessThanEnd(start, end) {
  return start < end;
}

function isInRange24(time) {
  return time >= 0 && time <= 24;
}

function isInRange60(time) {
  return time >= 0 && time <= 60;
}

function isPossibleTime(time) {
  let isValidTime = true;
  if ((time[0] === 24 && time[1] > 0) || time[2] > 0) {
    isValidTime = false;
  }
  return isValidTime;
}

export function validateTime(val) {
  if (!isInRange24(val[0])) {
    return "please enter a value between 1 and 24";
  }
  if (!isInRange60(val[1]) || !isInRange60(val[2])) {
    return "please enter a value between 1 and 59";
  }
  if (!isPossibleTime(val)) {
    return "please enter a valid time";
  }
  return true;
}

function getCountdown(start, end) {
  return end - start;
}
