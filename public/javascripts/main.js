$(function(){
	console.log('jquery working')
	layout1('layout', 3, '100px', '300px');
	$('.second-layout').layout4(2, 3, '100px', '200px')

	var arr = [
		{type: 'radio', name:'one', text:'text for first'}, 
		{type: 'radio', name:'one', text: 'text for second'}, 
		{type:'select', options: ['Joe', 'Mike', 'Jeff']}
	]

	$('.nav-bar').createNavBar(arr);

	var $list_handle = $('.list').createList();
	$list_handle.addListItem('Toto');
	$list_handle.addListItem('Bon Jovi');
	$list_handle.addListItem('Afrikans');
	//$list_handle.sortList('asc')

})	;