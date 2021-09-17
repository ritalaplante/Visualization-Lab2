// TODO: load the dataset 

let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
        filterData()
	});

function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
    
    //make copy of attractions data
    let data = attractions

    //filter the dataset
    if (category && category != "all") {
        data = data.filter(function(x) {
            return x.Category == category
        });
    }

    //sort the attrations by visitors
    data.sort(function (a, b) {
        return b.Visitors - a.Visitors;
    });
    
    //choose the top five attractions
    let topFive = data.slice(0, 5)

    //call renderBarChart
    renderBarChart(topFive)

}


// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
let element = document.querySelector("#attraction-category")

element.addEventListener("change", (event) => {
    let result = event.target.value
    filterData(result)
});
