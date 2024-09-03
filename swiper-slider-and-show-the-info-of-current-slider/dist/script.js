const swiper = new Swiper(".swiper", {
            slidesPerView: 1.2,
            spaceBetween: 32,
            freeMode: {
                enabled: true,
                sticky: true,
                momentum: false
            },
            on: {
                slideChange: function() {
                    var currentSlide = swiper.slides[swiper.activeIndex];
                    var slideContent = currentSlide.innerHTML;
                    document.getElementById('slide-info').innerHTML = slideContent;
                }
            }
        });
        document.addEventListener('DOMContentLoaded', function() {
            var initialSlide = swiper.slides[swiper.activeIndex];
            var initialContent = initialSlide.innerHTML;
            document.getElementById('slide-info').innerHTML = initialContent;
        });