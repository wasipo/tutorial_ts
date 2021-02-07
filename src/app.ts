import {Item} from './item';
import React from 'react'
import $ from 'jquery';
const elem = document.getElementById('output');

//const j:JQueryStatic = $;
const rootID:string = '#output';
const inputID:string = '#outputTask';
const max:number = 10;

$('#delete_button').on('click',function(e){
    $('#output').find('div').remove();
})


$(inputID).on('keyup',function(e){    
    if (e.key === "Enter"){
        let childrenNumber:number = Number($(rootID).children().length);
        childrenNumber++;
        if(childrenNumber >= max) {
            alert('10個までです。');
            return false;
        }
		$(rootID).append('<div><span>'+$(this).val()+'</span><input type="checkbox" value="'+childrenNumber+'" /></div>');
	}
});

