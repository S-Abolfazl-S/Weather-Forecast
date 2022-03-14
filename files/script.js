$(() => {
	let sBox_btn = document.querySelector("#searchBtn");
	let sBox_input = document.querySelector("#getCity");
	let nav_item = document.querySelectorAll("nav>ul>li");
	sBox_input.value = "";
	sBox_input.focus();

	// set style on page size
	$(window).on("resize load", (e) => {
		if (window.innerWidth < 850) {
			$("#head > h1 > span").hide();
			if ($("#info>.icon").children().length == 1)
				$("#info>.icon>span").css({ height: "100%" });
		} else $("#head > h1 > span").show();

		if (window.innerWidth < 450) {
			// name search button
			$(sBox_btn).html("search");
			// navbar
			$(nav_item).css({ width: "100%", margin: "0 0 10px 0" });
			$(nav_item).children("a").removeClass("btn-outline-light");
			$(nav_item).children("a").addClass("btn-danger");
		} else {
			// name search button
			$(sBox_btn).html('<i class="fa fa-search"></i>');
			// navbar
			$(nav_item).css({ width: "150px", "margin-left": "10px" });
			$(nav_item).children("a").removeClass("btn-danger");
			$(nav_item).children("a").addClass("btn-outline-light");
		}
	});
	// get name city and show info weather
	// let sBox_input = document.querySelector('#getCity');
	let icon = $("#info>.icon");
	let city = $("#info>.content>span:nth-child(1)");
	let country = $("#info>.content>span:nth-child(2)");
	let temp = $("#info>.content>span:nth-child(3)");
	// API
	let api_key = "a04e270da146d5305eb27cb52c858689";
	let getWeather = () => {
		let cityName = $("#getCity").val();
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;
		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				// console.log(json)
				city.text(json.name);
				country.text(json.sys.country);
				temp.html(`${String(json.main.temp - 273.15).slice(0, 4)} °C`);
				let style = 'style="font-size: 2em;text-align:center';
				let description = json.weather[0].description;
				switch (json.weather[0].main) {
					case "Clear":
						icon.html(
							`<span class="fas fa-sun"></span><span ${style}">${description}</span>`
						);
						break;
					case "Snow":
						icon.html(
							`<span class="fas fa-snowflake"></span><span ${style}">${description}</span>`
						);
						break;
					case "Rain":
						icon.html(
							`<span class="fas fa-cloud-rain"></span><span ${style}">${description}</span>`
						);
						break;
					case "Drizzle":
						icon.html(
							`<span class="fas fa-cloud-rain"></span><span ${style}">${description}</span>`
						);
						break;
					case "Thunderstorm":
						icon.html(
							`<span class="fas fa-bolt"></span><span ${style}">${description}</span>`
						);
						break;
					case "Clouds":
						icon.html(
							`<span class="fas fa-cloud"></span><span ${style}">${description}</span>`
						);
						break;
					default:
						icon.html(`<span ${style}">${description}</span>`);
				}
			});
		// clear input
		sBox_input.value = "";
	};
	sBox_btn.addEventListener("click", getWeather);
	sBox_input.addEventListener("keyup", (e) =>
		e.keyup === 13 ? getWeather() : ""
	);
	sBox_btn.click();
});
