function calculateWater() {

    let people = Number(document.getElementById("people").value);
    let showers = Number(document.getElementById("showers").value);
    let showerTime = Number(document.getElementById("showerTime").value);
    let laundry = Number(document.getElementById("laundry").value);
    let carWash = Number(document.getElementById("carWash").value);

    // Approximate water usage
    let showerWater = people * showers * showerTime * 9;

    let laundryWater = (laundry * 60) / 7;

    let carWater = (carWash * 100) / 7;

    let basicWater = people * 60;

    let totalWater = Math.round(
        showerWater +
        laundryWater +
        carWater +
        basicWater
    );

    document.getElementById("waterResult").textContent = totalWater;

    let message = document.getElementById("waterMessage");

    if (totalWater < 150) {

        message.textContent =
            "Great! Your estimated usage is relatively low. Keep saving water!";

    } else if (totalWater < 250) {

        message.textContent =
            "Your usage is moderate. Try reducing shower time and unnecessary water use.";

    } else {

        message.textContent =
            "Your usage is quite high. Small daily changes can help you save a lot of water.";

    }

    document.getElementById("result").style.display = "block";
}
function showWaste(type) {

    let title = document.getElementById("wasteTitle");
    let text = document.getElementById("wasteText");
    let tip = document.getElementById("wasteTip");

    if (type === "tap") {

        title.textContent = "Running Tap";

        text.textContent =
            "A running tap can waste water unnecessarily during activities such as brushing or washing dishes.";

        tip.textContent =
            "Turn off the tap when it is not needed and use only the amount of water required.";

    }

    else if (type === "shower") {

        title.textContent = "Long Shower";

        text.textContent =
            "Long showers can use a large amount of water, especially when the shower is running continuously.";

        tip.textContent =
            "Reduce shower time and turn off the water while applying soap or shampoo.";

    }

    else if (type === "car") {

        title.textContent = "Hose Washing";

        text.textContent =
            "Using a continuously running hose for vehicle washing can use much more water than necessary.";

        tip.textContent =
            "Use a bucket and cloth instead of keeping the hose running.";

    }

    else if (type === "leak") {

        title.textContent = "Water Leaks";

        text.textContent =
            "Small leaks from taps, pipes and toilets can continue wasting water over long periods.";

        tip.textContent =
            "Check taps and pipes regularly and repair leaks as soon as possible.";

    }

    document.getElementById("wasteResult").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}