const monthYear = document.getElementById("monthYear");
const calendar = document.getElementById("calendar");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const taskModal = document.getElementById("taskModal");
const taskInput = document.getElementById("taskInput");
const saveTask = document.getElementById("saveTask");
const deleteTask = document.getElementById("deleteTask");
const cancelTask = document.getElementById("cancelTask");
let currentDate = new Date();
let selectedDate = "";
// sabai task store garne
let tasks = JSON.parse(localStorage.getItem("tasks")) || {};
const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];
// month ra year show garne
function updateMonth()
{
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear().toString().slice(-2);
    monthYear.textContent = `${month}'${year}`;
}
// calendar create garne
function generateCalendar()
{
    // old dates remove gareko
    calendar.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // month ko first day find garne
    const firstDay = new Date(year, month, 1).getDay();

    // number of days in month find garne
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // empty boxes before day 1
    for (let i = 0; i < firstDay; i++)
    {
        const emptyBox = document.createElement("div");
        emptyBox.classList.add("h-[90px]","border","border-[#ccc]","relative","p-[5px]","overflow-y-auto","empty");
        calendar.appendChild(emptyBox);
    }
    
    // date boxes create garne
    for (let day = 1; day <= daysInMonth; day++)
    {
        const dayBox = document.createElement("div");
        dayBox.className = "h-[90px] border border-[#ccc] relative p-[5px] overflow-y-auto";

        const today = new Date();

        if(
            day == today.getDate() && month == today.getMonth() && year == today.getFullYear()
        )
        {
            dayBox.classList.add("rounded-[10px]","border-2","border-[#fedada]");
        }

        const dateKey = `${year}-${month + 1}-${day}`;

        dayBox.innerHTML = `
            <div class="absolute top-[5px] right-[5px]">${day}</div>
            <div class="mt-5 text-left text-xs text-[#dfafaf]"></div>
        `;

        const taskContainer = dayBox.querySelector(".mt-5.text-left.text-xs.text-\\[\\#dfafaf\\]");

        // task dekhaune
        if(tasks[dateKey])
        {
            const firstTask = document.createElement("p");
            firstTask.className = "my-[2px] whitespace-nowrap overflow-hidden text-ellipsis break-words";
            firstTask.textContent = "• " + tasks[dateKey][0];
            taskContainer.appendChild(firstTask);

            if(tasks[dateKey].length > 1)
            {
                const others = document.createElement("p");
                others.className = "my-[2px] whitespace-nowrap overflow-hidden text-ellipsis break-words";
                others.textContent = `+${tasks[dateKey].length - 1} others`;
                taskContainer.appendChild(others);
            }
        }

        // task add garna lageko
        dayBox.addEventListener("click", function()
        {
            selectedDate = dateKey;

            if(tasks[selectedDate])
            {
                taskInput.value = tasks[selectedDate].join("\n");
            }
            else
            {
                taskInput.value = "";
            }

            taskModal.style.display = "flex";
        });

        calendar.appendChild(dayBox);
    }

    // empty box add garne
    const totalBoxes = firstDay + daysInMonth;
    const remaining = 42 - totalBoxes;

    for (let i = 0; i < remaining; i++)
    {
        const empty = document.createElement("div");
        empty.className = "h-[90px] border border-[#ccc] relative p-[5px] overflow-y-auto";
        calendar.appendChild(empty);
    }
}
// save button
saveTask.addEventListener("click", function()
{
    const value = taskInput.value.trim();

    if(value === "")
    {
        return;
    }

    // existing task edit garne
    tasks[selectedDate] = value
        .split("\n")
        .filter(task => task.trim() !== "");

    // local storage ma save garne
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskModal.style.display = "none";

    // calendar refresh garne
    generateCalendar();
});

// delete button
deleteTask.addEventListener("click", function()
{
    delete tasks[selectedDate];

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    taskModal.style.display = "none";

    generateCalendar();
});

// cancel button
cancelTask.addEventListener("click", function()
{
    taskInput.value = "";
    taskModal.style.display = "none";
});
// next month button
nextBtn.addEventListener("click", function()
{
    currentDate.setMonth(currentDate.getMonth() + 1);

    updateMonth();
    generateCalendar();
});

// previous month button
prevBtn.addEventListener("click", function()
{
    currentDate.setMonth(currentDate.getMonth() - 1);

    updateMonth();
    generateCalendar();
});

// Run when page loads
updateMonth();
generateCalendar();