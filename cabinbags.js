//Active filters
let activeFilters = [];
let cabinUseFilters = [];
let laptopFitFilters = [];
let featureFilters = [];
let ratingsFilters = [];
let weightFilters = [];
let message = "";

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
   console.log("Filters Loaded:", filters);
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
 /*
 const tbRatings = document.createElement("div");
 const tbRatingsHeader = document.createElement("h3");
 tbRatingsHeader.textContent = "Travelbetter Rating";
 tbRatings.appendChild(tbRatingsHeader);*/

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
  
  const filterCabinUseButton = document.createElement("button");
    filterCabinUseButton.className = "filter-cabin-btn";
    filterCabinUseButton.setAttribute("data-label", filter.id);
    filterCabinUseButton.innerHTML = `${filter.label}`;

   //Make the button do something when clicked
  filterCabinUseButton.addEventListener("click", () => {
      filterCabinUseButton.classList.toggle("active");
    
     cabinUseFilters = Array.from(document.querySelectorAll('.filter-cabin-btn.active'))
        .map(btn => btn.dataset.label);

     //Temporary Check to see what options have been picked
      cabinUseFilters.forEach(item => {
       console.log("Active Cabin Use "+item);
      });
    
   });  
  //Add character button to the character filters.
  cabinUseOptions.appendChild(filterCabinUseButton);  
 });

 //load the type filter buttons
 filters.filters.laptopfit.forEach(filter => {
  
  const filterLaptopButton = document.createElement("button");
    filterLaptopButton.className = "filter-laptop-btn";
    filterLaptopButton.setAttribute("data-label", filter.id);
    filterLaptopButton.innerHTML = `${filter.label}`;

   //Make the button do something when clicked
  filterLaptopButton.addEventListener("click", () => {
      filterLaptopButton.classList.toggle("active");
    
     laptopFitFilters = Array.from(document.querySelectorAll('.filter-laptop-btn.active'))
        .map(btn => btn.dataset.label);

     //Temporary Check to see what options have been picked
      laptopFitFilters.forEach(item => {
       console.log("Active Laptop Fit "+item);
      });
   
   });  
  //Add character button to the character filters.
  laptopFitOptions.appendChild(filterLaptopButton);  
 });

 //Load the TB ratings buttons
/* filters.filters.tbrating.forEach(filter => {
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
 });*/

 //load the feature filter buttons
 filters.filters.features.forEach(filter => {
  
  const filterFeatureButton = document.createElement("button");
    filterFeatureButton.className = "filter-feature-btn";
    filterFeatureButton.setAttribute("data-label", filter.id);
    filterFeatureButton.innerHTML = `${filter.label}`;

   //Make the button do something when clicked
  filterFeatureButton.addEventListener("click", () => {
      filterFeatureButton.classList.toggle("active");
    
     featureFilters = Array.from(document.querySelectorAll('.filter-feature-btn.active'))
        .map(btn => btn.dataset.label);

      //Temporary Check to see what options have been picked
      featureFilters.forEach(item => {
       console.log("Active Feature "+item);
      });
   
   });  
  //Add character button to the character filters.
  featureOptions.appendChild(filterFeatureButton);  
 });

 //load the character filter buttons
 filters.filters.weight.forEach(filter => {
  
  const filterWeightButton = document.createElement("button");
    filterWeightButton.className = "filter-weight-btn";
    filterWeightButton.setAttribute("data-label", filter.id);
    filterWeightButton.innerHTML = `${filter.label}`;

   //Make the button do something when clicked
  filterWeightButton.addEventListener("click", () => {
      filterWeightButton.classList.toggle("active");
    
     weightFilters = Array.from(document.querySelectorAll('.filter-weight-btn.active'))
        .map(btn => btn.dataset.label);

     //Temporary Check to see what options have been picked
      weightFilters.forEach(item => {
       console.log("Weight Filter Selected "+item);
      });
   });  
  //Add character button to the character filters.
  weightOptions.appendChild(filterWeightButton);  
 });
 
 filterTab.appendChild(cabinUseOptions);
 filterTab.appendChild(laptopFitOptions);
 filterTab.appendChild(featureOptions);
 filterTab.appendChild(weightOptions);
 //filterTab.appendChild(tbRatings);
 
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

   const filterContainer = document.getElementById("filters");
    if (filterContainer) {
        filterContainer.scrollIntoView({
            behavior: "smooth", // smooth scrolling
            block: "start"      // align to top
        });
    }
  
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
       cabinUseFilters.length === 0 || cabinUseFilters.every(match => suitcase.cabinfit.includes(match))
   );

  //Temporary Check On Filter Results
  cabinUseCases.forEach(item => {
   console.log("Cabin Use Results"+item.ASIN);
  });
   
  console.log("cabin use case length "+cabinUseCases.length);

   //Now take the results of the character cases filter and apply the type filters
   const laptopFitCases = cabinUseCases.filter(suitcase =>
      laptopFitFilters.length === 0 || laptopFitFilters.every(match => suitcase.laptopsize.includes(match))
    );
 
     //Temporary Check On Filter Results
    laptopFitCases.forEach(item => {
   console.log("Laptop Fit Results"+item.ASIN);
  });

   console.log("lpatop fit length "+laptopFitCases.length);

   //Now take the results of the type filter and apply the tb ratings filters
   const tbRatingsCases = laptopFitCases.filter(suitcase =>
     ratingsFilters.length === 0 || ratingsFilters.every(match => suitcase.tbrating.includes(match))
    );
 
   console.log("ratings length "+tbRatingsCases.length);

  //Now take the results of the ratings filter and apply the feature filters
   const featureCases = tbRatingsCases.filter(suitcase =>
     featureFilters.length === 0 || featureFilters.every(match => suitcase.features.includes(match))
    );

    //Temporary Check On Filter Results
    featureCases.forEach(item => {
   console.log("Features Results"+item.ASIN);
  });

  //Now take the results of the feature filter and apply the weight filters
   const weightCases = featureCases.filter(suitcase =>
     weightFilters.length === 0 || weightFilters.every(match => suitcase.weight.includes(match))
    );

    //Temporary Check On Filter Results
    weightCases.forEach(item => {
   console.log("Weight Results"+item.ASIN);
  });
 
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
     message = "Filtered Results";
     loadFilteredResults();
     //hideFilters();
   }
    
}



//Refresh the results based on the latest set of filters selected
function loadFilteredResults()
{
  console.log("Load Filtered Results...");
  console.log("Load Filtered Results: FilteredAdditionalInfo Length "+filteredAdditionalInfo.length);
  results = document.getElementById("results");
  results.innerHTML = "";

  const resultsHeader = document.createElement("h2");
  resultsHeader.className = "pageintro";
  resultsHeader.textContent = message;
  results.appendChild(resultsHeader);
  
  //lookup a match in the main file and then create the card and append to the results
  filteredResults = itemResults.ItemsResult.Items.filter(item =>
    filteredAdditionalInfo.length === 0 || filteredAdditionalInfo.some(match => item.ASIN.includes(match.ASIN))
  );

  //You need to use Some in the filter above as every would look for all ASIN numbers on each case. 
 
 
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
         infoHeader.textContent = "Specifications";
         //infoHeader.className = "product-info";
         gearCard.appendChild(infoHeader);
         const weight = document.createElement("p");
         //weight.className = "product-info";
         weight.textContent = "Weight: "+entry.weight+"kg";
         gearCard.appendChild(weight);
         const laptopSize = document.createElement("p");
         laptopSize.textContent = "Laptop Size - Up to: "+entry.laptopsize+" inches";
         gearCard.appendChild(laptopSize);
         const cabinFit = document.createElement("p");
         cabinFit.textContent = "Cabin Fit: "+entry.cabinfit;
         gearCard.appendChild(cabinFit);
         const bagFeatureTitle = document.createElement("h4");
         bagFeatureTitle.textContent = "More Features:";
         gearCard.appendChild(bagFeatureTitle);
         //loop through and add features to results
         const bagFeatures = entry.features;
         bagFeatures.forEach(id => {
           //Test working through the filters
          filters.filters.features.forEach(feat => {
          //console.log("Feature "+feat.label);
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
  document.querySelectorAll('.filter-cabin-btn.active').forEach(btn => {
        btn.classList.remove('active');
      });

  document.querySelectorAll('.filter-laptop-btn.active').forEach(btn => {
        btn.classList.remove('active');
      });

   document.querySelectorAll('.filter-feature-btn.active').forEach(btn => {
        btn.classList.remove('active');    
      });

   document.querySelectorAll('.filter-weight-btn.active').forEach(btn => {
        btn.classList.remove('active');    
      });
 
        cabinUseFilters = [];
        laptopFitFilters = [];
        ratingsFilters = [];
        featureFilters = [];
        weightFilters = [];
        filteredAdditionalInfo = [];
        console.log("Clear Filters: FilteredAdditionalInfo "+filteredAdditionalInfo.length);
        message = "Top 11 Cabin Bags";
        loadFilteredResults();
        //hideFilters();

}

//Return the top three results as selected by Travelbetter
//Uses the topthree.json file
function loadTopThreeResults()
{
  console.log("Load Top Three Results...");
  results = document.getElementById("results");
  results.innerHTML = "";

   const resultsHeader = document.createElement("h2");
   resultsHeader.className = "pageintro";
   resultsHeader.textContent = "Top Three Cabin Bags";
   results.appendChild(resultsHeader);
 
  topThreeResults.ItemsResult.Items.forEach(item => {
    const gearCard = document.createElement("div");
    gearCard.className = "gearCard";

    //Create Image Element and Load from Top Three Data
    const itemImage = document.createElement("img");
    itemImage.className = "product-image"; 
    itemImage.src = item.Images.Primary.Large.URL;
    gearCard.appendChild(itemImage);

    //Create Product Title
    const productTitle = document.createElement("h2");
    productTitle.className = "product-info";
    productTitle.textContent = item.ItemInfo.Title.DisplayValue;
    gearCard.appendChild(productTitle);
   
    //Create Buy It Link
    const buyItLink = document.createElement("a");
    
     buyItLink.href = item.DetailPageURL;
     buyItLink.target = "_blank";
    
     const buyItButton = document.createElement("button");
     buyItButton.className = "buyit-button";
     buyItButton.textContent = "Buy From Amazon";
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
          //console.log("Feature "+feat.label);
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
         //console.log("No Match Found");
       }
       
     });
     
     results.appendChild(gearCard);
   });
  scrollToResults();
} //End of load top three choices

function scrollToResults() {
    const resultsContainer = document.getElementById("buttons");
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
