var imagesList = [];
var resultList = document.querySelector(".images-list");
var urlInput = document.querySelector("input[id=searchInput]");

apiCallBack = function (xhr, callback) {
  if (xhr.readyState == XMLHttpRequest.DONE) {
    if (xhr.status != 200) {
      let message = xhr.status + ":" + xhr.statusText + ":" + xhr.responseText;
      alert(message);
      throw "API call returned bad code: " + xhr.status;
    }
    let response = xhr.responseText ? JSON.parse(xhr.responseText) : null;
    if (callback) {
      callback(response);
    }
  }
};

/* Build the image container */
async function buildImageContainer(imgData) {
  var imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  imgContainer.innerHTML = `<img src="${imgData.imageUrl}" alt="${imgData.alt}" id="mainImage">
						                  <div class="image-info">
						                    <div class="image-actions">
                                    <button id="downloadButton">
                                      <i class="fa fa-download"></i> Download 
                                    </button>

							                    <button id="copyButton">
                                    <i class="fa fa-chain"></i> Copy link
                                  </button>
                                </div>
                              </div>`;
  return imgContainer;
}

/* Appends all image container to DOM */
function updateImageContainer(images) {
  resultList.innerHTML = "";
  for (var i = 0; i < images.length; i++) {
    buildImageContainer(images[i]).then((imgContainer) => {
      resultList.appendChild(imgContainer);
    });
  }
  document.getElementById("loader-body").classList.add('hidden');
  
}

/* Filters the images list based on selected tab */
function filterTabsImageList(tabId) {
  var filteredImageList = [];
  switch (tabId) {
    case "1":
      filteredImageList = imagesList["imageURLs"].reduce(
        (accumulator, currentValue) => {
          const isDuplicate = accumulator.some(
            (obj) => obj["imageUrl"] === currentValue["imageUrl"]
          );
          if (!isDuplicate) {
            accumulator.push(currentValue);
          }
          return accumulator;
        },
        []
      );
      updateImageContainer(filteredImageList);
      break;

    case "2":
      filteredImageList = imagesList["imageURLs"].reduce(
        (accumulator, currentValue) => {
          const isDuplicate = accumulator.some(
            (obj) =>
              obj["imageUrl"] === currentValue["imageUrl"] ||
              currentValue["srcPageUrl"] !== imagesList["url"]
          );
          if (!isDuplicate) {
            accumulator.push(currentValue);
          }
          return accumulator;
        },
        []
      );
      updateImageContainer(filteredImageList);
      break;

    case "3":
      filteredImageList = imagesList["imageURLs"].reduce(
        (accumulator, currentValue) => {
          const isDuplicate = accumulator.some(
            (obj) =>
              obj["imageUrl"] === currentValue["imageUrl"] ||
              currentValue["srcPageUrl"] === imagesList["url"]
          );
          if (!isDuplicate) {
            accumulator.push(currentValue);
          }
          return accumulator;
        },
        []
      );
      updateImageContainer(filteredImageList);
      break;

    case "4":
      filteredImageList = imagesList['logoURLs']?.reduce((accumulator, currentValue) => {
        const isDuplicate = accumulator.some(obj => obj['imageUrl'] === currentValue['imageUrl']);
          if (!isDuplicate) {
                      accumulator.push(currentValue);
                  }
         return accumulator;
        }, []);
        updateImageContainer(filteredImageList);
  }
}

/* Handle URL response */
function updateList(response) {
  if (response.status === "FINISHED") {
    imagesList = response;
    // filter imageList results for All Images tab
    filterTabsImageList("1");
  } else {
    var errorContainer = document.getElementById("searchError");
    errorContainer.classList.remove("hidden");
  }
  document.getElementById("loader-body").classList.add('hidden');
}

makeApiCall = function (url, method, obj, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onreadystatechange = apiCallBack.bind(null, xhr, callback);
  xhr.send(
    obj
      ? obj instanceof FormData || obj.constructor == String
        ? obj
        : JSON.stringify(obj)
      : null
  );
};

/* URL validator */
function isURLValid(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/* To perform actions on click of search button */
document
  .querySelector(".search-container button")
  .addEventListener("click", function (event) {
    //Handle search error container
    var errorContainer = document.getElementById("searchError");
    if (!errorContainer.classList.contains("hidden")) {
      errorContainer.classList.add("hidden");
    }

    document.getElementById("secondaryContainer").classList.remove('hidden');
    document.getElementById("loader-body").classList.remove('hidden');
    event.preventDefault();
    makeApiCall("/main?url=" + urlInput.value, "POST", null, updateList);
  });

/* Handle input box URL validation */
document.getElementById("searchInput").addEventListener("input", function () {
  const inputURL = this.value;
  const searchButton = document.getElementById("searchButton");
  if (isURLValid(inputURL)) {
    searchButton.disabled = false;
  } else searchButton.disabled = true;
});


/* Tabs update */
function setActiveTab(selectedTab) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });
  selectedTab.classList.add("active");
  document.getElementById("loader-body").classList.remove('hidden');
  filterTabsImageList(selectedTab.id);
}

/* image download and copy url operations */
document.querySelector(".images-list").addEventListener("click", function (event) {
  if (event.target && event.target.matches("#downloadButton, #downloadButton *")) {
    const mainImage = event.target.closest(".image-container").querySelector("#mainImage");
    const url = mainImage.src;
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const a = document.createElement("a");
        const objectURL = URL.createObjectURL(blob);
        a.href = objectURL;
        a.download = "download";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(objectURL);
      })
      .catch((err) => {
        alert("Error downloading image");
        console.error("Error fetching the image:", err);
      });
  }

  if (event.target && event.target.matches("#copyButton, #copyButton *")) {
    const mainImage = event.target.closest(".image-container").querySelector("#mainImage");
    const imageUrl = mainImage.src;
    navigator.clipboard
      .writeText(imageUrl)
      .then(() => {
        alert("Image URL copied to clipboard");
      })
      .catch((err) => {
        alert("Error copying to clipboard");
        console.error("Error copying to clipboard: ", err);
      });
  }
});