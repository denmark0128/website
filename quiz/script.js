document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const img = item.querySelector('img');
            const code = img.getAttribute('menu-code');
            const price = img.getAttribute('data-price');
            const description = img.getAttribute('data-description');

            document.getElementById('popup-img').src = img.src;
            document.getElementById('popup-code').textContent = code;
            document.getElementById('popup-price').textContent = price;
            document.getElementById('popup-description').textContent = description;

            document.getElementById('popup').style.display = 'block';
        });
    });
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });
});
