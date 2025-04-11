// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada dos elementos quando ficam visíveis
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards de serviço
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observar membros da equipe
document.querySelectorAll('.team-member').forEach(member => {
    observer.observe(member);
});

// Observar features
document.querySelectorAll('.feature').forEach(feature => {
    observer.observe(feature);
});

// Header sticky com efeito de fade
const header = document.querySelector('.sticky-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Formulário de contato
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Adicionar loading
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="loading"></span>';
        
        // Simular envio do formulário
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Limpar formulário
            contactForm.reset();
            
            // Mostrar mensagem de sucesso
            alert('Mensagem enviada com sucesso!');
        } catch (error) {
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
        } finally {
            // Restaurar botão
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}

// Menu mobile
const menuButton = document.createElement('button');
menuButton.className = 'mobile-menu-button';
menuButton.innerHTML = '<i data-lucide="menu"></i>';
menuButton.setAttribute('aria-label', 'Menu');

const nav = document.querySelector('.main-nav');
const header = document.querySelector('.sticky-header .container');

header.insertBefore(menuButton, nav);

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuButton.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
        menuButton.innerHTML = '<i data-lucide="x"></i>';
    } else {
        menuButton.innerHTML = '<i data-lucide="menu"></i>';
    }
    
    // Recriar ícones do Lucide após alteração do HTML
    lucide.createIcons();
});

// Fechar menu ao clicar em um link
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuButton.classList.remove('active');
        menuButton.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });
});

// Adicionar estilos CSS para o menu mobile
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .mobile-menu-button {
            display: block;
            padding: var(--spacing-sm);
            color: var(--text-primary);
        }
        
        .main-nav {
            position: fixed;
            top: 4rem;
            left: 0;
            right: 0;
            background: var(--background);
            padding: var(--spacing-lg);
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-lg);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all var(--transition-normal);
        }
        
        .main-nav.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
            box-shadow: var(--shadow-lg);
        }
    }
`;

document.head.appendChild(style); 