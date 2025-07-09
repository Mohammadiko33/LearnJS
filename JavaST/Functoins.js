// const users = [
// {id: 1,name: "mohammad",age: 18},
// {id: 2,name: "reza",age: 16},
// {id: 3,name: "amir",age: 19},
// {id: 4,name: "ali",age: 18},
// {id: 5,name: "saeed",age: 22},
// ]

// let userCount = users.length

const isLogin = userID => {
let isUserInUsers = users.some(user => user.id === userID)

return isUserInUsers
}

// export const userRigister = (name, age) => {
//     let newUserObj = {
//         id : Math.floor(Math.random * 100),
//         name: name,
//         age: age
//     }

//     users.push(newUserObj)

//     return users
// }


// export function sum(num1 , num2){
//     let result = num1 + num2
//     return result
// }
// export {isLogin , userRigister , userCount}
export {isLogin}