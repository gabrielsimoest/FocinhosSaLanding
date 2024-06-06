document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        item.addEventListener('click', function () {
            document.getElementById('toggle').checked = false;
            return false;
        });
    });
});