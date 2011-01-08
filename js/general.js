/*globals $ window document */
// the line above helps JSLint ignore certain globals; keep it and customize it if you're using JSLint's "good parts" to check your scripts

// The script below does essentially nothing other than define some nearly empty methods and a few settings for demonstration purposes
// You can delete this whole thing, or do whatever you want with it, it's just a basic starting point that I've been using lately

$(function () {
	// variable for caching settings
	var s = null,

	PrimaryNameSpace = {
		// define your oft-used settings below
		settings: {
			basicExample: $("#main"),
			nestedExample: {
				first: true,
				second: true,
				third: true,
				fourth: true,
				fifth: ['one', 'two', 'three', 'four', 'five', 'six']
			},

			foo: "bar"
		},

		// the method that initializes stuff
		init: function () {
			/*	the line below can be included in each method to reference the settings 
				without always having to type "this.settings" each time */
			s = this.settings;
			// using firebug you can view all settings with "console.log(s)";

			// after you do stuff here, you can call the next method
			// You can use "this" in the current context to reference "PrimaryNameSpace" directly
			this.nextMethod();
			
		},
		
		nextMethod: function () {
			s = this.settings;
			// do stuff here
		},
		
		anotherMethod: function () {
			s = this.settings;
			// do more stuff here
		}

		// remember not to use a trailing comma after the last method is defined; you could leave a dummy method here to prevent that error
	};

	// This line initializes the whole thing; you could pass in some JSON data or some other object that needs to be worked with
	PrimaryNameSpace.init();

});