import coupons from '../common/coupons.json';

export  function calculateSubTotal(input)
{
    let sum=0;
    for(let i in input)
    {
        sum+=input[i];
    }

    return sum;

    

}

export function calculateDiscount(subTotal, code )
{

    let couponsArray=coupons.coupons;
    let couponsPercent=0;
    let discount=0;

    couponsArray.map((item, index)=>
    {
        if(item.code===code)
        {
            couponsPercent=Number(item.discountPercent);
        }

    });

    
    discount = (couponsPercent/100)*subTotal;

   return discount;

}