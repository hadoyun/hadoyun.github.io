const quotes=[
    {
        quote: "어제는 바로 오늘이야!",
        autor: "푸코",
    },
    {
        quote: "인간의 찬가는 용기의 찬가! 인간의 훌륭함은 용기의 훌륭함!!!",
        autor: "윌 A 체페리",
    },
    {
        quote: "북풍이 바이킹을 키웠다!",
        autor: "윌 A 체페리",
    },
    {
        quote: "길이라는 것은 스스로 만들어 나가는 거다",
        autor: "쿠죠 죠타로",
    },
    {
        quote: "이 키시베 로한이 가장 좋아하는 일중 하나는 자기 스스로 강하다고 생각하는 놈에게 [NO] 라고 거절해주는 일이다",
        autor: "키시베 로한",
    },
    {
        quote: "[각오]란! 암흑의 황야에서 길을 열어나가는 일이다!",
        autor: "죠르노 죠바나",
    },
    {
        quote: "모든 것을 놓아준 자는 최후에 모든 것을 얻는다",
        autor: "슈가 마운틴",
    },
];

const quoteBox = document.querySelector("#quote span:first-child");
const autorBox = document.querySelector("#quote span:second-child");

function paintingQuotes(){
    quoteBox.innerText = quotes[Math.floor(Math.random()*quotes.length)].quote;
    autorBox.innerText = quotes[Math.floor(Math.random()*quotes.length)].autor;
}