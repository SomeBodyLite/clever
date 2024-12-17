document.addEventListener("DOMContentLoaded", function(e) {

  // Инициализация кастомного селекта
  var els = document.querySelectorAll(".settings__select");
  els.forEach(function(select) {
    var placeholder = select.getAttribute('data-placeholder');
    var isSearchable = select.classList.contains('searchable');
    console.log('isSearchable: ', isSearchable);
    var options = {
      placeholder: placeholder ? placeholder : 'Выберите опцию',
      searchable: isSearchable,
    };
    NiceSelect.bind(select, options);
  });

  // Инициализация селекта с переводом (пример для конкретного элемента)
  // var translatedSelect = document.getElementById("translated-select");
  // if (translatedSelect) {
  //   var options = {
  //     searchable: true, 
  //     placeholder: 'select', 
  //     searchtext: 'zoek', 
  //     selectedtext: 'geselecteerd'
  //   };
  //   translatedSelect._niceSelect = NiceSelect.bind(translatedSelect, options);
  // }
});