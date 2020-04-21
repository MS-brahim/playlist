class Node {
	constructor(data, next, back) {
	  this.data = data;
	  this.next = next;
	  this.back = back;
  
	}
  }
  
  class LinkedList {
	constructor() {
	  this.head = ['1', '2', '3', '4'];
	  this.size = 0;
	  this.current = this.head[0];
	  this.page = ['<img width="300px" src="img/art/adele.jpg" alt=""><div class="infosTrack"><h4>Adele - <span>Set fire to the rain</span></h4></div><div id="resu"><audio src="music/1.mp3" controls></audio></div>', '<img width="300px" src="img/art/booba.png" alt="Booba"><div class="infosTrack"><h4>Booba - <span>Jimmy</span></h4></div><div id="resu"><audio src="music/2.mp3" controls></audio></div>', '<img width="300px" src="img/art/sch.jpg" alt="sch"><div class="infosTrack"><h4>SCH - <span>Ca Ira</span></h4></div><div id="resu"><audio src="music/3.mp3" controls></audio></div>', '<img width="300px" src="img/art/mars.jpg" alt="Bruno mars"><div class="infosTrack"><h4>Bruno Mars - <span>Way You Are</span></h4></div><div id="resu"><audio src="music/4.mp3" controls></audio></div>', ];
	  this.info = this.page[0];
	  
	}
  
  
	Next() {
  
  
	  if (this.size === this.head.length - 1) {
		this.size = 0;
	  } else {
		this.size++;
	  }
	  this.current = this.head[this.size];
	  this.info = this.page[this.size];
	}
  
  
	moveBack() {
	  if (this.size === 0) {
		this.size = this.head.length - 1;
	  } else {
		this.size--;
	  }
  
	  this.current = this.head[this.size];
	  this.info = this.page[this.size];
  
  
	}
  
	printListData() {
	  return this.current;
  
	}
  
	printpage() {
	  return this.info;
	}
  }
  
  
  
  let list = new LinkedList();
  
  
  function nextVal() {
	list.Next();
	document.getElementById('resu').innerHTML = '<audio controls src="music/' + list.printListData() + '.mp3"></audio>';
  
	document.getElementById('printpage').innerHTML = list.printpage();
  
  }
  
  
  function backVal() {
	list.moveBack();
	document.getElementById('resu').innerHTML = '<audio controls src="music/' + list.printListData() + '.mp3"></audio>';
  
	document.getElementById('printpage').innerHTML = list.printpage();
  }
  


//   page home (slide images )

class Slide {
	constructor(data,next,prev = null){
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

class Stack {
	constructor(){
		this.head = null;
		this.tail = null;
		this.pointer = null;
		this.length = 0;
	}

	pushToList(data){
		var slide = new Slide(data);
		if(this.length == 0){
			this.pointer  = this.tail =  this.head  = slide;
			
		}else
		{
			this.tail.next = slide;
			slide.prev = this.tail;
			this.tail = slide;
			
		}

		this.length++;
		return slide;

	}

	

	next(){
		if(this.pointer && this.pointer.next){
			this.pointer = this.pointer.next;
		}


	}

	previous(){
		if(this.pointer && this.pointer.prev){
			this.pointer = this.pointer.prev;
		}
	}

	dispSlide(){
		if(this.pointer){
			return this.pointer.data;
		} else return "No Data";
	}



}


let stack = new Stack();

stack.pushToList('<img src="img/slide/adele.jpg"><h2>Adele</h2>');
stack.pushToList('<img src="img/slide/SCH.jpg"><h2>SCH</h2>');
stack.pushToList('<img src="img/slide/PNL.jpg"><h2>PNL</h2>');
stack.pushToList('<img src="img/slide/booba.jpg"><h2>Booba</h2>');
stack.pushToList('<img src="img/slide/ihab.jpg"><h2>Ihab Amir</h2>');
stack.pushToList('<img src="img/slide/muslim.jpg"><h2>Muslim</h2>');
stack.pushToList('<img src="img/slide/bruno.jpg"><h2>Bruno Mars</h2>');




function Next(){
	stack.next();
	document.getElementById("imgAndTitle").innerHTML = stack.dispSlide();
}

function Prev(){
	stack.previous();
	document.getElementById("imgAndTitle").innerHTML = stack.dispSlide();

}

function printSlide(){
	document.getElementById("imgAndTitle").innerHTML = stack.dispSlide();
}