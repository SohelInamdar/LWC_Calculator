import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {

    @track prevRecords = [];
    @track result = 0;
    @track cResult;
    num1;
    num2;
    
    @track enabled = false;

    getnum(event) {

        const namebox = event.target.name;
        if(namebox === "FirstNumber"){
            this.num1 = event.target.value;
        }else if (namebox === "SecondNumber" ){
            this.num2 = event.target.value;
        }
        console.log(typeof(this.num1));
    }

    addNumber() {
        this.result = parseInt(this.num1) + parseInt(this.num2);
        this.cResult = 'Result of ' + (this.num1) + ' + ' + (this.num2) + ' is ' + (this.result);    
        this.prevRecords.push(this.cResult);
        console.log(typeof(this.result));

    }

    subNumber() {
        this.result = parseInt(this.num1) - parseInt(this.num2);  
        this.cResult = 'Result of ' + (this.num1) + ' - ' + (this.num2) + ' is ' + (this.result);    
        this.prevRecords.push(this.cResult);
        console.log(typeof(this.result));
        

    }
    multiplyNumber() {
        this.result = parseInt(this.num1) * parseInt(this.num2);        
        this.cResult = 'Result of ' + (this.num1) + ' * ' + (this.num2) + ' is ' + (this.result);    
        this.prevRecords.push(this.cResult);
    }

    divideNumber(){
        this.result = parseInt(this.num1) / parseInt(this.num2);        
        this.cResult = 'Result of ' + (this.num1) + ' / ' + (this.num2) + ' is ' + (this.result);    
        this.prevRecords.push(this.cResult);
    }
    


    enableCheckbox(event) {
        this.enabled = event.target.checked;
    }
}