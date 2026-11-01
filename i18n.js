// All site content in Turkish and English. A field is either a plain string
// (same in both languages) or { tr, en }.
const GH = 'https://github.com/nurdanpehlivan/';
const PLAY = 'https://play.google.com/store/apps/details?id=';

const UI = {
  'nav.about': { tr: 'Hakkımda', en: 'About' },
  'nav.projects': { tr: 'Projeler', en: 'Projects' },
  'nav.skills': { tr: 'Yetenekler', en: 'Skills' },
  'nav.experience': { tr: 'Deneyim', en: 'Experience' },
  'nav.pm': { tr: 'Liderlik', en: 'Leadership' },
  'nav.awards': { tr: 'Başarılar', en: 'Awards' },
  'nav.contact': { tr: 'İletişim', en: 'Contact' },
  'ui.theme': { tr: 'Temayı değiştir', en: 'Toggle theme' },
  'ui.copied': { tr: 'E-posta kopyalandı ✓', en: 'E-mail copied ✓' },
  'ui.details': { tr: 'Detaylar', en: 'Details' },
  'ui.langSwitched': { tr: 'Türkçe', en: 'English' },

  'hero.open': { tr: 'Yeni fırsatlara açığım', en: 'Open to new opportunities' },
  'hero.hi': { tr: 'Merhaba, ben', en: 'Hi, I\'m' },
  'hero.lead': {
    tr: 'Kotlin ve Jetpack Compose ile modern Android uygulamaları geliştiren bir bilgisayar mühendisiyim. Boyner\'de canlıdaki uygulamalarda çalıştım; kendi projelerimde Clean Architecture, çok modüllü Gradle ve Gemini API ile uçtan uca ürünler çıkarıyorum.',
    en: 'I\'m a computer engineer building modern Android apps with Kotlin and Jetpack Compose. I worked on production apps at Boyner, and in my own projects I ship end-to-end products with Clean Architecture, multi-module Gradle and the Gemini API.',
  },
  'hero.cta1': { tr: 'Projelerimi gör', en: 'See my work' },

  'show.kicker': { tr: '02 · Öne çıkan proje', en: '02 · Featured project' },
  'show.sub': {
    tr: 'Buzdolabının, rafın ya da fişin fotoğrafını çek; ürünler son kullanma tarihleriyle eklensin. Bozulmak üzere olanlar gerçek tariflere dönüşsün. Uygulama, backend ve web paneli uçtan uca benim işim.',
    en: 'Snap your fridge, a shelf or a receipt and items are added with their use-by dates. What\'s about to spoil turns into real recipes. The app, backend and web panel are built end to end by me.',
  },
  'show.l1': { tr: '<b>Gemini API</b> ile fotoğraftan ürün tanıma ve tarif önerisi', en: 'Photo-based product recognition and recipes with the <b>Gemini API</b>' },
  'show.l2': { tr: '<b>ML Kit OCR</b> ile son kullanma tarihi okuma, barkod sorgulama', en: 'Expiry date reading with <b>ML Kit OCR</b>, barcode lookup' },
  'show.l3': { tr: '<b>Çok modüllü Clean Architecture</b>: core + 8 feature modülü, MVI', en: '<b>Multi-module Clean Architecture</b>: core + 8 feature modules, MVI' },
  'show.l4': { tr: '<b>Cloudflare Workers + D1</b> ile senkronizasyon ve aile paylaşımı', en: 'Sync and household sharing with <b>Cloudflare Workers + D1</b>' },
  'show.cta': { tr: 'Detaylar ve ekranlar', en: 'Details & screens' },

  'pm.kicker': { tr: '06 · Proje Yönetimi & Liderlik', en: '06 · Project Management & Leadership' },
  'pm.title': { tr: 'Kodun ötesinde: ekipleri ve süreçleri yönetmek', en: 'Beyond code: coordinating teams and delivery' },
  'pm.sub': {
    tr: 'Teknik altyapımı proje koordinasyonu ve ekipler arası iletişimle birleştiriyorum. Google Project Management sertifikalıyım.',
    en: 'I combine my technical background with project coordination and cross-functional communication. Google Project Management certified.',
  },

  'about.kicker': { tr: '01 · Hakkımda', en: '01 · About' },
  'about.title': { tr: 'Kodu, kullanıcıya dokunan ürüne çeviriyorum.', en: 'I turn code into products people actually use.' },
  'about.p1': {
    tr: 'Kastamonu Üniversitesi Bilgisayar Mühendisliği mezunuyum (2026) ve Gebze\'de yaşıyorum. Boyner\'deki 4 aylık uzun dönem stajımda, canlıdaki <b>Boyner Now</b> ve <b>Horizon</b> projelerinde UI geliştirme, state yönetimi ve stabilizasyon çalışmalarında yer aldım.',
    en: 'I graduated in Computer Engineering from Kastamonu University (2026) and live in Gebze, Türkiye. During a 4-month long-term internship at Boyner, I worked on UI development, state management and stability in the production <b>Boyner Now</b> and <b>Horizon</b> projects.',
  },
  'about.p2': {
    tr: 'Kendi projelerimde MVVM/MVI, Clean Architecture, çok modüllü Gradle, Hilt, Room ve Gemini API ile uçtan uca Android uygulamaları geliştiriyorum: fotoğraftan kiler oluşturan <b>Frizzy</b> ve günün tamamını şifreli bir zaman tünelinde tutan <b>Mimo</b> gibi.',
    en: 'In my own projects I build end-to-end Android apps with MVVM/MVI, Clean Architecture, multi-module Gradle, Hilt, Room and the Gemini API — like <b>Frizzy</b>, which builds your pantry from a photo, and <b>Mimo</b>, which keeps your whole day in one encrypted timeline.',
  },
  'about.p3': {
    tr: 'TÜBİTAK 2209-A projemi <b>ICENSS 2026</b>\'da yayımladım, UDHAM yarışmasında <b>Türkiye 2.liği</b> kazandım. Agile/Scrum ekiplerinde çalışma, kod incelemesi ve birim testi deneyimim var.',
    en: 'My TÜBİTAK 2209-A project was published at <b>ICENSS 2026</b>, and I won <b>2nd place in Türkiye</b> at the UDHAM competition. I\'m experienced in Agile/Scrum teams, code reviews and unit testing.',
  },
  'stats.intern': { tr: 'Staj deneyimi', en: 'Internships' },
  'stats.apps': { tr: 'Geliştirdiğim uygulama', en: 'Apps built' },
  'stats.teams': { tr: 'Mentorluk yaptığım takım', en: 'Teams mentored' },
  'stats.paper': { tr: 'Uluslararası bildiri · ICENSS', en: 'International paper · ICENSS' },

  'projects.kicker': { tr: '03 · Projeler', en: '03 · Projects' },
  'projects.title': { tr: 'Seçilmiş işler', en: 'Selected work' },
  'projects.sub': {
    tr: 'Bir karta tıkla, detayları ve ekran görüntülerini aç. Yetenekler bölümündeki bir teknolojiye tıklayarak da filtreleyebilirsin.',
    en: 'Click a card to open details and screenshots. You can also filter by clicking a technology in the Skills section.',
  },
  'projects.using': { tr: '<b>{t}</b> kullanan projeler', en: 'Projects using <b>{t}</b>' },
  'projects.clear': { tr: 'temizle', en: 'clear' },
  'projects.did': { tr: 'Neler yaptım', en: 'What I did' },
  'projects.tech': { tr: 'Teknolojiler', en: 'Tech stack' },
  'projects.play': { tr: 'Google Play\'de', en: 'Get it on Google Play' },
  'projects.playNote': { tr: 'Uygulama şu an Google Play\'de test aşamasında; mağaza sayfası herkese açık yayınla birlikte görünür olacak.', en: 'The app is currently in testing on Google Play; the store page becomes public with the full release.' },

  'skills.kicker': { tr: '04 · Yetenekler', en: '04 · Skills' },
  'skills.title': { tr: 'Araç kutum', en: 'My toolbox' },
  'skills.sub': {
    tr: 'Üzerine gel: o teknolojiyi kullandığım projeler parlar. Noktalı olanlara tıkla: projeleri filtrele.',
    en: 'Hover: projects using that technology light up. Click the dotted ones to filter projects.',
  },
  'skills.used': { tr: '{t}: deneyimlerimde kullandım', en: '{t}: used in my work experience' },

  'exp.kicker': { tr: '05 · Deneyim', en: '05 · Experience' },
  'exp.title': { tr: 'Yol haritam', en: 'My journey' },

  'awards.kicker': { tr: '07 · Başarılar', en: '07 · Awards' },
  'awards.title': { tr: 'Ödüller, yayınlar ve topluluklar', en: 'Awards, publications & communities' },

  'contact.kicker': { tr: '08 · İletişim', en: '08 · Contact' },
  'contact.title': { tr: 'Birlikte bir şey <span class="grad">inşa edelim</span>.', en: 'Let\'s <span class="grad">build something</span> together.' },
  'contact.sub': {
    tr: 'Android geliştirici pozisyonları, yapay zekâ projeleri ya da sadece merhaba demek için yazabilirsin.',
    en: 'Reach out about Android developer roles, AI projects, or just to say hi.',
  },
  'contact.mail': { tr: 'E-posta gönder', en: 'Send an e-mail' },

  'footer.made': { tr: 'Elle kodlandı, GitHub Pages\'te ücretsiz yayında.', en: 'Hand-coded, hosted for free on GitHub Pages.' },
  'footer.tip': { tr: 'İpucu:', en: 'Tip:' },

  'palette.title': { tr: 'Komut paleti', en: 'Command palette' },
  'palette.placeholder': { tr: 'Bir komut ya da bölüm yaz…', en: 'Type a command or section…' },
  'palette.hint': { tr: '<kbd>↑</kbd><kbd>↓</kbd> gez · <kbd>Enter</kbd> seç · <kbd>Esc</kbd> kapat', en: '<kbd>↑</kbd><kbd>↓</kbd> move · <kbd>Enter</kbd> select · <kbd>Esc</kbd> close' },
  'palette.none': { tr: 'Sonuç yok', en: 'No results' },
  'pg.section': { tr: 'Bölüm', en: 'Section' },
  'pg.project': { tr: 'Proje', en: 'Project' },
  'pg.action': { tr: 'Eylem', en: 'Action' },
  'pg.link': { tr: 'Bağlantı', en: 'Link' },
  'cmd.theme': { tr: 'Temayı değiştir', en: 'Toggle theme' },
  'cmd.lang': { tr: 'Switch to English', en: 'Türkçeye geç' },
  'cmd.copy': { tr: 'E-postayı kopyala', en: 'Copy e-mail' },
};


const ROLES = {
  tr: ['Android Developer', 'Kotlin & Jetpack Compose', 'Yapay zekâ entegrasyonları', 'Clean Architecture tutkunu', 'Uçtan uca ürün geliştirici'],
  en: ['Android Developer', 'Kotlin & Jetpack Compose', 'AI integrations', 'Clean Architecture enthusiast', 'End-to-end product builder'],
};

const CATEGORIES = [
  { id: 'all', label: { tr: 'Tümü', en: 'All' } },
  { id: 'android', label: 'Android' },
  { id: 'ai', label: { tr: 'Yapay Zekâ', en: 'AI' } },
  { id: 'flutter', label: 'Flutter' },
  { id: 'research', label: { tr: 'Araştırma', en: 'Research' } },
];

const PROJECTS = [
  {
    id: 'frizzy', cats: ['android', 'ai'], live: true,
    title: 'Frizzy (Shelfie)', subtitle: { tr: 'Akıllı kiler ve gıda israfı takibi', en: 'Smart pantry & food waste tracker' }, year: '2026',
    badge: { tr: 'Google Play · Test', en: 'Google Play · Testing' },
    icon: { img: 'assets/frizzy/icon-512.png' },
    shots: [1, 2, 3, 4, 5, 6].map(i => `assets/frizzy/shot-${i}.png`),
    short: {
      tr: 'Buzdolabının, rafın ya da fişin fotoğrafını çek; ürünler son kullanma tarihleriyle eklensin. Bozulmak üzere olanlar gerçek tariflere dönüşsün.',
      en: 'Snap your fridge, a shelf or a receipt and items are added with their use-by dates. What\'s about to spoil turns into real recipes.',
    },
    desc: {
      tr: 'Aldığın yiyeceği çöpe atmak yerine yemene yardım eden bir Android uygulaması. Maskot Frizzy, yiyecekler bozulmadan önce hatırlatır ve son günlerindeki ürünleri hızlı tariflere çevirir. Uygulama, backend ve web paneli uçtan uca benim işim.',
      en: 'An Android app that helps you eat what you buy instead of throwing it away. Frizzy, the fridge mascot, reminds you before food spoils and turns items on their last days into quick recipes. The app, backend and web panel are built end to end by me.',
    },
    points: {
      tr: [
        'Çok modüllü Clean Architecture (core: domain / data / ui + 8 feature modülü), build-logic convention plugin\'leri ve MVI tarzı Contract / ViewModel / Screen yapısı',
        'Gemini API ile fotoğraftan ürün tanıma ve tarif önerisi, ML Kit OCR ile son kullanma tarihi okuma, Open Food Facts ile barkod sorgulama',
        'WorkManager bildirimleri, Glance ana ekran widget\'ı ve Play Billing aboneliği',
        'Cloudflare Workers + D1 ile senkronizasyon, aile paylaşımı ve Gemini proxy backend\'i; web paneli',
        'Haftalık yemek planı, reyona göre alışveriş listesi, istatistikler ve 5 dil desteği',
      ],
      en: [
        'Multi-module Clean Architecture (core: domain / data / ui + 8 feature modules), build-logic convention plugins and an MVI-style Contract / ViewModel / Screen structure',
        'Photo-based product recognition and recipe suggestions with the Gemini API, expiry date reading with ML Kit OCR, barcode lookup via Open Food Facts',
        'WorkManager notifications, a Glance home screen widget and Play Billing subscriptions',
        'Cloudflare Workers + D1 backend for sync, household sharing and a Gemini proxy; web panel',
        'Weekly meal plan, aisle-sorted shopping list, statistics and 5 languages',
      ],
    },
    tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room', 'Coroutines & Flow', 'Gemini API', 'ML Kit', 'Cloudflare Workers', 'Retrofit', 'WorkManager', 'Glance', 'Play Billing', 'Multi-module'],
    links: [{ play: true, url: PLAY + 'com.nurdanpehlivan.shelfie' }, { label: 'GitHub', url: GH + 'Shelfie' }],
  },
  {
    id: 'mimo', cats: ['android', 'ai'],
    title: 'Mimo', subtitle: { tr: 'Günlük ve yaşam takibi', en: 'Journal & life tracking' }, year: '2026',
    badge: { tr: 'Google Play · Test', en: 'Google Play · Testing' }, live: true,
    icon: { img: 'assets/mimo/icon.png', emoji: '📔', bg: 'linear-gradient(135deg,#f9a8d4,#a78bfa)' },
    shots: [1, 2, 3, 4].map(i => `assets/mimo/shot-${i}.jpg`),
    short: {
      tr: 'Not, fotoğraf, ses, ruh hali, uyku ve harcama — günün tamamı tek, şifreli bir zaman tünelinde.',
      en: 'Notes, photos, audio, mood, sleep and spending — your whole day in a single encrypted timeline.',
    },
    desc: {
      tr: 'Günün tamamını tarih sırasıyla tek bir zaman tünelinde tutan, 4 dil destekli Android günlük uygulaması. Veriler telefonda donanım destekli anahtarla şifrelenir.',
      en: 'An Android journal app in 4 languages that keeps your whole day in one chronological timeline. Data is encrypted on the device with a hardware-backed key.',
    },
    points: {
      tr: [
        'Not, fotoğraf, ses, ruh hali, uyku, adım ve harcama kayıtlarını tek zaman tünelinde birleştirme',
        'Room + SQLCipher ile şifreli veritabanı (anahtar Android Keystore\'da), biyometrik kilit ve şifreli yedekleme',
        'Firebase AI Logic (Gemini) ile yemek fotoğrafından kalori tahmini ve sesi yazıya çevirme',
        'Health Connect, Google Maps Compose ve Media3 entegrasyonları; istatistikler, seriler ve rozetler',
      ],
      en: [
        'Notes, photos, audio, mood, sleep, steps and spending entries combined in one timeline',
        'Encrypted database with Room + SQLCipher (key in Android Keystore), biometric lock and encrypted backups',
        'Firebase AI Logic (Gemini) for meal calorie estimation from photos and speech-to-text',
        'Health Connect, Google Maps Compose and Media3 integrations; stats, streaks and badges',
      ],
    },
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'SQLCipher', 'Health Connect', 'Firebase', 'Gemini API', 'Media3', 'Coroutines & Flow'],
    links: [{ play: true, url: PLAY + 'com.nurdanpehlivan.mimo' }, { label: 'GitHub', url: GH + 'Mimo' }],
  },
  {
    id: 'foodie', cats: ['flutter', 'ai', 'research'],
    title: 'FoodieWorld', subtitle: { tr: 'TÜBİTAK 2209-A · Çocuklar için eğitici uygulama', en: 'TÜBİTAK 2209-A · Educational app for kids' }, year: '2024 – 2025',
    badge: { tr: 'Yayınlandı · ICENSS 2026', en: 'Published · ICENSS 2026' },
    icon: { img: 'assets/foodie/icon.png', emoji: '🥦', bg: 'linear-gradient(135deg,#86efac,#22d3c5)' },
    shots: [1, 2, 3, 4, 5, 6, 7, 8].map(i => `assets/foodie/shot-${i}.jpg`),
    short: {
      tr: 'Çocuklara gıda üretim süreçlerini öğreten, yapay zekâ destekli chatbot BrokoliCan\'lı Flutter uygulaması.',
      en: 'A Flutter app teaching children how food is produced, with BrokoliCan, an AI chatbot.',
    },
    desc: {
      tr: 'Çocuklara gıda üretim süreçlerini oyunlaştırarak öğreten eğitici mobil uygulama. TÜBİTAK 2209-A kapsamında geliştirildi; çıktıları ICENSS 2026\'da “Development of an Educational and Interactive Mobile Application for Children that Teaches Food Production Processes” başlığıyla tam metin bildiri olarak yayımlandı.',
      en: 'An educational mobile app that teaches children food production processes through play. Built under TÜBİTAK 2209-A; results were published as a full paper at ICENSS 2026 titled “Development of an Educational and Interactive Mobile Application for Children that Teaches Food Production Processes”.',
    },
    points: {
      tr: [
        'BrokoliCan: çocukların sorularını doğal dilde yanıtlayan, pedagojik kurallara uygun sesli/yazılı chatbot',
        'Fabrika süreç videoları, ürüne özel quizler, ses efektleri ve süre sayacı',
        'Sürükle-bırak ile üretim akışı kurma oyunu ve sesli metin okuma (TTS)',
      ],
      en: [
        'BrokoliCan: a voice/text chatbot answering children\'s questions in natural language, following pedagogical rules',
        'Factory process videos, product-specific quizzes with sound effects and timers',
        'A drag-and-drop production line game and text-to-speech (TTS)',
      ],
    },
    tech: ['Flutter', 'Dart', 'LLM', 'Prompt Engineering', 'TTS'],
    links: [{ play: true, url: PLAY + 'com.nurdanpehlivan.foodieworld' }, { label: 'GitHub', url: GH + 'foodielandd' }],
  },
  {
    id: 'hava', cats: ['android'],
    title: 'Nimbus', subtitle: { tr: 'Hava durumu uygulaması · Kamp+ Bilişim Kampı', en: 'Weather app · Kamp+ IT Camp' }, year: '2026',
    badge: { tr: 'Kamp+ eğitimi', en: 'Kamp+ training' },
    icon: { img: 'assets/weather/icon.png', emoji: '🌦️', bg: 'linear-gradient(135deg,#93c5fd,#6366f1)' },
    shots: [1, 4, 2, 3].map(i => `assets/weather/shot-${i}.jpg`),
    short: {
      tr: 'Havaya göre değişen tema, Canvas ile çizilmiş animasyonlu maskot, ana ekran widget\'ı ve 56 birim testi.',
      en: 'A weather-driven theme, an animated Canvas mascot, a home screen widget and 56 unit tests.',
    },
    desc: {
      tr: 'T.C. Gençlik ve Spor Bakanlığı & Turkcell Akademi Kamp+ Android eğitiminde başlangıç projesini kendi tasarımımla geliştirdiğim sürüm. Open-Meteo\'dan şehir arar; saatlik ve 7 günlük tahmin gösterir.',
      en: 'My own take on the starter project from the Kamp+ Android training by the Ministry of Youth and Sports & Turkcell Academy. Searches cities on Open-Meteo and shows hourly and 7-day forecasts.',
    },
    points: {
      tr: [
        'Open-Meteo REST API, Retrofit ve ViewModel + StateFlow ile Loading / Success / Empty / Error durum yönetimi',
        'Havaya ve saate göre değişen dinamik tema; Canvas ile çizilen, havaya göre kılık değiştiren maskot',
        'DataStore ile favoriler, konuma göre şehir bulma ve ana ekran widget\'ı',
        '56 birim testi',
      ],
      en: [
        'Loading / Success / Empty / Error state handling with the Open-Meteo REST API, Retrofit and ViewModel + StateFlow',
        'Dynamic theme by weather and time of day; a Canvas-drawn mascot that dresses for the weather',
        'Favorites with DataStore, location-based city lookup and a home screen widget',
        '56 unit tests',
      ],
    },
    tech: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'DataStore', 'Canvas', 'Coroutines & Flow', 'JUnit'],
    links: [{ label: 'GitHub', url: GH + 'KampWeather-App' }],
  },
  {
    id: 'boyner', cats: ['android'],
    title: 'Boyner Now & Horizon', subtitle: { tr: 'Boyner Büyük Mağazacılık · Android', en: 'Boyner Department Stores · Android' }, year: '2026',
    badge: { tr: 'İş deneyimi', en: 'Work' },
    icon: { emoji: '🛍️', bg: 'linear-gradient(135deg,#fca5a5,#7c6cff)' },
    short: {
      tr: 'Canlıdaki uygulamalarda tasarım sistemine uygun Compose UI, reaktif veri akışı ve crash/stabilizasyon çalışmaları.',
      en: 'Design-system Compose UI, reactive data flow and crash/stability work on production apps.',
    },
    desc: {
      tr: 'Boyner\'de 4 aylık uzun dönem stajyer mühendis olarak canlıdaki Boyner Now ve Horizon projelerinde çalıştım.',
      en: 'I worked on the production Boyner Now and Horizon projects during a 4-month long-term engineering internship at Boyner.',
    },
    points: {
      tr: [
        'Kotlin ve Jetpack Compose ile kurumsal tasarım sistemine uygun, yeniden kullanılabilir ve reaktif UI bileşenleri',
        'Clean Architecture ve MVVM/MVI yapısında Flow, StateFlow ve Dagger Hilt ile modüler veri akışı ve bağımlılık enjeksiyonu',
        'Canlı ortam hata analizi (crash debugging), kod optimizasyonu ve stabilizasyon',
        'Agile/Scrum sprintleri, kod incelemeleri ve teknik dokümantasyon',
      ],
      en: [
        'Reusable, reactive UI components with Kotlin and Jetpack Compose in line with the corporate design system',
        'Modular data flow and dependency injection with Flow, StateFlow and Dagger Hilt following Clean Architecture and MVVM/MVI',
        'Production crash debugging, code optimization and stability work',
        'Agile/Scrum sprints, code reviews and technical documentation',
      ],
    },
    tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Coroutines & Flow', 'MVVM / MVI', 'Clean Architecture', 'Jira'],
    links: [],
  },
  {
    id: 'tusas', cats: ['research'],
    title: { tr: 'PTTP Sanal Analiz', en: 'PTTP Virtual Analysis' }, subtitle: { tr: 'TUSAŞ LIFT UP · Takım Lideri', en: 'Turkish Aerospace LIFT UP · Team Lead' }, year: '2025 – 2026',
    badge: { tr: 'Bitirme projesi', en: 'Capstone' },
    icon: { emoji: '✈️', bg: 'linear-gradient(135deg,#fde68a,#f97316)' },
    short: {
      tr: 'Havacılıkta otoklav kürleme süreçlerindeki sıcaklık akışını analiz eden dijital ikiz projesinde takım liderliği.',
      en: 'Team lead on a digital twin project analyzing temperature flow in aerospace autoclave curing.',
    },
    desc: {
      tr: '“PTTP Süreçlerinin Sanal Analiz Sistemi İle Gerçekleştirilmesi” — TUSAŞ LIFT UP kapsamında sanayi odaklı lisans bitirme projesi.',
      en: '“Performing PTTP Processes with a Virtual Analysis System” — an industry-focused capstone project under Turkish Aerospace\'s LIFT UP program.',
    },
    points: {
      tr: [
        'Otoklav kürleme süreçlerinde sıcaklık akışını Ansys/Fluent ile analiz eden dijital ikiz projesinde ekip koordinasyonu',
        'Fiziksel deneme-yanılma maliyetini azaltan simülasyon ve parametrik optimizasyon akışları',
      ],
      en: [
        'Led team coordination for a digital twin analyzing temperature flow in autoclave curing with Ansys/Fluent',
        'Simulation and parametric optimization workflows that reduce physical trial-and-error costs',
      ],
    },
    tech: ['Ansys Fluent', { tr: 'Dijital İkiz', en: 'Digital Twin' }, { tr: 'Takım Liderliği', en: 'Team Lead' }],
    links: [],
  },
  {
    id: 'ble', cats: ['research'],
    title: { tr: 'Dokunsal Uyarı Sistemi', en: 'Haptic Warning System' }, subtitle: { tr: 'UDHAM Erişilebilir Türkiye 2053', en: 'UDHAM Accessible Türkiye 2053' }, year: '2026',
    badge: { tr: '🏆 Türkiye 2.si', en: '🏆 2nd in Türkiye' },
    icon: { emoji: '🚆', bg: 'linear-gradient(135deg,#c4b5fd,#22d3c5)' },
    short: {
      tr: 'Raylı sistemlerde çift duyusal engelliler için güvenli ve doğrulanabilir BLE tabanlı dokunsal uyarı sistemi.',
      en: 'A secure, verifiable BLE-based haptic warning system for deafblind passengers in rail systems.',
    },
    desc: {
      tr: 'UDHAM 4. Erişilebilir Türkiye 2053 Ar-Ge Fikir Yarışması\'nda Demiryolu Kategorisi Türkiye 2.liği kazanan proje.',
      en: 'Won 2nd place in Türkiye, Railway Category, at the UDHAM 4th Accessible Türkiye 2053 R&D Idea Competition.',
    },
    points: {
      tr: [
        'Raylı sistemlerde görme ve işitme engeli birlikte olan yolcular için dokunsal uyarı',
        'Bluetooth Low Energy (BLE) tabanlı, güvenli ve doğrulanabilir uyarı altyapısı',
      ],
      en: [
        'Haptic warnings for deafblind passengers in rail systems',
        'A secure and verifiable warning infrastructure based on Bluetooth Low Energy (BLE)',
      ],
    },
    tech: ['BLE', { tr: 'Erişilebilirlik', en: 'Accessibility' }, { tr: 'Ar-Ge', en: 'R&D' }],
    links: [],
  },
];

const SKILLS = [
  { icon: '💻', title: { tr: 'Diller', en: 'Languages' }, items: ['Kotlin', 'Java', 'SQL', 'Python', 'C', 'Dart'] },
  { icon: '📱', title: 'Android', items: ['Jetpack Compose', 'Android SDK', 'Material Design 3', 'ViewModel', 'Navigation', 'WorkManager', 'Glance', 'Health Connect', 'ML Kit', 'Media3', 'Play Billing', 'Flutter'] },
  { icon: '🏛️', title: { tr: 'Mimari', en: 'Architecture' }, items: ['MVVM / MVI', 'Clean Architecture', 'Multi-module', 'Repository Pattern', 'Hilt'] },
  { icon: '🔄', title: { tr: 'Asenkron, Ağ & Veri', en: 'Concurrency, Networking & Data' }, items: ['Coroutines & Flow', 'Retrofit', 'OkHttp', 'Kotlinx Serialization', 'Room', 'SQLCipher', 'DataStore', 'SQLite'] },
  { icon: '🤖', title: { tr: 'Yapay Zekâ', en: 'AI' }, items: ['Gemini API', 'Firebase', 'LLM', 'Prompt Engineering', 'GitHub Copilot'] },
  { icon: '🧪', title: { tr: 'Test & Araçlar', en: 'Testing & Tools' }, items: ['JUnit', 'MockK', 'Gradle (Kotlin DSL)', 'Git & GitHub', 'Jira', 'Confluence', 'Cloudflare Workers', 'Agile / Scrum'] },
];

const EXPERIENCE = [
  {
    org: 'Boyner Büyük Mağazacılık A.Ş.', role: { tr: 'Android Developer Intern (Uzun Dönem Stajyer Mühendis)', en: 'Android Developer Intern (Long-term Engineering Intern)' },
    when: { tr: 'Şub 2026 – May 2026', en: 'Feb 2026 – May 2026' }, where: { tr: 'Maslak, İstanbul', en: 'Istanbul, Türkiye' }, type: { tr: 'İş', en: 'Work' },
    points: PROJECTS.find(p => p.id === 'boyner').points,
    tags: ['Kotlin', 'Compose', 'MVVM/MVI', 'Hilt', 'Flow'],
  },
  {
    org: 'Coridor Teknoloji ve Danışmanlık A.Ş.', role: 'Mobile Developer Intern',
    when: { tr: 'Eyl 2025 – Ara 2025', en: 'Sep 2025 – Dec 2025' }, where: { tr: 'Uzaktan', en: 'Remote' }, type: { tr: 'İş', en: 'Work' },
    points: {
      tr: ['Bir mobil uygulama girişiminin teknik planlama ve ürün geliştirme süreçlerine destek', 'Rakip uygulama analizi ve kullanıcı bağlılığını artırmaya yönelik oyunlaştırma (gamification) kurguları'],
      en: ['Contributed to technical planning and product development of a mobile app startup', 'Conducted competitor app analysis and designed gamification mechanics to increase user engagement'],
    },
    tags: ['Mobile', 'Gamification', { tr: 'Ürün', en: 'Product' }],
  },
  {
    org: { tr: 'Türkiye Girişimcilik Vakfı (GİRVAK)', en: 'Türkiye Entrepreneurship Foundation (GİRVAK)' }, role: { tr: 'Yetenek & Proje Stajyeri · Yapay Zekâ ve Teknoloji Akademisi', en: 'Talent & Project Intern · AI and Technology Academy' },
    when: { tr: 'Eki 2024 – Eyl 2025', en: 'Oct 2024 – Sep 2025' }, where: { tr: 'Uzaktan', en: 'Remote' }, type: { tr: 'İş', en: 'Work' },
    points: {
      tr: ['2000\'den fazla katılımcıya ulaşan topluluğun koordinasyonu', 'Bootcamp sürecinde 50\'den fazla ekibe mentorluk'],
      en: ['Coordinated community operations reaching 2,000+ participants', 'Mentored 50+ teams during the bootcamp'],
    },
    tags: [{ tr: 'Yapay Zekâ', en: 'AI' }, { tr: 'Topluluk', en: 'Community' }, { tr: 'Mentorluk', en: 'Mentoring' }],
  },
  {
    org: 'ONO Teknoloji', role: { tr: 'Bilgisayar Mühendisi Stajyer', en: 'Computer Engineering Intern' },
    when: { tr: 'Tem 2024 – Eyl 2024', en: 'Jul 2024 – Sep 2024' }, where: { tr: 'Gebze, Kocaeli', en: 'Kocaeli, Türkiye' }, type: { tr: 'İş', en: 'Work' },
    points: {
      tr: ['Endüstri 4.0 projelerinde Unity ile sanal ortam ve VR entegrasyonu', 'Visual Components ile üretim simülasyonu çalışmaları'],
      en: ['Virtual environments and VR integration in Unity for Industry 4.0 projects', 'Production simulations in Visual Components'],
    },
    tags: ['Unity', 'VR', { tr: 'Endüstri 4.0', en: 'Industry 4.0' }],
  },
  {
    org: { tr: 'Kastamonu Üniversitesi', en: 'Kastamonu University' }, role: { tr: 'Bilgisayar Mühendisliği, Lisans', en: 'B.Sc. in Computer Engineering' },
    when: { tr: 'Eyl 2022 – Haz 2026', en: 'Sep 2022 – Jun 2026' }, where: { tr: 'Kastamonu', en: 'Kastamonu, Türkiye' }, type: { tr: 'Eğitim', en: 'Education' },
    points: {
      tr: ['Google Developer Student Clubs (GDSC) — Yönetim Kurulu Üyesi, İletişim ve Sponsorluk (Eyl 2023 – Haz 2024)', 'TÜBİTAK 2209-A araştırma projesi ve TUSAŞ LIFT UP bitirme projesi (takım lideri)'],
      en: ['Google Developer Student Clubs (GDSC) — Core Team Member, Communications & Sponsorship (Sep 2023 – Jun 2024)', 'TÜBİTAK 2209-A research project and Turkish Aerospace LIFT UP capstone (team lead)'],
    },
    tags: ['GDSC', 'TÜBİTAK', 'TUSAŞ'],
  },
];

const AWARDS = [
  { icon: '🏆', date: { tr: 'Haziran 2026', en: 'June 2026' }, title: { tr: 'Demiryolu Kategorisi Türkiye 2.liği', en: '2nd Place in Türkiye, Railway Category' },
    text: { tr: 'UDHAM 4. Erişilebilir Türkiye 2053 Ar-Ge Fikir Yarışması — raylı sistemlerde çift duyusal engelliler için BLE tabanlı dokunsal uyarı sistemi.', en: 'UDHAM 4th Accessible Türkiye 2053 R&D Idea Competition — a BLE-based haptic warning system for deafblind passengers in rail systems.' } },
  { icon: '📄', date: 'ICENSS 2026', title: { tr: 'Tam metin bildiri', en: 'Full paper' },
    text: '“Development of an Educational and Interactive Mobile Application for Children that Teaches Food Production Processes”' },
  { icon: '🏕️', date: { tr: 'Ekim 2026', en: 'October 2026' }, title: { tr: 'Kamp+ Bilişim Kampı', en: 'Kamp+ IT Camp' },
    text: { tr: 'T.C. Gençlik ve Spor Bakanlığı & Turkcell Akademi — Android, Kotlin ve Jetpack Compose eğitimi.', en: 'Ministry of Youth and Sports & Turkcell Academy — Android, Kotlin and Jetpack Compose training.' } },
  { icon: '🎓', date: { tr: 'Ocak – Ağustos 2024', en: 'Jan – Aug 2024' }, title: { tr: 'Google Oyun ve Uygulama Akademisi', en: 'Google Game and App Academy' },
    text: { tr: '3. dönem bursiyeri; ideathon, jam ve bootcamp\'lerde ekiple mobil uygulama prototipleme.', en: '3rd term scholar; mobile app prototyping in teams at ideathons, jams and bootcamps.' } },
  { icon: '🌍', date: { tr: 'Temmuz – Ağustos 2026', en: 'Jul – Aug 2026' }, title: 'European Solidarity Corps',
    text: { tr: 'Gönüllü, Sólheimar, İzlanda — çok uluslu ekipte İngilizce çalışma ortamı.', en: 'Volunteer, Sólheimar, Iceland — English-speaking work environment in a multinational team.' } },
  { icon: '📜', date: { tr: 'Sertifika & Dil', en: 'Certificate & Language' }, title: 'Google Project Management',
    text: { tr: 'Professional Certificate · İngilizce (B1)', en: 'Professional Certificate · Turkish (native), English (B1)' } },
];

const PM = [
  { icon: '✈️', stat: { tr: 'Takım Lideri', en: 'Team Lead' }, title: { tr: 'TUSAŞ LIFT UP bitirme projesi', en: 'Turkish Aerospace LIFT UP capstone' },
    text: { tr: 'Üniversite–sanayi iş birliğinde proje planlama, görev dağılımı, ilerleme takibi, sunumlar ve paydaş iletişimi; çıktıların raporlanması.', en: 'Project planning, task allocation, progress tracking, presentations and stakeholder communication in an industry–university project; reporting outcomes.' } },
  { icon: '🌱', stat: '2000+', title: { tr: 'GİRVAK topluluk koordinasyonu', en: 'GİRVAK community coordination' },
    text: { tr: '2000\'den fazla katılımcıya ulaşan topluluk süreçleri; bootcamp\'te 50\'den fazla ekibe mentorluk, proje planlarının ve ilerlemenin takibi, çevrim içi etkinlik operasyonu.', en: 'Community operations reaching 2,000+ participants; mentored 50+ bootcamp teams and tracked their plans and progress; ran online event operations.' } },
  { icon: '🔁', stat: 'Agile / Scrum', title: { tr: 'Boyner sprint koordinasyonu', en: 'Sprint coordination at Boyner' },
    text: { tr: 'Ürün, tasarım ve yazılım ekipleri arasında koordinasyon; hata önceliklendirme, süreç iyileştirme ve yayın hazırlığı.', en: 'Coordination between product, design and engineering; bug prioritization, process improvement and release preparation.' } },
  { icon: '🎤', stat: 'GDSC', title: { tr: 'Etkinlik ve sponsorluk yönetimi', en: 'Event & sponsorship management' },
    text: { tr: 'Build with AI ve Kariyer Günü organizasyonlarında etkinlik planlaması, ekip koordinasyonu; topluluk, sponsor ve konuşmacı iletişimi.', en: 'Event planning and team coordination for Build with AI and Career Day; communication with the community, sponsors and speakers.' } },
  { icon: '🧭', stat: { tr: 'Uçtan uca', en: 'End to end' }, title: { tr: 'Kişisel ürünler: Frizzy & Mimo', en: 'Own products: Frizzy & Mimo' },
    text: { tr: 'Fikir, kapsam belirleme, özellik önceliklendirme, geliştirme ve yayına hazırlık aşamalarını tek başıma yürütme.', en: 'Owned idea, scoping, feature prioritization, development and release preparation on my own.' } },
  { icon: '📜', stat: 'Google', title: 'Project Management Certificate',
    text: { tr: 'Planlama, önceliklendirme, risk ve paydaş yönetimi; SDLC ve Agile pratikleri.', en: 'Planning, prioritization, risk and stakeholder management; SDLC and Agile practices.' } },
];

const PM_SKILLS = [
  'Agile / Scrum', { tr: 'Sprint Planlama', en: 'Sprint Planning' }, { tr: 'Görev Takibi', en: 'Task Tracking' }, { tr: 'Önceliklendirme', en: 'Prioritization' },
  { tr: 'Paydaş Yönetimi', en: 'Stakeholder Management' }, { tr: 'Raporlama', en: 'Reporting' }, { tr: 'Dokümantasyon', en: 'Documentation' }, 'SDLC',
  { tr: 'Etkinlik Yönetimi', en: 'Event Management' }, { tr: 'Mentorluk', en: 'Mentoring' }, 'Jira', 'Confluence', 'Notion', 'Google Workspace', 'MS Office', 'Canva',
];
