document.addEventListener('DOMContentLoaded', () => {
    // FAQ Data
    const faqData = [
        {
            question: "What is P2P Energy Trading?",
            answer: "Peer-to-peer (P2P) energy trading allows individuals and businesses to directly buy and sell renewable energy using blockchain technology, creating a decentralized energy marketplace."
        },
        {
            question: "How does blockchain ensure transparency?",
            answer: "All transactions are recorded on an immutable distributed ledger, providing complete transparency and auditability for every energy trade."
        },
        {
            question: "Who can participate?",
            answer: "Any individual, business, or community with renewable energy generation capacity (solar panels, wind turbines, etc.) can join as a seller. Energy consumers can participate as buyers."
        },
        {
            question: "How does Sandile Energies handle energy transactions?",
            answer: "The platform uses smart contracts to automate energy trading, verify transactions, and manage payments using tokenized incentives."
        },
        {
            question: "How do I register as an energy buyer or seller?",
            answer: "Users sign up through a decentralized identity system (DID) and connect their energy generation or consumption devices."
        },


    ];

    // Constants
    const FAQ_GRID = document.querySelector('.faq-grid');
    const TOGGLE_EXPANDED_CLASS = 'is-open';

    // FAQ Item Template
    const createFAQItem = ({ question, answer }) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question" role="button" aria-expanded="false">
                <h3 class="faq-question-text">${question}</h3>
                <span class="toggle" aria-hidden="true">+</span>
            </div>
            <div class="faq-answer" aria-hidden="true">
                <p>${answer}</p>
            </div>
        `;
        return faqItem;
    };

    // Toggle FAQ Answer
    const toggleFAQ = (questionElement) => {
        const faqItem = questionElement.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
        const toggle = faqItem.querySelector('.toggle');
        const isExpanded = faqItem.classList.toggle(TOGGLE_EXPANDED_CLASS);

        // Accessibility updates
        questionElement.setAttribute('aria-expanded', isExpanded);
        answer.setAttribute('aria-hidden', !isExpanded);

        // Smooth transition
        answer.style.maxHeight = isExpanded ? `${answer.scrollHeight}px` : '0';
        toggle.textContent = isExpanded ? '−' : '+';
    };

    // Initialize FAQ
    const initFAQ = () => {
        FAQ_GRID.innerHTML = ''; // Clear existing content
        
        faqData.forEach(item => {
            const faqElement = createFAQItem(item);
            FAQ_GRID.appendChild(faqElement);
            
            // Add event listener to each question
            faqElement.querySelector('.faq-question').addEventListener('click', (e) => {
                toggleFAQ(e.currentTarget);
            });
        });
    };

    // Initialize the FAQ section
    initFAQ();
});