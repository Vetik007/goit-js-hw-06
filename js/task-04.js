const CounterValue = function ({
    rootSelector,
    initialValue = 0,
    step = 1,
}) {
    this.value = initialValue;
    this.step = step;
    this.refs = this.getRefs(rootSelector);

    this.bindEvents();
    this.updateValue();

};

//* Получаем ссылки на DOM-элементы
CounterValue.prototype.getRefs = function (rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');

    return refs;
};

//* Вешаем события
CounterValue.prototype.bindEvents = function () {
    this.refs.incrementBtn.addEventListener('click', () => {
        console.log(`Прибавляем ${ this.step }`);
        this.increment();
        this.updateValue();
    });
    
    this.refs.decrementBtn.addEventListener('click', () => { console.log(`Отнимаем ${ this.step }`);
        this.decrement();
        this.updateValue();
});

};

// *Обновляем значение интерфейса
CounterValue.prototype.updateValue = function () {
    this.refs.value.textContent = this.value;
};
 
CounterValue.prototype.increment = function () { 
this.value += this.step;
};

CounterValue.prototype.decrement = function () { 
this.value -= this.step;
};

new CounterValue({ rootSelector: '#counter'});


