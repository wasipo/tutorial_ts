import {Item} from './item';
import $ from 'jquery';
const elem = document.getElementById('output');
// const aBook = new Item('はじめてのTypeScript',132415);

const bookname : string = "若者のすべて";
const price : number = 99999;

interface book {
    title: string,
    price: number,
}

const  book : book = {
    title: '若者の全て',
    price: 9999,
}


function say(elem: HTMLElement|null,bookname: string, price: number) {
    if(elem !== null) {
        elem.innerHTML = '書名：' + bookname + '  価格: ' + price + '円';
    }
}

say(elem,book.title,book.price);



// aBook.say(elem);