document.addEventListener('DOMContentLoaded', function() {
    const taglineIntro = document.getElementById('tagline-intro');
    const taglines = document.querySelectorAll('.tagline');
    const subtagline = document.querySelector('.subtagline');
    const loadingBar = document.querySelector('.loading-bar');
    const portfolio = document.getElementById('portfolio');

    // Animate taglines
    gsap.to(taglines, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2
    });

    // Animate subtagline
    gsap.to(subtagline, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: "power2.out"
    });

    // Animate loading bar
    gsap.to(loadingBar, {
        width: "100%",
        duration: 3,
        ease: "none"
    });

    // After 3 seconds
    setTimeout(() => {
        gsap.to(taglineIntro, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
            onComplete: () => {
                taglineIntro.style.display = "none";
                portfolio.classList.remove("hidden");
                
                // Initialize portfolio 
                initPortfolio();
            }
        });
    }, 3000);

    function initPortfolio() {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Animated Background Elements
        const particles = document.querySelector('.particles');
        const glowCircle = document.querySelector('.glow-circle');

        gsap.to(particles, {
            x: "+=100",
            y: "+=50",
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "none"
        });

        gsap.to(glowCircle, {
            x: "-=100",
            y: "-=50",
            duration: 25,
            repeat: -1,
            yoyo: true,
            ease: "none"
        });

        // Floating Navigation Scroll Effect
        const floatingNav = document.querySelector('.floating-nav');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                floatingNav.classList.add('scrolled');
            } else {
                floatingNav.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            floatingNav.classList.toggle('active');
        });

        // Hero Section Animations
        const heroTitleMasks = document.querySelectorAll('.text-mask');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const scrollIndicator = document.querySelector('.scroll-indicator');
        const floatingCard = document.querySelector('.floating-card');

        gsap.to(heroTitleMasks, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
            delay: 0.5
        });

        gsap.to(heroSubtitle, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 1.2,
            ease: "power2.out"
        });

        gsap.to(scrollIndicator, {
            opacity: 1,
            duration: 1,
            delay: 2,
            ease: "power2.out"
        });

        // Floating card animation
        function floatCard() {
            gsap.to(floatingCard, {
                y: "+=20",
                rotation: "+=1",
                duration: 3,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1
            });
        }
        floatCard();

        // Mouse move effect on card
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            floatingCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // About Section Animations
        const aboutTexts = document.querySelectorAll('.animated-text');
        
        aboutTexts.forEach((text, i) => {
            gsap.to(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: i * 0.2,
                ease: "power2.out"
            });
        });

        // Tech icons animation
        const techIcons = document.querySelectorAll('.tech-icons .icon');
        
        techIcons.forEach((icon, i) => {
            gsap.to(icon, {
                scrollTrigger: {
                    trigger: icon,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: i * 0.1,
                ease: "power2.out"
            });
        });

        // Skills Section Animations
        const skillCategories = document.querySelectorAll('.skill-category');
        
        skillCategories.forEach((category, i) => {
            gsap.to(category, {
                scrollTrigger: {
                    trigger: category,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: i * 0.2,
                ease: "power2.out"
            });
        });

        // Experience Section Animations
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, i) => {
            gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: i * 0.2,
                ease: "power2.out"
            });
        });

        // Contact Section Animations
        const infoCards = document.querySelectorAll('.info-card');
        
        infoCards.forEach((card, i) => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                x: 0,
                opacity: 1,
                duration: 0.8,
                delay: i * 0.2,
                ease: "power2.out"
            });
        });

        // Form Input Animations
        const formGroups = document.querySelectorAll('.form-group');
        
        formGroups.forEach((group, i) => {
            gsap.to(group, {
                scrollTrigger: {
                    trigger: group,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: i * 0.1,
                ease: "power2.out"
            });
        });

        // Magnetic Buttons
        const magneticBtns = document.querySelectorAll('.magnetic-btn');
        
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                gsap.to(btn, {
                    x: (x - rect.width / 2) * 0.2,
                    y: (y - rect.height / 2) * 0.2,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
            
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.5)"
                });
            });
        });

        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                // Here you would typically send the data to a server
                console.log('Form submitted:', { name, email, message });
                
                // Show success message
                const submitBtn = this.querySelector('.form-submit');
                submitBtn.innerHTML = '<i class="fas fa-check"></i> MESSAGE SENT';
                
                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = '<span>SEND MESSAGE</span><div class="submit-arrow"><i class="fas fa-arrow-right"></i></div>';
                }, 3000);
            });
        }
    }
});
