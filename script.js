const app = new Vue({
  el: '#app',
  data: {
    quotes: null,
    loading: true,
    language: 'en',
    languages: ['en', 'zh-mo', 'zh-cn'],
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
    welcome_description: 'Discover limitless possibilities through immersive experiences in the metaverse - where imagination meets reality, and technology connects humanity.',
    answer: "Welcome to the metaverse, a virtual world where imagination meets reality. This digital realm allows users to escape everyday life and explore new horizons through immersive experiences. From gaming to socializing, the metaverse offers endless opportunities to connect with others and discover new realms of possibility. With cutting-edge technology and limitless creativity, the metaverse opens a new chapter in the evolution of human interaction. Join us on this exciting journey into the unknown and discover the endless possibilities of the metaverse.",
    activeIndex: 0,
    currentIndex: 0,
    text: {
      "en": {
        "title":"Meet Metaverse",
        "title_description":"Examine the possibilities of what the metaverse may hold ahead.",
        "welcome": "Welcome to Metaverse",
        "welcome_description": "Discover limitless possibilities through immersive experiences in the metaverse - where imagination meets reality, and technology connects humanity.",
        "question": "What is Metaverse?",
        "answer": "Welcome to the metaverse, a virtual world where imagination meets reality. This digital realm allows users to escape everyday life and explore new horizons through immersive experiences. From gaming to socializing, the metaverse offers endless opportunities to connect with others and discover new realms of possibility. With cutting-edge technology and limitless creativity, the metaverse opens a new chapter in the evolution of human interaction. Join us on this exciting journey into the unknown and discover the endless possibilities of the metaverse."
      }, "zh-mo": {
        "title": "相見元宇宙",
        "title_description":"探索元宇宙未來或許會帶來的無限可能性。",
        "welcome": "歡迎來到元宇宙",
        "welcome_description": "在元宇宙中，透過身臨其境的體驗，探索無限可能，讓想像力與現實交會，科技串聯人類。",
        "question": "甚麼是元宇宙？",
        "answer": "歡迎來到『元宇宙』 - 一個虛擬世界，想像與現實交錯。這個數位領域讓使用者從日常生活中解放，探索更寬廣的世界。從遊戲到社交，元宇宙提供無限機會與他人連結，發現新的可能性。使用先進的技術和無限的創意，元宇宙也為人類互動的演進增添了新的一頁。一起加入這場闖蕩未知領域的旅程，發掘無限可能性吧。"
      }, "zh-cn": {
        "title": "相見元宇宙",
        "title_description":"探索元宇宙未来或许会带来的无限可能性。",
        "welcome": "欢迎来到元宇宙",
        "welcome_description": "在元宇宙中，通过身临其境的体验，探索无限可能，让想像力与现实交会，科技串联人类。",
        "question": "什么是元宇宙？",
        "answer": "欢迎来到『元宇宙』 - 一个虚拟世界，想象与现实交错。这个数字领域让使用者从日常生活中解放，探索更宽广的世界。从游戏到社交，元宇宙提供无限机会与他人连结，发现新的可能性。使用先进的技术和无限的创意，元宇宙也为人类互动的演变增添了新的一页。一起加入这场闯荡未知领域的旅程，发掘无限可能性吧。"
      }
    }
  },
  methods: {
    setLanguage(lang) {
      // Set the current language
      this.language = lang;
      //this.title = this.text[lang].title;
      this.title_description = this.text[lang].title_description;
      this.welcome = this.text[lang].welcome;
      this.welcome_description = this.text[lang].welcome_description;
      this.question = this.text[lang].question;
      this.answer = this.text[lang].answer;
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