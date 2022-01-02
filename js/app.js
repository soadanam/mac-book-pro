// console.log('hello from my js')

////function for extra memory
function extraMemory(price, priceCheck){
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostOldValue = parseFloat(extraMemoryCost.innerText);
    const extraMemoryCostNweValue = extraMemoryCostOldValue + price;
    
    if(extraMemoryCostOldValue == priceCheck){
        extraMemoryCost.innerText = extraMemoryCostNweValue;
        getTotal(price);
    };
};
//extra memory
document.getElementById('extra-memory').addEventListener('click', function(){
    extraMemory(180, 0);
});
document.getElementById('basic-memory').addEventListener('click', function(){
    extraMemory(-180, 180);
});



////Function for setting total
function getTotal(value){
    const totalPrice = document.getElementById('total-price');
    const totalOldPrice = parseFloat(totalPrice.innerText);
    const totalNewPrice = totalOldPrice + value;
    totalPrice.innerText = totalNewPrice;

    const grandTotalPrice = document.getElementById('grand-total');
    const grandTotalOldPrice = parseFloat(grandTotalPrice.innerText);
    const grandTotalNewPrice = grandTotalOldPrice + value;
    grandTotalPrice.innerText = grandTotalNewPrice;
};



////Function for making decision for different Extra Storage
function extraStorage(price){
    const extraStorageCostOldValue = parseFloat(document.getElementById('extra-storage-cost').innerText);
    

    if(extraStorageCostOldValue == 0 && price == 100){
        const value = 100;
        document.getElementById('extra-storage-cost').innerText = price;
        return getTotal(value);
    }
    else if(extraStorageCostOldValue == 180 && price == 100){
        document.getElementById('extra-storage-cost').innerText = price;
        const value = -80;
        return getTotal(value);
    }
    else if(extraStorageCostOldValue == 0 && price == 180){
        document.getElementById('extra-storage-cost').innerText = price;
        const value = 180;
        return getTotal(value);
    }
    else if(extraStorageCostOldValue == 100 && price == 180){
        document.getElementById('extra-storage-cost').innerText = price;
        const value = 80;
        return getTotal(value);
    };
};
//extra storage cost
document.getElementById('extra-storage-1').addEventListener('click', function(){
    extraStorage(100);
});
document.getElementById('extra-storage-2').addEventListener('click', function(){
    extraStorage(180);
});
//getting back to basic storage
document.getElementById('basic-storage').addEventListener('click', function(){
    const extraStorageCostOldValue = parseFloat(document.getElementById('extra-storage-cost').innerText);
    if(extraStorageCostOldValue == 100){
        document.getElementById('extra-storage-cost').innerText = 0;
        getTotal(-100);
    }
    if(extraStorageCostOldValue == 180){
        document.getElementById('extra-storage-cost').innerText = 0;
        getTotal(-180);
    };
});




////function for Delivery charge
function deliveryCharge(price, priceCheck){
    const extraDeliveryCost = document.getElementById('extra-delivery-cost');
    const extraDeliveryCostOldValue = parseFloat(extraDeliveryCost.innerText);
    const extraDeliveryCostNweValue = extraDeliveryCostOldValue + price;
    
    if(extraDeliveryCostOldValue == priceCheck){
        extraDeliveryCost.innerText = extraDeliveryCostNweValue;
        getTotal(price);
    };
};
//Delivery Charge
document.getElementById('extra-delivery').addEventListener('click', function(){
    deliveryCharge(20, 0);
});
document.getElementById('basic-delivery').addEventListener('click', function(){
    deliveryCharge(-20, 20);
});



//promo code application
document.getElementById('promo-apply').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;

    const grandTotalPrice = document.getElementById('grand-total');
    const grandTotalOldPrice = parseFloat(grandTotalPrice.innerText);
    if(promoInputValue.toLowerCase() == 'stevekaku' && grandTotalOldPrice > 1200){
        
        const grandTotalNewPrice =Math.ceil(parseFloat(grandTotalOldPrice - ( grandTotalOldPrice * 20 / 100)));
        grandTotalPrice.innerText = grandTotalNewPrice;
    };
    promoInput.value = '';
});