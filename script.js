// ==================== ADATOK ====================

const flashcardsData = [
    // Alapfogalmak
    {
        category: 'definitions',
        question: 'Mi a pedagógia?',
        answer: 'Az a tudomány, amely a nevelés és oktatás elméletét és gyakorlatát foglalja magában. Tárgya az a folyamat, amelyben az ember személyiséggé válik.',
        example: 'Eredetileg görögül "gyermekvezetést" jelentett, ma már magában foglalja a neveléstudományt és a gyakorlatot is.'
    },
    {
        category: 'definitions',
        question: 'Mi a szocializáció?',
        answer: 'Az az élethosszig tartó folyamat, amelyben az egyén elsajátítja a csoportba való beilleszkedéshez és a közösségi életben való aktív részvételhez szükséges tudást és készségeket.',
        example: 'Magában foglalja a szándékos hatásokat (nevelés) és a spontán hatásokat (környezet) egyaránt.'
    },
    {
        category: 'definitions',
        question: 'Mi az enkulturáció?',
        answer: 'A kultúrába való "belenövés" folyamata, amelyben kulturális lénnyé válunk. Ez a legátfogóbb tanulási folyamat, amelyben elsajátítjuk az alapvető kulturális készségeket.',
        example: 'A gyermek az anyanyelvét és a családi szokásait az enkulturáció révén tanulja meg.'
    },
    {
        category: 'definitions',
        question: 'Mi a nevelés?',
        answer: 'A szocializáció tudatos, tervszerű és célirányos összetevője, amely a társadalmi szerepekhez szükséges tudás, értékek és készségek átadására irányul.',
        example: 'Az iskolai tanterv nevelés; a média véletlenszerű hatása nem az.'
    },
    {
        category: 'definitions',
        question: 'Mi az individualizáció?',
        answer: 'Az egyéni személyiséggé válás folyamata, amelyet az ítélőképesség, az önkontroll és a felelősségtudat kifejlődése jellemez.',
        example: 'A kultúrától az egyéni személyiségig tartó fejlődési folyamat végeredménye.'
    },

    // Nevelési stílusok
    {
        category: 'parenting',
        question: 'Jellemezd az autoriter (tekintélyelvű) nevelési stílust!',
        answer: 'Tiszteletet és engedelmességet vár el, nagymértékben a büntetésre támaszkodik, és nem érdekli a gyermek véleménye. Gyengébb szociális készségekkel rendelkező, a tekintélytől függő gyermekeket eredményez.',
        example: 'Az "Azért, mert én mondtam" tipikus autoriter válasz.'
    },
    {
        category: 'parenting',
        question: 'Jellemezd az autoritatív (irányító-magyarázó) stílust!',
        answer: 'A szülő megmagyarázza a jutalom és büntetés okait, figyelembe veszi a gyermek véleményét, és bátorítja az önállóságot. Önkontrollt és felelősségtudatot fejleszt.',
        example: 'A szülő elmagyarázza, miért fontos a házi feladat, és kikéri a gyermek véleményét az ütemezésről.'
    },
    {
        category: 'parenting',
        question: 'Jellemezd a megengedő/elhanyagoló stílust!',
        answer: 'Korlátok és elvárások hiánya jellemzi. Éretlen, önkontrollal küzdő és csökkent felelősségtudatú gyermekeket eredményez.',
        example: 'A szülő hagyja, hogy a gyermek útmutatás vagy struktúra nélkül döntse el a lefekvési időt.'
    },

    // Csoportfejlődés
    {
        category: 'groups',
        question: 'Mi jellemzi az alakulás (forming) fázist?',
        answer: 'A csoportfejlődés kezdeti szakasza, amelyet kényelmetlenség, bizonytalanság és homályos szerepek, szabályok jellemeznek. A tagok gyakran tartózkodóak.',
        example: 'Egy új osztály első napja, amikor a diákok még nem ismerik egymást.'
    },
    {
        category: 'groups',
        question: 'Mi jellemzi a viharzás (storming) fázist?',
        answer: 'A tagok pozícióért és dominanciáért versenyeznek, ami nyílt és rejtett konfliktusokhoz vezet. Kritikus szakasz a csoporthierarchia kialakításához.',
        example: 'A diákok tesztelik a határokat és a társadalmi státuszért versenyeznek az osztályban.'
    },
    {
        category: 'groups',
        question: 'Mi jellemzi a normaképződés (norming) fázist?',
        answer: 'A csoport viselkedési szabályai, stílusa és normái kialakulnak, valódi közösséget alkotva. A konfliktusok megoldódnak és közös normák alakulnak ki.',
        example: 'Az osztály kialakítja saját belső vicceit, rituáléit és íratlan szabályait.'
    },
    {
        category: 'groups',
        question: 'Mi jellemzi a működés (performing) fázist?',
        answer: 'A csoport kiszámítható, nyugodt, feladatorientált, és erős "mi-tudat" jellemzi. A tagok hatékonyan dolgoznak együtt.',
        example: 'Egy jól működő osztály, amely zökkenőmentesen együttműködik a projekteken.'
    },
    {
        category: 'groups',
        question: 'Mi jellemzi a megszűnés (adjourning) fázist?',
        answer: 'A csoport hivatalosan feloszlik a feladat vagy életciklus végén, bár informális csoportként továbbra is létezhet.',
        example: 'A tanév vége, amikor az osztály hivatalosan feloszlik.'
    },

    // Digitális kor
    {
        category: 'digital',
        question: 'Kik a digitális bevándorlók?',
        answer: 'Azok az egyének, akik felnőttként találkoztak az IKT-val, és meg kellett tanulniuk alkalmazkodni hozzá. Ide tartozik a Baby Boomer (1946-1964) és az X (1965-1979) generáció.',
        example: 'Előnyben részesítik a szöveget, az egyszeri feladatokra koncentrálást és a késleltetett jutalmakat. "Megtanulták" a technológiát.'
    },
    {
        category: 'digital',
        question: 'Kik a digitális bennszülöttek?',
        answer: 'Azok az egyének, akik születésüktől fogva a digitális technológiával nőttek fel, így az a természetes környezetük. Ide tartozik az Y, Z és Alpha generáció.',
        example: 'Előnyben részesítik a képeket/videókat, a párhuzamos feldolgozást és az azonnali kielégülést. A technológia az "anyanyelvük".'
    },
    {
        category: 'digital',
        question: 'Mi a "gonosz világ szindróma" (Mean World Syndrome)?',
        answer: 'Pszichológiai hatás, amelyben az erőszakban gazdag médiának való kitettség fokozott szorongáshoz és ahhoz a meggyőződéshez vezet, hogy a világ veszélyesebb, mint amilyen valójában.',
        example: 'Az erőszakos médiát néző gyermek félénkké válhat, nem pedig agresszívvá.'
    },
    {
        category: 'digital',
        question: 'Mi a szülői mediáció?',
        answer: 'Az a aktív szerep, amelyet a szülő vállal, hogy segítse a gyermeket a médiatartalmak megértésében, értelmezésében és kritikus értékelésében. Három formája van: együtt nézés, korlátozó és aktív.',
        example: 'Beszélgetés a gyermekkel arról, amit egy filmben látott, és annak valós következményeiről.'
    },

    // Fejlődési folyamatok
    {
        category: 'processes',
        question: 'Mik az elsődleges csoportok?',
        answer: 'Védelmet és támogatást nyújtó csoportok, amelyeket gyakori interakció, érzelmi kötelékek és kölcsönös ismertség jellemez.',
        example: 'A család a legfontosabb elsődleges csoport; egy összetartó osztály is ilyenné fejlődhet.'
    },
    {
        category: 'processes',
        question: 'Mik a másodlagos csoportok?',
        answer: 'Formális struktúrák által összetartott csoportok, ahol a tagok közötti érzelmi bevonódás nem szükséges.',
        example: 'Egy iskolai osztály a kezdetekkor másodlagos csoport.'
    },
    {
        category: 'processes',
        question: 'Mi a didaktika?',
        answer: 'Az oktatás elmélete néven is ismert szakterület, amely a tanítási folyamatot kutatja és elemzi, vizsgálva annak tartalmát, szervezését és módszereit.',
        example: 'Annak tanulmányozása, HOGYAN tanítsunk hatékonyan matematikát, didaktika.'
    },
    {
        category: 'processes',
        question: 'Mi az andragógia?',
        answer: 'A pedagógia azon ága, amely a felnőttek szervezett tanulásával foglalkozik az alapfokú iskoláztatás és szakképzés befejezése után.',
        example: 'Felnőttképzési programok és szakmai továbbképzések.'
    },
    {
        category: 'definitions',
        question: 'Melyek a kultúra 4 jellemzője?',
        answer: 'A kultúra: Közös (egy csoporthoz tartozik), Egyedi (megkülönbözteti a csoportokat), Tanult (nem biológiai) és Sokrétű (sok arca van).',
        example: 'A nyelv, szokások, művészet és értékek mind a kultúra tanult részei.'
    },
    {
        category: 'processes',
        question: 'Melyek a család fő funkciói?',
        answer: 'Biológiai és pszichológiai támogatás, érzelmi egyensúly, gondoskodás, nevelés, szocializáció, státusz megállapítása, viselkedésirányítás, konfliktuskezelés és kultúraátadás.',
        example: 'A család tanítja az "én vs. mások" megkülönböztetést, határokat állít fel és alapértékeket ad át.'
    },
    {
        category: 'digital',
        question: 'Miért fontosak a könyvek a képernyőkkel szemben a gyermekek számára?',
        answer: 'A könyvek segítenek megérteni, hogy a szimbólumok információt hordoznak, fejlesztik a vizuális harmónia érzékét, és feszültségkezelést biztosítanak a karakterekbe való projekció révén. Szülő-gyermek kötődést teremt, ellentétben a passzív képernyőidővel.',
        example: 'A mesék olvasása segít a gyermekeknek feldolgozni a jó és rossz fogalmakat.'
    },
    {
        category: 'digital',
        question: 'Melyek a szülői mediáció 3 formája?',
        answer: 'Együtt nézés (közös nézelődés), Korlátozó mediáció (idő/tartalom korlátozása) és Aktív mediáció (tartalom megbeszélése és értékelése).',
        example: 'Az aktív mediáció segít a gyermekeknek megérteni a reklámok szándékait és a média felépítését.'
    }
];

const quizQuestions = [
    {
        question: 'Mi a történelmi és modern különbség a "pedagógia" és a "neveléstudomány" kifejezések között?',
        answer: 'Történelmileg a "pedagógia" a nevelés gyakorlati formáira utalt. Ma a kifejezés kibővült, és magában foglalja a nevelési valóság tudományos vizsgálatát és kutatását is, amit "neveléstudománynak" is neveznek. Tehát míg a pedagógia eredetileg a gyakorlatra összpontosított, ma már magában foglalja a nevelés és oktatás elméletét (neveléstudomány) és gyakorlatát egyaránt.'
    },
    {
        question: 'Határozd meg a "szocializáció" folyamatát és írd le a hatás két fő formáját!',
        answer: 'A szocializáció az az élethosszig tartó folyamat, amely felkészíti az egyént a társadalmi életre, a másokkal való együttélésre és a közösségben való aktív részvételre. Két típusú hatásból áll: szándékos, tervezett hatások intézményektől, mint az iskola (nevelés, oktatás), és spontán, véletlenszerű hatások a tágabb környezetből, amelyek az élet során végig érvényesülnek.'
    },
    {
        question: 'Magyarázd el az enkulturáció, szocializáció és nevelés fogalmak közötti kapcsolatot!',
        answer: 'Az enkulturáció a kultúra alapelemeinek elsajátítási folyamata. A szocializáció ennek része, amely konkrétabban a társadalom erkölcsi rendjének és szabályainak megtanulására utal. A nevelés mindkettő eszköze, amely a tudatos, tervszerű és célirányos tevékenységeket jelenti, amelyek segítik az egyént kultúrájába és társadalmába beilleszkedni.'
    },
    {
        question: 'Melyek a család mint a szocializáció elsődleges színterének fő funkciói?',
        answer: 'A család fő funkciói közé tartozik a biológiai és pszichológiai támogatás nyújtása, az érzelmi egyensúly biztosítása, valamint a gondoskodási, nevelési és szocializációs feladatok ellátása. Emellett megállapítja a családtag státuszát, irányítja a viselkedést, kezeli a konfliktusokat, és közvetíti a kultúrát, világnézetet és értékeket.'
    },
    {
        question: 'Írd le a három fő szülői nevelési stílust és általános hatásaikat a gyermek viselkedésére!',
        answer: 'A három stílus: Autoriter (tekintélyelvű), amely engedelmességet vár el és büntetéssel dolgozik, gyengébb szociális készségű, utasításokra váró gyermekeket eredményez; Autoritatív (irányító-magyarázó), amely megmagyarázza a szabályokat és értékeli a gyermek véleményét, önállóságot és felelősségtudatot fejleszt; és Megengedő/Elhanyagoló, amelynek nincsenek korlátai, ami éretlen és gyenge önkontrollú gyermekeket eredményez.'
    },
    {
        question: 'Sorold fel és röviden magyarázd el a csoportfejlődés öt fázisát az iskolai környezetben!',
        answer: 'Az öt fázis: Alakulás (Forming) - Kezdeti szakasz, amelyet kényelmetlenség és homályos szerepek/szabályok jellemeznek; Viharzás (Storming) - A tagok pozícióért és dominanciáért versenyeznek, konfliktusokhoz vezetve; Normaképződés (Norming) - A csoport viselkedési szabályai, stílusa és normái kialakulnak; Működés (Performing) - A csoport kiszámítható, nyugodt, feladatorientált, "mi-tudat" jellemzi; Megszűnés (Adjourning) - A csoport hivatalosan feloszlik.'
    },
    {
        question: 'Marc Prensky elmélete szerint melyek az alapvető különbségek a "digitális bennszülöttek" és a "digitális bevándorlók" között a technológiához való viszonyukban?',
        answer: 'A digitális bevándorlók felnőttként találkoztak az információs és kommunikációs technológiával (IKT), és meg kellett tanulniuk alkalmazkodni hozzá, míg a digitális bennszülöttek vele együtt nőttek fel, természetes környezetükként. A bevándorlók hajlamosak előnyben részesíteni a szöveget, az egyszeri feladatokra koncentrálást és a késleltetett jutalmakat, míg a bennszülöttek a képeket és videókat, a párhuzamos feldolgozást és az azonnali kielégülést preferálják.'
    },
    {
        question: 'Mi a "gonosz világ szindróma" és hogyan kapcsolódik a médiafogyasztáshoz?',
        answer: 'A "gonosz világ szindróma" olyan jelenség, amely során a médiában látott állandó agresszió és erőszak szorongást és antiszociális viselkedést okoz, nem pedig agressziót. Torzult világszemlélethez vezet, amelyben az egyén a világot veszélyesebb és félelmetesebb helynek érzékeli, mint amilyen valójában.'
    },
    {
        question: 'Miért tartják fontosnak a hagyományos könyveket és meséket a kisgyermek fejlődése szempontjából, különösen a képernyő-alapú médiával összehasonlítva?',
        answer: 'A könyvek és mesék fontosak, mert segítenek a gyermeknek megérteni, hogy a szimbólumok információt hordoznak, fejlesztik a vizuális harmónia érzékét, és lehetőséget biztosítanak a feszültség kezelésére az érzelmek szereplőkre vetítése révén. Ez a folyamat segít a gyermeknek felismerni és kezelni a jó és rossz fogalmait, valamint intim kötődési élményt nyújt a szülővel, ellentétben a passzív képernyőidővel.'
    },
    {
        question: 'Mi a szülői "mediáció" a gyermekek médiafogyasztásának kontextusában, és melyek a három formája?',
        answer: 'A szülői mediáció azokra a stratégiákra utal, amelyeket a szülők alkalmaznak, hogy segítsék a gyermekeket megérteni és feldolgozni a médiát. Három formája van: Együtt nézés, amikor a szülő és gyermek együtt néz; Korlátozó mediáció, amely magában foglalja a fogyasztott tartalom idejének vagy típusának korlátozását; és Aktív mediáció, amely magában foglalja a látottak megbeszélését és értékelését, hogy segítse a gyermeket megérteni azok valós következményeit.'
    }
];

const conceptsData = {
    culture: {
        title: 'Kultúra',
        description: 'A teljes, ember alkotta környezet, amelyben élünk. Magában foglalja a tudást, hiedelmeket, művészetet, erkölcsöt, törvényt, szokásokat és minden más képességet és szokást, amelyet a társadalom tagjaként sajátítunk el. A kultúra: Közös, Egyedi, Tanult és Sokrétű.',
        connections: ['Enkulturáció']
    },
    enculturation: {
        title: 'Enkulturáció',
        description: 'A kultúrába való "belenövés" és annak alapelemeinek elsajátítási folyamata. Itt tanuljuk meg a nyelvet, az alapvető szokásokat és a kulturális történeteket, elsősorban a család keretein belül.',
        connections: ['Kultúra', 'Szocializáció']
    },
    socialization: {
        title: 'Szocializáció',
        description: 'Az élethosszig tartó folyamat, amelyben megtanulunk működni a társadalomban annak normái és szabályai elfogadásával. Magában foglalja a szándékos (nevelés) és spontán (környezet) hatásokat egyaránt.',
        connections: ['Enkulturáció', 'Nevelés', 'Család', 'Iskola', 'Média']
    },
    education: {
        title: 'Nevelés',
        description: 'A szocializáció tudatos, tervszerű és célirányos összetevője. A társadalmak által létrehozott formális rendszer, amely biztosítja, hogy az alapvető kulturális és társadalmi tudás strukturált módon átadódjon.',
        connections: ['Szocializáció', 'Individualizáció']
    },
    individualization: {
        title: 'Individualizáció',
        description: 'A fejlődési folyamat eredménye, amely egyedi identitást eredményez felelős, öntudatos egyénként, ítélőképességgel, önkontrollal és felelősségtudattal.',
        connections: ['Nevelés']
    },
    family: {
        title: 'Család mint színtér',
        description: 'A szocializáció elsődleges és "amatőr" színtere. Olyan referencia csoport, ahol az identitás először formálódik. Fő feladatai: az "én vs. mások" tanítása, határok felállítása, értékek átadása és nyelvelsajátítás. A nevelési stílusok (autoriter, autoritatív, megengedő) tartós hatással vannak.',
        connections: ['Szocializáció']
    },
    school: {
        title: 'Iskola mint színtér',
        description: 'A szocializáció "professzionális" színtere, amely tervszerűen épít a család alapjaira. Csoportdinamikát kezel 5 fázison keresztül: Alakulás → Viharzás → Normaképződés → Működés → Megszűnés. A másodlagos csoportokat elsődleges csoportokká alakítja.',
        connections: ['Szocializáció']
    },
    media: {
        title: 'Média mint színtér',
        description: 'A 21. század meghatározó szocializációs színtere. Generációs szakadékot teremt a digitális bevándorlók és digitális bennszülöttek között. Lehetséges negatív hatásai: torzult világkép (gonosz világ szindróma), passzív fogyasztás, gyengült képzelet és elmosódott valóság/fikció. A szülői mediáció kritikus.',
        connections: ['Szocializáció']
    }
};

// ==================== ÁLLAPOT ====================

let currentCardIndex = 0;
let masteredCards = new Set();
let currentFilter = 'all';
let currentQuizIndex = 0;
let quizAnswers = [];
let quizStartTime = null;
let timerInterval = null;

// ==================== TANULÓKÁRTYA MÓD ====================

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
        definitions: 'Alapfogalom',
        parenting: 'Nevelési stílus',
        digital: 'Digitális kor',
        groups: 'Csoportfejlődés',
        processes: 'Fejlődési folyamat'
    };
    return names[category] || 'Általános';
}

function updateStats() {
    const filteredCards = getFilteredCards();
    document.getElementById('card-counter').textContent = 
        `${currentCardIndex + 1}. kártya / ${filteredCards.length}`;
    document.getElementById('mastery-score').textContent = 
        `Elsajátítva: ${masteredCards.size}/${flashcardsData.length}`;
}

function updateProgress() {
    const progress = (masteredCards.size / flashcardsData.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

// ==================== KVÍZ MÓD ====================

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
        `${currentQuizIndex + 1}. kérdés / ${quizQuestions.length}`;
    document.getElementById('q-text').textContent = question.question;
    document.getElementById('user-answer').value = 
        quizAnswers[currentQuizIndex]?.userAnswer || '';
    document.getElementById('model-answer').textContent = question.answer;
    
    // Hide answer section initially
    document.getElementById('answer-section').classList.add('hidden');
    document.getElementById('show-answer').textContent = 'Válasz mutatása';
    
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
            `Idő: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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
            ${percentage >= 80 ? '🌟 Kiváló munka!' : percentage >= 60 ? '👍 Jó teljesítmény!' : '📚 Tanulj tovább!'}
        </p>
    `;
    
    // Show weak areas
    const weakQuestions = quizAnswers
        .map((a, i) => ({ index: i, score: a?.score || 0 }))
        .filter(q => q.score < 2)
        .map(q => quizQuestions[q.index].question.substring(0, 60) + '...');
    
    if (weakQuestions.length > 0) {
        document.getElementById('weak-areas').innerHTML = `
            <h3 style="margin-top: 30px; color: #f59e0b;">Átnézendő területek:</h3>
            <ul style="text-align: left; margin: 15px auto; max-width: 600px; line-height: 1.8;">
                ${weakQuestions.map(q => `<li>${q}</li>`).join('')}
            </ul>
        `;
    }
}

// ==================== FOGALOMTÉRKÉP ====================

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
            <strong>Kapcsolódik:</strong> ${concept.connections.join(', ')}
        </div>
    `;
}

// ==================== ESEMÉNYKEZELŐK ====================

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
            btn.textContent = 'Válasz elrejtése';
        } else {
            answerSection.classList.add('hidden');
            btn.textContent = 'Válasz mutatása';
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
