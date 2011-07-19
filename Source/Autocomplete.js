(function(){

var Autocomplete = this.Autocomplete = new Class({

	Implements: [Options, Events, Class.Binds],

	options: {
		attach: true,
		min: 1,
		replace: '<span class="highlight">$&</span>',
		tag: 'li',
		outputMax: 20,
		selected: 'selected'
	},

	data: [],
	selected: -1,
	matched: 0,

	initialize: function(input, output, data, options){
		this.input = document.id(input);
		this.output = document.id(output);
		this.addData(data);
		this.setOptions(options);
		if (this.options.attach) this.attach();
		this.blur();
	},

	addData: function(data){
		this.data.append(Array.from(data));
	},

	attach: function(){
		this.input.addEvents({
			keyup: this.bound('keypress'),
			keydown: this.bound('keydown'),
			keypress: this.bound('keypress'),
			focus: this.bound('focus'),
			blur: this.bound('blur')
		});
	},

	detach: function(){
		this.input.removeEvents({
			keyup: this.bound('keypress'),
			keydown: this.bound('keydown'),
			keypress: this.bound('keypress'),
			focus: this.bound('focus'),
			blur: this.bound('blur')
		});
	},

	keydown: function(e){
		if (e.key === 'down' || e.key === 'up') {
			e.preventDefault();
			return this.navigate(e.key);
		}
	},

	keypress: function(e){
		if (e.key === 'enter') {
			e.preventDefault();
			return this.select();
		}

		if (e.key === 'down' || e.key === 'up')
			return e.preventDefault();

		if (this.input.value === this.value) return;

		//this.value = regEscape(this.input.value);
		this.value = this.input.value;

		if (this.value.length >= this.options.min) this.parseData();
		else this.updateList();
	},

	focus: function(){
		if (this.matched) this.output.setStyle('display', 'block');
	},

	blur: function(){
		this.output.setStyle('display', 'none');
	},

	select: function(){
		if (this.value === '') return this;
		
		var els = this.output.getChildren(),
			string = (this.selected === -1) ? this.value : els[this.selected].get('data-id');
		
		this.reset();
		this.parseData();
		this.fireEvent('select', [string]);
	},

	reset: function(){
		this.selected = -1;
		this.input.value = this.value = '';
	},

	navigate: function(direction){
		var els = this.output.getChildren().removeClass(this.options.selected),
			max = (els.length > this.options.outputMax) ? this.options.outputMax : els.length;

		// Increment selected
		if (direction === 'up') this.selected--;
		if (direction === 'down') this.selected++;

		// Keep selected within bounds
		if (this.selected < 0)
			return this.selected = -1;
		if (this.selected >= max)
			this.selected = max - 1;

		if (this.selected > -1) els[this.selected].addClass(this.options.selected);
	},

	parseData: function(){
		var matched = [],
			regex = new RegExp(this.value, 'gi'),
			replace = this.options.replace,
			fn = function(str, i){
				var match = str.test(regex);
				if (!match) {
					dbg.log('Match Status: ', str, match, !match);
					return;
				};
				matched.push({
					str: str,
					html: str.replace(regex, replace)
				});
			};

		dbg.log('Regex: ', regex);

		if (this.value !== '') this.data.each(fn);
		dbg.log('Array of ', matched);
		this.updateList(matched);
	},

	updateList: function(matched){
		this.output.innerHTML = '';
		if (!matched || matched.length === 0) return this.blur();

		this.matched = matched.length;

		matched.each(function(obj, i){
			if (i >= this.options.outputMax) return;
			new Element(this.options.tag, {
				html: obj.html,
				'data-id': obj.str
			}).inject(this.output);
		}, this);

		this.focus();
	}

});

var regEscape = function(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}


}).call(this);
