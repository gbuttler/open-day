import { uniJSON } from "./OpenDay.js";
import { mainContent } from "../index.js";

//create array containing only data we want for this page
let aToZArray = [];

for (let i = 0; i < uniJSON.topics.length; i++) {
  for (let j = 0; j < uniJSON.topics[i].programs.length; j++) {
    const newEntry = {
      id: uniJSON.topics[i].programs[j].id,
      title: uniJSON.topics[i].programs[j].title,
      start_time: uniJSON.topics[i].programs[j].start_time.slice(10),
      end_time: uniJSON.topics[i].programs[j].end_time.slice(10),
      description_short: uniJSON.topics[i].programs[j].description_short,
    };
    aToZArray.push(newEntry);
  }
}

//sort array
aToZArray.sort((a, b) => a.title.localeCompare(b.title));

//page display
const aToZSort = () => {
  console.log("a-z button clicked");
  mainContent.innerHTML = "";

  let aToZList = document.createElement("div");
  aToZList.classList.add("a-z-div");

  //Set heading (h3)
  let aToZTitle = document.createElement("h3");
  aToZTitle.innerHTML = "A to Z of events";
  aToZList.appendChild(aToZTitle);

  aToZArray.forEach((newEntry, k) => {
    let entryDiv = document.createElement("div");
    entryDiv.classList.add("indiv-entry-div");

    //text div
    let entryText = document.createElement("div");
    entryText.classList.add("entry-text");
    entryDiv.appendChild(entryText);

    //title
    let title = document.createElement("p");
    title.innerHTML = newEntry.title;
    title.classList.add("entry-title");
    entryText.appendChild(title);

    //desc
    let shortDesc = document.createElement("p");
    shortDesc.classList.add("entry-desc-short");
    shortDesc.innerHTML = newEntry.description_short;
    entryText.appendChild(shortDesc);

    //start
    let divStart = document.createElement("div");
    divStart.classList.add("entry-start");
    let tStart = document.createElement("h4");
    tStart.innerHTML = "Start:  ";
    let pStart = document.createElement("p");
    pStart.innerHTML = newEntry.start_time;
    divStart.appendChild(tStart);
    divStart.appendChild(pStart);
    entryDiv.appendChild(divStart);

    //end
    let divEnd = document.createElement("div");
    divEnd.classList.add("entry-end");
    let tEnd = document.createElement("h4");
    tEnd.innerHTML = "End:  ";
    let pEnd = document.createElement("p");
    pEnd.innerHTML = newEntry.end_time;
    divEnd.appendChild(tEnd);
    divEnd.appendChild(pEnd);
    entryDiv.appendChild(divEnd);

    //view button
    let viewButton = document.createElement("button");
    viewButton.classList.add("view-button");
    viewButton.innerHTML = "View";
    entryDiv.appendChild(viewButton);
    aToZList.appendChild(entryDiv);
  });

  //append to main content
  mainContent.appendChild(aToZList);
};

export { aToZSort, aToZArray };
