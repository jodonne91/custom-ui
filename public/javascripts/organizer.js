//an organized list with searchability and sortability

//create list and return handle to be used for subsuquent functions
Object.prototype.createList = function() {
	var $parent = this;
	var $list_html = $('<ul class="ul"></ul>');
	$parent.append($list_html);
	return $list_html;
};


//add list item of name
Object.prototype.addListItem = function(_item){
	var $parent = this;
	var $item_html = $('<li>' + _item + '</li>');
	$parent.append($item_html);
};


//sort list by asc or dec
Object.prototype.sortList = function(_by){
	//get all list items
	var $parent = this;
	var html = $parent.
	$parent.html('');
	//sort _by
	//append in sorted order
}