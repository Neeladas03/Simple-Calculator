function checkFLAMES() {
    let a = document.getElementById("name1").value.split("");
    let b = document.getElementById("name2").value.split("");
    flame(a, b);
}

function flame(a, b) {
    var l = 1;
    var n, m, sc = 0;
    var tc, rc = 0;
    var fc = 5;
    let c;
    let f = "flames";
    let q = a.join("");
    let w = b.join("");
    n = a.length;
    m = b.length;
    tc = n + m;

    for (var i = 0; i < n; i++) {
        c = a[i];
        for (var j = 0; j < m; j++) {
            if (c == b[j]) {
                a[i] = -1;
                b[j] = -1;
                sc = sc + 2;
                break;
            }
        }
    }

    rc = tc - sc;

    for (var i = 0; ; i++) {
        if (l == rc) {
            for (var k = i; k < f.length; k++) {
                f[k] = f[k + 1];
            }
            f[k+1]='\0';
            fc=fc-1;
            i=i-1
            l = 0;
        }
        if(i==fc){
            i=-1;
        }
        if(fc==0){
            break;
        }
        l++;
    }

    if (f[0] == 'e') {
        document.getElementById("result").innerHTML = q + " is ENEMY to " + w;
    } else if (f[0] == 'f') {
        document.getElementById("result").innerHTML = q + " is FRIEND to " + w;
    } else if (f[0] == 'm') {
        document.getElementById("result").innerHTML = q + " is going to MARRY " + w;
    } else if (f[0] == 'l') {
        document.getElementById("result").innerHTML = q + " is in LOVE with " + w;
    } else if (f[0] == 'a') {
        document.getElementById("result").innerHTML = q + " has more AFFECTION on " + w;
    } else {
        document.getElementById("result").innerHTML = q + " and " + w + " are SISTERS/BROTHERS ";
    }
}

document.getElementById("generateButton").addEventListener("click", checkFLAMES);