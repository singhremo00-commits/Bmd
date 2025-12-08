import { DictionaryData, LyricsType, PromptTone, PromptLength } from './types';

// Combined dictionary data from the provided comprehensive dataset
export const DICTIONARY_DATA: DictionaryData = {
  "hello": {
    "english": "Hello",
    "hindi": "नमस्ते (Namaste)",
    "bangla": "হ্যালো (Hello) / নমস্কার (Nomoshkar)",
    "bishnupriya": "নমস্কার (Nomoskar)",
    "example": "Hello, how are you today?"
  },
  "water": {
    "english": "Water",
    "hindi": "पानी (Pani)",
    "bangla": "জল (Jol) / পানি (Pani)",
    "bishnupriya": "পানি (Pani)",
    "example": "Please give me a glass of water."
  },
  "to be, to become": {
    "english": "To be, to become",
    "bishnupriya": "অ' (A')",
    "bangla": "হওয়া",
    "hindi": "होना"
  },
  "beginning": {
    "english": "Beginning",
    "bishnupriya": "অ'করা (A'kara)",
    "bangla": "শুরু",
    "hindi": "शुरुआत"
  },
  "negative prefix": {
    "english": "Negative prefix",
    "bishnupriya": "অ (A1+)",
    "bangla": "নেতিবাচক উপসর্গ",
    "hindi": "नकारात्मक उपसर्ग"
  },
  "begun": {
    "english": "Begun",
    "bishnupriya": "অকরা (A'kara)",
    "bangla": "শুরু হয়েছে",
    "hindi": "शुरू हुआ"
  },
  "pleonastic prefix": {
    "english": "Pleonastic prefix",
    "bishnupriya": "অ (A2+)",
    "bangla": "অতি উপসর্গ",
    "hindi": "अतिशय उपसर्ग"
  },
  "beginning (2)": {
    "english": "Beginning",
    "bishnupriya": "অ'করানি (A'karani)",
    "bangla": "শুরুর",
    "hindi": "शुरूआती"
  },
  "vocative particle": {
    "english": "Vocative particle",
    "bishnupriya": "অ (A)",
    "bangla": "সম্বোধন",
    "hindi": "संबोधन"
  },
  "to cause to start": {
    "english": "To cause to start",
    "bishnupriya": "অকরুরা (Akaruwa)",
    "bangla": "শুরু করানো",
    "hindi": "शुरू कराना"
  },
  "profit": {
    "english": "Profit",
    "bishnupriya": "অইচা (Aică)",
    "bangla": "লাভ",
    "hindi": "लाभ"
  },
  "to belch": {
    "english": "To belch",
    "bishnupriya": "অকাটা (Akātā)",
    "bangla": "ঢেঁকুর তোলা",
    "hindi": "डकार लेना"
  },
  "restless, fickle": {
    "english": "Restless, fickle",
    "bishnupriya": "অইচ্চা (Aiccă)",
    "bangla": "অস্থির",
    "hindi": "चंचल"
  },
  "belching": {
    "english": "Belching",
    "bishnupriya": "অকাটানি (Akatāni)",
    "bangla": "ঢেঁকুর",
    "hindi": "डकार"
  },
  "amishap, an accident": {
    "english": "Amishap, an accident",
    "bishnupriya": "অইথি-তামথি (Aithi-tămithi)",
    "bangla": "দুর্ঘটনা",
    "hindi": "दुर्घटना"
  },
  "unnecessarily": {
    "english": "Unnecessarily",
    "bishnupriya": "অকারণে (Akarane)",
    "bangla": "অনাবশ্যকভাবে",
    "hindi": "अनावश्यक रूप से"
  },
  "positive or negative": {
    "english": "Positive or negative",
    "bishnupriya": "অইবা-নাইবা (Aiba-näibă)",
    "bangla": "হ্যাঁ বা না",
    "hindi": "हाँ या नहीं"
  },
  "deficiency": {
    "english": "Deficiency",
    "bishnupriya": "অকুলান (Akulan)",
    "bangla": "অভাব",
    "hindi": "कमी"
  },
  "as it happened, should": {
    "english": "As it happened, should",
    "bishnupriya": "অইলো (Ailo)",
    "bangla": "হয়েছে",
    "hindi": "होना चाहिए"
  },
  "shoreless, boundless": {
    "english": "Shoreless, boundless",
    "bishnupriya": "অকূল (Akül)",
    "bangla": "অসীম",
    "hindi": "असीम"
  },
  "much": {
    "english": "Much",
    "bishnupriya": "অকখাক (Akkhak)",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "accordingly, much": {
    "english": "Accordingly, much",
    "bishnupriya": "অকথাকপা (Akkhākpā)",
    "bangla": "অনুযায়ী",
    "hindi": "बहुत"
  },
  "efficient": {
    "english": "Efficient",
    "bishnupriya": "অ'ক (A'k)",
    "bangla": "দক্ষ",
    "hindi": "दक्ष"
  },
  "filth": {
    "english": "Filth",
    "bishnupriya": "অকচাক (Akcak)",
    "bangla": "ময়লা",
    "hindi": "गंदगी"
  },
  "to begin, to start": {
    "english": "To begin, to start",
    "bishnupriya": "অ'কর (A'kar)",
    "bangla": "শুরু করা",
    "hindi": "शुरू करना"
  },
  "filthy": {
    "english": "Filthy",
    "bishnupriya": "অকচাকথক (Akcakthak)",
    "bangla": "অপরিষ্কার",
    "hindi": "गंदा"
  },
  "meeting": {
    "english": "Meeting",
    "bishnupriya": "অকনা (Akna)",
    "bangla": "সাক্ষাৎ",
    "hindi": "मुलाकात"
  },
  "a wrapper for babies": {
    "english": "A wrapper for babies",
    "bishnupriya": "অকলাক (Aklāk)",
    "bangla": "শিশুর কাপড়",
    "hindi": "बच्चे का कपड़ा"
  },
  "excessively": {
    "english": "Excessively",
    "bishnupriya": "অকলৌকরে (Aklaukare)",
    "bangla": "অত্যধিক",
    "hindi": "अত্যधिक"
  },
  "filled, congested": {
    "english": "Filled, congested",
    "bishnupriya": "অঙথিল (Anthil)",
    "bangla": "ভরা, ঠাসা",
    "hindi": "भरा, ठसाठस"
  },
  "letter": {
    "english": "Letter",
    "bishnupriya": "অক্ষর (Akkhar)",
    "bangla": "অক্ষর",
    "hindi": "अक्षर"
  },
  "uncountable, many": {
    "english": "Uncountable, many",
    "bishnupriya": "অগণ্য (Aganya)",
    "bangla": "অনেক",
    "hindi": "अসংখ্য"
  },
  "partner": {
    "english": "Partner",
    "bishnupriya": "অংশীদার (Ansidar)",
    "bangla": "সহযোগী",
    "hindi": "साथी"
  },
  "helpless": {
    "english": "Helpless",
    "bishnupriya": "অগতি (Agati)",
    "bangla": "অসহায়",
    "hindi": "असहाय"
  },
  "unknown": {
    "english": "Unknown",
    "bishnupriya": "অচিন (Acin)",
    "bangla": "অজানা",
    "hindi": "अज्ञात"
  },
  "bottomless, much": {
    "english": "Bottomless, much",
    "bishnupriya": "অগাধ (Agadh)",
    "bangla": "অসীম",
    "hindi": "अथाह"
  },
  "unknown (2)": {
    "english": "Unknown",
    "bishnupriya": "অচিনা (Acină)",
    "bangla": "অজানা",
    "hindi": "अज्ञात"
  },
  "invisible": {
    "english": "Invisible",
    "bishnupriya": "অগোচর (Agocar)",
    "bangla": "অদৃশ্য",
    "hindi": "अदृश्य"
  },
  "unacceptable": {
    "english": "Unacceptable",
    "bishnupriya": "অগ্রাহ্য (Agrājya)",
    "bangla": "গ্রহণযোগ্য নয়",
    "hindi": "अस्वीकार्य"
  },
  "unconscious": {
    "english": "Unconscious",
    "bishnupriya": "অচেতন (Acetan)",
    "bangla": "অচেতন",
    "hindi": "बेहोश"
  },
  "terrific": {
    "english": "Terrific",
    "bishnupriya": "অঘোর (Aghor)",
    "bangla": "ভয়ঙ্কর",
    "hindi": "भयानक"
  },
  "to be, to happen": {
    "english": "To be, to happen",
    "bishnupriya": "অছ (Ach)",
    "bangla": "হওয়া",
    "hindi": "होना"
  },
  "an indian month": {
    "english": "An Indian month",
    "bishnupriya": "অঘ্রাণ (Aghran)",
    "bangla": "হিন্দু মাস",
    "hindi": "हिन्दू महीना"
  },
  "filled up, congested": {
    "english": "Filled up, congested",
    "bishnupriya": "অজম (Ajam)",
    "bangla": "ঠাসা",
    "hindi": "ठसाठस"
  },
  "cheap": {
    "english": "Cheap",
    "bishnupriya": "অ'ঙ (A'n)",
    "bangla": "সস্তা",
    "hindi": "सस्ता"
  },
  "teacher, sir": {
    "english": "Teacher, Sir",
    "bishnupriya": "অজা (Ajā)",
    "bangla": "শিক্ষক",
    "hindi": "गुरु"
  },
  "cheap (2)": {
    "english": "Cheap",
    "bishnupriya": "অ'ঙপা (A'npa)",
    "bangla": "সস্তা",
    "hindi": "सस्ता"
  },
  "python": {
    "english": "Python",
    "bishnupriya": "অজাগর (Ajägar)",
    "bangla": "অজগর",
    "hindi": "अजगर"
  },
  "body, limb": {
    "english": "Body, limb",
    "bishnupriya": "অঙ্গ (A'nga)",
    "bangla": "শরীর",
    "hindi": "अंग"
  },
  "unknown (3)": {
    "english": "Unknown",
    "bishnupriya": "অজানা (Ajānā)",
    "bangla": "অজানা",
    "hindi": "अज्ञात"
  },
  "part, share": {
    "english": "Part, share",
    "bishnupriya": "অংশ (Ansa)",
    "bangla": "অংশ",
    "hindi": "हिस्सा"
  },
  "great teachers": {
    "english": "Great teachers",
    "bishnupriya": "অজারেল (Ajarel)",
    "bangla": "শ্রেষ্ঠ শিক্ষক",
    "hindi": "महान गुरु"
  },
  "plea": {
    "english": "Plea",
    "bishnupriya": "অজুহাত (Ajuhat)",
    "bangla": "অজুহাত",
    "hindi": "बहाना"
  },
  "offering": {
    "english": "Offering",
    "bishnupriya": "অঞ্জলি (Anjali)",
    "bangla": "অঞ্জলি",
    "hindi": "अंजलि"
  },
  "lip": {
    "english": "Lip",
    "bishnupriya": "অট (At 1)",
    "bangla": "ঠোঁট",
    "hindi": "होंठ"
  },
  "speechless": {
    "english": "Speechless",
    "bishnupriya": "অটমুড়া (Atmură)",
    "bangla": "নিঃশব্দ",
    "hindi": "निशब्द"
  },
  "japa flower": {
    "english": "Japa flower",
    "bishnupriya": "অট (At 2)",
    "bangla": "জবা ফুল",
    "hindi": "जवा फूल"
  },
  "suffix in pleonastic sense": {
    "english": "Suffix in pleonastic sense",
    "bishnupriya": "অটি (Ati)",
    "bangla": "অতিরিক্ত প্রত্যয়",
    "hindi": "अतिशय प्रत्यय"
  },
  "one having a big lip": {
    "english": "One having a big lip",
    "bishnupriya": "অটিয়া (A'tiya)",
    "bangla": "বড় ঠোঁটযুক্ত",
    "hindi": "बड़े होंठ वाला"
  },
  "to raise": {
    "english": "To raise",
    "bishnupriya": "অত্ (At)",
    "bangla": "তোলা/উত্তোলন করা",
    "hindi": "उठाना"
  },
  "boundary": {
    "english": "Boundary",
    "bishnupriya": "অত্ (At)",
    "bangla": "সীমা",
    "hindi": "सीमा"
  },
  "so much": {
    "english": "So much",
    "bishnupriya": "অতো (Ato)",
    "bangla": "এত বেশি",
    "hindi": "इतना अधिक"
  },
  "therefore": {
    "english": "Therefore",
    "bishnupriya": "অতএব (Ataeba)",
    "bangla": "সুতরাং",
    "hindi": "इसलिए"
  },
  "to raise (2)": {
    "english": "To raise",
    "bishnupriya": "অতা (Ată)",
    "bangla": "তোলা",
    "hindi": "उठाना"
  },
  "much (2)": {
    "english": "Much",
    "bishnupriya": "অতি (Ati)",
    "bangla": "অত্যন্ত",
    "hindi": "बहुत"
  },
  "guest": {
    "english": "Guest",
    "bishnupriya": "অতিত (Atit)",
    "bangla": "অতিথি",
    "hindi": "अतिथि"
  },
  "so much (2)": {
    "english": "So much",
    "bishnupriya": "অত্তামান (Attāmān)",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "very much": {
    "english": "Very much",
    "bishnupriya": "অত্যন্ত (Atyanta)",
    "bangla": "অত্যন্ত",
    "hindi": "अत्यंत"
  },
  "oppression, evil conduct": {
    "english": "Oppression, evil conduct",
    "bishnupriya": "অত্যাচার (Atyācār)",
    "bangla": "অত্যাচার",
    "hindi": "अত্যাচার"
  },
  "yet": {
    "english": "Yet",
    "bishnupriya": "অথচ (Athaca)",
    "bangla": "তবুও",
    "hindi": "फिर भी"
  },
  "exchange, interchange": {
    "english": "Exchange, interchange",
    "bishnupriya": "অদল-বদল (Adal-Badal)",
    "bangla": "বিনিময়",
    "hindi": "अदला-बदली"
  },
  "fate": {
    "english": "Fate",
    "bishnupriya": "অদৃষ্ট (Adrista)",
    "bangla": "ভাগ্য",
    "hindi": "भाग्य"
  },
  "boundary, strength": {
    "english": "Boundary, Strength",
    "bishnupriya": "অ'ন্দ, অদ্ধ (Adda, Addha)",
    "bangla": "সীমা, শক্তি",
    "hindi": "सीमा, शक्ति"
  },
  "now, today": {
    "english": "Now, Today",
    "bishnupriya": "অদ্য (Adya)",
    "bangla": "আজ",
    "hindi": "आज"
  },
  "even now": {
    "english": "Even now",
    "bishnupriya": "অদ্যাপিও (Adyāpio)",
    "bangla": "এখনও",
    "hindi": "अभी भी"
  },
  "up till now": {
    "english": "Up till now",
    "bishnupriya": "অদ্যাবধি (Adyabadhi)",
    "bangla": "এখন পর্যন্ত",
    "hindi": "अब तक"
  },
  "conference": {
    "english": "Conference",
    "bishnupriya": "অধিবেশন (Adhibeśan)",
    "bangla": "সম্মেলন",
    "hindi": "सम्मेलन"
  },
  "subordinate, under jurisdiction": {
    "english": "Subordinate, Under jurisdiction",
    "bishnupriya": "অধীন (Adhin)",
    "bangla": "অধীন",
    "hindi": "अधीन"
  },
  "chapter": {
    "english": "Chapter",
    "bishnupriya": "অধ্যায় (Adhyay)",
    "bangla": "অধ্যায়",
    "hindi": "अध्याय"
  },
  "to melt": {
    "english": "To melt",
    "bishnupriya": "অনা (Ana)",
    "bangla": "গলানো",
    "hindi": "पिघलना"
  },
  "happening, being": {
    "english": "Happening, being",
    "bishnupriya": "অ'না (Ana)",
    "bangla": "ঘটছে/হওয়া",
    "hindi": "होना/हो रहा है"
  },
  "dirty": {
    "english": "Dirty",
    "bishnupriya": "অনাচার (Anācār)",
    "bangla": "অপরাধ/অপরিষ্কার",
    "hindi": "अনাচার/गंदा"
  },
  "fruitless": {
    "english": "Fruitless",
    "bishnupriya": "অনাহক (Anāhak)",
    "bangla": "অফল",
    "hindi": "निष्फल"
  },
  "unavoidable": {
    "english": "Unavoidable",
    "bishnupriya": "অনিবার্য্য (Anibārjā)",
    "bangla": "অনিবার্য",
    "hindi": "अनिवार्य"
  },
  "harm": {
    "english": "Harm",
    "bishnupriya": "অনিষ্ট (Anista)",
    "bangla": "ক্ষতি",
    "hindi": "हानि"
  },
  "subordinate, docile": {
    "english": "Subordinate, docile",
    "bishnupriya": "অনুগত (Anugata)",
    "bangla": "অনুগত",
    "hindi": "आज्ञाकारी"
  },
  "translation": {
    "english": "Translation",
    "bishnupriya": "অনুবাদ (Anubad)",
    "bangla": "অনুবাদ",
    "hindi": "अनुवाद"
  },
  "probability, inference": {
    "english": "Probability, inference",
    "bishnupriya": "অনুমান (Anuman)",
    "bangla": "সম্ভাবনা/অনুমান",
    "hindi": "संभावना/अनुमान"
  },
  "affection, attraction": {
    "english": "Affection, attraction",
    "bishnupriya": "অনুরাগ (Anurag)",
    "bangla": "ভালবাসা",
    "hindi": "अनुराग"
  },
  "request": {
    "english": "Request",
    "bishnupriya": "অনুরোধ (Anurodh)",
    "bangla": "অনুরোধ",
    "hindi": "अनुरोध"
  },
  "many": {
    "english": "Many",
    "bishnupriya": "অনেক (Anek)",
    "bangla": "অনেক",
    "hindi": "अनेक"
  },
  "limit, end": {
    "english": "Limit, end",
    "bishnupriya": "অন্ত (Anta)",
    "bangla": "শেষ",
    "hindi": "अंत"
  },
  "at least": {
    "english": "At least",
    "bishnupriya": "অন্ততঃ (Antatah)",
    "bangla": "কমপক্ষে",
    "hindi": "कम से कम"
  },
  "heart": {
    "english": "Heart",
    "bishnupriya": "অন্তর (Antar)",
    "bangla": "হৃদয়",
    "hindi": "हृदय"
  },
  "intimate": {
    "english": "Intimate",
    "bishnupriya": "অন্তরঙ্গ (Antaranga)",
    "bangla": "অন্তরঙ্গ",
    "hindi": "अंतरंग"
  },
  "disappearance": {
    "english": "Disappearance",
    "bishnupriya": "অন্তর্ধান (Antardhan)",
    "bangla": "অন্তর্ধান",
    "hindi": "अंतर्धान"
  },
  "indwelling": {
    "english": "Indwelling",
    "bishnupriya": "অন্তর্যামী (Antarjami)",
    "bangla": "অন্তর্যামী",
    "hindi": "अंतर्यामी"
  },
  "last, last moment": {
    "english": "Last, last moment",
    "bishnupriya": "অন্তিম (Antim)",
    "bangla": "শেষ/চূড়ান্ত",
    "hindi": "अंतिम/अंतिम क्षण"
  },
  "vanity": {
    "english": "Vanity",
    "bishnupriya": "অন্ত (Antu)",
    "bangla": "অহংকার",
    "hindi": "अहंकार"
  },
  "queer": {
    "english": "Queer",
    "bishnupriya": "অস্থক (Anthak)",
    "bangla": "বিচিত্র",
    "hindi": "विचित्र"
  },
  "inner apartment": {
    "english": "Inner apartment",
    "bishnupriya": "অন্দর (Andar)",
    "bangla": "অন্দর",
    "hindi": "अंदर"
  },
  "blind, utterly ignorant": {
    "english": "Blind, utterly ignorant",
    "bishnupriya": "অন্ধ (Andha)",
    "bangla": "অন্ধ",
    "hindi": "अंधा"
  },
  "darkness": {
    "english": "Darkness",
    "bishnupriya": "অন্ধকার (Andhakar)",
    "bangla": "অন্ধকার",
    "hindi": "अंधकार"
  },
  "others": {
    "english": "Others",
    "bishnupriya": "অন্যান্য (Anyānya)",
    "bangla": "অন্যান্য",
    "hindi": "अन्य"
  },
  "injustice": {
    "english": "Injustice",
    "bishnupriya": "অন্যায় (Anyāy)",
    "bangla": "অন্যায়",
    "hindi": "अन्याय"
  },
  "muddy place": {
    "english": "Muddy place",
    "bishnupriya": "অপ (Ap)",
    "bangla": "কাদাযুক্ত স্থান",
    "hindi": "कीचड़ वाला स्थान"
  },
  "insulted": {
    "english": "Insulted",
    "bishnupriya": "অপদস্ত (Apadasta)",
    "bangla": "অপমানিত",
    "hindi": "अपमानित"
  },
  "wrongful spending": {
    "english": "Wrongful spending",
    "bishnupriya": "অপব্যয় (Apabyay)",
    "bangla": "অপচয়",
    "hindi": "अपव्यय"
  },
  "insult": {
    "english": "Insult",
    "bishnupriya": "অপমান (Apamān)",
    "bangla": "অপমান",
    "hindi": "अपमान"
  },
  "guilt, fault": {
    "english": "Guilt, fault",
    "bishnupriya": "অপরাধ (Aparadh)",
    "bangla": "অপরাধ",
    "hindi": "अपराध"
  },
  "guilty": {
    "english": "Guilty",
    "bishnupriya": "অপরাধী (Aparadhi)",
    "bangla": "অপরাধी",
    "hindi": "अपराधी"
  },
  "wonderful": {
    "english": "Wonderful",
    "bishnupriya": "অপরূপ (Aparûp)",
    "bangla": "অপরূপ",
    "hindi": "अद्भुत"
  },
  "guest (2)": {
    "english": "Guest",
    "bishnupriya": "অপরবী (Aparbi)",
    "bangla": "অতিথি",
    "hindi": "अतिथि"
  },
  "endless": {
    "english": "Endless",
    "bishnupriya": "অপার (Apār)",
    "bangla": "অসীম",
    "hindi": "अपार"
  },
  "incomplete": {
    "english": "Incomplete",
    "bishnupriya": "অপূরণ (Apuran)",
    "bangla": "অসম্পূর্ণ",
    "hindi": "अपूर्ण"
  },
  "nymph": {
    "english": "Nymph",
    "bishnupriya": "অপ্সরা (Apsara)",
    "bangla": "অপ্সরা",
    "hindi": "अप्सरा"
  },
  "incarnation (of god)": {
    "english": "Incarnation (of God)",
    "bishnupriya": "অবতার (Abatär)",
    "bangla": "অবতার",
    "hindi": "अवतार"
  },
  "limb, appearance": {
    "english": "Limb, appearance",
    "bishnupriya": "অবয়ব (Abayab)",
    "bangla": "অঙ্গ/চেহারা",
    "hindi": "अंग/रूप"
  },
  "certainly": {
    "english": "Certainly",
    "bishnupriya": "অবশ্য (Abasya)",
    "bangla": "নিশ্চিতভাবেই",
    "hindi": "निश्चित रूप से"
  },
  "situation": {
    "english": "Situation",
    "bishnupriya": "অবস্থা (Abastha)",
    "bangla": "অবস্থা",
    "hindi": "स्थिति"
  },
  "negligence": {
    "english": "Negligence",
    "bishnupriya": "অবহেলা (Abahela)",
    "bangla": "অবহেলা",
    "hindi": "उपेक्षा"
  },
  "speechless, astonished": {
    "english": "Speechless, astonished",
    "bishnupriya": "অবাক (Abāk)",
    "bangla": "অবাক",
    "hindi": "हैरान/निঃशब्द"
  },
  "exact": {
    "english": "Exact",
    "bishnupriya": "অবিকল (Abikal)",
    "bangla": "হুবহু",
    "hindi": "हूबहू/सटीक"
  },
  "distrust": {
    "english": "Distrust",
    "bishnupriya": "অবিশ্বাস (Abiśvās)",
    "bangla": "অবিশ্বাস",
    "hindi": "अविश्वास"
  },
  "foolish, unreasonable": {
    "english": "Foolish, unreasonable",
    "bishnupriya": "অবুঝ (Abujh)",
    "bangla": "বোকা",
    "hindi": "मूर्ख"
  },
  "leisure": {
    "english": "Leisure",
    "bishnupriya": "অবসর (Absar)",
    "bangla": "অবসর",
    "hindi": "अवकाश"
  },
  "unfortunate": {
    "english": "Unfortunate",
    "bishnupriya": "অভাগা (Abhāgā)",
    "bangla": "অভাগা",
    "hindi": "अभागा"
  },
  "want, need": {
    "english": "Want, need",
    "bishnupriya": "অভাব (Abhab)",
    "bangla": "অভাব",
    "hindi": "आवश्यकता/कमी"
  },
  "dictionary": {
    "english": "Dictionary",
    "bishnupriya": "অভিধান (Abhidhan)",
    "bangla": "অভিধান",
    "hindi": "शब्दकोश"
  },
  "congratulation": {
    "english": "Congratulation",
    "bishnupriya": "অভিনন্দন (Abhinandan)",
    "bangla": "অভিনন্দन",
    "hindi": "अभिनंदन"
  },
  "guardian": {
    "english": "Guardian",
    "bishnupriya": "অভিভাবক (Abhibhābak)",
    "bangla": "অভিভাবক",
    "hindi": "अभिभावक"
  },
  "practice": {
    "english": "Practice",
    "bishnupriya": "অভ্যাস (Abhyas)",
    "bangla": "অনুশীলন",
    "hindi": "अभ्यास"
  },
  "unholy, evil": {
    "english": "Unholy, evil",
    "bishnupriya": "অমঙ্গল (Amangal)",
    "bangla": "অশুভ",
    "hindi": "अमंगल"
  },
  "deathless": {
    "english": "Deathless",
    "bishnupriya": "অমর (Amar)",
    "bangla": "অমর",
    "hindi": "अमर"
  },
  "so much (3)": {
    "english": "So much",
    "bishnupriya": "অমাটিক (Amatik)",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "dishonour": {
    "english": "Dishonour",
    "bishnupriya": "অমান্য (Amanya)",
    "bangla": "অপমান",
    "hindi": "अपमान"
  },
  "discord, dissimilarity": {
    "english": "Discord, dissimilarity",
    "bishnupriya": "অমিল (Amil)",
    "bangla": "অমিল",
    "hindi": "असंगति/भिन्नता"
  },
  "invaluable": {
    "english": "Invaluable",
    "bishnupriya": "অমূল্য (Amūlya)",
    "bangla": "অমূল্য",
    "hindi": "अमूल्य"
  },
  "jaundice": {
    "english": "Jaundice",
    "bishnupriya": "অলমি (Almi)",
    "bangla": "জন্ডিস",
    "hindi": "पीलिया"
  },
  "innumerable": {
    "english": "Innumerable",
    "bishnupriya": "অসংখ্য (Asankhya)",
    "bangla": "অসংখ্য",
    "hindi": "অসংখ্য"
  },
  "uncivilised": {
    "english": "Uncivilised",
    "bishnupriya": "অসভ্য (Asabhya)",
    "bangla": "অসভ্য",
    "hindi": "असभ्य"
  },
  "untime": {
    "english": "Untime",
    "bishnupriya": "অসময় (Asamay)",
    "bangla": "অসময়",
    "hindi": "अनुचित समय"
  },
  "incomplete (2)": {
    "english": "Incomplete",
    "bishnupriya": "অসম্পূর্ণ (Asampūrna)",
    "bangla": "অসম্পূর্ণ",
    "hindi": "अपूर्ण"
  },
  "impossible": {
    "english": "Impossible",
    "bishnupriya": "অসম্ভব (Asambhab)",
    "bangla": "অসম্ভব",
    "hindi": "असंभव"
  },
  "intolerable": {
    "english": "Intolerable",
    "bishnupriya": "অসহ্য (Asajya)",
    "bangla": "অসহ্য",
    "hindi": "असह्य"
  },
  "sword": {
    "english": "Sword",
    "bishnupriya": "অসি (Asi)",
    "bangla": "তলোয়ার",
    "hindi": "तलवार"
  },
  "illness": {
    "english": "Illness",
    "bishnupriya": "অসুখ (Asukh)",
    "bangla": "অসুখ",
    "hindi": "बीमारी"
  },
  "inconvenience": {
    "english": "Inconvenience",
    "bishnupriya": "অসুবিধা (Asubidhā)",
    "bangla": "অসুবিধা",
    "hindi": "असुविधा"
  },
  "demon": {
    "english": "Demon",
    "bishnupriya": "অসুর (Asur)",
    "bangla": "অসুর",
    "hindi": "असुर"
  },
  "non-violence": {
    "english": "Non-violence",
    "bishnupriya": "অহিংসা (Ahinsa)",
    "bangla": "অহিংসা",
    "hindi": "अहिंसा"
  },
  "to come": {
    "english": "To come",
    "bishnupriya": "আ (A)",
    "bangla": "আসা",
    "hindi": "आना"
  },
  "law, regulation": {
    "english": "Law, regulation",
    "bishnupriya": "আইন (Ain)",
    "bangla": "আইন",
    "hindi": "कानून"
  },
  "courtesy": {
    "english": "Courtesy",
    "bishnupriya": "আইস-বইস (Aisa baisa)",
    "bangla": "ভদ্রতা",
    "hindi": "शिष्टाचार"
  },
  "tasteful": {
    "english": "Tasteful",
    "bishnupriya": "আউ (Au)",
    "bangla": "সুস্বাদু",
    "hindi": "स्वादिष्ट"
  },
  "lake": {
    "english": "Lake",
    "bishnupriya": "আউর (Ä'ûr)",
    "bangla": "হ্রদ",
    "hindi": "झील"
  },
  "concealment, shelter": {
    "english": "Concealment, shelter",
    "bishnupriya": "আউড় (Aur)",
    "bangla": "আড়াল",
    "hindi": "আশ্রয়"
  },
  "one": {
    "english": "One",
    "bishnupriya": "আক (Āk)",
    "bangla": "এক",
    "hindi": "एक"
  },
  "gap": {
    "english": "Gap",
    "bishnupriya": "আক (Āk)",
    "bangla": "ফাঁক",
    "hindi": "अंतर/खाली"
  },
  "excess": {
    "english": "Excess",
    "bishnupriya": "আ'ক (Ak)",
    "bangla": "অতিরিক্ত",
    "hindi": "अधिकता"
  },
  "attraction": {
    "english": "Attraction",
    "bishnupriya": "আকর্ষণ (Akarsan)",
    "bangla": "আকর্ষণ",
    "hindi": "आकर्षण"
  },
  "desire": {
    "english": "Desire",
    "bishnupriya": "আকাঙক্ষা (Akańkhā)",
    "bangla": "ইচ্ছা",
    "hindi": "इच्छा"
  },
  "too much": {
    "english": "Too much",
    "bishnupriya": "আকাস্থি (Akanthi)",
    "bangla": "অতিরিক্ত",
    "hindi": "बहुत ज्यादा"
  },
  "obscene": {
    "english": "Obscene",
    "bishnupriya": "আকাম্পা (Ākampa)",
    "bangla": "অশ্লীল",
    "hindi": "अश्लील"
  },
  "sky": {
    "english": "Sky",
    "bishnupriya": "আকাশ (Ākās)",
    "bangla": "আকাশ",
    "hindi": "आकाश"
  },
  "fine, small": {
    "english": "Fine, small",
    "bishnupriya": "আকুপ্পা (Ākuppa)",
    "bangla": "ছোট/সূক্ষ্ম",
    "hindi": "छोटा/सूक्ष्म"
  },
  "opportunity": {
    "english": "Opportunity",
    "bishnupriya": "আকেৎপা (Aketpā)",
    "bangla": "সুযোগ",
    "hindi": "अवसर"
  },
  "intelligence, sense": {
    "english": "Intelligence, sense",
    "bishnupriya": "আক্কল (Akkal)",
    "bangla": "বুদ্ধি",
    "hindi": "अक्ल"
  },
  "sneeze": {
    "english": "Sneeze",
    "bishnupriya": "আ'কছি (Akchi)",
    "bangla": "হাঁচি",
    "hindi": "छींक"
  },
  "suddenly": {
    "english": "Suddenly",
    "bishnupriya": "আকতা (Aktā)",
    "bangla": "হঠাৎ",
    "hindi": "अचानक"
  },
  "once": {
    "english": "Once",
    "bishnupriya": "আকফির (Akphir)",
    "bangla": "একবার",
    "hindi": "एक बार"
  },
  "attention": {
    "english": "Attention",
    "bishnupriya": "আকমুড়া (Akmură)",
    "bangla": "মনোসংযোগ",
    "hindi": "ध्यान"
  },
  "attack": {
    "english": "Attack",
    "bishnupriya": "আক্রমণ (Akraman)",
    "bangla": "আক্রমণ",
    "hindi": "हमला"
  },
  "another": {
    "english": "Another",
    "bishnupriya": "আরাক (Ārāk)",
    "bangla": "আরেক",
    "hindi": "दूसरा"
  },
  "gate": {
    "english": "Gate",
    "bishnupriya": "আ'রাঙ (A'rân)",
    "bangla": "গেট",
    "hindi": "द्वार"
  },
  "prayer": {
    "english": "Prayer",
    "bishnupriya": "আরাধনা (Aradhana)",
    "bangla": "প্রার্থনা",
    "hindi": "प्रार्थना"
  },
  "rest": {
    "english": "Rest",
    "bishnupriya": "আরাম (Ārām)",
    "bangla": "বিশ্রাম",
    "hindi": "आराम"
  },
  "petition": {
    "english": "Petition",
    "bishnupriya": "আর্জি (Arji)",
    "bangla": "আবেদন",
    "hindi": "याचिका"
  },
  "bone": {
    "english": "Bone",
    "bishnupriya": "আ'ড় (A'r)",
    "bangla": "হাড়",
    "hindi": "हड्डी"
  },
  "two and a half": {
    "english": "Two and a half",
    "bishnupriya": "আড়াই (Ārãi)",
    "bangla": "দেড়/আড়াই",
    "hindi": "ढाई"
  },
  "concealment, screen": {
    "english": "Concealment, screen",
    "bishnupriya": "আড়াল (Aral)",
    "bangla": "আড়াল",
    "hindi": "पर्दा"
  },
  "lean and thin": {
    "english": "Lean and thin",
    "bishnupriya": "আজুবা (Āruwa)",
    "bangla": "রোগা/দুর্বল",
    "hindi": "दुबला/पतला"
  },
  "blunt": {
    "english": "Blunt",
    "bishnupriya": "আড়ুৱা (Aruwa)",
    "bangla": "ভোঁতা",
    "hindi": "कुंद"
  },
  "return": {
    "english": "Return",
    "bishnupriya": "আ'ল (A'l)",
    "bangla": "ফিরে আসা",
    "hindi": "वापसी"
  },
  "ring": {
    "english": "Ring",
    "bishnupriya": "আলা (Alā)",
    "bangla": "আংটি",
    "hindi": "अंगूठी"
  },
  "separate": {
    "english": "Separate",
    "bishnupriya": "আলগা (Algā)",
    "bangla": "আলাদা করা",
    "hindi": "अलग करना"
  },
  "different, separate": {
    "english": "Different, separate",
    "bishnupriya": "আলাদা (Ālādā)",
    "bangla": "ভিন্ন/আলাদা",
    "hindi": "अलग/अलग"
  },
  "conversation, proposal": {
    "english": "Conversation, proposal",
    "bishnupriya": "আলাপ (Ālāp)",
    "bangla": "আলাপ/প্রস্তাব",
    "hindi": "बातचीत/प्रस्ताव"
  },
  "laziness": {
    "english": "Laziness",
    "bishnupriya": "আলি (Ali)",
    "bangla": "অলসতা",
    "hindi": "आलस्य"
  },
  "potato": {
    "english": "Potato",
    "bishnupriya": "আলু (A'lu)",
    "bangla": "আলু",
    "hindi": "आलू"
  },
  "cultivator": {
    "english": "Cultivator",
    "bishnupriya": "আ'লুৱা (A'luwa)",
    "bangla": "চাষী",
    "hindi": "किसान"
  },
  "discussion": {
    "english": "Discussion",
    "bishnupriya": "আলোচনা (A'locană)",
    "bangla": "আলোচনা",
    "hindi": "विचार-विमर्श"
  },
  "tar, pitch": {
    "english": "Tar, Pitch",
    "bishnupriya": "আলকাতরা (Alkātrā)",
    "bangla": "ট্যার/পিচ",
    "hindi": "तार/पिच"
  },
  "exactly": {
    "english": "Exactly",
    "bishnupriya": "আতাকনা-করে (Ātāknā-kare)",
    "bangla": "ঠিকঠিক",
    "hindi": "बिलकुल ठीक"
  },
  "rare": {
    "english": "Rare",
    "bishnupriya": "আতানপা (Ātānpā)",
    "bangla": "বিরল",
    "hindi": "दुर्लभ"
  },
  "lame, deformed": {
    "english": "Lame, deformed",
    "bishnupriya": "আতুর (Ātur)",
    "bangla": "খোঁড়া",
    "hindi": "लंगड़ा"
  },
  "soul": {
    "english": "Soul",
    "bishnupriya": "আত্তমা (Āttamā)",
    "bangla": "আত্মা",
    "hindi": "आत्मा"
  },
  "perfume, attar": {
    "english": "Perfume, attar",
    "bishnupriya": "আত্তর (Āttar)",
    "bangla": "আতর",
    "hindi": "इत्र"
  },
  "elephant": {
    "english": "Elephant",
    "bishnupriya": "আত্তি (Ātti)",
    "bangla": "হাতি",
    "hindi": "हाथी"
  },
  "hammer": {
    "english": "Hammer",
    "bishnupriya": "আত্তুরা (Ātturā)",
    "bangla": "হাতুড়ি",
    "hindi": "हथौड़ा"
  },
  "control, restraint": {
    "english": "Control, restraint",
    "bishnupriya": "আদং (Ādaṅ)",
    "bangla": "নিয়ন্ত্রণ",
    "hindi": "नियंत्रण"
  },
  "genuine, real": {
    "english": "Genuine, real",
    "bishnupriya": "আদত (Ādat)",
    "bangla": "আসল",
    "hindi": "असली"
  },
  "ginger": {
    "english": "Ginger",
    "bishnupriya": "আদা (Ādā)",
    "bangla": "আদা",
    "hindi": "अदरक"
  },
  "court of justice": {
    "english": "Court of justice",
    "bishnupriya": "আদালত (Ādālat)",
    "bangla": "আদালত",
    "hindi": "अदालत"
  },
  "half": {
    "english": "Half",
    "bishnupriya": "আধা (Ādhā)",
    "bangla": "আধা",
    "hindi": "आधा"
  },
  "spectacles": {
    "english": "Spectacles",
    "bishnupriya": "আনাক (Ānāk)",
    "bangla": "চশমা",
    "hindi": "चश्मा"
  },
  "coming": {
    "english": "Coming",
    "bishnupriya": "আনা (Ānā)",
    "bangla": "আসা",
    "hindi": "आना"
  },
  "moustache": {
    "english": "Moustache",
    "bishnupriya": "কই (Kai)",
    "bangla": "গোঁফ",
    "hindi": "मूँछ"
  },
  "how much?": {
    "english": "How much?",
    "bishnupriya": "কই (Kai)",
    "bangla": "কত?",
    "hindi": "कितना?"
  },
  "round": {
    "english": "Round",
    "bishnupriya": "কাই (Kái)",
    "bangla": "গোল",
    "hindi": "गोल"
  },
  "corner": {
    "english": "Corner",
    "bishnupriya": "কইনা (Kainā)",
    "bangla": "কোণ",
    "hindi": "कोना"
  },
  "bride": {
    "english": "Bride",
    "bishnupriya": "কইনা / কা- (Kainā / Kā-)",
    "bangla": "কন্যা / বউ",
    "hindi": "কন্যা / दुल्हन"
  },
  "bent, curved, shrunk": {
    "english": "Bent, curved, shrunk",
    "bishnupriya": "কাকারা (Kākārā)",
    "bangla": "বেঁকা",
    "hindi": "टेढ़ा"
  },
  "soft, tender": {
    "english": "Soft, tender",
    "bishnupriya": "কঞাল (Kañāla)",
    "bangla": "নরম",
    "hindi": "कोमल"
  },
  "green (colour)": {
    "english": "Green (colour)",
    "bishnupriya": "কা'চু-পাতি (Kā'cu-pāti)",
    "bangla": "সবুজ",
    "hindi": "हरा"
  },
  "colour, complexion": {
    "english": "Colour, complexion",
    "bishnupriya": "কচু (Kacu)",
    "bangla": "রং",
    "hindi": "रंग"
  },
  "accident, mishap": {
    "english": "Accident, mishap",
    "bishnupriya": "কজা (Kajá)",
    "bangla": "দুর্ঘটনা",
    "hindi": "हादसा"
  },
  "niggardly, stingy": {
    "english": "Niggardly, stingy",
    "bishnupriya": "কঞ্জিস (Kañjis)",
    "bangla": "কৃপণ",
    "hindi": "कंजूस"
  },
  "buttock": {
    "english": "Buttock",
    "bishnupriya": "কটা (Kaṭā)",
    "bangla": "নিতম্ব",
    "hindi": "नितंब"
  },
  "even now (2)": {
    "english": "Even now",
    "bishnupriya": "এবুজা (Ebujā)",
    "bangla": "এখনো",
    "hindi": "अब तक"
  },
  "song": {
    "english": "Song",
    "bishnupriya": "এলা (Élā)",
    "bangla": "গান",
    "hindi": "गीत"
  },
  "cardamom": {
    "english": "Cardamom",
    "bishnupriya": "এলাচ (Elāci)",
    "bangla": "এলাচ",
    "hindi": "इलायची"
  },
  "here": {
    "english": "Here",
    "bishnupriya": "এহাত (Éhāt)",
    "bangla": "এখানে",
    "hindi": "यहाँ"
  },
  "that one (far)": {
    "english": "That one (far)",
    "bishnupriya": "ওগা (Ogā)",
    "bangla": "ওইটা",
    "hindi": "वह एक"
  },
  "proper, suitable": {
    "english": "Proper, suitable",
    "bishnupriya": "ঔনপা (Aunapā)",
    "bangla": "যথাযথ",
    "hindi": "उचित"
  },
  "papaya": {
    "english": "Papaya",
    "bishnupriya": "ঔৱাথাপি (Auwāthāpi)",
    "bangla": "পেঁপে",
    "hindi": "पपीता"
  },
  "to do": {
    "english": "To do",
    "bishnupriya": "কা (Kā)",
    "bangla": "করা",
    "hindi": "करना"
  },
  "belch": {
    "english": "Belch",
    "bishnupriya": "উহার (Uhār)",
    "bangla": "ঢেঁকুর",
    "hindi": "डकार"
  },
  "fruit": {
    "english": "Fruit",
    "bishnupriya": "এই (Éi)",
    "bangla": "ফল",
    "hindi": "फल"
  },
  "louse / flea": {
    "english": "Louse / flea",
    "bishnupriya": "উহুনি (Uhuni)",
    "bangla": "উকুন",
    "hindi": "जूँ"
  },
  "nineteen": {
    "english": "Nineteen",
    "bishnupriya": "ওনিশ (Ōniś)",
    "bangla": "ঊনিশ",
    "hindi": "उन्नीस"
  },
  "this year": {
    "english": "This year",
    "bishnupriya": "এ-উল্টা (É-ulṭā)",
    "bangla": "এই বছর",
    "hindi": "इस साल"
  },
  "one (2)": {
    "english": "One",
    "bishnupriya": "এক (Ek)",
    "bangla": "এক",
    "hindi": "एक"
  },
  "unity": {
    "english": "Unity",
    "bishnupriya": "একতা (Ekatā)",
    "bangla": "ঐক্য",
    "hindi": "एकता"
  },
  "alone / single": {
    "english": "Alone / single",
    "bishnupriya": "একা (Ekā)",
    "bangla": "একা",
    "hindi": "अकेला"
  },
  "fasting": {
    "english": "Fasting",
    "bishnupriya": "উপাস (Upās)",
    "bangla": "উপবাস",
    "hindi": "उपवास"
  },
  "wooden box": {
    "english": "Wooden box",
    "bishnupriya": "উপু (Upu)",
    "bangla": "কাঠের বাক্স",
    "hindi": "लकड़ी का डिब्बा"
  },
  "warmth": {
    "english": "Warmth",
    "bishnupriya": "উম (Um)",
    "bangla": "উত্তাপ",
    "hindi": "गर्मी"
  },
  "search": {
    "english": "Search",
    "bishnupriya": "উম (Úm)",
    "bangla": "খোঁজা",
    "hindi": "तलाश"
  },
  "age, lifetime": {
    "english": "Age, lifetime",
    "bishnupriya": "উমর (Umar)",
    "bangla": "বয়স",
    "hindi": "उम्र"
  },
  "forest": {
    "english": "Forest",
    "bishnupriya": "উমাং (Umāṅ)",
    "bangla": "জঙ্গল",
    "hindi": "जंगल"
  },
  "growth": {
    "english": "Growth",
    "bishnupriya": "উৱানা (Uwānā)",
    "bangla": "বৃদ্ধি",
    "hindi": "बढ़ोतरी"
  },
  "thigh": {
    "english": "Thigh",
    "bishnupriya": "উরত (Urat)",
    "bangla": "উরু",
    "hindi": "जाँघ"
  },
  "bug, insect": {
    "english": "Bug, insect",
    "bishnupriya": "উরস (Uras)",
    "bangla": "পোকা",
    "hindi": "कीड़ा"
  },
  "mouse, rat": {
    "english": "Mouse, rat",
    "bishnupriya": "উদুর (Udur)",
    "bangla": "ইঁদুর",
    "hindi": "चूहा"
  },
  "title, high post": {
    "english": "Title, high post",
    "bishnupriya": "উদ্ধা (Údda)",
    "bangla": "উপাধি",
    "hindi": "पदवी"
  },
  "penniless, broke": {
    "english": "Penniless, broke",
    "bishnupriya": "উদ্ধাসী (Uddāsī)",
    "bangla": "নিঃস্ব",
    "hindi": "कंगाल"
  },
  "meeting, interview": {
    "english": "Meeting, interview",
    "bishnupriya": "উনা (Unā)",
    "bangla": "সাক্ষাৎ",
    "hindi": "मुलाकात"
  },
  "young plant, sapling": {
    "english": "Young plant, sapling",
    "bishnupriya": "উনৌ (Únau)",
    "bangla": "চারা",
    "hindi": "पौधा"
  },
  "gangrene": {
    "english": "Gangrene",
    "bishnupriya": "উন্দুরা (Undurā)",
    "bangla": "গ্যাংগ্রিন",
    "hindi": "गैंग्रीन"
  },
  "above, on top": {
    "english": "Above, on top",
    "bishnupriya": "উপর (Upar)",
    "bangla": "উপর",
    "hindi": "ऊपर"
  },
  "plank, wooden board": {
    "english": "Plank, wooden board",
    "bishnupriya": "উপাক (Upāk)",
    "bangla": "তক্তা",
    "hindi": "तख्ता"
  },
  "wrapper, shawl": {
    "english": "Wrapper, shawl",
    "bishnupriya": "উ'রুনি (U'runi)",
    "bangla": "ওড়না",
    "hindi": "ओढ़नी"
  },
  "shady place": {
    "english": "Shady place",
    "bishnupriya": "উরুম (Urum)",
    "bangla": "ছায়াময় স্থান",
    "hindi": "छायादार जगह"
  },
  "preparation": {
    "english": "Preparation",
    "bishnupriya": "উর্জুক (Urjuk)",
    "bangla": "প্রস্তুতি",
    "hindi": "तैयारी"
  },
  "to fly": {
    "english": "To fly",
    "bishnupriya": "উর (Ur)",
    "bangla": "উড়া",
    "hindi": "उड़ना"
  },
  "to throw": {
    "english": "To throw",
    "bishnupriya": "উড়া (Uṛā)",
    "bangla": "ছুড়ে ফেলা",
    "hindi": "फेंकना"
  },
  "kidney bean": {
    "english": "Kidney bean",
    "bishnupriya": "উরি (Uri)",
    "bangla": "শিম",
    "hindi": "राजमा"
  },
  "cold (temperature)": {
    "english": "Cold (temperature)",
    "bishnupriya": "উল (Ul)",
    "bangla": "ঠান্ডা",
    "hindi": "ठंडा"
  },
  "topsy-turvy": {
    "english": "Topsy-turvy",
    "bishnupriya": "উলট-পলট (Ulat-palat)",
    "bangla": "তালগোল পাকানো",
    "hindi": "उल्टा-पुल्टा"
  },
  "udder": {
    "english": "Udder",
    "bishnupriya": "উলান (Ulān)",
    "bangla": "বাঁট",
    "hindi": "थन"
  },
  "white ant / termite": {
    "english": "White ant / termite",
    "bishnupriya": "উলু (Ulu)",
    "bangla": "উইপোকা",
    "hindi": "दीमक"
  },
  "pendulum": {
    "english": "Pendulum",
    "bishnupriya": "উলুম (Ulum)",
    "bangla": "দোলক",
    "hindi": "लोलक"
  },
  "reversed, opposite, upside down": {
    "english": "Reversed, opposite, upside down",
    "bishnupriya": "উল্টা (Ulṭā)",
    "bangla": "উল্টো",
    "hindi": "उल्टा"
  },
  "branch (of tree)": {
    "english": "Branch (of tree)",
    "bishnupriya": "উশা (Usā)",
    "bangla": "ডাল",
    "hindi": "डाल"
  },
  "expert, master": {
    "english": "Expert, master",
    "bishnupriya": "উস্তাদ (Ustād)",
    "bangla": "ওস্তাদ",
    "hindi": "उस्ताद"
  },
  "rivet": {
    "english": "Rivet",
    "bishnupriya": "উই (Ui)",
    "bangla": "রিভেট",
    "hindi": "कील"
  },
  "lawyer, advocate": {
    "english": "Lawyer, advocate",
    "bishnupriya": "উকিল (Ukil)",
    "bangla": "উকিল",
    "hindi": "वकील"
  },
  "harrow": {
    "english": "Harrow",
    "bishnupriya": "উকেই (Ukei)",
    "bangla": "দাঁতালো মই",
    "hindi": "दाँतेदार हेंगा"
  },
  "perplexed, confused": {
    "english": "Perplexed, confused",
    "bishnupriya": "উন / উনপা (Un / Unpā)",
    "bangla": "বিহ্বল",
    "hindi": "घबराया हुआ"
  },
  "perplexity": {
    "english": "Perplexity",
    "bishnupriya": "উঙ্খাত (Uṅkhāt)",
    "bangla": "বিহ্বলতা",
    "hindi": "घबराहट"
  },
  "high": {
    "english": "High",
    "bishnupriya": "উচ (Uc)",
    "bangla": "উঁচু",
    "hindi": "ऊँचा"
  },
  "just, proper, reasonable": {
    "english": "Just, proper, reasonable",
    "bishnupriya": "উচিত (Ucit)",
    "bangla": "উচিত",
    "hindi": "उचित"
  },
  "separate (2)": {
    "english": "Separate",
    "bishnupriya": "আলগা (A'lga)",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "hope, desire": {
    "english": "Hope, Desire",
    "bishnupriya": "আশা (Āsā)",
    "bangla": "আশা",
    "hindi": "आशा"
  },
  "surprise": {
    "english": "Surprise",
    "bishnupriya": "আশ্চর্য্য (Ascarja)",
    "bangla": "আশ্চর্য",
    "hindi": "आश्चर्य"
  },
  "an indian month (2)": {
    "english": "An Indian month",
    "bishnupriya": "আষাঢ় (Aşar)",
    "bangla": "ভারতীয় মাস",
    "hindi": "भारतीय माह"
  },
  "duck, swan": {
    "english": "Duck, Swan",
    "bishnupriya": "আ'স (A's)",
    "bangla": "হাঁস",
    "hindi": "हंस"
  },
  "seat (for deities)": {
    "english": "Seat (for deities)",
    "bishnupriya": "আসন (Asan)",
    "bangla": "আসন",
    "hindi": "आसन"
  },
  "straight": {
    "english": "Straight",
    "bishnupriya": "উচ্চু (Uccu)",
    "bangla": "সোজা",
    "hindi": "सीधा"
  },
  "suitability": {
    "english": "Suitability",
    "bishnupriya": "উচ্চেল (Uccel)",
    "bangla": "উপযুক্ততা",
    "hindi": "योग्यता"
  },
  "festival": {
    "english": "Festival",
    "bishnupriya": "উচ্ছাপ (Ucchāp)",
    "bangla": "উৎসব",
    "hindi": "उत्सव"
  },
  "contempt, negligence": {
    "english": "Contempt, negligence",
    "bishnupriya": "উচাক (Uchāk)",
    "bangla": "অবহেলা",
    "hindi": "उपेक्षा"
  },
  "deep forest": {
    "english": "Deep forest",
    "bishnupriya": "উচাক-জঙ্গল (Uchāk-jaṅgal)",
    "bangla": "গভীর জঙ্গল",
    "hindi": "घना जंगल"
  },
  "weight": {
    "english": "Weight",
    "bishnupriya": "উজান (Ujān)",
    "bangla": "ওজন",
    "hindi": "वज़न"
  },
  "upstream": {
    "english": "Upstream",
    "bishnupriya": "উজান (Ujān)",
    "bangla": "বিপরীত স্রোত",
    "hindi": "धारा के ऊपर"
  },
  "camel": {
    "english": "Camel",
    "bishnupriya": "উট (Uṭ)",
    "bangla": "উট",
    "hindi": "ऊँट"
  },
  "violence, mischief": {
    "english": "Violence, mischief",
    "bishnupriya": "উৎপাত (Utpat)",
    "bangla": "উৎপাত",
    "hindi": "उपद्रव"
  },
  "courtyard": {
    "english": "Courtyard",
    "bishnupriya": "উঠান (Úṭhān)",
    "bangla": "উঠান",
    "hindi": "आँगन"
  },
  "otter": {
    "english": "Otter",
    "bishnupriya": "উদ (Ut)",
    "bangla": "উদবিড়াল",
    "hindi": "ऊदबिलाव"
  },
  "reason, logic": {
    "english": "Reason, logic",
    "bishnupriya": "উতি (Uti)",
    "bangla": "যুক্তি",
    "hindi": "तर्क"
  },
  "dust": {
    "english": "Dust",
    "bishnupriya": "উত্থুল (Ütthul)",
    "bangla": "ধুলো",
    "hindi": "धूल"
  },
  "channel, small canal": {
    "english": "Channel, small canal",
    "bishnupriya": "ইরান (Irān)",
    "bangla": "খাল",
    "hindi": "नहर"
  },
  "towel": {
    "english": "Towel",
    "bishnupriya": "ইরিফি (Îriphi)",
    "bangla": "গামছা",
    "hindi": "तौलिया"
  },
  "whirlpool": {
    "english": "Whirlpool",
    "bishnupriya": "ইরেল (Irel)",
    "bangla": "জলের ঘূর্ণি",
    "hindi": "भँवर"
  },
  "hilsa fish": {
    "english": "Hilsa fish",
    "bishnupriya": "ইলিশ (Iliś)",
    "bangla": "ইলিশ",
    "hindi": "इलिश"
  },
  "cry, weep": {
    "english": "Cry, weep",
    "bishnupriya": "ইলৌ (Ilau)",
    "bangla": "কান্না",
    "hindi": "रोना"
  },
  "relatives": {
    "english": "Relatives",
    "bishnupriya": "ইষ্টিকুটুম (Iştikuṭum)",
    "bangla": "আত্মীয়-কুটুম্ব",
    "hindi": "रिश्तेदार"
  },
  "hint, sign": {
    "english": "Hint, sign",
    "bishnupriya": "ইশারা (Isārā)",
    "bangla": "ইঙ্গিত",
    "hindi": "इशारा"
  },
  "songster, singer": {
    "english": "Songster, singer",
    "bishnupriya": "ইশালপা (Îsālpā)",
    "bangla": "গায়ক",
    "hindi": "गायक"
  },
  "screw": {
    "english": "Screw",
    "bishnupriya": "ইস্ক্রুপ (Iskrup)",
    "bangla": "স্ক্রু",
    "hindi": "पेंच"
  },
  "steel": {
    "english": "Steel",
    "bishnupriya": "ইস্পাত (Ispāt)",
    "bangla": "ইস্পাত",
    "hindi": "इस्पात"
  },
  "current, wave, force": {
    "english": "Current, wave, force",
    "bishnupriya": "ইহৌ (Ihau)",
    "bangla": "স্রোত, ঢেউ, শক্তি",
    "hindi": "धारा, लहर, बल"
  },
  "straight (2)": {
    "english": "Straight",
    "bishnupriya": "ইচ্চু (Iccu)",
    "bangla": "সোজা",
    "hindi": "सीधा"
  },
  "loudly": {
    "english": "Loudly",
    "bishnupriya": "ইচ্চুলে (Íccule)",
    "bangla": "জোরে",
    "hindi": "जोर से"
  },
  "complaint": {
    "english": "Complaint",
    "bishnupriya": "ইজার (Ijār)",
    "bangla": "অভিযোগ",
    "hindi": "शिकायत"
  },
  "prestige, honour": {
    "english": "Prestige, honour",
    "bishnupriya": "ইজ্জত (Ijjat)",
    "bangla": "সম্মান",
    "hindi": "इज्जत"
  },
  "straight (3)": {
    "english": "Straight",
    "bishnupriya": "ইজ্জু (Ijju)",
    "bangla": "সোজা",
    "hindi": "सीधा"
  },
  "lonely, quiet": {
    "english": "Lonely, quiet",
    "bishnupriya": "ইঞ্চিকচিক (Iñcikcik)",
    "bangla": "নির্জন, শান্ত",
    "hindi": "एकाकी, शांत"
  },
  "big house": {
    "english": "Big house",
    "bishnupriya": "ইঞ্চাউ / ইঞ্জাউ (Iñcāu / Iñjāu)",
    "bangla": "বড়ো বাড়ি",
    "hindi": "बड़ा घर"
  },
  "brick": {
    "english": "Brick",
    "bishnupriya": "ইট (Iṭ)",
    "bangla": "ইঁট",
    "hindi": "ईंट"
  },
  "clear, bright": {
    "english": "Clear, bright",
    "bishnupriya": "ইটানটান (Iṭānṭān)",
    "bangla": "স্পষ্ট, উজ্জ্বল",
    "hindi": "साफ, चमकीला"
  },
  "friend": {
    "english": "Friend",
    "bishnupriya": "ইটো (Iṭo)",
    "bangla": "বন্ধু",
    "hindi": "मित्र"
  },
  "friend (2)": {
    "english": "Friend",
    "bishnupriya": "ইটাও (Iṭāo)",
    "bangla": "বন্ধু",
    "hindi": "दोस्त"
  },
  "wave": {
    "english": "Wave",
    "bishnupriya": "ইঠাক (Iṭhāk)",
    "bangla": "ঢেউ",
    "hindi": "लहर"
  },
  "wave, current": {
    "english": "Wave, current",
    "bishnupriya": "ইঠৈ (Iṭhei)",
    "bangla": "ঢেউ, স্রোত",
    "hindi": "लहर, धारा"
  },
  "well (water well)": {
    "english": "Well (water well)",
    "bishnupriya": "ইন্দারা (Indārā)",
    "bangla": "কুয়ো",
    "hindi": "कुआँ"
  },
  "source, spring, mine": {
    "english": "Source, spring, mine",
    "bishnupriya": "ইফুৎ (Iphut)",
    "bangla": "উৎস, ঝরনা",
    "hindi": "स्रोत, झरना"
  },
  "my mother": {
    "english": "My mother",
    "bishnupriya": "ইমা (Ímā)",
    "bangla": "মা",
    "hindi": "माँ"
  },
  "conscience, faith": {
    "english": "Conscience, faith",
    "bishnupriya": "ইমান (Imān)",
    "bangla": "বিবেক, ঈমান",
    "hindi": "अन्तरात्मा, ईमान"
  },
  "deep dark": {
    "english": "Deep dark",
    "bishnupriya": "ইমাম (Imām)",
    "bangla": "ঘোর অন্ধকার",
    "hindi": "गहरा अंधेरा"
  },
  "centipede": {
    "english": "Centipede",
    "bishnupriya": "আলা-পাক (Ālā-pāk)",
    "bangla": "শতপদী",
    "hindi": "कनखजूरा"
  },
  "aversion, hatred": {
    "english": "Aversion, hatred",
    "bishnupriya": "আলি (Āli)",
    "bangla": "অনিচ্ছা, ঘৃণা",
    "hindi": "अरुचि, नफरत"
  },
  "laziness (2)": {
    "english": "Laziness",
    "bishnupriya": "আলি (Āli)",
    "bangla": "অলসতা",
    "hindi": "आलस्य"
  },
  "lazy": {
    "english": "Lazy",
    "bishnupriya": "আলিয়া (Āliyā)",
    "bangla": "অলস",
    "hindi": "आलसी"
  },
  "potato (2)": {
    "english": "Potato",
    "bishnupriya": "আলু (Ālu)",
    "bangla": "আলু",
    "hindi": "आलू"
  },
  "tar, pitch (2)": {
    "english": "Tar, pitch",
    "bishnupriya": "আলকাতরা (Ālkātārā)",
    "bangla": "আলকাতরা",
    "hindi": "अलकतरा"
  },
  "separate (3)": {
    "english": "Separate",
    "bishnupriya": "আলগা (Ālgā)",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "almirah, cupboard": {
    "english": "Almirah, cupboard",
    "bishnupriya": "আলমারি (Ālmāri)",
    "bangla": "আলমারি",
    "hindi": "अलमारी"
  },
  "duck / swan": {
    "english": "Duck / swan",
    "bishnupriya": "আ'স (Ā's)",
    "bangla": "হাঁস / রাজহাঁস",
    "hindi": "बत्तख / हंस"
  },
  "gathering, meeting": {
    "english": "Gathering, meeting",
    "bishnupriya": "আসর (Āsar)",
    "bangla": "আসর",
    "hindi": "मजलिस, सभा"
  },
  "real, genuine": {
    "english": "Real, genuine",
    "bishnupriya": "আসল (Āsal)",
    "bangla": "আসল",
    "hindi": "असली"
  },
  "weak": {
    "english": "Weak",
    "bishnupriya": "আসলপা (Āsalpā)",
    "bangla": "দুর্বল",
    "hindi": "कमज़ोर"
  },
  "green": {
    "english": "Green",
    "bishnupriya": "আ'সানপা (Ā'sānpā)",
    "bangla": "সবুজ",
    "hindi": "हरा"
  },
  "layer": {
    "english": "Layer",
    "bishnupriya": "আস্তর (Āstar)",
    "bangla": "স্তর",
    "hindi": "परत"
  },
  "whole, complete": {
    "english": "Whole, complete",
    "bishnupriya": "আস্তা (Āstā)",
    "bangla": "পুরো",
    "hindi": "पूरा"
  },
  "slowly, softly": {
    "english": "Slowly, softly",
    "bishnupriya": "আস্তে (Āste)",
    "bangla": "আস্তে",
    "hindi": "धीरे-धीरे"
  },
  "hospital": {
    "english": "Hospital",
    "bishnupriya": "আস্পাতাল (Āspātāl)",
    "bangla": "হাসপাতাল",
    "hindi": "अस्पताल"
  },
  "arm": {
    "english": "Arm",
    "bishnupriya": "আহা (Āhā)",
    "bangla": "বাহু",
    "hindi": "बाँह"
  },
  "armpit": {
    "english": "Armpit",
    "bishnupriya": "আহাতুলি (Āhātuli)",
    "bangla": "বগল",
    "hindi": "बगल"
  },
  "aged, old": {
    "english": "Aged, old",
    "bishnupriya": "আ'হাল (Ā'hāl)",
    "bangla": "বুড়ো",
    "hindi": "बूढ़ा"
  },
  "eye": {
    "english": "Eye",
    "bishnupriya": "আহি (Āhi)",
    "bangla": "চোখ",
    "hindi": "आँख"
  },
  "i (1st person singular)": {
    "english": "I (1st person singular)",
    "bishnupriya": "ই (I)",
    "bangla": "আমি",
    "hindi": "मैं"
  },
  "to be, to become (2)": {
    "english": "To be, to become",
    "bishnupriya": "ই (I)",
    "bangla": "হওয়া",
    "hindi": "होना"
  },
  "to write": {
    "english": "To write",
    "bishnupriya": "ইক (Ik)",
    "bangla": "লেখা",
    "hindi": "लिखना"
  },
  "cold": {
    "english": "Cold",
    "bishnupriya": "ইন (In)",
    "bangla": "ঠান্ডা",
    "hindi": "ठंडा"
  },
  "bright, shining": {
    "english": "Bright, shining",
    "bishnupriya": "ইনালনাল (Inālnāl)",
    "bangla": "উজ্জ্বল",
    "hindi": "चमकीला"
  },
  "fishing net": {
    "english": "Fishing net",
    "bishnupriya": "ইঞ্চিল / ইঞ্চেল (Iñcil / Iñcel)",
    "bangla": "মাছ ধরার জাল",
    "hindi": "मछली पकड़ने का जाल"
  },
  "cold (adj.)": {
    "english": "Cold (adj.)",
    "bishnupriya": "ইনপা (Inpā)",
    "bangla": "ঠান্ডা",
    "hindi": "ठंडा"
  },
  "spirit / courage / courtesy": {
    "english": "Spirit / courage / courtesy",
    "bishnupriya": "ইচান (Icān)",
    "bangla": "সাহস, ভদ্রতা",
    "hindi": "हिम्मत, शिष्टाचार"
  },
  "shrimp / small prawn": {
    "english": "Shrimp / small prawn",
    "bishnupriya": "ইচা (Icā)",
    "bangla": "চিংড়ি",
    "hindi": "छोटी झींगा"
  },
  "cultivation tillage": {
    "english": "Cultivation tillage",
    "bishnupriya": "আবাদ (Ābād)",
    "bangla": "চাষ",
    "hindi": "खेती"
  },
  "grandmother": {
    "english": "Grandmother",
    "bishnupriya": "আবোক (Ābok)",
    "bangla": "ঠাকুরমা",
    "hindi": "दादी"
  },
  "we": {
    "english": "We",
    "bishnupriya": "আমি (Āmi)",
    "bangla": "আমরা",
    "hindi": "हम"
  },
  "import income": {
    "english": "Import income",
    "bishnupriya": "আমদানি (Āmdāni)",
    "bangla": "আমদানি",
    "hindi": "आयात"
  },
  "foolish idiot": {
    "english": "Foolish idiot",
    "bishnupriya": "আম্মাক (Āmmāk)",
    "bangla": "গবেট",
    "hindi": "मूर्ख"
  },
  "voice sound": {
    "english": "Voice sound",
    "bishnupriya": "আৱাজ (Āwāj)",
    "bangla": "আওয়াজ",
    "hindi": "आवाज़"
  },
  "other different": {
    "english": "Other different",
    "bishnupriya": "আর (Ār)",
    "bangla": "অন্য",
    "hindi": "दूसरा"
  },
  "bundle": {
    "english": "Bundle",
    "bishnupriya": "আ'র (Ā'r)",
    "bangla": "গোছা",
    "hindi": "गट्ठर"
  },
  "condition situation": {
    "english": "Condition situation",
    "bishnupriya": "আরঙ (Āraṅ)",
    "bangla": "অবস্থা",
    "hindi": "हालत"
  },
  "another (2)": {
    "english": "Another",
    "bishnupriya": "আরাক (Ārāk)",
    "bangla": "আরেক",
    "hindi": "एक और"
  },
  "gate (2)": {
    "english": "Gate",
    "bishnupriya": "আ'রান (Ā'rān)",
    "bangla": "দরজা",
    "hindi": "दरवाज़ा"
  },
  "bone (2)": {
    "english": "Bone",
    "bishnupriya": "আর (Ār)",
    "bangla": "হাড়",
    "hindi": "हड्डी"
  },
  "two and a half (2)": {
    "english": "Two and a half",
    "bishnupriya": "আরাই (Ārāi)",
    "bangla": "আড়াই",
    "hindi": "साढ़े दो"
  },
  "concealment screen": {
    "english": "Concealment screen",
    "bishnupriya": "আরাল (Ārāl)",
    "bangla": "আড়াল",
    "hindi": "ओट पर्दा"
  },
  "cooking pot": {
    "english": "Cooking pot",
    "bishnupriya": "আরি (Āri)",
    "bangla": "হাঁড়ি",
    "hindi": "हांडी"
  },
  "hubbub commotion": {
    "english": "Hubbub commotion",
    "bishnupriya": "আরি (Āri)",
    "bangla": "গোলমাল",
    "hindi": "हल्ला"
  },
  "lean and thin (2)": {
    "english": "Lean and thin",
    "bishnupriya": "আরুয়া (Āruwā)",
    "bangla": "রোগা",
    "hindi": "दुबला-पतला"
  },
  "blunt (edge)": {
    "english": "Blunt (edge)",
    "bishnupriya": "আরুয়া (Āruwā)",
    "bangla": "ভোঁতা",
    "hindi": "कुंद"
  },
  "walking": {
    "english": "Walking",
    "bishnupriya": "আটান (Āṭān)",
    "bangla": "হাঁটা",
    "hindi": "चलना"
  },
  "flour": {
    "english": "Flour",
    "bishnupriya": "আটাঁ (Āṭā)",
    "bangla": "ময়দা",
    "hindi": "आटा"
  },
  "laziness (3)": {
    "english": "Laziness",
    "bishnupriya": "আটাঁ (Āṭā)",
    "bangla": "অলসতা",
    "hindi": "आलस्य"
  },
  "market (small)": {
    "english": "Market (small)",
    "bishnupriya": "আটি (Āṭi)",
    "bangla": "হাট",
    "hindi": "छोटा बाजार"
  },
  "bundle bunch": {
    "english": "Bundle bunch",
    "bishnupriya": "আটি (Āṭi)",
    "bangla": "আঁটি",
    "hindi": "गठरी बंडल"
  },
  "eighteen": {
    "english": "Eighteen",
    "bishnupriya": "আঠারা (Āṭhārā)",
    "bangla": "আঠারো",
    "hindi": "अठारह"
  },
  "knee": {
    "english": "Knee",
    "bishnupriya": "আঠু (Āṭhu)",
    "bangla": "হাঁটু",
    "hindi": "घुटना"
  },
  "sweet / sweets": {
    "english": "Sweet / sweets",
    "bishnupriya": "আঠুম্পা (Āṭhumpā)",
    "bangla": "মিষ্টি",
    "hindi": "मीठा / मिठाई"
  },
  "hand / cubit (measurement)": {
    "english": "Hand / cubit (measurement)",
    "bishnupriya": "আট (Āṭ)",
    "bangla": "হাত / হাত পরিমাপ",
    "hindi": "हाथ / हाथ लम्बाई"
  },
  "different special": {
    "english": "Different special",
    "bishnupriya": "আটপ্পা (Āṭappā)",
    "bangla": "আলাদা বিশেষ",
    "hindi": "अलग खास"
  },
  "to touch": {
    "english": "To touch",
    "bishnupriya": "আটা (Āṭā)",
    "bangla": "ছোঁয়া",
    "hindi": "छूना"
  },
  "custard apple": {
    "english": "Custard apple",
    "bishnupriya": "আটা (Āṭā)",
    "bangla": "আতা",
    "hindi": "शरीफा / सीताफल"
  },
  "all": {
    "english": "All",
    "bishnupriya": "আনাম (Ānām)",
    "bangla": "সব",
    "hindi": "सब"
  },
  "pineapple": {
    "english": "Pineapple",
    "bishnupriya": "আনারস (Ānāras)",
    "bangla": "আনারস",
    "hindi": "अनानास"
  },
  "father / forefathers": {
    "english": "Father / forefathers",
    "bishnupriya": "আপা / আপা-বাপা (Āpā / Āpā-bāpā)",
    "bangla": "বাবা / পূর্বপুরুষ",
    "hindi": "पिता / पूर्वज"
  },
  "fool idiot (2)": {
    "english": "Fool idiot",
    "bishnupriya": "আ'পান (Ā'pān)",
    "bangla": "বোকা",
    "hindi": "मूर्ख"
  },
  "endless without end": {
    "english": "Endless without end",
    "bishnupriya": "আপার (Āpār)",
    "bangla": "অসীম",
    "hindi": "अनंत"
  },
  "you (honorific polite)": {
    "english": "You (honorific polite)",
    "bishnupriya": "আপ্নে (Āpne)",
    "bangla": "আপনি",
    "hindi": "आप"
  },
  "flood deluge": {
    "english": "Flood deluge",
    "bishnupriya": "আফাই (Āphāi)",
    "bangla": "বন্যা",
    "hindi": "बाढ़"
  },
  "wave (2)": {
    "english": "Wave",
    "bishnupriya": "আফাল (Āphāl)",
    "bangla": "ঢেউ",
    "hindi": "लहर"
  },
  "alone": {
    "english": "Alone",
    "bishnupriya": "একলা (Ekalā)",
    "bangla": "একা",
    "hindi": "अकेला"
  },
  "this side (of river etc.)": {
    "english": "This side (of river etc.)",
    "bishnupriya": "এ-কুল (É-kul)",
    "bangla": "এপার",
    "hindi": "इस पार"
  },
  "totally completely": {
    "english": "Totally completely",
    "bishnupriya": "একেবারে (Ekebāre)",
    "bangla": "একেবারে",
    "hindi": "एकदम"
  },
  "totally": {
    "english": "Totally",
    "bishnupriya": "একদম (Ekdam)",
    "bangla": "একদম",
    "hindi": "बिलकुल"
  },
  "this time / this turn": {
    "english": "This time / this turn",
    "bishnupriya": "এখুরুম (Ékhurum)",
    "bangla": "এবার",
    "hindi": "इस बार"
  },
  "this one": {
    "english": "This one",
    "bishnupriya": "এগা (Égā)",
    "bangla": "এটা",
    "hindi": "यह एक"
  },
  "this year (alt.)": {
    "english": "This year (alt.)",
    "bishnupriya": "এগুল্টা (Égulṭā)",
    "bangla": "এই বছর",
    "hindi": "इस साल"
  },
  "so much (4)": {
    "english": "So much",
    "bishnupriya": "এতা (Étā)",
    "bangla": "এত",
    "hindi": "इतना"
  },
  "these (plural)": {
    "english": "These (plural)",
    "bishnupriya": "এতা (Étā)",
    "bangla": "এগুলো",
    "hindi": "ये"
  },
  "it is this": {
    "english": "It is this",
    "bishnupriya": "এনা (Énā)",
    "bangla": "এটাই",
    "hindi": "यही है"
  },
  "here in this place": {
    "english": "Here in this place",
    "bishnupriya": "এপেই (Épey)",
    "bangla": "এখানে",
    "hindi": "यहाँ"
  },
  "and": {
    "english": "And",
    "bishnupriya": "এবঞ (Ebañ)",
    "bangla": "আর",
    "hindi": "और"
  },
  "now": {
    "english": "Now",
    "bishnupriya": "এবাকা (Ébākā)",
    "bangla": "এখন",
    "hindi": "अभी"
  },
  "this side": {
    "english": "This side",
    "bishnupriya": "এবারা (Ébārā)",
    "bangla": "এপার",
    "hindi": "इस तरफ"
  },
  "well yes okay": {
    "english": "Well yes okay",
    "bishnupriya": "আচ্ছা (Ācchā)",
    "bangla": "আচ্ছা ঠিক আছে",
    "hindi": "अच्छा ठीक है"
  },
  "fibre": {
    "english": "Fibre",
    "bishnupriya": "আছ (Āch)",
    "bangla": "আঁশ",
    "hindi": "रेशा"
  },
  "grandfather": {
    "english": "Grandfather",
    "bishnupriya": "আজা (Ājā)",
    "bangla": "দাদু ঠাকুরদা",
    "hindi": "दादा"
  },
  "today": {
    "english": "Today",
    "bishnupriya": "আজি (Āji)",
    "bangla": "আজ",
    "hindi": "आज"
  },
  "of today today's": {
    "english": "Of today today's",
    "bishnupriya": "আজিকার (Ājikār)",
    "bangla": "আজকের",
    "hindi": "आज का"
  },
  "useless meaningless nonsense": {
    "english": "Useless meaningless nonsense",
    "bishnupriya": "আজেবাজে (Ājebāje)",
    "bangla": "আজেবাজে বাজে",
    "hindi": "बेकार निरर्थक"
  },
  "fantastic strange weird": {
    "english": "Fantastic strange weird",
    "bishnupriya": "আজগুবি (Ājgubi)",
    "bangla": "আজগুবি",
    "hindi": "अजीबोगरीब"
  },
  "eight": {
    "english": "Eight",
    "bishnupriya": "আট (Āṭ)",
    "bangla": "আট",
    "hindi": "आठ"
  },
  "market": {
    "english": "Market",
    "bishnupriya": "আট (Āṭ)",
    "bangla": "হাট",
    "hindi": "हाट बाजार"
  },
  "alone (2)": {
    "english": "Alone",
    "bishnupriya": "আখালা (Ākhālā)",
    "bangla": "একা",
    "hindi": "अकेला"
  },
  "eye (2)": {
    "english": "Eye",
    "bishnupriya": "আখি (Ākhi)",
    "bangla": "চোখ",
    "hindi": "आँख"
  },
  "front before": {
    "english": "Front before",
    "bishnupriya": "আগ (Āg)",
    "bangla": "সামনে আগে",
    "hindi": "आगे सामने"
  },
  "charcoal": {
    "english": "Charcoal",
    "bishnupriya": "আঙারা (Āṅārā)",
    "bangla": "কয়লা",
    "hindi": "कोयला"
  },
  "shirt": {
    "english": "Shirt",
    "bishnupriya": "আঙেই / আনি (Āṅei / Āni)",
    "bangla": "জামা",
    "hindi": "शर्ट"
  },
  "white": {
    "english": "White",
    "bishnupriya": "আঙ্কটৌ / আভৌপা (Āṅkaṭau / Ābhaupā)",
    "bangla": "সাদা",
    "hindi": "सफेद"
  },
  "child": {
    "english": "Child",
    "bishnupriya": "আঙ্কু (Āṅku)",
    "bangla": "বাচ্চা",
    "hindi": "बच्चा"
  },
  "grape": {
    "english": "Grape",
    "bishnupriya": "আঙ্গুর (Āṅgur)",
    "bangla": "আঙ্গুর",
    "hindi": "अंगूर"
  },
  "early paddy (autumn rice)": {
    "english": "Early paddy (autumn rice)",
    "bishnupriya": "আউশ (Āus)",
    "bangla": "আউশ ধান",
    "hindi": "औस धान (शरदकालीन चावल)"
  },
  "gap space": {
    "english": "Gap space",
    "bishnupriya": "আক (Āk)",
    "bangla": "ফাঁক",
    "hindi": "खाली जगह गैप"
  },
  "famine hard times": {
    "english": "Famine hard times",
    "bishnupriya": "আকাল (Ākāl)",
    "bangla": "অকাল দুর্ভিক্ষ",
    "hindi": "अकाल दुर्भिक्ष"
  },
  "once (2)": {
    "english": "Once",
    "bishnupriya": "আকমাও (Ākmāo)",
    "bangla": "একবার",
    "hindi": "एक बार"
  },
  "united simultaneous together": {
    "english": "United simultaneous together",
    "bishnupriya": "আকতা (Āktā)",
    "bangla": "একসঙ্গে",
    "hindi": "एक साथ"
  },
  "suddenly (2)": {
    "english": "Suddenly",
    "bishnupriya": "আকতা (Āktā)",
    "bangla": "হঠাৎ",
    "hindi": "अचानक"
  },
  "yellowish": {
    "english": "Yellowish",
    "bishnupriya": "আলদিয়া (Āldiyā)",
    "bangla": "হলদেটে",
    "hindi": "पीला-सा"
  },
  "jaundice (2)": {
    "english": "Jaundice",
    "bishnupriya": "আলমি (Ālmi)",
    "bangla": "জন্ডিস",
    "hindi": "पीलिया"
  },
  "great-grandmother": {
    "english": "Great-grandmother",
    "bishnupriya": "আই (Āi)",
    "bangla": "প্রপিতামহী",
    "hindi": "परदादी"
  },
  "law regulation (2)": {
    "english": "Law regulation",
    "bishnupriya": "আইন (Āin)",
    "bangla": "আইন",
    "hindi": "कानून"
  },
  "vanity (2)": {
    "english": "Vanity",
    "bishnupriya": "অন্তু (Antu)",
    "bangla": "অহংকার",
    "hindi": "अहंकार"
  },
  "mud": {
    "english": "Mud",
    "bishnupriya": "আপ (Āp)",
    "bangla": "কাদা",
    "hindi": "कीचड़"
  },
  "muddy place (2)": {
    "english": "Muddy place",
    "bishnupriya": "আপত (Āpat)",
    "bangla": "কাদার জায়গা",
    "hindi": "कीचड़ वाली जगह"
  },
  "guest (3)": {
    "english": "Guest",
    "bishnupriya": "অপরবী (Aparbi)",
    "bangla": "অতিথি",
    "hindi": "मेहमान"
  },
  "unfortunate (male)": {
    "english": "Unfortunate (male)",
    "bishnupriya": "অভাগা (Abhāgā)",
    "bangla": "ভাগ্যহীন দুর্ভাগ্য",
    "hindi": "दुर्भाग्यशाली (पुरुष)"
  },
  "unfortunate (female)": {
    "english": "Unfortunate (female)",
    "bishnupriya": "অভাগী (Abhāgi)",
    "bangla": "ভাগ্যহীনা",
    "hindi": "दुर्भाग्यशाली (स्त्री)"
  },
  "nectar": {
    "english": "Nectar",
    "bishnupriya": "অমৃত (Amṛta)",
    "bangla": "অমৃত",
    "hindi": "अमृत"
  },
  "half (2)": {
    "english": "Half",
    "bishnupriya": "অর্ধেক (Ardhek)",
    "bangla": "অর্ধেক",
    "hindi": "आधा"
  },
  "to be, to become (3)": {
    "english": "To be, to become",
    "bishnupriya": "অ' (A')",
    "bangla": "হওয়া হয়ে ওঠা",
    "hindi": "होना बन जाना"
  },
  "beginning (noun)": {
    "english": "Beginning (noun)",
    "bishnupriya": "অ'করা (A'kara)",
    "bangla": "শুরু আরম্ভ",
    "hindi": "शुरुआत"
  },
  "begun (2)": {
    "english": "Begun",
    "bishnupriya": "অকরা (A'kara)",
    "bangla": "শুরু করা হয়েছে",
    "hindi": "शुरू किया हुआ"
  },
  "small particle": {
    "english": "Small particle",
    "bishnupriya": "কণা (Kaṇā)",
    "bangla": "কণা",
    "hindi": "कण"
  },
  "spade": {
    "english": "Spade",
    "bishnupriya": "কোদাল (Kodāl)",
    "bangla": "কোদাল",
    "hindi": "कुदाल"
  },
  "pain": {
    "english": "Pain",
    "bishnupriya": "কাপ (Kāp)",
    "bangla": "ব্যথা",
    "hindi": "दर्द"
  },
  "elbow": {
    "english": "Elbow",
    "bishnupriya": "কফোনি (Kaphoni)",
    "bangla": "কনুই",
    "hindi": "कोहनी"
  },
  "pomegranate": {
    "english": "Pomegranate",
    "bishnupriya": "কবাই (Kabāi)",
    "bangla": "ডালিম",
    "hindi": "अनार"
  },
  "pigeon": {
    "english": "Pigeon",
    "bishnupriya": "কবচেরৌ (Kabacerau)",
    "bangla": "ঘুঘু",
    "hindi": "कबूतर"
  },
  "amulet, protective charm": {
    "english": "Amulet, protective charm",
    "bishnupriya": "কবজ (Kabaj)",
    "bangla": "তাবিজ",
    "hindi": "ताबीज़"
  },
  "grave": {
    "english": "Grave",
    "bishnupriya": "কবর (Kabar)",
    "bangla": "কবর",
    "hindi": "क़ब्र"
  },
  "silk": {
    "english": "Silk",
    "bishnupriya": "কবরন (Kabaraṅ)",
    "bangla": "রেশম",
    "hindi": "रेशम"
  },
  "cabbage": {
    "english": "Cabbage",
    "bishnupriya": "কবি (Kabi)",
    "bangla": "বাঁধাকপি",
    "hindi": "पत्तागोभी"
  },
  "orange (fruit)": {
    "english": "Orange (fruit)",
    "bishnupriya": "কমলা (Kamalā)",
    "bangla": "কমলা",
    "hindi": "संतरा"
  },
  "more or less": {
    "english": "More or less",
    "bishnupriya": "কামবেশি (Kāmbeśi)",
    "bangla": "আন্দাজে",
    "hindi": "लगभग"
  },
  "party / group": {
    "english": "Party / group",
    "bishnupriya": "কাম্পু (Kāmpu)",
    "bangla": "দল",
    "hindi": "पार्टी"
  },
  "turban": {
    "english": "Turban",
    "bishnupriya": "কয়েত (Kayet)",
    "bangla": "পাগড়ি",
    "hindi": "पगड़ी"
  },
  "coal": {
    "english": "Coal",
    "bishnupriya": "কয়লা (Kaylā)",
    "bangla": "কয়লা",
    "hindi": "कोयला"
  },
  "done": {
    "english": "Done",
    "bishnupriya": "করা (Karā)",
    "bangla": "করা হয়েছে",
    "hindi": "किया हुआ"
  },
  "saw": {
    "english": "Saw",
    "bishnupriya": "করাত (Karāt)",
    "bangla": "করাত",
    "hindi": "आरी"
  },
  "frog": {
    "english": "Frog",
    "bishnupriya": "করবেন (Karben)",
    "bangla": "ব্যাঙ",
    "hindi": "मेंढक"
  },
  "pen": {
    "english": "Pen",
    "bishnupriya": "কলম (Kalam)",
    "bangla": "কলম",
    "hindi": "कलम"
  },
  "banana": {
    "english": "Banana",
    "bishnupriya": "কালা (Kālā)",
    "bangla": "কলা",
    "hindi": "केला"
  },
  "hole": {
    "english": "Hole",
    "bishnupriya": "কলু (Kalu)",
    "bangla": "গর্ত",
    "hindi": "गड्ढा"
  },
  "oath": {
    "english": "Oath",
    "bishnupriya": "কসম (Kasam)",
    "bangla": "কসম",
    "hindi": "कसम"
  },
  "tender": {
    "english": "Tender",
    "bishnupriya": "কস্মা (Kasmā)",
    "bangla": "কোমল",
    "hindi": "नरम"
  },
  "elbow (2)": {
    "english": "Elbow",
    "bishnupriya": "কহনি (Kahanī)",
    "bangla": "কনুই",
    "hindi": "कोहनी"
  },
  "well": {
    "english": "Well",
    "bishnupriya": "কহা (Kahā)",
    "bangla": "কুয়ো",
    "hindi": "कुआँ"
  },
  "apartment, room": {
    "english": "Apartment, room",
    "bishnupriya": "কা (Kā)",
    "bangla": "ঘর",
    "hindi": "कमरा"
  },
  "elder sister": {
    "english": "Elder sister",
    "bishnupriya": "কাই (Kāi)",
    "bangla": "দিদি",
    "hindi": "दीदी"
  },
  "lock": {
    "english": "Lock",
    "bishnupriya": "কাঁকড়া (Kā̃kaṛā)",
    "bangla": "তালা",
    "hindi": "ताला"
  },
  "waist": {
    "english": "Waist",
    "bishnupriya": "কাঁকালি (Kā̃kāli)",
    "bangla": "কোমর",
    "hindi": "कमर"
  },
  "paper": {
    "english": "Paper",
    "bishnupriya": "কাগজ (Kāgaj)",
    "bangla": "কাগজ",
    "hindi": "कागज़"
  },
  "swan": {
    "english": "Swan",
    "bishnupriya": "কানা (Kānā)",
    "bangla": "রাজহাঁস",
    "hindi": "हंस"
  },
  "beggar, one who begs humbly": {
    "english": "Beggar, one who begs humbly",
    "bishnupriya": "কাঙ্গাল (Kāṅgāl)",
    "bangla": "ভিখারি",
    "hindi": "भिखारी"
  },
  "bedstead": {
    "english": "Bedstead",
    "bishnupriya": "কাঁঠাল (Kā̃ṭhāl)",
    "bangla": "খাট",
    "hindi": "चारपाई"
  },
  "green, unripe": {
    "english": "Green, unripe",
    "bishnupriya": "কাঁচা (Kā̃cā)",
    "bangla": "কাঁচা",
    "hindi": "कच्चा"
  },
  "sickle": {
    "english": "Sickle",
    "bishnupriya": "কাঁচি (Kā̃ci)",
    "bangla": "কাস্তে",
    "hindi": "हँसिया"
  },
  "court of justice (2)": {
    "english": "Court of justice",
    "bishnupriya": "কাছারি (Kāchāri)",
    "bangla": "কাছারি",
    "hindi": "कचहरी"
  },
  "work, duty": {
    "english": "Work, duty",
    "bishnupriya": "কাজ (Kāj)",
    "bangla": "কাজ",
    "hindi": "काम"
  },
  "collyrium, kohl": {
    "english": "Collyrium, kohl",
    "bishnupriya": "কাজল (Kājal)",
    "bangla": "কাজল",
    "hindi": "काजल"
  },
  "thorn": {
    "english": "Thorn",
    "bishnupriya": "কাঁটা (Kā̃ṭā)",
    "bangla": "কাঁটা",
    "hindi": "काँटा"
  },
  "tortoise": {
    "english": "Tortoise",
    "bishnupriya": "কাঠুয়া (Kāṭhuwā)",
    "bangla": "কচ্ছপ",
    "hindi": "कछुआ"
  },
  "ear": {
    "english": "Ear",
    "bishnupriya": "কান (Kān)",
    "bangla": "কান",
    "hindi": "कान"
  },
  "scissors": {
    "english": "Scissors",
    "bishnupriya": "কাঁতি (Kā̃ti)",
    "bangla": "কাঁচি",
    "hindi": "कैंची"
  },
  "jackfruit (alt.)": {
    "english": "Jackfruit (alt.)",
    "bishnupriya": "কাঠাল (Kāṭhāl)",
    "bangla": "কাঁঠাল",
    "hindi": "कटहल"
  },
  "quilt": {
    "english": "Quilt",
    "bishnupriya": "কাঁথা (Kā̃thā)",
    "bangla": "কাঁথা",
    "hindi": "कांथा"
  },
  "work / necessity": {
    "english": "Work / necessity",
    "bishnupriya": "কাম (Kām)",
    "bangla": "কাজ / প্রয়োজন",
    "hindi": "काम / ज़रूरत"
  },
  "income": {
    "english": "Income",
    "bishnupriya": "কামাই (Kāmāi)",
    "bangla": "আয়",
    "hindi": "कमाई"
  },
  "cannon": {
    "english": "Cannon",
    "bishnupriya": "কামান (Kāmān)",
    "bangla": "কামান",
    "hindi": "तोप"
  },
  "blacksmith": {
    "english": "Blacksmith",
    "bishnupriya": "কামার (Kāmār)",
    "bangla": "কামার",
    "hindi": "लोहार"
  },
  "body": {
    "english": "Body",
    "bishnupriya": "কায়া (Kāyā)",
    "bangla": "শরীর",
    "hindi": "शरीर"
  },
  "arrow": {
    "english": "Arrow",
    "bishnupriya": "কা'র (Kā'r)",
    "bangla": "তির",
    "hindi": "तीर"
  },
  "greed": {
    "english": "Greed",
    "bishnupriya": "কারেম / কারেমনা (Kārem / Kāremnā)",
    "bangla": "লোভ",
    "hindi": "लालच"
  },
  "business": {
    "english": "Business",
    "bishnupriya": "কারবার (Kārbār)",
    "bangla": "ব্যবসা",
    "hindi": "कारोबार"
  },
  "black": {
    "english": "Black",
    "bishnupriya": "কালা (Kālā)",
    "bangla": "কালো",
    "hindi": "काला"
  },
  "tomorrow": {
    "english": "Tomorrow",
    "bishnupriya": "কালি (Kāli)",
    "bangla": "কাল",
    "hindi": "कल"
  },
  "ink": {
    "english": "Ink",
    "bishnupriya": "কালি (Kāli)",
    "bangla": "কালি",
    "hindi": "स्याही"
  },
  "cough": {
    "english": "Cough",
    "bishnupriya": "কাশ (Kāś)",
    "bangla": "কাশি",
    "hindi": "खाँसी"
  },
  "dog": {
    "english": "Dog",
    "bishnupriya": "কুকুর (Kukur)",
    "bangla": "কুকুর",
    "hindi": "कुत्ता"
  },
  "water-lily": {
    "english": "Water-lily",
    "bishnupriya": "কুনারি / কুনারেই (Kunāri / Kunārei)",
    "bangla": "শাপলা",
    "hindi": "कमल / शालूक"
  },
  "handful / bunch": {
    "english": "Handful / bunch",
    "bishnupriya": "কুয়া (Kuwā)",
    "bangla": "মুঠো / থোকা",
    "hindi": "मुट्ठी / गुच्छा"
  },
  "handful": {
    "english": "Handful",
    "bishnupriya": "কুরু (Kuru)",
    "bangla": "মুঠো",
    "hindi": "मुट्ठी"
  },
  "potter": {
    "english": "Potter",
    "bishnupriya": "কুমার (Kumār)",
    "bangla": "কুমোর",
    "hindi": "कुम्हार"
  },
  "pumpkin": {
    "english": "Pumpkin",
    "bishnupriya": "কূমড়া (Kūmṛā)",
    "bangla": "কুমড়ো",
    "hindi": "कद्दू"
  },
  "festivity": {
    "english": "Festivity",
    "bishnupriya": "কূমেই (Kūmei)",
    "bangla": "উৎসব",
    "hindi": "उत्सव"
  },
  "piece": {
    "english": "Piece",
    "bishnupriya": "কুরকা (Kurkā)",
    "bangla": "টুকরো",
    "hindi": "टुकड़ा"
  },
  "bud": {
    "english": "Bud",
    "bishnupriya": "কুরি (Kuri)",
    "bangla": "কুঁড়ি",
    "hindi": "कली"
  },
  "twenty": {
    "english": "Twenty",
    "bishnupriya": "কুরি (Kuri)",
    "bangla": "কুড়ি",
    "hindi": "बीस"
  },
  "only": {
    "english": "Only",
    "bishnupriya": "কুলে (Kule)",
    "bangla": "কেবল",
    "hindi": "सिर्फ"
  },
  "horoscope": {
    "english": "Horoscope",
    "bishnupriya": "কুষ্ঠি (Kuṣṭhi)",
    "bangla": "জন্মকুষ্ঠি",
    "hindi": "कुंडली"
  },
  "wrestling": {
    "english": "Wrestling",
    "bishnupriya": "কুস্তি (Kusti)",
    "bangla": "কুস্তি",
    "hindi": "कुश्ती"
  },
  "colour": {
    "english": "Colour",
    "bishnupriya": "কুহি (Kuhi)",
    "bangla": "রং",
    "hindi": "रंग"
  },
  "ladder": {
    "english": "Ladder",
    "bishnupriya": "কেইরাক (Keirāk)",
    "bangla": "মই",
    "hindi": "सीढ़ी"
  },
  "earth-worm": {
    "english": "Earth-worm",
    "bishnupriya": "কেচুয়া (Kecuwā)",
    "bangla": "কেঁচো",
    "hindi": "केंचुआ"
  },
  "why": {
    "english": "Why",
    "bishnupriya": "কেনে (Kene)",
    "bangla": "কেন",
    "hindi": "क्यों"
  },
  "clerk": {
    "english": "Clerk",
    "bishnupriya": "কেকানি (Kekāni)",
    "bangla": "কেরানি",
    "hindi": "क्लर्क"
  },
  "oar": {
    "english": "Oar",
    "bishnupriya": "কেরালি / কেরুয়াল (Kerāli / Keruwāl)",
    "bangla": "দাঁড়",
    "hindi": "चप्पू"
  },
  "scandal": {
    "english": "Scandal",
    "bishnupriya": "কেরেঙ্কাল / কেরেঙ্কালি (Kereṅkāl / Kereṅkāli)",
    "bangla": "কলঙ্ক / বদনাম",
    "hindi": "कलंक / बदनामी"
  },
  "kerosene": {
    "english": "Kerosene",
    "bishnupriya": "কেরেস (Keres)",
    "bangla": "কেরোসিন",
    "hindi": "मिट्टी का तेल"
  },
  "deep black": {
    "english": "Deep black",
    "bishnupriya": "কের্তু (Kertu)",
    "bangla": "ঘোর কালো",
    "hindi": "गहरा काला"
  },
  "heap": {
    "english": "Heap",
    "bishnupriya": "কেসারা (Kesārā)",
    "bangla": "স্তূপ",
    "hindi": "ढेर"
  },
  "navel": {
    "english": "Navel",
    "bishnupriya": "খাইতান / খাইতৌ (Khāitān / Khāitau)",
    "bangla": "নাভি",
    "hindi": "नाभि"
  },
  "bee": {
    "english": "Bee",
    "bishnupriya": "খাইমু (Khāimu)",
    "bangla": "মৌমাছি",
    "hindi": "मधुमक्खी"
  },
  "honey": {
    "english": "Honey",
    "bishnupriya": "খাইহি (Khāihi)",
    "bangla": "মধু",
    "hindi": "शहद"
  },
  "banyan tree": {
    "english": "Banyan tree",
    "bishnupriya": "খান্নান (Khānnān)",
    "bangla": "বটগাছ",
    "hindi": "बरगद"
  },
  "messenger": {
    "english": "Messenger",
    "bishnupriya": "খানলেই (Khānlei)",
    "bangla": "দূত",
    "hindi": "दूत"
  },
  "drought": {
    "english": "Drought",
    "bishnupriya": "খরা (Kharā)",
    "bangla": "খরা",
    "hindi": "सूखा"
  },
  "customer": {
    "english": "Customer",
    "bishnupriya": "খরিদ্দার (Khariddār)",
    "bangla": "ক্রেতা",
    "hindi": "खरीदार"
  },
  "hare": {
    "english": "Hare",
    "bishnupriya": "খারগোস (Khargos)",
    "bangla": "খরগোশ",
    "hindi": "खरगोश"
  },
  "chalk": {
    "english": "Chalk",
    "bishnupriya": "খড়ি (Khari)",
    "bangla": "খড়ি",
    "hindi": "चाक"
  },
  "tailor": {
    "english": "Tailor",
    "bishnupriya": "খলিফা (Khaliphā)",
    "bangla": "দর্জি",
    "hindi": "दरज़ी"
  },
  "to eat": {
    "english": "To eat",
    "bishnupriya": "খা (Khā)",
    "bangla": "খাওয়া",
    "hindi": "खाना"
  },
  "room": {
    "english": "Room",
    "bishnupriya": "কুঠা (Kuṭhā)",
    "bangla": "ঘর",
    "hindi": "कमरा"
  }
};

export const LYRICS_TYPES = Object.values(LyricsType);
export const PROMPT_TONES = Object.values(PromptTone);
export const PROMPT_LENGTHS = Object.values(PromptLength);

export const PROMPT_CATEGORIES = [
  "Creative Writing",
  "Code Generation",
  "Image Generation",
  "Business/Professional",
  "Educational",
  "Translation",
  "SEO/Marketing"
];