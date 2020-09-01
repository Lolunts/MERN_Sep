/*
What is OOP?

Why is it so useful?

How do we create classes?
*/


class Bug {
    constructor(name="Buzz", /* wings=0, */ legs=6){
        this.name = name;
        // this.wings = wings;
        this.legs = legs;
    }

    crawl(){
        return `${this.name} crawled around on their ${this.legs} legs. `;
    }

    // fly(){
    //     console.log(`${this.name} flutters their ${this.wings} wings, and flies about.`);
    // }
}

class Arachnid extends Bug {
    constructor(name){
        super(name, 8);
    }

    crawl(){
        let string = super.crawl();
        console.log(string + "Gross, too many legs.");
        return this;
    }
}

class Insect extends Bug {
    constructor(name, wings){
        super(name);
        this.wings = wings;
    }

    crawl(){
        let string = super.crawl();
        console.log(string + "they did this because they are an insect.");
        return this;
    }

    fly(){
        if(this.wings == 0){
            console.log(`${this.name} tried to fly, but instead they just plummetted to their doom.`);
        }
        else {
            console.log(`${this.name} fluttered their ${this.wings} wings and flew!`);
        }
        return this;
    }
}


// let myBug = new Bug("Buzz", 2, 6);

// let sticky = new Bug("Stick", 0, 6);

// myBug.crawl();
// myBug.fly();

// sticky.crawl();

// let buggy = new Bug("Buggy");
// let charlotte = new Arachnid("Charlotte");

// charlotte.crawl();

// let bee = new Insect("Fuzz", 2);

// console.log(bee);
// console.log(buggy);

// bee.crawl();
// buggy.crawl();

// bee.fly();

let buzz = new Insect("Buzz", 2);

buzz.crawl().fly();