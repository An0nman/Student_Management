// Select the table container
let tableContainer = document.querySelector(".table-container");

// Initially hide the table container
tableContainer.style.display = "none";

// Updated data for tables
const data = {
    students: [
        { id: "001", name: "John Doe", class: "X", section: "A" },
        { id: "002", name: "Jane Smith", class: "X", section: "B" },
        { id: "003", name: "Mike Johnson", class: "IX", section: "A" },
        { id: "004", name: "Sarah Williams", class: "IX", section: "C" },
        { id: "005", name: "Tom Brown", class: "X", section: "A" },
        { id: "006", name: "Shan Brown", class: "X", section: "A" }
    ],
    teachers: [
        { id: "T001", name: "Mr. Smith", class: "X", section: "A" },
        { id: "T002", name: "Ms. Davis", class: "X", section: "B" },
        { id: "T003", name: "Mrs. Johnson", class: "IX", section: "A" },
        { id: "T004", name: "Mr. Brown", class: "IX", section: "C" }
    ],
    classes: [
        { id: "C001", name: "Class X", section: "A", students: 40 },
        { id: "C002", name: "Class IX", section: "B", students: 35 },
        { id: "C003", name: "Class VIII", section: "A", students: 30 },
        { id: "C004", name: "Class VII", section: "C", students: 25 }
    ]
};

// Function to generate table HTML
function generateTable(dataArray, headers) {
    // Create the table structure
    let tableHtml = `
        <table>
            <thead>
                <tr>
                    ${headers.map(header => `<th>${header}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
                ${dataArray.map(row => `
                    <tr>
                        ${Object.values(row).map(value => `<td>${value}</td>`).join("")}
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
    return tableHtml;
}

// Functions to display specific tables
function showStudentsTable() {
    const headers = ["ID", "Name", "Class", "Section"];
    const tableHtml = generateTable(data.students, headers);
    displayTable(tableHtml);
}

function showTeachersTable() {
    const headers = ["ID", "Name", "Class", "Section"];
    const tableHtml = generateTable(data.teachers, headers);
    displayTable(tableHtml);
}

function showClassesTable() {
    const headers = ["ID", "Name", "Section", "Students Count"];
    const tableHtml = generateTable(data.classes, headers);
    displayTable(tableHtml);
}

// Function to display a table
function displayTable(html) {
    tableContainer.innerHTML = html;
    tableContainer.style.display = "block";
}
