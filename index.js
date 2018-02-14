var user_actions, user_choose,
    computer = Math.floor(Math.random() * (100 - 1) + 1);

function menu () {
    user_actions = Number(prompt('What do you want to do?\n 1.- Play\n 2.- Exit'));
        switch (user_actions) {
            case 1:
                start_game();
                break;
            default:
                break;
        }
        while (user_actions != 2) {
            menu();
            break;
        }
}

function start_game () {
   user_choose = Number(prompt('Choose\n 1.- Rock\n 2.- Paper\n 3.- Scissors'));
    switch (user_choose) {
        case 1:
            user_choose = 'Rock';
            break;
        case 2:
            user_choose = 'Paper';
            break;
        case 3:
            user_choose = 'Scissors';
    }
    computer_select();
}

function computer_select () {
        if (computer > 0 && computer < 30) {
            computer = 'Rock';
        } else if (computer > 29 && computer < computer < 60) {
            computer = 'Paper';
        } else {
            computer = 'Scissors';
        }
        compareem();
}

function compareem () {
    if (computer == 'Rock' && user_choose == 'Paper'
     || computer == 'Paper' && user_choose == 'Scissors'
     || computer == 'Scissors' && user_choose == 'Rock') {
        
        alert(`Me, ${computer}\n You, ${user_choose}\n YOU WON!!!`);
        
    } else if (computer == 'Rock' && user_choose == 'Scissors'
    || computer == 'Paper' && user_choose == 'Rock'
    || computer == 'Scissors' && user_choose == 'Paper') {
        
        alert(`Me, ${computer}\n You, ${user_choose}\n I WON!!!`);
        
    } else {
        
        alert(`Me, ${computer}\n You, ${user_choose}\n IT IS A MATCH!!!`);
        
    }
}

menu();