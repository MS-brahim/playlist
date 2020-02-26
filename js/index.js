class StackNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}   
    class LinkedSatck {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    
    // push
    push(data) {
       
        let node = new StackNode(data);
        node.next =  this.top;
        this.top = node;

        this.size++;
    }
    // poped
    pop() {
        let result = this.top;
        this.top = this.top.next;

        this.size--;
        return result.data;
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

    let ss = new LinkedSatck();
    let push = document.getElementById("push");
    let pop = document.getElementById("pop");
    let clear = document.getElementById("clear");
    let next = document.getElementById("next");

    // function push
    push.onclick = function() {
        let insertImg = document.getElementById("insertImg").value;
        if(insertImg.length > 0 ){
            ss.push(insertImg);
            ss.print();
        }else{
            alert("Add Image");
        }
    }
    // function pop
    pop.onclick = function() {
        ss.pop();
        ss.print();
    }
    // function clear
    clear.onclick = function(){
        ss.clear();
        ss.print();
    }
    // function next 
    // next.onclick = function() {
        
    // }