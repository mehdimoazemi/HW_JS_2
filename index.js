const calculator= {
    result:0,
    righthand:100,
    lefthand:40,
     mul () {
         this.result = this.righthand * this.lefthand
    },
    
    
    sub () {
        this.result = this.righthand - this.lefthand
    },
    
    total () {
        this.result = this.righthand + this.lefthand
    },
    
    division () {
        this.result = this.righthand / this.lefthand
    },
    
    
    
        
    }
    
    calculator.sub();
    console.log(calculator.result);
    