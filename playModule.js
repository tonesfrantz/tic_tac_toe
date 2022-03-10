// Open module
// press ok and then move to new page where the Tic-Tac-Toe is set up.
// Begin game.

function renderModal() {
    const modal = document.getElementById('playModal');
    modal.innerHTML = `
    <div class="modal-content">
        <section class="modal-characters">
            <h3>Player 1</h3>
            <img id="player1Character"></img>
            <h3>Player 2</h3>
            <img id="player2Character"></img>
        </section>
        <section class = "modal-buttons">
            <a href="index.html"><button>Start Again</button><a/>
            <a href="game.html"><button>Play Game</button><a/>
        </section>
    </div>
        `;
}
