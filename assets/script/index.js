!(function () {

    // VARS
    let op; // open page

    // LISTENERS
    document.querySelectorAll(".pg").forEach(el => el.addEventListener("click", () => content(`content-${el.id}`)));
    document.getElementById("home-btn").addEventListener("click", function () { content(this.id) });

    // OPEN & CLOSE CONTENT PAGE
    function content(pg) {

        let t = document.getElementById(pg), d_b = 0, d_c = 0, tt = "100vh", br = "50vw", ds = "none";
        let n = document.querySelectorAll(".nav");

        if (pg !== "home-btn") {
            op = pg;
            tt = 0;
            br = 0;
            ds = "block";
            d_b = 450;
        } else {
            t = document.getElementById(op);
            d_c = 50;
        }

        setTimeout(() => { t.style.top = tt }, d_c);
        setTimeout(() => { t.style.borderTopLeftRadius = br }, d_b);
        setTimeout(() => { t.style.borderTopRightRadius = br }, d_b);
        setTimeout(() => { document.getElementById("home-btn").style.display = ds }, d_b);
        setTimeout(() => { pg === "home-btn" ? n.forEach(a => a.style.color = "#222") : n.forEach(a => a.style.color = "#ddd") }, d_b);
        setTimeout(() => { document.getElementById("body").style.setProperty("--cc", `url("data:image/svg+xml,%3Csvg width='8mm' height='8mm' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='3.5' style='fill:none;stroke:%23eee;stroke-width:.5;opacity:.6;'/%3E%3C/svg%3E") 7 7, default`); },1200);

        console.log(pg);
        // REVEALS
        if (pg === "content-contact") setTimeout(() => {
            console.log("revealing");
            document.getElementById("hi").style.top = "-100%";
        }, 1200);
    }

})();