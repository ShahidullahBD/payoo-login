document.getElementById('get-bonus-btn').addEventListener('click', function(){
    const couponNumber = getValueFromInput('coupon-input');
    if(couponNumber !== 'SHAHID'){
        alert('Invalid Coupon')
    }else{
        alert('Congratulations, You get bonus Tk.500.00');
        const bonusMoney = 500;
        const newBalance = getBalance() + bonusMoney;
        setBalance(newBalance);
    }

});