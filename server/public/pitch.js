const mainContainer = document.querySelector("main.container");
const params = new URLSearchParams(window.location.search);
const pitchId = Number(params.get("id"));

function showMessage(message) {
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  const backLink = document.createElement("a");
  backLink.href = "/";
  backLink.textContent = "← All pitches";
  mainContainer.replaceChildren(paragraph, backLink);
}

function renderPitch(pitch) {
  document.title = `${pitch.name} | Soccer Explorer`;

  const article = document.createElement("article");
  article.className = "pitch-detail";

  const image = document.createElement("img");
  image.src = pitch.image_url;
  image.alt = `Illustrative soccer venue photo for ${pitch.name}`;
  image.className = "pitch-image";

  const title = document.createElement("h2");
  title.textContent = pitch.name;

  const description = document.createElement("p");
  description.textContent = pitch.description;

  const details = document.createElement("dl");
  for (const [label, value] of [
    ["Sample hourly rate", `$${pitch.hourly_rate}/hour`],
    ["Best for", pitch.audience],
    ["Submitted by", pitch.submitted_by],
    ["Submitted on", new Date(pitch.submitted_on).toLocaleDateString()],
  ]) {
    const term = document.createElement("dt");
    term.textContent = label;
    const definition = document.createElement("dd");
    definition.textContent = value;
    details.append(term, definition);
  }

  const backLink = document.createElement("a");
  backLink.href = "/";
  backLink.textContent = "← All pitches";

  article.append(image, title, description, details);
  mainContainer.replaceChildren(backLink, article);
}

async function loadPitch() {
  if (!Number.isInteger(pitchId) || pitchId < 1) {
    showMessage("Pitch not found. Return to the list to choose a venue.");
    return;
  }

  try {
    const response = await fetch(`/pitches/${pitchId}`);
    if (response.status === 404) {
      showMessage("Pitch not found. Return to the list to choose a venue.");
      return;
    }
    if (!response.ok) {
      throw new Error(`Could not load pitch: ${response.status}`);
    }
    const pitch = await response.json();
    if (pitch) renderPitch(pitch);
    else showMessage("Pitch not found. Return to the list to choose a venue.");
  } catch (error) {
    console.error("Error fetching pitches", error);
    showMessage("Could not load this pitch. Please try again later.");
  }
}

loadPitch();
