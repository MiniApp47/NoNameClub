// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#12091f");
  tg.setBackgroundColor("#08050f");

  const progressBar = document.getElementById("myBar");
  const loader = document.getElementById("page-loader");

  // 1. On lance l'animation de la barre après un tout petit délai
  setTimeout(() => {
    if (progressBar) {
      progressBar.style.width = "100%";
    }
  }, 100);

  // 2. On attend la fin de l'animation (2.5 secondes ici) pour cacher le loader
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0"; // Effet de fondu
      loader.style.transition = "opacity 0.5s ease";

      setTimeout(() => {
        loader.style.display = "none";
        loader.classList.remove("active");
        // Affiche la page Home par défaut
        document.getElementById("page-home").classList.add("active");
      }, 500); // Attend la fin du fondu
    }
  }, 2600); // 2600ms = 2.5s d'animation + 0.1s de délai

  // --- CONFIGURATION DES LIENS DE CONTACT ---
  const contactLinks = [
    {
      name: "WHATSAPP",
      url: "https://wa.me/33771468334",
      id: "whatsapp",
      className: "whatsapp",
      text: "🟢 WHATSAPP",
    },
    {
      name: "CANAL TELEGRAM",
      url: "https://t.me/+Icj94UsMs_ZmMDJk",
      id: "telegram-main",
      className: "telegram",
      text: "🔵 CANAL TELEGRAM",
    },
    {
      name: "CONTACT TELEGRAM",
      url: "https://t.me/nonameclub75",
      id: "telegram-contact",
      className: "telegram-contact",
      text: "🔷 CONTACT TELEGRAM",
    },
    {
      name: "TATO TALK / MENU",
      url: "https://tato.im/nonameclub75",
      id: "potato-main",
      className: "potato",
      text: "🥔 TATO TALK ",
    },
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/nonameclub75?stkn=MTVrNXJ3dXhlMDh1cA%3D%3D&utm_source=qr",
      id: "instagram",
      className: "instagram",
      text: "🟣 INSTAGRAM",
    },
  ];

  // --- DONNÉES DE L'APPLICATION (NO NAME CLUB) ---
  const appData = [
    // ============================================================
    // CATEGORIE 1 : HOLLANDE 🌿
    // ============================================================
    // ============================================================
    // CATÉGORIES NO NAME CLUB
    // ============================================================
    {
      id: "HASH",
      name: "JAUNE MOUSSEU 🇲🇦",
      type: "HASH",
      quality: "JAUNE MOUSSEU 🇲🇦",
      image: "CategHash.png", // Ton image de catégorie Weed

      products: [
     /*    {
          id: "AZILA",
          flag: "🇲🇦",
          name: "AZILA ⚽",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductAZ.jpg",
          video: "",
          description:
  "⚽🍯 AZILA — JAUNE CRÉMEUX PREMIUM 🍯⚽\n\nUne sélection jaune crémeuse au profil doux, gourmand et bien travaillé. AZILA se distingue par une texture mousseuse, une belle rondeur aromatique et une identité propre, pensée pour les amateurs de produits simples, efficaces et agréables à découvrir. 🇲🇦🔥\n\n",          
  tarifs: [
            { weight: "10g", price: 50.0 },
            { weight: "25g", price: 110.0 },
            { weight: "50g", price: 180.0 },
            { weight: "100g", price: 310.0 },
          ],
        }, */
      ],
    },

    {
      id: "Jaune USA",
      name: "JAUNE MOUSSEU USA 🇺🇸",
      type: "Jaune USA",
      quality: "JAUNE MOUSSEU USA 🇺🇸",
      image: "CategJauneUsa.png", // Ton image de catégorie Weed

      products: [
         
      ],
    },
    {
      id: "3xFiltre",
      name: "3X FILTRE 🔥",
      type: "3xFiltre",
      quality: "3X FILTRE 🔥",
      image: "Categ3X.png", // Ton image de catégorie Weed

      products: [],
    },
    {
      id: "FROZEN",
      name: "FROZEN 🥶",
      type: "Frozen",
      quality: "FROZEN 🥶",
      image: "CategFrozen.png", // Ton image de catégorie Weed

      products: [ ],
    },
    {
      id: "STATIC",
      name: "STATIC ⚡️",
      type: "DoubleStatic",
      quality: "STATIC ⚡️",
      image: "CategDouble.png", // Ton image de catégorie Weed

      products: [ ],
    },
    // ============================================================
    // CATEGORIE 1 : CALI 🌿
    // ============================================================
    {
      id: "WEED",
      name: "CALI USA 🇺🇸",
      type: "Weed",
      quality: "CALI USA 🇺🇸",
      image: "CategWeed.png", // Ton image de catégorie Weed

      products: [
        /* {
                    id: '🍰⛽ Cali Gascake ⛽🍰',
                    flag: '🇺🇸',
                    name: '🍰⛽ Cali Gascake ⛽🍰',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductCG.png', 
                    video: 'VideoCG.mp4',
                    description: '💎 Une variété très appréciée des amateurs de profils gassy/cake, mélangeant des notes de carburant, de vanille crémeuse et de pâtisserie sucrée. Les génétiques les plus souvent associées à Gas Cake proviennent du croisement High Octane × Jungle Cake, ce qui lui donne un profil puissant et très résineux.  \n\n ✨ Effets généralement recherchés :\n 😌 Relaxation profonde du corps\n 😊 Sensation de bien-être et d’euphorie\n 🧠 Esprit détendu sans être complètement assommé au départ\n 🍕 Ouverture de l’appétit\n 😴 Peut devenir très relaxante en fin de session  \n\n 👃 Profil aromatique :\n ⛽ Diesel / essence prononcé\n 🍰 Vanille crémeuse\n 🍬 Notes pâtissières et sucrées\n 🌿 Fond terreux et légèrement épicé  \n\n 🔥 Pour les connaisseurs :\n La Cali Gascake est souvent recherchée pour son équilibre entre la gourmandise des variétés « Cake » et la puissance terpènique des lignées « Gas ». Elle offre généralement une fumée riche, grasse et très parfumée, avec une détente marquée qui plaît aux amateurs de fleurs ou de hash haut de gamme.',                    
                    tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
                    ]
                },  */
        /* {
          id: "Frosted cherry Cookie",
          flag: "🇺🇸",
          name: "Frosted cherry Cookie 🍪",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductFCC.png",
          video: "VideoFCC.mp4",
          description:
              "🍪🍒 FROSTED CHERRY COOKIE — CALI PREMIUM 🍒🍪\n\nUne sélection au profil dessert, fruité et crémeux, pensée pour les amateurs de saveurs sucrées et modernes. Frosted Cherry Cookie mélange la gourmandise du biscuit avec une touche de cerise sucrée et une finition douce très agréable. 🇺🇸🔥\n\n👃 Profil aromatique :\n🍒 Cerise sucrée\n🍪 Biscuit gourmand\n🍦 Crème vanillée\n🍬 Notes candy légères\n🌿 Fond doux et propre\n\n👅 Goût :\nEn bouche, Frosted Cherry Cookie développe une attaque fruitée et sucrée, suivie de notes biscuitées et crémeuses. Le profil est rond, gourmand et bien équilibré, avec une finale douce qui rappelle un dessert à la cerise. 😮‍💨🍒\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Arômes fruités et gourmands\n☁️ Fumée douce et parfumée\n🔥 Profil dessert bien marqué\n🍪 Identité sucrée et moderne\n\n🏆 Le verdict :\nUne variété gourmande et pleine de douceur, idéale pour les amateurs de profils dessert, cherry et cookie. Frosted Cherry Cookie combine fruit, crème et biscuit dans une sélection très plaisante. 🍪🍒🔥",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        }, */
        {
          id: "Trade",
          flag: "🇺🇸",
          name: "Trade 📊",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductT.png",
          video: "VideoT.mp4",
          description:
              "📊🔥 TRADE — CALI PREMIUM 🔥📊\n\nUne sélection moderne au profil propre, équilibré et bien travaillé. Trade se distingue par une identité aromatique ronde, légèrement sucrée et résineuse, avec une belle présence dès l’ouverture. 🇺🇸💎\n\n👃 Profil aromatique :\n🍬 Notes sucrées légères\n🌿 Fond végétal propre\n⛽ Petite touche gassy\n🍦 Rondeur crémeuse discrète\n🔥 Finition résineuse élégante\n\n👅 Goût :\nEn bouche, Trade développe une attaque douce et aromatique, avec un mélange équilibré entre notes sucrées, résineuses et légèrement crémeuses. La dégustation reste propre, agréable et régulière, avec une finale bien présente. 😮‍💨📊\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Profil aromatique équilibré\n☁️ Fumée douce et dense\n🔥 Bonne régularité\n📊 Produit simple, propre et efficace\n\n🏆 Le verdict :\nUne sélection fiable et équilibrée, parfaite pour ceux qui recherchent un profil propre, doux et légèrement gassy. Trade mise sur la régularité, la qualité et une belle rondeur aromatique. 📊🔥🇺🇸",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        },
        {
          id: "Lemon chery gelonade",
          flag: "🇺🇸",
          name: "Lemon Cherry Gelonade 🍨",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductLCG.png",
          video: "VideoLCG.mp4",
          description:
              "🍋🍒🍨 LEMON CHERRY GELONADE — CALI PREMIUM 🍨🍒🍋\n\nUne sélection fruitée, fraîche et gourmande qui mélange des notes citronnées, cerise sucrée et crème glacée. Lemon Cherry Gelonade offre un profil moderne, coloré et très aromatique, parfait pour les amateurs de saveurs fruitées. 🇺🇸🔥\n\n👃 Profil aromatique :\n🍋 Citron frais et zesté\n🍒 Cerise sucrée\n🍨 Crème glacée douce\n🍬 Notes candy fruitées\n🌸 Petite touche florale\n\n👅 Goût :\nEn bouche, Lemon Cherry Gelonade démarre sur une fraîcheur citronnée, rapidement équilibrée par la douceur de la cerise et une rondeur crémeuse. Le profil est fruité, sucré et très agréable, avec une finale fraîche et gourmande. 😮‍💨🍋🍒\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Arômes fruités bien marqués\n☁️ Fumée douce et parfumée\n🔥 Profil candy frais\n🍨 Rondeur crémeuse en finition\n\n🏆 Le verdict :\nUne variété fraîche, fruitée et gourmande, idéale pour ceux qui aiment les profils lemon, cherry et candy. Lemon Cherry Gelonade combine peps, douceur et vraie identité Cali. 🍋🍒🍨🔥",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        },
        {
          id: "Blueberry 🌀",
          flag: "🇺🇸",
          name: "Blueberry 🌀",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductBB.png",
          video: "VideoBB.mp4",
          description:
              "🌀🫐 BLUEBERRY — CALI PREMIUM 🫐🌀\n\nUne sélection fruitée et douce, centrée sur un profil myrtille sucrée, baies mûres et rondeur crémeuse. Blueberry est une valeur sûre pour les amateurs de saveurs fruitées, simples et efficaces. 🇺🇸🔥\n\n👃 Profil aromatique :\n🫐 Myrtille sucrée\n🍓 Fruits rouges mûrs\n🍬 Douceur candy légère\n🍦 Fond crémeux discret\n🌿 Petite touche végétale propre\n\n👅 Goût :\nEn bouche, Blueberry développe une attaque douce et fruitée, avec des notes de myrtille et de fruits rouges bien présentes. La dégustation reste ronde, agréable et parfumée, avec une finale sucrée qui reste longtemps sur le palais. 😮‍💨🫐\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Profil fruité expressif\n☁️ Fumée douce et aromatique\n🔥 Saveur claire et régulière\n🌀 Identité fruitée reconnaissable\n\n🏆 Le verdict :\nUne variété fruitée, douce et efficace, parfaite pour ceux qui aiment les profils berry, sucrés et crémeux. Blueberry combine gourmandise, fraîcheur et simplicité dans une sélection très agréable. 🌀🫐🔥",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        },
       /*  {
          id: "PermanentMarker 🖍️",
          flag: "🇺🇸",
          name: "PermanentMarker 🖍️",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductPermm.jpg",
          video: "VideoPermm.mp4",
          description:
            "🖍️⛽ PERMANENT MARKER ⛽🖍️\n\n Une génétique américaine devenue incontournable grâce à son profil aromatique extrêmement reconnaissable. Permanent Marker combine des notes chimiques et gazeuses avec une douceur crémeuse et légèrement fruitée, pour une variété moderne pleine de caractère. 🇺🇸🔥\n\n 👃 Profil aromatique :\n ⛽ Gaz et carburant puissant\n 🖍️ Notes chimiques rappelant le marqueur\n 🍬 Bonbon sucré et légèrement fruité\n 🍦 Fond crémeux et vanillé\n 🌿 Petite touche terreuse en finition\n\n 👅 Goût :\n Dès les premières bouffées, le côté gassy et chimique prend rapidement toute la place. Il est ensuite adouci par des notes crémeuses, sucrées et légèrement fruitées. La finale reste longtemps en bouche avec une signature intense et facilement identifiable. 😮‍💨🖍️\n\n ✨ Effets généralement recherchés :\n 🚀 Montée rapide et marquée\n 😄 Euphorie mentale\n 🧠 Esprit progressivement apaisé\n 💆 Relaxation corporelle profonde\n 🛋️ Sensation lourde et confortable en fin de session\n\n 🏆 Le verdict :\n Une variété puissante et originale destinée aux amateurs de profils gas, chimiques et crémeux. Permanent Marker ne passe jamais inaperçue et reste une véritable référence parmi les génétiques US modernes. 🖍️⛽🔥💎",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        }, */
        {
          id: "OBAMA RUNTZ 🇺🇸⚡️",
          flag: "🇺🇸",
          name: "OBAMA RUNTZ 🇺🇸⚡️",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductOR.jpg",
          video: "VideoOR.mp4",
          description:
            "🇺🇸⚡ OBAMA RUNTZ ⚡🇺🇸\n\n Une sélection au profil moderne qui mélange parfaitement la gourmandise sucrée de la famille Runtz avec des notes plus profondes, crémeuses et gazeuses. Obama Runtz dévoile une identité riche et équilibrée, pensée pour les amateurs de grosses génétiques américaines. 🔥💎\n\n 👃 Profil aromatique :\n 🍬 Bonbon fruité et sucré\n 🍓 Fruits rouges et baies mûres\n 🍦 Crème vanillée\n 🌿 Notes terreuses et légèrement boisées\n ⛽ Fond gazeux typiquement US\n\n 👅 Goût :\n En bouche, l’attaque est dominée par des saveurs candy et fruitées, accompagnées d’une belle rondeur crémeuse. Une touche plus terreuse et gazeuse apparaît progressivement, offrant une finale profonde et persistante. 😮‍💨🍬\n\n ✨ Effets généralement recherchés :\n 😄 Euphorie et bonne humeur\n 🧠 Sensation mentale légère et agréable\n 🎵 Moment convivial et détendu\n 💆 Relaxation corporelle progressive\n 🌙 Effet plus posé au fil de la session\n\n 🏆 Le verdict :\n Une Runtz gourmande, fruitée et gassy qui équilibre parfaitement douceur et caractère. Obama Runtz s’adresse aux amateurs de profils candy modernes avec une finition plus lourde et profonde. 🇺🇸⚡🍬🔥",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        },
       /*  {
          id: "🥣🥛 CEREAL MILK 🥛🥣",
          flag: "🇺🇸",
          name: "🥣🥛 CEREAL MILK 🥛🥣",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductGSM.jpg",
          video: "VideoGSM.mp4",
          description:
            "🔥 Une variété devenue incontournable grâce à son profil terpénique unique, à mi-chemin entre les céréales sucrées, le lait crémeux et une puissance moderne parfaitement maîtrisée. Très appréciée des amateurs de génétiques américaines pour son équilibre entre saveur et effet. 🔥\n ✨ Ce qu’elle apporte\n\n 😄 Euphorie propre et immédiate\n 🧠 Esprit léger et positif\n 🎯 Bonne clarté mentale\n 😌 Relaxation progressive sans lourdeur excessive\n 💨 Effet équilibré qui peut accompagner aussi bien une discussion qu’un moment de détente\n\n 👃 Profil aromatique\n\n 🥣 Céréales sucrées\n 🥛 Lait crémeux\n 🍦 Notes vanillées et gourmandes\n 🍬 Fond sucré rappelant parfois les marshmallows\n 🍋 Légère touche fruitée et citronnée selon les phénotypes\n\n 💨 L’expérience\n\n Dès les premières bouffées, Cereal Milk se distingue par sa douceur et son côté gourmand. L’effet démarre souvent par une montée euphorique et agréable qui améliore l’humeur, avant d’évoluer vers une détente confortable sans écraser l’esprit. C’est cette combinaison entre puissance, saveurs et équilibre qui lui a valu sa réputation.\n ⭐ Pourquoi les connaisseurs l’apprécient ?\n\n 🥛 Terpènes ultra gourmands et reconnaissables\n ❄️ Production de résine souvent impressionnante\n 🧠 Effet à la fois lucide et relaxant\n 🍦 Profil moderne très recherché dans les génétiques américaines\n 🔥 Une variété qui a marqué toute une génération de cultivars “dessert” et qui reste aujourd’hui une référence du haut de gamme. 💎✨",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        }, */
       /*  {
          id: "GlueBerry 🧴",
          flag: "🇺🇸",
          name: "GlueBerry 🧴",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductGL.jpg",
          video: "VideoGL.mp4",
          description:
            "🫐🧴 GLUEBERRY 🧴🫐\n\n Une génétique puissante qui combine un profil de fruits rouges et de baies avec le caractère collant, terreux et gazeux des variétés de la famille Glue. Une variété riche en arômes, résineuse et dotée d’une vraie personnalité. 🔥💎\n\n 👃 Profil aromatique :\n 🫐 Myrtille et fruits des bois\n 🍓 Fruits rouges sucrés\n ⛽ Notes de gaz et de diesel\n 🌿 Fond terreux et légèrement boisé\n 🍬 Petite douceur fruitée en finition\n\n 👅 Goût :\n L’attaque dévoile des saveurs de baies sucrées et de fruits mûrs. Progressivement, le côté Glue prend le dessus avec des notes terreuses, résineuses et gazeuses. La finale est longue, légèrement crémeuse et laisse un mélange de fruits noirs et de diesel sur le palais. 😮‍💨⛽\n\n ✨ Effets généralement recherchés :\n 🚀 Montée rapide et marquée\n 😄 Euphorie mentale\n 🧠 Esprit progressivement apaisé\n 💆 Relaxation corporelle profonde\n 🛋️ Idéale pour les moments de détente\n\n 🏆 Le verdict :\n Une variété complète qui équilibre parfaitement gourmandise fruitée et puissance gazeuse. GlueBerry s’adresse aux amateurs de profils complexes, résineux et riches en terpènes. 🫐⛽🧴🔥",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        }, */
        /* {
          id: "Cherry runtz 🍒",
          flag: "🇺🇸",
          name: "Cherry runtz 🍒",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductCHR.jpg",
          images: ["ProductCHRR.jpg"],
          video: "",
          description:
            "🍒🍬 CHERRY RUNTZ 🍬🍒\n\n Une variété ultra gourmande qui mélange parfaitement le caractère fruité de la cerise avec le célèbre profil sucré et crémeux de la famille Runtz. Dès l’ouverture, elle dévoile une identité moderne, intense et particulièrement agréable. 🔥💎\n\n 👃 Profil aromatique :\n 🍒 Cerise mûre et sucrée\n 🍬 Bonbon fruité\n 🍓 Fruits rouges\n 🍦 Fond crémeux et légèrement vanillé\n ⛽ Petite touche gazeuse en arrière-plan\n\n 👅 Goût :\n En bouche, l’attaque est dominée par une cerise sucrée et juteuse, rapidement accompagnée de notes de bonbons et de fruits rouges. La finale devient plus crémeuse, avec une légère touche gassy qui apporte du caractère et une belle longueur en bouche. 😮‍💨🍒\n\n ✨ Effets généralement recherchés :\n 😄 Euphorie et bonne humeur\n 🧠 Esprit détendu\n 🎨 Sensation créative et agréable\n 💆 Relaxation corporelle progressive\n 🌙 Peut devenir plus reposante en fin de session\n\n 🏆 Le verdict :\n Une Runtz fruitée, sucrée et pleine de caractère, idéale pour les amateurs de profils candy, cerise et crème. Une variété moderne aussi séduisante par ses arômes que par son équilibre. 🍒🍬🔥💎",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        }, */
       /*  {
          id: "🌴💣 SUPER BOMBE 💣🌴",
          flag: "🇺🇸",
          name: "🌴💣 SUPER BOMBE 💣🌴",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductS.jpg",
          video: "VideoSB.mp4",
          description:
            "✨ Cette génétique est appréciée pour son profil aromatique très expressif :\n 🍬 Notes sucrées et fruitées\n ⛽ Fond gazeux et légèrement diesel\n 🍋 Touches d’agrumes selon les phénotypes\n ❄️ Têtes très résineuses et visuellement attractives\n\n 💨 Effets généralement recherchés :\n 😁 Euphorie rapide\n 🚀 Sensation cérébrale puissante\n 😌 Relaxation progressive du corps\n 🎨 Peut favoriser la créativité et la bonne humeur\n\n 👃 Ce qui séduit les connaisseurs, c’est surtout son mélange entre douceur sucrée et caractère gassy, offrant une fumée riche en terpènes et une belle longueur en bouche.  \n\n 💎 Une variété moderne qui mise avant tout sur l’intensité aromatique, la résine et une expérience complète du premier nez jusqu’à la dernière bouffée. 🔥🌴💨",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        }, */
        /*   {
                    id: '🍨🌿 GELATO #33 🌿🍨',
                    flag: '🇺🇸',
                    name: '🍨🌿 GELATO #33 🌿🍨',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductG.jpg', 
                    video: 'VideoG.mp4',
                    description: '💎🔥 Une des variétés les plus célèbres de la famille Gelato, réputée pour son équilibre entre puissance, saveurs gourmandes et effets agréables. 🔥💎\n\n ✨ Origines\n Gelato #33 est issue du croisement entre la variété Sunset Sherbet et Thin Mint GSC (Girl Scout Cookies). Cette génétique lui a permis de devenir une référence mondiale dans l’univers du cannabis.  \n\n 🌈 Aspect\n • Têtes denses et compactes 🟣🟢\n • Couleurs vert foncé à violettes ✨\n • Couvertes d’une épaisse couche de résine givrée ❄️\n • Pistils orange vif 🧡  \n\n 👃 Arômes & Saveurs\n 🍦 Crémeux et gourmand\n 🍓 Notes de fruits rouges et d’agrumes\n 🍪 Fond biscuité et légèrement mentholé\n 🍋 Touches sucrées et citronnées  \n\n ⚡ Effets recherchés\n 😄 Euphorie et bonne humeur\n 🧠 Sensation de bien-être mental\n 🎨 Créativité et sociabilité\n 😌 Relaxation corporelle sans forcément être assommante\n 🌙 À dose plus élevée, elle peut devenir très relaxante et favoriser le repos  \n\n 🎯 Profil général\n • Hybride équilibrée (légère dominance indica selon les phénotypes)\n • THC souvent situé entre 20 % et 29 % 🔥\n • Adaptée aussi bien pour se détendre que pour profiter d’une activité calme ou entre amis.  \n\n ⭐ En résumé\n Gelato #33 est souvent appréciée pour son mélange de détente physique et d’euphorie mentale. Elle procure généralement un effet heureux, relaxant et agréable, accompagné d’un profil aromatique crémeux et sucré qui a fait sa réputation. 🍨✨',                    
                    tarifs: [
                        { weight: '5g', price: 50.00 },
                        { weight: '10g', price: 90.00 },
                        { weight: '25g', price: 200.00 },
                        { weight: '50g', price: 350.00 },
                    ]
                },  */
        /* {
          id: "Pech sherbet 🍨",
          flag: "🇺🇸",
          name: "Pech sherbet 🍨",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "ProductPS.jpg",
          images: ["ProductPSS.jpg"],
          video: "",
          description:
            "🍑🍨 PEACH SHERBET 🍨🍑\n\n Une variété ultra gourmande inspirée des meilleurs profils dessert californiens. Peach Sherbet associe la douceur d’une pêche bien mûre à des notes crémeuses et légèrement acidulées, pour une expérience aromatique riche et rafraîchissante. 🇺🇸🔥\n\n 👃 Profil aromatique :\n 🍑 Pêche mûre et juteuse\n 🍨 Sorbet fruité\n 🍦 Crème douce et vanillée\n 🍬 Bonbon légèrement acidulé\n 🍋 Petite touche d’agrumes frais\n\n 👅 Goût :\n Dès les premières bouffées, une saveur de pêche sucrée envahit le palais. Elle laisse ensuite apparaître une crème façon glace ou sorbet, accompagnée d’une légère fraîcheur citronnée. La fumée est douce, gourmande et laisse une belle saveur fruitée en bouche. 😮‍💨🍑\n\n ✨ Effets généralement recherchés :\n 😄 Bonne humeur\n 🌈 Sensation euphorique agréable\n 🧠 Esprit léger et détendu\n 💆 Relaxation physique progressive\n 🎶 Parfaite pour un moment calme et convivial\n\n 🏆 Le verdict :\n Une variété dessert fruitée, crémeuse et pleine de fraîcheur. Peach Sherbet conviendra parfaitement aux amateurs de saveurs sucrées qui recherchent un profil gourmand sans manquer de caractère. 🍑🍨✨🔥",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        }, */
       /*  {
          id: "GlueBerry 🧴",
          flag: "🇺🇸",
          name: "GlueBerry 🧴",
          farm: "🌾 No Farm 🌾",
          promoEligible: true,
          type: "Weed",
          image: "productGL.jpg",
          images: ["ProductGLL.jpg"],
          video: "",
          description:
            "🫐🧴 GLUEBERRY 🧴🫐\n\n Une génétique puissante qui combine un profil de fruits rouges et de baies avec le caractère collant, terreux et gazeux des variétés de la famille Glue. Une variété riche en arômes, résineuse et dotée d’une vraie personnalité. 🔥💎\n\n 👃 Profil aromatique :\n 🫐 Myrtille et fruits des bois\n 🍓 Fruits rouges sucrés\n ⛽ Notes de gaz et de diesel\n 🌿 Fond terreux et légèrement boisé\n 🍬 Petite douceur fruitée en finition\n\n 👅 Goût :\n L’attaque dévoile des saveurs de baies sucrées et de fruits mûrs. Progressivement, le côté Glue prend le dessus avec des notes terreuses, résineuses et gazeuses. La finale est longue, légèrement crémeuse et laisse un mélange de fruits noirs et de diesel sur le palais. 😮‍💨⛽\n\n ✨ Effets généralement recherchés :\n 🚀 Montée rapide et marquée\n 😄 Euphorie mentale\n 🧠 Esprit progressivement apaisé\n 💆 Relaxation corporelle profonde\n 🛋️ Idéale pour les moments de détente\n\n 🏆 Le verdict :\n Une variété complète qui équilibre parfaitement gourmandise fruitée et puissance gazeuse. GlueBerry s’adresse aux amateurs de profils complexes, résineux et riches en terpènes. 🫐⛽🧴🔥",
          tarifs: [
            { weight: "5g", price: 50.0 },
            { weight: "10g", price: 90.0 },
            { weight: "25g", price: 200.0 },
            { weight: "50g", price: 350.0 },
          ],
        }, */
        /*   {
                    id: 'ROCKET 🚀🔥',
                    flag: '🇺🇸',
                    name: 'ROCKET 🚀🔥',
                    farm: '🌾 No Farm 🌾',
                    promoEligible: true,
                    type: 'Weed',
                    image: 'ProductROCK.jpg', 
                    images:['ProductROCKK.jpg'],
                    video: '',
                    description: 'Une strain qui porte parfaitement son nom. Rocket envoie une vraie montée puissante avec un profil moderne ultra terpy, mélangeant gaz, fruits sucrés et notes crémeuses pour une fumée lourde et premium.\n\n 👃 Aromatique :\n Dès l’ouverture, ça explose avec une odeur gazeuse bien forte ⛽️ accompagnée de touches fruitées et sucrées. On retrouve aussi un fond creamy/kush qui donne beaucoup de profondeur au profil.\n\n 👅 Goût :\n En bouche, c’est intense : mélange de candy fruité 🍬, gaz lourd et légère touche tropicale qui reste longtemps après la taffe. La fumée est épaisse, propre et ultra savoureuse.\n\n 💨 Effet :\n Montée rapide et puissante 🚀 avec un gros effet euphorique au début avant une détente physique bien lourde. Une vraie frappe pour les amateurs de strains qui tapent fort.\n\n 🌿 Buds bien résineux, full terpènes et qualité premium.',                    
                    tarifs: [
                        { weight: '5g', price: 50.00 },
                        { weight: '10g', price: 90.00 },
                        { weight: '25g', price: 200.00 },
                        { weight: '50g', price: 350.00 },
                    ]
                }, */
      ],
    },
    {
      id: "WeedH",
      name: "HAZE HOLLANDE 🇳🇱",
      type: "WeedH",
      quality: "HAZE HOLLANDE 🇳🇱",
      image: "CategHo.png", // Ton image de catégorie Weed

      products: [],
    },
    // Anciennes catégories supprimées pour le catalogue No Name Club.

  ];

  // --- VARIABLES D'ÉTAT ---
  let cart = [];
  let currentFilters = {
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories"; // 'categories', 'farms', ou 'products'
  let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
  let currentFarmId = null; // Garde en mémoire la farm sélectionnée
  let appliedPromo = null; // Pour suivre le code promo
  let fulfillmentMethod = null; // "Meet Up" ou "Livraison" — choix obligatoire
  let deliveryAddress = ""; // Adresse utilisée uniquement pour une livraison
  let paymentMethod = "Espèce"; // Méthode de paiement par défaut

  // --- DÉFINIS TES CODES PROMO ICI ---
  const validPromoCodes = {
    /*   "": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        },
        "": {
            type: 'fixed', // 'percent' (pourcentage) ou 'fixed' (fixe)
            value: 10,       // 20%
            appliesTo: 'eligible', // 'eligible' (articles marqués) ou 'all' (tout le panier)
            cumulative: false // <-- AJOUTE CETTE LIGNE
        } */
    /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
    // Ajoute d'autres codes ici
    // ADD CUMULABLE FONCTION POUR PLUTARD
  };

  // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");

  const filterContainer = document.querySelector(".filters");

  // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;
  // --- FIN NOUVEAUX SÉLECTEURS ---

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
  function getProductById(productId) {
    for (const category of appData) {
      // 1. Cherche dans les produits directs (Nouveau cas)
      if (category.products) {
        const product = category.products.find((p) => p.id === productId);
        if (product) return product;
      }

      // 2. Cherche dans les farms (Ancien cas)
      if (category.farms) {
        for (const farm of category.farms) {
          const product = farm.products.find((p) => p.id === productId);
          if (product) return product;
        }
      }
    }
    return undefined; // Non trouvé
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
    // 👇 AJOUT STRATÉGIQUE : Coupe toutes les vidéos instantanément au changement de page
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
    });
    pages.forEach((p) => p.classList.remove("active"));
    // S'assure que la page existe avant de l'activer
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info");
    const contactNav = document.getElementById("nav-contact");
    const avisNav = document.getElementById("nav-avis");
    const cartNav = document.getElementById("nav-cart");

    // On reset tout
    if (homeNav) homeNav.classList.remove("active");
    if (infoNav) infoNav.classList.remove("active");
    if (contactNav) contactNav.classList.remove("active");
    if (avisNav) avisNav.classList.remove("active");
    if (cartNav) cartNav.classList.remove("active");

    // On active le bon bouton de la navbar
    if (pageId === "page-contact") {
      if (contactNav) contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      if (infoNav) infoNav.classList.add("active");
    } else if (pageId === "page-avis") {
      if (avisNav) avisNav.classList.add("active");
    } else if (pageId === "page-cart" || pageId === "page-confirmation") {
      if (cartNav) cartNav.classList.add("active");
    } else {
      if (homeNav) homeNav.classList.add("active");
    }
  }

  // --- LOGIQUE D'AFFICHAGE ---

  // --- MODIFIÉ : renderHomePage ---

  function renderHomePage() {
    // Toujours afficher le conteneur principal des filtres
    filterContainer.style.display = "flex";

    // On enlève les anciens boutons "retour"
    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();
    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    if (currentView === "categories") {
      renderCategoryList();

      // --- GESTION DES FILTRES (Vue Catégorie) ---
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "flex"; // On montre QUE la qualité

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (currentView === "farms") {
      renderFarmList(currentCategoryId);

      // --- GESTION DES FILTRES (Vue Farms) ---
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none"; // Pas de filtres pour les farms
      qualityFilterWrapper.style.display = "none";

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)"; // 1 colonne pour les farms

      // --- AJOUT BOUTON RETOUR (vers Catégories) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn"; // CLASSE IMPORTANTE
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
      backButton.style.cssText = `
            border: none;
            color: rgb(201 156 66);
    padding: 40px;
    font-weight: 700;
    cursor: pointer;
    gap: 10px;
    box-sizing: border-box;
    margin-top: 3vh;
    font-family: Copperplate;
    height: 7vh;
    font-size: 1.8vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(194deg, rgb(110 69 20), rgba(0, 0, 0, 0.31));
            border-radius: 10px;`;

      filterContainer.prepend(backButton);
    } else if (currentView === "simple_products") {
      updateFarmFilter(currentCategoryId);

      renderProductListSimple(currentCategoryId);

      // --- GESTION DES FILTRES ---
      // 1. On AFFICHE la barre de recherche
      searchFilterWrapper.style.display = "flex";

      // 2. On AFFICHE le filtre Farm
      farmFilterWrapper.style.display = "flex";

      // 3. On CACHE le filtre Qualité ("Sélection du chef")
      qualityFilterWrapper.style.display = "none";

      // --- AJOUT BOUTON RETOUR (vers Catégories) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn";
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;

      backButton.style.cssText = `
            border: none;
           color: rgb(201 156 66);
    padding: 40px;
    font-weight: 700;
    cursor: pointer;
    gap: 10px;
    box-sizing: border-box;
    margin-top: 3vh;
    font-family: Copperplate;
    height: 7vh;
    font-size: 1.8vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(194deg, rgb(110 69 20), rgba(0, 0, 0, 0.31));
            border-radius: 10px;`;

      filterContainer.prepend(backButton);

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    } else if (currentView === "products") {
      updateFarmFilter(currentCategoryId, currentFarmId);

      renderProductList(currentCategoryId, currentFarmId);

      // --- GESTION DES FILTRES (Vue Produit) ---
      searchFilterWrapper.style.display = "flex";
      farmFilterWrapper.style.display = "flex"; // On montre les filtres produits
      qualityFilterWrapper.style.display = "none"; // On cache la qualité

      // --- GESTION DU STYLE DE GRILLE ---
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)"; // 2 colonnes

      // --- AJOUT BOUTON RETOUR (vers Farms) ---
      const category = appData.find((c) => c.id === currentCategoryId);
      const farm = category.farms.find((f) => f.id === currentFarmId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-farms-btn"; // CLASSE IMPORTANTE
      backButton.innerHTML = `<svg width="24"
             height="24"
              viewBox="0 0 24 24"
              ><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${farm.name}`;
      backButton.style.cssText = `
            border: none;
           color: rgb(201 156 66);
    padding: 40px;
    font-weight: 700;
    cursor: pointer;
    gap: 10px;
    box-sizing: border-box;
    margin-top: 3vh;
    font-family: Copperplate;
    height: 7vh;
    font-size: 1.8vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(194deg, rgb(110 69 20), rgba(0, 0, 0, 0.31));
                        border-radius: 10px;`;

      filterContainer.prepend(backButton);
    }
  }

  // --- FONCTION MODIFIÉE : Filtre intelligent par Sous-Catégorie ---
  function updateFarmFilter(categoryId, subCategoryId = null) {
    const category = appData.find((c) => c.id === categoryId);
    const farmFilter = document.getElementById("farm-filter");

    if (!category) return;

    let availableFarms = [];

    // CAS 1 : On est dans une sous-catégorie précise (ex: Cali USA)
    if (subCategoryId && category.farms) {
      const subCategory = category.farms.find((f) => f.id === subCategoryId);
      if (subCategory) {
        subCategory.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }
    // CAS 2 : On est dans une catégorie globale ou simple (ex: Packs Noel ou tout voir)
    else {
      if (category.farms) {
        // Si c'est une catégorie à tiroirs, on prend tout
        category.farms.forEach((sub) => {
          sub.products.forEach((p) => {
            if (p.farm) availableFarms.push(p.farm);
          });
        });
      } else if (category.products) {
        // Si c'est une catégorie simple
        category.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }

    // 2. On enlève les doublons
    const uniqueFarms = ["all", ...new Set(availableFarms)];

    // 3. On génère le HTML
    const currentValue = currentFilters.farm;

    farmFilter.innerHTML = uniqueFarms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. On remet la valeur si elle existe toujours
    if (uniqueFarms.includes(currentValue)) {
      farmFilter.value = currentValue;
    } else {
      farmFilter.value = "all";
      currentFilters.farm = "all";
    }
  }

  // --- MODIFIÉ : renderCategoryList ---
  // Prend en compte le filtre qualité
  function renderCategoryList() {
    const filteredCategories = appData.filter((category) => {
      const searchMatch = category.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // --- AJOUT ---
      const qualityMatch =
        currentFilters.quality === "all" ||
        category.quality === currentFilters.quality;
      return searchMatch && qualityMatch;
      // --- FIN AJOUT ---
    });

    productListContainer.innerHTML = "";
    if (filteredCategories.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
      return;
    }

    filteredCategories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.dataset.categoryId = category.id;

      card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
                <div class="category-name">${category.name}</div>
            `;
      productListContainer.appendChild(card);
    });
  }

  // --- NOUVELLE FONCTION ---
  // Affiche la liste des FARMS pour une catégorie
  // --- FONCTION MODIFIÉE : Affichage liste bouton ---
  function renderFarmList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    // On change le style de la grille pour avoir une seule colonne (liste verticale)
    productListContainer.style.gridTemplateColumns = "1fr";
    productListContainer.style.gap = "10px"; // Espacement entre les boutons

    productListContainer.innerHTML = "";
    if (farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune farm trouvée.</p>';
      return;
    }

    farms.forEach((farm) => {
      const btn = document.createElement("div");
      // On change la classe pour ne plus utiliser le style "card"
      btn.className = "farm-list-btn";
      btn.dataset.farmId = farm.id;

      if (farm.clickable === false) {
        btn.classList.add("unclickable");
      }

      const productCount = farm.products.length;
      const countText = productCount > 0 ? `${productCount} prod.` : "";

      // Structure : Icone | Nom + Badge | Flèche
      btn.innerHTML = `
            <div class="farm-btn-left">
                
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${farm.name}</span>
                    <span class="farm-btn-subtitle">${farm.badgeText || countText}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;
      productListContainer.appendChild(btn);
    });
  }

  // Affiche la liste des PRODUITS (Version corrigée : Pleine largeur + Sans image vide)
  function renderProductListSimple(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category || !category.products) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à cette catégorie.</p>';
      return;
    }

    // Mise à jour du filtre farm intelligent
    if (typeof updateFarmFilter === "function") updateFarmFilter(categoryId);

    // On filtre le tableau products
    const filteredProducts = category.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // --- 1. LOGIQUE PLEINE LARGEUR ---
      // Si c'est un Pack, on ajoute la classe spéciale
      if (product.type === "Pack" || product.id === "PackNoel2025") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) card.classList.add("unclickable");

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      // --- 2. LOGIQUE IMAGE (On affiche seulement si elle existe) ---
      let imgHTML = "";
      if (product.image && product.image !== "") {
        imgHTML = `<img src="${product.image}" alt="${product.name}">`;
      }

      card.innerHTML = `
            ${imgHTML}
            <div class="info">
                <div class="name">${product.name} ${flagHTML}</div>
                <div class="farm">${product.farm}</div> 
                <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
            </div>
        `;
      productListContainer.appendChild(card);
    });
  }
  // Affiche la liste des PRODUITS pour une farm
  function renderProductList(categoryId, farmId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }
    const farm = category.farms.find((f) => f.id === farmId);
    if (!farm) {
      productListContainer.innerHTML =
        '<p class="no-results">Farm non trouvée.</p>';
      return;
    }
    const filteredProducts = farm.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // On a supprimé 'qualityMatch'. Le choix de la catégorie suffit.
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;

      return searchMatch && farmMatch; // On retourne sans le qualityMatch
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // Si c'est le Pack de Noël (vérifie bien que l'ID est correct), on met la classe large
      if (product.id === "PackNoel2025" || product.type === "Pack") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) {
        card.classList.add("unclickable");
      }

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
      productListContainer.appendChild(card);
    });
  }

  // Affiche la page de détail d'un produit
  function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    document.getElementById("product-page-title").innerText = product.name;
    const detailsContainer = document.getElementById("product-details-content");

    // --- 1. GESTION INTELLIGENTE DES MÉDIAS ---
    let galleryHTML = "";
    let hasMedia = false;

    // Images
    let mediaItems = [];
    if (product.images && product.images.length > 0) {
      mediaItems = product.images;
    } else if (product.image && product.image !== "") {
      mediaItems = [product.image];
    }

    if (mediaItems.length > 0) {
      hasMedia = true;
      galleryHTML += mediaItems
        .map(
          (imgSrc) => `
                <div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>
            `,
        )
        .join("");
    }

    // Vidéos
    if (product.videos && product.videos.length > 0) {
      hasMedia = true;
      product.videos.forEach((videoSrc) => {
        galleryHTML += `
                    <div class="gallery-item">
                        <video controls playsinline poster="${product.image || ""}">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    </div>`;
      });
    } else if (product.video && product.video !== "") {
      hasMedia = true;
      galleryHTML += `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ""}">
                        <source src="${product.video}" type="video/mp4">
                    </video>
                </div>`;
    }

    // --- 2. LE RESTE (OPTIONS, DESCRIPTION, TARIFS) ---

    // --- GESTION DU CONTENU PACK (Liens internes) ---
    let packLinksHTML = "";
    if (product.packContents && product.packContents.length > 0) {
      const links = product.packContents
        .map(
          (item) => `
            <div class="pack-item-btn" data-target-id="${item.targetId}">
                <span>${item.name}</span>
                <span class="pack-arrow">›</span>
            </div>
        `,
        )
        .join("");

      packLinksHTML = `
            <div class="pack-content-container">
                <div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>
                ${links}
            </div>
        `;
    }
    let variantsHTML = "";
    if (product.jars && product.jars.length > 0) {
      const buttonsHTML = product.jars
        .map(
          (jar, index) => `
                <div class="variant-btn ${index === 0 ? "active " + jar.colorClass : ""}" 
                     data-name="${jar.name} ${jar.emoji}" 
                     data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span>
                    <span class="text">${jar.name}</span>
                </div>
            `,
        )
        .join("");
      variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || "Choisir une option :"}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
    } else if (product.options && product.options.length > 0) {
      variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #3a3a3c;">${product.options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}</select></div>`;
    }

    let tarifsHTML = product.tarifs
      .map(
        (tarif) => `
            <div class="tarif-item">
                <div class="box-tarif">
                ${tarif.badge ? `<span class="tarif-badge">${tarif.badge}</span>` : ""} <div class="tarif-wieght">${tarif.weight}</div>
                    <div class="tarif-price">
    ${
      Number.isFinite(tarif.oldPrice) && tarif.oldPrice > tarif.price
        ? `<span class="old-price">${tarif.oldPrice.toFixed(2)}€</span>`
        : ""
    }
    <span class="current-price">${tarif.price.toFixed(2)}€</span>
</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
        `,
      )
      .join("");

    let descriptionHTML = product.description
      ? `<p class="product-description">${product.description.replace(/\n/g, "<br>")}</p>`
      : "";

    const oldVideo = document.querySelector("#page-product .product-video");
    if (oldVideo) oldVideo.style.display = "none";

    // --- 3. INJECTION (On cache la galerie si pas de média) ---
    detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ""}
            ${hasMedia ? `<div class="gallery-counter">Swipe ➡️</div>` : ""}
            
            <div class="name" style="margin-top: ${hasMedia ? "0" : "20px"}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;

    showPage("page-product");

    // Réattache les événements pour les variantes + stocke la strain choisie sur les boutons panier
    if (product.jars && product.jars.length > 0) {
      const variantBtns = detailsContainer.querySelectorAll(".variant-btn");
      const cartBtns = detailsContainer.querySelectorAll(".add-to-cart-btn");

      const variantClasses = [
        "style-purple",
        "style-red",
        "style-green",
        "style-yellow",
        "style-orange",
        "style-brown",
        "style-passion",
        "style-melon",
        "style-gold",
        "style-cherry",
        "style-glue",
        "style-blue",
        "style-pink",
        "style-indigo",
        "style-silver",
        "style-white",
        "style-grape",
        "style-fanta",
        "style-dark",
      ];

      const updateCartButtonsVariant = (activeBtn) => {
        const selectedVariant = activeBtn ? activeBtn.dataset.name : "";
        const colorClass = activeBtn ? activeBtn.dataset.colorClass : "";

        cartBtns.forEach((cartBtn) => {
          // 👇 IMPORTANT : on garde la strain choisie directement sur le bouton Ajouter
          cartBtn.dataset.variant = selectedVariant;

          cartBtn.classList.remove(...variantClasses);
          if (colorClass) cartBtn.classList.add(colorClass);
        });
      };

      // Variante par défaut = première saveur
      updateCartButtonsVariant(variantBtns[0]);

      variantBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          variantBtns.forEach((b) => {
            b.classList.remove("active");
            if (b.dataset.colorClass) b.classList.remove(b.dataset.colorClass);
          });

          this.classList.add("active");
          if (this.dataset.colorClass)
            this.classList.add(this.dataset.colorClass);

          updateCartButtonsVariant(this);

          if (window.Telegram.WebApp.HapticFeedback) {
            window.Telegram.WebApp.HapticFeedback.selectionChanged();
          }
        });
      });
    }
  }

  // Met à jour l'affichage du panier (CORRIGÉ : Cache l'image si vide)
  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      syncOrderOptionsUI();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
                
                <div class="item-details">
                    <div class="name" style="white-space: pre-line;">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `,
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
    updateCartCount();
    syncOrderOptionsUI();
  }

  function syncOrderOptionsUI() {
    document.querySelectorAll(".fulfillment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.fulfillment === fulfillmentMethod);
    });

    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    const addressWrap = document.getElementById("delivery-address-wrap");
    const addressInput = document.getElementById("delivery-address");

    if (addressWrap) {
      addressWrap.classList.toggle("visible", fulfillmentMethod === "Livraison");
    }

    if (addressInput && addressInput.value !== deliveryAddress) {
      addressInput.value = deliveryAddress;
    }
  }

  function validateOrderOptions() {
    if (!fulfillmentMethod) {
      showNotification("⚠️ Choisis MEET UP ou LIVRAISON.");
      return false;
    }

    if (fulfillmentMethod === "Livraison") {
      const addressInput = document.getElementById("delivery-address");
      deliveryAddress = addressInput ? addressInput.value.trim() : deliveryAddress.trim();

      if (!deliveryAddress) {
        showNotification("📍 Renseigne ton adresse de livraison.");
        if (addressInput) addressInput.focus();
        return false;
      }
    }

    if (!paymentMethod) {
      showNotification("💳 Choisis ESPÈCE ou CRYPTO.");
      return false;
    }

    return true;
  }

  // Affiche la page de confirmation (VERSION WHATSAPP DIRECT)
  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- Logique de calcul des prix (inchangée) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // --- Fin calcul ---

    // Mise à jour du résumé
    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    // Liste des articles
    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
         <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}

            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
            </div>
        </div>
    `,
      )
      .join("");

    // UI Promo
    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = "";
    }

    // UI Paiement
    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    // Résumé final
    const summaryContainer = document.getElementById("confirmation-summary");
    let summaryHTML = `
        <div class="summary-line">
            <span>Sous-total:</span>
            <span>${subTotal.toFixed(2)}€</span>
        </div>
    `;
    if (discount > 0) {
      summaryHTML += `
        <div class="summary-line discount">
            <span>Réduction:</span>
            <span>-${discount.toFixed(2)}€</span>
        </div>
        `;
    }
    summaryHTML += `
        <div class="summary-line total">
            <span>💰 Total final:</span>
            <span>${totalPrice.toFixed(2)}€</span>
        </div>
        <div class="confirmation-order-options">
            <div><strong>📍 Mode :</strong> ${fulfillmentMethod === "Livraison" ? "🚚 Livraison" : "🤝 Meet Up"}</div>
            ${
              fulfillmentMethod === "Livraison"
                ? `<div><strong>🏠 Adresse :</strong> ${deliveryAddress.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`
                : ""
            }
            <div><strong>💳 Paiement :</strong> ${paymentMethod === "Crypto" ? "₿ Crypto" : "💵 Espèce"}</div>
        </div>
    `;
    summaryContainer.innerHTML = summaryHTML;

    // --- MODIFICATION POUR WHATSAPP DIRECT ---
    const copyBtn = document.getElementById("copy-order-btn");
    const contactBtn = document.getElementById("confirm-order-button");

    // 1. On CACHE le bouton "Copier" car il ne sert plus
    if (copyBtn) copyBtn.style.display = "none";

    // 2. On configure le bouton "Confirmer" pour être actif tout de suite
    if (contactBtn) {
      contactBtn.classList.remove("secondary-action-btn"); // Enlève le gris
      contactBtn.classList.add("main-action-btn"); // Met le rouge (ou couleur principale)
      contactBtn.disabled = false; // Active le clic
      contactBtn.innerHTML = "CONFIRMER SUR WHATSAPP 📞"; // Change le texte
    }

    showPage("page-confirmation");
  }
  // Affiche la page de contact (inchangé)
  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");
    linksContainer.innerHTML = contactLinks
      .map(
        (link) => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        
            <span>${link.text}</span>
        </a>
        `,
      )
      .join("");
  }

  // Met à jour le compteur du panier (inchangé)
  function updateCartCount() {
    // Nombre TOTAL d'articles dans le panier (quantités comprises)
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    const navCart = document.getElementById("nav-cart");
    const navCount = navCart ? navCart.querySelector(".nav-cart-count") : null;

    if (navCart && navCount) {
      navCount.innerText = count;

      if (count > 0) {
        // Dès qu'il y a un article : le nombre remplace l'icône panier
        navCart.classList.add("has-items");
        navCount.style.display = "flex";
      } else {
        // Panier vide : on remet l'icône panier
        navCart.classList.remove("has-items");
        navCount.style.display = "none";
      }

      navCart.setAttribute(
        "aria-label",
        count > 0
          ? `Panier, ${count} article${count > 1 ? "s" : ""}`
          : "Panier vide"
      );
    }

    // Compatibilité si un autre compteur .cart-count est ajouté ailleurs
    document.querySelectorAll(".cart-count:not(.nav-cart-count)").forEach((el) => {
      el.innerText = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  }

  // --- MODIFIÉ : populateFilters ---
  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    // 1. On récupère TOUS les produits de l'app pour trouver toutes les farms
    const allNestedProducts = [];
    appData.forEach((category) => {
      if (category.farms) {
        category.farms.forEach((farm) =>
          allNestedProducts.push(...farm.products),
        );
      } else if (category.products) {
        allNestedProducts.push(...category.products);
      }
    });

    // 2. On remplit le filtre QUALITÉ (Pour la page d'accueil)
    const categoryQualities = appData.map((c) => c.quality).filter(Boolean); // filter Boolean enlève les vides
    const qualities = ["all", ...new Set(categoryQualities)];
    qualityFilter.innerHTML = qualities
      .map(
        (q) =>
          `<option value="${q}">${q === "all" ? "SELECTION DU CHEF" : q}</option>`,
      )
      .join("");

    // 3. On remplit le filtre FARM (Pour la page produits)
    // On récupère la propriété 'farm' de chaque produit
    const productFarms = allNestedProducts.map((p) => p.farm).filter((f) => f); // Garde seulement si une farm est définie
    const farms = ["all", ...new Set(productFarms)];

    farmFilter.innerHTML = farms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. Les écouteurs d'événements
    searchFilter.addEventListener("input", (e) => {
      currentFilters.searchTerm = e.target.value;
      renderHomePage();
    });

    qualityFilter.addEventListener("change", (e) => {
      currentFilters.quality = e.target.value;
      renderHomePage();
    });

    farmFilter.addEventListener("change", (e) => {
      currentFilters.farm = e.target.value;
      renderHomePage();
    });
  }

  // --- NOTIFICATION (inchangé) ---
  let notificationTimeout;
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);
    notification.classList.remove("show");
    void notification.offsetWidth;

    notification.innerText = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  // --- LOGIQUE DU PANIER ---

  // Ajoute le paramètre 'variant' à la fin
  function addToCart(productId, weight, price, variant = null) {
    // L'ID du panier doit inclure la variante pour différencier (ex: 10g Gelato vs 10g Papaya)
    const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, "") : "default"}`;

    const existingItem = cart.find((item) => item.id === cartItemId);
    const product = getProductById(productId);

    // On prépare le nom à afficher (ex: "120u (Papaya Bomb)")
    const displayName = variant
      ? `${product.name} \n👉 ${variant}`
      : product.name;

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    } else {
      cart.push({
        id: cartItemId,
        productId: productId,
        name: displayName, // On utilise le nom avec la variante
        image: product.image,
        weight: weight,
        quantity: 1,
        unitPrice: price,
        totalPrice: price,
        variant: variant, // On garde la variante en mémoire si besoin
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }
  // updateQuantity (inchangé)
  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
    } else {
      item.totalPrice = item.quantity * item.unitPrice;
    }
    renderCart();
  }

  // --- FORMATAGE DU MESSAGE WHATSAPP (STYLE PRO & EMOJIS) ---
  function formatOrderMessage() {
    // --- 1. CALCULS (Inchangés) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    // --- 2. CONSTRUCTION DU MESSAGE (NOUVEAU DESIGN) ---

    // En-tête
    let message = "*🔥 NO NAME CLUB COFFEE — COMMANDE 🔥*\n\n*🛒 DÉTAIL DE LA COMMANDE:*\n\n";

    // Boucle sur les articles
    cart.forEach((item, index) => {
      const product = getProductById(item.productId);

      // On reprend le vrai nom du produit, sans la variante collée dedans
      const cleanName = product
        ? product.name.toUpperCase()
        : item.name.replace(/\n/g, " ").toUpperCase();

      // Ligne 1 : Numéro + Nom du produit
      message += `*${index + 1}. ${cleanName}*\n`;

      // Ligne spéciale si une strain/saveur est sélectionnée
      if (item.variant) {
        message += `• Strain: ${item.variant.toUpperCase()}\n`;
      }

      // Quantité
      message += `• Quantité: ${item.quantity}x ${item.weight}\n`;

      // Prix unitaire
      message += `• Prix unitaire: ${item.unitPrice.toFixed(2)}€\n`;

      // Total de la ligne
      message += `• Total: ${item.totalPrice.toFixed(2)}€\n\n`;
    });

    // Résumé financier
    // Si promo, on affiche le détail, sinon juste le total
    if (discount > 0) {
      message += `Sous-total: ${subTotal.toFixed(2)}€\n`;
      message += `Réduction (${appliedPromo}): -${discount.toFixed(2)}€\n`;
      message += `\n*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    } else {
      message += `*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    }

    // Mode de récupération + adresse + paiement
    message += `\n*📦 MODE DE RÉCUPÉRATION:*\n`;
    if (fulfillmentMethod === "Livraison") {
      message += `🚚 LIVRAISON\n`;
      message += `📍 Adresse: ${deliveryAddress}\n`;
    } else {
      message += `🤝 MEET UP\n`;
      message += `📍 Point de rendez-vous: à convenir\n`;
    }

    message += `\n*💳 PAIEMENT:* ${paymentMethod === "Crypto" ? "₿ CRYPTO" : "💵 ESPÈCE"}`;

    return message;
  }

  // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      // API moderne et sécurisée
      navigator.clipboard.writeText(text).then(
        () => {
          showNotification("✅ Commande copiée ! Colle-la dans le chat.");
          tg.HapticFeedback.notificationOccurred("success");
        },
        (err) => {
          showNotification("❌ Erreur en copiant le message");
        },
      );
    } else {
      // Ancien fallback (pour certains navigateurs)
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Hors de l'écran
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        showNotification("✅ Commande copiée ! Colle-la dans le chat.");
        tg.HapticFeedback.notificationOccurred("success");
      } catch (err) {
        showNotification("❌ Erreur en copiant le message");
      }
      document.body.removeChild(textArea);
    }
  }

  // --- GESTION PAGE AVIS ---

  // 1. Bouton vers le canal Potato
  /*     const btnChannel = document.getElementById('btn-open-channel');
    if (btnChannel) {
        btnChannel.addEventListener('click', function() {
            // Remplace par ton vrai lien de canal
            const channelLink = "https://dympt.org/RetourP420"; 
            
            // Ouvre le lien via Telegram
            tg.openLink(channelLink); 
        });
    }
 */
  // 2. (Optionnel) Zoom sur l'image quand on clique dessus
  window.openImage = function (imgElement) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img-in-modal");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    tg.BackButton.show(); // Affiche le bouton retour natif

    // Clic pour fermer
    modal.onclick = function () {
      modal.style.display = "none";
      tg.BackButton.hide(); // Cache le bouton retour
    };

    // Gestion du bouton retour physique/natif Telegram
    tg.onEvent("backButtonClicked", function () {
      modal.style.display = "none";
      tg.BackButton.hide();
    });
  };
  // --- GESTION DES ÉVÉNEMENTS ---

  // Clics sur la barre de navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      // Les lignes gérant la classe 'active' ont été supprimées
      // showPage(pageId) s'en occupe maintenant.

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-cart") {
        renderCart();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        // On reset TOUS les filtres
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      showPage(pageId);
    });
  });


  // --- FIX MOBILE : boutons d'options du panier ---
  // Certains WebView mobiles Telegram peuvent mal remonter le "click"
  // délégué au body. On écoute donc directement le touchend.
  document.querySelectorAll(".fulfillment-btn").forEach((btn) => {
    btn.addEventListener(
      "touchend",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        fulfillmentMethod = this.dataset.fulfillment;
        syncOrderOptionsUI();

        try {
          tg.HapticFeedback.selectionChanged();
        } catch (_) {}

        if (fulfillmentMethod === "Livraison") {
          const addressInput = document.getElementById("delivery-address");
          if (addressInput) {
            setTimeout(() => {
              addressInput.focus();
            }, 120);
          }
        }
      },
      { passive: false },
    );
  });

  document.querySelectorAll(".payment-btn").forEach((btn) => {
    btn.addEventListener(
      "touchend",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        paymentMethod = this.dataset.method;
        syncOrderOptionsUI();

        try {
          tg.HapticFeedback.selectionChanged();
        } catch (_) {}
      },
      { passive: false },
    );
  });

  // Clics sur le reste de la page
  // Mémorise l'adresse saisie même si l'utilisateur change de page
  document.addEventListener("input", (event) => {
    if (event.target && event.target.id === "delivery-address") {
      deliveryAddress = event.target.value;
    }
  });

  document.body.addEventListener("click", async function (e) {
    const target = e.target;

    if (target.closest("#copy-order-btn")) {
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");

      copyToClipboard(message);

      // --- AJOUT : Inverser les styles des boutons ---
      const copyBtn = document.getElementById("copy-order-btn");
      const contactBtn = document.getElementById("confirm-order-button");

      // Copier devient Gris (secondary)
      copyBtn.classList.remove("main-action-btn");
      copyBtn.classList.add("secondary-action-btn");

      // Contacter devient Rouge (main) et est activé
      contactBtn.classList.remove("secondary-action-btn");
      contactBtn.classList.add("main-action-btn");
      contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
      return; // On s'arrête là
    }

    // Gère l'accordéon sur la page contact
    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      // On ferme les autres items
      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      // On ouvre/ferme l'item cliqué
      accordionItem.classList.toggle("active");
      return; // On arrête là pour ne pas déclencher d'autres clics
    }

    // 1. Clic sur une carte CATÉGORIE
    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      const category = appData.find(
        (c) => c.id === categoryCard.dataset.categoryId,
      );

      if (category.products) {
        // Si la catégorie a des produits directement (pas de sous-catégorie)
        currentView = "simple_products"; // <-- NOUVEL ÉTAT
        currentCategoryId = category.id;
      } else if (category.farms) {
        // Si la catégorie a des farms
        currentView = "farms";
        currentCategoryId = category.id;
      } else {
        return; // Ne fait rien si la catégorie est vide
      }

      // On reset les filtres et on lance la page
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }
    // 2. MODIFIÉ : Clic sur un BOUTON FARM (Anciennement "carte farm")
    const farmBtn = target.closest(".farm-list-btn"); // <-- J'ai changé le nom de la classe ici
    if (farmBtn) {
      if (farmBtn.classList.contains("unclickable")) {
        return;
      }

      currentView = "products";
      currentFarmId = farmBtn.dataset.farmId;

      // On reset les filtres
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";

      renderHomePage();
      return;
    }
    // 3. Clic sur une carte PRODUIT
    const productCard = target.closest(".product-item-card");
    if (productCard) {
      if (productCard.classList.contains("unclickable")) {
        return;
      }
      renderProductPage(productCard.dataset.productId);
      return;
    }

    // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // Clic sur "Appliquer" le code promo
    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase(); // Mets en majuscule

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null; // Reset au cas où
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation(); // Met à jour la page de confirmation
    }

    // Clic sur "Supprimer" le code promo
    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation(); // Met à jour la page
    }

    // Clic sur MEET UP / LIVRAISON
    if (target.closest(".fulfillment-btn")) {
      fulfillmentMethod = target.closest(".fulfillment-btn").dataset.fulfillment;
      syncOrderOptionsUI();

      if (fulfillmentMethod === "Livraison") {
        const addressInput = document.getElementById("delivery-address");
        if (addressInput) setTimeout(() => addressInput.focus(), 80);
      }
      return;
    }

    // Clic sur un bouton de paiement
    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      syncOrderOptionsUI();
      return;
    }

    // Clic sur "Ajouter au panier"
    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");

      // 👇 On lit la strain directement depuis le bouton cliqué
      let selectedVariant = btn.dataset.variant || null;

      // Fallback ancien système select
      if (!selectedVariant) {
        const variantSelect = document.getElementById("product-variant-select");
        if (variantSelect) {
          selectedVariant = variantSelect.value;
        }
      }

      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
        selectedVariant,
      );
    }

    // Clic sur les boutons de quantité
    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    // Clic sur le bouton "fermer"
    if (target.closest(".close-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur "Continuer les achats"
    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur les boutons "retour" (des pages produits, panier...)
    if (target.closest(".back-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur "Commander"
    if (target.closest("#checkout-button")) {
      if (cart.length === 0) {
        showNotification("🛒 Ton panier est vide.");
        return;
      }

      if (!validateOrderOptions()) return;
      renderConfirmation();
    }

    // Clic sur "Modifier"
    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }

    // Clic sur un produit DANS un Pack
    if (target.closest(".pack-item-btn")) {
      const btn = target.closest(".pack-item-btn");
      const targetId = btn.dataset.targetId;

      // On charge la page du produit ciblé
      renderProductPage(targetId);
      return;
    }
    // Clic sur "Confirmer la commande" (VERSION WHATSAPP DIRECT)
    if (target.closest("#confirm-order-button")) {
      if (!validateOrderOptions()) {
        showPage("page-cart");
        syncOrderOptionsUI();
        return;
      }

      // 1. TON NUMÉRO WHATSAPP (Format international sans le +)
      const myPhoneNumber = "33771468334";

      // 2. On prépare le message
      let message = formatOrderMessage();

      // 3. On encode le message pour qu'il passe dans une URL
      const encodedMessage = encodeURIComponent(message);

      // 4. On crée le lien magique WhatsApp
      const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

      // 5. On ouvre WhatsApp
      tg.openLink(whatsappUrl);
    }
  });

  // --- INITIALISATION DE L'APP ---
  function init() {
    setTimeout(() => {
      populateFilters();
      renderHomePage(); // Affiche les catégories au début
      updateCartCount();
      showPage("page-home");
    }, 1500);
  }

  init();
});
