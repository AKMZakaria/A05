const historyData = [];

let count = 0;
document.getElementById('btn-heart-copy')
    .addEventListener('click', function (e) {
        if (e.target.classList.contains('fa-heart')) {
            count++;

            document.getElementById('count').innerText = count;
        }
    })


function callBtnClick(id, msg, msg2) {
    document.getElementById(id)
        .addEventListener('click', function (e) {

            const count2 = Number(document.getElementById('count2').innerText)

            if (e.target.classList.contains('btn-call')) {
                const totalCount2 = count2 - 20;

                if (totalCount2 < 0) {
                    alert('⚠️ Not Enough Coin');
                    return;
                }
                document.getElementById('count2').innerText = totalCount2;

            }
            alert(msg)

            const data = {
                name1: msg2,
                name11: 999,
                date1: new Date().toLocaleTimeString()
            }

            historyData.push(data);
        })


}

callBtnClick('call1', '📞 Calling 999 - National Emergency', 'Fire Service Number')
callBtnClick('call2', '📞 Calling 999 - Police')
callBtnClick('call3', '📞 Calling 999 - Fire Service')
callBtnClick('call4', '📞 Calling 1994-999999 - Ambulance')
callBtnClick('call5', '📞 Calling 109 - Women & Child Helpline')
callBtnClick('call6', '📞 Calling 106 - Anti-Corruption')
callBtnClick('call7', '📞 Calling 16216 - Electricity Outage')
callBtnClick('call8', '📞 Calling 16445 - Brac Helpline')
callBtnClick('call9', '📞 Calling 163 - Bangladesh Railway')






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






const historyContainer = document.getElementById('history-container');
historyContainer.innerText = '';

for (data of historyData) {
    const div = document.createElement('div');
    div.innerHTML = `
                <div>
                    <h3 class="font-semibold">${data.name1}</h3>
                    <p class="font-semibold text-[rgba(92,92,92,1)]">${data.name11}</p>
                </div>
                
                <div>
                    ${data.date1}
                </div>
            `

    historyContainer.appendChild(div)
}



