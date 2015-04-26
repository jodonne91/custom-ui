


//attempt at defining custom layout function
var layout1 = function(_parent, _count, _height, _width){
	var $parent = $('.' + _parent);
	var count = _count;
	var height = _height;
	var width = _width;
	for(var i = 0; i < count ; i++){
		var $section = $('<section>section ' + (i+1) + '</section>')
		$parent.append($section.css('height', height).css('width', width));
	}
	console.log('appended ' + count + ' sections to ' + _parent + '.');
}


//columns and rows -- !!use layout4 below instead
var layout2 = function(_parent, _columnCount, _rowCount, _height, _width){
	var $parent = $('.' + _parent);
	var columnCount = _columnCount;
	var rowCount = _rowCount;
	var height = _height;
	var width = _width;
	for (var i = 0 ; i < columnCount ; i++){
		var temp_class = 'column-' + i;
		var $column = $('<section class="' + temp_class + '"></section>');
		$parent.append($column.css('width', width).css('display', 'inline-block'));
	}
	for (var i = 0 ; i < columnCount ; i++){
		var temp_class = '.column-' + i;
		var $temp_parent = $(temp_class)
		for ( var j = 0 ; j < rowCount ; j++ ){
			var temp_text = 'section ' + ( 1 + j + ( i * 3 ));
			var $row = $('<section>' + temp_text + '</section>');
			$temp_parent.append($row.css('height', height).css('width', '100%'));	
		}
	}
	console.log('appended ' + columnCount + ' columns and ' + rowCount + ' rows to ' + _parent + ' for a total of ' + (columnCount*rowCount) + ' sections.');
}

//accepting an array of objects
//grid format [{height, width, style, }]
var layout3 = function(_parent, _grid){

}


//FUCK yeah!!! this works.. same as layout2 but using Object.prototype on a jquery wrapped object
//scratch that, just use jQuery.fn - works better and looks cleaner
jQuery.fn.layout4 = function(_columnCount, _rowCount, _height, _width){
	var $parent = this;  //must be jquery object
	var columnCount = _columnCount;
	var rowCount = _rowCount;
	var height = _height;
	var width = _width;
	for (var i = 0 ; i < columnCount ; i++){
		var temp_class = 'column-' + i;
		var $column = $('<section class="' + temp_class + '"></section>');
		$parent.append($column.css('width', width).css('display', 'inline-block'));
	}
	for (var i = 0 ; i < columnCount ; i++){
		var temp_class = '.column-' + i;
		var $temp_parent = $(temp_class)
		for ( var j = 0 ; j < rowCount ; j++ ){
			var temp_text = 'section ' + ( 1 + j + ( i * 3 ));
			var $row = $('<section>' + temp_text + '</section>');
			$temp_parent.append($row.css('height', height).css('width', '100%'));	
		}
	}
	console.log('appended ' + columnCount + ' columns and ' + rowCount + ' rows to ' + ' for a total of ' + (columnCount*rowCount) + ' sections.');
}