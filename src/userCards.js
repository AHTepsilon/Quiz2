import { getDatabase, ref, set, onValue, push } from 'firebase/database';

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

        cardName.className = "cardName";
        cardName.innerHTML = this.user.NAME;

        let cardParticip = document.createElement("h5");

        cardParticip.className = "cardParticip";
        cardParticip.innerHTML = this.user.PART;

        let cardCode = document.createElement("h5");

        cardCode.className = "cardId";
        cardCode.innerHTML = this.user.CODE;
        
        let cardCourse = document.createElement("h5");

        cardCourse.className = "cardCourse";
        cardCourse.innerHTML = this.user.COURSE;

        let plusBtn = document.createElement("button");

        plusBtn.className = "plusButton";
        plusBtn.innerHTML = "+";

        plusBtn.addEventListener("click", (e, ev) =>
        {
            const db = getDatabase();
            const userPartRef = ref(db, "users/" + this.user.CODE + "/" + "PART");
            console.log(userPartRef);
            const newPart = this.user.PART += 1;

            console.log(newPart);
        
            //const dbRef = ref(db, "user/ " + newUser.NAME);
            set(userPartRef, newPart);
        });

        card.appendChild(cardCourse);
        card.appendChild(cardName);
        card.appendChild(cardParticip);
        card.appendChild(cardCode);
        card.appendChild(plusBtn);

        return card;
    }
}