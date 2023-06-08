const generateNumber = function(numberList)
{
    const number = Math.floor(Math.random() * 76)
    //Impedisco che un numero già presente capiti di nuovo
    if(numberList.includes(number))
        generateNumber(numberList)
    return number

}

const fillCells = function(number){
    const cells = document.getElementsByClassName(number)
    console.log(number, cells)
    for(let  cell of cells)
        cell.classList.add("selected")
}

const getRandomNumber = document.getElementById("get-number")
getRandomNumber.addEventListener("click", function(e)
{
    e.preventDefault()


    if (submitted)
    {
        //Genero un numero casuale
        const number = generateNumber(randomNumbers)
        randomNumbers.push(number)
        //Coloro il numero uscito (momentaneo)
        fillCells(number)        
    }
    else
        alert("Selezionare prima il numero di giocatori!")


}) 


const generateMainBoard = function()
{
    const tabellone = document.getElementById("board")
    //Infilo le 76 celle nella board
    for(let i = 0; i < 76; i++)
    {
        const cell = document.createElement("div")
        cell.innerText = i + 1
        cell.classList.add("cell")
        cell.classList.add(i)
        tabellone.appendChild(cell)
    }
}

const playerBoards = document.getElementById("get-players")
playerBoards.addEventListener("submit", function(e)
{
    e.preventDefault()
    if(!submitted)
    {
        submitted = true
        const nPlayer = document.getElementById("players-number").value

        //Ciclo sul numero di giocatori
        for(let i = 0; i < nPlayer; i++)
        {
            const playerBoardNumbers = []
            //Mi creo l'array con i numeri usciti e il div contenente la board e la appenmdo
            const playerBoard = document.createElement("div")
            playerBoard.innerHTML = `<h1> GIOCATORE ${i +1}</h1>`
            playerBoard.id = "player-board-" + (i + 1)
            playerBoard.classList.add("player-board")
            document.getElementById("players").appendChild(playerBoard)
    
            //Genero le celle per la board
            for(let nCell = 0; nCell < 24; nCell++)
            {
                const cell = document.createElement("div")
                //Mi segno i numeri che sono usciti per metterli randomicamente senza ripetizoni
                playerBoardNumbers.push(generateNumber(playerBoardNumbers))
                //Genero la cella e la pusho nella board
                cell.innerText = parseInt(playerBoardNumbers.slice(-1)) + 1
                cell.classList.add("cell")
                cell.classList.add(playerBoardNumbers.slice(-1))
                document.getElementById(playerBoard.id).appendChild(cell)
            }
        }
    }

})


const randomNumbers = []
let submitted = false
generateMainBoard()

