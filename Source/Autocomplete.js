(function(){

var Autocomplete = this.Autocomplete = new Class({

	Implements: [Options, Events, Class.Binds],

	options: {
		minParse: 1,
		outputMax: 8,
		tag: 'li',
		replace: '<span class="highlight">$&</span>',
		selectedClass: 'selected',
		resetOnSelect: false
	},

	data: [],
	selected: -1,
	matched: 0,

	initialize: function(input, output, data, options){
		this.input = document.id(input);
		this.output = document.id(output);
		this.addData(data);
		this.setOptions(options);
		this.attach();
		this.hide();
	},

	addData: function(data){
		if (!data) return this;
		this.data.append(Array.from(data).flatten());
		return this;
	},

	attach: function(){
		var tag = this.options.tag;

		this.input.addEvents({
			keyup: this.bound('keypress'),
			keydown: this.bound('keydown'),
			keypress: this.bound('keypress'),
			focus: this.bound('show'),
			blur: this.bound('hide')
		});

		this.output
			.addEvent('mousedown:relay(' + tag + ')', this.bound('mousedown'))
			.addEvent('click:relay(' + tag + ')', this.bound('click'))
			.addEvent('mouseenter:relay(' + tag + ')', this.bound('mouseenter'));

		return this;
	},

	detach: function(){
		var tag = this.options.tag;

		this.input.removeEvents({
			keyup: this.bound('keypress'),
			keydown: this.bound('keydown'),
			keypress: this.bound('keypress'),
			focus: this.bound('show'),
			blur: this.bound('hide')
		});

		this.output
			.removeEvent('mousedown:relay(' + tag + ')', this.bound('mousedown'))
			.removeEvent('click:relay(' + tag + ')', this.bound('click'))
			.removeEvent('mouseenter:relay(' + tag + ')', this.bound('mouseenter'));

		return this;
	},

	keydown: function(e){
		if (e.key === 'down') {
			e.preventDefault();
			this.selected++;
			return this.navigate();
		}
		if (e.key === 'up') {
			e.preventDefault();
			this.selected--;
			return this.navigate();
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

		this.value = this.input.value;

		if (this.value.length >= this.options.minParse) this.filterData();
		else this.updateList();
	},

	show: function(){
		// Only show if there is content to show
		if (this.matched.length) this.output.setStyle('display', 'block');
	},

	hide: function(){
		this.output.setStyle('display', 'none');
	},

	mouseenter: function(e, el){
		this.selected = this.matched.indexOf(el);
		this.navigate();
	},

	mousedown: function(e){
		e.preventDefault();
	},

	click: function(e, el){
		e.preventDefault();
		if (!el) return;
		return this.select(el.get('data-id'));
	},

	select: function(str){
		if (this.value === '') return this;
		var string = (str) ? str : (this.selected === -1) ? this.value : this.matched[this.selected].get('data-id');
		this.fireEvent('select', [string]);
		this.input.value = this.value = string;
		this.reset(this.options.resetOnSelect);
		return this;
	},

	reset: function(all){
		this.selected = -1;
		if (all) this.input.value = this.value = '';
		this.filterData();
		return this;
	},

	navigate: function(){
		var els = this.matched.removeClass(this.options.selectedClass),
			max = (els.length > this.options.outputMax) ? this.options.outputMax : els.length;

		// Keep selected within bounds
		if (this.selected < 0) return this.selected = -1;
		if (this.selected >= max) this.selected = max - 1;
		if (this.selected > -1) els[this.selected].addClass(this.options.selectedClass);
		return this;
	},

	filterData: function(){
		var regex = regEscape(this.value.trim()),
			value = this.value.toLowerCase().trim(),
			regFirst = new RegExp('^' + regex, 'i'),
			regAnywhere = new RegExp(regex, 'gi'),
			replace = this.options.replace,
			first = [],
			matched = [],
			fn = function(str){
				// If there is no match, or the string is an exact match...
				if (!str.match(regAnywhere) || str.toLowerCase() === value) return;

				var obj = {
					str: str,
					html: str.replace(regAnywhere, replace)
				};

				if (str.match(regFirst)) first.push(obj)
				else matched.push(obj);
			};

		if (this.value !== '') this.data.each(fn, this);
		matched = first.append(matched);
		this.updateList(matched);
	},

	updateList: function(matched){
		// Clean the output the quick way
		this.output.innerHTML = '';
		if (!matched || matched.length === 0) return this.hide();

		this.matched = [];
		var addItems = function(obj, i){
			if (i >= this.options.outputMax) return;
			this.matched.push(new Element(this.options.tag, {
				html: obj.html,
				'data-id': obj.str
			}).inject(this.output));
		};
		matched.each(addItems, this);
		this.matched = new Elements(this.matched);
		this.show();
	}

});

var regEscape = function(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

}).call(this);
