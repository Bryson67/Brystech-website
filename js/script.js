// AI Chatbot Functionality - Working Version
document.addEventListener('DOMContentLoaded', function() {
    // Get chat elements
    const chatBtn = document.getElementById('aiChatBtn');
    const chatModal = document.getElementById('chatModal');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const sendChatBtn = document.getElementById('sendChatBtn');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    // Check if elements exist before adding event listeners
    if (!chatBtn || !chatModal) {
        console.log('Chat elements not found yet');
        return;
    }

    // Function to add message to chat
    window.addMessage = function(text, sender) {
        if (!chatMessages) return;
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerText = text;
        messageDiv.appendChild(bubble);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    // Function to show typing indicator
    window.showTypingIndicator = function() {
        if (!chatMessages) return;
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typingIndicator';
        typingDiv.className = 'message bot';
        typingDiv.innerHTML = '<div class="typing-indicator" style="font-style:italic; color:#888; padding:5px 12px;">Brys AI is typing...</div>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    // Function to remove typing indicator
    window.removeTypingIndicator = function() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    };

    // Intelligent bot response function
    window.getBotResponse = function(userMessage) {
        const msg = userMessage.toLowerCase().trim();

        // App-related responses
        if (msg.includes('app') || msg.includes('apps')) {
            if (msg.includes('list') || msg.includes('show') || msg.includes('what apps') || msg.includes('tell me about apps')) {
                return "📱 We have 12+ amazing apps including:\n• SmartShop - AI-powered e-commerce\n• HealthTrack Pro - Health monitoring\n• FinWise - Personal finance\n• EduLearn - Online learning\n• TaskFlow - Project management\n• RideSwift - Ride-hailing\n\nCheck our Apps page for complete portfolio!";
            } else if (msg.includes('build') || msg.includes('create') || msg.includes('make app')) {
                return "🚀 Yes! We build custom mobile and web apps for any business. Our process: Discovery → Design → Development → Testing → Launch. Prices start from $2,500. Want to discuss your app idea? Visit our Contact page!";
            } else if (msg.includes('price') || msg.includes('cost')) {
                return "💰 App development costs:\n• Basic app: $2,500 - $5,000\n• Medium complexity: $5,000 - $12,000\n• Complex/Enterprise: $12,000+\nContact us for a detailed quote!";
            } else if (msg.includes('smartshop')) {
                return "🛍️ SmartShop is our AI-powered e-commerce platform with 50K+ downloads and 4.9 rating. Features include personalized recommendations, real-time inventory tracking, and one-click checkout!";
            } else if (msg.includes('healthtrack') || msg.includes('health')) {
                return "🏥 HealthTrack Pro helps users monitor fitness, set medication reminders, and consult doctors online. It has 100K+ downloads with a 4.8 rating!";
            }
            return "📱 Great question! We've built 12+ successful apps across E-commerce, Health, Finance, Education, and Productivity. Which category interests you?";
        }

        // Pricing responses
        else if (msg.includes('price') || msg.includes('pricing') || msg.includes('cost') || msg.includes('how much')) {
            if (msg.includes('website')) {
                return "🌐 Website pricing:\n• Starter: $499 (5 pages)\n• Business: $1,299 (15 pages + blog)\n• Enterprise: Custom quote\nVisit our Prices page for details!";
            } else if (msg.includes('app')) {
                return "📱 App development starts at $2,500. Final price depends on features, platforms, and complexity. Contact us for a free quote!";
            }
            return "💰 Our services:\n• Websites: $499 - $1,299+\n• Mobile Apps: $2,500+\n• Custom Software: Custom quote\nCheck our Prices page for detailed packages!";
        }

        // Services responses
        else if (msg.includes('service') || msg.includes('offer') || msg.includes('do you') || msg.includes('provide')) {
            return "🛠️ BrysTech offers:\n• Custom Web Development\n• Mobile App Development (iOS/Android)\n• Software Consulting\n• AI Integration\n• Cloud Solutions\n• Cybersecurity\n\nAnything specific you're interested in?";
        }

        // Careers responses
        else if (msg.includes('career') || msg.includes('job') || msg.includes('work') || msg.includes('hiring') || msg.includes('join')) {
            return "💼 We're currently hiring! Open positions:\n• Senior Full-Stack Developer\n• Product Manager\n• Customer Success Lead\n• Digital Marketing Manager\n• UI/UX Designer\n• DevOps Engineer\n\nVisit our Careers page to apply or email careers@brystech.com!";
        }

        // Contact responses
        else if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('phone') || msg.includes('call')) {
            return "📞 You can reach us at:\n• Email: hello@brystech.com\n• Phone: +254 700 123 456\n• Address: 123 Innovation Hub, Nairobi, Kenya\n\nOr fill out the contact form on our Contact page! We reply within 2 hours.";
        }

        // Get Website responses
        else if (msg.includes('website') || msg.includes('get website') || msg.includes('web design')) {
            return "🌐 To get your website:\n1. Visit our 'Get Website' page\n2. Fill out the project form\n3. We'll contact you within 24h\n4. Receive custom proposal\n\nPackages start at $499! Ready to start?";
        }

        // About / Company responses
        else if (msg.includes('about') || msg.includes('company') || msg.includes('who are you')) {
            return "🏢 BrysTech is a leading software development company specializing in websites, mobile apps, and custom software solutions. We help businesses automate without limits. Founded in 2018, we've delivered 350+ projects globally!";
        }

        // Greeting responses
        else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('good morning') || msg.includes('good afternoon')) {
            return "👋 Hello! Welcome to BrysTech! I'm your AI assistant. Ask me about our apps, services, pricing, careers, or how to get a website. How can I help you today?";
        }

        // Thank you responses
        else if (msg.includes('thank')) {
            return "🎉 You're welcome! Feel free to ask if you need anything else. Have a great day!";
        }

        // Help responses
        else if (msg.includes('help') || msg.includes('what can you do')) {
            return "🤖 I can help you with:\n• Information about our apps portfolio\n• Pricing and packages\n• Services we offer\n• Career opportunities\n• Contact information\n• Website inquiries\n\nJust ask me anything!";
        }

        // Default response
        return "🤖 Thanks for your message! I can help you with:\n• Our Apps portfolio\n• Pricing & Packages\n• Services we offer\n• Careers at BrysTech\n• Contact information\n• Getting a website\n\nWhat would you like to know?";
    };

    // Handle sending message
    window.handleSendMessage = function() {
        if (!chatInput || !chatMessages) return;

        const userText = chatInput.value.trim();
        if (userText === "") return;

        // Add user message
        addMessage(userText, 'user');
        chatInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Simulate thinking time
        setTimeout(function() {
            removeTypingIndicator();
            const botReply = getBotResponse(userText);
            addMessage(botReply, 'bot');
        }, 600);
    };

    // Toggle chat modal
    window.toggleChat = function() {
        if (chatModal.classList.contains('hidden')) {
            chatModal.classList.remove('hidden');
            // Focus on input when opening
            if (chatInput) setTimeout(() => chatInput.focus(), 100);
        } else {
            chatModal.classList.add('hidden');
        }
    };

    // Event Listeners
    if (chatBtn) {
        chatBtn.addEventListener('click', toggleChat);
    }

    if (closeChatBtn) {
        closeChatBtn.addEventListener('click', function() {
            chatModal.classList.add('hidden');
        });
    }

    if (sendChatBtn) {
        sendChatBtn.addEventListener('click', handleSendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
    }

    // Close modal when clicking outside (optional)
    window.addEventListener('click', function(e) {
        if (e.target === chatModal) {
            chatModal.classList.add('hidden');
        }
    });

    console.log('AI Chat initialized successfully');
});

// Also ensure chat is initialized if loaded dynamically
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Already handled above
    });
} else {
    // DOM already loaded, but our DOMContentLoaded will handle it
}