// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');

    // Data: Philosophy Characters and Their Stories
    const ethicsStories = [
        {
            character: 'Sarah Chen',
            story: 'Born in a small coastal town, Sarah Chen grew up witnessing the delicate balance between human progress and environmental preservation. Her parents, both marine biologists, instilled in her a deep respect for nature and a scientific approach to problem-solving. Her journey began when she discovered an ancient manuscript in her grandmother\'s attic, containing wisdom about sustainable living and ethical technology. This discovery shaped her worldview and led her to pursue a career in environmental engineering. She believes that technology should serve humanity while respecting the natural world, and that every innovation must be measured not just by its immediate benefits, but by its long-term impact on future generations.',
            keywords: ['environmental ethics', 'sustainability', 'technology', 'future generations', 'scientific approach'],
            image: 'images/sarah_chen.jpg'
        },
        {
            character: 'Marcus Johnson',
            story: 'A former military AI specialist, Marcus Johnson experienced firsthand the ethical dilemmas of autonomous systems. His time in service made him question the boundaries between human decision-making and machine learning. After leaving the military, he dedicated his life to developing ethical frameworks for artificial intelligence. His work focuses on creating systems that enhance human capabilities while maintaining human dignity and autonomy. He believes that the true measure of technological advancement isn\'t in its complexity, but in its ability to enhance human potential while preserving our essential humanity.',
            keywords: ['AI ethics', 'military ethics', 'human dignity', 'autonomy', 'technological advancement'],
            image: 'images/marcus_johnson.jpg'
        },
        {
            character: 'Dr. Elena Rodriguez',
            story: 'Growing up in a multicultural household, Dr. Elena Rodriguez developed a unique perspective on how different cultures approach ethical questions. Her academic journey took her through various philosophical traditions, from Eastern wisdom to Western analytical philosophy. As a professor of ethics and technology, she bridges the gap between ancient wisdom and modern challenges. She believes that the answers to our contemporary ethical dilemmas can often be found in the wisdom of the past, and that technology should serve our highest aspirations, not our basest instincts.',
            keywords: ['multicultural ethics', 'philosophy', 'technology', 'ancient wisdom', 'modern challenges'],
            image: 'images/dr_elena_rodriguez.jpg'
        },
        {
            character: 'James "Jax" Wilson',
            story: 'Once a corporate tech executive, James "Jax" Wilson left the corporate world after witnessing the negative impact of unchecked technological growth on society. He now travels the world, documenting how different communities adapt to technological change. His experiences have given him a unique perspective on the balance between technological progress and human connection. Jax believes in the power of technology to bring people together while maintaining authentic human relationships, emphasizing that in our rush to connect digitally, we must not forget the value of physical presence and human touch.',
            keywords: ['digital ethics', 'human connection', 'corporate responsibility', 'technological balance', 'authenticity'],
            image: 'images/james_jax_wilson.jpg'
        },
        {
            character: 'Socrates',
            story: 'Socrates, known for the Socratic Method, challenged people to question their beliefs and seek ethical truth through dialogue. He was sentenced to death for "corrupting the youth" of Athens, but chose to accept his punishment rather than escape, demonstrating his commitment to his principles. His legacy continues to influence modern ethical thinking, emphasizing the importance of critical questioning and self-examination in moral development.',
            keywords: ['socrates', 'dialogue', 'truth', 'athens', 'socratic method', 'ethics'],
            image: 'images/socrates.jpg'
        },
        {
            character: 'Immanuel Kant',
            story: 'Kant believed in the categorical imperative: act only according to that maxim by which you can at the same time will that it should become a universal law. He emphasized duty and moral law over consequences, arguing that moral actions must be performed out of a sense of duty rather than for personal gain or happiness. His work laid the foundation for modern deontological ethics.',
            keywords: ['kant', 'categorical imperative', 'duty', 'universal law', 'moral law'],
            image: 'images/immanuel_kant.jpg'
        },
        {
            character: 'Aristotle',
            story: 'Aristotle taught that virtue lies in finding the mean between extremes. His Nicomachean Ethics explores how to live a good life through practical wisdom and moral character. He was a Greek philosopher born in 384 BCE who studied under Plato and later tutored Alexander the Great. Unlike Plato, Aristotle focused on observing the real world to gain knowledge. He founded his own school, the Lyceum, and wrote on a wide range of subjects like logic, ethics, and science. His works laid the foundation for modern science and philosophy.',
            keywords: ['aristotle', 'virtue', 'mean', 'nicomachean ethics', 'wisdom', 'character'],
            image: 'images/aristotle.jpg'
        },
        {
            character: 'Confucius',
            story: 'Confucius emphasized the importance of family, respect, and proper conduct. His teachings focus on cultivating virtue and maintaining harmony in society. He believed that moral character is developed through education and self-cultivation, and that proper relationships between people form the foundation of a just society. His philosophy continues to influence East Asian cultures and global ethical thinking.',
            keywords: ['confucius', 'virtue', 'family', 'harmony', 'respect', 'conduct'],
            image: 'images/confucius.jpg'
        },
        {
            character: 'John Stuart Mill',
            story: "Mill was a proponent of utilitarianism, arguing that actions are right if they promote the greatest happiness for the greatest number. He also advocated for individual liberty and women's rights, believing that personal freedom is essential for human development. His work on liberty and utilitarianism continues to influence modern political and ethical thought.",
            keywords: ['mill', 'utilitarianism', 'happiness', 'liberty', 'rights'],
            image: 'images/John Stuart Mill.jpg'
        },
        {
            character: 'Friedrich Nietzsche',
            story: 'Nietzsche challenged traditional morality and introduced the idea of the "Übermensch" (Overman), encouraging individuals to create their own values and live authentically. He criticized conventional moral systems and argued for a revaluation of all values. His work continues to influence existentialist and postmodern thought.',
            keywords: ['nietzsche', 'overman', 'ubermensch', 'values', 'authenticity'],
            image: 'images/Friedrich-Nietzsche.webp'
        },
        {
            character: 'Simone de Beauvoir',
            story: 'A leading existentialist and feminist, de Beauvoir explored the ethics of ambiguity and the oppression of women, arguing for freedom and responsibility. Her work "The Second Sex" revolutionized feminist thought and continues to influence gender studies and ethical philosophy. She emphasized the importance of individual choice and authentic existence.',
            keywords: ['de beauvoir', 'existentialism', 'feminism', 'ambiguity', 'freedom', 'responsibility'],
            image: 'images/Simone de Beauvoir.jpg'
        },
        {
            character: 'Plato',
            story: 'Plato, a student of Socrates, wrote dialogues exploring justice, virtue, and the ideal society. His allegory of the cave illustrates the journey from ignorance to knowledge. He founded the Academy in Athens, the first institution of higher learning in the Western world. His philosophical works continue to influence modern thought on ethics, politics, and metaphysics.',
            keywords: ['plato', 'justice', 'virtue', 'allegory of the cave', 'knowledge'],
            image: 'images/Plato.jpg'
        },
        {
            character: 'Dr. Maya Patel',
            story: 'A quantum physicist turned ethicist, Dr. Maya Patel bridges the gap between scientific discovery and moral responsibility. Her groundbreaking work in quantum computing ethics has led to the development of new frameworks for evaluating the ethical implications of emerging technologies. She believes that scientific progress must be guided by a deep understanding of its potential impact on human consciousness and society.',
            keywords: ['quantum ethics', 'scientific responsibility', 'emerging technology', 'consciousness', 'moral framework'],
            image: 'images/Dr. Maya Patel.jpg'
        },
        {
            character: 'Professor David Kim',
            story: 'A pioneer in bioethics and artificial intelligence, Professor Kim specializes in the intersection of human enhancement and machine learning. His research focuses on developing ethical guidelines for human-AI symbiosis, emphasizing the importance of maintaining human dignity in an increasingly automated world. He advocates for a balanced approach to technological advancement that preserves human agency.',
            keywords: ['bioethics', 'human enhancement', 'AI symbiosis', 'human dignity', 'technological balance'],
            image: 'images/Professor David Kim.webp'
        },
        {
            character: 'Dr. Aisha Rahman',
            story: 'An expert in environmental philosophy and indigenous knowledge systems, Dr. Rahman works to integrate traditional wisdom with modern environmental ethics. Her research demonstrates how ancient practices can inform contemporary approaches to sustainability and climate change. She emphasizes the importance of cultural diversity in developing global environmental solutions.',
            keywords: ['environmental philosophy', 'indigenous knowledge', 'sustainability', 'cultural diversity', 'climate ethics'],
            image: 'images/Dr. Aisha Rahman.webp'
        },
        {
            character: 'Marcus Aurelius',
            story: 'The Roman Emperor and Stoic philosopher who ruled from 161 to 180 CE. His "Meditations" provide profound insights into personal ethics and leadership. He emphasized self-discipline, rational thinking, and the importance of virtue in both personal and public life. His philosophy continues to influence modern leadership and personal development.',
            keywords: ['stoicism', 'leadership', 'self-discipline', 'virtue', 'meditations'],
            image: 'images/Marcus Aurelius.webp'
        },
        {
            character: 'Dr. Thomas Chen',
            story: 'A contemporary philosopher specializing in digital ethics and social media morality. His work examines the impact of social media on human relationships and moral development. He advocates for responsible digital citizenship and the development of ethical frameworks for online behavior. His research highlights the importance of maintaining authentic human connections in the digital age.',
            keywords: ['digital ethics', 'social media', 'online behavior', 'digital citizenship', 'human connection'],
            image: 'images/Dr. Thomas Chen.jpg'
        },
        {
            character: 'Professor Sophia Martinez',
            story: 'A leading voice in feminist ethics and technology, Professor Martinez explores how gender perspectives influence technological development and ethical frameworks. Her work challenges traditional assumptions about technology and advocates for more inclusive approaches to innovation. She emphasizes the importance of diverse perspectives in shaping ethical technology.',
            keywords: ['feminist ethics', 'gender perspectives', 'inclusive technology', 'innovation', 'diversity'],
            image: 'images/Professor Sophia Martinez.jpeg'
        },
        {
            character: 'Dr. Rajesh Kumar',
            story: 'A specialist in medical ethics and artificial intelligence in healthcare. His research focuses on developing ethical guidelines for AI-assisted medical decision-making and patient care. He emphasizes the importance of maintaining human compassion in healthcare while leveraging technological advancements. His work has influenced international healthcare policies.',
            keywords: ['medical ethics', 'AI healthcare', 'patient care', 'compassion', 'healthcare policy'],
            image: 'images/Dr. Rajesh Kumar.png'
        },
        {
            character: 'Dr. Emma Thompson',
            story: 'An expert in environmental justice and sustainable development. Her work examines the ethical implications of climate change and resource distribution. She advocates for equitable solutions to environmental challenges and emphasizes the importance of considering future generations in current decision-making. Her research has influenced international environmental policies.',
            keywords: ['environmental justice', 'sustainable development', 'climate ethics', 'resource distribution', 'future generations'],
            image: 'images/Dr. Emma Thompson.jpg'
        },
        {
            character: 'Thomas Aquinas',
            story: 'A medieval philosopher and theologian who synthesized Aristotelian philosophy with Christian theology. His work on natural law established that moral principles are inherent in human nature and can be discovered through reason. He argued that natural law is universal and eternal, providing a foundation for human morality that transcends cultural differences. His influence continues to shape modern natural law theory and ethical thinking.',
            keywords: ['natural law', 'thomism', 'moral principles', 'universal ethics', 'reason'],
            image: 'images/Thomas Aquinas.webp'
        },
        {
            character: 'Dr. Maria Gonzalez',
            story: 'A contemporary natural law theorist who applies classical natural law principles to modern bioethical issues. Her research focuses on how natural law can inform decisions about medical ethics, human rights, and environmental protection. She emphasizes the importance of understanding human nature in developing ethical frameworks for emerging technologies and scientific advancements.',
            keywords: ['bioethics', 'human rights', 'environmental protection', 'natural law theory', 'medical ethics'],
            image: 'images/Dr. Maria Gonzalez.png'
        },
        {
            character: 'Professor James Wilson',
            story: 'A legal philosopher specializing in natural law and constitutional interpretation. His work explores how natural law principles can be applied to contemporary legal systems and human rights frameworks. He argues that natural law provides essential guidance for maintaining justice and human dignity in modern society.',
            keywords: ['legal philosophy', 'constitutional law', 'human rights', 'justice', 'natural law'],
            image: 'images/Professor James Wilson.jpg'
        },
        {
            character: 'Dr. Elizabeth Blackwood',
            story: 'An expert in natural law and environmental ethics who studies the relationship between natural law principles and ecological sustainability. Her research demonstrates how natural law can guide our understanding of humanity\'s relationship with nature and inform environmental policy. She emphasizes the importance of recognizing natural patterns and laws in developing sustainable practices.',
            keywords: ['environmental ethics', 'sustainability', 'ecological balance', 'natural patterns', 'environmental policy'],
            image: 'images/Dr. Elizabeth Blackwood.avif'
        },
        {
            character: 'Cicero',
            story: 'An ancient Roman philosopher who was one of the earliest proponents of natural law theory. His work "On the Laws" established that true law is right reason in agreement with nature, universal in application, and unchanging. He argued that natural law is the foundation of justice and that human laws must conform to these natural principles to be valid.',
            keywords: ['roman philosophy', 'natural law', 'justice', 'universal principles', 'human laws'],
            image: 'images/Cicero.jpeg'
        },
        {
            character: 'Dr. Robert Chen',
            story: 'A contemporary philosopher who bridges natural law theory with artificial intelligence ethics. His research examines how natural law principles can guide the development of ethical AI systems and human-AI interaction. He emphasizes the importance of understanding natural human rights and dignity in the context of technological advancement.',
            keywords: ['AI ethics', 'human-AI interaction', 'natural rights', 'technological ethics', 'human dignity'],
            image: 'images/Dr. Robert Chen.jpg'
        },
        {
            character: 'Professor Sarah O\'Connor',
            story: 'A specialist in natural law and business ethics who applies natural law principles to corporate governance and economic systems. Her work focuses on how natural law can inform ethical business practices and sustainable economic development. She emphasizes the importance of aligning business practices with natural moral principles.',
            keywords: ['business ethics', 'corporate governance', 'economic ethics', 'sustainable business', 'moral principles'],
            image: 'images/Professor Sarah.jpg'
        },
        {
            character: 'Dr. Marcus Williams',
            story: 'An expert in natural law and social justice who studies how natural law principles can address contemporary social inequalities. His research explores the relationship between natural rights and social policy, emphasizing the importance of natural law in promoting human flourishing and social harmony.',
            keywords: ['social justice', 'natural rights', 'social policy', 'human flourishing', 'social harmony'],
            image: 'images/Marcus.jpeg'
        },
        {
            character: 'Natural Law and Divine Providence',
            story: 'This feature of natural law theory emphasizes the connection between natural law and a divine order or providence. It suggests that the moral order of the universe is grounded in a higher, purposeful design, often associated with God or a divine being.',
            keywords: ['natural law', 'divine providence', 'moral order', 'theology', 'purpose'],
            image: 'images/natural_law_and_divine_providence.jpg'
        },
        {
            character: 'Natural Law and Practical Rationality',
            story: 'Natural law theory holds that humans can discern moral truths through practical reason. This means that by using rational thought, individuals can understand what is good and right, independent of cultural or subjective preferences.',
            keywords: ['natural law', 'practical rationality', 'reason', 'moral truth', 'ethics'],
            image: 'images/natural_law_and_practical_rationality.jpg'
        },
        {
            character: 'The Substance of the Natural Law View',
            story: 'This refers to the core content of natural law theory: that there are objective moral principles inherent in human nature and discoverable by reason. These principles guide human behavior toward the good.',
            keywords: ['natural law', 'objective morality', 'human nature', 'moral principles', 'reason'],
            image: 'images/the_substance_of_the_natural_law_view.jpg'
        },
        {
            character: 'Paradigmatic and Nonparadigmatic Natural Law Theories',
            story: 'Paradigmatic natural law theories closely follow the classical tradition (e.g., Aquinas), while nonparadigmatic theories adapt or reinterpret natural law principles for modern contexts. Both seek to ground morality in human nature and reason.',
            keywords: ['natural law', 'paradigmatic', 'nonparadigmatic', 'tradition', 'modern ethics'],
            image: 'images/paradigmatic_and_nonparadigmatic_natural_law_theories.jpg'
        },
        {
            character: 'Natural Goodness',
            story: 'A theoretical option for natural law theorists, natural goodness refers to the idea that what is morally good is rooted in the fulfillment of natural human capacities and purposes.',
            keywords: ['natural law', 'natural goodness', 'human fulfillment', 'morality', 'purpose'],
            image: 'images/natural_goodness.jpg'
        },
        {
            character: 'Knowledge of the Basic Goods',
            story: 'Natural law theorists argue that humans can know certain basic goods—such as life, knowledge, and community—through reason. These goods form the foundation of moral action.',
            keywords: ['natural law', 'basic goods', 'knowledge', 'reason', 'morality'],
            image: 'images/knowledge_of_the_basic_goods.jpg'
        },
        {
            character: 'The Catalog of Basic Goods',
            story: 'This concept involves identifying and listing the fundamental goods that natural law theory considers essential for human flourishing, such as life, health, friendship, and knowledge.',
            keywords: ['natural law', 'catalog', 'basic goods', 'human flourishing', 'ethics'],
            image: 'images/the_catalog_of_basic_goods.jpg'
        },
        {
            character: 'From the Good to the Right',
            story: 'This principle explains how natural law moves from identifying what is good (the basic goods) to determining what is right (moral obligations and duties). It connects values to moral rules.',
            keywords: ['natural law', 'good', 'right', 'moral obligation', 'duties'],
            image: 'images/from_the_good_to_the_right.jpg'
        },
        {
            character: 'Natural Law and Moral Obligation',
            story: 'Natural law theory holds that recognizing the basic goods and the requirements of reason leads to moral obligations. These obligations are binding because they are rooted in human nature and reason.',
            keywords: ['natural law', 'moral obligation', 'reason', 'human nature', 'ethics'],
            image: 'images/natural_law_and_moral_obligation.jpg'
        },
        {
            character: 'Virtue Ethics',
            story: "Virtue ethics is an ethical theory that emphasizes the role of character and virtue in moral philosophy rather than either doing one's duty or acting to bring about good consequences. Originating with Aristotle, virtue ethics focuses on developing good character traits (virtues) such as courage, honesty, and compassion. A virtuous person is someone who has ideal character traits, which are developed through practice and habit. The theory asks not 'What should I do?' but 'What kind of person should I be?'",
            keywords: ['virtue ethics', 'virtue', 'character', 'aristotle', 'moral philosophy', 'good person'],
            image: 'images/Virtue.jpg'
        },
        {
            character: 'Utilitarianism',
            story: 'Utilitarianism is an ethical theory that determines right from wrong by focusing on outcomes. It is a form of consequentialism. The most ethical choice is the one that will produce the greatest good for the greatest number. Associated with philosophers like Jeremy Bentham and John Stuart Mill, utilitarianism evaluates actions based on their consequences for overall happiness or utility.',
            keywords: ['utilitarianism', 'consequentialism', 'greatest good', 'happiness', 'bentham', 'mill'],
            image: 'images/Utilitarianism.jpg'
        },
        {
            character: 'Deontology',
            story: 'Deontology is an ethical theory that uses rules to distinguish right from wrong. Associated with Immanuel Kant, deontology is sometimes described as "duty-based" ethics. Actions are considered morally right based on their adherence to rules or duties, regardless of the consequences. The theory emphasizes the importance of following moral principles and respecting the rights of others.',
            keywords: ['deontology', 'duty', 'rules', 'kant', 'moral principles', 'rights'],
            image: 'images/deontology.jpg'
        }
    ];

    // Search Functions
    function performSearch(query) {
        // Convert query to lowercase for case-insensitive search
        query = query.toLowerCase();
        
        // Filter stories based on search criteria
        const results = ethicsStories.filter(storyObj => {
            return (
                storyObj.character.toLowerCase().includes(query) ||
                storyObj.story.toLowerCase().includes(query) ||
                storyObj.keywords.some(keyword => keyword.toLowerCase().includes(query))
            );
        });
        
        // Display the filtered results
        displayResults(results);
    }

    function displayResults(results) {
        // Get the content section and remove any existing results
        const contentSection = document.querySelector('.content');
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }

        // Create new results container
        const resultsDiv = document.createElement('div');
        resultsDiv.className = 'search-results';

        // Display appropriate message based on results
        if (results.length === 0) {
            resultsDiv.innerHTML = '<p>No results found. Please try a different search term.</p>';
        } else {
            resultsDiv.innerHTML = '<h3>Search Results</h3>';
            results.forEach(result => {
                resultsDiv.innerHTML += `
                    <div class="result-card">
                        <img src="${result.image}" alt="${result.character}" class="character-image" />
                        <h4>${result.character}</h4>
                        <p>${result.story}</p>
                        <div class="keywords">
                            ${result.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join(' ')}
                        </div>
                    </div>
                `;
            });
        }

        // Add results to the page
        contentSection.appendChild(resultsDiv);
    }

    // Event Listeners
    // Search button click handler
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            performSearch(query);
        }
    });

    // Enter key press handler
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        }
    });

    // Clear button click handler
    clearButton.addEventListener('click', () => {
        // Clear search input
        searchInput.value = '';
        
        // Remove search results
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }
    });
}); 