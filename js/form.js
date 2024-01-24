const form = document.querySelector('.form');
const bags = document.getElementById('count-bags-field-set').children;
const weeks = document.getElementById('week-field-set').children;
const link = document.getElementById('submit-subscription');

form.onchange = () => {
    let bagsCount = null;
    let weeksCount = null;
    for (let bag of bags) {
        if (bag.checked) {
            bagsCount = bag.value;
        }
    }
    for (let week of weeks) {
        if (week.checked) {
            weeksCount = week.value;
        }
    }

    switch (true) {
        case (bagsCount == 1 && weeksCount == 1) :
            link.href = 'https://paco-pepper.myshopify.com/products/cat-litter';
            break;
        case (bagsCount == 2 && weeksCount == 1) :
            link.href = 'https://paco-pepper.myshopify.com/products/2-bags';
            break;
        case (bagsCount == 3 && weeksCount == 1) :
            link.href = 'https://paco-pepper.myshopify.com/products/3-bags-paco-pepper-olive-pit-cat-litter';
            break;
        case (bagsCount == 1 && weeksCount == 2) :
            link.href = 'https://paco-pepper.myshopify.com/a/subscriptions/checkout/47458599895335:1:690403410215';
            break;
        case (bagsCount == 2 && weeksCount == 2) :
            link.href = 'https://paco-pepper.myshopify.com/a/subscriptions/checkout/47434161586471:1:690403508519';
            break;
        case (bagsCount == 3 && weeksCount == 2) :
            link.href = 'https://paco-pepper.myshopify.com/a/subscriptions/checkout/46900943126823:1:690403606823'
            break;
        case (bagsCount == 1 && weeksCount == 4) :
            link.href = 'https://paco-pepper.myshopify.com/a/subscriptions/checkout/47458599895335:1:690403442983'
            break;
        case (bagsCount == 2 && weeksCount == 4) :
            link.href = 'https://paco-pepper.myshopify.com/a/subscriptions/checkout/47434161586471:1:690403541287'
            break;
        case (bagsCount == 3 && weeksCount == 4) :
            link.href = 'https://paco-pepper.myshopify.com/a/subscriptions/checkout/46900943126823:1:690403639591'
            break;
        case (bagsCount == 1 && weeksCount == 6) :
            link.href = 'https://paco-pepper.myshopify.com/a/subscriptions/checkout/47458599895335:1:690403475751'
            break;
        case (bagsCount == 2 && weeksCount == 6) :
            link.href = 'https://paco-pepper.myshopify.com/a/subscriptions/checkout/47434161586471:1:690403574055'
            break;
        case (bagsCount == 3 && weeksCount == 6) :
            link.href = 'https://paco-pepper.myshopify.com/a/subscriptions/checkout/46900943126823:1:690403672359'
            break;
    }
}
