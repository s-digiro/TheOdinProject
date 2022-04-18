class GameRow {
    0 = null;
    1 = null;
    2 = null;
}

let turn = 'x';

const board = {
    0: new GameRow(),
    1: new GameRow(),
    2: new GameRow(),

    winner() {
        for (let i = 0; i < 3; i++) {
            if (
                this[i][0]
                && this[i][0] == this[i][1]
                && this[i][1] == this[i][2]
            ) return this[i][0];

            if (
                this[0][i]
                && this[0][i] == this[1][i]
                && this[1][i] == this[2][i]
            ) return this[0][i];
        }

        if (
            this[0][0]
            && this[0][0] == this[1][1]
            && this[1][1] == this[2][2]
        ) return this[1][1]

        if (
            this[0][2]
            && this[0][0] == this[1][1]
            && this[1][1] == this[2][0]
        ) return this[1][1]

        return null;
    }
}

function onLoad() {
    document.querySelectorAll('.tile')
        .forEach(elem => elem.addEventListener('click', (e) => {
            const elem = e.target;
            const y = elem.getAttribute('y');
            const x = elem.getAttribute('x');

            elem.innerText = turn;
            board[y][x] = turn;

            const winner = board.winner();

            if (winner) {
                document.querySelector('body')
                    .innerHTML = `${winner} is the winner!`;
            } else {
                turn = turn === 'x' ? 'o' : 'x';
            }
        }));
}