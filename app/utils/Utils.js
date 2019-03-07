import morningBg from "../assets/morning.jpg";
import afternoonBg from "../assets/afternoon.jpg";
import eveningBg from "../assets/evening.jpg";
import nightBg from "../assets/night.png";

export function GetGreetingTime(m) {
  var g = null; //return g

  if (!m || !m.isValid()) {
    return;
  } //if we can't find a valid or filled moment, we return.

  var split_afternoon = 12; //24hr time to split the afternoon
  var split_evening = 17; //24hr time to split the evening
  var split_night = 21;
  var currentHour = parseFloat(m.format("HH"));

  if (currentHour >= split_afternoon && currentHour < split_evening) {
    g = afternoonBg;
  } else if (currentHour >= split_evening && currentHour < split_night) {
    g = eveningBg;
  } else if (currentHour >= split_night && currentHour <= 24) {
    g = nightBg;
  } else {
    g = morningBg;
  }

  return g;
}
