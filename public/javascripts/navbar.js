//creat navbar for a list of items, accepts array of objects


Object.prototype.createNavBar = function(_arr){
	var $parent = this;
	for (var i = 0 ; i < _arr.length ; i++){
		switch(_arr[i].type){
			case 'radio':
				$parent.appendRadio(_arr[i].name, _arr[i].text);
				break;
			case 'select':
				$parent.appendSelect(_arr[i].options);
				break;
			case 'input':
				$parent.appendInput(_arr[i].subType);
				break;
			default:
				break;
		}
	}
	console.log('navbar created');
}

Object.prototype.appendRadio = function(_name, _text){
	var $html = $('<input type="radio" name="' + _name + '">' + _text + '</input>');
	var $parent = this;
	$parent.append($html);
}

Object.prototype.appendSelect = function(_options){
	var options_html = [];
	var $parent = this;
	var $child = $('<select>')
	$parent.append($child);
	for (var i = 0 ; i < _options.length ; i++){
		var $options_html = $('<option value="' + _options[i] + '">' + _options[i] + '</option>');
		$child.append($options_html);
	}	
	$parent.append('</select>');
}

Object.prototype.appendInput = function(_type){
	var $parent = this;
	$parent.append('<input></input>');
}
