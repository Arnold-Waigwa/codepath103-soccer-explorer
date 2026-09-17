const data = await fetch("/pitches");
const pitches = await data.json();

const pitchCollection = document.querySelector("#pitch-collection");

const pitchUnorderedList = document.createElement("ul");

const populatePitch = (pitch) => {
  const pitchItem = document.createElement("li");
  pitchItem.textContent = pitch.name;
  return pitchItem;
};

pitches.forEach((p) => pitchUnorderedList.appendChild(populatePitch(p)));
pitchCollection.appendChild(pitchUnorderedList);
