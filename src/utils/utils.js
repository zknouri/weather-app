import { BEAUFORT_WIND_SCALE } from "../lib/constants";

export function getWindIconSlug(windDegree) {
  if (
    (windDegree >= 0 && windDegree <= 23) ||
    (windDegree >= 337 && windDegree <= 360)
  ) {
    return {direction: 'N', slug:"wind-direction-n"};
  } else if (windDegree >= 24 && windDegree <= 68) {
    return {direction: 'NE', slug:"wind-direction-ne"};
  } else if (windDegree >= 69 && windDegree <= 113) {
    return {direction: 'E', slug:"wind-direction-e"};
  } else if (windDegree >= 114 && windDegree <= 158) {
    return {direction: 'SE', slug:"wind-direction-se"};
  } else if (windDegree >= 159 && windDegree <= 203) {
    return {direction: 'S', slug:"wind-direction-s"};
  } else if (windDegree >= 204 && windDegree <= 248) {
    return {direction: 'SW', slug:"wind-direction-sw"};
  } else if (windDegree >= 249 && windDegree <= 293) {
    return {direction: 'W', slug:"wind-direction-w"};
  } else if (windDegree >= 294 && windDegree <= 336) {
    return {direction: 'NW', slug:"wind-direction-nw"};
  }
}

export function getBeaufortWindScale(windSpeed){
  if(windSpeed < 2) {
    return BEAUFORT_WIND_SCALE[0];
  } else if(windSpeed >= 2 && windSpeed < 6) {
    return BEAUFORT_WIND_SCALE[1];
  } else if(windSpeed >= 6 && windSpeed < 12) {
    return BEAUFORT_WIND_SCALE[2];
  } else if(windSpeed >= 12 && windSpeed < 20) {
    return BEAUFORT_WIND_SCALE[3];
  } else if(windSpeed >= 20 && windSpeed < 29) {
    return BEAUFORT_WIND_SCALE[4];
  } else if(windSpeed >= 29 && windSpeed < 39) {
    return BEAUFORT_WIND_SCALE[5];
  } else if(windSpeed >= 39 && windSpeed < 50) {
    return BEAUFORT_WIND_SCALE[6];
  } else if(windSpeed >= 50 && windSpeed < 62) {
    return BEAUFORT_WIND_SCALE[7];
  } else if(windSpeed >= 62 && windSpeed < 75) {
    return BEAUFORT_WIND_SCALE[8];
  } else if(windSpeed >= 75 && windSpeed < 89) {
    return BEAUFORT_WIND_SCALE[9];
  } else if(windSpeed >= 89 && windSpeed < 103) {
    return BEAUFORT_WIND_SCALE[10];
  } else if(windSpeed >= 103 && windSpeed < 118) {
    return BEAUFORT_WIND_SCALE[11];
  } else if(windSpeed >= 118) {
    return BEAUFORT_WIND_SCALE[12];
  }
}