angular
.module('jz', [])
.controller('JZController', function() {
	this.tab = "ABOUT";

	this.projects = [{
		name: "GA Drawer",
		caption: "an program to approximate images with Genetic Algorithm in Python",
		img: "gadrawer",
		url: "",
		git: "https://github.com/jsnzng/gadrawer"
	},{
		name: "Game of Life",
		caption: "an Angular app to play Conway's Game of Life",
		img: "life",
		url: "https://jsnzng.github.io/game_of_life",
		git: "https://github.com/jsnzng/game_of_life"
	}, {
		name: "Sudoku",
		caption: "a classic Sudoku game with efficient algorithms",
		img: "sudoku",
		url: "https://jsnzng.github.io/sudoku",
		git: "https://github.com/jsnzng/sudoku"
	}, {
		name: "Chip-8",
		caption: "a Chip-8 emulator written with C++ and OpenGL",
		img: "c8_15puzzle",
		url: "",
		git: "https://github.com/jsnzng/jzChip8"
	}, {
		name: "Weathers",
		caption: "a web app that forecasts 7-day weather at your location",
		img: "weathers",
		url: "https://jsnzng.github.io/weathers",
		git: "https://github.com/jsnzng/weathers"
	}, {
		name: "Portfolio",
		caption: "my tiny portfolio page built with Bootstrap and AngularJs",
		img: "portfolio",
		url: "https://jsnzng.github.io",
		git: "https://github.com/jsnzng/JsnZng.github.io"
	}, {
		name: "VanParks",
		caption: "CPSC320 project, a MEAN app for parks lookup in Vancouver",
		img: "vanpark",
		url: "",
		git: ""
	}];

	this.setTab = function(tab) {
		this.tab = tab;
	};

});