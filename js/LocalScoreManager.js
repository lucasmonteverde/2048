window.fakeStorage = {
	_data: {},

	setItem: function (id, val) {
		return this._data[id] = String(val);
	},

	getItem: function (id) {
		return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
	},

	removeItem: function (id) {
		return delete this._data[id];
	},

	clear: function () {
		return this._data = {};
	}
};

define(function() {
	
	'use strict';

	function LocalScoreManager() {
		this.key = 'bestScore';

		var supported = this.localStorageSupported();
		this.storage = supported ? window.localStorage : window.fakeStorage;
	}

	LocalScoreManager.prototype = {
	
		localStorageSupported: function () {
			var testKey = 'test',
				storage = window.localStorage;

			try {
				storage.setItem(testKey, '1');
				storage.removeItem(testKey);
				return true;
			} catch (error) {
				return false;
			}
		},

		get: function () {
			return this.storage.getItem(this.key) || 0;
		},

		set: function (score) {
			this.storage.setItem(this.key, score);
		}
	};
	
	return LocalScoreManager;

});