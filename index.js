let count = 0;
document.getElementById('btn-heart-copy')
    .addEventListener('click', function (e) {
        if (e.target.classList.contains('fa-heart')) {
            count++;

            document.getElementById('count').innerText = count;
        }
    })


const historyData = [];

function callBtnClick(id, msg, msg2 = '', msg3 = '') {
    document.getElementById(id).addEventListener('click', function (e) {
        const count2 = Number(document.getElementById('count2').innerText);

        if (e.target.classList.contains('btn-call')) {
            const totalCount2 = count2 - 20;

            if (totalCount2 < 0) {
                alert('⚠️ Not Enough Coin');
                return;
            }
            document.getElementById('count2').innerText = totalCount2;
        }

        alert(msg);

        const data = {
            name1: msg2,
            name11: msg3,
            date1: new Date().toLocaleTimeString()
        };

        historyData.push(data);
        renderHistory();
    });
}

function renderHistory() {
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '';

    if (historyData.length === 0) {
        historyContainer.innerHTML = `
                <div class="md:h-[44vh] flex justify-center items-center">

                    <h1><i class="fa-solid fa-clock-rotate-left text-[rgba(92,92,92,1)]"></i> No History</h1>

                </div>
        `;
        return;
    }

    for (const data of [...historyData].reverse()) {
        const div = document.createElement('div');
        div.classList.add("flex", "items-center", "justify-between", "mt-2", "shadow-[0_4px_6px_rgba(0,0,0,.1)", "bg-[#fafafa]", "rounded-xl", "p-2");
        div.innerHTML = `
            <div class='mt-2'>
                <h3 class="font-semibold">${data.name1}</h3>
                <p class="font-semibold text-[rgba(92,92,92,1)]">${data.name11}</p>
            </div>
            <div>${data.date1}</div>
        `;
        historyContainer.appendChild(div);
    }
}

document.getElementById('clear-history').addEventListener('click', function () {
    historyData.length = 0;
    renderHistory();
});


callBtnClick('call1', '📞 Calling 999 - National Emergency', 'National Emergency', 999);
callBtnClick('call2', '📞 Calling 999 - Police', 'Police', 999);
callBtnClick('call3', '📞 Calling 999 - Fire Service', 'Fire Service', 999);
callBtnClick('call4', '📞 Calling 1994-999999 - Ambulance', 'Ambulance', 1994 - 999999);
callBtnClick('call5', '📞 Calling 109 - Women & Child Helpline', 'Women & Child Helpline', 109);
callBtnClick('call6', '📞 Calling 106 - Anti-Corruption', 'Anti-Corruption', 106);
callBtnClick('call7', '📞 Calling 16216 - Electricity Outage', 'Electricity Outage', 16216);
callBtnClick('call8', '📞 Calling 16445 - Brac Helpline', 'Brac Helpline', 16445);
callBtnClick('call9', '📞 Calling 163 - Bangladesh Railway', 'Bangladesh Railway', 163);


let count3 = 0;
document.getElementById('btn-heart-copy')
    .addEventListener('click', function (e) {
        if (e.target.classList.contains('btn-copy')) {
            count3++;

            document.getElementById('count3').innerText = count3 + ' Copy';

        }
    })



function copyNum(btnId, numId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const text = document.getElementById(numId).innerText;
        navigator.clipboard.writeText(text);
        alert('Copied!');
    });
}

copyNum('copy1', 'num1');
copyNum('copy2', 'num2');
copyNum('copy3', 'num3');
copyNum('copy4', 'num4');
copyNum('copy5', 'num5');
copyNum('copy6', 'num6');
copyNum('copy7', 'num7');
copyNum('copy8', 'num8');
copyNum('copy9', 'num9');