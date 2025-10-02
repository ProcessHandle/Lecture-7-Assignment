let section1 = document.getElementById('section1')
let section2 = document.getElementById('section2')
let btn = document.createElement('button')
let inp = document.createElement('input')
let ulholder = document.createElement('ul')
let selection = document.createElement('select')
let default_txt = 'Enter a number here'

selection.innerHTML = `
    <option value="Red">Red</option>
    <option value="Green">Green</option>
    <option value="Blue">Blue</option>
    <option value="Random">Random</option>
    <option value="Reset">Reset</option>
    `

btn.innerText = 'Generate Multiplication Table'
btn.style.backgroundColor = rcolor()
inp.placeholder = default_txt
section1.append(inp)
section1.append(btn)
section2.append(selection)

function rcolor() { // 16777215 is the decimal form of the hex #FFFFFF. We then convert our random number to base 16 and make sure it starts with 0's
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}

function genbuttons(int) {
    for (let i = 0; i < int; i++) {
        let newbtn = document.createElement('button')
        let newclr = rcolor()
        newbtn.style.backgroundColor = newclr
        newbtn.textContent = `Color: ${newclr}`
        newbtn.dataset.firstcolor = newclr
        section2.append(newbtn)
    }
}

function changecolors(color) {
    const btns = document.querySelectorAll('#section2 button');
    btns.forEach(btn => {
        let newc
        if (!color) {
            newc = rcolor()
        }
        else {
            newc = color
        }
        btn.style.backgroundColor = newc;
        btn.textContent = `Color: ${newc}`;
    });
}

selection.addEventListener('change', () => {
    let choice = selection.value
    if (choice === "Red") {
        changecolors(choice)
    } else if (choice === "Green") {
        changecolors(choice)
    } else if (choice === "Blue") {
        changecolors(choice)
    } else if (choice === "Random") {
        changecolors()
    } else if (choice === "Reset") {
        document.querySelectorAll('#section2 button').forEach(btn => {
            let firstc = btn.dataset.firstcolor
            btn.style.backgroundColor = firstc;
            btn.textContent = `Color: ${firstc}`;
        });
    }

})

btn.addEventListener('click', () => {
    let number = parseInt(inp.value)

    if (isNaN(number)) {
        inp.placeholder = "Invalid, try again."
        ulholder.innerHTML = '' // Clear just incase there is already content.
        inp.value = '' // Reset. 
        setTimeout(() => {
            inp.placeholder = default_txt
        }, 750); // 3/4 of a second timeout so we can display if its wrong but not see it forever or flash it for a split ms.
        return;
    }

    ulholder.innerHTML = '' // Clear everytime so we arent filling the page
    section1.append(ulholder);

    for (let i = 1; i <= 12; i++) {
        let liholder = document.createElement('li') // Create a list item and change the color and content. 
        liholder.style.color = "White"
        liholder.textContent = `${number} * ${i} = ${number * i}`
        ulholder.appendChild(liholder)
    }
});

genbuttons(10)


