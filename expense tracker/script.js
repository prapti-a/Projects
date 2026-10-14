const amount = document.getElementById("amount");
const category = document.getElementById("category");
const note = document.getElementById("note");
const addbtn = document.getElementById("addbtn");
const expenselist = document.getElementById("expenselist");
const totalamount = document.getElementById("totalamount");

let total = 0;

addbtn.addEventListener("click", function() {

    const expenseamount = amount.value;
    const expensecategory = category.value;
    const expensenote = note.value;

    if (expenseamount === "" || expensecategory === "" || expensenote === "") {
        return;
    }

    const date = new Date();

    total += Number(expenseamount);

    totalamount.textContent = `Rs. ${total}`;

    expenselist.innerHTML += `
        <div class="expenseitem" data-amount="${expenseamount}">
            <div>
                <strong>${expensecategory}</strong>
                <p>${expensenote}</p>
                <p>${date.toLocaleDateString()}</p>
            </div>

            <span>Rs. ${expenseamount}</span>

            <button class="deletebtn">x</button>
        </div>
    `;

    amount.value = "";
    category.value = "";
    note.value = "";
});


expenselist.addEventListener("click", function(event) {

    if (event.target.classList.contains("deletebtn")) {

        const expense = event.target.parentElement;

        const popup = document.createElement("div");

        popup.innerHTML = `
            <div>
                <p>Are you sure you want to delete this expense?</p>

                <div>
                    <button id="canceldelete">Cancel</button>
                    <button id="confirmdelete">Delete</button>
                </div>
            </div>
        `;

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

        const box = popup.firstElementChild;

        box.style.backgroundColor = "white";
        box.style.padding = "25px";
        box.style.borderRadius = "10px";
        box.style.textAlign = "center";
        box.style.width = "300px";

        document.body.appendChild(popup);

        document.getElementById("canceldelete").onclick = function() {
            popup.remove();
        };

        document.getElementById("confirmdelete").onclick = function() {

            const expenseamount = Number(expense.dataset.amount);

            total -= expenseamount;

            totalamount.textContent = `Rs. ${total}`;

            expense.remove();
            popup.remove();
        };
    }
});