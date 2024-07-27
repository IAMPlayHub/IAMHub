        // Toggle Menu
        document.getElementById('menu-toggle').addEventListener('click', function() {
            this.classList.toggle('active');
            document.getElementById('nav-menu').classList.toggle('active');
        });

        // Slider
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.querySelectorAll('.slides');
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].style.display = 'block';
            setTimeout(showSlides, 5000);
        }

        function plusSlides(n) {
            slideIndex += n;
            if (slideIndex > slides.length) { slideIndex = 1; }
            if (slideIndex < 1) { slideIndex = slides.length; }
            showSlides();
        }