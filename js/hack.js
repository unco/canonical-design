//hack to minimize code
function toggleDropdown(el) {
    let has_class = el.parentNode.classList.contains('is-active');
    document.querySelectorAll('.p-navigation__item--dropdown-toggle').forEach(dd => 
        dd.classList.remove('is-active')
    );
    el.parentNode.classList.toggle('is-active', !has_class);
}