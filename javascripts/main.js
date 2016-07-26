$( document ).ready(function() {

	// Hide attr when select tag is selected with a non defaul value
    $('.comments').change(function(){
       var cambio = $(this).find("option:selected").attr('value');
       if (cambio >= 1) {
		   $(".enable-select").removeAttr('disabled');
    		} else {
    			$(".enable-select").attr('disabled' , 'disabled');
    		}
    });

    $('.registration-date').change(function(){
       var cambio = $(this).find("option:selected").attr('value');
       if (cambio >= 1) {
       $(".fbefore").removeAttr('disabled');
        } else {
          $(".fbefore").attr('disabled' , 'disabled');
        }
    });

    // Toggle Vertical Menu
    $('[data-toggle=offcanvas]').click(function() {
   		 $('.row-offcanvas').toggleClass('active');
    });



    //datePicker
  	$('#datepicker').datepicker({
  				format: 'mm-dd-yyyy'
  			});

  	//Multi Select
  	$('.selectpicker').selectpicker('selectAll');


	// Select all Unselect all combobox
	
	/*var options = [];

	$( '.dropdown-menu a' ).on( 'click', function( event ) {

	   var $target = $( event.currentTarget ),
	       val = $target.attr( 'data-value' ),
	       $inp = $target.find( 'input' ),
	       idx;

	   if ( ( idx = options.indexOf( val ) ) > -1 ) {
	      options.splice( idx, 1 );
	      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
	   } else {
	      options.push( val );
	      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
	   }

	   $( event.target ).blur();
	      
	   console.log( options );
	   return false;
	});
  */



 	  //Select all items checklist
    $('.selectAll').click(function() {
    	$('.enableCheck').find("input").prop('checked', true);
      event.preventDefault();

    });


    $('.unSelectAll').click(function() {
   		 $('.enableCheck').find("input").attr('checked', false);
       event.preventDefault();

    });


    // Add Row
    $( ".addRow" ).on( "click", function(event) {
    	event.preventDefault();

   		var containerDuplicate = "";
    	var contentInside = "<div class='row location'> <div class='col-md-4 innerContentFC'> <div class='form-group'> <div class='form-group'> <select class='form-control usergroup' id='usergroup'> <option value='0'>User Group</option> <option value='1'>Beetwen</option> <option value='2'>Before</option> <option value='3'>After</option> <option value='4'>On</option> </select> </div></div></div><div class='col-md-4 innerContent' '> <div class='form-group'> <div class='button-group'> <button type='button' class='btn btn-default btn-sm dropdown-toggle' data-toggle='dropdown'> <span>Select one o more options</span> <span class='caret'></span> </button> <ul class='dropdown-menu enableCheck'> <a href='#' class='selectAll'>Select All</a><br><a href='#' class='unSelectAll'>Unselect All</a> <li><a href='#' class='small' data-value='option1' tabIndex='-1'><input type='checkbox'/>&nbsp;Option 1</a></li><li><a href='#' class='small' data-value='option2' tabIndex='-1'><input type='checkbox'/>&nbsp;Option 2</a></li><li><a href='#' class='small' data-value='option3' tabIndex='-1'><input type='checkbox'/>&nbsp;Option 3</a></li><hr/> <li><a href='#' class='small' data-value='option4' tabIndex='-1'><input type='checkbox'/>&nbsp;Option 4</a></li><li><a href='#' class='small' data-value='option5' tabIndex='-1'><input type='checkbox'/>&nbsp;Option 5</a></li><li><a href='#' class='small' data-value='option6' tabIndex='-1'><input type='checkbox'/>&nbsp;Option 6</a></li></ul> </div></div></div></div>";
      	
      	$( contentInside ).insertBefore( ".dataLocationAdd" );

    });


    //Datatable filter
   	$('#dataTableCustom').DataTable( {
   	       columnDefs: [ {
   	           orderable: true,
   	           className: 'select-checkbox',
   	           targets:   0
   	       } ],
   	     
   	       order: [[ 1, 'asc' ]]
   	   } );

    
    //Select Table rows con click checkbox
    $(".select-row-table").on('change', function () {
        var self = $(this);

        if (self.is(":checked")) {
            $(this).closest( "tr" ).addClass('active');

        } else {
           	$(this).closest( "tr" ).removeClass('active');
        }

    });



    // Selects all rows on datatable
     $('.select-all-cols').change(function() {
         var checkboxes = $(this).closest('table').find(':checkbox');
         if($(this).is(':checked')) {
             checkboxes.prop('checked', true);
             $( "tr" ).addClass('active');

         } else {
             checkboxes.prop('checked', false);
             $( "tr" ).removeClass('active');
         }
     });





      // Add Tags on select row
      $( ".select-row-table" ).on( "click", function(event) {


          var checkboxes = $(this);

          if($(this).is(':checked')) {
                var contentInside = "<button class='btn btn-primary'>Link new</button>";
                $( contentInside ).addClass("newTagCreated").appendTo( ".tagsButtons" );
                $('.btn-delete-tablerow').fadeIn();

          } else {
              $( ".tagsButtons button" ).last().remove();
              $('.btn-delete-tablerow').fadeOut();
          }
          
      });



      // Delete rows on clicks tags datatable
      $(".tagsButtons button").click(function(event) {
      
          var textAlert = $( "table tbody tr" ).first().find(".itemName").text();
          alert(textAlert + " has been remove from Database");

          $( "table tbody tr" ).first().remove();
          $( ".tagsButtons button" ).last().remove();

      });

      $(".newTagCreated").click(function(event) {
      
          var textAlert = $( "table tbody tr" ).first().find(".itemName").text();
          alert(textAlert + "has been remove from Database");

          $( "table tbody tr" ).first().remove();
          $( ".tagsButtons button" ).last().remove();

      });


      // Delete Datepicker row
      $(".deleteDatepickerRow").click(function(event) {

          $('.dataTables_paginate').clone().insertAfter('.dataTables_length')
          $('.datepickerRow').remove();

      });
     
      


   // Fix datapicker
   // Add pagination above too

   

});