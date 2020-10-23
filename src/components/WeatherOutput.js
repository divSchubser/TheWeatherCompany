import { createElement } from "../utils/elements";
import "./weatherOutput.css";

export default function createWeatherOutput(weatherObj, outputContainer) {
  // console.log(weatherObj);

  const weatherToday = weatherObj.consolidated_weather[0];

  const roboFace = createElement("img", {
    className: "roboFace",
    src: "https://robohash.org/WasfuereinRobo.png?set=set1",
    alt: "Robo-Face",
  });

  const location = createElement("h2", {
    className: "locationName",
    innerText: weatherObj.title,
  });

  const cardBody = createElement("div", {
    className: "card-body",
    children: [
      location,
      createElement("h5", {
        className: "card-title",
        innerText: "Temperatur",
      }),
      createElement("p", {
        className: "card-text",
        innerText: `${Math.round(weatherToday.the_temp)} °C`,
      }),
      createElement("img", {
        className: "card-image",
        src: `https://www.metaweather.com/static/img/weather/${weatherToday.weather_state_abbr}.svg`,
      }),
    ],
  });

  const card = createElement("div", {
    className: "card",
    children: [cardBody],
  });
  outputContainer.innerHTML = "";
  outputContainer.append(roboFace, card);
  // const outputContainer = createElement("div", {
  //   className: "outputContainer",
  //   children: [location, card],
  // });

  return outputContainer;
}
