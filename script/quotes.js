const quotes = [
    {   //1
        quotes : "저는 자랄 때 아버지가 투표하지 않는다면 그냥 닥치고 있으라 하셨기 때문에 투표합니다.",
        author : "윌 스미스",
    },
    {   //2
        quotes : "투표는 탄환보다 강하다.",
        author : "에이브러햄 링컨",
    },
    {   //3
        quotes : "정의로운 사회는 교회가 아닌 정치를 통해 실현되어야 합니다.",
        author : "베네딕토 16세",
    },
    {   //4
        quotes : "무지한 사람에게 침묵만큼 좋은 것은 없다.",
        author : "사디",
    },
    {   //5
        quotes : "엉터리로 배운 사람은 아무것도 모르는 사람보다 더 어리석다.",
        author : "벤자민 프랭클린",
    },
    {   //6
        quotes : "배우면서 생각하지 않으면 이득이 없고, 생각하되 배움이 없으면 위험하다.",
        author : "논어",
    },
    {   //7
        quotes : "지식은 사랑이자, 빛이자, 통찰력이다.",
        author : "헬렌 켈러",
    },
    {   //8
        quotes : "모든 인간은 태어나면서부터 알기를 원한다.",
        author : "아리스토텔레스",
    },
    {   //9
        quotes : "내가 아는 모든 것은 아무 것도 모른다는 것이다.",
        author : "소크라테스",
    },
    {   //10
        quotes : "지혜는 고통을 통해 생긴다.",
        author : "아이스퀼로스",
    },
    ]

const quoteBox = document.querySelector("#quote span:first-child");
const authorBox = document.querySelector("#quote span:last-child");

function paintingQuotes(){
    const quoteIndex = Math.floor(Math.random()*quotes.length)
    quoteBox.innerText = quotes[quoteIndex].quotes;
    authorBox.innerText = quotes[quoteIndex].author;
}

paintingQuotes();