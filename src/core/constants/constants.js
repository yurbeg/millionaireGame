export const questions = [
    {
        question: "Ո՞րն է Ֆրանսիայի մայրաքաղաքը",
        options: ["Լոնդոն", "Փարիզ", "Հռոմ", "Բեռլին"],
        answer: 1 // B) Փարիզ
    },
    {
        question: "Ո՞վ է հայտնի գիտնականը, որը բացահայտեց էլեկտրոմագնիսական ինդուկցիան?",
        options: ["Ինշտեյն", "Ֆարադեյ", "Նյուտոն", "Գալիլեո"],
        answer: 1 // B) Ֆարադեյ
    },
    {
        question: "Ո՞ր երկրում է ծանոթ խորհրդանիշը՝ «Պիսա աշտարակը»?",
        options: ["Իտալիա", "Ֆրանսիա", "Հնդկաստան", "Իսպանիա"],
        answer: 0 // A) Իտալիա
    },
    {
        question: "Ո՞ր երաժշտական գործիքի անունն է «սկալա»?",
        options: ["դաշնամուր", "ջութակ", "գալար", "պղպջակ"],
        answer: 0 // A) դաշնամուր
    },
    {
        question: "Ինչ է Սառցե օվկիանոսի խորը ջրերում գտնվող կենդանի:",
        options: ["Անգելաձուկ", "Կրիպտոզոո", "Բրուտոպլանա", "ձուկ-ճոճ"],
        answer: 0 // A) Անգելաձուկ
    },
    {
        question: "Ո՞ր երկիրն ունի ամենաշատ բնակչությունը?",
        options: ["Հնդկաստան", "Չինաստան", "ԱՄՆ", "Ռուսաստան"],
        answer: 1 // B) Չինաստան
    },
    {
        question: "Ո՞րն է մեր մոլորակի ամենաբարձր գագաթը?",
        options: ["Կիլիմանջարո", "Էվերեստ", "Ալպեր", "Ատլաս"],
        answer: 1 // B) Էվերեստ
    },
    {
        question: "Ո՞րն է բանաստեղծ Բայրոնի ամենահայտնի ստեղծագործությունը?",
        options: ["Դոն Ժուան", "Չիլդ Հարոլդ", "Սկանդալ", "Էպոպե"],
        answer: 1 // B) Չիլդ Հարոլդ
    },
    {
        question: "Ո՞ր կաթվածի մասին է խոսքը, երբ մարդը չի կարող շարժվել?",
        options: ["Սրտի կաթված", "ուղեղի կաթված", "Անգիո-միոպաթիա", "Տոքսիկ կաթված"],
        answer: 1 // B) ուղեղի կաթված
    },
    {
        question: "Ո՞րն է բանաստեղծությունների հայտնի ժողովածուի անունը:",
        options: ["Անահիտ", "Համլետ", "Վարուժան", "Գոհար"],
        answer: 2 // C) Վարուժան
    },
    
];
export const backgroundGragient = 'linear-gradient(0deg, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 29%, rgba(9,9,121,1) 72%, rgba(0,212,255,1) 100%';
export const backgroundGragientHover =`linear-gradient(0deg,rgba(7, 110, 131, 0.567) 0%,rgba(6, 6, 88, 0.516) 29%,rgba(6, 6, 88, 0.516) 72%,rgba(7, 110, 131, 0.567) 100%)`;
export const regexpValidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export  const ROUTE_CONSTANTS = {
    LOGIN:"/login",
    REGSITER:"/register"
}
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [1];  // If we need the first number after 0 and 1
    
    let result = [1, 1];  // Start with the first two Fibonacci numbers 1, 1
    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result;
  }  
 export const  fibonacciArr = fibonacci(questions.length-1);