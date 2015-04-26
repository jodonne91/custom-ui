//organized list

//create list navbar

var JORG = function(){
	this.createList = function(){
		this.html('<p>jOrg list</p> <ul class="jOrg-list"></ul>');
	}

	this.appendItem = function(_item){
		var $html = $('<li>' + _item + '</li>');
		var $parent = this;
		$parent.append($html);
	}
}