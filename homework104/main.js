const user = {
    name:'Vladimir',
    age:20,
    isHuman:true,
    sayHello(arg1){
        return `Hello ${arg1}`
    }

}
console.log(user.sayHello('Vladimir'))

const descUsers = [
    {
        name: 'Bob' ,
        age:99,
        isAdmin:false
    },
    {
        name:'Vlad',
        age:23,
        isAdmin:false
    },
    {
        name:'Sonya',
        age:35,
        isAdmin:true
    },
    {
        name:'Anna',
        age:5,
        isAdmin:false
    },
    {
        name:'Zedans',
        age:-200,
        isAdmin:false
    }
]
function consinder(arg0){
let amount = 0
for (let i = 0;i<arg0.length;i++){
    if(arg0[i].isAdmin === false) {
        amount= amount + 1
    }
    
}
return `Количество обычных пользователей:${amount}`
}
console.log(consinder(descUsers))