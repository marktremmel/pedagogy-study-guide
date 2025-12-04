// ==================== DATA ====================

const flashcardsData = [
    // Core Definitions
    {
        category: 'definitions',
        question: 'What is Pedagogy?',
        answer: 'The science encompassing the theory and practice of education and instruction. Its subject is the process by which a human being becomes a personality.',
        example: 'Originally meant "child-leading" in Greek, now includes both educational science and practice.'
    },
    {
        category: 'definitions',
        question: 'What is Socialization?',
        answer: 'The lifelong process by which an individual acquires the knowledge and skills necessary to integrate into a group and actively participate in community life.',
        example: 'Includes both intentional influences (education) and spontaneous influences (environment).'
    },
    {
        category: 'definitions',
        question: 'What is Enculturation?',
        answer: 'The process of "growing into" a culture and becoming a cultural being. It is the most comprehensive learning process through which we acquire basic cultural skills.',
        example: 'A child learns their native language and family customs through enculturation.'
    },
    {
        category: 'definitions',
        question: 'What is Education (Nevelés)?',
        answer: 'The conscious, planned, and purposeful component of socialization designed to provide knowledge, values, and skills for adult roles in society.',
        example: 'School curriculum is education; random media exposure is not.'
    },
    {
        category: 'definitions',
        question: 'What is Individualization?',
        answer: 'The process of becoming a unique individual, characterized by the development of judgment, self-control, and a sense of responsibility.',
        example: 'The final outcome of the developmental process from culture to unique person.'
    },

    // Parenting Styles
    {
        category: 'parenting',
        question: 'Describe Authoritarian Parenting Style',
        answer: 'Expects respect and obedience, relies heavily on punishment, and is not interested in the child\'s opinion. Results in children with weaker social skills who become dependent on authority.',
        example: '"Because I said so" is a typical authoritarian response.'
    },
    {
        category: 'parenting',
        question: 'Describe Authoritative (Supervisory-Deliberative) Style',
        answer: 'Parent explains the reasons for rewards and punishments, considers the child\'s opinion, and encourages independence. Fosters self-control and responsibility.',
        example: 'Parent explains why homework matters and asks child\'s input on scheduling.'
    },
    {
        category: 'parenting',
        question: 'Describe Permissive/Neglectful Style',
        answer: 'Characterized by a lack of limits and expectations. Results in children who are immature, have difficulty with self-control, and possess a diminished sense of responsibility.',
        example: 'Parent lets child decide bedtime without any guidance or structure.'
    },

    // Group Development
    {
        category: 'groups',
        question: 'What is the Forming phase?',
        answer: 'Initial stage of group development characterized by awkwardness, uncertainty, and unclear roles and rules. Members are often hesitant.',
        example: 'First day of a new class when students don\'t know each other yet.'
    },
    {
        category: 'groups',
        question: 'What is the Storming phase?',
        answer: 'Members compete for position and dominance, leading to open and hidden conflicts. A critical phase for establishing group hierarchy.',
        example: 'Students test boundaries and vie for social status in the classroom.'
    },
    {
        category: 'groups',
        question: 'What is the Norming phase?',
        answer: 'The group\'s behavioral rules, style, and norms are established, forming a true community. Conflicts are resolved and shared standards emerge.',
        example: 'Class develops its own inside jokes, rituals, and unwritten rules.'
    },
    {
        category: 'groups',
        question: 'What is the Performing phase?',
        answer: 'The group is predictable, calm, task-oriented, and characterized by a strong "we-consciousness." Members work effectively together.',
        example: 'A well-functioning class that collaborates smoothly on projects.'
    },
    {
        category: 'groups',
        question: 'What is the Adjourning phase?',
        answer: 'The group formally dissolves at the end of its task or lifecycle, though it may continue to exist as an informal group.',
        example: 'End of the school year when the class officially disbands.'
    },

    // Digital Age
    {
        category: 'digital',
        question: 'Who are Digital Immigrants?',
        answer: 'Individuals who encountered ICT as adults and had to learn to adapt to it. Includes Baby Boomer (1946-1964) and X (1965-1979) generations.',
        example: 'They prefer text, single-tasking, and delayed rewards. They "learned" technology.'
    },
    {
        category: 'digital',
        question: 'Who are Digital Natives?',
        answer: 'Individuals who have grown up with digital technology from birth, making it their natural environment. Includes Y, Z, and Alpha generations.',
        example: 'They prefer images/video, parallel processing, and immediate gratification. Technology is their "native language."'
    },
    {
        category: 'digital',
        question: 'What is Mean World Syndrome?',
        answer: 'A psychological effect where exposure to violence-rich media leads to increased anxiety and a belief that the world is more dangerous than it actually is.',
        example: 'A child who watches violent media may become fearful, not aggressive.'
    },
    {
        category: 'digital',
        question: 'What is Parental Mediation?',
        answer: 'The active role a parent takes to help a child understand, interpret, and critically evaluate media content. Has three forms: co-viewing, restrictive, and active.',
        example: 'Discussing with a child what they saw in a movie and its real-world implications.'
    },

    // Developmental Processes
    {
        category: 'processes',
        question: 'What are Primary Groups?',
        answer: 'Groups that provide protection and support, characterized by frequent interaction, emotional bonds, and mutual familiarity.',
        example: 'Family is the quintessential primary group; a close-knit class can evolve into one.'
    },
    {
        category: 'processes',
        question: 'What are Secondary Groups?',
        answer: 'Groups held together by formal structures, where emotional involvement among members is not necessary.',
        example: 'A school class at its inception is a secondary group.'
    },
    {
        category: 'processes',
        question: 'What is Didactics?',
        answer: 'Also known as the theory of instruction, this sub-discipline explores and analyzes the process of teaching, examining its content, organization, and methods.',
        example: 'Studying HOW to teach math effectively is didactics.'
    },
    {
        category: 'processes',
        question: 'What is Andragogy?',
        answer: 'A sub-discipline of pedagogy focused on the organized learning of adults after their initial schooling and vocational training.',
        example: 'Adult education programs and professional development courses.'
    },
    {
        category: 'definitions',
        question: 'What are the 4 characteristics of Culture?',
        answer: 'Culture is: Shared (belongs to a group), Unique (distinguishes groups), Learned (not biological), and Diverse (has many facets).',
        example: 'Language, customs, art, and values are all parts of culture that we learn.'
    },
    {
        category: 'processes',
        question: 'What are the key functions of the Family?',
        answer: 'Provides biological and psychological support, emotional balance, nurturing, education, socialization, status establishment, behavior guidance, conflict management, and cultural transmission.',
        example: 'Family teaches "me vs. others," establishes boundaries, and transmits core values.'
    },
    {
        category: 'digital',
        question: 'Why are books important vs. screens for children?',
        answer: 'Books help children understand symbols carry information, develop visual harmony sense, and provide tension management through character projection. Creates parent-child bonding unlike passive screen time.',
        example: 'Reading fairy tales helps children process good vs. evil concepts.'
    },
    {
        category: 'digital',
        question: 'What are the 3 forms of Parental Mediation?',
        answer: 'Co-viewing (watching together), Restrictive mediation (limiting time/content), and Active mediation (discussing and evaluating content).',
        example: 'Active mediation helps children understand advertising motives and media construction.'
    }
];

const quizQuestions = [
    {
        question: 'What is the historical and modern distinction between the terms "pedagogy" and "educational science"?',
        answer: 'Historically, "pedagogy" referred to the practical forms of education. Today, the term has expanded to also include the scientific investigation and research of educational reality, a field also known as "educational science." Therefore, while pedagogy originally focused on practice, it now encompasses both the theory (educational science) and practice of education and instruction.'
    },
    {
        question: 'Define the process of "socialization" and describe its two primary forms of influence.',
        answer: 'Socialization is the lifelong process of preparing an individual for social life, coexistence with others, and active participation in the community. It consists of two types of influences: intentional, planned effects from institutions like schools (education, training), and spontaneous, random effects from the broader environment that occur throughout life.'
    },
    {
        question: 'Explain the relationship between the concepts of enculturation, socialization, and education.',
        answer: 'Enculturation is the process of acquiring the foundational elements of a specific culture. Socialization is a component of this, referring more specifically to learning the moral order and rules of a society. Education is a tool for both, representing the conscious, purposeful, and planned actions that help an individual integrate into their culture and society.'
    },
    {
        question: 'What are the key functions of the family as the primary scene of socialization?',
        answer: 'The family\'s key functions include providing biological and psychological support, ensuring emotional balance, and performing nurturing, educational, and socialization tasks. It also establishes a family member\'s status, guides behavior, manages conflict, and transmits culture, worldview, and values.'
    },
    {
        question: 'Describe the three main parental upbringing styles and their general effects on a child\'s behavior.',
        answer: 'The three styles are: Authoritarian, which expects obedience and uses punishment, leading to children with weaker social skills who wait for instructions; Authoritative (Supervisory-Deliberative), which explains rules and values the child\'s opinion, fostering independence and a sense of responsibility; and Permissive/Neglectful, which lacks limits, resulting in children who may be immature and have poor self-control.'
    },
    {
        question: 'List and briefly explain the five phases of group development as they apply to a school setting.',
        answer: 'The five phases are: Forming (Alakulás) - Initial stage characterized by awkwardness and unclear roles/rules; Storming (Viharzás) - Members compete for position and dominance, leading to conflicts; Norming (Normaképződés) - The group\'s behavioral rules, style, and norms are established; Performing (Működés) - The group is predictable, calm, task-oriented, and characterized by "we-consciousness"; Adjourning (Megszűnés) - The group formally dissolves.'
    },
    {
        question: 'According to Marc Prensky\'s theory, what are the fundamental differences between "Digital Natives" and "Digital Immigrants" in their relationship with technology?',
        answer: 'Digital Immigrants encountered information and communication technology (ICT) as adults, learning to adapt to it, whereas Digital Natives have grown up with it as their natural environment. Immigrants tend to prefer text, single-tasking, and delayed rewards, while Natives prefer images and video, parallel processing, and immediate gratification.'
    },
    {
        question: 'What is the "Mean World Syndrome" and how does it relate to media consumption?',
        answer: 'The "Mean World Syndrome" is a phenomenon where the constant sight of aggression and violence in media causes anxiety and antisocial behavior rather than aggression. It leads to a distorted worldview where the individual perceives the world as a more dangerous and frightening place than it actually is.'
    },
    {
        question: 'Why are traditional books and fairy tales considered important for a young child\'s development, especially in comparison to screen-based media?',
        answer: 'Books and fairy tales are crucial because they help a child understand that symbols carry information, develop a sense of visual harmony, and provide a way to manage tension by projecting feelings onto characters. This process helps the child recognize and handle concepts of good and evil and provides an intimate bonding experience with the parent, unlike passive screen time.'
    },
    {
        question: 'What is parental "mediation" in the context of children\'s media use, and what are its three forms?',
        answer: 'Parental mediation refers to the strategies parents use to help children understand and process media. Its three forms are: Co-viewing, where the parent and child watch together; Restrictive mediation, which involves limiting the time or type of content consumed; and Active mediation, which involves discussing and evaluating what was seen to help the child understand its real-world implications.'
    }
];

const conceptsData = {
    culture: {
        title: 'Culture',
        description: 'The total, human-made environment we inhabit. It includes knowledge, beliefs, art, morals, law, customs, and any other capabilities and habits acquired by being a member of society. Culture is: Shared, Unique, Learned, and Diverse.',
        connections: ['Enculturation']
    },
    enculturation: {
        title: 'Enculturation',
        description: 'The process of "growing into" a culture and absorbing its foundational elements. This is where we learn language, basic customs, and cultural stories, primarily within the family setting.',
        connections: ['Culture', 'Socialization']
    },
    socialization: {
        title: 'Socialization',
        description: 'The lifelong process of learning to function within society by adopting its norms and rules. Includes both intentional (education) and spontaneous (environment) influences.',
        connections: ['Enculturation', 'Education', 'Family', 'School', 'Media']
    },
    education: {
        title: 'Education (Nevelés)',
        description: 'The conscious, planned, and purposeful component of socialization. The formal system societies create to ensure essential cultural and social knowledge is passed on in a structured way.',
        connections: ['Socialization', 'Individualization']
    },
    individualization: {
        title: 'Individualization',
        description: 'The outcome of the developmental process, resulting in a unique identity as a responsible, self-aware individual with judgment, self-control, and a sense of responsibility.',
        connections: ['Education']
    },
    family: {
        title: 'Family Arena',
        description: 'The primary and "amateur" arena of socialization. A reference group where identity is first forged. Key tasks: teaching "me vs. others," establishing boundaries, transmitting values, and language acquisition. Parenting styles (Authoritarian, Authoritative, Permissive) have lasting impacts.',
        connections: ['Socialization']
    },
    school: {
        title: 'School Arena',
        description: 'The "professional" arena of socialization that builds upon family foundation in a planned manner. Manages group dynamics through 5 phases: Forming → Storming → Norming → Performing → Adjourning. Transforms secondary groups into primary groups.',
        connections: ['Socialization']
    },
    media: {
        title: 'Media Arena',
        description: 'A dominant 21st-century socialization arena. Creates generational divide between Digital Immigrants and Digital Natives. Potential negative impacts: distorted worldview (Mean World Syndrome), passive consumption, weakened imagination, and blurred reality/fiction. Parental mediation is critical.',
        connections: ['Socialization']
    }
};

// ==================== STATE ====================

let currentCardIndex = 0;
let masteredCards = new Set();
let currentFilter = 'all';
let currentQuizIndex = 0;
let quizAnswers = [];
let quizStartTime = null;
let timerInterval = null;

// ==================== FLASHCARD MODE ====================

function initFlashcards() {
    updateFlashcard();
    updateStats();
    updateProgress();
}

function getFilteredCards() {
    if (currentFilter === 'all') {
        return flashcardsData;
    }
    return flashcardsData.filter(card => card.category === currentFilter);
}

function updateFlashcard() {
    const filteredCards = getFilteredCards();
    const card = filteredCards[currentCardIndex];
    
    document.getElementById('question').textContent = card.question;
    document.getElementById('answer').textContent = card.answer;
    document.getElementById('example').textContent = card.example || '';
    document.getElementById('category-badge').textContent = getCategoryName(card.category);
    
    // Reset flip state
    document.getElementById('flashcard').classList.remove('flipped');
}

function getCategoryName(category) {
    const names = {
        definitions: 'Core Definition',
        parenting: 'Parenting Style',
        digital: 'Digital Age',
        groups: 'Group Development',
        processes: 'Developmental Process'
    };
    return names[category] || 'General';
}

function updateStats() {
    const filteredCards = getFilteredCards();
    document.getElementById('card-counter').textContent = 
        `Card ${currentCardIndex + 1} of ${filteredCards.length}`;
    document.getElementById('mastery-score').textContent = 
        `Mastered: ${masteredCards.size}/${flashcardsData.length}`;
}

function updateProgress() {
    const progress = (masteredCards.size / flashcardsData.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

// ==================== QUIZ MODE ====================

function initQuiz() {
    currentQuizIndex = 0;
    quizAnswers = new Array(quizQuestions.length).fill(null);
    quizStartTime = Date.now();
    
    document.getElementById('quiz-summary').classList.add('hidden');
    document.querySelector('.question-card').style.display = 'block';
    
    updateQuizQuestion();
    startTimer();
}

function updateQuizQuestion() {
    const question = quizQuestions[currentQuizIndex];
    
    document.getElementById('q-number').textContent = 
        `Question ${currentQuizIndex + 1} of ${quizQuestions.length}`;
    document.getElementById('q-text').textContent = question.question;
    document.getElementById('user-answer').value = 
        quizAnswers[currentQuizIndex]?.userAnswer || '';
    document.getElementById('model-answer').textContent = question.answer;
    
    // Hide answer section initially
    document.getElementById('answer-section').classList.add('hidden');
    document.getElementById('show-answer').textContent = 'Show Answer';
    
    // Update assessment buttons if already scored
    const currentScore = quizAnswers[currentQuizIndex]?.score;
    document.querySelectorAll('.assess-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (currentScore !== null && parseInt(btn.dataset.score) === currentScore) {
            btn.classList.add('selected');
        }
    });
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('quiz-timer').textContent = 
            `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function showQuizSummary() {
    clearInterval(timerInterval);
    
    const totalScore = quizAnswers.reduce((sum, a) => sum + (a?.score || 0), 0);
    const maxScore = quizQuestions.length * 2;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    document.querySelector('.question-card').style.display = 'none';
    const summary = document.getElementById('quiz-summary');
    summary.classList.remove('hidden');
    
    document.getElementById('score-display').innerHTML = `
        <div style="font-size: 3rem; font-weight: 700; background: linear-gradient(135deg, #6366f1, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            ${totalScore}/${maxScore} (${percentage}%)
        </div>
        <p style="margin-top: 10px; color: #cbd5e1;">
            ${percentage >= 80 ? '🌟 Excellent work!' : percentage >= 60 ? '👍 Good effort!' : '📚 Keep studying!'}
        </p>
    `;
    
    // Show weak areas
    const weakQuestions = quizAnswers
        .map((a, i) => ({ index: i, score: a?.score || 0 }))
        .filter(q => q.score < 2)
        .map(q => quizQuestions[q.index].question.substring(0, 60) + '...');
    
    if (weakQuestions.length > 0) {
        document.getElementById('weak-areas').innerHTML = `
            <h3 style="margin-top: 30px; color: #f59e0b;">Areas to Review:</h3>
            <ul style="text-align: left; margin: 15px auto; max-width: 600px; line-height: 1.8;">
                ${weakQuestions.map(q => `<li>${q}</li>`).join('')}
            </ul>
        `;
    }
}

// ==================== CONCEPT MAP ====================

function initConceptMap() {
    document.querySelectorAll('.concept-node').forEach(node => {
        node.addEventListener('click', () => {
            const concept = node.dataset.concept;
            showConceptDetails(concept);
            
            // Highlight selected
            document.querySelectorAll('.concept-node').forEach(n => 
                n.classList.remove('selected'));
            node.classList.add('selected');
        });
    });
}

function showConceptDetails(conceptKey) {
    const concept = conceptsData[conceptKey];
    if (!concept) return;
    
    document.getElementById('concept-title').textContent = concept.title;
    document.getElementById('concept-description').innerHTML = `
        <p style="line-height: 1.7; margin-bottom: 20px;">${concept.description}</p>
        <div style="padding: 15px; background: rgba(99, 102, 241, 0.1); border-radius: 10px;">
            <strong>Connected to:</strong> ${concept.connections.join(', ')}
        </div>
    `;
}

// ==================== EVENT LISTENERS ====================

document.addEventListener('DOMContentLoaded', () => {
    
    // Mode switching
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            
            // Update buttons
            document.querySelectorAll('.mode-btn').forEach(b => 
                b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update modes
            document.querySelectorAll('.study-mode').forEach(m => 
                m.classList.remove('active'));
            document.getElementById(`${mode}-mode`).classList.add('active');
            
            // Initialize mode
            if (mode === 'quiz') initQuiz();
            if (mode === 'concepts') initConceptMap();
        });
    });
    
    // Flashcard controls
    document.getElementById('flashcard').addEventListener('click', () => {
        document.getElementById('flashcard').classList.toggle('flipped');
    });
    
    document.getElementById('flip-card').addEventListener('click', () => {
        document.getElementById('flashcard').classList.toggle('flipped');
    });
    
    document.getElementById('prev-card').addEventListener('click', () => {
        const filteredCards = getFilteredCards();
        currentCardIndex = (currentCardIndex - 1 + filteredCards.length) % filteredCards.length;
        updateFlashcard();
        updateStats();
    });
    
    document.getElementById('next-card').addEventListener('click', () => {
        const filteredCards = getFilteredCards();
        currentCardIndex = (currentCardIndex + 1) % filteredCards.length;
        updateFlashcard();
        updateStats();
    });
    
    document.getElementById('category-filter').addEventListener('change', (e) => {
        currentFilter = e.target.value;
        currentCardIndex = 0;
        updateFlashcard();
        updateStats();
    });
    
    // Mastery buttons
    document.getElementById('mark-wrong').addEventListener('click', () => {
        masteredCards.delete(currentCardIndex);
        updateStats();
        updateProgress();
        document.getElementById('next-card').click();
    });
    
    document.getElementById('mark-ok').addEventListener('click', () => {
        updateStats();
        updateProgress();
        document.getElementById('next-card').click();
    });
    
    document.getElementById('mark-correct').addEventListener('click', () => {
        masteredCards.add(currentCardIndex);
        updateStats();
        updateProgress();
        document.getElementById('next-card').click();
    });
    
    // Quiz controls
    document.getElementById('show-answer').addEventListener('click', () => {
        const answerSection = document.getElementById('answer-section');
        const btn = document.getElementById('show-answer');
        
        if (answerSection.classList.contains('hidden')) {
            // Save user's answer
            const userAnswer = document.getElementById('user-answer').value;
            if (!quizAnswers[currentQuizIndex]) {
                quizAnswers[currentQuizIndex] = { userAnswer, score: null };
            } else {
                quizAnswers[currentQuizIndex].userAnswer = userAnswer;
            }
            
            answerSection.classList.remove('hidden');
            btn.textContent = 'Hide Answer';
        } else {
            answerSection.classList.add('hidden');
            btn.textContent = 'Show Answer';
        }
    });
    
    document.getElementById('q-prev').addEventListener('click', () => {
        if (currentQuizIndex > 0) {
            currentQuizIndex--;
            updateQuizQuestion();
        }
    });
    
    document.getElementById('q-next').addEventListener('click', () => {
        // Save current answer
        const userAnswer = document.getElementById('user-answer').value;
        if (!quizAnswers[currentQuizIndex]) {
            quizAnswers[currentQuizIndex] = { userAnswer, score: null };
        } else {
            quizAnswers[currentQuizIndex].userAnswer = userAnswer;
        }
        
        if (currentQuizIndex < quizQuestions.length - 1) {
            currentQuizIndex++;
            updateQuizQuestion();
        } else {
            showQuizSummary();
        }
    });
    
    document.querySelectorAll('.assess-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const score = parseInt(btn.dataset.score);
            
            if (!quizAnswers[currentQuizIndex]) {
                quizAnswers[currentQuizIndex] = { 
                    userAnswer: document.getElementById('user-answer').value, 
                    score 
                };
            } else {
                quizAnswers[currentQuizIndex].score = score;
            }
            
            // Visual feedback
            document.querySelectorAll('.assess-btn').forEach(b => 
                b.classList.remove('selected'));
            btn.classList.add('selected');
            
            // Auto-advance after short delay
            setTimeout(() => {
                document.getElementById('q-next').click();
            }, 500);
        });
    });
    
    document.getElementById('restart-quiz').addEventListener('click', () => {
        initQuiz();
    });
    
    // Initialize flashcards
    initFlashcards();
});
