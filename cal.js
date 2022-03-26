class Calculator{
    expression = ''
    result = ''
    equal = 'false'
  //CLEAR
    clear(){
        this.expression = ''
        this.result = ''

    }

  //append

    append (val = '', Prepend = false){
        if(Prepend){
            this.expression = `-${this.expression}`
        }else{
            if(this.result && isNaN(val)){
                this.expression = this.result + val
                this.equal = false
            } else if (this.equal && !isNaN(val)){
                this.expression = val
                this.equal = false
            }else{

                this.expression += val
            }
        }
    }

   //delete

    delete(){
        this.expression = this.expression.slice(0, -1)
    }

   //compute

    compute(){
        this.equal = true
        try{
            this.result = eval(this.expression)
        } catch(e){
            this.result = 'syntax Error'
        }
}  }
    
const calculator=  new Calculator()
const numbtns = document.querySelectorAll('.numpad button')
const display = document.querySelector('.screen')


numbtns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        if(btn.innerText === '='){
            calculator.compute()
            display.innerText = calculator.result
        }else if  (btn.innerText === 'c'){
            calculator.clear()
            display.innerText = ''
        }else if (btn.innerText === '-/+'){

        }else if (btn.innerText === 'x'){
            calculator.append('*')
            display.innerText = calculator.expression
        }else {
            calculator.append(btn.innerText)
            display.innerText = calculator.expression}

    })   
})