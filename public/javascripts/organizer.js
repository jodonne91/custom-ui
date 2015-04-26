//an organized list with searchability and sortability

//experimenting with different ways to extend jQuery
//not sure what differences there are yet


//create list and return handle to be used for subsuquent functions
jQuery.fn.createList = function() {
	var $parent = this;
	var $list_html = $('<ul class="ul"></ul>');
	$parent.append($list_html);
	return $list_html;
};


//add list item of name
jQuery.fn.extend({
	addListItem: function(_item){
		var $parent = this;
		var $item_html = $('<li>' + _item + '</li>');
		$parent.append($item_html);
	}
});


//sort list by asc or dec
jQuery.prototype.sortList = function(_by){
	//get all list items
	var $parent = this;
	var html = $parent;
	//$parent.html('');
	//sort _by
	//append in sorted order
}