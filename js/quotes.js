const quotes = [
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
        author: "괴테",
    },
    {
        quote: "닫혀있기만 한 책은 블록일 뿐이다.",
        author: "토마스 풀러",
    },
    {
        quote: "오늘이라는 날은 두 번 다시 오지 않는다는 것을 잊지 말라.",
        author: "단테",
    },
    {
        quote: "고난이 지나면 반드시 기쁨이 스며든다.",
        author: "괴테",
    },
    {
        quote: "그대의 하루하루를 그대의 마지막 날이라고 생각하라.",
        author: "호라티우스",
    },
    {
        quote: "변명 중에서도 가장 어리석고 못난 변명은 시간이 없어서라는 변명이다.",
        author: "에디슨",
    },
    {
        quote: "어디를 가든지 마음을 다해 가라.",
        author: "공자",
    },
    {
        quote: "자신감은 위대한 과업의 첫째 요건이다.",
        author: "사무엘 존슨",
    },
    {
        quote: "승리는 가장 끈기있는 자에게 돌아간다.",
        author: "나폴레옹",
    },
    {
        quote: "시간과 정성을 들이지 않고 얻을 수 있는 결실은 없다.",
        author: "그라시안",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;