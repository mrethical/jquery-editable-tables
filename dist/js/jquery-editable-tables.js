/*!
 * jquery-editable-tables v0.1.0: JQuery plugin to make tables editable
 * (c) 2017 Jefferson Magboo
 * MIT License
 * http://github.com/muffeen/editable-tables
 */


(function( $ ) {

    $.fn.editableTable = function( options ) {

    	var settings = $.extend({
            newRow: "",
        }, options );

        function createAttributes(data) {
        	var attr = ' ';
        	for (var key in data) {
                attr += key+'="'+data[key]+'" ';
        	}
        	return attr.trim();
        }
 
        return this.each((function() {
	        $(this).find('tbody > tr > td').each((function(){
	        	var td = $(this);
	        	var value = td.text();
	        	var data = td.data();
	        	var type = data.type;
	        	delete data.type;
	        	if (type === 'text') {
	        		td.replaceWith('<td><input type="text" '+createAttributes(data)+' value="' + value + '"></td>');
	        	} else if (type === 'select') {
	        		var items = data.items;
	        		delete data.items;
	        		if (items) {
	        			var options = '';
	        			var elements = items.split(',');
	        			for (var i = 0; i < elements.length; i++) {
	        				var element = elements[i].split(':');
	        				if (element.length === 1) {
	        					element[1] = element[0];
	        				}
	        				options += '<option value="'+element[0]+'" ';
	        				if (value === element[1]) {
	        					options += 'selected';
	        				}
	        				options += '>'+element[1]+'</option>';
	        			}
	        			td.replaceWith('<td><select '+createAttributes(data)+'>'+options+'</select></td>');
	        		} else {
	        			td.replaceWith('<td><select '+createAttributes(data)+'><option value="'+value+'">'+value+'</select></td>');
	        		}
	        	} else if (type === 'checkbox') {
	        		var yes = data.true;
	        		delete data.true;
	        		if (!yes) {
	        			yes = 'true';
	        		} 
	        		var no = td.false;
	        		delete data.false;
	        		if (!yes) {
	        			no = 'false';
	        		}
	        		var checked = yes === value;
	        		td.replaceWith('<td><input type="checkbox" '+createAttributes(data)+' '+(checked?'checked':'')+'></td>');
	        	}
	        }));
	    }));
 
    };
 
}( jQuery ));
