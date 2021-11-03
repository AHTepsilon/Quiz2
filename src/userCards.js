export class userCards
{
    constructor(user)
    {
        this.user = user;
    }

    render()
    {
        let card = document.createElement("div");
        card.className = "user-card";

        let cardName = document.createElement("h4");

        cardName.id = "cardName";
        cardName.innerHTML = this.user.NAME;

        let cardCode = document.createElement("h5");

        cardCode.id = "cardId";
        cardCode.innerHTML = this.user.CODE;

        
        let cardCourse = document.createElement("h5");

        cardCourse.id = "cardCourse";
        cardCourse.innerHTML = this.user.COURSE;

        let plusBtn = document.createElement("button");

        plusBtn.id = "plusButton";
        plusBtn.innerHTML = "+";

        card.appendChild(cardCourse);
        card.appendChild(cardName);
        card.appendChild(cardCode);
        card.appendChild(plusBtn);

        return card;
    }
}