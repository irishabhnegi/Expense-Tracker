const expenseInput = document.getElementById('expense')
const dateInput = document.getElementById('date')
const amountInput = document.getElementById('amount')

const btn = document.querySelector('.submit-btn')

const table = document.querySelector('#table2')


btn.addEventListener('click', () => {
    const expenseVal = expenseInput.value;
    const dateVal = dateInput.value;
    const amountVal = amountInput.value

    const markup = `
    <table class="table2">
            <tr>
            <td class="added" >${expenseVal}</td>
            <td class="added">${dateVal}</td>
            <td class="added">${amountVal}</td>
            <td><button class="delete-btn">X</button></td>
            </tr>
    </table>

    `

    // const markup2 = `
    // <button class="delete-btn">X</button>
    // `

    table.insertAdjacentHTML("afterbegin", markup)
    // table.insertAdjacentHTML('afterend', markup2)

})

table.addEventListener('click', (event) => {
    if (event.target.className === "delete-btn") {
        event.target.closest(".table2").remove()
        // console.log(event.target.closest(".table2"))

    }

})

