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
    }

})();