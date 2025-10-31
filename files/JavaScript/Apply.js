document.addEventListener("DOMContentLoaded", function () {
    let Discount1 = 0.95; // Discount for two courses (5%)
    let Discount2 = 0.9;  // Discount for three courses (10%)
    let Discount3 = 0.85; // Discount for more than three courses (15%)
    let CourseCount = 0;  // Number of selected courses
    let totalFees = 0;    // Total fees before discount
    let TOTAL = document.getElementById("Fees");
    let DISCOUNT = document.getElementById("Fees2");
    let FINALTOTAL = document.getElementById("Fees3");
    let Button = document.getElementById("Submit");
    let Send = document.getElementById("Send");


    Button.addEventListener("click", function () {
        calculateCourses();
        calculateFees();
        applyDiscount();
    });


    function calculateCourses() {
        CourseCount = 0; // 
        if (document.getElementById("First").checked) CourseCount++;
        if (document.getElementById("Second").checked) CourseCount++;
        if (document.getElementById("Thrid").checked) CourseCount++;
        if (document.getElementById("Fourth").checked) CourseCount++;
        if (document.getElementById("Fifth").checked) CourseCount++;
        if (document.getElementById("Sixth").checked) CourseCount++;
        if (document.getElementById("Seven").checked) CourseCount++;
    }


    function calculateFees() {
        totalFees = 0; // 
        if (document.getElementById("First").checked) totalFees += 1500;
        if (document.getElementById("Second").checked) totalFees += 1500;
        if (document.getElementById("Thrid").checked) totalFees += 1500;
        if (document.getElementById("Fourth").checked) totalFees += 1500;
        if (document.getElementById("Fifth").checked) totalFees += 750;
        if (document.getElementById("Sixth").checked) totalFees += 750;
        if (document.getElementById("Seven").checked) totalFees += 750;


        TOTAL.innerHTML = `Total Fees: $${totalFees}`;
    }


    function applyDiscount() {
        let discount = 0;
        let finalTotal = totalFees;

        if (CourseCount === 2) {
            discount = totalFees * (1 - Discount1);
            finalTotal = totalFees * Discount1;
            DISCOUNT.innerHTML = `Discount: 5% ($${discount.toFixed(2)})`;
        } else if (CourseCount === 3) {
            discount = totalFees * (1 - Discount2);
            finalTotal = totalFees * Discount2;
            DISCOUNT.innerHTML = `Discount: 10% ($${discount.toFixed(2)})`;
        } else if (CourseCount > 3) {
            discount = totalFees * (1 - Discount3);
            finalTotal = totalFees * Discount3;
            DISCOUNT.innerHTML = `Discount: 15% ($${discount.toFixed(2)})`;
        } else {
            DISCOUNT.innerHTML = `Discount: No Discount`;
        }


        FINALTOTAL.innerHTML = `Final Total: $${finalTotal.toFixed(2)}`;
    }


    Send.addEventListener("click", function () {
        if (CourseCount === 0) {
            alert("Please Choose Atleast One Course")
        }
        else {
            alert("Thank you for your registration. We will get back to you shortly.");
        }
    });
});
