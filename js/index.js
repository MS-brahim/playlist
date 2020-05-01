// Satck 
class StackNode {
    constructor(img, next=null){
        this.data = img;
        this.next = next;
    }
}   
class Satck {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    
    // push
    push(img) {
        let node = new StackNode(img);
        
        node.next =  this.top;
        this.top = node;

        this.size++;
    }
    // poped
    pop() {
        let result = this.top;
        this.top = this.top.next;

        this.size--;
        return result.img;
    }
    
    //Clear
    clear() {
        this.top = null;
    }

    //isEmpty
    isEmpty() {
        this.top = null;
        
    }

    // Print 
    print(){
        let list="";
        let current = this.top;
        list+="<ol>";
        while(current)
        {
            list+= "<li>"+ current.data+"</li>";
            current=current.next;
        }
        list+="</ol>";
        document.getElementById('result').innerHTML=list
    }
}    

    let S = new Satck();
    let push = document.getElementById("push");
    let pop = document.getElementById("pop");
    let clear = document.getElementById("clear");
    let next = document.getElementById("next");

    // function push
    push.onclick = function() {
        let insertImg = document.getElementById("insertImg").value;
        if(insertImg.length > 0 ){
            S.push(insertImg);
            S.print();
        }else{
            alert('Add new photo');
        }
    }
    // function pop
    pop.onclick = function() {
        S.pop();
        S.print();
    }
    // function clear
    clear.onclick = function(){
        S.clear();
        S.print();
    }
    
// Queue 
class queueNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.front = null;
        this.back = 0;
    }

    // function isEmpty
    isEmpty() {
        return !this.front;
    }

    // function enqueue 
    enqueue(data){
        // create a new node with data
        let qNode = new queueNode(data)

        // if queue is empty 
        if (this.isEmpty()){
            // point front and back to new node   
            this.front = this.back = qNode;  
        }
        // else the queue is not empty 
        else{
            // push node to back of the queue
            // by pointing the last node to the newly created node 
            this.back.next = qNode;

            // move back pointer  to new node 
            this.back = qNode;

        }
        this.print();

    }

    // function dequeue
    dequeue(){
        // pointer to front of the queue 
        let qNode = this.front;

        // if queue is not empty 
        if(!this.isEmpty()){

            // move front to the next data 
            this.front = this.front.next;
        }

        // check if front is null 
        if(!this.front){

            // set back to null 
            this.back = null;
        }
        // print 
        this.print();

        return qNode;
    }

    // function clear data of queue 
    qClear(){
        this.front = null;
    }
        
    
    // function print 
    print(){
        
            let qList ="";
            let current = this.front;
            qList+="<ol>";
            while(current){
                qList+= "<li>"+current.data+"</li>";

                current = current.next;
            }
            qList+="</ol>";
            document.getElementById('qResult').innerHTML=qList
        
    }
        
}
    let q = new Queue();

    let enqueue = document.getElementById('enq');
    let dequeue = document.getElementById('deq');
    let qClear = document.getElementById('clr');
    
    enqueue.onclick = function(){
        let insertData = document.getElementById('insertData').value;
        q.enqueue(insertData);
        
    }

    dequeue.onclick = function() {
        q.dequeue();
    }

    qClear.onclick = function () {
        q.qClear();
        q.print();
    }
    

    // q.enqueue(1);
    // q.enqueue("E");

    // q.dequeue();
    // q.dequeue();
