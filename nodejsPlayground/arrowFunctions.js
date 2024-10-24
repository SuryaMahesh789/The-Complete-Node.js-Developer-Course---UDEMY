const square = function (x)
{
    return x*x
}

const cube = (x) => {
    return x*x*x
}

const power4 = (x) =>  x*x*x*x


console.log(square(3))

console.log(cube(3))

console.log(power4(3))

console.log("----------------------------------------------")

const e = {
    name:'Bday party',
    printGuestList : function () {
        console.log('Guest list for '+this.name)
        }
}

e.printGuestList()
console.log("----------------------------------------------")


// arrow functions they don't bind their own this value
// arrow functions are not well suited when we wanna use this 

const ev = {
    name:'Bday party',
    printGuestList : () => {
        console.log('Guest list for '+this.name)
        }
}

ev.printGuestList()
console.log("----------------------------------------------")

const eve = {
    name:'Bday party',
    printGuestList(){
        console.log('Guest list for '+this.name)
        }
}

eve.printGuestList()
console.log("----------------------------------------------")


const even = {
    name:'Bday party',
    guestList:['Surya','Mahesh','Krishna'],
    printGuestList()
    {
        const that = this
        console.log('Guest list for '+this.name)

        this.guestList.forEach(function(guest){
            console.log(guest + " is attending "+that.name)
        })
    }
}

even.printGuestList()

console.log("----------------------------------------------")

const myevent = {
    name:'Bday party',
    guestList:['Surya','Mahesh','Krishna'],
    printGuestList()
    {
        console.log('Guest list for '+this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + " is attending "+this.name)
        })
    }
}

myevent.printGuestList()

