function makeDom(array){
	var myDomString = "";
	myDomString += `<div class="row">`;
	for (let x = 0; x < array.length; x++){
		myDomString += `<div class="dinoCard col-md-4">`;
		myDomString += `<header><h1>${array[x].type}</h1></header>`;
		myDomString += `<section>`;
		myDomString += `<img src="${array[x].img}">`;
		myDomString += `<p class="bio">${array[x].bio}</p>`;
		myDomString += `</section>`;
		myDomString += `<p>${array[x].type}</p>`;
		myDomString += `<footer><h3>${array[x].info}</h3></footer>`;
		myDomString += `</div>`;
		if (x % 3 === 2) {
			console.log("sup");
			myDomString += `</div><div class="row">`;
		}
	}
	console.log(myDomString);
	$("#dinosaurs").html(myDomString);
}

$.ajax("./db/dinosaurs.json").done(function(data){
	dinoArray = data.dinosaurs;
	makeDom(dinoArray);
}).fail(function(error){
	console.log("problem with yo data", error);
});

$("#dinosaurs").on("click", ".dinoCard", function(e){
	$(".dinoCard").removeClass("dottedBorder");
	$(this).addClass("dottedBorder");
	$("#textbox").val("").focus();
});
$("#textbox").keyup(mirrorText);

function mirrorText(e){
	var selectedCard = $(".dottedBorder");
	var bio = selectedCard.find(".bio");
	var bioTyped = $("#textbox").val();
	bio.html(bioTyped);
	if (e.keyCode === 13){
		$("#textbox").val("");
	}
}










