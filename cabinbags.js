//Active filters
let activeFilters = [];
let cabinUseFilters = [];
let laptopFitFilters = [];
let featureFilters = [];
let ratingsFilters = [];
let weightFilters = [];

//Filtered List
let filteredResults = [];

//filteres additional information
let filteredAdditionalInfo = [];

//Load my favourite top three results ready for display
let topThreeResults = [];
 fetch('topthree.json')
  .then(response => response.json())
  .then(data => {
    topThreeResults = data;
    console.log("Top Three Results Loaded:", topThreeResults);
    loadTopThreeResults();
  })
  .catch(error => console.error("Error loading item data:", error));

//Full set of Amazon results for the items
let itemResults = [];
  fetch('cabinbags.json')
  .then(response => response.json())
  .then(data => {
    itemResults = data;
    console.log("Full List of Cabin Bags Loaded:", itemResults);
  })
  .catch(error => console.error("Error loading item data:", error));

//Additional, TB added information for each suitcase
let additionalInfo = [];
 fetch('extrainfo.json')
  .then(response => response.json())
  .then(data => {
    additionalInfo = data;
    filteredAdditionalInfo = additionalInfo;
    console.log("Additional Gear Data Loaded:", additionalInfo);
  })
 .catch(error => console.error("Error loading additional information file:", error));

//Filters to enable search options for the user
let filters = [];
fetch('filters.json')
 .then (response => response.json())
 .then(data => {
   filters = data;
   console.log("Filters Loaded...", filters);
   loadFilters();
 })
 .catch(error => console.error("Error loading filters data:", error));


//Show the filter options and assign listeners
function loadFilters()
{
 //console.log("Showing Filters...");
 const filterTab = document.getElementById("filters");
 
 //Commented out this option for now to enable the fitler options to remain in place when hiding the options
 //filterTab.innerHTML = "";
 const filterTitle = document.createElement("h2");
 filterTitle.textContent = "Filter Options";
 filterTab.appendChild(filterTitle);
 
 //tb rating Filters
 const tbRatings = document.createElement("div");
 const tbRatingsHeader = document.createElement("h3");
 tbRatingsHeader.textContent = "Travelbetter Rating";
 tbRatings.appendChild(tbRatingsHeader);

 //Cabin Use Filters
 const cabinUseOptions = document.createElement("div");
 const cabinUseOptionsHeader = document.createElement("h3");
 cabinUseOptionsHeader.textContent = "Cabin Use";
 cabinUseOptions.appendChild(cabinUseOptionsHeader);

 //Laptop Fit Filters
 const laptopFitOptions = document.createElement("div");
 const laptopFitOptionsHeader = document.createElement("h3");
 laptopFitOptionsHeader.textContent = "Laptop Size";
 laptopFitOptions.appendChild(laptopFitOptionsHeader);

 //Bag Weight Filters
 const weightOptions = document.createElement("div");
 const weightOptionsHeader = document.createElement("h3");
 weightOptionsHeader.textContent = "Bag Weight";
 weightOptions.appendChild(weightOptionsHeader);
 
 //Feature Filters
 const featureOptions = document.createElement("div");
 const featureOptionsHeader = document.createElement("h3");
 featureOptionsHeader.textContent = "Features";
 featureOptions.appendChild(featureOptionsHeader);
 

 //load the character filter buttons
 filters.filters.cabinfit.forEach(filter => {
  
  const filterButton = document.createElement("button");
    filterButton.className = "filter-btn";
    filterButton.setAttribute("data-label", filter.id);
    filterButton.innerHTML = `${filter.label}`;

   //Make the button do something when clicked
  filterButton.addEventListener("click", () => {
      filterButton.classList.toggle("active");
    
     cabinUseFilters = Array.from(document.querySelectorAll('.filter-btn.active'))
        .map(btn => btn.dataset.label);

    
   });  
  //Add character button to the character filters.
  cabinUseOptions.appendChild(filterButton);  
 });

 //load the type filter buttons
 filters.filters.laptopfit.forEach(filter => {
  
  const filterButton = document.createElement("button");
    filterButton.className = "filter-btn";
    filterButton.setAttribute("data-label", filter.id);
    filterButton.innerHTML = `${filter.label}`;

   //Make the button do something when clicked
  filterButton.addEventListener("click", () => {
      filterButton.classList.toggle("active");
    
     laptopFitFilters = Array.from(document.querySelectorAll('.filter-btn.active'))
        .map(btn => btn.dataset.label);
    
   });  
  //Add character button to the character filters.
  laptopFitOptions.appendChild(filterButton);  
 });

 //Load the TB ratings buttons
 filters.filters.tbrating.forEach(filter => {
    const filterButton = document.createElement("button");
    filterButton.className = "filter-btn";
    filterButton.setAttribute("data-label", filter.id);
    filterButton.innerHTML = `${filter.label}`;

   //Make the button do something when clicked
  filterButton.addEventListener("click", () => {
      filterButton.classList.toggle("active");
    
     ratingsFilters = Array.from(document.querySelectorAll('.filter-btn.active'))
        .map(btn => btn.dataset.label);
    
   });  
  //Add tbrating button to the filters.
  tbRatings.appendChild(filterButton);  
 });

 //load the feature filter buttons
 filters.filters.features.forEach(filter => {
  
  const filterButton = document.createElement("button");
    filterButton.className = "filter-btn";
    filterButton.setAttribute("data-label", filter.id);
    filterButton.innerHTML = `${filter.label}`;

   //Make the button do something when clicked
  filterButton.addEventListener("click", () => {
      filterButton.classList.toggle("active");
    
     featureFilters = Array.from(document.querySelectorAll('.filter-btn.active'))
        .map(btn => btn.dataset.label);

    
   });  
  //Add character button to the character filters.
  featureOptions.appendChild(filterButton);  
 });

 //load the character filter buttons
 filters.filters.weight.forEach(filter => {
  
  const filterButton = document.createElement("button");
    filterButton.className = "filter-btn";
    filterButton.setAttribute("data-label", filter.id);
    filterButton.innerHTML = `${filter.label}`;

   //Make the button do something when clicked
  filterButton.addEventListener("click", () => {
      filterButton.classList.toggle("active");
    
     weightFilters = Array.from(document.querySelectorAll('.filter-btn.active'))
        .map(btn => btn.dataset.label);

    
   });  
  //Add character button to the character filters.
  weightOptions.appendChild(filterButton);  
 });
 
 filterTab.appendChild(cabinUseOptions);
 filterTab.appendChild(laptopFitOptions);
 filterTab.appendChild(featureOptions);
 filterTab.appendChild(weightOptions);
 filterTab.appendChild(tbRatings);
 
} //End of Function Load Filters

//Function to allow users to hide the filter options
function showFilters()
{
   console.log("Showing Filters");
   document.getElementById("filters").hidden = false;
   document.getElementById("controls").hidden = false;
 
   document.getElementById("applyButton").hidden = false;
   document.getElementById("clearButton").hidden = false;
   document.getElementById("hideFilters").hidden = false;
  
}

//Function to allow users to hide the filter options
function hideFilters()
{
   console.log("Hiding Filters");
   document.getElementById("filters").hidden = true;
   document.getElementById("controls").hidden = true;
}


//Applying the filters selected one by one after the apply button is pressed.
function applyFilters()
{
  console.log("Apply Filters...");
  //Create a list each time to then filter on if the filter options have been selected
  console.log("Additional Info length "+additionalInfo.length);
 
  const cabinUseCases = additionalInfo.filter(suitcase =>
       cabinUseFilters.length === 0 || cabinUseFilters.some(match => suitcase.cabinfit.includes(match))
   );

  console.log("cabin use case length "+cabinUseCases.length);

   //Now take the results of the character cases filter and apply the type filters
   const laptopFitCases = cabinUseCases.filter(suitcase =>
      laptopFitFilters.length === 0 || laptopFitFilters.some(match => suitcase.laptopsize.includes(match))
    );

   console.log("lpatop fit length "+laptopFitCases.length);

   //Now take the results of the type filter and apply the tb ratings filters
   const tbRatingsCases = laptopFitCases.filter(suitcase =>
     ratingsFilters.length === 0 || ratingsFilters.some(match => suitcase.tbrating.includes(match))
    );
 
   console.log("ratings length "+tbRatingsCases.length);

  //Now take the results of the ratings filter and apply the feature filters
   const featureCases = tbRatingsCases.filter(suitcase =>
     featureFilters.length === 0 || featureFilters.some(match => suitcase.features.includes(match))
    );

  //Now take the results of the feature filter and apply the weight filters
   const weightCases = featureCases.filter(suitcase =>
     weightFilters.length === 0 || weightFilters.some(match => suitcase.weight.includes(match))
    );
 
   //Update the global filtered list
   filteredAdditionalInfo = weightCases;
   console.log("Filtered Additional Info Length "+filteredAdditionalInfo.length);

   if (filteredAdditionalInfo.length === 0)
   {
     results = document.getElementById("results");
     results.innerHTML = "";
     const noMatchMessage = document.createElement("p");
     noMatchMessage.className = "nomatch";
     noMatchMessage.textContent = "No Matches Found - reset filters";
     results.appendChild(noMatchMessage);
     hideFilters();
   }
   else
   {
     loadFilteredResults();
     //hideFilters();
   }
    
}



//Refresh the results based on the latest set of filters selected
function loadFilteredResults()
{
  console.log("Load Filtered Results...");
   results = document.getElementById("results");
  results.innerHTML = "";

 
  
  //lookup a match in the main file and then create the card and append to the results
  filteredResults = itemResults.ItemsResult.Items.filter(item =>
    filteredAdditionalInfo.length === 0 || filteredAdditionalInfo.some(match => item.ASIN.includes(match.ASIN))
  );

 
 
  filteredResults.forEach(item => {
    const gearCard = document.createElement("div");
     gearCard.className = "gearCard";
   // const asin = document.createElement("p");
  //  asin.className = "product-info";
 //   asin.textContent = item.ASIN;
  //  gearCard.appendChild(asin);

    //Load image
    const itemImage = document.createElement("img");
    itemImage.className = "product-image"; 
    itemImage.src = item.Images.Primary.Large.URL;
    gearCard.appendChild(itemImage);

   //Create Product Title
    const productTitle = document.createElement("h2");
    productTitle.className = "product-info";
    productTitle.textContent = item.ItemInfo.Title.DisplayValue;
    gearCard.appendChild(productTitle);
   
   //Create Buy it link for button button
    const buyItLink = document.createElement("a");   
    buyItLink.href = item.DetailPageURL;
    buyItLink.target = "_blank";

     //Create the buy it button
     const buyItButton = document.createElement("button");
     buyItButton.className = "buyit-button";
     buyItButton.textContent = "Buy From Amazon UK";
     //Append the Buy It Button to the Link
     buyItLink.appendChild(buyItButton);
     //Add the Link to the gearCard
     gearCard.appendChild(buyItLink);
   
     const price = document.createElement("p");
     price.className = "product-info";
     price.textContent = "Indicative Price* "+item.Offers.Listings[0].Price.DisplayAmount;
     gearCard.appendChild(price);
  
     //Add additional information, if found
     additionalInfo.forEach(entry => {
       const asinLookup = entry.ASIN;
       
       if (asinLookup == item.ASIN)
       {
         //console.log("***Match Found***");
         const infoHeader = document.createElement("h4");
         infoHeader.textContent = "Cabin Bag Weight";
         //infoHeader.className = "product-info";
         gearCard.appendChild(infoHeader);
         const weight = document.createElement("p");
         //weight.className = "product-info";
         weight.textContent = entry.weight+"kg";
         gearCard.appendChild(weight);
         const bagFeatureTitle = document.createElement("h4");
         bagFeatureTitle.textContent = "Cabin Bag Features:";
         gearCard.appendChild(bagFeatureTitle);
         //loop through and add features to results
         const bagFeatures = entry.features;
         bagFeatures.forEach(id => {
           //Test working through the filters
          filters.filters.features.forEach(feat => {
          console.log("Feature "+feat.label);
              if (id == feat.id)
              {
                 const featureItem = document.createElement("p");
                 featureItem.textContent = feat.label;
                 gearCard.appendChild(featureItem);
              }
           
           });
           
         });
 
        
        
         const notesHeader = document.createElement("h4");
         notesHeader.textContent = "Additional Information";
         gearCard.appendChild(notesHeader);
         const notes = document.createElement("p");
         notes.textContent = entry.notes;
         gearCard.appendChild(notes);
       }
       else
       {
        // console.log("No Match Found");
       }
       
     });
     
     results.appendChild(gearCard);
   });
  hideFilters();
  scrollToResults();
} //End of apply filters function

//Clear all filters and reload all results
function clearFilters()
{
  console.log("clear Filters...");
  document.querySelectorAll('.filter-btn.active').forEach(btn => {
        btn.classList.remove('active');
        
      });
 
        characterFilters = [];
        typeFilters = [];
        ratingsFilters = [];
        filteredAdditionalInfo = additionalInfo;
        loadFilteredResults();
        //hideFilters();
}

//Return the top three results as selected by Travelbetter
function loadTopThreeResults()
{
  console.log("Load Top Three Results...");
   results = document.getElementById("results");
  results.innerHTML = "";

  topThreeResults.ItemsResult.Items.forEach(item => {
    const gearCard = document.createElement("div");
     gearCard.className = "gearCard";
    const asin = document.createElement("p");
    asin.className = "product-info";
    asin.textContent = item.ASIN;
    gearCard.appendChild(asin);
    const itemImage = document.createElement("img");
    itemImage.className = "product-image"; 
       itemImage.src = item.Images.Primary.Large.URL;
       gearCard.appendChild(itemImage);
    const buyItLink = document.createElement("a");
     //buyItLink.className = "product-info";
     buyItLink.href = item.DetailPageURL;
     buyItLink.target = "_blank";
     //buyItLink.textContent = "Buy It Now";
     const buyItButton = document.createElement("button");
     buyItButton.className = "buyit-button";
     buyItButton.textContent = "Buy It Now";
     buyItLink.appendChild(buyItButton);
     gearCard.appendChild(buyItLink);
     const price = document.createElement("p");
     price.className = "product-info";
     price.textContent = "Price "+item.Offers.Listings[0].Price.DisplayAmount;
     gearCard.appendChild(price);
  
     //Add additional information, if found
     additionalInfo.forEach(entry => {
       const asinLookup = entry.ASIN;
       
       if (asinLookup == item.ASIN)
       {
         
         const infoHeader = document.createElement("h2");
         infoHeader.textContent = "Additional Information";
         infoHeader.className = "product-info";
         gearCard.appendChild(infoHeader);
         const notes = document.createElement("p");
         notes.className = "product-info";
         notes.textContent = entry.notes;
         gearCard.appendChild(notes);
       }
       else
       {
         //console.log("No Match Found");
       }
       
     });
     
     results.appendChild(gearCard);
   });
  scrollToResults();
} //End of load top three choices

function scrollToResults() {
    const resultsContainer = document.getElementById("results");
    if (resultsContainer) {
        resultsContainer.scrollIntoView({
            behavior: "smooth", // smooth scrolling
            block: "start"      // align to top
        });
    }
}


//Return all results in the main items list (show all)
function getGear()
{
  console.log("Get Gear...");
  

  results = document.getElementById("results");
  results.innerHTML = "";
  //Call to clear all filters (in that function it will call load filters with no filters)
  clearFilters();

}
