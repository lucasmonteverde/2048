define(function() {
	
	'use strict';
	
	function Grid(size) {
		this.size = size;

		this.cells = [];

		this.build();
	}

	Grid.prototype = {
		// Build a grid of the specified size
		build: function () {
			for (var x = 0; x < this.size; x++) {
				var row = this.cells[x] = [];

				for (var y = 0; y < this.size; y++) {
					row.push(null);
				}
			}
		},

		// Find the first available random position
		randomAvailableCell: function () {
			var cells = this.availableCells();

			if (cells.length) {
				return cells[Math.floor(Math.random() * cells.length)];
			}
		},

		availableCells: function () {
			var cells = [];

			this.eachCell(function (x, y, tile) {
				if (!tile) {
					cells.push({ x: x, y: y });
				}
			});

			return cells;
		},

		// Call callback for every cell
		eachCell: function (callback) {
			for (var x = 0; x < this.size; x++) {
				for (var y = 0; y < this.size; y++) {
					callback(x, y, this.cells[x][y]);
				}
			}
		},

		// Check if there are any cells available
		cellsAvailable: function () {
			return !!this.availableCells().length;
		},

		// Check if the specified cell is taken
		cellAvailable: function (cell) {
			return !this.cellOccupied(cell);
		},

		cellOccupied: function (cell) {
			return !!this.cellContent(cell);
		},

		cellContent: function (cell) {
			if (this.withinBounds(cell)) {
				return this.cells[cell.x][cell.y];
			} else {
				return null;
			}
		},

		// Inserts a tile at its position
		insertTile: function (tile) {
			this.cells[tile.x][tile.y] = tile;
		},

		removeTile: function (tile) {
			this.cells[tile.x][tile.y] = null;
		},

		withinBounds: function (position) {
			return position.x >= 0 && position.x < this.size && position.y >= 0 && position.y < this.size;
		}
	};
	
	return Grid;
});