import { uniJSON } from "./OpenDay";
import { mainContent } from "../index.js";
import { popUp } from "./pop-up";

let resArray = [];

for (let i = 0; i < uniJSON.topics[3].programs.length; i++) {
  const newEntry = {
    id: uniJSON.topics[3].programs[i].id,
    title: uniJSON.topics[3].programs[i].title,
    start_time: uniJSON.topics[3].programs[i].start_time.slice(10),
    end_time: uniJSON.topics[3].programs[i].end_time.slice(10),
    description_short: uniJSON.topics[3].programs[i].description_short,
    image: uniJSON.topics[3].programs[i].location.cover_image,
    description_long: uniJSON.topics[3].programs[i].description,
    address: uniJSON.topics[3].programs[i].location.address,
    postcode: uniJSON.topics[3].programs[i].location.postcode,
    website: uniJSON.topics[3].programs[i].location.website,
    room: uniJSON.topics[3].programs[i].room,
  };
  resArray.push(newEntry);
}

//sort general array a-z
resArray.sort((a, b) => a.title.localeCompare(b.title));

//page display
const resSort = () => {
  console.log("residential button clicked");
  mainContent.innerHTML = "";

  let resList = document.createElement("div");
  resList.classList.add("a-z-div");

  //Set heading (h3)
  let resTitle = document.createElement("h3");
  resTitle.innerHTML = "Residences events";
  resList.appendChild(resTitle);

  resArray.forEach((newEntry, k) => {
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
    viewButton.addEventListener("click", function () {
      popUp(newEntry);
    });

    entryDiv.appendChild(viewButton);
    resList.appendChild(entryDiv);
  });

  //append to main content
  mainContent.appendChild(resList);
};

export { resSort, resArray };
