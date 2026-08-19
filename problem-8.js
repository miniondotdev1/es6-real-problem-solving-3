// Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.

const applyBonusPoints = (users, bonus)=> {
    const result = users.map(user => {
        return {
            ...user,
            points: user.points + bonus
        }
    })
    return result
}

const users = [{ name: "Rafi", points: 20 }];
const bonus = 5; 

console.log(applyBonusPoints(users, bonus));