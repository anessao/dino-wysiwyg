var dinoArray = [];
function makeDom(array){
	var myDomString = "";
	for (let x = 0; x < array.length; x++){
		myDomString += `<div class="dinoCard">`;
		myDomString += `<header><h1>${array[x].type}</h1></header>`;
		myDomString += `<section>`;
		myDomString += `<img src="${array[x].img}">`;
		myDomString += `<p class="bio">${array[x].bio}</p>`;
		myDomString += `</section>`;
		myDomString += `<p>${array[x].type}</p>`;
		myDomString += `<footer><h3>${array[x].info}</h3></footer>`;
		myDomString += `</div>`;
	}
	$("#dinosaurs").html(myDomString);
}

$.ajax("./db/dinosaurs.json").done(function(data){
	dinoArray = data.dinosaurs;
	makeDom(dinoArray);
}).fail(function(error){
	console.log("problem with yo data", error);
});