import "@picocss/pico/css/pico.min.css";
import "./style.css";

const data = await fetch("/pitches");
const pitches = await data.json();

const pitchCollection = document.querySelector(".pitch-collection");

const pitchUnorderedList = document.createElement("ul");

const populatePitch = (pitch) => {
  const pitchItem = document.createElement("li");
  pitchItem.innerHTML = `<div class=pitch-item>
      <img src="${pitch.image_url}" alt="Illustrative soccer venue photo for ${pitch.name}" loading="lazy" />
      <a href="/pitch.html?id=${pitch.id}">${pitch.name} </a>
      <small>Sample rate: $${pitch.hourly_rate}/hour</small>
  </div>`;
  return pitchItem;
};

pitches.forEach((p) => pitchUnorderedList.appendChild(populatePitch(p)));
pitchCollection.appendChild(pitchUnorderedList);
