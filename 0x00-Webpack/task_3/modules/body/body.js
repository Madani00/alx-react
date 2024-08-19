import './body.css';
import $ from 'jquery';
import _ from 'lodash';


let count = 0;


$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');

function updateCounter() {
    count++;
    $('#count').html(`${count} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));