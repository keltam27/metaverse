const app = new Vue({
  el: '#app',
  data: {
    quotes: [
      {
        "id": 1,
        "quote": "",
        "author": ""
      },
      {
        "id": 2,
        "quote": "",
        "author": ""
      },
      {
        "id": 3,
        "quote": "",
        "author": ""
      }],
    loading: true,
    language: 'en',
    languages: ['en', 'zh-mo', 'zh-cn'],
    lang_l: { 'en': 'English', 'zh-mo': 'Chinese (TW)', 'zh-cn': 'Chinese (CN)' },
    loadingText: 'loading...',
    items: [
      {
        image: 'https://via.placeholder.com/800x400/1abc9c/ffffff',
        caption: 'First slide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        image: 'https://via.placeholder.com/800x400/2ecc71/ffffff',
        caption: 'Second slide',
        description: 'Praesent euismod tortor tellus, ac consequat sapien dapibus vel.'
      },
      {
        image: 'https://via.placeholder.com/800x400/3498db/ffffff',
        caption: 'Third slide',
        description: 'Nunc vel sapien vel felis sagittis dictum id vel lacus.'
      }
    ],
    title: 'Meet Metaverse',
    title_description: 'Examine the possibilities of what the metaverse may hold ahead.',
    welcome: 'Welcome to Metaverse',
    welcome_description: 'Discover limitless possibilities through immersive experiences in the metaverse -\n where imagination meets reality, and technology connects humanity.',
    question: "What is Metaverse?",
    answer: "Welcome to the metaverse, a virtual world where imagination meets reality. This digital realm allows users to escape everyday life and explore new horizons through immersive experiences. From gaming to socializing, the metaverse offers endless opportunities to connect with others and discover new realms of possibility. With cutting-edge technology and limitless creativity, the metaverse opens a new chapter in the evolution of human interaction. Join us on this exciting journey into the unknown and discover the endless possibilities of the metaverse.",
    box1_title: "Virtual Concerts",
    box1_description: "Experience concerts like never before, attend from anywhere in the world and see your favorite artists perform in the metaverse.",
    box2_title: "Virtual Reality Training",
    box2_description: "Use VR technology to train employees or students in immersive environments that simulate real-life situations.",
    box3_title: "Virtual Real Estate",
    box3_description: "Buy, sell, rent or explore properties in the metaverse. Design your dream house or office and experience it virtually.",
    activeIndex: 0,
    currentIndex: 0,
    text: {
      "en": {
        "title": "Meet Metaverse",
        "title_description": "Examine the possibilities of what the metaverse may hold ahead.",
        "welcome": "Welcome to Metaverse",
        "welcome_description": "Discover limitless possibilities through immersive experiences in the metaverse -\n where imagination meets reality, and technology connects humanity.",
        "question": "Work in the metaverse",
        "answer": "In the metaverse, work becomes seamless and limitless. Collaborating with colleagues from around the world is now a reality with virtual workplaces, enabling productivity without the barriers of distance. With innovative tools and interfacing technologies, work in the metaverse is an experience of seamless immersive, interactive environments. Join us in shaping the future of work, where creativity thrives and boundaries do not exist.",
        "box1_title": "Virtual Concerts",
        "box1_description": "Experience concerts like never before, attend from anywhere in the world and see your favorite artists perform in the metaverse.",
        "box2_title": "Virtual Reality Training",
        "box2_description": "Use VR technology to train employees or students in immersive environments that simulate real-life situations.",
        "box3_title": "Virtual Real Estate",
        "box3_description": "Buy, sell, rent or explore properties in the metaverse. Design your dream house or office and experience it virtually.",
      }, "zh-mo": {
        "title": "相見元宇宙",
        "title_description": "探索元宇宙\n未來或許會帶來的\n無限可能性。",
        "welcome": "歡迎來到元宇宙",
        "welcome_description": "在元宇宙中，透過身臨其境的體驗，探索無限可能，讓想像力與現實交會，科技串聯人類。",
        "question": "在元宇宙工作",
        "answer": "在元宇宙中，工作變得無限且無縫。有了虛擬工作場所，讓您與世界各地的同事合作成為現實，不再受距離的阻礙，提高生產力。利用先進的工具和介面技術，元宇宙中的工作環境變得更加真實、沉浸和互動。加入我們，塑造未來的工作場景，讓創造力蓬勃發展，打破所有界限。",
        "box1_title": "虛擬演唱會",
        "box1_description": "以前所未有的方式感受演唱會。在元宇宙中，不論身在何處，都能與您喜愛的演唱家共度美好時光。",
        "box2_title": "虛擬現實培訓",
        "box2_description": "使用 VR 技術，以沉浸式的環境訓練員工或學生，提升實戰能力。",
        "box3_title": "虛擬房地產",
        "box3_description": "在元宇宙中買賣、租賃或探索房產。打造夢想住宅或辦公室，體驗逼真的虛擬房地產。",
      }, "zh-cn": {
        "title": "相見元宇宙",
        "title_description": "探索元宇宙\n未来或许会带来的\n无限可能性。",
        "welcome": "欢迎来到元宇宙",
        "welcome_description": "在元宇宙中，通过身临其境的体验，探索无限可能，让想像力与现实交会，科技串联人类。",
        "question": "在元宇宙工作",
        "answer": "在元宇宙中，工作变得无限且无缝。有了虚拟工作场所，让您与世界各地的同事合作成为现实，不再受距离的阻碍，提高生产率。利用先进的工具和界面技术，元宇宙中的工作环境变得更加真实、沉浸和互动。加入我们，塑造未来的工作场景，让创造力蓬勃发展，打破所有界限。",
        "box1_title": "虚拟演唱会",
        "box1_description": "以前所未有的方式感受演唱会。在元宇宙中，不论身在何处，都能与您喜爱的演唱家共度美好时光。",
        "box2_title": "虚拟现实培训",
        "box2_description": "使用 VR 技术，以沉浸式的环境训练员工或学生，提升实战能力。",
        "box3_title": "虚拟房地产",
        "box3_description": "在元宇宙中买卖、租赁或探索房产。打造梦想住宅或办公室，体验逼真的虚拟房地产。",
      }
    }
  },
  methods: {
    setLanguage(lang) {
      // Set the current language
      this.language = lang;
      if (lang === 'en') this.lang_l = { 'en': 'English', 'zh-mo': 'Chinese (TW)', 'zh-cn': 'Chinese (CN)' };
      else if (lang === 'zh-mo') this.lang_l = { 'en': '英文', 'zh-mo': '繁體中文', 'zh-cn': '簡體中文' };
      else if (lang === 'zh-cn') this.lang_l = { 'en': '英文', 'zh-mo': '繁体中文', 'zh-cn': '简体中文' };
      //this.title = this.text[lang].title;
      this.title_description = this.text[lang].title_description;
      this.welcome = this.text[lang].welcome;
      this.welcome_description = this.text[lang].welcome_description;
      this.question = this.text[lang].question;
      this.answer = this.text[lang].answer;
      this.box1_title = this.text[lang].box1_title;
      this.box1_description = this.text[lang].box1_description;
      this.box2_title = this.text[lang].box2_title;
      this.box2_description = this.text[lang].box2_description;
      this.box3_title = this.text[lang].box3_title;
      this.box3_description = this.text[lang].box3_description;
      // Fetch the quotes for the current language
      this.loading = true;
      fetch(`https://backend.cpsumsu.org/api/metaverse_quotes`)
        .then(response => response.json())
        .then(data => {
          this.quotes = data[lang];
          this.loading = false;
          console.log(data[lang]);
        })
        .catch(error => {
          console.error(error);
          this.loading = false;
        });
    },
    prev() {
      this.activeIndex = (this.activeIndex === 0) ? this.items.length - 1 : this.activeIndex - 1;
    },
    next() {
      this.activeIndex = (this.activeIndex === this.items.length - 1) ? 0 : this.activeIndex + 1;
    },
    showNextQuote() {
      if (this.currentIndex === (this.quotes.length - 1)) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    test(){
      console.log("debug");
    }
  }, computed: {
    currentQuote() {
      return this.quotes[this.currentIndex];
    }
  },
  mounted() {
    // Fetch the default quotes on page load
    this.setLanguage(this.language);
  }
});