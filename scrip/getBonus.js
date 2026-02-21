document.getElementById('get-bonus-btn').addEventListener('click', function(){
    const couponNumber = getValueFromInput('coupon-input');
    if(couponNumber !== 'SHAHID'){
        alert('Invalid Coupon')
    }else{
        alert('Congratulations, You get bonus Tk.500.00');
        const bonusMoney = 500;
        const newBalance = getBalance() + bonusMoney;
        setBalance(newBalance);

        const history = document.getElementById('history');

        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="bg-slate-100 p-2">
        Congratulations, You get bonus Tk.500.00
        new balance is ${newBalance} at ${new Date ()}
        </div>
        `
        history.append(newHistory);
    }

});