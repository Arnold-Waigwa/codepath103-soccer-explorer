import "@picocss/pico/css/pico.min.css";
import "./style.css";

const pitchCollection = document.querySelector(".pitch-collection");
const form = document.querySelector("form");
const searchInput = form.querySelector("input");
const searchStatus = document.querySelector(".search-status");
let pitches = [];

const renderPitches = (visiblePitches) => {
  const list = document.createElement("ul");

  visiblePitches.forEach((pitch) => {
    const item = document.createElement("li");
    const pitchDetailContainer = document.createElement("div");
    pitchDetailContainer.className = "pitch-item";

    const image = document.createElement("img");
    image.src = pitch.image_url;
    image.alt = `Illustrative soccer venue photo for ${pitch.name}`;

    const name = document.createElement("a");
    name.textContent = pitch.name;
    name.href = `/pitch.html?id=${pitch.id}`;

    const rate = document.createElement("small");
    rate.textContent = `Sample rate: $${pitch.hourly_rate}/hour`;

    const audience = document.createElement("small");
    audience.textContent = pitch.audience;

    pitchDetailContainer.append(image, name, rate, audience);
    item.append(pitchDetailContainer);
    list.append(item);
  });

  pitchCollection.replaceChildren(list);
  if (visiblePitches.length === 0) {
    searchStatus.textContent = "No pitches found.";
  } else {
    searchStatus.textContent = "Results: " + visiblePitches.length;
  }
};

const renderFilteredPitches = () => {
  const query = searchInput.value.trim().toLowerCase();
  const filteredPitches = pitches.filter((pitch) => {
    // Combine the fields into one string, then check for the search text.
    const text = pitch.name + " " + pitch.description + " " + pitch.audience;
    return text.toLowerCase().includes(query);
  });

  renderPitches(filteredPitches);
};

const loadPitches = async () => {
  searchInput.disabled = true;
  searchStatus.textContent = "Loading pitches...";

  try {
    const response = await fetch("/pitches");
    if (!response.ok) {
      throw new Error("Could not load pitches");
    }

    pitches = await response.json();
    searchInput.disabled = false;
    renderFilteredPitches();
  } catch (error) {
    console.error("Error fetching pitches", error);
    searchStatus.textContent =
      "Could not load pitches. Please refresh to try again.";
  }
};

searchInput.addEventListener("input", renderFilteredPitches);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderFilteredPitches();
});

loadPitches();
