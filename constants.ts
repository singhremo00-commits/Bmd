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
  "embrace": {
    "english": "Embrace",
    "bishnupriya": "হাপ",
    "bangla": "আলিঙ্গন",
    "hindi": "गले लगाना"
  },
  "scattered": {
    "english": "Scattered",
    "bishnupriya": "হিচি-মিচি",
    "bangla": "ছড়ানো-ছিটানো",
    "hindi": "बिखरा हुआ"
  },
  "state_of_belly_before_meals": {
    "english": "The state of the belly before taking meals",
    "bishnupriya": "হুন",
    "bangla": "খাওয়ার আগে পেটের অবস্থা",
    "hindi": "खाना खाने से पहले पेट की हालत"
  },
  "hear": {
    "english": "hear",
    "bishnupriya": "হুন-",
    "bangla": "শোনা",
    "hindi": "सुनना"
  },
  "to_smell": {
    "english": "To smell",
    "bishnupriya": "হুন-",
    "bangla": "ঘ্রাণ নেওয়া",
    "hindi": "सूंघना"
  },
  "strength_stamina": {
    "english": "Strength, stamina",
    "bishnupriya": "হুনার",
    "bangla": "শক্তি, স্ট্যামিনা",
    "hindi": "ताकत, स्टैमिना"
  },
  "gold": {
    "english": "Gold",
    "bishnupriya": "হুনা",
    "bangla": "সোনা",
    "hindi": "सोना"
  },
  "heard": {
    "english": "Heard",
    "bishnupriya": "হুনা",
    "bangla": "শোনা গেছে",
    "hindi": "सुना हुआ"
  },
  "to_cause_to_hear": {
    "english": "To cause to hear",
    "bishnupriya": "হুনা-",
    "bangla": "শোনানো",
    "hindi": "सुनाना"
  },
  "to_cause_to_smell": {
    "english": "To cause to smell",
    "bishnupriya": "হুনা-",
    "bangla": "ঘ্রাণ করানো",
    "hindi": "सूंघाना"
  },
  "hearing_causing_to_hear": {
    "english": "(i) Hearing (ii) Causing to hear",
    "bishnupriya": "হুনানি",
    "bangla": "(i) শোনা (ii) শোনানো",
    "hindi": "(i) सुनना (ii) सुनाना"
  },
  "smelling_causing_to_smell": {
    "english": "(i) Smelling (ii) Causing to smell",
    "bishnupriya": "হুনানি",
    "bangla": "(i) ঘ্রাণ নেওয়া (ii) ঘ্রাণ করানো",
    "hindi": "(i) सूंघना (ii) सूंघाना"
  },
  "goldsmith": {
    "english": "Goldsmith",
    "bishnupriya": "হুনার",
    "bangla": "সোনার",
    "hindi": "सुनार"
  },
  "goldsmith_alt": {
    "english": "Goldsmith",
    "bishnupriya": "হুনারি",
    "bangla": "সোনার",
    "hindi": "सुनार"
  },
  "to_cause_to_hear_alt": {
    "english": "To cause to hear",
    "bishnupriya": "হুনুয়া-",
    "bangla": "শোনানো",
    "hindi": "सुनाना"
  },
  "to_cause_to_smell_alt": {
    "english": "To cause to smell",
    "bishnupriya": "হুনুয়া",
    "bangla": "ঘ্রাণ করানো",
    "hindi": "सूंघाना"
  },
  "bamboo_instrument_for_fishing": {
    "english": "(i) A bamboo-made instrument for fishing (ii) A mouth-cover for animals",
    "bishnupriya": "হুপা",
    "bangla": "(i) মাছ ধরার বাঁশের যন্ত্র (ii) পশুর মুখের ঢাকনা",
    "hindi": "(i) मछली पकड़ने का बांस का यंत्र (ii) पशु का मुंह ढकने वाला"
  },
  "v_above": {
    "english": "V. above",
    "bishnupriya": "হুপি",
    "bangla": "উপরোক্ত",
    "hindi": "ऊपर वाला"
  },
  "wolf": {
    "english": "Wolf",
    "bishnupriya": "হুপি-বাঘ",
    "bangla": "নেকড়ে",
    "hindi": "भेड़िया"
  },
  "totally_exactly": {
    "english": "Totally, exactly",
    "bishnupriya": "হুবাহু",
    "bangla": "পুরোপুরি, ঠিক",
    "hindi": "बिलकुल"
  },
  "sleep_child_language": {
    "english": "Sleep (child-language)",
    "bishnupriya": "হুম",
    "bangla": "ঘুম (শিশুভাষা)",
    "hindi": "नींद (बच्चों की भाषा)"
  },
  "front_leg_of_animals": {
    "english": "The front leg (of animals)",
    "bishnupriya": "হুমান",
    "bangla": "পশুর সামনের পা",
    "hindi": "पशु का आगे का पैर"
  },
  "fan": {
    "english": "Fan",
    "bishnupriya": "হুমেই",
    "bangla": "পাখা",
    "hindi": "पंखा"
  },
  "threat_intimidation": {
    "english": "Threat, intimidation",
    "bishnupriya": "হুমকি",
    "bangla": "ধমক",
    "hindi": "धमकी"
  },
  "over_dried": {
    "english": "Over-dried",
    "bishnupriya": "হুমথি",
    "bangla": "অতিরিক্ত শুকনো",
    "hindi": "ज्यादा सूखा"
  },
  "corrupt_form_of_haumurak": {
    "english": "A corrupt form of haumurāk",
    "bishnupriya": "হুমফুরক",
    "bangla": "হাউমুরাক-এর বিকৃত রূপ",
    "hindi": "हाउमुराक का भ्रष्ट रूप"
  },
  "prominent_and_influential_sarcastic": {
    "english": "Prominent and influential (sarcastic)",
    "bishnupriya": "হুমরা-চুমরা",
    "bangla": "প্রভাবশালী (ব্যঙ্গাত্মক)",
    "hindi": "प्रभावशाली (व्यंग्यपूर्ण)"
  },
  "boar": {
    "english": "Boar",
    "bishnupriya": "হুয়ার",
    "bangla": "বন্য শুয়োর",
    "hindi": "जंगली सूअर"
  },
  "alt_form_of_hana": {
    "english": "Alt. form of hana",
    "bishnupriya": "হুয়া",
    "bangla": "হানা-র বিকল্প",
    "hindi": "हाना का वैकल्पिक रूप"
  },
  "to_tolerate": {
    "english": "To tolerate",
    "bishnupriya": "হুয়া-",
    "bangla": "সহ্য করা",
    "hindi": "सहना"
  },
  "to_lull": {
    "english": "To lull",
    "bishnupriya": "হুয়া-",
    "bangla": "ঘুম পাড়ানো",
    "hindi": "लोरी सुनाना"
  },
  "taste": {
    "english": "Taste",
    "bishnupriya": "হুয়াত",
    "bangla": "স্বাদ",
    "hindi": "स्वाद"
  },
  "tasteful": {
    "english": "Tasteful",
    "bishnupriya": "হুয়াত",
    "bangla": "সুস্বাদু",
    "hindi": "स्वादिष्ट"
  },
  "tolerating": {
    "english": "Tolerating",
    "bishnupriya": "হুয়ানি",
    "bangla": "সহ্য করা",
    "hindi": "सहना"
  },
  "lulling": {
    "english": "Lulling",
    "bishnupriya": "হুয়ানি",
    "bangla": "ঘুম পাড়ানো",
    "hindi": "लोरी सुनाना"
  },
  "hunger": {
    "english": "Hunger",
    "bishnupriya": "হুয়ামনা",
    "bangla": "ক্ষিধে",
    "hindi": "भूख"
  },
  "thin_fine": {
    "english": "Thin, fine",
    "bishnupriya": "হুয়ার",
    "bangla": "পাতলা, সরু",
    "hindi": "पतला, बारीक"
  },
  "to_sweep_broom": {
    "english": "To sweep, to broom",
    "bishnupriya": "হুর-",
    "bangla": "ঝাড়ু দেওয়া",
    "hindi": "झाड़ू लगाना"
  },
  "sweeping_brooming": {
    "english": "Sweeping, brooming",
    "bishnupriya": "হুরানি",
    "bangla": "ঝাড়ু দেওয়া",
    "hindi": "झाड़ू लगाना"
  },
  "leisure_gap": {
    "english": "Leisure, gap",
    "bishnupriya": "হুরিত",
    "bangla": "অবসর, ফাঁক",
    "hindi": "फुरसत, अंतराल"
  },
  "small_fine": {
    "english": "Small, fine",
    "bishnupriya": "হুরু",
    "bangla": "ছোটো, সরু",
    "hindi": "छोटा, बारीक"
  },
  "small_short": {
    "english": "Small, short",
    "bishnupriya": "হুরুকা",
    "bangla": "ছোটো, খাটো",
    "hindi": "छोटा, नाटा"
  },
  "small_short_alt": {
    "english": "Small, short",
    "bishnupriya": "হুরুকান",
    "bangla": "ছোটো, খাটো",
    "hindi": "छोटा, नाटा"
  },
  "to_cause_to_sweep": {
    "english": "To cause to sweep",
    "bishnupriya": "হুরুয়া-",
    "bangla": "ঝাড়ু দিতে বলা",
    "hindi": "झाड़ू लगवाना"
  },
  "alt_form_of_hurukan": {
    "english": "Alt. form of hurukäń",
    "bishnupriya": "হুরকাঁ",
    "bangla": "হুরুকাঁ-এর বিকল্প",
    "hindi": "हुरुकाँ का वैकल्पिक रूप"
  },
  "speedy_movement_itching_sensation": {
    "english": "A word denoting a 'speedy movement' or an 'itching or tickling sensation'",
    "bishnupriya": "হুরহুর",
    "bangla": "দ্রুত চলা বা চুলকানির অনুভূতি",
    "hindi": "तेज गति या खुजली की sensation"
  },
  "restless_rapid_speaker": {
    "english": "One who does not remain still, one who speaks and moves rapidly",
    "bishnupriya": "হুরহুরি-পুরপুরি",
    "bangla": "অস্থির, দ্রুত কথা ও চলা",
    "hindi": "बेचैन, तेज बोलने और चलने वाला"
  },
  "disorderly_noisy_movement_very_quickly": {
    "english": "(i) A word denoting 'disorderly noisy movement' (ii) Very quickly",
    "bishnupriya": "হুরুম-দুরুম",
    "bangla": "(i) বিশৃঙ্খল শব্দময় চলা (ii) খুব তাড়াতাড়ি",
    "hindi": "(i) अव्यवस्थित शोर वाली हलचल (ii) बहुत जल्दी"
  },
  "sting": {
    "english": "Sting",
    "bishnupriya": "হুল",
    "bangla": "হুল",
    "hindi": "डंक"
  },
  "act_of_sprouting": {
    "english": "The act of sprouting",
    "bishnupriya": "হুল",
    "bangla": "অঙ্কুরোদগম",
    "hindi": "अंकुरित होना"
  },
  "sprouting": {
    "english": "Sprouting",
    "bishnupriya": "হুল করানি",
    "bangla": "অঙ্কুরিত করা",
    "hindi": "अंकुरित करना"
  },
  "commotion": {
    "english": "Commotion",
    "bishnupriya": "হুলুস্থুল",
    "bangla": "হৈচৈ",
    "hindi": "हंगामा"
  },
  "consciousness_sense": {
    "english": "Consciousness, sense",
    "bishnupriya": "হুস",
    "bangla": "চেতনা",
    "hindi": "होश"
  },
  "alt_form_of_hucciyar": {
    "english": "Alt. form of hu'cciyār",
    "bishnupriya": "হুসিয়ার",
    "bangla": "হুচ্চিয়ার-এর বিকল্প",
    "hindi": "हुच्चियार का वैकल्पिक रूप"
  },
  "sound_of_blowing_air": {
    "english": "A word denoting the 'sound of the blowing of air'",
    "bishnupriya": "হুয়ু",
    "bangla": "বাতাস বইবার শব্দ",
    "hindi": "हवा बहने की आवाज"
  },
  "heart": {
    "english": "Heart",
    "bishnupriya": "হৃদি",
    "bangla": "হৃদয়",
    "hindi": "हृदय"
  },
  "o_hallo_what": {
    "english": "(i) O, hallo (ii) What?",
    "bishnupriya": "হে",
    "bangla": "(i) ওরে (ii) কী?",
    "hindi": "(i) अरे (ii) क्या?"
  },
  "that_used_in_compounds": {
    "english": "That (used only in compounds)",
    "bishnupriya": "হে",
    "bangla": "সেই (যৌগিক শব্দে)",
    "hindi": "वह (केवल संयुक्त शब्दों में)"
  },
  "particle_certainty_emphasis": {
    "english": "A particle denoting 'certainty' or 'emphasis'",
    "bishnupriya": "+হে",
    "bangla": "নিশ্চিত বা জোরার্থক কণা",
    "hindi": "निश्चितता या जोर देने वाला कण"
  },
  "word_denoting_zeal": {
    "english": "A word denoting 'zeal'",
    "bishnupriya": "হেত",
    "bangla": "উদ্যম",
    "hindi": "जोश"
  },
  "with_zeal": {
    "english": "With zeal",
    "bishnupriya": "হেত কারে",
    "bangla": "উদ্যমসহকারে",
    "hindi": "जोश के साथ"
  },
  "fruit": {
    "english": "Fruit",
    "bishnupriya": "হেত",
    "bangla": "ফল",
    "hindi": "फल"
  },
  "act_of_waving_whirling": {
    "english": "The act of waving or whirling",
    "bishnupriya": "হেই",
    "bangla": "ঘোরানো",
    "hindi": "घुमाना"
  },
  "waving_whirling": {
    "english": "Waving, whirling",
    "bishnupriya": "হেই করানি",
    "bangla": "ঘোরানো",
    "hindi": "घुमाना"
  },
  "husband": {
    "english": "Husband",
    "bishnupriya": "হেই",
    "bangla": "স্বামী",
    "hindi": "पति"
  },
  "flirting_woman": {
    "english": "Flirting woman",
    "bishnupriya": "হেই লানপি",
    "bangla": "ফ্লার্টিং মহিলা",
    "hindi": "छेड़छाड़ करने वाली महिला"
  },
  "word_expressing_repulsion_aversion": {
    "english": "A word expressing 'repulsion', 'aversion' etc.",
    "bishnupriya": "হেই",
    "bangla": "বিতৃষ্ণা প্রকাশক",
    "hindi": "घृणा आदि व्यक्त करने वाला"
  },
  "dillenia_indica": {
    "english": "Dillenia indica",
    "bishnupriya": "হেতকিরি",
    "bangla": "চালতা",
    "hindi": "चालता"
  },
  "of_undefinable_nature": {
    "english": "Of undefinable nature",
    "bishnupriya": "হেইকুটি-বেইকুটি",
    "bangla": "অনির্ধার্য প্রকৃতির",
    "hindi": "अनिश्चित प्रकृति का"
  },
  "heavy_necklace_like_emblic": {
    "english": "A kind of heavy necklace (looking like emblic myrobalam)",
    "bishnupriya": "হেতকুরু",
    "bangla": "ভারী নেকলেস (আমলকীর মতো)",
    "hindi": "भारी हार (आमला जैसा)"
  },
  "effective_medicine": {
    "english": "Effective (as a medicine)",
    "bishnupriya": "হেইচা",
    "bangla": "কার্যকর (ঔষধ)",
    "hindi": "प्रभावी (दवा)"
  },
  "entreaty_request": {
    "english": "Entreaty, request",
    "bishnupriya": "হেইচা",
    "bangla": "অনুরোধ",
    "hindi": "विनती"
  },
  "light_repast_of_sweets_after_marriage_settlement": {
    "english": "A light repast of sweets given by the bridegroom-party to the relatives of the bride after the settlement of a marriage proposal",
    "bishnupriya": "হেইচাপাত",
    "bangla": "বিয়ের প্রস্তাবের পর মিষ্টি খাওয়ানো",
    "hindi": "शादी के प्रस्ताव के बाद मिठाई खिलाना"
  },
  "compliant": {
    "english": "Compliant",
    "bishnupriya": "হেইচাপা",
    "bangla": "অনুগত",
    "hindi": "आज्ञाकारी"
  },
  "edible_herb": {
    "english": "A kind of edible herb",
    "bishnupriya": "হেইচা-হাউ",
    "bangla": "এক ধরনের ভোজ্য শাক",
    "hindi": "एक प्रकार का खाने योग्य साग"
  },
  "light_repast_of_sweets_to_villagers": {
    "english": "A light repast of sweets given by the bridegroom-party to the villagers of the bride after the settlement of a marriage-proposal",
    "bishnupriya": "হেইচিন",
    "bangla": "বিয়ের প্রস্তাবের পর গ্রামবাসীকে মিষ্টি খাওয়ানো",
    "hindi": "शादी के प्रस्ताव के बाद गांव वालों को मिठाई खिलाना"
  },
  "parting_line_of_hair_on_head": {
    "english": "The parting line of hair on the head",
    "bishnupriya": "হেইদি",
    "bangla": "মাথার সিঁথি",
    "hindi": "मांग"
  },
  "skilful_enthusiastic": {
    "english": "Skilful, enthusiastic",
    "bishnupriya": "হেইনা, হেইনাপা",
    "bangla": "দক্ষ, উৎসাহী",
    "hindi": "कुशल, उत्साही"
  },
  "alt_form_of_heil_ancak": {
    "english": "Alt. form of he'il-äńcāk",
    "bishnupriya": "হেতনাঞ্চাক",
    "bangla": "হেইল-আঞ্চাক-এর বিকল্প",
    "hindi": "हेइल-आञ्चाक का वैकल्पिक रूप"
  },
  "enthusiastic": {
    "english": "Enthusiastic",
    "bishnupriya": "হেইনিন, হেইনিনপা",
    "bangla": "উৎসাহী",
    "hindi": "उत्साही"
  },
  "enthusiastic_of_women": {
    "english": "Enthusiastic (of women)",
    "bishnupriya": "হেইনিনপি",
    "bangla": "উৎসাহী (মহিলা)",
    "hindi": "उत्साही (महिला)"
  },
  "mango": {
    "english": "Mango",
    "bishnupriya": "হেইনৌ",
    "bangla": "আম",
    "hindi": "आम"
  },
  "averhoa_carambola": {
    "english": "Averhoa carambola",
    "bishnupriya": "হেইনৌচাম",
    "bangla": "কামরাঙ্গা",
    "hindi": "कमरख"
  },
  "alt_form_of_e_ipat": {
    "english": "Alt. form of e îpat",
    "bishnupriya": "হেইপাত",
    "bangla": "ইপাত-এর বিকল্প",
    "hindi": "इपात का वैकल्पिक रूप"
  },
  "undefinable_nature_queer": {
    "english": "Of undefinable nature, queer",
    "bishnupriya": "হেইমেরক-তেইমেকাক",
    "bangla": "অনির্ধার্য, অদ্ভুত",
    "hindi": "अनिश्चित, विचित्र"
  },
  "vegetables_growing_untimely": {
    "english": "Vegetables growing untimely",
    "bishnupriya": "হেইরাল",
    "bangla": "অসময়ে জন্মানো সবজি",
    "hindi": "असमय में उगने वाली सब्जी"
  },
  "alt_form_of_e_ira": {
    "english": "Alt. form of e ira",
    "bishnupriya": "হেইরা",
    "bangla": "ইরা-র বিকল্প",
    "hindi": "इरा का वैकल्पिक रूप"
  },
  "slight_slightly": {
    "english": "(i) Slight (ii) Slightly",
    "bishnupriya": "হেইরাপ",
    "bangla": "(i) সামান্য (ii) সামান্যভাবে",
    "hindi": "(i) थोड़ा (ii) थोड़ा सा"
  },
  "to_be_boiled_affected_with_heat": {
    "english": "To be boiled, to be affected with heat",
    "bishnupriya": "হিজ-",
    "bangla": "সিদ্ধ হওয়া, তাপে প্রভাবিত হওয়া",
    "hindi": "उबलना, गर्मी से प्रभावित होना"
  },
  "to_be_boiled_fully_husked": {
    "english": "(i) To be boiled (as rice) (ii) To be fully husked (as paddy)",
    "bishnupriya": "হিজ",
    "bangla": "(i) সিদ্ধ হওয়া (চাল) (ii) পুরো ভানা (ধান)",
    "hindi": "(i) उबलना (चावल) (ii) पूरी तरह कूटना (धान)"
  },
  "ear_of_paddy_left_in_field": {
    "english": "Ear of paddy left in the field",
    "bishnupriya": "হিজা",
    "bangla": "ক্ষেতে রাখা ধানের শিষ",
    "hindi": "खेत में छोड़ा हुआ धान का बाल"
  },
  "boiled_rice": {
    "english": "Boiled (as rice)",
    "bishnupriya": "হিজা",
    "bangla": "সিদ্ধ (চাল)",
    "hindi": "उबला हुआ (चावल)"
  },
  "to_boil_affect_with_heat": {
    "english": "To boil, to affect with heat",
    "bishnupriya": "হুয়া-",
    "bangla": "সিদ্ধ করা, তাপ দেওয়া",
    "hindi": "उबालना, गर्म करना"
  },
  "to_boil_husk_finally": {
    "english": "(i) To boil (ii) To husk finally",
    "bishnupriya": "হীজা-",
    "bangla": "(i) সিদ্ধ করা (ii) শেষ ভানা",
    "hindi": "(i) उबालना (ii) अंतिम कूटाई"
  },
  "enterprising_enthusiastic": {
    "english": "Enterprising, enthusiastic",
    "bishnupriya": "হিজান-থৌ",
    "bangla": "উদ্যোগী, উৎসাহী",
    "hindi": "उद्यमी, उत्साही"
  },
  "being_boiled_affecting_heat": {
    "english": "(i) Being boiled, being affected with heat (ii) Boiling, affecting with heat",
    "bishnupriya": "হিজানি",
    "bangla": "(i) সিদ্ধ হওয়া (ii) সিদ্ধ করা",
    "hindi": "(i) उबलना (ii) उबालना"
  },
  "being_boiled_husking_fully": {
    "english": "(i) Being boiled, being fully husked (ii) Boiling, husking fully",
    "bishnupriya": "হীজানি",
    "bangla": "(i) সিদ্ধ/ভানা হওয়া (ii) সিদ্ধ/ভানা করা",
    "hindi": "(i) उबलना/कूटना (ii) उबालना/कूटना"
  },
  "alt_form_of_hisab": {
    "english": "Alt. form of hisab",
    "bishnupriya": "হীজাপ",
    "bangla": "হিসাব-এর বিকল্প",
    "hindi": "हिसाब का वैकल्पिक रूप"
  },
  "worthless_meaningless": {
    "english": "Worthless, meaningless",
    "bishnupriya": "হিজিবিজি",
    "bangla": "অর্থহীন",
    "hindi": "बेकार, निरर्थक"
  },
  "demon_cruel_man": {
    "english": "(i) Demon, man-eater (ii) Cruel man",
    "bishnupriya": "হিঞ্চাপা",
    "bangla": "(i) রাক্ষস (ii) নিষ্ঠুর মানুষ",
    "hindi": "(i) राक्षस (ii) क्रूर व्यक्ति"
  },
  "demoness_cruel_woman": {
    "english": "(i) Demoness (ii) Cruel woman",
    "bishnupriya": "হিঞ্চাপি",
    "bangla": "(i) রাক্ষসী (ii) নিষ্ঠুর মহিলা",
    "hindi": "(i) राक्षसी (ii) क्रूर महिला"
  },
  "half_wet_half_dry": {
    "english": "Half-wet, half-dry",
    "bishnupriya": "হিতা-হিতা",
    "bangla": "আধা-ভেজা আধা-শুকনো",
    "hindi": "आधा गीला आधा सूखा"
  },
  "well_wisher_benefactor": {
    "english": "Well-wisher, benefactor",
    "bishnupriya": "হিতকারী",
    "bangla": "হিতৈষী",
    "hindi": "हितैषी"
  },
  "applying_charm_or_spell": {
    "english": "The act of applying a charm or spell",
    "bishnupriya": "হিত্তাম",
    "bangla": "মন্ত্র পড়া",
    "hindi": "जादू या मंत्र लगाना"
  },
  "preserved_fermented_fish": {
    "english": "Preserved or fermented fish",
    "bishnupriya": "হিদা, হিদাল",
    "bangla": "সংরক্ষিত বা গাঁজানো মাছ",
    "hindi": "संरक्षित या किण्वित मछली"
  },
  "cot": {
    "english": "Cot",
    "bishnupriya": "হিদাল",
    "bangla": "খাট",
    "hindi": "चारपाई"
  },
  "sufferings": {
    "english": "Sufferings",
    "bishnupriya": "হিন",
    "bangla": "কষ্ট",
    "hindi": "पीड़ा"
  },
  "labourer": {
    "english": "Labourer",
    "bishnupriya": "হিন উলা",
    "bangla": "শ্রমিক",
    "hindi": "मजदूर"
  },
  "stitching": {
    "english": "Stitching",
    "bishnupriya": "হিনা",
    "bangla": "সেলাই",
    "hindi": "सिलाई"
  },
  "to_have_a_bath": {
    "english": "To have a bath",
    "bishnupriya": "হিনা-",
    "bangla": "স্নান করা",
    "hindi": "नहाना"
  },
  "bathing": {
    "english": "Bathing",
    "bishnupriya": "হীনানি",
    "bangla": "স্নান করা",
    "hindi": "नहाना"
  },
  "baths_taken_through_mutual_help": {
    "english": "Baths taken through mutual help",
    "bishnupriya": "হিনাহিনি",
    "bangla": "পরস্পর সাহায্যে স্নান",
    "hindi": "आपसी मदद से नहाना"
  },
  "the_hindu": {
    "english": "The Hindu",
    "bishnupriya": "হিন্দু",
    "bangla": "হিন্দু",
    "hindi": "हिंदू"
  },
  "snow": {
    "english": "Snow",
    "bishnupriya": "হীমানি",
    "bangla": "তুষার",
    "hindi": "बर्फ"
  },
  "courage": {
    "english": "Courage",
    "bishnupriya": "হিম্মত",
    "bangla": "সাহস",
    "hindi": "हिम्मत"
  },
  "direction_towards_head": {
    "english": "The direction towards the head of a person lying",
    "bishnupriya": "হিয়ার",
    "bangla": "শুয়ে থাকা ব্যক্তির মাথার দিক",
    "hindi": "लेटे हुए व्यक्ति के सिर की दिशा"
  },
  "to_sew_stitch": {
    "english": "To sew, to stitch",
    "bishnupriya": "হিয়া-",
    "bangla": "সেলাই করা",
    "hindi": "सिलना"
  },
  "stitching_sewing": {
    "english": "Stitching, sewing",
    "bishnupriya": "হিয়ানি",
    "bangla": "সেলাই করা",
    "hindi": "सिलाई करना"
  },
  "jackal": {
    "english": "Jackal",
    "bishnupriya": "হিয়াল",
    "bangla": "শিয়াল",
    "hindi": "सियार"
  },
  "to_cause_to_sew": {
    "english": "To cause to sew",
    "bishnupriya": "হিওয়া-",
    "bangla": "সেলাই করানো",
    "hindi": "सिलवाना"
  },
  "edge_veins_of_leaf": {
    "english": "Edge, the veins of a leaf",
    "bishnupriya": "হির",
    "bangla": "ধার, পাতার শিরা",
    "hindi": "किनारा, पत्ती की नस"
  },
  "subject_matter_manner": {
    "english": "(i) Subject-matter (ii) Manner (as of talking)",
    "bishnupriya": "হিরাল",
    "bangla": "(i) বিষয় (ii) ভঙ্গি",
    "hindi": "(i) विषय (ii) तरीका"
  },
  "green_vitriol": {
    "english": "Green vitriol, ferrous sulphate",
    "bishnupriya": "হিরাকত",
    "bangla": "সবুজ কাঁচ",
    "hindi": "हरा कसीस"
  },
  "condition_probability": {
    "english": "Condition, probability (as of flood)",
    "bishnupriya": "হিরাম",
    "bangla": "অবস্থা, সম্ভাবনা",
    "hindi": "हालत, संभावना"
  },
  "effort_enterprise": {
    "english": "Effort, enterprise",
    "bishnupriya": "হিরাম",
    "bangla": "চেষ্টা, উদ্যোগ",
    "hindi": "प्रयास, उद्यम"
  },
  "parting_line_of_hair": {
    "english": "The parting line of hair on the head",
    "bishnupriya": "হিরি",
    "bangla": "মাথার সিঁথি",
    "hindi": "मांग"
  },
  "edge_veins_of_leaf_alt": {
    "english": "Edge, the veins of a leaf",
    "bishnupriya": "হিরি",
    "bangla": "ধার, পাতার শিরা",
    "hindi": "किनारा, पत्ती की नस"
  },
  "horripilation_with_perspiration": {
    "english": "Horripilation with perspiration",
    "bishnupriya": "হিরি-ঘাম",
    "bangla": "রোমাঞ্চ সহ ঘাম",
    "hindi": "रोमांच के साथ पसीना"
  },
  "itching_sensation": {
    "english": "A word denoting an 'itching sensation'",
    "bishnupriya": "হীর্হির",
    "bangla": "চুলকানির অনুভূতি",
    "hindi": "खुजली की sensation"
  },
  "thread_at_end_of_cloth": {
    "english": "Thread remaining at the end of a woven cloth",
    "bishnupriya": "হিষ",
    "bangla": "তাঁতে শেষের সুতো",
    "hindi": "बुने हुए कपड़े के अंत का धागा"
  },
  "account": {
    "english": "Account",
    "bishnupriya": "হিসাব",
    "bangla": "হিসাব",
    "hindi": "हिसाब"
  },
  "embracing": {
    "english": "Embracing",
    "bishnupriya": "-দানি",
    "bangla": "আলিঙ্গন করা",
    "hindi": "गले लगाना"
  },
  "weeds_stuck_to_plough": {
    "english": "Weeds (as are stuck to a plough)",
    "bishnupriya": "হাপু",
    "bangla": "আগাছা (লাঙ্গলে লেগে থাকা)",
    "hindi": "खरपतवार (हल में चिपका हुआ)"
  },
  "big_wicker_basket": {
    "english": "A big wicker-basket",
    "bishnupriya": "হাপেই",
    "bangla": "বড়ো বেতের ঝুড়ি",
    "hindi": "बड़ा बांस का टोकरा"
  },
  "week": {
    "english": "Week",
    "bishnupriya": "হাপ্তা",
    "bangla": "সপ্তাহ",
    "hindi": "सप्ताह"
  },
  "all": {
    "english": "All",
    "bishnupriya": "হাবি",
    "bangla": "সব",
    "hindi": "सब"
  },
  "condition_mentality": {
    "english": "Condition, mentality",
    "bishnupriya": "হাবভাব",
    "bangla": "অবস্থা, মনোভাব",
    "hindi": "हालत, मानसिकता"
  },
  "dry_and_weak": {
    "english": "Dry and weak",
    "bishnupriya": "হাম",
    "bangla": "শুকনো ও দুর্বল",
    "hindi": "सूखा और कमजोर"
  },
  "all_alt": {
    "english": "All",
    "bishnupriya": "হামা",
    "bangla": "সব",
    "hindi": "सब"
  },
  "for_all_the_time": {
    "english": "For all the time",
    "bishnupriya": "হামা উমার",
    "bangla": "সবসময়",
    "hindi": "हमेशा"
  },
  "end_conclusion": {
    "english": "End, conclusion",
    "bishnupriya": "হামাত",
    "bangla": "শেষ",
    "hindi": "अंत"
  },
  "concluding_finishing": {
    "english": "Concluding, finishing",
    "bishnupriya": "-দেনা",
    "bangla": "শেষ করা",
    "hindi": "खत्म करना"
  },
  "alt_form_of_hambal": {
    "english": "Alt. form of hämbal",
    "bishnupriya": "হামাল",
    "bangla": "হাম্বাল-এর বিকল্প",
    "hindi": "हंबाल का वैकल्पिक रूप"
  },
  "snail": {
    "english": "Snail",
    "bishnupriya": "হা মুক",
    "bangla": "শামুক",
    "hindi": "घोंघा"
  },
  "wifes_brother_plural": {
    "english": "Wife's brother (plural with 'hälä')",
    "bishnupriya": "হামুদি",
    "bangla": "স্ত্রীর ভাই (বহুবচন)",
    "hindi": "पत्नी का भाई (बहुवचन)"
  },
  "always": {
    "english": "Always",
    "bishnupriya": "হা মেশা",
    "bangla": "সবসময়",
    "hindi": "हमेशा"
  },
  "always_with_bil": {
    "english": "Always",
    "bishnupriya": "হা মেশা বিল",
    "bangla": "সবসময়",
    "hindi": "हमेशा"
  },
  "alt_form_of_ha_muk": {
    "english": "Alt. form of hä muk",
    "bishnupriya": "হা মৌ",
    "bangla": "হা মুক-এর বিকল্প",
    "hindi": "हा मुक का वैकल्पिक रूप"
  },
  "epidemic": {
    "english": "Epidemic",
    "bishnupriya": "হামচা",
    "bangla": "মহামারী",
    "hindi": "महामारी"
  },
  "growth_age_of_growth": {
    "english": "Growth, age of growth (of animals)",
    "bishnupriya": "হাম্বাল",
    "bangla": "বৃদ্ধি, বাড়ন্ত বয়স (পশুর)",
    "hindi": "विकास, बढ़ती उम्र (पशु की)"
  },
  "weeds_stuck_to_plough_alt": {
    "english": "Weeds (as are stuck to a plough)",
    "bishnupriya": "হাম্বাল",
    "bangla": "আগাছা (লাঙ্গলে লেগে থাকা)",
    "hindi": "खरपतवार (हल में चिपका हुआ)"
  },
  "riot": {
    "english": "Riot",
    "bishnupriya": "হামলা",
    "bangla": "হামলা",
    "hindi": "हमला"
  },
  "state_of_full_vigour": {
    "english": "A word denoting 'state of full vigour' or 'working with full vigour and gaiety'",
    "bishnupriya": "হাঁ মহাঁ",
    "bangla": "পুরোদমে কাজ করা",
    "hindi": "पूरी ताकत से काम करना"
  },
  "strength": {
    "english": "Strength",
    "bishnupriya": "হায়াত",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "strength_being_exhausted": {
    "english": "Strength being exhausted",
    "bishnupriya": "হায়াত ফুরানি",
    "bangla": "শক্তি শেষ হয়ে যাওয়া",
    "hindi": "ताकत खत्म होना"
  },
  "strength_alt": {
    "english": "Strength",
    "bishnupriya": "হায়াতি",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "impossible": {
    "english": "Impossible",
    "bishnupriya": "হায়াতি নেই",
    "bangla": "অসম্ভব",
    "hindi": "असंभव"
  },
  "sorrow_and_astonishment": {
    "english": "A word expressing 'sorrow and astonishment'",
    "bishnupriya": "হায়হায়",
    "bangla": "দুঃখ ও বিস্ময়",
    "hindi": "दुख और आश्चर्य"
  },
  "month_of_shravana": {
    "english": "The month of Śrävana",
    "bishnupriya": "হাওয়ান",
    "bangla": "শ্রাবণ মাস",
    "hindi": "श्रावण माह"
  },
  "alt_form_of_hangam": {
    "english": "Alt. form of hä'ngam",
    "bishnupriya": "হাওয়াম",
    "bangla": "হাঙ্গাম-এর বিকল্প",
    "hindi": "हंगाम का वैकल्पिक रूप"
  },
  "air_climate_atmosphere": {
    "english": "Air, climate, atmosphere",
    "bishnupriya": "হাওয়া",
    "bangla": "বাতাস, আবহাওয়া",
    "hindi": "हवा, मौसम"
  },
  "kerosine": {
    "english": "Kerosine",
    "bishnupriya": "হাওয়া",
    "bangla": "কেরোসিন",
    "hindi": "मिट्टी का तेल"
  },
  "motor_car": {
    "english": "Motor car",
    "bishnupriya": "হাওয়া গাড়ি",
    "bangla": "মোটর গাড়ি",
    "hindi": "मोटर कार"
  },
  "bamboo_made_platform": {
    "english": "A bamboo-made platform",
    "bishnupriya": "হাঁর",
    "bangla": "বাঁশের মাচা",
    "hindi": "बांस का मचान"
  },
  "cognition_knowledge": {
    "english": "Cognition, knowledge",
    "bishnupriya": "হার",
    "bangla": "জ্ঞান",
    "hindi": "ज्ञान"
  },
  "understanding_feeling": {
    "english": "Understanding, feeling",
    "bishnupriya": "হার পানি",
    "bangla": "বোঝা, অনুভূতি",
    "hindi": "समझ, احساس"
  },
  "essence_strength": {
    "english": "Essence, strength",
    "bishnupriya": "হার",
    "bangla": "সার, শক্তি",
    "hindi": "सार, ताकत"
  },
  "to_finish": {
    "english": "To finish",
    "bishnupriya": "হাঁর",
    "bangla": "শেষ করা",
    "hindi": "खत्म करना"
  },
  "to_be_defeated_or_lost": {
    "english": "(i) To be defeated (ii) To be lost",
    "bishnupriya": "হার-",
    "bangla": "(i) হারা (ii) হারানো",
    "hindi": "(i) हारना (ii) खोना"
  },
  "to_incur_great_loss": {
    "english": "To incur a great loss, to be destroyed",
    "bishnupriya": "হার-",
    "bangla": "বড়ো ক্ষতি হওয়া, ধ্বংস হওয়া",
    "hindi": "बड़ा नुकसान होना, नष्ट होना"
  },
  "entire": {
    "english": "Entire",
    "bishnupriya": "হারা",
    "bangla": "সম্পূর্ণ",
    "hindi": "पूरा"
  },
  "whole_day": {
    "english": "The whole day",
    "bishnupriya": "হারা দিন",
    "bangla": "সারা দিন",
    "hindi": "पूरा दिन"
  },
  "row_line": {
    "english": "Row, line",
    "bishnupriya": "হারা",
    "bangla": "সারি",
    "hindi": "पंक्ति"
  },
  "asthma_dry_cough": {
    "english": "Asthma, dry cough",
    "bishnupriya": "হারা",
    "bangla": "হাঁপানি, শুকনো কাশি",
    "hindi": "दमा, सूखी खांसी"
  },
  "to_defeat_or_lose": {
    "english": "(i) To defeat (ii) To lose",
    "bishnupriya": "হারা-",
    "bangla": "(i) হারানো (ii) হারা",
    "hindi": "(i) हराना (ii) हारना"
  },
  "to_cause_great_loss": {
    "english": "To cause to incur a great loss, to destroy",
    "bishnupriya": "হারা-",
    "bangla": "বড়ো ক্ষতি করানো, ধ্বংস করা",
    "hindi": "बड़ा नुकसान कराना, नष्ट करना"
  },
  "having_gaps_torn": {
    "english": "Having gaps, torn at places",
    "bishnupriya": "হারান",
    "bangla": "ফাঁকযুক্ত, ছেঁড়া",
    "hindi": "छेद वाला, फटा हुआ"
  },
  "finishing": {
    "english": "Finishing",
    "bishnupriya": "হারানি",
    "bangla": "শেষ করা",
    "hindi": "खत्म करना"
  },
  "being_defeated_or_defeating": {
    "english": "(i) Being defeated, being lost (ii) Defeating, losing",
    "bishnupriya": "হারানি",
    "bangla": "(i) হারা/হারানো (ii) হারানো",
    "hindi": "(i) हारना/खोना (ii) हराना"
  },
  "incurring_or_causing_loss": {
    "english": "(i) Incurring a great loss, being destroyed (ii) Causing to incur a great loss, destroying",
    "bishnupriya": "হারানি",
    "bangla": "(i) বড়ো ক্ষতি হওয়া (ii) ধ্বংস করা",
    "hindi": "(i) बड़ा नुकसान होना (ii) नष्ट करना"
  },
  "scoundrel": {
    "english": "Scoundrel",
    "bishnupriya": "হারামজাদা",
    "bangla": "বদমাশ",
    "hindi": "हरामजादा"
  },
  "entire_alt": {
    "english": "Entire",
    "bishnupriya": "হারি",
    "bangla": "সম্পূর্ণ",
    "hindi": "पूरा"
  },
  "whole_day_alt": {
    "english": "The whole day",
    "bishnupriya": "হারি দিন",
    "bangla": "সারা দিন",
    "hindi": "पूरा दिन"
  },
  "row_line_alt": {
    "english": "Row, line",
    "bishnupriya": "হারি",
    "bangla": "সারি",
    "hindi": "पंक्ति"
  },
  "always_alt": {
    "english": "Always",
    "bishnupriya": "হারিদাম",
    "bangla": "সবসময়",
    "hindi": "हमेशा"
  },
  "happy_happiness": {
    "english": "(i) Happy, joyful (ii) Happiness, gaiety",
    "bishnupriya": "হারৌ, হারৌপা",
    "bangla": "(i) খুশি (ii) আনন্দ",
    "hindi": "(i) खुश (ii) खुशी"
  },
  "measure_of_land": {
    "english": "A measure of land amounting to twelve kiyārs",
    "bishnupriya": "হাল",
    "bangla": "জমির পরিমাপ (বারো কিয়ার)",
    "hindi": "भूमि का माप (बारह कियार)"
  },
  "splinter": {
    "english": "Splinter",
    "bishnupriya": "হাল",
    "bangla": "কাঁটা",
    "hindi": "कांटा"
  },
  "bamboo_for_weaving": {
    "english": "(i) A piece of bamboo or wood from which a cloth under weaving hangs (ii) A hand-loom",
    "bishnupriya": "হাল",
    "bangla": "(i) তাঁতে ঝোলানো বাঁশ (ii) হাতের তাঁত",
    "hindi": "(i) ताने में लटकाने वाली लकड़ी (ii) हाथ का करघा"
  },
  "condition": {
    "english": "Condition",
    "bishnupriya": "হাল",
    "bangla": "অবস্থা",
    "hindi": "हालत"
  },
  "formation_of_pus": {
    "english": "Formation (as of pus)",
    "bishnupriya": "হাল",
    "bangla": "গঠন (পুঁজের)",
    "hindi": "बनना (मवाद का)"
  },
  "forming_pus": {
    "english": "Forming (as pus)",
    "bishnupriya": "হাল করানি",
    "bangla": "গঠন করা (পুঁজ)",
    "hindi": "बनाना (मवाद)"
  },
  "condition_alt": {
    "english": "Condition",
    "bishnupriya": "হালাত",
    "bangla": "অবস্থা",
    "hindi": "हालत"
  },
  "wifes_younger_brother": {
    "english": "Wife's younger brother",
    "bishnupriya": "হালা",
    "bangla": "স্ত্রীর ছোটো ভাই",
    "hindi": "पत्नी का छोटा भाई"
  },
  "wifes_brothers": {
    "english": "Wife's brothers",
    "bishnupriya": "হালা হামুদি",
    "bangla": "স্ত্রীর ভাইয়েরা",
    "hindi": "पत्नी के भाई"
  },
  "related_wifes_younger_brother": {
    "english": "Related as wife's younger brother",
    "bishnupriya": "হালাক",
    "bangla": "স্ত্রীর ছোটো ভাই সম্পর্ক",
    "hindi": "साला संबंध"
  },
  "related_wifes_younger_sister": {
    "english": "Related as wife's younger sister",
    "bishnupriya": "হালি-নাক",
    "bangla": "স্ত্রীর ছোটো বোন সম্পর্ক",
    "hindi": "साली संबंध"
  },
  "esculent_root_water_lily": {
    "english": "Esculent root of water-lily",
    "bishnupriya": "হালুক",
    "bangla": "জলপদ্মের ভোজ্য মূল",
    "hindi": "जल लिली का खाने योग्य कंद"
  },
  "light": {
    "english": "Light",
    "bishnupriya": "হালকা",
    "bangla": "হালকা",
    "hindi": "हल्का"
  },
  "second_stage_husking": {
    "english": "The second stage of husking",
    "bishnupriya": "হালকু, হালগু",
    "bangla": "ধান ভানার দ্বিতীয় ধাপ",
    "hindi": "चावल कूटने की दूसरी अवस्था"
  },
  "fringe_small_canal": {
    "english": "(i) Fringe (as of a pond) (ii) Small canal",
    "bishnupriya": "হাসিয়া",
    "bangla": "(i) পুকুরের কিনারা (ii) ছোটো খাল",
    "hindi": "(i) तालाब का किनारा (ii) छोटी नहर"
  },
  "laughter": {
    "english": "Laughter",
    "bishnupriya": "হাসি",
    "bangla": "হাসি",
    "hindi": "हंसी"
  },
  "laughter_and_merriment": {
    "english": "Laughter and merriment",
    "bishnupriya": "হাসি খুশি",
    "bangla": "হাসি-খুশি",
    "hindi": "हंसी-खुशी"
  },
  "fulfilled": {
    "english": "Fulfilled",
    "bishnupriya": "হাসিল",
    "bangla": "পূর্ণ",
    "hindi": "पूरा"
  },
  "joke": {
    "english": "Joke",
    "bishnupriya": "হাস্য",
    "bangla": "রসিকতা",
    "hindi": "मजाक"
  },
  "profound_regret": {
    "english": "Profound regret or repentance",
    "bishnupriya": "হা-হুতাস",
    "bangla": "গভীর অনুতাপ",
    "hindi": "गहरा पछतावा"
  },
  "to_sew_stitch": {
    "english": "To sew, to stitch",
    "bishnupriya": "হি-",
    "bangla": "সেলাই করা",
    "hindi": "सिलाई करना"
  },
  "to_learn": {
    "english": "To learn",
    "bishnupriya": "হিক-",
    "bangla": "শেখা",
    "hindi": "सीखना"
  },
  "alt_form_seka": {
    "english": "Alt. form se'kä",
    "bishnupriya": "হিকা",
    "bangla": "সেকা-র বিকল্প",
    "hindi": "सेका का वैकल्पिक रूप"
  },
  "act_of_teaching": {
    "english": "The act of teaching",
    "bishnupriya": "হিকা",
    "bangla": "শেখানো",
    "hindi": "पढ़ाना"
  },
  "to_teach": {
    "english": "To teach",
    "bishnupriya": "হিকা-",
    "bangla": "শেখানো",
    "hindi": "पढ़ाना"
  },
  "learning_teaching": {
    "english": "(i) Learning (ii) Teaching",
    "bishnupriya": "হিকানি",
    "bangla": "(i) শেখা (ii) শেখানো",
    "hindi": "(i) सीखना (ii) पढ़ाना"
  },
  "asafoetida": {
    "english": "Asafoetida",
    "bishnupriya": "হিং",
    "bangla": "হিং",
    "hindi": "हींग"
  },
  "horn": {
    "english": "Horn",
    "bishnupriya": "হিং",
    "bangla": "শিং",
    "hindi": "सींग"
  },
  "boundary": {
    "english": "Boundary",
    "bishnupriya": "হিন",
    "bangla": "সীমানা",
    "hindi": "सीमा"
  },
  "phlegm": {
    "english": "Phlegm",
    "bishnupriya": "হিনানি",
    "bangla": "কফ",
    "hindi": "बलगम"
  },
  "to_be_all_ears": {
    "english": "To be all ears, to be very anxious",
    "bishnupriya": "হিনারা-",
    "bangla": "খুব মনোযোগী হওয়া, উদ্বিগ্ন হওয়া",
    "hindi": "कान लगाना, बहुत चिंतित होना"
  },
  "being_all_ears": {
    "english": "Being all ears, being very anxious",
    "bishnupriya": "হিনারানি",
    "bangla": "খুব মনোযোগী হওয়া, উদ্বিগ্ন হওয়া",
    "hindi": "कान लगाना, बहुत चिंतित होना"
  },
  "alt_form_singarei": {
    "english": "Alt. form of singarei",
    "bishnupriya": "হিনারি",
    "bangla": "সিঙ্গারেই-এর বিকল্প",
    "hindi": "सिंगारेई का वैकल्पिक रूप"
  },
  "having_horns": {
    "english": "Having horns (as a buffalo)",
    "bishnupriya": "হিনুয়া",
    "bangla": "শিংওয়ালা (মহিষ)",
    "hindi": "सींग वाला (भैंस)"
  },
  "boundary_homestead": {
    "english": "The boundary of a homestead-land",
    "bishnupriya": "হিংকাল",
    "bangla": "বাড়ির জমির সীমানা",
    "hindi": "घर की जमीन की सीमा"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "হিংগি",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक प्रकार की मछली"
  },
  "envious_jealous": {
    "english": "Envious, jealous",
    "bishnupriya": "হিংসুক",
    "bangla": "ঈর্ষান্বিত",
    "hindi": "ईर्ष्यालु"
  },
  "to_pour_out_sprinkle": {
    "english": "(i) To pour out (water) (ii) To sprinkle",
    "bishnupriya": "হিচ",
    "bangla": "(i) ঢালা (ii) ছিটানো",
    "hindi": "(i) उंडेलना (ii) छिड़कना"
  },
  "pouring_out_sprinkling": {
    "english": "Pouring out, sprinkling",
    "bishnupriya": "হিচানি",
    "bangla": "ঢালা, ছিটানো",
    "hindi": "उंडेलना, छिड़कना"
  },
  "pond_for_fishing": {
    "english": "A pond or hole meant for fishing",
    "bishnupriya": "হিচাল",
    "bangla": "মাছ ধরার পুকুর বা গর্ত",
    "hindi": "मछली पकड़ने का तालाब या गड्ढा"
  },
  "hail_sali_crop": {
    "english": "Hail (Śāli crop)",
    "bishnupriya": "হাইল",
    "bangla": "শালি ধান",
    "hindi": "शाली फसल"
  },
  "piece_of_land_yielding_sali_crop": {
    "english": "A piece of land yielding śāli crop",
    "bishnupriya": "হাউরা",
    "bangla": "শালি ধানের জমি",
    "hindi": "शाली फसल वाली भूमि"
  },
  "true": {
    "english": "True",
    "bishnupriya": "হাক্কি",
    "bangla": "সত্য",
    "hindi": "सच"
  },
  "quickly_suddenly": {
    "english": "Quickly / suddenly",
    "bishnupriya": "হাক-হাক",
    "bangla": "হঠাৎ",
    "hindi": "अचानक"
  },
  "big_bamboo_fishing_trap": {
    "english": "Big bamboo fishing trap",
    "bishnupriya": "হাগরা",
    "bangla": "বড়ো বাঁশের জাল",
    "hindi": "बड़ा बांस का जाल"
  },
  "sting_pointed_tip": {
    "english": "Sting / pointed tip",
    "bishnupriya": "হান",
    "bangla": "হুল / ডগা",
    "hindi": "डंक / नोक"
  },
  "production_made": {
    "english": "Production / made",
    "bishnupriya": "হান",
    "bangla": "উৎপাদন / তৈরি",
    "hindi": "बनाना"
  },
  "cucumber": {
    "english": "Cucumber",
    "bishnupriya": "হানা",
    "bangla": "শসা",
    "hindi": "खीरा"
  },
  "back_bone": {
    "english": "Back-bone",
    "bishnupriya": "হানপিঠি",
    "bangla": "মেরুদণ্ড",
    "hindi": "रीढ़ की हड्डी"
  },
  "head_long_collision_animals": {
    "english": "Head-long collision (animals)",
    "bishnupriya": "সুত",
    "bangla": "মাথা ঠোকাঠুকি",
    "hindi": "सिर टकराना"
  },
  "thread": {
    "english": "Thread",
    "bishnupriya": "সুত",
    "bangla": "সুতাে",
    "hindi": "धागा"
  },
  "soda": {
    "english": "Soda",
    "bishnupriya": "সুতা",
    "bangla": "সোডা",
    "hindi": "सोडा"
  },
  "small_rope": {
    "english": "Small rope",
    "bishnupriya": "সুতলি",
    "bangla": "ছোতাে দড়ি",
    "hindi": "सूतली"
  },
  "interest_usury": {
    "english": "Interest / usury",
    "bishnupriya": "সুদ",
    "bangla": "সুদ",
    "hindi": "ब्याज"
  },
  "befitting": {
    "english": "Befitting",
    "bishnupriya": "সুনা",
    "bangla": "উপযুক্ত",
    "hindi": "मुनासिब"
  },
  "goldsmith": {
    "english": "Goldsmith",
    "bishnupriya": "সুনার",
    "bangla": "সােনার",
    "hindi": "सुनार"
  },
  "golden": {
    "english": "Golden",
    "bishnupriya": "সুনালি",
    "bangla": "সােনালি",
    "hindi": "सोने जैसा"
  },
  "lime_dust": {
    "english": "Lime / dust",
    "bishnupriya": "সুনু",
    "bangla": "চুন / ধুলাে",
    "hindi": "चूना / धूल"
  },
  "destroyed_mortified": {
    "english": "Destroyed / mortified",
    "bishnupriya": "সুম",
    "bangla": "ধ্বংস / লজ্জিত",
    "hindi": "बर्बाद / शर्मिंदा"
  },
  "children": {
    "english": "Children",
    "bishnupriya": "সুমারা",
    "bangla": "শিশু",
    "hindi": "बच्चे"
  },
  "ending_knot_of_necklace": {
    "english": "Ending knot of necklace",
    "bishnupriya": "সুমুরু",
    "bangla": "মালার শেষ গিঁট",
    "hindi": "माला का आखिरी गाँठ"
  },
  "exceeding_by_a_quarter": {
    "english": "Exceeding by a quarter",
    "bishnupriya": "সুয়া",
    "bangla": "চতুর্থাংশ বেশি",
    "hindi": "चौथाई से ज़्यादा"
  },
  "borax": {
    "english": "Borax",
    "bishnupriya": "সুয়াগা",
    "bangla": "সোহাগা",
    "hindi": "सुहागा"
  },
  "nature": {
    "english": "Nature",
    "bishnupriya": "সুয়াপ",
    "bangla": "স্বভাব",
    "hindi": "स्वभाव"
  },
  "fisherman": {
    "english": "Fisherman",
    "bishnupriya": "সুয়ারি",
    "bangla": "মাছ ধরা লোক",
    "hindi": "मछुआ"
  },
  "an_opportune_moment": {
    "english": "An opportune moment",
    "bishnupriya": "সুরাক",
    "bangla": "সুযোগ",
    "hindi": "मौका"
  },
  "key": {
    "english": "Key",
    "bishnupriya": "সুরানি",
    "bangla": "চাবি",
    "hindi": "चाबी"
  },
  "set_of_threaded_things": {
    "english": "Set of threaded things",
    "bishnupriya": "সুরি",
    "bangla": "থোকা",
    "hindi": "सेट"
  },
  "tunnel": {
    "english": "Tunnel",
    "bishnupriya": "সুরুং",
    "bangla": "সুড়ঙ্গ",
    "hindi": "सुरंग"
  },
  "game_of_sliding": {
    "english": "Game of sliding",
    "bishnupriya": "সুরুত",
    "bangla": "মাটিতে গড়াগড়ি খেলা",
    "hindi": "मिट्टी पर लुढ़कने का खेल"
  },
  "directly": {
    "english": "Directly",
    "bishnupriya": "সুরু-বুরু",
    "bangla": "সোজা",
    "hindi": "सीधे"
  },
  "top_broken_rotten_bamboo": {
    "english": "Top broken & rotten (bamboo)",
    "bishnupriya": "সুরুমা",
    "bangla": "বাঁশের মাথা পচা",
    "hindi": "बांस का सिरा सड़ा"
  },
  "opportunity": {
    "english": "Opportunity",
    "bishnupriya": "সুর্তি",
    "bangla": "সুযোগ",
    "hindi": "मौका"
  },
  "a_turn_of_duty": {
    "english": "A turn of duty",
    "bishnupriya": "সুল",
    "bangla": "পালা",
    "hindi": "बारी"
  },
  "untrue": {
    "english": "Untrue",
    "bishnupriya": "সুল",
    "bangla": "মিথ্যা",
    "hindi": "झूठा"
  },
  "reconciliation": {
    "english": "Reconciliation",
    "bishnupriya": "সুলাই",
    "bangla": "মিটমাট",
    "hindi": "सुलह"
  },
  "falsely_for_nothing": {
    "english": "Falsely / for nothing",
    "bishnupriya": "সুল্লে",
    "bangla": "মিথ্যে",
    "hindi": "फालतू"
  },
  "vagabond": {
    "english": "Vagabond",
    "bishnupriya": "সুসা",
    "bangla": "আশ্রয়হীন",
    "hindi": "आवारा"
  },
  "thread_alt": {
    "english": "Thread",
    "bishnupriya": "সুতা",
    "bangla": "সুতাে",
    "hindi": "धागा"
  },
  "similar_nature_suffix": {
    "english": "Similar / nature suffix",
    "bishnupriya": "-সে",
    "bangla": "সদৃশ প্রত্যয়",
    "hindi": "जैसा प्रत्यय"
  },
  "to_act_pretend": {
    "english": "To act / pretend",
    "bishnupriya": "সা-",
    "bangla": "ভান করা",
    "hindi": "बनना"
  },
  "eaves": {
    "english": "Eaves",
    "bishnupriya": "সেই",
    "bangla": "ছাদের নিচের দিক",
    "hindi": "छज्जा"
  },
  "chewing_the_cud": {
    "english": "Chewing the cud",
    "bishnupriya": "সেইকুপ",
    "bangla": "জাবর কাটা",
    "hindi": "जुगाली करना"
  },
  "exactly_alike": {
    "english": "Exactly alike",
    "bishnupriya": "সেইক্কাত",
    "bangla": "একদম এক",
    "hindi": "बिल्कुल एक"
  },
  "syce": {
    "english": "Syce",
    "bishnupriya": "সেইস",
    "bangla": "ঘোড়ার সহিস",
    "hindi": "साईस"
  },
  "to_be_able_foment": {
    "english": "To be able / foment",
    "bishnupriya": "সেক-",
    "bangla": "পারা / সেঁক দেওয়া",
    "hindi": "कर पाना / सेंकना"
  },
  "that_side": {
    "english": "That side",
    "bishnupriya": "সেকুল",
    "bangla": "ওদিক",
    "hindi": "उस तरफ"
  },
  "sandy_shore": {
    "english": "Sandy shore",
    "bishnupriya": "সেক্তাই",
    "bangla": "বালুতট",
    "hindi": "रेतीला किनारा"
  },
  "bat": {
    "english": "Bat",
    "bishnupriya": "সেকপি",
    "bangla": "বাদুড়",
    "hindi": "चमगादड़"
  },
  "royal_umbrella": {
    "english": "Royal umbrella",
    "bishnupriya": "সেকপিল",
    "bangla": "রাজছত্র",
    "hindi": "छत्र"
  },
  "thorough_investigation": {
    "english": "Thorough investigation",
    "bishnupriya": "সেকসাই",
    "bangla": "পুঙ্খানুপুঙ্খ তদন্ত",
    "hindi": "गहन जाँच"
  },
  "pure_clear": {
    "english": "Pure / clear",
    "bishnupriya": "সেন",
    "bangla": "বিশুদ্ধ",
    "hindi": "शुद्ध"
  },
  "tray_with_stand": {
    "english": "Tray with stand",
    "bishnupriya": "সেনকা",
    "bangla": "ত্রিপদ থালা",
    "hindi": "तिपाई वाली थाली"
  },
  "purse": {
    "english": "Purse",
    "bishnupriya": "সেঙ্গাও",
    "bangla": "পার্স",
    "hindi": "पर्स"
  },
  "help": {
    "english": "Help",
    "bishnupriya": "সেন্তাল",
    "bangla": "সাহায্য",
    "hindi": "मदद"
  },
  "zinc": {
    "english": "Zinc",
    "bishnupriya": "সেনসেন",
    "bangla": "জিংক",
    "hindi": "जस्ता"
  },
  "to_go_away": {
    "english": "To go away",
    "bishnupriya": "সেচ-",
    "bangla": "চলে যাওয়া",
    "hindi": "चले जाना"
  },
  "slip": {
    "english": "Slip",
    "bishnupriya": "সেচারান",
    "bangla": "পিছলে পড়া",
    "hindi": "फिसलना"
  },
  "to_drive_away": {
    "english": "To drive away",
    "bishnupriya": "সেচা-",
    "bangla": "তাড়ানো",
    "hindi": "भगाना"
  },
  "prostrate": {
    "english": "Prostrate",
    "bishnupriya": "সেচারান",
    "bangla": "সাষ্টাঙ্গ প্রণাম",
    "hindi": "साष्टांग"
  },
  "to_drag": {
    "english": "To drag",
    "bishnupriya": "সেচারা-",
    "bangla": "টানা",
    "hindi": "खींचना"
  },
  "lowest_part_of_roof": {
    "english": "Lowest part of roof",
    "bishnupriya": "সেচিতল",
    "bangla": "ছাদের নিচের অংশ",
    "hindi": "छत का निचला हिस्सा"
  },
  "slipped_off": {
    "english": "Slipped off",
    "bishnupriya": "সেচু",
    "bangla": "পিছলে যাওয়া",
    "hindi": "फिसल गया"
  },
  "straight_offering": {
    "english": "Straight / offering",
    "bishnupriya": "সিদ্ধা",
    "bangla": "সোজা / সিদ্ধ",
    "hindi": "सीधा / सिद्ध"
  },
  "simple_straight": {
    "english": "Simple / straight",
    "bishnupriya": "সিধা",
    "bangla": "সহজ / সোজা",
    "hindi": "आसान / सीधा"
  },
  "chest_safe": {
    "english": "Chest / safe",
    "bishnupriya": "সিন্দুক",
    "bangla": "সিন্দুক",
    "hindi": "संदूक"
  },
  "vermilion": {
    "english": "Vermilion",
    "bishnupriya": "সিন্দুর",
    "bangla": "সিঁদুর",
    "hindi": "सिंदूर"
  },
  "substitution": {
    "english": "Substitution",
    "bishnupriya": "সিন্না",
    "bangla": "বদলি",
    "hindi": "विकल्प"
  },
  "mutual_change": {
    "english": "Mutual change",
    "bishnupriya": "সিন্নাসিন্নি",
    "bangla": "পরস্পর বদল",
    "hindi": "आपस में बदलाव"
  },
  "soldier": {
    "english": "Soldier",
    "bishnupriya": "সিপাই",
    "bangla": "সিপাই",
    "hindi": "सिपाही"
  },
  "rope_for_binding_animals": {
    "english": "Rope for binding animals",
    "bishnupriya": "সিম্পুল",
    "bangla": "পশু বাঁধার দড়ি",
    "hindi": "जानवर बाँधने की रस्सी"
  },
  "bravo": {
    "english": "Bravo",
    "bishnupriya": "সিয়া",
    "bangla": "বাহবা",
    "hindi": "शाबाश"
  },
  "expert": {
    "english": "Expert",
    "bishnupriya": "সিয়ৈর",
    "bangla": "বিশেষজ্ঞ",
    "hindi": "माहिर"
  },
  "intelligent": {
    "english": "Intelligent",
    "bishnupriya": "সিয়ান",
    "bangla": "বুদ্ধিমান",
    "hindi": "समझदार"
  },
  "glue": {
    "english": "Glue",
    "bishnupriya": "সিরিশ",
    "bangla": "আঠা",
    "hindi": "गोंद"
  },
  "to_change": {
    "english": "To change",
    "bishnupriya": "সিল-",
    "bangla": "বদলানো",
    "hindi": "बदलना"
  },
  "discipline": {
    "english": "Discipline",
    "bishnupriya": "সিল",
    "bangla": "শৃঙ্খলা",
    "hindi": "अनुशासन"
  },
  "scattered": {
    "english": "Scattered",
    "bishnupriya": "সিল",
    "bangla": "ছড়ানো",
    "hindi": "बिखरा"
  },
  "sewing": {
    "english": "Sewing",
    "bishnupriya": "সিলাই",
    "bangla": "সেলাই",
    "hindi": "सिलाई"
  },
  "lead": {
    "english": "Lead",
    "bishnupriya": "সিসা",
    "bangla": "সীসা",
    "hindi": "सीसा"
  },
  "boundary": {
    "english": "Boundary",
    "bishnupriya": "সীমানা",
    "bangla": "সীমানা",
    "hindi": "सीमा"
  },
  "supplementation": {
    "english": "Supplementation",
    "bishnupriya": "সু",
    "bangla": "পূরক",
    "hindi": "पूरक"
  },
  "needle_injection": {
    "english": "Needle / injection",
    "bishnupriya": "সুই",
    "bangla": "সুই",
    "hindi": "सुई"
  },
  "pestle": {
    "english": "Pestle",
    "bishnupriya": "সুক",
    "bangla": "মুষল",
    "hindi": "मूसल"
  },
  "good_work": {
    "english": "Good work",
    "bishnupriya": "সুকাম",
    "bangla": "সৎকর্ম",
    "hindi": "अच्छा काम"
  },
  "straight_adj": {
    "english": "Straight",
    "bishnupriya": "সুক্তু",
    "bangla": "সোজা",
    "hindi": "सीधा"
  },
  "oath_to_refrain": {
    "english": "Oath to refrain",
    "bishnupriya": "সুকসা",
    "bangla": "বিরতির শপথ",
    "hindi": "संयम की शपथ"
  },
  "vagabond_alt": {
    "english": "Vagabond",
    "bishnupriya": "সুচারা",
    "bangla": "আশ্রয়হীন",
    "hindi": "आवारा"
  },
  "straight_direct": {
    "english": "Straight",
    "bishnupriya": "সুজা",
    "bangla": "সোজা",
    "hindi": "सीधा"
  },
  "directly_adv": {
    "english": "Directly",
    "bishnupriya": "সুজাসুজি",
    "bangla": "সোজাসুজি",
    "hindi": "बिल्कुल सीधे"
  },
  "mushroom": {
    "english": "Mushroom",
    "bishnupriya": "সাতিরা / সাতুম",
    "bangla": "ছত্রাক",
    "hindi": "कुकुरमुत्ता"
  },
  "least_sign_of_presence": {
    "english": "Least sign of presence",
    "bishnupriya": "সাতগুনি",
    "bangla": "উপস্থিতির সামান্য চিহ্ন",
    "hindi": "मौजूदगी का हल्का निशान"
  },
  "channel": {
    "english": "Channel",
    "bishnupriya": "সরা",
    "bangla": "খাল",
    "hindi": "नहर"
  },
  "martyr": {
    "english": "Martyr",
    "bishnupriya": "শহীদ",
    "bangla": "শহীদ",
    "hindi": "शहीद"
  },
  "iron_tripod_for_cooking": {
    "english": "Iron tripod for cooking",
    "bishnupriya": "লেচুপি",
    "bangla": "ত্রিপদ লোহার চুলা",
    "hindi": "लोहे का तिपाई चूल्हा"
  },
  "jump_leap": {
    "english": "Jump / leap",
    "bishnupriya": "লেচ্চাং",
    "bangla": "লাফ",
    "hindi": "छलांग"
  },
  "hair_cut_semi_circular_over_face_girls": {
    "english": "Hair cut semi-circular over face (girls)",
    "bishnupriya": "লেইসা",
    "bangla": "মেয়েদের সামনের চুল কাটা",
    "hindi": "लड़कियों का आगे का घुंघराला बाल"
  },
  "a_line_in_field_bounded_apartment": {
    "english": "A line in field / bounded apartment",
    "bishnupriya": "লু",
    "bangla": "ক্ষেতের সীমা / ঘর",
    "hindi": "खेत की लकीर / कमरा"
  },
  "to_bring_down": {
    "english": "To bring down",
    "bishnupriya": "লামা-",
    "bangla": "নামানো",
    "hindi": "उतारना"
  },
  "split_bamboo_for_fencing": {
    "english": "Split bamboo for fencing",
    "bishnupriya": "লামি",
    "bangla": "বেড়ার চেরা বাঁশ",
    "hindi": "बाड़ के लिए चीरा बांस"
  },
  "born_grown_late": {
    "english": "Born/grown late",
    "bishnupriya": "লামিলা",
    "bangla": "দেরিতে জন্ম/বড়ো",
    "hindi": "देर से पैदा/बड़ा"
  },
  "jackal": {
    "english": "Jackal",
    "bishnupriya": "লাম্ফুই",
    "bangla": "শিয়াল",
    "hindi": "गीदड़"
  },
  "tall_long": {
    "english": "Tall / long",
    "bishnupriya": "লাম্বা",
    "bangla": "লম্বা",
    "hindi": "लंबा"
  },
  "midst": {
    "english": "Midst",
    "bishnupriya": "লামলাক",
    "bangla": "মাঝখানে",
    "hindi": "बीच में"
  },
  "slowly": {
    "english": "Slowly",
    "bishnupriya": "লয়",
    "bangla": "আস্তে",
    "hindi": "धीरे"
  },
  "at_distances": {
    "english": "At distances",
    "bishnupriya": "লারাল-লারাল",
    "bangla": "দূরে দূরে",
    "hindi": "दूर-दूर"
  },
  "topsy_turvy_destroyed": {
    "english": "Topsy-turvy / destroyed",
    "bishnupriya": "লারচার",
    "bangla": "উল্টো-পাল্টা / ধ্বংস",
    "hindi": "उल्टा-पुल्टा / बर्बाद"
  },
  "to_shake_stir": {
    "english": "To shake / stir",
    "bishnupriya": "লার-",
    "bangla": "নাড়ানো",
    "hindi": "हिलाना"
  },
  "buttock": {
    "english": "Buttock",
    "bishnupriya": "লারি",
    "bangla": "নিতম্ব",
    "hindi": "नितंब"
  },
  "wrong": {
    "english": "Wrong",
    "bishnupriya": "লাল",
    "bangla": "ভুল",
    "hindi": "गलत"
  },
  "war": {
    "english": "War",
    "bishnupriya": "লাল",
    "bangla": "যুদ্ধ",
    "hindi": "लड़ाई"
  },
  "to_cross": {
    "english": "To cross",
    "bishnupriya": "লাল-",
    "bangla": "পার হওয়া",
    "hindi": "पार करना"
  },
  "greed": {
    "english": "Greed",
    "bishnupriya": "লালাস",
    "bangla": "লোভ",
    "hindi": "लालच"
  },
  "illicit_relation": {
    "english": "Illicit relation",
    "bishnupriya": "লালাং",
    "bangla": "অবৈধ সম্পর্ক",
    "hindi": "गैरकानूनी रिश्ता"
  },
  "queer_abnormal": {
    "english": "Queer / abnormal",
    "bishnupriya": "লালতু-বেলতু",
    "bangla": "অদ্ভুত",
    "hindi": "अजीब"
  },
  "war_battlefield": {
    "english": "War / battlefield",
    "bishnupriya": "লালফাম",
    "bangla": "যুদ্ধ / রণক্ষেত্র",
    "hindi": "जंग / रणभूमि"
  },
  "leaf_plate": {
    "english": "Leaf-plate",
    "bishnupriya": "লাহান",
    "bangla": "পাতার থালা",
    "hindi": "पत्तल"
  },
  "meadow": {
    "english": "Meadow",
    "bishnupriya": "লাহিন",
    "bangla": "তৃণভূমি",
    "hindi": "घास का मैदान"
  },
  "thread": {
    "english": "Thread",
    "bishnupriya": "লাহিন",
    "bangla": "সুতো",
    "hindi": "धागा"
  },
  "fruitlessness": {
    "english": "Fruitlessness",
    "bishnupriya": "লাহুল",
    "bangla": "নিষ্ফল",
    "hindi": "बेकार"
  },
  "slightness_pleonasm_suffix": {
    "english": "Slightness / pleonasm suffix",
    "bishnupriya": "-লি",
    "bangla": "ক্ষুদ্রতা প্রত্যয়",
    "hindi": "छोटापन प्रत्यय"
  },
  "niggardly": {
    "english": "Niggardly",
    "bishnupriya": "লিকপা",
    "bangla": "কৃপণ",
    "hindi": "कंजूस"
  },
  "dice": {
    "english": "Dice",
    "bishnupriya": "লিক্কল",
    "bangla": "পাশা",
    "hindi": "पांसा"
  },
  "necklace": {
    "english": "Necklace",
    "bishnupriya": "লীকফু",
    "bangla": "হার",
    "hindi": "हार"
  },
  "dew": {
    "english": "Dew",
    "bishnupriya": "লিকলা",
    "bangla": "শিশির",
    "hindi": "ओस"
  },
  "glass": {
    "english": "Glass",
    "bishnupriya": "লিকলি",
    "bangla": "কাচ",
    "hindi": "काँच"
  },
  "to_write": {
    "english": "To write",
    "bishnupriya": "লিখ-",
    "bangla": "লেখা",
    "hindi": "लिखना"
  },
  "strong": {
    "english": "Strong",
    "bishnupriya": "লিন",
    "bangla": "শক্ত",
    "hindi": "मज़बूत"
  },
  "conduct": {
    "english": "Conduct",
    "bishnupriya": "লিচেত",
    "bangla": "আচরণ",
    "hindi": "व्यवहार"
  },
  "whip": {
    "english": "Whip",
    "bishnupriya": "লিচ্চেই",
    "bangla": "চাবুক",
    "hindi": "कोड़ा"
  },
  "tendrils_of_cane": {
    "english": "Tendrils of cane",
    "bishnupriya": "লীতিন",
    "bangla": "বেতের ঝড়",
    "hindi": "बेंत की डालियाँ"
  },
  "to_show_teeth": {
    "english": "To show teeth",
    "bishnupriya": "লীত্কা-",
    "bangla": "দাঁত দেখানো",
    "hindi": "दाँत दिखाना"
  },
  "counting_points": {
    "english": "Counting points",
    "bishnupriya": "লিত্তিন",
    "bangla": "পয়েন্ট গোনা",
    "hindi": "पॉइंट गिनना"
  },
  "escape_piercing": {
    "english": "Escape / piercing",
    "bishnupriya": "লিত",
    "bangla": "পালানো / বিঁধা",
    "hindi": "भागना / छेदना"
  },
  "fine_mat": {
    "english": "Fine mat",
    "bishnupriya": "লীফাক",
    "bangla": "সূক্ষ্ম চাটাই",
    "hindi": "बारीक चटाई"
  },
  "whereabouts": {
    "english": "Whereabouts",
    "bishnupriya": "লিম",
    "bangla": "কোথায়",
    "hindi": "कहाँ"
  },
  "gently": {
    "english": "Gently",
    "bishnupriya": "লিরিলিরি",
    "bangla": "আলতো",
    "hindi": "धीरे-धीरे"
  },
  "long_rope": {
    "english": "Long rope",
    "bishnupriya": "লিসান",
    "bangla": "লম্বা দড়ি",
    "hindi": "लंबी रस्सी"
  },
  "laughing_showing_teeth": {
    "english": "Laughing showing teeth",
    "bishnupriya": "লিসিন",
    "bangla": "দাঁত বের করে হাসা",
    "hindi": "दाँत निकालकर हँसना"
  },
  "thousand": {
    "english": "Thousand",
    "bishnupriya": "লিসিন",
    "bangla": "হাজার",
    "hindi": "हज़ार"
  },
  "list": {
    "english": "List",
    "bishnupriya": "লিষ্টি",
    "bangla": "তালিকা",
    "hindi": "लिस्ट"
  },
  "gentle_careful": {
    "english": "Gentle / careful",
    "bishnupriya": "লু",
    "bangla": "ভদ্র",
    "hindi": "सभ्य"
  },
  "difficult_deep": {
    "english": "Difficult / deep",
    "bishnupriya": "লু",
    "bangla": "কঠিন / গভীর",
    "hindi": "मुश्किल / गहरा"
  },
  "cooked_rice_dish": {
    "english": "Cooked rice dish",
    "bishnupriya": "লুক",
    "bangla": "ভাতের পদ",
    "hindi": "चावल का पकवान"
  },
  "one_whose_head_is_shaved": {
    "english": "One whose head is shaved",
    "bishnupriya": "লুকাকপা",
    "bangla": "মাথা মুণ্ডিত",
    "hindi": "मुंडा सिर वाला"
  },
  "to_hide_conceal": {
    "english": "To hide / conceal",
    "bishnupriya": "লুকা-",
    "bangla": "লুকানো",
    "hindi": "छिपाना"
  },
  "hiding_concealing": {
    "english": "Hiding / concealing",
    "bishnupriya": "লুকানি",
    "bangla": "লুকানো",
    "hindi": "छिपाने की क्रिया"
  },
  "hide_and_seek": {
    "english": "Hide and seek",
    "bishnupriya": "লুকালুকি",
    "bangla": "লুকোচুরি",
    "hindi": "लुकाछिपी"
  },
  "volley_of_fire_torch": {
    "english": "Volley of fire / torch",
    "bishnupriya": "লুক্কা",
    "bangla": "আগুনের ঝলক / মশাল",
    "hindi": "आग की बौछार / मशाल"
  },
  "a_kind_of_fruit": {
    "english": "A kind of fruit",
    "bishnupriya": "লুক্লুকি",
    "bangla": "এক ধরনের ফল",
    "hindi": "एक तरह का फल"
  },
  "loss": {
    "english": "Loss",
    "bishnupriya": "লুকসান",
    "bangla": "ক্ষতি",
    "hindi": "नुकसान"
  },
  "dale": {
    "english": "Dale",
    "bishnupriya": "লুঙ্গা",
    "bangla": "উপত্যকা",
    "hindi": "घाटी"
  },
  "lungi": {
    "english": "Lungi",
    "bishnupriya": "লুঙ্গি",
    "bangla": "লুঙ্গি",
    "hindi": "लुंगी"
  },
  "particles_of_stone": {
    "english": "Particles of stone",
    "bishnupriya": "লুন্চেন",
    "bangla": "পাথরের কণা",
    "hindi": "पत्थर के टुकड़े"
  },
  "small_stone_for_drum": {
    "english": "Small stone for drum",
    "bishnupriya": "লুন্থৌ",
    "bangla": "ঢাক শক্ত করার পাথর",
    "hindi": "ढोल कसने का पत्थर"
  },
  "piles": {
    "english": "Piles",
    "bishnupriya": "লুন্সান",
    "bangla": "পাইলস",
    "hindi": "बवासीर"
  },
  "thin_fluffy_flour_cake": {
    "english": "Thin fluffy flour-cake",
    "bishnupriya": "লুচি",
    "bangla": "লুচি",
    "hindi": "लुची"
  },
  "big_round_fishing_net": {
    "english": "Big round fishing net",
    "bishnupriya": "লুচৌ",
    "bangla": "বড়ো গোল জাল",
    "hindi": "बड़ा गोल जाल"
  },
  "naughty": {
    "english": "Naughty",
    "bishnupriya": "লুচ্চা",
    "bangla": "দুষ্ট",
    "hindi": "शरारती"
  },
  "robbery_free_distribution": {
    "english": "Robbery / free distribution",
    "bishnupriya": "লুত",
    "bangla": "লুঠ / বিলি",
    "hindi": "लूट / मुफ्त बाँटना"
  },
  "to_plunder_roll_on_ground": {
    "english": "To plunder / roll on ground",
    "bishnupriya": "লুত-",
    "bangla": "লুঠ করা / গড়াগড়ি",
    "hindi": "लूटना / लोटना"
  },
  "to_distribute_freely_roll": {
    "english": "To distribute freely / roll",
    "bishnupriya": "লুতা-",
    "bangla": "বিলানো / গড়াগড়ি",
    "hindi": "बाँटना / लोटाना"
  },
  "ball_of_straw_for_fishing_net": {
    "english": "Ball of straw for fishing net",
    "bishnupriya": "লুঠান",
    "bangla": "জালের মুখ বন্ধ করার খড়ের গোলা",
    "hindi": "जाल का मुँह बंद करने का पुआल का गोला"
  },
  "cap": {
    "english": "Cap",
    "bishnupriya": "লুহুপ",
    "bangla": "টুপি",
    "hindi": "टोपी"
  },
  "marriage": {
    "english": "Marriage",
    "bishnupriya": "লু-হোন",
    "bangla": "বিয়ে",
    "hindi": "शादी"
  },
  "easy_ordinary": {
    "english": "Easy / ordinary",
    "bishnupriya": "লেই",
    "bangla": "সহজ",
    "hindi": "आसान"
  },
  "starch_flattery": {
    "english": "Starch / flattery",
    "bishnupriya": "লেই",
    "bangla": "মাড় / চাটুকারিতা",
    "hindi": "माड़ / चापलूसी"
  },
  "flower": {
    "english": "Flower",
    "bishnupriya": "লেই",
    "bangla": "ফুল",
    "hindi": "फूल"
  },
  "fissure_in_earth": {
    "english": "Fissure in earth",
    "bishnupriya": "লেইকাক",
    "bangla": "মাটির ফাটল",
    "hindi": "ज़मीन की दरार"
  },
  "lump_of_dry_earth": {
    "english": "Lump of dry earth",
    "bishnupriya": "লেইকান্না",
    "bangla": "শুকনো মাটির ঢেলা",
    "hindi": "सूखी मिट्टी का ढेला"
  },
  "nursing": {
    "english": "Nursing",
    "bishnupriya": "লেইকান্না",
    "bangla": "সেবা",
    "hindi": "सेवा"
  },
  "chicken_pox": {
    "english": "Chicken-pox",
    "bishnupriya": "লেইকুপ",
    "bangla": "বসন্ত",
    "hindi": "चेचक"
  },
  "neighbourhood": {
    "english": "Neighbourhood",
    "bishnupriya": "লেইকেই",
    "bangla": "পাড়া",
    "hindi": "पड़ोस"
  },
  "bottom_lowest_state": {
    "english": "Bottom / lowest state",
    "bishnupriya": "লেইখা",
    "bangla": "তলানি",
    "hindi": "तलछट"
  },
  "smaller_slanting_roof_side": {
    "english": "Smaller slanting roof side",
    "bishnupriya": "লেইখাল",
    "bangla": "ছাদের ঢালু দিক",
    "hindi": "छत का ढलुआ हिस्सा"
  },
  "disease_from_evil_spirit": {
    "english": "Disease from evil spirit",
    "bishnupriya": "লেই-নাক",
    "bangla": "ভূতের রোগ",
    "hindi": "भूत का रोग"
  },
  "yoke": {
    "english": "Yoke",
    "bishnupriya": "লেইনাল",
    "bangla": "যূথ",
    "hindi": "जुआ"
  },
  "skin_disease": {
    "english": "Skin disease",
    "bishnupriya": "লেইচাক",
    "bangla": "চর্মরোগ",
    "hindi": "त्वचा रोग"
  },
  "arrangement": {
    "english": "Arrangement",
    "bishnupriya": "লেইচিল",
    "bangla": "ব্যবস্থা",
    "hindi": "इंतज़ाम"
  },
  "path_of_evil_spirit": {
    "english": "Path of evil spirit",
    "bishnupriya": "লেইচেত",
    "bangla": "ভূতের পথ",
    "hindi": "भूत का रास्ता"
  },
  "clod": {
    "english": "Clod",
    "bishnupriya": "লেইতুম",
    "bangla": "মাটির ঢেলা",
    "hindi": "मिट्टी का ढेला"
  },
  "ornament": {
    "english": "Ornament",
    "bishnupriya": "লেইত্রেন",
    "bangla": "গহনা",
    "hindi": "आभूषण"
  },
  "mishap": {
    "english": "Mishap",
    "bishnupriya": "লেইথাক",
    "bangla": "দুর্ঘটনা",
    "hindi": "हादसा"
  },
  "reception": {
    "english": "Reception",
    "bishnupriya": "লেইথাল",
    "bangla": "অভ্যর্থনা",
    "hindi": "स्वागत"
  },
  "symptoms_of_disease": {
    "english": "Symptoms of disease",
    "bishnupriya": "লেইসাক",
    "bangla": "রোগের লক্ষণ",
    "hindi": "बीमारी के लक्षण"
  },
  "temple": {
    "english": "Temple",
    "bishnupriya": "লেইসান",
    "bangla": "মন্দির",
    "hindi": "मंदिर"
  },
  "getting_something_done_by_others_admiration": {
    "english": "Getting something done by others / admiration",
    "bishnupriya": "লেইসি",
    "bangla": "কাজ করিয়ে নেওয়া / প্রশংসা",
    "hindi": "काम करवाना / तारीफ"
  },
  "stick_for_hand_loom": {
    "english": "Stick for hand-loom",
    "bishnupriya": "লেইসি",
    "bangla": "তাঁতের কাঠি",
    "hindi": "करघे की लकड़ी"
  },
  "uneven_earth": {
    "english": "Uneven earth",
    "bishnupriya": "লেইসি",
    "bangla": "উঁচু-নিচু মাটি",
    "hindi": "ऊँची-नीची ज़मीन"
  },
  "white_ant": {
    "english": "White ant",
    "bishnupriya": "লেইসৌ",
    "bangla": "উইপোকা",
    "hindi": "दीमक"
  },
  "behaviour": {
    "english": "Behaviour",
    "bishnupriya": "লেইসৌ",
    "bangla": "আচরণ",
    "hindi": "व्यवहार"
  },
  "deep_mud": {
    "english": "Deep mud",
    "bishnupriya": "লেইহপ",
    "bangla": "গভীর কাদা",
    "hindi": "गहरा कीचड़"
  },
  "kind_of_vegetable": {
    "english": "A kind of vegetable",
    "bishnupriya": "লেউ",
    "bangla": "এক ধরনের শাক",
    "hindi": "एक तरह का साग"
  },
  "negligible": {
    "english": "Negligible",
    "bishnupriya": "লেউড়া",
    "bangla": "তুচ্ছ",
    "hindi": "नगण्य"
  },
  "looseness_of_swinging_thing": {
    "english": "Looseness of swinging thing",
    "bishnupriya": "লেকলেক",
    "bangla": "ঝুলতে ঝুলতে ঢিলা",
    "hindi": "लटकते हुए ढीलापन"
  },
  "to_write": {
    "english": "To write",
    "bishnupriya": "লেখ-",
    "bangla": "লেখা",
    "hindi": "लिखना"
  },
  "writing_causing_to_write": {
    "english": "Writing / causing to write",
    "bishnupriya": "লেখানি",
    "bangla": "লেখা",
    "hindi": "लिखने की क्रिया"
  },
  "same_age_arrayed": {
    "english": "Of the same age / arrayed",
    "bishnupriya": "লেন",
    "bangla": "সমবয়সী / সারিবদ্ধ",
    "hindi": "हमउम्र / कतारबद्ध"
  },
  "to_compose": {
    "english": "To compose",
    "bishnupriya": "লেন",
    "bangla": "রচনা করা",
    "hindi": "रचना करना"
  },
  "sandy": {
    "english": "Sandy",
    "bishnupriya": "লেঞায়া",
    "bangla": "বালুকাময়",
    "hindi": "रेतीला"
  },
  "sand": {
    "english": "Sand",
    "bishnupriya": "লেনৌ",
    "bangla": "বালি",
    "hindi": "रेत"
  },
  "same_age": {
    "english": "Of the same age",
    "bishnupriya": "লেনকা",
    "bangla": "সমবয়সী",
    "hindi": "हमउम्र"
  },
  "lame": {
    "english": "Lame",
    "bishnupriya": "লেঙ্গারা",
    "bangla": "খোঁড়া",
    "hindi": "लंगड़ा"
  },
  "loin_cloth": {
    "english": "Loin-cloth",
    "bishnupriya": "লেঙ্গি",
    "bangla": "লঙ্গোট",
    "hindi": "लंगोट"
  },
  "tail": {
    "english": "Tail",
    "bishnupriya": "লেঙ্গুর",
    "bangla": "লেজ",
    "hindi": "पूँछ"
  },
  "shoulder": {
    "english": "Shoulder",
    "bishnupriya": "লেঞ্চুম",
    "bangla": "কাঁধ",
    "hindi": "कंधा"
  },
  "naked": {
    "english": "Naked",
    "bishnupriya": "লেন্তা",
    "bangla": "উলঙ্গ",
    "hindi": "नंगा"
  },
  "loin_cloth_alt": {
    "english": "Loin-cloth",
    "bishnupriya": "লেন্তি",
    "bangla": "লঙ্গোট",
    "hindi": "लंगोट"
  },
  "composer": {
    "english": "Composer",
    "bishnupriya": "লেনপা",
    "bangla": "রচয়িতা",
    "hindi": "रचनाकार"
  },
  "greedy_helpless_look": {
    "english": "Greedy / helpless look",
    "bishnupriya": "লেনলেন",
    "bangla": "লোভী/অসহায় দৃষ্টি",
    "hindi": "लालची/बेबस नज़र"
  },
  "tail_worthless_abuse": {
    "english": "Tail / worthless (abuse)",
    "bishnupriya": "লেজ",
    "bangla": "লেজ / বেকার (গালি)",
    "hindi": "पूँछ / बेकार (गाली)"
  },
  "muddy_pool": {
    "english": "Muddy pool",
    "bishnupriya": "লেত",
    "bangla": "কাদার গর্ত",
    "hindi": "कीचड़ का गड्ढा"
  },
  "to_make_dirty_with_mud": {
    "english": "To make dirty with mud",
    "bishnupriya": "লেতা-",
    "bangla": "কাদায় মাখানো",
    "hindi": "कीचड़ लगाना"
  },
  "dirty": {
    "english": "Dirty",
    "bishnupriya": "লেতারি",
    "bangla": "ময়লা",
    "hindi": "गंदा"
  },
  "quilt": {
    "english": "Quilt",
    "bishnupriya": "লেপ",
    "bangla": "লেপ",
    "hindi": "रजाई"
  },
  "certain_resolute": {
    "english": "Certain / resolute",
    "bishnupriya": "লেপ",
    "bangla": "নিশ্চিত",
    "hindi": "पक्का"
  },
  "to_smear_paint": {
    "english": "To smear / paint",
    "bishnupriya": "লেপ-",
    "bangla": "মাখা",
    "hindi": "लेपना"
  },
  "plaster": {
    "english": "Plaster",
    "bishnupriya": "লেপা",
    "bangla": "পলেস্তারা",
    "hindi": "प्लास्टर"
  },
  "to_cause_to_smear": {
    "english": "To cause to smear",
    "bishnupriya": "লেপুয়া-",
    "bangla": "মাখানো",
    "hindi": "लगवाना"
  },
  "lemon": {
    "english": "Lemon",
    "bishnupriya": "লেবু",
    "bangla": "লেবু",
    "hindi": "नींबू"
  },
  "lamp": {
    "english": "Lamp",
    "bishnupriya": "লেম",
    "bangla": "ল্যাম্প",
    "hindi": "लैंप"
  },
  "grave": {
    "english": "Grave",
    "bishnupriya": "লেম",
    "bangla": "কবর",
    "hindi": "कब्र"
  },
  "surplus": {
    "english": "Surplus",
    "bishnupriya": "লেম",
    "bangla": "অতিরিক্ত",
    "hindi": "बचा हुआ"
  },
  "more_than_sufficient": {
    "english": "More than sufficient",
    "bishnupriya": "লেম্পা-আম্পা",
    "bangla": "প্রচুর",
    "hindi": "बहुत ज़्यादा"
  },
  "shoulder": {
    "english": "Shoulder",
    "bishnupriya": "লেম্পাল",
    "bangla": "কাঁধ",
    "hindi": "कंधा"
  },
  "loose_swinging": {
    "english": "Loose swinging",
    "bishnupriya": "লেরেক-লেরেক",
    "bangla": "ঝুলতে ঝুলতে ঢিলা",
    "hindi": "लटकते हुए ढीला"
  },
  "weak_standing": {
    "english": "Weak standing",
    "bishnupriya": "লেরেন-লেরেন",
    "bangla": "দাঁড়িয়ে দুর্বল",
    "hindi": "खड़े-खड़े कमज़ोर"
  },
  "big_suffix": {
    "english": "Big suffix",
    "bishnupriya": "-লেল",
    "bangla": "বড়ো প্রত্যয়",
    "hindi": "बड़ा प्रत्यय"
  },
  "strong_desire_for_food": {
    "english": "Strong desire for food",
    "bishnupriya": "লেলে",
    "bangla": "খাওয়ার লোভ",
    "hindi": "खाने की तलब"
  },
  "to_lick": {
    "english": "To lick",
    "bishnupriya": "লেহ-",
    "bangla": "চাটা",
    "hindi": "चाटना"
  },
  "licking": {
    "english": "Licking",
    "bishnupriya": "লেহান",
    "bangla": "চাটা",
    "hindi": "चाटने की क्रिया"
  },
  "counting": {
    "english": "Counting",
    "bishnupriya": "লেহান",
    "bangla": "গোনা",
    "hindi": "गिनती"
  },
  "champa_flower": {
    "english": "Champa flower",
    "bishnupriya": "লেহৌ",
    "bangla": "চাঁপা ফুল",
    "hindi": "चंपा फूल"
  },
  "mutual_licking": {
    "english": "Mutual licking",
    "bishnupriya": "লেহালেহি",
    "bangla": "পরস্পর চাটা",
    "hindi": "आपस में चाटना"
  },
  "small_louse": {
    "english": "Small louse",
    "bishnupriya": "লেহি",
    "bangla": "ছোটো উকুন",
    "hindi": "छोटी जूँ"
  },
  "greedy": {
    "english": "Greedy",
    "bishnupriya": "লোভী",
    "bangla": "লোভী",
    "hindi": "लालची"
  },
  "writing_measuring": {
    "english": "Writing & measuring",
    "bishnupriya": "লেখাজুখা",
    "bangla": "লেখা ও মাপা",
    "hindi": "लिखना और नापना"
  },
  "to_cause_to_write": {
    "english": "To cause to write",
    "bishnupriya": "লেখুয়া-",
    "bangla": "লেখানো",
    "hindi": "लिखवाना"
  },
  "bunch": {
    "english": "Bunch",
    "bishnupriya": "লৌ",
    "bangla": "গোছা",
    "hindi": "गुच्छा"
  },
  "gourd": {
    "english": "Gourd",
    "bishnupriya": "লৌ",
    "bangla": "লাউ",
    "hindi": "लौकी"
  },
  "wrestling_technique": {
    "english": "A wrestling technique",
    "bishnupriya": "লৌ",
    "bangla": "কুস্তির কায়দা",
    "hindi": "कुश्ती का दाँव"
  },
  "loud_cry": {
    "english": "Loud cry",
    "bishnupriya": "লৌ",
    "bangla": "চিৎকার",
    "hindi": "चीख"
  },
  "hypocrisy": {
    "english": "Hypocrisy",
    "bishnupriya": "লৌকাল",
    "bangla": "ভণ্ডামি",
    "hindi": "पाखंड"
  },
  "acceptance": {
    "english": "Acceptance",
    "bishnupriya": "লৌখাত",
    "bangla": "গ্রহণ",
    "hindi": "कबूल करना"
  },
  "damaged_paddy": {
    "english": "Damaged paddy",
    "bishnupriya": "লৌচাকি",
    "bangla": "ক্ষতিগ্রস্ত ধান",
    "hindi": "खराब धान"
  },
  "satan_knave": {
    "english": "Satan / knave",
    "bishnupriya": "শৈতান",
    "bangla": "শয়তান",
    "hindi": "शैतान"
  },
  "cunning": {
    "english": "Cunning",
    "bishnupriya": "শৈতানি",
    "bangla": "ধূর্ততা",
    "hindi": "शैतानी"
  },
  "sugar": {
    "english": "Sugar",
    "bishnupriya": "শাক্কর",
    "bangla": "চিনি",
    "hindi": "शक्कर"
  },
  "moringa_tree": {
    "english": "Moringa tree",
    "bishnupriya": "শাজনা",
    "bangla": "সজনে",
    "hindi": "सहजन"
  },
  "tall_grass_for_roofing": {
    "english": "Tall grass for roofing",
    "bishnupriya": "শান",
    "bangla": "খড়",
    "hindi": "घास"
  },
  "bed_for_ancestor_ceremony": {
    "english": "Bed for ancestor ceremony",
    "bishnupriya": "শাজ্যা",
    "bangla": "শ্রাদ্ধের বিছানা",
    "hindi": "श्राद्ध का बिस्तर"
  },
  "town": {
    "english": "Town",
    "bishnupriya": "শহর",
    "bangla": "শহর",
    "hindi": "शहर"
  },
  "partner": {
    "english": "Partner",
    "bishnupriya": "শরিক",
    "bangla": "অংশীদার",
    "hindi": "साझेदार"
  },
  "partnership": {
    "english": "Partnership",
    "bishnupriya": "শরিকানা",
    "bangla": "অংশীদারিত্ব",
    "hindi": "साझेदारी"
  },
  "matches": {
    "english": "Matches",
    "bishnupriya": "শলাই",
    "bangla": "দেশলাই",
    "hindi": "माचिस"
  },
  "sharpening": {
    "english": "Sharpening",
    "bishnupriya": "সৈন",
    "bangla": "শান দেওয়া",
    "hindi": "धार करना"
  },
  "bamboo_wood_at_roof_corner": {
    "english": "Bamboo/wood at roof corner",
    "bishnupriya": "সাকা",
    "bangla": "ছাদের কোণার বাঁশ",
    "hindi": "छत के कोने का बांस"
  },
  "conch_shell_bangle": {
    "english": "Conch-shell bangle",
    "bishnupriya": "সাখা",
    "bangla": "শাঁখা",
    "hindi": "शंखा"
  },
  "curse": {
    "english": "Curse",
    "bishnupriya": "শাপান্ত",
    "bangla": "অভিশাপ",
    "hindi": "श्राप"
  },
  "iron_bar": {
    "english": "Iron bar",
    "bishnupriya": "সাবল",
    "bangla": "লোহার রড",
    "hindi": "लोहे की सलाख"
  },
  "snail": {
    "english": "Snail",
    "bishnupriya": "শামুক",
    "bangla": "শামুক",
    "hindi": "घोंघा"
  },
  "tresses": {
    "english": "Tresses",
    "bishnupriya": "শামচি",
    "bangla": "চুলের গোছা",
    "hindi": "चोटी"
  },
  "principal_female_garment_sari": {
    "english": "Principal female garment (sari)",
    "bishnupriya": "শাড়ি",
    "bangla": "শাড়ি",
    "hindi": "साड़ी"
  },
  "woolen_shawl": {
    "english": "Woolen shawl",
    "bishnupriya": "শাল",
    "bangla": "শাল",
    "hindi": "शाल"
  },
  "salagram_stone": {
    "english": "Salagram stone",
    "bishnupriya": "শালগ্রাম",
    "bangla": "শালগ্রাম",
    "hindi": "शालिग्राम"
  },
  "root": {
    "english": "Root",
    "bishnupriya": "শিকার",
    "bangla": "শিকড়",
    "hindi": "जड़"
  },
  "chain": {
    "english": "Chain",
    "bishnupriya": "শিকল",
    "bangla": "শিকল",
    "hindi": "ज़ंजीर"
  },
  "hunting_prey": {
    "english": "Hunting / prey",
    "bishnupriya": "শিকার",
    "bangla": "শিকার",
    "hindi": "शिकार"
  },
  "hunter": {
    "english": "Hunter",
    "bishnupriya": "শিকারি",
    "bangla": "শিকারি",
    "hindi": "शिकारी"
  },
  "tuft_of_hair": {
    "english": "Tuft of hair",
    "bishnupriya": "শিক্কা",
    "bangla": "শিখা",
    "hindi": "चोटी"
  },
  "sixth_day_after_birth": {
    "english": "Sixth day after birth",
    "bishnupriya": "ষষ্ঠী",
    "bangla": "ষষ্ঠী",
    "hindi": "छठी"
  },
  "along_with_prefix": {
    "english": "Along with (prefix)",
    "bishnupriya": "সা+",
    "bangla": "সাথে",
    "hindi": "साथ"
  },
  "loss": {
    "english": "Loss",
    "bishnupriya": "সা",
    "bangla": "ক্ষতি",
    "hindi": "नुकसान"
  },
  "signature": {
    "english": "Signature",
    "bishnupriya": "সই",
    "bangla": "সই",
    "hindi": "दस्तखत"
  },
  "mistake_wrong": {
    "english": "Mistake / wrong",
    "bishnupriya": "সই",
    "bangla": "ভুল",
    "hindi": "गलती"
  },
  "to_chip_cut_small": {
    "english": "To chip / cut small",
    "bishnupriya": "সৈ",
    "bangla": "কুচানো",
    "hindi": "कतरना"
  },
  "curse_alt": {
    "english": "Curse",
    "bishnupriya": "শিরাপ",
    "bangla": "অভিশাপ",
    "hindi": "श्राप"
  },
  "sectarian_forehead_mark": {
    "english": "Sectarian forehead mark",
    "bishnupriya": "শিরিশি",
    "bangla": "তিলক",
    "hindi": "तिलक"
  },
  "stone_wood_slab": {
    "english": "Stone/wood slab",
    "bishnupriya": "শিলপট",
    "bangla": "পাথর/কাঠের তক্তা",
    "hindi": "पत्थर/लकड़ी की तख्ती"
  },
  "only_correct": {
    "english": "Only / correct",
    "bishnupriya": "শুদ্ধ",
    "bangla": "শুধু / সঠিক",
    "hindi": "सिर्फ / शुद्ध"
  },
  "repayment_revenge": {
    "english": "Repayment / revenge",
    "bishnupriya": "শুধ",
    "bangla": "শোধ / প্রতিশোধ",
    "hindi": "हिसाब / बदला"
  },
  "to_rectify": {
    "english": "To rectify",
    "bishnupriya": "শুধরা-",
    "bangla": "সংশোধন করা",
    "hindi": "सुधारना"
  },
  "beginning": {
    "english": "Beginning",
    "bishnupriya": "শুরু",
    "bangla": "শুরু",
    "hindi": "शुरू"
  },
  "sanskrit_verse": {
    "english": "Sanskrit verse",
    "bishnupriya": "শ্লোক",
    "bangla": "শ্লোক",
    "hindi": "श्लोक"
  },
  "colic_pain": {
    "english": "Colic pain",
    "bishnupriya": "শূল",
    "bangla": "পেটের ব্যথা",
    "hindi": "पेट दर्द"
  },
  "to_show_vanity": {
    "english": "To show vanity",
    "bishnupriya": "সেলা-",
    "bangla": "গর্ব দেখানো",
    "hindi": "घमंड दिखाना"
  },
  "child": {
    "english": "Child",
    "bishnupriya": "সৌ",
    "bangla": "শিশু",
    "hindi": "बच्चा"
  },
  "childish": {
    "english": "Childish",
    "bishnupriya": "শৌরা",
    "bangla": "শিশুসুলভ",
    "hindi": "बालसुलभ"
  },
  "sixty": {
    "english": "Sixty",
    "bishnupriya": "শাট",
    "bangla": "ষাট",
    "hindi": "साठ"
  },
  "sixteen": {
    "english": "Sixteen",
    "bishnupriya": "শোল্লা",
    "bangla": "ষোল",
    "hindi": "सोलह"
  },
  "stage_in_kirtana": {
    "english": "A stage in kirtana",
    "bishnupriya": "সলিজাক",
    "bangla": "কীর্তনের পর্যায়",
    "hindi": "कीर्तन का चरण"
  },
  "mistake_mishap": {
    "english": "Mistake / mishap",
    "bishnupriya": "সৈনাম",
    "bangla": "ভুল / দুর্ঘটনা",
    "hindi": "गलती / हादसा"
  },
  "bet_fixture": {
    "english": "Bet / fixture",
    "bishnupriya": "সতর",
    "bangla": "বাজি",
    "hindi": "शर्त"
  },
  "durable_pain_suppressed_anger": {
    "english": "Durable pain / suppressed anger",
    "bishnupriya": "সৈল",
    "bangla": "দীর্ঘস্থায়ী যন্ত্রণা",
    "hindi": "लंबी तकलीफ"
  },
  "to_reboil_in_oil_ghee": {
    "english": "To reboil in oil/ghee",
    "bishnupriya": "সক",
    "bangla": "তেলে ফের ভাজা",
    "hindi": "तेल में फिर तलना"
  },
  "morning": {
    "english": "Morning",
    "bishnupriya": "সকাল",
    "bangla": "সকাল",
    "hindi": "सुबह"
  },
  "style": {
    "english": "Style",
    "bishnupriya": "সাকিন",
    "bangla": "স্টাইল",
    "hindi": "स्टाइल"
  },
  "luxury": {
    "english": "Luxury",
    "bishnupriya": "সখ",
    "bangla": "বিলাস",
    "hindi": "ऐश"
  },
  "association": {
    "english": "Association",
    "bishnupriya": "সন",
    "bangla": "সঙ্গ",
    "hindi": "संग"
  },
  "deficiency": {
    "english": "Deficiency",
    "bishnupriya": "সংকুলান",
    "bangla": "অভাব",
    "hindi": "कमी"
  },
  "companion": {
    "english": "Companion",
    "bishnupriya": "সঙ্গ",
    "bangla": "সঙ্গী",
    "hindi": "साथी"
  },
  "difficult": {
    "english": "Difficult",
    "bishnupriya": "সাঙ্গিল",
    "bangla": "কঠিন",
    "hindi": "मुश्किल"
  },
  "son_of_monk": {
    "english": "Son of monk",
    "bishnupriya": "সঞ্জমি",
    "bangla": "সন্ন্যাসীর ছেলে",
    "hindi": "साधु का बेटा"
  },
  "reformation_cremation": {
    "english": "Reformation / cremation",
    "bishnupriya": "সংস্কার",
    "bangla": "সংস্কার / দাহ",
    "hindi": "संस्कार / दाह"
  },
  "usually_often": {
    "english": "Usually / often",
    "bishnupriya": "সচরাচর",
    "bangla": "সাধারণত",
    "hindi": "आमतौर पर"
  },
  "true_accurate": {
    "english": "True / accurate",
    "bishnupriya": "সাঠিক",
    "bangla": "সঠিক",
    "hindi": "सही"
  },
  "instrument_for_bailing_water": {
    "english": "Instrument for bailing water",
    "bishnupriya": "সাত",
    "bangla": "জল তুলার যন্ত্র",
    "hindi": "पानी निकालने का औज़ार"
  },
  "seventeen": {
    "english": "Seventeen",
    "bishnupriya": "সতরা",
    "bangla": "সতেরো",
    "hindi": "सत्रह"
  },
  "carpet": {
    "english": "Carpet",
    "bishnupriya": "সতরঞ্চি",
    "bangla": "সতরঞ্চি",
    "hindi": "सतरंजी"
  },
  "headquarter": {
    "english": "Headquarter",
    "bishnupriya": "সদর",
    "bangla": "সদর",
    "hindi": "सदर"
  },
  "merchant": {
    "english": "Merchant",
    "bishnupriya": "সদাগর",
    "bangla": "সওদাগর",
    "hindi": "सौदागर"
  },
  "liberal_in_gift": {
    "english": "Liberal in gift",
    "bishnupriya": "সদাব্রত",
    "bangla": "দানশীল",
    "hindi": "दानवीर"
  },
  "year": {
    "english": "Year",
    "bishnupriya": "সন",
    "bangla": "বছর",
    "hindi": "साल"
  },
  "doubt": {
    "english": "Doubt",
    "bishnupriya": "সন্দেহ",
    "bangla": "সন্দেহ",
    "hindi": "शक"
  },
  "chest_safe": {
    "english": "Chest / safe",
    "bishnupriya": "সন্দুক",
    "bangla": "সিন্দুক",
    "hindi": "संदूक"
  },
  "week": {
    "english": "Week",
    "bishnupriya": "সপ্তাহ",
    "bangla": "সপ্তাহ",
    "hindi": "हफ्ता"
  },
  "tour": {
    "english": "Tour",
    "bishnupriya": "সফর",
    "bangla": "সফর",
    "hindi": "सफर"
  },
  "green": {
    "english": "Green",
    "bishnupriya": "সবুজ",
    "bangla": "সবুজ",
    "hindi": "हरा"
  },
  "patience": {
    "english": "Patience",
    "bishnupriya": "সবুর",
    "bangla": "ধৈর্য",
    "hindi": "सब्र"
  },
  "green_vegetables": {
    "english": "Green vegetables",
    "bishnupriya": "সবজি",
    "bangla": "সবজি",
    "hindi": "सब्ज़ी"
  },
  "bear": {
    "english": "Bear",
    "bishnupriya": "সাম",
    "bangla": "ভাল্লুক",
    "hindi": "भालू"
  },
  "summons": {
    "english": "Summons",
    "bishnupriya": "সমন",
    "bangla": "সমন",
    "hindi": "समन"
  },
  "sea": {
    "english": "Sea",
    "bishnupriya": "সমুদ্র",
    "bangla": "সমুদ্র",
    "hindi": "समुद्र"
  },
  "thoroughly": {
    "english": "Thoroughly",
    "bishnupriya": "সমোলে",
    "bangla": "পুরোপুরি",
    "hindi": "पूरी तरह"
  },
  "to_understand_fully": {
    "english": "To understand fully",
    "bishnupriya": "সমঝ-",
    "bangla": "পুরোপুরি বোঝা",
    "hindi": "अच्छे से समझना"
  },
  "probable": {
    "english": "Probable",
    "bishnupriya": "সম্ভবপর",
    "bangla": "সম্ভব",
    "hindi": "मुमकिन"
  },
  "reception": {
    "english": "Reception",
    "bishnupriya": "সম্ভাষা",
    "bangla": "অভ্যর্থনা",
    "hindi": "स्वागत"
  },
  "honourable": {
    "english": "Honourable",
    "bishnupriya": "সম্মানীয়",
    "bangla": "সম্মানিত",
    "hindi": "माननीय"
  },
  "voice_tone": {
    "english": "Voice / tone",
    "bishnupriya": "স্বর",
    "bangla": "স্বর",
    "hindi": "स्वर"
  },
  "leisure": {
    "english": "Leisure",
    "bishnupriya": "সরাই",
    "bangla": "অবসর",
    "hindi": "फुरसत"
  },
  "road": {
    "english": "Road",
    "bishnupriya": "সড়ক",
    "bangla": "রাস্তা",
    "hindi": "सड़क"
  },
  "dryness_of_loose_things": {
    "english": "Dryness of loose things",
    "bishnupriya": "সরান-সরান",
    "bangla": "শুকনো শব্দ",
    "hindi": "सूखा शब्द"
  },
  "equipments": {
    "english": "Equipments",
    "bishnupriya": "সরঞ্জাম",
    "bangla": "সাজসরঞ্জাম",
    "hindi": "सामान"
  },
  "simplicity": {
    "english": "Simplicity",
    "bishnupriya": "সরলতা",
    "bangla": "সরলতা",
    "hindi": "सरलता"
  },
  "fine": {
    "english": "Fine",
    "bishnupriya": "সরস",
    "bangla": "সুস্বাদু",
    "hindi": "स्वादिष्ट"
  },
  "lord_of_the_gods": {
    "english": "Lord of the gods",
    "bishnupriya": "সরারেল / সরাহাল",
    "bangla": "দেবরাজ",
    "hindi": "देवराज"
  },
  "directly_straightway": {
    "english": "Directly / straightway",
    "bishnupriya": "সরাসরি",
    "bangla": "সোজা",
    "hindi": "सीधे"
  },
  "government": {
    "english": "Government",
    "bishnupriya": "সরকার",
    "bangla": "সরকার",
    "hindi": "सरकार"
  },
  "state_related": {
    "english": "State-related",
    "bishnupriya": "সরকারি",
    "bangla": "সরকারি",
    "hindi": "सरकारी"
  },
  "venue_place_of_occurrence": {
    "english": "Venue / place of occurrence",
    "bishnupriya": "সরজমিন",
    "bangla": "ঘটনাস্থল",
    "hindi": "घटनास्थल"
  },
  "condition": {
    "english": "Condition",
    "bishnupriya": "সর্ত",
    "bangla": "শর্ত",
    "hindi": "शर्त"
  },
  "chief_head_man": {
    "english": "Chief / head-man",
    "bishnupriya": "সর্দার",
    "bangla": "সর্দার",
    "hindi": "सरदार"
  },
  "leadership": {
    "english": "Leadership",
    "bishnupriya": "সর্দারি",
    "bangla": "নেতৃত্ব",
    "hindi": "सरदारी"
  },
  "cold_weather": {
    "english": "Cold (weather)",
    "bishnupriya": "সর্দি",
    "bangla": "সর্দি",
    "hindi": "सर्दी"
  },
  "position_of_breath": {
    "english": "Position of breath",
    "bishnupriya": "সরফাম",
    "bangla": "শ্বাসের অবস্থান",
    "hindi": "साँस की स्थिति"
  },
  "beverage": {
    "english": "Beverage",
    "bishnupriya": "সরবত",
    "bangla": "শরবত",
    "hindi": "शरबत"
  },
  "all_in_all": {
    "english": "All-in-all",
    "bishnupriya": "সর্বে-সর্বা",
    "bangla": "সবকিছু",
    "hindi": "सब कुछ"
  },
  "quick_performance_dry_leaves_sound": {
    "english": "Quick performance / dry leaves sound",
    "bishnupriya": "সরসর",
    "bangla": "ঝড়ঝড় / শুকনশুন শব্দ",
    "hindi": "झड़झड़ / सूखी पत्तियों की आवाज़"
  },
  "line_turn_of_duty": {
    "english": "Line / turn of duty",
    "bishnupriya": "সাল",
    "bangla": "লাইন / পালা",
    "hindi": "लाइन / बारी"
  },
  "to_be_agitated": {
    "english": "To be agitated",
    "bishnupriya": "সাল-",
    "bangla": "উত্তেজিত হওয়া",
    "hindi": "उत्तेजित होना"
  },
  "muttering_praising": {
    "english": "Muttering / praising",
    "bishnupriya": "সাল",
    "bangla": "বচসা / প্রশংসা",
    "hindi": "बुदबुदाना / तारीफ"
  },
  "weak": {
    "english": "Weak",
    "bishnupriya": "সাল",
    "bangla": "দুর্বল",
    "hindi": "कमज़ोर"
  },
  "white_skin_mark": {
    "english": "White skin mark",
    "bishnupriya": "সালাম",
    "bangla": "সাদা দাগ",
    "hindi": "सफेद निशान"
  },
  "sack": {
    "english": "Sack",
    "bishnupriya": "সালা",
    "bangla": "বস্তা",
    "hindi": "बोरी"
  },
  "to_provoke": {
    "english": "To provoke",
    "bishnupriya": "সালা-",
    "bangla": "উত্তেজিত করা",
    "hindi": "भड़काना"
  },
  "stork": {
    "english": "Stork",
    "bishnupriya": "সালাকাক",
    "bangla": "সারস",
    "hindi": "सारस"
  },
  "salutation": {
    "english": "Salutation",
    "bishnupriya": "সালাম",
    "bangla": "সালাম",
    "hindi": "सलाम"
  },
  "uneasiness": {
    "english": "Uneasiness",
    "bishnupriya": "সালিমালি",
    "bangla": "অস্বস্তি",
    "hindi": "बेचैनी"
  },
  "easily_provoked": {
    "english": "Easily provoked",
    "bishnupriya": "সালিয়া",
    "bangla": "সহজে রেগে যাওয়া",
    "hindi": "जल्दी गुस्सा आने वाला"
  },
  "to_tolerate": {
    "english": "To tolerate",
    "bishnupriya": "সহ-",
    "bangla": "সহ্য করা",
    "hindi": "सहना"
  },
  "assistant": {
    "english": "Assistant",
    "bishnupriya": "সহকারী",
    "bangla": "সহকারী",
    "hindi": "सहायक"
  },
  "similarity_suffix": {
    "english": "Similarity suffix",
    "bishnupriya": "-সা",
    "bangla": "সদৃশ প্রত্যয়",
    "hindi": "जैसा प्रत्यय"
  },
  "to_pretend": {
    "english": "To pretend",
    "bishnupriya": "সা-",
    "bangla": "ভান করা",
    "hindi": "बनना"
  },
  "pretending_honesty": {
    "english": "Pretending honesty",
    "bishnupriya": "সৌকার",
    "bangla": "সাধু সেজে থাকা",
    "hindi": "साधु बनना"
  },
  "growth": {
    "english": "Growth",
    "bishnupriya": "সৌনা",
    "bangla": "বৃদ্ধি",
    "hindi": "बढ़ोतरी"
  },
  "substitution": {
    "english": "Substitution",
    "bishnupriya": "সাক",
    "bangla": "বদলি",
    "hindi": "विकल्प"
  },
  "horse_bean": {
    "english": "Horse-bean",
    "bishnupriya": "সাকল-খাই",
    "bangla": "ঘোড়ার ডাল",
    "hindi": "घोड़े की दाल"
  },
  "thursday": {
    "english": "Thursday",
    "bishnupriya": "সাকলসেল",
    "bangla": "বৃহস্পতিবার",
    "hindi": "गुरुवार"
  },
  "relatives": {
    "english": "Relatives",
    "bishnupriya": "সাকেই",
    "bangla": "আত্মীয়",
    "hindi": "रिश्तेदार"
  },
  "true_exact": {
    "english": "True / exact",
    "bishnupriya": "সাক্কা",
    "bangla": "সত্য",
    "hindi": "सच"
  },
  "able_strong": {
    "english": "Able / strong",
    "bishnupriya": "সাক্কল",
    "bangla": "সক্ষম",
    "hindi": "काबिल"
  },
  "ugly": {
    "english": "Ugly",
    "bishnupriya": "সাক্তি",
    "bangla": "কুৎসিত",
    "hindi": "बदसूरत"
  },
  "evidence": {
    "english": "Evidence",
    "bishnupriya": "সাক্ষী",
    "bangla": "সাক্ষী",
    "hindi": "गवाह"
  },
  "horse": {
    "english": "Horse",
    "bishnupriya": "সাগল",
    "bangla": "ঘোড়া",
    "hindi": "घोड़ा"
  },
  "house_stead": {
    "english": "House-stead",
    "bishnupriya": "সান",
    "bangla": "বাড়ির জায়গা",
    "hindi": "घर का आँगन"
  },
  "leisure": {
    "english": "Leisure",
    "bishnupriya": "সান",
    "bangla": "ফুরসত",
    "hindi": "फुरसत"
  },
  "to_dye": {
    "english": "To dye",
    "bishnupriya": "সান-",
    "bangla": "রং করা",
    "hindi": "रंगना"
  },
  "guardian_leader": {
    "english": "Guardian / leader",
    "bishnupriya": "মুরাব্বি",
    "bangla": "অভিভাবক / নেতা",
    "hindi": "संरक्षक / लीडर"
  },
  "property_hereditary_land": {
    "english": "Property / hereditary land",
    "bishnupriya": "মিরাজ",
    "bangla": "সম্পত্তি / উত্তরাধিকারী জমি",
    "hindi": "विरासत / पैतृक ज़मीन"
  },
  "held_under_hereditary_title": {
    "english": "Held under hereditary title",
    "bishnupriya": "মিরাজি",
    "bangla": "উত্তরাধিকারসূত্রে ধরা",
    "hindi": "पैतृक हक वाला"
  },
  "vegetarian_meal": {
    "english": "Vegetarian meal",
    "bishnupriya": "মিরামিষ",
    "bangla": "নিরামিষ",
    "hindi": "सात्विक भोजन"
  },
  "location_postposition_in_at": {
    "english": "Location postposition (“in/at”)",
    "bishnupriya": "মা",
    "bangla": "স্থান নির্দেশক",
    "hindi": "जगह (में/पर)"
  },
  "to_husk_paddy": {
    "english": "To husk paddy",
    "bishnupriya": "ভান-",
    "bangla": "ধান ভাঙা",
    "hindi": "चावल छीलना"
  },
  "tie_of_paddy_bundle": {
    "english": "Tie of harvested paddy bundle",
    "bishnupriya": "বেরাল",
    "bangla": "ধানের গোছার বাঁধন",
    "hindi": "धान की गठरी का बंधन"
  },
  "encirclement": {
    "english": "Encirclement",
    "bishnupriya": "বেরি",
    "bangla": "ঘেরা",
    "hindi": "घेरा"
  },
  "marmelos_bael": {
    "english": "Marmelos (bael) tree & fruit",
    "bishnupriya": "বেল",
    "bangla": "বেল",
    "hindi": "बेल"
  },
  "to_drop_give_up": {
    "english": "To drop / give up",
    "bishnupriya": "বেল-",
    "bangla": "ফেলে দেওয়া",
    "hindi": "छोड़ना"
  },
  "dropping_scattering": {
    "english": "Dropping / scattering wastefully",
    "bishnupriya": "বেলা",
    "bangla": "ফেলা",
    "hindi": "फेंकना"
  },
  "violin": {
    "english": "Violin",
    "bishnupriya": "বেলা",
    "bangla": "বেহালা",
    "hindi": "वायलिन"
  },
  "afternoon_evening": {
    "english": "Afternoon / evening",
    "bishnupriya": "বেলুকা",
    "bangla": "বিকেল / সন্ধ্যা",
    "hindi": "दोपहर / शाम"
  },
  "good_much": {
    "english": "Good / much",
    "bishnupriya": "বেস",
    "bangla": "ভালো / অনেক",
    "hindi": "अच्छा / बहुत"
  },
  "fan": {
    "english": "Fan",
    "bishnupriya": "বেসুনি",
    "bangla": "পাখা",
    "hindi": "पंखा"
  },
  "inattentive": {
    "english": "Inattentive",
    "bishnupriya": "বেহার",
    "bangla": "অমনোযোগী",
    "hindi": "लापरवाह"
  },
  "shameless": {
    "english": "Shameless",
    "bishnupriya": "বেহায়া",
    "bangla": "বেহায়া",
    "hindi": "बेशर्म"
  },
  "indisposed": {
    "english": "Indisposed",
    "bishnupriya": "বেহাল",
    "bangla": "অসুস্থ",
    "hindi": "बीमार"
  },
  "uneconomical_extravagance": {
    "english": "Uneconomical / extravagance",
    "bishnupriya": "বে-হিসাব",
    "bangla": "অপব্যয়ী",
    "hindi": "फिज़ूलखर्च"
  },
  "fruitlessly": {
    "english": "Fruitlessly",
    "bishnupriya": "বেহুদা",
    "bangla": "বৃথা",
    "hindi": "व्यर्थ"
  },
  "unconscious": {
    "english": "Unconscious",
    "bishnupriya": "বেহুশ",
    "bangla": "অজ্ঞান",
    "hindi": "बेहोश"
  },
  "sitting_meeting": {
    "english": "Sitting / meeting",
    "bishnupriya": "বৈঠক",
    "bangla": "বৈঠক",
    "hindi": "बैठक"
  },
  "open_shed": {
    "english": "Open shed",
    "bishnupriya": "বৈঠাপ",
    "bangla": "খোলা চালা",
    "hindi": "खुला छप्पर"
  },
  "apathetic_saint": {
    "english": "Apathetic to world / Vaishnava saint",
    "bishnupriya": "বৈরাগী",
    "bangla": "বৈরাগী",
    "hindi": "वैरागी"
  },
  "worshipper_of_vishnu": {
    "english": "Worshipper of Vishnu",
    "bishnupriya": "বৈষ্টপ",
    "bangla": "বিষ্ণুপক্ত",
    "hindi": "वैष्णव"
  },
  "air_wind": {
    "english": "Air / wind",
    "bishnupriya": "বৌ",
    "bangla": "হাওয়া",
    "hindi": "हवा"
  },
  "twisted_thread": {
    "english": "Twisted thread in weaving",
    "bishnupriya": "বৌ",
    "bangla": "বোনার সুতো",
    "hindi": "बुनाई का धागा"
  },
  "understanding": {
    "english": "Understanding",
    "bishnupriya": "বৌ",
    "bangla": "বোঝা",
    "hindi": "समझ"
  },
  "elder_brother_wife": {
    "english": "Elder brother’s wife",
    "bishnupriya": "বৌদি",
    "bangla": "বউদি",
    "hindi": "भाभी"
  },
  "blowing_of_wind": {
    "english": "Blowing of wind",
    "bishnupriya": "বৌ-বানা",
    "bangla": "বাতাস বওয়া",
    "hindi": "हवा बहना"
  },
  "daughter_in_law": {
    "english": "Daughter-in-law",
    "bishnupriya": "বৌয়া",
    "bangla": "বৌ",
    "hindi": "बहू"
  },
  "daughters_in_law": {
    "english": "Daughters-in-law",
    "bishnupriya": "বৌয়া-জিয়া",
    "bangla": "বৌয়েরা",
    "hindi": "बहुएँ"
  },
  "hunger": {
    "english": "Hunger",
    "bishnupriya": "ভাক",
    "bangla": "ক্ষুধা",
    "hindi": "भूख"
  },
  "pause_attitude_dance": {
    "english": "Pause / attitude / name of Rāsa dance",
    "bishnupriya": "ভাঙ্গি",
    "bangla": "ভঙ্গি / রাসের নাচ",
    "hindi": "भंगिमा / रास नृत्य"
  },
  "to_adore": {
    "english": "To adore",
    "bishnupriya": "ভাজ-",
    "bangla": "পূজা করা",
    "hindi": "पूजा करना"
  },
  "last_line_of_poem": {
    "english": "The last line of poem with poet’s name",
    "bishnupriya": "ভনিতা",
    "bangla": "ভনিতা",
    "hindi": "भणिता"
  },
  "hope_confidence": {
    "english": "Hope / confidence",
    "bishnupriya": "ভরসা",
    "bangla": "ভরসা",
    "hindi": "भरोसा"
  },
  "whole": {
    "english": "Whole",
    "bishnupriya": "ভরা",
    "bangla": "পূর্ণ",
    "hindi": "पूरा"
  },
  "heavy_pregnant": {
    "english": "Heavy / pregnant",
    "bishnupriya": "ভারি",
    "bangla": "ভারী / গর্ভবতী",
    "hindi": "भारी / गर्भवती"
  },
  "deaf": {
    "english": "Deaf",
    "bishnupriya": "ভারি",
    "bangla": "কালা",
    "hindi": "बहरा"
  },
  "to_break": {
    "english": "To break",
    "bishnupriya": "ভাঙ-",
    "bangla": "ভাঙা",
    "hindi": "तोड़ना"
  },
  "to_share": {
    "english": "To share",
    "bishnupriya": "ভাগ-",
    "bangla": "ভাগ করা",
    "hindi": "बाँटना"
  },
  "share": {
    "english": "Share",
    "bishnupriya": "ভাগান",
    "bangla": "ভাগ",
    "hindi": "हिस्सा"
  },
  "broken": {
    "english": "Broken",
    "bishnupriya": "ভাঙা",
    "bangla": "ভাঙা",
    "hindi": "टूटा"
  },
  "breaking_sharing_gerund": {
    "english": "Breaking / sharing (gerund)",
    "bishnupriya": "ভাগানি",
    "bangla": "ভাঙা / ভাগ করা",
    "hindi": "तोड़ने / बाँटने की क्रिया"
  },
  "mutual_settlement_of_shares": {
    "english": "Mutual settlement of shares",
    "bishnupriya": "ভাগাভাগি",
    "bangla": "ভাগ-বাঁটোয়ারা",
    "hindi": "बँटवारा"
  },
  "sisters_son": {
    "english": "Sister’s son",
    "bishnupriya": "ভাগিনা",
    "bangla": "ভাগ্নে",
    "hindi": "भांजा"
  },
  "sisters_daughter": {
    "english": "Sister’s daughter",
    "bishnupriya": "ভাগিনি",
    "bangla": "ভাগ্নী",
    "hindi": "भांजी"
  },
  "work_on_share_basis": {
    "english": "Work on share basis",
    "bishnupriya": "ভাগি",
    "bangla": "ভাগের কাজ",
    "hindi": "हिस्सेदारी का काम"
  },
  "sharer": {
    "english": "Sharer",
    "bishnupriya": "ভাগি-দার",
    "bangla": "ভাগীদার",
    "hindi": "हिस्सेदार"
  },
  "to_cause_to_break": {
    "english": "To cause to break",
    "bishnupriya": "ভাগুয়া-",
    "bangla": "ভাঙানো",
    "hindi": "तुड़वाना"
  },
  "fried_food": {
    "english": "Fried food",
    "bishnupriya": "ভাজা",
    "bangla": "ভাজা",
    "hindi": "तला हुआ"
  },
  "to_fry": {
    "english": "To fry",
    "bishnupriya": "ভাজ-",
    "bangla": "ভাজা",
    "hindi": "तलना"
  },
  "frying": {
    "english": "Frying",
    "bishnupriya": "ভাজানি",
    "bangla": "ভাজার ক্রিয়া",
    "hindi": "तलने की क्रिया"
  },
  "ebb_tide": {
    "english": "Ebb tide",
    "bishnupriya": "ভাটিয়াল",
    "bangla": "ভাঁটা",
    "hindi": "ज्वार की उल्टी धारा"
  },
  "store": {
    "english": "Store",
    "bishnupriya": "ভান্ডার",
    "bangla": "ভাঁড়ার",
    "hindi": "भंडार"
  },
  "store_keeper": {
    "english": "Store-keeper",
    "bishnupriya": "ভান্ডারি",
    "bangla": "ভাঁড়ারী",
    "hindi": "भंडारी"
  },
  "boiled_rice": {
    "english": "Boiled rice",
    "bishnupriya": "ভাত",
    "bangla": "ভাত",
    "hindi": "चावल"
  },
  "rice_pot": {
    "english": "Rice pot",
    "bishnupriya": "ভাতারারি",
    "bangla": "ভাত রান্নার হাঁড়ি",
    "hindi": "चावल पकाने का बर्तन"
  },
  "husking": {
    "english": "Husking",
    "bishnupriya": "ভানা",
    "bangla": "ধান ভাঙা",
    "hindi": "छिलना"
  },
  "rent": {
    "english": "Rent",
    "bishnupriya": "ভাড়া",
    "bangla": "ভাড়া",
    "hindi": "किराया"
  },
  "rented_house": {
    "english": "Rented house",
    "bishnupriya": "ভাড়াটিয়া",
    "bangla": "ভাড়াটে",
    "hindi": "किराएदार"
  },
  "good_bravo": {
    "english": "Good / bravo",
    "bishnupriya": "ভালা",
    "bangla": "ভালো",
    "hindi": "अच्छा"
  },
  "bear": {
    "english": "Bear",
    "bishnupriya": "ভাল্লুক",
    "bangla": "ভাল্লুক",
    "hindi": "भालू"
  },
  "to_float": {
    "english": "To float (intr./trans.)",
    "bishnupriya": "ভাহ- / ভাহা-",
    "bangla": "ভাসা",
    "hindi": "तैरना / तैराना"
  },
  "floating": {
    "english": "Floating",
    "bishnupriya": "ভাহানি",
    "bangla": "ভাসানো",
    "hindi": "तैराने की क्रिया"
  },
  "unmindful_inattention": {
    "english": "Unmindful / inattention",
    "bishnupriya": "ভাহুরা",
    "bangla": "অমনোযোগী",
    "hindi": "लापरवाह"
  },
  "beggar": {
    "english": "Beggar",
    "bishnupriya": "ভিক্খার্ত",
    "bangla": "ভিক্ষুক",
    "hindi": "भिखारी"
  },
  "homestead_land": {
    "english": "Homestead-land",
    "bishnupriya": "ভিতা",
    "bangla": "বাড়ির জমি",
    "hindi": "घर की ज़मीन"
  },
  "inside": {
    "english": "Inside",
    "bishnupriya": "ভিতর",
    "bangla": "ভিতর",
    "hindi": "अंदर"
  },
  "internal_secret": {
    "english": "Internal / secret",
    "bishnupriya": "ভিতরি",
    "bangla": "অভ্যন্তরীণ",
    "hindi": "भीतरी"
  },
  "crowd": {
    "english": "Crowd",
    "bishnupriya": "ভিড়",
    "bangla": "ভিড়",
    "hindi": "भीड़"
  },
  "beam": {
    "english": "Beam",
    "bishnupriya": "ভীম",
    "bangla": "কড়ি",
    "hindi": "शहतीर"
  },
  "to_suffer": {
    "english": "To suffer",
    "bishnupriya": "ভুগ-",
    "bangla": "ভোগ করা",
    "hindi": "भुगतना"
  },
  "to_cause_to_suffer": {
    "english": "To cause to suffer",
    "bishnupriya": "ভুগা-",
    "bangla": "ভোগানো",
    "hindi": "भुगतवाना"
  },
  "small_sword": {
    "english": "A small sword",
    "bishnupriya": "ভুজালি",
    "bangla": "ছোটো তলোয়ার",
    "hindi": "छोटी तलवार"
  },
  "blunt": {
    "english": "Blunt",
    "bishnupriya": "ভুতা",
    "bangla": "ভোঁতা",
    "hindi": "कुंद"
  },
  "wrong_mistaken": {
    "english": "Wrong / mistaken",
    "bishnupriya": "ভুল",
    "bangla": "ভুল",
    "hindi": "गलत"
  },
  "fool": {
    "english": "Fool",
    "bishnupriya": "ভুতুয়া",
    "bangla": "বোকা",
    "hindi": "मूर्ख"
  },
  "paraphernalia_of_vaishnava_monk": {
    "english": "Paraphernalia of Vaishnava monk",
    "bishnupriya": "ভেক",
    "bangla": "সাধুর জিনিস",
    "hindi": "साधु का सामान"
  },
  "adulteration_trouble": {
    "english": "Adulteration / trouble",
    "bishnupriya": "ভেজাল",
    "bangla": "ভেজাল",
    "hindi": "मिलावट"
  },
  "interview": {
    "english": "Interview",
    "bishnupriya": "ভেট",
    "bangla": "সাক্ষাৎ",
    "hindi": "मुलाकात"
  },
  "to_penetrate": {
    "english": "To penetrate",
    "bishnupriya": "ভেদ-",
    "bangla": "ভেদ করা",
    "hindi": "छेदना"
  },
  "sheep": {
    "english": "Sheep",
    "bishnupriya": "ভেড়া",
    "bangla": "ভেড়া",
    "hindi": "भेड़"
  },
  "magic": {
    "english": "Magic",
    "bishnupriya": "ভেলকি",
    "bangla": "জাদু",
    "hindi": "जादू"
  },
  "bee": {
    "english": "Bee",
    "bishnupriya": "ভোমরা",
    "bangla": "ভ্রমর",
    "hindi": "मधुमक्खी"
  },
  "direction_pleonastic_suffix": {
    "english": "Direction / pleonastic suffix",
    "bishnupriya": "-ম",
    "bangla": "দিক / অতিরিক্ত প্রত্যয়",
    "hindi": "दिशा / अतिरिक्त प्रत्यय"
  },
  "mothers_younger_sister": {
    "english": "Mother’s younger sister",
    "bishnupriya": "মাই",
    "bangla": "মাসি",
    "hindi": "मामी"
  },
  "spire": {
    "english": "Spire",
    "bishnupriya": "মৈতল",
    "bangla": "শিখর",
    "hindi": "शिखर"
  },
  "open_field": {
    "english": "Open field",
    "bishnupriya": "মৈদান",
    "bangla": "ময়দান",
    "hindi": "मैदान"
  },
  "conch_shell": {
    "english": "Conch-shell",
    "bishnupriya": "মৈপুন",
    "bangla": "শঙ্খ",
    "hindi": "शंख"
  },
  "design_on_cloth": {
    "english": "Design on cloth",
    "bishnupriya": "মৈরানফি",
    "bangla": "কাপড়ের ডিজাইন",
    "hindi": "कपड़े का डिज़ाइन"
  },
  "wife": {
    "english": "Wife",
    "bishnupriya": "মৈলাক",
    "bangla": "বউ",
    "hindi": "बीवी"
  },
  "dirty": {
    "english": "Dirty",
    "bishnupriya": "মৈলা",
    "bangla": "ময়লা",
    "hindi": "गंदा"
  },
  "buffalo": {
    "english": "Buffalo",
    "bishnupriya": "মৈস",
    "bangla": "মহিষ",
    "hindi": "भैंस"
  },
  "case_suit": {
    "english": "Case / suit",
    "bishnupriya": "মাকদ্দমা",
    "bangla": "মামলা",
    "hindi": "मुकदमा"
  },
  "kind_of_coarse_silk": {
    "english": "A kind of coarse silk",
    "bishnupriya": "মাকা",
    "bangla": "মুগা সিল্ক",
    "hindi": "मूगा रेशम"
  },
  "neat": {
    "english": "Neat",
    "bishnupriya": "মাখি",
    "bangla": "পরিচ্ছন্ন",
    "hindi": "साफ-सुथरा"
  },
  "native_of_arakan_burma": {
    "english": "Native of Arakan/Burma",
    "bishnupriya": "মাগ",
    "bangla": "মগ",
    "hindi": "मग"
  },
  "brain": {
    "english": "Brain",
    "bishnupriya": "মাগজ",
    "bangla": "মগজ",
    "hindi": "दिमाग"
  },
  "chasing_elephants": {
    "english": "Chasing elephants",
    "bishnupriya": "মাগানা",
    "bangla": "হাতি শিকার",
    "hindi": "हाथी का शिकार"
  },
  "power": {
    "english": "Power",
    "bishnupriya": "মাগদুর",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "shape": {
    "english": "Shape",
    "bishnupriya": "মান",
    "bangla": "আকার",
    "hindi": "आकार"
  },
  "ceremonial_waving_of_light": {
    "english": "Ceremonial waving of light",
    "bishnupriya": "মঙ্গল-আরতি",
    "bangla": "মঙ্গল আরতি",
    "hindi": "मंगल आरती"
  },
  "bundle_fried_fish_dish": {
    "english": "Bundle / fried fish dish",
    "bishnupriya": "মাচা",
    "bangla": "গোছা / মাছ ভাজা",
    "hindi": "गठरी / मछली तली हुई"
  },
  "high_bamboo_platform": {
    "english": "High bamboo platform",
    "bishnupriya": "মাচান",
    "bangla": "মাচান",
    "hindi": "मचान"
  },
  "shrunk_fried_fish": {
    "english": "Shrunk / fried fish",
    "bishnupriya": "মাচি",
    "bangla": "সঙ্কুচিত / মাছ ভাজা",
    "hindi": "सिकुड़ा / तली मछली"
  },
  "spongy": {
    "english": "Spongy",
    "bishnupriya": "মাচমাচা",
    "bangla": "ফোলা ফোলা",
    "hindi": "फूला हुआ"
  },
  "to_ripen_be_engrossed": {
    "english": "To ripen / be engrossed",
    "bishnupriya": "মাজ-",
    "bangla": "পাকা / মগ্ন হওয়া",
    "hindi": "पकना / डूबना"
  },
  "taste_ripe": {
    "english": "Taste / ripe",
    "bishnupriya": "মজা",
    "bangla": "মজা / পাকা",
    "hindi": "मज़ा / पका"
  },
  "to_cause_to_ripen_charm": {
    "english": "To cause to ripen / charm",
    "bishnupriya": "মজা-",
    "bangla": "পাকানো / মুগ্ধ করা",
    "hindi": "पकवाना / मोहित करना"
  },
  "wage": {
    "english": "Wage",
    "bishnupriya": "মজুরি",
    "bangla": "মজুরি",
    "hindi": "मज़दूरी"
  },
  "mosque": {
    "english": "Mosque",
    "bishnupriya": "মজ্জিত",
    "bangla": "মসজিদ",
    "hindi": "मस्जिद"
  },
  "efficient": {
    "english": "Efficient",
    "bishnupriya": "মজ্জুত",
    "bangla": "মজবুত",
    "hindi": "मज़बूत"
  },
  "approved": {
    "english": "Approved",
    "bishnupriya": "মঞ্জুর",
    "bangla": "মঞ্জুর",
    "hindi": "मंजूर"
  },
  "approval": {
    "english": "Approval",
    "bishnupriya": "মঞ্জুরি",
    "bangla": "অনুমোদন",
    "hindi": "मंजूरी"
  },
  "sprout": {
    "english": "Sprout",
    "bishnupriya": "মঞ্জুরি",
    "bangla": "অঙ্কুর",
    "hindi": "अंकुर"
  },
  "pea": {
    "english": "Pea",
    "bishnupriya": "মটর",
    "bangla": "মটর",
    "hindi": "मटर"
  },
  "porter": {
    "english": "Porter",
    "bishnupriya": "মাটিয়া",
    "bangla": "মাথাল / কুলি",
    "hindi": "कुली"
  },
  "big_earthen_jar": {
    "english": "Big earthen jar",
    "bishnupriya": "মাটকি",
    "bangla": "মাটকা",
    "hindi": "मटका"
  },
  "maund_weight": {
    "english": "Maund (weight)",
    "bishnupriya": "মন",
    "bangla": "মন",
    "hindi": "मन"
  },
  "village_guard": {
    "english": "Village guard",
    "bishnupriya": "মণ্ডল",
    "bangla": "গ্রামরক্ষী",
    "hindi": "ग्राम चौकीदार"
  },
  "centre_post_in_booth": {
    "english": "Centre-post in booth",
    "bishnupriya": "মণ্ডলি",
    "bangla": "মণ্ডপের মাঝের খুঁটি",
    "hindi": "मंडप का मध्य खंभा"
  },
  "dirty": {
    "english": "Dirty",
    "bishnupriya": "মাত",
    "bangla": "ময়লা",
    "hindi": "गंदा"
  },
  "like": {
    "english": "Like",
    "bishnupriya": "মতা",
    "bangla": "মতো",
    "hindi": "जैसा"
  },
  "intention_selfishness": {
    "english": "Intention / selfishness",
    "bishnupriya": " মতলব",
    "bangla": "মতলব",
    "hindi": "मकसद"
  },
  "active": {
    "english": "Active",
    "bishnupriya": "মতলবি",
    "bangla": "উদ্যোগী",
    "hindi": "सक्रिय"
  },
  "views_for_and_against": {
    "english": "Views for & against",
    "bishnupriya": "মতামত",
    "bangla": "মতামত",
    "hindi": "राय"
  },
  "churning_thick_curry": {
    "english": "Churning / thick curry",
    "bishnupriya": "মথন",
    "bangla": "মন্থন / ঘন তরকারি",
    "hindi": "मथना / गाढ़ी सब्ज़ी"
  },
  "wine_intoxicating_drink": {
    "english": "Wine / intoxicating drink",
    "bishnupriya": "মদ",
    "bangla": "মদ",
    "hindi": "शराब"
  },
  "parrot": {
    "english": "Parrot",
    "bishnupriya": "মাদানা",
    "bangla": "টিয়া",
    "hindi": "तोता"
  },
  "addicted_to_drinking": {
    "english": "Addicted to drinking",
    "bishnupriya": "মাদুয়া",
    "bangla": "মদ্যপ",
    "hindi": "शराबी"
  },
  "sweet_molasses": {
    "english": "Sweet / molasses",
    "bishnupriya": "মধুর",
    "bangla": "মিষ্টি / গুড়",
    "hindi": "मीठा / गुड़"
  },
  "mind_mentality": {
    "english": "Mind / mentality",
    "bishnupriya": "মন",
    "bangla": "মন",
    "hindi": "मन"
  },
  "resolved": {
    "english": "Resolved",
    "bishnupriya": "মনস্তা",
    "bangla": "স্থির",
    "hindi": "तय"
  },
  "to_desire_love": {
    "english": "To desire / love",
    "bishnupriya": "মনা-",
    "bangla": "চাওয়া / ভালোবাসা",
    "hindi": "चाहना / प्यार करना"
  },
  "mutual_love": {
    "english": "Mutual love",
    "bishnupriya": "মনামনি",
    "bangla": "পরস্পর ভালোবাসা",
    "hindi": "आपसी मोहब्बत"
  },
  "cupped_cymbals": {
    "english": "Cupped cymbals",
    "bishnupriya": "মন্দিরা",
    "bangla": "মঞ্জীরা",
    "hindi": "मंजीरा"
  },
  "approved": {
    "english": "Approved",
    "bishnupriya": "মঞ্জুর",
    "bangla": "মঞ্জুর",
    "hindi": "मंजूर"
  },
  "approval": {
    "english": "Approval",
    "bishnupriya": "মঞ্জুরি",
    "bangla": "অনুমোদন",
    "hindi": "मंजूरी"
  },
  "sprout": {
    "english": "Sprout",
    "bishnupriya": "মঞ্জুরি",
    "bangla": "অঙ্কুর",
    "hindi": "अंकुर"
  },
  "pea": {
    "english": "Pea",
    "bishnupriya": "মটর",
    "bangla": "মটর",
    "hindi": "मटर"
  },
  "pillow": {
    "english": "Pillow",
    "bishnupriya": "মন",
    "bangla": "বালিছানার বালিশ",
    "hindi": "तकिया"
  },
  "to_knead_twist": {
    "english": "To knead / twist",
    "bishnupriya": "মাল-",
    "bangla": "মাখা / পেঁচানো",
    "hindi": "गूंधना / मरोड़ना"
  },
  "ointment": {
    "english": "Ointment",
    "bishnupriya": "মলম",
    "bangla": "মলম",
    "hindi": "मलहम"
  },
  "soft_breeze": {
    "english": "Soft breeze",
    "bishnupriya": "মলয়া",
    "bangla": "মৃদু হাওয়া",
    "hindi": "मलय हवा"
  },
  "kneaded_twisted": {
    "english": "Kneaded / twisted",
    "bishnupriya": "মলা",
    "bangla": "মাখা / পেঁচানো",
    "hindi": "गूंथा / मरोड़ा"
  },
  "to_twist_rub": {
    "english": "To twist / rub",
    "bishnupriya": "মলা-",
    "bangla": "পেঁচানো / ঘষা",
    "hindi": "मरोड़ना / रगड़ना"
  },
  "soft": {
    "english": "Soft",
    "bishnupriya": "মলায়ম",
    "bangla": "নরম",
    "hindi": "नरम"
  },
  "difficult": {
    "english": "Difficult",
    "bishnupriya": "মস্কিল",
    "bangla": "কঠিন",
    "hindi": "मुश्किल"
  },
  "endeavour": {
    "english": "Endeavour",
    "bishnupriya": "মসাগত",
    "bangla": "চেষ্টা",
    "hindi": "कोशिश"
  },
  "big": {
    "english": "Big",
    "bishnupriya": "মস্তা",
    "bangla": "বড়ো",
    "hindi": "बड़ा"
  },
  "mothers_younger_sister": {
    "english": "Mother’s younger sister",
    "bishnupriya": "মহা-নাক",
    "bangla": "মাসি",
    "hindi": "मामी"
  },
  "abbot_saint": {
    "english": "Abbot / saint",
    "bishnupriya": "মহন্ত",
    "bangla": "মহন্ত",
    "hindi": "महंत"
  },
  "healthy": {
    "english": "Healthy",
    "bishnupriya": "মহাপচন",
    "bangla": "স্বাস্থ্যবান",
    "hindi": "तंदुरुस्त"
  },
  "obsolete_gold_coin": {
    "english": "An obsolete gold coin",
    "bishnupriya": " মহর",
    "bangla": "মোহর",
    "hindi": "मोहर"
  },
  "mosquito_net": {
    "english": "Mosquito-net",
    "bishnupriya": "মহারি",
    "bangla": "মশারি",
    "hindi": "मच्छरदानी"
  },
  "clerk": {
    "english": "Clerk",
    "bishnupriya": "মহারিপ",
    "bangla": "মোহরির",
    "hindi": "मुहर्रिर"
  },
  "residence": {
    "english": "Residence",
    "bishnupriya": "মহল",
    "bangla": "মহল",
    "hindi": "महल"
  },
  "ones_sweet_will": {
    "english": "One's sweet will",
    "bishnupriya": "মহল",
    "bangla": "ইচ্ছা",
    "hindi": "मर्ज़ी"
  },
  "mosquito": {
    "english": "Mosquito",
    "bishnupriya": "মহা",
    "bangla": "মশা",
    "hindi": "मच्छर"
  },
  "moneyed_man": {
    "english": "Moneyed man",
    "bishnupriya": "মহাজন",
    "bangla": "মহাজন",
    "hindi": "महाजन"
  },
  "big_area": {
    "english": "Big area",
    "bishnupriya": "মহাল",
    "bangla": "বড়ো এলাকা",
    "hindi": "बड़ा इलाका"
  },
  "wage_of_labour": {
    "english": "Wage of labour",
    "bishnupriya": "মজুরি",
    "bangla": "মজুরি",
    "hindi": "मज़दूरी"
  },
  "mosque": {
    "english": "Mosque",
    "bishnupriya": "মজ্জিত",
    "bangla": "মসজিদ",
    "hindi": "मस्जिद"
  },
  "efficient": {
    "english": "Efficient",
    "bishnupriya": "মজ্জুত",
    "bangla": "মজবুত",
    "hindi": "मज़बूत"
  },
  "soft_alt": {
    "english": "Soft",
    "bishnupriya": "মলায়ম",
    "bangla": "নরম",
    "hindi": "नरम"
  },
  "wrestling": {
    "english": "Wrestling",
    "bishnupriya": "মল্লযুদ্ধ",
    "bangla": "মল্লযুদ্ধ",
    "hindi": "मल्लयुद्ध"
  },
  "pillow_cover": {
    "english": "Pillow-cover",
    "bishnupriya": "মলখুম / মল্তুম",
    "bangla": "বালিশের ওয়াড়",
    "hindi": "तकिए का कवर"
  },
  "mattress": {
    "english": "Mattress",
    "bishnupriya": "মলপাক",
    "bangla": "গদি",
    "hindi": "गद्दा"
  },
  "kind_of_pulses": {
    "english": "A kind of pulses",
    "bishnupriya": "মসারি",
    "bangla": "মসুর",
    "hindi": "मसूर"
  },
  "spices_material": {
    "english": "Spices / material",
    "bishnupriya": "মসালা",
    "bangla": "মশলা",
    "hindi": "मसाला"
  },
  "difficult_alt": {
    "english": "Difficult",
    "bishnupriya": "মস্কিল",
    "bangla": "কঠিন",
    "hindi": "मुश्किल"
  },
  "endeavour_alt": {
    "english": "Endeavour",
    "bishnupriya": "মসাগত",
    "bangla": "চেষ্টা",
    "hindi": "कोशिश"
  },
  "muslim": {
    "english": "Muslim",
    "bishnupriya": "মুসলমান",
    "bangla": "মুসলমান",
    "hindi": "मुसलमान"
  },
  "big_alt": {
    "english": "Big",
    "bishnupriya": "মস্তা",
    "bangla": "বড়ো",
    "hindi": "बड़ा"
  },
  "mothers_younger_sister_alt": {
    "english": "Mother’s younger sister",
    "bishnupriya": "মহা-নাক",
    "bangla": "মাসি",
    "hindi": "मामी"
  },
  "abbot": {
    "english": "Abbot",
    "bishnupriya": "মহন্ত",
    "bangla": "মহন্ত",
    "hindi": "महंत"
  },
  "healthy_alt": {
    "english": "Healthy",
    "bishnupriya": "মহাপচন",
    "bangla": "স্বাস্থ্যবান",
    "hindi": "तंदुरुस्त"
  },
  "gold_coin": {
    "english": "Gold coin",
    "bishnupriya": "মহর",
    "bangla": "মোহর",
    "hindi": "मोहर"
  },
  "mosquito_net_alt": {
    "english": "Mosquito-net",
    "bishnupriya": "মহারি",
    "bangla": "মশারি",
    "hindi": "मच्छरदानी"
  },
  "clerk_alt": {
    "english": "Clerk",
    "bishnupriya": "মহারিপ",
    "bangla": "মোহরির",
    "hindi": "मुहर्रिर"
  },
  "residence_alt": {
    "english": "Residence",
    "bishnupriya": "মহল",
    "bangla": "মহল",
    "hindi": "महल"
  },
  "mosquito_alt": {
    "english": "Mosquito",
    "bishnupriya": "মহা",
    "bangla": "মশা",
    "hindi": "मच्छर"
  },
  "moneyed_man_alt": {
    "english": "Moneyed man",
    "bishnupriya": "মহাজন",
    "bangla": "মহাজন",
    "hindi": "महाजन"
  },
  "big_area_alt": {
    "english": "Big area",
    "bishnupriya": "মহাল",
    "bangla": "বড়ো এলাকা",
    "hindi": "बड़ा इलाका"
  },
  "mother_month": {
    "english": "Mother / month",
    "bishnupriya": "মা",
    "bangla": "মা / মাস",
    "hindi": "माँ / महीना"
  },
  "address_to_darling_girl": {
    "english": "Address to darling girl",
    "bishnupriya": "মাত",
    "bangla": "প্রিয় মেয়েকে সম্বোধন",
    "hindi": "प्यारी लड़की को संबोधन"
  },
  "monthly_salary": {
    "english": "Monthly salary",
    "bishnupriya": "মাইনা",
    "bangla": "মাসিক বেতন",
    "hindi": "मासिक वेतन"
  },
  "address_to_young_brahmin_girl": {
    "english": "Address to young Brahmin girl",
    "bishnupriya": "মৈনু",
    "bangla": "ব্রাহ্মণী মেয়েকে সম্বোধন",
    "hindi": "ब्राह्मणी लड़की को संबोधन"
  },
  "fight_oppression": {
    "english": "Fight / oppression",
    "bishnupriya": "মৈর",
    "bangla": "মারামারি / অত্যাচার",
    "hindi": "लड़ाई / ज़ुल्म"
  },
  "flesh_meat": {
    "english": "Flesh / meat",
    "bishnupriya": "মৌ",
    "bangla": "মাংস",
    "hindi": "मांस"
  },
  "traditional": {
    "english": "Traditional",
    "bishnupriya": "মৌসাকা",
    "bangla": "প্রথাগত",
    "hindi": "परंपरागत"
  },
  "multiplicity_suffix": {
    "english": "Multiplicity suffix",
    "bishnupriya": "-মাও",
    "bangla": "বহুত্ব প্রত্যয়",
    "hindi": "बहुत्व प्रत्यय"
  },
  "wife": {
    "english": "Wife",
    "bishnupriya": "মাক",
    "bangla": "বউ",
    "hindi": "बीवी"
  },
  "dirty_tasteless": {
    "english": "Dirty / tasteless",
    "bishnupriya": "মাক",
    "bangla": "ময়লা / বিস্বাদ",
    "hindi": "गंदा / फीका"
  },
  "leader_headman": {
    "english": "Leader / headman",
    "bishnupriya": "মাকাক",
    "bangla": "নেতা",
    "hindi": "नेता"
  },
  "spider": {
    "english": "Spider",
    "bishnupriya": "মাকড়",
    "bangla": "মাকড়সা",
    "hindi": "मकड़ी"
  },
  "odd_looking": {
    "english": "Odd-looking",
    "bishnupriya": "মাকারিয়া",
    "bangla": "অদ্ভুত চেহারা",
    "hindi": "अजीब दिखने वाला"
  },
  "to_burst_spoil": {
    "english": "To burst / spoil",
    "bishnupriya": "মাকা-",
    "bangla": "ফেটে যাওয়া / নষ্ট হওয়া",
    "hindi": "फटना / खराब होना"
  },
  "owl": {
    "english": "Owl",
    "bishnupriya": "মাক্কু",
    "bangla": "পেঁচা",
    "hindi": "उल्लू"
  },
  "to_rub_smear": {
    "english": "To rub / smear",
    "bishnupriya": "মাখ-",
    "bangla": "ঘষা / মাখা",
    "hindi": "रगड़ना / लगाना"
  },
  "canal": {
    "english": "Canal",
    "bishnupriya": "মাখন",
    "bangla": "খাল",
    "hindi": "नहर"
  },
  "butter_rubbing": {
    "english": "Butter / rubbing",
    "bishnupriya": "মাখন",
    "bangla": "মাখন / ঘষা",
    "hindi": "मक्खन / रगड़ना"
  },
  "beyond_down": {
    "english": "Beyond / down",
    "bishnupriya": "মাখা",
    "bangla": "ওপার / নিচে",
    "hindi": "पार / नीचे"
  },
  "remainder": {
    "english": "Remainder",
    "bishnupriya": "মাখাক",
    "bangla": "বাকি",
    "hindi": "बचा हुआ"
  },
  "to_beg": {
    "english": "To beg",
    "bishnupriya": "মাগ-",
    "bangla": "ভিক্ষা করা",
    "hindi": "माँगना"
  },
  "begging": {
    "english": "Begging",
    "bishnupriya": "মাগান",
    "bangla": "ভিক্ষা",
    "hindi": "भिखारी"
  },
  "free": {
    "english": "Free",
    "bishnupriya": "মাগানা",
    "bangla": "মুক্ত",
    "hindi": "मुफ्त"
  },
  "beggar": {
    "english": "Beggar",
    "bishnupriya": "মাগুরা",
    "bangla": "ভিখারি",
    "hindi": "भिखारी"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "মাগুরা",
    "bangla": "মাগুর মাছ",
    "hindi": "मागुर मछली"
  },
  "impure": {
    "english": "Impure",
    "bishnupriya": "মান",
    "bangla": "অশুদ্ধ",
    "hindi": "अशुद्ध"
  },
  "vanished": {
    "english": "Vanished",
    "bishnupriya": "মান",
    "bangla": "লুপ্ত",
    "hindi": "गायब"
  },
  "pipe_of_hookah": {
    "english": "Pipe of hookah",
    "bishnupriya": "মানাক",
    "bangla": "হুক্কার নল",
    "hindi": "हुक्के का नल"
  },
  "light": {
    "english": "Light",
    "bishnupriya": "মানাল",
    "bangla": "হালকা",
    "hindi": "हल्का"
  },
  "portico": {
    "english": "Portico",
    "bishnupriya": "মানকল",
    "bangla": "বারান্দা",
    "hindi": "बरामदा"
  },
  "big_cymbal": {
    "english": "Big cymbal",
    "bishnupriya": "মানকান",
    "bangla": "বড়ো ঝাঁঝ",
    "hindi": "बड़ा झांझ"
  },
  "sweet_potato": {
    "english": "Sweet potato",
    "bishnupriya": "মানকারা",
    "bangla": "মিষ্টি আলু",
    "hindi": "शकरकंद"
  },
  "tamarind": {
    "english": "Tamarind",
    "bishnupriya": "মানকেই",
    "bangla": "তেঁতুল",
    "hindi": "इमली"
  },
  "to_import": {
    "english": "To import",
    "bishnupriya": "মাঙ্গা-",
    "bangla": "আমদানি করা",
    "hindi": "आयात करना"
  },
  "a_little": {
    "english": "A little",
    "bishnupriya": "মান্তা",
    "bangla": "সামান্য",
    "hindi": "थोड़ा"
  },
  "spoiled": {
    "english": "Spoiled",
    "bishnupriya": "মান্তাক",
    "bangla": "নষ্ট",
    "hindi": "खराब"
  },
  "loss": {
    "english": "Loss",
    "bishnupriya": "মান্নাপা",
    "bangla": "ক্ষতি",
    "hindi": "नुकसान"
  },
  "rise_after_dream": {
    "english": "Rise after dream",
    "bishnupriya": "মানফু",
    "bangla": "স্বপ্ন ভাঙা",
    "hindi": "सपना टूटना"
  },
  "menstruation": {
    "english": "Menstruation",
    "bishnupriya": "মানসেন",
    "bangla": "ঋতুস্রাব",
    "hindi": "मासिक धर्म"
  },
  "food": {
    "english": "Food",
    "bishnupriya": "মাচাক",
    "bangla": "খাবার",
    "hindi": "खाना"
  },
  "high_bamboo_platform": {
    "english": "High bamboo platform",
    "bishnupriya": "মাচান",
    "bangla": "মাচান",
    "hindi": "मचान"
  },
  "fly": {
    "english": "Fly",
    "bishnupriya": "মাচি",
    "bangla": "মাছি",
    "hindi": "मक्खी"
  },
  "essence": {
    "english": "Essence",
    "bishnupriya": "মাচি",
    "bangla": "সার",
    "hindi": "सार"
  },
  "still_while_whirling": {
    "english": "Still while whirling",
    "bishnupriya": "মাচি-ধারানি",
    "bangla": "ঘুরতে ঘুরতে স্থির",
    "hindi": "घूमते हुए स्थिर"
  },
  "kind_of_game": {
    "english": "A kind of game",
    "bishnupriya": "মাচি-মানাউ",
    "bangla": "বারো গুটির খেলা",
    "hindi": "बारह गोटी का खेल"
  },
  "colour": {
    "english": "Colour",
    "bishnupriya": "মাচু",
    "bangla": "রং",
    "hindi": "रंग"
  },
  "watery_secretion": {
    "english": "Watery secretion",
    "bishnupriya": "মাচুম",
    "bangla": "পুঁজ",
    "hindi": "मवाद"
  },
  "cell_of_fruit": {
    "english": "Cell of fruit",
    "bishnupriya": "মাচুম",
    "bangla": "ফলের খোপ",
    "hindi": "फल का खाना"
  },
  "fisherman": {
    "english": "Fisherman",
    "bishnupriya": "মাচুয়া",
    "bangla": "মাছ ধরা লোক",
    "hindi": "मछुआ"
  },
  "conduct": {
    "english": "Conduct",
    "bishnupriya": "মাচেত",
    "bangla": "আচরণ",
    "hindi": "व्यवहार"
  },
  "materials": {
    "english": "Materials",
    "bishnupriya": "মাচেল",
    "bangla": "উপকরণ",
    "hindi": "सामग्री"
  },
  "bodily_movement": {
    "english": "Bodily movement",
    "bishnupriya": "মাচেল",
    "bangla": "শরীরের নড়াচড়া",
    "hindi": "शरीर की हलचल"
  },
  "big": {
    "english": "Big",
    "bishnupriya": "মাচ্চা",
    "bangla": "বড়ো",
    "hindi": "बड़ा"
  },
  "fish": {
    "english": "Fish",
    "bishnupriya": "মাছ",
    "bangla": "মাছ",
    "hindi": "मछली"
  },
  "black_substance_in_fish": {
    "english": "Black substance in fish",
    "bishnupriya": "মাছালি",
    "bangla": "মাছের কালো অংশ",
    "hindi": "मछली का काला हिस्सा"
  },
  "midst": {
    "english": "Midst",
    "bishnupriya": "মাজ",
    "bangla": "মাঝ",
    "hindi": "बीच"
  },
  "cleansing": {
    "english": "Cleansing",
    "bishnupriya": "মাজান",
    "bangla": "পরিষ্কার",
    "hindi": "सफाई"
  },
  "essence_alt": {
    "english": "Essence",
    "bishnupriya": "মাজা",
    "bangla": "সার",
    "hindi": "सार"
  },
  "insect_eating_rice_shoots": {
    "english": "Insect eating rice shoots",
    "bishnupriya": "মাজারা",
    "bangla": "ধানের কীট",
    "hindi": "चावल के कीड़े"
  },
  "essence_innermost_part": {
    "english": "Essence / innermost part",
    "bishnupriya": "মাজি / মাজিরা",
    "bangla": "সার / গভীর অংশ",
    "hindi": "सार / सबसे अंदर का हिस्सा"
  },
  "middle": {
    "english": "Middle",
    "bishnupriya": "মাজিলা",
    "bangla": "মাঝখানে",
    "hindi": "बीच में"
  },
  "in_the_midst": {
    "english": "In the midst",
    "bishnupriya": "মাজে",
    "bangla": "মাঝে",
    "hindi": "बीच में"
  },
  "moderate": {
    "english": "Moderate",
    "bishnupriya": "মাঝামাঝি",
    "bangla": "মাঝামাঝি",
    "hindi": "औसत"
  },
  "game_of_jumping": {
    "english": "A game of jumping",
    "bishnupriya": "মানচন",
    "bangla": "লাফানোর খেলা",
    "hindi": "उछल-कूद का खेल"
  },
  "bad_effect": {
    "english": "Bad effect",
    "bishnupriya": "মানচাক",
    "bangla": "খারাপ প্রভাব",
    "hindi": "बुरा असर"
  },
  "big_earthen_jar": {
    "english": "Big earthen jar",
    "bishnupriya": "মাট",
    "bangla": "মাটকা",
    "hindi": "मटका"
  },
  "try_square_shape": {
    "english": "Try-square / shape",
    "bishnupriya": "মাতাম",
    "bangla": "কোণমাপক যন্ত্র / আকৃতি",
    "hindi": "कोण मापने का औज़ार / आकार"
  },
  "smooth_level": {
    "english": "Smooth / level",
    "bishnupriya": "মাতা-মান্না",
    "bangla": "মসৃণ / সমান",
    "hindi": "चिकना / बराबर"
  },
  "soil": {
    "english": "Soil",
    "bishnupriya": "মাটি",
    "bangla": "মাটি",
    "hindi": "मिट्टी"
  },
  "power_suitable": {
    "english": "Power / suitable",
    "bishnupriya": "মাটিক",
    "bangla": "যোগ্যতা / উপযুক্ত",
    "hindi": "ताकत / मुनासिब"
  },
  "earthen": {
    "english": "Earthen",
    "bishnupriya": "মাটিয়া",
    "bangla": "মাটির",
    "hindi": "मिट्टी का"
  },
  "looking_like_clay_loss_of_enthusiasm": {
    "english": "Looking like clay / loss of enthusiasm",
    "bishnupriya": "মাটিরা",
    "bangla": "মাটির মতো / উৎসাহহীন",
    "hindi": "मिट्टी जैसा / उत्साहहीन"
  },
  "round_lemon": {
    "english": "Round lemon",
    "bishnupriya": "মাতুয়া",
    "bangla": "গোল লেবু",
    "hindi": "गोल नींबू"
  },
  "field": {
    "english": "Field",
    "bishnupriya": "মাথ",
    "bangla": "মাঠ",
    "hindi": "खेत"
  },
  "buttermilk": {
    "english": "Buttermilk",
    "bishnupriya": "মাথা",
    "bangla": "ছানা",
    "hindi": "मठ्ठा"
  },
  "bed_sheet": {
    "english": "Bed-sheet",
    "bishnupriya": "মাথা",
    "bangla": "চাদর",
    "hindi": "चादर"
  },
  "to_caress_with_hand": {
    "english": "To caress with hand",
    "bishnupriya": "মাথিয়া-",
    "bangla": "হাত বুলানো",
    "hindi": "हाथ फेरना"
  },
  "booth_for_festive_occasions": {
    "english": "Booth for festive occasions",
    "bishnupriya": "মণ্ডপ",
    "bangla": "মণ্ডপ",
    "hindi": "मंडप"
  },
  "speech_behaviour": {
    "english": "Speech / behaviour",
    "bishnupriya": "মাত",
    "bangla": "কথা / আচরণ",
    "hindi": "बात / व्यवहार"
  },
  "to_speak": {
    "english": "To speak",
    "bishnupriya": "মাত-",
    "bangla": "বলা",
    "hindi": "बोलना"
  },
  "to_converse": {
    "english": "To converse",
    "bishnupriya": "মাতা-",
    "bangla": "কথা বলা",
    "hindi": "बात करना"
  },
  "appearance": {
    "english": "Appearance",
    "bishnupriya": "মাতা",
    "bangla": "চেহারা",
    "hindi": "दिखावट"
  },
  "relative": {
    "english": "Relative",
    "bishnupriya": "মাতাং",
    "bangla": "আত্মীয়",
    "hindi": "रिश्तेदार"
  },
  "speaking": {
    "english": "Speaking",
    "bishnupriya": "মাতানি",
    "bangla": "কথা বলা",
    "hindi": "बोलने की क्रिया"
  },
  "time_state": {
    "english": "Time / state",
    "bishnupriya": "মাতাম",
    "bangla": "সময় / অবস্থা",
    "hindi": "समय / हालत"
  },
  "mutual_talking": {
    "english": "Mutual talking",
    "bishnupriya": "মাতামাতি",
    "bangla": "পরস্পর কথা",
    "hindi": "आपस में बात"
  },
  "at_the_pinnacle": {
    "english": "At the pinnacle",
    "bishnupriya": "মাতাম্বালা",
    "bangla": "সময়ের চূড়ায়",
    "hindi": "समय के शिखर पर"
  },
  "path": {
    "english": "Path",
    "bishnupriya": "মাতুতুন",
    "bangla": "পথ",
    "hindi": "रास्ता"
  },
  "a_little": {
    "english": "A little",
    "bishnupriya": "মাতেক",
    "bangla": "একটু",
    "hindi": "थोड़ा"
  },
  "extreme_part_of_land": {
    "english": "Extreme part of land",
    "bishnupriya": "মাতোল",
    "bangla": "জমির শেষ প্রান্ত",
    "hindi": "ज़मीन का आखिरी हिस्सा"
  },
  "mood_temper": {
    "english": "Mood / temper",
    "bishnupriya": "মাথাক",
    "bangla": "মেজাজ",
    "hindi": "मूड"
  },
  "head": {
    "english": "Head",
    "bishnupriya": "মাথা",
    "bangla": "মাথা",
    "hindi": "सिर"
  },
  "castrating_animal": {
    "english": "Castrating (animal)",
    "bishnupriya": "মাথা-সেনকারানি",
    "bangla": "খোজা করা",
    "hindi": "खस्सी करना"
  },
  "above": {
    "english": "Above",
    "bishnupriya": "মাথাক",
    "bangla": "উপরে",
    "hindi": "ऊपर"
  },
  "one_after_another": {
    "english": "One after another",
    "bishnupriya": "মাথান-মাথান",
    "bangla": "একের পর এক",
    "hindi": "एक के बाद एक"
  },
  "head_of_fish": {
    "english": "Head of fish",
    "bishnupriya": "মাথি",
    "bangla": "মাছের মাথা",
    "hindi": "मछली का सिर"
  },
  "queen": {
    "english": "Queen",
    "bishnupriya": "মাদাই",
    "bangla": "রানী",
    "hindi": "रानी"
  },
  "request": {
    "english": "Request",
    "bishnupriya": "মাদাই",
    "bangla": "অনুরোধ",
    "hindi": "गुज़ारिश"
  },
  "afternoon": {
    "english": "Afternoon",
    "bishnupriya": "মাদান",
    "bangla": "বিকেল",
    "hindi": "दोपहर"
  },
  "amulet": {
    "english": "Amulet",
    "bishnupriya": "মাদুলি",
    "bangla": "তাবিজ",
    "hindi": "ताबीज़"
  },
  "collection_of_alms": {
    "english": "Collection of alms",
    "bishnupriya": "মধুকারী",
    "bangla": "ভিক্ষা সংগ্রহ",
    "hindi": "भिक्षा वृत्ति"
  },
  "mock_anger_lady": {
    "english": "Mock-anger (lady)",
    "bishnupriya": "মানা",
    "bangla": "অভিমান",
    "hindi": "नाराज़गी"
  },
  "to_agree": {
    "english": "To agree",
    "bishnupriya": "মান-",
    "bangla": "মানা",
    "hindi": "मानना"
  },
  "promise_to_deity": {
    "english": "Promise to deity",
    "bishnupriya": "মানসা",
    "bangla": "মানত",
    "hindi": "मन्नत"
  },
  "promised_to_deity": {
    "english": "Promised to deity",
    "bishnupriya": "মানসি",
    "bangla": "মানতের",
    "hindi": "मन्नत का"
  },
  "vanity": {
    "english": "Vanity",
    "bishnupriya": "মানক",
    "bangla": "অহংকার",
    "hindi": "घमंड"
  },
  "prohibition": {
    "english": "Prohibition",
    "bishnupriya": "মানা",
    "bangla": "নিষেধ",
    "hindi": "मना"
  },
  "to_cause_to_agree": {
    "english": "To cause to agree",
    "bishnupriya": "মানা-",
    "bangla": "মানানো",
    "hindi": "मानना"
  },
  "to_refrain": {
    "english": "To refrain",
    "bishnupriya": "মানা-",
    "bangla": "বিরত থাকা",
    "hindi": "रोकना"
  },
  "myrobalan": {
    "english": "Myrobalan",
    "bishnupriya": "মানৈ",
    "bangla": "হরিতকী",
    "hindi": "हरड़"
  },
  "servant": {
    "english": "Servant",
    "bishnupriya": "মানৈ",
    "bangla": "চাকর",
    "hindi": "नौकर"
  },
  "smaller_side_of_drum": {
    "english": "Smaller side of drum",
    "bishnupriya": "মানাও",
    "bangla": "ঢাকের ছোটো দিক",
    "hindi": "ढोल का छोटा हिस्सा"
  },
  "dirt_in_hookah": {
    "english": "Dirt in hookah",
    "bishnupriya": "মানাং",
    "bangla": "হুক্কার ময়লা",
    "hindi": "हुक्के की गंदगी"
  },
  "agreeing": {
    "english": "Agreeing",
    "bishnupriya": "মানানি",
    "bangla": "মানা",
    "hindi": "मानना"
  },
  "small_house_lizard": {
    "english": "Small house-lizard",
    "bishnupriya": "মানা-পরম",
    "bangla": "টিকটিকি",
    "hindi": "छोटी छिपकली"
  },
  "smell": {
    "english": "Smell",
    "bishnupriya": "মানম",
    "bangla": "গন্ধ",
    "hindi": "महक"
  },
  "various_one_after_another": {
    "english": "Various / one after another",
    "bishnupriya": "মানম-মানাম",
    "bangla": "নানারকম",
    "hindi": "तरह-तरह"
  },
  "sense_of_prestige": {
    "english": "Sense of prestige",
    "bishnupriya": "মানিক",
    "bangla": "সম্মানবোধ",
    "hindi": "इज़्ज़त"
  },
  "honourable": {
    "english": "Honourable",
    "bishnupriya": "মানিয়া",
    "bangla": "সম্মানিত",
    "hindi": "माननीय"
  },
  "least_sound_hint": {
    "english": "Least sound / hint",
    "bishnupriya": "মানিল-খানিল",
    "bangla": "সামান্য শব্দ / ইঙ্গিত",
    "hindi": "हल्की आवाज़ / संकेत"
  },
  "man_human": {
    "english": "Man / human",
    "bishnupriya": "মানু",
    "bangla": "মানুষ",
    "hindi": "इंसान"
  },
  "address_to_darling_child": {
    "english": "Address to darling child",
    "bishnupriya": "মানু",
    "bangla": "প্রিয় সন্তানকে সম্বোধন",
    "hindi": "प्यारे बच्चे को संबोधन"
  },
  "to_cause_to_agree": {
    "english": "To cause to agree",
    "bishnupriya": "মানুয়া-",
    "bangla": "মানানো",
    "hindi": "मानवाना"
  },
  "it_means": {
    "english": "It means",
    "bishnupriya": "মানে",
    "bangla": "মানে",
    "hindi": "मतलब"
  },
  "arum_indicum": {
    "english": "Arum indicum",
    "bishnupriya": "মান-কচু",
    "bangla": "মানকচু",
    "hindi": "मैनकचू"
  },
  "bad_inferior": {
    "english": "Bad / inferior",
    "bishnupriya": "মান্দা",
    "bangla": "খারাপ",
    "hindi": "खराब"
  },
  "equal": {
    "english": "Equal",
    "bishnupriya": "মান্না",
    "bangla": "সমান",
    "hindi": "बराबर"
  },
  "small_earthen_plate": {
    "english": "Small earthen plate",
    "bishnupriya": "মানসা",
    "bangla": "ছোটো মাটির থালা",
    "hindi": "छोटी मिट्टी की थाली"
  },
  "measurement_forgiveness": {
    "english": "Measurement / forgiveness",
    "bishnupriya": "মাপ",
    "bangla": "মাপ / ক্ষমা",
    "hindi": "माप / माफ़ी"
  },
  "adjacent": {
    "english": "Adjacent",
    "bishnupriya": "মাপা",
    "bangla": "পাশের",
    "hindi": "पास का"
  },
  "solid_layer_of_fruit_cell": {
    "english": "Solid layer of fruit cell",
    "bishnupriya": "মাপান",
    "bangla": "ফলের খোপের শক্ত অংশ",
    "hindi": "फल के खाने का सख्त हिस्सा"
  },
  "friend": {
    "english": "Friend",
    "bishnupriya": "মাপাং",
    "bangla": "বন্ধু",
    "hindi": "दोस्त"
  },
  "mother_of_animals": {
    "english": "Mother (of animals)",
    "bishnupriya": "মাপি",
    "bangla": "পশুর মা",
    "hindi": "जानवर की माँ"
  },
  "head_man_master": {
    "english": "Head-man / master",
    "bishnupriya": "মাপু",
    "bangla": "মালিক / নেতা",
    "hindi": "मालिक / सरदार"
  },
  "place": {
    "english": "Place",
    "bishnupriya": "মাফাম",
    "bangla": "জায়গা",
    "hindi": "जगह"
  },
  "corresponding_to": {
    "english": "Corresponding to",
    "bishnupriya": "মাফিক",
    "bangla": "অনুরূপ",
    "hindi": "मुताबिक"
  },
  "dark_darkness": {
    "english": "Dark / darkness",
    "bishnupriya": "মাম",
    "bangla": "অন্ধকার",
    "hindi": "अंधेरा"
  },
  "maternal_uncle_father_in_law": {
    "english": "Maternal uncle / father-in-law",
    "bishnupriya": "মামা",
    "bangla": "মামা / শ্বশুর",
    "hindi": "मामा / ससुर"
  },
  "related_as_maternal_uncle": {
    "english": "Related as maternal uncle",
    "bishnupriya": "মামাক",
    "bangla": "মামার মতো",
    "hindi": "मामा जैसा"
  },
  "address_to_young_uncle": {
    "english": "Address to young uncle",
    "bishnupriya": "মামাতো",
    "bangla": "ছোটো মামাকে সম্বোধন",
    "hindi": "छोटे मामा को संबोधन"
  },
  "subject_affair": {
    "english": "Subject / affair",
    "bishnupriya": "মামিলাত",
    "bangla": "বিষয়",
    "hindi": "मामला"
  },
  "maternal_aunt_mother_in_law": {
    "english": "Maternal aunt / mother-in-law",
    "bishnupriya": "মামি",
    "bangla": "মামি / শাশুড়ি",
    "hindi": "मामी / सास"
  },
  "conventional": {
    "english": "Conventional",
    "bishnupriya": "মামুলি",
    "bangla": "প্রথাগত",
    "hindi": "मामूली"
  },
  "cremation_ground": {
    "english": "Cremation ground",
    "bishnupriya": "মাম-ফাম",
    "bangla": "শ্মশান",
    "hindi": "श्मशान"
  },
  "law_suit": {
    "english": "Law-suit",
    "bishnupriya": "মামলা",
    "bangla": "মামলা",
    "hindi": "मुकदमा"
  },
  "darkish_dimly_lighted": {
    "english": "Darkish / dimly lighted",
    "bishnupriya": "মামলি",
    "bangla": "আবছা",
    "hindi": "धुंधला"
  },
  "to_kill": {
    "english": "To kill",
    "bishnupriya": "মার-",
    "bangla": "মারা",
    "hindi": "मारना"
  },
  "to_knead_rub": {
    "english": "To knead / rub",
    "bishnupriya": "মার-",
    "bangla": "মাখা",
    "hindi": "गूंधना / रगड़ना"
  },
  "spices": {
    "english": "Spices",
    "bishnupriya": "মারাই",
    "bangla": "মশলা",
    "hindi": "मसाला"
  },
  "turn_of_distribution_layer": {
    "english": "Turn of distribution / layer",
    "bishnupriya": "মারাল",
    "bangla": "পালা / স্তর",
    "hindi": "बारी / परत"
  },
  "to_behave_daringly": {
    "english": "To behave daringly",
    "bishnupriya": "মারা-",
    "bangla": "সাহস দেখানো",
    "hindi": "बहादुरी दिखाना"
  },
  "damage_loss": {
    "english": "Damage / loss",
    "bishnupriya": "মারা",
    "bangla": "ক্ষতি",
    "hindi": "नुकसान"
  },
  "midst_breadth": {
    "english": "Midst / breadth",
    "bishnupriya": "মারক",
    "bangla": "মাঝখানে / চওড়া",
    "hindi": "बीच / चौड़ाई"
  },
  "temper": {
    "english": "Temper",
    "bishnupriya": "মারাং",
    "bangla": "মেজাজ",
    "hindi": "मूड"
  },
  "killing_kneading": {
    "english": "Killing / kneading",
    "bishnupriya": "মারানি",
    "bangla": "মারা / মাখা",
    "hindi": "मारने / गूंधने की क्रिया"
  },
  "mutual_fighting": {
    "english": "Mutual fighting",
    "bishnupriya": "মারামারি",
    "bangla": "মারামারি",
    "hindi": "मारपीट"
  },
  "year_cycle": {
    "english": "Year (cycle)",
    "bishnupriya": "মারি",
    "bangla": "বছর",
    "hindi": "साल"
  },
  "relative": {
    "english": "Relative",
    "bishnupriya": "মারেই",
    "bangla": "আত্মীয়",
    "hindi": "रिश्तेदार"
  },
  "artifice": {
    "english": "Artifice",
    "bishnupriya": "মারেই",
    "bangla": "চালাকি",
    "hindi": "चालाकी"
  },
  "bigger_side_of_drum": {
    "english": "Bigger side of drum",
    "bishnupriya": "মারৌ",
    "bangla": "ঢাকের বড়ো দিক",
    "hindi": "ढोल का बड़ा हिस्सा"
  },
  "essence_flavour": {
    "english": "Essence / flavour",
    "bishnupriya": "মারেক",
    "bangla": "স্বাদ",
    "hindi": "स्वाद"
  },
  "mark_stamp": {
    "english": "Mark / stamp",
    "bishnupriya": "মার্কা",
    "bangla": "চিহ্ন",
    "hindi": "निशान"
  },
  "coarse_white_fabric": {
    "english": "Coarse white fabric",
    "bishnupriya": "মার্জিন",
    "bangla": "মোটা সাদা কাপড়",
    "hindi": "मोटा सफेद कपड़ा"
  },
  "through": {
    "english": "Through",
    "bishnupriya": "মারফত",
    "bangla": "মাধ্যমে",
    "hindi": "के ज़रिए"
  },
  "starch": {
    "english": "Starch",
    "bishnupriya": "মার",
    "bangla": "মাড়",
    "hindi": "माड़"
  },
  "threshing": {
    "english": "Threshing",
    "bishnupriya": "মারা",
    "bangla": "মাড়াই",
    "hindi": "मड़ाई"
  },
  "root_plants": {
    "english": "Root (plants)",
    "bishnupriya": "মারা",
    "bangla": "শিকড়",
    "hindi": "जड़"
  },
  "gum_of_teeth_nerve": {
    "english": "Gum of teeth / nerve",
    "bishnupriya": "মারেই",
    "bangla": "দাঁতের মাড়ি / স্নায়ু",
    "hindi": "मसूड़े / नस"
  },
  "thread": {
    "english": "Thread",
    "bishnupriya": "মাল",
    "bangla": "সুতো",
    "hindi": "धागा"
  },
  "material_wrestler": {
    "english": "Material / wrestler",
    "bishnupriya": "মাল",
    "bangla": "উপকরণ / মল্ল",
    "hindi": "सामान / पहलवान"
  },
  "similar": {
    "english": "Similar",
    "bishnupriya": "মাল",
    "bangla": "একই রকম",
    "hindi": "एक जैसा"
  },
  "one_who_pretends": {
    "english": "One who pretends",
    "bishnupriya": "মালপা",
    "bangla": "ভানকারী",
    "hindi": "दिखावा करने वाला"
  },
  "coconut_shell": {
    "english": "Cocoanut shell",
    "bishnupriya": "মালাই",
    "bangla": "নারকেলের খোসা",
    "hindi": "नारियल का छिलका"
  },
  "owner": {
    "english": "Owner",
    "bishnupriya": "মালিক",
    "bangla": "মালিক",
    "hindi": "मालिक"
  },
  "ownership": {
    "english": "Ownership",
    "bishnupriya": "মালিকানা",
    "bangla": "মালিকানা",
    "hindi": "मालिकाना हक"
  },
  "rubbing_ointment": {
    "english": "Rubbing / ointment",
    "bishnupriya": "মালিশ",
    "bangla": "মালিশ",
    "hindi": "मालिश"
  },
  "feeling": {
    "english": "Feeling",
    "bishnupriya": "মালুম",
    "bangla": "অনুভূতি",
    "hindi": "एहसास"
  },
  "earth": {
    "english": "Earth",
    "bishnupriya": "মালেম",
    "bangla": "পৃথিবী",
    "hindi": "धरती"
  },
  "tax": {
    "english": "Tax",
    "bishnupriya": "মাসুল",
    "bangla": "কর",
    "hindi": "टैक्स"
  },
  "teacher_profession": {
    "english": "Teacher’s profession",
    "bishnupriya": "মাস্তারি",
    "bangla": "শিক্ষকতা",
    "hindi": "मास्टरी"
  },
  "cell_of_fruit": {
    "english": "Cell of fruit",
    "bishnupriya": "মাসান",
    "bangla": "ফলের খোপ",
    "hindi": "फल का खाना"
  },
  "body_formation": {
    "english": "Body formation",
    "bishnupriya": "মাসা",
    "bangla": "শরীরের গঠন",
    "hindi": "शरीर की बनावट"
  },
  "side_direction": {
    "english": "Side / direction",
    "bishnupriya": "মাসাং",
    "bangla": "দিক",
    "hindi": "दिशा"
  },
  "friend_alt": {
    "english": "Friend",
    "bishnupriya": "মাসাং",
    "bangla": "বন্ধু",
    "hindi": "दोस्त"
  },
  "strength": {
    "english": "Strength",
    "bishnupriya": "মাসিঙ্কা",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "monthly": {
    "english": "Monthly",
    "bishnupriya": "মাসুরা",
    "bangla": "মাসিক",
    "hindi": "मासिक"
  },
  "mast": {
    "english": "Mast",
    "bishnupriya": "মাস্তুল",
    "bangla": "মাস্তুল",
    "hindi": "मस्तूल"
  },
  "pink_colour": {
    "english": "Pink colour",
    "bishnupriya": "মহন",
    "bangla": "গোলাপি",
    "hindi": "गुलाबी"
  },
  "great": {
    "english": "Great",
    "bishnupriya": "মহা",
    "bangla": "মহান",
    "hindi": "महान"
  },
  "midst": {
    "english": "Midst",
    "bishnupriya": "মাহাক",
    "bangla": "মাঝখানে",
    "hindi": "बीच में"
  },
  "fact_condition": {
    "english": "Fact / condition",
    "bishnupriya": "মাহাম",
    "bangla": "সত্য / অবস্থা",
    "hindi": "सच / हालत"
  },
  "partition_side": {
    "english": "Partition / side",
    "bishnupriya": "মাহল",
    "bangla": "ভাগ / দিক",
    "hindi": "हिस्सा / तरफ"
  },
  "charm_spell": {
    "english": "Charm / spell",
    "bishnupriya": "মাহি",
    "bangla": "জাদু",
    "hindi": "जादू"
  },
  "small_louse": {
    "english": "Small louse",
    "bishnupriya": "মাহিক",
    "bangla": "ছোটো উকুন",
    "hindi": "छोटी जूँ"
  },
  "monthly": {
    "english": "Monthly",
    "bishnupriya": "মাহিয়া",
    "bangla": "মাসিক",
    "hindi": "मासिक"
  },
  "flesh": {
    "english": "Flesh",
    "bishnupriya": "মাহু",
    "bangla": "মাংস",
    "hindi": "मांस"
  },
  "elephant_driver": {
    "english": "Elephant-driver",
    "bishnupriya": "মাহুত",
    "bangla": "মাহুত",
    "hindi": "महावत"
  },
  "multitude_postposition": {
    "english": "Multitude postposition",
    "bishnupriya": "মাহেই",
    "bangla": "প্রচুর",
    "hindi": "बहुत सारा"
  },
  "half_a_rupee": {
    "english": "Half a rupee",
    "bishnupriya": "মাহেই",
    "bangla": "আধা টাকা",
    "hindi": "आधा रुपया"
  },
  "taste": {
    "english": "Taste",
    "bishnupriya": "মাহৌ",
    "bangla": "স্বাদ",
    "hindi": "स्वाद"
  },
  "to_rub": {
    "english": "To rub",
    "bishnupriya": "মাখ-",
    "bangla": "ঘষা",
    "hindi": "रगड़ना"
  },
  "wife": {
    "english": "Wife",
    "bishnupriya": "মাক",
    "bangla": "বউ",
    "hindi": "बीवी"
  },
  "leader_head_man": {
    "english": "Leader / head-man",
    "bishnupriya": "মাকাক",
    "bangla": "নেতা",
    "hindi": "सरदार"
  },
  "door": {
    "english": "Door",
    "bishnupriya": "মাকাম",
    "bangla": "দরজা",
    "hindi": "दरवाज़ा"
  },
  "spider": {
    "english": "Spider",
    "bishnupriya": "মাকড়",
    "bangla": "মাকড়সা",
    "hindi": "मकड़ी"
  },
  "odd_looking": {
    "english": "Odd-looking",
    "bishnupriya": "মাকারিয়া",
    "bangla": "অদ্ভুত চেহারা",
    "hindi": "अजीब दिखने वाला"
  },
  "to_burst_spoil": {
    "english": "To burst / spoil",
    "bishnupriya": "মাকা-",
    "bangla": "ফেটে যাওয়া / নষ্ট হওয়া",
    "hindi": "फटना / खराब होना"
  },
  "silent_moment": {
    "english": "Silent / moment",
    "bishnupriya": "মিকুপ",
    "bangla": "চুপ / মুহূর্ত",
    "hindi": "खामोश / पल"
  },
  "coward_shy": {
    "english": "Coward / shy",
    "bishnupriya": "মিকেই-থি",
    "bangla": "ভিতু",
    "hindi": "डरपोक"
  },
  "head_man": {
    "english": "Head-man",
    "bishnupriya": "মীকাক",
    "bangla": "প্রধান",
    "hindi": "मुखिया"
  },
  "revenge": {
    "english": "Revenge",
    "bishnupriya": "মীকুত",
    "bangla": "প্রতিশোধ",
    "hindi": "बदला"
  },
  "another_village": {
    "english": "Another village",
    "bishnupriya": "মীখুল",
    "bangla": "অন্য গ্রাম",
    "hindi": "दूसरा गाँव"
  },
  "name": {
    "english": "Name",
    "bishnupriya": "মিন",
    "bangla": "নাম",
    "hindi": "नाम"
  },
  "light": {
    "english": "Light",
    "bishnupriya": "মিনাল",
    "bangla": "আলো",
    "hindi": "रोशनी"
  },
  "address": {
    "english": "Address",
    "bishnupriya": "মিঙ্কৌ",
    "bangla": "সম্বোধন",
    "hindi": "संबोधन"
  },
  "reputation": {
    "english": "Reputation",
    "bishnupriya": "মিঞ্চেত",
    "bangla": "খ্যাতি",
    "hindi": "शोहरत"
  },
  "in_good_terms_alliance": {
    "english": "In good terms / alliance",
    "bishnupriya": "মিচ্চান",
    "bangla": "বন্ধুত্ব / জোট",
    "hindi": "दोस्ती / गठबंधन"
  },
  "corner_of_eye_sidelong_glance": {
    "english": "Corner of eye / sidelong glance",
    "bishnupriya": "মিচ্চিল",
    "bangla": "চোখের কোণ / তির্যক দৃষ্টি",
    "hindi": "आँख का कोना / तिरछी नज़र"
  },
  "dazzling": {
    "english": "Dazzling",
    "bishnupriya": "মিচ্চিল",
    "bangla": "ঝকঝকে",
    "hindi": "चमकदार"
  },
  "false": {
    "english": "False",
    "bishnupriya": "মিচ্ছা",
    "bangla": "মিথ্যা",
    "hindi": "झूठा"
  },
  "liar": {
    "english": "Liar",
    "bishnupriya": "মিচ্ছাবা",
    "bangla": "মিথ্যাবাদী",
    "hindi": "झूठा"
  },
  "sugar_candy": {
    "english": "Sugar-candy",
    "bishnupriya": "মিছরি",
    "bangla": "মিছরি",
    "hindi": "मिश्री"
  },
  "temper_hot_tempered": {
    "english": "Temper / hot-tempered",
    "bishnupriya": "মিজাজ / মিজাজি",
    "bangla": "মেজাজ / গরম মেজাজ",
    "hindi": "मिज़ाज / गुस्सैल"
  },
  "counting": {
    "english": "Counting",
    "bishnupriya": "মিজায়",
    "bangla": "গণনা",
    "hindi": "गिनती"
  },
  "to_be_settled_rubbed_out": {
    "english": "To be settled / rubbed out",
    "bishnupriya": "মিত-",
    "bangla": "মিটে যাওয়া / মুছে যাওয়া",
    "hindi": "मिटना / मिटाना"
  },
  "settlement": {
    "english": "Settlement",
    "bishnupriya": "মিত",
    "bangla": "মীমাংসা",
    "hindi": "समझौता"
  },
  "greed": {
    "english": "Greed",
    "bishnupriya": "মিতা",
    "bangla": "লোভ",
    "hindi": "लालच"
  },
  "to_settle_rub_out": {
    "english": "To settle / rub out",
    "bishnupriya": "মিতা-",
    "bangla": "মিটানো",
    "hindi": "मिटाना"
  },
  "sweet": {
    "english": "Sweet",
    "bishnupriya": "মিঠা",
    "bangla": "মিষ্টি",
    "hindi": "मीठा"
  },
  "sweetmeat": {
    "english": "Sweetmeat",
    "bishnupriya": "মিঠাই",
    "bangla": "মিঠাই",
    "hindi": "मिठाई"
  },
  "vile_low": {
    "english": "Vile / low",
    "bishnupriya": "মিতাল",
    "bangla": "নীচ",
    "hindi": "नीच"
  },
  "appearance": {
    "english": "Appearance",
    "bishnupriya": "মিতা",
    "bangla": "চেহারা",
    "hindi": "दिखावट"
  },
  "shy_coward": {
    "english": "Shy / coward",
    "bishnupriya": "মিঠাক",
    "bangla": "লজ্জাশীল / ভিতু",
    "hindi": "शर्मीला / डरपोक"
  },
  "liar_alt": {
    "english": "Liar",
    "bishnupriya": "মিথ্যুক",
    "bangla": "মিথ্যাবাদী",
    "hindi": "झूठा"
  },
  "request": {
    "english": "Request",
    "bishnupriya": "মিনতি",
    "bangla": "অনুরোধ",
    "hindi": "मिन्नत"
  },
  "enmity": {
    "english": "Enmity",
    "bishnupriya": "মীনা",
    "bangla": "শত্রুতা",
    "hindi": "दुश्मनी"
  },
  "untrue_liar": {
    "english": "Untrue / liar",
    "bishnupriya": "মীনাম্পা",
    "bangla": "মিথ্যা / মিথ্যাবাদী",
    "hindi": "झूठा / झूठ बोलने वाला"
  },
  "unfaithful_female": {
    "english": "Unfaithful (female)",
    "bishnupriya": "মীনাম্পি",
    "bangla": "অবিশ্বাসী মহিলা",
    "hindi": "बेवफा औरत"
  },
  "slave": {
    "english": "Slave",
    "bishnupriya": "মীনায়",
    "bangla": "দাস",
    "hindi": "गुलाम"
  },
  "reception_hospitality": {
    "english": "Reception / hospitality",
    "bishnupriya": "মীপাক",
    "bangla": "অভ্যর্থনা",
    "hindi": "स्वागत"
  },
  "head_man_alt": {
    "english": "Head-man",
    "bishnupriya": "মীপা",
    "bangla": "প্রধান",
    "hindi": "मुखिया"
  },
  "personality": {
    "english": "Personality",
    "bishnupriya": "মীপাক",
    "bangla": "ব্যক্তিত্ব",
    "hindi": "शख्सियत"
  },
  "condition": {
    "english": "Condition",
    "bishnupriya": "মীপাল",
    "bangla": "অবস্থা",
    "hindi": "हालत"
  },
  "bravery": {
    "english": "Bravery",
    "bishnupriya": "মীমাক",
    "bangla": "বীরত্ব",
    "hindi": "बहादुरी"
  },
  "shy": {
    "english": "Shy",
    "bishnupriya": "মীমত",
    "bangla": "লজ্জাশীল",
    "hindi": "शर्मीला"
  },
  "man_in_front_personality": {
    "english": "Man in front / personality",
    "bishnupriya": "মীমান",
    "bangla": "সামনের লোক / ব্যক্তিত্ব",
    "hindi": "आगे का आदमी / शख्सियत"
  },
  "total_destruction": {
    "english": "Total destruction",
    "bishnupriya": "মীমুত",
    "bangla": "সম্পূর্ণ ধ্বংস",
    "hindi": "पूरा नाश"
  },
  "death": {
    "english": "Death",
    "bishnupriya": "মীয়াল",
    "bangla": "মৃত্যু",
    "hindi": "मौत"
  },
  "the_bengalees": {
    "english": "The Bengalees",
    "bishnupriya": "মীয়ান",
    "bangla": "বাঙালি",
    "hindi": "बंगाली"
  },
  "kind_of_herb": {
    "english": "A kind of herb",
    "bishnupriya": "মীয়ান্পা",
    "bangla": "এক ধরনের শাক",
    "hindi": "एक तरह का साग"
  },
  "term": {
    "english": "Term",
    "bishnupriya": "মীয়াদ",
    "bangla": "মেয়াদ",
    "hindi": "मुद्दत"
  },
  "relating_to_fixed_time": {
    "english": "Relating to fixed time",
    "bishnupriya": "মীয়াদি",
    "bangla": "মেয়াদী",
    "hindi": "मुद्दती"
  },
  "many": {
    "english": "Many",
    "bishnupriya": "মীয়াম",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "vegetables_from_kitchen_garden": {
    "english": "Vegetables from kitchen garden",
    "bishnupriya": "মীয়ার",
    "bangla": "বাড়ির শাক",
    "hindi": "घर का साग"
  },
  "subject_matter_musical_measure": {
    "english": "Subject-matter / musical measure",
    "bishnupriya": "মীরাল",
    "bangla": "বিষয় / তাল",
    "hindi": "विषय / ताल"
  },
  "equal_status": {
    "english": "Equal status",
    "bishnupriya": "মীরাল",
    "bangla": "সমান মর্যাদা",
    "hindi": "बराबर दर्जा"
  },
  "personality_alt": {
    "english": "Personality",
    "bishnupriya": "মীরাক",
    "bangla": "ব্যক্তিত্ব",
    "hindi": "शख्सियत"
  },
  "brightness": {
    "english": "Brightness",
    "bishnupriya": "মিরিক-মিরিক",
    "bangla": "ঝকঝকে",
    "hindi": "चमक"
  },
  "native_land": {
    "english": "Native land",
    "bishnupriya": "মিরুপাক",
    "bangla": "জন্মভূমি",
    "hindi": "जन्मभूमि"
  },
  "trick_artifice": {
    "english": "Trick / artifice",
    "bishnupriya": "মীরেই",
    "bangla": "চালাকি",
    "hindi": "चालाकी"
  },
  "smoothness": {
    "english": "Smoothness",
    "bishnupriya": "মির-মির",
    "bangla": "মসৃণ",
    "hindi": "चिकनापन"
  },
  "to_come_together_tally": {
    "english": "To come together / tally",
    "bishnupriya": "মিল-",
    "bangla": "মিলে যাওয়া",
    "hindi": "मिलना"
  },
  "to_bring_together_verify": {
    "english": "To bring together / verify",
    "bishnupriya": "মিলা-",
    "bangla": "মিলানো / যাচাই করা",
    "hindi": "मिलाना / जाँचना"
  },
  "intimate_association": {
    "english": "Intimate association",
    "bishnupriya": "মিলামিশা",
    "bangla": "ঘনিষ্ঠতা",
    "hindi": "घनिष्ठता"
  },
  "glance": {
    "english": "Glance",
    "bishnupriya": "মিল্লেং",
    "bangla": "দৃষ্টি",
    "hindi": "नज़र"
  },
  "to_be_mixed": {
    "english": "To be mixed",
    "bishnupriya": "মিস-",
    "bangla": "মিশে যাওয়া",
    "hindi": "मिलना"
  },
  "adulteration": {
    "english": "Adulteration",
    "bishnupriya": "মিসাল",
    "bangla": "ভেজাল",
    "hindi": "मिलावट"
  },
  "to_mix": {
    "english": "To mix",
    "bishnupriya": "মিসা-",
    "bangla": "মেশানো",
    "hindi": "मिलाना"
  },
  "association": {
    "english": "Association",
    "bishnupriya": "মিশামিশি",
    "bangla": "মেলামেশা",
    "hindi": "घुलना-मिलना"
  },
  "sociable": {
    "english": "Sociable",
    "bishnupriya": "মিশুক",
    "bangla": "মিশুকে",
    "hindi": "मिलनसार"
  },
  "sweet_sweetmeat": {
    "english": "Sweet / sweetmeat",
    "bishnupriya": "মিষ্টি",
    "bangla": "মিষ্টি",
    "hindi": "मीठा / मिठाई"
  },
  "number_enumeration": {
    "english": "Number / enumeration",
    "bishnupriya": "মিসিন",
    "bangla": "সংখ্যা",
    "hindi": "नंबर"
  },
  "fine_slender": {
    "english": "Fine / slender",
    "bishnupriya": "মিহি",
    "bangla": "সরু",
    "hindi": "पतला"
  },
  "antagonism": {
    "english": "Antagonism",
    "bishnupriya": "মিহি",
    "bangla": "বিরোধ",
    "hindi": "दुश्मनी"
  },
  "envy": {
    "english": "Envy",
    "bishnupriya": "মিহুনা",
    "bangla": "ঈর্ষা",
    "hindi": "जलन"
  },
  "pulse": {
    "english": "Pulse",
    "bishnupriya": "মিহুল",
    "bangla": "ডাল",
    "hindi": "दाल"
  },
  "direction_suffix": {
    "english": "Direction suffix",
    "bishnupriya": "মু",
    "bangla": "দিক প্রত্যয়",
    "hindi": "दिशा प्रत्यय"
  },
  "ink": {
    "english": "Ink",
    "bishnupriya": "মুক",
    "bangla": "কালি",
    "hindi": "स्याही"
  },
  "to_be_unfastened": {
    "english": "To be unfastened",
    "bishnupriya": "মুক-",
    "bangla": "খুলে যাওয়া",
    "hindi": "खुलना"
  },
  "unfastened": {
    "english": "Unfastened",
    "bishnupriya": "মুকা",
    "bangla": "খোলা",
    "hindi": "खुला"
  },
  "to_unfasten": {
    "english": "To unfasten",
    "bishnupriya": "মুকা-",
    "bangla": "খোলা",
    "hindi": "खोलना"
  },
  "face_to_face_discussion": {
    "english": "Face-to-face discussion",
    "bishnupriya": "মুকাবিলা",
    "bangla": "মুখোমুখি আলোচনা",
    "hindi": "आमना-सामना"
  },
  "bulbous_root_of_arum": {
    "english": "Bulbous root of arum",
    "bishnupriya": "মুক্খি",
    "bangla": "মানকচুর গাঁড়",
    "hindi": "मैनकचू का कंद"
  },
  "ink_pot": {
    "english": "Ink-pot",
    "bishnupriya": "মুক্খু",
    "bangla": "কালির দোয়াত",
    "hindi": "स्याहीदान"
  },
  "smile": {
    "english": "Smile",
    "bishnupriya": "মুকছু",
    "bangla": "হাসি",
    "hindi": "मुस्कान"
  },
  "vanity": {
    "english": "Vanity",
    "bishnupriya": "মুক-থেক",
    "bangla": "অহংকার",
    "hindi": "घमंड"
  },
  "attorney_village_judge": {
    "english": "Attorney / village judge",
    "bishnupriya": "মুক্তিয়ার",
    "bangla": "উকিল / গ্রামের বিচারক",
    "hindi": "वकील / गाँव का जज"
  },
  "committed_to_memory": {
    "english": "Committed to memory",
    "bishnupriya": "মুখস্ত",
    "bangla": "মুখস্থ",
    "hindi": "कंठस्थ"
  },
  "face_opening": {
    "english": "Face / opening",
    "bishnupriya": "মুখা",
    "bangla": "মুখ",
    "hindi": "मुँह"
  },
  "facing_towards": {
    "english": "Facing towards",
    "bishnupriya": "-মুখা",
    "bangla": "সম্মুখীন",
    "hindi": "की ओर"
  },
  "face_to_face": {
    "english": "Face-to-face",
    "bishnupriya": "মুখামুখি",
    "bangla": "মুখোমুখি",
    "hindi": "आमने-सामने"
  },
  "kind_of_pulses": {
    "english": "A kind of pulses",
    "bishnupriya": "মুগ",
    "bangla": "মুগ ডাল",
    "hindi": "मूंग दाल"
  },
  "kind_of_coarse_silk": {
    "english": "A kind of coarse silk",
    "bishnupriya": "মুগা",
    "bangla": "মুগা সিল্ক",
    "hindi": "मूगा रेशम"
  },
  "front": {
    "english": "Front",
    "bishnupriya": "মুন",
    "bangla": "সামনে",
    "hindi": "आगे"
  },
  "face_to_face_alt": {
    "english": "Face-to-face",
    "bishnupriya": "মুনামুনি",
    "bangla": "মুখোমুখি",
    "hindi": "आमने-सामने"
  },
  "wrenching": {
    "english": "Wrenching",
    "bishnupriya": "মুচান",
    "bangla": "মোচড়",
    "hindi": "मरोड़"
  },
  "cobbler": {
    "english": "Cobbler",
    "bishnupriya": "মুচি",
    "bangla": "মুচি",
    "hindi": "मोची"
  },
  "to_be_wiped_off": {
    "english": "To be wiped off",
    "bishnupriya": "মুছ-",
    "bangla": "মুছে যাওয়া",
    "hindi": "मिटना"
  },
  "to_rub_off": {
    "english": "To rub off",
    "bishnupriya": "মুছা-",
    "bangla": "মুছা",
    "hindi": "मिटाना"
  },
  "to_wrench": {
    "english": "To wrench",
    "bishnupriya": "মুছড়া-",
    "bangla": "মোচড়ানো",
    "hindi": "मरोड़ना"
  },
  "stocking": {
    "english": "Stocking",
    "bishnupriya": "মুজা",
    "bangla": "মোজা",
    "hindi": "मोज़ा"
  },
  "to_twist": {
    "english": "To twist",
    "bishnupriya": "মুজুর-",
    "bangla": "মোচড়ানো",
    "hindi": "मरोड़ना"
  },
  "twist_wrench": {
    "english": "Twist / wrench",
    "bishnupriya": "মুজুরা",
    "bangla": "মোচড়",
    "hindi": "मरोड़"
  },
  "total": {
    "english": "Total",
    "bishnupriya": "মুত",
    "bangla": "মোট",
    "hindi": "कुल"
  },
  "roughly_summarily": {
    "english": "Roughly / summarily",
    "bishnupriya": "মুতামুতি",
    "bangla": "আন্দাজে",
    "hindi": "अंदाज़े"
  },
  "grip_handful": {
    "english": "Grip / handful",
    "bishnupriya": "মুঠ / মুঠা",
    "bangla": "মুঠো",
    "hindi": "मुट्ठी"
  },
  "bundle": {
    "english": "Bundle",
    "bishnupriya": "মুঠা / মুঠি",
    "bangla": "গোছা",
    "hindi": "गठरी"
  },
  "extinction": {
    "english": "Extinction",
    "bishnupriya": "মুত",
    "bangla": "নির্বাপণ",
    "hindi": "बुझना"
  },
  "heel": {
    "english": "Heel",
    "bishnupriya": "মুঠা",
    "bangla": "গোড়ালি",
    "hindi": "एड़ी"
  },
  "man_human": {
    "english": "Man / human",
    "bishnupriya": "মুনি",
    "bangla": "মানুষ",
    "hindi": "इंसान"
  },
  "manliness": {
    "english": "Manliness",
    "bishnupriya": "মুনিগিরি",
    "bangla": "পুরুষত্ব",
    "hindi": "मर्दानगी"
  },
  "winged_ant": {
    "english": "Winged ant",
    "bishnupriya": "মুনুপি",
    "bangla": "ডানাওয়ালা পিঁপড়ে",
    "hindi": "उड़ने वाली चींटी"
  },
  "head": {
    "english": "Head",
    "bishnupriya": "মুর",
    "bangla": "মাথা",
    "hindi": "सिर"
  },
  "instrument_for_crushing_betel_nut": {
    "english": "Instrument for crushing betel nut",
    "bishnupriya": "মুরান",
    "bangla": "সুপারি চূর্ণ করার যন্ত্র",
    "hindi": "सुपारी कुचलने का औज़ार"
  },
  "guardianship": {
    "english": "Guardianship",
    "bishnupriya": "মুরাব্বি-আনা",
    "bangla": "অভিভাবকত্ব",
    "hindi": "संरक्षण"
  },
  "log": {
    "english": "Log",
    "bishnupriya": "মুরা",
    "bangla": "গুঁড়ি",
    "hindi": "लट्ठा"
  },
  "strength_ability": {
    "english": "Strength / ability",
    "bishnupriya": "মুরাত",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "paddy_variety": {
    "english": "A paddy variety",
    "bishnupriya": "মুরালি",
    "bangla": "এক ধরনের ধান",
    "hindi": "एक तरह का चावल"
  },
  "kind_of_spices": {
    "english": "A kind of spices",
    "bishnupriya": "মুরি",
    "bangla": "মশলা",
    "hindi": "मसाला"
  },
  "cock_hen": {
    "english": "Cock / hen",
    "bishnupriya": "মুরুক",
    "bangla": "মোরগ",
    "hindi": "मुर्गा"
  },
  "head_man": {
    "english": "Head-man",
    "bishnupriya": "মুরুসি",
    "bangla": "মাথা / প্রধান",
    "hindi": "सरदार"
  },
  "hen": {
    "english": "Hen",
    "bishnupriya": "মুর্গি",
    "bangla": "মুরগি",
    "hindi": "मुर्गी"
  },
  "to_wrench_twist": {
    "english": "To wrench / twist",
    "bishnupriya": "মুর্ছ-",
    "bangla": "মোচড়ানো",
    "hindi": "मरोड़ना"
  },
  "to_wrap_cover": {
    "english": "To wrap / cover",
    "bishnupriya": "মুর-",
    "bangla": "মোড়া",
    "hindi": "लपेटना"
  },
  "head": {
    "english": "Head",
    "bishnupriya": "মুর",
    "bangla": "মাথা",
    "hindi": "सिर"
  },
  "log_alt": {
    "english": "Log",
    "bishnupriya": "মুরা",
    "bangla": "গুঁড়ি",
    "hindi": "लट्ठा"
  },
  "topless_chair": {
    "english": "Topless chair",
    "bishnupriya": "মুরা",
    "bangla": "খোলা চেয়ার",
    "hindi": "बिना पीठ की कुर्सी"
  },
  "turn_twist": {
    "english": "Turn / twist",
    "bishnupriya": "মুরা",
    "bangla": "মোড়",
    "hindi": "मोड़"
  },
  "bulbous_root_of_arum": {
    "english": "Bulbous root of arum",
    "bishnupriya": "মুরা",
    "bangla": "মানকচুর গাঁড়",
    "hindi": "मैनकचू का कंद"
  },
  "to_wrap": {
    "english": "To wrap",
    "bishnupriya": "মুরা-",
    "bangla": "মোড়ানো",
    "hindi": "लपेटना"
  },
  "fried_rice": {
    "english": "Fried rice",
    "bishnupriya": "মুরি",
    "bangla": "মুড়ি",
    "hindi": "मुरमुरा"
  },
  "head_of_fish": {
    "english": "Head of fish",
    "bishnupriya": "মুরি",
    "bangla": "মাছের মাথা",
    "hindi": "मछली का सिर"
  },
  "fringe": {
    "english": "Fringe",
    "bishnupriya": "মুরি",
    "bangla": "ঝালর",
    "hindi": "फ्रिंज"
  },
  "remains_of_thatch": {
    "english": "Remains of thatch",
    "bishnupriya": "মুরিয়া",
    "bangla": "খড়ের অবশিষ্ট",
    "hindi": "छप्पर का बचा हुआ"
  },
  "one_having_big_head": {
    "english": "One having big head",
    "bishnupriya": "মুরিয়া",
    "bangla": "বড়ো মাথাওয়ালা",
    "hindi": "बड़ा सिर वाला"
  },
  "border_of_basket": {
    "english": "Border of basket",
    "bishnupriya": "মুরেঙ্গা",
    "bangla": "ঝুড়ির কিনারা",
    "hindi": "टोकरी का किनारा"
  },
  "ripe_mature": {
    "english": "Ripe / mature",
    "bishnupriya": "মুল",
    "bangla": "পাকা",
    "hindi": "पका"
  },
  "the_world": {
    "english": "The world",
    "bishnupriya": "মুলুক",
    "bangla": "দুনিয়া",
    "hindi": "दुनिया"
  },
  "mohammendan_priest": {
    "english": "Mohammendan priest",
    "bishnupriya": "মুল্লা",
    "bangla": "মৌলভি",
    "hindi": "मौलवी"
  },
  "kind_of_bamboo": {
    "english": "A kind of bamboo",
    "bishnupriya": "মুল্লি",
    "bangla": "এক প্রকার বাঁশ",
    "hindi": "एक तरह का बांस"
  },
  "muslim": {
    "english": "Muslim",
    "bishnupriya": "মুসলমান",
    "bangla": "মুসলমান",
    "hindi": "मुसलमान"
  },
  "charmed": {
    "english": "Charmed",
    "bishnupriya": "মুহা",
    "bangla": "মুগ্ধ",
    "hindi": "मोहित"
  },
  "to_charm": {
    "english": "To charm",
    "bishnupriya": "মুহা-",
    "bangla": "মুগ্ধ করা",
    "hindi": "मोहित करना"
  },
  "bulbous_root_of_arum_alt": {
    "english": "Bulbous root of arum",
    "bishnupriya": "মুহি",
    "bangla": "মানকচুর গাঁড়",
    "hindi": "मैनकचू का कंद"
  },
  "mother_sister": {
    "english": "Mother’s sister",
    "bishnupriya": "মুহি",
    "bangla": "মাসি",
    "hindi": "मामी"
  },
  "urine": {
    "english": "Urine",
    "bishnupriya": "মুত",
    "bangla": "মূত্র",
    "hindi": "पेशाब"
  },
  "to_pass_urine": {
    "english": "To pass urine",
    "bishnupriya": "মোত-",
    "bangla": "মূত্র ত্যাগ করা",
    "hindi": "पेशाब करना"
  },
  "face_prestige": {
    "english": "Face / prestige",
    "bishnupriya": "মেই",
    "bangla": "মুখ / সম্মান",
    "hindi": "चेहरा / इज़्ज़त"
  },
  "gonge_chisel": {
    "english": "Gonge / chisel",
    "bishnupriya": "মেইকাল",
    "bangla": "ছেনি",
    "hindi": "छेनी"
  },
  "ashamed_speechless": {
    "english": "Ashamed / speechless",
    "bishnupriya": "মেইকুপ",
    "bangla": "লজ্জিত / নিরুত্তর",
    "hindi": "शर्मिंदा / गूँगा"
  },
  "direction": {
    "english": "Direction",
    "bishnupriya": "মেইকেই",
    "bangla": "দিক",
    "hindi": "दिशा"
  },
  "keenly_attentive": {
    "english": "Keenly attentive",
    "bishnupriya": "মেইখ্খু",
    "bangla": "তীক্ষ্ণ মনোযোগী",
    "hindi": "चौकन्ना"
  },
  "face_cover_in_rasa": {
    "english": "Face-cover in Rāsa",
    "bishnupriya": "মেইখুম",
    "bangla": "মুখ ঢাকা",
    "hindi": "मुँह ढकने वाला"
  },
  "matches": {
    "english": "Matches",
    "bishnupriya": "মেইখেত",
    "bangla": "দেশলাই",
    "hindi": "माचिस"
  },
  "reception": {
    "english": "Reception",
    "bishnupriya": "মেইনাক",
    "bangla": "অভ্যর্থনা",
    "hindi": "स्वागत"
  },
  "honour": {
    "english": "Honour",
    "bishnupriya": "মেইঞাক",
    "bangla": "সম্মান",
    "hindi": "इज़्ज़त"
  },
  "light": {
    "english": "Light",
    "bishnupriya": "মেইনাল",
    "bangla": "আলো",
    "hindi": "रोशनी"
  },
  "heat": {
    "english": "Heat",
    "bishnupriya": "মেইচাক",
    "bangla": "গরম",
    "hindi": "गर्मी"
  },
  "trouble": {
    "english": "Trouble",
    "bishnupriya": "মেইচিল",
    "bangla": "বিপদ",
    "hindi": "मुसीबत"
  },
  "remains_of_burnt_fuel": {
    "english": "Remains of burnt fuel",
    "bishnupriya": "মেইথুম",
    "bangla": "পোড়া কয়লা",
    "hindi": "जली लकड़ी का अवशेष"
  },
  "pinnacle_of_booth": {
    "english": "Pinnacle of booth",
    "bishnupriya": "মেইতল",
    "bangla": "মণ্ডপের শিখর",
    "hindi": "मंडप का शिखर"
  },
  "obstinate": {
    "english": "Obstinate",
    "bishnupriya": "মেইথি",
    "bangla": "জেদি",
    "hindi": "ज़िद्दी"
  },
  "face": {
    "english": "Face",
    "bishnupriya": "মেইথান",
    "bangla": "মুখ",
    "hindi": "चेहरा"
  },
  "gush_of_fire": {
    "english": "Gush of fire",
    "bishnupriya": "মেইথুম",
    "bangla": "আগুনের ঝলক",
    "hindi": "आग की लपट"
  },
  "bottom_of_heart": {
    "english": "Bottom of heart",
    "bishnupriya": "মেইনা",
    "bangla": "হৃদয়ের গভীর",
    "hindi": "दिल की गहराई"
  },
  "charcoal_piece_in_hookah": {
    "english": "Charcoal piece in hookah",
    "bishnupriya": "মেইনিন",
    "bangla": "হুক্কার কয়লা",
    "hindi": "हुक्के का कोयला"
  },
  "physician_exorcist": {
    "english": "Physician / exorcist",
    "bishnupriya": "মেইপা",
    "bangla": "ডাক্তার / ওঝা",
    "hindi": "वैद्य / ओझा"
  },
  "greatness": {
    "english": "Greatness",
    "bishnupriya": "মেইপাক",
    "bangla": "মহত্ত্ব",
    "hindi": "महानता"
  },
  "profession_of_physician": {
    "english": "Profession of physician",
    "bishnupriya": "মেইপরাল",
    "bangla": "ডাক্তারি",
    "hindi": "वैद्यकी"
  },
  "female_physician": {
    "english": "Female physician",
    "bishnupriya": "মেইপি",
    "bangla": "মহিলা ডাক্তার",
    "hindi": "महिला वैद्य"
  },
  "gush_of_fire_alt": {
    "english": "Gush of fire",
    "bishnupriya": "মেইপুল",
    "bangla": "আগুনের ঝলক",
    "hindi": "आग की लपट"
  },
  "vanished": {
    "english": "Vanished",
    "bishnupriya": "মেইমুত",
    "bangla": "লুপ্ত",
    "hindi": "गायब"
  },
  "spark_of_fire": {
    "english": "Spark of fire",
    "bishnupriya": "মেইরিক",
    "bangla": "আগুনের ফুলকি",
    "hindi": "आग का चिंगारा"
  },
  "inauguration_of_house": {
    "english": "Inauguration of house",
    "bishnupriya": "সাঙ্কা",
    "bangla": "গৃহপ্রবেশ",
    "hindi": "गृहप्रवेश"
  },
  "finished": {
    "english": "Finished",
    "bishnupriya": "সাঙ্গ",
    "bangla": "শেষ",
    "hindi": "पूरा"
  },
  "property_wealth": {
    "english": "Property / wealth",
    "bishnupriya": "সানপাল",
    "bangla": "সম্পত্তি",
    "hindi": "दौलत"
  },
  "green_colour": {
    "english": "Green colour",
    "bishnupriya": "সানলেল",
    "bangla": "সবুজ",
    "hindi": "हरा"
  },
  "scap": {
    "english": "Scap",
    "bishnupriya": "সাচান",
    "bangla": "কাঁধ",
    "hindi": "कंधा"
  },
  "morningstar": {
    "english": "Morningstar",
    "bishnupriya": "সাচাক",
    "bangla": "ভোরের তারা",
    "hindi": "भोर का तारा"
  },
  "true": {
    "english": "True",
    "bishnupriya": "সাচ্চা",
    "bangla": "সত্য",
    "hindi": "सच"
  },
  "to_be_decorated": {
    "english": "To be decorated",
    "bishnupriya": "সাজ-",
    "bangla": "সাজা",
    "hindi": "सजना"
  },
  "decoration": {
    "english": "Decoration",
    "bishnupriya": "সাজ",
    "bangla": "সাজ",
    "hindi": "सजावट"
  },
  "to_arrange_decorate": {
    "english": "To arrange / decorate",
    "bishnupriya": "সাজা-",
    "bangla": "সাজানো",
    "hindi": "सजाना"
  },
  "prostrate": {
    "english": "Prostrate",
    "bishnupriya": "সাজারান",
    "bangla": "সাষ্টাঙ্গ প্রণাম",
    "hindi": "साष्टांग प्रणाम"
  },
  "style": {
    "english": "Style",
    "bishnupriya": "সাজেল",
    "bangla": "স্টাইল",
    "hindi": "स्टाइल"
  },
  "foppish": {
    "english": "Foppish",
    "bishnupriya": "সাজেলিয়া",
    "bangla": "ফ্যাশনপ্রিয়",
    "hindi": "फैशनप्रिय"
  },
  "pretext": {
    "english": "Pretext",
    "bishnupriya": "সাতান",
    "bangla": "ছল",
    "hindi": "बहाना"
  },
  "mushroom_dirt": {
    "english": "Mushroom / dirt",
    "bishnupriya": "সাতরা",
    "bangla": "ছত্রাক / ময়লা",
    "hindi": "कुकुरमुत्ता / गंदगी"
  },
  "hunting": {
    "english": "Hunting",
    "bishnupriya": "সাতাল",
    "bangla": "শিকার",
    "hindi": "शिकार"
  },
  "fowler": {
    "english": "Fowler",
    "bishnupriya": "সাতালি",
    "bangla": "শিকারি",
    "hindi": "शिकारी"
  },
  "ugly_face": {
    "english": "Ugly face",
    "bishnupriya": "সাতমালিয়া",
    "bangla": "কুৎসিত মুখ",
    "hindi": "बदसूरत चेहरा"
  },
  "like": {
    "english": "Like",
    "bishnupriya": "সদনে",
    "bangla": "যেমন",
    "hindi": "जैसे"
  },
  "white": {
    "english": "White",
    "bishnupriya": "সাদা",
    "bangla": "সাদা",
    "hindi": "सफेद"
  },
  "marriage": {
    "english": "Marriage",
    "bishnupriya": "সাদি",
    "bangla": "বিয়ে",
    "hindi": "शादी"
  },
  "pretending_practice": {
    "english": "Pretending / practice",
    "bishnupriya": "সানা",
    "bangla": "ভান / অভ্যাস",
    "hindi": "नाटक / अभ्यास"
  },
  "species_of_reptile": {
    "english": "A species of reptile",
    "bishnupriya": "সানাম্পা",
    "bangla": "এক ধরনের সরীসৃপ",
    "hindi": "एक तरह का सरीसृप"
  },
  "signal_beckoning": {
    "english": "Signal / beckoning",
    "bishnupriya": "সানি",
    "bangla": "ইঙ্গিত",
    "hindi": "इशारा"
  },
  "insanity": {
    "english": "Insanity",
    "bishnupriya": "সানিক",
    "bangla": "পাগলামি",
    "hindi": "पागलपन"
  },
  "sign_hint": {
    "english": "Sign / hint",
    "bishnupriya": "সান্তা",
    "bangla": "চিহ্ন",
    "hindi": "निशान"
  },
  "sentry": {
    "english": "Sentry",
    "bishnupriya": "সান্ত্রি",
    "bangla": "প্রহরী",
    "hindi": "चौकीदार"
  },
  "she_buffalo": {
    "english": "She-buffalo",
    "bishnupriya": "সাপি",
    "bangla": "মোষী",
    "hindi": "भैंस"
  },
  "snake_charmer": {
    "english": "Snake-charmer",
    "bishnupriya": "সাপুনি",
    "bangla": "সাপুড়ে",
    "hindi": "सपेरा"
  },
  "week": {
    "english": "Week",
    "bishnupriya": "সপ্তা",
    "bangla": "সপ্তাহ",
    "hindi": "हफ्ता"
  },
  "open_clean": {
    "english": "Open / clean",
    "bishnupriya": "সাফ / সাফা",
    "bangla": "পরিষ্কার",
    "hindi": "साफ"
  },
  "cleaning": {
    "english": "Cleaning",
    "bishnupriya": "সাফাই",
    "bangla": "পরিষ্কার করা",
    "hindi": "सफाई"
  },
  "soap": {
    "english": "Soap",
    "bishnupriya": "সাবান",
    "bangla": "সাবান",
    "hindi": "साबुन"
  },
  "sticky_substance_in_bee_nest": {
    "english": "Sticky substance in bee nest",
    "bishnupriya": "সাবাক",
    "bangla": "মৌচাকের আঠালো জিনিস",
    "hindi": "मधुमक्खी के छत्ते का चिपचिपा पदार्थ"
  },
  "health_appearance": {
    "english": "Health / appearance",
    "bishnupriya": "সাবাম",
    "bangla": "স্বাস্থ্য / চেহারা",
    "hindi": "सेहत / रूप"
  },
  "bravo": {
    "english": "Bravo",
    "bishnupriya": "সাবাস",
    "bangla": "বাহবা",
    "hindi": "शाबाश"
  },
  "clearance_finished": {
    "english": "Clearance / finished",
    "bishnupriya": "সাবুদ",
    "bangla": "পরিষ্কার / শেষ",
    "hindi": "साफ / खत्म"
  },
  "sago": {
    "english": "Sago",
    "bishnupriya": "সাবুদানা",
    "bangla": "সাগু",
    "hindi": "साबुदाना"
  },
  "total": {
    "english": "Total",
    "bishnupriya": "সাবেক",
    "bangla": "পুরো",
    "hindi": "पूरा"
  },
  "settlement": {
    "english": "Settlement",
    "bishnupriya": "সাব্যস্তা",
    "bangla": "বন্দোবস্ত",
    "hindi": "बंदोबस्त"
  },
  "all_in_all": {
    "english": "All-in-all",
    "bishnupriya": "সর্বে-সর্বা",
    "bangla": "সবকিছু",
    "hindi": "सब कुछ"
  },
  "quick_dry_leaves_sound": {
    "english": "Quick / dry leaves sound",
    "bishnupriya": "সরসর",
    "bangla": "ঝড়ঝড় / শুকনো পাতার শব্দ",
    "hindi": "झड़झड़ / सूखी पत्तियों की आवाज़"
  },
  "equipments": {
    "english": "Equipments",
    "bishnupriya": "সরঞ্জাম",
    "bangla": "সাজসরঞ্জাম",
    "hindi": "सामान"
  },
  "simplicity": {
    "english": "Simplicity",
    "bishnupriya": "সরলতা",
    "bangla": "সরলতা",
    "hindi": "सरलता"
  },
  "fine_tasty": {
    "english": "Fine / tasty",
    "bishnupriya": "সরস",
    "bangla": "সুস্বাদু",
    "hindi": "स्वादिष्ट"
  },
  "harsh": {
    "english": "Harsh",
    "bishnupriya": "সার",
    "bangla": "রুক্ষ",
    "hindi": "कड़वा"
  },
  "unguarded": {
    "english": "Unguarded",
    "bishnupriya": "সরল",
    "bangla": "অরক্ষিত",
    "hindi": "बेखौफ"
  },
  "capable_of_speaking": {
    "english": "Capable of speaking",
    "bishnupriya": "সরস্বত",
    "bangla": "বাকপটু",
    "hindi": "वाक्पटु"
  },
  "entire": {
    "english": "Entire",
    "bishnupriya": "সারা",
    "bangla": "পুরো",
    "hindi": "पूरा"
  },
  "open_village_field": {
    "english": "Open village field",
    "bishnupriya": "সারা",
    "bangla": "গ্রামের খোলা মাঠ",
    "hindi": "गाँव का खुला मैदान"
  },
  "running_jumping_calves": {
    "english": "Running & jumping (calves)",
    "bishnupriya": "সরাক",
    "bangla": "ছোটোটাছুটি",
    "hindi": "दौड़ना-कूदना"
  },
  "limbs": {
    "english": "Limbs",
    "bishnupriya": "সরম",
    "bangla": "অঙ্গ",
    "hindi": "अंग"
  },
  "place_soiled_by_beasts": {
    "english": "Place soiled by beasts",
    "bishnupriya": "সরম",
    "bangla": "পশুর ময়লা জায়গা",
    "hindi": "जानवरों से गंदी जगह"
  },
  "fighting_beasts": {
    "english": "Fighting (beasts)",
    "bishnupriya": "সরম",
    "bangla": "পশুদের লড়াই",
    "hindi": "जानवरों की लड़ाई"
  },
  "fishing_instrument": {
    "english": "Fishing instrument",
    "bishnupriya": "সারালু",
    "bangla": "মাছ ধরার যন্ত্র",
    "hindi": "मछली पकड़ने का औज़ार"
  },
  "line_row": {
    "english": "Line / row",
    "bishnupriya": "সারি",
    "bangla": "লাইন",
    "hindi": "लाइन"
  },
  "bell_cricket": {
    "english": "Bell / cricket",
    "bishnupriya": "সারিক",
    "bangla": "ঘণ্টা / ঝিঁঝিঁ পোকা",
    "hindi": "घंटी / झींगुर"
  },
  "share_instead_of": {
    "english": "Share / instead of",
    "bishnupriya": "সারুক",
    "bangla": "ভাগ / বদলে",
    "hindi": "हिस्सा / की जगह"
  },
  "strong_smell": {
    "english": "Strong smell",
    "bishnupriya": "সারুকা",
    "bangla": "তীব্র গন্ধ",
    "hindi": "तेज़ गंध"
  },
  "exceeding_by_half": {
    "english": "Exceeding by half",
    "bishnupriya": "সারে",
    "bangla": "অর্ধেক বেশি",
    "hindi": "आधा से ज़्यादा"
  },
  "smoking_pipe_leaf": {
    "english": "Smoking pipe (leaf)",
    "bishnupriya": "সারেই",
    "bangla": "পাতার হুক্কা",
    "hindi": "पत्ते का हुक्का"
  },
  "conformity": {
    "english": "Conformity",
    "bishnupriya": "সারেপ",
    "bangla": "সঙ্গতি",
    "hindi": "मेल"
  },
  "whitlow": {
    "english": "Whitlow",
    "bishnupriya": "সারকাটা",
    "bangla": "আঙুলের পচা ঘা",
    "hindi": "अंगुली का फोड़ा"
  },
  "sound": {
    "english": "Sound",
    "bishnupriya": "সারা",
    "bangla": "শব্দ",
    "hindi": "आवाज़"
  },
  "to_join": {
    "english": "To join",
    "bishnupriya": "সাম-",
    "bangla": "যোড়া",
    "hindi": "जोड़ना"
  },
  "abridgment": {
    "english": "Abridgment",
    "bishnupriya": "সাম",
    "bangla": "সংক্ষেপ",
    "hindi": "संक्षेप"
  },
  "material": {
    "english": "Material",
    "bishnupriya": "সামান",
    "bangla": "উপকরণ",
    "hindi": "सामान"
  },
  "to_control": {
    "english": "To control",
    "bishnupriya": "সামালা-",
    "bangla": "সামলানো",
    "hindi": "संभालना"
  },
  "rhinoceros": {
    "english": "Rhinoceros",
    "bishnupriya": "সামুইসা",
    "bangla": "গণ্ডার",
    "hindi": "गेंडा"
  },
  "elephant_bean": {
    "english": "Elephant-bean",
    "bishnupriya": "সামু-খাই",
    "bangla": "হাতির ডাল",
    "hindi": "हाथी की दाल"
  },
  "front": {
    "english": "Front",
    "bishnupriya": "সাম্না",
    "bangla": "সামনে",
    "hindi": "सामने"
  },
  "tresses": {
    "english": "Tresses",
    "bishnupriya": "সাম্পাক",
    "bangla": "চুলের গোছা",
    "hindi": "चोटी"
  },
  "coloured_thread": {
    "english": "Coloured thread",
    "bishnupriya": "সালু",
    "bangla": "রঙিন সুতো",
    "hindi": "रंगीन धागा"
  },
  "dewlap_fold_of_muscle": {
    "english": "Dewlap / fold of muscle",
    "bishnupriya": "সাল্টুম / সাল্লাম",
    "bangla": "গলকম্বল / পেশির ভাঁজ",
    "hindi": "गलकंबल / मांसपेशी की तह"
  },
  "for_because_of": {
    "english": "For / because of",
    "bishnupriya": "সালে",
    "bangla": "কারণে",
    "hindi": "के लिए"
  },
  "lord": {
    "english": "Lord",
    "bishnupriya": "সাল",
    "bangla": "প্রভু",
    "hindi": "मालिक"
  },
  "european_englishman": {
    "english": "European / Englishman",
    "bishnupriya": "সাহেব",
    "bangla": "সাহেব",
    "hindi": "साहब"
  },
  "english_european_style": {
    "english": "English / European style",
    "bishnupriya": "সাহেবি",
    "bangla": "ইংরেজি / ইউরোপীয়",
    "hindi": "अंग्रेज़ी / यूरोपीय"
  },
  "small_iron_rod": {
    "english": "Small iron-rod",
    "bishnupriya": "সিক",
    "bangla": "ছোটো লোহার রড",
    "hindi": "छोटी लोहे की छड़"
  },
  "one_fourth_rupee": {
    "english": "One-fourth rupee",
    "bishnupriya": "সিকি",
    "bangla": "সিকি",
    "hindi": "सिक्का (¼ रुपया)"
  },
  "intelligent_cautious": {
    "english": "Intelligent / cautious",
    "bishnupriya": "সিন",
    "bangla": "বুদ্ধিমান / সাবধান",
    "hindi": "समझदार / सतर्क"
  },
  "too_obstinate": {
    "english": "Too obstinate",
    "bishnupriya": "সিনান-খান",
    "bangla": "অত্যন্ত জেদি",
    "hindi": "बहुत ज़िद्दी"
  },
  "beam_weaving_implement": {
    "english": "Beam / weaving implement",
    "bishnupriya": "সিঙ্কাপ",
    "bangla": "কড়ি / তাঁতের যন্ত্র",
    "hindi": "शहतीर / करघे का औज़ार"
  },
  "conversation": {
    "english": "Conversation",
    "bishnupriya": "সিঙ্কুল",
    "bangla": "কথাবার্তা",
    "hindi": "बातचीत"
  },
  "white_autumnal_flower": {
    "english": "White autumnal flower",
    "bishnupriya": "সিঙ্গারেই",
    "bangla": "সাদা শরৎ ফুল",
    "hindi": "सफ़ेद शरद फूल"
  },
  "three_spiked_berry": {
    "english": "Three-spiked berry",
    "bishnupriya": "সিঙ্গারেই",
    "bangla": "তিন কাঁটাওয়ালা বেরি",
    "hindi": "तीन काँटे वाला बेर"
  },
  "small_bamboo_rod_in_weaving": {
    "english": "Small bamboo rod in weaving",
    "bishnupriya": "সিঙ্গল",
    "bangla": "তাঁতের ছোটো কাঠি",
    "hindi": "करघे की छोटी लकड़ी"
  },
  "jump_leap": {
    "english": "Jump / leap",
    "bishnupriya": "সিচ্চাং",
    "bangla": "লাফ",
    "hindi": "छलांग"
  },
  "discipline": {
    "english": "Discipline",
    "bishnupriya": "সিজিল",
    "bangla": "শৃঙ্খলা",
    "hindi": "अनुशासन"
  },
  "marriage": {
    "english": "Marriage",
    "bishnupriya": "সাদি",
    "bangla": "বিয়ে",
    "hindi": "शादी"
  },
  "petticoat": {
    "english": "Petticoat",
    "bishnupriya": "সায়া",
    "bangla": "সায়া",
    "hindi": "साया"
  },
  "essence_manure": {
    "english": "Essence / manure",
    "bishnupriya": "সারা",
    "bangla": "সার / সার",
    "hindi": "सार / खाद"
  },
  "harsh_intense": {
    "english": "Harsh / intense",
    "bishnupriya": "সার",
    "bangla": "রুক্ষ / তীব্র",
    "hindi": "कड़वा / तेज़"
  },
  "open_field": {
    "english": "Open field",
    "bishnupriya": "সারা",
    "bangla": "খোলা মাঠ",
    "hindi": "खुला मैदान"
  },
  "running_jumping_calves": {
    "english": "Running & jumping (calves)",
    "bishnupriya": "সরাক",
    "bangla": "ছোটোটাছুটি",
    "hindi": "दौड़ना-कूदना"
  },
  "limbs": {
    "english": "Limbs",
    "bishnupriya": "সরম",
    "bangla": "অঙ্গ",
    "hindi": "अंग"
  },
  "fighting_beasts": {
    "english": "Fighting (beasts)",
    "bishnupriya": "সরম",
    "bangla": "পশুদের লড়াই",
    "hindi": "जानवरों की लड़ाई"
  },
  "fishing_instrument": {
    "english": "Fishing instrument",
    "bishnupriya": "সারালু",
    "bangla": "মাছ ধরার যন্ত্র",
    "hindi": "मछली पकड़ने का औज़ार"
  },
  "line_row": {
    "english": "Line / row",
    "bishnupriya": "সারি",
    "bangla": "লাইন",
    "hindi": "लाइन"
  },
  "bell_cricket": {
    "english": "Bell / cricket",
    "bishnupriya": "সারিক",
    "bangla": "ঘণ্টা / ঝিঁঝিঁ পোকা",
    "hindi": "घंटी / झींगुर"
  },
  "share_instead_of": {
    "english": "Share / instead of",
    "bishnupriya": "সারুক",
    "bangla": "ভাগ / বদলে",
    "hindi": "हिस्सा / की जगह"
  },
  "strong_smell": {
    "english": "Strong smell",
    "bishnupriya": "সারুকা",
    "bangla": "তীব্র গন্ধ",
    "hindi": "तेज़ गंध"
  },
  "exceeding_by_half": {
    "english": "Exceeding by half",
    "bishnupriya": "সারে",
    "bangla": "অর্ধেক বেশি",
    "hindi": "आधा से ज़्यादा"
  },
  "smoking_pipe_leaf_pipe": {
    "english": "Smoking pipe (leaf pipe)",
    "bishnupriya": "সারেই",
    "bangla": "পাতার হুক্কা",
    "hindi": "पत्ते का हुक्का"
  },
  "conformity": {
    "english": "Conformity",
    "bishnupriya": "সারেপ",
    "bangla": "সঙ্গতি",
    "hindi": "मेल"
  },
  "whitlow": {
    "english": "Whitlow",
    "bishnupriya": "সারকাটা",
    "bangla": "আঙুলের পচা ঘা",
    "hindi": "अंगुली का फोड़ा"
  },
  "sound": {
    "english": "Sound",
    "bishnupriya": "সারা",
    "bangla": "শব্দ",
    "hindi": "आवाज़"
  },
  "to_join": {
    "english": "To join",
    "bishnupriya": "সাম-",
    "bangla": "যোড়া",
    "hindi": "जोड़ना"
  },
  "abridgment": {
    "english": "Abridgment",
    "bishnupriya": "সাম",
    "bangla": "সংক্ষেপ",
    "hindi": "संक्षेप"
  },
  "material": {
    "english": "Material",
    "bishnupriya": "সামান",
    "bangla": "উপকরণ",
    "hindi": "सामान"
  },
  "to_control": {
    "english": "To control",
    "bishnupriya": "সামালা-",
    "bangla": "সামলানো",
    "hindi": "संभालना"
  },
  "rhinoceros": {
    "english": "Rhinoceros",
    "bishnupriya": "সামুইসা",
    "bangla": "গণ্ডার",
    "hindi": "गेंडा"
  },
  "elephant_bean": {
    "english": "Elephant-bean",
    "bishnupriya": "সামু-খাই",
    "bangla": "হাতির ডাল",
    "hindi": "हाथी की दाल"
  },
  "front": {
    "english": "Front",
    "bishnupriya": "সাম্না",
    "bangla": "সামনে",
    "hindi": "सामने"
  },
  "tresses": {
    "english": "Tresses",
    "bishnupriya": "সাম্পাক",
    "bangla": "চুলের গোছা",
    "hindi": "चोटी"
  },
  "having_gaps_ill_growth_plants": {
    "english": "Having gaps / ill growth (plants)",
    "bishnupriya": "সেতুরা",
    "bangla": "ফাঁকফোকর / খারাপ বৃদ্ধি",
    "hindi": "दरारें / खराब बढ़ोतरी"
  },
  "to_chip": {
    "english": "To chip",
    "bishnupriya": "সেত-",
    "bangla": "কুচানো",
    "hindi": "कतरना"
  },
  "separated": {
    "english": "Separated",
    "bishnupriya": "সেতাক",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "three_stringed_instrument": {
    "english": "Three-stringed instrument",
    "bishnupriya": "সেতার",
    "bangla": "সেতার",
    "hindi": "सितार"
  },
  "large_good_nice_prefix": {
    "english": "Large / good / nice (prefix)",
    "bishnupriya": "সেনা+",
    "bangla": "বড়ো / ভালো প্রত্যয়",
    "hindi": "बड़ा / अच्छा प्रत्यय"
  },
  "large_beam": {
    "english": "Large beam",
    "bishnupriya": "সেনাইম্পি",
    "bangla": "বড়ো কড়ি",
    "hindi": "बड़ा शहतीर"
  },
  "big_fried_grain": {
    "english": "Big fried grain",
    "bishnupriya": "সেনাকাপাক",
    "bangla": "বড়ো ভাজা শস্য",
    "hindi": "बड़ा तला अनाज"
  },
  "species_of_banyan": {
    "english": "Species of banyan",
    "bishnupriya": "সেনাখোন্নান",
    "bangla": "এক প্রকার বটগাছ",
    "hindi": "एक तरह का बरगद"
  },
  "address_to_brahmin_preceptor": {
    "english": "Address to Brahmin preceptor",
    "bishnupriya": "সেনাখয়া",
    "bangla": "ব্রাহ্মণ গুরুকে সম্বোধন",
    "hindi": "ब्राह्मण गुरु को संबोधन"
  },
  "leech_in_grass": {
    "english": "Leech in grass",
    "bishnupriya": "সেনাপাক",
    "bangla": "ঘাসের জোঁক",
    "hindi": "घास में जोंक"
  },
  "metal_pitcher": {
    "english": "Metal pitcher",
    "bishnupriya": "সেনাপুল",
    "bangla": "ধাতুর ঘটি",
    "hindi": "धातु का घड़ा"
  },
  "name_of_a_deity": {
    "english": "Name of a deity",
    "bishnupriya": "সেনামাহি",
    "bangla": "এক দেবী",
    "hindi": "एक देवी"
  },
  "mercury": {
    "english": "Mercury",
    "bishnupriya": "সেনাহিদাক",
    "bangla": "পারদ",
    "hindi": "पारद"
  },
  "wild_cow": {
    "english": "Wild cow",
    "bishnupriya": "সেন্তান",
    "bangla": "বন্য গাই",
    "hindi": "जंगली गाय"
  },
  "south_west_corner": {
    "english": "South-west corner",
    "bishnupriya": "সেন্তুন",
    "bangla": "দক্ষিণ-পশ্চিম কোণ",
    "hindi": "दक्षिण-पश्चिम कोना"
  },
  "cow_dung": {
    "english": "Cow-dung",
    "bishnupriya": "সেন্দি",
    "bangla": "গোবর",
    "hindi": "गोबर"
  },
  "mushroom_from_cow_dung": {
    "english": "Mushroom from cow-dung",
    "bishnupriya": "সেন্দিয়াল",
    "bangla": "গোবরের ছত্রাক",
    "hindi": "गोबर का कुकुरमुत्ता"
  },
  "one_day_kirtana": {
    "english": "One-day kirtana",
    "bishnupriya": "সেন্ধানাম",
    "bangla": "একদিনের কীর্তন",
    "hindi": "एक दिन का कीर्तन"
  },
  "play_ground": {
    "english": "Play-ground",
    "bishnupriya": "সেন্নাফাম",
    "bangla": "খেলার মাঠ",
    "hindi": "खेल का मैदान"
  },
  "weaving_implement": {
    "english": "Weaving implement",
    "bishnupriya": "সেন্নাম",
    "bangla": "তাঁতের যন্ত্র",
    "hindi": "करघे का औज़ार"
  },
  "sediment_dirt_crust_on_skin": {
    "english": "Sediment/dirt crust on skin",
    "bishnupriya": "কর",
    "bangla": "ত্বকের ময়লার আস্তরণ",
    "hindi": "त्वचा पर गंदगी की परत"
  },
  "metal_ring_handcuff": {
    "english": "Metal ring / handcuff",
    "bishnupriya": "করা",
    "bangla": "ধাতুর আংটি / হাতকড়া",
    "hindi": "धातु की अंगूठी / हथकड़ी"
  },
  "stern_harsh_miserly": {
    "english": "Stern, harsh / miserly",
    "bishnupriya": "করা",
    "bangla": "কঠোর / কৃপণ",
    "hindi": "सख्त / कंजूस"
  },
  "strictness": {
    "english": "Strictness",
    "bishnupriya": "করাকরি",
    "bangla": "কঠোরতা",
    "hindi": "सख्ती"
  },
  "one_eighteenth_of_an_anna": {
    "english": "1/18th of an anna (old currency)",
    "bishnupriya": "করি",
    "bangla": "এক আনার অষ্টাদশাংশ",
    "hindi": "एक आने का अठारहवाँ हिस्सा"
  },
  "dry_dirt_crust_on_face": {
    "english": "Dry dirt crust on face",
    "bishnupriya": "করি-আতি / করি-উটি",
    "bangla": "মুখে শুকনো ময়লার খোলা",
    "hindi": "चेहरे पर सूखी गंदगी की परत"
  },
  "dirty_sediment_on_skin": {
    "english": "Dirty sediment on skin",
    "bishnupriya": "করমান",
    "bangla": "ত্বকের নোংরা আস্তরণ",
    "hindi": "त्वचा पर गंदी परत"
  },
  "having_dirty_skin_crust": {
    "english": "Having dirty skin crust",
    "bishnupriya": "করমানপা",
    "bangla": "নোংরা ত্বকের লোক",
    "hindi": "गंदी त्वचा वाला"
  },
  "one_with_dirty_skin_crust": {
    "english": "One with dirty skin crust",
    "bishnupriya": "করমানিয়া",
    "bangla": "নোংরা ত্বকের লোক",
    "hindi": "गंदी त्वचा वाला"
  },
  "machine_trick_cunning": {
    "english": "Machine / trick, cunning",
    "bishnupriya": "কল",
    "bangla": "যন্ত্র / চালাকি",
    "hindi": "मशीन / चालाकी"
  },
  "embrace_protection": {
    "english": "Embrace / protection",
    "bishnupriya": "কল",
    "bangla": "আলিঙ্গন / রক্ষা",
    "hindi": "गले लगाना / सुरक्षा"
  },
  "shed_for_cattle": {
    "english": "Shed (for cattle)",
    "bishnupriya": "কল",
    "bangla": "গোয়াল",
    "hindi": "खूँटा / शेड"
  },
  "utensils": {
    "english": "Utensils",
    "bishnupriya": "কাল",
    "bangla": "বাসনকোসন",
    "hindi": "बर्तन"
  },
  "curve_ring_subjugation": {
    "english": "Curve, ring / subjugation",
    "bishnupriya": "কাল",
    "bangla": "বাঁক / আয়ত্ত",
    "hindi": "वक्र / अधीनता"
  },
  "pen": {
    "english": "Pen",
    "bishnupriya": "কলম",
    "bangla": "কলম",
    "hindi": "कलम"
  },
  "cropping_trimming": {
    "english": "Cropping / trimming",
    "bishnupriya": "কলম",
    "bangla": "ছাঁটাই",
    "hindi": "कटाई-छँटाई"
  },
  "pen_knife": {
    "english": "Pen-knife",
    "bishnupriya": "কলম-তরাস",
    "bangla": "কলম ছুরি",
    "hindi": "पेन-चाकू"
  },
  "banana": {
    "english": "Banana",
    "bishnupriya": "কালা",
    "bangla": "কলা",
    "hindi": "केला"
  },
  "socket_hole_of_mattress": {
    "english": "Socket/hole of mattress",
    "bishnupriya": "কালা",
    "bangla": "গদির গর্ত",
    "hindi": "गद्दे का गड्ढा"
  },
  "half_ripe": {
    "english": "Half-ripe",
    "bishnupriya": "কলপাকানা",
    "bangla": "আধা-পাকা",
    "hindi": "आधा पका"
  },
  "short_statured": {
    "english": "Short-statured",
    "bishnupriya": "কলি",
    "bangla": "খর্বাকৃতি",
    "hindi": "बौना"
  },
  "heart": {
    "english": "Heart",
    "bishnupriya": "কলিঞ্জা",
    "bangla": "কলিজা",
    "hindi": "कलेजा"
  },
  "a_kind_of_watery_grass": {
    "english": "A kind of watery grass",
    "bishnupriya": "কলিমৌ",
    "bangla": "জলজ শাক",
    "hindi": "एक प्रकार की जल-साग"
  },
  "hole": {
    "english": "Hole",
    "bishnupriya": "কলু",
    "bangla": "গর্ত",
    "hindi": "गड्ढा"
  },
  "oil_presser": {
    "english": "Oil-presser",
    "bishnupriya": "কলু",
    "bangla": "কোল্হু চালানো লোক",
    "hindi": "कोल्हू चलाने वाला"
  },
  "slowly_afterwards": {
    "english": "Slowly / afterwards",
    "bishnupriya": "কালে কালে",
    "bangla": "আস্তে আস্তে / পরে",
    "hindi": "धीरे-धीरे / बाद में"
  },
  "pitcher_water_pot": {
    "english": "Pitcher, water pot",
    "bishnupriya": "কলষ",
    "bangla": "কলসী",
    "hindi": "कलश"
  },
  "bent_stick": {
    "english": "Bent stick",
    "bishnupriya": "কলৌ",
    "bangla": "বাঁকা লাঠি",
    "hindi": "टेढ़ी छड़ी"
  },
  "broken_pieces_of_utensils": {
    "english": "Broken pieces of utensils",
    "bishnupriya": "কলচাক",
    "bangla": "ভাঙা বাসনের টুকরো",
    "hindi": "टूटे बर्तनों के टुकड़े"
  },
  "large_heavy_metal_vessel": {
    "english": "Large heavy metal vessel",
    "bishnupriya": "কলটুম",
    "bangla": "ভারী ধাতুর পাত্র",
    "hindi": "भारी धातु का बर्तन"
  },
  "iron_ring": {
    "english": "Iron ring",
    "bishnupriya": "কলথন",
    "bangla": "লোহার আংটি",
    "hindi": "लोहे की अंगूठी"
  },
  "round_curved": {
    "english": "Round, curved",
    "bishnupriya": "কালথা",
    "bangla": "গোলাকার",
    "hindi": "गोल"
  },
  "embracing_each_other_alt": {
    "english": "Embracing each other (alt.)",
    "bishnupriya": "কলনা-কলনি",
    "bangla": "পরস্পর আলিঙ্গন",
    "hindi": "एक-दूसरे को गले लगाना"
  },
  "flat_pieces_of_broken_utensils": {
    "english": "Flat pieces of broken utensils",
    "bishnupriya": "কলপাক",
    "bangla": "চ্যাপটা ভাঙা বাসন",
    "hindi": "चपटे टूटे बर्तन"
  },
  "foam_froth": {
    "english": "Foam, froth",
    "bishnupriya": "কলপুক",
    "bangla": "ফেনা",
    "hindi": "झाग"
  },
  "a_disease_that_ruins_health_a_chronically_ill_or_worthless_woman": {
    "english": "A disease that ruins health / a chronically ill or worthless woman",
    "bishnupriya": "কা'বারেই",
    "bangla": "স্বাস্থ্য নষ্টকারী রোগ / বদমেজাজি/অসুস্থ মহিলা",
    "hindi": "स्वास्थ्य बिगाड़ने वाली बीमारी / निकम्मी/बीमार औरत"
  },
  "brown_cow": {
    "english": "Brown cow",
    "bishnupriya": "কবলি",
    "bangla": "বাদামি গোরু",
    "hindi": "भूरी गाय"
  },
  "cubeb_medicinal_spice": {
    "english": "Cubeb (medicinal spice)",
    "bishnupriya": "কবাব-চিনি",
    "bangla": "কবাবচিনি",
    "hindi": "कबाब चीनी"
  },
  "silk": {
    "english": "Silk",
    "bishnupriya": "কবরন",
    "bangla": "রেশম",
    "hindi": "रेशम"
  },
  "a_large_fly": {
    "english": "A large fly",
    "bishnupriya": "কবি",
    "bangla": "বড়ো মাছি",
    "hindi": "बड़ी मक्खी"
  },
  "cabbage": {
    "english": "Cabbage",
    "bishnupriya": "কবি",
    "bangla": "বাঁধাকপি",
    "hindi": "पत्तागोभी"
  },
  "pigeon_influenced_by_kabi": {
    "english": "Pigeon (influenced by kabi)",
    "bishnupriya": "কবিচেরৌ",
    "bangla": "ঘুঘু",
    "hindi": "कबूतर"
  },
  "ayurvedic_treatment": {
    "english": "Ayurvedic treatment",
    "bishnupriya": "কবিরাজি",
    "bangla": "কবিরাজি চিকিৎসা",
    "hindi": "कबीराजी इलाज"
  },
  "written_agreement": {
    "english": "Written agreement",
    "bishnupriya": "কবুলত",
    "bangla": "লিখিত চুক্তি",
    "hindi": "क़बूलियत"
  },
  "hinge": {
    "english": "Hinge",
    "bishnupriya": "কব্জা",
    "bangla": "কব্জা",
    "hindi": "कब्ज़ा"
  },
  "small_well": {
    "english": "Small well",
    "bishnupriya": "কাম",
    "bangla": "ছোটো কুয়া",
    "hindi": "छोटा कुआँ"
  },
  "less_short": {
    "english": "Less, short",
    "bishnupriya": "কাম",
    "bangla": "কম",
    "hindi": "कम"
  },
  "to_become_less_reduced": {
    "english": "To become less / reduced",
    "bishnupriya": "কাম",
    "bangla": "কমে যাওয়া",
    "hindi": "कम होना"
  },
  "to_shorten_reduce": {
    "english": "To shorten, reduce",
    "bishnupriya": "কামা",
    "bangla": "কমানো",
    "hindi": "घटाना"
  },
  "being_reduced_reducing_gerund": {
    "english": "Being reduced / reducing (gerund)",
    "bishnupriya": "কামানি",
    "bangla": "কমানোর ক্রিয়া",
    "hindi": "घटाने की क्रिया"
  },
  "orange_fruit": {
    "english": "Orange (fruit)",
    "bishnupriya": "কমলা",
    "bangla": "কমলা",
    "hindi": "संतरा"
  },
  "vile_lowly": {
    "english": "Vile, lowly",
    "bishnupriya": "কামিন",
    "bangla": "নীচ",
    "hindi": "नीच"
  },
  "more_or_less": {
    "english": "More or less",
    "bishnupriya": "কামবেশি",
    "bangla": "আন্দাজে",
    "hindi": "लगभग"
  },
  "deficiency_shortage": {
    "english": "Deficiency, shortage",
    "bishnupriya": "কামতি",
    "bangla": "ঘাটতি",
    "hindi": "कमी"
  },
  "low_low_born": {
    "english": "Low / low-born",
    "bishnupriya": "কাম্পা",
    "bangla": "নীচু / নীচ জাত",
    "hindi": "नीचा / नीच जाति"
  },
  "party_group": {
    "english": "Party / group",
    "bishnupriya": "কাম্পু",
    "bangla": "দল",
    "hindi": "पार्टी"
  },
  "turban": {
    "english": "Turban",
    "bishnupriya": "কয়েত",
    "bangla": "পাগড়ি",
    "hindi": "पगड़ी"
  },
  "rotten": {
    "english": "Rotten",
    "bishnupriya": "কায়া",
    "bangla": "পচা",
    "hindi": "सड़ा"
  },
  "one_who_lives_in_filth": {
    "english": "One who lives in filth",
    "bishnupriya": "কায়াম্বা",
    "bangla": "নোংরা জীবনযাপনকারী",
    "hindi": "गंदगी में रहने वाला"
  },
  "coal": {
    "english": "Coal",
    "bishnupriya": "কয়লা",
    "bangla": "কয়লা",
    "hindi": "कोयला"
  },
  "to_do": {
    "english": "To do",
    "bishnupriya": "কর",
    "bangla": "করা",
    "hindi": "करना"
  },
  "composition_small_deed": {
    "english": "Composition / small deed",
    "bishnupriya": "করচা",
    "bangla": "খরচপত্র / ছোটো দলিল",
    "hindi": "खर्चा / छोटा दस्तावेज़"
  },
  "half_partition": {
    "english": "Half (partition)",
    "bishnupriya": "করত",
    "bangla": "অর্ধেক",
    "hindi": "आधा"
  },
  "small_cymbal": {
    "english": "Small cymbal",
    "bishnupriya": "করতাল",
    "bangla": "ছোটো করতাল",
    "hindi": "छोटा करताल"
  },
  "manuscript": {
    "english": "Manuscript",
    "bishnupriya": "করপেখ",
    "bangla": "হাতের লেখা পুঁথি",
    "hindi": "हस्तलिखित पांडुलिपि"
  },
  "large_metal_pot": {
    "english": "Large metal pot",
    "bishnupriya": "করফু",
    "bangla": "বড়ো ধাতুর হাঁড়ি",
    "hindi": "बड़ा धातु का बर्तन"
  },
  "discipline_arrangement": {
    "english": "Discipline / arrangement",
    "bishnupriya": "করম",
    "bangla": "শৃঙ্খলা",
    "hindi": "अनुशासन"
  },
  "done": {
    "english": "Done",
    "bishnupriya": "করা",
    "bangla": "করা হয়েছে",
    "hindi": "किया हुआ"
  },
  "saw": {
    "english": "Saw",
    "bishnupriya": "করাত",
    "bangla": "করাত",
    "hindi": "आरी"
  },
  "sawing_sawyer": {
    "english": "Sawing / sawyer",
    "bishnupriya": "করাতি",
    "bangla": "করাতের কাজ / করাতি",
    "hindi": "आरी चलाना / आरी चलाने वाला"
  },
  "doing_gerund": {
    "english": "Doing (gerund)",
    "bishnupriya": "করানি",
    "bangla": "করের ক্রিয়া",
    "hindi": "करने की क्रिया"
  },
  "conditional_deed": {
    "english": "Conditional deed",
    "bishnupriya": "করের",
    "bangla": "শর্তসাপেক্ষ দলিল",
    "hindi": "शर्तिया दस्तावेज़"
  },
  "fried_rice": {
    "english": "Fried rice",
    "bishnupriya": "করে",
    "bangla": "ভাজা চাল",
    "hindi": "भुना चावल"
  },
  "doer_performer": {
    "english": "Doer, performer",
    "bishnupriya": "করেকুরা",
    "bangla": "কর্তা",
    "hindi": "करने वाला"
  },
  "cymbal": {
    "english": "Cymbal",
    "bishnupriya": "করতন",
    "bangla": "করতাল",
    "hindi": "करताल"
  },
  "waist_band_belt": {
    "english": "Waist-band / belt",
    "bishnupriya": "করদানি",
    "bangla": "কোমরবন্ধ",
    "hindi": "कमरबंद"
  },
  "frog": {
    "english": "Frog",
    "bishnupriya": "করবেন",
    "bangla": "ব্যাঙ",
    "hindi": "मेंढक"
  },
  "active_energetic": {
    "english": "Active, energetic",
    "bishnupriya": "কর্মিক",
    "bangla": "সক্রিয়",
    "hindi": "सक्रिय"
  },
  "to_strike_on_the_head_with_knuckles": {
    "english": "To strike on the head with knuckles",
    "bishnupriya": "কাটা",
    "bangla": "মাথায় ঘুষি মারা",
    "hindi": "सिर पर मुक्का मारना"
  },
  "looking_like_a_tree_climbing_mongoose": {
    "english": "Looking like a tree-climbing mongoose",
    "bishnupriya": "কাটাই",
    "bangla": "বেজি-জাতীয় দেখতে",
    "hindi": "नेवला जैसा दिखना"
  },
  "striking_on_head_with_knuckles_gerund": {
    "english": "Striking on head with knuckles (gerund)",
    "bishnupriya": "কাটানি",
    "bangla": "মাথায় ঘুষি মারার ক্রিয়া",
    "hindi": "सिर पर मुक्का मारने की क्रिया"
  },
  "small_wooden_casket_box": {
    "english": "Small wooden casket/box",
    "bishnupriya": "কাটারা",
    "bangla": "ছোটো কাঠের বাক্স",
    "hindi": "छोटा लकड़ी का डिब्बा"
  },
  "palace_guard": {
    "english": "Palace guard",
    "bishnupriya": "কাটুয়াল",
    "bangla": "রাজপ্রাসাদের প্রহরী",
    "hindi": "महल का पहरेदार"
  },
  "itching_sensation_in_the_eye": {
    "english": "Itching sensation in the eye",
    "bishnupriya": "কটকট",
    "bangla": "চোখ চুলকানো",
    "hindi": "आँख में खुजली"
  },
  "to_cause_itching_in_the_eye": {
    "english": "To cause itching in the eye",
    "bishnupriya": "কটকটা",
    "bangla": "চোখে চুলকানি করানো",
    "hindi": "आँख में खुजली पैदा करना"
  },
  "woodpecker": {
    "english": "Woodpecker",
    "bishnupriya": "কটকটি",
    "bangla": "কাঠঠোকরা",
    "hindi": "कठफोड़वा"
  },
  "miserly_stingy": {
    "english": "Miserly, stingy",
    "bishnupriya": "কাটকিনা",
    "bangla": "কৃপণ",
    "hindi": "कंजूस"
  },
  "small_particle": {
    "english": "Small particle",
    "bishnupriya": "কণা",
    "bangla": "কণা",
    "hindi": "कण"
  },
  "tether_rope_for_tying_animals": {
    "english": "Tether, rope for tying animals",
    "bishnupriya": "কন্থরি",
    "bangla": "বাঁধার দড়ি",
    "hindi": "बाँधने की रस्सी"
  },
  "scooping": {
    "english": "Scooping",
    "bishnupriya": "কট",
    "bangla": "হাতে তুলে নেওয়া",
    "hindi": "चम्मच से उठाना"
  },
  "how_much_so_much": {
    "english": "How much / so much",
    "bishnupriya": "কাটা",
    "bangla": "কতটা",
    "hindi": "कितना"
  },
  "how_much_how_long": {
    "english": "How much? / How long?",
    "bishnupriya": "কতি",
    "bangla": "কত? / কতক্ষণ?",
    "hindi": "कितना? / कितनी देर?"
  },
  "kadamba_tree": {
    "english": "Kadamba tree",
    "bishnupriya": "কদম",
    "bangla": "কদম গাছ",
    "hindi": "कदंब का पेड़"
  },
  "worth_argument": {
    "english": "Worth / argument",
    "bishnupriya": "কদর",
    "bangla": "মূল্য / তর্ক",
    "hindi": "क़द्र / बहस"
  },
  "spade": {
    "english": "Spade",
    "bishnupriya": "কোদাল",
    "bangla": "কোদাল",
    "hindi": "कुदाल"
  },
  "labour_with_spade": {
    "english": "Labour with spade",
    "bishnupriya": "কোদালি",
    "bangla": "কোদালের কাজ",
    "hindi": "कुदाल से काम"
  },
  "young_tender": {
    "english": "Young, tender",
    "bishnupriya": "কনক",
    "bangla": "তরুণ",
    "hindi": "युवा"
  },
  "small_simple_house": {
    "english": "Small/simple house",
    "bishnupriya": "কঞ্চুম",
    "bangla": "ছোটো ঘর",
    "hindi": "छोटा घर"
  },
  "embrace": {
    "english": "Embrace",
    "bishnupriya": "কন্না",
    "bangla": "আলিঙ্গন",
    "hindi": "गले लगाना"
  },
  "playing_mridangam_accompanying_a_singer": {
    "english": "Playing mridangam accompanying a singer",
    "bishnupriya": "কন্না",
    "bangla": "মৃদঙ্গ বাজানো (গানের তালে)",
    "hindi": "मृदंग बजाना (गाने के साथ)"
  },
  "embracing_each_other": {
    "english": "Embracing each other",
    "bishnupriya": "কন্নাকন্নি",
    "bangla": "পরস্পর আলিঙ্গন",
    "hindi": "एक-दूसरे को गले लगाना"
  },
  "weaving_implement_reed": {
    "english": "Weaving implement (reed)",
    "bishnupriya": "কন্নাপা",
    "bangla": "তাঁতের সরঞ্জাম",
    "hindi": "बुनाई का औज़ार"
  },
  "mridangam_rhythm_in_harmony_with_song": {
    "english": "Mridangam rhythm in harmony with song",
    "bishnupriya": "কন্নাপি",
    "bangla": "গানের তালে মৃদঙ্গ",
    "hindi": "गाने के ताल में मृदंग"
  },
  "pain": {
    "english": "Pain",
    "bishnupriya": "কাপ",
    "bangla": "ব্যথা",
    "hindi": "दर्द"
  },
  "hypocrisy_gloominess_from_ill_feeling": {
    "english": "Hypocrisy / gloominess from ill-feeling",
    "bishnupriya": "কপট",
    "bangla": "ভণ্ডামি / মনকষাকষি",
    "hindi": "पाखंड / उदासी"
  },
  "hypocrite_gloomy_person": {
    "english": "Hypocrite / gloomy person",
    "bishnupriya": "কপটিয়া",
    "bangla": "ভণ্ড / মনমরা",
    "hindi": "पाखंडी / उदास"
  },
  "hypocritical_woman": {
    "english": "Hypocritical woman",
    "bishnupriya": "কপটী",
    "bangla": "ভণ্ডামি করা মহিলা",
    "hindi": "पाखंडी औरत"
  },
  "afflicted_with_pain": {
    "english": "Afflicted with pain",
    "bishnupriya": "কপা",
    "bangla": "ব্যথায় ভোগা",
    "hindi": "दर्द से पीड़ित"
  },
  "to_feel_pain_intransitive": {
    "english": "To feel pain (intransitive)",
    "bishnupriya": "কপা",
    "bangla": "ব্যথা পাওয়া",
    "hindi": "दर्द होना"
  },
  "suffering_from_pains_all_over": {
    "english": "Suffering from pains all over",
    "bishnupriya": "কপাকপি",
    "bangla": "শরীরে ব্যথা",
    "hindi": "शरीर में हर जगह दर्द"
  },
  "lucky_person_male": {
    "english": "Lucky person (male)",
    "bishnupriya": "কপালিয়া",
    "bangla": "ভাগ্যবান",
    "hindi": "भाग्यशाली"
  },
  "lucky_woman": {
    "english": "Lucky woman",
    "bishnupriya": "কপালী",
    "bangla": "ভাগ্যবতী",
    "hindi": "भाग्यशाली स्त्री"
  },
  "elbow": {
    "english": "Elbow",
    "bishnupriya": "কফোনি",
    "bangla": "কনুই",
    "hindi": "कोहनी"
  },
  "pomegranate": {
    "english": "Pomegranate",
    "bishnupriya": "কবাই",
    "bangla": "ডালিম",
    "hindi": "अनार"
  },
  "pigeon": {
    "english": "Pigeon",
    "bishnupriya": "কবচেরৌ",
    "bangla": "ঘুঘু",
    "hindi": "कबूतर"
  },
  "amulet_protective_charm": {
    "english": "Amulet, protective charm",
    "bishnupriya": "কবজ",
    "bangla": "তাবিজ",
    "hindi": "ताबीज़"
  },
  "grave": {
    "english": "Grave",
    "bishnupriya": "কবর",
    "bangla": "কবর",
    "hindi": "क़ब्र"
  },
  "a_disease_that_ruins_health_a_worthless_woman": {
    "english": "A disease that ruins health / a worthless woman",
    "bishnupriya": "কা'বারেই",
    "bangla": "স্বাস্থ্য নষ্টকারী রোগ / বাজে মহিলা",
    "hindi": "स्वास्थ्य बिगाड़ने वाली बीमारी / निकम्मी औरत"
  },
  "sponge_ground": {
    "english": "Sponge ground",
    "bishnupriya": "সেপট",
    "bangla": "স্পঞ্জ মাটি",
    "hindi": "स्पंज जैसी ज़मीन"
  },
  "temple_servant": {
    "english": "Temple servant",
    "bishnupriya": "সেবাইত",
    "bangla": "দেবসেবক",
    "hindi": "देवसेवक"
  },
  "three_stringed_instrument_alt": {
    "english": "Three-stringed instrument",
    "bishnupriya": "সেতার",
    "bangla": "সেতার",
    "hindi": "सितारंगी"
  },
  "large_good_prefix": {
    "english": "Large / good prefix",
    "bishnupriya": "সেনা+",
    "bangla": "বড়ো / ভালো প্রত্যয়",
    "hindi": "बड़ा / अच्छा प्रत्यय"
  },
  "salutation": {
    "english": "Salutation",
    "bishnupriya": "সেলাম",
    "bangla": "সালাম",
    "hindi": "सलाम"
  },
  "milk": {
    "english": "Milk",
    "bishnupriya": "সেলকাম",
    "bangla": "দুধ",
    "hindi": "दूध"
  },
  "subscription": {
    "english": "Subscription",
    "bishnupriya": "সেলখাই",
    "bangla": "চাঁদা",
    "hindi": "चंदा"
  },
  "cattle_path": {
    "english": "Cattle-path",
    "bishnupriya": "সেল্লাম",
    "bangla": "গোহালির পথ",
    "hindi": "गाय का रास्ता"
  },
  "cow_urine": {
    "english": "Cow’s urine",
    "bishnupriya": "সেল্লুম",
    "bangla": "গোমূত্র",
    "hindi": "गोमूत्र"
  },
  "angry": {
    "english": "Angry",
    "bishnupriya": "সৌ",
    "bangla": "রাগী",
    "hindi": "गुस्सैल"
  },
  "to_boil": {
    "english": "To boil",
    "bishnupriya": "সৌ-",
    "bangla": "সিদ্ধ করা",
    "hindi": "उबालना"
  },
  "dash_animals": {
    "english": "Dash (animals)",
    "bishnupriya": "সৌ",
    "bangla": "ধাক্কা",
    "hindi": "टक्कर"
  },
  "hue_and_cry": {
    "english": "Hue and cry",
    "bishnupriya": "হাইচাই",
    "bangla": "হৈচৈ",
    "hindi": "हल्ला"
  },
  "wild_dog": {
    "english": "Wild dog",
    "bishnupriya": "হাইত্থু",
    "bangla": "বনকাঝকা কুকুর",
    "hindi": "जंगली कुत्ता"
  },
  "danger": {
    "english": "Danger",
    "bishnupriya": "হাইপত",
    "bangla": "বিপদ",
    "hindi": "खतरा"
  },
  "knot": {
    "english": "Knot",
    "bishnupriya": "হাইরু",
    "bangla": "গিঁট",
    "hindi": "गाँठरी"
  },
  "mustard_seed": {
    "english": "Mustard seed",
    "bishnupriya": "হাইরৌ",
    "bangla": "সরষে",
    "hindi": "सरसों"
  },
  "quickness": {
    "english": "Quickness",
    "bishnupriya": "হাকাতাকি",
    "bangla": "তাড়াহুড়ো",
    "hindi": "जल्दबाज़ी"
  },
  "truth": {
    "english": "Truth",
    "bishnupriya": "হাক",
    "bangla": "সত্য",
    "hindi": "सच"
  },
  "quickly": {
    "english": "Quickly",
    "bishnupriya": "হাক্কা(রে)",
    "bangla": "তাড়াতাড়ি",
    "hindi": "जल्दी"
  },
  "to_tolerate": {
    "english": "To tolerate",
    "bishnupriya": "হা-",
    "bangla": "সহ্য করা",
    "hindi": "सहना"
  },
  "astonishment": {
    "english": "Astonishment",
    "bishnupriya": "হা",
    "bangla": "আশ্চর্য",
    "hindi": "हैरानी"
  },
  "loud_cry_uproar": {
    "english": "Loud cry / uproar",
    "bishnupriya": "হাওরা",
    "bangla": "হৈচৈ",
    "hindi": "शोर"
  },
  "small_thin": {
    "english": "Small / thin",
    "bishnupriya": "হাওরা",
    "bangla": "ছোটো / পাতলা",
    "hindi": "छोटा / पतला"
  },
  "truth_alt": {
    "english": "Truth",
    "bishnupriya": "হাক",
    "bangla": "সত্য",
    "hindi": "सच"
  },
  "hurry": {
    "english": "Hurry",
    "bishnupriya": "হাকাহাকি",
    "bangla": "তাড়াহুড়ো",
    "hindi": "जल्दबाज़ी"
  },
  "salutation_alt": {
    "english": "Salutation",
    "bishnupriya": "সেলাম",
    "bangla": "সালাম",
    "hindi": "सलाम"
  },
  "cow_dung_alt": {
    "english": "Cow-dung",
    "bishnupriya": "সেন্দি",
    "bangla": "গোবর",
    "hindi": "गोबर"
  },
  "mushroom_from_cow_dung_alt": {
    "english": "Mushroom from cow-dung",
    "bishnupriya": "সেন্দিয়াল",
    "bangla": "গোবরের ছত্রাক",
    "hindi": "गोबर का कुकुरमुत्ता"
  },
  "play_ground_alt": {
    "english": "Play-ground",
    "bishnupriya": "সেন্নাফাম",
    "bangla": "খেলার মাঠ",
    "hindi": "खेल का मैदान"
  },
  "weaving_implement_alt": {
    "english": "Weaving implement",
    "bishnupriya": "সেন্নাম",
    "bangla": "তাঁতের যন্ত্র",
    "hindi": "करघे का औज़ार"
  },
  "sponge_ground_alt": {
    "english": "Sponge ground",
    "bishnupriya": "সেপট",
    "bangla": "স্পঞ্জ মাটি",
    "hindi": "स्पंज जैसी ज़मीन"
  },
  "temple_servant_alt": {
    "english": "Temple servant",
    "bishnupriya": "সেবাইত",
    "bangla": "দেবসেবক",
    "hindi": "देवसेवक"
  },
  "loose": {
    "english": "Loose",
    "bishnupriya": "হাচারত",
    "bangla": "ঢিলা",
    "hindi": "ढीला"
  },
  "digestion": {
    "english": "Digestion",
    "bishnupriya": "হাজম",
    "bangla": "হজম",
    "hindi": "पाचन"
  },
  "digestive": {
    "english": "Digestive",
    "bishnupriya": "হাজমি",
    "bangla": "হজমকারক",
    "hindi": "पाचक"
  },
  "awake_watchful": {
    "english": "Awake / watchful",
    "bishnupriya": "হাজাক",
    "bangla": "জাগ্রত",
    "hindi": "जागृत"
  },
  "greed_courage": {
    "english": "Greed / courage",
    "bishnupriya": "হাজু",
    "bangla": "লোভ / সাহস",
    "hindi": "लालच / हिम्मत"
  },
  "boss_address": {
    "english": "Boss (address)",
    "bishnupriya": "হাজুর",
    "bangla": "সাহেব",
    "hindi": "हज़ूर"
  },
  "effort": {
    "english": "Effort",
    "bishnupriya": "হাত",
    "bangla": "চেষ্টা",
    "hindi": "कोशिश"
  },
  "leaky": {
    "english": "Leaky",
    "bishnupriya": "হাতরান",
    "bangla": "ফুটো",
    "hindi": "छिद्रयुक्त"
  },
  "co_wife": {
    "english": "Co-wife",
    "bishnupriya": "হাতিনাক",
    "bangla": "সতিন",
    "hindi": "सौतन"
  },
  "enthusiasm": {
    "english": "Enthusiasm",
    "bishnupriya": "হাত-হাত",
    "bangla": "উৎসাহ",
    "hindi": "जोश"
  },
  "uselessly_important": {
    "english": "Uselessly important",
    "bishnupriya": "হাদার-বাদার",
    "bangla": "বেকার গুরুত্ব",
    "hindi": "फालतू अकड़"
  },
  "to_finish": {
    "english": "To finish",
    "bishnupriya": "হাদা-",
    "bangla": "শেষ করা",
    "hindi": "खत्म करना"
  },
  "capacity": {
    "english": "Capacity",
    "bishnupriya": "হাদ্দা",
    "bangla": "ক্ষমতা",
    "hindi": "ताकत"
  },
  "tolerating": {
    "english": "Tolerating",
    "bishnupriya": "হানা",
    "bangla": "সহ্য করা",
    "hindi": "सहना"
  },
  "endeavour": {
    "english": "Endeavour",
    "bishnupriya": "হান্না",
    "bangla": "চেষ্টা",
    "hindi": "कोशिश"
  },
  "big_hole": {
    "english": "Big hole",
    "bishnupriya": "হাপারা",
    "bangla": "বড়ো গর্ত",
    "hindi": "बड़ा गड्ढा"
  },
  "good_beautiful": {
    "english": "Good / beautiful",
    "bishnupriya": "হাবা",
    "bangla": "ভালো / সুন্দর",
    "hindi": "अच्छा / सुंदर"
  },
  "ah_what_a_strange": {
    "english": "Ah! What a strange!",
    "bishnupriya": "হাবাই",
    "bangla": "আহা! অদ্ভুত!",
    "hindi": "वाह! क्या बात!"
  },
  "food_without_salt": {
    "english": "Food without salt",
    "bishnupriya": "হাবিষ",
    "bangla": "নিরামিষ / লবণহীন",
    "hindi": "बिना नमक का खाना"
  },
  "just_now": {
    "english": "Just now",
    "bishnupriya": "হাবে",
    "bangla": "এইমাত্র",
    "hindi": "अभी-अभी"
  },
  "rush": {
    "english": "Rush",
    "bishnupriya": "হাম",
    "bangla": "ধাক্কাধাক্কি",
    "hindi": "धक्कम-धक्का"
  },
  "sleep_child_language": {
    "english": "Sleep (child language)",
    "bishnupriya": "হাম",
    "bangla": "ঘুম (শিশুভাষা)",
    "hindi": "नींद (बच्चों की भाषा)"
  },
  "middle": {
    "english": "Middle",
    "bishnupriya": "হাম",
    "bangla": "মাঝখানে",
    "hindi": "बीच में"
  },
  "faeces": {
    "english": "Faeces",
    "bishnupriya": "হামাল",
    "bangla": "মল",
    "hindi": "मल"
  },
  "salutation": {
    "english": "Salutation",
    "bishnupriya": "হামা",
    "bangla": "প্রণাম",
    "hindi": "नमस्ते"
  },
  "to_enter": {
    "english": "To enter",
    "bishnupriya": "হামা-",
    "bangla": "ঢোকা",
    "hindi": "घुसना"
  },
  "good_terms": {
    "english": "Good terms",
    "bishnupriya": "হামাহামি",
    "bangla": "ভাব",
    "hindi": "दोस्ती"
  },
  "either_with_nay": {
    "english": "Either (with nay)",
    "bishnupriya": "হয়",
    "bangla": "হয়",
    "hindi": "या"
  },
  "perhaps": {
    "english": "Perhaps",
    "bishnupriya": "হয়তো",
    "bangla": "হয়তো",
    "hindi": "शायद"
  },
  "elder_sister": {
    "english": "Elder sister",
    "bishnupriya": "হয়ো",
    "bangla": "দিদি",
    "hindi": "दीदी"
  },
  "actual_condition": {
    "english": "Actual condition",
    "bishnupriya": "হয়ো-নয়ো",
    "bangla": "আসল অবস্থা",
    "hindi": "असली हालत"
  },
  "cream_mucus": {
    "english": "Cream / mucus",
    "bishnupriya": "হার",
    "bangla": "সর / শ্লেষ্মা",
    "hindi": "मलाई / बलगम"
  },
  "recoupment": {
    "english": "Recoupment",
    "bishnupriya": "হার",
    "bangla": "পুনরুদ্ধার",
    "hindi": "भरपाई"
  },
  "broom_stick": {
    "english": "Broom-stick",
    "bishnupriya": "হারানি",
    "bangla": "ঝাড়ু",
    "hindi": "झाड़ू"
  },
  "snake": {
    "english": "Snake",
    "bishnupriya": "হারাপ",
    "bangla": "সাপ",
    "hindi": "साँप"
  },
  "incense_bowl": {
    "english": "Incense bowl",
    "bishnupriya": "হারা",
    "bangla": "ধূপদানী",
    "hindi": "धूपदान"
  },
  "to_drive_away": {
    "english": "To drive away",
    "bishnupriya": "হারা-",
    "bangla": "তাড়ানো",
    "hindi": "भगाना"
  },
  "water_fowl": {
    "english": "A water-fowl",
    "bishnupriya": "হারালি",
    "bangla": "জলপাখি",
    "hindi": "जलपक्षी"
  },
  "pulled_back_eyes": {
    "english": "Pulled back (eyes)",
    "bishnupriya": "হারা-হারা",
    "bangla": "চোখ পিছিয়ে যাওয়া",
    "hindi": "आँखें पीछे खिंच जाना"
  },
  "elephant_trunk": {
    "english": "Elephant trunk",
    "bishnupriya": "হারেই",
    "bangla": "হাতির শুঁড়",
    "hindi": "हाथी की सूंड"
  },
  "hearts_cards": {
    "english": "Hearts (cards)",
    "bishnupriya": "হার্তান",
    "bangla": "হার্ট",
    "hindi": "हुकुम का पत्ता"
  },
  "dictator": {
    "english": "Dictator",
    "bishnupriya": "হার্তা-কর্তা",
    "bangla": "একনায়ক",
    "hindi": "तानाशाह"
  },
  "strike_hartal": {
    "english": "Strike / hartal",
    "bishnupriya": "হার্তাল",
    "bangla": "হরতাল",
    "hindi": "हड़ताल"
  },
  "quickly_incessantly": {
    "english": "Quickly / incessantly",
    "bishnupriya": "হারদম",
    "bangla": "সবসময়",
    "hindi": "हरदम"
  },
  "slack_lazy": {
    "english": "Slack / lazy",
    "bishnupriya": "হালাদান",
    "bangla": "ঢিলা",
    "hindi": "सुस्त"
  },
  "rod_ball_of_thread": {
    "english": "Rod / ball of thread",
    "bishnupriya": "হালা",
    "bangla": "লাঠি / সুতোর গোলা",
    "hindi": "डंडा / धागे का गोला"
  },
  "distinct_clean_rice": {
    "english": "Distinct / clean (rice)",
    "bishnupriya": "হালা",
    "bangla": "আলাদা / পরিষ্কার",
    "hindi": "अलग / साफ"
  },
  "to_exchange": {
    "english": "To exchange",
    "bishnupriya": "হালা-",
    "bangla": "বদল করা",
    "hindi": "अदला-बदली करना"
  },
  "clean_selected": {
    "english": "Clean & selected",
    "bishnupriya": "হালা-বাচা",
    "bangla": "পরিষ্কার ও বাছাই করা",
    "hindi": "साफ और चुना हुआ"
  },
  "mutual_exchange": {
    "english": "Mutual exchange",
    "bishnupriya": "হালা-হালি",
    "bangla": "পরস্পর বদল",
    "hindi": "आपस में बदलाव"
  },
  "holi_festival": {
    "english": "Holi festival",
    "bishnupriya": "হালি",
    "bangla": "হোলি",
    "hindi": "होली"
  },
  "emptied": {
    "english": "Emptied",
    "bishnupriya": "হালি-হাতরান",
    "bangla": "খালি",
    "hindi": "खाली"
  },
  "ball_of_thread": {
    "english": "Ball of thread",
    "bishnupriya": "হালেই",
    "bangla": "সুতোর গোলা",
    "hindi": "धागे का गोला"
  },
  "instruments_weaving": {
    "english": "Instruments (weaving)",
    "bishnupriya": "হাস",
    "bangla": "তাঁতের যন্ত্র",
    "hindi": "करघे के औज़ार"
  },
  "movement_of_hands": {
    "english": "Movement of hands",
    "bishnupriya": "হাস্তাক",
    "bangla": "হাতের নড়াচড়া",
    "hindi": "हाथ की हलचल"
  },
  "cheap_liberal": {
    "english": "Cheap / liberal",
    "bishnupriya": "হাস্তা",
    "bangla": "সস্তা / উদার",
    "hindi": "सस्ता / खुला हाथ"
  },
  "joyfulness": {
    "english": "Joyfulness",
    "bishnupriya": "হা",
    "bangla": "আনন্দ",
    "hindi": "खुशी"
  },
  "alas": {
    "english": "Alas",
    "bishnupriya": "হা",
    "bangla": "হায়",
    "hindi": "हाय"
  },
  "vapour_agony": {
    "english": "Vapour / agony",
    "bishnupriya": "হা",
    "bangla": "বাষ্প / যন্ত্রণা",
    "hindi": "भाप / तकलीफ"
  },
  "to_offer_to_deity": {
    "english": "To offer to deity",
    "bishnupriya": "হা",
    "bangla": "দেবতাকে দেওয়া",
    "hindi": "देवता को चढ़ाना"
  },
  "rude_harsh": {
    "english": "Rude / harsh",
    "bishnupriya": "হা",
    "bangla": "রুক্ষ",
    "hindi": "कड़क"
  },
  "close_quarters_action": {
    "english": "Close quarters action",
    "bishnupriya": "+হা",
    "bangla": "কাছাকাছি কর্ম",
    "hindi": "पास में काम"
  },
  "threatening": {
    "english": "Threatening",
    "bishnupriya": "হাউকি",
    "bangla": "ভয় দেখানো",
    "hindi": "धमकी"
  },
  "longing_greed": {
    "english": "Longing, greed",
    "bishnupriya": "হাউস",
    "bangla": "লোভ, আকাঙ্ক্ষা",
    "hindi": "लालच, इच्छा"
  },
  "loan_borrowing": {
    "english": "Loan, borrowing",
    "bishnupriya": "হাওলত",
    "bangla": "ঋণ",
    "hindi": "उधार"
  },
  "taken_as_loan": {
    "english": "Taken as loan",
    "bishnupriya": "হাওলাতি",
    "bangla": "ঋণ নেওয়া",
    "hindi": "उधार लिया हुआ"
  },
  "bridge": {
    "english": "Bridge",
    "bishnupriya": "হাকাম",
    "bangla": "সাঁকো",
    "hindi": "पुल"
  },
  "vomiting_tendency_indulgence": {
    "english": "(i) Vomiting tendency (ii) Indulgence, conceit",
    "bishnupriya": "হাকত",
    "bangla": "(i) বমি পাওয়া (ii) অহংকার",
    "hindi": "(i) उल्टी की इच्छा (ii) घमंड"
  },
  "vomiting_tendency_only": {
    "english": "Vomiting tendency",
    "bishnupriya": "হাকতনা",
    "bangla": "বমি পাওয়া",
    "hindi": "उल्टी की इच्छा"
  },
  "judge": {
    "english": "Judge",
    "bishnupriya": "হাকিম",
    "bangla": "বিচারক",
    "hindi": "हाकिम"
  },
  "period_time": {
    "english": "Period, time",
    "bishnupriya": "হাক্তাক",
    "bangla": "সময়",
    "hindi": "समय"
  },
  "alternative_forms_of_akchi": {
    "english": "Alternative forms of akchi, ä'kchiyā-ākchiyāni",
    "bishnupriya": "হাকছি, হাকছিয়া, হাকছিয়ানি",
    "bangla": "আকছি-র বিকল্প",
    "hindi": "आकछी के वैकल्पिक रूप"
  },
  "adamant": {
    "english": "Adamant",
    "bishnupriya": "হাকমাল",
    "bangla": "একগুঁয়ে",
    "hindi": "हठी"
  },
  "sky_heaven": {
    "english": "Sky, heaven",
    "bishnupriya": "হাগ",
    "bangla": "আকাশ, স্বর্গ",
    "hindi": "आकाश, स्वर्ग"
  },
  "fully_exposed_sun_heat": {
    "english": "Fully exposed (of the heat of the sun)",
    "bishnupriya": "হান",
    "bangla": "পুরোপুরি উন্মুক্ত (সূর্যের তাপ)",
    "hindi": "पूरी तरह खुला (सूर्य की गर्मी)"
  },
  "species_of_reptile": {
    "english": "A species of reptile",
    "bishnupriya": "হাংকাক",
    "bangla": "এক ধরনের সরীসৃপ",
    "hindi": "एक प्रकार का सरीसृप"
  },
  "hesitant": {
    "english": "Hesitant",
    "bishnupriya": "হাংকায়",
    "bangla": "দ্বিধাগ্রস্ত",
    "hindi": "हिचकिचाहट"
  },
  "then_at_that_time": {
    "english": "Then, at that time",
    "bishnupriya": "হাংকা",
    "bangla": "তখন",
    "hindi": "तब"
  },
  "vomiting_tendency_movement": {
    "english": "Vomiting tendency",
    "bishnupriya": "হাংকত",
    "bangla": "বমি পাওয়া",
    "hindi": "उल्टी की इच्छा"
  },
  "movement_body": {
    "english": "Movement (as of the body)",
    "bishnupriya": "হাংকত",
    "bangla": "নড়াচড়া",
    "hindi": "हलचल"
  },
  "alternative_form_of_ha_kam": {
    "english": "Alt. form of ha kam",
    "bishnupriya": "হাংকুন",
    "bangla": "হাকাম-এর বিকল্প",
    "hindi": "हाकाम का वैकल्पिक रूप"
  },
  "fishing_net_under_water": {
    "english": "A fishing net placed open under water",
    "bishnupriya": "হাংকেল",
    "bangla": "জলের নিচে খোলা জাল",
    "hindi": "पानी के नीचे खुला जाल"
  },
  "jail_enclosed_area": {
    "english": "Jail, an enclosed area",
    "bishnupriya": "হাংগন, হাংগাম",
    "bangla": "জেল, ঘেরা এলাকা",
    "hindi": "जेल, घेरा क्षेत्र"
  },
  "riot_quarrel_difficulty": {
    "english": "Riot, quarrel, difficulty",
    "bishnupriya": "হাংগামা",
    "bangla": "হাঙ্গামা",
    "hindi": "हंगामा"
  },
  "yellow_colour": {
    "english": "Yellow colour",
    "bishnupriya": "হাংগা-মাপাল",
    "bangla": "হলুদ রঙ",
    "hindi": "पीला रंग"
  },
  "to_hint_inform": {
    "english": "To hint, to inform",
    "bishnupriya": "হান্তা-",
    "bangla": "ইঙ্গিত করা",
    "hindi": "संकेत करना"
  },
  "hinting_informing": {
    "english": "Hinting, informing",
    "bishnupriya": "হান্তানি",
    "bangla": "ইঙ্গিত করা",
    "hindi": "संकेत देना"
  },
  "mutual_hinting": {
    "english": "Mutual hinting",
    "bishnupriya": "হান্তা-হান্তি",
    "bangla": "পরস্পর ইঙ্গিত",
    "hindi": "आपसी संकेत"
  },
  "instrument_for_carpentry": {
    "english": "An instrument for carpentry",
    "bishnupriya": "হানমেই",
    "bangla": "ছুতোরের যন্ত্র",
    "hindi": "बढ़ई का औजार"
  },
  "true": {
    "english": "True",
    "bishnupriya": "হাচা",
    "bangla": "সত্য",
    "hindi": "सच"
  },
  "medicinal_water_plant": {
    "english": "A medicinal water-plant",
    "bishnupriya": "হাচানাচাক",
    "bangla": "ঔষধি জলগাছ",
    "hindi": "औषधीय जल पौधा"
  },
  "alternative_form_of_ha_siya": {
    "english": "Alt. form of ha siya",
    "bishnupriya": "হাচুয়া",
    "bangla": "হাসিয়া-র বিকল্প",
    "hindi": "हासिया का वैकल्पिक रूप"
  },
  "to_be_infected_transmitted": {
    "english": "To be infected or transmitted",
    "bishnupriya": "হাচুর-",
    "bangla": "সংক্রমিত হওয়া",
    "hindi": "संक्रमित होना"
  },
  "infectious_asthma": {
    "english": "(i) Infectious (ii) Asthma",
    "bishnupriya": "হাচুরা",
    "bangla": "(i) সংক্রামক (ii) হাঁপানি",
    "hindi": "(i) संक्रामक (ii) दमा"
  },
  "being_infected_transmitted": {
    "english": "Being infected or transmitted",
    "bishnupriya": "হাচুরানি",
    "bangla": "সংক্রমিত হওয়া",
    "hindi": "संक्रमित होना"
  },
  "alternative_forms_of_saj": {
    "english": "Alt. forms of saj, saj",
    "bishnupriya": "হাজ, হাজ-",
    "bangla": "সাজ-এর বিকল্প",
    "hindi": "साज के वैकल्पिक रूप"
  },
  "jail_custody": {
    "english": "Jail, custody",
    "bishnupriya": "হাজত",
    "bangla": "হাজত",
    "hindi": "हवालात"
  },
  "done_quickly": {
    "english": "Done quickly",
    "bishnupriya": "হাজামি",
    "bangla": "তাড়াতাড়ি করা",
    "hindi": "जल्दी किया हुआ"
  },
  "to_decorate_place_in_order": {
    "english": "(i) To decorate (ii) To place in order (eatables)",
    "bishnupriya": "হাজা-",
    "bangla": "(i) সাজানো (ii) সাজিয়ে রাখা",
    "hindi": "(i) सजाना (ii) सजाकर रखना"
  },
  "decorating_placing_in_order": {
    "english": "(i) Decorating (ii) Placing in order (eatables)",
    "bishnupriya": "হাজানি",
    "bangla": "(i) সাজানো (ii) সাজিয়ে রাখা",
    "hindi": "(i) सजाना (ii) सजाकर रखना"
  },
  "thousand": {
    "english": "Thousand",
    "bishnupriya": "হাজার",
    "bangla": "হাজার",
    "hindi": "हजार"
  },
  "kind_of_louse_animal_skin": {
    "english": "A kind of louse growing on animal-skin",
    "bishnupriya": "হাজারি",
    "bangla": "পশুর চামড়ায় হওয়া উকুন",
    "hindi": "पशु की त्वचा पर होने वाली जूं"
  },
  "present": {
    "english": "Present",
    "bishnupriya": "হাজির",
    "bangla": "উপস্থিত",
    "hindi": "हाजिर"
  },
  "presence": {
    "english": "Presence",
    "bishnupriya": "হাজিরা",
    "bangla": "উপস্থিতি",
    "hindi": "हाजिरी"
  },
  "presence_alt_form": {
    "english": "Presence",
    "bishnupriya": "হাজিরি",
    "bangla": "উপস্থিতি",
    "hindi": "हाजिरी"
  },
  "to_arrange_lofty_work": {
    "english": "To arrange (of a lofty work)",
    "bishnupriya": "হাঞ্জা-",
    "bangla": "উঁচু কাজ সাজানো",
    "hindi": "ऊँचे काम को व्यवस्थित करना"
  },
  "arranging_lofty_work": {
    "english": "Arranging (of a lofty work)",
    "bishnupriya": "হাঞ্জানি",
    "bangla": "উঁচু কাজ সাজানো",
    "hindi": "ऊँचे काम को व्यवस्थित करना"
  },
  "tied_jointly_cows": {
    "english": "Tied jointly (as cows)",
    "bishnupriya": "হাঞ্জুর",
    "bangla": "একসাথে বাঁধা (গোরু)",
    "hindi": "साथ बंधा (गाय)"
  },
  "market": {
    "english": "Market",
    "bishnupriya": "হাট",
    "bangla": "হাট",
    "hindi": "हाट"
  },
  "to_proceed_short_visit": {
    "english": "(i) To proceed (ii) To pay a short visit",
    "bishnupriya": "হাট-",
    "bangla": "(i) এগোনো (ii) সংক্ষিপ্ত সাক্ষাৎ",
    "hindi": "(i) आगे बढ़ना (ii) छोटी मुलाकात"
  },
  "turn_quick_visit": {
    "english": "A turn, a quick visit",
    "bishnupriya": "হাতন",
    "bangla": "পালা, সংক্ষিপ্ত সাক্ষাৎ",
    "hindi": "बारी, छोटी मुलाकात"
  },
  "search": {
    "english": "A search",
    "bishnupriya": "হাতন",
    "bangla": "অনুসন্ধান",
    "hindi": "खोज"
  },
  "stroke_buffalo_horn": {
    "english": "A stroke (as by a buffalo with its horn)",
    "bishnupriya": "হাতন",
    "bangla": "আঘাত (মহিষের শিং দিয়ে)",
    "hindi": "झटका (भैंस के सींग से)"
  },
  "strange_unlikely": {
    "english": "(i) Strange (ii) Unlikely",
    "bishnupriya": "হাতন",
    "bangla": "(i) অদ্ভুত (ii) অসম্ভব",
    "hindi": "(i) अजीब (ii) असंभव"
  },
  "stroke_buffalo_horn_noun": {
    "english": "A stroke (as by a buffalo with its horn)",
    "bishnupriya": "হাতা",
    "bangla": "আঘাত (মহিষের শিং দিয়ে)",
    "hindi": "झटका (भैंस के सींग से)"
  },
  "to_search_minutely": {
    "english": "To search minutely",
    "bishnupriya": "হাতা-",
    "bangla": "সূক্ষ্মভাবে খোঁজা",
    "hindi": "बारीकी से खोजना"
  },
  "to_hurt_strike": {
    "english": "To hurt, to strike",
    "bishnupriya": "হাতা-",
    "bangla": "আঘাত করা",
    "hindi": "चोट पहुँचाना"
  },
  "proceeding_short_visit": {
    "english": "(i) Proceeding (ii) Paying a short visit",
    "bishnupriya": "হাতানি",
    "bangla": "(i) এগোনো (ii) সংক্ষিপ্ত সাক্ষাৎ",
    "hindi": "(i) आगे बढ़ना (ii) छोटी मुलाकात"
  },
  "searching_minutely": {
    "english": "Searching minutely",
    "bishnupriya": "হাতানি",
    "bangla": "সূক্ষ্মভাবে খোঁজা",
    "hindi": "बारीकी से खोजना"
  },
  "striking": {
    "english": "Striking",
    "bishnupriya": "হাতানি",
    "bangla": "আঘাত করা",
    "hindi": "मारना"
  },
  "short_form_of_hanat": {
    "english": "Short form of -hänät (loc. form of -hân)",
    "bishnupriya": "-হাত",
    "bangla": "-হানাত-এর সংক্ষিপ্ত",
    "hindi": "-हानात का छोटा रूप"
  },
  "she_buffalo": {
    "english": "She-buffalo",
    "bishnupriya": "হাতাম",
    "bangla": "মহিষী",
    "hindi": "भैंस"
  },
  "head_deep_water": {
    "english": "Head-deep (of water)",
    "bishnupriya": "হাতর",
    "bangla": "মাথা পর্যন্ত গভীর (জল)",
    "hindi": "सिर तक गहरा (पानी)"
  },
  "to_grope": {
    "english": "To grope",
    "bishnupriya": "হাতারা-",
    "bangla": "হাতড়ানো",
    "hindi": "टटोलना"
  },
  "groping": {
    "english": "Groping",
    "bishnupriya": "হাতারানি",
    "bangla": "হাতড়ানো",
    "hindi": "टटोलना"
  },
  "to_swim_cross_over": {
    "english": "To swim, to cross over",
    "bishnupriya": "হাতুর-",
    "bangla": "সাঁতার কাটা, পার হওয়া",
    "hindi": "तैरना, पार करना"
  },
  "swimming": {
    "english": "Swimming",
    "bishnupriya": "হাতুর",
    "bangla": "সাঁতার",
    "hindi": "तैराकी"
  },
  "swimming_verb": {
    "english": "Swimming",
    "bishnupriya": "হাতুরানি",
    "bangla": "সাঁতার কাটা",
    "hindi": "तैरना"
  },
  "slowly": {
    "english": "Slowly",
    "bishnupriya": "হাতে-হাতে",
    "bangla": "আস্তে",
    "hindi": "धीरे-धीरे"
  },
  "hand_cuff": {
    "english": "Hand-cuff",
    "bishnupriya": "হাতকড়া",
    "bangla": "হাতকড়া",
    "hindi": "हथकड़ी"
  },
  "hastily": {
    "english": "Hastily",
    "bishnupriya": "হাথুন্না, হাথুনা",
    "bangla": "তাড়াতাড়ি",
    "hindi": "जल्दी-जल्दी"
  },
  "desire_love": {
    "english": "Desire, love",
    "bishnupriya": "হাদা",
    "bangla": "ইচ্ছা, ভালোবাসা",
    "hindi": "इच्छा, प्यार"
  },
  "alternative_forms_of_handa": {
    "english": "Alt. forms of ha'nda-hā'ndani",
    "bishnupriya": "হাদা-, হাদানি",
    "bangla": "হান্দা-র বিকল্প",
    "hindi": "हान्दा के वैकल्पिक रूप"
  },
  "gap": {
    "english": "Gap",
    "bishnupriya": "হাদি",
    "bangla": "ফাঁক",
    "hindi": "अंतराल"
  },
  "suffix_long_flat_abstract": {
    "english": "Suffix for long/flat thing or abstract noun",
    "bishnupriya": "-হান",
    "bangla": "লম্বা/চ্যাপটা জিনিস বা বিমূর্ত নাম",
    "hindi": "लंबी/चपटी वस्तु या अमूर्त संज्ञा"
  },
  "being_adamant": {
    "english": "Being adamant",
    "bishnupriya": "হানা",
    "bangla": "একগুঁয়ে হওয়া",
    "hindi": "हठी होना"
  },
  "hint_sign": {
    "english": "Hint, sign",
    "bishnupriya": "হানি",
    "bangla": "ইঙ্গিত",
    "hindi": "संकेत"
  },
  "suffix_small_quantity_diminutive": {
    "english": "Suffix for small quantity or diminutive",
    "bishnupriya": "-হানি",
    "bangla": "অল্প পরিমাণ বা ছোটো",
    "hindi": "छोटी मात्रा या लघु रूप"
  },
  "old_man": {
    "english": "Old man",
    "bishnupriya": "হানুবা",
    "bangla": "বুড়ো",
    "hindi": "बूढ़ा"
  },
  "earthen_plate": {
    "english": "Earthen plate",
    "bishnupriya": "হাংকি",
    "bangla": "মাটির থালা",
    "hindi": "मिट्टी की प्लेट"
  },
  "as_so": {
    "english": "As, so",
    "bishnupriya": "হান্তে",
    "bangla": "যেমন",
    "hindi": "जैसे"
  },
  "to_do_get_satisfaction": {
    "english": "To do or get up to one's satisfaction",
    "bishnupriya": "হান্দা-",
    "bangla": "তৃপ্তি পর্যন্ত করা",
    "hindi": "संतुष्टि तक करना"
  },
  "doing_getting_satisfaction": {
    "english": "Doing or getting up to one's satisfaction",
    "bishnupriya": "হান্দানি",
    "bangla": "তৃপ্তি পর্যন্ত করা",
    "hindi": "संतुष्टि तक करना"
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
  "sending_gerund": {
    "english": "Sending (gerund)",
    "bishnupriya": "পেঠানি",
    "bangla": "পাঠানো",
    "hindi": "भेजने की क्रिया"
  },
  "queer_blunt": {
    "english": "Queer, blunt",
    "bishnupriya": "পানসিন",
    "bangla": "অদ্ভুত / ভোঁতা",
    "hindi": "अजीब / कुंद"
  },
  "act_of_melting_separating": {
    "english": "The act of melting / separating",
    "bishnupriya": "পাক্খেই",
    "bangla": "গলানো / আলাদা করা",
    "hindi": "पिघलाना / अलग करना"
  },
  "counting_piece_in_dice_game": {
    "english": "Counting piece in dice game",
    "bishnupriya": "পাখি",
    "bangla": "পাশা খেলার গুটি",
    "hindi": "पासे का टुकड़ा"
  },
  "guava": {
    "english": "Guava",
    "bishnupriya": "পনিতল",
    "bangla": "পেয়ারা",
    "hindi": "अमरूद"
  },
  "to_be_rotten": {
    "english": "To be rotten",
    "bishnupriya": "পাচ-",
    "bangla": "পচা",
    "hindi": "सड़ना"
  },
  "to_make_rotten": {
    "english": "To make rotten",
    "bishnupriya": "পাচা-",
    "bangla": "পচানো",
    "hindi": "सड़ाना"
  },
  "rotten": {
    "english": "Rotten",
    "bishnupriya": "পাচা",
    "bangla": "পচা",
    "hindi": "सड़ा"
  },
  "made_rotten": {
    "english": "Made rotten",
    "bishnupriya": "পাচাইল",
    "bangla": "পচিয়ে দেওয়া",
    "hindi": "सड़ा दिया हुआ"
  },
  "rotten_making_rotten_gerund": {
    "english": "Rotten / making rotten (gerund)",
    "bishnupriya": "পাচানি",
    "bangla": "পচা / পচানো",
    "hindi": "सड़ने / सड़ाने की क्रिया"
  },
  "over_skirt_for_rasa_dance": {
    "english": "Over-skirt for Rasa dance",
    "bishnupriya": "পাচুয়াল",
    "bangla": "রাস নৃত্যের ওভার-স্কার্ট",
    "hindi": "रास नृत्य का ओवर-स्कर्ट"
  },
  "choice": {
    "english": "Choice",
    "bishnupriya": "পাছান / পাছান্দা",
    "bangla": "পছন্দ",
    "hindi": "पसंद"
  },
  "baggage": {
    "english": "Baggage",
    "bishnupriya": "পাজা",
    "bangla": "মালপত্র",
    "hindi": "सामान"
  },
  "handfuls_of_reaped_paddy": {
    "english": "Handfuls of reaped paddy",
    "bishnupriya": "পাজা",
    "bangla": "ধানের মুঠো",
    "hindi": "मुट्ठी भर कटा धान"
  },
  "forehead": {
    "english": "Forehead",
    "bishnupriya": "নিরাল",
    "bangla": "কপাল",
    "hindi": "माथा"
  },
  "loneliness": {
    "english": "Loneliness",
    "bishnupriya": "নিরালা",
    "bangla": "নির্জনতা",
    "hindi": "अकेलापन"
  },
  "disappointed": {
    "english": "Disappointed",
    "bishnupriya": "নিরাশ",
    "bangla": "নিরাশ",
    "hindi": "निराश"
  },
  "regularity": {
    "english": "Regularity",
    "bishnupriya": "নিরিখ",
    "bangla": "নিয়মিততা",
    "hindi": "नियमितता"
  },
  "lonely": {
    "english": "Lonely",
    "bishnupriya": "নিরিবিলি",
    "bangla": "নির্জন",
    "hindi": "एकांत"
  },
  "innocent": {
    "english": "Innocent",
    "bishnupriya": "নিরিহা",
    "bangla": "নিরীহ",
    "hindi": "मासूम"
  },
  "sure_violent_gust_of_wind": {
    "english": "Sure / violent gust of wind",
    "bishnupriya": "নির্ঘাত",
    "bangla": "নিশ্চিত / প্রচণ্ড ঝড়",
    "hindi": "पक्का / ज़ोरदार हवा"
  },
  "cruel_merciless": {
    "english": "Cruel, merciless",
    "bishnupriya": "নির্দয়",
    "bangla": "নির্দয়",
    "hindi": "निर्दयी"
  },
  "very_much": {
    "english": "Very much",
    "bishnupriya": "নির্দুম",
    "bangla": "খুব বেশি",
    "hindi": "बहुत ज़्यादा"
  },
  "faultless": {
    "english": "Faultless",
    "bishnupriya": "নির্দোষী",
    "bangla": "নির্দোষ",
    "hindi": "बेगुनाह"
  },
  "issueless": {
    "english": "Issueless",
    "bishnupriya": "নির্বংশ",
    "bangla": "নিঃসন্তান",
    "hindi": "निर्वंश"
  },
  "faultless_2": {
    "english": "Faultless",
    "bishnupriya": "নির্ভুল",
    "bangla": "নির্ভুল",
    "hindi": "बेदाग"
  },
  "auction_sale": {
    "english": "Auction-sale",
    "bishnupriya": "নিলাম",
    "bangla": "নিলাম",
    "hindi": "नीलामी"
  },
  "clear": {
    "english": "Clear",
    "bishnupriya": "নিল্লা",
    "bangla": "স্পষ্ট",
    "hindi": "साफ"
  },
  "intoxication": {
    "english": "Intoxication",
    "bishnupriya": "নিশা",
    "bangla": "নেশা",
    "hindi": "नशा"
  },
  "at_dead_of_night": {
    "english": "At dead of night",
    "bishnupriya": "নিশা-রাতি",
    "bangla": "গভীর রাত",
    "hindi": "गहरी रात"
  },
  "cruel_unfortunate": {
    "english": "Cruel / unfortunate",
    "bishnupriya": "নিষ্ঠুরিয়া",
    "bangla": "নিষ্ঠুর / দুর্ভাগা",
    "hindi": "क्रूर / बदकिस्मत"
  },
  "indifferent": {
    "english": "Indifferent",
    "bishnupriya": "নিসন্তা",
    "bangla": "উদাসীন",
    "hindi": "बेपरवाह"
  },
  "solicitation": {
    "english": "Solicitation",
    "bishnupriya": "নেহারা",
    "bangla": "অনুনয়",
    "hindi": "मिन्नत"
  },
  "having_no_gap": {
    "english": "Having no gap",
    "bishnupriya": "নেহের",
    "bangla": "ফাঁকহীন",
    "hindi": "बिना फाँक का"
  },
  "low_inferior_vile": {
    "english": "Low, inferior, vile",
    "bishnupriya": "নিচা",
    "bangla": "নীচ",
    "hindi": "नीचा"
  },
  "bluish": {
    "english": "Bluish",
    "bishnupriya": "নিলুয়া",
    "bangla": "নীলাভ",
    "hindi": "नीला"
  },
  "sacred_thread": {
    "english": "Sacred thread",
    "bishnupriya": "নুকুন",
    "bangla": "জনৈ",
    "hindi": "जनेऊ"
  },
  "widow": {
    "english": "Widow",
    "bishnupriya": "নুখরা",
    "bangla": "বিধবা",
    "hindi": "विधवा"
  },
  "happy_happiness": {
    "english": "Happy / happiness",
    "bishnupriya": "নুনি / নুনেই / নুনেইপা",
    "bangla": "সুখী / সুখ",
    "hindi": "खुश / खुशी"
  },
  "filthy_dirty": {
    "english": "Filthy, dirty",
    "bishnupriya": "নুনরা",
    "bangla": "নোংরা",
    "hindi": "गंदा"
  },
  "filthiness": {
    "english": "Filthiness",
    "bishnupriya": "নুনরামি",
    "bangla": "নোংরামি",
    "hindi": "गंदगी"
  },
  "stale_displeasure_sweet_lovable": {
    "english": "Stale / displeasure / sweet & lovable",
    "bishnupriya": "নুনসি / নুনসিপা",
    "bangla": "বাসি / অভিমান / মিষ্টি",
    "hindi": "बासी / नाराज़गी / प्यारा"
  },
  "lovable_girl": {
    "english": "Lovable girl",
    "bishnupriya": "নুনসিপি",
    "bangla": "প্রিয় মেয়ে",
    "hindi": "प्यारी लड़की"
  },
  "breaking_wind": {
    "english": "Breaking wind",
    "bishnupriya": "নুনসিত",
    "bangla": "বায়ু নির্গমন",
    "hindi": "पादना"
  },
  "vitriol": {
    "english": "Vitriol",
    "bishnupriya": "নুনসিল",
    "bangla": "তুঁতিয়া",
    "hindi": "तूतिया"
  },
  "salt": {
    "english": "Salt",
    "bishnupriya": "নুন",
    "bangla": "লবণ",
    "hindi": "नमक"
  },
  "salty": {
    "english": "Salty",
    "bishnupriya": "নুনা / নুন্তুকা / নুন্তা",
    "bangla": "লবণাক্ত",
    "hindi": "नमकीन"
  },
  "sunflower": {
    "english": "Sunflower",
    "bishnupriya": "নুমিলেই",
    "bangla": "সূর্যমুখী",
    "hindi": "सूरजमुखी"
  },
  "perplexed": {
    "english": "Perplexed",
    "bishnupriya": "নুম্পান",
    "bangla": "বিভ্রান্ত",
    "hindi": "उलझा हुआ"
  },
  "new": {
    "english": "New",
    "bishnupriya": "নুয়া",
    "bangla": "নতুন",
    "hindi": "नया"
  },
  "to_be_unable": {
    "english": "To be unable",
    "bishnupriya": "নুয়ার-",
    "bangla": "অক্ষম হওয়া",
    "hindi": "असमर्थ होना"
  },
  "disease_patient": {
    "english": "Disease / patient",
    "bishnupriya": "নুয়ারা",
    "bangla": "রোগ / রোগী",
    "hindi": "बीमारी / मरीज़"
  },
  "to_take_lead_carry": {
    "english": "To take / lead / carry",
    "bishnupriya": "নে-",
    "bangla": "নেওয়া",
    "hindi": "लेना"
  },
  "absent_destitute": {
    "english": "Absent / destitute",
    "bishnupriya": "নেই",
    "bangla": "অনুপস্থিত / নিঃস্ব",
    "hindi": "गायब / गरीब"
  },
  "mongoose": {
    "english": "Mongoose",
    "bishnupriya": "নেউর / নেউল",
    "bangla": "নেউল",
    "hindi": "नेवला"
  },
  "thoughtlessly": {
    "english": "Thoughtlessly",
    "bishnupriya": "নেতায়া",
    "bangla": "ভাবনাহীনভাবে",
    "hindi": "बिना सोचे"
  },
  "to_separate_cotton_seeds": {
    "english": "To separate cotton seeds",
    "bishnupriya": "নেবুর-",
    "bangla": "তুলার বীজ আলাদা করা",
    "hindi": "रुई के बीज अलग करना"
  },
  "instrument_for_cotton_seeds": {
    "english": "Instrument for cotton seeds",
    "bishnupriya": "নেবুরি",
    "bangla": "তুলার বীজ আলাদা করার যন্ত্র",
    "hindi": "रुई के बीज निकालने का औज़ार"
  },
  "short": {
    "english": "Short",
    "bishnupriya": "নেম",
    "bangla": "খাটো",
    "hindi": "छोटा"
  },
  "bit_low_place": {
    "english": "A bit low place",
    "bishnupriya": "নেমথাপি",
    "bangla": "নিচু জায়গা",
    "hindi": "नीचा स्थान"
  },
  "straw": {
    "english": "Straw",
    "bishnupriya": "নেরা",
    "bangla": "খড়",
    "hindi": "पुआल"
  },
  "forehead": {
    "english": "Forehead",
    "bishnupriya": "নিরাল",
    "bangla": "কপাল",
    "hindi": "माथा"
  },
  "loneliness": {
    "english": "Loneliness",
    "bishnupriya": "নিরালা",
    "bangla": "নির্জনতা",
    "hindi": "अकेलापन"
  },
  "disappointed": {
    "english": "Disappointed",
    "bishnupriya": "নিরাশ",
    "bangla": "নিরাশ",
    "hindi": "निराश"
  },
  "regularity": {
    "english": "Regularity",
    "bishnupriya": "নিরিখ",
    "bangla": "নিয়মিততা",
    "hindi": "नियमितता"
  },
  "lonely": {
    "english": "Lonely",
    "bishnupriya": "নিরিবিলি",
    "bangla": "নির্জন",
    "hindi": "एकांत"
  },
  "innocent": {
    "english": "Innocent",
    "bishnupriya": "নিরিহা",
    "bangla": "নিরীহ",
    "hindi": "मासूम"
  },
  "sure_violent_gust": {
    "english": "Sure / violent gust",
    "bishnupriya": "নির্ঘাত",
    "bangla": "নিশ্চিত / প্রচণ্ড ঝড়",
    "hindi": "पक्का / ज़ोरदार हवा"
  },
  "cruel_merciless": {
    "english": "Cruel, merciless",
    "bishnupriya": "নির্দয়",
    "bangla": "নির্দয়",
    "hindi": "निर्दयी"
  },
  "very_much": {
    "english": "Very much",
    "bishnupriya": "নির্দুম",
    "bangla": "খুব বেশি",
    "hindi": "बहुत ज़्यादा"
  },
  "faultless": {
    "english": "Faultless",
    "bishnupriya": "নির্দোষী",
    "bangla": "নির্দোষ",
    "hindi": "बेगुनाह"
  },
  "issueless": {
    "english": "Issueless",
    "bishnupriya": "নির্বংশ",
    "bangla": "নিঃসন্তান",
    "hindi": "निर्वंश"
  },
  "auction": {
    "english": "Auction",
    "bishnupriya": "নিলাম",
    "bangla": "নিলাম",
    "hindi": "नीलामी"
  },
  "clear": {
    "english": "Clear",
    "bishnupriya": "নিল্লা",
    "bangla": "স্পষ্ট",
    "hindi": "साफ"
  },
  "intoxication": {
    "english": "Intoxication",
    "bishnupriya": "নিশা",
    "bangla": "নেশা",
    "hindi": "नशा"
  },
  "at_dead_of_night": {
    "english": "At dead of night",
    "bishnupriya": "নিশা-রাতি",
    "bangla": "গভীর রাত",
    "hindi": "गहरी रात"
  },
  "cruel_unfortunate": {
    "english": "Cruel / unfortunate",
    "bishnupriya": "নিষ্ঠুরিয়া",
    "bangla": "নিষ্ঠুর / দুর্ভাগা",
    "hindi": "क्रूर / बदकिस्मत"
  },
  "indifferent": {
    "english": "Indifferent",
    "bishnupriya": "নিসন্তা",
    "bangla": "উদাসীন",
    "hindi": "बेपरवाह"
  },
  "solicitation": {
    "english": "Solicitation",
    "bishnupriya": "নেহারা",
    "bangla": "অনুনয়",
    "hindi": "मिन्नत"
  },
  "having_no_gap": {
    "english": "Having no gap",
    "bishnupriya": "নেহের",
    "bangla": "ফাঁকহীন",
    "hindi": "बिना फाँक का"
  },
  "low_inferior": {
    "english": "Low, inferior",
    "bishnupriya": "নিচা",
    "bangla": "নীচ",
    "hindi": "नीचा"
  },
  "bluish": {
    "english": "Bluish",
    "bishnupriya": "নিলুয়া",
    "bangla": "নীলাভ",
    "hindi": "नीला"
  },
  "sacred_thread": {
    "english": "Sacred thread",
    "bishnupriya": "নুকুন",
    "bangla": "জনৈ",
    "hindi": "जनेऊ"
  },
  "widow": {
    "english": "Widow",
    "bishnupriya": "নুখরা",
    "bangla": "বিধবা",
    "hindi": "विधवा"
  },
  "happy_happiness": {
    "english": "Happy / happiness",
    "bishnupriya": "নুনি / নুনেই",
    "bangla": "সুখী / সুখ",
    "hindi": "खुश / खुशी"
  },
  "filthy_dirty": {
    "english": "Filthy, dirty",
    "bishnupriya": "নুনরা",
    "bangla": "নোংরা",
    "hindi": "गंदा"
  },
  "stale_displeasure_sweet": {
    "english": "Stale / displeasure / sweet",
    "bishnupriya": "নুনসি",
    "bangla": "বাসি / অভিমান / মিষ্টি",
    "hindi": "बासी / नाराज़गी / मीठा"
  },
  "salt": {
    "english": "Salt",
    "bishnupriya": "নুন",
    "bangla": "লবণ",
    "hindi": "नमक"
  },
  "salty": {
    "english": "Salty",
    "bishnupriya": "নুনা",
    "bangla": "লবণাক্ত",
    "hindi": "नमकीन"
  },
  "new": {
    "english": "New",
    "bishnupriya": "নুয়া",
    "bangla": "নতুন",
    "hindi": "नया"
  },
  "to_be_unable": {
    "english": "To be unable",
    "bishnupriya": "নুয়ার-",
    "bangla": "অক্ষম হওয়া",
    "hindi": "असमर्थ होना"
  },
  "disease_patient": {
    "english": "Disease / patient",
    "bishnupriya": "নুয়ারা",
    "bangla": "রোগ / রোগী",
    "hindi": "बीमारी / मरीज़"
  },
  "to_take_lead": {
    "english": "To take / lead",
    "bishnupriya": "নে-",
    "bangla": "নেওয়া",
    "hindi": "लेना"
  },
  "absent_destitute": {
    "english": "Absent / destitute",
    "bishnupriya": "নেই",
    "bangla": "অনুপস্থিত / নিঃস্ব",
    "hindi": "गायब / गरीब"
  },
  "mongoose": {
    "english": "Mongoose",
    "bishnupriya": "নেউর",
    "bangla": "নেউল",
    "hindi": "नेवला"
  },
  "thoughtlessly": {
    "english": "Thoughtlessly",
    "bishnupriya": "নেতায়া",
    "bangla": "ভাবনাহীনভাবে",
    "hindi": "बिना सोचे"
  },
  "to_separate_cotton_seeds": {
    "english": "To separate cotton seeds",
    "bishnupriya": "নেবুর-",
    "bangla": "তুলার বীজ আলাদা করা",
    "hindi": "रुई के बीज अलग करना"
  },
  "short": {
    "english": "Short",
    "bishnupriya": "নেম",
    "bangla": "খাটো",
    "hindi": "छोटा"
  },
  "bit_low": {
    "english": "A bit low",
    "bishnupriya": "নেমত্রিক",
    "bangla": "একটু নিচু",
    "hindi": "थोड़ा नीचा"
  },
  "straw": {
    "english": "Straw",
    "bishnupriya": "নেরা",
    "bangla": "খড়",
    "hindi": "पुआल"
  },
  "very_much_at_all": {
    "english": "Very much / at all",
    "bishnupriya": "নেহাত",
    "bangla": "একদম",
    "hindi": "बिल्कुल"
  },
  "disappointment": {
    "english": "Disappointment",
    "bishnupriya": "নৈরাশ্য",
    "bangla": "নিরাশা",
    "hindi": "निराशा"
  },
  "nine": {
    "english": "Nine",
    "bishnupriya": "নৌ",
    "bangla": "নয়",
    "hindi": "नौ"
  },
  "boat": {
    "english": "Boat",
    "bishnupriya": "নৌ",
    "bangla": "নৌকা",
    "hindi": "नाव"
  },
  "boatman": {
    "english": "Boatman",
    "bishnupriya": "নৌ-উলি",
    "bangla": "মাঝি",
    "hindi": "मल्लाह"
  },
  "wet_nurse": {
    "english": "Wet-nurse",
    "bishnupriya": "নৌকালপি",
    "bangla": "ধাইমা",
    "hindi": "दाई"
  },
  "tender": {
    "english": "Tender",
    "bishnupriya": "নৌ-নৌ",
    "bangla": "কোমল",
    "hindi": "कोमल"
  },
  "placenta": {
    "english": "Placenta",
    "bishnupriya": "নৌফাম",
    "bangla": "নাড়ি",
    "hindi": "गर्भनाल"
  },
  "fondling": {
    "english": "Fondling",
    "bishnupriya": "নৌয়ান",
    "bangla": "আদর",
    "hindi": "लाड़"
  },
  "quick_succession_of_births": {
    "english": "Quick succession of births",
    "bishnupriya": "নৌরক",
    "bangla": "ঘন ঘন সন্তান জন্ম",
    "hindi": "लगातार बच्चे होना"
  },
  "confusion": {
    "english": "Confusion",
    "bishnupriya": "ধান্ধা",
    "bangla": "বিভ্রান্তি",
    "hindi": "उलझन"
  },
  "race": {
    "english": "Race",
    "bishnupriya": "ধাপ",
    "bangla": "দৌড়",
    "hindi": "दौड़"
  },
  "nature": {
    "english": "Nature",
    "bishnupriya": "ধাম",
    "bangla": "স্বভাব",
    "hindi": "स्वभाव"
  },
  "concealment": {
    "english": "Concealment",
    "bishnupriya": "ধামাচাপা",
    "bangla": "লুকোচুরি",
    "hindi": "छुपाना"
  },
  "attack": {
    "english": "Attack",
    "bishnupriya": "ধাওয়া",
    "bangla": "আক্রমণ",
    "hindi": "हमला"
  },
  "debt": {
    "english": "Debt",
    "bishnupriya": "ধার",
    "bangla": "ঋণ",
    "hindi": "कर्ज़"
  },
  "side_sharpness": {
    "english": "Side / sharpness",
    "bishnupriya": "ধার",
    "bangla": "কিনারা / ধার",
    "hindi": "किनारा / धार"
  },
  "to_make_indebted_sharpen": {
    "english": "To make indebted / sharpen",
    "bishnupriya": "ধারা-",
    "bangla": "ঋণ দেওয়া / ধারালো করা",
    "hindi": "उधार देना / तेज़ करना"
  },
  "owing_repaying_grudge": {
    "english": "Owing & repaying / grudge",
    "bishnupriya": "ধারাহুজি",
    "bangla": "ঋণ-শোধ / ক্ষোভ",
    "hindi": "उधार-चुकाना / नाराज़गी"
  },
  "style": {
    "english": "Style",
    "bishnupriya": "ধাসা",
    "bangla": "ধরন",
    "hindi": "ढंग"
  },
  "bluff": {
    "english": "Bluff",
    "bishnupriya": "ধুক্কা",
    "bangla": "ধোঁকা",
    "hindi": "धोखा"
  },
  "tut_tut": {
    "english": "Tut tut",
    "bishnupriya": "ধুত",
    "bangla": "ধুৎ",
    "hindi": "धिक्कार"
  },
  "dhoti": {
    "english": "Dhoti",
    "bishnupriya": "ধুতি",
    "bangla": "ধুতি",
    "hindi": "धोती"
  },
  "tricks": {
    "english": "Tricks",
    "bishnupriya": "ধুন",
    "bangla": "চালাকি",
    "hindi": "धोखा"
  },
  "to_shred_cotton": {
    "english": "To shred cotton",
    "bishnupriya": "ধুন-",
    "bangla": "তুলা ঝাড়া",
    "hindi": "रुई धुनना"
  },
  "incense_candle": {
    "english": "Incense candle",
    "bishnupriya": "ধুনাবতি",
    "bangla": "ধুনো",
    "hindi": "धूपबत्ती"
  },
  "smoke": {
    "english": "Smoke",
    "bishnupriya": "ধুমা",
    "bangla": "ধোঁয়া",
    "hindi": "धुआँ"
  },
  "to_strike_with_force": {
    "english": "To strike with force",
    "bishnupriya": "ধুমा-",
    "bangla": "জোরে আঘাত করা",
    "hindi": "ज़ोर से मारना"
  },
  "cunningness": {
    "english": "Cunningness",
    "bishnupriya": "ধোর্তামि",
    "bangla": "ধূর্ততা",
    "hindi": "चालाकी"
  },
  "fraud": {
    "english": "Fraud",
    "bishnupriya": "ধোল",
    "bangla": "প্রতারণা",
    "hindi": "धोखा"
  },
  "dusty": {
    "english": "Dusty",
    "bishnupriya": "ধুলিয়া",
    "bangla": "ধুলোয় ভরা",
    "hindi": "धूल भरा"
  },
  "to_cause_to_wash": {
    "english": "To cause to wash",
    "bishnupriya": "ধাউয়া-",
    "bangla": "ধোয়ানো",
    "hindi": "धुलवाना"
  },
  "service": {
    "english": "Service",
    "bishnupriya": "নাকরি",
    "bangla": "চাকরি",
    "hindi": "नौकरी"
  },
  "imitation": {
    "english": "Imitation",
    "bishnupriya": "নকল",
    "bangla": "নকল",
    "hindi": "नकल"
  },
  "picture_nature": {
    "english": "Picture / nature",
    "bishnupriya": "নকশা",
    "bangla": "ছবি / স্বভাব",
    "hindi": "नक्शा / स्वभाव"
  },
  "nail": {
    "english": "Nail",
    "bishnupriya": "নাখা",
    "bangla": "নখ",
    "hindi": "नाखून"
  },
  "ready_cash": {
    "english": "Ready cash",
    "bishnupriya": "নাগদ",
    "bangla": "নগদ",
    "hindi": "नकद"
  },
  "to_bend_down": {
    "english": "To bend down",
    "bishnupriya": "নান-",
    "bangla": "নত হওয়া",
    "hindi": "झुकना"
  },
  "early": {
    "english": "Early",
    "bishnupriya": "নানাল",
    "bangla": "ভোর",
    "hindi": "सुबह"
  },
  "midst_midnight": {
    "english": "Midst / midnight",
    "bishnupriya": "নানেই",
    "bangla": "মাঝামাঝি / মধ্যরাত্রি",
    "hindi": "बीच / आधी रात"
  },
  "cloudiness": {
    "english": "Cloudiness",
    "bishnupriya": "নানমান",
    "bangla": "মেঘলা",
    "hindi": "बादल वाला"
  },
  "rifle": {
    "english": "Rifle",
    "bishnupriya": "নানমেই",
    "bangla": "রাইফেল",
    "hindi": "राइफल"
  },
  "long_time": {
    "english": "Long time",
    "bishnupriya": "নানসান",
    "bangla": "দেরি করে",
    "hindi": "देर से"
  },
  "glance_evil_eye": {
    "english": "Glance / evil eye",
    "bishnupriya": "নজর",
    "bangla": "নজর",
    "hindi": "नज़र"
  },
  "eye_disease": {
    "english": "Eye disease",
    "bishnupriya": "নজলা",
    "bangla": "চোখের রোগ",
    "hindi": "आँख की बीमारी"
  },
  "musical_measure_mridanga_maker": {
    "english": "Musical measure / mridanga maker",
    "bishnupriya": "নট",
    "bangla": "তাল / মৃদঙ্গকার",
    "hindi": "ताल / मृदंग बनाने वाला"
  },
  "sportive_woman": {
    "english": "Sportive woman",
    "bishnupriya": "নটিনি",
    "bangla": "নটী",
    "hindi": "नटी"
  },
  "nose_ring": {
    "english": "Nose-ring",
    "bishnupriya": "নট",
    "bangla": "নথ",
    "hindi": "नथ"
  },
  "nose_rope": {
    "english": "Nose-rope",
    "bishnupriya": "নাকা",
    "bangla": "নাকের দড়ি",
    "hindi": "नकेल"
  },
  "rod_for_loom": {
    "english": "Rod for loom",
    "bishnupriya": "নেসি",
    "bangla": "তাঁতের লাঠি",
    "hindi": "करघे की छड़"
  },
  "solicitation_2": {
    "english": "Solicitation",
    "bishnupriya": "নেহারা",
    "bangla": "অনুনয়",
    "hindi": "मिन्नत"
  },
  "pice_coin": {
    "english": "Pice (coin)",
    "bishnupriya": "পাইসা",
    "bangla": "পয়সা",
    "hindi": "पैसा"
  },
  "insect_worm": {
    "english": "Insect / worm",
    "bishnupriya": "পাক",
    "bangla": "পোকা",
    "hindi": "कीड़ा"
  },
  "ripe": {
    "english": "Ripe",
    "bishnupriya": "পাক",
    "bangla": "পাকা",
    "hindi": "पका"
  },
  "birth_generation": {
    "english": "Birth / generation",
    "bishnupriya": "পাক",
    "bangla": "জন্ম / প্রজন্ম",
    "hindi": "जन्म / पीढ़ी"
  },
  "spoiled_by_insects": {
    "english": "Spoiled by insects",
    "bishnupriya": "পাকচান",
    "bangla": "পোকায় খাওয়া",
    "hindi": "कीड़े से खराब"
  },
  "funnel": {
    "english": "Funnel",
    "bishnupriya": "পাকানা",
    "bangla": "ফানেল",
    "hindi": "कीप"
  },
  "injured_by_worms": {
    "english": "Injured by worms",
    "bishnupriya": "পাকরা",
    "bangla": "পোকায় কাটা",
    "hindi": "कीड़े से कटा हुआ"
  },
  "very_much_at_all": {
    "english": "Very much / at all",
    "bishnupriya": "নেহাত",
    "bangla": "একদম",
    "hindi": "बिल्कुल"
  },
  "disappointment": {
    "english": "Disappointment",
    "bishnupriya": "নৈরাশ্য",
    "bangla": "নিরাশা",
    "hindi": "निराशा"
  },
  "nine": {
    "english": "Nine",
    "bishnupriya": "নৌ",
    "bangla": "নয়",
    "hindi": "नौ"
  },
  "boat": {
    "english": "Boat",
    "bishnupriya": "নৌ",
    "bangla": "নৌকা",
    "hindi": "नाव"
  },
  "boatman": {
    "english": "Boatman",
    "bishnupriya": "নৌ-উলি",
    "bangla": "মাঝি",
    "hindi": "मल्लाह"
  },
  "wet_nurse": {
    "english": "Wet-nurse",
    "bishnupriya": "নৌকালপি",
    "bangla": "ধাইমা",
    "hindi": "दाई"
  },
  "tender": {
    "english": "Tender",
    "bishnupriya": "নৌ-নৌ",
    "bangla": "কোমল",
    "hindi": "कोमल"
  },
  "placenta": {
    "english": "Placenta",
    "bishnupriya": "নৌফাম",
    "bangla": "নাড়ি",
    "hindi": "गर्भनाल"
  },
  "fondling_caress": {
    "english": "Fondling / caress",
    "bishnupriya": "নৌয়ান",
    "bangla": "আদর",
    "hindi": "लाड़"
  },
  "quick_succession_of_children": {
    "english": "Quick succession of children",
    "bishnupriya": "নৌরক",
    "bangla": "ঘন ঘন সন্তান জন্ম",
    "hindi": "लगातार बच्चे होना"
  },
  "side": {
    "english": "Side",
    "bishnupriya": "পাত",
    "bangla": "পাশ",
    "hindi": "किनारा"
  },
  "kind_of_vegetable_snake_gourd": {
    "english": "A kind of vegetable (snake gourd)",
    "bishnupriya": "পাতল",
    "bangla": "পটল",
    "hindi": "परवल"
  },
  "changed": {
    "english": "Changed",
    "bishnupriya": "পাতা",
    "bangla": "বদলানো",
    "hindi": "बदल गया"
  },
  "to_exchange": {
    "english": "To exchange",
    "bishnupriya": "পাতা-",
    "bangla": "বদল করা",
    "hindi": "बदलना"
  },
  "mutual_change": {
    "english": "Mutual change",
    "bishnupriya": "পাতাপাতি",
    "bangla": "পরস্পর বদল",
    "hindi": "आपस में बदलना"
  },
  "side_2": {
    "english": "Side",
    "bishnupriya": "পাতি",
    "bangla": "পাশ",
    "hindi": "किनारा"
  },
  "bandage_lane": {
    "english": "Bandage / lane",
    "bishnupriya": "পাত্তি",
    "bangla": "পট্টি / গলি",
    "hindi": "पट्टी / गली"
  },
  "counting_points_dice": {
    "english": "Counting points (dice)",
    "bishnupriya": "পাত্তিন",
    "bangla": "পয়েন্ট গোনা",
    "hindi": "अंक गिनना"
  },
  "three_fourths": {
    "english": "Three-fourths",
    "bishnupriya": "পানে",
    "bangla": "তিন-চতুর্থাংশ",
    "hindi": "तीन चौथाई"
  },
  "material": {
    "english": "Material",
    "bishnupriya": "পাত",
    "bangla": "উপাদান",
    "hindi": "सामग्री"
  },
  "strength": {
    "english": "Strength",
    "bishnupriya": "পাতর",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "sheet": {
    "english": "Sheet",
    "bishnupriya": "পাত্তর",
    "bangla": "চাদর",
    "hindi": "चादर"
  },
  "song_sung_separately_in_group_dance": {
    "english": "Song sung separately in group dance",
    "bishnupriya": "পাত্থাফাম",
    "bangla": "আলাদা গান",
    "hindi": "अलग गाना"
  },
  "road_path": {
    "english": "Road, path",
    "bishnupriya": "পথা",
    "bangla": "পথ",
    "hindi": "रास्ता"
  },
  "rest": {
    "english": "Rest",
    "bishnupriya": "পথা",
    "bangla": "বিশ্রাম",
    "hindi": "आराम"
  },
  "means_way": {
    "english": "Means, way",
    "bishnupriya": "পথি",
    "bangla": "উপায়",
    "hindi": "तरीका"
  },
  "young_fishes": {
    "english": "Young fishes",
    "bishnupriya": "পা না",
    "bangla": "ছোটো মাছ",
    "hindi": "छोटी मछलियाँ"
  },
  "burning_pitchers": {
    "english": "Burning (pitchers)",
    "bishnupriya": "পানি",
    "bangla": "পোড়ানো (মাটির পাত্র)",
    "hindi": "जलाना (मिट्टी के बर्तन)"
  },
  "fifteen": {
    "english": "Fifteen",
    "bishnupriya": "পান্দারা",
    "bangla": "পনেরো",
    "hindi": "पंद्रह"
  },
  "throw_of_fifteen_points_dice": {
    "english": "Throw of fifteen points (dice)",
    "bishnupriya": "পান্দারাবি",
    "bangla": "পনরো পয়েন্টের ঘুঁটি",
    "hindi": "पंद्रह अंक का पासा"
  },
  "material_2": {
    "english": "Material",
    "bishnupriya": "পন্নাম",
    "bangla": "উপাদান",
    "hindi": "सामग्री"
  },
  "discoloured": {
    "english": "Discoloured",
    "bishnupriya": "পাপ",
    "bangla": "বিবর্ণ",
    "hindi": "फीका"
  },
  "dice_board": {
    "english": "Dice-board",
    "bishnupriya": "পাফাম",
    "bangla": "পাশার তক্তা",
    "hindi": "पासे का तख्ता"
  },
  "time_guard": {
    "english": "Time / guard",
    "bishnupriya": "পার",
    "bangla": "সময় / পাহারা",
    "hindi": "समय / पहरा"
  },
  "other": {
    "english": "Other",
    "bishnupriya": "পার",
    "bangla": "অন্য",
    "hindi": "दूसरा"
  },
  "third_day_funeral_ceremony": {
    "english": "Third-day funeral ceremony",
    "bishnupriya": "পারক",
    "bangla": "তৃতীয় দিনের শ্রাদ্ধ",
    "hindi": "तीसरे दिन का श्राद्ध"
  },
  "fold": {
    "english": "Fold",
    "bishnupriya": "পারত",
    "bangla": "ভাঁজ",
    "hindi": "मोड़"
  },
  "festival": {
    "english": "Festival",
    "bishnupriya": "পারব",
    "bangla": "উৎসব",
    "hindi": "त्योहार"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "পারম",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक तरह की मछली"
  },
  "layer": {
    "english": "Layer",
    "bishnupriya": "পারাল",
    "bangla": "স্তর",
    "hindi": "परत"
  },
  "total_destruction": {
    "english": "Total destruction",
    "bishnupriya": "পারালেই",
    "bangla": "প্রলয়",
    "hindi": "प्रलय"
  },
  "relating_to_others": {
    "english": "Relating to others",
    "bishnupriya": "পারা",
    "bangla": "পরের",
    "hindi": "दूसरों का"
  },
  "expiation": {
    "english": "Expiation",
    "bishnupriya": "পারজিত",
    "bangla": "প্রায়শ্চিত্ত",
    "hindi": "प्रायश्चित्त"
  },
  "life": {
    "english": "Life",
    "bishnupriya": "পারান",
    "bangla": "প্রাণ",
    "hindi": "प्राण"
  },
  "because_of_grace": {
    "english": "Because of grace",
    "bishnupriya": "পারাদে",
    "bangla": "কৃপায়",
    "hindi": "कृपा से"
  },
  "tall_talk": {
    "english": "Tall talk",
    "bishnupriya": "পারি",
    "bangla": "বড়ো বড়ো কথা",
    "hindi": "बड़ी-बड़ी बातें"
  },
  "going_round_holy_places": {
    "english": "Going round holy places",
    "bishnupriya": "পারিক্রমা",
    "bangla": "পরিক্রমা",
    "hindi": "परिक्रमा"
  },
  "acquaintance": {
    "english": "Acquaintance",
    "bishnupriya": "পারিচ",
    "bangla": "পরিচয়",
    "hindi": "परिचय"
  },
  "fairy": {
    "english": "Fairy",
    "bishnupriya": "পারি",
    "bangla": "পরী",
    "hindi": "परी"
  },
  "care": {
    "english": "Care",
    "bishnupriya": "পারুয়া",
    "bangla": "খেয়াল",
    "hindi": "परवाह"
  },
  "afterwards": {
    "english": "Afterwards",
    "bishnupriya": "পারে",
    "bangla": "পরে",
    "hindi": "बाद में"
  },
  "way_method": {
    "english": "Way, method",
    "bishnupriya": "পারকার",
    "bangla": "উপায়",
    "hindi": "तरीका"
  },
  "administrative_division": {
    "english": "Administrative division",
    "bishnupriya": "পারগনা",
    "bangla": "পরগনা",
    "hindi": "परगना"
  },
  "subject_tenant": {
    "english": "Subject, tenant",
    "bishnupriya": "পারজা",
    "bangla": "প্রজা",
    "hindi": "प्रजा"
  },
  "in_consideration": {
    "english": "In consideration",
    "bishnupriya": "পারতিকে",
    "bangla": "বিবেচনায়",
    "hindi": "विचार में"
  },
  "to_put_to_shame": {
    "english": "To put to shame",
    "bishnupriya": "পার্থা-",
    "bangla": "লজ্জা দেওয়া",
    "hindi": "शर्मिंदा करना"
  },
  "screen": {
    "english": "Screen",
    "bishnupriya": "পার্দা",
    "bangla": "পর্দা",
    "hindi": "पर्दा"
  },
  "main_principal": {
    "english": "Main, principal",
    "bishnupriya": "পারধান",
    "bangla": "প্রধান",
    "hindi": "मुख्य"
  },
  "gigantic": {
    "english": "Gigantic",
    "bishnupriya": "পারবতিয়া",
    "bangla": "পর্বতের মতো বড়ো",
    "hindi": "पहाड़ जैसा बड़ा"
  },
  "evidence": {
    "english": "Evidence",
    "bishnupriya": "পারমান",
    "bangla": "প্রমাণ",
    "hindi": "सबूत"
  },
  "food_offered_to_deity_remains": {
    "english": "Food offered to deity / remains",
    "bishnupriya": "পারসাত",
    "bangla": "প্রসাদ",
    "hindi": "प्रसाद"
  },
  "neighbour": {
    "english": "Neighbour",
    "bishnupriya": "পারশি",
    "bangla": "পড়শি",
    "hindi": "पड़ोसी"
  },
  "to_fall": {
    "english": "To fall",
    "bishnupriya": "পার-",
    "bangla": "পড়া",
    "hindi": "गिरना"
  },
  "fallen_deserted": {
    "english": "Fallen / deserted",
    "bishnupriya": "পারা",
    "bangla": "পতিত / পরিত্যক্ত",
    "hindi": "गिरा / त्यागा हुआ"
  },
  "lesson": {
    "english": "Lesson",
    "bishnupriya": "পারা",
    "bangla": "পড়া",
    "hindi": "पाठ"
  },
  "student": {
    "english": "Student",
    "bishnupriya": "পারুয়া",
    "bangla": "ছাত্র",
    "hindi": "छात्र"
  },
  "bevel": {
    "english": "Bevel",
    "bishnupriya": "পাল",
    "bangla": "বেভেল",
    "hindi": "बेवल"
  },
  "twinkling_of_eye": {
    "english": "Twinkling of eye",
    "bishnupriya": "পালক",
    "bangla": "পলক",
    "hindi": "पलक"
  },
  "starch": {
    "english": "Starch",
    "bishnupriya": "পালাপ",
    "bangla": "মাড়",
    "hindi": "माड़"
  },
  "bark": {
    "english": "Bark",
    "bishnupriya": "পালাব",
    "bangla": "ছাল",
    "hindi": "छाल"
  },
  "to_flee": {
    "english": "To flee",
    "bishnupriya": "পালা-",
    "bangla": "পালানো",
    "hindi": "भागना"
  },
  "cage": {
    "english": "Cage",
    "bishnupriya": "পালান",
    "bangla": "খাঁচা",
    "hindi": "पिंजरा"
  },
  "hide_seek": {
    "english": "Hide & seek",
    "bishnupriya": "পালাপালি",
    "bangla": "লুকোচুরি",
    "hindi": "लुका-छिपी"
  },
  "alluvial_soil": {
    "english": "Alluvial soil",
    "bishnupriya": "পালি",
    "bangla": "পলি",
    "hindi": "गाद"
  },
  "creeper_pot_herb": {
    "english": "A creeper (pot-herb)",
    "bishnupriya": "পালিয়া",
    "bangla": "পটলের মতো লতা",
    "hindi": "परवल जैसी लता"
  },
  "costume_for_rasa_dance": {
    "english": "Costume for Rasa dance",
    "bishnupriya": "পালেই",
    "bangla": "রাসের পোশাক",
    "hindi": "रास नृत्य का वस्त्र"
  },
  "dice_board_2": {
    "english": "Dice-board",
    "bishnupriya": "পালেম",
    "bangla": "পাশার তক্তা",
    "hindi": "पासे का तख्ता"
  },
  "fish_catching_instrument": {
    "english": "Fish-catching instrument",
    "bishnupriya": "পালো",
    "bangla": "মাছ ধরার যন্ত্র",
    "hindi": "मछली पकड़ने का औज़ार"
  },
  "partition": {
    "english": "Partition",
    "bishnupriya": "পালখা / পালখেই",
    "bangla": "পরতা",
    "hindi": "परदा"
  },
  "platoon": {
    "english": "Platoon",
    "bishnupriya": "পালতান",
    "bangla": "পল্টন",
    "hindi": "प्लाटून"
  },
  "layer_2": {
    "english": "Layer",
    "bishnupriya": "পাল্লা",
    "bangla": "স্তর",
    "hindi": "परत"
  },
  "presentation": {
    "english": "Presentation",
    "bishnupriya": "পাল্লাম",
    "bangla": "উপহার",
    "hindi": "भेंट"
  },
  "cremation": {
    "english": "Cremation",
    "bishnupriya": "পাল্লেই",
    "bangla": "দাহ",
    "hindi": "दाह संस्कार"
  },
  "five": {
    "english": "Five",
    "bishnupriya": "পাচ",
    "bangla": "পাঁচ",
    "hindi": "पाँच"
  },
  "white": {
    "english": "White",
    "bishnupriya": "পাচাত",
    "bangla": "সাদা",
    "hindi": "सफेद"
  },
  "towel_five_cubits": {
    "english": "Towel (five cubits)",
    "bishnupriya": "পাচাতি",
    "bangla": "পাঁচ হাত লম্বা তোয়ালে",
    "hindi": "पाँच हाथ का तौलिया"
  },
  "small_sticks": {
    "english": "Small sticks",
    "bishnupriya": "পাচেং",
    "bangla": "ছোটো কাঠি",
    "hindi": "छोटी लकड़ियाँ"
  },
  "tricks": {
    "english": "Tricks",
    "bishnupriya": "পাচ্চা",
    "bangla": "চালাকি",
    "hindi": "चालाकी"
  },
  "to_be_engaged": {
    "english": "To be engaged",
    "bishnupriya": "পাছ-",
    "bangla": "ব্যস্ত হওয়া",
    "hindi": "लग जाना"
  },
  "to_engage": {
    "english": "To engage",
    "bishnupriya": "পাছা-",
    "bangla": "ব্যস্ত করা",
    "hindi": "लगाना"
  },
  "dash": {
    "english": "Dash",
    "bishnupriya": "পাছার",
    "bangla": "ধাক্কা",
    "hindi": "धक्का"
  },
  "to_dash": {
    "english": "To dash",
    "bishnupriya": "পাছারা-",
    "bangla": "ধাক্কা মারা",
    "hindi": "टक्कर मारना"
  },
  "loose_pantaloons": {
    "english": "Loose pantaloons",
    "bishnupriya": "পাজামা",
    "bangla": "পায়জামা",
    "hindi": "पाजामा"
  },
  "to_arrange": {
    "english": "To arrange",
    "bishnupriya": "পাজালা-",
    "bangla": "সাজানো",
    "hindi": "सजाना"
  },
  "ball_of_cotton": {
    "english": "A ball of cotton",
    "bishnupriya": "পাজি",
    "bangla": "তুলার গোলা",
    "hindi": "रुई का गोला"
  },
  "stupid": {
    "english": "Stupid",
    "bishnupriya": "পাজি",
    "bangla": "বোকা",
    "hindi": "मूर्ख"
  },
  "end_destination": {
    "english": "End, destination",
    "bishnupriya": "পাঞ্চেল",
    "bangla": "শেষ / গন্তব্য",
    "hindi": "अंत / मंज़िल"
  },
  "pale": {
    "english": "Pale",
    "bishnupriya": "পাঞ্ছা",
    "bangla": "ফ্যাকাশে",
    "hindi": "पीला"
  },
  "throw_of_five_twenty_five_points": {
    "english": "Throw of five / twenty-five points (dice)",
    "bishnupriya": "পাঞ্ছা",
    "bangla": "পাঁচ/পঁচিশ পয়েন্টের ঘুঁটি",
    "hindi": "पाँच/पच्चीस अंक का पासा"
  },
  "grip_arm_grasp": {
    "english": "Grip / arm-grasp",
    "bishnupriya": "পাঞ্জা",
    "bangla": "মুঠো",
    "hindi": "मुट्ठी"
  },
  "calendar_astrologer": {
    "english": "Calendar / astrologer",
    "bishnupriya": "পনজি",
    "bangla": "পঞ্জিকা / জ্যোতিষী",
    "hindi": "पंचांग / ज्योतिषी"
  },
  "extreme_end": {
    "english": "Extreme end",
    "bishnupriya": "পনজিফাম",
    "bangla": "চরম প্রান্ত",
    "hindi": "अंतिम सिरा"
  },
  "jute": {
    "english": "Jute",
    "bishnupriya": "পাট",
    "bangla": "পাট",
    "hindi": "पटसन"
  },
  "flat": {
    "english": "Flat",
    "bishnupriya": "পাট",
    "bangla": "চ্যাপটা",
    "hindi": "चपटा"
  },
  "slab": {
    "english": "Slab",
    "bishnupriya": "পাটা",
    "bangla": "ফলক",
    "hindi": "स्लैब"
  },
  "fine_mat": {
    "english": "Fine mat",
    "bishnupriya": "পাটি",
    "bangla": "পাটি",
    "hindi": "चटाई"
  },
  "land_record_keeper": {
    "english": "Land-record keeper",
    "bishnupriya": "পাটোয়ারি",
    "bangla": "পাটোয়ারী",
    "hindi": "पटवारी"
  },
  "chief_queen": {
    "english": "Chief queen",
    "bishnupriya": "পাতেশ্বরী",
    "bangla": "প্রধান রানী",
    "hindi": "मुख्य रानी"
  },
  "deed_of_sale_gift": {
    "english": "Deed of sale/gift",
    "bishnupriya": "পাত্তা",
    "bangla": "দলিল",
    "hindi": "दस्तावेज़"
  },
  "caste_boatman": {
    "english": "A caste (boatman)",
    "bishnupriya": "পাতনি",
    "bangla": "পাটনী জাত",
    "hindi": "पाटनी जाति"
  },
  "he_goat": {
    "english": "He-goat",
    "bishnupriya": "পাথা",
    "bangla": "পাঁঠা",
    "hindi": "बकरा"
  },
  "over_flowing": {
    "english": "Over-flowing",
    "bishnupriya": "পাথা-নাথা",
    "bangla": "উপচে পড়া",
    "hindi": "लबालब"
  },
  "temple_priest": {
    "english": "Temple priest",
    "bishnupriya": "পান্ডা",
    "bangla": "পান্ডা",
    "hindi": "पांडा"
  },
  "thin_leaf": {
    "english": "Thin / leaf",
    "bishnupriya": "পাত",
    "bangla": "পাতলা / পাতা",
    "hindi": "पतला / पत्ता"
  },
  "to_spread_lay_out": {
    "english": "To spread / lay out",
    "bishnupriya": "পাত-",
    "bangla": "ছড়ানো",
    "hindi": "फैलाना"
  },
  "thin_slender": {
    "english": "Thin, slender",
    "bishnupriya": "পাতাল",
    "bangla": "পাতলা",
    "hindi": "पतला"
  },
  "leaf_flat_part": {
    "english": "Leaf / flat part",
    "bishnupriya": "পাতা",
    "bangla": "পাতা / চ্যাপটা অংশ",
    "hindi": "पत्ता / चपटा हिस्सा"
  },
  "suitability": {
    "english": "Suitability",
    "bishnupriya": "পাতাপ",
    "bangla": "উপযুক্ততা",
    "hindi": "मुनासिब"
  },
  "kind_of_snake": {
    "english": "A kind of snake",
    "bishnupriya": "পাতাবালা",
    "bangla": "এক ধরনের সাপ",
    "hindi": "एक तरह का साँप"
  },
  "thin_light": {
    "english": "Thin, light",
    "bishnupriya": "পাতালা",
    "bangla": "পাতলা",
    "hindi": "पतला"
  },
  "small_cooking_pot": {
    "english": "Small cooking pot",
    "bishnupriya": "পাতিলা",
    "bangla": "ছোটো হাঁড়ি",
    "hindi": "छोटा बर्तन"
  },
  "piercer": {
    "english": "Piercer",
    "bishnupriya": "পাতুন",
    "bangla": "ছিদ্রকারী",
    "hindi": "छेदने वाला"
  },
  "whereabouts_trace": {
    "english": "Whereabouts / trace",
    "bishnupriya": "পাত্তা",
    "bangla": "খোঁজ",
    "hindi": "पता"
  },
  "leaf": {
    "english": "Leaf",
    "bishnupriya": "পাত্তি",
    "bangla": "পাতা",
    "hindi": "पत्ता"
  },
  "stone_hard": {
    "english": "Stone / hard",
    "bishnupriya": "পাথর",
    "bangla": "পাথর",
    "hindi": "पत्थर"
  },
  "plain_land_near_high_land": {
    "english": "Plain land near high land",
    "bishnupriya": "পাথাপ",
    "bangla": "উঁচু জমির কাছে সমতল",
    "hindi": "ऊँची ज़मीन के पास मैदान"
  },
  "breaking_wind": {
    "english": "Breaking wind",
    "bishnupriya": "পাদ",
    "bangla": "পাদ",
    "hindi": "पाद"
  },
  "to_break_wind": {
    "english": "To break wind",
    "bishnupriya": "পাদ-",
    "bangla": "পাদ দেওয়া",
    "hindi": "पादना"
  },
  "one_who_breaks_wind": {
    "english": "One who breaks wind",
    "bishnupriya": "পাদুরা",
    "bangla": "পাদ মারা লোক",
    "hindi": "पादने वाला"
  },
  "agreement": {
    "english": "Agreement",
    "bishnupriya": "পন",
    "bangla": "চুক্তি",
    "hindi": "समझौता"
  },
  "breadth": {
    "english": "Breadth",
    "bishnupriya": "পানা",
    "bangla": "চওড়া",
    "hindi": "चौड़ाई"
  },
  "betel_leaf": {
    "english": "Betel leaf",
    "bishnupriya": "পানা",
    "bangla": "পন",
    "hindi": "पान"
  },
  "engaged": {
    "english": "Engaged",
    "bishnupriya": "পানা",
    "bangla": "ব্যস্ত",
    "hindi": "लगा हुआ"
  },
  "getting": {
    "english": "Getting",
    "bishnupriya": "পানা",
    "bangla": "পাওয়া",
    "hindi": "पाना"
  },
  "spittle_after_betel": {
    "english": "Spittle after betel",
    "bishnupriya": "পানা-কাত্তাং",
    "bangla": "পন চিবানোর থুতু",
    "hindi": "पान चबाने के बाद थूक"
  },
  "watery_pale": {
    "english": "Watery / pale",
    "bishnupriya": "পনসা",
    "bangla": "জলজল / ফ্যাকাশে",
    "hindi": "पानीदार / पीला"
  },
  "joint_of_bamboo": {
    "english": "Joint of bamboo",
    "bishnupriya": "পাপ",
    "bangla": "বাঁশের গিঁট",
    "hindi": "बांस का पोर"
  },
  "tweezers": {
    "english": "Tweezers",
    "bishnupriya": "পাপাই",
    "bangla": "চিমটি",
    "hindi": "चिमटी"
  },
  "thin_crisp_wafer": {
    "english": "Thin crisp wafer",
    "bishnupriya": "পাপড়",
    "bangla": "পাপড়",
    "hindi": "पापड़"
  },
  "enmity_malice": {
    "english": "Enmity, malice",
    "bishnupriya": "কেরেন্না",
    "bangla": "শত্রুতা / বিদ্বেষ",
    "hindi": "दुश्मनी / बैर"
  },
  "mutual_enmity_malice": {
    "english": "Mutual enmity, malice",
    "bishnupriya": "কেরেন্না-কেরেন্নি",
    "bangla": "পরস্পরের শত্রুতা",
    "hindi": "आपसी दुश्मनी"
  },
  "kerosene": {
    "english": "Kerosene",
    "bishnupriya": "কেরেস",
    "bangla": "কেরোসিন",
    "hindi": "मिट्टी का तेल"
  },
  "deep_black": {
    "english": "Deep black",
    "bishnupriya": "কের্তু",
    "bangla": "ঘোর কালো",
    "hindi": "गहरा काला"
  },
  "frog": {
    "english": "Frog",
    "bishnupriya": "কেরবান / কেরবেন",
    "bangla": "ব্যাঙ",
    "hindi": "मेंढक"
  },
  "collapsing_crumbling": {
    "english": "Collapsing, crumbling",
    "bishnupriya": "কেল",
    "bangla": "ধসে পড়া",
    "hindi": "ढहना"
  },
  "heap": {
    "english": "Heap",
    "bishnupriya": "কেসারা",
    "bangla": "স্তূপ",
    "hindi": "ढेर"
  },
  "deep_black_2": {
    "english": "Deep black",
    "bishnupriya": "কেহারা / কেহুরা",
    "bangla": "ঘোর কালো",
    "hindi": "गहरा काला"
  },
  "pineapple": {
    "english": "Pineapple",
    "bishnupriya": "কেহেম",
    "bangla": "আনারস",
    "hindi": "अनानास"
  },
  "argument_objection": {
    "english": "Argument, objection",
    "bishnupriya": "কৈফত",
    "bangla": "আপত্তি",
    "hindi": "ऐतराज़"
  },
  "leader_head_suffix": {
    "english": "Leader, head (suffix)",
    "bishnupriya": "-কোক",
    "bangla": "নেতা / মাথা",
    "hindi": "नेता / सरदार"
  },
  "back_kicking": {
    "english": "Back-kicking",
    "bishnupriya": "কাউ",
    "bangla": "পিছনে লাথি",
    "hindi": "पीछे लात"
  },
  "short_in_height": {
    "english": "Short (in height)",
    "bishnupriya": "কাউ",
    "bangla": "খর্ব",
    "hindi": "बौना"
  },
  "short_person": {
    "english": "Short (person)",
    "bishnupriya": "কাউজিয়া",
    "bangla": "খর্বাকৃতি",
    "hindi": "बौना"
  },
  "bean_seed": {
    "english": "Bean seed",
    "bishnupriya": "খাই",
    "bangla": "বীজ (সীমের)",
    "hindi": "बीन्स का दाना"
  },
  "navel": {
    "english": "Navel",
    "bishnupriya": "খাইতান / খাইতৌ",
    "bangla": "নাভি",
    "hindi": "नाभि"
  },
  "one_with_prominent_navel": {
    "english": "One with prominent navel",
    "bishnupriya": "খাইতানপা",
    "bangla": "বড়ো নাভিওয়ালা",
    "hindi": "बड़ी नाभी वाला"
  },
  "a_kind_of_sweet_fried_rice_snack": {
    "english": "A kind of sweet fried rice snack",
    "bishnupriya": "খাইপাক",
    "bangla": "খৈয়ের মোয়া",
    "hindi": "खई का लड्डू"
  },
  "very_miserly_sticky_like_honey": {
    "english": "Very miserly (sticky like honey)",
    "bishnupriya": "খাইনিনা / খাইনিনিয়া / খাইনিনপা",
    "bangla": "অতি কৃপণ",
    "hindi": "बहुत कंजूस"
  },
  "a_kind_of_reed": {
    "english": "A kind of reed",
    "bishnupriya": "কাউনা",
    "bangla": "নলখাগড়া",
    "hindi": "एक तरह की नरकट"
  },
  "mass_multitude_driftwood": {
    "english": "Mass, multitude / driftwood",
    "bishnupriya": "কাউফান",
    "bangla": "ভীড় / বন্যায় ভেসে আসা কাঠ",
    "hindi": "भीड़ / बाढ़ में बहकर आया लकड़ी"
  },
  "crow": {
    "english": "Crow",
    "bishnupriya": "কাউয়া",
    "bangla": "কাক",
    "hindi": "कौआ"
  },
  "a_kind_of_flower_crow_flower": {
    "english": "A kind of flower (crow-flower)",
    "bishnupriya": "কাউয়াকলেই",
    "bangla": "কাকফুল",
    "hindi": "कौआ फूल"
  },
  "fruit_picking_pole_with_forked_end": {
    "english": "Fruit-picking pole with forked end",
    "bishnupriya": "কাউরান",
    "bangla": "ফল তোলার খাঁজকাটা লাঠি",
    "hindi": "फल तोड़ने की दोमुंही छड़ी"
  },
  "tricky_cunning_words": {
    "english": "Tricky / cunning words",
    "bishnupriya": "কাউরাল",
    "bangla": "চালাকি-চতুর ভাষা",
    "hindi": "चालाक बातें"
  },
  "quarrel": {
    "english": "Quarrel",
    "bishnupriya": "কাউলি",
    "bangla": "ঝগড়া",
    "hindi": "झगड़ा"
  },
  "quarrelsome": {
    "english": "Quarrelsome",
    "bishnupriya": "কাউলিবা / কাউলিরা",
    "bangla": "ঝগড়াটে",
    "hindi": "झगड़ालू"
  },
  "toil_hard_labour": {
    "english": "Toil, hard labour",
    "bishnupriya": "কাউসালি",
    "bangla": "কষ্টের কাজ",
    "hindi": "मेहनत-मजदूरी"
  },
  "to_make_a_small_opening_as_in_a_boil": {
    "english": "To make a small opening (as in a boil)",
    "bishnupriya": "কেগালা",
    "bangla": "ছোটো ফুটো করা (ফোঁড়ায়)",
    "hindi": "छोटा छेद करना (फोड़े में)"
  },
  "making_a_small_opening": {
    "english": "Making a small opening",
    "bishnupriya": "কেগালানি",
    "bangla": "ছোটো ফুটো করার ক্রিয়া",
    "hindi": "छोटा छेद करने की क्रिया"
  },
  "imaginary_scary_creature_to_frighten_children": {
    "english": "Imaginary scary creature (to frighten children)",
    "bishnupriya": "কেন",
    "bangla": "ভয় দেখানোর কাল্পনিক প্রাণী",
    "hindi": "बच्चों को डराने वाला काल्पनिक जीव"
  },
  "sensitive_animal": {
    "english": "Sensitive (animal)",
    "bishnupriya": "কেক্স",
    "bangla": "স্পর্শকাতর",
    "hindi": "संवेदनशील"
  },
  "little_finger": {
    "english": "Little finger",
    "bishnupriya": "কেনু-আনুলি / কেঞ্জুয়ালি",
    "bangla": "কনিষ্ঠা আঙুল",
    "hindi": "सबसे छोटी उंगली"
  },
  "indian_leopard": {
    "english": "Indian leopard",
    "bishnupriya": "কেচালান",
    "bangla": "চিতাবাঘ",
    "hindi": "तेंदुआ"
  },
  "earth_worm": {
    "english": "Earth-worm",
    "bishnupriya": "কেচুয়া",
    "bangla": "কেঁচো",
    "hindi": "केंचुआ"
  },
  "a_water_plant_resembling_arum": {
    "english": "A water-plant resembling arum",
    "bishnupriya": "কেচুরি",
    "bangla": "জলজ কচু-জাতীয় গাছ",
    "hindi": "जल कचालू जैसा पौधा"
  },
  "to_move_a_little": {
    "english": "To move a little",
    "bishnupriya": "কেজা",
    "bangla": "একটু নড়া",
    "hindi": "थोड़ा हिलना"
  },
  "why_then_how_is_it": {
    "english": "Why then? How is it?",
    "bishnupriya": "কেত্তে",
    "bangla": "তাহলে কেন?",
    "hindi": "तो फिर क्यों?"
  },
  "mutual_ill_feeling_envy": {
    "english": "Mutual ill-feeling / envy",
    "bishnupriya": "কেত্না-কেত্নি",
    "bangla": "পরস্পরের বিদ্বেষ / হিংসা",
    "hindi": "आपसी दुश्मनी / ईर्ष्या"
  },
  "endearing_gesture_pampered": {
    "english": "Endearing gesture / pampered",
    "bishnupriya": "কেথাক / কেথাকপা",
    "bangla": "আদরের ভঙ্গি / লাডলা",
    "hindi": "प्यारा इशारा / लाड़ला"
  },
  "little_finger_alt": {
    "english": "Little finger (alt.)",
    "bishnupriya": "কেনিঙ্গা",
    "bangla": "কনিষ্ঠা আঙুল",
    "hindi": "छोटी उंगली"
  },
  "why": {
    "english": "Why",
    "bishnupriya": "কেনে",
    "bangla": "কেন",
    "hindi": "क्यों"
  },
  "crumbled_down_collapsed": {
    "english": "Crumbled down, collapsed",
    "bishnupriya": "কেন্থা",
    "bangla": "ধসে পড়া",
    "hindi": "ढह जाना"
  },
  "shell_of_coconut": {
    "english": "Shell of coconut",
    "bishnupriya": "কেপ",
    "bangla": "নারকেলের খোসা",
    "hindi": "नारियल का छिलका"
  },
  "abundance_plenty": {
    "english": "Abundance, plenty",
    "bishnupriya": "কেপাকথাক",
    "bangla": "প্রচুর পরিমাণ",
    "hindi": "बहुतायत"
  },
  "extremely_dry_paddy_plant": {
    "english": "Extremely dry (paddy plant)",
    "bishnupriya": "কেম",
    "bangla": "একদম শুকনো",
    "hindi": "बिल्कुल सूखा"
  },
  "how_now": {
    "english": "How now!",
    "bishnupriya": "কেমান",
    "bangla": "এখন কীভাবে!",
    "hindi": "अब कैसे!"
  },
  "filthy_substance_rubbish": {
    "english": "Filthy substance, rubbish",
    "bishnupriya": "কেমচা",
    "bangla": "নোংরা আবর্জনা",
    "hindi": "गंदगी / कचरा"
  },
  "why_how_old_form": {
    "english": "Why? / How? (old form)",
    "bishnupriya": "কেমতে / কেমনে",
    "bangla": "কেন? / কীভাবে?",
    "hindi": "क्यों? / कैसे?"
  },
  "a_kind_of_medicinal_plant": {
    "english": "A kind of medicinal plant",
    "bishnupriya": "কেম্পাচাল",
    "bangla": "ঔষধি গাছ",
    "hindi": "औषधीय पौधा"
  },
  "tender": {
    "english": "Tender",
    "bishnupriya": "কেয়া",
    "bangla": "কোমল",
    "hindi": "कोमल"
  },
  "clerk": {
    "english": "Clerk",
    "bishnupriya": "কেকানি",
    "bangla": "কেরানি",
    "hindi": "क्लर्क"
  },
  "centipede": {
    "english": "Centipede",
    "bishnupriya": "কেরাপাক",
    "bangla": "শতপদ",
    "hindi": "कनखजूरा"
  },
  "skill_miracle": {
    "english": "Skill, miracle",
    "bishnupriya": "কেরামতি",
    "bangla": "কারামত / দক্ষতা",
    "hindi": "करामात / कौशल"
  },
  "oar": {
    "english": "Oar",
    "bishnupriya": "কেরালি / কেরুয়াল",
    "bangla": "দাঁড়",
    "hindi": "चप्पू"
  },
  "scandal": {
    "english": "Scandal",
    "bishnupriya": "কেরেঙ্কাল / কেরেঙ্কালি",
    "bangla": "কলঙ্ক / বদনাম",
    "hindi": "कलंक / बदनामी"
  },
  "man_with_large_testicles": {
    "english": "Man with large testicles",
    "bishnupriya": "কুরুলিয়া",
    "bangla": "বড়ো অণ্ডকোষযুক্ত পুরুষ",
    "hindi": "बड़े अंडकोष वाला पुरुष"
  },
  "shrunk_dried_up_incapacitated": {
    "english": "Shrunk & dried up / incapacitated",
    "bishnupriya": "কুরুসুম",
    "bangla": "শুকিয়ে কুঁকড়ে যাওয়া / অক্ষম",
    "hindi": "सूखकर सिकुड़ा हुआ / असमर्थ"
  },
  "piece": {
    "english": "Piece",
    "bishnupriya": "কুরকা",
    "bangla": "টুকরো",
    "hindi": "टुकड़ा"
  },
  "digging_earth_around_a_plant": {
    "english": "Digging earth around a plant",
    "bishnupriya": "কুর",
    "bangla": "গাছের গোড়ায় খুঁড়া",
    "hindi": "पौधे के चारों ओर खोदना"
  },
  "pole_of_fishing_net_dust": {
    "english": "Pole (of fishing net) / dust",
    "bishnupriya": "কুরা",
    "bangla": "মাছ ধরার খুঁটি / ধুলো",
    "hindi": "मछली पकड़ने की डंडी / धूल"
  },
  "bud": {
    "english": "Bud",
    "bishnupriya": "কুরি",
    "bangla": "কুঁড়ি",
    "hindi": "कली"
  },
  "twenty": {
    "english": "Twenty",
    "bishnupriya": "কুরি",
    "bangla": "কুড়ি",
    "hindi": "बीस"
  },
  "lazy": {
    "english": "Lazy",
    "bishnupriya": "কুরিয়া",
    "bangla": "অলস",
    "hindi": "आलसी"
  },
  "to_be_sufficient": {
    "english": "To be sufficient",
    "bishnupriya": "কুল",
    "bangla": "যথেষ্ট হওয়া",
    "hindi": "काफी होना"
  },
  "to_offer_help_to_manage": {
    "english": "To offer help / to manage",
    "bishnupriya": "কুলা",
    "bangla": "সাহায্য করা / ব্যবস্থা করা",
    "hindi": "मदद करना / प्रबंध करना"
  },
  "winnowing_fan": {
    "english": "Winnowing fan",
    "bishnupriya": "কুলা",
    "bangla": "কুলা",
    "hindi": "सूपा"
  },
  "managing_offering_help_gerund": {
    "english": "Managing / offering help (gerund)",
    "bishnupriya": "কুলানি",
    "bangla": "সাহায্য করার ক্রিয়া",
    "hindi": "मदद करने की क्रिया"
  },
  "only": {
    "english": "Only",
    "bishnupriya": "কুলে",
    "bangla": "কেবল",
    "hindi": "सिर्फ"
  },
  "a_kind_of_banana_kulpit": {
    "english": "A kind of banana (Kulpit)",
    "bishnupriya": "কুলপিত",
    "bangla": "কুলপিত কলা",
    "hindi": "कुलपित केला"
  },
  "labourer": {
    "english": "Labourer",
    "bishnupriya": "কুল্লি",
    "bangla": "মজুর",
    "hindi": "मजदूर"
  },
  "horoscope": {
    "english": "Horoscope",
    "bishnupriya": "কুষ্ঠি",
    "bangla": "জন্মকুষ্ঠি",
    "hindi": "कुंडली"
  },
  "wrestling": {
    "english": "Wrestling",
    "bishnupriya": "কুস্তি",
    "bangla": "কুস্তি",
    "hindi": "कुश्ती"
  },
  "pound_for_stray_cattle": {
    "english": "Pound for stray cattle",
    "bishnupriya": "কুহার",
    "bangla": "বেওয়ারিশ গোরুর আশ্রয়",
    "hindi": "बेसहारा पशुओं का बाड़ा"
  },
  "colour": {
    "english": "Colour",
    "bishnupriya": "কুহি",
    "bangla": "রং",
    "hindi": "रंग"
  },
  "why_short_form": {
    "english": "Why? (short form)",
    "bishnupriya": "কে",
    "bangla": "কেন?",
    "hindi": "क्यों?"
  },
  "dislocation": {
    "english": "Dislocation",
    "bishnupriya": "কেই",
    "bangla": "হাড় খসে যাওয়া",
    "hindi": "मोच / हड्डी खिसकना"
  },
  "market": {
    "english": "Market",
    "bishnupriya": "কেইথেল",
    "bangla": "বাজার",
    "hindi": "बाज़ार"
  },
  "brave_courageous": {
    "english": "Brave, courageous",
    "bishnupriya": "কেইফা",
    "bangla": "বীর / সাহসী",
    "hindi": "बहादुर"
  },
  "whim_hot_headedness": {
    "english": "Whim, hot-headedness",
    "bishnupriya": "কেইফু",
    "bangla": "খামখেয়াল / জেদ",
    "hindi": "ज़िद / गुस्सा"
  },
  "a_medicinal_plant": {
    "english": "A medicinal plant",
    "bishnupriya": "কেইফুরিয়া",
    "bangla": "ঔষধি গাছ (হরিতকী-জাতীয়)",
    "hindi": "औषधीय पौधा (हरड़ जैसा)"
  },
  "ladder": {
    "english": "Ladder",
    "bishnupriya": "কেইরাক",
    "bangla": "মই",
    "hindi": "सीढ़ी"
  },
  "split_bamboo_peg": {
    "english": "Split bamboo peg",
    "bishnupriya": "কেইরান",
    "bangla": "বাঁশের খিল",
    "hindi": "बांस का कील"
  },
  "granary_keeper": {
    "english": "Granary keeper",
    "bishnupriya": "কিরুনপা",
    "bangla": "গোলার রক্ষক",
    "hindi": "अनाज भंडार का रखवाला"
  },
  "wooden_door": {
    "english": "Wooden door",
    "bishnupriya": "কেউর",
    "bangla": "কাঠের দরজা",
    "hindi": "लकड़ी का दरवाज़ा"
  },
  "deed_of_sale_receipt": {
    "english": "Deed of sale / receipt",
    "bishnupriya": "কেউলা",
    "bangla": "বিক্রয় দলিল",
    "hindi": "बिक्री का दस्तावेज़"
  },
  "to_groan": {
    "english": "To groan",
    "bishnupriya": "কেকা",
    "bangla": "কঁকানো",
    "hindi": "कराहना"
  },
  "groaning_gerund": {
    "english": "Groaning (gerund)",
    "bishnupriya": "কেকানি",
    "bangla": "কঁকানির ক্রিয়া",
    "hindi": "कराहने की क्रिया"
  },
  "a_small_medicinal_plant": {
    "english": "A small medicinal plant",
    "bishnupriya": "কেকেমালপি",
    "bangla": "ছোটো ঔষধি গাছ",
    "hindi": "छोटा औषधीय पौधा"
  },
  "food": {
    "english": "Food",
    "bishnupriya": "খায়া",
    "bangla": "খাবার",
    "hindi": "खाना"
  },
  "walking_fish_climbing_perch": {
    "english": "Walking fish / Climbing perch",
    "bishnupriya": "খায়া",
    "bangla": "কই মাছ",
    "hindi": "कवई मछली"
  },
  "charitable_dispensary": {
    "english": "Charitable dispensary",
    "bishnupriya": "খয়রাতি",
    "bangla": "দাতব্য চিকিৎসালয়",
    "hindi": "खैराती दवाखाना"
  },
  "expenditure": {
    "english": "Expenditure",
    "bishnupriya": "খরচ",
    "bangla": "খরচ",
    "hindi": "खर्च"
  },
  "drought": {
    "english": "Drought",
    "bishnupriya": "খরা",
    "bangla": "খরা",
    "hindi": "सूखा"
  },
  "swift_moving": {
    "english": "Swift-moving",
    "bishnupriya": "খরিখরি",
    "bangla": "দ্রুতগামী",
    "hindi": "तेज़ चलने वाला"
  },
  "customer": {
    "english": "Customer",
    "bishnupriya": "খরিদ্দার",
    "bangla": "ক্রেতা",
    "hindi": "खरीदार"
  },
  "oil_press_traditional": {
    "english": "Oil-press (traditional)",
    "bishnupriya": "খরিয়া",
    "bangla": "তেলের ঘানি",
    "hindi": "कोल्हू"
  },
  "leg_tie_for_animals": {
    "english": "Leg-tie for animals",
    "bishnupriya": "খারাউ",
    "bangla": "পায়ের বাঁধন (পশুর)",
    "hindi": "जानवर के पैर बाँधने की रस्सी"
  },
  "broomstick_made_of_wood_bamboo": {
    "english": "Broomstick (made of wood/bamboo)",
    "bishnupriya": "খারখারিয়া / খারাক",
    "bangla": "কাঠ-বাঁশের ঝাঁটা",
    "hindi": "लकड़ी/बांस की झाड़ू"
  },
  "hare": {
    "english": "Hare",
    "bishnupriya": "খারগোস",
    "bangla": "খরগোশ",
    "hindi": "खरगोश"
  },
  "wooden_sandal": {
    "english": "Wooden sandal",
    "bishnupriya": "খরম",
    "bangla": "কাঠের খড়ম",
    "hindi": "खड़ाऊँ"
  },
  "lame": {
    "english": "Lame",
    "bishnupriya": "খরা",
    "bangla": "খোঁড়া",
    "hindi": "लंगड़ा"
  },
  "chalk": {
    "english": "Chalk",
    "bishnupriya": "খড়ি",
    "bangla": "খড়ি",
    "hindi": "चाक"
  },
  "scab_hard_layer_on_sore": {
    "english": "Scab / hard layer on sore",
    "bishnupriya": "খড়ি",
    "bangla": "খোসপাঁচড়",
    "hindi": "पपड़ी"
  },
  "curly_hair_rough": {
    "english": "Curly (hair) / Rough",
    "bishnupriya": "খরিয়া",
    "bangla": "কোঁকড়া / খসখসে",
    "hindi": "घुँघराला / खुरदुरा"
  },
  "banana_plant": {
    "english": "Banana plant",
    "bishnupriya": "খল",
    "bangla": "কলাগাছ",
    "hindi": "केले का पेड़"
  },
  "scratch_line": {
    "english": "Scratch, line",
    "bishnupriya": "খলচ",
    "bangla": "আঁচড় / রেখা",
    "hindi": "खरोंच / लकीर"
  },
  "courtyard": {
    "english": "Courtyard",
    "bishnupriya": "খলা",
    "bangla": "উঠোন",
    "hindi": "आँगन"
  },
  "tailor": {
    "english": "Tailor",
    "bishnupriya": "খলিফা",
    "bangla": "দর্জি",
    "hindi": "दरज़ी"
  },
  "fish_basket_wicker": {
    "english": "Fish basket (wicker)",
    "bishnupriya": "খলেই",
    "bangla": "মাছ রাখার ঝুড়ি",
    "hindi": "मछली रखने की टोकरी"
  },
  "to_move_stagger": {
    "english": "To move / stagger",
    "bishnupriya": "খলক",
    "bangla": "টলা / নড়া",
    "hindi": "डगमगाना / हिलना"
  },
  "to_shake": {
    "english": "To shake",
    "bishnupriya": "খলকা",
    "bangla": "নাড়ানো",
    "hindi": "हिलाना"
  },
  "assistant_singer_in_pala_kirtan": {
    "english": "Assistant singer (in pala/kirtan)",
    "bishnupriya": "খলপান / খলপানপা",
    "bangla": "পালা-গানের সহযোগী গায়ক",
    "hindi": "पाला/कीर्तन में सह-गायक"
  },
  "tune_mode_of_speaking": {
    "english": "Tune, mode of speaking",
    "bishnupriya": "খলফাম / খল্লিক",
    "bangla": "সুর / কথার ধরন",
    "hindi": "लय / बोलने का लहजा"
  },
  "rough_uneven_wrinkled": {
    "english": "Rough, uneven, wrinkled",
    "bishnupriya": "খাসখাসা",
    "bangla": "খসখসে / কুঁচকানো",
    "hindi": "खुरदुरा / झुर्रीदार"
  },
  "honey": {
    "english": "Honey",
    "bishnupriya": "খাহি",
    "bangla": "মধু",
    "hindi": "शहद"
  },
  "fearful": {
    "english": "Fearful",
    "bishnupriya": "খা",
    "bangla": "ভয়ঙ্কর",
    "hindi": "डरावना"
  },
  "to_eat": {
    "english": "To eat",
    "bishnupriya": "খা",
    "bangla": "খাওয়া",
    "hindi": "खाना"
  },
  "the_meiteis_derogatory_term": {
    "english": "The Meiteis (derogatory term)",
    "bishnupriya": "খাই",
    "bangla": "মৈতৈ (গালি হিসেবে)",
    "hindi": "मैतेई (गाली के रूप में)"
  },
  "fooding_ration_expense": {
    "english": "Fooding, ration expense",
    "bishnupriya": "খাইখরচ",
    "bangla": "খাওয়া-দাওয়ার খরচ",
    "hindi": "खाने-पीने का खर्च"
  },
  "bad_habit": {
    "english": "Bad habit",
    "bishnupriya": "খাইত",
    "bangla": "খারাপ অভ্যাস",
    "hindi": "बुरी आदत"
  },
  "foul_abusive_language": {
    "english": "Foul / abusive language",
    "bishnupriya": "খানচাপ",
    "bangla": "গালাগালি",
    "hindi": "गाली-गलौज"
  },
  "nipple_of_feeding_bottle": {
    "english": "Nipple of feeding bottle",
    "bishnupriya": "খানচুপ",
    "bangla": "বোতলের নিপল",
    "hindi": "फीडिंग बॉटल का निप्पल"
  },
  "post_postal_service": {
    "english": "Post, postal service",
    "bishnupriya": "খাতাই",
    "bangla": "ডাক",
    "hindi": "डाक"
  },
  "discord_trouble_mess": {
    "english": "Discord, trouble, mess",
    "bishnupriya": "খাটোমাটো",
    "bangla": "গণ্ডগোল",
    "hindi": "झमेला / गड़बड़"
  },
  "trouble_hitch": {
    "english": "Trouble, hitch",
    "bishnupriya": "খাটকা",
    "bangla": "আটকানি",
    "hindi": "अड़चन"
  },
  "to_be_refuted": {
    "english": "To be refuted",
    "bishnupriya": "খান্দ",
    "bangla": "খণ্ডন হওয়া",
    "hindi": "खंडित होना"
  },
  "to_refute": {
    "english": "To refute",
    "bishnupriya": "খান্দা",
    "bangla": "খণ্ডন করা",
    "hindi": "खंडन करना"
  },
  "scratching_with_nail": {
    "english": "Scratching with nail",
    "bishnupriya": "খাট",
    "bangla": "নখ দিয়ে আঁচড়",
    "hindi": "नाखून से खरोंच"
  },
  "writ_document": {
    "english": "Writ, document",
    "bishnupriya": "খাত",
    "bangla": "দলিল",
    "hindi": "दस्तावेज़"
  },
  "ended_finished": {
    "english": "Ended, finished",
    "bishnupriya": "খাতাম",
    "bangla": "শেষ",
    "hindi": "खत्म"
  },
  "handloom_cloth": {
    "english": "Handloom cloth",
    "bishnupriya": "খাদ্দর",
    "bangla": "খাদি",
    "hindi": "खादी"
  },
  "very_miserly": {
    "english": "Very miserly",
    "bishnupriya": "খানি",
    "bangla": "অতি কৃপণ",
    "hindi": "बहुत कंजूस"
  },
  "tune_melody": {
    "english": "Tune, melody",
    "bishnupriya": "খান্তা",
    "bangla": "সুর",
    "hindi": "धुन"
  },
  "implement_to_heap_paddy": {
    "english": "Implement to heap paddy",
    "bishnupriya": "খান্তি",
    "bangla": "ধান গাদানোর যন্ত্র",
    "hindi": "अनाज इकट्ठा करने का औजार"
  },
  "gourd": {
    "english": "Gourd",
    "bishnupriya": "খান্তুম",
    "bangla": "লাউ",
    "hindi": "लौकी"
  },
  "handful": {
    "english": "Handful",
    "bishnupriya": "খাপ",
    "bangla": "মুঠো",
    "hindi": "मुट्ठी"
  },
  "news": {
    "english": "News",
    "bishnupriya": "খবর",
    "bangla": "খবর",
    "hindi": "खबर"
  },
  "take_care_beware": {
    "english": "Take care! Beware!",
    "bishnupriya": "খবরদার",
    "bangla": "সাবধান!",
    "hindi": "खबरदार!"
  },
  "warning_caution": {
    "english": "Warning, caution",
    "bishnupriya": "খবরদারি",
    "bangla": "সতর্কতা",
    "hindi": "चेतावनी"
  },
  "brassiere": {
    "english": "Brassiere",
    "bishnupriya": "খবল / খয়াম",
    "bangla": "ব্রা",
    "hindi": "ब्रा"
  },
  "papaya": {
    "english": "Papaya",
    "bishnupriya": "খবল",
    "bangla": "পেঁপে",
    "hindi": "पपीता"
  },
  "hornet": {
    "english": "Hornet",
    "bishnupriya": "খবিনন্তৌ / খবিলালতুম",
    "bangla": "ভিমরুল",
    "hindi": "बड़ा भँवरा"
  },
  "stirring_water": {
    "english": "Stirring water",
    "bishnupriya": "খলম",
    "bangla": "জল নাড়া",
    "hindi": "पानी हिलाना"
  },
  "collection_gathering": {
    "english": "Collection, gathering",
    "bishnupriya": "খাম",
    "bangla": "সংগ্রহ",
    "hindi": "संग्रह"
  },
  "total": {
    "english": "Total",
    "bishnupriya": "খাম",
    "bangla": "মোট",
    "hindi": "कुल"
  },
  "place_to_wash_feet_of_devotees": {
    "english": "Place to wash feet of devotees",
    "bishnupriya": "খামামফাম",
    "bangla": "পা ধোয়ার স্থান (মন্দিরে)",
    "hindi": "भक्तों के पैर धोने की जगह"
  },
  "udder": {
    "english": "Udder",
    "bishnupriya": "খামি",
    "bangla": "থন",
    "hindi": "थन"
  },
  "rite_of_breastfeeding": {
    "english": "Rite of breastfeeding",
    "bishnupriya": "খামিল",
    "bangla": "স্তন্যপানের আচার",
    "hindi": "स्तनपान कराने की रस्म"
  },
  "under": {
    "english": "Under",
    "bishnupriya": "খামেই",
    "bangla": "নিচে",
    "hindi": "नीचे"
  },
  "to_the_extreme": {
    "english": "To the extreme",
    "bishnupriya": "খামথেন",
    "bangla": "চরমে",
    "hindi": "अति तक"
  },
  "collector_gatherer": {
    "english": "Collector, gatherer",
    "bishnupriya": "খাম্পা",
    "bangla": "সংগ্রাহক",
    "hindi": "संग्रहकर्ता"
  },
  "remains_of_fried_puffed_rice": {
    "english": "Remains of fried puffed rice",
    "bishnupriya": "খাইমান",
    "bangla": "ভাজা মুড়ির অবশেষ",
    "hindi": "भुने मुरमुरे का बचा हुआ"
  },
  "bee": {
    "english": "Bee",
    "bishnupriya": "খাইমু",
    "bangla": "মৌমাছি",
    "hindi": "मधुमक्खी"
  },
  "beeswax": {
    "english": "Beeswax",
    "bishnupriya": "খাইরু",
    "bangla": "মোম",
    "hindi": "मोम"
  },
  "honey_2": {
    "english": "Honey",
    "bishnupriya": "খাইহি",
    "bangla": "মধু",
    "hindi": "शहद"
  },
  "tying_child_on_the_back_the_back": {
    "english": "Tying child on the back / the back",
    "bishnupriya": "খাক",
    "bangla": "পিঠে শিশু বাঁধা / পিঠা",
    "hindi": "पीठ पर बच्चा बाँधना / पीठ"
  },
  "winding_edge_of_mat": {
    "english": "Winding (edge of mat)",
    "bishnupriya": "খাক",
    "bangla": "মাদুরের কিনারা গুটানো",
    "hindi": "चटाई का किनारा लपेटना"
  },
  "belly_human": {
    "english": "Belly (human)",
    "bishnupriya": "খাকাল",
    "bangla": "পেট",
    "hindi": "पेट"
  },
  "belly_animal": {
    "english": "Belly (animal)",
    "bishnupriya": "খাকালা",
    "bangla": "পশুর পেট",
    "hindi": "जानवर का पेट"
  },
  "back_of_the_head": {
    "english": "Back of the head",
    "bishnupriya": "খাকচা",
    "bangla": "মাথার পিছন",
    "hindi": "सिर का पीछे का हिस्सा"
  },
  "canal": {
    "english": "Canal",
    "bishnupriya": "খান",
    "bangla": "খাল",
    "hindi": "नहर"
  },
  "game_of_hopping_on_one_leg": {
    "english": "Game of hopping on one leg",
    "bishnupriya": "খানিয়াল",
    "bangla": "এক পায়ে লাফানো খেলা",
    "hindi": "एक पैर कूदने का खेल"
  },
  "shoe_sandal": {
    "english": "Shoe, sandal",
    "bishnupriya": "খানুপ",
    "bangla": "জুতো",
    "hindi": "जूता"
  },
  "turn_of_milking_animals": {
    "english": "Turn of milking (animals)",
    "bishnupriya": "খাঙ্কা",
    "bangla": "দুধ দেওয়ার পালা",
    "hindi": "दूध देने का समय"
  },
  "diarrhoea_in_babies_when_mothers_milk_stops": {
    "english": "Diarrhoea in babies when mother’s milk stops",
    "bishnupriya": "খাঙ্কাকলেই",
    "bangla": "মায়ের দুধ বন্ধে শিশুর পাতলা পায়খানা",
    "hindi": "माँ का दूध बंद होने पर बच्चे का दस्त"
  },
  "footstep": {
    "english": "Footstep",
    "bishnupriya": "খাঙ্কাপ",
    "bangla": "পায়ের ছাপ",
    "hindi": "पैर का निशान"
  },
  "trousers_pants": {
    "english": "Trousers, pants",
    "bishnupriya": "খাঙ্গারাউ",
    "bangla": "প্যান্ট",
    "hindi": "पतलून"
  },
  "anklet": {
    "english": "Anklet",
    "bishnupriya": "খাঞ্চি / খাঞ্চেই",
    "bangla": "নূপুর",
    "hindi": "पायल"
  },
  "footstep_character_nature": {
    "english": "Footstep / character, nature",
    "bishnupriya": "খাঞ্চেত",
    "bangla": "পদচিহ্ন / চরিত্র",
    "hindi": "कदम / स्वभाव"
  },
  "tune_melody_2": {
    "english": "Tune, melody",
    "bishnupriya": "খাঞ্চেল",
    "bangla": "সুর",
    "hindi": "धुन"
  },
  "way_of_speaking_tone": {
    "english": "Way of speaking / tone",
    "bishnupriya": "খান্তা",
    "bangla": "কথা বলার ধরন",
    "hindi": "बोलने का लहजा"
  },
  "two_pieces_of_cloth_sewn_together": {
    "english": "Two pieces of cloth sewn together",
    "bishnupriya": "খান্তিনা",
    "bangla": "জোড়া কাপড়",
    "hindi": "जोड़े हुए कपड़े"
  },
  "banyan_tree": {
    "english": "Banyan tree",
    "bishnupriya": "খান্নান",
    "bangla": "বটগাছ",
    "hindi": "बरगद"
  },
  "messenger": {
    "english": "Messenger",
    "bishnupriya": "খানলেই",
    "bangla": "দূত",
    "hindi": "दूत"
  },
  "wrinkle_contracted": {
    "english": "Wrinkle / contracted",
    "bishnupriya": "খাচ",
    "bangla": "কোঁচকানো",
    "hindi": "सिकुड़न"
  },
  "draft_document": {
    "english": "Draft (document)",
    "bishnupriya": "খাচারা",
    "bangla": "খসড়া",
    "hindi": "ड्राफ्ट"
  },
  "slanting_roofing_poles": {
    "english": "Slanting roofing poles",
    "bishnupriya": "খাচা",
    "bangla": "ছাদের তির্যক খুঁটি",
    "hindi": "छत के तिरछे खंभे"
  },
  "bamboo_wood_pieces_for_fencing": {
    "english": "Bamboo/wood pieces for fencing",
    "bishnupriya": "খাচি",
    "bangla": "বেড়ার বাঁশ",
    "hindi": "बाड़ के लिए बांस"
  },
  "small_valley": {
    "english": "Small valley",
    "bishnupriya": "খাচি",
    "bangla": "ছোটো উপত্যকা",
    "hindi": "छोटी घाटी"
  },
  "wrinkled_rough_skin": {
    "english": "Wrinkled, rough (skin)",
    "bishnupriya": "খাকখাচা",
    "bangla": "কুঁচকানো / খসখসে",
    "hindi": "झुर्रीदार / खुरदुरा"
  },
  "naughty_wicked": {
    "english": "Naughty, wicked",
    "bishnupriya": "খাচ্চর",
    "bangla": "দুষ্টু",
    "hindi": "शरारती / बदमाश"
  },
  "foot_brush": {
    "english": "Foot-brush",
    "bishnupriya": "পাপুশ",
    "bangla": "পায়ের ব্রাশ",
    "hindi": "पैर का ब्रश"
  },
  "father": {
    "english": "Father",
    "bishnupriya": "পাবুন",
    "bangla": "বাবা",
    "hindi": "पिता"
  },
  "space_between_elbow_armpit": {
    "english": "Space between elbow & armpit",
    "bishnupriya": "পাম্পাম / পাম্পাল",
    "bangla": "কনুই ও বগলের মাঝে",
    "hindi": "कोहनी और बगल के बीच"
  },
  "harvested_paddy_in_field": {
    "english": "Harvested paddy in field",
    "bishnupriya": "পাম্ফাউ",
    "bangla": "মাঠে রাখা ধান",
    "hindi": "खेत में रखा धान"
  },
  "leg_foot_furniture": {
    "english": "Leg / foot (furniture)",
    "bishnupriya": "পায়া",
    "bangla": "পা / আসবাবের পা",
    "hindi": "पैर / फर्नीचर का पैर"
  },
  "latrine": {
    "english": "Latrine",
    "bishnupriya": "পায়খানা",
    "bangla": "পায়খানা",
    "hindi": "शौचालय"
  },
  "getting_money_due": {
    "english": "Getting / money due",
    "bishnupriya": "পাওয়ান",
    "bangla": "পাওনা",
    "hindi": "मिलने वाला / बकाया"
  },
  "creditor": {
    "english": "Creditor",
    "bishnupriya": "পাওয়ান-দার",
    "bangla": "পাওনাদার",
    "hindi": "लेनदार"
  },
  "pressure": {
    "english": "Pressure",
    "bishnupriya": "পার",
    "bangla": "চাপ",
    "hindi": "दबाव"
  },
  "to_be_able": {
    "english": "To be able",
    "bishnupriya": "পার-",
    "bangla": "পারা",
    "hindi": "कर पाना"
  },
  "to_spread": {
    "english": "To spread",
    "bishnupriya": "পার-",
    "bangla": "ছড়ানো",
    "hindi": "फैलाना"
  },
  "so_far_as_practicable": {
    "english": "So far as practicable",
    "bishnupriya": "পারাত-পাক্খে",
    "bangla": "যতদূর সম্ভব",
    "hindi": "जितना संभव हो"
  },
  "fishing_instrument": {
    "english": "Fishing instrument",
    "bishnupriya": "পারান",
    "bangla": "মাছ ধরার যন্ত্র",
    "hindi": "मछली पकड़ने का औज़ार"
  },
  "line_in_feast": {
    "english": "Line (in feast)",
    "bishnupriya": "পারাস",
    "bangla": "সারি",
    "hindi": "कतार"
  },
  "multitude": {
    "english": "Multitude",
    "bishnupriya": "পারা",
    "bangla": "ভিড়",
    "hindi": "भीड़"
  },
  "probably_like": {
    "english": "Probably / like",
    "bishnupriya": "পারা",
    "bangla": "সম্ভবত / মতো",
    "hindi": "शायद / जैसे"
  },
  "mercury": {
    "english": "Mercury",
    "bishnupriya": "পারা",
    "bangla": "পারা",
    "hindi": "पारा"
  },
  "to_press_tread": {
    "english": "To press / tread",
    "bishnupriya": "পারা-",
    "bangla": "চাপা",
    "hindi": "दबाना"
  },
  "death_attainment_of_divine_association": {
    "english": "Death (attainment of divine association)",
    "bishnupriya": "পারাত্তি",
    "bangla": "মৃত্যু",
    "hindi": "मोक्ष"
  },
  "first_meal_after_fast": {
    "english": "First meal after fast",
    "bishnupriya": "পারান্না",
    "bangla": "উপবাস ভাঙার প্রথম খাবার",
    "hindi": "उपवास तोड़ने का पहला भोजन"
  },
  "felling_in_succession": {
    "english": "Felling in succession",
    "bishnupriya": "পারাপারি",
    "bangla": "একের পর এক কাটা",
    "hindi": "लगातार काटना"
  },
  "thinking": {
    "english": "Thinking",
    "bishnupriya": "পারাবানা",
    "bangla": "চিন্তা",
    "hindi": "सोचना"
  },
  "multitude_2": {
    "english": "Multitude",
    "bishnupriya": "পারাবার",
    "bangla": "ভিড়",
    "hindi": "भीड़"
  },
  "fine_mat": {
    "english": "Fine mat",
    "bishnupriya": "পারি",
    "bangla": "সূক্ষ্ম চাটাই",
    "hindi": "बारीक चटाई"
  },
  "discipline": {
    "english": "Discipline",
    "bishnupriya": "পারিচেট",
    "bangla": "শৃঙ্খলা",
    "hindi": "अनुशासन"
  },
  "courtier": {
    "english": "Courtier",
    "bishnupriya": "পারিষদ",
    "bangla": "সভাসদ",
    "hindi": "दरबारी"
  },
  "pigeon": {
    "english": "Pigeon",
    "bishnupriya": "পারাউ",
    "bangla": "ঘুঘু",
    "hindi": "कबूतर"
  },
  "lane": {
    "english": "Lane",
    "bishnupriya": "পারা",
    "bangla": "গলি",
    "hindi": "गली"
  },
  "heap": {
    "english": "Heap",
    "bishnupriya": "পারা",
    "bangla": "গাদা",
    "hindi": "ढेर"
  },
  "foot_step": {
    "english": "Foot-step",
    "bishnupriya": "পারা",
    "bangla": "পদচিহ্ন",
    "hindi": "पैर का निशान"
  },
  "flock_herd": {
    "english": "Flock / herd",
    "bishnupriya": "পালা",
    "bangla": "পাল",
    "hindi": "झुंड"
  },
  "sail": {
    "english": "Sail",
    "bishnupriya": "পাল",
    "bangla": "পাল",
    "hindi": "पाल"
  },
  "boundary": {
    "english": "Boundary",
    "bishnupriya": "পাল",
    "bangla": "সীমানা",
    "hindi": "सीमा"
  },
  "to_foster_rear": {
    "english": "To foster / rear",
    "bishnupriya": "পাল",
    "bangla": "পালন করা",
    "hindi": "पालना"
  },
  "kind_of_pot_herb": {
    "english": "A kind of pot-herb",
    "bishnupriya": "পালান",
    "bangla": "এক ধরনের শাক",
    "hindi": "एक तरह का साग"
  },
  "couch": {
    "english": "Couch",
    "bishnupriya": "পালান",
    "bangla": "খাট",
    "hindi": "पलंग"
  },
  "reversal": {
    "english": "Reversal",
    "bishnupriya": "পালট",
    "bangla": "উল্টো",
    "hindi": "उल्टा"
  },
  "group_of_dancers_turn_of_duty": {
    "english": "Group of dancers / turn of duty",
    "bishnupriya": "পালা",
    "bangla": "নাচের দল / পালা",
    "hindi": "नाच का समूह / ड्यूटी का टर्न"
  },
  "hanger_support_for_herbs": {
    "english": "Hanger / support for herbs",
    "bishnupriya": "পালান",
    "bangla": "ঝোলানোর জায়গা",
    "hindi": "लटकाने का सहारा"
  },
  "tricks": {
    "english": "Tricks",
    "bishnupriya": "পালানসা",
    "bangla": "চালাকি",
    "hindi": "चालाकी"
  },
  "upbringing": {
    "english": "Upbringing",
    "bishnupriya": "পালানি",
    "bangla": "লালন-পালন",
    "hindi": "परवरिश"
  },
  "turn_of_duty": {
    "english": "A turn of duty",
    "bishnupriya": "পালি",
    "bangla": "পালা",
    "hindi": "ड्यूटी"
  },
  "polish": {
    "english": "Polish",
    "bishnupriya": "পালিশ",
    "bangla": "পালিশ",
    "hindi": "पॉलिश"
  },
  "wrestler": {
    "english": "Wrestler",
    "bishnupriya": "পালোয়ান",
    "bangla": "পালোয়ান",
    "hindi": "पहलवान"
  },
  "support_for_herbs": {
    "english": "Support for herbs",
    "bishnupriya": "পালো",
    "bangla": "শাকের আলনা",
    "hindi": "साग का सहारा"
  },
  "to_be_turned_over": {
    "english": "To be turned over",
    "bishnupriya": "পাল্ট-",
    "bangla": "উল্টে যাওয়া",
    "hindi": "पलटना"
  },
  "preparation_of_fermented_fish": {
    "english": "Preparation of fermented fish",
    "bishnupriya": "পাল্টাই",
    "bangla": "পাল্টাই",
    "hindi": "पाल्टाई"
  },
  "counter_in_reaction": {
    "english": "Counter / in reaction",
    "bishnupriya": "পাল্টা",
    "bangla": "প্রতিক্রিয়া",
    "hindi": "जवाबी"
  },
  "to_turn_back_retaliate": {
    "english": "To turn back / retaliate",
    "bishnupriya": "পাল্টা-",
    "bangla": "পাল্টা দেওয়া",
    "hindi": "जवाब देना"
  },
  "watery_bounded": {
    "english": "Watery (bounded)",
    "bishnupriya": "পাল্থান",
    "bangla": "জলজল",
    "hindi": "पानीदार"
  },
  "outer_side": {
    "english": "Outer side",
    "bishnupriya": "পালপাক",
    "bangla": "বাইরের দিক",
    "hindi": "बाहर का किनारा"
  },
  "outwardly_polished_woman": {
    "english": "Outwardly polished woman",
    "bishnupriya": "পালপাকি",
    "bangla": "বাইরে থেকে সুন্দর মেয়ে",
    "hindi": "बाहर से सुंदर औरत"
  },
  "nervous_fainted": {
    "english": "Nervous / fainted",
    "bishnupriya": "পাহাত",
    "bangla": "ভয়ে অজ্ঞান",
    "hindi": "घबरा हुआ"
  },
  "widower": {
    "english": "Widower",
    "bishnupriya": "পাহারা",
    "bangla": "বিপত্নীক",
    "hindi": "विधुर"
  },
  "watch": {
    "english": "Watch",
    "bishnupriya": "পাহারা",
    "bangla": "পাহারা",
    "hindi": "पहरा"
  },
  "watchman": {
    "english": "Watchman",
    "bishnupriya": "পাহারাদার",
    "bangla": "পাহারাদার",
    "hindi": "चौकीदार"
  },
  "hill": {
    "english": "Hill",
    "bishnupriya": "পাহার",
    "bangla": "পাহাড়",
    "hindi": "पहाड़"
  },
  "hilly": {
    "english": "Hilly",
    "bishnupriya": "পাহারিয়া",
    "bangla": "পাহাড়ি",
    "hindi": "पहाड़ी"
  },
  "bird": {
    "english": "Bird",
    "bishnupriya": "পাহিয়া",
    "bangla": "পাখি",
    "hindi": "चिड़िया"
  },
  "to_overflood": {
    "english": "To overflood",
    "bishnupriya": "পাহা-",
    "bangla": "উপচে পড়া",
    "hindi": "लबालब भरना"
  },
  "name_of_deity": {
    "english": "Name of deity",
    "bishnupriya": "পাহানপা",
    "bangla": "দেবতার নাম",
    "hindi": "देवता का नाम"
  },
  "to_forget": {
    "english": "To forget",
    "bishnupriya": "পাহুর-",
    "bangla": "ভুলে যাওয়া",
    "hindi": "भूल जाना"
  },
  "to_drink": {
    "english": "To drink",
    "bishnupriya": "পি-",
    "bangla": "পান করা",
    "hindi": "पीना"
  },
  "small_bunch_of_thread": {
    "english": "Small bunch of thread",
    "bishnupriya": "পিকচা",
    "bangla": "সুতোর ছোটো গোছা",
    "hindi": "धागे का छोटा गुच्छा"
  },
  "sudden_anger": {
    "english": "Sudden anger",
    "bishnupriya": "পিঞ",
    "bangla": "হঠাৎ রাগ",
    "hindi": "अचानक गुस्सा"
  },
  "kind_of_fruit": {
    "english": "A kind of fruit",
    "bishnupriya": "পিঞালা",
    "bangla": "এক ধরনের ফল",
    "hindi": "एक तरह का फल"
  },
  "rheum_of_eye": {
    "english": "Rheum of eye",
    "bishnupriya": "পিচুতি",
    "bangla": "চোখের ময়লা",
    "hindi": "आँख की मैल"
  },
  "brow": {
    "english": "Brow",
    "bishnupriya": "পিচুম",
    "bangla": "ভ্রূ",
    "hindi": "भौंह"
  },
  "painful_swelling_at_joints": {
    "english": "Painful swelling at joints",
    "bishnupriya": "পিচুলি",
    "bangla": "হাত-পায়ের ব্যথার ফোলা",
    "hindi": "जोड़ों में दर्दनाक सूजन"
  },
  "syringe": {
    "english": "Syringe",
    "bishnupriya": "পিচকারি",
    "bangla": "পিচকারি",
    "hindi": "पिचकारी"
  },
  "pricking_sensation": {
    "english": "Pricking sensation",
    "bishnupriya": "পিচপিচ",
    "bangla": "খোঁচা লাগা",
    "hindi": "चुभन"
  },
  "back_side_consequence": {
    "english": "Back-side / consequence",
    "bishnupriya": "পিছ",
    "bangla": "পিছন / ফল",
    "hindi": "पीछे / नतीजा"
  },
  "slip": {
    "english": "Slip",
    "bishnupriya": "পিছ",
    "bangla": "পিছলানো",
    "hindi": "फिसलन"
  },
  "to_lag_behind": {
    "english": "To lag behind",
    "bishnupriya": "পিছা-",
    "bangla": "পিছিয়ে পড়া",
    "hindi": "पीछे रहना"
  },
  "of_later_time": {
    "english": "Of later time",
    "bishnupriya": "পিছারি",
    "bangla": "পরবর্তীকালের",
    "hindi": "बाद का"
  },
  "slippery": {
    "english": "Slippery",
    "bishnupriya": "পিছালা",
    "bangla": "পিছল",
    "hindi": "फिसलन भरा"
  },
  "big_fly": {
    "english": "Big fly",
    "bishnupriya": "দা'র-মাচি",
    "bangla": "বড়ো মাছি",
    "hindi": "बड़ी मक्खी"
  },
  "strong_to_last": {
    "english": "Strong / to last",
    "bishnupriya": "দারা",
    "bangla": "মজবুত / টিকে থাকা",
    "hindi": "मजबूत / टिकना"
  },
  "rope": {
    "english": "Rope",
    "bishnupriya": "দারি",
    "bangla": "দড়ি",
    "hindi": "रस्सी"
  },
  "design_on_cloth": {
    "english": "Design on cloth",
    "bishnupriya": "দারিয়া",
    "bangla": "কাপড়ের ডিজাইন",
    "hindi": "कपड़े का डिज़ाइन"
  },
  "party_group": {
    "english": "Party / group",
    "bishnupriya": "দালা",
    "bangla": "দল",
    "hindi": "पार्टी"
  },
  "raised_kiln": {
    "english": "Raised kiln",
    "bishnupriya": "দালা",
    "bangla": "উঁচু চুল্লি",
    "hindi": "ऊँची भट्टी"
  },
  "floating_reed": {
    "english": "Floating reed",
    "bishnupriya": "ডাল",
    "bangla": "ভাসমান নলখাগড়া",
    "hindi": "तैरता सरकंडा"
  },
  "white": {
    "english": "White",
    "bishnupriya": "দালা",
    "bangla": "সাদা",
    "hindi": "सफेद"
  },
  "party_spirit": {
    "english": "Party-spirit",
    "bishnupriya": "দালাদালি",
    "bangla": "দলাদলি",
    "hindi": "पक्षपात"
  },
  "building": {
    "english": "Building",
    "bishnupriya": "দালান",
    "bangla": "দালান",
    "hindi": "हवेली"
  },
  "record": {
    "english": "Record",
    "bishnupriya": "দলিল",
    "bangla": "দলিল",
    "hindi": "दस्तावेज़"
  },
  "palanquin": {
    "english": "Palanquin",
    "bishnupriya": "দলেই",
    "bangla": "পালকি",
    "hindi": "पालकी"
  },
  "telescope": {
    "english": "Telescope",
    "bishnupriya": "দলবিল",
    "bangla": "দূরবিন",
    "hindi": "दूरबीन"
  },
  "ten": {
    "english": "Ten",
    "bishnupriya": "দাস",
    "bangla": "দশ",
    "hindi": "दस"
  },
  "dacoit": {
    "english": "Dacoit",
    "bishnupriya": "দাসা",
    "bangla": "ডাকাত",
    "hindi": "डाकू"
  },
  "wick": {
    "english": "Wick",
    "bishnupriya": "দাসি",
    "bangla": "বাতি",
    "hindi": "बाती"
  },
  "signature": {
    "english": "Signature",
    "bishnupriya": "দস্তগত",
    "bangla": "দস্তখত",
    "hindi": "दस्तखत"
  },
  "zinc": {
    "english": "Zinc",
    "bishnupriya": "দাস্তা",
    "bangla": "দস্তা",
    "hindi": "जस्ता"
  },
  "nature_naturally": {
    "english": "Nature / naturally",
    "bishnupriya": "দস্তুর",
    "bangla": "স্বভাব / স্বাভাবিক",
    "hindi": "रिवाज / स्वाभाविक"
  },
  "fee_in_religious_rites": {
    "english": "Fee in religious rites",
    "bishnupriya": "দাহিনা",
    "bangla": "ধর্মীয় দক্ষিণা",
    "hindi": "धार्मिक दक्षिणा"
  },
  "chopper": {
    "english": "Chopper",
    "bishnupriya": "দা",
    "bangla": "দা",
    "hindi": "दात"
  },
  "to_reap": {
    "english": "To reap",
    "bishnupriya": "দা-",
    "bangla": "কাটা",
    "hindi": "काटना"
  },
  "headman_in_dice_game": {
    "english": "Headman in dice game",
    "bishnupriya": "দাইকাক",
    "bangla": "পাশা খেলার মাথা",
    "hindi": "पासा खेल का सरदार"
  },
  "bet_stake": {
    "english": "Bet / stake",
    "bishnupriya": "দাও",
    "bangla": "বাজি",
    "hindi": "दाँव"
  },
  "stain_mark": {
    "english": "Stain / mark",
    "bishnupriya": "ডাগ",
    "bangla": "দাগ",
    "hindi": "दाग"
  },
  "to_mark": {
    "english": "To mark",
    "bishnupriya": "ডাগা-",
    "bangla": "দাগ দেওয়া",
    "hindi": "निशान लगाना"
  },
  "spotted": {
    "english": "Spotted",
    "bishnupriya": "ডাগি",
    "bangla": "দাগড়াদড়ি",
    "hindi": "धब्बेदार"
  },
  "grandmother": {
    "english": "Grandmother",
    "bishnupriya": "ডাঙ্গা",
    "bangla": "দিদিমা",
    "hindi": "दादी"
  },
  "riot": {
    "english": "Riot",
    "bishnupriya": "ডাঙ্গা",
    "bangla": "দাঙ্গা",
    "hindi": "दंगा"
  },
  "tooth": {
    "english": "Tooth",
    "bishnupriya": "দাঁত",
    "bangla": "দাঁত",
    "hindi": "दांत"
  },
  "to_grow_teeth": {
    "english": "To grow teeth",
    "bishnupriya": "দাঁত-",
    "bangla": "দাঁত গজানো",
    "hindi": "दांत निकलना"
  },
  "tusk": {
    "english": "Tusk",
    "bishnupriya": "দাতাল",
    "bangla": "দাঁতাল",
    "hindi": "दांत"
  },
  "elephant": {
    "english": "Elephant",
    "bishnupriya": "দাতুয়াল",
    "bangla": "হাতি",
    "hindi": "हाथी"
  },
  "elder_brother": {
    "english": "Elder brother",
    "bishnupriya": "দাদা",
    "bangla": "দাদা",
    "hindi": "दादा"
  },
  "ring_worm": {
    "english": "Ring-worm",
    "bishnupriya": "দাদু",
    "bangla": "দাদ",
    "hindi": "दाद"
  },
  "dice_board": {
    "english": "Dice board",
    "bishnupriya": "ডান",
    "bangla": "পাশার তক্তা",
    "hindi": "पासे का तख्ता"
  },
  "grain": {
    "english": "Grain",
    "bishnupriya": "ডানা",
    "bangla": "শস্য",
    "hindi": "अनाज"
  },
  "to_oppress_subdue": {
    "english": "To oppress / subdue",
    "bishnupriya": "ডাবা-",
    "bangla": "চাপা / দমন করা",
    "hindi": "दबाना / कुचलना"
  },
  "demand": {
    "english": "Demand",
    "bishnupriya": "ডাবি",
    "bangla": "দাবি",
    "hindi": "माँग"
  },
  "price": {
    "english": "Price",
    "bishnupriya": "ডাম",
    "bangla": "দাম",
    "hindi": "दाम"
  },
  "young_bullock": {
    "english": "Young bullock",
    "bishnupriya": "ডামা",
    "bangla": "ছোটো ষাঁড়",
    "hindi": "छोटा सांड"
  },
  "bridegroom": {
    "english": "Bridegroom",
    "bishnupriya": "ডামান",
    "bangla": "বর",
    "hindi": "दूल्हा"
  },
  "costly": {
    "english": "Costly",
    "bishnupriya": "ডামি",
    "bangla": "দামি",
    "hindi": "महँगा"
  },
  "pie": {
    "english": "Pie",
    "bishnupriya": "ডাম্বুরি",
    "bangla": "পায়েস",
    "hindi": "पायस"
  },
  "responsibility": {
    "english": "Responsibility",
    "bishnupriya": "দায়া",
    "bangla": "দায়িত্ব",
    "hindi": "ज़िम्मेदारी"
  },
  "attack": {
    "english": "Attack",
    "bishnupriya": "ডাউ",
    "bangla": "আক্রমণ",
    "hindi": "हमला"
  },
  "owner_performer_suffix": {
    "english": "Owner / performer (suffix)",
    "bishnupriya": "-দার",
    "bangla": "মালিক / কর্তা (প্রত্যয়)",
    "hindi": "मालिक / करने वाला (प्रत्यय)"
  },
  "long_tall": {
    "english": "Long, tall",
    "bishnupriya": "ডারা-ডিগালা",
    "bangla": "লম্বা",
    "hindi": "लंबा"
  },
  "profession_suffix": {
    "english": "Profession (suffix)",
    "bishnupriya": "-দারি",
    "bangla": "পেশা (প্রত্যয়)",
    "hindi": "पेशा (प्रत्यय)"
  },
  "edge_of_portico": {
    "english": "Edge of portico",
    "bishnupriya": "ডারি",
    "bangla": "বারান্দার কিনারা",
    "hindi": "बरामदे का किनारा"
  },
  "sub_inspector": {
    "english": "Sub-inspector",
    "bishnupriya": "ডারোগা",
    "bangla": "দারোগা",
    "hindi": "दारोगा"
  },
  "fuel": {
    "english": "Fuel",
    "bishnupriya": "ডারাউ",
    "bangla": "জ্বালানি",
    "hindi": "ईंधन"
  },
  "to_stand": {
    "english": "To stand",
    "bishnupriya": "ডারা-",
    "bangla": "দাঁড়ানো",
    "hindi": "खड़ा होना"
  },
  "array_line": {
    "english": "Array / line",
    "bishnupriya": "ডারি",
    "bangla": "সারি",
    "hindi": "कतार"
  },
  "over_heated_rice_cake": {
    "english": "Over-heated rice cake",
    "bishnupriya": "ডারি",
    "bangla": "গরম ভাতের রুটি",
    "hindi": "गर्म चावल की रोटी"
  },
  "beard": {
    "english": "Beard",
    "bishnupriya": "ডারি",
    "bangla": "দাড়ি",
    "hindi": "दाढ़ी"
  },
  "broker": {
    "english": "Broker",
    "bishnupriya": "ডাল্লাল",
    "bangla": "দালাল",
    "hindi": "दलाल"
  },
  "earthen_plate": {
    "english": "Earthen plate",
    "bishnupriya": "ডালিয়া",
    "bangla": "মাটির থালা",
    "hindi": "मिट्टी की थाली"
  },
  "spoke_of_umbrella": {
    "english": "Spoke of umbrella",
    "bishnupriya": "ডাসা",
    "bangla": "ছাতার তার",
    "hindi": "छाते की तीलियाँ"
  },
  "purging": {
    "english": "Purging",
    "bishnupriya": "ডাস্তা",
    "bangla": "পায়খানা",
    "hindi": "दस्त"
  },
  "evil_glance": {
    "english": "Evil glance",
    "bishnupriya": "ডিক",
    "bangla": "টেরা চোখ",
    "hindi": "बुरी नज़र"
  },
  "disturbance": {
    "english": "Disturbance",
    "bishnupriya": "ডিকডারি",
    "bangla": "গোলমাল",
    "hindi": "गड़बड़"
  },
  "side": {
    "english": "Side",
    "bishnupriya": "ডিগ",
    "bangla": "দিক",
    "hindi": "दिशा"
  },
  "discrimination": {
    "english": "Discrimination",
    "bishnupriya": "ডিগবিডিগ",
    "bangla": "ঠিক-ভুল বিচার",
    "hindi": "सही-गलत का भेद"
  },
  "evil_effect_disease": {
    "english": "Evil effect / disease",
    "bishnupriya": "ডিত",
    "bangla": "খারাপ প্রভাব",
    "hindi": "बुरा असर"
  },
  "elder_sister": {
    "english": "Elder sister",
    "bishnupriya": "ডিডি",
    "bangla": "দিদি",
    "hindi": "दीदी"
  },
  "day_sky": {
    "english": "Day / sky",
    "bishnupriya": "ডিনা",
    "bangla": "দিন / আকাশ",
    "hindi": "दिन / आकाश"
  },
  "village_feast": {
    "english": "Village feast",
    "bishnupriya": "ডিবাসা",
    "bangla": "গ্রাম্য উৎসব",
    "hindi": "गाँव का त्योहार"
  },
  "day_night": {
    "english": "Day & night",
    "bishnupriya": "ডিবানিসি",
    "bangla": "দিনরাত",
    "hindi": "दिन-रात"
  },
  "to_send": {
    "english": "To send",
    "bishnupriya": "ডিয়াপেঠা-",
    "bangla": "পাঠানো",
    "hindi": "भेजना"
  },
  "matchstick": {
    "english": "Matchstick",
    "bishnupriya": "ডিয়াশাল",
    "bangla": "দেশলাই",
    "hindi": "माचिस"
  },
  "heart": {
    "english": "Heart",
    "bishnupriya": "ডিল",
    "bangla": "হৃদয়",
    "hindi": "दिल"
  },
  "direction": {
    "english": "Direction",
    "bishnupriya": "ডিসা",
    "bangla": "দিক",
    "hindi": "दिशा"
  },
  "aimless": {
    "english": "Aimless",
    "bishnupriya": "ডিসাহারা",
    "bangla": "লক্ষ্যহীন",
    "hindi": "बिना निशाना"
  },
  "quire": {
    "english": "Quire",
    "bishnupriya": "ডিস্তা",
    "bangla": "কাগজের গোছা",
    "hindi": "रीम"
  },
  "length": {
    "english": "Length",
    "bishnupriya": "ডিঘ",
    "bangla": "লম্বাই",
    "hindi": "लंबाई"
  },
  "long_tall_2": {
    "english": "Long, tall",
    "bishnupriya": "ডিঘাল",
    "bangla": "লম্বা",
    "hindi": "लंबा"
  },
  "big_tank": {
    "english": "Big tank",
    "bishnupriya": "ডিঘি",
    "bangla": "পুকুর",
    "hindi": "तालाब"
  },
  "dewali_festival": {
    "english": "Dewali festival",
    "bishnupriya": "ডিপানজি / ডিপান্ডি",
    "bangla": "দীপাবলি",
    "hindi": "दीवाली"
  },
  "two": {
    "english": "Two",
    "bishnupriya": "ডু",
    "bangla": "দুই",
    "hindi": "दो"
  },
  "sorrow": {
    "english": "Sorrow",
    "bishnupriya": "ডুক",
    "bangla": "দুঃখ",
    "hindi": "दुख"
  },
  "shop": {
    "english": "Shop",
    "bishnupriya": "ডুকান",
    "bangla": "দোকান",
    "hindi": "दुकान"
  },
  "shopkeeper": {
    "english": "Shopkeeper",
    "bishnupriya": "ডুকানদার",
    "bangla": "দোকানদার",
    "hindi": "दुकानदार"
  },
  "grass": {
    "english": "Grass",
    "bishnupriya": "ডুকঘাস",
    "bangla": "এক ধরনের ঘাস",
    "hindi": "एक तरह की घास"
  },
  "sound_beating": {
    "english": "Sound beating",
    "bishnupriya": "ডুকচরণ",
    "bangla": "জোরে পেটানো",
    "hindi": "ज़ोर से पिटाई"
  },
  "double": {
    "english": "Double",
    "bishnupriya": "ডুনা",
    "bangla": "দ্বিগুণ",
    "hindi": "दोगुना"
  },
  "earth": {
    "english": "Earth",
    "bishnupriya": "ডুনিয়া",
    "bangla": "পৃথিবী",
    "hindi": "दुनिया"
  },
  "container": {
    "english": "Container",
    "bishnupriya": "ডুবিয়া",
    "bangla": "পাত্র",
    "hindi": "बर्तन"
  },
  "two_month_paddy": {
    "english": "Two-month paddy",
    "bishnupriya": "ডুমেই",
    "bangla": "দু'মাসিয়া ধান",
    "hindi": "दो महीने का चावल"
  },
  "fig_tree": {
    "english": "Fig tree",
    "bishnupriya": "ডুম্বুরু",
    "bangla": "ডুমুর",
    "hindi": "अंजीर"
  },
  "open_clear": {
    "english": "Open / clear",
    "bishnupriya": "ডুয়া",
    "bangla": "খোলা",
    "hindi": "खुला"
  },
  "ink_pot": {
    "english": "Ink-pot",
    "bishnupriya": "ডুয়াত",
    "bangla": "দোয়াত",
    "hindi": "दवात"
  },
  "door": {
    "english": "Door",
    "bishnupriya": "ডুয়ার",
    "bangla": "দরজা",
    "hindi": "दरवाज़ा"
  },
  "door_keeper": {
    "english": "Door-keeper",
    "bishnupriya": "ডুয়ারি",
    "bangla": "দরোয়ান",
    "hindi": "दरबान"
  },
  "thread": {
    "english": "Thread",
    "bishnupriya": "ডুর",
    "bangla": "সুতো",
    "hindi": "धागा"
  },
  "striped_cloth": {
    "english": "Striped cloth",
    "bishnupriya": "ডুরিয়া",
    "bangla": "ডোরাকাটা কাপড়",
    "hindi": "धारीदार कपड़ा"
  },
  "repair": {
    "english": "Repair",
    "bishnupriya": "ডুরুজ",
    "bangla": "মেরামত",
    "hindi": "मरम्मत"
  },
  "ear_ring": {
    "english": "Ear-ring",
    "bishnupriya": "ডুল",
    "bangla": "দুল",
    "hindi": "झुमका"
  },
  "bridge": {
    "english": "Bridge",
    "bishnupriya": "ডুলান",
    "bangla": "সাঁকো",
    "hindi": "पुल"
  },
  "broker_2": {
    "english": "Broker",
    "bishnupriya": "ডুলাল",
    "bangla": "দালাল",
    "hindi": "दलाल"
  },
  "leech": {
    "english": "Leech",
    "bishnupriya": "ডুলি-পাক",
    "bangla": "জোঁক",
    "hindi": "जोंक"
  },
  "miscreant": {
    "english": "Miscreant",
    "bishnupriya": "ডুসমান",
    "bangla": "দুষ্কৃতী",
    "hindi": "बदमाश"
  },
  "hostility": {
    "english": "Hostility",
    "bishnupriya": "ডুসমানি",
    "bangla": "শত্রুতা",
    "hindi": "दुश्मनी"
  },
  "to_blame": {
    "english": "To blame",
    "bishnupriya": "ডুস-",
    "bangla": "দোষারোপ করা",
    "hindi": "दोष देना"
  },
  "woolen_towel": {
    "english": "Woolen towel",
    "bishnupriya": "ডুসা",
    "bangla": "উলের তোয়ালে",
    "hindi": "ऊनी तौलिया"
  },
  "different": {
    "english": "Different",
    "bishnupriya": "ডুসারা",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "to_strike_beat": {
    "english": "To strike / beat",
    "bishnupriya": "ডুহ-",
    "bangla": "আঘাত করা",
    "hindi": "मारना"
  },
  "double_2": {
    "english": "Double",
    "bishnupriya": "ডুহারা",
    "bangla": "দ্বিগুণ",
    "hindi": "दोगुना"
  },
  "compressed": {
    "english": "Compressed",
    "bishnupriya": "ডুহিল",
    "bangla": "চাপা",
    "hindi": "दबा हुआ"
  },
  "to_stand_2": {
    "english": "To stand",
    "bishnupriya": "ডোরা-",
    "bangla": "দাঁড়ানো",
    "hindi": "खड़ा होना"
  },
  "god": {
    "english": "God",
    "bishnupriya": "ডৌ",
    "bangla": "দেবতা",
    "hindi": "देवता"
  },
  "harvest": {
    "english": "Harvest",
    "bishnupriya": "ডৌয়া",
    "bangla": "ফসল কাটা",
    "hindi": "फसल कटाई"
  },
  "haunted_strange": {
    "english": "Haunted / strange",
    "bishnupriya": "ডৌয়ালা",
    "bangla": "ভূতের বাসা / অদ্ভুত",
    "hindi": "भूतिया / अजीब"
  },
  "race_2": {
    "english": "Race",
    "bishnupriya": "ডৌর",
    "bangla": "দৌড়",
    "hindi": "दौड़"
  },
  "wealth": {
    "english": "Wealth",
    "bishnupriya": "ডৌলত",
    "bangla": "সম্পদ",
    "hindi": "दौलत"
  },
  "woolen_towel": {
    "english": "Woolen towel",
    "bishnupriya": "দুসা",
    "bangla": "উলের তোয়ালে",
    "hindi": "ऊनी तौलिया"
  },
  "different": {
    "english": "Different",
    "bishnupriya": "দুসারা",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "to_strike_beat": {
    "english": "To strike / beat",
    "bishnupriya": "ডুহ-",
    "bangla": "মারা",
    "hindi": "मारना"
  },
  "beat_stroke": {
    "english": "Beat, stroke",
    "bishnupriya": "ডুহান",
    "bangla": "প্রহার",
    "hindi": "वार"
  },
  "to_feel_pain": {
    "english": "To feel pain",
    "bishnupriya": "ডুহা-",
    "bangla": "ব্যথা পাওয়া",
    "hindi": "दर्द होना"
  },
  "striking_feeling_pain_gerund": {
    "english": "Striking / feeling pain (gerund)",
    "bishnupriya": "ডুহানি",
    "bangla": "মারা / ব্যথা পাওয়া",
    "hindi": "मारने / दर्द होने की क्रिया"
  },
  "door_alt": {
    "english": "Door (alt.)",
    "bishnupriya": "ডুহার",
    "bangla": "দরজা",
    "hindi": "दरवाज़ा"
  },
  "double_doubly": {
    "english": "Double / doubly",
    "bishnupriya": "ডুহারা",
    "bangla": "দ্বিগুণ",
    "hindi": "दोगुना"
  },
  "compressed_short": {
    "english": "Compressed, short",
    "bishnupriya": "ডুহিল / ডুহিলা",
    "bangla": "চাপা / খাটো",
    "hindi": "दबा हुआ / छोटा"
  },
  "instrument_for_striking": {
    "english": "Instrument for striking",
    "bishnupriya": "ডু হুনি",
    "bangla": "আঘাতের যন্ত্র",
    "hindi": "मारने का औज़ार"
  },
  "word_to_drive_away_dog": {
    "english": "Word to drive away dog",
    "bishnupriya": "ডোর",
    "bangla": "কুকুর তাড়ানোর শব্দ",
    "hindi": "कुत्ता भगाने की आवाज़"
  },
  "distant_distance": {
    "english": "Distant / distance",
    "bishnupriya": "ডোরেই",
    "bangla": "দূর / দূরত্ব",
    "hindi": "दूर / दूरी"
  },
  "direction_suffix": {
    "english": "Direction suffix",
    "bishnupriya": "-দে",
    "bangla": "দিক নির্দেশক প্রত্যয়",
    "hindi": "दिशा सूचक प्रत्यय"
  },
  "to_give": {
    "english": "To give",
    "bishnupriya": "দে-",
    "bangla": "দেওয়া",
    "hindi": "देना"
  },
  "torch": {
    "english": "Torch",
    "bishnupriya": "ডেউটি",
    "bangla": "মশাল",
    "hindi": "मशाल"
  },
  "to_see": {
    "english": "To see",
    "bishnupriya": "দেখ-",
    "bangla": "দেখা",
    "hindi": "देखना"
  },
  "the_act_of_seeing": {
    "english": "The act of seeing",
    "bishnupriya": "দেখা",
    "bangla": "দেখার ক্রিয়া",
    "hindi": "देखने की क्रिया"
  },
  "to_show": {
    "english": "To show",
    "bishnupriya": "দেখা-",
    "bangla": "দেখানো",
    "hindi": "दिखाना"
  },
  "looking_at_each_other": {
    "english": "Looking at each other",
    "bishnupriya": "দেখাদেখি",
    "bangla": "পরস্পর দেখাদেখি",
    "hindi": "एक-दूसरे को देखना"
  },
  "seeing_showing_gerund": {
    "english": "Seeing / showing (gerund)",
    "bishnupriya": "দেখানি",
    "bangla": "দেখা / দেখানো",
    "hindi": "देखने / दिखाने की क्रिया"
  },
  "to_show_causative": {
    "english": "To show (causative)",
    "bishnupriya": "দেখুয়া-",
    "bangla": "দেখানো",
    "hindi": "दिखाना"
  },
  "plentiful_abundant": {
    "english": "Plentiful, abundant",
    "bishnupriya": "ডেদার",
    "bangla": "প্রচুর",
    "hindi": "बहुत सारा"
  },
  "giving": {
    "english": "Giving",
    "bishnupriya": "দেনা",
    "bangla": "দেওয়া",
    "hindi": "देना"
  },
  "debt": {
    "english": "Debt",
    "bishnupriya": "দেনা",
    "bangla": "ঋণ",
    "hindi": "कर्ज़"
  },
  "god": {
    "english": "God",
    "bishnupriya": "ডেবা",
    "bangla": "দেবতা",
    "hindi": "देव"
  },
  "gift_of_land_to_gods": {
    "english": "Gift of land to gods",
    "bishnupriya": "ডেবোত্তর",
    "bangla": "দেবোত্তর",
    "hindi": "देवोत्तर"
  },
  "vanity": {
    "english": "Vanity",
    "bishnupriya": "ডেমাক",
    "bangla": "অহংকার",
    "hindi": "घमंड"
  },
  "god_2": {
    "english": "God",
    "bishnupriya": "ডেউ",
    "bangla": "দেবতা",
    "hindi": "देव"
  },
  "civil": {
    "english": "Civil",
    "bishnupriya": "ডেওয়ানি",
    "bangla": "দেওয়ানি",
    "hindi": "दीवानी"
  },
  "wall": {
    "english": "Wall",
    "bishnupriya": "ডেওয়াল",
    "bangla": "দেওয়াল",
    "hindi": "दीवार"
  },
  "curved_slanting": {
    "english": "Curved / slanting",
    "bishnupriya": "ডেরি",
    "bangla": "বাঁকা / তির্যক",
    "hindi": "टेढ़ा / तिरछा"
  },
  "migrating_to_other_land": {
    "english": "Migrating to other land",
    "bishnupriya": "ডেশান্তরী",
    "bangla": "দেশান্তরী",
    "hindi": "देशांतरगामी"
  },
  "country_made": {
    "english": "Country-made",
    "bishnupriya": "ডেসি",
    "bangla": "দেশি",
    "hindi": "देसी"
  },
  "husbands_younger_brother": {
    "english": "Husband's younger brother",
    "bishnupriya": "ডেহারক",
    "bangla": "দেওর",
    "hindi": "देवर"
  },
  "body": {
    "english": "Body",
    "bishnupriya": "ডেহা",
    "bangla": "শরীর",
    "hindi": "शरीर"
  },
  "god_imp": {
    "english": "God / imp",
    "bishnupriya": "ডৌ",
    "bangla": "দেবতা",
    "hindi": "देव"
  },
  "flashing_of_lightning": {
    "english": "Flashing of lightning",
    "bishnupriya": "ডৌঝিলকা-",
    "bangla": "বিদ্যুতের ঝলক",
    "hindi": "बिजली की चमक"
  },
  "gods_imps": {
    "english": "Gods / imps",
    "bishnupriya": "ডৌ-ডুক",
    "bangla": "দেবতা / ভূত",
    "hindi": "देवता / भूत"
  },
  "tomato": {
    "english": "Tomato",
    "bishnupriya": "ডৌবেইনান",
    "bangla": "টমেটো",
    "hindi": "टमाटर"
  },
  "harvest": {
    "english": "Harvest",
    "bishnupriya": "ডৌয়া",
    "bangla": "ফসল কাটা",
    "hindi": "फसल कटाई"
  },
  "haunted_strange": {
    "english": "Haunted / strange",
    "bishnupriya": "ডৌয়ালা",
    "bangla": "ভূতের বাসা / অদ্ভুত",
    "hindi": "भूतिया / अजीब"
  },
  "race": {
    "english": "Race",
    "bishnupriya": "ডৌর",
    "bangla": "দৌড়",
    "hindi": "दौड़"
  },
  "wealth": {
    "english": "Wealth",
    "bishnupriya": "ডৌলত",
    "bangla": "সম্পদ",
    "hindi": "दौलत"
  },
  "to_wash": {
    "english": "To wash",
    "bishnupriya": "ধা-",
    "bangla": "ধোয়া",
    "hindi": "धोना"
  },
  "a_kind_of_flower_loudspeaker": {
    "english": "A kind of flower / loudspeaker",
    "bishnupriya": "ধাতুরা",
    "bangla": "ধুতুরা / লাউডস্পিকার",
    "hindi": "धतूरा / लाउडस्पीकर"
  },
  "washing": {
    "english": "Washing",
    "bishnupriya": "ধানা",
    "bangla": "ধোয়া",
    "hindi": "धोना"
  },
  "bow": {
    "english": "Bow",
    "bishnupriya": "ধানুক",
    "bangla": "ধনুক",
    "hindi": "धनुष"
  },
  "white_cow": {
    "english": "White cow",
    "bishnupriya": "ধাবল্ট",
    "bangla": "সাদা গোরু",
    "hindi": "सफेद गाय"
  },
  "washerman_woman": {
    "english": "Washerman / woman",
    "bishnupriya": "ধাবা / ধাবি",
    "bangla": "ধোপা / ধোপানি",
    "hindi": "धोबी / धोबिन"
  },
  "abuse_scold": {
    "english": "Abuse, scold",
    "bishnupriya": "ধামক",
    "bangla": "গালাগাল",
    "hindi": "डाँट"
  },
  "to_scold": {
    "english": "To scold",
    "bishnupriya": "ধামকা-",
    "bangla": "গালাগাল দেওয়া",
    "hindi": "डाँटना"
  },
  "to_hold_catch": {
    "english": "To hold / catch",
    "bishnupriya": "ধার-",
    "bangla": "ধরা",
    "hindi": "पकड़ना"
  },
  "manner": {
    "english": "Manner",
    "bishnupriya": "ধারণ",
    "bangla": "ধরন",
    "hindi": "तरीका"
  },
  "a_kind_of_snake": {
    "english": "A kind of snake",
    "bishnupriya": "ধারা",
    "bangla": "সাপ",
    "hindi": "साँप"
  },
  "capture": {
    "english": "Capture",
    "bishnupriya": "ধারা",
    "bangla": "ধরা",
    "hindi": "पकड़"
  },
  "vanity_2": {
    "english": "Vanity",
    "bishnupriya": "ডৌলতি",
    "bangla": "অহংকার",
    "hindi": "घमंड"
  },
  "the_gods": {
    "english": "The gods",
    "bishnupriya": "ডৌলখা-ডৌলিসিন",
    "bangla": "দেবতা",
    "hindi": "देवता"
  },
  "two": {
    "english": "Two",
    "bishnupriya": "ডুই",
    "bangla": "দুই",
    "hindi": "दो"
  },
  "noon": {
    "english": "Noon",
    "bishnupriya": "ডুইপার",
    "bangla": "দুপুর",
    "hindi": "दोपहर"
  },
  "two_sides": {
    "english": "Two sides",
    "bishnupriya": "ডুইবারা",
    "bangla": "দুই দিক",
    "hindi": "दो तरफ"
  },
  "partiality": {
    "english": "Partiality",
    "bishnupriya": "ডুইধারা",
    "bangla": "পক্ষপাত",
    "hindi": "पक्षपात"
  },
  "twice": {
    "english": "Twice",
    "bishnupriya": "দুইহারা",
    "bangla": "দু'বার",
    "hindi": "दो बार"
  },
  "captured": {
    "english": "Captured",
    "bishnupriya": "ধা রা",
    "bangla": "ধরা পড়া",
    "hindi": "पकड़ा गया"
  },
  "mutual_fighting_holding": {
    "english": "Mutual fighting / holding",
    "bishnupriya": "ধা রাধারি",
    "bangla": "পরস্পর ধরাধরি",
    "hindi": "आपस में पकड़ना"
  },
  "holding_catching_gerund": {
    "english": "Holding / catching (gerund)",
    "bishnupriya": "ধা রানি",
    "bangla": "ধরার ক্রিয়া",
    "hindi": "पकड़ने की क्रिया"
  },
  "handle": {
    "english": "Handle",
    "bishnupriya": "ধা রুনি",
    "bangla": "হাতল",
    "hindi": "हैंडल"
  },
  "religious_minded": {
    "english": "Religious-minded",
    "bishnupriya": "ধর্মবন্ত",
    "bangla": "ধার্মিক",
    "hindi": "धार्मिक"
  },
  "tremor_quake": {
    "english": "Tremor, quake",
    "bishnupriya": "ধারফার",
    "bangla": "কম্পন",
    "hindi": "कंपन"
  },
  "waist_band": {
    "english": "Waist-band",
    "bishnupriya": "ধারা",
    "bangla": "কোমরবন্ধ",
    "hindi": "कमरबंद"
  },
  "white": {
    "english": "White",
    "bishnupriya": "ধলা",
    "bangla": "সাদা",
    "hindi": "सफेद"
  },
  "whitened": {
    "english": "Whitened",
    "bishnupriya": "ধলায়া",
    "bangla": "সাদা করা",
    "hindi": "सफेद किया हुआ"
  },
  "lightly_white": {
    "english": "Lightly white",
    "bishnupriya": "ধলগিলা",
    "bangla": "হালকা সাদা",
    "hindi": "हल्का सफेद"
  },
  "push": {
    "english": "Push",
    "bishnupriya": "ধাক্কা",
    "bangla": "ধাক্কা",
    "hindi": "धक्का"
  },
  "to_push": {
    "english": "To push",
    "bishnupriya": "ধাক্কা-",
    "bangla": "ধাক্কা দেওয়া",
    "hindi": "धक्का देना"
  },
  "paddy": {
    "english": "Paddy",
    "bishnupriya": "ধান",
    "bangla": "ধান",
    "hindi": "चावल"
  },
  "to_slide_slip_off": {
    "english": "To slide / slip off",
    "bishnupriya": "পিছলা-",
    "bangla": "পিছলে যাওয়া",
    "hindi": "फिसलना"
  },
  "sliding_gerund": {
    "english": "Sliding (gerund)",
    "bishnupriya": "পিছলানি",
    "bangla": "পিছলানো",
    "hindi": "फिसलने की क्रिया"
  },
  "cage": {
    "english": "Cage",
    "bishnupriya": "পিঞ্জুরা",
    "bangla": "খাঁচা",
    "hindi": "पिंजरा"
  },
  "to_beat": {
    "english": "To beat",
    "bishnupriya": "পিট-",
    "bangla": "পেটানো",
    "hindi": "पीटना"
  },
  "to_hammer_beat": {
    "english": "To hammer / beat",
    "bishnupriya": "পিতা-",
    "bangla": "হাতুড়ি মারা / পেটানো",
    "hindi": "हथौड़ा मारना / पीटना"
  },
  "beating_hammering_gerund": {
    "english": "Beating / hammering (gerund)",
    "bishnupriya": "পিতানি",
    "bangla": "পেটানো / হাতুড়ি মারা",
    "hindi": "पीटने / हथौड़ा मारने की क्रिया"
  },
  "mutual_beating": {
    "english": "Mutual beating",
    "bishnupriya": "পিতাপিতি",
    "bangla": "পরস্পর পেটানো",
    "hindi": "आपस में मारपीट"
  },
  "short_statured": {
    "english": "Short-statured",
    "bishnupriya": "পিটপিটা",
    "bangla": "খাটো",
    "hindi": "बौना"
  },
  "cake": {
    "english": "Cake",
    "bishnupriya": "পিঠা",
    "bangla": "পিঠে",
    "hindi": "पिठ्ठा"
  },
  "cake_2": {
    "english": "Cake",
    "bishnupriya": "পিঠালি",
    "bangla": "পিঠে",
    "hindi": "पिठ्ठा"
  },
  "back": {
    "english": "Back",
    "bishnupriya": "পিঠি",
    "bangla": "পিঠ",
    "hindi": "पीठ"
  },
  "gall_spittle": {
    "english": "Gall / spittle",
    "bishnupriya": "পিত",
    "bangla": "পিত্ত / থুতু",
    "hindi": "पित्त / थूक"
  },
  "son": {
    "english": "Son",
    "bishnupriya": "পিতাক",
    "bangla": "ছেলে",
    "hindi": "बेटा"
  },
  "brass": {
    "english": "Brass",
    "bishnupriya": "পিতল",
    "bangla": "পিতল",
    "hindi": "पीतल"
  },
  "brass_2": {
    "english": "Brass",
    "bishnupriya": "পিতারেই",
    "bangla": "পিতল",
    "hindi": "पीतल"
  },
  "very_small": {
    "english": "Very small",
    "bishnupriya": "পিত্তুকান / পিত্রুকাং",
    "bangla": "খুব ছোটো",
    "hindi": "बहुत छोटा"
  },
  "to_put_on": {
    "english": "To put on",
    "bishnupriya": "পিড-",
    "bangla": "পরা",
    "hindi": "पहनना"
  },
  "putting_on_gerund": {
    "english": "Putting on (gerund)",
    "bishnupriya": "পিডানি",
    "bangla": "পরানো",
    "hindi": "पहनाने की क्रिया"
  },
  "drinking": {
    "english": "Drinking",
    "bishnupriya": "পিনা",
    "bangla": "পান করা",
    "hindi": "पीना"
  },
  "drinking_gerund": {
    "english": "Drinking (gerund)",
    "bishnupriya": "পিনি",
    "bangla": "পান করা",
    "hindi": "पीने की क्रिया"
  },
  "ball_of_rice": {
    "english": "Ball of rice",
    "bishnupriya": "পিণ্ডা",
    "bangla": "পিণ্ড",
    "hindi": "पिंड"
  },
  "dressing": {
    "english": "Dressing",
    "bishnupriya": "পিণ্ডান",
    "bangla": "সাজানো",
    "hindi": "सजाना"
  },
  "drizzling": {
    "english": "Drizzling",
    "bishnupriya": "পিনপিনি",
    "bangla": "ঝিরিঝিরি বৃষ্টি",
    "hindi": "बूँदाबाँदी"
  },
  "fig_tree": {
    "english": "Fig tree",
    "bishnupriya": "পিপ্পল",
    "bangla": "পিপ্পল",
    "hindi": "पीपल"
  },
  "cask": {
    "english": "Cask",
    "bishnupriya": "পিপা",
    "bangla": "পিপা",
    "hindi": "पीपा"
  },
  "eldest_grandson": {
    "english": "Eldest grandson",
    "bishnupriya": "পিপা",
    "bangla": "বড়ো নাতি",
    "hindi": "सबसे बड़ा पोता"
  },
  "onion": {
    "english": "Onion",
    "bishnupriya": "পিয়াজ",
    "bangla": "পেঁয়াজ",
    "hindi": "प्याज़"
  },
  "joyful_joyfulness": {
    "english": "Joyful / joyfulness",
    "bishnupriya": "পিয়াম",
    "bangla": "আনন্দিত / আনন্দ",
    "hindi": "खुश / खुशी"
  },
  "husband_of_father_sister": {
    "english": "Husband of father’s sister",
    "bishnupriya": "পিয়া",
    "bangla": "পিসতুতো ভাই",
    "hindi": "फूफा"
  },
  "father_sister": {
    "english": "Father’s sister",
    "bishnupriya": "পিয়েই",
    "bangla": "পিসি",
    "hindi": "बुआ"
  },
  "groin": {
    "english": "Groin",
    "bishnupriya": "পিরি / পিরেই",
    "bangla": "কুঁচকি",
    "hindi": "कमर का जोड़"
  },
  "earth": {
    "english": "Earth",
    "bishnupriya": "পৃথিম্বী",
    "bangla": "পৃথিবী",
    "hindi": "पृथ्वी"
  },
  "seat": {
    "english": "Seat",
    "bishnupriya": "পিরা / পিরি",
    "bangla": "আসন",
    "hindi": "आसन"
  },
  "yellowish": {
    "english": "Yellowish",
    "bishnupriya": "পিলা",
    "bangla": "হলুদাভ",
    "hindi": "पीला"
  },
  "flickering_blinking": {
    "english": "Flickering / blinking",
    "bishnupriya": "পিলিকপিলিক",
    "bangla": "ঝিকমিক / চোখের পাতা পড়া",
    "hindi": "टिमटिमाना / पलक झपकाना"
  },
  "weaver_bird": {
    "english": "Weaver bird",
    "bishnupriya": "পিল্লা",
    "bangla": "বাবুই পাখি",
    "hindi": "बया"
  },
  "to_be_pounded": {
    "english": "To be pounded",
    "bishnupriya": "পিস-",
    "bangla": "পেষাই হওয়া",
    "hindi": "पीसना"
  },
  "to_pound": {
    "english": "To pound",
    "bishnupriya": "পিস-",
    "bangla": "পেষাই করা",
    "hindi": "पीसना"
  },
  "act_of_grinding": {
    "english": "The act of grinding",
    "bishnupriya": "পিসান / পিসা",
    "bangla": "পেষাই",
    "hindi": "पीसना"
  },
  "muslim_saint": {
    "english": "Muslim saint",
    "bishnupriya": "পীর",
    "bangla": "পীর",
    "hindi": "पीर"
  },
  "to_grind_oppress": {
    "english": "To grind / oppress",
    "bishnupriya": "পীর-",
    "bangla": "পেষাই / অত্যাচার করা",
    "hindi": "पीसना / सताना"
  },
  "dancing_gerund": {
    "english": "Dancing (gerund)",
    "bishnupriya": "নাছানি",
    "bangla": "নাচার ক্রিয়া",
    "hindi": "नाचने की क्रिया"
  },
  "confusion_bewilderment": {
    "english": "Confusion, bewilderment",
    "bishnupriya": "ধান্ধা",
    "bangla": "বিভ্রান্তি",
    "hindi": "उलझन"
  },
  "race": {
    "english": "Race",
    "bishnupriya": "ধাপ",
    "bangla": "দৌড়",
    "hindi": "दौड़"
  },
  "nature_habit": {
    "english": "Nature, habit",
    "bishnupriya": "ধাম",
    "bangla": "স্বভাব",
    "hindi": "स्वभाव"
  },
  "concealment_hushing_up": {
    "english": "Concealment, hushing up",
    "bishnupriya": "ধামাচাপা",
    "bangla": "লুকোচুরি",
    "hindi": "छुपाना"
  },
  "attack": {
    "english": "Attack",
    "bishnupriya": "ধাওয়া",
    "bangla": "আক্রমণ",
    "hindi": "हमला"
  },
  "debt_loan": {
    "english": "Debt, loan",
    "bishnupriya": "ধার",
    "bangla": "ঋণ",
    "hindi": "कर्ज़"
  },
  "side_edge_sharpness": {
    "english": "Side / edge / sharpness",
    "bishnupriya": "ধার",
    "bangla": "ধার / কিনারা / তীক্ষ্ণতা",
    "hindi": "किनारा / धार / तीक्ष्णता"
  },
  "side": {
    "english": "Side",
    "bishnupriya": "ধারা",
    "bangla": "পাশ",
    "hindi": "किनारा"
  },
  "nature_2": {
    "english": "Nature",
    "bishnupriya": "ধারা",
    "bangla": "স্বভাব",
    "hindi": "स्वभाव"
  },
  "descendant": {
    "english": "Descendant",
    "bishnupriya": "ধারা",
    "bangla": "বংশধর",
    "hindi": "वंशज"
  },
  "to_make_indebted": {
    "english": "To make indebted",
    "bishnupriya": "ধারা-",
    "bangla": "ঋণ দেওয়া",
    "hindi": "उधार देना"
  },
  "to_sharpen": {
    "english": "To sharpen",
    "bishnupriya": "ধারা-",
    "bangla": "ধারালো করা",
    "hindi": "तेज़ करना"
  },
  "owing_repaying_grudge": {
    "english": "Owing & repaying / grudge",
    "bishnupriya": "ধারাহুজি",
    "bangla": "ঋণ-শোধ / ক্ষোভ",
    "hindi": "उधार-चुकाना / नाराज़गी"
  },
  "style": {
    "english": "Style",
    "bishnupriya": "ধাসা",
    "bangla": "ধরন",
    "hindi": "ढंग"
  },
  "bluff": {
    "english": "Bluff",
    "bishnupriya": "ধুক্কা",
    "bangla": "ধোঁকা",
    "hindi": "धोखा"
  },
  "tut_tut_exclamation": {
    "english": "Tut tut (exclamation)",
    "bishnupriya": "ধুত",
    "bangla": "ধুৎ",
    "hindi": "धिक्कार"
  },
  "dhoti": {
    "english": "Dhoti",
    "bishnupriya": "ধুতি",
    "bangla": "ধুতি",
    "hindi": "धोती"
  },
  "tricks_fraud": {
    "english": "Tricks, fraud",
    "bishnupriya": "ধুন",
    "bangla": "চালাকি",
    "hindi": "धोखा"
  },
  "to_shred_cotton_with_bow": {
    "english": "To shred cotton with bow",
    "bishnupriya": "ধুন-",
    "bangla": "তুলা ঝাড়া",
    "hindi": "रुई धुनना"
  },
  "incense_candle": {
    "english": "Incense candle",
    "bishnupriya": "ধুনাবতি",
    "bangla": "ধুনো",
    "hindi": "धूपबत्ती"
  },
  "bow": {
    "english": "Bow",
    "bishnupriya": "ধুনুক",
    "bangla": "ধনুক",
    "hindi": "धनुष"
  },
  "name_of_musical_measure": {
    "english": "Name of musical measure",
    "bishnupriya": "ধুমেল",
    "bangla": "ধুমেল তাল",
    "hindi": "धूमेल ताल"
  },
  "tumult_pomp": {
    "english": "Tumult, pomp",
    "bishnupriya": "ধুমধাম",
    "bangla": "হৈচৈ",
    "hindi": "धूमधाम"
  },
  "clever_shrewd": {
    "english": "Clever, shrewd",
    "bishnupriya": "ধুরন্ধর",
    "bangla": "চতুর",
    "hindi": "धुरंधर"
  },
  "smoke": {
    "english": "Smoke",
    "bishnupriya": "ধুমা",
    "bangla": "ধোঁয়া",
    "hindi": "धुआँ"
  },
  "to_strike_with_force": {
    "english": "To strike with force",
    "bishnupriya": "ধুমা-",
    "bangla": "জোরে আঘাত করা",
    "hindi": "ज़ोर से मारना"
  },
  "cunningness": {
    "english": "Cunningness",
    "bishnupriya": "ধোর্তামি",
    "bangla": "ধূর্ততা",
    "hindi": "चालाकी"
  },
  "fraud_tricks": {
    "english": "Fraud, tricks",
    "bishnupriya": "ধোল",
    "bangla": "প্রতারণা",
    "hindi": "धोखा"
  },
  "dusty_dry": {
    "english": "Dusty & dry",
    "bishnupriya": "ধুলিয়া",
    "bangla": "ধুলোয় ভরা",
    "hindi": "धूल भरा"
  },
  "to_cause_to_wash": {
    "english": "To cause to wash",
    "bishnupriya": "ধাউয়া-",
    "bangla": "ধোয়ানো",
    "hindi": "धुलवाना"
  },
  "new": {
    "english": "New",
    "bishnupriya": "নত",
    "bangla": "নতুন",
    "hindi": "नया"
  },
  "kneading": {
    "english": "Kneading",
    "bishnupriya": "নাই",
    "bangla": "মাখা",
    "hindi": "गूंधना"
  },
  "female_relation_suffix": {
    "english": "Female relation suffix",
    "bishnupriya": "-নাক",
    "bangla": "মহিলা সম্পর্কীয় প্রত্যয়",
    "hindi": "महिला रिश्ते का प्रत्यय"
  },
  "service": {
    "english": "Service",
    "bishnupriya": "নাকরি",
    "bangla": "চাকরি",
    "hindi": "नौकरी"
  },
  "imitation": {
    "english": "Imitation",
    "bishnupriya": "নকল",
    "bangla": "নকল",
    "hindi": "नकल"
  },
  "picture_nature": {
    "english": "Picture / nature",
    "bishnupriya": "নকশা",
    "bangla": "ছবি / স্বভাব",
    "hindi": "नक्शा / स्वभाव"
  },
  "nail": {
    "english": "Nail",
    "bishnupriya": "নাখা",
    "bangla": "নখ",
    "hindi": "नाखून"
  },
  "ready_cash": {
    "english": "Ready cash",
    "bishnupriya": "নাগদ / নাগদা",
    "bangla": "নগদ",
    "hindi": "नकद"
  },
  "to_bend_down_stoop": {
    "english": "To bend down / stoop",
    "bishnupriya": "নান-",
    "bangla": "নত হওয়া",
    "hindi": "झुकना"
  },
  "old_bent": {
    "english": "Old (bent)",
    "bishnupriya": "নানা",
    "bangla": "বুড়ো",
    "hindi": "बूढ़ा"
  },
  "early_day_break": {
    "english": "Early / day-break",
    "bishnupriya": "নানাল",
    "bangla": "ভোর",
    "hindi": "सुबह"
  },
  "midst_midnight": {
    "english": "Midst / midnight",
    "bishnupriya": "নানেই",
    "bangla": "মাঝামাঝি / মধ্যরাত্রি",
    "hindi": "बीच / आधी रात"
  },
  "pied_crested_cuckoo": {
    "english": "Pied-crested cuckoo",
    "bishnupriya": "নানকুপি",
    "bangla": "পাপিয়া",
    "hindi": "पपीहा"
  },
  "last_part_of_night": {
    "english": "Last part of night",
    "bishnupriya": "নানক্রাক",
    "bangla": "শেষ রাত",
    "hindi": "आखिरी रात"
  },
  "cloudy": {
    "english": "Cloudy",
    "bishnupriya": "নানমান",
    "bangla": "মেঘলা",
    "hindi": "बादल वाला"
  },
  "rifle": {
    "english": "Rifle",
    "bishnupriya": "নানমেই",
    "bangla": "রাইফেল",
    "hindi": "राइफल"
  },
  "lion": {
    "english": "Lion",
    "bishnupriya": "নানসা",
    "bangla": "সিংহ",
    "hindi": "शेर"
  },
  "long_time_late": {
    "english": "Long time / late",
    "bishnupriya": "নানসান",
    "bangla": "দেরি করে",
    "hindi": "देर से"
  },
  "glance_evil_eye": {
    "english": "Glance / evil eye",
    "bishnupriya": "নজর",
    "bangla": "নজর",
    "hindi": "नज़र"
  },
  "eye_disease": {
    "english": "Eye disease",
    "bishnupriya": "নজলা",
    "bangla": "চোখের রোগ",
    "hindi": "आँख की बीमारी"
  },
  "ensuing": {
    "english": "Ensuing",
    "bishnupriya": "নজিক",
    "bangla": "আসন্ন",
    "hindi": "आने वाला"
  },
  "musical_measure_mridanga_maker": {
    "english": "Musical measure / mridanga maker",
    "bishnupriya": "নট",
    "bangla": "তাল / মৃদঙ্গকার",
    "hindi": "ताल / मृदंग बनाने वाला"
  },
  "sportive_immoral_woman": {
    "english": "Sportive / immoral woman",
    "bishnupriya": "নটিনি",
    "bangla": "নটী",
    "hindi": "नटी"
  },
  "addition_help": {
    "english": "Addition / help",
    "bishnupriya": "নট",
    "bangla": "যোগ / সাহায্য",
    "hindi": "जोड़ / मदद"
  },
  "nose_ring": {
    "english": "Nose-ring",
    "bishnupriya": "নট",
    "bangla": "নথ",
    "hindi": "नथ"
  },
  "new_2": {
    "english": "New",
    "bishnupriya": "নতুন",
    "bangla": "নতুন",
    "hindi": "नया"
  },
  "tender": {
    "english": "Tender",
    "bishnupriya": "নাদান",
    "bangla": "কোমল",
    "hindi": "कोमल"
  },
  "nose_rope": {
    "english": "Nose-rope",
    "bishnupriya": "নাকা",
    "bangla": "নাকের দড়ি",
    "hindi": "नकेल"
  },
  "side_part": {
    "english": "Side / part",
    "bishnupriya": "নাকাল",
    "bangla": "পাশ / অংশ",
    "hindi": "किनारा / हिस्सा"
  },
  "flat_nose": {
    "english": "Flat nose",
    "bishnupriya": "নাকটেকপা",
    "bangla": "চ্যাপটা নাক",
    "hindi": "चपटी नाक"
  },
  "neck": {
    "english": "Neck",
    "bishnupriya": "নাকসাম",
    "bangla": "গলা",
    "hindi": "गला"
  },
  "animal_disease_nose_abdomen": {
    "english": "Animal disease (nose & abdomen)",
    "bishnupriya": "নাকসুর",
    "bangla": "পশুর রোগ",
    "hindi": "पशु का रोग"
  },
  "not_yet": {
    "english": "Not yet",
    "bishnupriya": "নাগায়",
    "bangla": "এখনো না",
    "hindi": "अभी नहीं"
  },
  "band_party": {
    "english": "Band-party",
    "bishnupriya": "নাগারাসি",
    "bangla": "ব্যান্ড",
    "hindi": "बैंड"
  },
  "devanagari_script": {
    "english": "Devanagari script",
    "bishnupriya": "নাগিরি",
    "bangla": "দেবনাগরী",
    "hindi": "देवनागरी"
  },
  "reached_in_time_experienced": {
    "english": "Reached in time / experienced",
    "bishnupriya": "নান",
    "bangla": "সময়মত পৌঁছানো / অভবী",
    "hindi": "समय पर पहुँचना / अनुभवी"
  },
  "name": {
    "english": "Name",
    "bishnupriya": "নান",
    "bangla": "নাম",
    "hindi": "नाम"
  },
  "to_dance": {
    "english": "To dance",
    "bishnupriya": "নাচ-",
    "bangla": "নাচা",
    "hindi": "नाचना"
  },
  "dance": {
    "english": "Dance",
    "bishnupriya": "নাচা",
    "bangla": "নাচ",
    "hindi": "नाच"
  },
  "nose_ornament": {
    "english": "Nose ornament",
    "bishnupriya": "নাচিকা",
    "bangla": "নথ",
    "hindi": "नथ"
  },
  "side_channel": {
    "english": "Side channel",
    "bishnupriya": "নাচিখন",
    "bangla": "পার্শ্ব খাল",
    "hindi": "साइड नहर"
  },
  "dancer_male_female": {
    "english": "Dancer (male/female)",
    "bishnupriya": "নাছুয়ালি / নাছুর্ট",
    "bangla": "নাচিয়ে / নর্তকী",
    "hindi": "नाचने वाला / नर्तकी"
  },
  "obstinate": {
    "english": "Obstinate",
    "bishnupriya": "নাছুরবান্দা",
    "bangla": "জেদি",
    "hindi": "ज़िद्दी"
  },
  "worthless": {
    "english": "Worthless",
    "bishnupriya": "নাজায়",
    "bangla": "বেকার",
    "hindi": "बेकार"
  },
  "style_sportive": {
    "english": "Style / sportive",
    "bishnupriya": "নাটকা",
    "bangla": "নাটকীয় / খেলোয়াড়",
    "hindi": "नाटकीय / खिलाड़ी"
  },
  "implement_for_winding_thread": {
    "english": "Implement for winding thread",
    "bishnupriya": "নাটুয়া",
    "bangla": "সুতো গোটানোর যন্ত্র",
    "hindi": "धागा लपेटने का औज़ार"
  },
  "weak_backward": {
    "english": "Weak, backward",
    "bishnupriya": "নাথা",
    "bangla": "দুর্বল",
    "hindi": "कमज़ोर"
  },
  "grandson": {
    "english": "Grandson",
    "bishnupriya": "নাতি",
    "bangla": "নাতি",
    "hindi": "पोता"
  },
  "grand_children": {
    "english": "Grand-children",
    "bishnupriya": "নাত্যাল",
    "bangla": "নাতি-নাতনি",
    "hindi": "पोते-पोतियाँ"
  },
  "not_to_give_disallow": {
    "english": "Not to give / disallow",
    "bishnupriya": "নাদ-",
    "bangla": "না দেওয়া / বারণ করা",
    "hindi": "न देना / मना करना"
  },
  "smooth": {
    "english": "Smooth",
    "bishnupriya": "নান",
    "bangla": "মসৃণ",
    "hindi": "चिकना"
  },
  "various": {
    "english": "Various",
    "bishnupriya": "নানান",
    "bangla": "নানা",
    "hindi": "तरह-तरह"
  },
  "not_being": {
    "english": "Not being",
    "bishnupriya": "না'নি",
    "bangla": "না হওয়া",
    "hindi": "न होना"
  },
  "jute_like_plant": {
    "english": "Jute-like plant",
    "bishnupriya": "নানিয়া",
    "bangla": "পাটের মতো গাছ",
    "hindi": "जूट जैसा पौधा"
  },
  "grandmother": {
    "english": "Grandmother",
    "bishnupriya": "নানু",
    "bangla": "ঠাকুরমা",
    "hindi": "नानी"
  },
  "stuck_sticking": {
    "english": "Stuck / sticking",
    "bishnupriya": "নাপ",
    "bangla": "আটকে থাকা",
    "hindi": "चिपकना"
  },
  "vanity": {
    "english": "Vanity",
    "bishnupriya": "নাপাল",
    "bangla": "অহংকার",
    "hindi": "घमंड"
  },
  "yellow": {
    "english": "Yellow",
    "bishnupriya": "নাপু",
    "bangla": "হলুদ",
    "hindi": "पीला"
  },
  "barber": {
    "english": "Barber",
    "bishnupriya": "নাফেত",
    "bangla": "নাপিত",
    "hindi": "नाई"
  },
  "obstinate_obstinacy": {
    "english": "Obstinate / obstinacy",
    "bishnupriya": "নাফেরা",
    "bangla": "জেদ / জেদি",
    "hindi": "ज़िद / ज़िद्दी"
  },
  "immature": {
    "english": "Immature",
    "bishnupriya": "নাবালক",
    "bangla": "অপ্রাপ্তবয়স্ক",
    "hindi": "नाबालिग"
  },
  "not_indeed": {
    "english": "Not indeed",
    "bishnupriya": "নাবে",
    "bangla": "নয়ই",
    "hindi": "बिल्कुल नहीं"
  },
  "proportionate_accurate": {
    "english": "Proportionate, accurate",
    "bishnupriya": "নাম",
    "bangla": "সঠিক",
    "hindi": "सटीक"
  },
  "arithmetical_tables": {
    "english": "Arithmetical tables",
    "bishnupriya": "নামতা",
    "bangla": "নামতা",
    "hindi": "पहाड़ा"
  },
  "tuft_of_holy_thread": {
    "english": "Tuft of holy thread",
    "bishnupriya": "নামা",
    "bangla": "জনৈ",
    "hindi": "जनेऊ"
  },
  "back_tuft_of_dhuti": {
    "english": "Back tuft of dhuti",
    "bishnupriya": "নামেই",
    "bangla": "ধুতির পিছনের গিঁট",
    "hindi": "धोती का पीछे का गाँठ"
  },
  "sectarian_marks": {
    "english": "Sectarian marks",
    "bishnupriya": "নামছা",
    "bangla": "তিলক",
    "hindi": "तिलक"
  },
  "reputed": {
    "english": "Reputed",
    "bishnupriya": "নামজাদা",
    "bangla": "নামকরা",
    "hindi": "नामी"
  },
  "low_land_foot_of_hill": {
    "english": "Low land / foot of hill",
    "bishnupriya": "নামথা",
    "bangla": "নিচু জমি / পাহাড়ের পাদদেশ",
    "hindi": "नीचा इलाका / पहाड़ की तलहटी"
  },
  "voice_throat": {
    "english": "Voice / throat",
    "bishnupriya": "নার",
    "bangla": "কণ্ঠস্বর / গলা",
    "hindi": "आवाज़ / गला"
  },
  "unwilling": {
    "english": "Unwilling",
    "bishnupriya": "নারাজ",
    "bangla": "অনিচ্ছুক",
    "hindi": "नाराज़"
  },
  "cocoanut": {
    "english": "Cocoanut",
    "bishnupriya": "নারিকাল",
    "bangla": "নারকেল",
    "hindi": "नारियल"
  },
  "nose_rope_2": {
    "english": "Nose-rope",
    "bishnupriya": "নারেন",
    "bangla": "নাকের দড়ি",
    "hindi": "नकेल"
  },
  "thread_fibre": {
    "english": "Thread / fibre",
    "bishnupriya": "নাল",
    "bangla": "সুতো",
    "hindi": "धागा"
  },
  "lineage": {
    "english": "Lineage",
    "bishnupriya": "নালা",
    "bangla": "বংশ",
    "hindi": "वंश"
  },
  "canal": {
    "english": "Canal",
    "bishnupriya": "নালা",
    "bangla": "খাল",
    "hindi": "नाला"
  },
  "complaint": {
    "english": "Complaint",
    "bishnupriya": "নালিশ",
    "bangla": "নালিশ",
    "hindi": "शिकायत"
  },
  "small_end_of_land_land_between_hills": {
    "english": "Small end of land / land between hills",
    "bishnupriya": "নাসুল",
    "bangla": "জমির ছোটো প্রান্ত / পাহাড়ের মাঝে জমি",
    "hindi": "ज़मीन का छोटा सिरा / पहाड़ों के बीच ज़मीन"
  },
  "pear": {
    "english": "Pear",
    "bishnupriya": "নাসপতি",
    "bangla": "নাশপাতি",
    "hindi": "नाशपाती"
  },
  "cap": {
    "english": "Cap",
    "bishnupriya": "নাহুম",
    "bangla": "টুপি",
    "hindi": "टोपी"
  },
  "obstinacy": {
    "english": "Obstinacy",
    "bishnupriya": "নি",
    "bangla": "জেদ",
    "hindi": "ज़िद"
  },
  "to_take_carry": {
    "english": "To take / carry",
    "bishnupriya": "নি-",
    "bangla": "নেওয়া",
    "hindi": "लेना"
  },
  "request": {
    "english": "Request",
    "bishnupriya": "নিউর",
    "bangla": "অনুরোধ",
    "hindi": "अनुरोध"
  },
  "to_cleanse": {
    "english": "To cleanse",
    "bishnupriya": "নিকা-",
    "bangla": "পরিষ্কার করা",
    "hindi": "साफ करना"
  },
  "to_bring_out_drive_out": {
    "english": "To bring out / drive out",
    "bishnupriya": "নিকালা-",
    "bangla": "বের করা / তাড়ানো",
    "hindi": "निकालना / भगाना"
  },
  "settlement": {
    "english": "Settlement",
    "bishnupriya": "নিকাস",
    "bangla": "নিষ্পত্তि",
    "hindi": "निपटारा"
  },
  "much": {
    "english": "Much",
    "bishnupriya": "নিকুল",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "to_go_out": {
    "english": "To go out",
    "bishnupriya": "নিকুল-",
    "bangla": "বের হওয়া",
    "hindi": "निकलना"
  },
  "daily_only": {
    "english": "Daily / only",
    "bishnupriya": "নিক্কা",
    "bangla": "প্রতিদিন / কেবল",
    "hindi": "रोज़ / केवल"
  },
  "goldsmiths_balance": {
    "english": "Goldsmith's balance",
    "bishnupriya": "নিক্তি",
    "bangla": "সোনার দাঁড়িপাল্লা",
    "hindi": "सुनार का तराजू"
  },
  "faultless": {
    "english": "Faultless",
    "bishnupriya": "নিখুট",
    "bangla": "নিখুঁত",
    "hindi": "बेदाग"
  },
  "untraced": {
    "english": "Untraced",
    "bishnupriya": "নিখুজ",
    "bangla": "গুম",
    "hindi": "गायब"
  },
  "extremely_miser": {
    "english": "Extremely miser",
    "bishnupriya": "নিখুরি-বান্দি",
    "bangla": "অতি কৃপণ",
    "hindi": "बहुत कंजूस"
  },
  "honour_desire_thought": {
    "english": "Honour / desire / thought",
    "bishnupriya": "নিন",
    "bangla": "সম্মান / ইচ্ছা / চিন্তা",
    "hindi": "सम्मान / इच्छा / विचार"
  },
  "worshipper": {
    "english": "Worshipper",
    "bishnupriya": "নিনপা",
    "bangla": "উপাসক",
    "hindi": "पूजने वाला"
  },
  "girl": {
    "english": "Girl",
    "bishnupriya": "নিঞাল / নিঞালপি",
    "bangla": "মেয়ে",
    "hindi": "लड़की"
  },
  "feeling_of_displeasure": {
    "english": "Feeling of displeasure",
    "bishnupriya": "নিঞাই / নিঞেই",
    "bangla": "অভিমান",
    "hindi": "नाराज़गी"
  },
  "hip": {
    "english": "Hip",
    "bishnupriya": "নিংকন",
    "bangla": "নিতম্ব",
    "hindi": "कूल्हा"
  },
  "mentality": {
    "english": "Mentality",
    "bishnupriya": "নিঞ্চেল",
    "bangla": "মনোভাব",
    "hindi": "मानसिकता"
  },
  "king": {
    "english": "King",
    "bishnupriya": "নিন্থেম",
    "bangla": "রাজা",
    "hindi": "राजा"
  },
  "monday": {
    "english": "Monday",
    "bishnupriya": "নিন্থাউকাপা",
    "bangla": "সোমবার",
    "hindi": "सोमवार"
  },
  "clan_name": {
    "english": "Clan name",
    "bishnupriya": "নিন্থাউজা",
    "bangla": "নিন্থাউজা গোষ্ঠী",
    "hindi": "निन्थाउजा वंश"
  },
  "hesitation": {
    "english": "Hesitation",
    "bishnupriya": "নিনমান",
    "bangla": "দ্বিধা",
    "hindi": "हिचकिचाहट"
  },
  "breath": {
    "english": "Breath",
    "bishnupriya": "নিনসা",
    "bangla": "শ্বাস",
    "hindi": "साँस"
  },
  "recollection": {
    "english": "Recollection",
    "bishnupriya": "নিনসিং",
    "bangla": "স্মৃতি",
    "hindi": "याद"
  },
  "in_case": {
    "english": "In case",
    "bishnupriya": "নিচ্চকে",
    "bangla": "যদি",
    "hindi": "अगर"
  },
  "to_ooze_out": {
    "english": "To ooze out",
    "bishnupriya": "নিজ-",
    "bangla": "বের হওয়া",
    "hindi": "रिसना"
  },
  "own": {
    "english": "Own",
    "bishnupriya": "নিজা",
    "bangla": "নিজের",
    "hindi": "अपना"
  },
  "own_way": {
    "english": "Own way",
    "bishnupriya": "নিজার নিজার",
    "bangla": "নিজের মতো",
    "hindi": "अपने तरीके से"
  },
  "spring": {
    "english": "Spring",
    "bishnupriya": "নিঝারা",
    "bangla": "ঝরনা",
    "hindi": "सोता"
  },
  "carelessly_slow": {
    "english": "Carelessly slow",
    "bishnupriya": "নিউজা",
    "bangla": "অলসভাবে ধীর",
    "hindi": "सुस्ती से"
  },
  "undisturbed_attentive": {
    "english": "Undisturbed, attentive",
    "bishnupriya": "নিহুম",
    "bangla": "অবিচলিত",
    "hindi": "अविचलित"
  },
  "daily_songs_of_krishna": {
    "english": "Daily songs of Krishna",
    "bishnupriya": "নিতি",
    "bangla": "কৃষ্ণের নিত্য লীলার গান",
    "hindi": "कृष्ण की नित्य गीत"
  },
  "daily_2": {
    "english": "Daily",
    "bishnupriya": "নিত্তিকা",
    "bangla": "প্রতিদিন",
    "hindi": "रोज़ाना"
  },
  "heat_of_sun": {
    "english": "Heat of sun",
    "bishnupriya": "নিদাঘ",
    "bangla": "গ্রীষ্মের তাপ",
    "hindi": "गर्मी"
  },
  "famine": {
    "english": "Famine",
    "bishnupriya": "নিদান",
    "bangla": "দুর্ভিক্ষ",
    "hindi": "अकाल"
  },
  "enmity": {
    "english": "Enmity",
    "bishnupriya": "নিনানিনি",
    "bangla": "শত্রুতা",
    "hindi": "दुश्मनी"
  },
  "chisel": {
    "english": "Chisel",
    "bishnupriya": "নিনি",
    "bangla": "ছেনি",
    "hindi": "छेनी"
  },
  "space_between_thumb_finger": {
    "english": "Space between thumb & finger",
    "bishnupriya": "নিনি",
    "bangla": "আঙুলের ফাঁক",
    "hindi": "अंगुली का फैलाव"
  },
  "noise": {
    "english": "Noise",
    "bishnupriya": "নিংখন",
    "bangla": "শব্দ",
    "hindi": "शोर"
  },
  "clear_2": {
    "english": "Clear",
    "bishnupriya": "নিফট",
    "bangla": "স্পষ্ট",
    "hindi": "साफ"
  },
  "to_be_extinguished": {
    "english": "To be extinguished",
    "bishnupriya": "নিব-",
    "bangla": "নিভে যাওয়া",
    "hindi": "बुझना"
  },
  "to_extinguish": {
    "english": "To extinguish",
    "bishnupriya": "নিবা-",
    "bangla": "নেভানো",
    "hindi": "बुझाना"
  },
  "neem": {
    "english": "Neem",
    "bishnupriya": "নিম",
    "bangla": "নিম",
    "hindi": "नीम"
  },
  "salt_2": {
    "english": "Salt",
    "bishnupriya": "নিমক",
    "bangla": "লবণ",
    "hindi": "नमक"
  },
  "shy": {
    "english": "Shy",
    "bishnupriya": "নিমট",
    "bangla": "লাজুক",
    "hindi": "शर्मीला"
  },
  "jute": {
    "english": "Jute",
    "bishnupriya": "নিমান",
    "bangla": "পাট",
    "hindi": "पटसन"
  },
  "short_inner_garment": {
    "english": "Short inner garment",
    "bishnupriya": "নিমা",
    "bangla": "ছোটো জামা",
    "hindi": "छोटा कुर्ता"
  },
  "salted_pastry": {
    "english": "Salted pastry",
    "bishnupriya": "নিমকি",
    "bangla": "নিমকি",
    "hindi": "नमकीन"
  },
  "private": {
    "english": "Private",
    "bishnupriya": "নিজার",
    "bangla": "গোপনে",
    "hindi": "गुप्त"
  },
  "in_ones_own_way": {
    "english": "In one's own way",
    "bishnupriya": "নিজার নিজার",
    "bangla": "নিজের মতো",
    "hindi": "अपने तरीके से"
  },
  "oppression": {
    "english": "Oppression",
    "bishnupriya": "পিরান",
    "bangla": "অত্যাচার",
    "hindi": "ज़ुल्म"
  },
  "to_press_out": {
    "english": "To press out",
    "bishnupriya": "পিরা-",
    "bangla": "চাপা",
    "hindi": "दबाना"
  },
  "repeated_insistence": {
    "english": "Repeated insistence",
    "bishnupriya": "পিরাপিরি",
    "bangla": "বারবার জেদ",
    "hindi": "ज़िद करना"
  },
  "holder_suffix": {
    "english": "Holder suffix",
    "bishnupriya": "পু",
    "bangla": "ধারক প্রত্যয়",
    "hindi": "रखने वाला प्रत्यय"
  },
  "dish": {
    "english": "Dish",
    "bishnupriya": "পুকাম",
    "bangla": "থালা",
    "hindi": "थाली"
  },
  "mentality": {
    "english": "Mentality",
    "bishnupriya": "পুকচেল",
    "bangla": "মানসিকতা",
    "hindi": "मानसिकता"
  },
  "mentality_motive": {
    "english": "Mentality / motive",
    "bishnupriya": "পুকনিন",
    "bangla": "মানসিকতা / উদ্দেশ্য",
    "hindi": "मानसिकता / मकसद"
  },
  "pond": {
    "english": "Pond",
    "bishnupriya": "পুখুরি",
    "bangla": "পুখুর",
    "hindi": "तालाब"
  },
  "field": {
    "english": "Field",
    "bishnupriya": "পুন",
    "bangla": "মাঠ",
    "hindi": "खेत"
  },
  "drum_repairing_instrument": {
    "english": "Drum-repairing instrument",
    "bishnupriya": "পুনুদ",
    "bangla": "ঢাক মেরামতের যন্ত্র",
    "hindi": "ढोल ठीक करने का औज़ार"
  },
  "total_offering": {
    "english": "Total offering",
    "bishnupriya": "পুনকত",
    "bangla": "সম্পূর্ণ উৎসর্গ",
    "hindi": "पूरा चढ़ावा"
  },
  "sound_of_drum": {
    "english": "Sound of drum",
    "bishnupriya": "পুনখাল",
    "bangla": "ঢাকের শব্দ",
    "hindi": "ढोल की आवाज़"
  },
  "span_of_time": {
    "english": "Span of time",
    "bishnupriya": "পুন্চা",
    "bangla": "সময়ের অংশ",
    "hindi": "समय का हिस्सा"
  },
  "peg_nail": {
    "english": "Peg / nail",
    "bishnupriya": "পুঞ্চেই",
    "bangla": "খুঁটা",
    "hindi": "कील"
  },
  "big_drum": {
    "english": "Big drum",
    "bishnupriya": "পুন্চাউ / পুন্জাও",
    "bangla": "বড়ো ঢাক",
    "hindi": "बड़ा ढोल"
  },
  "tightening": {
    "english": "Tightening",
    "bishnupriya": "পুন্তিন",
    "bangla": "টাইট করা",
    "hindi": "कसना"
  },
  "fastening_outer_frame_of_drum": {
    "english": "Fastening outer frame of drum",
    "bishnupriya": "পুন্তেই",
    "bangla": "ঢাকের বাইরের ফ্রেম বাঁধা",
    "hindi": "ढोल का बाहरी फ्रेम बाँधना"
  },
  "carrying_load_jointly": {
    "english": "Carrying load jointly",
    "bishnupriya": "পুন্না",
    "bangla": "যৌথভাবে বোঝা বওয়া",
    "hindi": "मिलकर बोझा ढोना"
  },
  "drum_cover": {
    "english": "Drum-cover",
    "bishnupriya": "পুন্যাম",
    "bangla": "ঢাকের ঢাকনা",
    "hindi": "ढोल का ढक्कन"
  },
  "drummer": {
    "english": "Drummer",
    "bishnupriya": "পুন্যেইবা",
    "bangla": "ঢাকি",
    "hindi": "ढोल बजाने वाला"
  },
  "musical_measure_of_drum": {
    "english": "Musical measure of drum",
    "bishnupriya": "পুনলাল / পুনলেল",
    "bangla": "ঢাকের তাল",
    "hindi": "ढोल का ताल"
  },
  "small_fly_near_eyes": {
    "english": "Small fly near eyes",
    "bishnupriya": "পুচুতি",
    "bangla": "চোখের কাছে ছোটো মাছি",
    "hindi": "आँखों के पास छोटी मक्खी"
  },
  "to_rub": {
    "english": "To rub",
    "bishnupriya": "পুছ-",
    "bangla": "ঘষা",
    "hindi": "रगड़ना"
  },
  "act_of_rubbing": {
    "english": "The act of rubbing",
    "bishnupriya": "পুছা",
    "bangla": "ঘষা",
    "hindi": "रगड़ना"
  },
  "inherited_traditional": {
    "english": "Inherited, traditional",
    "bishnupriya": "পুজারাকপা",
    "bangla": "উত্তরাধিকারসূত্রে",
    "hindi": "पैतृक"
  },
  "small_louse": {
    "english": "Small louse",
    "bishnupriya": "পুজালি",
    "bangla": "ছোটো উকুন",
    "hindi": "छोटी जूँ"
  },
  "life_longevity": {
    "english": "Life / longevity",
    "bishnupriya": "পুন্চি",
    "bangla": "জীবন / দীর্ঘায়ু",
    "hindi": "जीवन / आयु"
  },
  "stock": {
    "english": "Stock",
    "bishnupriya": "পুন্জি",
    "bangla": "পুঁজি",
    "hindi": "पूँजी"
  },
  "bundle": {
    "english": "Bundle",
    "bishnupriya": "পুতলা / পুতলি",
    "bangla": "বান্ডিল",
    "hindi": "गठरी"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "পুথি",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक तरह की मछली"
  },
  "one_possessing_spiritual_merit": {
    "english": "One possessing spiritual merit",
    "bishnupriya": "পুন্যবন্ত",
    "bangla": "পুণ্যবান",
    "hindi": "पुण्यवान"
  },
  "son": {
    "english": "Son",
    "bishnupriya": "পুত",
    "bangla": "ছেলে",
    "hindi": "बेटा"
  },
  "related_as_son": {
    "english": "Related as son",
    "bishnupriya": "পুতাক",
    "bangla": "ছেলের মতো",
    "hindi": "बेटे जैसा"
  },
  "foundation_of_house_stead_high_land": {
    "english": "Foundation of house-stead / high land piece",
    "bishnupriya": "পুতা",
    "bangla": "ঘরের ভিত্তি / উঁচু জমি",
    "hindi": "घर की नींव / ऊँची ज़मीन"
  },
  "short_round_grinding_stone": {
    "english": "Short round grinding stone",
    "bishnupriya": "পুতল",
    "bangla": "বাটার গোল পাথর",
    "hindi": "छोटा गोल सिलबट्टा"
  },
  "cloth": {
    "english": "Cloth",
    "bishnupriya": "পুতি",
    "bangla": "কাপড়",
    "hindi": "कपड़ा"
  },
  "doll": {
    "english": "Doll",
    "bishnupriya": "পুতুল",
    "bangla": "পুতুল",
    "hindi": "गुड़िया"
  },
  "great_grandson": {
    "english": "Great grandson",
    "bishnupriya": "পুত্তি",
    "bangla": "প্রপৌত্র",
    "hindi": "परपोता"
  },
  "necklace": {
    "english": "Necklace",
    "bishnupriya": "পুন্তুম",
    "bangla": "গলার হার",
    "hindi": "गले का हार"
  },
  "totally_tired": {
    "english": "Totally tired",
    "bishnupriya": "পুন্থিত",
    "bangla": "সম্পূর্ণ ক্লান্ত",
    "hindi": "पूरी तरह थका हुआ"
  },
  "necklace_2": {
    "english": "Necklace",
    "bishnupriya": "পুন্দারেই",
    "bangla": "গলার হার",
    "hindi": "गले का हार"
  },
  "to_be_filled_up_fulfilled": {
    "english": "To be filled up / fulfilled",
    "bishnupriya": "পুর-",
    "bangla": "পূর্ণ হওয়া",
    "hindi": "भरना / पूरा होना"
  },
  "history_of_clan": {
    "english": "History of clan",
    "bishnupriya": "পুরাল",
    "bangla": "বংশের ইতিহাস",
    "hindi": "वंश का इतिहास"
  },
  "full_complete": {
    "english": "Full, complete",
    "bishnupriya": "পুরা",
    "bangla": "পূর্ণ",
    "hindi": "पूरा"
  },
  "to_fill_up_fulfil": {
    "english": "To fill up / fulfil",
    "bishnupriya": "পুরা-",
    "bangla": "পূর্ণ করা",
    "hindi": "भरना / पूरा करना"
  },
  "old": {
    "english": "Old",
    "bishnupriya": "পুরানা",
    "bangla": "পুরানো",
    "hindi": "पुराना"
  },
  "being_filled_filling_gerund": {
    "english": "Being filled / filling (gerund)",
    "bishnupriya": "পুরানি",
    "bangla": "পূর্ণ হওয়া / করা",
    "hindi": "भरने / पूरा करने की क्रिया"
  },
  "totally": {
    "english": "Totally",
    "bishnupriya": "পুরাপুরি",
    "bangla": "সম্পূর্ণ",
    "hindi": "पूरी तरह"
  },
  "priest": {
    "english": "Priest",
    "bishnupriya": "পুরিত",
    "bangla": "পুরোহিত",
    "hindi": "पुरोहित"
  },
  "maiden": {
    "english": "Maiden",
    "bishnupriya": "পুরি-জেলা",
    "bangla": "কুমারী",
    "hindi": "कुमारी"
  },
  "to_burn": {
    "english": "To burn",
    "bishnupriya": "পুর-",
    "bangla": "পোড়া",
    "hindi": "जलना"
  },
  "burnt": {
    "english": "Burnt",
    "bishnupriya": "পুরা",
    "bangla": "পোড়া",
    "hindi": "जला हुआ"
  },
  "to_burn_trans": {
    "english": "To burn",
    "bishnupriya": "পুরা-",
    "bangla": "পোড়ানো",
    "hindi": "जलाना"
  },
  "creating_burning_sensation": {
    "english": "Creating burning sensation",
    "bishnupriya": "পুরপুরা-",
    "bangla": "জ্বালা করা",
    "hindi": "जलन पैदा करना"
  },
  "bridge": {
    "english": "Bridge",
    "bishnupriya": "পুল",
    "bangla": "সাঁকো",
    "hindi": "पुल"
  },
  "pitcher": {
    "english": "Pitcher",
    "bishnupriya": "পুল",
    "bangla": "কলসী",
    "hindi": "घड़ा"
  },
  "collection": {
    "english": "Collection",
    "bishnupriya": "পুল",
    "bangla": "সংগ্রহ",
    "hindi": "संग्रह"
  },
  "wild_cardamom": {
    "english": "Wild cardamom",
    "bishnupriya": "পুল্লেই",
    "bangla": "এলাচ",
    "hindi": "इलायची"
  },
  "total": {
    "english": "Total",
    "bishnupriya": "পুল্লাপ",
    "bangla": "সম্পূর্ণ",
    "hindi": "पूरा"
  },
  "dress": {
    "english": "Dress",
    "bishnupriya": "পুশাক",
    "bangla": "পোশাক",
    "hindi": "पोशाक"
  },
  "to_rear_foster": {
    "english": "To rear / foster",
    "bishnupriya": "পুস-",
    "bangla": "পালন করা",
    "hindi": "पालना"
  },
  "rearing": {
    "english": "Rearing",
    "bishnupriya": "পুষান",
    "bangla": "লালন-পালন",
    "hindi": "परवरिश"
  },
  "nutritious_food": {
    "english": "Nutritious food",
    "bishnupriya": "পুষ্টি",
    "bangla": "পুষ্টিকর খাবার",
    "hindi": "पौष्टिक भोजन"
  },
  "inherited": {
    "english": "Inherited",
    "bishnupriya": "পুসারাকপা",
    "bangla": "উত্তরাধিকারসূত্রে",
    "hindi": "पैतृक"
  },
  "totally_2": {
    "english": "Totally",
    "bishnupriya": "পুহাক",
    "bangla": "সম্পূর্ণ",
    "hindi": "पूरा"
  },
  "coral": {
    "english": "Coral",
    "bishnupriya": "পুহাল",
    "bangla": "প্রবাল",
    "hindi": "मूंगा"
  },
  "private_stock": {
    "english": "Private stock",
    "bishnupriya": "পুহেই",
    "bangla": "ব্যক্তিগত মজুত",
    "hindi": "निजी स्टॉक"
  },
  "purulent_matter": {
    "english": "Purulent matter",
    "bishnupriya": "পোজ",
    "bangla": "পুঁজ",
    "hindi": "मवाद"
  },
  "worshipper": {
    "english": "Worshipper",
    "bishnupriya": "পোজারি",
    "bangla": "পূজারী",
    "hindi": "पूजारी"
  },
  "umbrella": {
    "english": "Umbrella",
    "bishnupriya": "পে",
    "bangla": "ছাতা",
    "hindi": "छाता"
  },
  "spleen": {
    "english": "Spleen",
    "bishnupriya": "পেই",
    "bangla": "প্লীহা",
    "hindi": "तिल्ली"
  },
  "heap": {
    "english": "Heap",
    "bishnupriya": "পেই",
    "bangla": "গাদা",
    "hindi": "ढेर"
  },
  "strong_desire_for_food": {
    "english": "Strong desire for food",
    "bishnupriya": "পেইচা",
    "bangla": "খিদে",
    "hindi": "भूख"
  },
  "sudden_suddenly": {
    "english": "Sudden / suddenly",
    "bishnupriya": "পেইচিল / পেইরাক",
    "bangla": "হঠাৎ",
    "hindi": "अचानक"
  },
  "wicker_basket": {
    "english": "Wicker basket",
    "bishnupriya": "পেইলি",
    "bangla": "ঝুড়ি",
    "hindi": "टोकरी"
  },
  "foot_man": {
    "english": "Foot-man",
    "bishnupriya": "পেউদা",
    "bangla": "পায়ে হাঁটা চাকর",
    "hindi": "पैदल नौकर"
  },
  "mud": {
    "english": "Mud",
    "bishnupriya": "পেক",
    "bangla": "কাদা",
    "hindi": "कीचड़"
  },
  "to_collect_in_abundance": {
    "english": "To collect in abundance",
    "bishnupriya": "পেক-",
    "bangla": "প্রচুর সংগ্রহ করা",
    "hindi": "ढेर सारा इकट्ठा करना"
  },
  "muddy": {
    "english": "Muddy",
    "bishnupriya": "পেকুয়া",
    "bangla": "কাদাময়",
    "hindi": "कीचड़ भरा"
  },
  "heap_of_rubbish": {
    "english": "Heap of rubbish",
    "bishnupriya": "পেকচা",
    "bangla": "আবর্জনার স্তূপ",
    "hindi": "कचरे का ढेर"
  },
  "heap_2": {
    "english": "Heap",
    "bishnupriya": "পেক্তাক",
    "bangla": "গাদা",
    "hindi": "ढेर"
  },
  "intellect": {
    "english": "Intellect",
    "bishnupriya": "পেন",
    "bangla": "বুদ্ধি",
    "hindi": "बुद्धि"
  },
  "lame": {
    "english": "Lame",
    "bishnupriya": "পেঙ্গারা",
    "bangla": "খোঁড়া",
    "hindi": "लंगड़ा"
  },
  "hot_headed": {
    "english": "Hot-headed",
    "bishnupriya": "পেন্তাল",
    "bangla": "গরম মাথা",
    "hindi": "गुस्सैल"
  },
  "speaking_moving_quickly": {
    "english": "Speaking/moving quickly",
    "bishnupriya": "পেনপেন",
    "bangla": "তাড়াতাড়ি কথা/চলা",
    "hindi": "जल्दी बोलना/चलना"
  },
  "tricks": {
    "english": "Tricks",
    "bishnupriya": "পেচ",
    "bangla": "চালাকি",
    "hindi": "चालाकी"
  },
  "owl": {
    "english": "Owl",
    "bishnupriya": "পেচা",
    "bangla": "পেঁচা",
    "hindi": "उल्लू"
  },
  "to_twist_complicate": {
    "english": "To twist / complicate",
    "bishnupriya": "পেচা-",
    "bangla": "মোচড়ানো / জটিল করা",
    "hindi": "मोड़ना / उलझाना"
  },
  "mutual_twisting_tricks": {
    "english": "Mutual twisting / tricks",
    "bishnupriya": "পেচাপেচি",
    "bangla": "পরস্পর মোচড়ানো / চালাকি",
    "hindi": "आपस में उलझाना / चालाकी"
  },
  "complicated": {
    "english": "Complicated",
    "bishnupriya": "পেচাল",
    "bangla": "জটিল",
    "hindi": "उलझा हुआ"
  },
  "young_fish": {
    "english": "Young fish",
    "bishnupriya": "পেচি",
    "bangla": "ছোটো মাছ",
    "hindi": "छोटी मछली"
  },
  "pin": {
    "english": "Pin",
    "bishnupriya": "পেচিন",
    "bangla": "পিন",
    "hindi": "पिन"
  },
  "pin_pointed_rod": {
    "english": "Pin / pointed rod",
    "bishnupriya": "পেচুতি",
    "bangla": "চোখের ময়লা",
    "hindi": "आँख की मैल"
  },
  "this_way_and_that_way": {
    "english": "This way and that way (to and fro)",
    "bishnupriya": "উৎফেট-নৎফেট",
    "bangla": "এদিক-ওদিক",
    "hindi": "इधर-उधर"
  },
  "growing_pulling_alternative_forms": {
    "english": "Growing / pulling (alternative forms)",
    "bishnupriya": "উঠুনি / উঠুল / উঠুলানি",
    "bangla": "বাড়ছে / টানা / টানার ক্রিয়া",
    "hindi": "बढ़ना / खींचना / खींचने की क्रिया"
  },
  "i_first_person_present": {
    "english": "I (1st person present tense ending)",
    "bishnupriya": "-উ",
    "bangla": "আমি (বর্তমান কাল)",
    "hindi": "मैं (वर्तमान काल)"
  },
  "to_be_alternative": {
    "english": "To be (alternative)",
    "bishnupriya": "উই",
    "bangla": "হওয়া",
    "hindi": "होना"
  },
  "rivet": {
    "english": "Rivet",
    "bishnupriya": "উই",
    "bangla": "রিভেট",
    "hindi": "कील"
  },
  "being_gerund": {
    "english": "Being (gerund)",
    "bishnupriya": "উইনা",
    "bangla": "থাকার ক্রিয়া",
    "hindi": "होने की क्रिया"
  },
  "remainders_of_food_leftover": {
    "english": "Remainders of food / leftover",
    "bishnupriya": "উইনাই",
    "bangla": "খাবারের উচ্ছিষ্ট",
    "hindi": "जूठन"
  },
  "pole_to_stir_straw": {
    "english": "Pole to stir straw while threshing",
    "bishnupriya": "উকাত",
    "bangla": "ধান ঝাড়ার লাঠি",
    "hindi": "मड़ाई में भूसा फटकने की डंडी"
  },
  "suffix_likeness_resembling": {
    "english": "Suffix – likeness / resembling",
    "bishnupriya": "-উকা",
    "bangla": "সাদৃশ্যবাচক প্রত্যয় (আন্দুকা, পানুকা)",
    "hindi": "“जैसा” प्रत्यय (पीला-सा, पानी-जैसा)"
  },
  "y_shaped_part_of_plough": {
    "english": "Y-shaped part of plough",
    "bishnupriya": "উকা",
    "bangla": "লাঙলের ‘উ’-আকৃতির অংশ",
    "hindi": "हल का यू-आकार वाला हिस्सा"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "উকাপি",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक प्रकार की मछली"
  },
  "night_watch_shed_paddy_field": {
    "english": "Night-watch shed on paddy field",
    "bishnupriya": "উকার",
    "bangla": "মাঠের উঁচু চালা",
    "hindi": "खेत में ऊँचा मचान"
  },
  "pleadership_advocacy": {
    "english": "Pleadership, advocacy",
    "bishnupriya": "উকালতি",
    "bangla": "উকালতি",
    "hindi": "वकालत"
  },
  "lawyer_advocate": {
    "english": "Lawyer, advocate",
    "bishnupriya": "উকিল",
    "bangla": "উকিল",
    "hindi": "वकील"
  },
  "harrow": {
    "english": "Harrow",
    "bishnupriya": "উকেই",
    "bangla": "দাঁতালো মই",
    "hindi": "दाँतेदार हेंगा"
  },
  "belching": {
    "english": "Belching",
    "bishnupriya": "উগার",
    "bangla": "ঢেঁকুর",
    "hindi": "डकार"
  },
  "to_belch": {
    "english": "To belch",
    "bishnupriya": "উগারা",
    "bangla": "ঢেঁকুর তোলা",
    "hindi": "डकारना"
  },
  "belching_gerund": {
    "english": "Belching (gerund)",
    "bishnupriya": "উগারানি",
    "bangla": "ঢেঁকুরের ক্রিয়া",
    "hindi": "डकारने की क्रिया"
  },
  "perplexed_confused": {
    "english": "Perplexed, confused",
    "bishnupriya": "উন / উনপা",
    "bangla": "বিহ্বল",
    "hindi": "घबराया हुआ"
  },
  "perplexity": {
    "english": "Perplexity",
    "bishnupriya": "উঙ্খাত",
    "bangla": "বিহ্বলতা",
    "hindi": "घबराहट"
  },
  "to_doze_nod": {
    "english": "To doze, nod",
    "bishnupriya": "উগনা",
    "bangla": "তন্দ্রা আসা, ঢুলা",
    "hindi": "झपकी लेना, सिर हिलाना"
  },
  "nodding_dozing_gerund": {
    "english": "Nodding, dozing (gerund)",
    "bishnupriya": "উঙ্গানি",
    "bangla": "তন্দ্রার ক্রিয়া",
    "hindi": "झपकी लेने की क्रिया"
  },
  "high": {
    "english": "High",
    "bishnupriya": "উচ",
    "bangla": "উঁচু",
    "hindi": "ऊँचा"
  },
  "just_proper_reasonable": {
    "english": "Just, proper, reasonable",
    "bishnupriya": "উচিত",
    "bangla": "উচিত",
    "hindi": "उचित"
  },
  "proportionately_befittingly": {
    "english": "Proportionately, befittingly",
    "bishnupriya": "উচিত-ডুমা",
    "bangla": "যথাযথ",
    "hindi": "उचित रूप से"
  },
  "spigot_peg": {
    "english": "Spigot, peg",
    "bishnupriya": "উচুক",
    "bangla": "খোঁচা",
    "hindi": "कील, खूँटा"
  },
  "peg": {
    "english": "Peg",
    "bishnupriya": "উচুপ",
    "bangla": "গোঁজ",
    "hindi": "खूँटी"
  },
  "wooden_piece_to_tighten": {
    "english": "Wooden piece to tighten something",
    "bishnupriya": "উচেপ",
    "bangla": "চেপে ধরার কাঠ",
    "hindi": "कसने की लकड़ी"
  },
  "frame_of_wood_bamboo": {
    "english": "Frame of wood/bamboo",
    "bishnupriya": "উচেল",
    "bangla": "কাঠের ফ্রেম",
    "hindi": "लकड़ी का चौखटा"
  },
  "narrow": {
    "english": "Narrow",
    "bishnupriya": "উচ্চিল-নচ্চিল",
    "bangla": "সংকীর্ণ",
    "hindi": "संकरा"
  },
  "straight": {
    "english": "Straight",
    "bishnupriya": "উচ্চু",
    "bangla": "সোজা",
    "hindi": "सीधा"
  },
  "suitability": {
    "english": "Suitability",
    "bishnupriya": "উচ্চেল",
    "bangla": "উপযুক্ততা",
    "hindi": "योग्यता"
  },
  "festival": {
    "english": "Festival",
    "bishnupriya": "উচ্ছাপ",
    "bangla": "উৎসব",
    "hindi": "उत्सव"
  },
  "to_brush_off_grass_weeds": {
    "english": "To brush off grass/weeds",
    "bishnupriya": "উচ",
    "bangla": "ঘাস উপড়ানো",
    "hindi": "घास निकालना"
  },
  "contempt_negligence": {
    "english": "Contempt, negligence",
    "bishnupriya": "উচাক",
    "bangla": "অবহেলা",
    "hindi": "उपेक्षा"
  },
  "deep_forest": {
    "english": "Deep forest",
    "bishnupriya": "উচাক-জঙ্গল",
    "bangla": "গভীর জঙ্গল",
    "hindi": "घना जंगल"
  },
  "brushing_off_grass_gerund": {
    "english": "Brushing off grass (gerund)",
    "bishnupriya": "উচানি",
    "bangla": "ঘাস উপড়ানোর ক্রিয়া",
    "hindi": "घास उखाड़ने की क्रिया"
  },
  "to_provoke_gush_up": {
    "english": "To provoke, to gush up",
    "bishnupriya": "উছালা",
    "bangla": "উস্কানো, ঝাঁপিয়ে ওঠা",
    "hindi": "उकसाना, उमड़ना"
  },
  "provoking_gerund": {
    "english": "Provoking (gerund)",
    "bishnupriya": "উছালানি",
    "bangla": "উস্কানির ক্রিয়া",
    "hindi": "उकसाने की क्रिया"
  },
  "remains_of_meal_leftover": {
    "english": "Remains of meal, leftover",
    "bishnupriya": "উছি",
    "bangla": "উচ্ছিষ্ট",
    "hindi": "जूठन"
  },
  "to_wrench_uproot": {
    "english": "To wrench, to uproot",
    "bishnupriya": "উছিল",
    "bangla": "উপড়ে ফেলা",
    "hindi": "उखाड़ना"
  },
  "wrenching_gerund": {
    "english": "Wrenching (gerund)",
    "bishnupriya": "উছিলানি",
    "bangla": "উপড়ানোর ক্রিয়া",
    "hindi": "उखाड़ने की क्रिया"
  },
  "stumbling": {
    "english": "Stumbling",
    "bishnupriya": "উছটা",
    "bangla": "ঠোক্কর খাওয়া",
    "hindi": "ठोकर लगना"
  },
  "to_kick": {
    "english": "To kick",
    "bishnupriya": "উছটা",
    "bangla": "লাথি মারা",
    "hindi": "लात मारना"
  },
  "kicking_gerund": {
    "english": "Kicking (gerund)",
    "bishnupriya": "উছটানি",
    "bangla": "লাথি মারার ক্রিয়া",
    "hindi": "लात मारने की क्रिया"
  },
  "weight": {
    "english": "Weight",
    "bishnupriya": "উজান",
    "bangla": "ওজন",
    "hindi": "वज़न"
  },
  "to_go_upstream": {
    "english": "To go upstream",
    "bishnupriya": "উজা",
    "bangla": "বিপরীত স্রোতে যাওয়া",
    "hindi": "धारा के विपरीत जाना"
  },
  "arguing_arrogantly_face_to_face": {
    "english": "Arguing arrogantly face-to-face",
    "bishnupriya": "উজাউজি",
    "bangla": "মুখোমুখি তর্ক",
    "hindi": "मुँहफट होकर बहस करना"
  },
  "upstream": {
    "english": "Upstream",
    "bishnupriya": "উজান",
    "bangla": "বিপরীত স্রোত",
    "hindi": "धारा के ऊपर"
  },
  "going_upstream_gerund": {
    "english": "Going upstream (gerund)",
    "bishnupriya": "উজানি",
    "bangla": "বিপরীত স্রোতে যাওয়ার ক্রিয়া",
    "hindi": "धारा के विपरीत जाने की क्रिया"
  },
  "to_wrench_severely_insult_badly": {
    "english": "To wrench severely, to insult badly",
    "bishnupriya": "উজুর",
    "bangla": "কঠিন অপমান করা",
    "hindi": "बुरी तरह अपमान करना"
  },
  "to_be_present_compensated": {
    "english": "To be present / to be compensated",
    "bishnupriya": "উজ্জ",
    "bangla": "উপস্থিত হওয়া / ক্ষতিপূরণ হওয়া",
    "hindi": "मौजूद होना / मुआवज़ा मिलना"
  },
  "to_produce_compensate": {
    "english": "To produce / to compensate",
    "bishnupriya": "উজ্জা",
    "bangla": "উৎপাদন করা / ক্ষতিপূরণ দেওয়া",
    "hindi": "पैदा करना / मुआवज़ा देना"
  },
  "being_present_producing_gerund": {
    "english": "Being present / producing (gerund)",
    "bishnupriya": "উজ্জানি",
    "bangla": "উৎপাদন/উপস্থিতির ক্রিয়া",
    "hindi": "पैदा करने/हाज़िर होने की क्रिया"
  },
  "empty_exhausted_desolate": {
    "english": "Empty, exhausted, desolate",
    "bishnupriya": "উজ্জার",
    "bangla": "খালি, শূন্য",
    "hindi": "खाली, उजाड़"
  },
  "straight_2": {
    "english": "Straight",
    "bishnupriya": "উজ্জু",
    "bangla": "সোজা",
    "hindi": "सीधा"
  },
  "camel": {
    "english": "Camel",
    "bishnupriya": "উট",
    "bangla": "উট",
    "hindi": "ऊँट"
  },
  "to_stir_food": {
    "english": "To stir (food)",
    "bishnupriya": "উট",
    "bangla": "নাড়া",
    "hindi": "चलाना (खाना)"
  },
  "bamboo_pipe_for_cooking_rice": {
    "english": "Bamboo pipe for cooking rice",
    "bishnupriya": "উটন",
    "bangla": "বাঁশের নল",
    "hindi": "बाँस की नली"
  },
  "keeping_things_topsy_turvy": {
    "english": "Keeping things topsy-turvy",
    "bishnupriya": "উটন-পটন",
    "bangla": "তালগোল পাকানো",
    "hindi": "उल्टा-पुल्टा करना"
  },
  "stirring_gerund_2": {
    "english": "Stirring (gerund)",
    "bishnupriya": "উটানি",
    "bangla": "নাড়ার ক্রিয়া",
    "hindi": "चलाने की क्रिया"
  },
  "violence_mischief": {
    "english": "Violence, mischief",
    "bishnupriya": "উৎপাত",
    "bangla": "উৎপাত",
    "hindi": "उपद्रव"
  },
  "to_rise_get_up": {
    "english": "To rise, to get up",
    "bishnupriya": "উঠ",
    "bangla": "ওঠা",
    "hindi": "उठना"
  },
  "to_raise_lift": {
    "english": "To raise, to lift",
    "bishnupriya": "উঠা",
    "bangla": "তোলা",
    "hindi": "उठाना"
  },
  "courtyard": {
    "english": "Courtyard",
    "bishnupriya": "উঠান",
    "bangla": "উঠান",
    "hindi": "आँगन"
  },
  "rising_raising_gerund": {
    "english": "Rising / raising (gerund)",
    "bishnupriya": "উঠানি",
    "bangla": "ওঠা/তোলার ক্রিয়া",
    "hindi": "उठने/उठाने की क्रिया"
  },
  "in_the_stage_of_growing": {
    "english": "In the stage of growing",
    "bishnupriya": "উঠুনি",
    "bangla": "বাড়ছে এমন",
    "hindi": "बढ़ रहा है ऐसा"
  },
  "otter": {
    "english": "Otter",
    "bishnupriya": "উদ",
    "bangla": "উদবিড়াল",
    "hindi": "ऊदबिलाव"
  },
  "wooden_piece_for_fitting": {
    "english": "Wooden piece for fitting",
    "bishnupriya": "উটাপ",
    "bangla": "গোঁজ কাঠ",
    "hindi": "जोड़ने की लकड़ी"
  },
  "to_speak_express": {
    "english": "To speak, to express",
    "bishnupriya": "উতারা",
    "bangla": "বলা, প্রকাশ করা",
    "hindi": "बोलना, व्यक्त करना"
  },
  "speaking_gerund": {
    "english": "Speaking (gerund)",
    "bishnupriya": "উতারানি",
    "bangla": "বলার ক্রিয়া",
    "hindi": "बोलने की क्रिया"
  },
  "reason_logic": {
    "english": "Reason, logic",
    "bishnupriya": "উতি",
    "bangla": "যুক্তি",
    "hindi": "तर्क"
  },
  "log_piece_of_wood": {
    "english": "Log, piece of wood",
    "bishnupriya": "উতুপ",
    "bangla": "গুঁড়ি",
    "hindi": "लट्ठा"
  },
  "destitute_very_poor": {
    "english": "Destitute, very poor",
    "bishnupriya": "উৎখারি / উত্থারি",
    "bangla": "নিঃস্ব",
    "hindi": "कंगाल"
  },
  "dust": {
    "english": "Dust",
    "bishnupriya": "উত্থুল",
    "bangla": "ধুলো",
    "hindi": "धूल"
  },
  "flying_to_fly_alternative_forms": {
    "english": "Flying / to fly (alternative forms)",
    "bishnupriya": "উড়া / উড়",
    "bangla": "উড়া",
    "hindi": "उड़ना"
  },
  "friend": {
    "english": "Friend",
    "bishnupriya": "উড়া",
    "bangla": "বন্ধু",
    "hindi": "दोस्त"
  },
  "friendly_related_as_friend": {
    "english": "Friendly, related as friend",
    "bishnupriya": "উড়াক",
    "bangla": "বন্ধুসুলভ",
    "hindi": "दोस्ताना"
  },
  "season_when_cattle_let_loose": {
    "english": "Season when cattle are let loose (no paddy in field)",
    "bishnupriya": "উদাম",
    "bangla": "গোরু ছাড়ার মরশুম",
    "hindi": "मवेशी छोड़ने का मौसम"
  },
  "unfettered_animal": {
    "english": "Unfettered animal",
    "bishnupriya": "উদামি",
    "bangla": "খোলা পশু",
    "hindi": "बिना बंधा पशु"
  },
  "loan_borrowed": {
    "english": "Loan / borrowed",
    "bishnupriya": "উদারি",
    "bangla": "ধার",
    "hindi": "उधार"
  },
  "fire_place_furnace": {
    "english": "Fire-place, furnace",
    "bishnupriya": "উদাদ",
    "bangla": "উনুন",
    "hindi": "चूल्हा"
  },
  "bare_naked": {
    "english": "Bare, naked",
    "bishnupriya": "উদালা",
    "bangla": "উলঙ্গ",
    "hindi": "नंगा"
  },
  "to_uproot_pull_out_loosen": {
    "english": "To uproot, pull out, loosen",
    "bishnupriya": "উদালা",
    "bangla": "উপড়ানো, ঢিলা করা",
    "hindi": "उखाड़ना, ढीला करना"
  },
  "uprooting_gerund": {
    "english": "Uprooting (gerund)",
    "bishnupriya": "উদালানি",
    "bangla": "উপড়ানোর ক্রিয়া",
    "hindi": "उखाड़ने की क्रिया"
  },
  "large_owl_sound_imitative": {
    "english": "Large owl (sound-imitative)",
    "bishnupriya": "উদুবুদু",
    "bangla": "বড়ো পেচা",
    "hindi": "बड़ा उल्लू"
  },
  "loud_uproar_fuss": {
    "english": "Loud uproar, fuss",
    "bishnupriya": "উদুম-দুদুম",
    "bangla": "হৈচৈ",
    "hindi": "शोर-गुल"
  },
  "mouse_rat": {
    "english": "Mouse, rat",
    "bishnupriya": "উদুর",
    "bangla": "ইঁদুর",
    "hindi": "चूहा"
  },
  "to_be_uprooted_loosened": {
    "english": "To be uprooted / loosened",
    "bishnupriya": "উদুল",
    "bangla": "উপড়ে যাওয়া",
    "hindi": "उखड़ जाना"
  },
  "being_uprooted_gerund": {
    "english": "Being uprooted (gerund)",
    "bishnupriya": "উদুলানি",
    "bangla": "উপড়ে যাওয়ার ক্রিয়া",
    "hindi": "उखड़ने की क्रिया"
  },
  "krishna_yashoda_dance_drama": {
    "english": "Krishna–Yaśodā dance-drama (damaru-binding story)",
    "bishnupriya": "উদুখল",
    "bangla": "যশোদা-কৃষ্ণ নাটক",
    "hindi": "यशोदा-कृष्ण नृत्य-नाटक"
  },
  "belch": {
    "english": "Belch",
    "bishnupriya": "উদগর",
    "bangla": "ঢেকুর",
    "hindi": "डकार"
  },
  "title_high_post": {
    "english": "Title, high post",
    "bishnupriya": "উদ্দা",
    "bangla": "উপাধি",
    "hindi": "पदवी"
  },
  "penniless_broke": {
    "english": "Penniless, broke",
    "bishnupriya": "উদ্দাসী",
    "bangla": "নিঃস্ব",
    "hindi": "कंगाल"
  },
  "meeting_interview": {
    "english": "Meeting, interview",
    "bishnupriya": "উনা",
    "bangla": "সাক্ষাৎ",
    "hindi": "मुलाकात"
  },
  "stamp_wooden_seal": {
    "english": "Stamp (wooden seal)",
    "bishnupriya": "উনাম",
    "bangla": "ছাপ",
    "hindi": "मुहर"
  },
  "suffix_mass_growth_pleonastic": {
    "english": "Suffix – mass growth / pleonastic",
    "bishnupriya": "-উনি",
    "bangla": "প্রচুর বৃদ্ধির প্রত্যয়",
    "hindi": "बहुत बढ़ने वाला प्रत्यय"
  },
  "young_plant_sapling": {
    "english": "Young plant, sapling",
    "bishnupriya": "উনৌ",
    "bangla": "চারা",
    "hindi": "पौधा"
  },
  "kind_of_tree_king_of_trees": {
    "english": "A kind of tree (\"king of trees\")",
    "bishnupriya": "উনিন্থৌ",
    "bangla": "এক ধরনের গাছ",
    "hindi": "एक प्रकार का पेड़"
  },
  "mouse_another_form": {
    "english": "Mouse (another form)",
    "bishnupriya": "উন্দুর",
    "bangla": "ইঁদুর",
    "hindi": "चूहा"
  },
  "mouse_eater_snake": {
    "english": "Mouse-eater snake",
    "bishnupriya": "উন্দুর-খৌরা",
    "bangla": "ইঁদুরখেকো সাপ",
    "hindi": "चूहा खाने वाला साँप"
  },
  "gangrene": {
    "english": "Gangrene",
    "bishnupriya": "উন্দুরা",
    "bangla": "গ্যাংগ্রিন",
    "hindi": "गैंग्रीन"
  },
  "act_of_understanding": {
    "english": "The act of understanding",
    "bishnupriya": "উপ",
    "bangla": "বোঝা",
    "hindi": "समझना"
  },
  "above_on_top": {
    "english": "Above, on top",
    "bishnupriya": "উপর",
    "bangla": "উপর",
    "hindi": "ऊपर"
  },
  "additional_profit": {
    "english": "Additional / profit",
    "bishnupriya": "উপরতি",
    "bangla": "অতিরিক্ত / লাভ",
    "hindi": "अतिरिक्त / मुनाफा"
  },
  "surface_related_extra": {
    "english": "Surface-related / extra",
    "bishnupriya": "উপরি",
    "bangla": "উপরিভাগের / অতিরিক্ত",
    "hindi": "सतही / अतिरिक्त"
  },
  "ornamental_episode_in_drama": {
    "english": "Ornamental episode in drama",
    "bishnupriya": "উপলভা",
    "bangla": "নাটকে অলঙ্কার পর্ব",
    "hindi": "नाटक में अलंकारिक अंश"
  },
  "plank_wooden_board": {
    "english": "Plank, wooden board",
    "bishnupriya": "উপাক",
    "bangla": "তক্তা",
    "hindi": "तख्ता"
  },
  "one_over_another": {
    "english": "One over another",
    "bishnupriya": "উপরা-উপরি",
    "bangla": "একের পর এক",
    "hindi": "एक के ऊपर एक"
  },
  "bowl_of_hookah": {
    "english": "Bowl of hookah",
    "bishnupriya": "উপরারি",
    "bangla": "হুকোর বাটি",
    "hindi": "हुक्के का चिलम"
  },
  "suffix_profession_nature": {
    "english": "Suffix – profession / nature (boatman, fisherman etc.)",
    "bishnupriya": "-উলিয়া",
    "bangla": "পেশা/প্রকৃতি প্রত্যয় (নৌলিয়া = নৌকোবাইচ)",
    "hindi": "पेशा/स्वभाव वाला प्रत्यय (नाविक आदि)"
  },
  "white_ant_termite": {
    "english": "White ant / termite",
    "bishnupriya": "উলু",
    "bangla": "উইপোকা",
    "hindi": "दीमक"
  },
  "ululation_women_festive": {
    "english": "Ululation by women on festive occasions",
    "bishnupriya": "উলু",
    "bangla": "কলকলানি / উলুধ্বনি",
    "hindi": "महिलाओं का हर्ष-ध्वनि (उलूलूलू)"
  },
  "land_monitor_lizard": {
    "english": "Land monitor lizard",
    "bishnupriya": "উলুবুড়া",
    "bangla": "গুইসাপ",
    "hindi": "गोह"
  },
  "pendulum": {
    "english": "Pendulum",
    "bishnupriya": "উলুম",
    "bangla": "দোলক",
    "hindi": "लोलक"
  },
  "whirl_whirlwind": {
    "english": "Whirl / whirlwind",
    "bishnupriya": "উলুরি",
    "bangla": "ঘূর্ণি / ঘূর্ণিঝড়",
    "hindi": "बवंडर"
  },
  "to_be_reversed": {
    "english": "To be reversed / turned upside down",
    "bishnupriya": "উলট",
    "bangla": "উল্টে যাওয়া",
    "hindi": "उलट जाना"
  },
  "reversed_opposite": {
    "english": "Reversed, opposite, upside down",
    "bishnupriya": "উল্টা",
    "bangla": "উল্টো",
    "hindi": "उल्टा"
  },
  "to_reverse_turn_over": {
    "english": "To reverse, to turn over",
    "bishnupriya": "উল্টা",
    "bangla": "উল্টানো",
    "hindi": "उलटना"
  },
  "reversing_turning_over": {
    "english": "Reversing / turning over (gerund)",
    "bishnupriya": "উল্টানি",
    "bangla": "উল্টানোর ক্রিয়া",
    "hindi": "उलटने की क्रिया"
  },
  "jumping_due_to_uneasiness": {
    "english": "Jumping due to uneasiness (alt.)",
    "bishnupriya": "উলফালি",
    "bangla": "অস্থিরতায় লাফানো",
    "hindi": "बेचैनी से उछलना"
  },
  "species_monkey": {
    "english": "A species of monkey (onom.)",
    "bishnupriya": "উল্লুক-ভাল্লুক",
    "bangla": "এক ধরনের বাঁদর",
    "hindi": "एक प्रकार का बंदर"
  },
  "pine_tree": {
    "english": "Pine tree",
    "bishnupriya": "উ'শাল",
    "bangla": "পাইন গাছ",
    "hindi": "चीड़ का पेड़"
  },
  "realisation_receipt_money": {
    "english": "Realisation / receipt (of money)",
    "bishnupriya": "উশাল",
    "bangla": "টাকা আদায়",
    "hindi": "वसूली"
  },
  "branch_tree": {
    "english": "Branch (of tree)",
    "bishnupriya": "উশা",
    "bangla": "ডাল",
    "hindi": "डाल"
  },
  "cover_pillow_blanket": {
    "english": "Cover for pillow/blanket",
    "bishnupriya": "উশার",
    "bangla": "বালিশ/কম্বলের কভার",
    "hindi": "तकिये/कंबल का कवर"
  },
  "to_instigate_provoke": {
    "english": "To instigate, provoke",
    "bishnupriya": "উশকা",
    "bangla": "উস্কানো",
    "hindi": "उकसाना"
  },
  "instigating_gerund": {
    "english": "Instigating (gerund)",
    "bishnupriya": "উশকানি",
    "bangla": "উস্কানির ক্রিয়া",
    "hindi": "उकसाने की क्रिया"
  },
  "expert_master": {
    "english": "Expert, master",
    "bishnupriya": "উস্তাদ",
    "bangla": "ওস্তাদ",
    "hindi": "उस्ताद"
  },
  "as_deserved_befittingly": {
    "english": "As deserved / befittingly",
    "bishnupriya": "উস-ঠাক-করে",
    "bangla": "যোগ্য মতো",
    "hindi": "उचित रूप से"
  },
  "main_pillar_village_chief": {
    "english": "Main pillar in village chief's portico",
    "bishnupriya": "উহাকতাল",
    "bangla": "মোড়লের বৈঠকখানার খুঁটি",
    "hindi": "मुखिया के बरामदे का मुख्य खंभा"
  },
  "to_winnow_paddy": {
    "english": "To winnow paddy (blow away husk by dropping from height)",
    "bishnupriya": "উহা",
    "bangla": "ধান ঝাড়া",
    "hindi": "फटकना (धान)"
  },
  "that_one_far": {
    "english": "That one (far)",
    "bishnupriya": "উহান",
    "bangla": "ওইটা (দূরের)",
    "hindi": "वह (दूर वाला)"
  },
  "parboiled_rice": {
    "english": "Parboiled rice",
    "bishnupriya": "উহানা",
    "bangla": "সিদ্ধ চাল",
    "hindi": "उकड़ा चावल"
  },
  "young_bamboo_shoot": {
    "english": "Young bamboo shoot",
    "bishnupriya": "উ'শই",
    "bangla": "বাঁশের কচি ডগা",
    "hindi": "बाँस का कोमल अंकुर"
  },
  "kind_timber_tree": {
    "english": "A kind of timber tree",
    "bishnupriya": "উ'শেন",
    "bangla": "এক ধরনের কাঠ",
    "hindi": "एक प्रकार की लकड़ी"
  },
  "putting_on_wearing_gerund": {
    "english": "Putting on, wearing (gerund)",
    "bishnupriya": "উরানি",
    "bangla": "পরানোর ক্রিয়া",
    "hindi": "पहनाने की क्रिया"
  },
  "first_person_present": {
    "english": "1st person present tense ending (\"I do\")",
    "bishnupriya": "-উরি",
    "bangla": "আমি-কারক প্রত্যয় (করুরি = আমি করি)",
    "hindi": "मैं करता हूँ वाला प्रत्यय"
  },
  "suffix_agent_instrument": {
    "english": "Suffix – agent / instrument",
    "bishnupriya": "-উরি",
    "bangla": "কর্তা/যন্ত্রবাচক প্রত্যয়",
    "hindi": "करने वाला / यंत्र वाला प्रत्यय"
  },
  "tailor_bird": {
    "english": "Tailor bird",
    "bishnupriya": "উরিক",
    "bangla": "টুনটুনি",
    "hindi": "दर्ज़ी चिड़िया"
  },
  "feminine_form_of_ura": {
    "english": "Feminine form of -urā",
    "bishnupriya": "-উরি",
    "bangla": "স্ত্রী-প্রত্যয়",
    "hindi": "स्त्री प्रत्यय"
  },
  "fried_rice": {
    "english": "Fried rice",
    "bishnupriya": "উরুন",
    "bangla": "ভাজা চাল",
    "hindi": "भुना चावल"
  },
  "wrapper_shawl": {
    "english": "Wrapper, shawl",
    "bishnupriya": "উ'রুনি",
    "bangla": "ওড়না",
    "hindi": "ओढ़नी"
  },
  "shady_place": {
    "english": "Shady place",
    "bishnupriya": "উরুম",
    "bangla": "ছায়াময় স্থান",
    "hindi": "छायादार जगह"
  },
  "warmth_of_fever": {
    "english": "Warmth (of fever)",
    "bishnupriya": "উরুম",
    "bangla": "জ্বরের গরম",
    "hindi": "बुखार की गर्मी"
  },
  "flat_root_of_tree": {
    "english": "Flat root of a tree",
    "bishnupriya": "উরুম্পাক",
    "bangla": "গাছের চ্যাপটা শিকড়",
    "hindi": "पेड़ की चपटी जड़"
  },
  "whirl_of_wind": {
    "english": "Whirl (of wind) / whirlwind",
    "bishnupriya": "উরুলি",
    "bangla": "ঘূর্ণি / ঘূর্ণিঝড়",
    "hindi": "बवंडर"
  },
  "kind_of_flower": {
    "english": "A kind of flower",
    "bishnupriya": "উরুলেই",
    "bangla": "এক ধরনের ফুল",
    "hindi": "एक तरह का फूल"
  },
  "veins_grain_wood": {
    "english": "Veins/grain of wood",
    "bishnupriya": "উরেই",
    "bangla": "কাঠের শিরা",
    "hindi": "लकड़ी की रेखाएँ"
  },
  "demarcation_wood_bamboo": {
    "english": "Demarcation by wood/bamboo",
    "bishnupriya": "উরেপ",
    "bangla": "কাঠ-বাঁশের চিহ্ন",
    "hindi": "लकड़ी/बाँस से निशान"
  },
  "restlessness": {
    "english": "Restlessness",
    "bishnupriya": "উরৌ-থরৌ",
    "bangla": "অস্থিরতা",
    "hindi": "बेचैनी"
  },
  "ladys_gauze_scarf": {
    "english": "Lady's gauze scarf",
    "bishnupriya": "উর্ণা",
    "bangla": "ওড়না",
    "hindi": "दुपट्टा"
  },
  "preparation": {
    "english": "Preparation",
    "bishnupriya": "উর্জুক",
    "bangla": "প্রস্তুতি",
    "hindi": "तैयारी"
  },
  "from_one_end_to_another": {
    "english": "From one end to another",
    "bishnupriya": "উর্পার",
    "bangla": "এক প্রান্ত থেকে অন্য প্রান্ত",
    "hindi": "एक सिरे से दूसरे सिरे तक"
  },
  "jumping_due_uneasiness": {
    "english": "Jumping due to uneasiness",
    "bishnupriya": "উর্ফালি",
    "bangla": "অস্থিরতায় লাফানো",
    "hindi": "बेचैनी से उछलना"
  },
  "to_fly": {
    "english": "To fly",
    "bishnupriya": "উর",
    "bangla": "উড়া",
    "hindi": "उड़ना"
  },
  "to_trample": {
    "english": "To trample",
    "bishnupriya": "উর",
    "bangla": "পদদলিত করা",
    "hindi": "कुचलना"
  },
  "to_throw": {
    "english": "To throw",
    "bishnupriya": "উড়া",
    "bangla": "ছুড়ে ফেলা",
    "hindi": "फेंकना"
  },
  "to_cause_to_fly": {
    "english": "To cause to fly",
    "bishnupriya": "উড়া",
    "bangla": "উড়ানো",
    "hindi": "उड़ाना"
  },
  "throw_negligence": {
    "english": "Throw / negligence",
    "bishnupriya": "উড়া",
    "bangla": "ছোড়া / অবহেলা",
    "hindi": "फेंक / उपेक्षा"
  },
  "set_to_flying": {
    "english": "Set to flying",
    "bishnupriya": "উরাইল",
    "bangla": "উড়িয়ে দেওয়া",
    "hindi": "उड़ा दिया"
  },
  "flying_causing_to_fly": {
    "english": "Flying / causing to fly (gerund)",
    "bishnupriya": "উরানি",
    "bangla": "উড়ার/উড়ানোর ক্রিয়া",
    "hindi": "उड़ने/उड़ाने की क्रिया"
  },
  "throwing_casting_off": {
    "english": "Throwing, casting off",
    "bishnupriya": "উরানি",
    "bangla": "ছুড়ে ফেলার ক্রিয়া",
    "hindi": "फेंकने की क्रिया"
  },
  "trampling_gerund": {
    "english": "Trampling (gerund)",
    "bishnupriya": "উ'রানি",
    "bangla": "পদদলনের ক্রিয়া",
    "hindi": "कुचलने की क्रिया"
  },
  "flying_free_bird": {
    "english": "Flying, free (bird)",
    "bishnupriya": "উরাল",
    "bangla": "উড়ন্ত, মুক্ত",
    "hindi": "उड़ता हुआ, आज़ाद"
  },
  "kidney_bean": {
    "english": "Kidney bean",
    "bishnupriya": "উরি",
    "bangla": "শিম",
    "hindi": "राजमा"
  },
  "kidney_bean_seed": {
    "english": "Kidney bean seed",
    "bishnupriya": "উরি-খাই",
    "bangla": "শিমের বীজ",
    "hindi": "राजमा का दाना"
  },
  "cold_temperature": {
    "english": "Cold (temperature)",
    "bishnupriya": "উল",
    "bangla": "ঠান্ডা",
    "hindi": "ठंडा"
  },
  "topsy_turvy": {
    "english": "Topsy-turvy",
    "bishnupriya": "উলট-পলট",
    "bangla": "তালগোল পাকানো",
    "hindi": "उल्टा-पुल्टा"
  },
  "udder": {
    "english": "Udder",
    "bishnupriya": "উলান",
    "bangla": "বাঁট",
    "hindi": "थन"
  },
  "to_bring_down_out": {
    "english": "To bring down/out (cooked food etc.)",
    "bishnupriya": "উলা",
    "bangla": "নামানো",
    "hindi": "उतारना"
  },
  "suffix_profession_nature2": {
    "english": "Suffix – profession / nature",
    "bishnupriya": "-উলা",
    "bangla": "পেশা/প্রকৃতি প্রত্যয়",
    "hindi": "पेशा/स्वभाव वाला प्रत्यय"
  },
  "matted_hair": {
    "english": "Matted (hair)",
    "bishnupriya": "উলা",
    "bangla": "জট পাকানো",
    "hindi": "उलझा हुआ"
  },
  "bringing_down_out_gerund": {
    "english": "Bringing down/out (gerund)",
    "bishnupriya": "উলানি",
    "bangla": "নামানোর ক্রিয়া",
    "hindi": "उतारने की क्रिया"
  },
  "to_uproot_stronger": {
    "english": "To uproot (stronger form)",
    "bishnupriya": "উপারা",
    "bangla": "জোরে উপড়ানো",
    "hindi": "ज़ोर से उखाड़ना"
  },
  "uprooting_gerund": {
    "english": "Uprooting (gerund)",
    "bishnupriya": "উপারানি",
    "bangla": "উপড়ানোর ক্রিয়া",
    "hindi": "उखाड़ने की क्रिया"
  },
  "fasting": {
    "english": "Fasting",
    "bishnupriya": "উপাস",
    "bangla": "উপবাস",
    "hindi": "उपवास"
  },
  "wooden_box": {
    "english": "Wooden box",
    "bishnupriya": "উপু",
    "bangla": "কাঠের বাক্স",
    "hindi": "लकड़ी का डिब्बा"
  },
  "to_be_present_compensated": {
    "english": "To be present / to be compensated (alt. of ujj-)",
    "bishnupriya": "উপজ",
    "bangla": "উপস্থিত হওয়া / ক্ষতিপূরণ হওয়া",
    "hindi": "मौजूद होना / भरपाई होना"
  },
  "to_bring_compensate": {
    "english": "To bring / to compensate (causative)",
    "bishnupriya": "উপজা",
    "bangla": "আনা / ক্ষতিপূরণ দেওয়া",
    "hindi": "लाना / मुआवज़ा देना"
  },
  "being_compensated_compensating": {
    "english": "Being compensated / compensating (gerund)",
    "bishnupriya": "উপজানি",
    "bangla": "ক্ষতিপূরণের ক্রিয়া",
    "hindi": "भरपाई करने की क्रिया"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "উফল",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक प्रकार की मछली"
  },
  "erect_upright": {
    "english": "Erect, upright / accompanying",
    "bishnupriya": "উবা",
    "bangla": "সোজা / সঙ্গে",
    "hindi": "सीधा / साथ"
  },
  "straight_and_plain": {
    "english": "Straight and plain (without beauty)",
    "bishnupriya": "উবা-উচান",
    "bangla": "সাদামাটা সোজা",
    "hindi": "बिलकुल सीधा-सादा"
  },
  "prostrate_lying_face_down": {
    "english": "Prostrate, lying face down",
    "bishnupriya": "উবুরি",
    "bangla": "উপুর হয়ে",
    "hindi": "औंधा"
  },
  "height_depth": {
    "english": "Height / depth",
    "bishnupriya": "উবি",
    "bangla": "উচ্চতা / গভীরতা",
    "hindi": "ऊँचाई / गहराई"
  },
  "warmth": {
    "english": "Warmth",
    "bishnupriya": "উম",
    "bangla": "উত্তাপ",
    "hindi": "गर्मी"
  },
  "act_of_keeping_mouth_shut": {
    "english": "The act of keeping mouth shut / confining",
    "bishnupriya": "উম",
    "bangla": "মুখ বন্ধ করা",
    "hindi": "मुँह बंद करना"
  },
  "search": {
    "english": "Search",
    "bishnupriya": "উম",
    "bangla": "খোঁজা",
    "hindi": "तलाश"
  },
  "warmth_another_form": {
    "english": "Warmth (another form)",
    "bishnupriya": "উমাক",
    "bangla": "গরম ভাব",
    "hindi": "गर्माहट"
  },
  "age_lifetime": {
    "english": "Age, lifetime",
    "bishnupriya": "উমর",
    "bangla": "বয়স",
    "hindi": "उम्र"
  },
  "forest": {
    "english": "Forest",
    "bishnupriya": "উমাং",
    "bangla": "জঙ্গল",
    "hindi": "जंगल"
  },
  "tapioca": {
    "english": "Tapioca",
    "bishnupriya": "উ-মাংকড়া / উ-মাঙ্গরা",
    "bangla": "কচু",
    "hindi": "कसावा / टैपिओका"
  },
  "fertile_and_dry": {
    "english": "Fertile and dry (soil)",
    "bishnupriya": "উমানা",
    "bangla": "উর্বর ও শুকনো",
    "hindi": "उपजाऊ और सूखा"
  },
  "warmth_of_steam": {
    "english": "Warmth of steam/vapour",
    "bishnupriya": "উমহিজা",
    "bangla": "ভাপের গরম",
    "hindi": "भाप की गर्मी"
  },
  "fan_hand_fan": {
    "english": "Fan (hand fan)",
    "bishnupriya": "উমেই",
    "bangla": "হাতপাখা",
    "hindi": "पंखा"
  },
  "suffix_likeness_nature": {
    "english": "Suffix – likeness / nature",
    "bishnupriya": "-(উ)ম্বা",
    "bangla": "সাদৃশ্য/প্রকৃতি প্রত্যয়",
    "hindi": "“जैसा / स्वभाव वाला” प्रत्यय"
  },
  "suffix_relation_likeness": {
    "english": "Suffix – relation / likeness / causative",
    "bishnupriya": "-উৱা",
    "bangla": "সম্পর্ক/সাদৃশ্য/কারক প্রত্যয়",
    "hindi": "संबंध/जैसा/कराने वाला प्रत्यय"
  },
  "growth": {
    "english": "Growth",
    "bishnupriya": "উৱানা",
    "bangla": "বৃদ্ধি",
    "hindi": "बढ़ोतरी"
  },
  "to_leak": {
    "english": "To leak",
    "bishnupriya": "উর",
    "bangla": "চুইয়ে পড়া",
    "hindi": "रिसना"
  },
  "lap_of_body": {
    "english": "Lap (of body)",
    "bishnupriya": "উর",
    "bangla": "কোল",
    "hindi": "गोद"
  },
  "to_put_on_wear_wrap": {
    "english": "To put on, to wear, to wrap",
    "bishnupriya": "উর",
    "bangla": "পরা, জড়ানো",
    "hindi": "पहनना, लपेटना"
  },
  "lap_another_form": {
    "english": "Lap (another form)",
    "bishnupriya": "উরাক",
    "bangla": "কোল",
    "hindi": "गोद"
  },
  "thigh": {
    "english": "Thigh",
    "bishnupriya": "উরত",
    "bangla": "উরু",
    "hindi": "जाँघ"
  },
  "putting_on_clothes": {
    "english": "Putting on clothes / dressing",
    "bishnupriya": "উ'রান",
    "bangla": "পরানো",
    "hindi": "पहनाना"
  },
  "nap_short_sleep": {
    "english": "Nap, short sleep",
    "bishnupriya": "উরাল-শরাল",
    "bangla": "ঘুমটুনি",
    "hindi": "छोटी नींद"
  },
  "bug_insect": {
    "english": "Bug, insect",
    "bishnupriya": "উরস",
    "bangla": "পোকা",
    "hindi": "कीड़ा"
  },
  "suffix_giving_growth": {
    "english": "Suffix – giving growth of (field of …)",
    "bishnupriya": "-উরা",
    "bangla": "প্রচুর বৃদ্ধির প্রত্যয়",
    "hindi": "बहुत बढ़ने वाला (खेत)"
  },
  "suffix_agent_nature": {
    "english": "Suffix – agent nature",
    "bishnupriya": "-উরা",
    "bangla": "কর্তৃ-প্রকৃতি প্রত্যয়",
    "hindi": "करने वाले का प्रत्यय"
  },
  "haste_hastily": {
    "english": "Haste / hastily",
    "bishnupriya": "উ'রা-উরি",
    "bangla": "তাড়াহুড়ো",
    "hindi": "जल्दबाज़ी"
  },
  "haste_hastily_stronger": {
    "english": "Haste / hastily (stronger)",
    "bishnupriya": "উ'রাদারা",
    "bangla": "বহু তাড়াতাড়ি",
    "hindi": "बहुत जल्दी"
  },
  "tricky": {
    "english": "Tricky",
    "bishnupriya": "পেচুয়া",
    "bangla": "চালাক",
    "hindi": "चालाक"
  },
  "belly": {
    "english": "Belly",
    "bishnupriya": "পেট",
    "bangla": "পেট",
    "hindi": "पेट"
  },
  "pregnant": {
    "english": "Pregnant",
    "bishnupriya": "পেটা",
    "bangla": "গর্ভবতী",
    "hindi": "गर्भवती"
  },
  "pot_bellied": {
    "english": "Pot-bellied",
    "bishnupriya": "পেটালা",
    "bangla": "পেটমোটা",
    "hindi": "पेटू"
  },
  "belt": {
    "english": "Belt",
    "bishnupriya": "পেটি",
    "bangla": "পেটি",
    "hindi": "पट्टी"
  },
  "piece_from_fish_belly": {
    "english": "Piece from fish belly",
    "bishnupriya": "পেটি",
    "bangla": "মাছের পেটের টুকরো",
    "hindi": "मछली का पेट का टुकड़ा"
  },
  "voracious": {
    "english": "Voracious",
    "bishnupriya": "পেটুক / পেটুয়া",
    "bangla": "পেটুক",
    "hindi": "पेटू"
  },
  "pot_bellied_2": {
    "english": "Pot-bellied",
    "bishnupriya": "পেটুলা",
    "bangla": "পেটমোটা",
    "hindi": "पेटू"
  },
  "female_pot_bellied": {
    "english": "Female pot-bellied",
    "bishnupriya": "পেটুলি",
    "bangla": "পেটমোটা মহিলা",
    "hindi": "पेट वाली औरत"
  },
  "made_flat_by_trampling": {
    "english": "Made flat by trampling",
    "bishnupriya": "পেটকাতা",
    "bangla": "পিষে চ্যাপটা",
    "hindi": "पैर से कुचला हुआ"
  },
  "to_send": {
    "english": "To send",
    "bishnupriya": "পেঠা-",
    "bangla": "পাঠানো",
    "hindi": "भेजना"
  },
  "peevish": {
    "english": "Peevish",
    "bishnupriya": "পেট",
    "bangla": "খিটখিটে",
    "hindi": "चिड़चिड़ा"
  },
  "kneading": {
    "english": "Kneading",
    "bishnupriya": "পেট",
    "bangla": "মাখা",
    "hindi": "गूंधना"
  },
  "faded_too_tired": {
    "english": "Faded / too tired",
    "bishnupriya": "পেট্থা",
    "bangla": "বিবর্ণ / অতি ক্লান্ত",
    "hindi": "फीका / बहुत थका"
  },
  "softness": {
    "english": "Softness",
    "bishnupriya": "পেটপেট",
    "bangla": "নরম নরম",
    "hindi": "मुलायम"
  },
  "stringed_instrument_vina": {
    "english": "A stringed instrument (vina)",
    "bishnupriya": "পেনা",
    "bangla": "বীণা",
    "hindi": "वीणा"
  },
  "totally_tired": {
    "english": "Totally tired",
    "bishnupriya": "পেন্ডাক",
    "bangla": "সম্পূর্ণ ক্লান্ত",
    "hindi": "बिल्कुल थक गया"
  },
  "short_statured": {
    "english": "Short-statured",
    "bishnupriya": "পেন্ডালা",
    "bangla": "খাটো",
    "hindi": "बौना"
  },
  "ant": {
    "english": "Ant",
    "bishnupriya": "পেপুরা",
    "bangla": "পিঁপড়ে",
    "hindi": "चींटी"
  },
  "upto_until": {
    "english": "Upto, until",
    "bishnupriya": "পেয়া",
    "bangla": "পর্যন্ত",
    "hindi": "तक"
  },
  "nail": {
    "english": "Nail",
    "bishnupriya": "পেরাক",
    "bangla": "পেরেক",
    "hindi": "कील"
  },
  "small_fishes": {
    "english": "Small fishes",
    "bishnupriya": "পেরি",
    "bangla": "ছোটো মাছ",
    "hindi": "छोटी मछलियाँ"
  },
  "wind_instrument_band": {
    "english": "Wind instrument / band",
    "bishnupriya": "পেরেচেকা",
    "bangla": "বাঁশি / ব্যান্ড",
    "hindi": "बांसुरी / बैंड"
  },
  "ghost": {
    "english": "Ghost",
    "bishnupriya": "পেরেত",
    "bangla": "ভূত",
    "hindi": "भूत"
  },
  "benefit": {
    "english": "Benefit",
    "bishnupriya": "ফাইদা",
    "bangla": "লাভ",
    "hindi": "फायदा"
  },
  "compensation": {
    "english": "Compensation",
    "bishnupriya": "ফাইমালি",
    "bangla": "ক্ষতিপূরণ",
    "hindi": "मुआवज़ा"
  },
  "layer": {
    "english": "Layer",
    "bishnupriya": "ফাইল",
    "bangla": "স্তর",
    "hindi": "परत"
  },
  "prolapse_of_rectum": {
    "english": "Prolapse of rectum",
    "bishnupriya": "পেরে-লুমথেন",
    "bangla": "মলদ্বার বের হওয়া",
    "hindi": "गुदा बाहर आना"
  },
  "chronic_disease": {
    "english": "Chronic disease",
    "bishnupriya": "পেরেলেই",
    "bangla": "দীর্ঘস্থায়ী রোগ",
    "hindi": "पुरानी बीमारी"
  },
  "deep_muddy_hole_sinus": {
    "english": "Deep muddy hole / sinus",
    "bishnupriya": "পেরো",
    "bangla": "গভীর কাদার গর্ত / সাইনাস",
    "hindi": "गहरा कीचड़ का गड्ढा / साइनस"
  },
  "very_small": {
    "english": "Very small",
    "bishnupriya": "পেরকান",
    "bangla": "খুব ছোটো",
    "hindi": "बहुत छोटा"
  },
  "satisfied": {
    "english": "Satisfied",
    "bishnupriya": "পেল",
    "bangla": "তৃপ্ত",
    "hindi": "संतुष्ट"
  },
  "putting_up": {
    "english": "Putting up",
    "bishnupriya": "পেশ",
    "bangla": "লাগানো",
    "hindi": "लगाना"
  },
  "profession": {
    "english": "Profession",
    "bishnupriya": "পেশা",
    "bangla": "পেশা",
    "hindi": "पेशा"
  },
  "information": {
    "english": "Information",
    "bishnupriya": "পৌ",
    "bangla": "খবর",
    "hindi": "खबर"
  },
  "clear_coarse": {
    "english": "Clear / coarse",
    "bishnupriya": "পাউ",
    "bangla": "স্পষ্ট / রুক্ষ",
    "hindi": "साफ / खुरदरा"
  },
  "messenger": {
    "english": "Messenger",
    "bishnupriya": "পাউয়ালপা",
    "bangla": "দূত",
    "hindi": "दूत"
  },
  "unexpert_rough": {
    "english": "Unexpert, rough",
    "bishnupriya": "পাউকাতা",
    "bangla": "অদক্ষ / রুক্ষ",
    "hindi": "अनाड़ी / खुरदरा"
  },
  "letter": {
    "english": "Letter",
    "bishnupriya": "পৌচে",
    "bangla": "চিঠি",
    "hindi": "चिट्ठी"
  },
  "blame": {
    "english": "Blame",
    "bishnupriya": "পৌথান",
    "bangla": "দোষারোপ",
    "hindi": "इल्ज़ाम"
  },
  "one_fourth": {
    "english": "One-fourth",
    "bishnupriya": "পাউয়া",
    "bangla": "এক-চতুর্থাংশ",
    "hindi": "चौथाई"
  },
  "pole_of_net": {
    "english": "Pole of net",
    "bishnupriya": "পৌরা",
    "bangla": "জালের খুঁটি",
    "hindi": "जाल का खंभा"
  },
  "day_after_tomorrow": {
    "english": "Day after tomorrow",
    "bishnupriya": "পৌরু",
    "bangla": "পরশু",
    "hindi": "परसों"
  },
  "proverb": {
    "english": "Proverb",
    "bishnupriya": "পৌরেই",
    "bangla": "প্রবাদ",
    "hindi": "कहावत"
  },
  "trap": {
    "english": "Trap",
    "bishnupriya": "ফান",
    "bangla": "ফাঁদ",
    "hindi": "जाल"
  },
  "expressed_wakeful": {
    "english": "Expressed / wakeful",
    "bishnupriya": "ফান",
    "bangla": "প্রকাশিত / জাগ্রত",
    "hindi": "ज़ाहिर / जागता"
  },
  "mutual_meeting": {
    "english": "Mutual meeting",
    "bishnupriya": "ফান্না-ফান্নি",
    "bangla": "পরস্পর দেখাসাক্ষাৎ",
    "hindi": "एक-दूसरे से मिलना"
  },
  "heat": {
    "english": "Heat",
    "bishnupriya": "ফানফান",
    "bangla": "গরম গরম",
    "hindi": "गर्मी"
  },
  "poke_instigation": {
    "english": "Poke / instigation",
    "bishnupriya": "ফাচাফাচি",
    "bangla": "খোঁচা / উসকানি",
    "hindi": "छेड़ना / उकसाना"
  },
  "swollen_spongy": {
    "english": "Swollen, spongy",
    "bishnupriya": "ফাচফাচা",
    "bangla": "ফোলা ফোলা",
    "hindi": "फूला हुआ"
  },
  "sound_of_bursting": {
    "english": "Sound of bursting",
    "bishnupriya": "ফাট",
    "bangla": "ফাটার শব্দ",
    "hindi": "फटने की आवाज़"
  },
  "pimple": {
    "english": "Pimple",
    "bishnupriya": "ফাট",
    "bangla": "ব্রণ",
    "hindi": "फुंसी"
  },
  "clear": {
    "english": "Clear",
    "bishnupriya": "ফটিক",
    "bangla": "স্ফটিক",
    "hindi": "स्फटिक"
  },
  "clearness_of_light": {
    "english": "Clearness of light",
    "bishnupriya": "ফটফট",
    "bangla": "ঝকঝকে",
    "hindi": "चमक"
  },
  "patching_fault_finding": {
    "english": "Patching / fault-finding",
    "bishnupriya": "ফট",
    "bangla": "তালি দেওয়া / ছোটো দোষ ধরা",
    "hindi": "पैबंद / छोटी गलती पकड़ना"
  },
  "waist_coat": {
    "english": "Waist-coat",
    "bishnupriya": "ফাতুয়া",
    "bangla": "ফতুয়া",
    "hindi": "फतुआ"
  },
  "hood_dewlap": {
    "english": "Hood / dewlap",
    "bishnupriya": "ফানা",
    "bangla": "ফণা / গলকম্বল",
    "hindi": "फन / गले की चमड़ी"
  },
  "trick": {
    "english": "Trick",
    "bishnupriya": "ফান্দি",
    "bangla": "চালাকি",
    "hindi": "चालाकी"
  },
  "split_bamboo": {
    "english": "Split bamboo",
    "bishnupriya": "ফাপ",
    "bangla": "ফাটা বাঁশ",
    "hindi": "चीरा बांस"
  },
  "hollow_swollen": {
    "english": "Hollow / swollen",
    "bishnupriya": "ফাপাচা / ফাপারা",
    "bangla": "ফাঁপা / ফোলা",
    "hindi": "खोखला / फूला हुआ"
  },
  "hollowness": {
    "english": "Hollowness",
    "bishnupriya": "ফাপ্ফাপ",
    "bangla": "ফোলা ফোলা",
    "hindi": "खोखलापन"
  },
  "settlement": {
    "english": "Settlement",
    "bishnupriya": "ফয়সালা",
    "bangla": "ফয়সালা",
    "hindi": "फैसला"
  },
  "french_bean": {
    "english": "French bean",
    "bishnupriya": "ফারাস",
    "bangla": "ফরাসি বিন্স",
    "hindi": "फ्रेंच बीन्स"
  },
  "cricket_insect": {
    "english": "Cricket (insect)",
    "bishnupriya": "ফারিং",
    "bangla": "ঝিঁঝিঁ পোকা",
    "hindi": "झींगुर"
  },
  "rough_to_touch": {
    "english": "Rough to touch",
    "bishnupriya": "ফরকা",
    "bangla": "রুক্ষ",
    "hindi": "खुरदरा"
  },
  "rolling_with_pain": {
    "english": "Rolling with pain",
    "bishnupriya": "ফরফর",
    "bangla": "ব্যথায় গড়াগড়ি",
    "hindi": "दर्द से लोटना"
  },
  "dusty_material_on_head": {
    "english": "Dusty material on head",
    "bishnupriya": "ফরফরিয়া",
    "bangla": "মাথায় ধুলো",
    "hindi": "सिर पर धूल"
  },
  "form_printing": {
    "english": "Form (printing)",
    "bishnupriya": "ফরমা",
    "bangla": "ফর্ম",
    "hindi": "फॉर्म"
  },
  "order": {
    "english": "Order",
    "bishnupriya": "ফরমাইশ",
    "bangla": "অর্ডার",
    "hindi": "ऑर्डर"
  },
  "requisitioned": {
    "english": "Requisitioned",
    "bishnupriya": "ফরমাইশি",
    "bangla": "অর্ডার করা",
    "hindi": "मँगाया हुआ"
  },
  "clean_white": {
    "english": "Clean, white",
    "bishnupriya": "ফরসা",
    "bangla": "ফর্সা",
    "hindi": "गोरा"
  },
  "fruitlessness": {
    "english": "Fruitlessness",
    "bishnupriya": "ফারসা",
    "bangla": "ফলহীন",
    "hindi": "बेकार"
  },
  "flight": {
    "english": "Flight",
    "bishnupriya": "ফার",
    "bangla": "উড়ান",
    "hindi": "उड़ान"
  },
  "feather_wing": {
    "english": "Feather / wing",
    "bishnupriya": "ফারি",
    "bangla": "পালক / ডানা",
    "hindi": "पर / पंख"
  },
  "to_grow_intr": {
    "english": "To grow (intr.)",
    "bishnupriya": "ফাল-",
    "bangla": "বাড়া",
    "hindi": "बढ़ना"
  },
  "bark": {
    "english": "Bark",
    "bishnupriya": "ফালাপ",
    "bangla": "ছাল",
    "hindi": "छाल"
  },
  "to_grow_trans": {
    "english": "To grow (trans.)",
    "bishnupriya": "ফালা-",
    "bangla": "বাড়ানো",
    "hindi": "बढ़ाना"
  },
  "consequences": {
    "english": "Consequences",
    "bishnupriya": "ফালাফাল",
    "bangla": "ফলাফল",
    "hindi": "नतीजा"
  },
  "fruit_meat": {
    "english": "Fruit-meat",
    "bishnupriya": "ফালার",
    "bangla": "ফলের মাংসল অংশ",
    "hindi": "फल का गूदा"
  },
  "flouline": {
    "english": "Flouline",
    "bishnupriya": "ফালালি",
    "bangla": "ফ্লোরিন",
    "hindi": "फ्लोरिन"
  },
  "layer_cataract": {
    "english": "Layer / cataract",
    "bishnupriya": "ফালি",
    "bangla": "স্তর / ছানি",
    "hindi": "परत / मोतियाबिंद"
  },
  "stretch_of_cloth_in_weaving": {
    "english": "Stretch of cloth in weaving",
    "bishnupriya": "ফালেই",
    "bangla": "তাঁতে কাপড়ের অংশ",
    "hindi": "ताने में कपड़े का हिस्सा"
  },
  "harvest": {
    "english": "Harvest",
    "bishnupriya": "ফসল",
    "bangla": "ফসল",
    "hindi": "फसल"
  },
  "giving_crops_once_a_year": {
    "english": "Giving crops once a year",
    "bishnupriya": "ফসলি",
    "bangla": "একফসলি",
    "hindi": "एक फसली"
  },
  "to_be_loosened": {
    "english": "To be loosened",
    "bishnupriya": "ফাস্ক-",
    "bangla": "ঢিলা হওয়া",
    "hindi": "ढीला होना"
  },
  "filled_up_improved": {
    "english": "Filled up / improved",
    "bishnupriya": "ফা",
    "bangla": "পূর্ণ / উন্নত",
    "hindi": "भरा / बेहतर"
  },
  "void_unnecessary": {
    "english": "Void / unnecessary",
    "bishnupriya": "ফাউকি",
    "bangla": "অপ্রয়োজনীয়",
    "hindi": "बेकार"
  },
  "gap": {
    "english": "Gap",
    "bishnupriya": "ফাক",
    "bangla": "ফাঁক",
    "hindi": "गैप"
  },
  "empty_void": {
    "english": "Empty / void",
    "bishnupriya": "ফাকা",
    "bangla": "খালি",
    "hindi": "खाली"
  },
  "to_wander_uselessly": {
    "english": "To wander uselessly",
    "bishnupriya": "ফাকা-",
    "bangla": "অকারণ ঘুরে বেড়ানো",
    "hindi": "बेकार घूमना"
  },
  "cheat_deceit": {
    "english": "Cheat / deceit",
    "bishnupriya": "ফাকা-বাজি",
    "bangla": "ঠকবাজি",
    "hindi": "धोखा"
  },
  "injured_by_insects_fruits": {
    "english": "Injured by insects (fruits)",
    "bishnupriya": "ফাকরা",
    "bangla": "পোকায় কাটা ফল",
    "hindi": "कीड़े से खराब फल"
  },
  "fraud_trick": {
    "english": "Fraud / trick",
    "bishnupriya": "ফাকি",
    "bangla": "প্রতারণা",
    "hindi": "धोखा"
  },
  "coriander": {
    "english": "Coriander",
    "bishnupriya": "ফাকিথাম",
    "bangla": "ধনে",
    "hindi": "धनिया"
  },
  "cheat": {
    "english": "Cheat",
    "bishnupriya": "ফাক্কর",
    "bangla": "ঠগ",
    "hindi": "ठग"
  },
  "trickery": {
    "english": "Trickery",
    "bishnupriya": "ফাক্করামি",
    "bangla": "ঠগবাজি",
    "hindi": "ठगी"
  },
  "open": {
    "english": "Open",
    "bishnupriya": "ফাক্তা",
    "bangla": "খোলা",
    "hindi": "खुला"
  },
  "time_of_chance": {
    "english": "Time of chance",
    "bishnupriya": "ফাক্তাল",
    "bangla": "সুযোগের সময়",
    "hindi": "मौका"
  },
  "bag": {
    "english": "Bag",
    "bishnupriya": "খাউ",
    "bangla": "থলে",
    "hindi": "थैला"
  },
  "tightening_by_striking": {
    "english": "Tightening by striking",
    "bishnupriya": "খাউ",
    "bangla": "আঘাত করে শক্ত করা",
    "hindi": "ठोककर कसना"
  },
  "rope_wood_under_yoke": {
    "english": "Rope/wood under yoke",
    "bishnupriya": "খাউয়ারি / খাউকারি",
    "bangla": "জোয়ালের নিচের দড়ি/কাঠ",
    "hindi": "जुए के नीचे की रस्सी/लकड़ी"
  },
  "throat_neck": {
    "english": "Throat / neck",
    "bishnupriya": "খাউনা / খাউনাও / খাউনু",
    "bangla": "গলা",
    "hindi": "गला"
  },
  "teachers_attendant": {
    "english": "Teacher’s attendant",
    "bishnupriya": "খাউপা / খাউ-পুবা",
    "bangla": "গুরুর সঙ্গী",
    "hindi": "गुरु का सहायक"
  },
  "to_go": {
    "english": "To go",
    "bishnupriya": "গ-",
    "bangla": "যাওয়া",
    "hindi": "जाना"
  },
  "suffix_long_narrow_round_thing_abundance": {
    "english": "Suffix: long-narrow-round thing / abundance",
    "bishnupriya": "-গা",
    "bangla": "লম্বা-সরু-গোল বস্তু / প্রচুরতা প্রত্যয়",
    "hindi": "लंबा-पतला-गोल वस्तु / बहुतायत प्रत्यय"
  },
  "noise": {
    "english": "Noise",
    "bishnupriya": "গাই",
    "bangla": "চিৎকার",
    "hindi": "शोर"
  },
  "hue_and_cry_bustle": {
    "english": "Hue and cry, bustle",
    "bishnupriya": "গাইচাল",
    "bangla": "হৈচৈ",
    "hindi": "हल्ला"
  },
  "secret_wealth": {
    "english": "Secret wealth",
    "bishnupriya": "গাইবি",
    "bangla": "গোপন সম্পদ",
    "hindi": "गुप्त धन"
  },
  "rolling": {
    "english": "Rolling",
    "bishnupriya": "গাইর",
    "bangla": "গড়ানো",
    "hindi": "लुढ़कना"
  },
  "so_on_and_so_forth": {
    "english": "So on and so forth",
    "bishnupriya": "গাইরো",
    "bangla": "ইত্যাদি",
    "hindi": "वगैरह"
  },
  "vakula_flower": {
    "english": "Vakula flower",
    "bishnupriya": "গাকুল",
    "bangla": "বকুল ফুল",
    "hindi": "बकुल फूल"
  },
  "big_frog": {
    "english": "Big frog",
    "bishnupriya": "গাগা",
    "bangla": "বড়ো ব্যাঙ",
    "hindi": "बड़ा मेंढक"
  },
  "snore_snoring": {
    "english": "Snore / snoring",
    "bishnupriya": "গাগরা / গাগরা-চেলানি",
    "bangla": "নাক ডাকা",
    "hindi": "खर्राटे"
  },
  "appearing_still_while_whirling_fast_top": {
    "english": "Appearing still while whirling fast (top)",
    "bishnupriya": "গান-ধারানি",
    "bangla": "ঘুরতে ঘুরতে স্থির দেখা",
    "hindi": "तेज़ घूमते हुए स्थिर दिखना"
  },
  "scented_rotten_smell_m": {
    "english": "Scented / rotten smell (M.)",
    "bishnupriya": "গানালা",
    "bangla": "সুগন্ধযুক্ত / পচা গন্ধ (M.)",
    "hindi": "सुगंधित / सड़ा हुआ गंध (M.)"
  },
  "to_fill_the_air_with_odour": {
    "english": "To fill the air with odour",
    "bishnupriya": "গানালা-",
    "bangla": "গন্ধ ছড়ানো",
    "hindi": "हवा में गंध फैलाना"
  },
  "to_feed": {
    "english": "To feed",
    "bishnupriya": "খাউয়া-",
    "bangla": "খাওয়ানো",
    "hindi": "खिलाना"
  },
  "feeding_gerund": {
    "english": "Feeding (gerund)",
    "bishnupriya": "খাউয়ানি",
    "bangla": "খাওয়ানোর ক্রিয়া",
    "hindi": "खिलाने की क्रिया"
  },
  "part_of_rasa_costume_brassiere": {
    "english": "Part of Rasa-costume / brassiere",
    "bishnupriya": "খাউয়াল",
    "bangla": "রাস-পোশাকের অংশ / ব্রা",
    "hindi": "रास वेशभूषा का हिस्सा / ब्रा"
  },
  "longing_thirst": {
    "english": "Longing, thirst",
    "bishnupriya": "খাউরান",
    "bangla": "তৃষ্ণা",
    "hindi": "प्यास"
  },
  "thirsty_masc_fem": {
    "english": "Thirsty (masc./fem.)",
    "bishnupriya": "খাউরানপা / খাউরানপি",
    "bangla": "তৃষ্ণার্ত",
    "hindi": "प्यासा"
  },
  "throat": {
    "english": "Throat",
    "bishnupriya": "খাউরি",
    "bangla": "গলা",
    "hindi": "गला"
  },
  "a_species_of_fish": {
    "english": "A species of fish",
    "bishnupriya": "গানিয়া",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक तरह की मछली"
  },
  "ganga_shaped_pitcher": {
    "english": "Ganga-shaped pitcher",
    "bishnupriya": "গাঙ্গাপুল",
    "bangla": "গঙ্গাজলির ঘটি",
    "hindi": "गंगा जल का घड़ा"
  },
  "a_species_of_cricket": {
    "english": "A species of cricket",
    "bishnupriya": "গাঙ্গারা",
    "bangla": "এক ধরনের ঝিঁঝিঁ পোকা",
    "hindi": "एक तरह का झींगुर"
  },
  "having_deep_texture_cloth": {
    "english": "Having deep texture (cloth)",
    "bishnupriya": "গাচ",
    "bangla": "ঘন বুনোট",
    "hindi": "गाढ़ा बनावट वाला"
  },
  "thorn": {
    "english": "Thorn",
    "bishnupriya": "গা'চা",
    "bangla": "কাঁটা",
    "hindi": "काँटा"
  },
  "grassy_uncultivated_land": {
    "english": "Grassy / uncultivated land",
    "bishnupriya": "গাচুরা",
    "bangla": "ঘাসজমি / অনাবাদি জমি",
    "hindi": "घास का मैदान / बिना जोती ज़मीन"
  },
  "to_undertake_accept": {
    "english": "To undertake / accept",
    "bishnupriya": "গাচ-",
    "bangla": "গ্রহণ করা",
    "hindi": "स्वीकार करना"
  },
  "to_entrust_deposit": {
    "english": "To entrust, deposit",
    "bishnupriya": "গাছা-",
    "bangla": "আমানত রাখা",
    "hindi": "जमा करना"
  },
  "entrusted": {
    "english": "Entrusted",
    "bishnupriya": "গাছত",
    "bangla": "আমানত",
    "hindi": "जमा किया हुआ"
  },
  "accepting_entrusting_gerund": {
    "english": "Accepting / entrusting (gerund)",
    "bishnupriya": "গাছানি",
    "bangla": "গ্রহণ/আমানত রাখার ক্রিয়া",
    "hindi": "स्वीकार/जमा करने की क्रिया"
  },
  "semi_old_cloth": {
    "english": "Semi-old (cloth)",
    "bishnupriya": "গাছপুন্না",
    "bangla": "আধা-পুরানো কাপড়",
    "hindi": "आधा पुराना कपड़ा"
  },
  "yard_measurement": {
    "english": "Yard (measurement)",
    "bishnupriya": "গজ",
    "bangla": "গজ",
    "hindi": "गज"
  },
  "rush_pressure_difficulty": {
    "english": "Rush, pressure, difficulty",
    "bishnupriya": "গজব",
    "bangla": "গোলমাল",
    "hindi": "हंगामा"
  },
  "ghazal_melody": {
    "english": "Ghazal (melody)",
    "bishnupriya": "গজল",
    "bangla": "গজল",
    "hindi": "ग़ज़ल"
  },
  "a_kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "গজার",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक तरह की मछली"
  },
  "commotion_bungling": {
    "english": "Commotion, bungling",
    "bishnupriya": "গা'ঞ্চাল",
    "bangla": "গোলমাল",
    "hindi": "हंगामा"
  },
  "bazar": {
    "english": "Bazar",
    "bishnupriya": "গঞ্জ",
    "bangla": "গঞ্জ / হাট",
    "hindi": "गंज / बाजार"
  },
  "lump": {
    "english": "Lump",
    "bishnupriya": "গাটা",
    "bangla": "ঢিবি",
    "hindi": "ढेला"
  },
  "frame_style": {
    "english": "Frame / style",
    "bishnupriya": "গাঠান",
    "bangla": "গঠন / শৈলী",
    "hindi": "ढाँचा / शैली"
  },
  "stylist": {
    "english": "Stylist",
    "bishnupriya": "গাঠানিয়া",
    "bangla": "শৈলীবিদ",
    "hindi": "शैलीकार"
  },
  "to_count_to_care": {
    "english": "To count / to care",
    "bishnupriya": "গান-",
    "bangla": "গোনা / যত্ন নেওয়া",
    "hindi": "गिनना / ध्यान रखना"
  },
  "astrologer": {
    "english": "Astrologer",
    "bishnupriya": "গানক",
    "bangla": "জ্যোতিষী",
    "hindi": "ज्योतिषी"
  },
  "counting_caring": {
    "english": "Counting / caring",
    "bishnupriya": "গা'না",
    "bangla": "গণনা",
    "hindi": "गिनती"
  },
  "cow_dung_cake": {
    "english": "Cow-dung cake",
    "bishnupriya": "গান্থি",
    "bangla": "গোবরের খইল",
    "hindi": "गोबर की खाद"
  },
  "hue_and_cry": {
    "english": "Hue and cry",
    "bishnupriya": "গন্ডগোল",
    "bangla": "গোলমাল",
    "hindi": "हंगामा"
  },
  "rhinoceros": {
    "english": "Rhinoceros",
    "bishnupriya": "গান্দার",
    "bangla": "গণ্ডার",
    "hindi": "गैंडा"
  },
  "area_limit": {
    "english": "Area, limit",
    "bishnupriya": "গান্দি",
    "bangla": "এলাকা",
    "hindi": "इलाका"
  },
  "smell": {
    "english": "Smell",
    "bishnupriya": "গত",
    "bangla": "গন্ধ",
    "hindi": "गंध"
  },
  "gone_late": {
    "english": "Gone / late",
    "bishnupriya": "গাতা",
    "bangla": "গেছে / দেরি",
    "hindi": "गया / देर"
  },
  "because_of": {
    "english": "Because of",
    "bishnupriya": "গাতিকে",
    "bangla": "কারণে",
    "hindi": "के कारण"
  },
  "fixed_settled": {
    "english": "Fixed, settled",
    "bishnupriya": "গতবন্ধা",
    "bangla": "নির্ধারিত",
    "hindi": "तय / स्थिर"
  },
  "having_bad_smell": {
    "english": "Having bad smell",
    "bishnupriya": "গাদুয়া",
    "bangla": "দুর্গন্ধযুক্ত",
    "hindi": "बदबूदार"
  },
  "plump_fleshy": {
    "english": "Plump, fleshy",
    "bishnupriya": "গাদগাদ",
    "bangla": "গোলমাল / মাংসল",
    "hindi": "मोटा-ताज़ा"
  },
  "mattress_cushion": {
    "english": "Mattress, cushion",
    "bishnupriya": "গাদ্দি",
    "bangla": "গদি",
    "hindi": "गद्दी"
  },
  "boastful_talk": {
    "english": "Boastful talk",
    "bishnupriya": "গাপ",
    "bangla": "আত্মপ্রশংসা",
    "hindi": "डींग हाँकना"
  },
  "to_boast": {
    "english": "To boast",
    "bishnupriya": "গাপা-",
    "bangla": "বড়াই করা",
    "hindi": "शेखी बघारना"
  },
  "boastful_person": {
    "english": "Boastful person",
    "bishnupriya": "গাপুয়া",
    "bangla": "বড়াইয়া",
    "hindi": "शेखीमार"
  },
  "cow_dung": {
    "english": "Cow-dung",
    "bishnupriya": "গাবর",
    "bangla": "গোবর",
    "hindi": "गोबर"
  },
  "residue_after_molasses": {
    "english": "Residue after molasses",
    "bishnupriya": "গাবরি",
    "bangla": "গুড়ের ছিবড়ে",
    "hindi": "गुड़ का बचा हुआ"
  },
  "wheat": {
    "english": "Wheat",
    "bishnupriya": "গাম",
    "bangla": "গম",
    "hindi": "गेहूँ"
  },
  "fit_suitable": {
    "english": "Fit, suitable",
    "bishnupriya": "গাম",
    "bangla": "উপযুক্ত",
    "hindi": "ठीक"
  },
  "to_be_moistened": {
    "english": "To be moistened",
    "bishnupriya": "গাম-",
    "bangla": "ভিজে যাওয়া",
    "hindi": "नम होना"
  },
  "to_moisten": {
    "english": "To moisten",
    "bishnupriya": "গামা-",
    "bangla": "ভিজানো",
    "hindi": "गीला करना"
  },
  "moistening_gerund": {
    "english": "Moistening (gerund)",
    "bishnupriya": "গামানি",
    "bangla": "ভিজানোর ক্রিয়া",
    "hindi": "गीला करने की क्रिया"
  },
  "loud_laugh": {
    "english": "Loud laugh",
    "bishnupriya": "ফাকফাক",
    "bangla": "হা হা হাসি",
    "hindi": "ज़ोर की हँसी"
  },
  "to_laugh_loudly": {
    "english": "To laugh loudly",
    "bishnupriya": "ফাকফাকা-",
    "bangla": "জোরে হাসা",
    "hindi": "ज़ोर से हँसना"
  },
  "joke": {
    "english": "Joke",
    "bishnupriya": "ফাগি",
    "bangla": "ঠাট্টা",
    "hindi": "मज़ाक"
  },
  "holi_powder": {
    "english": "Holi powder",
    "bishnupriya": "ফাগুয়া",
    "bangla": "হোলির গুঁড়ো",
    "hindi": "होली का गुलाल"
  },
  "attainment_satisfaction": {
    "english": "Attainment / satisfaction",
    "bishnupriya": "ফান",
    "bangla": "প্রাপ্তি / তৃপ্তি",
    "hindi": "प्राप्ति / संतुष्टि"
  },
  "competent": {
    "english": "Competent",
    "bishnupriya": "ফান",
    "bangla": "যোগ্য",
    "hindi": "योग्य"
  },
  "satisfied": {
    "english": "Satisfied",
    "bishnupriya": "ফানচা",
    "bangla": "তৃপ্ত",
    "hindi": "संतुष्ट"
  },
  "competition": {
    "english": "Competition",
    "bishnupriya": "ফান্না",
    "bangla": "প্রতিযোগিতা",
    "hindi": "मुकाबला"
  },
  "precocity": {
    "english": "Precocity",
    "bishnupriya": "ফাতলামি",
    "bangla": "অকালপক্বতা",
    "hindi": "जल्दबाज़ी"
  },
  "to_burst_crack": {
    "english": "To burst / crack",
    "bishnupriya": "ফাট-",
    "bangla": "ফাটা",
    "hindi": "फटना"
  },
  "lock_up": {
    "english": "Lock-up",
    "bishnupriya": "ফাতাক",
    "bangla": "হাজত",
    "hindi": "हवालात"
  },
  "fissure_crack": {
    "english": "Fissure / crack",
    "bishnupriya": "ফাতাল",
    "bangla": "ফাটল",
    "hindi": "दरार"
  },
  "split_cracked": {
    "english": "Split / cracked",
    "bishnupriya": "ফাতা",
    "bangla": "ফাটা",
    "hindi": "फटा"
  },
  "to_tear_split": {
    "english": "To tear / split",
    "bishnupriya": "ফাতা-",
    "bangla": "ছিঁড়া",
    "hindi": "फाड़ना"
  },
  "mutual_bloodshed": {
    "english": "Mutual bloodshed",
    "bishnupriya": "ফাতাফাতি",
    "bangla": "পরস্পর রক্তপাত",
    "hindi": "आपस में खून-खराबा"
  },
  "complete": {
    "english": "Complete",
    "bishnupriya": "ফাত",
    "bangla": "সম্পূর্ণ",
    "hindi": "पूरा"
  },
  "leisure": {
    "english": "Leisure",
    "bishnupriya": "ফাত্তাক",
    "bangla": "ফুরসত",
    "hindi": "फुरसत"
  },
  "rarely": {
    "english": "Rarely",
    "bishnupriya": "ফাত্তাকে",
    "bangla": "কদাচিৎ",
    "hindi": "कभी-कभी"
  },
  "being_filled": {
    "english": "Being filled",
    "bishnupriya": "ফানা",
    "bangla": "পূর্ণ হওয়া",
    "hindi": "भरना"
  },
  "striped_lower_garment": {
    "english": "Striped lower garment",
    "bishnupriya": "ফানেক",
    "bangla": "ডোরাকাটা লুঙ্গি",
    "hindi": "धारीदार लुंगी"
  },
  "seat_for_deity": {
    "english": "Seat for deity",
    "bishnupriya": "ফান্তাম",
    "bangla": "দেবতার আসন",
    "hindi": "देवता का आसन"
  },
  "trap": {
    "english": "Trap",
    "bishnupriya": "ফান্দ",
    "bangla": "ফাঁদ",
    "hindi": "जाल"
  },
  "steam": {
    "english": "Steam",
    "bishnupriya": "ফাপ",
    "bangla": "বাষ্প",
    "hindi": "भाप"
  },
  "holi_powder_2": {
    "english": "Holi powder",
    "bishnupriya": "ফাপ",
    "bangla": "হোলির গুঁড়ো",
    "hindi": "गुलाल"
  },
  "to_get_swollen": {
    "english": "To get swollen",
    "bishnupriya": "ফাপ-",
    "bangla": "ফুলে যাওয়া",
    "hindi": "सूजना"
  },
  "confusion": {
    "english": "Confusion",
    "bishnupriya": "ফাফর",
    "bangla": "বিভ্রান্তি",
    "hindi": "उलझन"
  },
  "bed": {
    "english": "Bed",
    "bishnupriya": "ফাম",
    "bangla": "বিছানা",
    "hindi": "बिस्तर"
  },
  "place": {
    "english": "Place",
    "bishnupriya": "ফাম",
    "bangla": "জায়গা",
    "hindi": "जगह"
  },
  "bed_for_family_head": {
    "english": "Bed for family head",
    "bishnupriya": "ফামেল-কা",
    "bangla": "পরিবারের মাথার বিছানা",
    "hindi": "परिवार के मुखिया का बिस्तर"
  },
  "place_to_sit": {
    "english": "Place to sit",
    "bishnupriya": "ফাম্ফাম",
    "bangla": "বসার জায়গা",
    "hindi": "बैठने की जगह"
  },
  "beddings": {
    "english": "Beddings",
    "bishnupriya": "ফামরুক",
    "bangla": "বিছানার জিনিস",
    "hindi": "बिस्तर का सामान"
  },
  "to_be_torn": {
    "english": "To be torn",
    "bishnupriya": "ফার-",
    "bangla": "ছিঁড়ে যাওয়া",
    "hindi": "फटना"
  },
  "to_tear": {
    "english": "To tear",
    "bishnupriya": "ফার-",
    "bangla": "ছিঁড়া",
    "hindi": "फाड़ना"
  },
  "distance_gap": {
    "english": "Distance / gap",
    "bishnupriya": "ফারাক",
    "bangla": "দূরত্ব / ফাঁক",
    "hindi": "फर्क / अंतर"
  },
  "torn_critical_time": {
    "english": "Torn / critical time",
    "bishnupriya": "ফারা",
    "bangla": "ছেঁড়া / সংকটকাল",
    "hindi": "फटा / मुश्किल समय"
  },
  "prank": {
    "english": "Prank",
    "bishnupriya": "ফারান",
    "bangla": "দুষ্টুমি",
    "hindi": "शरारत"
  },
  "red_woolen_cloth": {
    "english": "Red woolen cloth",
    "bishnupriya": "ফারানচি",
    "bangla": "লাল উলের কাপড়",
    "hindi": "लाल ऊनी कपड़ा"
  },
  "hanging_till_death": {
    "english": "Hanging till death",
    "bishnupriya": "ফারাচি",
    "bangla": "ফাঁসি",
    "hindi": "फाँसी"
  },
  "ploughshare": {
    "english": "Ploughshare",
    "bishnupriya": "ফালা",
    "bangla": "লাঙলের ফলা",
    "hindi": "हल का फाल"
  },
  "jump": {
    "english": "Jump",
    "bishnupriya": "ফাল",
    "bangla": "লাফ",
    "hindi": "छलांग"
  },
  "opened_spread": {
    "english": "Opened / spread",
    "bishnupriya": "ফাল",
    "bangla": "খোলা",
    "hindi": "खुला"
  },
  "consequences": {
    "english": "Consequences",
    "bishnupriya": "ফালাফাল",
    "bangla": "ফলাফল",
    "hindi": "नतीजा"
  },
  "fruit_meat": {
    "english": "Fruit-meat",
    "bishnupriya": "ফালার",
    "bangla": "ফলের গুদা",
    "hindi": "फल का गूदा"
  },
  "side": {
    "english": "Side",
    "bishnupriya": "ফালু",
    "bangla": "পাশ",
    "hindi": "किनारा"
  },
  "spread": {
    "english": "Spread",
    "bishnupriya": "ফাল্তা",
    "bangla": "ছড়ানো",
    "hindi": "फैला हुआ"
  },
  "to_open_spread": {
    "english": "To open / spread",
    "bishnupriya": "ফাল্তা-",
    "bangla": "খোলা / ছড়ানো",
    "hindi": "खोलना / फैलाना"
  },
  "time_of_ceremony": {
    "english": "Time of ceremony",
    "bishnupriya": "ফাল্তাম",
    "bangla": "অনুষ্ঠানের সময়",
    "hindi": "समारोह का समय"
  },
  "extra": {
    "english": "Extra",
    "bishnupriya": "ফাল্তু",
    "bangla": "অতিরিক্ত",
    "hindi": "फालतू"
  },
  "jumping": {
    "english": "Jumping",
    "bishnupriya": "ফালদানি",
    "bangla": "লাফানো",
    "hindi": "उछलना"
  },
  "weighing_scale": {
    "english": "Weighing scale",
    "bishnupriya": "ফাল্লা",
    "bangla": "তারাজু",
    "hindi": "तराजू"
  },
  "hanging": {
    "english": "Hanging",
    "bishnupriya": "ফাসি",
    "bangla": "ফাঁসি",
    "hindi": "फाँसी"
  },
  "cleverness": {
    "english": "Cleverness",
    "bishnupriya": "ফিক্কির",
    "bangla": "চতুরতা",
    "hindi": "चालाकी"
  },
  "lining_cloth": {
    "english": "Lining cloth",
    "bishnupriya": "ফিগা",
    "bangla": "আস্তরের কাপড়",
    "hindi": "अस्तर का कपड़ा"
  },
  "nasty_various_forms": {
    "english": "Nasty (various forms)",
    "bishnupriya": "গেরমানা / গেরমানিয়া / গেরমানপা",
    "bangla": "নোংরা",
    "hindi": "गंदा"
  },
  "to_happen": {
    "english": "To happen",
    "bishnupriya": "ঘাট-",
    "bangla": "ঘটা",
    "hindi": "होना"
  },
  "to_cause_to_happen": {
    "english": "To cause to happen",
    "bishnupriya": "ঘাতা-",
    "bangla": "ঘটানো",
    "hindi": "करवाना"
  },
  "thumb": {
    "english": "Thumb",
    "bishnupriya": "ঘন্টা",
    "bangla": "বুড়ো আঙুল",
    "hindi": "अंगूठा"
  },
  "bell": {
    "english": "Bell",
    "bishnupriya": "ঘান্টি",
    "bangla": "ঘণ্টা",
    "hindi": "घंटी"
  },
  "small_jar": {
    "english": "Small jar",
    "bishnupriya": "ঘাটিন",
    "bangla": "ছোটো ঘটি",
    "hindi": "छोटा घड़ा"
  },
  "house_family": {
    "english": "House, family",
    "bishnupriya": "ঘর",
    "bangla": "ঘর",
    "hindi": "घर"
  },
  "house_wife_wife": {
    "english": "House-wife, wife",
    "bishnupriya": "ঘরানি",
    "bangla": "গৃহিণী",
    "hindi": "गृहिणी"
  },
  "domestic": {
    "english": "Domestic",
    "bishnupriya": "ঘরুয়া",
    "bangla": "ঘরোয়া",
    "hindi": "घरेलू"
  },
  "horse": {
    "english": "Horse",
    "bishnupriya": "ঘাড়া",
    "bangla": "ঘোড়া",
    "hindi": "घोड़ा"
  },
  "edge_clock": {
    "english": "Edge / clock",
    "bishnupriya": "ঘারি",
    "bangla": "কিনারা / ঘড়ি",
    "hindi": "किनारा / घड़ी"
  },
  "gavial_crocodile": {
    "english": "Gavial (crocodile)",
    "bishnupriya": "ঘরিয়াল",
    "bangla": "ঘড়িয়াল",
    "hindi": "घड़ियाल"
  },
  "to_rub": {
    "english": "To rub",
    "bishnupriya": "ঘাস-",
    "bangla": "ঘষা",
    "hindi": "रगड़ना"
  },
  "sore": {
    "english": "Sore",
    "bishnupriya": "ঘা",
    "bangla": "ঘা",
    "hindi": "घाव"
  },
  "expert": {
    "english": "Expert",
    "bishnupriya": "ঘাগি",
    "bangla": "দক্ষ",
    "hindi": "माहिर"
  },
  "path_of_descent_in_river_river": {
    "english": "Path of descent in river / river",
    "bishnupriya": "ঘাট",
    "bangla": "ঘাট",
    "hindi": "घाट"
  },
  "religious_conduct_vaishnavism": {
    "english": "Religious conduct (Vaishnavism)",
    "bishnupriya": "গৌরিয়া",
    "bangla": "গৌড়ীয় ধর্মাচরণ",
    "hindi": "गौड़ीय वैष्णव धर्म"
  },
  "arrest": {
    "english": "Arrest",
    "bishnupriya": "গ্রেপ্তার",
    "bangla": "গ্রেপ্তার",
    "hindi": "गिरफ्तार"
  },
  "to_shut_close": {
    "english": "To shut, close",
    "bishnupriya": "ঘাত-",
    "bangla": "বন্ধ করা",
    "hindi": "बंद करना"
  },
  "to_search_thoroughly": {
    "english": "To search thoroughly",
    "bishnupriya": "ঘাতা-",
    "bangla": "তল্লাশি করা",
    "hindi": "अच्छी तरह तलाश करना"
  },
  "sweat_perspiration": {
    "english": "Sweat, perspiration",
    "bishnupriya": "ঘাম",
    "bangla": "ঘাম",
    "hindi": "पसीना"
  },
  "to_perspire": {
    "english": "To perspire",
    "bishnupriya": "ঘাম-",
    "bangla": "ঘামা",
    "hindi": "पसीना आना"
  },
  "prickly_heat": {
    "english": "Prickly heat",
    "bishnupriya": "ঘামামাচি",
    "bangla": "ঘামাচি",
    "hindi": "घमौरी"
  },
  "neck": {
    "english": "Neck",
    "bishnupriya": "ঘর",
    "bangla": "গলা",
    "hindi": "गला"
  },
  "grass": {
    "english": "Grass",
    "bishnupriya": "ঘাস",
    "bangla": "ঘাস",
    "hindi": "घास"
  },
  "grassy_land": {
    "english": "Grassy land",
    "bishnupriya": "ঘাসুরা",
    "bangla": "ঘাসজমি",
    "hindi": "घास का मैदान"
  },
  "clarified_butter": {
    "english": "Clarified butter",
    "bishnupriya": "ঘি",
    "bangla": "ঘি",
    "hindi": "घी"
  },
  "looking_like_ghee": {
    "english": "Looking like ghee",
    "bishnupriya": "ঘিয়া",
    "bangla": "ঘি-এর মতো",
    "hindi": "घी जैसा"
  },
  "anklet_with_bells": {
    "english": "Anklet (with bells)",
    "bishnupriya": "ঘুঙ্গুর",
    "bangla": "নূপুর",
    "hindi": "घुंघरू"
  },
  "covered_boat": {
    "english": "Covered boat",
    "bishnupriya": "ঘুন্তি-নাউ",
    "bangla": "ঢাকা নৌকা",
    "hindi": "ढकी हुई नाव"
  },
  "to_sleep": {
    "english": "To sleep",
    "bishnupriya": "ঘুম",
    "bangla": "ঘুমানো",
    "hindi": "सोना"
  },
  "sleep": {
    "english": "Sleep",
    "bishnupriya": "ঘুম",
    "bangla": "ঘুম",
    "hindi": "नींद"
  },
  "sleepy": {
    "english": "Sleepy",
    "bishnupriya": "ঘুমুয়া",
    "bangla": "ঘুমপাড়ানি",
    "hindi": "नींद वाला"
  },
  "to_turn_about_intr_trans": {
    "english": "To turn about (intr./trans.)",
    "bishnupriya": "ঘুর / ঘুরা-",
    "bangla": "ঘোরা",
    "hindi": "घूमना"
  },
  "keenly_attentive": {
    "english": "Keenly attentive",
    "bishnupriya": "ঘুর্গা",
    "bangla": "সতর্ক",
    "hindi": "चौकस"
  },
  "bribe": {
    "english": "Bribe",
    "bishnupriya": "ঘুস",
    "bangla": "ঘুষ",
    "hindi": "रिश्वत"
  },
  "to_surround": {
    "english": "To surround",
    "bishnupriya": "ঘের-",
    "bangla": "ঘিরে ফেলা",
    "hindi": "घेरना"
  },
  "encirclement": {
    "english": "Encirclement",
    "bishnupriya": "ঘেরাও",
    "bangla": "ঘেরাও",
    "hindi": "घेराव"
  },
  "to_arrange": {
    "english": "To arrange",
    "bishnupriya": "গুছা-",
    "bangla": "সাজানো",
    "hindi": "सजाना"
  },
  "to_displace": {
    "english": "To displace",
    "bishnupriya": "গূছা-",
    "bangla": "সরিয়ে দেওয়া",
    "hindi": "हटाना"
  },
  "small_bundle": {
    "english": "Small bundle",
    "bishnupriya": "গুছি",
    "bangla": "ছোটো গোছা",
    "hindi": "छोटा गट्ठर"
  },
  "hump": {
    "english": "Hump",
    "bishnupriya": "গুজ",
    "bangla": "কুঁজ",
    "hindi": "कूबड़"
  },
  "rumour": {
    "english": "Rumour",
    "bishnupriya": "গুজব",
    "bangla": "গুজব",
    "hindi": "अफवाह"
  },
  "hump_backed": {
    "english": "Hump-backed",
    "bishnupriya": "গুজা / গুজুয়া",
    "bangla": "কুঁজো",
    "hindi": "कुबड़ा"
  },
  "to_make_sound_talk_abuse": {
    "english": "To make sound / talk / abuse",
    "bishnupriya": "গুজুর-",
    "bangla": "শব্দ করা / কথা বলা / গালাগালি",
    "hindi": "आवाज़ करना / बात करना / गाली देना"
  },
  "front_tuck_of_dhuti": {
    "english": "Front tuck of dhuti",
    "bishnupriya": "গুঞ্জা",
    "bangla": "ধুতির সামনের গিঁট",
    "hindi": "धोती का आगे का गाँठ"
  },
  "herd_party": {
    "english": "Herd, party",
    "bishnupriya": "গুত",
    "bangla": "পাল / দল",
    "hindi": "झुंड / पार्टी"
  },
  "big_suffix": {
    "english": "Big (suffix)",
    "bishnupriya": "-গুটা",
    "bangla": "বড়ো (প্রত্যয়)",
    "hindi": "बड़ा (प्रत्यय)"
  },
  "fruit_seed_gain_in_game": {
    "english": "Fruit, seed / gain in game",
    "bishnupriya": "গুত্তা",
    "bangla": "ফল / বীজ / লাভ",
    "hindi": "फल / बीज / लाभ"
  },
  "gravel_game_pawn": {
    "english": "Gravel / game pawn",
    "bishnupriya": "গুত্তি",
    "bangla": "নুড়ি / খেলার গুটি",
    "hindi": "कंकड़ / खेल का मोहरा"
  },
  "kite": {
    "english": "Kite",
    "bishnupriya": "গূত্তি",
    "bangla": "ঘুড়ি",
    "hindi": "पतंग"
  },
  "herd_small_pox": {
    "english": "Herd / small pox",
    "bishnupriya": "গুথি",
    "bangla": "পাল / বসন্ত",
    "hindi": "झुंड / चेचक"
  },
  "merited": {
    "english": "Merited",
    "bishnupriya": "গুনিবান",
    "bangla": "গুণী",
    "hindi": "गुणी"
  },
  "ruffian": {
    "english": "Ruffian",
    "bishnupriya": "গুন্ডা",
    "bangla": "গুন্ডা",
    "hindi": "गुंडा"
  },
  "hooliganism": {
    "english": "Hooliganism",
    "bishnupriya": "গুন্ডামি",
    "bangla": "গুন্ডাগিরি",
    "hindi": "गुंडागर्दी"
  },
  "push_to_hurt": {
    "english": "Push / to hurt",
    "bishnupriya": "গুতা / গুতা-",
    "bangla": "ধাক্কা / আঘাত",
    "hindi": "धक्का / चोट"
  },
  "small_ball_of_hard_earth": {
    "english": "Small ball of hard earth",
    "bishnupriya": "গূতিন",
    "bangla": "শক্ত মাটির গোলা",
    "hindi": "सख्त मिट्टी का गोला"
  },
  "godown": {
    "english": "Godown",
    "bishnupriya": "গুদাম",
    "bangla": "গোডাউন",
    "hindi": "गोदाम"
  },
  "button": {
    "english": "Button",
    "bishnupriya": "গুদাম",
    "bangla": "বোতাম",
    "hindi": "बटन"
  },
  "swollen_navel": {
    "english": "Swollen navel",
    "bishnupriya": "গুদুন",
    "bangla": "ফোলা নাভি",
    "hindi": "फूली हुई नाभि"
  },
  "evening_twilight": {
    "english": "Evening twilight",
    "bishnupriya": "গুধুলি",
    "bangla": "গোধূলি",
    "hindi": "गोधूलि"
  },
  "whispering": {
    "english": "Whispering",
    "bishnupriya": "গুনাগুনি",
    "bangla": "ফিসফিস",
    "hindi": "कानाफूसी"
  },
  "to_mutter": {
    "english": "To mutter",
    "bishnupriya": "গুঙ্গুনা-",
    "bangla": "বিড়বিড় করা",
    "hindi": "बुदबुदाना"
  },
  "to_cover": {
    "english": "To cover",
    "bishnupriya": "গুর-",
    "bangla": "ঢাকা",
    "hindi": "ढकना"
  },
  "cream_coloured": {
    "english": "Cream-coloured",
    "bishnupriya": "গুরা",
    "bangla": "ক্রিম রঙ",
    "hindi": "क्रीम रंग"
  },
  "cow": {
    "english": "Cow",
    "bishnupriya": "গুরু",
    "bangla": "গরু",
    "hindi": "गाय"
  },
  "preceptor_spiritual_guide": {
    "english": "Preceptor / spiritual guide",
    "bishnupriya": "গুরু",
    "bangla": "গুরু",
    "hindi": "गुरु"
  },
  "grudge_obstinacy": {
    "english": "Grudge / obstinacy",
    "bishnupriya": "গুর্দা",
    "bangla": "আক্রোশ / জেদ",
    "hindi": "नाराज़गी / ज़िद"
  },
  "dust_rice_dust": {
    "english": "Dust / rice-dust",
    "bishnupriya": "গুরা",
    "bangla": "ধুলো / চালের গুঁড়ো",
    "hindi": "धूल / चावल का चूरा"
  },
  "root_close_quarters": {
    "english": "Root / close quarters",
    "bishnupriya": "গুরি",
    "bangla": "শিকড় / কাছাকাছি",
    "hindi": "जड़ / नज़दीक"
  },
  "hubble_bubble_pulse_breaker": {
    "english": "Hubble-bubble / pulse breaker",
    "bishnupriya": "গুর্গুরি",
    "bangla": "হুঁকোর গড়গড় / ডাল ভাঙার যন্ত্র",
    "hindi": "हुक्का की गड़गड़ाहट / दाल तोड़ने का यंत्र"
  },
  "flood_turbid": {
    "english": "Flood / turbid",
    "bishnupriya": "গুলা",
    "bangla": "বন্যা / ঘোলা",
    "hindi": "बाढ़ / गन्दा"
  },
  "to_churn": {
    "english": "To churn",
    "bishnupriya": "গু'লা-",
    "bangla": "মন্থন করা",
    "hindi": "मथना"
  },
  "rose": {
    "english": "Rose",
    "bishnupriya": "গুলাপ",
    "bangla": "গোলাপ",
    "hindi": "गुलाब"
  },
  "rose_colour": {
    "english": "Rose-colour",
    "bishnupriya": "গুলাপি",
    "bangla": "গোলাপি",
    "hindi": "गुलाबी"
  },
  "slave": {
    "english": "Slave",
    "bishnupriya": "গুলাম",
    "bangla": "গোলাম",
    "hindi": "गुलाम"
  },
  "slavery": {
    "english": "Slavery",
    "bishnupriya": "গুলামি",
    "bangla": "গোলামি",
    "hindi": "गुलामी"
  },
  "some_few_small_things": {
    "english": "Some, few (small things)",
    "bishnupriya": "গু'লি",
    "bangla": "কিছু",
    "hindi": "कुछ"
  },
  "round_shaped_zero": {
    "english": "Round-shaped / zero",
    "bishnupriya": "গু'ল্লা",
    "bangla": "গোল / শূন্য",
    "hindi": "गोल / शून्य"
  },
  "bullet_small_hard_ball": {
    "english": "Bullet / small hard ball",
    "bishnupriya": "গু'ল্লি",
    "bangla": "গুলি",
    "hindi": "गोली"
  },
  "leprosy_family": {
    "english": "Leprosy / family",
    "bishnupriya": "গুষ্ঠি",
    "bangla": "কুষ্ঠ / পরিবার",
    "hindi": "कुष्ठ / परिवार"
  },
  "cow_2": {
    "english": "Cow",
    "bishnupriya": "গেই",
    "bangla": "গরু",
    "hindi": "गाय"
  },
  "wheat_powder": {
    "english": "Wheat powder",
    "bishnupriya": "গেউ",
    "bangla": "গমের গুঁড়ো",
    "hindi": "गेहूँ का आटा"
  },
  "gas_light": {
    "english": "Gas light",
    "bishnupriya": "গেজ",
    "bangla": "গ্যাস আলো",
    "hindi": "गैस लाइट"
  },
  "fool_masc_fem": {
    "english": "Fool (masc./fem.)",
    "bishnupriya": "গুবেটিয়া / গুবেটি",
    "bangla": "বোকা",
    "hindi": "मूर्ख"
  },
  "zamindars_clerk_fatty_man": {
    "english": "Zamindar's clerk / fatty man",
    "bishnupriya": "গু'মাস্তা",
    "bangla": "জমিদারের কেরানি / মোটা লোক",
    "hindi": "ज़मींदार का क्लर्क / मोटा आदमी"
  },
  "betel_nut": {
    "english": "Betel-nut",
    "bishnupriya": "গুয়া",
    "bangla": "সুপারি",
    "hindi": "सुपारी"
  },
  "poverty": {
    "english": "Poverty",
    "bishnupriya": "গরিবানা",
    "bangla": "গরিবি",
    "hindi": "गरीबी"
  },
  "piece_of_bamboo_wood_for_fencing": {
    "english": "Piece of bamboo/wood for fencing",
    "bishnupriya": "গা'র্চি",
    "bangla": "বেড়ার বাঁশ/কাঠ",
    "hindi": "बाड़ के लिए बांस/लकड़ी"
  },
  "to_shout": {
    "english": "To shout",
    "bishnupriya": "গা'র্জ-",
    "bangla": "চেঁচানো",
    "hindi": "चिल्लाना"
  },
  "shouting_gerund": {
    "english": "Shouting (gerund)",
    "bishnupriya": "গা'র্জানি",
    "bangla": "চেঁচানোর ক্রিয়া",
    "hindi": "चिल्लाने की क्रिया"
  },
  "neck_2": {
    "english": "Neck",
    "bishnupriya": "গা'র্দান",
    "bangla": "গর্দান",
    "hindi": "गर्दन"
  },
  "difficulty": {
    "english": "Difficulty",
    "bishnupriya": "গা'র্দিস",
    "bangla": "বিপদ",
    "hindi": "मुसीबत"
  },
  "a_kind_of_skin_disease_heat_rash": {
    "english": "A kind of skin disease (heat rash)",
    "bishnupriya": "গা'র্মি",
    "bangla": "গরমের রোগ",
    "hindi": "गर्मी की बीमारी"
  },
  "want_of_symmetry": {
    "english": "Want of symmetry",
    "bishnupriya": "গা'র্মিল",
    "bangla": "অসমতা",
    "hindi": "असमानता"
  },
  "to_make": {
    "english": "To make",
    "bishnupriya": "গারা-",
    "bangla": "তৈরি করা",
    "hindi": "बनाना"
  },
  "to_roll": {
    "english": "To roll",
    "bishnupriya": "গা'রা-",
    "bangla": "গড়ানো",
    "hindi": "लुढ़काना"
  },
  "self_made_false": {
    "english": "Self-made, false",
    "bishnupriya": "গারা",
    "bangla": "নিজে তৈরি / মিথ্যা",
    "hindi": "खुद बनाया / झूठा"
  },
  "rolling_hither_and_thither": {
    "english": "Rolling hither and thither",
    "bishnupriya": "গারাগারি",
    "bangla": "এদিক-ওদিক গড়ানো",
    "hindi": "इधर-उधर लुढ़कना"
  },
  "making_rolling_gerund": {
    "english": "Making / rolling (gerund)",
    "bishnupriya": "গারানি",
    "bangla": "তৈরির / গড়ানোর ক্রিয়া",
    "hindi": "बनाने / लुढ़काने की क्रिया"
  },
  "side": {
    "english": "Side",
    "bishnupriya": "গারি",
    "bangla": "পাশ",
    "hindi": "किनारा"
  },
  "self_made_false_2": {
    "english": "Self-made, false",
    "bishnupriya": "গারুয়া",
    "bangla": "নিজে তৈরি / ভুয়া",
    "hindi": "खुद का बनाया / नकली"
  },
  "imagined_false": {
    "english": "Imagined, false",
    "bishnupriya": "গারেইপা",
    "bangla": "কল্পিত / মিথ্যা",
    "hindi": "कल्पित / झूठा"
  },
  "to_roll_on_the_ground": {
    "english": "To roll on the ground",
    "bishnupriya": "গা'র্গারা-",
    "bangla": "মাটিতে গড়ানো",
    "hindi": "ज़मीन पर लोटना"
  },
  "to_melt_intr": {
    "english": "To melt (intr.)",
    "bishnupriya": "গাল-",
    "bangla": "গলে যাওয়া",
    "hindi": "पिघलना"
  },
  "defect": {
    "english": "Defect",
    "bishnupriya": "গা'লাদ",
    "bangla": "ত্রুটি",
    "hindi": "खराबी"
  },
  "to_melt_trans": {
    "english": "To melt (trans.)",
    "bishnupriya": "গালা-",
    "bangla": "গলানো",
    "hindi": "पिघलाना"
  },
  "intimacy": {
    "english": "Intimacy",
    "bishnupriya": "গালাগালি",
    "bangla": "ঘনিষ্ঠতা",
    "hindi": "घनिष्ठता"
  },
  "melting_gerund": {
    "english": "Melting (gerund)",
    "bishnupriya": "গালানি",
    "bangla": "গলানোর ক্রিয়া",
    "hindi": "पिघलाने की क्रिया"
  },
  "over_joyed": {
    "english": "Over-joyed",
    "bishnupriya": "গালিত",
    "bangla": "অতি আনন্দিত",
    "hindi": "बहुत खुश"
  },
  "carpet": {
    "english": "Carpet",
    "bishnupriya": "গালিসা",
    "bangla": "গালচা",
    "hindi": "कालीन"
  },
  "lane": {
    "english": "Lane",
    "bishnupriya": "গা'ল্লি",
    "bangla": "গলি",
    "hindi": "गली"
  },
  "prow_stern_of_boat": {
    "english": "Prow, stern (of boat)",
    "bishnupriya": "গাল্লি",
    "bangla": "নৌকার সামনে/পিছনে",
    "hindi": "नाव का आगे/पीछे का हिस्सा"
  },
  "wilful_habitual_delay": {
    "english": "Wilful/habitual delay",
    "bishnupriya": "গা'সারমাসার",
    "bangla": "ইচ্ছাকৃত দেরি",
    "hindi": "जानबूझकर देरी"
  },
  "to_sing_praise": {
    "english": "To sing / praise",
    "bishnupriya": "গা-",
    "bangla": "গাওয়া / প্রশংসা করা",
    "hindi": "गाना / तारीफ करना"
  },
  "stroke": {
    "english": "Stroke",
    "bishnupriya": "গাই",
    "bangla": "আঘাত",
    "hindi": "चोट"
  },
  "physique": {
    "english": "Physique",
    "bishnupriya": "গাইত",
    "bangla": "গঠন",
    "hindi": "कद-काठी"
  },
  "village": {
    "english": "Village",
    "bishnupriya": "গাঁও / গান",
    "bangla": "গ্রাম",
    "hindi": "गाँव"
  },
  "some_a_little_long_thin_things": {
    "english": "Some, a little (long thin things)",
    "bishnupriya": "গাছি",
    "bangla": "কিছু (লম্বা সরু জিনিসের জন্য)",
    "hindi": "कुछ (लंबी पतली चीज़ों के लिए)"
  },
  "herbs": {
    "english": "Herbs",
    "bishnupriya": "গাছড়া",
    "bangla": "ঔষধি গাছ",
    "hindi": "जड़ी-बूटी"
  },
  "tree": {
    "english": "Tree",
    "bishnupriya": "গাছ",
    "bangla": "গাছ",
    "hindi": "पेड़"
  },
  "hemp": {
    "english": "Hemp",
    "bishnupriya": "গাঁজা",
    "bangla": "গাঁজা",
    "hindi": "गांजा"
  },
  "lump": {
    "english": "Lump",
    "bishnupriya": "গাট্টা",
    "bangla": "ঢিবি",
    "hindi": "ढेला"
  },
  "arrogance": {
    "english": "Arrogance",
    "bishnupriya": "গাত্তামি",
    "bangla": "অহংকার",
    "hindi": "घमंड"
  },
  "knot": {
    "english": "Knot",
    "bishnupriya": "গাঠি",
    "bangla": "গিঁট",
    "hindi": "गाँठ"
  },
  "knotted": {
    "english": "Knotted",
    "bishnupriya": "গাঠিয়া",
    "bangla": "গিঁটযুক্ত",
    "hindi": "गाँठ वाला"
  },
  "gate": {
    "english": "Gate",
    "bishnupriya": "গান্তা",
    "bangla": "দরজা",
    "hindi": "दरवाज़ा"
  },
  "hole": {
    "english": "Hole",
    "bishnupriya": "গত",
    "bangla": "গর্ত",
    "hindi": "गड्ढा"
  },
  "to_bury": {
    "english": "To bury",
    "bishnupriya": "গাতা-",
    "bangla": "পুঁতে ফেলা",
    "hindi": "दफनाना"
  },
  "deep_low_sunken": {
    "english": "Deep, low / sunken",
    "bishnupriya": "গাতুয়া",
    "bangla": "গভীর / ডোবা",
    "hindi": "गहरा / धँसा हुआ"
  },
  "heavy_stick_for_making_holes": {
    "english": "Heavy stick for making holes",
    "bishnupriya": "গাত্তি",
    "bangla": "গর্ত করার মোটা লাঠি",
    "hindi": "गड्ढा बनाने की मोटी छड़ी"
  },
  "to_string_together": {
    "english": "To string together",
    "bishnupriya": "গাথ-",
    "bangla": "গাঁথা",
    "hindi": "पिरोना"
  },
  "lady_mistress_goddess": {
    "english": "Lady / mistress / goddess",
    "bishnupriya": "গিঠানি",
    "bangla": "মহিলা / মালকিন / দেবী",
    "hindi": "महिला / मालकिन / देवी"
  },
  "to_swallow": {
    "english": "To swallow",
    "bishnupriya": "গিল-",
    "bangla": "গিলা",
    "hindi": "निगलना"
  },
  "quilt": {
    "english": "Quilt",
    "bishnupriya": "গিলাপ",
    "bangla": "লেপ",
    "hindi": "रजाई"
  },
  "glass": {
    "english": "Glass",
    "bishnupriya": "গিলাস",
    "bangla": "গ্লাস",
    "hindi": "गिलास"
  },
  "faeces": {
    "english": "Faeces",
    "bishnupriya": "গু",
    "bangla": "মল",
    "hindi": "मल"
  },
  "to_move_away": {
    "english": "To move away",
    "bishnupriya": "গুচ-",
    "bangla": "সরে যাওয়া",
    "hindi": "हटना"
  },
  "hot_headed": {
    "english": "Hot-headed",
    "bishnupriya": "ফিন",
    "bangla": "গরম মাথা",
    "hindi": "गुस्सैल"
  },
  "basket_for_clothes": {
    "english": "Basket for clothes",
    "bishnupriya": "ফিনারুক",
    "bangla": "কাপড়ের ঝুড়ি",
    "hindi": "कपड़ों की टोकरी"
  },
  "anus": {
    "english": "Anus",
    "bishnupriya": "ফিচ",
    "bangla": "পায়ু",
    "hindi": "गुदा"
  },
  "long_piece_of_cloth_turban": {
    "english": "Long piece of cloth / turban",
    "bishnupriya": "ফিজাল / ফিজান",
    "bangla": "লম্বা কাপড় / পাগড়ি",
    "hindi": "लंबा कपड़ा / पगड़ी"
  },
  "border_small_piece_of_cloth": {
    "english": "Border / small piece of cloth",
    "bishnupriya": "ফিজিল",
    "bangla": "কিনারা / ছোটো কাপড়",
    "hindi": "किनारी / छोटा कपड़ा"
  },
  "dress": {
    "english": "Dress",
    "bishnupriya": "ফিজেট",
    "bangla": "পোশাক",
    "hindi": "पोशाक"
  },
  "seat_of_cloth": {
    "english": "Seat of cloth",
    "bishnupriya": "ফিতা",
    "bangla": "কাপড়ের আসন",
    "hindi": "कपड़े का आसन"
  },
  "tape": {
    "english": "Tape",
    "bishnupriya": "ফিতা",
    "bangla": "ফিতা",
    "hindi": "फीता"
  },
  "towel_body_structure": {
    "english": "Tow el / body structure",
    "bishnupriya": "ফিতুপ",
    "bangla": "তোয়ালে / শরীরের গঠন",
    "hindi": "तौलिया / शरीर की बनावट"
  },
  "piece_of_cloth_light_dress": {
    "english": "Piece of cloth / light dress",
    "bishnupriya": "ফিদাল",
    "bangla": "কাপড়ের টুকরো / হালকা পোশাক",
    "hindi": "कपड़े का टुकड़ा / हल्का वस्त्र"
  },
  "cloth": {
    "english": "Cloth",
    "bishnupriya": "ফিদাক",
    "bangla": "কাপড়",
    "hindi": "कपड़ा"
  },
  "roller_of_cloth": {
    "english": "Roller of cloth",
    "bishnupriya": "ফিপু",
    "bangla": "কাপড়ের রোল",
    "hindi": "कपड़े का रोल"
  },
  "ball_of_cloth": {
    "english": "Ball of cloth",
    "bishnupriya": "ফিপুল",
    "bangla": "কাপড়ের গোলা",
    "hindi": "कपड़े का गोला"
  },
  "posture_of_waist": {
    "english": "Posture of waist",
    "bishnupriya": "ফিবাম",
    "bangla": "কোমরের ভঙ্গি",
    "hindi": "कमर की मुद्रा"
  },
  "beddings_bride": {
    "english": "Beddings (bride’s)",
    "bishnupriya": "ফিয়াম",
    "bangla": "বিছানা",
    "hindi": "बिस्तर"
  },
  "to_turn_back": {
    "english": "To turn back",
    "bishnupriya": "ফির-",
    "bangla": "ফিরে আসা",
    "hindi": "वापस आना"
  },
  "a_turn": {
    "english": "A turn",
    "bishnupriya": "ফিরা",
    "bangla": "বার",
    "hindi": "बार"
  },
  "dresses": {
    "english": "Dresses",
    "bishnupriya": "ফিরাই",
    "bangla": "পোশাক",
    "hindi": "कपड़े"
  },
  "set_of_dress": {
    "english": "Set of dress",
    "bishnupriya": "ফিরাই-ফিনান",
    "bangla": "পোশাকের সেট",
    "hindi": "कपड़ों का सेट"
  },
  "return": {
    "english": "Return",
    "bishnupriya": "ফিরাত",
    "bangla": "ফেরত",
    "hindi": "वापसी"
  },
  "flag": {
    "english": "Flag",
    "bishnupriya": "ফিরাল",
    "bangla": "পতাকা",
    "hindi": "झंडा"
  },
  "anglo_indian_european": {
    "english": "Anglo-Indian / European",
    "bishnupriya": "ফিরিঙ্গি",
    "bangla": "ফিরিঙ্গি",
    "hindi": "फिरंगी"
  },
  "covered_basket_for_clothes": {
    "english": "Covered basket for clothes",
    "bishnupriya": "ফিরুক",
    "bangla": "কাপড় রাখার ঝুড়ি",
    "hindi": "कपड़ों की टोकरी"
  },
  "whispering_sound": {
    "english": "Whispering sound",
    "bishnupriya": "ফিসফিস",
    "bangla": "ফিসফিস",
    "hindi": "फुसफुसाहट"
  },
  "to_whisper": {
    "english": "To whisper",
    "bishnupriya": "ফিসফিসা-",
    "bangla": "ফিসফিসানো",
    "hindi": "फुसफुसाना"
  },
  "dawn_day_break": {
    "english": "Dawn / day-break",
    "bishnupriya": "ফু",
    "bangla": "ভোর",
    "hindi": "सुबह"
  },
  "air_blown_from_mouth": {
    "english": "Air blown from mouth",
    "bishnupriya": "ফু",
    "bangla": "মুখের হাওয়া",
    "hindi": "मुँह से फूँक"
  },
  "to_be_loosened": {
    "english": "To be loosened",
    "bishnupriya": "ফুক-",
    "bangla": "ঢিলা হওয়া",
    "hindi": "ढीला होना"
  },
  "to_untie_loosen": {
    "english": "To untie / loosen",
    "bishnupriya": "ফুকা-",
    "bangla": "খোলা",
    "hindi": "खोलना"
  },
  "to_express": {
    "english": "To express",
    "bishnupriya": "ফুকারা-",
    "bangla": "প্রকাশ করা",
    "hindi": "ज़ाहिर करना"
  },
  "sound_of_heart_beats": {
    "english": "Sound of heart-beats",
    "bishnupriya": "ফুকফুক",
    "bangla": "ধুকধুক",
    "hindi": "धड़कन"
  },
  "oven": {
    "english": "Oven",
    "bishnupriya": "ফুনকা",
    "bangla": "চুলা",
    "hindi": "चूल्हा"
  },
  "to_be_clear_burst_blossom": {
    "english": "To be clear / burst / blossom",
    "bishnupriya": "ফুত-",
    "bangla": "স্পষ্ট হওয়া / ফাটা / ফুটা",
    "hindi": "साफ होना / फटना / खिलना"
  },
  "drop": {
    "english": "Drop",
    "bishnupriya": "ফুতা",
    "bangla": "ফোঁটা",
    "hindi": "बूंद"
  },
  "to_burst_open_express": {
    "english": "To burst open / express",
    "bishnupriya": "ফুতা-",
    "bangla": "ফাটিয়ে দেওয়া / প্রকাশ করা",
    "hindi": "फोड़ना / ज़ाहिर करना"
  },
  "a_little": {
    "english": "A little",
    "bishnupriya": "ফুতি",
    "bangla": "সামান্য",
    "hindi": "थोड़ा"
  },
  "sauce_of_boiled_fruits": {
    "english": "Sauce of boiled fruits",
    "bishnupriya": "ফুতি",
    "bangla": "ফলের চাটনি",
    "hindi": "फल की चटनी"
  },
  "vanity": {
    "english": "Vanity",
    "bishnupriya": "ফুত্তানি",
    "bangla": "ঢং",
    "hindi": "दिखावा"
  },
  "boiled": {
    "english": "Boiled",
    "bishnupriya": "ফুত",
    "bangla": "সিদ্ধ",
    "hindi": "उबला"
  },
  "small_earthen_plate": {
    "english": "Small earthen plate",
    "bishnupriya": "ফুতাই",
    "bangla": "ছোটো মাটির থালা",
    "hindi": "छोटी मिट्टी की थाली"
  },
  "cloth_2": {
    "english": "Cloth",
    "bishnupriya": "ফুতি",
    "bangla": "কাপড়",
    "hindi": "कपड़ा"
  },
  "clothing": {
    "english": "Clothing",
    "bishnupriya": "ফুতিফালি",
    "bangla": "পোশাক",
    "hindi": "कपड़े"
  },
  "blowing_air_from_mouth": {
    "english": "Blowing air from mouth",
    "bishnupriya": "ফুদানি",
    "bangla": "মুখে ফুঁ দেওয়া",
    "hindi": "मुँह से फूँकना"
  },
  "floating_reed": {
    "english": "Floating reed",
    "bishnupriya": "ফুম",
    "bangla": "ভাসমান নলখাগড়া",
    "hindi": "तैरता सरकंडा"
  },
  "blister": {
    "english": "Blister",
    "bishnupriya": "ফুয়া",
    "bangla": "ফোসকা",
    "hindi": "छाला"
  },
  "to_dawn": {
    "english": "To dawn",
    "bishnupriya": "ফুয়া-",
    "bangla": "ভোর হওয়া",
    "hindi": "सुबह होना"
  },
  "to_bask_in_sun_fire": {
    "english": "To bask in sun/fire",
    "bishnupriya": "ফুয়া-",
    "bangla": "রোদ/আগুন সেঁকা",
    "hindi": "धूप/आग सेंकना"
  },
  "to_be_exhausted": {
    "english": "To be exhausted",
    "bishnupriya": "ফুর-",
    "bangla": "শেষ হওয়া",
    "hindi": "खत्म होना"
  },
  "end": {
    "english": "End",
    "bishnupriya": "ফুরান",
    "bangla": "শেষ",
    "hindi": "अंत"
  },
  "clear": {
    "english": "Clear",
    "bishnupriya": "ফুরা",
    "bangla": "স্পষ্ট",
    "hindi": "साफ"
  },
  "to_finish_bargain": {
    "english": "To finish / bargain",
    "bishnupriya": "ফুরা-",
    "bangla": "শেষ করা / দরাদরি",
    "hindi": "खत्म करना / सौदा करना"
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
  "whimsical_whim": {
    "english": "Whimsical / whim",
    "bishnupriya": "বেন্তালিয়া",
    "bangla": "খেয়ালি",
    "hindi": "सनकी"
  },
  "whirling_by_arms": {
    "english": "Whirling by arms",
    "bishnupriya": "বেন-বুলা",
    "bangla": "হাত ধরে ঘোরানো",
    "hindi": "हाथ पकड़कर घुमाना"
  },
  "tricks_device": {
    "english": "Tricks / device",
    "bishnupriya": "বুধি",
    "bangla": "চালাকি / বুদ্ধি",
    "hindi": "चालाकी / बुद्धि"
  },
  "to_cause_to_sit_curdle": {
    "english": "To cause to sit / curdle",
    "bishnupriya": "বহা-",
    "bangla": "বসানো / জমানো",
    "hindi": "बिठाना / जमाना"
  },
  "advance_money": {
    "english": "Advance-money",
    "bishnupriya": "বাইনা",
    "bangla": "বায়না",
    "hindi": "बयाना"
  },
  "leisure": {
    "english": "Leisure",
    "bishnupriya": "ফুরিত",
    "bangla": "ফুরসত",
    "hindi": "फुरसत"
  },
  "enjoyment": {
    "english": "Enjoyment",
    "bishnupriya": "ফূর্তি",
    "bangla": "আনন্দ",
    "hindi": "मज़ा"
  },
  "dry_clean_particles": {
    "english": "Dry & clean particles",
    "bishnupriya": "ফুরফুর",
    "bangla": "শুকনো ও পরিষ্কার",
    "hindi": "सूखा और साफ"
  },
  "to_appear_dry_clean": {
    "english": "To appear dry & clean",
    "bishnupriya": "ফুরফুরা-",
    "bangla": "শুকনো-পরিষ্কার দেখানো",
    "hindi": "सूखा-साफ दिखना"
  },
  "flower": {
    "english": "Flower",
    "bishnupriya": "ফুল",
    "bangla": "ফুল",
    "hindi": "फूल"
  },
  "piece_of_bone_from_forehead": {
    "english": "Piece of bone from forehead (cremation)",
    "bishnupriya": "ফুল",
    "bangla": "কপালের হাড়",
    "hindi": "माथे की हड्डी"
  },
  "act_of_melting_separating": {
    "english": "The act of melting / separating",
    "bishnupriya": "পাক্খেই",
    "bangla": "গলানো / আলাদা করা",
    "hindi": "पिघलाना / अलग करना"
  },
  "counting_piece_in_dice_game": {
    "english": "Counting piece in dice game",
    "bishnupriya": "পাখি",
    "bangla": "পাশা খেলার গুটি",
    "hindi": "पासे का टुकड़ा"
  },
  "guava": {
    "english": "Guava",
    "bishnupriya": "পনিতল",
    "bangla": "পেয়ারা",
    "hindi": "अमरूद"
  },
  "to_be_rotten": {
    "english": "To be rotten",
    "bishnupriya": "পাচ-",
    "bangla": "পচা",
    "hindi": "सड़ना"
  },
  "to_make_rotten": {
    "english": "To make rotten",
    "bishnupriya": "পাচা-",
    "bangla": "পচানো",
    "hindi": "सड़ाना"
  },
  "rotten": {
    "english": "Rotten",
    "bishnupriya": "পাচা",
    "bangla": "পচা",
    "hindi": "सड़ा"
  },
  "made_rotten": {
    "english": "Made rotten",
    "bishnupriya": "পাচাইল",
    "bangla": "পচিয়ে দেওয়া",
    "hindi": "सड़ा दिया हुआ"
  },
  "rotten_making_rotten_gerund": {
    "english": "Rotten / making rotten (gerund)",
    "bishnupriya": "পাচানি",
    "bangla": "পচা / পচানো",
    "hindi": "सड़ने / सड़ाने की क्रिया"
  },
  "over_skirt_for_rasa_dance": {
    "english": "Over-skirt for Rasa dance",
    "bishnupriya": "পাচুয়াল",
    "bangla": "রাস নৃত্যের ওভার-স্কার্ট",
    "hindi": "रास नृत्य का ओवर-स्कर्ट"
  },
  "choice": {
    "english": "Choice",
    "bishnupriya": "পাছান / পাছান্দা",
    "bangla": "পছন্দ",
    "hindi": "पसंद"
  },
  "baggage": {
    "english": "Baggage",
    "bishnupriya": "পাজা",
    "bangla": "মালপত্র",
    "hindi": "सामान"
  },
  "handfuls_of_reaped_paddy": {
    "english": "Handfuls of reaped paddy",
    "bishnupriya": "পাজা",
    "bangla": "ধানের মুঠো",
    "hindi": "मुट्ठी भर कटा धान"
  },
  "side": {
    "english": "Side",
    "bishnupriya": "পাত",
    "bangla": "পাশ",
    "hindi": "किनारा"
  },
  "kind_of_vegetable_snake_gourd": {
    "english": "A kind of vegetable (snake gourd)",
    "bishnupriya": "পাতল",
    "bangla": "পটল",
    "hindi": "परवल"
  },
  "changed": {
    "english": "Changed",
    "bishnupriya": "পাতা",
    "bangla": "বদলানো",
    "hindi": "बदल गया"
  },
  "to_exchange": {
    "english": "To exchange",
    "bishnupriya": "পাতা-",
    "bangla": "বদল করা",
    "hindi": "बदलना"
  },
  "mutual_change": {
    "english": "Mutual change",
    "bishnupriya": "পাতাপাতি",
    "bangla": "পরস্পর বদল",
    "hindi": "आपस में बदलना"
  },
  "side_2": {
    "english": "Side",
    "bishnupriya": "পাতি",
    "bangla": "পাশ",
    "hindi": "किनारा"
  },
  "bandage_lane": {
    "english": "Bandage / lane",
    "bishnupriya": "পাত্তি",
    "bangla": "পট্টি / গলি",
    "hindi": "पट्टी / गली"
  },
  "counting_points_dice": {
    "english": "Counting points (dice)",
    "bishnupriya": "পাত্তিন",
    "bangla": "পয়েন্ট গোনা",
    "hindi": "अंक गिनना"
  },
  "three_fourths": {
    "english": "Three-fourths",
    "bishnupriya": "পানে",
    "bangla": "তিন-চতুর্থাংশ",
    "hindi": "तीन चौथाई"
  },
  "material": {
    "english": "Material",
    "bishnupriya": "পাত",
    "bangla": "উপাদান",
    "hindi": "सामग्री"
  },
  "strength": {
    "english": "Strength",
    "bishnupriya": "পাতর",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "sheet": {
    "english": "Sheet",
    "bishnupriya": "পাত্তর",
    "bangla": "চাদর",
    "hindi": "चादर"
  },
  "song_sung_separately_in_group_dance": {
    "english": "Song sung separately in group dance",
    "bishnupriya": "পাত্থাফাম",
    "bangla": "আলাদা গান",
    "hindi": "अलग गाना"
  },
  "road_path": {
    "english": "Road, path",
    "bishnupriya": "পথা",
    "bangla": "পথ",
    "hindi": "रास्ता"
  },
  "rest": {
    "english": "Rest",
    "bishnupriya": "পথা",
    "bangla": "বিশ্রাম",
    "hindi": "आराम"
  },
  "means_way": {
    "english": "Means, way",
    "bishnupriya": "পথি",
    "bangla": "উপায়",
    "hindi": "तरीका"
  },
  "young_fishes": {
    "english": "Young fishes",
    "bishnupriya": "পা না",
    "bangla": "ছোটো মাছ",
    "hindi": "छोटी मछलियाँ"
  },
  "burning_pitchers": {
    "english": "Burning (pitchers)",
    "bishnupriya": "পানি",
    "bangla": "পোড়ানো (মাটির পাত্র)",
    "hindi": "जलाना (मिट्टी के बर्तन)"
  },
  "fifteen": {
    "english": "Fifteen",
    "bishnupriya": "পান্দারা",
    "bangla": "পনেরো",
    "hindi": "पंद्रह"
  },
  "throw_of_fifteen_points_dice": {
    "english": "Throw of fifteen points (dice)",
    "bishnupriya": "পান্দারাবি",
    "bangla": "পনরো পয়েন্টের ঘুঁটি",
    "hindi": "पंद्रह अंक का पासा"
  },
  "material_2": {
    "english": "Material",
    "bishnupriya": "পন্নাম",
    "bangla": "উপাদান",
    "hindi": "सामग्री"
  },
  "discoloured": {
    "english": "Discoloured",
    "bishnupriya": "পাপ",
    "bangla": "বিবর্ণ",
    "hindi": "फीका"
  },
  "dice_board": {
    "english": "Dice-board",
    "bishnupriya": "পাফাম",
    "bangla": "পাশার তক্তা",
    "hindi": "पासे का तख्ता"
  },
  "time_guard": {
    "english": "Time / guard",
    "bishnupriya": "পার",
    "bangla": "সময় / পাহারা",
    "hindi": "समय / पहरा"
  },
  "other": {
    "english": "Other",
    "bishnupriya": "পার",
    "bangla": "অন্য",
    "hindi": "दूसरा"
  },
  "third_day_funeral_ceremony": {
    "english": "Third-day funeral ceremony",
    "bishnupriya": "পারক",
    "bangla": "তৃতীয় দিনের শ্রাদ্ধ",
    "hindi": "तीसरे दिन का श्राद्ध"
  },
  "fold": {
    "english": "Fold",
    "bishnupriya": "পারত",
    "bangla": "ভাঁজ",
    "hindi": "मोड़"
  },
  "festival": {
    "english": "Festival",
    "bishnupriya": "পারব",
    "bangla": "উৎসব",
    "hindi": "त्योहार"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "পারম",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक तरह की मछली"
  },
  "layer": {
    "english": "Layer",
    "bishnupriya": "পারাল",
    "bangla": "স্তর",
    "hindi": "परत"
  },
  "total_destruction": {
    "english": "Total destruction",
    "bishnupriya": "পারালেই",
    "bangla": "প্রলয়",
    "hindi": "प्रलय"
  },
  "relating_to_others": {
    "english": "Relating to others",
    "bishnupriya": "পারা",
    "bangla": "পরের",
    "hindi": "दूसरों का"
  },
  "expiation": {
    "english": "Expiation",
    "bishnupriya": "পারজিত",
    "bangla": "প্রায়শ্চিত্ত",
    "hindi": "प्रायश्चित्त"
  },
  "life": {
    "english": "Life",
    "bishnupriya": "পারান",
    "bangla": "প্রাণ",
    "hindi": "प्राण"
  },
  "because_of_grace": {
    "english": "Because of grace",
    "bishnupriya": "পারাদে",
    "bangla": "কৃপায়",
    "hindi": "कृपा से"
  },
  "tall_talk": {
    "english": "Tall talk",
    "bishnupriya": "পারি",
    "bangla": "বড়ো বড়ো কথা",
    "hindi": "बड़ी-बड़ी बातें"
  },
  "going_round_holy_places": {
    "english": "Going round holy places",
    "bishnupriya": "পারিক্রমা",
    "bangla": "পরিক্রমা",
    "hindi": "परिक्रमा"
  },
  "acquaintance": {
    "english": "Acquaintance",
    "bishnupriya": "পারিচ",
    "bangla": "পরিচয়",
    "hindi": "परिचय"
  },
  "fairy": {
    "english": "Fairy",
    "bishnupriya": "পারি",
    "bangla": "পরী",
    "hindi": "परी"
  },
  "care": {
    "english": "Care",
    "bishnupriya": "পারুয়া",
    "bangla": "খেয়াল",
    "hindi": "परवाह"
  },
  "afterwards": {
    "english": "Afterwards",
    "bishnupriya": "পারে",
    "bangla": "পরে",
    "hindi": "बाद में"
  },
  "way_method": {
    "english": "Way, method",
    "bishnupriya": "পারকার",
    "bangla": "উপায়",
    "hindi": "तरीका"
  },
  "administrative_division": {
    "english": "Administrative division",
    "bishnupriya": "পারগনা",
    "bangla": "পরগনা",
    "hindi": "परगना"
  },
  "subject_tenant": {
    "english": "Subject, tenant",
    "bishnupriya": "পারজা",
    "bangla": "প্রজা",
    "hindi": "प्रजा"
  },
  "in_consideration": {
    "english": "In consideration",
    "bishnupriya": "পারতিকে",
    "bangla": "বিবেচনায়",
    "hindi": "विचार में"
  },
  "to_put_to_shame": {
    "english": "To put to shame",
    "bishnupriya": "পার্থা-",
    "bangla": "লজ্জা দেওয়া",
    "hindi": "शर्मिंदा करना"
  },
  "screen": {
    "english": "Screen",
    "bishnupriya": "পার্দা",
    "bangla": "পর্দা",
    "hindi": "पर्दा"
  },
  "main_principal": {
    "english": "Main, principal",
    "bishnupriya": "পারধান",
    "bangla": "প্রধান",
    "hindi": "मुख्य"
  },
  "gigantic": {
    "english": "Gigantic",
    "bishnupriya": "পারবতিয়া",
    "bangla": "পর্বতের মতো বড়ো",
    "hindi": "पहाड़ जैसा बड़ा"
  },
  "evidence": {
    "english": "Evidence",
    "bishnupriya": "পারমান",
    "bangla": "প্রমাণ",
    "hindi": "सबूत"
  },
  "food_offered_to_deity_remains": {
    "english": "Food offered to deity / remains",
    "bishnupriya": "পারসাত",
    "bangla": "প্রসাদ",
    "hindi": "प्रसाद"
  },
  "neighbour": {
    "english": "Neighbour",
    "bishnupriya": "পারশি",
    "bangla": "পড়শি",
    "hindi": "पड़ोसी"
  },
  "to_fall": {
    "english": "To fall",
    "bishnupriya": "পার-",
    "bangla": "পড়া",
    "hindi": "गिरना"
  },
  "fallen_deserted": {
    "english": "Fallen / deserted",
    "bishnupriya": "পারা",
    "bangla": "পতিত / পরিত্যক্ত",
    "hindi": "गिरा / त्यागा हुआ"
  },
  "lesson": {
    "english": "Lesson",
    "bishnupriya": "পারা",
    "bangla": "পড়া",
    "hindi": "पाठ"
  },
  "student": {
    "english": "Student",
    "bishnupriya": "পারুয়া",
    "bangla": "ছাত্র",
    "hindi": "छात्र"
  },
  "bevel": {
    "english": "Bevel",
    "bishnupriya": "পাল",
    "bangla": "বেভেল",
    "hindi": "बेवल"
  },
  "twinkling_of_eye": {
    "english": "Twinkling of eye",
    "bishnupriya": "পালক",
    "bangla": "পলক",
    "hindi": "पलक"
  },
  "starch": {
    "english": "Starch",
    "bishnupriya": "পালাপ",
    "bangla": "মাড়",
    "hindi": "माड़"
  },
  "bark": {
    "english": "Bark",
    "bishnupriya": "পালাব",
    "bangla": "ছাল",
    "hindi": "छाल"
  },
  "to_flee": {
    "english": "To flee",
    "bishnupriya": "পালা-",
    "bangla": "পালানো",
    "hindi": "भागना"
  },
  "cage": {
    "english": "Cage",
    "bishnupriya": "পালান",
    "bangla": "খাঁচা",
    "hindi": "पिंजरा"
  },
  "hide_seek": {
    "english": "Hide & seek",
    "bishnupriya": "পালাপালি",
    "bangla": "লুকোচুরি",
    "hindi": "लुका-छिपी"
  },
  "alluvial_soil": {
    "english": "Alluvial soil",
    "bishnupriya": "পালি",
    "bangla": "পলি",
    "hindi": "गाद"
  },
  "creeper_pot_herb": {
    "english": "A creeper (pot-herb)",
    "bishnupriya": "পালিয়া",
    "bangla": "পটলের মতো লতা",
    "hindi": "परवल जैसी लता"
  },
  "costume_for_rasa_dance": {
    "english": "Costume for Rasa dance",
    "bishnupriya": "পালেই",
    "bangla": "রাসের পোশাক",
    "hindi": "रास नृत्य का वस्त्र"
  },
  "dice_board_2": {
    "english": "Dice-board",
    "bishnupriya": "পালেম",
    "bangla": "পাশার তক্তা",
    "hindi": "पासे का तख्ता"
  },
  "fish_catching_instrument": {
    "english": "Fish-catching instrument",
    "bishnupriya": "পালো",
    "bangla": "মাছ ধরার যন্ত্র",
    "hindi": "मछली पकड़ने का औज़ार"
  },
  "partition": {
    "english": "Partition",
    "bishnupriya": "পালখা / পালখেই",
    "bangla": "পরতা",
    "hindi": "परदा"
  },
  "platoon": {
    "english": "Platoon",
    "bishnupriya": "পালতান",
    "bangla": "পল্টন",
    "hindi": "प्लाटून"
  },
  "layer_2": {
    "english": "Layer",
    "bishnupriya": "পাল্লা",
    "bangla": "স্তর",
    "hindi": "परत"
  },
  "presentation": {
    "english": "Presentation",
    "bishnupriya": "পাল্লাম",
    "bangla": "উপহার",
    "hindi": "भेंट"
  },
  "cremation": {
    "english": "Cremation",
    "bishnupriya": "পাল্লেই",
    "bangla": "দাহ",
    "hindi": "दाह संस्कार"
  },
  "to_swell": {
    "english": "To swell",
    "bishnupriya": "ফুল-",
    "bangla": "ফোলা",
    "hindi": "सूजना"
  },
  "swollen": {
    "english": "Swollen",
    "bishnupriya": "ফুলা",
    "bangla": "ফোলা",
    "hindi": "सूजा हुआ"
  },
  "to_make_swell": {
    "english": "To make swell",
    "bishnupriya": "ফুলা-",
    "bangla": "ফোলানো",
    "hindi": "सूजाना"
  },
  "blister": {
    "english": "Blister",
    "bishnupriya": "ফুস্কুরি",
    "bangla": "ফোসকা",
    "hindi": "छाला"
  },
  "side_of_buttock": {
    "english": "Side of buttock",
    "bishnupriya": "ফেইকাল",
    "bangla": "নিতম্বের পাশ",
    "hindi": "नितंब का किनारा"
  },
  "dhoti": {
    "english": "Dhoti",
    "bishnupriya": "ফেইচাম",
    "bangla": "ধুতি",
    "hindi": "धोती"
  },
  "small_turban": {
    "english": "Small turban",
    "bishnupriya": "ফেইচা",
    "bangla": "ছোটো পাগড়ি",
    "hindi": "छोटी पगड़ी"
  },
  "angular_slanting": {
    "english": "Angular / slanting",
    "bishnupriya": "ফেইচি",
    "bangla": "তির্যক",
    "hindi": "तिरछा"
  },
  "eunuch": {
    "english": "Eunuch",
    "bishnupriya": "ফেইতা",
    "bangla": "হিজড়া",
    "hindi": "हिजड़ा"
  },
  "sudden_crossing_in_front": {
    "english": "Sudden crossing in front",
    "bishnupriya": "ফেইতুপ",
    "bangla": "সামনে দিয়ে যাওয়া",
    "hindi": "सामने से गुज़रना"
  },
  "cross_bolt_log": {
    "english": "Cross-bolt / log",
    "bishnupriya": "ফেইরা",
    "bangla": "ক্রস-বোল্ট",
    "hindi": "क्रॉस बोल्ट"
  },
  "fox": {
    "english": "Fox",
    "bishnupriya": "ফেউ",
    "bangla": "শিয়াল",
    "hindi": "लोमड़ी"
  },
  "spoiled_worthless": {
    "english": "Spoiled / worthless",
    "bishnupriya": "ফেকানা",
    "bangla": "নষ্ট",
    "hindi": "बेकार"
  },
  "dirt_dishevelled": {
    "english": "Dirt / dishevelled",
    "bishnupriya": "ফেকুচান",
    "bangla": "ময়লা",
    "hindi": "गंदगी"
  },
  "lightness": {
    "english": "Lightness",
    "bishnupriya": "ফেনফেন",
    "bangla": "হালকা",
    "hindi": "हल्का"
  },
  "light": {
    "english": "Light",
    "bishnupriya": "ফেনফেনা",
    "bangla": "হালকা",
    "hindi": "हल्का"
  },
  "dishevelled_totally_tired": {
    "english": "Dishevelled / totally tired",
    "bishnupriya": "ফেচু-নাচু",
    "bangla": "এলোমেলো / একদম ক্লান্ত",
    "hindi": "बिखरा / थककर चूर"
  },
  "soft_grass": {
    "english": "Soft (grass)",
    "bishnupriya": "ফেচফেচ",
    "bangla": "নরম",
    "hindi": "मुलायम"
  },
  "sudden_return": {
    "english": "Sudden return",
    "bishnupriya": "ফেত",
    "bangla": "হঠাৎ ফিরে আসা",
    "hindi": "अचानक वापसी"
  },
  "movement_of_thin_thing": {
    "english": "Movement of thin thing",
    "bishnupriya": "ফেতফেত",
    "bangla": "পাতলা জিনিসের নড়াচড়া",
    "hindi": "पतली चीज़ की हलचल"
  },
  "eunuch_worthless": {
    "english": "Eunuch / worthless",
    "bishnupriya": "ফেদা",
    "bangla": "হিজড়া / বেকার",
    "hindi": "हिजड़ा / बेकार"
  },
  "gruel_sprinkling": {
    "english": "Gruel / sprinkling",
    "bishnupriya": "ফেন",
    "bangla": "ফ্যান / ছিটা",
    "hindi": "मांड / छींटा"
  },
  "foam": {
    "english": "Foam",
    "bishnupriya": "ফেনা",
    "bangla": "ফেনা",
    "hindi": "झाग"
  },
  "finile_oil": {
    "english": "Finile (oil)",
    "bishnupriya": "ফেনিতল",
    "bangla": "ফিনাইল",
    "hindi": "फिनाइल"
  },
  "slim_figured_woman": {
    "english": "Slim-figured woman",
    "bishnupriya": "ফেনকি",
    "bangla": "চিকন কোমরওয়ালি",
    "hindi": "पतली कमर वाली"
  },
  "slanting_rain": {
    "english": "Slanting rain",
    "bishnupriya": "ফেনচি",
    "bangla": "তির্যক বৃষ্টি",
    "hindi": "तिरछी बारिश"
  },
  "rainbow": {
    "english": "Rainbow",
    "bishnupriya": "ফেন-ধনুক",
    "bangla": "রামধনু",
    "hindi": "इंद्रधनुष"
  },
  "sudden_return_2": {
    "english": "Sudden return",
    "bishnupriya": "ফের",
    "bangla": "হঠাৎ ফেরত",
    "hindi": "अचानक वापसी"
  },
  "difference": {
    "english": "Difference",
    "bishnupriya": "ফের",
    "bangla": "পার্থক্য",
    "hindi": "फर्क"
  },
  "to_tear_split": {
    "english": "To tear / split",
    "bishnupriya": "ফের-",
    "bangla": "ছিঁড়া",
    "hindi": "फाड़ना"
  },
  "turning_a_deaf_ear": {
    "english": "Turning a deaf ear",
    "bishnupriya": "ফেরাকান",
    "bangla": "কান না দেওয়া",
    "hindi": "कान न देना"
  },
  "slanting_obstinate": {
    "english": "Slanting / obstinate",
    "bishnupriya": "ফেরেঙ্গা",
    "bangla": "তির্যক / জেদি",
    "hindi": "तिरछा / ज़िद्दी"
  },
  "gap_difference": {
    "english": "Gap / difference",
    "bishnupriya": "ফেরেপ",
    "bangla": "ফাঁক / পার্থক্য",
    "hindi": "गैप / फर्क"
  },
  "turning_hither_thither_fine_cloth": {
    "english": "Turning hither-thither / fine cloth",
    "bishnupriya": "ফেরফের",
    "bangla": "এদিক-ওদিক / সূক্ষ্ম কাপড়",
    "hindi": "इधर-उधर / बारीक कपड़ा"
  },
  "fine_fluttering": {
    "english": "Fine / fluttering",
    "bishnupriya": "ফেরফেরা",
    "bangla": "সূক্ষ্ম / ঝাপটানো",
    "hindi": "बारीक / फड़फड़ाना"
  },
  "revolving_toy_in_wind": {
    "english": "Revolving toy in wind",
    "bishnupriya": "ফেরফেরেই",
    "bangla": "বাতাসে ঘোরা খেলনা",
    "hindi": "हवा में घूमने वाला खिलौना"
  },
  "fishing_net": {
    "english": "Fishing net",
    "bishnupriya": "ফেলান",
    "bangla": "মাছ ধরার জাল",
    "hindi": "मछली का जाल"
  },
  "strength": {
    "english": "Strength",
    "bishnupriya": "ফেস",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "trouble": {
    "english": "Trouble",
    "bishnupriya": "ফেসাদ",
    "bangla": "গোলমাল",
    "hindi": "फसाद"
  },
  "small_black_bird": {
    "english": "Small black bird",
    "bishnupriya": "ফেসকুন্দা",
    "bangla": "ছোটো কালো পাখি",
    "hindi": "छोटी काली चिड़िया"
  },
  "arrival": {
    "english": "Arrival",
    "bishnupriya": "ফাউ",
    "bangla": "পৌঁছানো",
    "hindi": "पहुँचना"
  },
  "oar": {
    "english": "Oar",
    "bishnupriya": "বাই",
    "bangla": "দাঁড়",
    "hindi": "चप्पू"
  },
  "earth_quake": {
    "english": "Earth-quake",
    "bishnupriya": "বাইচাল",
    "bangla": "ভূমিকম্প",
    "hindi": "भूकंप"
  },
  "elder_brothers_wife": {
    "english": "Elder brother’s wife",
    "bishnupriya": "বাইজি",
    "bangla": "ভাবী",
    "hindi": "भाभी"
  },
  "vicious": {
    "english": "Vicious",
    "bishnupriya": "বালিজাত",
    "bangla": "দুষ্ট",
    "hindi": "बदमाश"
  },
  "book": {
    "english": "Book",
    "bishnupriya": "বাই",
    "bangla": "বই",
    "hindi": "किताब"
  },
  "small_fishes": {
    "english": "Small fishes",
    "bishnupriya": "বাইচা",
    "bangla": "ছোটো মাছ",
    "hindi": "छोटी मछलियाँ"
  },
  "bottle": {
    "english": "Bottle",
    "bishnupriya": "বাইতাল",
    "bangla": "বোতল",
    "hindi": "बोतल"
  },
  "advance_money_document": {
    "english": "Advance-money (document)",
    "bishnupriya": "বাইনামা",
    "bangla": "বায়নানামা",
    "hindi": "बैनामा"
  },
  "many_much": {
    "english": "Many / much",
    "bishnupriya": "বৌত",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "bubble": {
    "english": "Bubble",
    "bishnupriya": "বক",
    "bangla": "বুদবুদ",
    "hindi": "बुलबुला"
  },
  "hunger": {
    "english": "Hunger",
    "bishnupriya": "বাক",
    "bangla": "ক্ষুধা",
    "hindi": "भूख"
  },
  "to_talk_much": {
    "english": "To talk much",
    "bishnupriya": "বাক-",
    "bangla": "বকবক করা",
    "hindi": "बकबक करना"
  },
  "illiterate": {
    "english": "Illiterate",
    "bishnupriya": "বাকালাম",
    "bangla": "অশিক্ষিত",
    "hindi": "अनपढ़"
  },
  "talking_too_much": {
    "english": "Talking too much",
    "bishnupriya": "বাকানি",
    "bangla": "বকবক",
    "hindi": "बकबक"
  },
  "arrear": {
    "english": "Arrear",
    "bishnupriya": "বাকেয়া",
    "bangla": "বাকি",
    "hindi": "बकाया"
  },
  "to_cause_to_talk_much": {
    "english": "To cause to talk much",
    "bishnupriya": "বাকুয়া-",
    "bangla": "বকতে বাধ্য করা",
    "hindi": "बकवाना"
  },
  "one_who_talks_too_much": {
    "english": "One who talks too much",
    "bishnupriya": "বাকুরা",
    "bangla": "বকবকে",
    "hindi": "बकवास करने वाला"
  },
  "bundle_luggage": {
    "english": "Bundle / luggage",
    "bishnupriya": "বাকচা",
    "bangla": "গোছা / মালপত্র",
    "hindi": "गठरी / सामान"
  },
  "lecture_speech": {
    "english": "Lecture / speech",
    "bishnupriya": "বক্তৃতা",
    "bangla": "বক্তৃতা",
    "hindi": "भाषण"
  },
  "talkativeness": {
    "english": "Talkativeness",
    "bishnupriya": "বাকবাক",
    "bangla": "বকবক",
    "hindi": "बकबक"
  },
  "bulky_fat": {
    "english": "Bulky / fat",
    "bishnupriya": "বাকসালা",
    "bangla": "মোটা",
    "hindi": "मोटा"
  },
  "coarse_thread_cloth": {
    "english": "Coarse (thread/cloth)",
    "bishnupriya": "বাকসি",
    "bangla": "মোটা সুতো/কাপড়",
    "hindi": "मोटा धागा/कपड़ा"
  },
  "crane": {
    "english": "Crane",
    "bishnupriya": "বাগা",
    "bangla": "বক",
    "hindi": "सारस"
  },
  "buckles": {
    "english": "Buckles",
    "bishnupriya": "বাগলেস",
    "bangla": "বাকলস",
    "hindi": "बकल्स"
  },
  "to_vomit": {
    "english": "To vomit",
    "bishnupriya": "বান-",
    "bangla": "বমি করা",
    "hindi": "उल्टी करना"
  },
  "vomited_matter": {
    "english": "Vomited matter",
    "bishnupriya": "বানানা",
    "bangla": "বমি",
    "hindi": "उल्टी"
  },
  "vomiting": {
    "english": "Vomiting",
    "bishnupriya": "বানানি",
    "bangla": "বমি",
    "hindi": "उल्टी"
  },
  "to_cause_to_vomit": {
    "english": "To cause to vomit",
    "bishnupriya": "বানুয়া-",
    "bangla": "বমি করানো",
    "hindi": "उल्टी कराना"
  },
  "name_of_dance_bengali_style": {
    "english": "Name of a dance (Bengali style)",
    "bishnupriya": "বন্দেশি",
    "bangla": "বাংলা নাচ",
    "hindi": "बंगाली नृत्य"
  },
  "year": {
    "english": "Year",
    "bishnupriya": "বাছর",
    "bangla": "বছর",
    "hindi": "साल"
  },
  "jumbled_state": {
    "english": "Jumbled state",
    "bishnupriya": "বাজাগত",
    "bangla": "গোলমাল",
    "hindi": "उलझन"
  },
  "in_position": {
    "english": "In position",
    "bishnupriya": "বাজায়",
    "bangla": "ঠিকঠাক",
    "hindi": "ठीक ठाक"
  },
  "to_cling_to_ground": {
    "english": "To cling to ground",
    "bishnupriya": "বাত-",
    "bangla": "মাটিতে আঁকড়ে ধরা",
    "hindi": "ज़मीन से चिपकना"
  },
  "to_defeat_seriously": {
    "english": "To defeat seriously",
    "bishnupriya": "বাতা-",
    "bangla": "একদম হারানো",
    "hindi": "बुरी तरह हाराना"
  },
  "bubble": {
    "english": "Bubble",
    "bishnupriya": "বাত্তান",
    "bangla": "বুদবুদ",
    "hindi": "बुलबूला"
  },
  "stout_fatty": {
    "english": "Stout / fatty",
    "bishnupriya": "বাত্থালা",
    "bangla": "মোটা",
    "hindi": "मोटा"
  },
  "fatty_female": {
    "english": "Fatty (female)",
    "bishnupriya": "বাত্থালি",
    "bangla": "মোটা মহিলা",
    "hindi": "मोटी औरत"
  },
  "fatty": {
    "english": "Fatty",
    "bishnupriya": "বাথা",
    "bangla": "মোটা",
    "hindi": "मोटा"
  },
  "bad_name": {
    "english": "Bad name",
    "bishnupriya": "বদনাম",
    "bangla": "বদনাম",
    "hindi": "बदनामी"
  },
  "to_care": {
    "english": "To care",
    "bishnupriya": "বদ-",
    "bangla": "খেয়াল করা",
    "hindi": "ध्यान देना"
  },
  "change": {
    "english": "Change",
    "bishnupriya": "বদল",
    "bangla": "বদল",
    "hindi": "बदलाव"
  },
  "change_substitute": {
    "english": "Change / substitute",
    "bishnupriya": "বদলা",
    "bangla": "বদলি",
    "hindi": "बदलाव / विकल्प"
  },
  "threshold_packed_corner": {
    "english": "Threshold / packed corner",
    "bishnupriya": "বাদা",
    "bangla": "দোরগোড়া / বেড়ার কোণা",
    "hindi": "देहलीज़ / बाड़ का कोना"
  },
  "bad_name_2": {
    "english": "Bad name",
    "bishnupriya": "বদনাম",
    "bangla": "বদনাম",
    "hindi": "बदनामी"
  },
  "caring": {
    "english": "Caring",
    "bishnupriya": "বদানি",
    "bangla": "খেয়াল",
    "hindi": "ध्यान"
  },
  "lacking_sensation": {
    "english": "Lacking sensation",
    "bishnupriya": "বদলা",
    "bangla": "অসাটা",
    "hindi": "सुन्न"
  },
  "blunt": {
    "english": "Blunt",
    "bishnupriya": "বদলা",
    "bangla": "ভোঁতা",
    "hindi": "कुंद"
  },
  "to_exchange": {
    "english": "To exchange",
    "bishnupriya": "বদলা-",
    "bangla": "বদল করা",
    "hindi": "बदलना"
  },
  "mutual_change": {
    "english": "Mutual change",
    "bishnupriya": "বদলা-বদলি",
    "bangla": "পরস্পর বদল",
    "hindi": "आपस में बदलाव"
  },
  "closed": {
    "english": "Closed",
    "bishnupriya": "বান",
    "bangla": "বন্ধ",
    "hindi": "बंद"
  },
  "to_accord": {
    "english": "To accord",
    "bishnupriya": "বান-",
    "bangla": "মিলে যাওয়া",
    "hindi": "मिलना"
  },
  "sister": {
    "english": "Sister",
    "bishnupriya": "বানাক",
    "bangla": "বোন",
    "hindi": "बहन"
  },
  "sitting": {
    "english": "Sitting",
    "bishnupriya": "বানা",
    "bangla": "বসা",
    "hindi": "बैठना"
  },
  "carrying": {
    "english": "Carrying",
    "bishnupriya": "বানা",
    "bangla": "বওয়া",
    "hindi": "ढोना"
  },
  "first_sale_start": {
    "english": "First sale / start",
    "bishnupriya": "বানি",
    "bangla": "প্রথম বিক্রি",
    "hindi": "पहली बिक्री"
  },
  "amity": {
    "english": "Amity",
    "bishnupriya": "বানাবানা",
    "bangla": "বন্ধুত্ব",
    "hindi": "दोस्ती"
  },
  "sylvan_wild": {
    "english": "Sylvan / wild",
    "bishnupriya": "বানুয়া",
    "bangla": "জঙ্গলের",
    "hindi": "जंगली"
  },
  "port": {
    "english": "Port",
    "bishnupriya": "বন্দর",
    "bangla": "বন্দর",
    "hindi": "बंदरगाह"
  },
  "captive": {
    "english": "Captive",
    "bishnupriya": "বন্দি",
    "bangla": "বন্দী",
    "hindi": "कैदी"
  },
  "gun": {
    "english": "Gun",
    "bishnupriya": "বান্দুক",
    "bangla": "বন্দুক",
    "hindi": "बंदूक"
  },
  "arrangement": {
    "english": "Arrangement",
    "bishnupriya": "বন্দোবস্ত",
    "bangla": "বন্দোবস্ত",
    "hindi": "बंदोबस्त"
  },
  "mortgage": {
    "english": "Mortgage",
    "bishnupriya": "বন্ধক",
    "bangla": "বন্ধক",
    "hindi": "गिरवी"
  },
  "reserved": {
    "english": "Reserved",
    "bishnupriya": "বন্ধন",
    "bangla": "সংরক্ষিত",
    "hindi": "आरक्षित"
  },
  "wild_herbs": {
    "english": "Wild herbs",
    "bishnupriya": "বন-বতা",
    "bangla": "জঙ্গলের শাক",
    "hindi": "जंगली साग"
  },
  "humming_sound": {
    "english": "Humming sound",
    "bishnupriya": "বনবন",
    "bangla": "গুঞ্জন",
    "hindi": "गुनगुनाहट"
  },
  "wild_savage": {
    "english": "Wild / savage",
    "bishnupriya": "বন-বুদি",
    "bangla": "জঙ্গলী / অসভ্য",
    "hindi": "जंगली / असभ्य"
  },
  "much": {
    "english": "Much",
    "bishnupriya": "বাপ",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "grandfather": {
    "english": "Grandfather",
    "bishnupriya": "বাপা",
    "bangla": "দাদু / ঠাকুরদা",
    "hindi": "दादा"
  },
  "related_as_grandfather": {
    "english": "Related as grandfather",
    "bishnupriya": "বাপাক",
    "bangla": "দাদুর মতো",
    "hindi": "दादा जैसा"
  },
  "grandfathers_forefathers": {
    "english": "Grandfathers / forefathers",
    "bishnupriya": "বাপা-বাপি",
    "bangla": "দাদু-ঠাকুরদা",
    "hindi": "दादा-परदादा"
  },
  "to_be_careful": {
    "english": "To be careful",
    "bishnupriya": "বাপ্পা-",
    "bangla": "সাবধান হওয়া",
    "hindi": "सावधान होना"
  },
  "grandmother": {
    "english": "Grandmother",
    "bishnupriya": "বাবাক",
    "bangla": "ঠাকুরমা",
    "hindi": "दादी"
  },
  "work_less_state": {
    "english": "Work-less state",
    "bishnupriya": "বাবন",
    "bangla": "কাজহীন অবস্থা",
    "hindi": "बेकारी"
  },
  "crocodile": {
    "english": "Crocodile",
    "bishnupriya": "বাবিল",
    "bangla": "কুমির",
    "hindi": "मगरमच्छ"
  },
  "grandmother_2": {
    "english": "Grandmother",
    "bishnupriya": "বাবেই",
    "bangla": "ঠাকুরমা",
    "hindi": "दादी"
  },
  "attack": {
    "english": "Attack",
    "bishnupriya": "বাম",
    "bangla": "আক্রমণ",
    "hindi": "हमला"
  },
  "bee": {
    "english": "Bee",
    "bishnupriya": "বাম্বানা",
    "bangla": "মৌমাছি",
    "hindi": "मधुमक्खी"
  },
  "bomb": {
    "english": "Bomb",
    "bishnupriya": "বাম্বালা",
    "bangla": "বোমা",
    "hindi": "बम"
  },
  "ware_earthen_stone": {
    "english": "Ware (earthen/stone)",
    "bishnupriya": "বায়াম",
    "bangla": "মাটি/পাথরের পাত্র",
    "hindi": "मिट्टी/पत्थर के बर्तन"
  },
  "of_age_aged": {
    "english": "Of age / aged",
    "bishnupriya": "বায়সি",
    "bangla": "বয়স্ক",
    "hindi": "उम्र का / बूढ़ा"
  },
  "aged_mature": {
    "english": "Aged, mature",
    "bishnupriya": "বায়স্কা",
    "bangla": "বুড়ো",
    "hindi": "बूढ़ा"
  },
  "easily_rotten_fish": {
    "english": "Easily rotten (fish)",
    "bishnupriya": "বায়লা",
    "bangla": "সহজে পচা",
    "hindi": "जल्दी सड़ने वाला"
  },
  "to_receive_formally": {
    "english": "To receive formally",
    "bishnupriya": "বার-",
    "bangla": "আনুষ্ঠানিকভাবে গ্রহণ",
    "hindi": "औपचारिक रूप से लेना"
  },
  "complexion_boil_rain": {
    "english": "Complexion / boil / rain",
    "bishnupriya": "বারান",
    "bangla": "বর্ণ / ফোড়া / বৃষ্টি",
    "hindi": "रंग / फोड़ा / बारिश"
  },
  "ceremonial_welcome": {
    "english": "Ceremonial welcome",
    "bishnupriya": "বারণ",
    "bangla": "আনুষ্ঠানিক অভ্যর্থনা",
    "hindi": "औपचारिक स्वागत"
  },
  "ice_snow": {
    "english": "Ice / snow",
    "bishnupriya": "বারফ",
    "bangla": "বরফ",
    "hindi": "बर्फ"
  },
  "rich": {
    "english": "Rich",
    "bishnupriya": "বারা",
    "bangla": "ধনী",
    "hindi": "अमीर"
  },
  "to_thrust": {
    "english": "To thrust",
    "bishnupriya": "বারা-",
    "bangla": "ঠেলা",
    "hindi": "धक्का देना"
  },
  "luck": {
    "english": "Luck",
    "bishnupriya": "বারাত",
    "bangla": "ভাগ্য",
    "hindi": "किस्मत"
  },
  "written_in_fate": {
    "english": "Written in fate",
    "bishnupriya": "বারাদি",
    "bangla": "ভাগ্যলিখিত",
    "hindi": "तकदीर में लिखा"
  },
  "receiving": {
    "english": "Receiving",
    "bishnupriya": "বারানি",
    "bangla": "গ্রহণ",
    "hindi": "लेना"
  },
  "thrusting": {
    "english": "Thrusting",
    "bishnupriya": "বারানি",
    "bangla": "ঠেলা",
    "hindi": "धक्का देना"
  },
  "always": {
    "english": "Always",
    "bishnupriya": "বারাবার",
    "bangla": "সবসময়",
    "hindi": "हमेशा"
  },
  "rainy_season": {
    "english": "Rainy season",
    "bishnupriya": "বারিষা",
    "bangla": "বর্ষাকাল",
    "hindi": "बरसात का मौसम"
  },
  "kind_of_paddy": {
    "english": "A kind of paddy",
    "bishnupriya": "বারুয়া",
    "bangla": "এক ধরনের ধান",
    "hindi": "एक तरह का चावल"
  },
  "jujube": {
    "english": "Jujube",
    "bishnupriya": "বারেই",
    "bangla": "বরই",
    "hindi": "बेर"
  },
  "compensation": {
    "english": "Compensation",
    "bishnupriya": "বারকত",
    "bangla": "ক্ষতিপূরণ",
    "hindi": "मुआवज़ा"
  },
  "rafter": {
    "english": "Rafter",
    "bishnupriya": "বার্গা",
    "bangla": "কড়ি",
    "hindi": "शहतीर"
  },
  "to_describe": {
    "english": "To describe",
    "bishnupriya": "বার্না-",
    "bangla": "বর্ণনা করা",
    "hindi": "वर्णन करना"
  },
  "vow_fast": {
    "english": "Vow / fast",
    "bishnupriya": "বার্তা",
    "bangla": "ব্রত",
    "hindi": "व्रत"
  },
  "now_authenticity": {
    "english": "Now / authenticity",
    "bishnupriya": "বর্তমান",
    "bangla": "বর্তমান",
    "hindi": "वर्तमान"
  },
  "to_point_out": {
    "english": "To point out",
    "bishnupriya": "বার্তা-",
    "bangla": "ইঙ্গিত করা",
    "hindi": "इशारा करना"
  },
  "candle": {
    "english": "Candle",
    "bishnupriya": "বার্তি",
    "bangla": "মোমবাতি",
    "hindi": "मोमबत्ती"
  },
  "tolerance": {
    "english": "Tolerance",
    "bishnupriya": "বারদাস",
    "bangla": "সহ্য",
    "hindi": "सहनशक्ति"
  },
  "stout_thick": {
    "english": "Stout / thick",
    "bishnupriya": "বার্ধালা",
    "bangla": "মোটা",
    "hindi": "मोटा"
  },
  "rottenness": {
    "english": "Rottenness",
    "bishnupriya": "বারবার",
    "bangla": "পচা গন্ধ",
    "hindi": "सड़न"
  },
  "spoiled": {
    "english": "Spoiled",
    "bishnupriya": "বারবাদ",
    "bangla": "নষ্ট",
    "hindi": "बर्बाद"
  },
  "creator_god": {
    "english": "Creator god",
    "bishnupriya": "বারমা",
    "bangla": "স্রষ্টা",
    "hindi": "ब्रह्मा"
  },
  "consultation_continuous": {
    "english": "Consultation / continuous",
    "bishnupriya": "তানা",
    "bangla": "পরামর্শ / অবিরাম",
    "hindi": "सलाह / लगातार"
  },
  "to_tighten_draw_line": {
    "english": "To tighten / draw line",
    "bishnupriya": "তানা-",
    "bangla": "টানা",
    "hindi": "खींचना"
  },
  "mutual_pulling_hardship": {
    "english": "Mutual pulling / hardship",
    "bishnupriya": "তানাতানি",
    "bangla": "টানাটানি / কষ্ট",
    "hindi": "खींचतान / मुश्किल"
  },
  "unfertile": {
    "english": "Unfertile",
    "bishnupriya": "তানুয়া",
    "bangla": "বন্ধ্যা",
    "hindi": "बंजर"
  },
  "leaf_umbrella": {
    "english": "Leaf umbrella",
    "bishnupriya": "তালা",
    "bangla": "পাতার ছাতা",
    "hindi": "पत्तों की छतरी"
  },
  "big_wicker_basket": {
    "english": "Big wicker basket",
    "bishnupriya": "তালি",
    "bangla": "বড়ো ঝুড়ি",
    "hindi": "बड़ी टोकरी"
  },
  "top_top_of_head": {
    "english": "Top / top of head",
    "bishnupriya": "টিক",
    "bangla": "চূড়া",
    "hindi": "शीर्ष"
  },
  "to_stay_survive_care": {
    "english": "To stay / survive / care",
    "bishnupriya": "টিক-",
    "bangla": "থাকা / বেঁচে থাকা / খেয়াল রাখা",
    "hindi": "टिकना / जीवित रहना / ध्यान रखना"
  },
  "vaccination": {
    "english": "Vaccination",
    "bishnupriya": "টিকা",
    "bangla": "টিকা",
    "hindi": "टीका"
  },
  "small_charcoal_piece_for_hookah": {
    "english": "Small charcoal piece for hookah",
    "bishnupriya": "টিকিলি",
    "bangla": "হুকোর কয়লা",
    "hindi": "हुक्के का कोयला"
  },
  "to_pull_spread_loss": {
    "english": "To pull / spread / loss",
    "bishnupriya": "টিন",
    "bangla": "টানা / হারানো",
    "hindi": "खींचना / हारना"
  },
  "swollen": {
    "english": "Swollen",
    "bishnupriya": "টিঙ্গা / টিঙ্গিরি",
    "bangla": "ফোলা",
    "hindi": "सूजा हुआ"
  },
  "edge_finger_mark": {
    "english": "Edge / finger-mark",
    "bishnupriya": "টিপ",
    "bangla": "কিনারা / আঙুলের ছাপ",
    "hindi": "किनारा / उंगली का निशान"
  },
  "massage_wink": {
    "english": "Massage / wink",
    "bishnupriya": "টিপা-",
    "bangla": "মালিশ / চোখ মারা",
    "hindi": "मालिश / आँख मारना"
  },
  "hillock": {
    "english": "Hillock",
    "bishnupriya": "টিল্লা",
    "bangla": "টিলা",
    "hindi": "टीला"
  },
  "to_cut_down_totally": {
    "english": "To cut down totally",
    "bishnupriya": "টু",
    "bangla": "সম্পূর্ণ কাটা",
    "hindi": "पूरी तरह काटना"
  },
  "to_copy": {
    "english": "To copy",
    "bishnupriya": "টুক-",
    "bangla": "নকল করা",
    "hindi": "नकल करना"
  },
  "written_copy": {
    "english": "Written copy",
    "bishnupriya": "টুকা",
    "bangla": "নকল",
    "hindi": "नकल"
  },
  "amorous_hint": {
    "english": "Amorous hint",
    "bishnupriya": "টুকান",
    "bangla": "ইশারা",
    "hindi": "इशारा"
  },
  "piece": {
    "english": "Piece",
    "bishnupriya": "টুকরা",
    "bangla": "টুকরো",
    "hindi": "टुकड़ा"
  },
  "stem_with_branches_cut_off": {
    "english": "Stem with branches cut off",
    "bishnupriya": "টুটা",
    "bangla": "কাটা গাছের গুঁড়ি",
    "hindi": "कटी हुई शाखाओं वाला तना"
  },
  "hat_cap": {
    "english": "Hat / cap",
    "bishnupriya": "টুপি",
    "bangla": "টুপি",
    "hindi": "टोपी"
  },
  "earth": {
    "english": "Earth",
    "bishnupriya": "টেইপান",
    "bangla": "পৃথিবী",
    "hindi": "धरती"
  },
  "to_separate_particles_winnowing": {
    "english": "To separate particles (winnowing)",
    "bishnupriya": "টেক-",
    "bangla": "ছাঁটা",
    "hindi": "छानना"
  },
  "high_place": {
    "english": "High place",
    "bishnupriya": "টেকা",
    "bangla": "উঁচু জায়গা",
    "hindi": "ऊँचा स्थान"
  },
  "to_blow_on_head_with_knuckles": {
    "english": "To blow on head with knuckles",
    "bishnupriya": "টেকারা-",
    "bangla": "মাথায় ঘুষি মারা",
    "hindi": "सिर पर मुट्ठी मारना"
  },
  "drooping": {
    "english": "Drooping",
    "bishnupriya": "টেক্থা",
    "bangla": "ঝুলে পড়া",
    "hindi": "लटका हुआ"
  },
  "hill": {
    "english": "Hill",
    "bishnupriya": "টেনারা",
    "bangla": "পাহাড়",
    "hindi": "पहाड़"
  },
  "restless": {
    "english": "Restless",
    "bishnupriya": "টেঙ্গারা",
    "bangla": "অস্থির",
    "hindi": "बेचैन"
  },
  "acute_pain_sensation": {
    "english": "Acute pain sensation",
    "bishnupriya": "টেন্টেনা-",
    "bangla": "তীব্র ব্যথা",
    "hindi": "तेज़ दर्द"
  },
  "pent_roof_earth_by_worm": {
    "english": "Pent roof / earth by worm",
    "bishnupriya": "টেপ",
    "bangla": "ছাউনি / কেঁচোর মাটি",
    "hindi": "छत / कीड़े की मिट्टी"
  },
  "slender_water_drops": {
    "english": "Slender / water drops",
    "bishnupriya": "টেপা",
    "bangla": "পাতলা / গাছ থেকে জলের ফোঁটা",
    "hindi": "पतला / पेड़ से पानी की बूंदें"
  },
  "under_aged": {
    "english": "Under-aged",
    "bishnupriya": "টেপানা",
    "bangla": "অপরিণত",
    "hindi": "कम उम्र का"
  },
  "lump_of_clay": {
    "english": "Lump of clay",
    "bishnupriya": "টেম্পাক",
    "bangla": "মাটির ঢেলা",
    "hindi": "मिट्टी का ढेला"
  },
  "feeling_sense": {
    "english": "Feeling, sense",
    "bishnupriya": "টের",
    "bangla": "অনুভূতি",
    "hindi": "एहसास"
  },
  "self": {
    "english": "Self",
    "bishnupriya": "থাই",
    "bangla": "নিজে",
    "hindi": "खुद"
  },
  "pride": {
    "english": "Pride",
    "bishnupriya": "থাইচেট / থাইথেক",
    "bangla": "অহংকার",
    "hindi": "घमंड"
  },
  "nature_cheat": {
    "english": "Nature / cheat",
    "bishnupriya": "থাক",
    "bangla": "স্বভাব / প্রতারক",
    "hindi": "स्वभाव / धोखेबाज़"
  },
  "to_be_cheated": {
    "english": "To be cheated",
    "bishnupriya": "থাক-",
    "bangla": "ঠকা",
    "hindi": "ठगना"
  },
  "false_cheat": {
    "english": "False / cheat",
    "bishnupriya": "থাকা",
    "bangla": "মিথ্যা / ঠগ",
    "hindi": "झूठा / ठग"
  },
  "to_cheat": {
    "english": "To cheat",
    "bishnupriya": "থাকা-",
    "bangla": "ঠকানো",
    "hindi": "ठगना"
  },
  "beak_of_bird": {
    "english": "Beak of bird",
    "bishnupriya": "থাট",
    "bangla": "পাখির ঠোঁট",
    "hindi": "चोंच"
  },
  "style_frolic": {
    "english": "Style, frolic",
    "bishnupriya": "থানকা",
    "bangla": "স্টাইল / মজা",
    "hindi": "स्टाइल / मज़ाक"
  },
  "certainty_place_under_water": {
    "english": "Certainty / place under water",
    "bishnupriya": "থাই",
    "bangla": "নিশ্চয়তা / জলের নিচে",
    "hindi": "यकीन / पानी के नीचे"
  },
  "fickle": {
    "english": "Fickle",
    "bishnupriya": "থাক",
    "bangla": "চঞ্চল",
    "hindi": "चंचल"
  },
  "to_feed": {
    "english": "To feed",
    "bishnupriya": "থাক",
    "bangla": "খাওয়ানো",
    "hindi": "खिलाना"
  },
  "heap": {
    "english": "Heap",
    "bishnupriya": "থাউথারা",
    "bangla": "গাদা",
    "hindi": "ढेर"
  },
  "belief_betrothing": {
    "english": "Belief / betrothing",
    "bishnupriya": "থাচা",
    "bangla": "বিশ্বাস / বাগদান",
    "hindi": "विश्वास / सगाई"
  },
  "to_push_compress": {
    "english": "To push / compress",
    "bishnupriya": "থাচা-",
    "bangla": "ঠেলা / চাপা",
    "hindi": "धक्का देना / दबाना"
  },
  "joke": {
    "english": "Joke",
    "bishnupriya": "থাট্টা",
    "bangla": "ঠাট্টা",
    "hindi": "मज़ाक"
  },
  "cold": {
    "english": "Cold",
    "bishnupriya": "থান্ডা",
    "bangla": "ঠান্ডা",
    "hindi": "ठंडा"
  },
  "care": {
    "english": "Care",
    "bishnupriya": "থানা",
    "bangla": "খেয়াল",
    "hindi": "ध्यान"
  },
  "speech_slang": {
    "english": "Speech / slang",
    "bishnupriya": "থার",
    "bangla": "ভাষা / অশ্লীল কথা",
    "hindi": "भाषा / गाली"
  },
  "to_speak_abuse_with_slang": {
    "english": "To speak / abuse with slang",
    "bishnupriya": "থারা-",
    "bangla": "কথা বলা / গালি দেওয়া",
    "hindi": "बोलना / गाली देना"
  },
  "log": {
    "english": "Log",
    "bishnupriya": "থাল",
    "bangla": "গুঁড়ি",
    "hindi": "लट्ठा"
  },
  "wooden_vessel_for_washing": {
    "english": "Wooden vessel for washing",
    "bishnupriya": "থালি",
    "bangla": "থালা",
    "hindi": "थाली"
  },
  "just_correct_erect": {
    "english": "Just, correct / erect",
    "bishnupriya": "থিক",
    "bangla": "ঠিক / খাড়া",
    "hindi": "ठीक / सीधा"
  },
  "contract": {
    "english": "Contract",
    "bishnupriya": "থিকা",
    "bangla": "চুক্তি",
    "hindi": "ठेका"
  },
  "contractor": {
    "english": "Contractor",
    "bishnupriya": "থিকাদার",
    "bangla": "ঠিকাদার",
    "hindi": "ठेकेदार"
  },
  "horoscope": {
    "english": "Horoscope",
    "bishnupriya": "থিকুজি",
    "bangla": "কুষ্ঠি",
    "hindi": "कुंडली"
  },
  "disparagement": {
    "english": "Disparagement",
    "bishnupriya": "থিচালাই",
    "bangla": "তাচ্ছিল্য",
    "hindi": "तिरस्कार"
  },
  "fold": {
    "english": "Fold",
    "bishnupriya": "থিপ",
    "bangla": "ভাঁজ",
    "hindi": "मोड़"
  },
  "slow_late": {
    "english": "Slow, late",
    "bishnupriya": "থিল",
    "bangla": "ধীর",
    "hindi": "धीमा"
  },
  "disparagement_2": {
    "english": "Disparagement",
    "bishnupriya": "থিস",
    "bangla": "তাচ্ছিল্য",
    "hindi": "तिरस्कार"
  },
  "weariness_tired": {
    "english": "Weariness / tired",
    "bishnupriya": "থু",
    "bangla": "ক্লান্তি",
    "hindi": "थकान"
  },
  "to_peck_push_with_elbow": {
    "english": "To peck / push with elbow",
    "bishnupriya": "থুকারা- / থুকুরা-",
    "bangla": "ঠোকরানো / কনুই দিয়ে ঠেলা",
    "hindi": "चोंच मारना / कोहनी से धक्का"
  },
  "like": {
    "english": "Like",
    "bishnupriya": "থুনা",
    "bangla": "মতো",
    "hindi": "जैसा"
  },
  "sweet": {
    "english": "Sweet",
    "bishnupriya": "থুম",
    "bangla": "মিষ্টি",
    "hindi": "मीठा"
  },
  "sensation": {
    "english": "Sensation",
    "bishnupriya": "থুর",
    "bangla": "অনুভূতি",
    "hindi": "एहसास"
  },
  "bend_vanity": {
    "english": "Bend / vanity",
    "bishnupriya": "থেক",
    "bangla": "বাঁক / অহংকার",
    "hindi": "मोड़ / घमंड"
  },
  "to_take_shelter": {
    "english": "To take shelter",
    "bishnupriya": "থেক-",
    "bangla": "আশ্রয় নেওয়া",
    "hindi": "शरण लेना"
  },
  "difficulty": {
    "english": "Difficulty",
    "bishnupriya": "থেকা",
    "bangla": "অসুবিধা",
    "hindi": "मुश्किल"
  },
  "leg": {
    "english": "Leg",
    "bishnupriya": "থেন",
    "bangla": "পা",
    "hindi": "टांग"
  },
  "stout_stick": {
    "english": "Stout stick",
    "bishnupriya": "থেঙ্গা",
    "bangla": "মোটা লাঠি",
    "hindi": "मोटी लाठी"
  },
  "to_belabour_with_stick": {
    "english": "To belabour with stick",
    "bishnupriya": "থেঙ্গা-",
    "bangla": "লাঠি দিয়ে পেটা",
    "hindi": "डंडे से पीटना"
  },
  "courageous": {
    "english": "Courageous",
    "bishnupriya": "থাউ",
    "bangla": "সাহসী",
    "hindi": "बहादुर"
  },
  "courage": {
    "english": "Courage",
    "bishnupriya": "থাউনা",
    "bangla": "সাহস",
    "hindi": "हिम्मत"
  },
  "big_drum": {
    "english": "Big drum",
    "bishnupriya": "দাপ্ফা",
    "bangla": "বড়ো ঢোল",
    "hindi": "बड़ा ढोल"
  },
  "fig_tree_swollen": {
    "english": "Fig tree / swollen",
    "bishnupriya": "দামুরি",
    "bangla": "ডুমুর গাছ / ফোলা",
    "hindi": "अंजीर का पेड़ / सूजा हुआ"
  },
  "fear": {
    "english": "Fear",
    "bishnupriya": "দার",
    "bangla": "ভয়",
    "hindi": "डर"
  },
  "to_be_afraid": {
    "english": "To be afraid",
    "bishnupriya": "দারা-",
    "bangla": "ভয় পাওয়া",
    "hindi": "डरना"
  },
  "timid": {
    "english": "Timid",
    "bishnupriya": "দারুয়া",
    "bangla": "ভিতু",
    "hindi": "डरपोक"
  },
  "lump_of_earth": {
    "english": "Lump of earth",
    "bishnupriya": "দালা",
    "bangla": "মাটির ঢেলা",
    "hindi": "मिट्टी का ढेला"
  },
  "to_knead": {
    "english": "To knead",
    "bishnupriya": "দালা-",
    "bangla": "মাখা",
    "hindi": "गूंधना"
  },
  "to_be_burnt_to_ashes": {
    "english": "To be burnt to ashes",
    "bishnupriya": "দাহ-",
    "bangla": "ছাই হওয়া",
    "hindi": "जलकर राख होना"
  },
  "burnt_to_ashes": {
    "english": "Burnt to ashes",
    "bishnupriya": "দাহা",
    "bangla": "ছাই",
    "hindi": "राख"
  },
  "to_burn_torment": {
    "english": "To burn / torment",
    "bishnupriya": "দাহা-",
    "bangla": "পোড়ানো / যন্ত্রণা দেওয়া",
    "hindi": "जलाना / सताना"
  },
  "so_much": {
    "english": "So much",
    "bishnupriya": "বারা",
    "bangla": "এত",
    "hindi": "इतना"
  },
  "fried_cake": {
    "english": "A fried cake",
    "bishnupriya": "বারা",
    "bangla": "তেলে ভাজা পিঠে",
    "hindi": "तेल में तला पकौड़ा"
  },
  "vanity_pride": {
    "english": "Vanity / pride",
    "bishnupriya": "বারাই",
    "bangla": "অহংকার",
    "hindi": "घमंड"
  },
  "pill": {
    "english": "Pill",
    "bishnupriya": "বারি",
    "bangla": "বড়ি",
    "hindi": "गोली"
  },
  "hook": {
    "english": "Hook",
    "bishnupriya": "বারি",
    "bangla": "হুক",
    "hindi": "हुक"
  },
  "kind_of_big_bamboo": {
    "english": "A kind of big bamboo",
    "bishnupriya": "বারুয়া",
    "bangla": "বড়ো বাঁশ",
    "hindi": "बड़ा बांस"
  },
  "at_most": {
    "english": "At most",
    "bishnupriya": "বারজোর",
    "bangla": "সর্বোচ্চ",
    "hindi": "अधिक से अधिक"
  },
  "governor_general": {
    "english": "Governor-general",
    "bishnupriya": "বারলাত",
    "bangla": "গভর্নর জেনারেল",
    "hindi": "गवर्नर जनरल"
  },
  "speech_talk": {
    "english": "Speech / talk",
    "bishnupriya": "বল",
    "bangla": "কথা",
    "hindi": "बात"
  },
  "to_make_round": {
    "english": "To make round",
    "bishnupriya": "বল-",
    "bangla": "গোল করা",
    "hindi": "गोल करना"
  },
  "to_increase": {
    "english": "To increase",
    "bishnupriya": "বল-",
    "bangla": "বাড়া",
    "hindi": "बढ़ना"
  },
  "use_of_force": {
    "english": "Use of force",
    "bishnupriya": "বলাত্কার",
    "bangla": "জোরাজুরি",
    "hindi": "बलात्कार"
  },
  "bull_fool": {
    "english": "Bull / fool",
    "bishnupriya": "বালদ",
    "bangla": "ষাঁড় / বোকা",
    "hindi": "सांड / मूर्ख"
  },
  "addition": {
    "english": "Addition",
    "bishnupriya": "বলান",
    "bangla": "যোগ",
    "hindi": "जोड़"
  },
  "composers_name_at_end": {
    "english": "Composer's name at end",
    "bishnupriya": "বলান্তি",
    "bangla": "শেষে রচয়িতার নাম",
    "hindi": "अंत में रचयिता का नाम"
  },
  "speech_permission_to_eat": {
    "english": "Speech / permission to eat",
    "bishnupriya": "বলা",
    "bangla": "কথা / খাওয়ার অনুমতি",
    "hindi": "बात / खाने की इजाज़त"
  },
  "carbuncle": {
    "english": "Carbuncle",
    "bishnupriya": "বলা",
    "bangla": "কার্বাঙ্কল",
    "hindi": "फोड़ा"
  },
  "to_permit_feast": {
    "english": "To permit (feast)",
    "bishnupriya": "বলা-",
    "bangla": "অনুমতি দেওয়া",
    "hindi": "इजाज़त देना"
  },
  "to_add": {
    "english": "To add",
    "bishnupriya": "বলা-",
    "bangla": "যোগ করা",
    "hindi": "जोड़ना"
  },
  "excess": {
    "english": "Excess",
    "bishnupriya": "বলান",
    "bangla": "অতিরিক্ত",
    "hindi": "ज़्यादा"
  },
  "round_shaped": {
    "english": "Round-shaped",
    "bishnupriya": "বলিল",
    "bangla": "গোলাকার",
    "hindi": "गोलाकार"
  },
  "expression_of_admiration": {
    "english": "An expression of admiration",
    "bishnupriya": "বলিহারি",
    "bangla": "প্রশংসা",
    "hindi": "वाह-वाह"
  },
  "with_strong_current": {
    "english": "With strong current",
    "bishnupriya": "বলেবলে",
    "bangla": "প্রবল স্রোত",
    "hindi": "तेज़ धारा"
  },
  "spear": {
    "english": "Spear",
    "bishnupriya": "বল্লম",
    "bangla": "বল্লম",
    "hindi": "भाला"
  },
  "residence": {
    "english": "Residence",
    "bishnupriya": "বসত",
    "bangla": "বাসস্থান",
    "hindi": "निवास"
  },
  "dwelling_house": {
    "english": "Dwelling house",
    "bishnupriya": "বসতবাড়ি",
    "bangla": "বাড়িঘর",
    "hindi": "मकान"
  },
  "prize": {
    "english": "Prize",
    "bishnupriya": "বকশিস",
    "bangla": "বকশিশ",
    "hindi": "बख्शीश"
  },
  "sack": {
    "english": "Sack",
    "bishnupriya": "বাস্তা",
    "bangla": "বস্তা",
    "hindi": "बोरी"
  },
  "village": {
    "english": "Village",
    "bishnupriya": "বাস্তিবাড়ি",
    "bangla": "গ্রাম",
    "hindi": "गाँव"
  },
  "habitation": {
    "english": "Habitation",
    "bishnupriya": "বসবস",
    "bangla": "বসবাস",
    "hindi": "रहना"
  },
  "to_sit_dwell": {
    "english": "To sit / dwell",
    "bishnupriya": "বহ-",
    "bangla": "বসা / বাস করা",
    "hindi": "बैठना / रहना"
  },
  "to_carry_flow": {
    "english": "To carry / flow",
    "bishnupriya": "বহ-",
    "bangla": "বওয়া / বইয়ে যাওয়া",
    "hindi": "ढोना / बहना"
  },
  "daughter_in_law": {
    "english": "Daughter-in-law",
    "bishnupriya": "বহাক",
    "bangla": "বৌ",
    "hindi": "बहू"
  },
  "extent": {
    "english": "Extent",
    "bishnupriya": "বহার",
    "bangla": "বিস্তার",
    "hindi": "फैलाव"
  },
  "thickened_curd": {
    "english": "Thickened / curd",
    "bishnupriya": "বহা",
    "bangla": "ঘন / দই",
    "hindi": "गाढ़ा / दही"
  },
  "sitting_dwelling_curdling": {
    "english": "Sitting / dwelling / curdling",
    "bishnupriya": "বহানি",
    "bangla": "বসা / দই জমানো",
    "hindi": "बैठना / दही जमाना"
  },
  "carrying": {
    "english": "Carrying",
    "bishnupriya": "বহানি",
    "bangla": "বওয়া",
    "hindi": "ढोना"
  },
  "reinstated": {
    "english": "Reinstated",
    "bishnupriya": "বহাল",
    "bangla": "পুনর্বহাল",
    "hindi": "बहाल"
  },
  "choked_grave_tune": {
    "english": "Choked / grave (tune)",
    "bishnupriya": "বহালা",
    "bangla": "গম্ভীর / আটকে যাওয়া",
    "hindi": "गंभीर / बंद"
  },
  "double_causative_to_cause_to_sit": {
    "english": "Double causative 'to cause to sit'",
    "bishnupriya": "বহুয়া-",
    "bangla": "বসিয়ে দেওয়া",
    "hindi": "बिठवाना"
  },
  "to_cause_to_carry_causative": {
    "english": "To cause to carry (causative)",
    "bishnupriya": "বহুয়া-",
    "bangla": "বইয়ে নেওয়া",
    "hindi": "ढुलवाना"
  },
  "service": {
    "english": "Service",
    "bishnupriya": "বা",
    "bangla": "চাকরি",
    "hindi": "नौकरी"
  },
  "grandmother": {
    "english": "Grandmother",
    "bishnupriya": "বাই",
    "bangla": "ঠাকুরমা",
    "hindi": "दादी"
  },
  "violet": {
    "english": "Violet",
    "bishnupriya": "বৈঙ্গনি",
    "bangla": "বেগুনি",
    "hindi": "बैंगनी"
  },
  "scattering_grains_grown_plants": {
    "english": "Scattering grains / grown plants",
    "bishnupriya": "বাইন",
    "bangla": "বুনন / চারা",
    "hindi": "बोना / पौधे"
  },
  "sister_in_law_husband": {
    "english": "Sister-in-law’s husband",
    "bishnupriya": "বাত্রা",
    "bangla": "ননদাই",
    "hindi": "नंदोई"
  },
  "discipline": {
    "english": "Discipline",
    "bishnupriya": "বাইল",
    "bangla": "শৃঙ্খলা",
    "hindi": "अनुशासन"
  },
  "bucket": {
    "english": "Bucket",
    "bishnupriya": "বাতলা",
    "bangla": "বালতি",
    "hindi": "बाल्टी"
  },
  "flock_of_fishes_house_related": {
    "english": "Flock of fishes / house-related",
    "bishnupriya": "বাইস",
    "bangla": "মাছের ঝাঁক / ঘরোয়া",
    "hindi": "मछलियों का झुंड / घरेलू"
  },
  "carpentry_tool": {
    "english": "Carpentry tool",
    "bishnupriya": "বাইস",
    "bangla": "ছুতোরের যন্ত্র",
    "hindi": "बढ़ई का औज़ार"
  },
  "spoiled_betel_nuts": {
    "english": "Spoiled betel-nuts",
    "bishnupriya": "বাইসুকা",
    "bangla": "পোকায় খাওয়া সুপারি",
    "hindi": "कीड़े से खराब सुपारी"
  },
  "condition_price_child": {
    "english": "Condition / price / child",
    "bishnupriya": "বৌ",
    "bangla": "অবস্থা / দাম / সন্তান",
    "hindi": "हालत / कीमत / बच्चा"
  },
  "atmosphere": {
    "english": "Atmosphere",
    "bishnupriya": "বৌ",
    "bangla": "বায়ুমণ্ডল",
    "hindi": "वायुमंडल"
  },
  "vagabond": {
    "english": "Vagabond",
    "bishnupriya": "বৌতা",
    "bangla": "আশ্রয়হীন",
    "hindi": "आवारा"
  },
  "armlet": {
    "english": "Armlet",
    "bishnupriya": "বৌতি",
    "bangla": "বাজুবন্দ",
    "hindi": "बाजूबंद"
  },
  "songs_of_wandering_minstrels": {
    "english": "Songs of wandering minstrels",
    "bishnupriya": "বৌলা",
    "bangla": "বাউল গান",
    "hindi": "बाउल गीत"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "বৌস",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक तरह की मछली"
  },
  "open_minded_amicable_settlement": {
    "english": "Open-minded / amicable settlement",
    "bishnupriya": "বৌসালা",
    "bangla": "খোলা মন / মীমাংসা",
    "hindi": "खुला दिमाग / समझौता"
  },
  "bark": {
    "english": "Bark",
    "bishnupriya": "বাকাল",
    "bangla": "ছাল",
    "hindi": "छाल"
  },
  "giving_bad_smell_aged_unmarried": {
    "english": "Giving bad smell / aged unmarried",
    "bishnupriya": "বাকুনা",
    "bangla": "পুরানো গন্ধ / বুড়ো অবিবাহিত",
    "hindi": "बदबूदार / बूढ़ा कुंवारा"
  },
  "splitting_husks": {
    "english": "Splitting husks",
    "bishnupriya": "বাকুরি",
    "bangla": "ধানের তুষ ছাড়ানো",
    "hindi": "चावल की भूसी निकालना"
  },
  "to_some_extent": {
    "english": "To some extent",
    "bishnupriya": "বাক্কা",
    "bangla": "কিছুটা",
    "hindi": "थोड़ा"
  },
  "expression_speech": {
    "english": "Expression / speech",
    "bishnupriya": "বাক্য",
    "bangla": "বাক্য",
    "hindi": "वाक्य"
  },
  "praise": {
    "english": "Praise",
    "bishnupriya": "বাখান",
    "bangla": "প্রশংসা",
    "hindi": "तारीफ"
  },
  "power": {
    "english": "Power",
    "bishnupriya": "বাগ",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "strength": {
    "english": "Strength",
    "bishnupriya": "বাগড়",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "to_inform": {
    "english": "To inform",
    "bishnupriya": "বাগা-",
    "bangla": "খবর দেওয়া",
    "hindi": "खबर देना"
  },
  "garden": {
    "english": "Garden",
    "bishnupriya": "বাগান",
    "bangla": "বাগান",
    "hindi": "बगीचा"
  },
  "bark_banana": {
    "english": "Bark (banana)",
    "bishnupriya": "বাগুয়া",
    "bangla": "কলার ছাল",
    "hindi": "केले का छिलका"
  },
  "skin_disease": {
    "english": "Skin disease",
    "bishnupriya": "বাগদার",
    "bangla": "চর্মরোগ",
    "hindi": "चमड़ी की बीमारी"
  },
  "tiger": {
    "english": "Tiger",
    "bishnupriya": "বাঘ",
    "bangla": "বাঘ",
    "hindi": "बाघ"
  },
  "tigress": {
    "english": "Tigress",
    "bishnupriya": "বাঘিনি",
    "bangla": "বাঘিনী",
    "hindi": "शेरनी"
  },
  "bamboo_carrier": {
    "english": "Bamboo carrier",
    "bishnupriya": "বান",
    "bangla": "বাঁশের ঝুড়ি",
    "hindi": "बांस की टोकरी"
  },
  "manipuri_muslim_deprecatory": {
    "english": "Manipuri Muslim (deprecatory)",
    "bishnupriya": "বাঙ্গাল",
    "bangla": "মণিপুরী মুসলিম (তাচ্ছিল্যে)",
    "hindi": "मणिपुरी मुसलमान (तिरस्कार से)"
  },
  "bungalow": {
    "english": "Bungalow",
    "bishnupriya": "বাঙ্গালা",
    "bangla": "বাংলো",
    "hindi": "बंगला"
  },
  "left": {
    "english": "Left",
    "bishnupriya": "বাঙ্গুরি",
    "bangla": "বাম",
    "hindi": "बायाँ"
  },
  "breaker_of_pulses": {
    "english": "Breaker of pulses",
    "bishnupriya": "বাঙ্গুরি",
    "bangla": "ডাল ভাঙার যন্ত্র",
    "hindi": "दाल तोड़ने वाला"
  },
  "remains_of_molasses": {
    "english": "Remains of molasses",
    "bishnupriya": "বাঙ্গুরি",
    "bangla": "গুড়ের অবশিষ্ট",
    "hindi": "गुड़ का बचा हुआ हिस्सा"
  },
  "to_the_left": {
    "english": "To the left",
    "bishnupriya": "বাঙ্গেদে",
    "bangla": "বাঁদিকে",
    "hindi": "बायीं ओर"
  },
  "game_of_dangling": {
    "english": "Game of dangling",
    "bishnupriya": "বানবাকুটি",
    "bangla": "দোল খেলা",
    "hindi": "झूला खेल"
  },
  "to_swing_dangle": {
    "english": "To swing / dangle",
    "bishnupriya": "বানবানা-",
    "bangla": "দোলা",
    "hindi": "झूलना"
  },
  "to_survive": {
    "english": "To survive",
    "bishnupriya": "বাচ-",
    "bangla": "বেঁচে থাকা",
    "hindi": "बचना"
  },
  "living_saving": {
    "english": "Living / saving",
    "bishnupriya": "বাচানি",
    "bangla": "বেঁচে থাকা / বাঁচানো",
    "hindi": "जीना / बचाना"
  },
  "child": {
    "english": "Child",
    "bishnupriya": "বাচ্চা",
    "bangla": "বাচ্চা",
    "hindi": "बच्चा"
  },
  "to_select": {
    "english": "To select",
    "bishnupriya": "বাছ-",
    "bangla": "বাছাই করা",
    "hindi": "चुनना"
  },
  "selection": {
    "english": "Selection",
    "bishnupriya": "বাছান",
    "bangla": "বাছাই",
    "hindi": "चुनाव"
  },
  "to_wait": {
    "english": "To wait",
    "bishnupriya": "বাছা-",
    "bangla": "অপেক্ষা করা",
    "hindi": "इंतज़ार करना"
  },
  "mutual_selection": {
    "english": "Mutual selection",
    "bishnupriya": "বাছাবাছি",
    "bangla": "পরস্পর বাছাই",
    "hindi": "आपस में चुनना"
  },
  "calf": {
    "english": "Calf",
    "bishnupriya": "বাছুর",
    "bangla": "বাছুর",
    "hindi": "बछड़ा"
  },
  "to_be_sounded_played": {
    "english": "To be sounded / played",
    "bishnupriya": "বাজ-",
    "bangla": "বাজানো",
    "hindi": "बजना"
  },
  "to_appear_suddenly_contact": {
    "english": "To appear suddenly / come in contact",
    "bishnupriya": "বাজ-",
    "bangla": "হঠাৎ দেখা দেওয়া / স্পর্শ করা",
    "hindi": "अचानक दिखना / छूना"
  },
  "to_sound_play_instrument": {
    "english": "To sound / play on instrument",
    "bishnupriya": "বাজা-",
    "bangla": "বাজানো",
    "hindi": "बजाना"
  },
  "to_bring_in_contact": {
    "english": "To bring in contact",
    "bishnupriya": "বাজা-",
    "bangla": "স্পর্শ করানো",
    "hindi": "छुवाना"
  },
  "band_party": {
    "english": "Band-party",
    "bishnupriya": "বাজানা",
    "bangla": "ব্যান্ড",
    "hindi": "बैंड"
  },
  "being_sounded_playing_gerund": {
    "english": "Being sounded / playing (gerund)",
    "bishnupriya": "বাজানি",
    "bangla": "বাজানো",
    "hindi": "बजाने की क्रिया"
  },
  "market": {
    "english": "Market",
    "bishnupriya": "বাজার",
    "bangla": "বাজার",
    "hindi": "बाज़ार"
  },
  "of_market_untrustworthy": {
    "english": "Of the market / untrustworthy",
    "bishnupriya": "বাজারি",
    "bangla": "বাজারু / অবিশ্বাসী",
    "hindi": "बाज़ारी / बेईमान"
  },
  "father": {
    "english": "Father",
    "bishnupriya": "বাজি",
    "bangla": "বাবা",
    "hindi": "पिता"
  },
  "bet_magic": {
    "english": "Bet / magic",
    "bishnupriya": "বাজি",
    "bangla": "বাজি / জাদু",
    "hindi": "शर्त / जादू"
  },
  "magician": {
    "english": "Magician",
    "bishnupriya": "বাজিগর",
    "bangla": "জাদুকর",
    "hindi": "जादूगर"
  },
  "side": {
    "english": "Side",
    "bishnupriya": "বাজু",
    "bangla": "পাশ",
    "hindi": "किनारा"
  },
  "ordinary": {
    "english": "Ordinary",
    "bishnupriya": "বাজে",
    "bangla": "সাধারণ",
    "hindi": "फालतू"
  },
  "confiscation": {
    "english": "Confiscation",
    "bishnupriya": "বাজেয়াপ্ত",
    "bangla": "বাজেয়াপ্ত",
    "hindi": "ज़ब्ती"
  },
  "desire_greed": {
    "english": "Desire / greed",
    "bishnupriya": "বানচু",
    "bangla": "লোভ",
    "hindi": "लालच"
  },
  "barren_woman": {
    "english": "Barren woman",
    "bishnupriya": "বানজি",
    "bangla": "বন্ধ্যা",
    "hindi": "बाँझ"
  },
  "share": {
    "english": "Share",
    "bishnupriya": "বাট",
    "bangla": "ভাগ",
    "hindi": "हिस्सा"
  },
  "udder": {
    "english": "Udder",
    "bishnupriya": "বাট",
    "bangla": "থন",
    "hindi": "थन"
  },
  "to_distribute": {
    "english": "To distribute",
    "bishnupriya": "বাট-",
    "bangla": "বাঁটা",
    "hindi": "बाँटना"
  },
  "case_ware": {
    "english": "Case / ware",
    "bishnupriya": "বাতা",
    "bangla": "বাক্স",
    "hindi": "डिब्बा"
  },
  "distributing_gerund": {
    "english": "Distributing (gerund)",
    "bishnupriya": "বাতানি",
    "bangla": "বাঁটার ক্রিয়া",
    "hindi": "बाँटने की क्रिया"
  },
  "heap_bricks": {
    "english": "Heap (bricks)",
    "bishnupriya": "বাত্তা",
    "bangla": "গাদা",
    "hindi": "ढेर"
  },
  "short": {
    "english": "Short",
    "bishnupriya": "বাত্তি",
    "bangla": "খাটো",
    "hindi": "छोटा"
  },
  "short_statured": {
    "english": "Short-statured",
    "bishnupriya": "বাত্তুকা",
    "bangla": "খাটো",
    "hindi": "बौना"
  },
  "udder_cow": {
    "english": "Udder (cow)",
    "bishnupriya": "বানা",
    "bangla": "থন",
    "hindi": "थन"
  },
  "businessman_goldsmith": {
    "english": "Businessman / goldsmith",
    "bishnupriya": "বানিয়া",
    "bangla": "ব্যবসায়ী / সোনার",
    "hindi": "बनिया / सुनार"
  },
  "to_form_ulcer": {
    "english": "To form ulcer (foot/tongue of animals)",
    "bishnupriya": "বাত-",
    "bangla": "পায়ে/জিভে ঘা হওয়া",
    "hindi": "पैर/जीभ में छाला होना"
  },
  "right_side": {
    "english": "Right side",
    "bishnupriya": "বাতার-বারা",
    "bangla": "ডানদিক",
    "hindi": "दाहिना तरफ"
  },
  "forming_ulcer_gerund": {
    "english": "Forming ulcer (gerund)",
    "bishnupriya": "বাতানি",
    "bangla": "ঘা হওয়া",
    "hindi": "छाला होने की क्रिया"
  },
  "woman_who_marries_abuse": {
    "english": "Woman who marries (abuse)",
    "bishnupriya": "বাতারি",
    "bangla": "বারবার বিয়ে করা মহিলা",
    "hindi": "बार-बार शादी करने वाली"
  },
  "breeze": {
    "english": "Breeze",
    "bishnupriya": "বাতাস",
    "bangla": "হাওয়া",
    "hindi": "हवा"
  },
  "kind_of_sugar_candy": {
    "english": "A kind of sugar-candy",
    "bishnupriya": "বাতাসা",
    "bangla": "বাতাসা",
    "hindi": "बताशा"
  },
  "kind_of_vegetable": {
    "english": "A kind of vegetable",
    "bishnupriya": "বাত্থুয়া",
    "bangla": "এক ধরনের শাক",
    "hindi": "एक तरह का साग"
  },
  "uncared_lonesome": {
    "english": "Uncared / lonesome",
    "bishnupriya": "বাত্থুয়া",
    "bangla": "অযত্নে রাখা",
    "hindi": "लावारिस"
  },
  "deduction": {
    "english": "Deduction",
    "bishnupriya": "বাদ",
    "bangla": "বাদ",
    "hindi": "कटौती"
  },
  "monkey": {
    "english": "Monkey",
    "bishnupriya": "বাদর",
    "bangla": "বাঁদর",
    "hindi": "बंदर"
  },
  "shower": {
    "english": "Shower",
    "bishnupriya": "বাদল",
    "bangla": "ঝড়ো বৃষ্টি",
    "hindi": "मूसलाधार बारिश"
  },
  "to_leave_aside_ignore": {
    "english": "To leave aside / ignore",
    "bishnupriya": "বাদা-",
    "bangla": "ছেড়ে দেওয়া",
    "hindi": "छोड़ना"
  },
  "almond": {
    "english": "Almond",
    "bishnupriya": "বাদাম",
    "bangla": "বাদাম",
    "hindi": "बादाम"
  },
  "forest": {
    "english": "Forest",
    "bishnupriya": "বাদর",
    "bangla": "জঙ্গল",
    "hindi": "जंगल"
  },
  "vile": {
    "english": "Vile",
    "bishnupriya": "বাদু",
    "bangla": "নীচ",
    "hindi": "नीच"
  },
  "bastard": {
    "english": "Bastard",
    "bishnupriya": "বাদুয়া",
    "bangla": "হারামি",
    "hindi": "हरामी"
  },
  "after_leaving_aside": {
    "english": "After / leaving aside",
    "bishnupriya": "বাদে",
    "bangla": "পরে / ছেড়ে",
    "hindi": "बाद में / छोड़कर"
  },
  "shower_2": {
    "english": "Shower",
    "bishnupriya": "বাদলা",
    "bangla": "ঝড়ো বৃষ্টি",
    "hindi": "मूसलाधार बारिश"
  },
  "silvan_deity": {
    "english": "Silvan deity",
    "bishnupriya": "বাদশা",
    "bangla": "জঙ্গলের দেবতা",
    "hindi": "जंगल का देवता"
  },
  "act_of_tying": {
    "english": "The act of tying",
    "bishnupriya": "বাধ",
    "bangla": "বাঁধা",
    "hindi": "बाँधना"
  },
  "embankment": {
    "english": "Embankment",
    "bishnupriya": "বাধ",
    "bangla": "বাঁধ",
    "hindi": "बाँध"
  },
  "to_be_obstructed": {
    "english": "To be obstructed",
    "bishnupriya": "বাধ-",
    "bangla": "আটকে যাওয়া",
    "hindi": "रुकना"
  },
  "to_tie_bind": {
    "english": "To tie / bind",
    "bishnupriya": "বাধ-",
    "bangla": "বাঁধা",
    "hindi": "बाँधना"
  },
  "to_make_create": {
    "english": "To make / create",
    "bishnupriya": "বাধা-",
    "bangla": "তৈরি করা",
    "hindi": "बनाना"
  },
  "tying_making_gerund": {
    "english": "Tying / making (gerund)",
    "bishnupriya": "বাধানি",
    "bangla": "বাঁধা / তৈরি করা",
    "hindi": "बाँधने / बनाने की क्रिया"
  },
  "obstruction": {
    "english": "Obstruction",
    "bishnupriya": "বাধা-বাধি",
    "bangla": "বাধা",
    "hindi": "रुकावट"
  },
  "rubbish": {
    "english": "Rubbish",
    "bishnupriya": "বাধা-বুধা",
    "bangla": "আবর্জনা",
    "hindi": "कचरा"
  },
  "to_cause_to_bind": {
    "english": "To cause to bind",
    "bishnupriya": "বাধুয়া-",
    "bangla": "বাঁধানো",
    "hindi": "बँधवाना"
  },
  "rowing": {
    "english": "Rowing",
    "bishnupriya": "বানা",
    "bangla": "দাঁড় টানা",
    "hindi": "चप्पू चलाना"
  },
  "thinking": {
    "english": "Thinking",
    "bishnupriya": "বানা",
    "bangla": "ভাবা",
    "hindi": "सोचना"
  },
  "playing_on_instrument": {
    "english": "Playing on instrument",
    "bishnupriya": "বানা",
    "bangla": "বাজানো",
    "hindi": "बजाना"
  },
  "to_make_prepare": {
    "english": "To make / prepare",
    "bishnupriya": "বানা-",
    "bangla": "তৈরি করা",
    "hindi": "बनाना"
  },
  "making_gerund": {
    "english": "Making (gerund)",
    "bishnupriya": "বানানি",
    "bangla": "তৈরির ক্রিয়া",
    "hindi": "बनाने की क्रिया"
  },
  "axe": {
    "english": "Axe",
    "bishnupriya": "বানুক",
    "bangla": "কুড়াল",
    "hindi": "कुल्हाड़ी"
  },
  "female_slave": {
    "english": "Female slave",
    "bishnupriya": "বান্দি",
    "bangla": "দাসী",
    "hindi": "दासी"
  },
  "binding": {
    "english": "Binding",
    "bishnupriya": "বন্ধন",
    "bangla": "বন্ধন",
    "hindi": "बंधन"
  },
  "tied_definite": {
    "english": "Tied / definite",
    "bishnupriya": "বন্ধা",
    "bangla": "বাঁধা / নির্দিষ্ট",
    "hindi": "बंधा / निश्चित"
  },
  "to_get_reserved_castrate": {
    "english": "To get reserved / castrate",
    "bishnupriya": "বন্ধা-",
    "bangla": "বুক করা / খোজা করা",
    "hindi": "बुक करना / खस्सी करना"
  },
  "father": {
    "english": "Father",
    "bishnupriya": "বাপ",
    "bangla": "বাবা",
    "hindi": "पिता"
  },
  "forefathers": {
    "english": "Forefathers",
    "bishnupriya": "বাপ-দাদা",
    "bangla": "দাদা-প্রদাদা",
    "hindi": "दादा-परदादा"
  },
  "related_as_father": {
    "english": "Related as father",
    "bishnupriya": "বাপাক",
    "bangla": "বাবার মতো",
    "hindi": "पिता जैसा"
  },
  "address_to_brahmin_boy": {
    "english": "Address to Brahmin boy",
    "bishnupriya": "বাপু",
    "bangla": "ব্রাহ্মণ ছেলেকে সম্বোধন",
    "hindi": "ब्राह्मण लड़के को संबोधन"
  },
  "on_account_of": {
    "english": "On account of",
    "bishnupriya": "বাবত",
    "bangla": "সম্পর্কে",
    "hindi": "के बारे में"
  },
  "father_saint": {
    "english": "Father / saint",
    "bishnupriya": "বাবা / বাবাজি",
    "bangla": "বাবা / সাধু",
    "hindi": "बाबा / साधु"
  },
  "gentleman": {
    "english": "Gentleman",
    "bishnupriya": "বাবু",
    "bangla": "বাবু",
    "hindi": "बाबू"
  },
  "dandyism": {
    "english": "Dandyism",
    "bishnupriya": "বাবুগিরি",
    "bangla": "বাবুয়ানা",
    "hindi": "बाबूगिरी"
  },
  "brahmin": {
    "english": "Brahmin",
    "bishnupriya": "বামন",
    "bangla": "ব্রাহ্মণ",
    "hindi": "ब्राह्मण"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "বামি",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक तरह की मछली"
  },
  "medicinal_plant": {
    "english": "Medicinal plant",
    "bishnupriya": "বামযষ্টি",
    "bangla": "ব্রহ্মযষ্টি",
    "hindi": "ब्रह्मयष्टि"
  },
  "bamboo": {
    "english": "Bamboo",
    "bishnupriya": "বাম্বু",
    "bangla": "বাঁশ",
    "hindi": "बांस"
  },
  "turn_leisure": {
    "english": "Turn / leisure",
    "bishnupriya": "বার",
    "bangla": "পালা / ফুরসত",
    "hindi": "बारी / फुरसत"
  },
  "twelve": {
    "english": "Twelve",
    "bishnupriya": "বারা",
    "bangla": "বারো",
    "hindi": "बारह"
  },
  "the_twelfth_day": {
    "english": "The twelfth day",
    "bishnupriya": "বারাইয়া",
    "bangla": "দ্বাদশী",
    "hindi": "द्वादशी"
  },
  "gun_powder": {
    "english": "Gun-powder",
    "bishnupriya": "বারাত",
    "bangla": "বারুদ",
    "hindi": "बारूद"
  },
  "reservoir_of_paddy": {
    "english": "Reservoir of paddy",
    "bishnupriya": "বারান",
    "bangla": "ধানের গোলা",
    "hindi": "धान का भंडार"
  },
  "grown_throughout_year": {
    "english": "Grown throughout year",
    "bishnupriya": "বারমাসিকা",
    "bangla": "সারা বছর ফলনশীল",
    "hindi": "बारहमासी"
  },
  "side_direction": {
    "english": "Side / direction",
    "bishnupriya": "বারা",
    "bangla": "দিক",
    "hindi": "दिशा"
  },
  "to_beat_cane": {
    "english": "To beat / cane",
    "bishnupriya": "বারা-",
    "bangla": "পেটানো",
    "hindi": "पीटना"
  },
  "portico": {
    "english": "Portico",
    "bishnupriya": "বারান্দা",
    "bangla": "বারান্দা",
    "hindi": "बरामदा"
  },
  "stick_whip": {
    "english": "Stick / whip",
    "bishnupriya": "বারি",
    "bangla": "লাঠি / চাবুক",
    "hindi": "डंडा / कोड़ा"
  },
  "small_fine": {
    "english": "Small / fine",
    "bishnupriya": "বারিক",
    "bangla": "ছোটো / সূক্ষ্ম",
    "hindi": "छोटा / बारीक"
  },
  "to_beat_whip": {
    "english": "To beat / whip",
    "bishnupriya": "বারিয়া-",
    "bangla": "পেটানো",
    "hindi": "पीटना"
  },
  "carrier_bamboo_wood": {
    "english": "Carrier (bamboo/wood)",
    "bishnupriya": "বারুঙ্গা",
    "bangla": "বাঁশ/কাঠের বাহক",
    "hindi": "बांस/लकड़ी का ढोने वाला"
  },
  "again_and_again": {
    "english": "Again and again",
    "bishnupriya": "বারে-বারে",
    "bangla": "বারবার",
    "hindi": "बार-बार"
  },
  "and_again": {
    "english": "And / again",
    "bishnupriya": "বারো",
    "bangla": "আর",
    "hindi": "और"
  },
  "invitation": {
    "english": "Invitation",
    "bishnupriya": "বার্তন",
    "bangla": "আমন্ত্রণ",
    "hindi": "निमंत्रण"
  },
  "to_increase_intr_trans": {
    "english": "To increase (intr./trans.)",
    "bishnupriya": "বার- / বারা-",
    "bangla": "বাড়া",
    "hindi": "बढ़ना / बढ़ाना"
  },
  "excess_of_show": {
    "english": "Excess of show",
    "bishnupriya": "বারাবারি",
    "bangla": "অতিরিক্ত দেখানো",
    "hindi": "दिखावा"
  },
  "kitchen_garden_residence": {
    "english": "Kitchen-garden / residence",
    "bishnupriya": "বারি",
    "bangla": "বাগান / বাসস্থান",
    "hindi": "बगीचा / निवास"
  },
  "wristlet": {
    "english": "Wristlet",
    "bishnupriya": "বালা",
    "bangla": "চুড়ি",
    "hindi": "चूड़ी"
  },
  "good_rich_happy": {
    "english": "Good / rich & happy",
    "bishnupriya": "বালা",
    "bangla": "ভালো / ধনী-সুখী",
    "hindi": "अच्छा / अमीर-सুखी"
  },
  "sand": {
    "english": "Sand",
    "bishnupriya": "বলি",
    "bangla": "বালি",
    "hindi": "रेत"
  },
  "aged_mature": {
    "english": "Aged / mature",
    "bishnupriya": "বলিক",
    "bangla": "বয়স্ক",
    "hindi": "बड़ा"
  },
  "sandy_shore": {
    "english": "Sandy shore",
    "bishnupriya": "বলিচার",
    "bangla": "বালুতট",
    "hindi": "रेतीला किनारा"
  },
  "bucket": {
    "english": "Bucket",
    "bishnupriya": "বলতি",
    "bangla": "বালতি",
    "hindi": "बाल्टी"
  },
  "to_adapt_oneself": {
    "english": "To adapt oneself",
    "bishnupriya": "বহ-",
    "bangla": "মানিয়ে নেওয়া",
    "hindi": "ढलना"
  },
  "bamboo_2": {
    "english": "Bamboo",
    "bishnupriya": "বহা",
    "bangla": "বাঁশ",
    "hindi": "बांस"
  },
  "bravery": {
    "english": "Bravery",
    "bishnupriya": "বহাদুরি",
    "bangla": "বীরত্ব",
    "hindi": "बहादुरी"
  },
  "affection": {
    "english": "Affection",
    "bishnupriya": "বহানা",
    "bangla": "স্নেহ",
    "hindi": "प्यार"
  },
  "uncleaned_stale": {
    "english": "Uncleaned / stale",
    "bishnupriya": "বহি",
    "bangla": "পুরানো / বাসি",
    "hindi": "गंदा / बासी"
  },
  "outside": {
    "english": "Outside",
    "bishnupriya": "বহির",
    "bangla": "বাইরে",
    "hindi": "बाहर"
  },
  "extra_unrelated": {
    "english": "Extra / unrelated",
    "bishnupriya": "বহিরা",
    "bangla": "বাইরের / অপ্রাসঙ্গিক",
    "hindi": "बाहरी / असंबंधित"
  },
  "religious_enthusiast": {
    "english": "Religious enthusiast",
    "bishnupriya": "বহুল",
    "bangla": "ধর্মোন্মাদ",
    "hindi": "धर्मांध"
  },
  "land": {
    "english": "Land",
    "bishnupriya": "বী",
    "bangla": "জমি",
    "hindi": "ज़मीन"
  },
  "to_be_sold": {
    "english": "To be sold",
    "bishnupriya": "বিক-",
    "bangla": "বিক্রি হওয়া",
    "hindi": "बिकना"
  },
  "to_sell": {
    "english": "To sell",
    "bishnupriya": "বিকা-",
    "bangla": "বিক্রি করা",
    "hindi": "बेचना"
  },
  "deformed_queer": {
    "english": "Deformed / queer",
    "bishnupriya": "বিকাতা",
    "bangla": "বিকৃত",
    "hindi": "विकृत"
  },
  "sale": {
    "english": "Sale",
    "bishnupriya": "বিকি",
    "bangla": "বিক্রি",
    "hindi": "बिक्री"
  },
  "rejuvenated": {
    "english": "Rejuvenated",
    "bishnupriya": "বিকসি",
    "bangla": "নবীন",
    "hindi": "नया"
  },
  "eczema": {
    "english": "Eczema",
    "bishnupriya": "বিখাজু",
    "bangla": "খোস-পাঁচড়া",
    "hindi": "खुजली"
  },
  "to_supervise_order": {
    "english": "To supervise / order",
    "bishnupriya": "বিগা-",
    "bangla": "তদারকি / আদেশ",
    "hindi": "निगरानी / आदेश"
  },
  "to_be_annoyed": {
    "english": "To be annoyed",
    "bishnupriya": "বিগার-",
    "bangla": "বিরক্ত হওয়া",
    "hindi": "नाराज़ होना"
  },
  "to_annoy": {
    "english": "To annoy",
    "bishnupriya": "বিগারা-",
    "bangla": "বিরক্ত করা",
    "hindi": "चिढ़ाना"
  },
  "measure_of_land": {
    "english": "A measure of land",
    "bishnupriya": "বিঘা",
    "bangla": "বিঘা",
    "hindi": "बीघा"
  },
  "obstacle": {
    "english": "Obstacle",
    "bishnupriya": "বিঘিনি",
    "bangla": "বাধা",
    "hindi": "रुकावट"
  },
  "sudden_hiccup": {
    "english": "Sudden hiccup",
    "bishnupriya": "বিন",
    "bangla": "হেঁচকি",
    "hindi": "हिचकी"
  },
  "left": {
    "english": "Left",
    "bishnupriya": "বিন",
    "bangla": "বাম",
    "hindi": "बायाँ"
  },
  "to_the_left": {
    "english": "To the left",
    "bishnupriya": "বিনেদে",
    "bangla": "বাঁদিকে",
    "hindi": "बायीं तरफ"
  },
  "band_party": {
    "english": "Band-party",
    "bishnupriya": "বিঙ্গুল",
    "bangla": "ব্যান্ড",
    "hindi": "बैंड"
  },
  "dizzy_sensation": {
    "english": "Dizzy sensation",
    "bishnupriya": "বিন-বিন",
    "bangla": "মাথা ঘোরা",
    "hindi": "चक्कर"
  },
  "whirling_around_uncontrolled": {
    "english": "Whirling around (uncontrolled)",
    "bishnupriya": "বিনবুলা",
    "bangla": "ঘুরপাক খাওয়া",
    "hindi": "चक्कर खाना"
  },
  "irritating_bamboo_dust": {
    "english": "Irritating bamboo dust",
    "bishnupriya": "বিচবিচা",
    "bangla": "বাঁশের খোঁচা খোঁচা ধুলো",
    "hindi": "बांस की चुभने वाली धूल"
  },
  "scorpion_painful_swelling": {
    "english": "Scorpion / painful swelling",
    "bishnupriya": "বিছা",
    "bangla": "বিছে / আঙুলের ব্যথার ফোলা",
    "hindi": "बिच्छू / उंगली की सूजन"
  },
  "bed": {
    "english": "Bed",
    "bishnupriya": "বিছানা",
    "bangla": "বিছানা",
    "hindi": "बिस्तर"
  },
  "to_search": {
    "english": "To search",
    "bishnupriya": "বিচার-",
    "bangla": "খোঁজা",
    "hindi": "ढूँढना"
  },
  "mutual_searching_fault_finding": {
    "english": "Mutual searching / fault-finding",
    "bishnupriya": "বিচারা-বিচিরি",
    "bangla": "পরস্পর খোঁজাখুঁজি / দোষ ধরা",
    "hindi": "आपस में तलाश / दोष निकालना"
  },
  "slippery": {
    "english": "Slippery",
    "bishnupriya": "বিজালা",
    "bangla": "পিছল",
    "hindi": "फिसलन भरा"
  },
  "dazzling_ornamental_threads": {
    "english": "Dazzling / ornamental threads",
    "bishnupriya": "বিজুরি",
    "bangla": "ঝকঝকে / সোনালি সুতো",
    "hindi": "चमकदार / सोने का धागा"
  },
  "electricity": {
    "english": "Electricity",
    "bishnupriya": "বিজুলি",
    "bangla": "বিদ্যুৎ",
    "hindi": "बिजली"
  },
  "wall_post": {
    "english": "Wall / post",
    "bishnupriya": "বীত / বীতি",
    "bangla": "দেওয়াল",
    "hindi": "दीवार"
  },
  "knave": {
    "english": "Knave",
    "bishnupriya": "বীতলা",
    "bangla": "ঠগ",
    "hindi": "ठग"
  },
  "knavery": {
    "english": "Knavery",
    "bishnupriya": "বীতলামি",
    "bangla": "ঠগামি",
    "hindi": "ठगी"
  },
  "unpleasant": {
    "english": "Unpleasant",
    "bishnupriya": "বিতিকিচ্ছা",
    "bangla": "অসুন্দর",
    "hindi": "अप्रिय"
  },
  "near": {
    "english": "Near",
    "bishnupriya": "বিত্তা",
    "bangla": "কাছে",
    "hindi": "पास"
  },
  "farewell": {
    "english": "Farewell",
    "bishnupriya": "বিদায়",
    "bangla": "বিদায়",
    "hindi": "विदा"
  },
  "large_fowl": {
    "english": "Large fowl",
    "bishnupriya": "বিদুতিতু",
    "bangla": "বড়ো মুরগি",
    "hindi": "बड़ा मुर्ग"
  },
  "to_penetrate": {
    "english": "To penetrate",
    "bishnupriya": "বিধ-",
    "bangla": "ঢোকা",
    "hindi": "घुसना"
  },
  "piercing": {
    "english": "Piercing",
    "bishnupriya": "বিধা",
    "bangla": "বিঁধা",
    "hindi": "छेदना"
  },
  "to_cause_to_penetrate": {
    "english": "To cause to penetrate",
    "bishnupriya": "বিধা-",
    "bangla": "ঢুকিয়ে দেওয়া",
    "hindi": "घुसाना"
  },
  "poking_hither_thither": {
    "english": "Poking hither-thither",
    "bishnupriya": "বিধাবিধি",
    "bangla": "এদিক-ওদিক খোঁচা",
    "hindi": "इधर-उधर छेदना"
  },
  "elder_sister_husband": {
    "english": "Elder sister’s husband / husband’s elder brother",
    "bishnupriya": "বীনাক",
    "bangla": "দিদির জামাই / দেওর",
    "hindi": "जीजा / जेठ"
  },
  "narration": {
    "english": "Narration",
    "bishnupriya": "বিনান",
    "bangla": "বর্ণনা",
    "hindi": "वर्णन"
  },
  "address_to_elder_sister_husband": {
    "english": "Address to elder sister’s husband",
    "bishnupriya": "বিনি",
    "bangla": "দিদির জামাইকে সম্বোধন",
    "hindi": "जीजा को संबोधन"
  },
  "one_who_lost_paternal_property_orphan": {
    "english": "One who lost paternal property / orphan",
    "bishnupriya": "বীনপিতৃ",
    "bangla": "সম্পত্তিহারা / অনাথ",
    "hindi": "संपत्ति गँवाने वाला / अनाथ"
  },
  "turning_round_speedily": {
    "english": "Turning round speedily",
    "bishnupriya": "বিনবিনি-চাক",
    "bangla": "ঘুরঘুর",
    "hindi": "तेज़ घूमना"
  },
  "consultation": {
    "english": "Consultation",
    "bishnupriya": "বিবসনা",
    "bangla": "পরামর্শ",
    "hindi": "सलाह"
  },
  "lady": {
    "english": "Lady",
    "bishnupriya": "বিবি",
    "bangla": "বিবি",
    "hindi": "बीबी"
  },
  "to_mutter_in_sleep": {
    "english": "To mutter in sleep",
    "bishnupriya": "বিবিয়া-",
    "bangla": "ঘুমে বকা",
    "hindi": "नींद में बड़बड़ाना"
  },
  "perplexed": {
    "english": "Perplexed",
    "bishnupriya": "বিভুলা",
    "bangla": "বিহ্বল / হতবাক",
    "hindi": "हक्का-बक्का / हतप्रभ"
  },
  "marriage": {
    "english": "Marriage",
    "bishnupriya": "বিয়া",
    "bangla": "বিয়ে",
    "hindi": "शादी"
  },
  "to_sprout_give_birth": {
    "english": "To sprout / give birth",
    "bishnupriya": "বিয়া-",
    "bangla": "অঙ্কুরিত হওয়া / জন্ম দেওয়া",
    "hindi": "अंकुरित होना / जन्म देना"
  },
  "day_break": {
    "english": "Day-break",
    "bishnupriya": "বিয়ান",
    "bangla": "ভোর",
    "hindi": "सुबह"
  },
  "breed": {
    "english": "Breed",
    "bishnupriya": "বিয়ান",
    "bangla": "প্রজাতি",
    "hindi": "नस्ल"
  },
  "species_of_paddy": {
    "english": "A species of paddy",
    "bishnupriya": "বীরান",
    "bangla": "বিরান ধান",
    "hindi": "वीरान चावल"
  },
  "to_twist_words": {
    "english": "To twist (words)",
    "bishnupriya": "বীরা-",
    "bangla": "শব্দ বিকৃত করা",
    "hindi": "शब्द तोड़ना-मरोड़ना"
  },
  "tree": {
    "english": "Tree",
    "bishnupriya": "বিরিক / বিরুক",
    "bangla": "গাছ",
    "hindi": "पेड़"
  },
  "fruitless_useless": {
    "english": "Fruitless / useless",
    "bishnupriya": "বীর্থা",
    "bangla": "বৃথা",
    "hindi": "व्यर्थ"
  },
  "muttering_teeming_of_insects": {
    "english": "Muttering / teeming of insects",
    "bishnupriya": "বীর্বীর",
    "bangla": "গুঞ্জন / পোকার ঝাঁক",
    "hindi": "बड़बड़ाहट / कीड़ों का झुंड"
  },
  "bubbles": {
    "english": "Bubbles",
    "bishnupriya": "বীর্বীরি",
    "bangla": "বুদবুদ",
    "hindi": "बुलबुले"
  },
  "packet_of_betel_nut": {
    "english": "Packet of betel nut",
    "bishnupriya": "বীরা",
    "bangla": "সুপারির প্যাকেট",
    "hindi": "सुपारी का पैकेट"
  },
  "kind_of_cigarette": {
    "english": "A kind of cigarette",
    "bishnupriya": "বীরি",
    "bangla": "বিড়ি",
    "hindi": "बीड़ी"
  },
  "lake": {
    "english": "Lake",
    "bishnupriya": "বিল",
    "bangla": "বিল",
    "hindi": "तालाब"
  },
  "time": {
    "english": "Time",
    "bishnupriya": "বিল",
    "bangla": "সময়",
    "hindi": "समय"
  },
  "distribution": {
    "english": "Distribution",
    "bishnupriya": "বিলান",
    "bangla": "বিতরণ",
    "hindi": "बँटवारा"
  },
  "arrangement_of_work": {
    "english": "Arrangement of work",
    "bishnupriya": "বিলায়",
    "bangla": "কাজের বণ্টন",
    "hindi": "काम का बँटवारा"
  },
  "to_distribute_freely": {
    "english": "To distribute freely",
    "bishnupriya": "বিলা-",
    "bangla": "মুক্ত হস্তে বিলানো",
    "hindi": "खुलकर बाँटना"
  },
  "england_europe": {
    "english": "England / Europe",
    "bishnupriya": "বিলাত",
    "bangla": "বিলেত",
    "hindi": "विलायत"
  },
  "of_england_european": {
    "english": "Of England / European",
    "bishnupriya": "বিলাতি",
    "bangla": "বিলেতি",
    "hindi": "विलायती"
  },
  "to_make_poisonous": {
    "english": "To make poisonous",
    "bishnupriya": "বিষা-",
    "bangla": "বিষ মেশানো",
    "hindi": "ज़हर मिलाना"
  },
  "septic_boil": {
    "english": "Septic boil",
    "bishnupriya": "বিস্বরণ",
    "bangla": "পচা ফোড়া",
    "hindi": "सड़ता फोड़ा"
  },
  "biscuit": {
    "english": "Biscuit",
    "bishnupriya": "বিস্কুট",
    "bangla": "বিস্কুট",
    "hindi": "बिस्किट"
  },
  "understanding": {
    "english": "Understanding",
    "bishnupriya": "বু",
    "bangla": "বোঝা",
    "hindi": "समझ"
  },
  "chest_breast": {
    "english": "Chest / breast",
    "bishnupriya": "বুক",
    "bangla": "বুক",
    "hindi": "सीना"
  },
  "fool": {
    "english": "Fool",
    "bishnupriya": "বুক্কা",
    "bangla": "বোকা",
    "hindi": "मूर्ख"
  },
  "foolishness": {
    "english": "Foolishness",
    "bishnupriya": "বুকামি",
    "bangla": "বোকামি",
    "hindi": "मूर्खता"
  },
  "fist_blow_with_fist": {
    "english": "Fist / blow with fist",
    "bishnupriya": "বুকুর",
    "bangla": "মুঠো / মুষ্ট্যাঘাত",
    "hindi": "मुट्ठी / घूँसा"
  },
  "to_hit_with_fist": {
    "english": "To hit with fist",
    "bishnupriya": "বুকুরা-",
    "bangla": "মুঠো মারা",
    "hindi": "मुक्का मारना"
  },
  "raft_of_bamboo": {
    "english": "Raft of bamboo",
    "bishnupriya": "বুঙ্গা",
    "bangla": "বাঁশের ভেলা",
    "hindi": "बांस का बेड़ा"
  },
  "mothers_milk_child_language": {
    "english": "Mother’s milk (child language)",
    "bishnupriya": "বুচু",
    "bangla": "মায়ের দুধ (শিশুভাষা)",
    "hindi": "माँ का दूध (बच्चों की भाषा)"
  },
  "to_understand": {
    "english": "To understand",
    "bishnupriya": "বুজ-",
    "bangla": "বোঝা",
    "hindi": "समझना"
  },
  "to_fill_up": {
    "english": "To fill up",
    "bishnupriya": "বুজ-",
    "bangla": "ভরা",
    "hindi": "भरना"
  },
  "mature": {
    "english": "Mature",
    "bishnupriya": "বুজান",
    "bangla": "পরিপক্ক",
    "hindi": "परिपक्व"
  },
  "to_explain_console": {
    "english": "To explain / console",
    "bishnupriya": "বুজা-",
    "bangla": "বোঝানো / সান্ত্বনা",
    "hindi": "समझाना / तसल्ली देना"
  },
  "to_fill_up_trans": {
    "english": "To fill up (trans.)",
    "bishnupriya": "বুজা-",
    "bangla": "ভরানো",
    "hindi": "भराना"
  },
  "mutual_understanding": {
    "english": "Mutual understanding",
    "bishnupriya": "বুজাবুজি",
    "bangla": "পরস্পর বোঝাপোঝাপো",
    "hindi": "आपसी समझ"
  },
  "capable_of_understanding": {
    "english": "Capable of understanding",
    "bishnupriya": "বুজদার",
    "bangla": "বোঝার যোগ্য",
    "hindi": "समझदार"
  },
  "load": {
    "english": "Load",
    "bishnupriya": "বুঝা",
    "bangla": "বোঝা",
    "hindi": "बोझ"
  },
  "old_aged_man": {
    "english": "Old / aged man",
    "bishnupriya": "বুড়া",
    "bangla": "বুড়ো",
    "hindi": "बूढ़ा"
  },
  "tricky_wily_female": {
    "english": "Tricky / wily (female)",
    "bishnupriya": "বুধিনি",
    "bangla": "চালাক মহিলা",
    "hindi": "चालाक औरत"
  },
  "immersed_to_submerge": {
    "english": "Immersed / to submerge",
    "bishnupriya": "বুড়া-",
    "bangla": "ডুবানো",
    "hindi": "डुबाना"
  },
  "to_weave": {
    "english": "To weave",
    "bishnupriya": "বুন-",
    "bangla": "বোনা",
    "hindi": "बुनना"
  },
  "woven": {
    "english": "Woven",
    "bishnupriya": "বুনা",
    "bangla": "বোনা",
    "hindi": "बुना हुआ"
  },
  "weaving": {
    "english": "Weaving",
    "bishnupriya": "বুনানি",
    "bangla": "বোনার ক্রিয়া",
    "hindi": "बुनाई"
  },
  "mother_milk_breast": {
    "english": "Mother-milk / breast",
    "bishnupriya": "বুনি",
    "bangla": "মায়ের দুধ / স্তন",
    "hindi": "माँ का दूध / स्तन"
  },
  "fever_from_excess_milk": {
    "english": "Fever from excess milk",
    "bishnupriya": "বুনিয়া-জার",
    "bangla": "দুধের জ্বর",
    "hindi": "दूध का बुखार"
  },
  "traditional": {
    "english": "Traditional",
    "bishnupriya": "বুনিয়াদি",
    "bangla": "পুরানো / ভিত্তিগত",
    "hindi": "बुनियादी"
  },
  "heap_blaze": {
    "english": "Heap / blaze",
    "bishnupriya": "বুন্দা",
    "bangla": "গাদা / আগুনের ঝলক",
    "hindi": "ढेर / आग की लपट"
  },
  "bomb": {
    "english": "Bomb",
    "bishnupriya": "বুমা",
    "bangla": "বোমা",
    "hindi": "बम"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "বুয়াল",
    "bangla": "বোয়াল মাছ",
    "hindi": "बोआल मछली"
  },
  "bubble": {
    "english": "Bubble",
    "bishnupriya": "বুরুক",
    "bangla": "বুদবুদ",
    "hindi": "बुलबुला"
  },
  "bastion": {
    "english": "Bastion",
    "bishnupriya": "বুরুস",
    "bangla": "বুরুজ",
    "hindi": "बुर्ज"
  },
  "continuous_bubbling": {
    "english": "Continuous bubbling",
    "bishnupriya": "বুরবুর",
    "bangla": "বুদবুদ ওঠা",
    "hindi": "बुलबुले उठना"
  },
  "to_immerse_sink": {
    "english": "To immerse / sink",
    "bishnupriya": "বুর-",
    "bangla": "ডোবা",
    "hindi": "डुबाना"
  },
  "diver": {
    "english": "Diver",
    "bishnupriya": "বুরাল",
    "bangla": "ডুবুরি",
    "hindi": "गोताखोर"
  },
  "aged_woman_grandmother": {
    "english": "Aged woman / grandmother",
    "bishnupriya": "বুড়ি",
    "bangla": "বুড়ি",
    "hindi": "बूढ़ी"
  },
  "to_say": {
    "english": "To say",
    "bishnupriya": "বুল-",
    "bangla": "বলা",
    "hindi": "बोलना"
  },
  "to_be_misled": {
    "english": "To be misled",
    "bishnupriya": "বুল-",
    "bangla": "বিভ্রান্ত হওয়া",
    "hindi": "भटकना"
  },
  "to_turn_travel": {
    "english": "To turn (side) / travel",
    "bishnupriya": "বুল-",
    "bangla": "ঘুরানো / ভ্রমণ",
    "hindi": "मुड़ना / घूमना"
  },
  "turn_travel": {
    "english": "Turn / travel",
    "bishnupriya": "বুলান",
    "bangla": "পালা / ঘোরা",
    "hindi": "बारी / घूमना"
  },
  "to_mislead_cause_to_turn": {
    "english": "To mislead / cause to turn",
    "bishnupriya": "বুলা-",
    "bangla": "বিপথে নেওয়া / ঘোরানো",
    "hindi": "भटकाना / मुड़वाना"
  },
  "mutual_turning": {
    "english": "Mutual turning",
    "bishnupriya": "বুলাবুলি",
    "bangla": "পরস্পর ঘোরানো",
    "hindi": "आपस में मुड़ना"
  },
  "abnormal": {
    "english": "Abnormal",
    "bishnupriya": "বুলা-সুলা",
    "bangla": "অস্বাভাবিক",
    "hindi": "असामान्य"
  },
  "vagabond": {
    "english": "Vagabond",
    "bishnupriya": "বুলুয়া",
    "bangla": "আশ্রয়হীন",
    "hindi": "आवारा"
  },
  "sweet_throated_bird": {
    "english": "Sweet-throated bird (bulbul)",
    "bishnupriya": "বুলবুলি",
    "bangla": "বুলবুলি",
    "hindi": "बुलबुल"
  },
  "belly": {
    "english": "Belly",
    "bishnupriya": "বুহুর",
    "bangla": "পেট",
    "hindi": "पेट"
  },
  "contrary_to_law": {
    "english": "Contrary to law",
    "bishnupriya": "বে-আইন",
    "bangla": "আইনবিরুদ্ধ",
    "hindi": "गैरकानूनी"
  },
  "unlawful": {
    "english": "Unlawful",
    "bishnupriya": "বে-আইনি",
    "bangla": "অবৈধ",
    "hindi": "अवैध"
  },
  "foolish": {
    "english": "Foolish",
    "bishnupriya": "বে-আক্কল",
    "bangla": "নির্বোধ",
    "hindi": "बेवकूफ"
  },
  "no_good_communications": {
    "english": "Having no good communications",
    "bishnupriya": "বে-আদ্দা",
    "bangla": "যোগাযোগহীন",
    "hindi": "बिना संपर्क का"
  },
  "unmannerly": {
    "english": "Unmannerly",
    "bishnupriya": "বে-আদব",
    "bangla": "অশিষ্ট",
    "hindi": "बदतमीज़"
  },
  "insult_shameless": {
    "english": "Insult / shameless",
    "bishnupriya": "বে-ইজ্জত",
    "bangla": "অপমান / বেহায়া",
    "hindi": "बेहुरमती / बेशर्म"
  },
  "brinjal": {
    "english": "Brinjal",
    "bishnupriya": "বেইনাং",
    "bangla": "বেগুন",
    "hindi": "बैंगन"
  },
  "mother_in_law_of_daughter": {
    "english": "Mother-in-law of daughter",
    "bishnupriya": "বেইনি",
    "bangla": "মেয়ের শাশুড়ি",
    "hindi": "बेटी की सास"
  },
  "brothers_sisters": {
    "english": "Brothers & sisters",
    "bishnupriya": "বেইবুনি",
    "bangla": "ভাই-বোন",
    "hindi": "भाई-बहन"
  },
  "unfaithful": {
    "english": "Unfaithful",
    "bishnupriya": "বেইমান",
    "bangla": "বিশ্বাসঘাতক",
    "hindi": "बेईमान"
  },
  "enemy": {
    "english": "Enemy",
    "bishnupriya": "বেইরি",
    "bangla": "শত্রু",
    "hindi": "दुश्मन"
  },
  "sun": {
    "english": "Sun",
    "bishnupriya": "বেইলি",
    "bangla": "সূর্য",
    "hindi": "सूरज"
  },
  "kind_of_bamboo": {
    "english": "A kind of bamboo",
    "bishnupriya": "বেউর",
    "bangla": "এক প্রকার বাঁশ",
    "hindi": "एक तरह का बांस"
  },
  "out_of_order": {
    "english": "Out of order",
    "bishnupriya": "বেকাল",
    "bangla": "খারাপ",
    "hindi": "खराब"
  },
  "curved_crooked": {
    "english": "Curved / crooked",
    "bishnupriya": "বেকা",
    "bangla": "বাঁকা",
    "hindi": "टेढ़ा"
  },
  "mischance": {
    "english": "Mischance",
    "bishnupriya": "বেকুব",
    "bangla": "দুর্ঘটনা",
    "hindi": "बदकिस्मती"
  },
  "inconvenient": {
    "english": "Inconvenient",
    "bishnupriya": "বেকায়দা",
    "bangla": "অসুবিধাজনক",
    "hindi": "असुविधाजनक"
  },
  "unemployed": {
    "english": "Unemployed",
    "bishnupriya": "বেকার",
    "bangla": "বেকার",
    "hindi": "बेरोज़गार"
  },
  "lake_from_river_curve": {
    "english": "Lake from river curve",
    "bishnupriya": "বেকি",
    "bangla": "নদীর বাঁকে তৈরি হ্রদ",
    "hindi": "नदी के मोड़ से बनी झील"
  },
  "foolish_speechless": {
    "english": "Foolish / speechless",
    "bishnupriya": "বেকুব",
    "bangla": "বোকা",
    "hindi": "बेवकूफ"
  },
  "inappropriate": {
    "english": "Inappropriate",
    "bishnupriya": "বেখাপ্পা",
    "bangla": "অযোগ্য",
    "hindi": "अनुपयुक्त"
  },
  "forced_labour_porter": {
    "english": "Forced labour / porter",
    "bishnupriya": "বেগার",
    "bangla": "বেগার",
    "hindi": "बेगार"
  },
  "frog": {
    "english": "Frog",
    "bishnupriya": "বেঁন",
    "bangla": "ব্যাঙ",
    "hindi": "मेंढक"
  },
  "weaving_instrument": {
    "english": "Weaving instrument",
    "bishnupriya": "বেন",
    "bangla": "তাঁতের যন্ত্র",
    "hindi": "करघे का औज़ार"
  },
  "space_between_extended_arms": {
    "english": "Space between extended arms",
    "bishnupriya": "বেং",
    "bangla": "দু’হাতের ফাঁক",
    "hindi": "दो हाथ फैलाने की दूरी"
  },
  "hornet": {
    "english": "Hornet",
    "bishnupriya": "বেনুল / বেঞন",
    "bangla": "ভিমরুল",
    "hindi": "भंवरा"
  },
  "turn": {
    "english": "Turn",
    "bishnupriya": "বেনকাত",
    "bangla": "মোড়",
    "hindi": "मोड़"
  },
  "husking_pedal": {
    "english": "Husking pedal",
    "bishnupriya": "বেঙ্কি",
    "bangla": "ধান ঝাড়ার প্যাডেল",
    "hindi": "धान कूटने का पेडल"
  },
  "curved": {
    "english": "Curved",
    "bishnupriya": "বেঙ্গারা",
    "bangla": "বাঁকা",
    "hindi": "टेढ़ा"
  },
  "perplexed": {
    "english": "Perplexed",
    "bishnupriya": "বেন্তাল",
    "bangla": "বিভ্রান্ত",
    "hindi": "हक्का-बक्का"
  },
  "helpless": {
    "english": "Helpless",
    "bishnupriya": "বেচারা",
    "bangla": "বেচারা",
    "hindi": "बेचारा"
  },
  "to_sell": {
    "english": "To sell",
    "bishnupriya": "বেচ-",
    "bangla": "বিক্রি করা",
    "hindi": "बेचना"
  },
  "selling": {
    "english": "Selling",
    "bishnupriya": "বেচা",
    "bangla": "বিক্রি",
    "hindi": "बिक्री"
  },
  "market": {
    "english": "Market",
    "bishnupriya": "বাজার",
    "bangla": "বাজার",
    "hindi": "बाज़ार"
  },
  "one_who_breaks_promise": {
    "english": "One who breaks promise",
    "bishnupriya": "বাজারিয়া",
    "bangla": "অবিশ্বাসী",
    "hindi": "वादाखिलाफी"
  },
  "father": {
    "english": "Father",
    "bishnupriya": "বাজি",
    "bangla": "বাবা",
    "hindi": "पिता"
  },
  "bet_magic": {
    "english": "Bet / magic",
    "bishnupriya": "বাজি",
    "bangla": "বাজি / জাদু",
    "hindi": "शर्त / जादू"
  },
  "magician": {
    "english": "Magician",
    "bishnupriya": "বাজিগর",
    "bangla": "জাদুকর",
    "hindi": "जादूगर"
  },
  "side": {
    "english": "Side",
    "bishnupriya": "বাজু",
    "bangla": "পাশ",
    "hindi": "बाजू"
  },
  "too_much": {
    "english": "Too much",
    "bishnupriya": "বেজান",
    "bangla": "অত্যধিক",
    "hindi": "बहुत ज़्यादा"
  },
  "odd_number": {
    "english": "Odd number",
    "bishnupriya": "বেজুড়",
    "bangla": "বিজোড়",
    "hindi": "बेजोड़"
  },
  "strong_brave": {
    "english": "Strong & brave",
    "bishnupriya": "বেটা",
    "bangla": "বীর",
    "hindi": "बहादुर"
  },
  "untimely": {
    "english": "Untimely",
    "bishnupriya": "বে-টাইম",
    "bangla": "অসময়",
    "hindi": "गलत समय"
  },
  "maid_woman": {
    "english": "Maid / woman",
    "bishnupriya": "বেটি",
    "bangla": "ঝি / মহিলা",
    "hindi": "नौकरानी / औरत"
  },
  "soft_thin": {
    "english": "Soft & thin",
    "bishnupriya": "বেটবেট",
    "bangla": "নরম ও পাতলা",
    "hindi": "मुलायम और पतला"
  },
  "improper": {
    "english": "Improper",
    "bishnupriya": "বেঠিক",
    "bangla": "অযথাযথ",
    "hindi": "गलत"
  },
  "ill_fashioned": {
    "english": "Ill-fashioned",
    "bishnupriya": "বেদঙ্গা",
    "bangla": "কদাকার",
    "hindi": "बदसूरत"
  },
  "inconvenience": {
    "english": "Inconvenience",
    "bishnupriya": "বেদৌল",
    "bangla": "অসুবিধা",
    "hindi": "असुविधा"
  },
  "bed_cover": {
    "english": "Bed-cover",
    "bishnupriya": "বেডকাপড়",
    "bangla": "বিছানার চাদর",
    "hindi": "बेड कवर"
  },
  "cane": {
    "english": "Cane",
    "bishnupriya": "বেত",
    "bangla": "বেত",
    "hindi": "बेंत"
  },
  "attentive": {
    "english": "Attentive",
    "bishnupriya": "বেতার",
    "bangla": "মনোযোগী",
    "hindi": "ध्यान देने वाला"
  },
  "to_cane": {
    "english": "To cane",
    "bishnupriya": "বেতা-",
    "bangla": "বেত মারা",
    "hindi": "कोड़ा मारना"
  },
  "breach_of_musical_measure": {
    "english": "Breach of musical measure / whim",
    "bishnupriya": "বেতাল",
    "bangla": "বেতাল / খেয়াল",
    "hindi": "बेताल / सनक"
  },
  "whimsical": {
    "english": "Whimsical",
    "bishnupriya": "বেতালিয়া",
    "bangla": "খেয়ালি",
    "hindi": "सनकी"
  },
  "kind_of_bamboo": {
    "english": "A kind of bamboo",
    "bishnupriya": "বেতুয়া",
    "bangla": "এক প্রকার বাঁশ",
    "hindi": "एक तरह का बांस"
  },
  "wicked": {
    "english": "Wicked",
    "bishnupriya": "বেত্তামিস",
    "bangla": "দুষ্ট",
    "hindi": "बदमाश"
  },
  "inconvenience_pain": {
    "english": "Inconvenience",
    "bishnupriya": "বেদাগ",
    "bangla": "অসুবিধা",
    "hindi": "तकलीफ"
  },
  "pain_distress": {
    "english": "Pain / distress",
    "bishnupriya": "বেদনা",
    "bangla": "যন্ত্রণা",
    "hindi": "दर्द"
  },
  "seedless_pomegranate": {
    "english": "Seedless pomegranate",
    "bishnupriya": "বেদানা",
    "bangla": "বেদানা",
    "hindi": "अनार (बिना बीज)"
  },
  "queer_inconvenience": {
    "english": "Queer / inconvenience",
    "bishnupriya": "বেদারা",
    "bangla": "অদ্ভুত / অসুবিধা",
    "hindi": "अजीब / तकलीफ"
  },
  "too_much_excessive": {
    "english": "Too much",
    "bishnupriya": "বেদুম",
    "bangla": "অত্যধিক",
    "hindi": "बहुत ज़्यादा"
  },
  "out_of_order": {
    "english": "Out of order",
    "bishnupriya": "বেদুরুজ",
    "bangla": "খারাপ",
    "hindi": "खराब"
  },
  "direction_suffix": {
    "english": "Direction suffix",
    "bishnupriya": "বেদে",
    "bangla": "দিক প্রত্যয়",
    "hindi": "दिशा प्रत्यय"
  },
  "unlawful": {
    "english": "Unlawful",
    "bishnupriya": "বেধর্মি",
    "bangla": "অধার্মিক",
    "hindi": "गैरकानूनी"
  },
  "anonymous": {
    "english": "Anonymous",
    "bishnupriya": "বেনামি",
    "bangla": "বেনামি",
    "hindi": "बेनामी"
  },
  "stout_stick_for_door": {
    "english": "Stout stick for door",
    "bishnupriya": "বেন্দা",
    "bangla": "দরজার মোটা লাঠি",
    "hindi": "दरवाज़े की मोटी सिटकनी"
  },
  "prohibition": {
    "english": "Prohibition",
    "bishnupriya": "বেন্না",
    "bangla": "নিষেধ",
    "hindi": "मना"
  },
  "fearless": {
    "english": "Fearless",
    "bishnupriya": "বে-পরুয়া",
    "bangla": "নির্ভয়",
    "hindi": "बेपरवाह"
  },
  "business": {
    "english": "Business",
    "bishnupriya": "বেপার",
    "bangla": "ব্যবসা",
    "hindi": "व्यापार"
  },
  "businessman": {
    "english": "Businessman",
    "bishnupriya": "বেপারিয়া",
    "bangla": "ব্যবসায়ী",
    "hindi": "व्यापारी"
  },
  "unprofitable": {
    "english": "Unprofitable",
    "bishnupriya": "বেফাইদা",
    "bangla": "লাভহীন",
    "hindi": "बेफायदा"
  },
  "much_massive": {
    "english": "Much / massive",
    "bishnupriya": "বেবাক",
    "bangla": "প্রচুর",
    "hindi": "बहुत सारा"
  },
  "ill_framed": {
    "english": "Ill-framed",
    "bishnupriya": "বেবাত",
    "bangla": "কদাকার",
    "hindi": "बदसूरत"
  },
  "business_alternative": {
    "english": "Business",
    "bishnupriya": "বেবসা",
    "bangla": "ব্যবসা",
    "hindi": "व्यापार"
  },
  "behaviour": {
    "english": "Behaviour",
    "bishnupriya": "বেবহার",
    "bangla": "আচরণ",
    "hindi": "व्यवहार"
  },
  "sufficient": {
    "english": "Sufficient",
    "bishnupriya": "বেমাল-বেথা",
    "bangla": "যথেষ্ট",
    "hindi": "काफी"
  },
  "ill_disposed": {
    "english": "Ill-disposed",
    "bishnupriya": "বেমাক",
    "bangla": "খারাপ মনের",
    "hindi": "बदमिजाज़"
  },
  "insult": {
    "english": "Insult",
    "bishnupriya": "বেমান",
    "bangla": "অপমান",
    "hindi": "बेहुरमती"
  },
  "speechless_insulted": {
    "english": "Speechless / insulted",
    "bishnupriya": "বেমুখ",
    "bangla": "নিরুত্তর / অপমানিত",
    "hindi": "बेबस / अपमानित"
  },
  "hornet": {
    "english": "Hornet",
    "bishnupriya": "বেম্বুল",
    "bangla": "ভিমরুল",
    "hindi": "भंवरा"
  },
  "related_as_brother": {
    "english": "Related as brother",
    "bishnupriya": "বেয়াক",
    "bangla": "ভাইয়ের মতো",
    "hindi": "भाई जैसा"
  },
  "paternal_family": {
    "english": "Paternal family / brothers-sisters",
    "bishnupriya": "বেয়াপা",
    "bangla": "বাপের বাড়ি / বোনেরা",
    "hindi": "बाप का घर / बहनें"
  },
  "to_be_able": {
    "english": "To be able",
    "bishnupriya": "বের-",
    "bangla": "পারা",
    "hindi": "कर पाना"
  },
  "obstacle": {
    "english": "Obstacle",
    "bishnupriya": "বেরা",
    "bangla": "বাধা",
    "hindi": "रुकावट"
  },
  "breast_tie": {
    "english": "Breast-tie",
    "bishnupriya": "বেরুনি",
    "bangla": "ব্রা",
    "hindi": "ब्रा"
  },
  "inattentive_2": {
    "english": "Inattentive",
    "bishnupriya": "বেরুয়া",
    "bangla": "অমনোযোগী",
    "hindi": "लापरवाह"
  },
  "slanting": {
    "english": "Slanting",
    "bishnupriya": "বেরেঙ্গা",
    "bangla": "তির্যক",
    "hindi": "तिरछा"
  },
  "male_calf": {
    "english": "Male calf",
    "bishnupriya": "বেরেজ",
    "bangla": "পুরুষ বাছুর",
    "hindi": "नर बछड़ा"
  },
  "bench": {
    "english": "Bench",
    "bishnupriya": "বেরেঞ্চি",
    "bangla": "বেঞ্চ",
    "hindi": "बेंच"
  },
  "ladys_finger": {
    "english": "Lady’s finger",
    "bishnupriya": "বেরেন্দি",
    "bangla": "ঢেঁড়স",
    "hindi": "भिंडी"
  },
  "rottenness_excessive_talking": {
    "english": "Rottenness / excessive talking",
    "bishnupriya": "বেরবের",
    "bangla": "পচা / বকবক",
    "hindi": "सड़न / बकबक"
  },
  "fence": {
    "english": "Fence",
    "bishnupriya": "বের",
    "bangla": "বেড়া",
    "hindi": "बाड़"
  },
  "to_surround": {
    "english": "To surround",
    "bishnupriya": "বের-",
    "bangla": "ঘিরে ফেলা",
    "hindi": "घेरना"
  },
  "wrapping_entanglement": {
    "english": "Wrapping / entanglement",
    "bishnupriya": "বেরা",
    "bangla": "মোড়ক / জড়ক",
    "hindi": "लपेट / उलझाव"
  },
  "difficulty": {
    "english": "Difficulty",
    "bishnupriya": "বেরা",
    "bangla": "অসুবিধা",
    "hindi": "तकलीफ"
  },
  "to_roll_wrap": {
    "english": "To roll / wrap",
    "bishnupriya": "বেরা-",
    "bangla": "গুটানো",
    "hindi": "लपेटना"
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
  "fighting_with_hands": {
    "english": "Fighting with hands",
    "bishnupriya": "আতা-আতি",
    "bangla": "হাতাহাতি",
    "hindi": "हाथापाई"
  },
  "the_act_of_handling": {
    "english": "The act of handling",
    "bishnupriya": "আতাই",
    "bangla": "হাতে নেওয়ার ক্রিয়া",
    "hindi": "छूने/हाथ में लेने की क्रिया"
  },
  "that_much_quantity": {
    "english": "That much (quantity)",
    "bishnupriya": "উ-হানি",
    "bangla": "এতটা",
    "hindi": "इतना"
  },
  "winnowing_paddy_gerund": {
    "english": "Winnowing paddy (causing husk to fly) – gerund",
    "bishnupriya": "উহানি",
    "bangla": "ধান ঝাড়ার ক্রিয়া",
    "hindi": "फटकने की क्रिया"
  },
  "belch": {
    "english": "Belch",
    "bishnupriya": "উহার",
    "bangla": "ঢেঁকুর",
    "hindi": "डकार"
  },
  "cover_for_pillow_blanket": {
    "english": "Cover for pillow/blanket (alt.)",
    "bishnupriya": "উহার",
    "bangla": "বালিশের কভার",
    "hindi": "तकिये का कवर"
  },
  "to_belch_express": {
    "english": "To belch / to express",
    "bishnupriya": "উহারা",
    "bangla": "ঢেঁকুর তোলা / প্রকাশ করা",
    "hindi": "डकारना / व्यक्त करना"
  },
  "expressing_belching_gerund": {
    "english": "Expressing / belching (gerund)",
    "bishnupriya": "উহারানি",
    "bangla": "প্রকাশের ক্রিয়া",
    "hindi": "व्यक्त करने की क्रिया"
  },
  "proximate_demonstrative": {
    "english": "This (proximate demonstrative)",
    "bishnupriya": "এ",
    "bangla": "এই",
    "hindi": "यह"
  },
  "nominative_case_ending": {
    "english": "Nominative case ending",
    "bishnupriya": "-এ",
    "bangla": "কর্তৃ কারকে প্রত্যয়",
    "hindi": "कर्ता कारक प्रत्यय"
  },
  "locative_case_ending": {
    "english": "Locative case ending",
    "bishnupriya": "-এ",
    "bangla": "অবস্থান কারকে প্রত্যয়",
    "hindi": "में प्रत्यय"
  },
  "adverb_forming_suffix": {
    "english": "Adverb-forming suffix",
    "bishnupriya": "-এ",
    "bangla": "ক্রিয়া-বিশেষণ প্রত্যয়",
    "hindi": "से प्रत्यय"
  },
  "plural_suffix": {
    "english": "Plural suffix",
    "bishnupriya": "-এই",
    "bangla": "বহুবচন প্রত্যয়",
    "hindi": "बहुवचन प्रत्यय"
  },
  "verbal_class_noun_suffix": {
    "english": "Verbal/class noun suffix",
    "bishnupriya": "-এই",
    "bangla": "ক্রিয়া-নাম প্রত্যয়",
    "hindi": "क्रिया-संज्ञा प्रत्यय"
  },
  "fruit": {
    "english": "Fruit",
    "bishnupriya": "এই",
    "bangla": "ফল",
    "hindi": "फल"
  },
  "address_to_brahmin": {
    "english": "Address to Brahmin or royal descendant (\"your order?\")",
    "bishnupriya": "এইগা",
    "bangla": "ব্রাহ্মণ/রাজবংশের ডাক",
    "hindi": "ब्राह्मण/राजवंशीय संबोधन"
  },
  "louse_flea": {
    "english": "Louse / flea",
    "bishnupriya": "উহুনি",
    "bangla": "উকুন",
    "hindi": "जूँ"
  },
  "to_uproot_pull_out": {
    "english": "To uproot / pull out strongly",
    "bishnupriya": "উহুল",
    "bangla": "জোরে উপড়ানো",
    "hindi": "ज़ोर से उखाड़ना"
  },
  "uprooting_strongly_gerund": {
    "english": "Uprooting strongly (gerund)",
    "bishnupriya": "উহুলানি",
    "bangla": "জোরে উপড়ানোর ক্রিয়া",
    "hindi": "ज़ोर से उखाड़ने की क्रिया"
  },
  "inedible_food": {
    "english": "Inedible / unwholesome food",
    "bishnupriya": "উহেই-নহেই",
    "bangla": "অখাদ্য / অস্বাস্থ্যকর খাবার",
    "hindi": "अखाद्य / अस्वास्थ्यकर भोजन"
  },
  "nineteen": {
    "english": "Nineteen",
    "bishnupriya": "ওনিশ",
    "bangla": "ঊনিশ",
    "hindi": "उन्नीस"
  },
  "offering_of_fruit": {
    "english": "Offering of fruit (on plantain leaf)",
    "bishnupriya": "এইরা",
    "bangla": "ফলের নৈবেদ্য",
    "hindi": "फल का नैवेद्य"
  },
  "dish_of_fruit": {
    "english": "Dish/plate of fruit",
    "bishnupriya": "এইরুক",
    "bangla": "ফলের থালা",
    "hindi": "फलों की प्लेट"
  },
  "this_year": {
    "english": "This year",
    "bishnupriya": "এ-উল্টা",
    "bangla": "এই বছর",
    "hindi": "इस साल"
  },
  "one": {
    "english": "One",
    "bishnupriya": "এক",
    "bangla": "এক",
    "hindi": "एक"
  },
  "unity": {
    "english": "Unity",
    "bishnupriya": "একতা",
    "bangla": "ঐক্য",
    "hindi": "एकता"
  },
  "to_show_arrogance": {
    "english": "To show arrogance / vanity",
    "bishnupriya": "একা",
    "bangla": "অহংকার দেখানো",
    "hindi": "घमंड दिखाना"
  },
  "alone_single": {
    "english": "Alone / single",
    "bishnupriya": "একা",
    "bangla": "একা",
    "hindi": "अकेला"
  },
  "bicycle": {
    "english": "Bicycle (lit. \"alone-vehicle\")",
    "bishnupriya": "একা-গাড়ি",
    "bangla": "সাইকেল",
    "hindi": "साइकिल"
  },
  "ekadashi": {
    "english": "Ekadashi (11th lunar day & fasting)",
    "bishnupriya": "একাদেশী",
    "bangla": "একাদশী",
    "hindi": "एकादशी"
  },
  "independence": {
    "english": "Independence (in thought/action)",
    "bishnupriya": "একনায়",
    "bangla": "স্বাধীনতা (চিন্তা/কাজে)",
    "hindi": "स्वतंत्रता (विचार/कार्य में)"
  },
  "showing_arrogance_gerund": {
    "english": "Showing arrogance (gerund)",
    "bishnupriya": "একানি",
    "bangla": "অহংকার দেখানোর ক্রিয়া",
    "hindi": "घमंड दिखाने की क्रिया"
  },
  "attentive_solitary": {
    "english": "Attentive / solitary",
    "bishnupriya": "একান্ত",
    "bangla": "মনোযোগী / নির্জন",
    "hindi": "एकांत / एकाग्र"
  },
  "suffix_profession": {
    "english": "Suffix – profession / nature (boatman, fisherman etc.)",
    "bishnupriya": "-উলিয়া",
    "bangla": "পেশা/প্রকৃতি প্রত্যয় (নৌলিয়া = নৌকোবাইচ)",
    "hindi": "पेशा/स्वभाव वाला प्रत्यय (नाविक आदि)"
  },
  "white_ant": {
    "english": "White ant / termite",
    "bishnupriya": "উলু",
    "bangla": "উইপোকা",
    "hindi": "दीमक"
  },
  "ululation": {
    "english": "Ululation by women on festive occasions",
    "bishnupriya": "উলু",
    "bangla": "কলকলানি / উলুধ্বনি",
    "hindi": "महिलाओं का हर्ष-ध्वनि (उलूलूलू)"
  },
  "land_monitor_lizard": {
    "english": "Land monitor lizard",
    "bishnupriya": "উলুবুড়া",
    "bangla": "গুইসাপ",
    "hindi": "गोह"
  },
  "pendulum": {
    "english": "Pendulum",
    "bishnupriya": "উলুম",
    "bangla": "দোলক",
    "hindi": "लोलक"
  },
  "whirl_whirlwind": {
    "english": "Whirl / whirlwind",
    "bishnupriya": "উলুরি",
    "bangla": "ঘূর্ণি / ঘূর্ণিঝড়",
    "hindi": "बवंडर"
  },
  "to_be_reversed": {
    "english": "To be reversed / turned upside down",
    "bishnupriya": "উলট",
    "bangla": "উল্টে যাওয়া",
    "hindi": "उलट जाना"
  },
  "reversed_opposite": {
    "english": "Reversed, opposite, upside down",
    "bishnupriya": "উল্টা",
    "bangla": "উল্টো",
    "hindi": "उल्टा"
  },
  "to_reverse_turn_over": {
    "english": "To reverse, to turn over",
    "bishnupriya": "উল্টা",
    "bangla": "উল্টানো",
    "hindi": "उलटना"
  },
  "reversing_gerund": {
    "english": "Reversing / turning over (gerund)",
    "bishnupriya": "উল্টানি",
    "bangla": "উল্টানোর ক্রিয়া",
    "hindi": "उलटने की क्रिया"
  },
  "jumping_due_to_uneasiness": {
    "english": "Jumping due to uneasiness (alt.)",
    "bishnupriya": "উলফালি",
    "bangla": "অস্থিরতায় লাফানো",
    "hindi": "बेचैनी से उछलना"
  },
  "species_of_monkey": {
    "english": "A species of monkey (onom.)",
    "bishnupriya": "উল্লুক-ভাল্লুক",
    "bangla": "এক ধরনের বাঁদর",
    "hindi": "एक प्रकार का बंदर"
  },
  "pine_tree": {
    "english": "Pine tree",
    "bishnupriya": "উ'শাল",
    "bangla": "পাইন গাছ",
    "hindi": "चीड़ का पेड़"
  },
  "realisation_receipt": {
    "english": "Realisation / receipt (of money)",
    "bishnupriya": "উশাল",
    "bangla": "টাকা আদায়",
    "hindi": "वसूली"
  },
  "branch": {
    "english": "Branch (of tree)",
    "bishnupriya": "উশা",
    "bangla": "ডাল",
    "hindi": "डाल"
  },
  "cover_for_pillow_blanket_main": {
    "english": "Cover for pillow/blanket",
    "bishnupriya": "উশার",
    "bangla": "বালিশ/কম্বলের কভার",
    "hindi": "तकिये/कंबल का कवर"
  },
  "to_instigate_provoke": {
    "english": "To instigate, provoke",
    "bishnupriya": "উশকা",
    "bangla": "উস্কানো",
    "hindi": "उकसाना"
  },
  "instigating_gerund": {
    "english": "Instigating (gerund)",
    "bishnupriya": "উশকানি",
    "bangla": "উস্কানির ক্রিয়া",
    "hindi": "उकसाने की क्रिया"
  },
  "expert_master": {
    "english": "Expert, master",
    "bishnupriya": "উস্তাদ",
    "bangla": "ওস্তাদ",
    "hindi": "उस्ताद"
  },
  "as_deserved": {
    "english": "As deserved / befittingly",
    "bishnupriya": "উস-ঠাক-করে",
    "bangla": "যোগ্য মতো",
    "hindi": "उचित रूप से"
  },
  "main_pillar": {
    "english": "Main pillar in village chief's portico",
    "bishnupriya": "উহাকতাল",
    "bangla": "মোড়লের বৈঠকখানার খুঁটি",
    "hindi": "मुखिया के बरामदे का मुख्य खंभा"
  },
  "to_winnow_paddy": {
    "english": "To winnow paddy (blow away husk by dropping from height)",
    "bishnupriya": "উহা",
    "bangla": "ধান ঝাড়া",
    "hindi": "फटकना (धान)"
  },
  "that_one_far": {
    "english": "That one (far)",
    "bishnupriya": "উহান",
    "bangla": "ওইটা (দূরের)",
    "hindi": "वह (दूर वाला)"
  },
  "parboiled_rice": {
    "english": "Parboiled rice",
    "bishnupriya": "উহানা",
    "bangla": "সিদ্ধ চাল",
    "hindi": "उकड़ा चावल"
  },
  "young_bamboo_shoot": {
    "english": "Young bamboo shoot",
    "bishnupriya": "উ'শই",
    "bangla": "বাঁশের কচি ডগা",
    "hindi": "बाँस का कोमल अंकुर"
  },
  "kind_of_timber_tree": {
    "english": "A kind of timber tree",
    "bishnupriya": "উ'শেন",
    "bangla": "এক ধরনের কাঠ",
    "hindi": "एक प्रकार की लकड़ी"
  },
  "single_string_necklace": {
    "english": "Single-string necklace",
    "bishnupriya": "একাবলি",
    "bangla": "এক লাইনের মালা",
    "hindi": "एक लड़ी की माला"
  },
  "alone": {
    "english": "Alone",
    "bishnupriya": "একলা",
    "bangla": "একা",
    "hindi": "अकेला"
  },
  "attentive_single_minded": {
    "english": "Attentive, single-minded",
    "bishnupriya": "একিন",
    "bangla": "একাগ্র",
    "hindi": "एकाग्र"
  },
  "this_much_so_much": {
    "english": "This much, so much",
    "bishnupriya": "এ-কুচ",
    "bangla": "এতটা",
    "hindi": "इतना"
  },
  "agent_suffix": {
    "english": "Agent suffix (doer)",
    "bishnupriya": "-একুরা",
    "bangla": "কর্তৃ-প্রত্যয়",
    "hindi": "करने वाला प्रत्यय"
  },
  "this_side": {
    "english": "This side (of river etc.)",
    "bishnupriya": "এ-কুল",
    "bangla": "এপার",
    "hindi": "इस पार"
  },
  "thoroughly_to_last_farthing": {
    "english": "Thoroughly, to the last farthing",
    "bishnupriya": "একেপণে",
    "bangla": "সম্পূর্ণভাবে, শেষ পয়সা পর্যন্ত",
    "hindi": "पूरी तरह, आखिरी पैसा तक"
  },
  "totally_completely": {
    "english": "Totally, completely",
    "bishnupriya": "একেবারে",
    "bangla": "একেবারে",
    "hindi": "एकदम"
  },
  "obstinate_stubborn": {
    "english": "Obstinate, stubborn",
    "bishnupriya": "এক্খেম",
    "bangla": "জেদি",
    "hindi": "ज़िद्दी"
  },
  "obstinate": {
    "english": "Obstinate",
    "bishnupriya": "এক-ছেদিয়া",
    "bangla": "একগুঁয়ে",
    "hindi": "हठी"
  },
  "obstinate_obstinacy": {
    "english": "Obstinate / obstinacy",
    "bishnupriya": "এক-ঠেলা",
    "bangla": "জেদ / একগুঁয়েমি",
    "hindi": "ज़िद / हठ"
  },
  "rough_woollen_cloth": {
    "english": "Rough woollen cloth regarded as pure",
    "bishnupriya": "একতারি",
    "bangla": "একতারা কাপড়",
    "hindi": "एकतारा कपड़ा"
  },
  "totally": {
    "english": "Totally",
    "bishnupriya": "একদম",
    "bangla": "একদম",
    "hindi": "बिलकुल"
  },
  "this_time_turn": {
    "english": "This time / this turn",
    "bishnupriya": "এখুরুম",
    "bangla": "এবার",
    "hindi": "इस बार"
  },
  "this_one_small": {
    "english": "This one",
    "bishnupriya": "এগা",
    "bangla": "এটা",
    "hindi": "यह एक"
  },
  "this_one_small_negligible": {
    "english": "This one (small/negligible thing or person)",
    "bishnupriya": "এগুলি",
    "bangla": "এইটুকু / এই লোকটা",
    "hindi": "यह छोटा-सा / यह व्यक्ति"
  },
  "this_year_alt": {
    "english": "This year (alt.)",
    "bishnupriya": "এগুল্টা",
    "bangla": "এই বছর",
    "hindi": "इस साल"
  },
  "this_much_small_quantity": {
    "english": "This much (small quantity)",
    "bishnupriya": "এচুটি",
    "bangla": "এটুকু",
    "hindi": "इतना-सा"
  },
  "sudden_tug_push": {
    "english": "Sudden tug / push / slight movement",
    "bishnupriya": "এক্কা",
    "bangla": "ঠেলা / একটু নড়া",
    "hindi": "झटका / हल्का सा हिलना"
  },
  "to_give_sudden_push": {
    "english": "To give a sudden push / move a little",
    "bishnupriya": "এক্কা",
    "bangla": "ঠেলা মারা / একটু নড়ানো",
    "hindi": "झटका देना / हल्का सा हिलाना"
  },
  "pushing_moving_slightly": {
    "english": "Pushing / moving slightly (gerund)",
    "bishnupriya": "এক্কানি",
    "bangla": "ঠেলার ক্রিয়া",
    "hindi": "झटका देने की क्रिया"
  },
  "past_perfect_tense_base": {
    "english": "Past perfect tense base",
    "bishnupriya": "-এছিল",
    "bangla": "অতীত পূর্ণ কালের ভিত্তি",
    "hindi": "भूतकाल पूरा आधार"
  },
  "jointly_possessed": {
    "english": "Jointly possessed",
    "bishnupriya": "এজমালি",
    "bangla": "যৌথ মালিকানা",
    "hindi": "संयुक्त स्वामित्व"
  },
  "in_this_way": {
    "english": "In this way",
    "bishnupriya": "এথুনা",
    "bangla": "এভাবে",
    "hindi": "इस तरह"
  },
  "so_much": {
    "english": "So much",
    "bishnupriya": "এতা",
    "bangla": "এত",
    "hindi": "इतना"
  },
  "these_plural": {
    "english": "These (plural)",
    "bishnupriya": "এতা",
    "bangla": "এগুলো",
    "hindi": "ये"
  },
  "of_this_amount": {
    "english": "Of this amount / so much",
    "bishnupriya": "এতাপারা",
    "bangla": "এত পরিমাণ",
    "hindi": "इतनी मात्रा में"
  },
  "this_much_small": {
    "english": "This much",
    "bishnupriya": "এতুন",
    "bangla": "এতটুকু",
    "hindi": "इतना-सा"
  },
  "setting_in_order": {
    "english": "Setting in proper order / arranging",
    "bishnupriya": "এতুতন্তু",
    "bangla": "সঠিকভাবে সাজানো",
    "hindi": "ठीक तरह से सजाना"
  },
  "ablative_case_ending": {
    "english": "Ablative case ending",
    "bishnupriya": "-এত্তা",
    "bangla": "থেকে কারক প্রত্যয়",
    "hindi": "से प्रत्यय"
  },
  "so_much_quantity": {
    "english": "So much (quantity)",
    "bishnupriya": "এত্তামান",
    "bangla": "এত পরিমাণ",
    "hindi": "इतनी मात्रा"
  },
  "it_is_this": {
    "english": "It is this",
    "bishnupriya": "এনা",
    "bangla": "এটাই",
    "hindi": "यही है"
  },
  "these_persons": {
    "english": "These persons",
    "bishnupriya": "এনু",
    "bangla": "এরা",
    "hindi": "ये लोग"
  },
  "here_in_this_place": {
    "english": "Here, in this place",
    "bishnupriya": "এপেই",
    "bangla": "এখানে",
    "hindi": "यहाँ"
  },
  "and": {
    "english": "And",
    "bishnupriya": "এবঞ",
    "bangla": "আর",
    "hindi": "और"
  },
  "now": {
    "english": "Now",
    "bishnupriya": "এবাকা",
    "bangla": "এখন",
    "hindi": "अभी"
  },
  "this_side_alt": {
    "english": "This side",
    "bishnupriya": "এবারা",
    "bangla": "এপার",
    "hindi": "इस तरफ"
  },
  "this_time_this_turn": {
    "english": "This time, this turn",
    "bishnupriya": "এবিল",
    "bangla": "এবার",
    "hindi": "इस बार"
  },
  "even_now_till_now": {
    "english": "Even now, till now",
    "bishnupriya": "এবুজা",
    "bangla": "এখনো",
    "hindi": "अब तक"
  },
  "even_now": {
    "english": "Even now",
    "bishnupriya": "এবো",
    "bangla": "এখনো",
    "hindi": "अब भी"
  },
  "such_of_this_kind": {
    "english": "Such, of this kind",
    "bishnupriya": "এমান",
    "bangla": "এমন",
    "hindi": "ऐसा"
  },
  "this_time_alt": {
    "english": "This time (alt.)",
    "bishnupriya": "এমাও",
    "bangla": "এবার",
    "hindi": "इस बार"
  },
  "to_this_extent": {
    "english": "To this extent, so much",
    "bishnupriya": "এমাতিক",
    "bangla": "এতটা",
    "hindi": "इतना तक"
  },
  "this_year_alt2": {
    "english": "This year (alt.)",
    "bishnupriya": "এমারি",
    "bangla": "এই বছর",
    "hindi": "इस साल"
  },
  "this_end": {
    "english": "This end",
    "bishnupriya": "এমুর",
    "bangla": "এই প্রান্ত",
    "hindi": "इस सिरा"
  },
  "this_time_this_turn_alt": {
    "english": "This time, this turn (alt.)",
    "bishnupriya": "এমটা",
    "bangla": "এবার",
    "hindi": "इस बार"
  },
  "to_stop_cease": {
    "english": "To stop, to cease",
    "bishnupriya": "এর",
    "bangla": "থামা",
    "hindi": "रुकना"
  },
  "discarded_given_up": {
    "english": "Discarded, given up",
    "bishnupriya": "এরা",
    "bangla": "পরিত্যক্ত",
    "hindi": "त्यागा हुआ"
  },
  "giving_up_gerund": {
    "english": "Giving up (gerund)",
    "bishnupriya": "এরানি",
    "bangla": "ছেড়ে দেওয়ার ক্রিয়া",
    "hindi": "छोड़ने की क्रिया"
  },
  "this_vocative": {
    "english": "This (vocative)",
    "bishnupriya": "এরে",
    "bangla": "এই যে",
    "hindi": "अरे"
  },
  "to_be_peeled": {
    "english": "To be peeled",
    "bishnupriya": "এর",
    "bangla": "খোসা ছাড়ানো হওয়া",
    "hindi": "छिलना"
  },
  "to_peel_shave": {
    "english": "To peel, to shave",
    "bishnupriya": "এরা",
    "bangla": "খোসা ছাড়ানো",
    "hindi": "छीलना"
  },
  "peeling_shaving_gerund": {
    "english": "Peeling, shaving (gerund)",
    "bishnupriya": "এরানি",
    "bangla": "খোসা ছাড়ানোর ক্রিয়া",
    "hindi": "छीलने की क्रिया"
  },
  "surpassed_avoiding": {
    "english": "Surpassed / avoiding / the act of surpassing",
    "bishnupriya": "এল",
    "bangla": "অতিক্রম করা",
    "hindi": "पार करना"
  },
  "song": {
    "english": "Song",
    "bishnupriya": "এলা",
    "bangla": "গান",
    "hindi": "गीत"
  },
  "to_shift_burden_accuse": {
    "english": "To shift burden / to accuse",
    "bishnupriya": "এলা",
    "bangla": "বোঝা অন্যের ঘাড়ে চাপানো / অভিযোগ করা",
    "hindi": "बोझ डालना / इल्ज़ाम लगाना"
  },
  "area_jurisdiction": {
    "english": "Area, jurisdiction",
    "bishnupriya": "এলাকা",
    "bangla": "এলাকা",
    "hindi": "इलाका"
  },
  "cardamom": {
    "english": "Cardamom",
    "bishnupriya": "এলাচ",
    "bangla": "এলাচ",
    "hindi": "इलायची"
  },
  "accusing_gerund": {
    "english": "Accusing (gerund)",
    "bishnupriya": "এলানি",
    "bangla": "অভিযোগ করার ক্রিয়া",
    "hindi": "इल्ज़ाम लगाने की क्रिया"
  },
  "act_of_stirring": {
    "english": "The act of stirring (water, rice etc.)",
    "bishnupriya": "এলকা",
    "bangla": "নাড়ানাড়ি",
    "hindi": "हिलाना-डुलाना"
  },
  "to_stir_move": {
    "english": "To stir, to move (water, rice etc.)",
    "bishnupriya": "এলকা",
    "bangla": "নাড়া",
    "hindi": "हिलाना"
  },
  "stirring_gerund": {
    "english": "Stirring (gerund)",
    "bishnupriya": "এলকানি",
    "bangla": "নাড়ার ক্রিয়া",
    "hindi": "हिलाने की क्रिया"
  },
  "stirring_instrument": {
    "english": "Stirring instrument (for fried rice etc.)",
    "bishnupriya": "এলকুনি",
    "bangla": "ভাজা চাল নাড়ার হাতা",
    "hindi": "चावल चलाने का चम्मच"
  },
  "exceeding_surpassing": {
    "english": "Exceeding, surpassing",
    "bishnupriya": "এলথাক",
    "bangla": "অতিক্রম করা",
    "hindi": "पार करना"
  },
  "in_this_way_thus": {
    "english": "In this way, thus",
    "bishnupriya": "এষাদে",
    "bangla": "এভাবে",
    "hindi": "इस तरह"
  },
  "in_this_way_thus_alt": {
    "english": "In this way, thus (alt.)",
    "bishnupriya": "এষান্দে",
    "bangla": "এভাবে",
    "hindi": "इस प्रकार"
  },
  "thus_like_this": {
    "english": "Thus, like this",
    "bishnupriya": "এষুনা",
    "bangla": "এমনি",
    "hindi": "यूँ ही"
  },
  "esraj": {
    "english": "Esraj (stringed instrument)",
    "bishnupriya": "এসরাজ",
    "bangla": "এসরাজ",
    "hindi": "इसराज"
  },
  "here": {
    "english": "Here",
    "bishnupriya": "এহাত",
    "bangla": "এখানে",
    "hindi": "यहाँ"
  },
  "this_one": {
    "english": "This one",
    "bishnupriya": "এহান",
    "bangla": "এটা",
    "hindi": "यह एक"
  },
  "here_in_this": {
    "english": "Here, in this",
    "bishnupriya": "এহানত",
    "bangla": "এখানে",
    "hindi": "यहाँ"
  },
  "this_much": {
    "english": "This much",
    "bishnupriya": "এহানি",
    "bangla": "এতটা",
    "hindi": "इतना"
  },
  "vanity_pride": {
    "english": "Vanity, pride",
    "bishnupriya": "ঐশুর্জ্য",
    "bangla": "ঐশ্বর্য / অহংকার",
    "hindi": "ऐश्वर्य / घमंड"
  },
  "exactly": {
    "english": "Exactly",
    "bishnupriya": "আতাকনা-করে",
    "bangla": "ঠিকঠিক",
    "hindi": "बिलकुल ठीक"
  },
  "exact_precise": {
    "english": "Exact, precise",
    "bishnupriya": "আতাকনাপা",
    "bangla": "ঠিক",
    "hindi": "बिलकुल सटीक"
  },
  "rare": {
    "english": "Rare",
    "bishnupriya": "আতানপা",
    "bangla": "বিরল",
    "hindi": "दुर्लभ"
  },
  "handling_touching_gerund": {
    "english": "Handling, touching (gerund)",
    "bishnupriya": "আ'তানি",
    "bangla": "ছোঁয়ার ক্রিয়া",
    "hindi": "छूने की क्रिया"
  },
  "a_deity_local_god": {
    "english": "A deity (local god)",
    "bishnupriya": "আতিয়া-গুরু",
    "bangla": "দেবতা",
    "hindi": "स्थानीय देवता"
  },
  "tools_implements": {
    "english": "Tools, implements",
    "bishnupriya": "আতিয়ার",
    "bangla": "সরঞ্জাম",
    "hindi": "औज़ार"
  },
  "lame_deformed": {
    "english": "Lame, deformed",
    "bishnupriya": "আতুর",
    "bangla": "খোঁড়া",
    "hindi": "लंगड़ा"
  },
  "lying_in_room_delivery_room": {
    "english": "Lying-in room (delivery room)",
    "bishnupriya": "আতুর",
    "bangla": "প্রসবকক্ষ",
    "hindi": "प्रसूति कक्ष"
  },
  "soul": {
    "english": "Soul",
    "bishnupriya": "আত্তমা",
    "bangla": "আত্মা",
    "hindi": "आत्मा"
  },
  "suicide": {
    "english": "Suicide",
    "bishnupriya": "আত্তমা-গাথি",
    "bangla": "আত্মহত্যা",
    "hindi": "आत्महत्या"
  },
  "perfume_attar": {
    "english": "Perfume, attar",
    "bishnupriya": "আত্তর",
    "bangla": "আতর",
    "hindi": "इत्र"
  },
  "elephant": {
    "english": "Elephant",
    "bishnupriya": "আত্তি",
    "bangla": "হাতি",
    "hindi": "हाथी"
  },
  "hammer": {
    "english": "Hammer",
    "bishnupriya": "আত্তুরা",
    "bangla": "হাতুড়ি",
    "hindi": "हथौड़ा"
  },
  "dearest_most_beloved": {
    "english": "Dearest, most beloved",
    "bishnupriya": "আত্মদয়",
    "bangla": "সবচেয়ে প্রিয়",
    "hindi": "सबसे प्यारा"
  },
  "separate": {
    "english": "Separate",
    "bishnupriya": "আতরা",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "useless_uselessly": {
    "english": "Useless / uselessly",
    "bishnupriya": "আথরে-পাথরে",
    "bangla": "বেকার / বেকারে",
    "hindi": "बेकार / व्यर्थ"
  },
  "sexual_organ": {
    "english": "Sexual organ",
    "bishnupriya": "আথিপা-ফাম",
    "bangla": "যৌনাঙ্গ",
    "hindi": "जननांग"
  },
  "rheumatic_pain": {
    "english": "Rheumatic pain",
    "bishnupriya": "আথিলপা",
    "bangla": "বাতের ব্যথা",
    "hindi": "गठिया का दर्द"
  },
  "control_restraint": {
    "english": "Control, restraint",
    "bishnupriya": "আদং",
    "bangla": "নিয়ন্ত্রণ",
    "hindi": "नियंत्रण"
  },
  "genuine_real": {
    "english": "Genuine, real",
    "bishnupriya": "আদত",
    "bangla": "আসল",
    "hindi": "असली"
  },
  "etiquette_courtesy": {
    "english": "Etiquette, courtesy",
    "bishnupriya": "আদাপ",
    "bangla": "শিষ্টাচার",
    "hindi": "अदब"
  },
  "at_all": {
    "english": "At all",
    "bishnupriya": "আদাপে",
    "bangla": "একদমই",
    "hindi": "बिलकुल भी"
  },
  "half_a_day": {
    "english": "Half a day",
    "bishnupriya": "আদাল",
    "bangla": "অর্ধেক দিন",
    "hindi": "आधा दिन"
  },
  "ginger": {
    "english": "Ginger",
    "bishnupriya": "আদা",
    "bangla": "আদা",
    "hindi": "अदरक"
  },
  "coarse_sitting_mat": {
    "english": "Coarse sitting mat",
    "bishnupriya": "আদাচটি",
    "bangla": "মাদুর",
    "hindi": "चटाई"
  },
  "recovery_collection_money": {
    "english": "Recovery, collection (money)",
    "bishnupriya": "আদায়",
    "bangla": "আদায়",
    "hindi": "वसूली"
  },
  "court_of_justice": {
    "english": "Court of justice",
    "bishnupriya": "আদালত",
    "bangla": "আদালত",
    "hindi": "अदालत"
  },
  "high_river_bank": {
    "english": "High river bank",
    "bishnupriya": "আদালি",
    "bangla": "নদীর উঁচু পাড়",
    "hindi": "नदी का ऊँचा किनारा"
  },
  "remains_of_meal_leftover": {
    "english": "Remains of meal / leftover",
    "bishnupriya": "আদিক",
    "bangla": "উচ্ছিষ্ট",
    "hindi": "जूठन"
  },
  "to_massage": {
    "english": "To massage",
    "bishnupriya": "আ'দ্দ",
    "bangla": "মালিশ করা",
    "hindi": "मालिश करना"
  },
  "massaging_gerund": {
    "english": "Massaging (gerund)",
    "bishnupriya": "আ'দ্দানি",
    "bangla": "মালিশের ক্রিয়া",
    "hindi": "मालिश करने की क्रिया"
  },
  "half": {
    "english": "Half",
    "bishnupriya": "আধা",
    "bangla": "আধা",
    "hindi": "आधा"
  },
  "half_a_seer_weight": {
    "english": "Half a seer (weight)",
    "bishnupriya": "আধের",
    "bangla": "আধ সের",
    "hindi": "आधा सेर"
  },
  "half_green_unripe": {
    "english": "Half-green (unripe)",
    "bishnupriya": "আধকচি",
    "bangla": "আধা-কাঁচা",
    "hindi": "आधा कच्चा"
  },
  "to_bring": {
    "english": "To bring",
    "bishnupriya": "আন",
    "bangla": "আনা",
    "hindi": "लाना"
  },
  "other": {
    "english": "Other",
    "bishnupriya": "আন",
    "bangla": "অন্য",
    "hindi": "दूसरा"
  },
  "verbal_noun_suffix": {
    "english": "Verbal noun suffix",
    "bishnupriya": "-আন",
    "bangla": "ক্রিয়া থেকে নাম গঠনের প্রত্যয়",
    "hindi": "क्रिया से नाम बनाने वाला प्रत्यय"
  },
  "spectacles": {
    "english": "Spectacles",
    "bishnupriya": "আনাক",
    "bangla": "চশমা",
    "hindi": "चश्मा"
  },
  "nature_manner_suffix": {
    "english": "Nature / manner suffix",
    "bishnupriya": "-আনা",
    "bangla": "প্রকৃতি/ভাব প্রত্যয়",
    "hindi": "स्वभाव वाला प्रत्यय"
  },
  "coming": {
    "english": "Coming",
    "bishnupriya": "আনা",
    "bangla": "আসা",
    "hindi": "आना"
  },
  "anna_currency": {
    "english": "Anna (currency)",
    "bishnupriya": "আনা",
    "bangla": "আনা (মুদ্রা)",
    "hindi": "आना (मुद्रा)"
  },
  "mishap_suffering": {
    "english": "Mishap, suffering",
    "bishnupriya": "আনানসা",
    "bangla": "দুর্ঘটনা",
    "hindi": "दुर्घटना / कष्ट"
  },
  "that_far_yonder": {
    "english": "That (far, yonder)",
    "bishnupriya": "ও",
    "bangla": "ওই (দূরের)",
    "hindi": "वह (दूर वाला)"
  },
  "vocative_particle_o": {
    "english": "Vocative particle (O!)",
    "bishnupriya": "ও",
    "bangla": "ওগো / হে",
    "hindi": "अरे / ओ"
  },
  "interjection_ah_oh_alas": {
    "english": "Interjection – ah!, oh!, alas!",
    "bishnupriya": "ও",
    "bangla": "ওহ! / আহ!",
    "hindi": "ओह! / अरे!"
  },
  "also_and": {
    "english": "Also, and",
    "bishnupriya": "-ও",
    "bangla": "ও (এবং)",
    "hindi": "भी"
  },
  "that_one_far": {
    "english": "That one (far)",
    "bishnupriya": "ওগা",
    "bangla": "ওইটা",
    "hindi": "वह एक"
  },
  "teacher_guru_respectful_address": {
    "english": "Teacher, guru (respectful address)",
    "bishnupriya": "ওজা",
    "bangla": "ওঝা / গুরু",
    "hindi": "ओझा / गुरु"
  },
  "disturbance_chaos": {
    "english": "Disturbance, chaos",
    "bishnupriya": "ঔকাস-বৌকাস",
    "bangla": "গন্ডগোল",
    "hindi": "हंगामा"
  },
  "that_one_remote": {
    "english": "That one (remote)",
    "bishnupriya": "ঔগা",
    "bangla": "ওইটা (অনেক দূরের)",
    "hindi": "वह (बहुत दूर वाला)"
  },
  "those_far": {
    "english": "Those (far)",
    "bishnupriya": "ঔতা",
    "bangla": "ওগুলো (দূরের)",
    "hindi": "वे (दूर वाले)"
  },
  "it_is_there_far": {
    "english": "It is there (far)",
    "bishnupriya": "ঔনা",
    "bangla": "ওটা আছে (দূরে)",
    "hindi": "वहाँ है"
  },
  "proper_suitable": {
    "english": "Proper, suitable",
    "bishnupriya": "ঔনপা",
    "bangla": "যথাযথ",
    "hindi": "उचित"
  },
  "it_seems_apparently": {
    "english": "It seems / apparently",
    "bishnupriya": "ঔনি",
    "bangla": "মনে হয়",
    "hindi": "लगता है"
  },
  "there_far": {
    "english": "There (far)",
    "bishnupriya": "ঔপেই",
    "bangla": "ওখানে (দূরে)",
    "hindi": "वहाँ (दूर)"
  },
  "the_burmese_people": {
    "english": "The Burmese people",
    "bishnupriya": "ঔৱা",
    "bangla": "বর্মী",
    "hindi": "बर्मी"
  },
  "diminutive_suffix": {
    "english": "Diminutive suffix",
    "bishnupriya": "-ক",
    "bangla": "ছোটো করার প্রত্যয়",
    "hindi": "छोटा बनाने वाला प्रत्यय"
  },
  "pleonastic_suffix_for_onomatopoeic_words": {
    "english": "Pleonastic suffix for onomatopoeic words",
    "bishnupriya": "-ক",
    "bangla": "ধ্বন্যাত্মক শব্দে অতিরিক্ত প্রত্যয়",
    "hindi": "ध्वन्यात्मक शब्दों में अतिरिक्त प्रत्यय"
  },
  "papaya": {
    "english": "Papaya",
    "bishnupriya": "ঔৱাথাপি",
    "bangla": "পেঁপে",
    "hindi": "पपीता"
  },
  "a_kind_of_flower": {
    "english": "A kind of flower",
    "bishnupriya": "ঔৱারেই",
    "bangla": "এক ধরনের ফুল",
    "hindi": "एक तरह का फूल"
  },
  "there_farther": {
    "english": "There (farther)",
    "bishnupriya": "ঔরান",
    "bangla": "ওদিকে (অনেক দূরে)",
    "hindi": "वहाँ (बहुत दूर)"
  },
  "imperfect_faulty": {
    "english": "Imperfect, faulty",
    "bishnupriya": "ঔলি-জৌলি",
    "bangla": "আধখেচড়া",
    "hindi": "अधकचरा"
  },
  "in_that_way_thus_far": {
    "english": "In that way, thus (far)",
    "bishnupriya": "ঔষাদে / ঔষারে",
    "bangla": "ওভাবে (দূরের প্রসঙ্গে)",
    "hindi": "उस तरह (दूर के संदर्भ में)"
  },
  "that_one_far_2": {
    "english": "That one (far)",
    "bishnupriya": "ঔহান",
    "bangla": "ওইটা (দূরের)",
    "hindi": "वह (दूर वाला)"
  },
  "in_that_there_far": {
    "english": "In that, there (far)",
    "bishnupriya": "ঔহানত",
    "bangla": "ওখানে (দূরে)",
    "hindi": "वहाँ (दूर)"
  },
  "that_much_far": {
    "english": "That much (far)",
    "bishnupriya": "ঔহানি",
    "bangla": "ওতটা",
    "hindi": "इतना (दूर के संदर्भ में)"
  },
  "postposition_for_the_purpose_of": {
    "english": "Postposition – for the purpose of",
    "bishnupriya": "কা",
    "bangla": "উদ্দেশ্যে (খেইন কা = খাওয়ার জন্য)",
    "hindi": "के लिए (खाने के लिए)"
  },
  "to_do": {
    "english": "To do",
    "bishnupriya": "কা",
    "bangla": "করা",
    "hindi": "करना"
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
  "tongs": {
    "english": "Tongs",
    "bishnupriya": "জাম্বুরা",
    "bangla": "চিমটা",
    "hindi": "चिमटा"
  },
  "a_species_of_lemon": {
    "english": "A species of lemon",
    "bishnupriya": "জাম্বুরা",
    "bangla": "জামরুল",
    "hindi": "जामुन जैसा नींबू"
  },
  "deep_mud": {
    "english": "Deep mud",
    "bishnupriya": "জয়",
    "bangla": "গভীর কাদা",
    "hindi": "गहरा कीचड़"
  },
  "plant_cluster_of_plants": {
    "english": "Plant, cluster of plants",
    "bishnupriya": "জার",
    "bangla": "গাছপালা",
    "hindi": "पेड़-पौधे"
  },
  "cold": {
    "english": "Cold",
    "bishnupriya": "জার",
    "bangla": "ঠান্ডা",
    "hindi": "ठंडा"
  },
  "known": {
    "english": "Known",
    "bishnupriya": "চিনা",
    "bangla": "চেনা",
    "hindi": "जाना हुआ"
  },
  "comb_weavers_comb": {
    "english": "Comb / weaver's comb",
    "bishnupriya": "চিনা",
    "bangla": "চিরুনি",
    "hindi": "कंघी"
  },
  "knowing_recognising": {
    "english": "Knowing, recognising",
    "bishnupriya": "চিনানি",
    "bangla": "চেনার ক্রিয়া",
    "hindi": "पहचानने की क्रिया"
  },
  "sugar_molasses": {
    "english": "Sugar / molasses",
    "bishnupriya": "চিনি",
    "bangla": "চিনি",
    "hindi": "चीनी"
  },
  "to_think": {
    "english": "To think",
    "bishnupriya": "চিন্তা-",
    "bangla": "ভাবা",
    "hindi": "सोचना"
  },
  "to_squeeze_milk": {
    "english": "To squeeze / milk",
    "bishnupriya": "চিপ-",
    "bangla": "চাপা / দুধ দোয়া",
    "hindi": "निचोड़ना / दूध दुहना"
  },
  "narrow_path_difficulty": {
    "english": "Narrow path / difficulty",
    "bishnupriya": "চিপ",
    "bangla": "সরু রাস্তা / কষ্ট",
    "hindi": "संकरी राह / मुश्किल"
  },
  "squeezed_oil": {
    "english": "Squeezed (oil)",
    "bishnupriya": "চিপা",
    "bangla": "চিপে বের করা",
    "hindi": "निचोड़ा हुआ"
  },
  "to_leak_m": {
    "english": "To leak (M.)",
    "bishnupriya": "চিমা-",
    "bangla": "ফুটো হওয়া",
    "hindi": "रिसना"
  },
  "tongs": {
    "english": "Tongs",
    "bishnupriya": "চিমটা / চিম্পটি",
    "bangla": "চিমটা",
    "hindi": "चिमटा"
  },
  "crack": {
    "english": "Crack",
    "bishnupriya": "চির",
    "bangla": "ফাটল",
    "hindi": "दरार"
  },
  "long_lived": {
    "english": "Long-lived",
    "bishnupriya": "চিরঞ্জীবী",
    "bangla": "চিরঞ্জীব",
    "hindi": "चिरंजीवी"
  },
  "to_tear_saw_taunt": {
    "english": "To tear / saw / taunt",
    "bishnupriya": "চিরা-",
    "bangla": "ছেঁড়া / করাত চালানো / তাচ্ছিল্য",
    "hindi": "फाड़ना / आरा चलाना / ताना देना"
  },
  "ladder_long_piece_of_land": {
    "english": "Ladder / long piece of land",
    "bishnupriya": "চিরি",
    "bangla": "মই / লম্বা জমি",
    "hindi": "सीढ़ी / लंबी ज़मीन"
  },
  "beaten_rice": {
    "english": "Beaten rice",
    "bishnupriya": "চিনা",
    "bangla": "চিড়া",
    "hindi": "चिवड़ा"
  },
  "kite": {
    "english": "Kite",
    "bishnupriya": "চিল / চিলুনি",
    "bangla": "ঘুড়ি",
    "hindi": "पतंग"
  },
  "arduous_busy": {
    "english": "Arduous / busy",
    "bishnupriya": "চিল",
    "bangla": "কঠিন / ব্যস্ত",
    "hindi": "कठिन / व्यस्त"
  },
  "quiet": {
    "english": "Quiet",
    "bishnupriya": "চুপ",
    "bangla": "চুপ",
    "hindi": "चुप"
  },
  "unenjoyable": {
    "english": "Unenjoyable",
    "bishnupriya": "চুকতনা / চুকান্না",
    "bangla": "অস্বস্তিকর",
    "hindi": "बेस्वाद"
  },
  "contract": {
    "english": "Contract",
    "bishnupriya": "চুক্তি",
    "bangla": "চুক্তি",
    "hindi": "करार"
  },
  "pipe_tube": {
    "english": "Pipe, tube",
    "bishnupriya": "চুন / চুঙ্গা / চুঙ্গি",
    "bangla": "নল",
    "hindi": "नल"
  },
  "wet": {
    "english": "Wet",
    "bishnupriya": "চুচ্চুপা",
    "bangla": "ভিজা",
    "hindi": "गीला"
  },
  "injury_speedy_movement": {
    "english": "Injury / speedy movement",
    "bishnupriya": "চুট",
    "bangla": "আঘাত / দ্রুত চলা",
    "hindi": "चोट / तेज़ गति"
  },
  "fringe_a_little": {
    "english": "Fringe / a little",
    "bishnupriya": "চুটি",
    "bangla": "ঝালর / অল্প",
    "hindi": "लटकन / थोड़ा"
  },
  "naughty": {
    "english": "Naughty",
    "bishnupriya": "চুট্টা",
    "bangla": "দুষ্টু",
    "hindi": "शरारती"
  },
  "soda": {
    "english": "Soda",
    "bishnupriya": "চুঠেক",
    "bangla": "সোডা",
    "hindi": "सोडा"
  },
  "helpless": {
    "english": "Helpless",
    "bishnupriya": "চুটাত-পাতাত",
    "bangla": "অসহায়",
    "hindi": "लाचार"
  },
  "hush_silent": {
    "english": "Hush, silent",
    "bishnupriya": "চুপা",
    "bangla": "চুপ",
    "hindi": "खामोश"
  },
  "kiss": {
    "english": "Kiss",
    "bishnupriya": "চুমা",
    "bangla": "চুম্বন",
    "hindi": "चुम्बन"
  },
  "bunch_fruit": {
    "english": "Bunch (fruit)",
    "bishnupriya": "চুম্পুল / চুম্বুল",
    "bangla": "থোকা",
    "hindi": "गुच्छा"
  },
  "almost": {
    "english": "Almost",
    "bishnupriya": "চুয়া",
    "bangla": "প্রায়",
    "hindi": "लगभग"
  },
  "to_suck_out_ooze_out": {
    "english": "To suck out / ooze out",
    "bishnupriya": "চুয়া-",
    "bangla": "চোষা / বের হওয়া",
    "hindi": "चूसना / रिसना"
  },
  "broken": {
    "english": "Broken",
    "bishnupriya": "চুরা",
    "bangla": "ভাঙা",
    "hindi": "टूटा"
  },
  "secret_top_secret": {
    "english": "Secret (top secret)",
    "bishnupriya": "চুরান্ত",
    "bangla": "গোপন",
    "hindi": "गोपनीय"
  },
  "cigar": {
    "english": "Cigar",
    "bishnupriya": "চুরুট",
    "bangla": "চুরুট",
    "hindi": "सिगार"
  },
  "broken_to_pieces": {
    "english": "Broken to pieces",
    "bishnupriya": "চুরমার",
    "bangla": "চূর্ণ",
    "hindi": "चूर-चूर"
  },
  "bangles": {
    "english": "Bangles",
    "bishnupriya": "চুরি",
    "bangla": "চুড়ি",
    "hindi": "चूड़ी"
  },
  "hair": {
    "english": "Hair",
    "bishnupriya": "চুলা",
    "bangla": "চুল",
    "hindi": "बाल"
  },
  "lower_edge_of_slanting_roof": {
    "english": "Lower edge of slanting roof",
    "bishnupriya": "চুলি",
    "bangla": "ছাদের নিচের কিনারা",
    "hindi": "छत का निचला किनारा"
  },
  "husk": {
    "english": "Husk",
    "bishnupriya": "চুস",
    "bangla": "ভুসি",
    "hindi": "भूसी"
  },
  "to_suck_dry": {
    "english": "To suck dry",
    "bishnupriya": "চুস-",
    "bangla": "চুষে শুকানো",
    "hindi": "चूसकर सुखाना"
  },
  "smoking_pipe": {
    "english": "Smoking pipe",
    "bishnupriya": "চুহি",
    "bangla": "হুকো",
    "hindi": "हुक्का"
  },
  "juice_of_sugarcane": {
    "english": "Juice of sugarcane",
    "bishnupriya": "চুহি",
    "bangla": "গুড়ের রস",
    "hindi": "गन्ने का रस"
  },
  "crown_crest": {
    "english": "Crown, crest",
    "bishnupriya": "চোরা",
    "bangla": "মুকুট",
    "hindi": "मुकुट"
  },
  "paper": {
    "english": "Paper",
    "bishnupriya": "চে",
    "bangla": "কাগজ",
    "hindi": "कागज़"
  },
  "scattering": {
    "english": "Scattering",
    "bishnupriya": "চেই",
    "bangla": "ছড়ানো",
    "hindi": "बिखेरना"
  },
  "ear_of_paddy": {
    "english": "Ear of paddy",
    "bishnupriya": "চেই",
    "bangla": "ধানের শীষ",
    "hindi": "धान का बाल"
  },
  "brick": {
    "english": "Brick",
    "bishnupriya": "চেক",
    "bangla": "ইট",
    "hindi": "ईंट"
  },
  "kitchen": {
    "english": "Kitchen",
    "bishnupriya": "চাকাম / চাক্ষান",
    "bangla": "রান্নাঘর",
    "hindi": "रसोई"
  },
  "tongs_2": {
    "english": "Tongs",
    "bishnupriya": "চেকাপ",
    "bangla": "চিমটা",
    "hindi": "चिमटा"
  },
  "wall": {
    "english": "Wall",
    "bishnupriya": "চেকপাল",
    "bangla": "দেওয়াল",
    "hindi": "दीवार"
  },
  "rice_water": {
    "english": "Rice-water",
    "bishnupriya": "চেনি / চেনহি",
    "bangla": "ভাতের মাড়",
    "hindi": "चावल का पानी"
  },
  "restless": {
    "english": "Restless",
    "bishnupriya": "চেনচেনা",
    "bangla": "অস্থির",
    "hindi": "बेचैन"
  },
  "very_restless": {
    "english": "Very restless",
    "bishnupriya": "চেন্থি",
    "bangla": "খুব অস্থির",
    "hindi": "बहुत बेचैन"
  },
  "steadfast_alert": {
    "english": "Steadfast, alert",
    "bishnupriya": "চেত",
    "bangla": "সতর্ক",
    "hindi": "सावधान"
  },
  "consciousness": {
    "english": "Consciousness",
    "bishnupriya": "চেতন",
    "bangla": "চেতনা",
    "hindi": "चेतना"
  },
  "vogue_useful": {
    "english": "Vogue / useful",
    "bishnupriya": "চেন্না",
    "bangla": "চলতি / উপযোগী",
    "hindi": "प्रचलित / उपयोगी"
  },
  "to_cover_roof": {
    "english": "To cover, roof",
    "bishnupriya": "ছা-",
    "bangla": "ঢাকা",
    "hindi": "ढकना"
  },
  "to_filter_strain": {
    "english": "To filter, strain",
    "bishnupriya": "ছাক-",
    "bangla": "ছাঁকা",
    "hindi": "छानना"
  },
  "six": {
    "english": "Six",
    "bishnupriya": "ছয়",
    "bangla": "ছয়",
    "hindi": "छह"
  },
  "knife": {
    "english": "Knife",
    "bishnupriya": "ছারি",
    "bangla": "ছুরি",
    "hindi": "चाकू"
  },
  "skin": {
    "english": "Skin",
    "bishnupriya": "ছার",
    "bangla": "চামড়ा",
    "hindi": "चमड़ा"
  },
  "deception": {
    "english": "Deception",
    "bishnupriya": "ছলনা",
    "bangla": "ছলনা",
    "hindi": "धोखा"
  },
  "shade_bush": {
    "english": "Shade, bush",
    "bishnupriya": "ছা",
    "bangla": "ছায়া",
    "hindi": "छाया"
  },
  "mark": {
    "english": "Mark",
    "bishnupriya": "ছাপ",
    "bangla": "ছাপ",
    "hindi": "निशान"
  },
  "print_impression": {
    "english": "Print, impression",
    "bishnupriya": "ছাপা",
    "bangla": "ছাপা",
    "hindi": "छाप"
  },
  "to_print_conceal": {
    "english": "To print / conceal",
    "bishnupriya": "ছাপা-",
    "bangla": "ছাপানো / লুকানো",
    "hindi": "छापना / छिपाना"
  },
  "umbrella_mushroom": {
    "english": "Umbrella / mushroom",
    "bishnupriya": "ছাতা / ছাত্তি",
    "bangla": "ছাতা / ছাতা",
    "hindi": "छाता / छत्री"
  },
  "curdled_milk": {
    "english": "Curdled milk",
    "bishnupriya": "ছানা",
    "bangla": "ছানা",
    "hindi": "छेना"
  },
  "sign_beckoning": {
    "english": "Sign, beckoning",
    "bishnupriya": "ছানি",
    "bangla": "ইশারা",
    "hindi": "इशारा"
  },
  "roof_cover": {
    "english": "Roof, cover",
    "bishnupriya": "ছানি",
    "bangla": "ছাউনি",
    "hindi": "छत"
  },
  "bushy_place": {
    "english": "Bushy place",
    "bishnupriya": "ছাপাল",
    "bangla": "ঝোপঝাড়",
    "hindi": "झाड़ीदार जगह"
  },
  "remains_after_pressing_chewing": {
    "english": "Remains after pressing/chewing",
    "bishnupriya": "ছাবা",
    "bangla": "চিবানোর অবশেষ",
    "hindi": "चबाने के बाद बचा हुआ"
  },
  "to_shave_grass_cleanse": {
    "english": "To shave grass / cleanse",
    "bishnupriya": "ছাবা-",
    "bangla": "ঘাস কাটা / পরিষ্কার করা",
    "hindi": "घास काटना / साफ करना"
  },
  "destruction_destroyed": {
    "english": "Destruction / destroyed",
    "bishnupriya": "চারখার",
    "bangla": "ধ্বংস",
    "hindi": "बर्बादी"
  },
  "to_discard_leave": {
    "english": "To discard / leave",
    "bishnupriya": "ছার-",
    "bangla": "ফেলে দেওয়া",
    "hindi": "छोड़ना"
  },
  "without_release": {
    "english": "Without / release",
    "bishnupriya": "ছাড়া",
    "bangla": "ছাড়া",
    "hindi": "बिना"
  },
  "skin_bark": {
    "english": "Skin, bark",
    "bishnupriya": "ছাল",
    "bangla": "ছাল",
    "hindi": "छाल"
  },
  "ashes": {
    "english": "Ashes",
    "bishnupriya": "ছালি",
    "bangla": "ছাই",
    "hindi": "राख"
  },
  "throw_spot_cut_drop_one_who_takes_little": {
    "english": "Throw / spot / cut / drop / one who takes little",
    "bishnupriya": "ছিক",
    "bangla": "ছোঁড়া / দাগ / কাটা / ফোঁটা / অল্প খাওয়া লোক",
    "hindi": "फेंक / दाग / कट / बूंद / कम खाने वाला"
  },
  "hanging_rope_shelf": {
    "english": "Hanging rope-shelf",
    "bishnupriya": "ছিকা",
    "bangla": "ঝুলন্ত দড়ির তাক",
    "hindi": "लटकती रस्सी की अलमारी"
  },
  "to_scatter_cut_insect": {
    "english": "To scatter / cut (insect)",
    "bishnupriya": "ছিকা-",
    "bangla": "ছড়ানো / কাটা (পোকায়)",
    "hindi": "बिखेरना / काटना (कीड़े से)"
  },
  "chintz": {
    "english": "Chintz",
    "bishnupriya": "চিত",
    "bangla": "চিত",
    "hindi": "छींट"
  },
  "sprinkle_a_little": {
    "english": "Sprinkle / a little",
    "bishnupriya": "ছিটা",
    "bangla": "ছিটা",
    "hindi": "छींटा"
  },
  "to_sprinkle": {
    "english": "To sprinkle",
    "bishnupriya": "ছিটা-",
    "bangla": "ছিটানো",
    "hindi": "छिड़कना"
  },
  "emaciated_from_fasting": {
    "english": "Emaciated (from fasting)",
    "bishnupriya": "ছিতানলেই",
    "bangla": "ক্ষুধায় শুকিয়ে যাওয়া",
    "hindi": "भूख से सूखा हुआ"
  },
  "to_tear_pluck": {
    "english": "To tear / pluck",
    "bishnupriya": "ছির-",
    "bangla": "ছিঁড়া / তোলা",
    "hindi": "फाड़ना / तोड़ना"
  },
  "to_shave_grass": {
    "english": "To shave grass",
    "bishnupriya": "ছূত-",
    "bangla": "ঘাস কাটা",
    "hindi": "घास काटना"
  },
  "to_run_away_tear": {
    "english": "To run away / tear",
    "bishnupriya": "ছূত-",
    "bangla": "পালানো / ছিঁড়ে যাওয়া",
    "hindi": "भागना / फटना"
  },
  "release_vacation": {
    "english": "Release, vacation",
    "bishnupriya": "ছুটি",
    "bangla": "ছুটি",
    "hindi": "छुट्टी"
  },
  "small_negligible": {
    "english": "Small & negligible",
    "bishnupriya": "ছুটোমুটো",
    "bangla": "ছোটো-খাটো",
    "hindi": "छोटी-मोटी"
  },
  "joined_sticking_together": {
    "english": "Joined / sticking together",
    "bishnupriya": "ছূপ",
    "bangla": "জোড়া",
    "hindi": "जुड़ा"
  },
  "to_wash_beat_clothes": {
    "english": "To wash / beat (clothes)",
    "bishnupriya": "ছুপা-",
    "bangla": "কাপড় ধোয়া / পেটা",
    "hindi": "धोना / पीटना"
  },
  "adjacent": {
    "english": "Adjacent",
    "bishnupriya": "ছুয়াছুয়ি",
    "bangla": "পাশাপাশি",
    "hindi": "सटा हुआ"
  },
  "to_peel": {
    "english": "To peel",
    "bishnupriya": "ছুলা-",
    "bangla": "খোসা ছাড়ানো",
    "hindi": "छीलना"
  },
  "oil_press_instrument": {
    "english": "Oil press instrument",
    "bishnupriya": "ছেক",
    "bangla": "তেলের ঘানি",
    "hindi": "कोल्हू"
  },
  "to_apply_heat_tolerate": {
    "english": "To apply heat / tolerate",
    "bishnupriya": "ছেক-",
    "bangla": "সেঁকা / সহ্য করা",
    "hindi": "सेंकना / सहना"
  },
  "full_of_water": {
    "english": "Full of water",
    "bishnupriya": "জলাকার",
    "bangla": "জলপূর্ণ",
    "hindi": "जलपूर्ण"
  },
  "gravy_soup": {
    "english": "Gravy, soup",
    "bishnupriya": "জাল",
    "bangla": "তরকারির ঝোল",
    "hindi": "रस्सा"
  },
  "bucket": {
    "english": "Bucket",
    "bishnupriya": "জলটিন",
    "bangla": "বালতি",
    "hindi": "बाल्टी"
  },
  "olive": {
    "english": "Olive",
    "bishnupriya": "জলফল",
    "bangla": "জলপাই",
    "hindi": "जैतून"
  },
  "gruel_over_boiled_food": {
    "english": "Gruel / over-boiled food",
    "bishnupriya": "জাউ",
    "bangla": "জাউ",
    "hindi": "दलिया"
  },
  "flock_bunch": {
    "english": "Flock / bunch",
    "bishnupriya": "জাক",
    "bangla": "ঝাঁক / থোকা",
    "hindi": "झुंड / गुच्छा"
  },
  "to_shake_toss": {
    "english": "To shake / toss",
    "bishnupriya": "জাকারা-",
    "bangla": "ঝাঁকানো",
    "hindi": "हिलाना"
  },
  "fishing_net": {
    "english": "Fishing net",
    "bishnupriya": "জাকি",
    "bangla": "জাল",
    "hindi": "जाल"
  },
  "to_stay_awake_be_inspired": {
    "english": "To stay awake / be inspired",
    "bishnupriya": "জাগ-",
    "bangla": "জেগে থাকা",
    "hindi": "जागना"
  },
  "place": {
    "english": "Place",
    "bishnupriya": "জাগা",
    "bangla": "জায়গা",
    "hindi": "जगह"
  },
  "leg": {
    "english": "Leg",
    "bishnupriya": "জাং",
    "bangla": "পা",
    "hindi": "टांग"
  },
  "son_in_law_relation": {
    "english": "Son-in-law (relation)",
    "bishnupriya": "জানক / জানিয়াক / জানেই",
    "bangla": "জামাই",
    "hindi": "दामाद"
  },
  "earthen_wall_high_road": {
    "english": "Earthen wall / high road",
    "bishnupriya": "জাঙ্গাল",
    "bangla": "মাটির দেওয়াল / রাজপথ",
    "hindi": "मिट्टी की दीवार / राजमार्ग"
  },
  "kick": {
    "english": "Kick",
    "bishnupriya": "জান্দাল / জানবুকুর",
    "bangla": "লাথি",
    "hindi": "लात"
  },
  "load": {
    "english": "Load",
    "bishnupriya": "জাত",
    "bangla": "বোঝা",
    "hindi": "बोझ"
  },
  "pressure": {
    "english": "Pressure",
    "bishnupriya": "জাতা",
    "bangla": "চাপ",
    "hindi": "दबाव"
  },
  "to_press_ascribe": {
    "english": "To press / ascribe",
    "bishnupriya": "জাতা-",
    "bangla": "চাপা / আরোপ করা",
    "hindi": "दबाना / लगाना"
  },
  "magic_witchcraft": {
    "english": "Magic, witchcraft",
    "bishnupriya": "জাদু",
    "bangla": "জাদু",
    "hindi": "जादू"
  },
  "magician": {
    "english": "Magician",
    "bishnupriya": "জাদুগর",
    "bangla": "জাদুকর",
    "hindi": "जादूगर"
  },
  "to_know": {
    "english": "To know",
    "bishnupriya": "জান-",
    "bangla": "জানা",
    "hindi": "जानना"
  },
  "window": {
    "english": "Window",
    "bishnupriya": "জানালা",
    "bangla": "জানালা",
    "hindi": "खिड़की"
  },
  "leap": {
    "english": "Leap",
    "bishnupriya": "জাপ",
    "bangla": "লাফ",
    "hindi": "छलांग"
  },
  "bush": {
    "english": "Bush",
    "bishnupriya": "জাপ / জাপা / জাপুম / জাপুরা",
    "bangla": "ঝোপ",
    "hindi": "झाड़ी"
  },
  "to_jump_cover": {
    "english": "To jump / cover",
    "bishnupriya": "জা'প-",
    "bangla": "লাফানো / ঢাকা",
    "hindi": "कूदना / ढकना"
  },
  "strong_powerful": {
    "english": "Strong, powerful",
    "bishnupriya": "জবর",
    "bangla": "জোরদার",
    "hindi": "ज़बरदस्त"
  },
  "application_of_force": {
    "english": "Application of force",
    "bishnupriya": "জবরদস্তি",
    "bangla": "জোর করে",
    "hindi": "ज़बरदस्ती"
  },
  "hibiscus_red_china_rose": {
    "english": "Hibiscus (red China rose)",
    "bishnupriya": "জাবা",
    "bangla": "জবা ফুল",
    "hindi": "गुड़हल"
  },
  "word_promise": {
    "english": "Word, promise",
    "bishnupriya": "জবান",
    "bangla": "কথা",
    "hindi": "ज़बान"
  },
  "animal_sacrifice": {
    "english": "Animal sacrifice",
    "bishnupriya": "জবো",
    "bangla": "পশুবলি",
    "hindi": "कुर्बानी"
  },
  "nest": {
    "english": "Nest",
    "bishnupriya": "জাম",
    "bangla": "বাসা",
    "hindi": "घोंसला"
  },
  "to_accumulate_assemble": {
    "english": "To accumulate / assemble",
    "bishnupriya": "জাম-",
    "bangla": "জমা করা",
    "hindi": "जमा करना"
  },
  "savings_deposit": {
    "english": "Savings / deposit",
    "bishnupriya": "জামা",
    "bangla": "জমা",
    "hindi": "जमा"
  },
  "shirt": {
    "english": "Shirt",
    "bishnupriya": "জামা",
    "bangla": "জামা",
    "hindi": "कमीज़"
  },
  "surety_bail": {
    "english": "Surety, bail",
    "bishnupriya": "জামানত",
    "bangla": "জামিন",
    "hindi": "ज़मानत"
  },
  "land": {
    "english": "Land",
    "bishnupriya": "জমি",
    "bangla": "জমি",
    "hindi": "ज़मीन"
  },
  "landlord": {
    "english": "Landlord",
    "bishnupriya": "জমিদার",
    "bangla": "জমিদার",
    "hindi": "ज़मींदार"
  },
  "ear_ornament": {
    "english": "Ear ornament",
    "bishnupriya": "জাম্পা",
    "bangla": "কানের গহনা",
    "hindi": "कान का गहना"
  },
  "birth": {
    "english": "Birth",
    "bishnupriya": "জরম",
    "bangla": "জন্ম",
    "hindi": "जन्म"
  },
  "knot_dot": {
    "english": "Knot / dot",
    "bishnupriya": "জরা",
    "bangla": "গিঁট / বিন্দু",
    "hindi": "गाँठ / बिंदु"
  },
  "pimples_near_nose_fever": {
    "english": "Pimples near nose (fever)",
    "bishnupriya": "জরারা / জরাহারা",
    "bangla": "জ্বরের ফুসকুড়ি",
    "hindi": "बुखार की फुंसियाँ"
  },
  "lace": {
    "english": "Lace",
    "bishnupriya": "জারি",
    "bangla": "জরি",
    "hindi": "ज़री"
  },
  "fine_penalty": {
    "english": "Fine (penalty)",
    "bishnupriya": "জরিবানা",
    "bangla": "জরিমানা",
    "hindi": "जुर्माना"
  },
  "urgent": {
    "english": "Urgent",
    "bishnupriya": "জরুরি",
    "bangla": "জরুরি",
    "hindi": "ज़रूरी"
  },
  "root": {
    "english": "Root",
    "bishnupriya": "জড়",
    "bangla": "শিকড়",
    "hindi": "जड़"
  },
  "to_entangle": {
    "english": "To entangle",
    "bishnupriya": "জা'রা-",
    "bangla": "জড়ানো",
    "hindi": "उलझाना"
  },
  "amulet": {
    "english": "Amulet",
    "bishnupriya": "জা'রি",
    "bangla": "তাবিজ",
    "hindi": "तावीज़"
  },
  "entangled": {
    "english": "Entangled",
    "bishnupriya": "জারিত",
    "bangla": "জড়িত",
    "hindi": "उलझा हुआ"
  },
  "to_tolerate_sweep_cure_by_occult_insult": {
    "english": "To tolerate / sweep / cure by occult / insult",
    "bishnupriya": "জা'র-",
    "bangla": "সহ্য করা / ঝাড়া / ঝাড়ফুঁক / অপমান",
    "hindi": "सहना / झाड़ना / झाड़-फूँक / अपमान"
  },
  "bastard": {
    "english": "Bastard",
    "bishnupriya": "জা'রাক",
    "bangla": "জারজ",
    "hindi": "हरामी"
  },
  "sweeping_shaming": {
    "english": "Sweeping / shaming",
    "bishnupriya": "জারণ",
    "bangla": "ঝাড়া / লজ্জা দেওয়া",
    "hindi": "झाड़ना / शर्मिंदा करना"
  },
  "announcement": {
    "english": "Announcement",
    "bishnupriya": "জারি",
    "bangla": "ঘোষণা",
    "hindi": "ऐलान"
  },
  "boiling_false_husbands_brothers_wife": {
    "english": "Boiling / false / husband's brother's wife",
    "bishnupriya": "জাল",
    "bangla": "ফুটানো / মিথ্যা / দেওরানি",
    "hindi": "उबाल / झूठ / देवरानी"
  },
  "lake": {
    "english": "Lake",
    "bishnupriya": "জলাই",
    "bangla": "হ্রদ",
    "hindi": "झील"
  },
  "net_work": {
    "english": "Net-work",
    "bishnupriya": "জালি",
    "bangla": "জালের কাজ",
    "hindi": "जाली"
  },
  "fisherman": {
    "english": "Fisherman",
    "bishnupriya": "জালিয়া / জালুয়া",
    "bangla": "জেলে",
    "hindi": "मछुआ"
  },
  "excess": {
    "english": "Excess",
    "bishnupriya": "জাস্তি",
    "bangla": "বেশি",
    "hindi": "ज़्यादा"
  },
  "ship": {
    "english": "Ship",
    "bishnupriya": "জাহাজ",
    "bangla": "জাহাজ",
    "hindi": "जहाज़"
  },
  "fire": {
    "english": "Fire",
    "bishnupriya": "জি",
    "bangla": "আগুন",
    "hindi": "आग"
  },
  "to_be_alive": {
    "english": "To be alive",
    "bishnupriya": "জি-",
    "bangla": "বেঁচে থাকা",
    "hindi": "जीना"
  },
  "obstinacy_rivalry": {
    "english": "Obstinacy, rivalry",
    "bishnupriya": "জিক",
    "bangla": "জেদ / প্রতিদ্বন্দ্বিতা",
    "hindi": "ज़िद / मुकाबला"
  },
  "to_inquire_ask": {
    "english": "To inquire, ask",
    "bishnupriya": "জিগা-",
    "bangla": "জিজ্ঞাসা করা",
    "hindi": "पूछना"
  },
  "to_win": {
    "english": "To win",
    "bishnupriya": "জিন-",
    "bangla": "জেতা",
    "hindi": "जीतना"
  },
  "than": {
    "english": "Than",
    "bishnupriya": "জিনে",
    "bangla": "থেকে",
    "hindi": "से"
  },
  "alive": {
    "english": "Alive",
    "bishnupriya": "জিন্তা",
    "bangla": "জীবিত",
    "hindi": "ज़िंदा"
  },
  "cricket_insect": {
    "english": "Cricket (insect)",
    "bishnupriya": "জিঞ্জিনি / জিঞ্জুনি",
    "bangla": "ঝিঁঝিঁ পোকা",
    "hindi": "झींगुर"
  },
  "chain_necklace": {
    "english": "Chain, necklace",
    "bishnupriya": "জিঞ্জুর",
    "bangla": "চেন / হার",
    "hindi": "ज़ंजीर / हार"
  },
  "property_life": {
    "english": "Property / life",
    "bishnupriya": "জিনিস / জিন",
    "bangla": "জিনিস / জীবন",
    "hindi": "चीज़ / ज़िंदगी"
  },
  "to_be_closed": {
    "english": "To be closed",
    "bishnupriya": "জীপ-",
    "bangla": "বন্ধ হওয়া",
    "hindi": "बंद होना"
  },
  "children": {
    "english": "Children",
    "bishnupriya": "জিপুত / জিবুত",
    "bangla": "সন্তান",
    "hindi": "बच्चे"
  },
  "fence": {
    "english": "Fence",
    "bishnupriya": "জীবের",
    "bangla": "বেড়া",
    "hindi": "बाड़"
  },
  "that_remains_alive_long_without_water_fish": {
    "english": "That remains alive long without water (fish)",
    "bishnupriya": "জিয়াল",
    "bangla": "দীর্ঘজীবী মাছ",
    "hindi": "लंबे समय तक जीवित रहने वाली मछली"
  },
  "to_enliven": {
    "english": "To enliven",
    "bishnupriya": "জিয়া-",
    "bangla": "জীবন দেওয়া",
    "hindi": "जीवित करना"
  },
  "matches": {
    "english": "Matches",
    "bishnupriya": "জিয়াশাল",
    "bangla": "দেশলাই",
    "hindi": "माचिस"
  },
  "cumin_seed": {
    "english": "Cumin seed",
    "bishnupriya": "জীরা",
    "bangla": "জিরা",
    "hindi": "जीरा"
  },
  "to_take_rest": {
    "english": "To take rest",
    "bishnupriya": "জিরা-",
    "bangla": "বিশ্রাম নেওয়া",
    "hindi": "आराम करना"
  },
  "mushroom": {
    "english": "Mushroom",
    "bishnupriya": "জিরপুরা / জিরপেপুরা",
    "bangla": "ছাতা",
    "hindi": "कुकुरमुत्ता"
  },
  "district_town": {
    "english": "District / town",
    "bishnupriya": "জিল্লা",
    "bangla": "জেলা",
    "hindi": "ज़िला"
  },
  "a_wheel_shaped_sweetmeat": {
    "english": "A wheel-shaped sweetmeat",
    "bishnupriya": "জিল্লিবি",
    "bangla": "জিলাপি",
    "hindi": "जलेबी"
  },
  "tongue": {
    "english": "Tongue",
    "bishnupriya": "জু",
    "bangla": "জিভ",
    "hindi": "जीभ"
  },
  "shout_uproar": {
    "english": "Shout, uproar",
    "bishnupriya": "জুকার",
    "bangla": "চেঁচামেচি",
    "hindi": "शोर"
  },
  "prepared_ready": {
    "english": "Prepared, ready",
    "bishnupriya": "জুগত",
    "bangla": "তৈরি",
    "hindi": "तैयार"
  },
  "to_supply": {
    "english": "To supply",
    "bishnupriya": "জুগা-",
    "bangla": "যোগানো",
    "hindi": "सप्लाई करना"
  },
  "tree_snake": {
    "english": "Tree-snake",
    "bishnupriya": "জুগিনি",
    "bangla": "গোখরো সাপ",
    "hindi": "पेड़ का साँप"
  },
  "maize": {
    "english": "Maize",
    "bishnupriya": "জুগিরভাত",
    "bangla": "ভুট্টা",
    "hindi": "मक्का"
  },
  "to_assemble_arrange": {
    "english": "To assemble / arrange",
    "bishnupriya": "জুত- / জুতা-",
    "bangla": "জড়ো হওয়া / সাজানো",
    "hindi": "इकट्ठा होना / सजाना"
  },
  "shoe": {
    "english": "Shoe",
    "bishnupriya": "জুতা",
    "bangla": "জুতো",
    "hindi": "जूता"
  },
  "uptide": {
    "english": "Uptide",
    "bishnupriya": "জোয়ার",
    "bangla": "জোয়ার",
    "hindi": "ज्वार"
  },
  "gambling": {
    "english": "Gambling",
    "bishnupriya": "জুয়ার",
    "bangla": "জুয়া",
    "hindi": "जुआ"
  },
  "yoke": {
    "english": "Yoke",
    "bishnupriya": "জুয়াল",
    "bangla": "জোয়াল",
    "hindi": "जुआ"
  },
  "strength": {
    "english": "Strength",
    "bishnupriya": "জোর",
    "bangla": "শক্তি",
    "hindi": "ज़ोर"
  },
  "to_shed_tears_arrange": {
    "english": "To shed tears / arrange",
    "bishnupriya": "জু'র-",
    "bangla": "চোখের জল ফেলা / সাজানো",
    "hindi": "आँसू बहाना / सजाना"
  },
  "shower_rain_side_canal_equal": {
    "english": "Shower (rain) / side-canal / equal",
    "bishnupriya": "জু'রি",
    "bangla": "বৃষ্টি / পার্শ্ব খাল / সমান",
    "hindi": "बौछार / नहर / बराबर"
  },
  "couple_pair_joint": {
    "english": "Couple, pair / joint",
    "bishnupriya": "জুরা",
    "bangla": "জোড়া",
    "hindi": "जोड़ा"
  },
  "top_knot": {
    "english": "Top-knot",
    "bishnupriya": "জুরা",
    "bangla": "চূড়া",
    "hindi": "चोटी"
  },
  "paralysis": {
    "english": "Paralysis",
    "bishnupriya": "জুলাইমারা",
    "bangla": "পক্ষাঘাত",
    "hindi": "लकवा"
  },
  "purgative": {
    "english": "Purgative",
    "bishnupriya": "জুলাপ",
    "bangla": "জোলাপ",
    "hindi": "जुलाब"
  },
  "oppression": {
    "english": "Oppression",
    "bishnupriya": "জুলুম",
    "bangla": "অত্যাচার",
    "hindi": "ज़ुल्म"
  },
  "hair_on_temples": {
    "english": "Hair on temples",
    "bishnupriya": "জুলপি",
    "bangla": "আলকাতরা",
    "hindi": "मूँछों के पास बाल"
  },
  "somehow": {
    "english": "Somehow",
    "bishnupriya": "জেইসে-তেইসে",
    "bangla": "যেমন-তেমন",
    "hindi": "जैसे-तैसे"
  },
  "shout_abuse": {
    "english": "Shout / abuse",
    "bishnupriya": "জেকার",
    "bangla": "চেঁচানো / গালি",
    "hindi": "चिल्लाना / गाली"
  },
  "twin_couple": {
    "english": "Twin, couple",
    "bishnupriya": "জেনা",
    "bangla": "যমজ",
    "hindi": "जुड़वाँ"
  },
  "elder": {
    "english": "Elder",
    "bishnupriya": "জেঠ / জেঠা",
    "bangla": "জ্যেষ্ঠ",
    "hindi": "बड़ा"
  },
  "fathers_elder_brother": {
    "english": "Father's elder brother",
    "bishnupriya": "জেঠা",
    "bangla": "জেঠা",
    "hindi": "ताऊ"
  },
  "precocity": {
    "english": "Precocity",
    "bishnupriya": "জেঠামি",
    "bangla": "অকালপক্কতা",
    "hindi": "जल्दी परिपक्व होना"
  },
  "importunity": {
    "english": "Importunity",
    "bishnupriya": "জেদ",
    "bangla": "জেদ",
    "hindi": "ज़िद"
  },
  "pocket": {
    "english": "Pocket",
    "bishnupriya": "জেপ / জেব",
    "bangla": "পকেট",
    "hindi": "जेब"
  },
  "shore_end": {
    "english": "Shore / end",
    "bishnupriya": "জের",
    "bangla": "তীর / শেষ",
    "hindi": "किनारा / अंत"
  },
  "cross_examination": {
    "english": "Cross-examination",
    "bishnupriya": "জেরা",
    "bangla": "জেরা",
    "hindi": "पूछताछ"
  },
  "quickness": {
    "english": "Quickness",
    "bishnupriya": "ঝট",
    "bangla": "তাড়াতাড়ি",
    "hindi": "झट"
  },
  "sudden_brightness": {
    "english": "Sudden brightness",
    "bishnupriya": "ঝলক",
    "bangla": "ঝলক",
    "hindi": "झलक"
  },
  "to_flash": {
    "english": "To flash",
    "bishnupriya": "ঝলকা-",
    "bangla": "ঝলকানো",
    "hindi": "चमकना"
  },
  "glittering": {
    "english": "Glittering",
    "bishnupriya": "ঝলমল",
    "bangla": "ঝিকমিক",
    "hindi": "चमक-दमक"
  },
  "expert": {
    "english": "Expert",
    "bishnupriya": "ঝানু",
    "bangla": "দক্ষ",
    "hindi": "माहिर"
  },
  "indistinct": {
    "english": "Indistinct",
    "bishnupriya": "ঝাপসা",
    "bangla": "অস্পষ্ট",
    "hindi": "धुंधला"
  },
  "trouble": {
    "english": "Trouble",
    "bishnupriya": "ঝামেলা",
    "bangla": "ঝামেলা",
    "hindi": "झमेला"
  },
  "water_can_with_spout": {
    "english": "Water-can with spout",
    "bishnupriya": "ঝারি",
    "bangla": "ঝারি",
    "hindi": "झारी"
  },
  "big_cymbal": {
    "english": "Big cymbal",
    "bishnupriya": "ঝাল",
    "bangla": "বড়ো ঝাঁঝ",
    "hindi": "बड़ा झाँझ"
  },
  "woman": {
    "english": "Woman",
    "bishnupriya": "জেলা",
    "bangla": "মহিলা",
    "hindi": "औरत"
  },
  "burnt_burning_sensation": {
    "english": "Burnt / burning sensation",
    "bishnupriya": "জ্বলা",
    "bangla": "পোড়া / জ্বালা",
    "hindi": "जलना / जलन"
  },
  "to_burn_oppress": {
    "english": "To burn / oppress",
    "bishnupriya": "জ্বলা-",
    "bangla": "পোড়ানো / অত্যাচার করা",
    "hindi": "जलाना / सताना"
  },
  "pungent_sharp": {
    "english": "Pungent, sharp",
    "bishnupriya": "ঝাল",
    "bangla": "ঝাল",
    "hindi": "तीखा"
  },
  "to_doze": {
    "english": "To doze",
    "bishnupriya": "ঝিমা-",
    "bangla": "তন্দ্রা করা",
    "hindi": "झपकी लेना"
  },
  "inclination": {
    "english": "Inclination",
    "bishnupriya": "ঝোঁক",
    "bangla": "ঝোঁক",
    "hindi": "झुकाव"
  },
  "basket": {
    "english": "Basket",
    "bishnupriya": "ঝুড়ি",
    "bangla": "ঝুড়ি",
    "hindi": "टोकरी"
  },
  "to_dangle_swing": {
    "english": "To dangle, swing",
    "bishnupriya": "ঝুল-",
    "bangla": "দোলা",
    "hindi": "लटकना"
  },
  "small_bag": {
    "english": "Small bag",
    "bishnupriya": "ঝুল্লি",
    "bangla": "ছোটো ঝোলা",
    "hindi": "छोटी थैली"
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
  "knot_button": {
    "english": "Knot, button",
    "bishnupriya": "হেইরু",
    "bangla": "গিঁট, বোতাম",
    "hindi": "गाँठ, बटन"
  },
  "alt_forms_of_e_iruk_heiru": {
    "english": "Alt. forms of e iruk, heiru",
    "bishnupriya": "হেইরুক, হেইরৌ",
    "bangla": "ইরুক, হেইরু-র বিকল্প",
    "hindi": "इरुक, हेइरु के वैकल्पिक रूप"
  },
  "water_cress_hydrocotyle_repens": {
    "english": "A kind of water-cress, hydrocotyle repens",
    "bishnupriya": "হেইলানচাক",
    "bangla": "এক ধরনের জলশাক",
    "hindi": "एक प्रकार का जल साग"
  },
  "word_expressing_repulsion_aversion_sorrow": {
    "english": "A word expressing 'repulsion, aversion, sorrow' etc.",
    "bishnupriya": "হেইস",
    "bangla": "বিতৃষ্ণা, দুঃখ প্রকাশক",
    "hindi": "घृणा, दुख आदि व्यक्त करने वाला"
  },
  "alt_form_of_heicin": {
    "english": "Alt. form of he'icin",
    "bishnupriya": "হেইসিন",
    "bangla": "হেইচিন-এর বিকল্প",
    "hindi": "हेइचिन का वैकल्पिक रूप"
  },
  "expert_and_enthusiastic": {
    "english": "Expert and enthusiastic",
    "bishnupriya": "হেইসিন, হেইসিনপা",
    "bangla": "দক্ষ ও উৎসাহী",
    "hindi": "कुशल और उत्साही"
  },
  "expert_and_enthusiastic_of_women": {
    "english": "Expert and enthusiastic (of women)",
    "bishnupriya": "হেইসিনপি",
    "bangla": "দক্ষ ও উৎসাহী (মহিলা)",
    "hindi": "कुशल और उत्साही (महिला)"
  },
  "slanting_loose": {
    "english": "Slanting, loose",
    "bishnupriya": "হেও",
    "bangla": "ঢিলা, তির্যক",
    "hindi": "ढीला, तिरछा"
  },
  "pitch_note_of_weeping": {
    "english": "Pitch, note (of weeping)",
    "bishnupriya": "হেক",
    "bangla": "কান্নার সুর",
    "hindi": "रोने की पिच"
  },
  "weeping_by_modulating_voice": {
    "english": "(Weeping) by modulating the voice",
    "bishnupriya": "হেক চেল-আন্ত",
    "bangla": "সুর মোড়ানো কান্না",
    "hindi": "सुर मोड़कर रोना"
  },
  "pitch_note_of_music": {
    "english": "Pitch, note (of music)",
    "bishnupriya": "হেক",
    "bangla": "সঙ্গীতের সুর",
    "hindi": "संगीत की पिच"
  },
  "singing_by_modulating_voice": {
    "english": "(Singing) by modulating the voice",
    "bishnupriya": "হেক করানি",
    "bangla": "সুর মোড়ানো গান",
    "hindi": "सुर मोड़कर गाना"
  },
  "haughtiness_unyielding_attitude": {
    "english": "Haughtiness, unyielding attitude",
    "bishnupriya": "হেকারতি",
    "bangla": "অহংকার, অদম্য মনোভাব",
    "hindi": "घमंड, अड़ियलपन"
  },
  "swiftly_quickly": {
    "english": "Swiftly, quickly",
    "bishnupriya": "হেক্কা(রে)",
    "bangla": "তাড়াতাড়ি",
    "hindi": "जल्दी-जल्दी"
  },
  "alt_forms_of_ha_kase": {
    "english": "Alt. forms of ha kase",
    "bishnupriya": "হেক্কাসে, হেক্কুচে",
    "bangla": "হাকাসে-র বিকল্প",
    "hindi": "हाकासे के वैकल्पिक रूप"
  },
  "obstinate_obstinacy": {
    "english": "(i) Obstinate (ii) Obstinacy",
    "bishnupriya": "হেকথেলা",
    "bangla": "(i) একগুঁয়ে (ii) একগুঁয়েমি",
    "hindi": "(i) जिद्दी (ii) जिद"
  },
  "totally_tired": {
    "english": "Totally tired",
    "bishnupriya": "হেগাহেগা",
    "bangla": "পুরোপুরি ক্লান্ত",
    "hindi": "पूरी तरह थका हुआ"
  },
  "alt_form_of_hejal_bejal": {
    "english": "Alt. form of hejal-bejal",
    "bishnupriya": "হেগজাল-বেগজাল",
    "bangla": "হেজাল-বেজাল-এর বিকল্প",
    "hindi": "हेजाल-बेजाल का वैकल्पिक रूप"
  },
  "difficulty_harassment": {
    "english": "Difficulty, harassment",
    "bishnupriya": "হেঙ্গাম",
    "bangla": "কষ্ট, উত্যক্ত করা",
    "hindi": "परेशानी, उत्पीड़न"
  },
  "utterance_of_words_of_neglect": {
    "english": "Utterance of words of neglect",
    "bishnupriya": "হেচদুর",
    "bangla": "অবহেলার কথা",
    "hindi": "उपेक्षा की बात"
  },
  "totally_tired_very_weak": {
    "english": "Totally tired, very weak",
    "bishnupriya": "হেজাল-বেজাল",
    "bangla": "পুরোপুরি ক্লান্ত, দুর্বল",
    "hindi": "पूरी तरह थका, बहुत कमजोर"
  },
  "bed": {
    "english": "Bed",
    "bishnupriya": "হেজা",
    "bangla": "বিছানা",
    "hindi": "बिस्तर"
  },
  "light": {
    "english": "Light",
    "bishnupriya": "হেজাক",
    "bangla": "হালকা",
    "hindi": "हल्का"
  },
  "bed_alt": {
    "english": "Bed",
    "bishnupriya": "হেজি",
    "bangla": "বিছানা",
    "hindi": "बिस्तर"
  },
  "alt_form_of_hejal_bejal_alt": {
    "english": "Alt. form of hejal-bejal",
    "bishnupriya": "হেজ্জাল-বেজ্জাল",
    "bangla": "হেজাল-বেজাল-এর বিকল্প",
    "hindi": "हेजाल-बेजाल का वैकल्पिक रूप"
  },
  "supersession_in_speaking": {
    "english": "Supersession (as in speaking)",
    "bishnupriya": "হেনচিল",
    "bangla": "অতিক্রম করা (কথায়)",
    "hindi": "आगे निकलना (बात में)"
  },
  "return_to_fathers_family": {
    "english": "(i) Return (ii) Return to the father's family permanently (of a married woman)",
    "bishnupriya": "হেন্তাক",
    "bangla": "(i) ফিরে আসা (ii) স্থায়ী ফিরে আসা (বিবাহিত মহিলা)",
    "hindi": "(i) वापसी (ii) स्थायी वापसी (विवाहिता महिला)"
  },
  "woman_returned_to_fathers_family": {
    "english": "One who has returned to the father's family permanently (of a married woman)",
    "bishnupriya": "হেন্তাকপি",
    "bangla": "স্থায়ীভাবে বাপের বাড়ি ফিরে আসা মহিলা",
    "hindi": "स्थायी रूप से पिता के घर लौटने वाली महिला"
  },
  "fomentation_application_of_heat": {
    "english": "Fomentation, application of heat",
    "bishnupriya": "হেদ",
    "bangla": "সেক দেওয়া",
    "hindi": "सेंकना"
  },
  "to_foment_apply_heat": {
    "english": "To foment, to apply heat",
    "bishnupriya": "হেদ-",
    "bangla": "সেক দেওয়া",
    "hindi": "सेंकना"
  },
  "to_be_fomented_after_boiling": {
    "english": "To be fomented after boiling",
    "bishnupriya": "হেদ-",
    "bangla": "সিদ্ধ হওয়ার পর সেক দেওয়া",
    "hindi": "उबालने के बाद सेंकना"
  },
  "pish_tut_tut_word_of_rebuke": {
    "english": "Pish, tut-tut, a word of rebuke",
    "bishnupriya": "হেদা",
    "bangla": "ধিক্কারের শব্দ",
    "hindi": "धिक्कार का शब्द"
  },
  "fomenting_applying_heat": {
    "english": "Fomenting, applying heat",
    "bishnupriya": "হেদানি",
    "bangla": "সেক দেওয়া",
    "hindi": "सेंकना"
  },
  "being_fomented_after_boiling": {
    "english": "Being fomented after boiling",
    "bishnupriya": "হেদানি",
    "bangla": "সিদ্ধ হওয়ার পর সেক দেওয়া",
    "hindi": "उबालने के बाद सेंकना"
  },
  "to_cause_to_foment_or_apply_heat": {
    "english": "To cause to foment or apply heat",
    "bishnupriya": "হেদুয়া-",
    "bangla": "সেক দিতে বলা",
    "hindi": "सेंकवाना"
  },
  "heap_of_straw": {
    "english": "A heap of straw",
    "bishnupriya": "হেনি",
    "bangla": "খড়ের স্তূপ",
    "hindi": "पुआल का ढेर"
  },
  "alt_forms_of_he_inau": {
    "english": "Alt. forms of he'inau",
    "bishnupriya": "হেনু, হেনৌ",
    "bangla": "হেইনৌ-এর বিকল্প",
    "hindi": "हेइनौ के वैकल्पिक रूप"
  },
  "alt_form_of_he_inaucam": {
    "english": "Alt. form of he inaucam",
    "bishnupriya": "হেনৌচাম",
    "bangla": "হেইনৌচাম-এর বিকল্প",
    "hindi": "हेइनौचाम का वैकल्पिक रूप"
  },
  "alt_forms_of_helthak": {
    "english": "Alt. forms of helthak",
    "bishnupriya": "হেন্দুক, হেন্দোক",
    "bangla": "হেলথাক-এর বিকল্প",
    "hindi": "हेलथाक के वैकल्पिक रूप"
  },
  "slack_lazy_dilatory": {
    "english": "Slack, lazy, dilatory (as in work)",
    "bishnupriya": "হেপ",
    "bangla": "ঢিলা, অলস",
    "hindi": "सुस्त, आलसी"
  },
  "that_time": {
    "english": "That time",
    "bishnupriya": "হে-পর",
    "bangla": "সেই সময়",
    "hindi": "वह समय"
  },
  "there": {
    "english": "There",
    "bishnupriya": "হে-পেয়",
    "bangla": "সেখানে",
    "hindi": "वहाँ"
  },
  "fellow_in_deprecatory_sense": {
    "english": "Fellow (in a deprecatory sense)",
    "bishnupriya": "হেবানিয়া",
    "bangla": "সাথী (তাচ্ছিল্য করে)",
    "hindi": "साथी (तिरस्कारपूर्ण)"
  },
  "foolish": {
    "english": "Foolish",
    "bishnupriya": "হেমা, হেমান",
    "bangla": "মূর্খ",
    "hindi": "मूर्ख"
  },
  "foolish_alt": {
    "english": "Foolish",
    "bishnupriya": "হেমানিয়া",
    "bangla": "মূর্খ",
    "hindi": "मूर्ख"
  },
  "foolish_alt2": {
    "english": "Foolish",
    "bishnupriya": "হেমেরা, হেমেরাক",
    "bangla": "মূর্খ",
    "hindi": "मूर्ख"
  },
  "related_as_husband": {
    "english": "Related as husband",
    "bishnupriya": "হেয়াক",
    "bangla": "স্বামী সম্পর্ক",
    "hindi": "पति संबंध"
  },
  "slanting_alt": {
    "english": "Slanting",
    "bishnupriya": "হেওয়া",
    "bangla": "তির্যক",
    "hindi": "तिरछा"
  },
  "gap_scope": {
    "english": "Gap, scope",
    "bishnupriya": "হের",
    "bangla": "ফাঁক, সুযোগ",
    "hindi": "अंतराल, अवसर"
  },
  "difference_discrepancy": {
    "english": "Difference, discrepancy",
    "bishnupriya": "হের-ফের",
    "bangla": "পার্থক্য",
    "hindi": "अंतर"
  },
  "alt_form_of_heidi": {
    "english": "Alt. form of heidi",
    "bishnupriya": "হেরি",
    "bangla": "হেইদি-র বিকল্প",
    "hindi": "हेइदी का वैकल्पिक रूप"
  },
  "the_other": {
    "english": "The other",
    "bishnupriya": "হেরে",
    "bangla": "অন্য",
    "hindi": "दूसरा"
  },
  "to_recline": {
    "english": "To recline",
    "bishnupriya": "হেল-",
    "bangla": "হেলান দেওয়া",
    "hindi": "टेक लगाना"
  },
  "excess_supersession": {
    "english": "(i) Excess, supersession (ii) Exceeding, superseding",
    "bishnupriya": "হেল",
    "bangla": "(i) অতিরিক্ত (ii) অতিক্রম করা",
    "hindi": "(i) अधिकता (ii) आगे निकलना"
  },
  "exceeding": {
    "english": "Exceeding",
    "bishnupriya": "হেল আনি",
    "bangla": "অতিক্রম করা",
    "hindi": "आगे निकलना"
  },
  "exceeding_superseding": {
    "english": "Exceeding, superseding",
    "bishnupriya": "হেলপা",
    "bangla": "অতিক্রম করা",
    "hindi": "आगे निकलना"
  },
  "negligence": {
    "english": "Negligence",
    "bishnupriya": "হেলা",
    "bangla": "অবহেলা",
    "hindi": "लापरवाही"
  },
  "alt_form_of_ela": {
    "english": "Alt. form of e'la-",
    "bishnupriya": "হেলা-",
    "bangla": "এলা--এর বিকল্প",
    "hindi": "एला- का वैकल्पिक रूप"
  },
  "reclining": {
    "english": "Reclining",
    "bishnupriya": "হেলান",
    "bangla": "হেলান দেওয়া",
    "hindi": "टेक लगाना"
  },
  "alt_form_of_elani": {
    "english": "Alt. form of eläni",
    "bishnupriya": "হেলানি",
    "bangla": "এলানি-র বিকল্প",
    "hindi": "एलानि का वैकल्पिक रूप"
  },
  "word_denoting_unsteadiness_or_feebleness": {
    "english": "A word denoting 'unsteadiness or 'feebleness'",
    "bishnupriya": "হেলেং-বেলেন",
    "bangla": "অস্থিরতা বা দুর্বলতা",
    "hindi": "अस्थिरता या कमजोरी"
  },
  "laziness_dilatoriness": {
    "english": "Laziness, dilatoriness",
    "bishnupriya": "হেলগাচ-মেলগাচ",
    "bangla": "অলসতা, দেরি করা",
    "hindi": "आलस्य, विलंब"
  },
  "alt_forms_of_hau_hut_haudin_haurań": {
    "english": "Alt. forms of 2. hau, hut, háudin, haurań",
    "bishnupriya": "হো, হোত, হোদিন, হোরান",
    "bangla": "হাউ, হুত, হাউদিন, হাউরাঁ-এর বিকল্প",
    "hindi": "हाउ, हुत, हाउदिन, हाउराँ के वैकल्पिक रूप"
  },
  "word_used_in_responding_to_a_call": {
    "english": "A word used in responding to a call",
    "bishnupriya": "হাউ",
    "bangla": "ডাকের উত্তর",
    "hindi": "बुलाने पर जवाब"
  },
  "vegetables_curry": {
    "english": "Vegetables, curry",
    "bishnupriya": "হাউ",
    "bangla": "শাকসবজি, তরকারি",
    "hindi": "सब्जी, तरकारी"
  },
  "that": {
    "english": "That",
    "bishnupriya": "হাউ",
    "bangla": "সেই",
    "hindi": "वह"
  },
  "provocation_act_of_starting": {
    "english": "(i) Provocation (ii) The act of starting or beginning",
    "bishnupriya": "হাউ",
    "bangla": "(i) উস্কানি (ii) শুরু করা",
    "hindi": "(i) उकसावा (ii) शुरू करना"
  },
  "starting_provoking": {
    "english": "Starting, provoking",
    "bishnupriya": "হাউ করানি",
    "bangla": "শুরু করা, উস্কানো",
    "hindi": "शुरू करना, उकसाना"
  },
  "alt_forms_of_hauja_haujani_hauja_hauja": {
    "english": "Alt. forms of hauja-, haujani-, haujā-haujā",
    "bishnupriya": "হাউচা-, হাউচানি, হাউচা-হাউচা",
    "bangla": "হাউজা-, হাউজানি, হাউজা-হাউজা-র বিকল্প",
    "hindi": "हाउजा-, हाउजानि, हाउजा-हाउजा के वैकल्पिक रूप"
  },
  "to_repeat_proceed_argue_adamantly": {
    "english": "(i) To repeat (ii) To proceed or argue adamantly",
    "bishnupriya": "হাউজা-",
    "bangla": "(i) পুনরাবৃত্তি (ii) জেদ করে এগোনো",
    "hindi": "(i) दोहराना (ii) जिद करके आगे बढ़ना"
  },
  "repeating_proceeding_arguing_adamantly": {
    "english": "(i) Repeating (ii) Proceeding or arguing adamantly",
    "bishnupriya": "হাউজানি",
    "bangla": "(i) পুনরাবৃত্তি (ii) জেদ করে এগোনো",
    "hindi": "(i) दोहराना (ii) जिद करके आगे बढ़ना"
  },
  "repeatedly_again_and_again": {
    "english": "Repeatedly, again and again",
    "bishnupriya": "হাউজা-হাউজা",
    "bangla": "বারবার",
    "hindi": "बार-बार"
  },
  "that_day": {
    "english": "That day",
    "bishnupriya": "হাউদিন",
    "bangla": "সেই দিন",
    "hindi": "वह दिन"
  },
  "courtesy": {
    "english": "Courtesy",
    "bishnupriya": "হাউনাপি, হাউনাবি",
    "bangla": "শিষ্টাচার",
    "hindi": "शिष्टाचार"
  },
  "that_side": {
    "english": "That side",
    "bishnupriya": "হাউবারা",
    "bangla": "সেই দিক",
    "hindi": "वह तरफ"
  },
  "whole_strength_obstinacy": {
    "english": "(i) The whole strength (ii) Obstinacy",
    "bishnupriya": "হাউমুরাক",
    "bangla": "(i) পুরো শক্তি (ii) জেদ",
    "hindi": "(i) पूरी ताकत (ii) जिद"
  },
  "with_whole_strength_obstinately": {
    "english": "With the whole strength, obstinately",
    "bishnupriya": "হাউমুরাক দিয়া",
    "bangla": "পুরো শক্তি দিয়ে, জেদ করে",
    "hindi": "पूरी ताकत से, जिद से"
  },
  "father_in_law": {
    "english": "Father-in-law",
    "bishnupriya": "হাউরাক",
    "bangla": "শ্বশুর",
    "hindi": "ससुर"
  },
  "at_that_place": {
    "english": "At that place",
    "bishnupriya": "হাউরান",
    "bangla": "সেই জায়গায়",
    "hindi": "वहाँ"
  },
  "mother_in_law": {
    "english": "Mother-in-law",
    "bishnupriya": "হাউরিয়াক",
    "bangla": "শাশুড়ি",
    "hindi": "सास"
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
  "slice_metallic": {
    "english": "Slice (metallic)",
    "bishnupriya": "তেলকা",
    "bangla": "ধাতুর টুকরো",
    "hindi": "धातु का टुकड़ा"
  },
  "oily": {
    "english": "Oily",
    "bishnupriya": "তেলতেলা",
    "bangla": "তৈলাক্ত",
    "hindi": "तेलीय"
  },
  "to_appear_oily": {
    "english": "To appear oily",
    "bishnupriya": "তেলতেলা-",
    "bangla": "তেলতেলে লাগা",
    "hindi": "तेलीय दिखना"
  },
  "oil_bottle": {
    "english": "Oil bottle",
    "bishnupriya": "তেলপু",
    "bangla": "তেলের বোতল",
    "hindi": "तेल की बोतल"
  },
  "quickly": {
    "english": "Quickly",
    "bishnupriya": "তেল্লাম",
    "bangla": "তাড়াতাড়ি",
    "hindi": "जल्दी"
  },
  "special_particularly": {
    "english": "Special / particularly",
    "bishnupriya": "থাইদক",
    "bangla": "বিশেষ",
    "hindi": "खास"
  },
  "sudden_befitting": {
    "english": "Sudden / befitting",
    "bishnupriya": "থাক",
    "bangla": "হঠাৎ / উপযুক্ত",
    "hindi": "अचानक / ठीक"
  },
  "suspended": {
    "english": "Suspended",
    "bishnupriya": "থাকিত",
    "bangla": "ঝুলন্ত",
    "hindi": "लटका हुआ"
  },
  "requisite_payment": {
    "english": "Requisite payment",
    "bishnupriya": "থাকচা",
    "bangla": "প্রাপ্য অর্থ",
    "hindi": "बकाया"
  },
  "bridge_kick": {
    "english": "Bridge / kick",
    "bishnupriya": "থান",
    "bangla": "সাঁকো / লাথি",
    "hindi": "पुल / लात"
  },
  "jaundice": {
    "english": "Jaundice",
    "bishnupriya": "থানক",
    "bangla": "জন্ডিস",
    "hindi": "पीलिया"
  },
  "gate": {
    "english": "Gate",
    "bishnupriya": "থানকাল",
    "bangla": "দরজা",
    "hindi": "दरवाज़ा"
  },
  "cannon": {
    "english": "Cannon",
    "bishnupriya": "টপ",
    "bangla": "কামান",
    "hindi": "तोप"
  },
  "of_you_sing": {
    "english": "Of you (sing.)",
    "bishnupriya": "তোর",
    "bangla": "তোর",
    "hindi": "तेरा"
  },
  "to_you_sing": {
    "english": "To you (sing.)",
    "bishnupriya": "তোরে",
    "bangla": "তোকে",
    "hindi": "तुझे"
  },
  "whirlpool_current": {
    "english": "Whirlpool / current",
    "bishnupriya": "তৌরি / তৌরেই",
    "bangla": "ঘূর্ণি",
    "hindi": "भँवर"
  },
  "witch": {
    "english": "Witch",
    "bishnupriya": "তৌরেইবি",
    "bangla": "ডাইনি",
    "hindi": "डायन"
  },
  "to_be_abandoned": {
    "english": "To be abandoned",
    "bishnupriya": "ত্যাজ্য",
    "bangla": "পরিত্যাজ্য",
    "hindi": "त्यागने योग्य"
  },
  "consultation": {
    "english": "Consultation",
    "bishnupriya": "তানা",
    "bangla": "পরামর্শ",
    "hindi": "सलाह"
  },
  "to_tighten": {
    "english": "To tighten",
    "bishnupriya": "তানা-",
    "bangla": "টানা",
    "hindi": "खींचना"
  },
  "mutual_pulling_hardship": {
    "english": "Mutual pulling / hardship",
    "bishnupriya": "তানাতানি",
    "bangla": "টানাটানি / কষ্ট",
    "hindi": "खींचतान / मुश्किल"
  },
  "to_keep_place": {
    "english": "To keep / place",
    "bishnupriya": "থা-",
    "bangla": "রাখা",
    "hindi": "रखना"
  },
  "shelf": {
    "english": "Shelf",
    "bishnupriya": "থাক",
    "bangla": "তাক",
    "hindi": "ताक"
  },
  "wonder": {
    "english": "Wonder",
    "bishnupriya": "থাক",
    "bangla": "আশ্চর্য",
    "hindi": "ताज्जुब"
  },
  "fickle": {
    "english": "Fickle",
    "bishnupriya": "থাক",
    "bangla": "চঞ্চল",
    "hindi": "चंचल"
  },
  "to_cheat": {
    "english": "To cheat",
    "bishnupriya": "থাকা-",
    "bangla": "ঠকানো",
    "hindi": "ठगना"
  },
  "mouth": {
    "english": "Mouth",
    "bishnupriya": "থাতা",
    "bangla": "মুখ",
    "hindi": "मुँह"
  },
  "talkative": {
    "english": "Talkative",
    "bishnupriya": "থাতাবা / থাতাবি",
    "bangla": "বাচাল",
    "hindi": "बातूनी"
  },
  "keeping": {
    "english": "Keeping",
    "bishnupriya": "থানা",
    "bangla": "রাখা",
    "hindi": "रखना"
  },
  "tuft_of_hair": {
    "english": "Tuft of hair",
    "bishnupriya": "থাপ",
    "bangla": "চূড়া",
    "hindi": "चोटी"
  },
  "addition": {
    "english": "Addition",
    "bishnupriya": "থাম",
    "bangla": "যোগ",
    "hindi": "जोड़"
  },
  "artful_gait": {
    "english": "Artful gait",
    "bishnupriya": "থামক",
    "bangla": "চালাক চলা",
    "hindi": "चालाक चाल"
  },
  "healthy_growth": {
    "english": "Healthy growth",
    "bishnupriya": "থামথাম",
    "bangla": "স্বাস্থ্যকর বৃদ্ধি",
    "hindi": "अच्छी बढ़त"
  },
  "shank": {
    "english": "Shank",
    "bishnupriya": "থারুয়া",
    "bangla": "পায়ের গোড়ালি",
    "hindi": "टखना"
  },
  "snail": {
    "english": "Snail",
    "bishnupriya": "থারেই",
    "bangla": "শামুক",
    "hindi": "घोंघा"
  },
  "plantain_flower_water_lily": {
    "english": "Plantain flower / water lily",
    "bishnupriya": "থারো",
    "bangla": "কলার মোচা / পদ্ম",
    "hindi": "केले का फूल / कमल"
  },
  "soft": {
    "english": "Soft",
    "bishnupriya": "থারথার",
    "bangla": "নরম",
    "hindi": "नरम"
  },
  "about_to_flower": {
    "english": "About to flower",
    "bishnupriya": "থারবারি",
    "bangla": "ফুল ফুটতে চলেছে",
    "hindi": "फूल आने वाला"
  },
  "plain_land": {
    "english": "Plain land",
    "bishnupriya": "থাল",
    "bangla": "সমতল",
    "hindi": "मैदान"
  },
  "bag_sack": {
    "english": "Bag / sack",
    "bishnupriya": "থা'লি",
    "bangla": "বস্তা",
    "hindi": "बोरी"
  },
  "to_remain": {
    "english": "To remain",
    "bishnupriya": "থা-",
    "bangla": "থাকা",
    "hindi": "रहना"
  },
  "old_ancient": {
    "english": "Old / ancient",
    "bishnupriya": "থাইনাকা",
    "bangla": "পুরানো",
    "hindi": "पुराना"
  },
  "to_stop_halt": {
    "english": "To stop / halt",
    "bishnupriya": "থাম-",
    "bangla": "থামা",
    "hindi": "रुकना"
  },
  "dark_fortnight": {
    "english": "Dark fortnight",
    "bishnupriya": "থামাম",
    "bangla": "কৃষ্ণপক্ষ",
    "hindi": "कृष्ण पक्ष"
  },
  "difference_distance": {
    "english": "Difference / distance",
    "bishnupriya": "থামনা",
    "bangla": "পার্থক্য",
    "hindi": "फर्क"
  },
  "lotus": {
    "english": "Lotus",
    "bishnupriya": "থাম্পাল",
    "bangla": "পদ্ম",
    "hindi": "कमल"
  },
  "lotus_root": {
    "english": "Lotus root",
    "bishnupriya": "থাম্পাউ",
    "bangla": "পদ্মের ডাঁটা",
    "hindi": "कमल ककड़ी"
  },
  "water_lily": {
    "english": "Water lily",
    "bishnupriya": "থারিক",
    "bangla": "শালুক",
    "hindi": "मखाना"
  },
  "slope": {
    "english": "Slope",
    "bishnupriya": "থারুন্না",
    "bangla": "ঢাল",
    "hindi": "ढलान"
  },
  "cricket": {
    "english": "Cricket",
    "bishnupriya": "থারাউ",
    "bangla": "ঝিঁঝিঁ পোকা",
    "hindi": "झींगुर"
  },
  "desire": {
    "english": "Desire",
    "bishnupriya": "থাল",
    "bangla": "ইচ্ছা",
    "hindi": "इच्छा"
  },
  "bad": {
    "english": "Bad",
    "bishnupriya": "থি",
    "bangla": "খারাপ",
    "hindi": "बुरा"
  },
  "closure_prohibition": {
    "english": "Closure / prohibition",
    "bishnupriya": "থিন",
    "bangla": "বন্ধ / নিষেধ",
    "hindi": "बंद / रोक"
  },
  "stoppage": {
    "english": "Stoppage",
    "bishnupriya": "থিন্তাক",
    "bangla": "বাধা",
    "hindi": "रुकावट"
  },
  "gentle": {
    "english": "Gentle",
    "bishnupriya": "থিত",
    "bangla": "শান্ত",
    "hindi": "शांत"
  },
  "certainty_stability": {
    "english": "Certainty / stability",
    "bishnupriya": "থিতি",
    "bangla": "নিশ্চয়তা",
    "hindi": "स्थिरता"
  },
  "perplexed": {
    "english": "Perplexed",
    "bishnupriya": "থিতু-বিতু",
    "bangla": "বিভ্রান্ত",
    "hindi": "उलझन में"
  },
  "inimical_feeling": {
    "english": "Inimical feeling",
    "bishnupriya": "থীনা",
    "bangla": "শত্রুতা",
    "hindi": "दुश्मनी"
  },
  "reciter": {
    "english": "Reciter",
    "bishnupriya": "থিপা",
    "bangla": "পাঠক",
    "hindi": "पाठक"
  },
  "to_deposit_keep": {
    "english": "To deposit / keep",
    "bishnupriya": "থু-",
    "bangla": "জমা রাখা",
    "hindi": "जमा करना"
  },
  "tremble": {
    "english": "Tremble",
    "bishnupriya": "থুরথুরা-",
    "bangla": "কাঁপা",
    "hindi": "काँपना"
  },
  "separation": {
    "english": "Separation",
    "bishnupriya": "থেই",
    "bangla": "বিচ্ছেদ",
    "hindi": "जुदाई"
  },
  "different": {
    "english": "Different",
    "bishnupriya": "থেইনা",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "jackfruit": {
    "english": "Jackfruit",
    "bishnupriya": "থেইপান",
    "bangla": "কাঁঠাল",
    "hindi": "कटहल"
  },
  "stooping": {
    "english": "Stooping",
    "bishnupriya": "থেক্কারা",
    "bangla": "ঝুঁকে পড়া",
    "hindi": "झुका हुआ"
  },
  "full_satisfaction": {
    "english": "Full satisfaction",
    "bishnupriya": "থেকথেক",
    "bangla": "পুরো তৃপ্তি",
    "hindi": "पूरा संतोष"
  },
  "touch_collision": {
    "english": "Touch / collision",
    "bishnupriya": "থেন",
    "bangla": "স্পর্শ / ধাক্কা",
    "hindi": "छूना / टक्कर"
  },
  "tortoise": {
    "english": "Tortoise",
    "bishnupriya": "থেনকু",
    "bangla": "কচ্ছপ",
    "hindi": "कछुआ"
  },
  "clash": {
    "english": "Clash",
    "bishnupriya": "থেন্না",
    "bangla": "সংঘর্ষ",
    "hindi": "टक्कर"
  },
  "obstruction": {
    "english": "Obstruction",
    "bishnupriya": "থেত",
    "bangla": "বাধা",
    "hindi": "रुकावट"
  },
  "slow_inert": {
    "english": "Slow / inert",
    "bishnupriya": "থেতালা",
    "bangla": "ধীরগতি",
    "hindi": "सुस्त"
  },
  "oil": {
    "english": "Oil",
    "bishnupriya": "থৌ",
    "bangla": "তেল",
    "hindi": "तेल"
  },
  "driver": {
    "english": "Driver",
    "bishnupriya": "থাউপা",
    "bangla": "চালক",
    "hindi": "ड्राइवर"
  },
  "performer_of_ceremony": {
    "english": "Performer of ceremony",
    "bishnupriya": "থাউপু",
    "bangla": "অনুষ্ঠানকারী",
    "hindi": "अनुष्ठान करने वाला"
  },
  "behaviour": {
    "english": "Behaviour",
    "bishnupriya": "থাউয়েই",
    "bangla": "আচরণ",
    "hindi": "व्यवहार"
  },
  "to_give": {
    "english": "To give",
    "bishnupriya": "দ-",
    "bangla": "দেওয়া",
    "hindi": "देना"
  },
  "curd": {
    "english": "Curd",
    "bishnupriya": "দাই",
    "bangla": "দই",
    "hindi": "दही"
  },
  "white": {
    "english": "White",
    "bishnupriya": "দা'প",
    "bangla": "সাদা",
    "hindi": "सफेद"
  },
  "indian_marigold": {
    "english": "Indian marigold",
    "bishnupriya": "দাপুর",
    "bangla": "গাঁদা ফুল",
    "hindi": "गेंदा"
  },
  "big_drum": {
    "english": "Big drum",
    "bishnupriya": "দাপ্ফা",
    "bangla": "বড়ো ঢোল",
    "hindi": "बड़ा ढोल"
  },
  "party": {
    "english": "Party",
    "bishnupriya": "দাফা",
    "bangla": "দল",
    "hindi": "पार्टी"
  },
  "supervisor": {
    "english": "Supervisor",
    "bishnupriya": "দাফাদার",
    "bangla": "তত্ত্বাবধায়ক",
    "hindi": "सुपरवाइज़र"
  },
  "breath": {
    "english": "Breath",
    "bishnupriya": "দাম",
    "bangla": "শ্বাস",
    "hindi": "साँस"
  },
  "to_control_subdue": {
    "english": "To control / subdue",
    "bishnupriya": "দাম-",
    "bangla": "দমন করা",
    "hindi": "दबाना"
  },
  "quickly_2": {
    "english": "Quickly",
    "bishnupriya": "দামাদাম",
    "bangla": "তাড়াতাড়ি",
    "hindi": "जल्दी-जल्दी"
  },
  "pride": {
    "english": "Pride",
    "bishnupriya": "দাম্ফা",
    "bangla": "অহংকার",
    "hindi": "घमंड"
  },
  "kind": {
    "english": "Kind",
    "bishnupriya": "দয়াল",
    "bangla": "দয়ালু",
    "hindi": "दयालु"
  },
  "price": {
    "english": "Price",
    "bishnupriya": "দার",
    "bangla": "দাম",
    "hindi": "दाम"
  },
  "burning_tormenting_crossing_over": {
    "english": "Burning / tormenting / crossing over",
    "bishnupriya": "দাহানি",
    "bangla": "পোড়ানো / যন্ত্রণা / পার হওয়া",
    "hindi": "जलाना / सताना / पार करना"
  },
  "rod_for_piercing": {
    "english": "Rod for piercing",
    "bishnupriya": "দাহালা",
    "bangla": "ছিদ্র করার লাঠি",
    "hindi": "छेदने की छड़"
  },
  "right": {
    "english": "Right",
    "bishnupriya": "দাইন",
    "bangla": "ডান",
    "hindi": "दाहिना"
  },
  "witch": {
    "english": "Witch",
    "bishnupriya": "দাইনি",
    "bangla": "ডাইনি",
    "hindi": "डायन"
  },
  "split_pulses": {
    "english": "Split pulses",
    "bishnupriya": "দাইল",
    "bangla": "ডাল",
    "hindi": "दाल"
  },
  "call_mail_drum": {
    "english": "Call / mail / drum",
    "bishnupriya": "ডাক",
    "bangla": "ডাক / চিঠি / ঢাক",
    "hindi": "डाक / चिट्ठी / ढोल"
  },
  "dacoit_dacoity": {
    "english": "Dacoit / dacoity",
    "bishnupriya": "ডাকাত / ডাকাতি",
    "bangla": "ডাকাত / ডাকাতি",
    "hindi": "डाकू / डकैती"
  },
  "drummer": {
    "english": "Drummer",
    "bishnupriya": "ডাকুলা",
    "bangla": "ঢাকি",
    "hindi": "ढोल बजाने वाला"
  },
  "clearness_of_light": {
    "english": "Clearness of light",
    "bishnupriya": "ডাকডাক",
    "bangla": "ঝকঝকে",
    "hindi": "चमक"
  },
  "big_great": {
    "english": "Big, great",
    "bishnupriya": "ডানার",
    "bangla": "বড়ো",
    "hindi": "बड़ा"
  },
  "grandmother": {
    "english": "Grandmother",
    "bishnupriya": "ডানারিমা",
    "bangla": "দিদিমা",
    "hindi": "दादी"
  },
  "grandfather": {
    "english": "Grandfather",
    "bishnupriya": "ডানারবা",
    "bangla": "দাদু",
    "hindi": "दादा"
  },
  "stalk": {
    "english": "Stalk",
    "bishnupriya": "ডানা",
    "bangla": "ডাঁটা",
    "hindi": "डंठल"
  },
  "to_provoke_by_craft": {
    "english": "To provoke by craft",
    "bishnupriya": "ডাঙ্গা-",
    "bangla": "চালাকি করে উত্তেজিত করা",
    "hindi": "चालाकी से उकसाना"
  },
  "treachery": {
    "english": "Treachery",
    "bishnupriya": "ডাঙ্গাবাজি",
    "bangla": "প্রতারণা",
    "hindi": "धोखा"
  },
  "haughty": {
    "english": "Haughty",
    "bishnupriya": "ডাট / ডাটা",
    "bangla": "অহংকারী",
    "hindi": "घमंडी"
  },
  "handle": {
    "english": "Handle",
    "bishnupriya": "ডাটা",
    "bangla": "হাতল",
    "hindi": "हैंडल"
  },
  "over_powered": {
    "english": "Over-powered",
    "bishnupriya": "ডাট্থা",
    "bangla": "পরাজিত",
    "hindi": "हारा हुआ"
  },
  "stick": {
    "english": "Stick",
    "bishnupriya": "ডান্ডা",
    "bangla": "লাঠি",
    "hindi": "डंडा"
  },
  "to_belabour_with_stick": {
    "english": "To belabour with stick",
    "bishnupriya": "ডান্ডা-",
    "bangla": "লাঠি দিয়ে পেটা",
    "hindi": "डंडे से पीटना"
  },
  "control_punishment": {
    "english": "Control / punishment",
    "bishnupriya": "ডান্ডি",
    "bangla": "নিয়ন্ত্রণ / শাস্তি",
    "hindi": "कंट्रोल / सज़ा"
  },
  "green_coconut": {
    "english": "Green coconut",
    "bishnupriya": "ডাব",
    "bangla": "ডাব",
    "hindi": "हरा नारियल"
  },
  "to_incur_great_loss": {
    "english": "To incur great loss",
    "bishnupriya": "ডাব-",
    "bangla": "বড়ো ক্ষতি করা",
    "hindi": "भारी नुकसान होना"
  },
  "mat": {
    "english": "Mat",
    "bishnupriya": "ডাম",
    "bangla": "চাটাই",
    "hindi": "चटाई"
  },
  "tall": {
    "english": "Tall",
    "bishnupriya": "ডারা",
    "bangla": "লম্বা",
    "hindi": "लंबा"
  },
  "branch": {
    "english": "Branch",
    "bishnupriya": "ডাল",
    "bangla": "ডাল",
    "hindi": "डाल"
  },
  "to_pour_drop": {
    "english": "To pour / drop",
    "bishnupriya": "ডাল-",
    "bangla": "ঢালা",
    "hindi": "डालना"
  },
  "retaliation": {
    "english": "Retaliation",
    "bishnupriya": "ডাল-আচার",
    "bangla": "প্রতিশোধ",
    "hindi": "बदला"
  },
  "outer_bamboo_piece_wicker_tray": {
    "english": "Outer bamboo piece / wicker tray",
    "bishnupriya": "ডালা",
    "bangla": "বাঁশের খোলা / ঝুড়ি",
    "hindi": "बांस का टुकड़ा / टोकरी"
  },
  "poor": {
    "english": "Poor",
    "bishnupriya": "ডালিত / ডালিদ্র",
    "bangla": "গরিব",
    "hindi": "गरीब"
  },
  "pomegranate": {
    "english": "Pomegranate",
    "bishnupriya": "ডালিম",
    "bangla": "ডালিম",
    "hindi": "अनार"
  },
  "to_call": {
    "english": "To call",
    "bishnupriya": "ডাহ-",
    "bangla": "ডাকা",
    "hindi": "बुलाना"
  },
  "downright_complete": {
    "english": "Downright / complete",
    "bishnupriya": "ডাহা",
    "bangla": "খাঁটি",
    "hindi": "पूरा"
  },
  "wooden_hookah_pipe": {
    "english": "Wooden hookah pipe",
    "bishnupriya": "ডাহুনি",
    "bangla": "হুকোর কাঠের নল",
    "hindi": "हुक्के का लकड़ी का पाइप"
  },
  "long_tall": {
    "english": "Long, tall",
    "bishnupriya": "ডিগাল",
    "bangla": "লম্বা",
    "hindi": "लंबा"
  },
  "small_boat": {
    "english": "Small boat",
    "bishnupriya": "ডিঙ্গা",
    "bangla": "ডিঙ্গি নৌকা",
    "hindi": "छोटी नाव"
  },
  "to_jump_over": {
    "english": "To jump over",
    "bishnupriya": "ডিঙ্গা-",
    "bangla": "লাফিয়ে পার হওয়া",
    "hindi": "कूदकर पार करना"
  },
  "egg_spawn": {
    "english": "Egg / spawn",
    "bishnupriya": "ডিম",
    "bangla": "ডিম",
    "hindi": "अंडा"
  },
  "delay": {
    "english": "Delay",
    "bishnupriya": "ডিল",
    "bangla": "দেরি",
    "hindi": "देरी"
  },
  "extremely_ripe_tearful": {
    "english": "Extremely ripe / tearful",
    "bishnupriya": "ডিলডিল",
    "bangla": "পুরোপুরি পাকা / অশ্রুসিক্ত",
    "hindi": "बहुत पका / आँसुओं से भरा"
  },
  "large_vessel": {
    "english": "Large vessel",
    "bishnupriya": "ডেক",
    "bangla": "বড়ো পাত্র",
    "hindi": "बड़ा बर्तन"
  },
  "twig": {
    "english": "Twig",
    "bishnupriya": "ডেম",
    "bangla": "ডালপালা",
    "hindi": "टहनी"
  },
  "vanity": {
    "english": "Vanity",
    "bishnupriya": "ডেমাক",
    "bangla": "অহংকার",
    "hindi": "घमंड"
  },
  "branch_2": {
    "english": "Branch",
    "bishnupriya": "ডেল",
    "bangla": "ডাল",
    "hindi": "डाल"
  },
  "lotus": {
    "english": "Lotus",
    "bishnupriya": "ডেপ",
    "bangla": "পদ্ম",
    "hindi": "कमल"
  },
  "cork_blunt": {
    "english": "Cork / blunt",
    "bishnupriya": "ডুফা",
    "bangla": "কর্�� / ভোঁতা",
    "hindi": "कॉर्क / कुंद"
  },
  "to_sink_ruin": {
    "english": "To sink / ruin",
    "bishnupriya": "ডুব-",
    "bangla": "ডোবা / নষ্ট হওয়া",
    "hindi": "डूबना / बर्बाद होना"
  },
  "pigeon": {
    "english": "Pigeon",
    "bishnupriya": "ডুবি",
    "bangla": "ঘুঘু",
    "hindi": "कबूतर"
  },
  "diver": {
    "english": "Diver",
    "bishnupriya": "ডুবুরি",
    "bangla": "ডুবুরি",
    "hindi": "गोताखोर"
  },
  "to_nod_totter": {
    "english": "To nod / totter",
    "bishnupriya": "ডুল-",
    "bangla": "ডোলা",
    "hindi": "हिलना"
  },
  "hollow": {
    "english": "Hollow",
    "bishnupriya": "ডুলাই",
    "bangla": "ফাঁপা",
    "hindi": "खोखला"
  },
  "oscillation": {
    "english": "Oscillation",
    "bishnupriya": "ডুলাডুলি",
    "bangla": "দোলাচল",
    "hindi": "हिलोर"
  },
  "migratory_destitute": {
    "english": "Migratory / destitute",
    "bishnupriya": "ডেইডেইহারা",
    "bangla": "দেশান্তরী / নিঃস্ব",
    "hindi": "बेघर / निर्धन"
  },
  "flare_of_torch": {
    "english": "Flare of torch",
    "bishnupriya": "ডেউটি",
    "bangla": "মশাল",
    "hindi": "मशाल"
  },
  "fiddle": {
    "english": "Fiddle",
    "bishnupriya": "ডেউনাটিন",
    "bangla": "বেহালা",
    "hindi": "वायलिन"
  },
  "swelling": {
    "english": "Swelling",
    "bishnupriya": "ধেউ",
    "bangla": "ফোলা",
    "hindi": "सूजन"
  },
  "much_sufficient": {
    "english": "Much, sufficient",
    "bishnupriya": "ধের",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "heap": {
    "english": "Heap",
    "bishnupriya": "ধেরা / ধেরি",
    "bangla": "গাদা",
    "hindi": "ढेर"
  },
  "wave": {
    "english": "Wave",
    "bishnupriya": "ধৌ",
    "bangla": "ঢেউ",
    "hindi": "लहर"
  },
  "separate": {
    "english": "Separate",
    "bishnupriya": "তানাল / তানালপা",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "smoking_pipe": {
    "english": "Smoking pipe",
    "bishnupriya": "তানসি",
    "bangla": "হুকোর নল",
    "hindi": "हुक्के का पाइप"
  },
  "so_much": {
    "english": "So much",
    "bishnupriya": "তাতা",
    "bangla": "এত",
    "hindi": "इतना"
  },
  "strength": {
    "english": "Strength",
    "bishnupriya": "তান",
    "bangla": "শক্তি",
    "hindi": "ताकत"
  },
  "penance": {
    "english": "Penance",
    "bishnupriya": "তাপ",
    "bangla": "তপস্যা",
    "hindi": "तपस्या"
  },
  "separate_2": {
    "english": "Separate",
    "bishnupriya": "তাপ্পা",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "hot": {
    "english": "Hot",
    "bishnupriya": "তপ্ত",
    "bangla": "গরম",
    "hindi": "गर्म"
  },
  "difference_distance": {
    "english": "Difference / distance",
    "bishnupriya": "তফাত",
    "bangla": "পার্থক্য",
    "hindi": "फर्क"
  },
  "hatchet": {
    "english": "Hatchet",
    "bishnupriya": "তবাল",
    "bangla": "কুড়াল",
    "hindi": "कुल्हाड़ी"
  },
  "small_kettle_drum": {
    "english": "Small kettle drum",
    "bishnupriya": "তবালা",
    "bangla": "তবলা",
    "hindi": "तबला"
  },
  "fund": {
    "english": "Fund",
    "bishnupriya": "তহবিল",
    "bangla": "তহবিল",
    "hindi": "फंड"
  },
  "yet": {
    "english": "Yet",
    "bishnupriya": "তবু",
    "bangla": "তবু",
    "hindi": "फिर भी"
  },
  "but": {
    "english": "But",
    "bishnupriya": "তবে",
    "bangla": "কিন্তু",
    "hindi": "लेकिन"
  },
  "only_child": {
    "english": "Only child",
    "bishnupriya": "তম্বাক",
    "bangla": "একমাত্র সন্তান",
    "hindi": "इकलौता बच्चा"
  },
  "youngest_son_daughter": {
    "english": "Youngest son / daughter",
    "bishnupriya": "তম্বা / তম্বি",
    "bangla": "সবচেয়ে ছোটো ছেলে/মেয়ে",
    "hindi": "सबसे छोटा बेटा/बेटी"
  },
  "to_cross": {
    "english": "To cross",
    "bishnupriya": "তার-",
    "bangla": "পার হওয়া",
    "hindi": "पार करना"
  },
  "speed_haste": {
    "english": "Speed, haste",
    "bishnupriya": "তা'রা",
    "bangla": "তাড়াতাড়ি",
    "hindi": "जल्दी"
  },
  "hastily": {
    "english": "Hastily",
    "bishnupriya": "তা'রাতারি",
    "bangla": "তাড়াতাড়ি",
    "hindi": "जल्दी-जल्दी"
  },
  "sword": {
    "english": "Sword",
    "bishnupriya": "তারুয়াল",
    "bangla": "তলোয়ার",
    "hindi": "तलवार"
  },
  "eddy_whirlpool": {
    "english": "Eddy, whirlpool",
    "bishnupriya": "তারেই",
    "bangla": "ঘূর্ণি",
    "hindi": "भँवर"
  },
  "argument": {
    "english": "Argument",
    "bishnupriya": "তার্কার",
    "bangla": "তর্ক",
    "hindi": "बहस"
  },
  "heavy_bamboo_mat": {
    "english": "Heavy bamboo mat",
    "bishnupriya": "তার্জা",
    "bangla": "বাঁশের মাদুর",
    "hindi": "बांस की चटाई"
  },
  "bottom_mean": {
    "english": "Bottom / mean",
    "bishnupriya": "তলা",
    "bangla": "তলা / নীচ",
    "hindi": "तल / नीचा"
  },
  "salary": {
    "english": "Salary",
    "bishnupriya": "তলপ",
    "bangla": "বেতন",
    "hindi": "तनख्वाह"
  },
  "striped_lower_garment": {
    "english": "Striped lower garment",
    "bishnupriya": "তলাপুতি / তলাফুতি",
    "bangla": "ডোরাকাটা লুঙ্গি",
    "hindi": "धारीदार लुंगी"
  },
  "floor_bottom": {
    "english": "Floor / bottom",
    "bishnupriya": "তলা",
    "bangla": "মেঝে / তলা",
    "hindi": "फर्श / तल"
  },
  "bundle": {
    "english": "Bundle",
    "bishnupriya": "তলা",
    "bangla": "গোছা",
    "hindi": "गट्ठर"
  },
  "heavy_wicker_mat": {
    "english": "Heavy wicker mat",
    "bishnupriya": "তালুচা",
    "bangla": "ভারী চাটাই",
    "hindi": "भारी चटाई"
  },
  "property": {
    "english": "Property",
    "bishnupriya": "তাল্লি",
    "bangla": "সম্পত্তি",
    "hindi": "जायदाद"
  },
  "front_tuft_of_dhuti": {
    "english": "Front tuft of dhuti",
    "bishnupriya": "তাসার",
    "bangla": "ধুতির সামনের গিঁট",
    "hindi": "धोती का आगे का गाँठ"
  },
  "wooden_mallet": {
    "english": "Wooden mallet",
    "bishnupriya": "তাসু",
    "bangla": "কাঠের হাতুড়ি",
    "hindi": "लकड़ी का हथौड़ा"
  },
  "tall": {
    "english": "Tall",
    "bishnupriya": "দারা",
    "bangla": "লম্বা",
    "hindi": "लंबा"
  },
  "pomegranate": {
    "english": "Pomegranate",
    "bishnupriya": "দালিম",
    "bangla": "ডালিম",
    "hindi": "अनार"
  },
  "to_call": {
    "english": "To call",
    "bishnupriya": "দাহ-",
    "bangla": "ডাকা",
    "hindi": "बुलाना"
  },
  "call": {
    "english": "Call",
    "bishnupriya": "দাহানি",
    "bangla": "ডাক",
    "hindi": "बुलावा"
  },
  "necessity": {
    "english": "Necessity",
    "bishnupriya": "দারকার",
    "bangla": "প্রয়োজন",
    "hindi": "ज़रूरत"
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
  "a_jot_little": {
    "english": "A jot / little",
    "bishnupriya": "রেঞ্জা",
    "bangla": "একটু",
    "hindi": "जरा सा"
  },
  "connoisseur_humorous": {
    "english": "Connoisseur / humorous",
    "bishnupriya": "রসিক",
    "bangla": "রসিক / রসজ্ঞ",
    "hindi": "रसिक / हास्यप्रिय"
  },
  "face_veil": {
    "english": "Face-veil",
    "bishnupriya": "মেইরুম",
    "bangla": "মুখ ঢাকা",
    "hindi": "घूँघट"
  },
  "appearance_cross_beam": {
    "english": "Appearance / cross-beam",
    "bishnupriya": "মেইরেল",
    "bangla": "চেহারা / কড়ি",
    "hindi": "दिखावट / शहतीर"
  },
  "speed_scolding": {
    "english": "Speed / scolding",
    "bishnupriya": "মেইসা",
    "bangla": "গতি / বকুনি",
    "hindi": "रफ्तार / डाँट"
  },
  "large_gathering": {
    "english": "Large gathering",
    "bishnupriya": "মেক",
    "bangla": "বিশাল জমায়েত",
    "hindi": "भीड़"
  },
  "soft_boiled_rice": {
    "english": "Soft (boiled rice)",
    "bishnupriya": "মেকা",
    "bangla": "নরম",
    "hindi": "मुलायम"
  },
  "to_weep_showing_mouth": {
    "english": "To weep showing mouth",
    "bishnupriya": "মেকা-",
    "bangla": "মুখ দেখিয়ে কাঁদা",
    "hindi": "मुँह बनाकर रोना"
  },
  "puzzled": {
    "english": "Puzzled",
    "bishnupriya": "মেকুপ",
    "bangla": "হতবুদ্ধি",
    "hindi": "हक्का-बक्का"
  },
  "cat": {
    "english": "Cat",
    "bishnupriya": "মেকুর",
    "bangla": "বেড়াল",
    "hindi": "बिल्ली"
  },
  "old_name_of_manipur": {
    "english": "An old name of Manipur",
    "bishnupriya": "মেখলত",
    "bangla": "মণিপুরের পুরানো নাম",
    "hindi": "मणिपुर का पुराना नाम"
  },
  "soft_amiable": {
    "english": "Soft / amiable",
    "bishnupriya": "মেন",
    "bangla": "নরম / সদয়",
    "hindi": "नरम / दयालु"
  },
  "incense": {
    "english": "Incense",
    "bishnupriya": "মেনক্রুক",
    "bangla": "ধূপ",
    "hindi": "धूप"
  },
  "looking_glass": {
    "english": "Looking glass",
    "bishnupriya": "মেনসেল",
    "bangla": "আয়না",
    "hindi": "शीशा"
  },
  "blue_red_colour_magenta": {
    "english": "Blue-red colour (magenta)",
    "bishnupriya": "মেজেন্তার",
    "bangla": "মেজেন্টা",
    "hindi": "मैजेंटा"
  },
  "stye": {
    "english": "Stye",
    "bishnupriya": "মেঞ্জন",
    "bangla": "আঁচিল",
    "hindi": "गाँठ"
  },
  "menu": {
    "english": "Menu",
    "bishnupriya": "মেথেল",
    "bangla": "মেনু",
    "hindi": "मेन्यू"
  },
  "kneading": {
    "english": "Kneading",
    "bishnupriya": "মেত",
    "bangla": "মাখা",
    "hindi": "गूंधना"
  },
  "a_moment": {
    "english": "A moment",
    "bishnupriya": "মেত্তাম",
    "bangla": "এক মুহূর্ত",
    "hindi": "एक पल"
  },
  "kind_of_sweet_dish": {
    "english": "A kind of sweet dish",
    "bishnupriya": "মেত্তামা",
    "bangla": "মিষ্টি পদ",
    "hindi": "मिठाई"
  },
  "sweeper": {
    "english": "Sweeper",
    "bishnupriya": "মেথর",
    "bangla": "মেথর",
    "hindi": "मेहतर"
  },
  "mode_of_speaking": {
    "english": "Mode of speaking",
    "bishnupriya": "মেথা",
    "bangla": "কথা বলার ধরন",
    "hindi": "बोलने का ढंग"
  },
  "fenugreek": {
    "english": "Fenugreek",
    "bishnupriya": "মেথি",
    "bangla": "মেথি",
    "hindi": "मेथी"
  },
  "labour": {
    "english": "Labour",
    "bishnupriya": "মেনত",
    "bangla": "পরিশ্রম",
    "hindi": "मेहनत"
  },
  "slave": {
    "english": "Slave",
    "bishnupriya": "মেনা",
    "bangla": "দাস",
    "hindi": "गुलाम"
  },
  "horns_bent_downwards_buffalo": {
    "english": "Horns bent downwards (buffalo)",
    "bishnupriya": "মেনা",
    "bangla": "শিং নিচের দিকে",
    "hindi": "नीचे मुड़े सींग"
  },
  "shy_coward": {
    "english": "Shy / coward",
    "bishnupriya": "মেন্দা",
    "bangla": "লজ্জাশীল / ভিতু",
    "hindi": "शर्मीला / डरपोक"
  },
  "perplexed": {
    "english": "Perplexed",
    "bishnupriya": "মেমুক",
    "bangla": "বিহ্বল",
    "hindi": "हक्का-बक्का"
  },
  "centre_post_in_booth": {
    "english": "Centre-post in booth",
    "bishnupriya": "মেয়াল",
    "bangla": "মণ্ডপের মাঝের খুঁটি",
    "hindi": "मंडप का मध्य खंभा"
  },
  "face_veil_alt": {
    "english": "Face-veil",
    "bishnupriya": "মেয়ুম",
    "bangla": "মুখ ঢাকা",
    "hindi": "घूँघट"
  },
  "letter": {
    "english": "Letter",
    "bishnupriya": "মেয়েক",
    "bangla": "অক্ষর",
    "hindi": "अक्षर"
  },
  "weak": {
    "english": "Weak",
    "bishnupriya": "মেয়েন্তা",
    "bangla": "দুর্বল",
    "hindi": "कमज़ोर"
  },
  "midst_interval": {
    "english": "Midst / interval",
    "bishnupriya": "মেরাক",
    "bangla": "মাঝখানে",
    "hindi": "बीच में"
  },
  "sometimes": {
    "english": "Sometimes",
    "bishnupriya": "মেরাকে",
    "bangla": "কখনো কখনো",
    "hindi": "कभी-कभी"
  },
  "repair": {
    "english": "Repair",
    "bishnupriya": "মেরামত",
    "bangla": "মেরামত",
    "hindi": "मरम्मत"
  },
  "spark_of_fire": {
    "english": "Spark of fire",
    "bishnupriya": "মেরিক",
    "bangla": "চিঙ্গারি",
    "hindi": "चिंगारी"
  },
  "small_wicker_basket": {
    "english": "Small wicker basket",
    "bishnupriya": "মেরুক",
    "bangla": "ছোটো ঝুড়ি",
    "hindi": "छोटी टोकरी"
  },
  "foreign_country": {
    "english": "Foreign country",
    "bishnupriya": "মেরুপাক",
    "bangla": "বিদেশ",
    "hindi": "विदेश"
  },
  "smooth_oily": {
    "english": "Smooth / oily",
    "bishnupriya": "মেরমের",
    "bangla": "মসৃণ / তৈলাক্ত",
    "hindi": "चिकना / तेलयुक्त"
  },
  "sheep": {
    "english": "Sheep",
    "bishnupriya": "মেরা",
    "bangla": "ভেড়া",
    "hindi": "भेड़"
  },
  "to_open_eye": {
    "english": "To open (eye)",
    "bishnupriya": "মেল-",
    "bangla": "খোলা",
    "hindi": "खोलना"
  },
  "fair_gathering": {
    "english": "Fair / gathering",
    "bishnupriya": "মেলা",
    "bangla": "মেলা",
    "hindi": "मेला"
  },
  "to_spread_collect": {
    "english": "To spread / collect",
    "bishnupriya": "মেলা-",
    "bangla": "ছড়ানো / জমানো",
    "hindi": "फैलाना / इकट्ठा करना"
  },
  "musical_measure": {
    "english": "Musical measure",
    "bishnupriya": "মেলকুপ",
    "bangla": "তাল",
    "hindi": "ताल"
  },
  "incense_alt": {
    "english": "Incense",
    "bishnupriya": "মেল-ক্রুক",
    "bangla": "ধূপ",
    "hindi": "धूप"
  },
  "to_be_spread": {
    "english": "To be spread",
    "bishnupriya": "মেল্ত-",
    "bangla": "ছড়ানো",
    "hindi": "फैलना"
  },
  "carpenter": {
    "english": "Carpenter",
    "bishnupriya": "মেস্তারি",
    "bangla": "মিস্ত্রি",
    "hindi": "मिस्त्री"
  },
  "sugar_cane": {
    "english": "Sugar-cane",
    "bishnupriya": "মৌ",
    "bangla": "আখ",
    "hindi": "गन्ना"
  },
  "kind_of_fly": {
    "english": "A kind of fly",
    "bishnupriya": "মৌ",
    "bangla": "এক ধরনের মাছি",
    "hindi": "एक तरह की मक्खी"
  },
  "married_woman": {
    "english": "Married woman",
    "bishnupriya": "মৌ",
    "bangla": "বিবাহিতা",
    "hindi": "शादीशुदा औरत"
  },
  "satiety": {
    "english": "Satiety",
    "bishnupriya": "মৌ",
    "bangla": "তৃপ্তি",
    "hindi": "तृप्ति"
  },
  "area": {
    "english": "Area",
    "bishnupriya": "মৌজা",
    "bangla": "এলাকা",
    "hindi": "मौजा"
  },
  "newly_married_lady": {
    "english": "Newly married lady",
    "bishnupriya": "মৌনাহা",
    "bangla": "নতুন বৌ",
    "hindi": "नई दुल्हन"
  },
  "to_measure": {
    "english": "To measure",
    "bishnupriya": "মৌয়া-",
    "bangla": "মাপা",
    "hindi": "नापना"
  },
  "husband_of_mothers_younger_sister": {
    "english": "Husband of mother’s younger sister",
    "bishnupriya": "মৌয়া",
    "bangla": "মামা",
    "hindi": "मामा"
  },
  "measuring": {
    "english": "Measuring",
    "bishnupriya": "মৌয়ানি",
    "bangla": "মাপার ক্রিয়া",
    "hindi": "नापने की क्रिया"
  },
  "the_moment_when_when": {
    "english": "The moment when / when",
    "bishnupriya": "যখন",
    "bangla": "যখন",
    "hindi": "जब"
  },
  "to_serve_as_priest": {
    "english": "To serve as priest",
    "bishnupriya": "যাজ-",
    "bangla": "পূজা করা",
    "hindi": "यज्ञ करना"
  },
  "a_member_under_priest": {
    "english": "A member under priest",
    "bishnupriya": "যজমান",
    "bangla": "যজমান",
    "hindi": "यजमान"
  },
  "priest_dues": {
    "english": "Priest’s dues",
    "bishnupriya": "যজমানি",
    "bangla": "পুরোহিতের হক",
    "hindi": "पुजारी का हक"
  },
  "as_much": {
    "english": "As much",
    "bishnupriya": "যত",
    "bangla": "যত",
    "hindi": "जितना"
  },
  "care": {
    "english": "Care",
    "bishnupriya": "যতন",
    "bangla": "যত্ন",
    "hindi": "देखभाल"
  },
  "spinning_wheel": {
    "english": "Spinning wheel",
    "bishnupriya": "যন্তর",
    "bangla": "চরকা",
    "hindi": "चरखा"
  },
  "so_much": {
    "english": "So much",
    "bishnupriya": "যতি",
    "bangla": "যত",
    "hindi": "जितना"
  },
  "so_long": {
    "english": "So long",
    "bishnupriya": "যত্তাবৎ",
    "bangla": "যতক্ষণ",
    "hindi": "जब तक"
  },
  "to_go": {
    "english": "To go",
    "bishnupriya": "যা-",
    "bangla": "যাওয়া",
    "hindi": "जाना"
  },
  "to_solicit_beg": {
    "english": "To solicit / beg",
    "bishnupriya": "যাচ-",
    "bangla": "ভিক্ষা করা",
    "hindi": "माँगना"
  },
  "begging": {
    "english": "Begging",
    "bishnupriya": "যাচান",
    "bangla": "ভিক্ষা",
    "hindi": "भीख"
  },
  "repeated_begging": {
    "english": "Repeated begging",
    "bishnupriya": "যাচাযাচি",
    "bangla": "বারবার ভিক্ষা",
    "hindi": "बार-बार माँगना"
  },
  "pain_difficulty": {
    "english": "Pain / difficulty",
    "bishnupriya": "যাতনা",
    "bangla": "যন্ত্রণা",
    "hindi": "तकलीफ"
  },
  "passenger_pilgrim": {
    "english": "Passenger / pilgrim",
    "bishnupriya": "যাত্রী",
    "bangla": "যাত্রী",
    "hindi": "यात्री"
  },
  "going": {
    "english": "Going",
    "bishnupriya": "যানা",
    "bangla": "যাওয়া",
    "hindi": "जाना"
  },
  "on_the_brink_of_death": {
    "english": "On the brink of death",
    "bishnupriya": "যায়যায়",
    "bangla": "মৃত্যুর দ্বারে",
    "hindi": "मौत के मुँह में"
  },
  "arrangement": {
    "english": "Arrangement",
    "bishnupriya": "যুগত",
    "bangla": "ব্যবস্থা",
    "hindi": "इंतज़ाम"
  },
  "to_supply": {
    "english": "To supply",
    "bishnupriya": "যুগা-",
    "bangla": "সরবরাহ করা",
    "hindi": "सप्लाई करना"
  },
  "supply": {
    "english": "Supply",
    "bishnupriya": "যুগান",
    "bangla": "সরবরাহ",
    "hindi": "सप्लाई"
  },
  "pair": {
    "english": "Pair",
    "bishnupriya": "যুড়",
    "bangla": "জোড়া",
    "hindi": "जोड़ा"
  },
  "to_arrange_connect": {
    "english": "To arrange / connect",
    "bishnupriya": "যুড়-",
    "bangla": "যোড়া",
    "hindi": "जोड़ना"
  },
  "joint": {
    "english": "Joint",
    "bishnupriya": "যুড়া",
    "bangla": "জোড়",
    "hindi": "जोड़"
  },
  "who_which_that": {
    "english": "Who / which / that",
    "bishnupriya": "যে",
    "bangla": "যে",
    "hindi": "जो"
  },
  "which_what": {
    "english": "Which / what",
    "bishnupriya": "যেগা / যেতা",
    "bangla": "যেটা",
    "hindi": "जो"
  },
  "when": {
    "english": "When",
    "bishnupriya": "যেবাকা",
    "bangla": "যখন",
    "hindi": "कब"
  },
  "in_whichever_direction": {
    "english": "In whichever direction",
    "bishnupriya": "যেবেদে",
    "bangla": "যে দিকেই",
    "hindi": "जिस दिशा में भी"
  },
  "as_much_as_just_as": {
    "english": "As much as / just as",
    "bishnupriya": "যেমন",
    "bangla": "যেমন",
    "hindi": "जैसे"
  },
  "like_which_as_much": {
    "english": "Like which / as much",
    "bishnupriya": "যেসাদে",
    "bangla": "যেমন",
    "hindi": "जैसे"
  },
  "anybody_whoever": {
    "english": "Anybody / whoever",
    "bishnupriya": "যে-সে",
    "bangla": "যে-কেউ",
    "hindi": "कोई भी"
  },
  "which_one": {
    "english": "Which one",
    "bishnupriya": "যেহান",
    "bangla": "যেটা",
    "hindi": "कौन सा"
  },
  "to_cause_to_go": {
    "english": "To cause to go",
    "bishnupriya": "যৌয়া-",
    "bangla": "যাওয়ানো",
    "hindi": "भिजवाना"
  },
  "to_rear": {
    "english": "To rear",
    "bishnupriya": "যাক",
    "bangla": "পালন করা",
    "hindi": "पालना"
  },
  "nurse": {
    "english": "Nurse",
    "bishnupriya": "যাকচাকপি",
    "bangla": "আয়া",
    "hindi": "आया"
  },
  "a_kitchen_fruit_tree": {
    "english": "A kitchen fruit/tree",
    "bishnupriya": "যাঞ্চাক",
    "bangla": "এক ধরনের ফল/গাছ",
    "hindi": "एक तरह का फल/पेड़"
  },
  "poles_of_plough": {
    "english": "Poles of plough",
    "bishnupriya": "যাচ্চেই",
    "bangla": "লাঙলের খুঁটি",
    "hindi": "हल के खंभे"
  },
  "rivet_for_plough": {
    "english": "Rivet for plough",
    "bishnupriya": "যাথল",
    "bangla": "লাঙলের পেরেক",
    "hindi": "हल का कील"
  },
  "to_collect_wrap": {
    "english": "To collect / wrap",
    "bishnupriya": "যাম",
    "bangla": "জমানো / মোড়া",
    "hindi": "इकट्ठा करना / लपेटना"
  },
  "closed_round": {
    "english": "Closed & round",
    "bishnupriya": "যাম্পা",
    "bangla": "বন্ধ ও গোল",
    "hindi": "बंद और गोल"
  },
  "to_pile_up": {
    "english": "To pile up",
    "bishnupriya": "যাল",
    "bangla": "গাদা করা",
    "hindi": "ढेर करना"
  },
  "breast_chest": {
    "english": "Breast / chest",
    "bishnupriya": "যা",
    "bangla": "বুক",
    "hindi": "सीना"
  },
  "approval_acceptance": {
    "english": "Approval / acceptance",
    "bishnupriya": "যা",
    "bangla": "অনুমোদন",
    "hindi": "हाँ"
  },
  "pressure": {
    "english": "Pressure",
    "bishnupriya": "যাই",
    "bangla": "চাপ",
    "hindi": "दबाव"
  },
  "second_brother": {
    "english": "Second brother",
    "bishnupriya": "যাইমা",
    "bangla": "দ্বিতীয় ভাই",
    "hindi": "दूसरा भाई"
  },
  "saltish_harsh": {
    "english": "Saltish / harsh",
    "bishnupriya": "যাক",
    "bangla": "নোনতা / রুক্ষ",
    "hindi": "नमकीन / कड़वा"
  },
  "last_but_one_chamber_dice": {
    "english": "Last but one chamber (dice)",
    "bishnupriya": "যাক",
    "bangla": "শেষের আগের ঘর",
    "hindi": "आखिरी से एक पहले"
  },
  "post_plate": {
    "english": "Post-plate",
    "bishnupriya": "যাকনাম",
    "bangla": "পোস্ট প্লেট",
    "hindi": "पोस्ट प्लेट"
  },
  "light": {
    "english": "Light",
    "bishnupriya": "যান",
    "bangla": "আলো",
    "hindi": "रोशनी"
  },
  "back_bone_roof_pole": {
    "english": "Back-bone / roof pole",
    "bishnupriya": "যান",
    "bangla": "মেরুদণ্ড / ছাদের খুঁটি",
    "hindi": "रीढ़ / छत का खंभा"
  },
  "a_kind_of_reed": {
    "english": "A kind of reed",
    "bishnupriya": "যানকেল",
    "bangla": "এক প্রকার নলখাগড়া",
    "hindi": "एक तरह का सरकंडा"
  },
  "fifty": {
    "english": "Fifty",
    "bishnupriya": "যানখেই",
    "bangla": "পঞ্চাশ",
    "hindi": "पचास"
  },
  "split_bamboo": {
    "english": "Split bamboo",
    "bishnupriya": "যাচেত",
    "bangla": "চেরা বাঁশ",
    "hindi": "चीरा बांस"
  },
  "small_amount": {
    "english": "Small amount",
    "bishnupriya": "যাত",
    "bangla": "অল্প",
    "hindi": "थोड़ा"
  },
  "rivet_for_plough_alt": {
    "english": "Rivet for plough",
    "bishnupriya": "যাতা",
    "bangla": "লাঙলের পেরেক",
    "hindi": "हल का कील"
  },
  "arrangement_alt": {
    "english": "Arrangement",
    "bishnupriya": "যাথান",
    "bangla": "ব্যবস্থা",
    "hindi": "इंतज़ाम"
  },
  "ear_ornament": {
    "english": "Ear-ornament",
    "bishnupriya": "যাথান",
    "bangla": "কানের গহনা",
    "hindi": "कान का गहना"
  },
  "tooth_brush": {
    "english": "Tooth-brush",
    "bishnupriya": "যাথিল",
    "bangla": "দাঁতের ব্রাশ",
    "hindi": "दातून"
  },
  "one_after_another": {
    "english": "One after another",
    "bishnupriya": "যাথান-যাথান",
    "bangla": "একের পর এক",
    "hindi": "एक के बाद एक"
  },
  "head_of_fish": {
    "english": "Head of fish",
    "bishnupriya": "যাথি",
    "bangla": "মাছের মাথা",
    "hindi": "मछली का सिर"
  },
  "request": {
    "english": "Request",
    "bishnupriya": "যাদাই",
    "bangla": "অনুরোধ",
    "hindi": "गुज़ारिश"
  },
  "hesitation_to_agree": {
    "english": "Hesitation to agree",
    "bishnupriya": "যানিন-যাতা",
    "bangla": "মানতে দ্বিধা",
    "hindi": "मानने में हिचक"
  },
  "breast_tie": {
    "english": "Breast-tie",
    "bishnupriya": "যা-বেরুনি",
    "bangla": "ব্রা",
    "hindi": "ब्रा"
  },
  "many": {
    "english": "Many",
    "bishnupriya": "যাম",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "address_to_elder_brother": {
    "english": "Address to elder brother",
    "bishnupriya": "যাম্বুন",
    "bangla": "দাদা",
    "hindi": "दादा"
  },
  "widower": {
    "english": "Widower",
    "bishnupriya": "যারা",
    "bangla": "বিধবা পুরুষ",
    "hindi": "विधुर"
  },
  "prohibition": {
    "english": "Prohibition",
    "bishnupriya": "যারাক",
    "bangla": "নিষেধ",
    "hindi": "रोक"
  },
  "story": {
    "english": "Story",
    "bishnupriya": "যারি",
    "bangla": "গল্প",
    "hindi": "कहानी"
  },
  "widow": {
    "english": "Widow",
    "bishnupriya": "যারি",
    "bangla": "বিধবা",
    "hindi": "विधवा"
  },
  "story_teller": {
    "english": "Story-teller",
    "bishnupriya": "যারিলিপা",
    "bangla": "গল্পকার",
    "hindi": "कहानीकार"
  },
  "displeasure_to_beloved": {
    "english": "Displeasure to beloved",
    "bishnupriya": "যারৌপা",
    "bangla": "প্রিয়জনের প্রতি অসন্তোষ",
    "hindi": "प्रिय के प्रति नाराज़गी"
  },
  "sensitive_towards_beloved_behaviour": {
    "english": "Sensitive towards beloved’s behaviour",
    "bishnupriya": "যারৌপা",
    "bangla": "প্রিয়জনের আচরণে স্পর্শকাতর",
    "hindi": "प्रिय के व्यवहार से बहुत संवेदनशील"
  },
  "to_hang": {
    "english": "To hang",
    "bishnupriya": "যাল-",
    "bangla": "ঝোলানো",
    "hindi": "लटकाना"
  },
  "tooth_of_beasts": {
    "english": "Tooth (of beasts)",
    "bishnupriya": "যাহি",
    "bangla": "পশুর দাঁত",
    "hindi": "जानवर का दाँत"
  },
  "tooth_powder": {
    "english": "Tooth-powder",
    "bishnupriya": "যাহিদাক",
    "bangla": "দাঁতের গুঁড়ো",
    "hindi": "दंत मंजन"
  },
  "family_title": {
    "english": "Family title",
    "bishnupriya": "যুমনাক / যুমলাক",
    "bangla": "পরিবারের উপাধি",
    "hindi": "खानदानी उपाधि"
  },
  "screen": {
    "english": "Screen",
    "bishnupriya": "যুহাল",
    "bangla": "পর্দা",
    "hindi": "परदा"
  },
  "luck": {
    "english": "Luck",
    "bishnupriya": "যেই",
    "bangla": "ভাগ্য",
    "hindi": "किस्मत"
  },
  "to_roast": {
    "english": "To roast",
    "bishnupriya": "যেই-",
    "bangla": "ভাজা",
    "hindi": "भूनना"
  },
  "congested_discomfort": {
    "english": "Congested / discomfort",
    "bishnupriya": "যৈচিল",
    "bangla": "ভিড় / অস্বস্তি",
    "hindi": "भीड़ / तकलीफ"
  },
  "spacious_worry_free": {
    "english": "Spacious / worry-free",
    "bishnupriya": "যৈসান",
    "bangla": "প্রশস্ত / চিন্তামুক্ত",
    "hindi": "खुला / निश्चिंत"
  },
  "cat_like_animal_civet": {
    "english": "Cat-like animal (civet)",
    "bishnupriya": "যাক",
    "bangla": "বেজি",
    "hindi": "कस्तूरी बिल्ली"
  },
  "dry_bamboo": {
    "english": "Dry bamboo",
    "bishnupriya": "যাকান",
    "bangla": "শুকনো বাঁশ",
    "hindi": "सूखा बांस"
  },
  "painter": {
    "english": "Painter",
    "bishnupriya": "যেকপা",
    "bangla": "চিত্রকর",
    "hindi": "चित्रकार"
  },
  "malice_obstinate": {
    "english": "Malice / obstinate",
    "bishnupriya": "যেন্থি",
    "bangla": "বিদ্বেষ / জেদি",
    "hindi": "दुर्भावना / ज़िद्दी"
  },
  "enmity_envy": {
    "english": "Enmity / envy",
    "bishnupriya": "যেন্না",
    "bangla": "শত্রুতা / ঈর্ষা",
    "hindi": "दुश्मनी / जलन"
  },
  "disturbance": {
    "english": "Disturbance",
    "bishnupriya": "যেত",
    "bangla": "গোলমাল",
    "hindi": "गड़बड़"
  },
  "small_amount": {
    "english": "Small amount",
    "bishnupriya": "যাত",
    "bangla": "অল্প",
    "hindi": "थोड़ा"
  },
  "extreme_part_of_land": {
    "english": "Extreme part of land",
    "bishnupriya": "যাতোল",
    "bangla": "জমির শেষ প্রান্ত",
    "hindi": "ज़मीन का आखिरी कोना"
  },
  "mood_temper": {
    "english": "Mood / temper",
    "bishnupriya": "যাথাক",
    "bangla": "মেজাজ",
    "hindi": "मूड"
  },
  "fainted": {
    "english": "Fainted",
    "bishnupriya": "যান্থা",
    "bangla": "অজ্ঞান",
    "hindi": "बेहोश"
  },
  "greed": {
    "english": "Greed",
    "bishnupriya": "যামা",
    "bangla": "লোভ",
    "hindi": "लालच"
  },
  "kitchen": {
    "english": "Kitchen",
    "bishnupriya": "যালারসাং",
    "bangla": "রান্নাঘর",
    "hindi": "रसोई"
  },
  "courtesy": {
    "english": "Courtesy",
    "bishnupriya": "যাখাল",
    "bangla": "শিষ্টাচার",
    "hindi": "शिष्टाचार"
  },
  "peacock": {
    "english": "Peacock",
    "bishnupriya": "যান",
    "bangla": "ময়ূর",
    "hindi": "मोर"
  },
  "split_bamboo": {
    "english": "Split bamboo",
    "bishnupriya": "যাচেত",
    "bangla": "চেরা বাঁশ",
    "hindi": "चीरा बांस"
  },
  "just": {
    "english": "Just",
    "bishnupriya": "যাজিব",
    "bangla": "ন্যায়সঙ্গত",
    "hindi": "जायज़"
  },
  "little": {
    "english": "Little",
    "bishnupriya": "যাত",
    "bangla": "অল্প",
    "hindi": "थोड़ा"
  },
  "suitability": {
    "english": "Suitability",
    "bishnupriya": "যাতা(তা)",
    "bangla": "উপযুক্ততা",
    "hindi": "मुनासिब"
  },
  "breath": {
    "english": "Breath",
    "bishnupriya": "যা",
    "bangla": "শ্বাস",
    "hindi": "साँस"
  },
  "to_borrow": {
    "english": "To borrow",
    "bishnupriya": "যাত-",
    "bangla": "ধার করা",
    "hindi": "उधार लेना"
  },
  "speech": {
    "english": "Speech",
    "bishnupriya": "যাহি",
    "bangla": "কথা",
    "hindi": "बात"
  },
  "answer": {
    "english": "Answer",
    "bishnupriya": "যাহুম",
    "bangla": "উত্তর",
    "hindi": "जवाब"
  },
  "receipt": {
    "english": "Receipt",
    "bishnupriya": "রসিদ",
    "bangla": "রসিদ",
    "hindi": "रसीद"
  },
  "to_make_sound_beasts": {
    "english": "To make sound (beasts)",
    "bishnupriya": "রাহ-",
    "bangla": "গর্জন করা",
    "hindi": "दहाड़ना"
  },
  "garlic": {
    "english": "Garlic",
    "bishnupriya": "রাহান",
    "bangla": "রসুন",
    "hindi": "लहसुन"
  },
  "to_cause_to_sound_ring": {
    "english": "To cause to sound / ring",
    "bishnupriya": "রাহা-",
    "bangla": "বাজানো",
    "hindi": "बजवाना"
  },
  "resemblance_minuteness_suffix": {
    "english": "Resemblance / minuteness suffix",
    "bishnupriya": "-রান",
    "bangla": "সাদৃশ্য / ক্ষুদ্রতা প্রত্যয়",
    "hindi": "समानता / छोटापन प्रत्यय"
  },
  "tin": {
    "english": "Tin",
    "bishnupriya": "রান",
    "bangla": "টিন",
    "hindi": "टिन"
  },
  "red": {
    "english": "Red",
    "bishnupriya": "রানা",
    "bangla": "লাল",
    "hindi": "लाल"
  },
  "reddish": {
    "english": "Reddish",
    "bishnupriya": "রাঙরা / রানিরা",
    "bangla": "লালচে",
    "hindi": "लालिमा वाला"
  },
  "to_colour_exaggerate": {
    "english": "To colour / exaggerate",
    "bishnupriya": "রাঙা-",
    "bangla": "রং করা / বাড়িয়ে বলা",
    "hindi": "रंगना / बढ़ा-चढ़ाकर कहना"
  },
  "sportive_woman": {
    "english": "Sportive woman",
    "bishnupriya": "রঙ্গিনী",
    "bangla": "রঙ্গিনী",
    "hindi": "रंगीली"
  },
  "fashionable": {
    "english": "Fashionable",
    "bishnupriya": "রঙ্গিয়া",
    "bangla": "ফ্যাশনেবল",
    "hindi": "फैशनेबल"
  },
  "to_compose_think_out": {
    "english": "To compose / think out",
    "bishnupriya": "রাচ-",
    "bangla": "রচনা করা / ভাবা",
    "hindi": "रचना / सोचना"
  },
  "to_announce_circulate": {
    "english": "To announce / circulate",
    "bishnupriya": "রাতা-",
    "bangla": "ঘোষণা করা",
    "hindi": "ऐलान करना"
  },
  "gem": {
    "english": "Gem",
    "bishnupriya": "রতন",
    "bangla": "রত্ন",
    "hindi": "रत्न"
  },
  "the_smallest_weight": {
    "english": "The smallest weight",
    "bishnupriya": "রতি",
    "bangla": "রতি",
    "hindi": "रत्ती"
  },
  "obstruction": {
    "english": "Obstruction",
    "bishnupriya": "রদ্দা",
    "bangla": "বাধা",
    "hindi": "रुकावट"
  },
  "hole_defect": {
    "english": "Hole / defect",
    "bishnupriya": "রন্ধ্র",
    "bangla": "ছিদ্র / দোষ",
    "hindi": "छेद / दोष"
  },
  "export": {
    "english": "Export",
    "bishnupriya": "রপ্তানি",
    "bangla": "রপ্তানি",
    "hindi": "निर्यात"
  },
  "hair_on_body": {
    "english": "Hair on body",
    "bishnupriya": "রম",
    "bangla": "রোম",
    "hindi": "रोम"
  },
  "start": {
    "english": "Start",
    "bishnupriya": "রওনা",
    "bangla": "রওনা",
    "hindi": "रवाना"
  },
  "ball_of_sweetmeat": {
    "english": "A ball of sweetmeat",
    "bishnupriya": "রসগুল্লা",
    "bangla": "রসগোল্লা",
    "hindi": "रसगुल्ला"
  },
  "rheumatism": {
    "english": "Rheumatism",
    "bishnupriya": "রসবাত",
    "bangla": "বাত",
    "hindi": "गठिया"
  },
  "convenience": {
    "english": "Convenience",
    "bishnupriya": "রসত",
    "bangla": "সুবিধা",
    "hindi": "सुविधा"
  },
  "lowest_underworld_ruin": {
    "english": "Lowest underworld / ruin",
    "bishnupriya": "রসাতল",
    "bangla": "রসাতল",
    "hindi": "पाताल"
  },
  "to_protect_look_after": {
    "english": "To protect / look after",
    "bishnupriya": "রাহ-",
    "bangla": "রক্ষা করা",
    "hindi": "रखवाली करना"
  },
  "cow_boy_guard": {
    "english": "Cow-boy / guard",
    "bishnupriya": "রাহাল",
    "bangla": "গোরক্ষক",
    "hindi": "गोपाल"
  },
  "to_cook": {
    "english": "To cook",
    "bishnupriya": "রাধ-",
    "bangla": "রান্না করা",
    "hindi": "पकाना"
  },
  "cooking": {
    "english": "Cooking",
    "bishnupriya": "রাধা",
    "bangla": "রান্না",
    "hindi": "पकाना"
  },
  "to_cause_to_cook": {
    "english": "To cause to cook",
    "bishnupriya": "রাধুয়া-",
    "bangla": "রান্না করানো",
    "hindi": "पकवाना"
  },
  "carpenters_plane": {
    "english": "Carpenter’s plane",
    "bishnupriya": "রান্দা",
    "bangla": "রন্দা",
    "hindi": "रंदा"
  },
  "cook": {
    "english": "Cook",
    "bishnupriya": "রন্ধুনি",
    "bangla": "রাঁধুনি",
    "hindi": "रसोइया"
  },
  "very_sour": {
    "english": "Very sour",
    "bishnupriya": "রামদালা",
    "bangla": "খুব টক",
    "hindi": "बहुत खट्टा"
  },
  "medicinal_plant": {
    "english": "A medicinal plant",
    "bishnupriya": "রাম-তুলসী",
    "bangla": "রামতুলসী",
    "hindi": "राम तुलसी"
  },
  "tinsel": {
    "english": "Tinsel",
    "bishnupriya": "রাম-পাত",
    "bangla": "ঝকঝকে কাগজ",
    "hindi": "चमकदार कागज़"
  },
  "sharp_chopper": {
    "english": "Sharp chopper",
    "bishnupriya": "রাম-দা",
    "bangla": "রামদা",
    "hindi": "रामदा"
  },
  "judicial_announcement": {
    "english": "Judicial announcement",
    "bishnupriya": "রায়",
    "bangla": "রায়",
    "hindi": "फैसला"
  },
  "tenant": {
    "english": "Tenant",
    "bishnupriya": "রায়ত",
    "bangla": "প্রজা",
    "hindi": "रैयत"
  },
  "rasa_krishnas_dance": {
    "english": "Rāsa (Krishna’s dance)",
    "bishnupriya": "রাস",
    "bangla": "রাস",
    "hindi": "रास"
  },
  "path_way": {
    "english": "Path / way",
    "bishnupriya": "রাস্তা",
    "bangla": "রাস্তা",
    "hindi": "रास्ता"
  },
  "rough_harsh": {
    "english": "Rough / harsh",
    "bishnupriya": "রুক",
    "bangla": "রুক্ষ",
    "hindi": "खुरदरा"
  },
  "wood": {
    "english": "Wood",
    "bishnupriya": "রুক",
    "bangla": "কাঠ",
    "hindi": "लकड़ी"
  },
  "daily": {
    "english": "Daily",
    "bishnupriya": "রুজ",
    "bangla": "দৈনিক",
    "hindi": "रोज़"
  },
  "daily_income": {
    "english": "Daily income",
    "bishnupriya": "রুজি",
    "bangla": "দৈনিক আয়",
    "hindi": "रोज़ी"
  },
  "bread": {
    "english": "Bread",
    "bishnupriya": "রুটি",
    "bangla": "রুটি",
    "hindi": "रोटी"
  },
  "coconut": {
    "english": "Cocoanut",
    "bishnupriya": "রুপি",
    "bangla": "নারকেল",
    "hindi": "नारियल"
  },
  "handkerchief": {
    "english": "Handkerchief",
    "bishnupriya": "রুমাল",
    "bangla": "রুমাল",
    "hindi": "रुमाल"
  },
  "to_plant": {
    "english": "To plant",
    "bishnupriya": "রুয়া-",
    "bangla": "রোপণ করা",
    "hindi": "लगाना"
  },
  "anger_force": {
    "english": "Anger / force",
    "bishnupriya": "রুষ",
    "bangla": "রাগ",
    "hindi": "गुस्सा"
  },
  "to_be_angry": {
    "english": "To be angry",
    "bishnupriya": "রুষ-",
    "bangla": "রাগ করা",
    "hindi": "गुस्सा होना"
  },
  "dry_tasteless": {
    "english": "Dry / tasteless",
    "bishnupriya": "রুহা",
    "bangla": "শুকনো / বিস্বাদ",
    "hindi": "सूखा / फीका"
  },
  "conventional": {
    "english": "Conventional",
    "bishnupriya": "রুহি",
    "bangla": "প্রথাগত",
    "hindi": "रिवायती"
  },
  "silver_rupee": {
    "english": "Silver / rupee",
    "bishnupriya": "রুপা",
    "bangla": "রুপো / টাকা",
    "hindi": "चाँदी / रुपया"
  },
  "silvery": {
    "english": "Silvery",
    "bishnupriya": "রোপালি",
    "bangla": "রুপোলি",
    "hindi": "चाँदी जैसा"
  },
  "a_little": {
    "english": "A little",
    "bishnupriya": "রেখ",
    "bangla": "একটু",
    "hindi": "थोड़ा"
  },
  "looking_angrily": {
    "english": "Looking angrily",
    "bishnupriya": "রেনরেন",
    "bangla": "রাগী দৃষ্টি",
    "hindi": "गुस्से से देखना"
  },
  "enmity": {
    "english": "Enmity",
    "bishnupriya": "রেষারেষি",
    "bangla": "শত্রুতা",
    "hindi": "दुश्मनी"
  },
  "escape": {
    "english": "Escape",
    "bishnupriya": "রেহাই",
    "bangla": "ছাড়",
    "hindi": "छूट"
  },
  "instrument_for_sharpening": {
    "english": "Instrument for sharpening",
    "bishnupriya": "রেত",
    "bangla": "রেতি",
    "hindi": "रेती"
  },
  "hole_defect": {
    "english": "Hole / defect",
    "bishnupriya": "রেন্ধ্র",
    "bangla": "ছিদ্র",
    "hindi": "छेद"
  },
  "greatness_multitude_suffix": {
    "english": "Greatness / multitude suffix",
    "bishnupriya": "-রেল",
    "bangla": "মহত্ত্ব / বহুত্ব প্রত্যয়",
    "hindi": "बड़ा / बहुत प्रत्यय"
  },
  "instrumental_case_ending_1": {
    "english": "Instrumental case ending",
    "bishnupriya": "-রেলা",
    "bangla": "করণ কারকে",
    "hindi": "से (के द्वारा)"
  },
  "instrumental_case_ending_2": {
    "english": "Instrumental case ending",
    "bishnupriya": "-লা",
    "bangla": "করণ কারকে",
    "hindi": "से (के द्वारा)"
  },
  "to_buy_take": {
    "english": "To buy / take",
    "bishnupriya": "লা-",
    "bangla": "কেনা / নেওয়া",
    "hindi": "लेना / खरीदना"
  },
  "to_finish": {
    "english": "To finish",
    "bishnupriya": "লৈ",
    "bangla": "শেষ করা",
    "hindi": "खत्म करना"
  },
  "commotion": {
    "english": "Commotion",
    "bishnupriya": "লৈলাত",
    "bangla": "হৈচৈ",
    "hindi": "हंगामा"
  },
  "gourd": {
    "english": "Gourd",
    "bishnupriya": "লাউ",
    "bangla": "লাউ",
    "hindi": "लौकी"
  },
  "hilly_brook": {
    "english": "Hilly brook",
    "bishnupriya": "লক",
    "bangla": "পাহাড়ি ঝরনা",
    "hindi": "पहाड़ी नाला"
  },
  "cough_influenza": {
    "english": "Cough / influenza",
    "bishnupriya": "লাক",
    "bangla": "কাশি",
    "hindi": "खाँसी"
  },
  "to_pick_up": {
    "english": "To pick up",
    "bishnupriya": "লাকার-",
    "bangla": "কুড়িয়ে নেওয়া",
    "hindi": "उठाना"
  },
  "family": {
    "english": "Family",
    "bishnupriya": "লাকেই",
    "bangla": "পরিবার",
    "hindi": "परिवार"
  },
  "dale": {
    "english": "Dale",
    "bishnupriya": "লাক্ষা",
    "bangla": "উপত্যকা",
    "hindi": "घाटी"
  },
  "area": {
    "english": "Area",
    "bishnupriya": "লাক্তার",
    "bangla": "এলাকা",
    "hindi": "इलाका"
  },
  "nail": {
    "english": "Nail",
    "bishnupriya": "লাকপি",
    "bangla": "পেরেক",
    "hindi": "कील"
  },
  "attendant_accompaniment": {
    "english": "Attendant / accompaniment",
    "bishnupriya": "লাগ",
    "bangla": "সঙ্গী / সাথ",
    "hindi": "साथी / साथ"
  },
  "quickly": {
    "english": "Quickly",
    "bishnupriya": "লাগালাগ",
    "bangla": "তাড়াতাড়ি",
    "hindi": "जल्दी"
  },
  "pole_for_steering": {
    "english": "Pole for steering",
    "bishnupriya": "লাগি",
    "bangla": "নৌকোর হাল",
    "hindi": "नाव का चप्पू"
  },
  "with": {
    "english": "With",
    "bishnupriya": "লাগে",
    "bangla": "সাথে",
    "hindi": "के साथ"
  },
  "cloves": {
    "english": "Cloves",
    "bishnupriya": "লন",
    "bangla": "লবঙ্গ",
    "hindi": "लौंग"
  },
  "a_long_spear": {
    "english": "A long spear",
    "bishnupriya": "লন",
    "bangla": "বল্লম",
    "hindi": "भाला"
  },
  "trailor": {
    "english": "Trailor",
    "bishnupriya": "লনখাল",
    "bangla": "ট্রলার",
    "hindi": "ट्रॉलर"
  },
  "anchor": {
    "english": "Anchor",
    "bishnupriya": "লাঙ্গর",
    "bangla": "নোঙর",
    "hindi": "लंगर"
  },
  "whirl_wind": {
    "english": "Whirl-wind",
    "bishnupriya": "লনলৈ",
    "bangla": "ঘূর্ণিঝড়",
    "hindi": "बवंडर"
  },
  "to_dangle": {
    "english": "To dangle",
    "bishnupriya": "লাত্ক-",
    "bangla": "ঝোলা",
    "hindi": "लटकना"
  },
  "topsy_turvy": {
    "english": "Topsy-turvy",
    "bishnupriya": "লান্দা-ভান্দা",
    "bangla": "উল্টো-পাল্টা",
    "hindi": "उल्टा-पुल्टा"
  },
  "to_conceal": {
    "english": "To conceal",
    "bishnupriya": "লাত-",
    "bangla": "লুকানো",
    "hindi": "छिपाना"
  },
  "creeper_kidney_bean": {
    "english": "Creeper / kidney bean",
    "bishnupriya": "লতা",
    "bangla": "লতা / সীম",
    "hindi": "बेल / सेम"
  },
  "secretly": {
    "english": "Secretly",
    "bishnupriya": "লাতে-লাতে",
    "bangla": "গোপনে",
    "hindi": "चुपके से"
  },
  "buying": {
    "english": "Buying",
    "bishnupriya": "লানা",
    "bangla": "কেনা",
    "hindi": "खरीदना"
  },
  "handful": {
    "english": "Handful",
    "bishnupriya": "লাপ",
    "bangla": "মুঠো",
    "hindi": "मुट्ठी"
  },
  "field": {
    "english": "Field",
    "bishnupriya": "লাপুক",
    "bangla": "মাঠ",
    "hindi": "खेत"
  },
  "to_finish_verb": {
    "english": "To finish",
    "bishnupriya": "লাম",
    "bangla": "শেষ করা",
    "hindi": "खत्म करना"
  },
  "bought": {
    "english": "Bought",
    "bishnupriya": "লাওয়া",
    "bangla": "কেনা",
    "hindi": "खरीदा हुआ"
  },
  "to_cause_to_buy": {
    "english": "To cause to buy",
    "bishnupriya": "লাওয়া-",
    "bangla": "কিনিয়ে দেওয়া",
    "hindi": "दिलवाना"
  },
  "to_move_about": {
    "english": "To move about",
    "bishnupriya": "লার-",
    "bangla": "ঘুরে বেড়ানো",
    "hindi": "घूमना"
  },
  "prohibition_of_ploughing": {
    "english": "Prohibition of ploughing",
    "bishnupriya": "লারা",
    "bangla": "চাষ নিষেধ",
    "hindi": "हल चलाने पर रोक"
  },
  "to_shake": {
    "english": "To shake",
    "bishnupriya": "লারা-",
    "bangla": "নাড়ানো",
    "hindi": "हिलाना"
  },
  "bobbin": {
    "english": "Bobbin",
    "bishnupriya": "লারি",
    "bangla": "ববিন",
    "hindi": "बोबिन"
  },
  "fight": {
    "english": "Fight",
    "bishnupriya": "লারাই",
    "bangla": "লড়াই",
    "hindi": "लड़ाई"
  },
  "of_the_same_age": {
    "english": "Of the same age",
    "bishnupriya": "লাল",
    "bangla": "সমবয়সী",
    "hindi": "हमउम्र"
  },
  "a_kind_of_reed": {
    "english": "A kind of reed",
    "bishnupriya": "লাল",
    "bangla": "নলখাগড়া",
    "hindi": "सरकंडा"
  },
  "embroidery": {
    "english": "Embroidery",
    "bishnupriya": "লাল",
    "bangla": "সেলাই",
    "hindi": "कढ़ाई"
  },
  "to_boil": {
    "english": "To boil",
    "bishnupriya": "লাল-",
    "bangla": "সিদ্ধ করা",
    "hindi": "उबालना"
  },
  "urine": {
    "english": "Urine",
    "bishnupriya": "লাহি",
    "bangla": "মূত্র",
    "hindi": "पेशाब"
  },
  "almost_suffix": {
    "english": "Almost suffix",
    "bishnupriya": "-লা",
    "bangla": "প্রায়",
    "hindi": "लगभग"
  },
  "swimming_game": {
    "english": "Swimming game",
    "bishnupriya": "লাত",
    "bangla": "সাঁতারের খেলা",
    "hindi": "तैराकी का खेल"
  },
  "unworthy": {
    "english": "Unworthy",
    "bishnupriya": "লৈক",
    "bangla": "অযোগ্য",
    "hindi": "लायक नहीं"
  },
  "wrestling": {
    "english": "Wrestling",
    "bishnupriya": "লাকতি",
    "bangla": "কুস্তি",
    "hindi": "कुश्ती"
  },
  "hockey_ball": {
    "english": "Hockey ball",
    "bishnupriya": "লাকুটি",
    "bangla": "হকির বল",
    "hindi": "हॉकी की गेंद"
  },
  "guess": {
    "english": "Guess",
    "bishnupriya": "লাক্কা",
    "bangla": "আন্দাজ",
    "hindi": "अंदाज़ा"
  },
  "to_ignore": {
    "english": "To ignore",
    "bishnupriya": "লাকচা",
    "bangla": "অগ্রাহ্য করা",
    "hindi": "नज़रअंदाज़ करना"
  },
  "hockey_stick": {
    "english": "Hockey-stick",
    "bishnupriya": "লাকদান",
    "bangla": "হকি স্টিক",
    "hindi": "हॉकी स्टिक"
  },
  "nature": {
    "english": "Nature",
    "bishnupriya": "লাক্তা",
    "bangla": "স্বভাব",
    "hindi": "स्वभाव"
  },
  "area": {
    "english": "Area",
    "bishnupriya": "লাক্তি",
    "bangla": "এলাকা",
    "hindi": "इलाका"
  },
  "joining_pieces_of_cloth": {
    "english": "Joining pieces of cloth",
    "bishnupriya": "লাক-তি / লাক-তেই",
    "bangla": "কাপড় জোড়া",
    "hindi": "कपड़ा जोड़ना"
  },
  "nursing_suffering": {
    "english": "Nursing / suffering",
    "bishnupriya": "লাকনা",
    "bangla": "সেবা / কষ্ট",
    "hindi": "सेवा / तकलीफ"
  },
  "lac_lakh": {
    "english": "Lac / lakh",
    "bishnupriya": "লাখ",
    "bangla": "লক্ষ",
    "hindi": "लाख"
  },
  "contact_touch": {
    "english": "Contact / touch",
    "bishnupriya": "লাগ",
    "bangla": "স্পর্শ",
    "hindi": "स्पर्श"
  },
  "to_be_attached_quarrel": {
    "english": "To be attached / quarrel",
    "bishnupriya": "লাগ-",
    "bangla": "লাগা / ঝগড়া",
    "hindi": "लगना / झगड़ना"
  },
  "persisting_continuous_work": {
    "english": "Persisting / continuous work",
    "bishnupriya": " লাগান্তি",
    "bangla": "লেগে থাকা",
    "hindi": "चिपके रहना"
  },
  "to_connect": {
    "english": "To connect",
    "bishnupriya": "লাগা-",
    "bangla": "জোড়া",
    "hindi": "जोड़ना"
  },
  "rein": {
    "english": "Rein",
    "bishnupriya": "লাগাম",
    "bangla": "লাগাম",
    "hindi": "लगाम"
  },
  "in_close_contact_quarrelling": {
    "english": "In close contact / quarrelling",
    "bishnupriya": "লাগালাগি",
    "bangla": "ঝগড়া / কাছাকাছি",
    "hindi": "लड़ाई / पास-पास"
  },
  "colour": {
    "english": "Colour",
    "bishnupriya": "লান",
    "bangla": "রং",
    "hindi": "रंग"
  },
  "perplexed": {
    "english": "Perplexed",
    "bishnupriya": "লান",
    "bangla": "বিহ্বল",
    "hindi": "हक्का-बक्का"
  },
  "uncontrollable": {
    "english": "Uncontrollable",
    "bishnupriya": "লান",
    "bangla": "অবাধ্য",
    "hindi": "बेकाबू"
  },
  "arrangement": {
    "english": "Arrangement",
    "bishnupriya": "লান",
    "bangla": "ব্যবস্থা",
    "hindi": "व्यवस्था"
  },
  "provocation": {
    "english": "Provocation",
    "bishnupriya": "লান",
    "bangla": "উসকানি",
    "hindi": "उकसावा"
  },
  "flirting": {
    "english": "Flirting",
    "bishnupriya": "লান",
    "bangla": "ফ্লার্ট",
    "hindi": "फ्लर्ट"
  },
  "vacant_open": {
    "english": "Vacant / open",
    "bishnupriya": "লানাতা",
    "bangla": "খালি",
    "hindi": "खाली"
  },
  "to_provoke": {
    "english": "To provoke",
    "bishnupriya": "লানারা-",
    "bangla": "উত্তেজিত করা",
    "hindi": "भड़काना"
  },
  "plain_lower_dress_women": {
    "english": "Plain lower dress (women)",
    "bishnupriya": "লানাউ",
    "bangla": "ফণেক",
    "hindi": "फणेक"
  },
  "goblin_long_boil": {
    "english": "Goblin / long boil",
    "bishnupriya": "লানকাপ",
    "bangla": "লম্বা ভূত / লম্বা ফোড়া",
    "hindi": "लंबा भूत / लंबा फोड़ा"
  },
  "long_cloth": {
    "english": "Long cloth",
    "bishnupriya": "লানখালাত",
    "bangla": "লম্বা কাপড়",
    "hindi": "लंबा कपड़ा"
  },
  "plough": {
    "english": "Plough",
    "bishnupriya": "লাঙ্গালিয়া",
    "bangla": "লাঙল",
    "hindi": "हल"
  },
  "to_flirt_provoke": {
    "english": "To flirt / provoke",
    "bishnupriya": "লাঙ্গা-",
    "bangla": "ফ্লার্ট / উত্তেজিত করা",
    "hindi": "फ्लर्ट / उकसाना"
  },
  "flirting_woman": {
    "english": "Flirting woman",
    "bishnupriya": "লাঙ্গুনি",
    "bangla": "ফ্লার্ট করা মেয়ে",
    "hindi": "फ्लर्ट करने वाली औरत"
  },
  "shuttle": {
    "english": "Shuttle",
    "bishnupriya": "লানচাক",
    "bangla": "তাঁতের মাকু",
    "hindi": "शटल"
  },
  "a_kind_of_reed": {
    "english": "A kind of reed",
    "bishnupriya": "লানচেই",
    "bangla": "নলখাগড়া",
    "hindi": "सरकंडा"
  },
  "vulture": {
    "english": "Vulture",
    "bishnupriya": "লান্তিয়া",
    "bangla": "শকুন",
    "hindi": "गिद्ध"
  },
  "small_bamboo_pipe_bobbin": {
    "english": "Small bamboo pipe / bobbin",
    "bishnupriya": "লান্তুম",
    "bangla": "ছোটো বাঁশের নল / ববিন",
    "hindi": "छोटी बांस की नली / बोबिन"
  },
  "a_medicinal_plant": {
    "english": "A medicinal plant",
    "bishnupriya": "লান্থারেই",
    "bangla": "ঔষধি গাছ",
    "hindi": "औषधीय पौधा"
  },
  "calamity": {
    "english": "Calamity",
    "bishnupriya": "লান্না",
    "bangla": "বিপদ",
    "hindi": "विपत्ति"
  },
  "meadow": {
    "english": "Meadow",
    "bishnupriya": "লানপাক",
    "bangla": "তৃণভূমি",
    "hindi": "घास का मैदान"
  },
  "dry_season": {
    "english": "Dry season",
    "bishnupriya": "লানপাল",
    "bangla": "শুষ্ক মৌসুম",
    "hindi": "सूखा मौसम"
  },
  "coarse_cloth": {
    "english": "Coarse cloth",
    "bishnupriya": "লানফৈ",
    "bangla": "মোটা কাপড়",
    "hindi": "मोटा कपड़ा"
  },
  "sunday": {
    "english": "Sunday",
    "bishnupriya": "লানমাইচিন",
    "bangla": "রবিবার",
    "hindi": "इतवार"
  },
  "daringly_flirting_women": {
    "english": "Daringly flirting (women)",
    "bishnupriya": "লান-মারানি",
    "bangla": "সাহসী ফ্লার্ট",
    "hindi": "साहसी फ्लर्ट करने वाली"
  },
  "spear_like_weapon": {
    "english": "Spear-like weapon",
    "bishnupriya": "লানসাই",
    "bangla": "বর্শা",
    "hindi": "भाला"
  },
  "small_bundle_of_thread": {
    "english": "Small bundle of thread",
    "bishnupriya": "লানসা",
    "bangla": "সুতোর ছোটো গোছা",
    "hindi": "धागे का छोटा गट्ठर"
  },
  "piece_of_plantain_leaf": {
    "english": "Piece of plantain leaf",
    "bishnupriya": "লাচেত",
    "bangla": "কলাপাতার টুকরো",
    "hindi": "केले के पत्ते का टुकड़ा"
  },
  "shame": {
    "english": "Shame",
    "bishnupriya": "লাজ",
    "bangla": "লজ্জা",
    "hindi": "शर्म"
  },
  "shameless": {
    "english": "Shameless",
    "bishnupriya": "লাজনেই",
    "bangla": "লজ্জাহীন",
    "hindi": "बेशर्म"
  },
  "shy": {
    "english": "Shy",
    "bishnupriya": "লাজুয়া",
    "bangla": "লাজুক",
    "hindi": "शर्मीला"
  },
  "totality_vast": {
    "english": "Totality / vast",
    "bishnupriya": "লাত",
    "bangla": "সম্পূর্ণতা / বিশাল",
    "hindi": "कुल / विशाल"
  },
  "short_statured": {
    "english": "Short-statured",
    "bishnupriya": "লাতিয়া",
    "bangla": "খাটো",
    "hindi": "बौना"
  },
  "stick": {
    "english": "Stick",
    "bishnupriya": "লাঠি",
    "bangla": "লাঠি",
    "hindi": "लाठी"
  },
  "to_gain_much": {
    "english": "To gain much",
    "bishnupriya": "লাদ্দা-",
    "bangla": "অনেক লাভ করা",
    "hindi": "बहुत कमाना"
  },
  "to_worship_offer_to_deity": {
    "english": "To worship / offer to deity",
    "bishnupriya": "লাত-",
    "bangla": "পূজা করা",
    "hindi": "पूजा करना"
  },
  "outer_end_of_plantain_leaf": {
    "english": "Outer end of plantain leaf",
    "bishnupriya": "লাতল",
    "bangla": "কলাপাতার বাইরের দিক",
    "hindi": "केले के पत्ते का बाहरी हिस्सा"
  },
  "vagabond": {
    "english": "Vagabond",
    "bishnupriya": "লাতিয়া",
    "bangla": "আশ্রয়হীন",
    "hindi": "आवारा"
  },
  "jump": {
    "english": "Jump",
    "bishnupriya": "লাফ",
    "bangla": "লাফ",
    "hindi": "छलांग"
  },
  "to_jump": {
    "english": "To jump",
    "bishnupriya": "লাফা-",
    "bangla": "লাফানো",
    "hindi": "उछलना"
  },
  "he_buffalo": {
    "english": "He-buffalo",
    "bishnupriya": "লাবা",
    "bangla": "মহিষ",
    "hindi": "भैंसा"
  },
  "distant": {
    "english": "Distant",
    "bishnupriya": "লাব্বা",
    "bangla": "দূর",
    "hindi": "दूर"
  },
  "curry": {
    "english": "Curry",
    "bishnupriya": "লাবড়া",
    "bangla": "তরকারি",
    "hindi": "तरकारी"
  },
  "to_get_down": {
    "english": "To get down",
    "bishnupriya": "লাম-",
    "bangla": "নামা",
    "hindi": "उतरना"
  },
  "lower_place_downstream": {
    "english": "Lower place / downstream",
    "bishnupriya": "লামা",
    "bangla": "নিচের জায়গা / নিম্নপ্রবাহ",
    "hindi": "नीचा इलाका / नीचे की धारा"
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
  "skin": {
    "english": "Skin",
    "bishnupriya": "চাম",
    "bangla": "চাম",
    "hindi": "चमड़ा"
  },
  "satisfied": {
    "english": "Satisfied",
    "bishnupriya": "চা'ম",
    "bangla": "তৃপ্ত",
    "hindi": "संतुष्ट"
  },
  "insipid": {
    "english": "Insipid",
    "bishnupriya": "চাম / চাম্পা",
    "bangla": "ফিকে",
    "hindi": "फीका"
  },
  "spoon": {
    "english": "Spoon",
    "bishnupriya": "চামচ",
    "bangla": "চামচ",
    "hindi": "चम्मच"
  },
  "108": {
    "english": "108",
    "bishnupriya": "চামানিপাল",
    "bangla": "একশো আট",
    "hindi": "एक सौ आठ"
  },
  "cobbler": {
    "english": "Cobbler",
    "bishnupriya": "চামার",
    "bangla": "চামার",
    "hindi": "मोची"
  },
  "floating_reed": {
    "english": "Floating reed",
    "bishnupriya": "চামি",
    "bangla": "ভাসমান নলখাগড়া",
    "hindi": "तैरता सरकंडा"
  },
  "vampire": {
    "english": "Vampire",
    "bishnupriya": "চামচিকা",
    "bangla": "ভ্যাম্পায়ার",
    "hindi": "पिशाच"
  },
  "pale": {
    "english": "Pale",
    "bishnupriya": "চামদাকা / চাম্পাকা / চাম্ফালা / চাম্ফুত",
    "bangla": "ফ্যাকাশে",
    "hindi": "पीला"
  },
  "champaka_flower": {
    "english": "Champaka flower",
    "bishnupriya": "চাম্পা",
    "bangla": "চাঁপা ফুল",
    "hindi": "चम्पा फूल"
  },
  "dish_without_salt_spices": {
    "english": "Dish without salt & spices",
    "bishnupriya": "চাম্ফুত",
    "bangla": "নির্লবণ তরকারি",
    "hindi": "बिना नमक-मिर्च का व्यंजन"
  },
  "leather": {
    "english": "Leather",
    "bishnupriya": "চামড়া",
    "bangla": "চামড়া",
    "hindi": "चमड़ा"
  },
  "net_like_roof_for_creepers": {
    "english": "Net-like roof for creepers",
    "bishnupriya": "চার",
    "bangla": "লতার ছাউনি",
    "hindi": "लता के लिए जालीदार छत"
  },
  "broken_pieces_of_pitcher": {
    "english": "Broken pieces of pitcher",
    "bishnupriya": "চা'র",
    "bangla": "ভাঙা ঘটির টুকরো",
    "hindi": "टूटे घड़े के टुकड़े"
  },
  "ear_of_paddy": {
    "english": "Ear of paddy",
    "bishnupriya": "চারণ",
    "bangla": "ধানের শীষ",
    "hindi": "धान का बाल"
  },
  "meal": {
    "english": "Meal",
    "bishnupriya": "চারা",
    "bangla": "খাবার",
    "hindi": "खाना"
  },
  "seedling": {
    "english": "Seedling",
    "bishnupriya": "চারা",
    "bangla": "চারা",
    "hindi": "पौधा"
  },
  "giving_birth": {
    "english": "Giving birth",
    "bishnupriya": "চারণ",
    "bangla": "প্রসব",
    "hindi": "प्रसव"
  },
  "multitude": {
    "english": "Multitude",
    "bishnupriya": "চারাপ",
    "bangla": "প্রচুর",
    "hindi": "ढेर"
  },
  "hunger": {
    "english": "Hunger",
    "bishnupriya": "চারাম / চারামনা",
    "bangla": "ক্ষুধা",
    "hindi": "भूख"
  },
  "four": {
    "english": "Four",
    "bishnupriya": "চারি",
    "bangla": "চার",
    "hindi": "चार"
  },
  "lean_thin_like_potsherd": {
    "english": "Lean & thin (like potsherd)",
    "bishnupriya": "চারুয়া",
    "bangla": "শুকন্য-পাতলা",
    "hindi": "बहुत दुबला-पतला"
  },
  "chandal_caste": {
    "english": "Chandal (caste)",
    "bishnupriya": "চারাল",
    "bangla": "চণ্ডাল",
    "hindi": "चांडाल"
  },
  "roof": {
    "english": "Roof",
    "bishnupriya": "চালা",
    "bangla": "ছাউনি",
    "hindi": "छत"
  },
  "manner_tricks_condition": {
    "english": "Manner / tricks / condition",
    "bishnupriya": "চালা",
    "bangla": "চাল / কায়দা / অবস্থা",
    "hindi": "चाल / तरीका / हालत"
  },
  "favour": {
    "english": "Favour",
    "bishnupriya": "চাল",
    "bangla": "অনুগ্রহ",
    "hindi": "कृपा"
  },
  "manager_leader": {
    "english": "Manager / leader",
    "bishnupriya": "চালাকদার",
    "bangla": "ম্যানেজার",
    "hindi": "प्रबंधक"
  },
  "strainer": {
    "english": "Strainer",
    "bishnupriya": "চালন / চালানি",
    "bangla": "ছাঁকনি",
    "hindi": "छलनी"
  },
  "clever": {
    "english": "Clever",
    "bishnupriya": "চালাক",
    "bangla": "চতুর",
    "hindi": "चालाक"
  },
  "cleverness": {
    "english": "Cleverness",
    "bishnupriya": "চালাকি",
    "bangla": "চতুরতা",
    "hindi": "चालाकी"
  },
  "transport": {
    "english": "Transport",
    "bishnupriya": "চালান",
    "bangla": "পরিবহন",
    "hindi": "ढुलाई"
  },
  "in_vogue": {
    "english": "In vogue",
    "bishnupriya": "চালু",
    "bangla": "চলতি",
    "hindi": "प्रचलित"
  },
  "tea": {
    "english": "Tea",
    "bishnupriya": "চাহা",
    "bangla": "চা",
    "hindi": "चाय"
  },
  "tillage": {
    "english": "Tillage",
    "bishnupriya": "চাহা",
    "bangla": "চাষ",
    "hindi": "खेती"
  },
  "demand": {
    "english": "Demand",
    "bishnupriya": "চাহিদা",
    "bangla": "চাহিদা",
    "hindi": "माँग"
  },
  "fie_exclamation_of_disgust": {
    "english": "Fie (exclamation of disgust)",
    "bishnupriya": "চি",
    "bangla": "ছিঃ",
    "hindi": "छिः"
  },
  "end_extremity": {
    "english": "End, extremity",
    "bishnupriya": "চি",
    "bangla": "শেষ",
    "hindi": "अंत"
  },
  "heap": {
    "english": "Heap",
    "bishnupriya": "চি",
    "bangla": "গাদা",
    "hindi": "ढेर"
  },
  "lean_thin": {
    "english": "Lean & thin",
    "bishnupriya": "চি",
    "bangla": "শুকনো-পাতলা",
    "hindi": "दुबला-पतला"
  },
  "quiet": {
    "english": "Quiet",
    "bishnupriya": "চিক",
    "bangla": "চুপ",
    "hindi": "शांत"
  },
  "fine": {
    "english": "Fine",
    "bishnupriya": "চিকন",
    "bangla": "সরু",
    "hindi": "पतला"
  },
  "fine_clay": {
    "english": "Fine clay",
    "bishnupriya": "চিকন / চিকার",
    "bangla": "সরু মাটি",
    "hindi": "बारीक मिट्टी"
  },
  "to_shout": {
    "english": "To shout",
    "bishnupriya": "চিকাকা-",
    "bangla": "চেঁচানো",
    "hindi": "चिल्लाना"
  },
  "loud_cry": {
    "english": "Loud cry",
    "bishnupriya": "চিকারি",
    "bangla": "চিৎকার",
    "hindi": "चीख"
  },
  "tuft_of_hair_on_head": {
    "english": "Tuft of hair on head",
    "bishnupriya": "চিক্কা",
    "bangla": "শিখা",
    "hindi": "चोटी"
  },
  "bat": {
    "english": "Bat",
    "bishnupriya": "চিকফেই",
    "bangla": "বাদুড়",
    "hindi": "चमगादड़"
  },
  "pole_used_by_boatman": {
    "english": "Pole used by boatman",
    "bishnupriya": "চিঞাক",
    "bangla": "নৌকোর খুঁটা",
    "hindi": "नाव की छड़ी"
  },
  "shroud": {
    "english": "Shroud",
    "bishnupriya": "চিংখুমি / চিংখুম্বি",
    "bangla": "কাফন",
    "hindi": "कफन"
  },
  "north_east": {
    "english": "North-east",
    "bishnupriya": "চিংখেই",
    "bangla": "উত্তর-পূর্ব",
    "hindi": "उत्तर-पूर्व"
  },
  "water_spring": {
    "english": "Water spring",
    "bishnupriya": "চিনচুম",
    "bangla": "ঝরনা",
    "hindi": "सोता"
  },
  "valley": {
    "english": "Valley",
    "bishnupriya": "চিন্তুম",
    "bangla": "উপত্যকা",
    "hindi": "घाटी"
  },
  "snail": {
    "english": "Snail",
    "bishnupriya": "চিন্থারি",
    "bangla": "শামুক",
    "hindi": "घोंघा"
  },
  "foot_of_hill": {
    "english": "Foot of hill",
    "bishnupriya": "চিন্থা",
    "bangla": "পাহাড়ের পাদদেশ",
    "hindi": "पहाड़ की तलहटी"
  },
  "one_who_uses_vulgar_words": {
    "english": "One who uses vulgar words",
    "bishnupriya": "চিন্থি / চিন্থিপা",
    "bangla": "অশ্লীল কথা বলা লোক",
    "hindi": "गंदी गाली देने वाला"
  },
  "hesitation": {
    "english": "Hesitation",
    "bishnupriya": "চিন্নাচিন্নি",
    "bangla": "দ্বিধা",
    "hindi": "हिचकिचाहट"
  },
  "very_fast": {
    "english": "Very fast",
    "bishnupriya": "চিনলেই",
    "bangla": "খুব দ্রুত",
    "hindi": "बहुत तेज़"
  },
  "thing": {
    "english": "Thing",
    "bishnupriya": "চিজ",
    "bangla": "জিনিস",
    "hindi": "चीज़"
  },
  "stale_food": {
    "english": "Stale food",
    "bishnupriya": "চিনচাক",
    "bangla": "বাসি খাবার",
    "hindi": "बासी खाना"
  },
  "mountain_range_spring": {
    "english": "Mountain range / spring",
    "bishnupriya": "চিনচান",
    "bangla": "পর্বতশ্রেণি / ঝরনা",
    "hindi": "पर्वत श्रृंखला / सोता"
  },
  "hide_seek": {
    "english": "Hide & seek",
    "bishnupriya": "চিনচিকি",
    "bangla": "লুকোচুরি",
    "hindi": "लुका-छिपी"
  },
  "dish_of_green_vegetables": {
    "english": "Dish of green vegetables",
    "bishnupriya": "চিনচু",
    "bangla": "শাকের তরকারি",
    "hindi": "साग का व्यंजन"
  },
  "a_kind_of_plant_worm_killer": {
    "english": "A kind of plant (worm-killer)",
    "bishnupriya": "চিনচুপি",
    "bangla": "কৃমিনাশক গাছ",
    "hindi": "कीड़ा मारने वाला पौधा"
  },
  "piece_of_paper": {
    "english": "Piece of paper",
    "bishnupriya": "চিত",
    "bangla": "কাগজের টুকরো",
    "hindi": "कागज़ का टुकड़ा"
  },
  "loss_of_young_animal": {
    "english": "Loss of young (animal)",
    "bishnupriya": "চিঠ্ঠা",
    "bangla": "বাচ্চা মরে যাওয়া",
    "hindi": "बच्चे का मर जाना"
  },
  "letter": {
    "english": "Letter",
    "bishnupriya": "চিঠি",
    "bangla": "চিঠি",
    "hindi": "चिट्ठी"
  },
  "even_number": {
    "english": "Even number",
    "bishnupriya": "চিত",
    "bangla": "জোড় সংখ্যা",
    "hindi": "सम संख्या"
  },
  "flat_face_up": {
    "english": "Flat (face up)",
    "bishnupriya": "চিত",
    "bangla": "উপুড়",
    "hindi": "औंधा"
  },
  "a_kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "চিতাল",
    "bangla": "চিতাল মাছ",
    "hindi": "चितल मछली"
  },
  "variegated": {
    "english": "Variegated",
    "bishnupriya": "চিতারা",
    "bangla": "ছিটানো",
    "hindi": "छींटदार"
  },
  "mark": {
    "english": "Mark",
    "bishnupriya": "চিন",
    "bangla": "চিহ্ন",
    "hindi": "निशान"
  },
  "to_recognise": {
    "english": "To recognise",
    "bishnupriya": "চিন-",
    "bangla": "চেনা",
    "hindi": "पहचानना"
  },
  "extreme_end_of_land": {
    "english": "Extreme end of land",
    "bishnupriya": "চারাত",
    "bangla": "জমির শেষ প্রান্ত",
    "hindi": "ज़मीन का आखिरी सिरा"
  },
  "female_thief": {
    "english": "Female thief",
    "bishnupriya": "চারানি",
    "bangla": "মহিলা চোর",
    "hindi": "औरत चोर"
  },
  "thief": {
    "english": "Thief",
    "bishnupriya": "চারা",
    "bangla": "চোর",
    "hindi": "चोर"
  },
  "food_ration_fem": {
    "english": "Food, ration (fem.)",
    "bishnupriya": "খুরাকি",
    "bangla": "খাবার (স্ত্রী.)",
    "hindi": "खुराक (स्त्री.)"
  },
  "murderer": {
    "english": "Murderer",
    "bishnupriya": "খুনি",
    "bangla": "খুনি",
    "hindi": "हत्यारा"
  },
  "pigeon": {
    "english": "Pigeon",
    "bishnupriya": "খুনু / খুনৌ",
    "bangla": "ঘুঘু",
    "hindi": "कबूतर"
  },
  "boring_tool_hookah_cleaner": {
    "english": "Boring tool / hookah cleaner",
    "bishnupriya": "খুন্তারেই / খুন্দ্রেই",
    "bangla": "কাঠ ফুটো করার যন্ত্র / হুকোর সাফাইয়ের লাঠি",
    "hindi": "लकड़ी छेदने का औजार / हुक्का साफ करने की छड़ी"
  },
  "palm": {
    "english": "Palm",
    "bishnupriya": "খুপাক",
    "bangla": "হাতের তালু",
    "hindi": "हथेली"
  },
  "clapping_singing_in_kirtan": {
    "english": "Clapping & singing (in kirtan)",
    "bishnupriya": "খুপাক-ইসেই / খুপাকহুচি",
    "bangla": "তালি বাজিয়ে গান",
    "hindi": "ताली बजाकर गाना"
  },
  "thumb": {
    "english": "Thumb",
    "bishnupriya": "খুপি",
    "bangla": "বুড়ো আঙুল",
    "hindi": "अंगूठा"
  },
  "firm_strong": {
    "english": "Firm, strong",
    "bishnupriya": "খুপিলিন",
    "bangla": "মজবুত",
    "hindi": "मज़बूत"
  },
  "party_group": {
    "english": "Party, group",
    "bishnupriya": "খুপ্পু",
    "bangla": "দল",
    "hindi": "पार्टी"
  },
  "forearm_wrist_to_elbow": {
    "english": "Forearm (wrist to elbow)",
    "bishnupriya": "খুবাম",
    "bangla": "কনুই থেকে কব্জি",
    "hindi": "कलाई से कोहनी तक"
  },
  "bamboo_wood_tie_for_roof_poles": {
    "english": "Bamboo/wood tie for roof poles",
    "bishnupriya": "খুবল",
    "bangla": "ছাদের তির্যক খুঁটি বাঁধার বাঁশ",
    "hindi": "छत के खंभे बाँधने की लकड़ी"
  },
  "palm_alt": {
    "english": "Palm (alt.)",
    "bishnupriya": "খুবাক",
    "bangla": "হাতের তালু",
    "hindi": "हथेली"
  },
  "answer_response": {
    "english": "Answer, response",
    "bishnupriya": "খুম",
    "bangla": "উত্তর",
    "hindi": "जवाब"
  },
  "top_summit": {
    "english": "Top, summit",
    "bishnupriya": "খুম",
    "bangla": "শীর্ষ",
    "hindi": "शिखर"
  },
  "khuman_clan": {
    "english": "Khuman clan",
    "bishnupriya": "খুমাল",
    "bangla": "খুমাল গোষ্ঠী",
    "hindi": "खुमाल गोत्र"
  },
  "well_ripe": {
    "english": "Well-ripe",
    "bishnupriya": "খুমিত",
    "bangla": "পুরোপুরি পাকা",
    "hindi": "पूरी तरह पका"
  },
  "reticence_hesitation_to_answer": {
    "english": "Reticence / hesitation to answer",
    "bishnupriya": "খুমনা-খুমনি",
    "bangla": "চুপ থাকা / উত্তর না দেওয়া",
    "hindi": "चुप रहना / जवाब न देना"
  },
  "small_turban": {
    "english": "Small turban",
    "bishnupriya": "খুয়েত",
    "bangla": "ছোটো পাগড়ি",
    "hindi": "छोटी पगड़ी"
  },
  "foster_child": {
    "english": "Foster (child)",
    "bishnupriya": "খুয়া",
    "bangla": "পালিত",
    "hindi": "पालक"
  },
  "to_thrust_to_push": {
    "english": "To thrust / to push",
    "bishnupriya": "খুয়া-",
    "bangla": "ঠেলা দেওয়া",
    "hindi": "धकेलना"
  },
  "to_lose": {
    "english": "To lose",
    "bishnupriya": "খুয়া-",
    "bangla": "হারানো",
    "hindi": "खोना"
  },
  "hesitant_hesitation": {
    "english": "Hesitant / hesitation",
    "bishnupriya": "খুয়াকনা",
    "bangla": "দ্বিধা",
    "hindi": "हिचकिचाहट"
  },
  "waist": {
    "english": "Waist",
    "bishnupriya": "খুয়ান",
    "bangla": "কোমর",
    "hindi": "कमर"
  },
  "thrusting_losing_gerund": {
    "english": "Thrusting / losing (gerund)",
    "bishnupriya": "খুয়ানি",
    "bangla": "ঠেলা / হারানোর ক্রিয়া",
    "hindi": "धकेलने / खोने की क्रिया"
  },
  "addicted_to_suffix": {
    "english": "Addicted to (suffix)",
    "bishnupriya": "-খুর",
    "bangla": "আসক্ত (প্রত্যয়)",
    "hindi": "व्यसनी (प्रत्यय)"
  },
  "knife": {
    "english": "Knife",
    "bishnupriya": "খুর",
    "bangla": "ছুরি",
    "hindi": "चाकू"
  },
  "lazy_worthless": {
    "english": "Lazy, worthless",
    "bishnupriya": "খুরতপা",
    "bangla": "অলস, বেকার",
    "hindi": "आलसी, निकम्मा"
  },
  "leg_support_of_furniture_hoof_foot": {
    "english": "Leg/support of furniture / hoof / foot",
    "bishnupriya": "খুরাক",
    "bangla": "আসবাবের পা / খুর / পা",
    "hindi": "फर्नीचर का पैर / खुर / पैर"
  },
  "food_ration": {
    "english": "Food, ration",
    "bishnupriya": "খুরাক",
    "bangla": "খাবার, রসদ",
    "hindi": "खुराक"
  },
  "small_post_or_pillar": {
    "english": "Small post or pillar",
    "bishnupriya": "খুতক",
    "bangla": "ছোটো খুঁটা",
    "hindi": "छोटा खंभा"
  },
  "pecking_a_peck": {
    "english": "Pecking / a peck",
    "bishnupriya": "খুতান / খুতা",
    "bangla": "ঠোকরানো / ঠোকর",
    "hindi": "चोंच मारना / चोंच"
  },
  "post_pillar": {
    "english": "Post, pillar",
    "bishnupriya": "খুতা",
    "bangla": "খুঁটা",
    "hindi": "खंभा"
  },
  "blame": {
    "english": "Blame",
    "bishnupriya": "খুতা",
    "bangla": "দোষারোপ",
    "hindi": "दोष"
  },
  "to_peck": {
    "english": "To peck",
    "bishnupriya": "খুতা-",
    "bangla": "ঠোকরানো",
    "hindi": "चोंच मारना"
  },
  "pecking_act": {
    "english": "Pecking (act)",
    "bishnupriya": "খুতানি",
    "bangla": "ঠোকরানো",
    "hindi": "चोंच मारने की क्रिया"
  },
  "small_post_peg": {
    "english": "Small post / peg",
    "bishnupriya": "খুতি",
    "bangla": "ছোটো খুঁটা",
    "hindi": "छोटी कील / खूंटी"
  },
  "trifling_petty_things": {
    "english": "Trifling / petty things",
    "bishnupriya": "খুতিনাতি",
    "bangla": "তুচ্ছ জিনিস",
    "hindi": "छोटी-मोटी बातें"
  },
  "short_pillar_in_kiln": {
    "english": "Short pillar (in kiln)",
    "bishnupriya": "খুতুপ / খুতেপ",
    "bangla": "ভাটির ছোটো খুঁটা",
    "hindi": "भट्टी का छोटा खंभा"
  },
  "dislocated_spoiled": {
    "english": "Dislocated, spoiled",
    "bishnupriya": "খুতাউনাতাউ",
    "bangla": "বেসামাল / নষ্ট",
    "hindi": "खराब / उखड़ा हुआ"
  },
  "defect_fault": {
    "english": "Defect, fault",
    "bishnupriya": "খুত",
    "bangla": "দোষ",
    "hindi": "कमी / दोष"
  },
  "hesitant_peevish_hesitation": {
    "english": "Hesitant, peevish / hesitation",
    "bishnupriya": "খুতখুতি",
    "bangla": "দ্বিধা / খিটখিটে",
    "hindi": "हिचकिचाहट / चिड़चिड़ापन"
  },
  "handful": {
    "english": "Handful",
    "bishnupriya": "খুতাপ",
    "bangla": "মুঠো",
    "hindi": "मुट्ठी"
  },
  "fallen_awkwardly": {
    "english": "Fallen awkwardly",
    "bishnupriya": "খুতিথি",
    "bangla": "অসুবিধাজনক ভাবে পড়া",
    "hindi": "असुविधाजनक ढंग से गिरा"
  },
  "to_hesitate": {
    "english": "To hesitate",
    "bishnupriya": "খুতখুতা-",
    "bangla": "দ্বিধা করা",
    "hindi": "हिचकिचाना"
  },
  "hesitating": {
    "english": "Hesitating",
    "bishnupriya": "খুইখুতানি",
    "bangla": "দ্বিধা করা",
    "hindi": "हिचकिचाहट"
  },
  "presentation_gift": {
    "english": "Presentation, gift",
    "bishnupriya": "খুত্তল",
    "bangla": "উপহার",
    "hindi": "भेंट"
  },
  "nature_character": {
    "english": "Nature / character",
    "bishnupriya": "খুত্তা",
    "bangla": "স্বভাব",
    "hindi": "स्वभाव"
  },
  "wrist": {
    "english": "Wrist",
    "bishnupriya": "খুত্তান",
    "bangla": "কব্জি",
    "hindi": "कलाई"
  },
  "movement_of_hand_drumming": {
    "english": "Movement of hand (drumming)",
    "bishnupriya": "খুত্তাম",
    "bangla": "হাতের নড়াচড়া (ঢাক বাজানোর মতো)",
    "hindi": "हाथ की हरकत (ढोल बजाते हुए)"
  },
  "each": {
    "english": "Each",
    "bishnupriya": "খুত্তিন",
    "bangla": "প্রত্যেক",
    "hindi": "प्रत्येक"
  },
  "towel": {
    "english": "Towel",
    "bishnupriya": "খুত্তেই",
    "bangla": "তোয়ালে",
    "hindi": "तौलिया"
  },
  "one_who_touches_everything": {
    "english": "One who touches everything",
    "bishnupriya": "খুতপাই",
    "bangla": "যে সবকিছু ছোঁয়",
    "hindi": "जो सब छूता है"
  },
  "particles_of_rice_broken": {
    "english": "Particles of rice (broken)",
    "bishnupriya": "খুদ",
    "bangla": "চালের গুঁড়ো",
    "hindi": "टूटा चावल"
  },
  "to_find_fault": {
    "english": "To find fault",
    "bishnupriya": "খুদ-",
    "bangla": "দোষ ধরা",
    "hindi": "दोष निकालना"
  },
  "very_small": {
    "english": "Very small",
    "bishnupriya": "খুদি",
    "bangla": "খুব ছোটো",
    "hindi": "बहुत छोटा"
  },
  "finding_fault_petty_inquiry": {
    "english": "Finding fault / petty inquiry",
    "bishnupriya": "খুদানি",
    "bangla": "দোষ ধরা / তুচ্ছ খোঁজা",
    "hindi": "दोष ढूँढना / छोटी बातों में टांग अड़ाना"
  },
  "rope_for_tying_animals": {
    "english": "Rope for tying animals",
    "bishnupriya": "খুদুরি",
    "bangla": "পশু বাঁধার দড়ি",
    "hindi": "जानवर बाँधने की रस्सी"
  },
  "a_kind_of_small_edible_plant": {
    "english": "A kind of small edible plant",
    "bishnupriya": "খুদুরিয়া",
    "bangla": "এক ধরনের ছোটো শাক",
    "hindi": "एक तरह का छोटा साग"
  },
  "small_turban_2": {
    "english": "Small turban",
    "bishnupriya": "খুদেন্না",
    "bangla": "ছোটো পাগড়ি",
    "hindi": "छोटी पगड़ी"
  },
  "murder": {
    "english": "Murder",
    "bishnupriya": "খুন",
    "bangla": "খুন",
    "hindi": "हत्या"
  },
  "mutual_killing_bloodshed": {
    "english": "Mutual killing, bloodshed",
    "bishnupriya": "খুনাখুনি",
    "bangla": "পরস্পরের খুন",
    "hindi": "आपसी खून-खराबा"
  },
  "stain_from_constant_handling": {
    "english": "Stain from constant handling",
    "bishnupriya": "খুনান",
    "bangla": "বারবার ছোঁয়ার দাগ",
    "hindi": "बार-बार छूने से दाग"
  },
  "coil_of_cane_to_tighten_plough_poles": {
    "english": "Coil of cane to tighten plough poles",
    "bishnupriya": "খুনান",
    "bangla": "লাঙলের খুঁটি শক্ত করার বেতের গোলা",
    "hindi": "हल के खंभे कसने की बेंत की गोल रस्सी"
  },
  "distributing_eatables": {
    "english": "Distributing eatables",
    "bishnupriya": "খিলানি",
    "bangla": "খাবার বিতরণ করা",
    "hindi": "खाना बाँटना"
  },
  "window": {
    "english": "Window",
    "bishnupriya": "খিলকি",
    "bangla": "জানালা",
    "hindi": "खिड़की"
  },
  "wheel": {
    "english": "Wheel",
    "bishnupriya": "খিল্লা",
    "bangla": "চাকা",
    "hindi": "चक्का"
  },
  "betel_leaf_capsule_paan_packet": {
    "english": "Betel-leaf capsule (paan packet)",
    "bishnupriya": "খিল্লি",
    "bangla": "পানের খিলি",
    "hindi": "पान की गिलौरी"
  },
  "narrow_place": {
    "english": "Narrow (place)",
    "bishnupriya": "খু",
    "bangla": "সরু",
    "hindi": "संकरा"
  },
  "hesitant_peevish": {
    "english": "Hesitant, peevish",
    "bishnupriya": "খুই",
    "bangla": "খিটখিটে, বিরক্ত",
    "hindi": "चिड़चिड़ा"
  },
  "manuscript": {
    "english": "Manuscript",
    "bishnupriya": "খুই",
    "bangla": "হাতে লেখা পুঁথি",
    "hindi": "हस्तलिखित"
  },
  "sticky_substance_in_bee_nest": {
    "english": "Sticky substance in bee-nest",
    "bishnupriya": "খুইনান",
    "bangla": "মৌমাছির ছাতুতে আঠালো পদার্থ",
    "hindi": "मधुमक्खी के छत्ते में चिपचिपा पदार्थ"
  },
  "carpenter": {
    "english": "Carpenter",
    "bishnupriya": "খুইপা",
    "bangla": "ছুতোর",
    "hindi": "बढ़ई"
  },
  "up_to_the_satisfaction": {
    "english": "Up to the satisfaction",
    "bishnupriya": "খুনকুল",
    "bangla": "পুরোপুরি তৃপ্তি পর্যন্ত",
    "hindi": "पूरी तरह संतुष्टि तक"
  },
  "poke_sore": {
    "english": "Poke / sore",
    "bishnupriya": "খুচা",
    "bangla": "খোঁচা / ঘা",
    "hindi": "चुभाना / घाव"
  },
  "to_poke": {
    "english": "To poke",
    "bishnupriya": "খুচা-",
    "bangla": "খোঁচানো",
    "hindi": "चुभाना"
  },
  "cramp_in_leg": {
    "english": "Cramp (in leg)",
    "bishnupriya": "খুচা / খুচাকি",
    "bangla": "পায়ের খিল",
    "hindi": "ऐंठन"
  },
  "poking": {
    "english": "Poking",
    "bishnupriya": "খুচানি",
    "bangla": "খোঁচানো",
    "hindi": "चुभाना"
  },
  "wedding_gift_cloth_from_grooms_side": {
    "english": "Wedding gift (cloth) from groom’s side",
    "bishnupriya": "খুচাপি",
    "bangla": "বিয়ের দিন বরপক্ষের কাপড়ের উপহার",
    "hindi": "शादी में वर पक्ष का कपड़ा उपहार"
  },
  "small_coins": {
    "english": "Small coins",
    "bishnupriya": "খুচারা",
    "bangla": "খুচরো পয়সা",
    "hindi": "छोटे सिक्के"
  },
  "foot_foot_deep": {
    "english": "Foot / foot-deep",
    "bishnupriya": "খুচিন",
    "bangla": "পা / এক পা গভীর",
    "hindi": "पैर / पैर भर गहरा"
  },
  "a_unit_of_four": {
    "english": "A unit of four",
    "bishnupriya": "খুচিন",
    "bangla": "চারের একক",
    "hindi": "चार का समूह"
  },
  "kidnapper_of_children": {
    "english": "Kidnapper of children",
    "bishnupriya": "খুচিধারা",
    "bangla": "বাচ্চা চুরির লোক",
    "hindi": "बच्चा चोर"
  },
  "weapon_instrument": {
    "english": "Weapon, instrument",
    "bishnupriya": "খুচু",
    "bangla": "অস্ত্র, যন্ত্র",
    "hindi": "हथियार, औज़ार"
  },
  "small_metal_water_pot_lota_shape": {
    "english": "Small metal water-pot (lota shape)",
    "bishnupriya": "খুচেই",
    "bangla": "ছোটো ধাতুর লোটা",
    "hindi": "छोटा धातु का लोटा"
  },
  "nail_cutter": {
    "english": "Nail-cutter",
    "bishnupriya": "খুচেইনান",
    "bangla": "নখ কাটার যন্ত্র",
    "hindi": "नाखून काटने का यंत्र"
  },
  "ready_at_hand_in_possession": {
    "english": "Ready at hand, in possession",
    "bishnupriya": "খুচ্চাপা",
    "bangla": "হাতের কাছে, নিজের কাছে",
    "hindi": "हाथोहाथ, अपने पास"
  },
  "dirty_kitchen_water_with_vegetable_remnants": {
    "english": "Dirty kitchen water with vegetable remnants",
    "bishnupriya": "খুচ্চাম",
    "bangla": "রান্নাঘরের নোংরা জল",
    "hindi": "रसोई का गंदा पानी"
  },
  "rope_for_tying_animals_2": {
    "english": "Rope for tying animals",
    "bishnupriya": "খুচ্চুরি",
    "bangla": "পশু বাঁধার দড়ি",
    "hindi": "जानवर बाँधने की रस्सी"
  },
  "to_seek_to_marry_m": {
    "english": "To seek / to marry (M.)",
    "bishnupriya": "খুজ",
    "bangla": "খোঁজা / বিয়ে করা (M.)",
    "hindi": "ढूँढना / शादी करना (M.)"
  },
  "trace_search": {
    "english": "Trace, search",
    "bishnupriya": "খুজ",
    "bangla": "সন্ধান",
    "hindi": "पता"
  },
  "handful": {
    "english": "Handful",
    "bishnupriya": "খুজক / খুজাপ",
    "bangla": "মুঠো",
    "hindi": "मुट्ठी"
  },
  "seeking_marrying_m": {
    "english": "Seeking / marrying (M.)",
    "bishnupriya": "খুজানি",
    "bangla": "খোঁজা / বিয়ে করা",
    "hindi": "ढूँढना / शादी करना"
  },
  "earthen_plate": {
    "english": "Earthen plate",
    "bishnupriya": "খুঞ্চাই",
    "bangla": "মাটির থালা",
    "hindi": "मिट्टी की थाली"
  },
  "post_pillar": {
    "english": "Post, pillar",
    "bishnupriya": "খুত",
    "bangla": "খুঁটা, স্তম্ভ",
    "hindi": "खंभा, स्तंभ"
  },
  "shaving_gerund": {
    "english": "Shaving (gerund)",
    "bishnupriya": "খুরানি",
    "bangla": "কামানোর ক্রিয়া",
    "hindi": "दाढ़ी बनाने की क्रिया"
  },
  "horse_race": {
    "english": "Horse-race",
    "bishnupriya": "খুরুপ",
    "bangla": "ঘোড়দৌড়",
    "hindi": "घुड़दौड़"
  },
  "turn": {
    "english": "Turn",
    "bishnupriya": "খুরুম",
    "bangla": "পালা",
    "hindi": "बारी"
  },
  "foot": {
    "english": "Foot",
    "bishnupriya": "খু'রেই",
    "bangla": "পা",
    "hindi": "पैर"
  },
  "small_spud_gardening_knife": {
    "english": "Small spud / gardening knife",
    "bishnupriya": "খু'রপি",
    "bangla": "ছোটো কোদাল",
    "hindi": "छोटी कुदाल"
  },
  "a_kind_of_date_sweet": {
    "english": "A kind of date sweet",
    "bishnupriya": "খুর্মা",
    "bangla": "খেজুরের মিষ্টি",
    "hindi": "खजूर की मिठाई"
  },
  "related_as_aunt": {
    "english": "Related as aunt",
    "bishnupriya": "খুরানক",
    "bangla": "খুড়ির সম্পর্ক",
    "hindi": "बुआ का रिश्ता"
  },
  "uncle": {
    "english": "Uncle",
    "bishnupriya": "খুরা",
    "bangla": "খুড়া",
    "hindi": "चाचा"
  },
  "aunt": {
    "english": "Aunt",
    "bishnupriya": "খু'রি",
    "bangla": "খুড়ি",
    "hindi": "चाची"
  },
  "related_as_uncle": {
    "english": "Related as uncle",
    "bishnupriya": "খুরতক",
    "bangla": "খুড়ার সম্পর্ক",
    "hindi": "चाचा का रिश्ता"
  },
  "to_open": {
    "english": "To open",
    "bishnupriya": "খুল",
    "bangla": "খোলা",
    "hindi": "खोलना"
  },
  "to_dig": {
    "english": "To dig",
    "bishnupriya": "খুল",
    "bangla": "খোঁড়া",
    "hindi": "खोदना"
  },
  "open_frank": {
    "english": "Open / frank",
    "bishnupriya": "খুলা",
    "bangla": "খোলা / স্পষ্ট",
    "hindi": "खुला / साफ"
  },
  "frankly_openly": {
    "english": "Frankly, openly",
    "bishnupriya": "খুলাখুকি",
    "bangla": "খোলাখুলি",
    "hindi": "खुलकर"
  },
  "opening_gerund": {
    "english": "Opening (gerund)",
    "bishnupriya": "খুলানি",
    "bangla": "খোলার ক্রিয়া",
    "hindi": "खोलने की क्रिया"
  },
  "digging_gerund": {
    "english": "Digging (gerund)",
    "bishnupriya": "খুলানি",
    "bangla": "খোঁড়ার ক্রিয়া",
    "hindi": "खोदने की क्रिया"
  },
  "clear_frank": {
    "english": "Clear, frank",
    "bishnupriya": "খুলাসা",
    "bangla": "স্পষ্ট",
    "hindi": "साफ-साफ"
  },
  "beggar": {
    "english": "Beggar",
    "bishnupriya": "খুলপেই",
    "bangla": "ভিখারি",
    "hindi": "भिखारी"
  },
  "younger": {
    "english": "Younger",
    "bishnupriya": "খুল্লা",
    "bangla": "ছোটো",
    "hindi": "छोटा"
  },
  "village": {
    "english": "Village",
    "bishnupriya": "খুল্লাক",
    "bangla": "গ্রাম",
    "hindi": "गाँव"
  },
  "village_head": {
    "english": "Village head",
    "bishnupriya": "খুল্লাকপা",
    "bangla": "গ্রামপ্রধান",
    "hindi": "ग्रामप्रधान"
  },
  "younger_fem": {
    "english": "Younger (fem.)",
    "bishnupriya": "খুল্লি",
    "bangla": "ছোটো (মেয়ে)",
    "hindi": "छोटी"
  },
  "influenza": {
    "english": "Influenza",
    "bishnupriya": "খুল্লেই",
    "bangla": "ফ্লু",
    "hindi": "इन्फ्लुएंजा"
  },
  "hole_of_the_ear": {
    "english": "Hole of the ear",
    "bishnupriya": "খুল্লেই",
    "bangla": "কানের ছিদ্র",
    "hindi": "कान का छेद"
  },
  "weapon_instrument": {
    "english": "Weapon, instrument",
    "bishnupriya": "খুল্লেই",
    "bangla": "অস্ত্র",
    "hindi": "हथियार"
  },
  "carpenter": {
    "english": "Carpenter",
    "bishnupriya": "খুল্লেইপা",
    "bangla": "ছুতোর",
    "hindi": "बढ़ई"
  },
  "satisfied_pleased": {
    "english": "Satisfied, pleased",
    "bishnupriya": "খুশি",
    "bangla": "খুশি",
    "hindi": "खुश"
  },
  "flattery": {
    "english": "Flattery",
    "bishnupriya": "খুশামুদি",
    "bangla": "চাটুকারিতা",
    "hindi": "चापलूसी"
  },
  "separation": {
    "english": "Separation",
    "bishnupriya": "খেই",
    "bangla": "বিচ্ছেদ",
    "hindi": "जुदाई"
  },
  "division": {
    "english": "Division",
    "bishnupriya": "খেইচাক",
    "bangla": "বিভাজন",
    "hindi": "बँटवारा"
  },
  "separation_2": {
    "english": "Separation",
    "bishnupriya": "খেইনা",
    "bangla": "বিচ্ছেদ",
    "hindi": "अलगाव"
  },
  "partiality": {
    "english": "Partiality",
    "bishnupriya": "খেইপা-খেইপি",
    "bangla": "পক্ষপাত",
    "hindi": "पक्षपात"
  },
  "divorced_masc_fem": {
    "english": "Divorced (masc./fem.)",
    "bishnupriya": "খেইনাপা / খেইনাপি",
    "bangla": "তালাকপ্রাপ্ত",
    "hindi": "तलाकशुदा"
  },
  "half": {
    "english": "Half",
    "bishnupriya": "খেইপাক",
    "bangla": "অর্ধেক",
    "hindi": "आधा"
  },
  "boat_race": {
    "english": "Boat-race",
    "bishnupriya": "খেলুনা",
    "bangla": "নৌকাবাইচ",
    "hindi": "नाव की दौड़"
  },
  "sharp_acute_sound": {
    "english": "Sharp, acute (sound)",
    "bishnupriya": "খেন",
    "bangla": "তীক্ষ্ণ (শব্দ)",
    "hindi": "तीखा (ध्वनि)"
  },
  "coil_of_cane_for_plough_poles": {
    "english": "Coil of cane for plough poles",
    "bishnupriya": "খুনাম",
    "bangla": "লাঙলের খুঁটি শক্ত করার বেতের গোলা",
    "hindi": "हल के खंभे कसने की बेंत की गोल रस्सी"
  },
  "youngest_person_child": {
    "english": "Youngest (person/child)",
    "bishnupriya": "খামতল",
    "bangla": "সবচেয়ে ছোটো",
    "hindi": "सबसे छोटा"
  },
  "midst_middle": {
    "english": "Midst, middle",
    "bishnupriya": "খামতাক",
    "bangla": "মাঝখানে",
    "hindi": "बीच में"
  },
  "pillar": {
    "english": "Pillar",
    "bishnupriya": "খাম্বা",
    "bangla": "স্তম্ভ",
    "hindi": "खंभा"
  },
  "house_facing_south": {
    "english": "House facing south",
    "bishnupriya": "খাযুম",
    "bangla": "দক্ষিণমুখী ঘর",
    "hindi": "दक्षिण मुखी घर"
  },
  "brassiere": {
    "english": "Brassiere",
    "bishnupriya": "খাযুম",
    "bangla": "ব্রা",
    "hindi": "ब्रा"
  },
  "eating_food": {
    "english": "Eating / food",
    "bishnupriya": "খাৱন",
    "bangla": "খাওয়া / খাবার",
    "hindi": "खाना / भोजन"
  },
  "alkali": {
    "english": "Alkali",
    "bishnupriya": "খার",
    "bangla": "ক্ষার",
    "hindi": "क्षार"
  },
  "small_outlet_of_water": {
    "english": "Small outlet of water",
    "bishnupriya": "খারল",
    "bangla": "ছোটো জলনিকাশ",
    "hindi": "छोटा जल-निकास"
  },
  "round_high_wicker_basket": {
    "english": "Round high wicker basket",
    "bishnupriya": "খারা",
    "bangla": "উঁচু গোলাকার বাঁশের ঝুড়ি",
    "hindi": "ऊँची गोल बांस की टोकरी"
  },
  "spirited_energetic_fresh": {
    "english": "Spirited, energetic, fresh",
    "bishnupriya": "খারান",
    "bangla": "উৎসাহী, সতেজ",
    "hindi": "जोशीला, तरोताज़ा"
  },
  "bad_spoiled": {
    "english": "Bad, spoiled",
    "bishnupriya": "খারাপ",
    "bangla": "খারাপ",
    "hindi": "खराब"
  },
  "small_insect_in_flowers": {
    "english": "Small insect in flowers",
    "bishnupriya": "খারিক",
    "bangla": "ফুলের ছোটো পোকা",
    "hindi": "फूलों में छोटा कीड़ा"
  },
  "small_portion_of_land_left_for_plantation": {
    "english": "Small portion of land left for plantation",
    "bishnupriya": "খারুৱা",
    "bangla": "ছোটো চাষের জমি (বাদ দেওয়া)",
    "hindi": "छोटा खेत (बचा हुआ)"
  },
  "small_wicker_basket": {
    "english": "Small wicker basket",
    "bishnupriya": "খারেই",
    "bangla": "ছোটো ঝুড়ি",
    "hindi": "छोटी टोकरी"
  },
  "wrist_bangle": {
    "english": "Wrist bangle",
    "bishnupriya": "খারাউ",
    "bangla": "চুড়ি",
    "hindi": "कंगन / चूड़ी"
  },
  "erect_ready": {
    "english": "Erect / ready",
    "bishnupriya": "খারা",
    "bangla": "খাড়া / তৈরি",
    "hindi": "सीधा / तैयार"
  },
  "erected": {
    "english": "Erected",
    "bishnupriya": "খারাই",
    "bangla": "খাড়া করা",
    "hindi": "खड़ा किया हुआ"
  },
  "small_canal": {
    "english": "Small canal",
    "bishnupriya": "খারি",
    "bangla": "ছোটো খাল",
    "hindi": "छोटी नहर"
  },
  "piece_of_wood_etc": {
    "english": "Piece (of wood etc.)",
    "bishnupriya": "খারি",
    "bangla": "টুকরো",
    "hindi": "टुकड़ा"
  },
  "canal_ditch": {
    "english": "Canal, ditch",
    "bishnupriya": "খাল",
    "bangla": "খাল",
    "hindi": "नहर / खाई"
  },
  "thought": {
    "english": "Thought",
    "bishnupriya": "খাল",
    "bangla": "চিন্তা",
    "hindi": "विचार"
  },
  "screening_shading": {
    "english": "Screening, shading",
    "bishnupriya": "খাল",
    "bangla": "ছাঁকা / ছায়া দেওয়া",
    "hindi": "छानना / छाया करना"
  },
  "dismiss_release_salvation": {
    "english": "Dismiss, release, salvation",
    "bishnupriya": "খালাস",
    "bangla": "মুক্তি / ছাড়া পাওয়া",
    "hindi": "छुटकारा / रिहाई"
  },
  "vacant_empty": {
    "english": "Vacant, empty",
    "bishnupriya": "খালি",
    "bangla": "খালি",
    "hindi": "खाली"
  },
  "disorderly_ruined_by_quarrel": {
    "english": "Disorderly / ruined by quarrel",
    "bishnupriya": "খালুদালু",
    "bangla": "এলোমেলো / ঝগড়ায় নষ্ট",
    "hindi": "अव्यवस्थित / झगड़े से बर्बाद"
  },
  "distrust_in_husband_wife_relation": {
    "english": "Distrust in husband-wife relation",
    "bishnupriya": "খালপাল",
    "bangla": "স্বামী-স্ত্রীর মধ্যে অবিশ্বাস",
    "hindi": "पति-पत्नी में अविश्वास"
  },
  "private_under_direct_control_land": {
    "english": "Private / under direct control (land)",
    "bishnupriya": "খাস",
    "bangla": "খাস (সরাসরি মালিকের অধীনে)",
    "hindi": "खास (मालिक के सीधे नियंत्रण में)"
  },
  "hesitant_peevish": {
    "english": "Hesitant, peevish",
    "bishnupriya": "খি",
    "bangla": "বিরক্ত / খিটখিটে",
    "hindi": "चिड़चिड़ा"
  },
  "sprinkling": {
    "english": "Sprinkling",
    "bishnupriya": "খিক",
    "bangla": "ছিটানো",
    "hindi": "छिड़काव"
  },
  "trembling_from_cold_sound": {
    "english": "Trembling from cold (sound)",
    "bishnupriya": "খিতকিত",
    "bangla": "ঠান্ডায় কাঁপা (শব্দ)",
    "hindi": "ठंड से काँपना (ध्वनि)"
  },
  "trifling_things": {
    "english": "Trifling things",
    "bishnupriya": "খিংখিনি",
    "bangla": "তুচ্ছ জিনিস",
    "hindi": "छोटी-मोटी चीज़ें"
  },
  "care_attention": {
    "english": "Care, attention",
    "bishnupriya": "খিয়াল",
    "bangla": "খেয়াল",
    "hindi": "खयाल"
  },
  "sweet_rice_porridge_kheer": {
    "english": "Sweet rice porridge (kheer)",
    "bishnupriya": "খির",
    "bangla": "খির",
    "hindi": "खीर"
  },
  "a_kind_of_fruit_milk_like": {
    "english": "A kind of fruit (milk-like)",
    "bishnupriya": "খিরা",
    "bangla": "এক ধরনের ফল (দুধের মতো)",
    "hindi": "दूध जैसा फल"
  },
  "horrified_goosebumps_sound": {
    "english": "Horrified / goosebumps (sound)",
    "bishnupriya": "খিরিংখিরিং",
    "bangla": "রোমাঞ্চ (শব্দ)",
    "hindi": "रोमांच (ध्वनि)"
  },
  "soft_food_looks_like_kheer": {
    "english": "Soft food / looks like kheer",
    "bishnupriya": "খিরসা",
    "bangla": "নরম খাবার / খিরের মতো",
    "hindi": "खीर जैसा / मुलायम भोजन"
  },
  "uncultivated_field_plain_between_hills": {
    "english": "Uncultivated field / plain between hills",
    "bishnupriya": "খিলা",
    "bangla": "অনাবাদি জমি / দুই পাহাড়ের মাঝের সমতল",
    "hindi": "बिना जोती जमीन / दो पहाड़ों के बीच का मैदान"
  },
  "bolt_peg": {
    "english": "Bolt, peg",
    "bishnupriya": "খিল",
    "bangla": "খিল",
    "hindi": "कील"
  },
  "arrangement_distribution": {
    "english": "Arrangement, distribution",
    "bishnupriya": "খিল",
    "bangla": "বণ্টন / ব্যবস্থা",
    "hindi": "बँटवारा / व्यवस्था"
  },
  "to_distribute_eatables": {
    "english": "To distribute eatables",
    "bishnupriya": "খিলা-",
    "bangla": "খাবার বিতরণ করা",
    "hindi": "खाना बाँटना"
  },
  "chin_tie_cloth_under_chin_of_corpse": {
    "english": "Chin-tie (cloth under chin of corpse)",
    "bishnupriya": "খাতানসি",
    "bangla": "মৃতের থুতনি বাঁধার কাপড়",
    "hindi": "मुर्दे की ठुड्डी बाँधने का कपड़ा"
  },
  "shutting_closing": {
    "english": "Shutting / closing",
    "bishnupriya": "খাতানি",
    "bangla": "বন্ধ করা",
    "hindi": "बंद करना"
  },
  "working_causing_to_work": {
    "english": "Working / causing to work",
    "bishnupriya": "খাতানি",
    "bangla": "কাজ করা / কাজ করানো",
    "hindi": "काम करना / करवाना"
  },
  "being_suitable_making_suitable": {
    "english": "Being suitable / making suitable",
    "bishnupriya": "খাতানি",
    "bangla": "উপযুক্ত হওয়া / করা",
    "hindi": "ठीक होना / करना"
  },
  "bridal_chamber": {
    "english": "Bridal chamber",
    "bishnupriya": "খাতল",
    "bangla": "বৌ-ঘর",
    "hindi": "दुल्हन का कमरा"
  },
  "true_exact": {
    "english": "True, exact",
    "bishnupriya": "খাতি",
    "bangla": "সত্য, ঠিক",
    "hindi": "बिल्कुल सही"
  },
  "bamboo_platform": {
    "english": "Bamboo platform",
    "bishnupriya": "খাতি",
    "bangla": "বাঁশের মাচা",
    "hindi": "बांस का मचान"
  },
  "labour_hard_work": {
    "english": "Labour, hard work",
    "bishnupriya": "খাতুনি",
    "bangla": "খাটুনি",
    "hindi": "मेहनत"
  },
  "alloy_base_metal": {
    "english": "Alloy, base metal",
    "bishnupriya": "খাত",
    "bangla": "খাদ",
    "hindi": "मिलावट"
  },
  "notebook": {
    "english": "Notebook",
    "bishnupriya": "খাতা",
    "bangla": "খাতা",
    "hindi": "खाता"
  },
  "care_regard": {
    "english": "Care, regard",
    "bishnupriya": "খাতির",
    "bangla": "খাতির",
    "hindi": "खातिर"
  },
  "hand_woven_cloth": {
    "english": "Hand-woven cloth",
    "bishnupriya": "খাদি",
    "bangla": "খাদি",
    "hindi": "खादी"
  },
  "place_suffix": {
    "english": "Place (suffix)",
    "bishnupriya": "-খানা",
    "bangla": "জায়গা (প্রত্যয়)",
    "hindi": "स्थान (प्रत्यय)"
  },
  "eating_food_2": {
    "english": "Eating / food",
    "bishnupriya": "খানা",
    "bangla": "খাওয়া / খাবার",
    "hindi": "खाना / भोजन"
  },
  "house_searching": {
    "english": "House-searching",
    "bishnupriya": "খানাতল্লাস",
    "bangla": "ঘর তল্লাশি",
    "hindi": "घर की तलाशी"
  },
  "prostitute": {
    "english": "Prostitute",
    "bishnupriya": "খানকি",
    "bangla": "বেশ্যা",
    "hindi": "वेश्या"
  },
  "ditch_roadside": {
    "english": "Ditch / roadside",
    "bishnupriya": "খান্দা",
    "bangla": "খাল / রাস্তার ধার",
    "hindi": "खाई / सड़क किनारा"
  },
  "quarrel_lit_breaking_into_pieces": {
    "english": "Quarrel (lit. breaking into pieces)",
    "bishnupriya": "খান্না",
    "bangla": "ঝগড়া",
    "hindi": "झगड़ा"
  },
  "cook_butler": {
    "english": "Cook, butler",
    "bishnupriya": "খানসামা",
    "bangla": "রাঁধুনি / বাড়ির কর্মচারী",
    "hindi": "खानसामा"
  },
  "to_adjust_adapt_oneself": {
    "english": "To adjust, adapt oneself",
    "bishnupriya": "খাপ",
    "bangla": "মানিয়ে নেওয়া",
    "hindi": "ढलना"
  },
  "careful_watch": {
    "english": "Careful watch",
    "bishnupriya": "খাপ",
    "bangla": "সতর্ক নজর",
    "hindi": "सावधान निगरानी"
  },
  "suitability": {
    "english": "Suitability",
    "bishnupriya": "খাপ",
    "bangla": "উপযুক্ততা",
    "hindi": "मेल"
  },
  "split_bamboo_piece_for_strengthening": {
    "english": "Split bamboo piece for strengthening",
    "bishnupriya": "খাপ",
    "bangla": "শক্ত করার বাঁশের ফালি",
    "hindi": "मजबूती के लिए चीरा बांस"
  },
  "a_kind_of_thatch": {
    "english": "A kind of thatch",
    "bishnupriya": "খাপাক",
    "bangla": "এক ধরনের ছাউনি",
    "hindi": "एक तरह की छप्पर"
  },
  "silver_wrist_bangle": {
    "english": "Silver wrist bangle",
    "bishnupriya": "খাপাক-খরাউ",
    "bangla": "রুপার চুড়ি",
    "hindi": "चाँदी की कड़ा"
  },
  "adapting_oneself": {
    "english": "Adapting oneself",
    "bishnupriya": "খাপানি",
    "bangla": "নিজেকে মানিয়ে নেওয়া",
    "hindi": "खुद को ढालना"
  },
  "unnecessarily_big": {
    "english": "Unnecessarily big",
    "bishnupriya": "খাবড়াবা",
    "bangla": "অযথা বড়ো",
    "hindi": "बेवजह बड़ा"
  },
  "invigorated_fresh": {
    "english": "Invigorated, fresh",
    "bishnupriya": "খাবরান",
    "bangla": "সতেজ",
    "hindi": "तरोताज़ा"
  },
  "ladle": {
    "english": "Ladle",
    "bishnupriya": "খাবি",
    "bangla": "হাতা",
    "hindi": "कलछुल"
  },
  "hornet": {
    "english": "Hornet",
    "bishnupriya": "খাবিলানচাক / খামিনানচাক",
    "bangla": "ভিমরুল",
    "hindi": "बड़ा भँवरा"
  },
  "envelope": {
    "english": "Envelope",
    "bishnupriya": "খাম",
    "bangla": "খাম",
    "hindi": "लिफाफा"
  },
  "stoppage": {
    "english": "Stoppage",
    "bishnupriya": "খাম",
    "bangla": "বন্ধ",
    "hindi": "रुकावट"
  },
  "meaningless_nonsense": {
    "english": "Meaningless, nonsense",
    "bishnupriya": "খামাখা",
    "bangla": "বেকার কথা",
    "hindi": "बेकार"
  },
  "a_kind_of_tobacco": {
    "english": "A kind of tobacco",
    "bishnupriya": "খামিরা",
    "bangla": "খামিরা তামাক",
    "hindi": "खमीरा तंबाकू"
  },
  "whimsical_fanciful": {
    "english": "Whimsical, fanciful",
    "bishnupriya": "খামখেয়ালি",
    "bangla": "খেয়ালি",
    "hindi": "मनमौजी"
  },
  "pinch_with_five_fingers": {
    "english": "Pinch (with five fingers)",
    "bishnupriya": "খামচা",
    "bangla": "চিমটি",
    "hindi": "चुटकी"
  },
  "a_kind_of_reed": {
    "english": "A kind of reed",
    "bishnupriya": "খাগা",
    "bangla": "এক ধরনের নলখাগড়া",
    "hindi": "एक तरह की नरकट"
  },
  "weak_dry_wood_bamboo": {
    "english": "Weak & dry (wood/bamboo)",
    "bishnupriya": "খাক",
    "bangla": "শুকিয়ে দুর্বল",
    "hindi": "सूखकर कमज़ोर"
  },
  "keeping_reserving_for_future": {
    "english": "Keeping/reserving for future",
    "bishnupriya": "খাক",
    "bangla": "ভবিষ্যতের জন্য রাখা",
    "hindi": "भविष्य के लिए रखना"
  },
  "pagoda_tree_its_flower": {
    "english": "Pagoda tree & its flower",
    "bishnupriya": "খাকলেহাউ",
    "bangla": "সোনালু গাছ ও ফুল",
    "hindi": "सोनालू का पेड़ और फूल"
  },
  "brownish_colour_of_cloth": {
    "english": "Brownish (colour of cloth)",
    "bishnupriya": "খাকি",
    "bangla": "খাকি রং",
    "hindi": "खाकी रंग"
  },
  "cloth_for_tying_child_on_back": {
    "english": "Cloth for tying child on back",
    "bishnupriya": "খাকুনি",
    "bangla": "পিঠে শিশু বাঁধার কাপড়",
    "hindi": "पीठ पर बच्चा बाँधने का कपड़ा"
  },
  "cauldron_large_cooking_pot": {
    "english": "Cauldron / large cooking pot",
    "bishnupriya": "খান",
    "bangla": "বড়ো হাঁড়ি",
    "hindi": "बड़ा देगची"
  },
  "astonishment_surprise": {
    "english": "Astonishment, surprise",
    "bishnupriya": "খান",
    "bangla": "আশ্চর্য",
    "hindi": "आश्चर्य"
  },
  "tolerance": {
    "english": "Tolerance",
    "bishnupriya": "খান",
    "bangla": "সহ্য করা",
    "hindi": "सहनशीलता"
  },
  "dried_up": {
    "english": "Dried up",
    "bishnupriya": "খান",
    "bangla": "শুকিয়ে যাওয়া",
    "hindi": "सूख जाना"
  },
  "argument_debate": {
    "english": "Argument / debate",
    "bishnupriya": "খান",
    "bangla": "তর্ক",
    "hindi": "बहस"
  },
  "a_kind_of_necklace": {
    "english": "A kind of necklace",
    "bishnupriya": "খানাসারিক",
    "bangla": "এক ধরনের হার",
    "hindi": "एक तरह का हार"
  },
  "surprised_astonished": {
    "english": "Surprised, astonished",
    "bishnupriya": "খানু",
    "bangla": "আশ্চর্যান্বিত",
    "hindi": "हैरान"
  },
  "beam_of_a_house": {
    "english": "Beam (of a house)",
    "bishnupriya": "খানেল",
    "bangla": "ঘরের আড়ি",
    "hindi": "घर का शहतीर"
  },
  "sudden_pull": {
    "english": "Sudden pull",
    "bishnupriya": "খানচিন",
    "bangla": "হঠাৎ টান",
    "hindi": "अचानक खींचना"
  },
  "girdle_waist_tie": {
    "english": "Girdle, waist-tie",
    "bishnupriya": "খানচেত",
    "bangla": "কোমরবন্ধ",
    "hindi": "कमरबंद"
  },
  "side": {
    "english": "Side",
    "bishnupriya": "খান্তা",
    "bangla": "পাশ",
    "hindi": "किनारा"
  },
  "sudden_suddenly": {
    "english": "Sudden / suddenly",
    "bishnupriya": "খান্থা / খান্দা",
    "bangla": "হঠাৎ",
    "hindi": "अचानक"
  },
  "acquainted_familiar": {
    "english": "Acquainted, familiar",
    "bishnupriya": "খান্না / খান্নাপা",
    "bangla": "পরিচিত",
    "hindi": "परिचित"
  },
  "beam_large_of_house": {
    "english": "Beam (large) of house",
    "bishnupriya": "খানলাল / খানলেল",
    "bangla": "বড়ো আড়ি (ঘরের)",
    "hindi": "बड़ा शहतीर"
  },
  "line_cross": {
    "english": "Line / cross",
    "bishnupriya": "খাচ",
    "bangla": "রেখা / ক্রশ",
    "hindi": "लकीर / क्रॉस"
  },
  "limit_worth": {
    "english": "Limit / worth",
    "bishnupriya": "খাচ",
    "bangla": "সীমা / মূল্য",
    "hindi": "सीमा / कीमत"
  },
  "mentality_temperament": {
    "english": "Mentality, temperament",
    "bishnupriya": "খাচিলত",
    "bangla": "মানসিকতা",
    "hindi": "स्वभाव"
  },
  "rent_of_land": {
    "english": "Rent (of land)",
    "bishnupriya": "খাজনা",
    "bangla": "খাজনা",
    "hindi": "लगान"
  },
  "shrimp_small_prawn": {
    "english": "Shrimp / small prawn",
    "bishnupriya": "খাজিন",
    "bangla": "ছোটো চিংড়ি",
    "hindi": "छोटी झींगा"
  },
  "itch_scabies": {
    "english": "Itch, scabies",
    "bishnupriya": "খাজুকারি / খাজুকুরি / খাজুরি / খাজুলি",
    "bangla": "চুলকানি",
    "hindi": "खुजली"
  },
  "to_itch": {
    "english": "To itch",
    "bishnupriya": "খাজুয়া",
    "bangla": "চুলকানো",
    "hindi": "खुजलाना"
  },
  "jackfruit": {
    "english": "Jackfruit",
    "bishnupriya": "খাতল",
    "bangla": "কাঁঠাল",
    "hindi": "कटहल"
  },
  "chin_outer_side_of_house": {
    "english": "Chin / outer side of house",
    "bishnupriya": "খাতন",
    "bangla": "থুতনি / ঘরের বাইরের দিক",
    "hindi": "ठुड्डी / घर का बाहरी हिस्सा"
  },
  "murderer": {
    "english": "Murderer",
    "bishnupriya": "খুনি",
    "bangla": "খুনি",
    "hindi": "हत्यारा"
  },
  "pigeon": {
    "english": "Pigeon",
    "bishnupriya": "খুনু / খুনৌ",
    "bangla": "ঘুঘু",
    "hindi": "कबूतर"
  },
  "boring_tool_hookah_cleaner": {
    "english": "Boring tool / hookah cleaner",
    "bishnupriya": "খুন্তারেই / খুন্দ্রেই",
    "bangla": "কাঠ ফুটো করার যন্ত্র / হুকোর সাফাইয়ের লাঠি",
    "hindi": "लकड़ी छेदने का औजार / हुक्का साफ करने की छड़ी"
  },
  "palm": {
    "english": "Palm",
    "bishnupriya": "খুপাক",
    "bangla": "হাতের তালু",
    "hindi": "हथेली"
  },
  "clapping_singing_in_kirtan": {
    "english": "Clapping & singing (in kirtan)",
    "bishnupriya": "খুপাক-ইসেই / খুপাকহুচি",
    "bangla": "তালি বাজিয়ে গান",
    "hindi": "ताली बजाकर गाना"
  },
  "thumb": {
    "english": "Thumb",
    "bishnupriya": "খুপি",
    "bangla": "বুড়ো আঙুল",
    "hindi": "अंगूठा"
  },
  "firm_strong": {
    "english": "Firm, strong",
    "bishnupriya": "খুপিলিন",
    "bangla": "মজবুত",
    "hindi": "मज़बूत"
  },
  "party_group": {
    "english": "Party, group",
    "bishnupriya": "খুপ্পু",
    "bangla": "দল",
    "hindi": "पार्टी"
  },
  "forearm_wrist_to_elbow": {
    "english": "Forearm (wrist to elbow)",
    "bishnupriya": "খুবাম",
    "bangla": "কনুই থেকে কব্জি",
    "hindi": "कलाई से कोहनी तक"
  },
  "bamboo_wood_tie_for_roof_poles": {
    "english": "Bamboo/wood tie for roof poles",
    "bishnupriya": "খুবল",
    "bangla": "ছাদের তির্যক খুঁটি বাঁধার বাঁশ",
    "hindi": "छत के खंभे बाँधने की लकड़ी"
  },
  "palm_alt": {
    "english": "Palm (alt.)",
    "bishnupriya": "খুবাক",
    "bangla": "হাতের তালু",
    "hindi": "हथेली"
  },
  "answer_response": {
    "english": "Answer, response",
    "bishnupriya": "খুম",
    "bangla": "উত্তর",
    "hindi": "जवाब"
  },
  "top_summit": {
    "english": "Top, summit",
    "bishnupriya": "খুম",
    "bangla": "শীর্ষ",
    "hindi": "शिखर"
  },
  "khuman_clan": {
    "english": "Khuman clan",
    "bishnupriya": "খুমাল",
    "bangla": "খুমাল গোষ্ঠী",
    "hindi": "खुमाल गोत्र"
  },
  "plump_and_fleshy": {
    "english": "Plump and fleshy",
    "bishnupriya": "খুমাখুমা",
    "bangla": "গোলগাল",
    "hindi": "मोटा-ताज़ा"
  },
  "front_leg_dust_raised_by_front_leg": {
    "english": "Front leg / dust raised by front leg",
    "bishnupriya": "খুমান",
    "bangla": "সামনের পা / পায়ের ধুলো",
    "hindi": "आगे का पैर / पैर से उड़ती धूल"
  },
  "well_ripe": {
    "english": "Well-ripe",
    "bishnupriya": "খুমিত",
    "bangla": "পুরোপুরি পাকা",
    "hindi": "पूरी तरह पका"
  },
  "reticence_hesitation_to_answer": {
    "english": "Reticence / hesitation to answer",
    "bishnupriya": "খুমনা-খুমনি",
    "bangla": "চুপ থাকা / উত্তর না দেওয়া",
    "hindi": "चुप रहना / जवाब न देना"
  },
  "small_turban": {
    "english": "Small turban",
    "bishnupriya": "খুয়েত",
    "bangla": "ছোটো পাগড়ি",
    "hindi": "छोटी पगड़ी"
  },
  "foster_child": {
    "english": "Foster (child)",
    "bishnupriya": "খুয়া",
    "bangla": "পালিত",
    "hindi": "पालक"
  },
  "to_thrust_to_push": {
    "english": "To thrust / to push",
    "bishnupriya": "খুয়া-",
    "bangla": "ঠেলা দেওয়া",
    "hindi": "धकेलना"
  },
  "to_lose": {
    "english": "To lose",
    "bishnupriya": "খুয়া-",
    "bangla": "হারানো",
    "hindi": "खोना"
  },
  "hesitant_hesitation": {
    "english": "Hesitant / hesitation",
    "bishnupriya": "খুয়াকনা",
    "bangla": "দ্বিধা",
    "hindi": "हिचकिचाहट"
  },
  "waist": {
    "english": "Waist",
    "bishnupriya": "খুয়ান",
    "bangla": "কোমর",
    "hindi": "कमर"
  },
  "thrusting_losing_gerund": {
    "english": "Thrusting / losing (gerund)",
    "bishnupriya": "খুয়ানি",
    "bangla": "ঠেলা / হারানোর ক্রিয়া",
    "hindi": "धकेलने / खोने की क्रिया"
  },
  "addicted_to_suffix": {
    "english": "Addicted to (suffix)",
    "bishnupriya": "-খুর",
    "bangla": "আসক্ত (প্রত্যয়)",
    "hindi": "व्यसनी (प्रत्यय)"
  },
  "knife": {
    "english": "Knife",
    "bishnupriya": "খুর",
    "bangla": "ছুরি",
    "hindi": "चाकू"
  },
  "lazy_worthless": {
    "english": "Lazy, worthless",
    "bishnupriya": "খুরতপা",
    "bangla": "অলস, বেকার",
    "hindi": "आलसी, निकम्मा"
  },
  "leg_support_of_furniture_hoof_foot": {
    "english": "Leg/support of furniture / hoof / foot",
    "bishnupriya": "খুরাক",
    "bangla": "আসবাবের পা / খুর / পা",
    "hindi": "फर्नीचर का पैर / खुर / पैर"
  },
  "food_ration": {
    "english": "Food, ration",
    "bishnupriya": "খুরাক",
    "bangla": "খাবার, রসদ",
    "hindi": "खुराक"
  },
  "character_behaviour": {
    "english": "Character, behaviour",
    "bishnupriya": "চারিত",
    "bangla": "চরিত্র",
    "hindi": "चरित्र"
  },
  "secretly": {
    "english": "Secretly",
    "bishnupriya": "চারেদে",
    "bangla": "গোপনে",
    "hindi": "चुपके से"
  },
  "to_speak_ill_of_others": {
    "english": "To speak ill of others",
    "bishnupriya": "চার্চ-",
    "bangla": "পরনিন্দা করা",
    "hindi": "चुगली करना"
  },
  "to_ascend": {
    "english": "To ascend",
    "bishnupriya": "চা'র-",
    "bangla": "চড়া",
    "hindi": "चढ़ना"
  },
  "to_cause_to_ascend": {
    "english": "To cause to ascend",
    "bishnupriya": "চা'রা-",
    "bangla": "চড়ানো",
    "hindi": "चढ़ाना"
  },
  "to_move_on_continue": {
    "english": "To move on, continue",
    "bishnupriya": "চল-",
    "bangla": "চলা",
    "hindi": "चलना"
  },
  "nature": {
    "english": "Nature",
    "bishnupriya": "চলা",
    "bangla": "স্বভাব",
    "hindi": "स्वभाव"
  },
  "movement": {
    "english": "Movement",
    "bishnupriya": "চলা",
    "bangla": "গতি",
    "hindi": "गति"
  },
  "to_cause_to_move": {
    "english": "To cause to move",
    "bishnupriya": "চলা-",
    "bangla": "চালানো",
    "hindi": "चलाना"
  },
  "a_turn_instalment_current": {
    "english": "A turn / instalment / current",
    "bishnupriya": "চলতি",
    "bangla": "কিস্তি / চলতি",
    "hindi": "किश्त / चलता"
  },
  "spectacles": {
    "english": "Spectacles",
    "bishnupriya": "চশমা",
    "bangla": "চশমা",
    "hindi": "चश्मा"
  },
  "sharp_sour": {
    "english": "Sharp / sour",
    "bishnupriya": "চাহা",
    "bangla": "ঝাঁঝালো / টক",
    "hindi": "तीखा / खट्टा"
  },
  "tea_2": {
    "english": "Tea",
    "bishnupriya": "চা",
    "bangla": "চা",
    "hindi": "चाय"
  },
  "tillage_2": {
    "english": "Tillage",
    "bishnupriya": "চা",
    "bangla": "চাষ",
    "hindi": "खेती"
  },
  "mole": {
    "english": "Mole",
    "bishnupriya": "চা",
    "bangla": "তিল",
    "hindi": "तिल"
  },
  "to_see": {
    "english": "To see",
    "bishnupriya": "চা-",
    "bangla": "দেখা",
    "hindi": "देखना"
  },
  "meal_2": {
    "english": "Meal",
    "bishnupriya": "চাক",
    "bangla": "খাবার",
    "hindi": "खाना"
  },
  "ring": {
    "english": "Ring",
    "bishnupriya": "চাঁক",
    "bangla": "আংটি",
    "hindi": "अंगूठी"
  },
  "hip": {
    "english": "Hip",
    "bishnupriya": "চাকত",
    "bangla": "কোমর",
    "hindi": "कूल्हा"
  },
  "slave_slavery": {
    "english": "Slave / slavery",
    "bishnupriya": "চাকর / চাকরিয়া / চাকরনি",
    "bangla": "চাকর / দাসত্ব",
    "hindi": "नौकर / गुलामी"
  },
  "wheel": {
    "english": "Wheel",
    "bishnupriya": "চাকা",
    "bangla": "চাকা",
    "hindi": "चक्का"
  },
  "kitchen_2": {
    "english": "Kitchen",
    "bishnupriya": "চাকাম / চাক্ষান",
    "bangla": "রান্নাঘর",
    "hindi": "रसोई"
  },
  "cobra": {
    "english": "Cobra",
    "bishnupriya": "চাকলা",
    "bangla": "গোখরো",
    "hindi": "कोबरा"
  },
  "thin_flat_piece": {
    "english": "Thin & flat piece",
    "bishnupriya": "চাকলা",
    "bangla": "চ্যাপটা টুকরো",
    "hindi": "चपटा टुकड़ा"
  },
  "dry_rice_particles": {
    "english": "Dry rice particles",
    "bishnupriya": "চাকিন",
    "bangla": "শুকনো ভাতের দানা",
    "hindi": "सूखे चावल के दाने"
  },
  "service_employment": {
    "english": "Service, employment",
    "bishnupriya": "চাকুরি",
    "bangla": "চাকরি",
    "hindi": "नौकरी"
  },
  "service_holder": {
    "english": "Service-holder",
    "bishnupriya": "চাকুরিয়া",
    "bangla": "চাকুরে",
    "hindi": "नौकरीपेशा"
  },
  "thin_flat_piece_of_hard_thing": {
    "english": "Thin & flat piece of hard thing",
    "bishnupriya": "চাকুলি",
    "bangla": "পাতলা চ্যাপটা",
    "hindi": "पतला चपटा टुकड़ा"
  },
  "small_round_piece_wheel": {
    "english": "Small round piece / wheel",
    "bishnupriya": "চাক্কা / চাক্কি",
    "bangla": "ছোটো গোলাকার / চাকা",
    "hindi": "छोटा गोल / चक्का"
  },
  "knife_2": {
    "english": "Knife",
    "bishnupriya": "চাক্কু",
    "bangla": "ছুরি",
    "hindi": "चाकू"
  },
  "food": {
    "english": "Food",
    "bishnupriya": "চাকচা",
    "bangla": "খাবার",
    "hindi": "खाना"
  },
  "dining_room": {
    "english": "Dining room",
    "bishnupriya": "চাকচাফাম",
    "bangla": "ভোজনকক্ষ",
    "hindi": "भोजन कक्ष"
  },
  "meal_seat": {
    "english": "Meal seat",
    "bishnupriya": "চাকচাফাল",
    "bangla": "খাবারের আসন",
    "hindi": "खाने की जगह"
  },
  "striped_lower_garment_female": {
    "english": "Striped lower garment (female)",
    "bishnupriya": "চাকচাবি",
    "bangla": "ডোরাকাটা শাড়ি/লুঙ্গি",
    "hindi": "धारीदार निचला वस्त्र"
  },
  "gluttonous": {
    "english": "Gluttonous",
    "bishnupriya": "চাকছু",
    "bangla": "পেটুক",
    "hindi": "पेटू"
  },
  "enclosed_area": {
    "english": "Enclosed area",
    "bishnupriya": "চাঁক্তা",
    "bangla": "ঘেরা জায়গা",
    "hindi": "घेरा हुआ इलाका"
  },
  "disc_thin_flat_piece": {
    "english": "Disc / thin flat piece",
    "bishnupriya": "চাক্তি",
    "bangla": "চাকতি",
    "hindi": "चक्र / पतला टुकड़ा"
  },
  "sponger_beggar": {
    "english": "Sponger, beggar",
    "bishnupriya": "চাকপাই",
    "bangla": "পরের খাবার খাওয়া লোক",
    "hindi": "मुफ्तखोर"
  },
  "puerperal_diarrhoea": {
    "english": "Puerperal diarrhoea",
    "bishnupriya": "চাকমান",
    "bangla": "প্রসবোত্তর পাতলা পায়খানা",
    "hindi": "प्रसव के बाद दस्त"
  },
  "wicker_basket_for_paddy": {
    "english": "Wicker basket for paddy",
    "bishnupriya": "চান",
    "bangla": "ধান মাপার ঝুড়ি",
    "hindi": "धान नापने की टोकरी"
  },
  "amount_extremity_condition_odd_number_dependence": {
    "english": "Amount / extremity / condition / odd number / dependence",
    "bishnupriya": "চান",
    "bangla": "পরিমাণ / প্রান্ত / অবস্থা / বিজোড় সংখ্যা / নির্ভরতা",
    "hindi": "मात्रा / सिरा / हालत / विषम संख्या / निर्भरता"
  },
  "big_huge": {
    "english": "Big, huge",
    "bishnupriya": "চাঙ্খাল",
    "bangla": "বিরাট",
    "hindi": "बहुत बड़ा"
  },
  "thin_turban": {
    "english": "Thin turban",
    "bishnupriya": "চাঙ্খরান্তাপি",
    "bangla": "পাতলা পাগড়ি",
    "hindi": "पतली पगड़ी"
  },
    "threatening": {
    "english": "Threatening",
    "bishnupriya": "কুদম",
    "bangla": "ভয় দেখানো",
    "hindi": "धमकी"
  },
  "water_lily": {
    "english": "Water-lily",
    "bishnupriya": "কুনারি / কুনারেই",
    "bangla": "শাপলা",
    "hindi": "कमल / शालूक"
  },
  "a_mortarful_of_rice_paddy": {
    "english": "A mortarful (of rice/paddy)",
    "bishnupriya": "কুনি",
    "bangla": "উখলভর্তি",
    "hindi": "ओखली भर"
  },
  "pigeon": {
    "english": "Pigeon",
    "bishnupriya": "কুনৌ",
    "bangla": "ঘুঘু",
    "hindi": "कबूतर"
  },
  "a_kind_of_slippery_insect": {
    "english": "A kind of slippery insect",
    "bishnupriya": "কুঞ্জালুক",
    "bangla": "পিচ্ছিল পোকা",
    "hindi": "फिसलन वाला कीड़ा"
  },
  "bad_name_ill_repute": {
    "english": "Bad name / ill repute",
    "bishnupriya": "কুনাম",
    "bangla": "বদনাম",
    "hindi": "बदनामी"
  },
  "to_plant": {
    "english": "To plant",
    "bishnupriya": "কূপ",
    "bangla": "লাগানো",
    "hindi": "रोपना"
  },
  "twinkling_of_eye": {
    "english": "Twinkling (of eye)",
    "bishnupriya": "কুপ",
    "bangla": "চোখের পলক",
    "hindi": "पलक झपकना"
  },
  "fine_punishment": {
    "english": "Fine (punishment)",
    "bishnupriya": "কুপ্পা",
    "bangla": "জরিমানা",
    "hindi": "जुर्माना"
  },
  "planting_gerund": {
    "english": "Planting (gerund)",
    "bishnupriya": "কূপানি",
    "bangla": "রোপণ করা",
    "hindi": "रोपने की क्रिया"
  },
  "very_fine_excellent": {
    "english": "Very fine / excellent",
    "bishnupriya": "কুপ্তিরান",
    "bangla": "খুব সরু / উত্তম",
    "hindi": "बहुत बारीक / बेहतरीन"
  },
  "peevish_irritable": {
    "english": "Peevish, irritable",
    "bishnupriya": "কূপ্থি",
    "bangla": "খিটখিটে",
    "hindi": "चिड़चिड़ा"
  },
  "party_group": {
    "english": "Party, group",
    "bishnupriya": "কুফা",
    "bangla": "দল",
    "hindi": "पार्टी"
  },
  "tank_pond": {
    "english": "Tank / pond",
    "bishnupriya": "কূম্ফু",
    "bangla": "পুকুর",
    "hindi": "तालाब"
  },
  "small_metal_melting_vessel": {
    "english": "Small metal-melting vessel",
    "bishnupriya": "কুম্ফু",
    "bangla": "ধাতু গলানোর ছোটো পাত্র",
    "hindi": "छोटा धातु पिघलाने का बर्तन"
  },
  "when": {
    "english": "When?",
    "bishnupriya": "কুম্বক",
    "bangla": "কখন?",
    "hindi": "कब?"
  },
  "handful_bunch": {
    "english": "Handful / bunch",
    "bishnupriya": "কুয়া",
    "bangla": "মুঠো / থোকা",
    "hindi": "मुट्ठी / गुच्छा"
  },
  "pod_of_fruit": {
    "english": "Pod of fruit",
    "bishnupriya": "কুয়া",
    "bangla": "ফলের খোসা",
    "hindi": "फली"
  },
  "betel_nut": {
    "english": "Betel-nut",
    "bishnupriya": "কুয়া",
    "bangla": "সুপারি",
    "hindi": "सुपारी"
  },
  "a_kind_of_flower_crow_flower": {
    "english": "A kind of flower (crow flower)",
    "bishnupriya": "কুয়াকলেই",
    "bangla": "কাকফুল",
    "hindi": "कौआ फूल"
  },
  "cheek_inner_side": {
    "english": "Cheek (inner side)",
    "bishnupriya": "কুয়াল",
    "bangla": "গালের ভিতর",
    "hindi": "गाल का अंदरूनी हिस्सा"
  },
  "cock_rooster": {
    "english": "Cock (rooster)",
    "bishnupriya": "কুরকি",
    "bangla": "মোরগ",
    "hindi": "मुर्गा"
  },
  "where": {
    "english": "Where?",
    "bishnupriya": "কুরান",
    "bangla": "কোথায়?",
    "hindi": "कहाँ?"
  },
  "handful": {
    "english": "Handful",
    "bishnupriya": "কুরু",
    "bangla": "মুঠো",
    "hindi": "मुट्ठी"
  },
  "preceptor_guru": {
    "english": "Preceptor, guru",
    "bishnupriya": "কুরু",
    "bangla": "গুরু",
    "hindi": "गुरु"
  },
  "confiscation_of_property": {
    "english": "Confiscation of property",
    "bishnupriya": "কুরুক",
    "bangla": "সম্পত্তি বাজেয়াপ্ত",
    "hindi": "संपत्ति जब्ती"
  },
  "a_stone_for_sharpening_tools": {
    "english": "A stone for sharpening tools",
    "bishnupriya": "কুরুম",
    "bangla": "শান দেওয়ার পাথর",
    "hindi": "चक्की का पत्थर"
  },
  "potter": {
    "english": "Potter",
    "bishnupriya": "কুমার",
    "bangla": "কুমোর",
    "hindi": "कुम्हार"
  },
  "pumpkin": {
    "english": "Pumpkin",
    "bishnupriya": "কূমড়া",
    "bangla": "কুমড়ো",
    "hindi": "कद्दू"
  },
  "festivity": {
    "english": "Festivity",
    "bishnupriya": "কূমেই",
    "bangla": "উৎসব",
    "hindi": "उत्सव"
  },
  "complexion": {
    "english": "Complexion",
    "bishnupriya": "কুমেল",
    "bangla": "বর্ণ",
    "hindi": "रंगत"
  },
  "stoppage_of_menstruation": {
    "english": "Stoppage of menstruation",
    "bishnupriya": "কুমথিন",
    "bangla": "ঋতুস্রাব বন্ধ",
    "hindi": "मासिक धर्म बंद"
  },
  "man_with_large_testicles": {
    "english": "Man with large testicles",
    "bishnupriya": "কুরুলিয়া",
    "bangla": "বড়ো অণ্ডকোষযুক্ত পুরুষ",
    "hindi": "बड़े अंडकोष वाला पुरुष"
  },
  "shrunk_dried_up_incapacitated": {
    "english": "Shrunk & dried up / incapacitated",
    "bishnupriya": "কুরুসুম",
    "bangla": "শুকিয়ে যাওয়া / অকেজো",
    "hindi": "सूखा हुआ / अक्षम"
  },
  "piece": {
    "english": "Piece",
    "bishnupriya": "কুরকা",
    "bangla": "টুকরো",
    "hindi": "टुकड़ा"
  },
  "digging_around_a_plant": {
    "english": "Digging around a plant",
    "bishnupriya": "কুর",
    "bangla": "গাছের চারপাশে খোঁড়া",
    "hindi": "पौधे के चारों ओर खोदना"
  },
  "pole_fishing_net_dust": {
    "english": "Pole (fishing net) / dust",
    "bishnupriya": "কুরা",
    "bangla": "মাছ ধরার খুঁটি / ধুলো",
    "hindi": "मछली पकड़ने की छड़ी / धूल"
  },
  "bud": {
    "english": "Bud",
    "bishnupriya": "কুরি",
    "bangla": "কুঁড়ি",
    "hindi": "कली"
  },
  "act_of_following_feeding": {
    "english": "The act of following / feeding",
    "bishnupriya": "ইল",
    "bangla": "অনুসরণ করা / খাওয়ানো",
    "hindi": "पीछे चलना / खिलाना"
  },
  "suffix_slightly_having_relating": {
    "english": "Suffix – slightly / having / relating to",
    "bishnupriya": "-ইলা",
    "bangla": "সামান্য / অধিকারী প্রত্যয়",
    "hindi": "थोड़ा-सा / वाला प्रत्यय"
  },
  "ulcer_wound_watery_secretion": {
    "english": "Ulcer, wound, watery secretion",
    "bishnupriya": "ইচুম",
    "bangla": "ঘা থেকে পানি, পুঁজ",
    "hindi": "घाव से पानी/पस"
  },
  "changing_gerund": {
    "english": "Changing (gerund)",
    "bishnupriya": "আ'লানি",
    "bangla": "বদলানোর ক্রিয়া",
    "hindi": "बदलने की क्रिया"
  },
  "centipede": {
    "english": "Centipede",
    "bishnupriya": "আলা-পাক",
    "bangla": "শতপদী",
    "hindi": "कनखजूरा"
  },
  "appeal_legal": {
    "english": "Appeal (legal)",
    "bishnupriya": "আফিল",
    "bangla": "আপিল",
    "hindi": "अपील"
  },
  "rough_incomplete": {
    "english": "Rough, incomplete",
    "bishnupriya": "আ'বা-জাবা",
    "bangla": "আধখেঁচড়া",
    "hindi": "अधूरा, खुरदरा"
  },
  "cultivation_tillage": {
    "english": "Cultivation, tillage",
    "bishnupriya": "আবাদ",
    "bangla": "চাষ",
    "hindi": "खेती"
  },
  "reserved_confidential": {
    "english": "Reserved, confidential",
    "bishnupriya": "আচেৎপা",
    "bangla": "গোপনীয়, সংরক্ষিত",
    "hindi": "गोपनीय, आरक्षित"
  },
  "fie_exclamation": {
    "english": "Fie! (Are! chhi:!)",
    "bishnupriya": "আচ্চা",
    "bangla": "ছিঃ!",
    "hindi": "छि:!"
  },
  "loudly": {
    "english": "Loudly",
    "bishnupriya": "আঙুলে",
    "bangla": "জোরে",
    "hindi": "जोर से"
  },
  "well_yes_okay": {
    "english": "Well, yes, okay",
    "bishnupriya": "আচ্ছা",
    "bangla": "আচ্ছা, ঠিক আছে",
    "hindi": "अच्छा, ठीक है"
  },
  "fibre": {
    "english": "Fibre",
    "bishnupriya": "আছ",
    "bangla": "আঁশ",
    "hindi": "रेशा"
  },
  "to_scratch_peel": {
    "english": "To scratch, to peel",
    "bishnupriya": "আছ",
    "bangla": "আঁচড়ানো, খোসা ছাড়ানো",
    "hindi": "खुरचना, छीलना"
  },
  "to_remain_to_be": {
    "english": "To remain, to be",
    "bishnupriya": "আছ",
    "bangla": "থাকা",
    "hindi": "रहना"
  },
  "scratching_peeling_gerund": {
    "english": "Scratching / peeling (gerund)",
    "bishnupriya": "আছানি",
    "bangla": "আঁচড়ানো",
    "hindi": "खुरचने की क्रिया"
  },
  "existing_remaining": {
    "english": "Existing, remaining",
    "bishnupriya": "আছানি",
    "bangla": "থাকার অবস্থা",
    "hindi": "रहने की अवस्था"
  },
  "slip_fall_toppling_down": {
    "english": "Slip, fall, toppling down",
    "bishnupriya": "আছাড়",
    "bangla": "পিছলে পড়া",
    "hindi": "फिसलना, गिर पड़ना"
  },
  "to_pull_down_dash_against": {
    "english": "To pull down, to dash against",
    "bishnupriya": "আছাড়া",
    "bangla": "নামিয়ে ফেলা, ধাক্কা মারা",
    "hindi": "नीचे खींचना, टक्कर मारना"
  },
  "pulling_down_dashing_against_gerund": {
    "english": "Pulling down / dashing against (gerund)",
    "bishnupriya": "আছাড়ানি",
    "bangla": "ধাক্কা দেওয়া",
    "hindi": "धक्का देना / नीचे गिराना"
  },
  "it_he_remained": {
    "english": "(It/he) remained",
    "bishnupriya": "আছিল",
    "bangla": "ছিল",
    "hindi": "था"
  },
  "it_he_remains": {
    "english": "(It/he) remains",
    "bishnupriya": "আছে",
    "bangla": "আছে",
    "hindi": "है"
  },
  "to_happen": {
    "english": "To happen",
    "bishnupriya": "আজ",
    "bangla": "ঘটা",
    "hindi": "होना, घटित होना"
  },
  "carelessness_mistake": {
    "english": "Carelessness, mistake",
    "bishnupriya": "আজকতা",
    "bangla": "অসাবধানতা",
    "hindi": "लापरवाही"
  },
  "from_birth_lifelong": {
    "english": "From birth, lifelong",
    "bishnupriya": "আজন্ম",
    "bangla": "জন্ম থেকে, জীবনভর",
    "hindi": "जन्म से, आजीवन"
  },
  "grandfather": {
    "english": "Grandfather",
    "bishnupriya": "আজা",
    "bangla": "দাদু, ঠাকুরদা",
    "hindi": "दादा"
  },
  "to_cause_to_happen_overburden": {
    "english": "To cause to happen, to overburden",
    "bishnupriya": "আজা",
    "bangla": "ঘটানো, বোঝা চাপানো",
    "hindi": "करवाना, बोझ डालना"
  },
  "call_to_prayer_azaan": {
    "english": "Call to prayer (Azaan)",
    "bishnupriya": "আজান",
    "bangla": "আজান",
    "hindi": "अज़ान"
  },
  "happening_causing_to_happen_gerund": {
    "english": "Happening / causing to happen (gerund)",
    "bishnupriya": "আজানি",
    "bangla": "ঘটানোর ক্রিয়া",
    "hindi": "घटित होने की क्रिया"
  },
  "congested_overcrowded": {
    "english": "Congested, overcrowded",
    "bishnupriya": "আজাব",
    "bangla": "জ্যাম, ভিড়",
    "hindi": "भीड़भाड़, जाम"
  },
  "having_stunted_less_growth": {
    "english": "Having stunted / less growth",
    "bishnupriya": "আজালা",
    "bangla": "খর্বকায়",
    "hindi": "कम बढ़ा हुआ"
  },
  "kind_of_louse_on_animal_skin": {
    "english": "A kind of louse on animal skin",
    "bishnupriya": "আজালি",
    "bangla": "পশুর গায়ের উকুন",
    "hindi": "पशु की त्वचा पर जूँ"
  },
  "today": {
    "english": "Today",
    "bishnupriya": "আজি",
    "bangla": "আজ",
    "hindi": "आज"
  },
  "of_today_todays": {
    "english": "Of today, today's",
    "bishnupriya": "আজিকার",
    "bangla": "আজকের",
    "hindi": "आज का"
  },
  "possessed_overpowered_by_supernatural_force": {
    "english": "Possessed / overpowered by supernatural force",
    "bishnupriya": "আ'জিরাইত",
    "bangla": "ভূতে পাওয়া",
    "hindi": "भूत-प्रेत लगा हुआ"
  },
  "useless_meaningless_nonsense": {
    "english": "Useless, meaningless, nonsense",
    "bishnupriya": "আজেবাজে",
    "bangla": "আজেবাজে, বাজে",
    "hindi": "बेकार, निरर्थक"
  },
  "fantastic_strange_weird": {
    "english": "Fantastic, strange, weird",
    "bishnupriya": "আজগুবি",
    "bangla": "আজগুবি",
    "hindi": "अजीबोगरीब"
  },
  "return_backward": {
    "english": "Return, backward",
    "bishnupriya": "আঞ্চিল",
    "bangla": "ফেরত",
    "hindi": "वापसी"
  },
  "hook": {
    "english": "Hook",
    "bishnupriya": "আঞ্জি",
    "bangla": "বঁড়শি / হুক",
    "hindi": "हुक, काँटा"
  },
  "eight": {
    "english": "Eight",
    "bishnupriya": "আট",
    "bangla": "আট",
    "hindi": "आठ"
  },
  "seriously_ill": {
    "english": "Seriously ill",
    "bishnupriya": "আট",
    "bangla": "খুব অসুস্থ",
    "hindi": "गम्भीर रूप से बीमार"
  },
  "market": {
    "english": "Market",
    "bishnupriya": "আট",
    "bangla": "হাট",
    "hindi": "हाट, बाजार"
  },
  "to_be_tight_to_hold_to_full_capacity": {
    "english": "To be tight / to hold to full capacity",
    "bishnupriya": "আট",
    "bangla": "টাইট হওয়া / পুরো ধরে রাখা",
    "hindi": "कसना / पूरा भरना"
  },
  "to_walk": {
    "english": "To walk",
    "bishnupriya": "আ'ট",
    "bangla": "হাঁটা",
    "hindi": "चलना"
  },
  "to_prepare_be_ready_to_strike": {
    "english": "To prepare / to be ready to strike",
    "bishnupriya": "আনা",
    "bangla": "প্রস্তুত হওয়া / আঘাতের জন্য তৈরি হওয়া",
    "hindi": "तैयार होना / मारने को तैयार होना"
  },
  "address_to_son_in_law": {
    "english": "Address to son-in-law (lit. child)",
    "bishnupriya": "আভাঙ",
    "bangla": "জামাইকে ডাক (বাচ্চা)",
    "hindi": "दामाद को \"बच्चा\" कहकर पुकारना"
  },
  "being_prepared_ready_to_strike": {
    "english": "Being prepared / ready to strike",
    "bishnupriya": "আঙানি",
    "bangla": "প্রস্তুত অবস্থা",
    "hindi": "तैयार होने की अवस्था"
  },
  "charcoal": {
    "english": "Charcoal",
    "bishnupriya": "আঙারা",
    "bangla": "কয়লা",
    "hindi": "कोयला"
  },
  "emblic_myrobalan_amla_fruit": {
    "english": "Emblic myrobalan (Amla fruit)",
    "bishnupriya": "আ'ভালা",
    "bangla": "আমলকী",
    "hindi": "आँवला"
  },
  "plain_lower_garment_for_women": {
    "english": "Plain lower garment for women (like petticoat)",
    "bishnupriya": "আ'ঙালুরি",
    "bangla": "শায়া / পেটিকোট",
    "hindi": "साया / पेटीकोट"
  },
  "lighted_enlightened": {
    "english": "Lighted, enlightened",
    "bishnupriya": "আঙালপা",
    "bangla": "আলোকিত",
    "hindi": "प्रकाशित, प्रबुद्ध"
  },
  "shirt": {
    "english": "Shirt",
    "bishnupriya": "আঙেই / আনি",
    "bangla": "জামা",
    "hindi": "शर्ट"
  },
  "finger_toe": {
    "english": "Finger, toe",
    "bishnupriya": "আঙুনি / আঙুলি",
    "bangla": "আঙুল",
    "hindi": "उँगली"
  },
  "white": {
    "english": "White",
    "bishnupriya": "আঙ্কটৌ / আভৌপা",
    "bangla": "সাদা",
    "hindi": "सफेद"
  },
  "sun_plant_calotropis": {
    "english": "Sun-plant (Calotropis / ākanda)",
    "bishnupriya": "আঙ্কট",
    "bangla": "আকন্দ",
    "hindi": "मदार / आक"
  },
  "child": {
    "english": "Child",
    "bishnupriya": "আঙ্কু",
    "bangla": "বাচ্চা",
    "hindi": "बच्चा"
  },
  "shirt_another_form": {
    "english": "Shirt (another form)",
    "bishnupriya": "আঙ্গর",
    "bangla": "জামা",
    "hindi": "शर्ट"
  },
  "grape": {
    "english": "Grape",
    "bishnupriya": "আঙ্গুর",
    "bangla": "আঙ্গুর",
    "hindi": "अंगूर"
  },
  "return_backward_turn": {
    "english": "Return, backward turn",
    "bishnupriya": "আ'ঙচিল",
    "bangla": "ফিরে যাওয়া, পিছন",
    "hindi": "वापसी, पीछे मुड़ना"
  },
  "ring_finger_ring": {
    "english": "Ring (finger ring)",
    "bishnupriya": "আঙঠি",
    "bangla": "আংটি",
    "hindi": "अंगूठी"
  },
  "curved_like_ring_kind_of_tree": {
    "english": "Curved like a ring; a kind of tree",
    "bishnupriya": "আঙঠিয়া",
    "bangla": "আংটির মতো বাঁকা; এক প্রকার গাছ",
    "hindi": "अंगूठी जैसा मुड़ा हुआ; एक पेड़"
  },
  "persistently_unceasingly": {
    "english": "Persistently, unceasingly",
    "bishnupriya": "আংসিনা",
    "bangla": "একটানা",
    "hindi": "लगातार"
  },
  "small_coins_change": {
    "english": "Small coins, change",
    "bishnupriya": "আচইপা",
    "bangla": "খুচরো",
    "hindi": "खुल्लर"
  },
  "measure_of_drum_music_interlude": {
    "english": "A measure of drum-music (interlude)",
    "bishnupriya": "আচইপী",
    "bangla": "তালের একটা ভাগ",
    "hindi": "ढोल की एक ताल"
  },
  "shameful_obscene": {
    "english": "Shameful, obscene",
    "bishnupriya": "আচপ্পা",
    "bangla": "লজ্জাজনক, অশ্লীল",
    "hindi": "शर्मनाक, अश्लील"
  },
  "ornamented_border_of_garment": {
    "english": "Ornamented border of garment (pāṛ)",
    "bishnupriya": "আচল",
    "bangla": "আঁচল",
    "hindi": "आँचल"
  },
  "food_and_drink": {
    "english": "Food and drink",
    "bishnupriya": "আচা-আদা",
    "bangla": "খাবার-দাবার",
    "hindi": "खाना-पीना"
  },
  "medicinal_watery_plant": {
    "english": "A medicinal watery plant (helencha-type)",
    "bishnupriya": "আ'চাঙাচাক",
    "bangla": "জলজ ঔষধি গাছ",
    "hindi": "जलज औषधीय पौधा"
  },
  "ordinary_vile_low": {
    "english": "Ordinary, vile, low",
    "bishnupriya": "আচাঙপা",
    "bangla": "সাধারণ, নীচ",
    "hindi": "साधारण, नीच"
  },
  "astonished_astonishment": {
    "english": "Astonished; astonishment",
    "bishnupriya": "আচানক",
    "bangla": "অবাক; অবাক হওয়া",
    "hindi": "हैरान; हैरानी"
  },
  "wrapper_saree_border": {
    "english": "A wrapper (saree's border)",
    "bishnupriya": "আচালা",
    "bangla": "আঁচল / ওড়না",
    "hindi": "आँचल / दुपट्टा"
  },
  "lonely_peaceful_secret": {
    "english": "Lonely, peaceful; secret",
    "bishnupriya": "আচিকপা",
    "bangla": "নির্জন, শান্ত; গোপন",
    "hindi": "एकान्त, शान्त; गुप्त"
  },
  "true_exact_proper": {
    "english": "True, exact, proper",
    "bishnupriya": "আচুম্পা",
    "bangla": "ঠিক, সঠিক",
    "hindi": "बिलकुल सही"
  },
  "to_comb_to_scratch": {
    "english": "To comb / to scratch",
    "bishnupriya": "আচুর",
    "bangla": "আঁচড়ানো",
    "hindi": "कंघी करना / खुरचना"
  },
  "scratch_noun": {
    "english": "Scratch (noun)",
    "bishnupriya": "আচুরা",
    "bangla": "আঁচড়",
    "hindi": "खरोंच"
  },
  "combing_scratching_gerund": {
    "english": "Combing / scratching (gerund)",
    "bishnupriya": "আচুরানি",
    "bangla": "আঁচড়ানোর ক্রিয়া",
    "hindi": "कंघी करना / खरोंचना (क्रिया)"
  },
  "to_pull_attract_breathe_hard": {
    "english": "To pull / to attract / to breathe hard (asthma)",
    "bishnupriya": "আচুল",
    "bangla": "টানা / শ্বাস টানা",
    "hindi": "खींचना / जोर से साँस लेना"
  },
  "pull_scarcity_decrease": {
    "english": "Pull / scarcity / decrease",
    "bishnupriya": "আঙুল",
    "bangla": "টান / কমতি",
    "hindi": "खिंचाव / कमी"
  },
  "asthma": {
    "english": "Asthma",
    "bishnupriya": "আচুলা",
    "bangla": "হাঁপানি",
    "hindi": "दमा"
  },
  "pulling_breathing_hard_gerund": {
    "english": "Pulling / breathing hard (gerund)",
    "bishnupriya": "আচুলানি",
    "bangla": "টানা / হাঁপানো",
    "hindi": "खींचना / हाँफना (क्रिया)"
  },
  "attentive_attention": {
    "english": "Attentive; attention",
    "bishnupriya": "আকমুড়া",
    "bangla": "মনোযোগী; মনোযোগ",
    "hindi": "सतर्क; ध्यान"
  },
  "bow_like_cage_for_catching_birds": {
    "english": "A bow-like cage (for catching birds)",
    "bishnupriya": "আকলা",
    "bangla": "ধনুকের মতো খাঁচা",
    "hindi": "धनुष जैसा पिंजरा"
  },
  "only_lord_alone": {
    "english": "Only lord, alone",
    "bishnupriya": "আকশর",
    "bangla": "একমাত্র প্রভু, একা",
    "hindi": "एकमात्र स्वामी, अकेला"
  },
  "in_a_body_all_together_at_one_time": {
    "english": "In a body, all together, at one time",
    "bishnupriya": "আকসাটে",
    "bangla": "একসঙ্গে",
    "hindi": "एक साथ"
  },
  "so_much_very": {
    "english": "So much, very",
    "bishnupriya": "আকহবা",
    "bangla": "এতটা, খুব",
    "hindi": "इतना, बहुत"
  },
  "letter_alphabet": {
    "english": "Letter (alphabet)",
    "bishnupriya": "আখর",
    "bangla": "অক্ষর",
    "hindi": "अक्षर"
  },
  "temple_wrestling_arena": {
    "english": "Temple, wrestling arena",
    "bishnupriya": "আখাড়া",
    "bangla": "আখড়া",
    "hindi": "अखाड़ा"
  },
  "alone": {
    "english": "Alone",
    "bishnupriya": "আখালা",
    "bangla": "একা",
    "hindi": "अकेला"
  },
  "eye": {
    "english": "Eye",
    "bishnupriya": "আখি",
    "bangla": "চোখ",
    "hindi": "आँख"
  },
  "front_before": {
    "english": "Front, before",
    "bishnupriya": "আগ",
    "bangla": "সামনে, আগে",
    "hindi": "आगे, सामने"
  },
  "to_evacuate_ones_bowels": {
    "english": "To evacuate one's bowels (colloquial)",
    "bishnupriya": "আ'গ",
    "bangla": "হাগা",
    "hindi": "पाखाना करना"
  },
  "courtesy_etiquette": {
    "english": "Courtesy, etiquette",
    "bishnupriya": "আগম নিগম",
    "bangla": "শাস্ত্রজ্ঞান, ভদ্রতা",
    "hindi": "शास्त्र-ज्ञान, शिष्टाचार"
  },
  "instrument_for_piercing_boring_wood_auger": {
    "english": "Instrument for piercing/boring wood (auger)",
    "bishnupriya": "আগর",
    "bangla": "কাঠ ফোঁড়ার যন্ত্র",
    "hindi": "लकड़ी छेदने का औजार"
  },
  "rubbish_trifling_matters_nonsense": {
    "english": "Rubbish, trifling matters (nonsense)",
    "bishnupriya": "আগড়ম-বাগড়ম",
    "bangla": "আবর্জনা, তুচ্ছ কথা",
    "hindi": "कचरा, बेकार बातें"
  },
  "top_tip": {
    "english": "Top, tip",
    "bishnupriya": "আগা",
    "bangla": "ডগা, শীর্ষ",
    "hindi": "सिरा, शीर्ष"
  },
  "evacuation_of_bowels_noun": {
    "english": "Evacuation of bowels (noun)",
    "bishnupriya": "আ'গা",
    "bangla": "হাগা (বিশেষ্য)",
    "hindi": "मलत्याग"
  },
  "evacuating_bowels_gerund": {
    "english": "Evacuating bowels (gerund)",
    "bishnupriya": "আ'গানি",
    "bangla": "হাগার ক্রিয়া",
    "hindi": "मलत्याग करना (क्रिया)"
  },
  "last_dancer_in_row_in_traditional_dance": {
    "english": "The last dancer in a row (in traditional dance)",
    "bishnupriya": "আ'গা-বলুনি",
    "bangla": "নাচের শেষের নর্তক",
    "hindi": "नाच की पंक्ति में सबसे पीछे वाला"
  },
  "remaining_at_top_in_front": {
    "english": "Remaining at the top / in front",
    "bishnupriya": "আগারি",
    "bangla": "সামনে থাকা",
    "hindi": "आगे रहने वाला"
  },
  "advance_beforehand": {
    "english": "Advance, beforehand",
    "bishnupriya": "আগিলা",
    "bangla": "অগ্রিম",
    "hindi": "अग्रिम"
  },
  "fiery_very_angry": {
    "english": "Fiery, very angry",
    "bishnupriya": "আগুন",
    "bangla": "আগুনের মতো, রেগে যাওয়া",
    "hindi": "आग जैसा, बहुत गुस्सैल"
  },
  "to_proceed_to_go_ahead": {
    "english": "To proceed, to go ahead",
    "bishnupriya": "আগুরা",
    "bangla": "এগিয়ে যাওয়া",
    "hindi": "आगे बढ़ना"
  },
  "forward_ahead_at_the_head": {
    "english": "Forward, ahead, at the head",
    "bishnupriya": "আগুরান",
    "bangla": "সামনে, অগ্রবর্তী",
    "hindi": "आगे, अग्रणी"
  },
  "proceeding_leading": {
    "english": "Proceeding, leading",
    "bishnupriya": "আগুরানি",
    "bangla": "নেতৃত্ব দেওয়া",
    "hindi": "नेतृत्व करने वाला"
  },
  "coming_in_advance_first": {
    "english": "Coming in advance, first",
    "bishnupriya": "আগুরি",
    "bangla": "আগে আসা, অগ্রগামী",
    "hindi": "पहले आने वाला"
  },
  "before_in_front": {
    "english": "Before, in front",
    "bishnupriya": "আগে",
    "bangla": "আগে, সামনে",
    "hindi": "पहले, सामने"
  },
  "previous_ancient": {
    "english": "Previous, ancient",
    "bishnupriya": "আগেকার",
    "bangla": "পূর্বের, প্রাচীন",
    "hindi": "पुराना, प्राचीन"
  },
  "separate": {
    "english": "Separate",
    "bishnupriya": "আগলা",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "unsuitable_bad_place": {
    "english": "Unsuitable / bad place",
    "bishnupriya": "আঘাট",
    "bangla": "খারাপ জায়গা",
    "hindi": "अनुपयुक्त जगह"
  },
  "indian_month_agrahayana_margashirsha": {
    "english": "An Indian month (Agrahayana / Margashirsha)",
    "bishnupriya": "আঘ্রণ",
    "bangla": "অগ্রহায়ণ",
    "hindi": "मार्गशीर्ष मास"
  },
  "moving_adj": {
    "english": "Moving (adj.)",
    "bishnupriya": "আ'ঙ",
    "bangla": "চলমান",
    "hindi": "चलने वाला"
  },
  "opened_act_of_opening": {
    "english": "Opened; the act of opening",
    "bishnupriya": "আ'ঙ",
    "bangla": "খোলা; খোলার ক্রিয়া",
    "hindi": "खुला; खोलने की क्रिया"
  },
  "question": {
    "english": "Question",
    "bishnupriya": "আ'ঙ",
    "bangla": "প্রশ্ন",
    "hindi": "सवाल"
  },
  "inquiry_investigation": {
    "english": "Inquiry, investigation",
    "bishnupriya": "আঙলাক",
    "bangla": "অনুসন্ধান",
    "hindi": "जांच-पड़ताल"
  },
  "stupid_foolish": {
    "english": "Stupid, foolish",
    "bishnupriya": "আবেরা",
    "bangla": "বোকা",
    "hindi": "मूर्ख"
  },
  "disturbance_confusion": {
    "english": "Disturbance, confusion",
    "bishnupriya": "আবিজাবি",
    "bangla": "গোলমাল, হাবিজাবি",
    "hindi": "गड़बड़, हाबीजाबी"
  },
  "incoherent_irrelevant": {
    "english": "Incoherent, irrelevant",
    "bishnupriya": "আবুল-তাবুল",
    "bangla": "আজেবাজে, অপ্রাসঙ্গিক",
    "hindi": "बे-सिर-पैर"
  },
  "grandmother": {
    "english": "Grandmother",
    "bishnupriya": "আবোক",
    "bangla": "ঠাকুরমা",
    "hindi": "दादी"
  },
  "much_many": {
    "english": "Much, many",
    "bishnupriya": "আবোকচা",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "of_excise_liquor_tax": {
    "english": "Of excise (liquor tax)",
    "bishnupriya": "আবকারি",
    "bangla": "আবগারি",
    "hindi": "आबकारी"
  },
  "childish_whim_undue_demand": {
    "english": "Childish whim, undue demand",
    "bishnupriya": "আবদার",
    "bangla": "আবদার",
    "hindi": "ज़िद"
  },
  "atmosphere_climate": {
    "english": "Atmosphere, climate",
    "bishnupriya": "আব-হাওয়া",
    "bangla": "বায়ুমণ্ডল",
    "hindi": "वातावरण"
  },
  "ugly_deformed": {
    "english": "Ugly, deformed",
    "bishnupriya": "আভাঙা",
    "bangla": "কুৎসিত",
    "hindi": "बदसूरत"
  },
  "practice_habit": {
    "english": "Practice, habit",
    "bishnupriya": "আভ্যাস",
    "bangla": "অভ্যাস",
    "hindi": "अभ्यास"
  },
  "dirty": {
    "english": "Dirty",
    "bishnupriya": "আমাতপা",
    "bangla": "নোংরা",
    "hindi": "गन्दा"
  },
  "reign_period": {
    "english": "Reign, period",
    "bishnupriya": "আমল",
    "bangla": "শাসনকাল",
    "hindi": "शासनकाल"
  },
  "impure_untouchable": {
    "english": "Impure & untouchable",
    "bishnupriya": "আমান-আচাক",
    "bangla": "অপবিত্র ও অস্পৃশ্য",
    "hindi": "अपवित्र और अछूत"
  },
  "impure_dense": {
    "english": "Impure / dense",
    "bishnupriya": "আমানপা",
    "bangla": "অপবিত্র / ঘন",
    "hindi": "अपवित्र / घना"
  },
  "having_less_growth": {
    "english": "Having less growth",
    "bishnupriya": "আমানা",
    "bangla": "খর্বকায়",
    "hindi": "कम बढ़ा हुआ"
  },
  "new_moon_day": {
    "english": "New-moon day",
    "bishnupriya": "আমাবস্যা",
    "bangla": "অমাবস্যা",
    "hindi": "अमावस्या"
  },
  "we": {
    "english": "We",
    "bishnupriya": "আমি",
    "bangla": "আমরা",
    "hindi": "हम"
  },
  "suffix_indicating_characteristic": {
    "english": "Suffix indicating characteristic",
    "bishnupriya": "-আমি",
    "bangla": "বৈশিষ্ট্যবাচক প্রত্যয়",
    "hindi": "विशेषता दर्शाने वाला प्रत्यय"
  },
  "surveyor_land": {
    "english": "Surveyor (land)",
    "bishnupriya": "আমিন",
    "bangla": "আমিন",
    "hindi": "अमीन"
  },
  "to_yawn": {
    "english": "To yawn",
    "bishnupriya": "আমিউল",
    "bangla": "হাই তোলা",
    "hindi": "जँभाई लेना"
  },
  "yawning": {
    "english": "Yawning",
    "bishnupriya": "আমিয়ানি",
    "bangla": "হাই তোলার ক্রিয়া",
    "hindi": "जँभाई (क्रिया)"
  },
  "female_animal": {
    "english": "Female animal",
    "bishnupriya": "আমুন",
    "bangla": "মাদি জন্তু",
    "hindi": "मादा पशु"
  },
  "sour_edible_plant": {
    "english": "A sour edible plant (āmalakī-type)",
    "bishnupriya": "আ'মুলি",
    "bangla": "টক জাতীয় গাছ",
    "hindi": "खट्टा पौधा"
  },
  "kneaded_vegetable_preparation": {
    "english": "Kneaded vegetable preparation",
    "bishnupriya": "আমেৎপা",
    "bangla": "ময়দা-মাখা তরকারি",
    "hindi": "गुँथा हुआ सब्जी का पकवान"
  },
  "crawling": {
    "english": "Crawling",
    "bishnupriya": "আমকুরি",
    "bangla": "হামাগুড়ি",
    "hindi": "घिसटना"
  },
  "import_income": {
    "english": "Import, income",
    "bishnupriya": "আমদানি",
    "bangla": "আমদানি",
    "hindi": "आयात"
  },
  "condiment_sour_taste": {
    "english": "Condiment, sour taste",
    "bishnupriya": "আম্বল",
    "bangla": "আচার, টক",
    "hindi": "अचार, खट्टापन"
  },
  "heap_large_quantity": {
    "english": "Heap, large quantity",
    "bishnupriya": "আম্বার",
    "bangla": "গাদা",
    "hindi": "ढेर"
  },
  "foolish_idiot": {
    "english": "Foolish, idiot",
    "bishnupriya": "আম্মাক",
    "bangla": "গবেট",
    "hindi": "मूर्ख"
  },
  "true_real": {
    "english": "True, real",
    "bishnupriya": "আৱাইপা",
    "bangla": "সত্য",
    "hindi": "सच्चा"
  },
  "coming_and_going": {
    "english": "Coming and going",
    "bishnupriya": "আৱান-জাৱান",
    "bangla": "আনাগোনা",
    "hindi": "आना-जाना"
  },
  "fool_stupid": {
    "english": "Fool, stupid",
    "bishnupriya": "আৱা",
    "bangla": "বোকা",
    "hindi": "मूर्ख"
  },
  "voice_sound": {
    "english": "Voice, sound",
    "bishnupriya": "আৱাজ",
    "bangla": "আওয়াজ",
    "hindi": "आवाज़"
  },
  "other_different": {
    "english": "Other, different",
    "bishnupriya": "আর",
    "bangla": "অন্য",
    "hindi": "दूसरा"
  },
  "professional_suffix": {
    "english": "Professional suffix",
    "bishnupriya": "-আরা",
    "bangla": "পেশার প্রত্যয়",
    "hindi": "पेशा दर्शाने वाला प्रत्यय"
  },
  "bundle": {
    "english": "Bundle",
    "bishnupriya": "আ'র",
    "bangla": "গোছা",
    "hindi": "गट्ठर"
  },
  "condition_situation": {
    "english": "Condition, situation",
    "bishnupriya": "আরঙ",
    "bangla": "অবস্থা",
    "hindi": "हालत"
  },
  "enmity_rivalry": {
    "english": "Enmity, rivalry",
    "bishnupriya": "আ'রা-আরি",
    "bangla": "শত্রুতা",
    "hindi": "दुश्मनी"
  },
  "another": {
    "english": "Another",
    "bishnupriya": "আরাক",
    "bangla": "আরেক",
    "hindi": "एक और"
  },
  "gate": {
    "english": "Gate",
    "bishnupriya": "আ'রান",
    "bangla": "দরজা",
    "hindi": "दरवाज़ा"
  },
  "gateman_receptionist": {
    "english": "Gateman, receptionist",
    "bishnupriya": "আরানপা",
    "bangla": "দারোয়ান",
    "hindi": "चौकीदार"
  },
  "finishing_completion": {
    "english": "Finishing, completion",
    "bishnupriya": "আরানি",
    "bangla": "শেষ করা",
    "hindi": "समाप्ति"
  },
  "bringing_gerund": {
    "english": "Bringing (gerund)",
    "bishnupriya": "আ'নানি",
    "bangla": "আনার ক্রিয়া",
    "hindi": "लाने की क्रिया"
  },
  "all": {
    "english": "All",
    "bishnupriya": "আনাম",
    "bangla": "সব",
    "hindi": "सब"
  },
  "unenthusiastic_lazy_laziness": {
    "english": "Unenthusiastic, lazy; laziness",
    "bishnupriya": "আনাম্পা",
    "bangla": "উৎসাহহীন, অলস; অলসতা",
    "hindi": "सुस्त, आलसी; आलस्य"
  },
  "pineapple": {
    "english": "Pineapple",
    "bishnupriya": "আনারস",
    "bangla": "আনারস",
    "hindi": "अनानास"
  },
  "coming": {
    "english": "Coming",
    "bishnupriya": "আনি",
    "bangla": "আসছে",
    "hindi": "आने वाला"
  },
  "partisanship_bias": {
    "english": "Partisanship, bias",
    "bishnupriya": "আনি",
    "bangla": "পক্ষপাত",
    "hindi": "पक्षपात"
  },
  "anna_old_coin": {
    "english": "Anna (old coin)",
    "bishnupriya": "আনি",
    "bangla": "আনা (পুরনো মুদ্রা)",
    "hindi": "आना (पुरानी मुद्रा)"
  },
  "suffix_verbal_instrumental_noun": {
    "english": "Suffix – verbal/instrumental noun or adjective",
    "bishnupriya": "-আনি",
    "bangla": "ক্রিয়া/যন্ত্রবাচক প্রত্যয়",
    "hindi": "क्रिया/साधन-संज्ञा या विशेषण प्रत्यय"
  },
  "suffix_in_the_manner_of": {
    "english": "Suffix – “in the manner of”",
    "bishnupriya": "-আনি",
    "bangla": "-এর মতো (আচরণে)",
    "hindi": "\"जैसा\" अर्थ वाला प्रत्यय"
  },
  "unclean_filthy": {
    "english": "Unclean, filthy",
    "bishnupriya": "আনিকা",
    "bangla": "অপরিষ্কার, নোংরা",
    "hindi": "गन्दा, अशुद्ध"
  },
  "discomfort_drowsiness": {
    "english": "Discomfort, drowsiness",
    "bishnupriya": "আনিনসানিন",
    "bangla": "অস্বস্তি, তন্দ্রा",
    "hindi": "बेचैनी, उनींदापन"
  },
  "causative_of_to_bring": {
    "english": "Causative of “to bring”",
    "bishnupriya": "আনুয়া",
    "bangla": "আনানো",
    "hindi": "लाना (सकर्मक)"
  },
  "lake_uncultivated_wetland": {
    "english": "Lake / uncultivated wetland",
    "bishnupriya": "আ'নুয়া",
    "bangla": "হ্রদ / জলাভূমি",
    "hindi": "झील / दलदली ज़मीन"
  },
  "step_mother_brother": {
    "english": "Step-mother/brother etc.",
    "bishnupriya": "আ'নাউগো",
    "bangla": "সৎমা/সৎভাই",
    "hindi": "सौतेली माँ/भाई आदि"
  },
  "new_royal_clan": {
    "english": "New royal clan (Manipuri clan name)",
    "bishnupriya": "আ'নৌবাম",
    "bangla": "নতুন রাজবংশ",
    "hindi": "नया राजवंश"
  },
  "return": {
    "english": "Return",
    "bishnupriya": "আ'ন্থক",
    "bangla": "ফেরত",
    "hindi": "वापसी"
  },
  "turned_aged": {
    "english": "Turned / aged",
    "bishnupriya": "আন্থা",
    "bangla": "ঘুরে গেছে / বুড়ো",
    "hindi": "पलटा हुआ / बूढ़ा"
  },
  "conjecture_guess_about_nearly_mediocre": {
    "english": "Conjecture, guess; about, nearly; mediocre",
    "bishnupriya": "আন্দাজ",
    "bangla": "অনুমান, প্রায়, মাঝারি",
    "hindi": "अंदाज़ा, लगभग, औसत"
  },
  "guessed_mediocre": {
    "english": "Guessed / mediocre (adj.)",
    "bishnupriya": "আন্দাজি",
    "bangla": "অনুমান করা, মাঝারি",
    "hindi": "अनुमानित, औसत"
  },
  "turmeric_yellow_colour": {
    "english": "Turmeric / yellow colour",
    "bishnupriya": "আ'ন্দি",
    "bangla": "হলুদ",
    "hindi": "हल्दी / पीला रंग"
  },
  "yellowish": {
    "english": "Yellowish",
    "bishnupriya": "আ'ন্দিয়া",
    "bangla": "হলদেটে",
    "hindi": "पीला-सा"
  },
  "yellowish_another_form": {
    "english": "Yellowish (another form)",
    "bishnupriya": "আ'ন্দিরা",
    "bangla": "হলদেটে",
    "hindi": "पीला-सा"
  },
  "meaningless_aimless": {
    "english": "Meaningless, aimless",
    "bishnupriya": "আন্দু",
    "bangla": "অর্থহীন",
    "hindi": "निरर्थक"
  },
  "yellow_intensive": {
    "english": "Yellow (intensive)",
    "bishnupriya": "আ'ন্দুকা",
    "bangla": "গাঢ় হলুদ",
    "hindi": "गहरा पीला"
  },
  "unmindful_absent_minded": {
    "english": "Unmindful, absent-minded",
    "bishnupriya": "আনমানা",
    "bangla": "অন্যমনস্ক",
    "hindi": "बेखबर, भुलक्कड़"
  },
  "in_proportion_to": {
    "english": "In proportion to",
    "bishnupriya": "আনমান",
    "bangla": "অনুপাতে",
    "hindi": "अनुपात में"
  },
  "father_forefathers": {
    "english": "Father / forefathers",
    "bishnupriya": "আপা / আপা-বাপা",
    "bangla": "বাবা / পূর্বপুরুষ",
    "hindi": "पिता / पूर्वज"
  },
  "fool_idiot": {
    "english": "Fool, idiot",
    "bishnupriya": "আ'পান",
    "bangla": "বোকা",
    "hindi": "मूर्ख"
  },
  "endless_without_end": {
    "english": "Endless, without end",
    "bishnupriya": "আপার",
    "bangla": "অসীম",
    "hindi": "अनंत"
  },
  "grandfather_colloquial": {
    "english": "Grandfather (colloquial)",
    "bishnupriya": "আপু",
    "bangla": "দাদু / ঠাকুরদা",
    "hindi": "दादा"
  },
  "compromise_settlement": {
    "english": "Compromise, settlement",
    "bishnupriya": "আপুস",
    "bangla": "আপস",
    "hindi": "समझौता"
  },
  "having_childish_stubbornness": {
    "english": "Having childish stubbornness",
    "bishnupriya": "আপেৎপা",
    "bangla": "শিশুসুলভ জেদ",
    "hindi": "बच्चों जैसी जिद"
  },
  "ancestral_deity_clan_god": {
    "english": "Ancestral deity / clan god",
    "bishnupriya": "আপোকপা",
    "bangla": "কুলদেবতা",
    "hindi": "कुलदेवता"
  },
  "you_honorific_polite": {
    "english": "You (honorific, polite)",
    "bishnupriya": "আপ্নে",
    "bangla": "আপনি",
    "hindi": "आप"
  },
  "for_nothing_in_vain": {
    "english": "For nothing, in vain",
    "bishnupriya": "আপ্পানে",
    "bangla": "বৃথায়",
    "hindi": "व्यर्थ"
  },
  "repentance_remorse": {
    "english": "Repentance, remorse",
    "bishnupriya": "আপসোস",
    "bangla": "আফসোস",
    "hindi": "पछतावा"
  },
  "beyond_knowledge_unknowable": {
    "english": "Beyond knowledge, unknowable",
    "bishnupriya": "আফারকে",
    "bangla": "অজ্ঞেয়",
    "hindi": "अज्ञात"
  },
  "flood_deluge": {
    "english": "Flood, deluge",
    "bishnupriya": "আফাই",
    "bangla": "বন্যা",
    "hindi": "बाढ़"
  },
  "wave": {
    "english": "Wave",
    "bishnupriya": "আফাল",
    "bangla": "ঢেউ",
    "hindi": "लहर"
  },
  "opium": {
    "english": "Opium",
    "bishnupriya": "আফিন",
    "bangla": "আফিম",
    "hindi": "अफीम"
  },
  "hot_headed_short_tempered": {
    "english": "Hot-headed, short-tempered",
    "bishnupriya": "আফিনপা",
    "bangla": "গরম মাথা",
    "hindi": "गुस्सैल"
  },
  "holi_colour_powder": {
    "english": "Holi colour powder (abīr)",
    "bishnupriya": "আফির",
    "bangla": "আবীর",
    "hindi": "अबीर"
  },
  "confinement_obstruction": {
    "english": "Confinement, obstruction",
    "bishnupriya": "আটাক",
    "bangla": "আটকানো, বাধা",
    "hindi": "रोक, कैद"
  },
  "tightening": {
    "english": "Tightening",
    "bishnupriya": "আটান",
    "bangla": "টাইট করা",
    "hindi": "कसाव"
  },
  "walking": {
    "english": "Walking",
    "bishnupriya": "আটান",
    "bangla": "হাঁটা",
    "hindi": "चलना"
  },
  "flour": {
    "english": "Flour",
    "bishnupriya": "আটঁা",
    "bangla": "ময়দা",
    "hindi": "आटा"
  },
  "laziness": {
    "english": "Laziness",
    "bishnupriya": "আটঁা",
    "bangla": "অলসতা",
    "hindi": "आलस्य"
  },
  "tightness_firmness": {
    "english": "Tightness, firmness",
    "bishnupriya": "আটা",
    "bangla": "শক্ততা",
    "hindi": "कसावट"
  },
  "walk_noun": {
    "english": "Walk (noun)",
    "bishnupriya": "আটা",
    "bangla": "হাঁটা",
    "hindi": "पैदल चलना"
  },
  "to_tighten_causative": {
    "english": "To tighten (causative)",
    "bishnupriya": "আটঁা",
    "bangla": "শক্ত করা",
    "hindi": "कसना (सकर्मक)"
  },
  "to_cause_to_move_to_count": {
    "english": "To cause to move / to count",
    "bishnupriya": "আটা",
    "bangla": "চালানো / গোনা",
    "hindi": "चलाना / गिनना"
  },
  "walking_gerund": {
    "english": "Walking (gerund)",
    "bishnupriya": "আটানি",
    "bangla": "হাঁটার ক্রিয়া",
    "hindi": "चलने की क्रिया"
  },
  "being_tight_tightening_gerund": {
    "english": "Being tight / tightening (gerund)",
    "bishnupriya": "আটানি",
    "bangla": "শক্ত হওয়া / শক্ত করা",
    "hindi": "कसना / कसावट"
  },
  "market_small": {
    "english": "Market (small)",
    "bishnupriya": "আটি",
    "bangla": "হাট",
    "hindi": "छोटा बाजार"
  },
  "bundle_bunch": {
    "english": "Bundle, bunch",
    "bishnupriya": "আটি",
    "bangla": "আঁটি",
    "hindi": "गठरी, बंडल"
  },
  "congested_over_crowded": {
    "english": "Congested, over-crowded",
    "bishnupriya": "আটিত-পিটিত",
    "bangla": "গিজগিজে, ঠাসা",
    "hindi": "बहुत भीड़भाड़"
  },
  "rope_for_tightening": {
    "english": "Rope for tightening",
    "bishnupriya": "আটুনি",
    "bangla": "শক্ত করার দড়ি",
    "hindi": "कसने की रस्सी"
  },
  "idle_laziness": {
    "english": "Idle, laziness",
    "bishnupriya": "আটেল",
    "bangla": "অলস",
    "hindi": "आलसी"
  },
  "lazy_idle": {
    "english": "Lazy, idle",
    "bishnupriya": "আটেলপা",
    "bangla": "অলস",
    "hindi": "आलसी"
  },
  "lazy_female": {
    "english": "Lazy (female)",
    "bishnupriya": "আটেলপী",
    "bangla": "অলস (স্ত্রী.)",
    "hindi": "आलसी (स्त्री.)"
  },
  "to_be_obstructed_confined": {
    "english": "To be obstructed / confined",
    "bishnupriya": "আটক",
    "bangla": "আটকে যাওয়া",
    "hindi": "अटकना, कैद होना"
  },
  "to_obstruct_confine": {
    "english": "To obstruct / confine",
    "bishnupriya": "আটকা",
    "bangla": "আটকানো",
    "hindi": "रोकना, कैद करना"
  },
  "being_obstructed_obstructing_gerund": {
    "english": "Being obstructed / obstructing (gerund)",
    "bishnupriya": "আটকানি",
    "bangla": "আটকানোর ক্রিয়া",
    "hindi": "रोकने की क्रिया"
  },
  "idle_niggardly": {
    "english": "Idle / niggardly (person who is very stingy)",
    "bishnupriya": "আটকুরা / আটকুরিয়া",
    "bangla": "কৃপণ, কিপ্টে",
    "hindi": "कंजूस"
  },
  "niggardly_female": {
    "english": "Niggardly (female)",
    "bishnupriya": "আটকুরী",
    "bangla": "কৃপণ (স্ত্রী.)",
    "hindi": "कंजूस (स्त्री.)"
  },
  "eight_sides_all_directions": {
    "english": "Eight sides, all directions",
    "bishnupriya": "আটঘাট",
    "bangla": "আটদিক",
    "hindi": "आठों दिशाएँ"
  },
  "sky": {
    "english": "Sky",
    "bishnupriya": "আটিঙা",
    "bangla": "আকাশ",
    "hindi": "आकाश"
  },
  "excess_superior": {
    "english": "Excess, superior",
    "bishnupriya": "আঠইপা",
    "bangla": "অতিরিক্ত, উৎকৃষ্ট",
    "hindi": "अधिक, श्रेष्ठ"
  },
  "sticky_niggardly": {
    "english": "Sticky / niggardly",
    "bishnupriya": "আঠা",
    "bangla": "আঠালো / কৃপণ",
    "hindi": "चिपचिपा / कंजूस"
  },
  "eighteen": {
    "english": "Eighteen",
    "bishnupriya": "আঠারা",
    "bangla": "আঠারো",
    "hindi": "अठारह"
  },
  "sticky_soil_kind_of_worm": {
    "english": "Sticky soil / a kind of worm on animal skin",
    "bishnupriya": "আঠালি",
    "bangla": "আঠালো মাটি / পশুর গায়ের কীট",
    "hindi": "चिपचिपी मिट्टी / पशु की त्वचा का कीड़ा"
  },
  "stony_seed_hard_seed": {
    "english": "Stony seed (hard seed)",
    "bishnupriya": "আঠি",
    "bangla": "শক্ত বীজ",
    "hindi": "कठोर बीज"
  },
  "short_statured_looking_like_seed": {
    "english": "Short-statured / looking like a seed",
    "bishnupriya": "আঠিয়া",
    "bangla": "খর্বাকৃতি",
    "hindi": "बौना"
  },
  "short_statured_stunted_growth": {
    "english": "Short-statured / stunted growth",
    "bishnupriya": "আঠিলা",
    "bangla": "খর্ব, বাড়ছে না",
    "hindi": "बौना, कम बढ़ा हुआ"
  },
  "knee": {
    "english": "Knee",
    "bishnupriya": "আঠু",
    "bangla": "হাঁটু",
    "hindi": "घुटना"
  },
  "sweet_sweets": {
    "english": "Sweet / sweets",
    "bishnupriya": "আঠুম্পা",
    "bangla": "মিষ্টি",
    "hindi": "मीठा / मिठाई"
  },
  "temporary_lodging_meeting_place": {
    "english": "Temporary lodging, meeting place",
    "bishnupriya": "আড্ডা",
    "bangla": "আড্ডা",
    "hindi": "अड्डा"
  },
  "hand_cubit_measurement": {
    "english": "Hand / cubit (measurement)",
    "bishnupriya": "আট",
    "bangla": "হাত / হাত পরিমাপ",
    "hindi": "हाथ / हाथ लम्बाई"
  },
  "different_special": {
    "english": "Different, special",
    "bishnupriya": "আটপ্পা",
    "bangla": "আলাদা, বিশেষ",
    "hindi": "अलग, खास"
  },
  "vile_low": {
    "english": "Vile, low",
    "bishnupriya": "আটলপা",
    "bangla": "নীচ, হীন",
    "hindi": "नीच"
  },
  "handful_bundle_of_seedlings": {
    "english": "Handful / bundle of seedlings",
    "bishnupriya": "আটা",
    "bangla": "মুঠো / চারা গোছা",
    "hindi": "मुट्ठी / पौधों का गट्ठर"
  },
  "to_touch": {
    "english": "To touch",
    "bishnupriya": "আটা",
    "bangla": "ছোঁয়া",
    "hindi": "छूना"
  },
  "custard_apple": {
    "english": "Custard apple",
    "bishnupriya": "আটঁা",
    "bangla": "আতা",
    "hindi": "शरीफा / सीताफल"
  },
  "incomplete_incompletely": {
    "english": "Incomplete; incompletely",
    "bishnupriya": "আলাসা-বালাসা",
    "bangla": "আধখেঁচড়া; আধখেঁচড়াভাবে",
    "hindi": "अधूरा; अधूरे ढंग से"
  },
  "suffix_connection_possession": {
    "english": "Suffix – connection / possession",
    "bishnupriya": "-আলি",
    "bangla": "সম্পর্ক/অধিকারী প্রত্যয়",
    "hindi": "संबंध/मालिकाना प्रत्यय"
  },
  "aversion_hatred": {
    "english": "Aversion, hatred",
    "bishnupriya": "আলি",
    "bangla": "অনিচ্ছা, ঘৃণা",
    "hindi": "अरुचि, नफरत"
  },
  "raised_boundary_small_dam": {
    "english": "Raised boundary / small dam",
    "bishnupriya": "আলি",
    "bangla": "আল, বাঁধ",
    "hindi": "मेड़, छोटा बाँध"
  },
  "laziness": {
    "english": "Laziness",
    "bishnupriya": "আলি",
    "bangla": "অলসতা",
    "hindi": "आलस्य"
  },
  "lazy": {
    "english": "Lazy",
    "bishnupriya": "আলিয়া",
    "bangla": "অলস",
    "hindi": "आलसी"
  },
  "potato": {
    "english": "Potato",
    "bishnupriya": "আলু",
    "bangla": "আলু",
    "hindi": "आलू"
  },
  "cultivator": {
    "english": "Cultivator",
    "bishnupriya": "আলুয়া",
    "bangla": "চাষি",
    "hindi": "किसान"
  },
  "woolen_wrapper_colourful_blanket": {
    "english": "Woolen wrapper / colourful blanket",
    "bishnupriya": "আলুয়ান",
    "bangla": "উলের চাদর",
    "hindi": "ऊनी कम्बल"
  },
  "tar_pitch": {
    "english": "Tar, pitch",
    "bishnupriya": "আলকাতারা",
    "bangla": "আলকাতরা",
    "hindi": "अलकतरा"
  },
  "separate": {
    "english": "Separate",
    "bishnupriya": "আলগা",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "to_separate": {
    "english": "To separate",
    "bishnupriya": "আলগা",
    "bangla": "আলাদা করা",
    "hindi": "अलग करना"
  },
  "separating_gerund": {
    "english": "Separating (gerund)",
    "bishnupriya": "আলগানি",
    "bangla": "আলাদা করার ক্রিয়া",
    "hindi": "अलग करने की क्रिया"
  },
  "lac_dye_red_dye_for_feet": {
    "english": "Lac-dye, red dye for feet",
    "bishnupriya": "আলতা",
    "bangla": "আলতা",
    "hindi": "अल्ता"
  },
  "meaningless_meaninglessly": {
    "english": "Meaningless; meaninglessly",
    "bishnupriya": "আলতু-ফালতু",
    "bangla": "আজেবাজে; আজেবাজেভাবে",
    "hindi": "बेकार; बेकार ढंग से"
  },
  "returned": {
    "english": "Returned",
    "bishnupriya": "আ'লথক",
    "bangla": "ফিরে এসেছে",
    "hindi": "वापस आया"
  },
  "ulcer_on_animal_tongue": {
    "english": "Ulcer on animal tongue",
    "bishnupriya": "আলদা",
    "bangla": "জিহ্বায় ঘা",
    "hindi": "जीभ पर छाला"
  },
  "turmeric_yellow_alternative": {
    "english": "Turmeric / yellow (alternative)",
    "bishnupriya": "আ'লদি / আ'লদিয়া",
    "bangla": "হলুদ",
    "hindi": "हल्दी / पीला"
  },
  "dress_hanger": {
    "english": "Dress-hanger",
    "bishnupriya": "আলনা",
    "bangla": "কাপড় ঝোলানোর রড",
    "hindi": "कपड़े टांगने की छड़"
  },
  "almirah_cupboard": {
    "english": "Almirah, cupboard",
    "bishnupriya": "আলমারি",
    "bangla": "আলমারি",
    "hindi": "अलमारी"
  },
  "indian_month_ashwin": {
    "english": "An Indian month (Ashwin)",
    "bishnupriya": "আশিন",
    "bangla": "আশ্বিন",
    "hindi": "आश्विन मास"
  },
  "in_close_quarters_nearby": {
    "english": "In close quarters / nearby",
    "bishnupriya": "আশেপাশে",
    "bangla": "কাছাকাছি",
    "hindi": "आस-पास"
  },
  "paddy_sown_in_ashadh": {
    "english": "Paddy sown in Ashadh",
    "bishnupriya": "আষাঢ়া",
    "bangla": "আষাঢ়ে বোনা ধান",
    "hindi": "आषाढ़ में बोया धान"
  },
  "duck_swan": {
    "english": "Duck / swan",
    "bishnupriya": "আ'স",
    "bangla": "হাঁস / রাজহাঁস",
    "hindi": "बत्तख / हंस"
  },
  "sitting_posture_while_eating": {
    "english": "Sitting posture while eating",
    "bishnupriya": "আসামান",
    "bangla": "খাওয়ার সময় বসার ভঙ্গি",
    "hindi": "खाना खाते समय बैठने की मुद्रा"
  },
  "gathering_meeting": {
    "english": "Gathering, meeting",
    "bishnupriya": "আসর",
    "bangla": "আসর",
    "hindi": "मजलिस, सभा"
  },
  "real_genuine": {
    "english": "Real, genuine",
    "bishnupriya": "আসল",
    "bangla": "আসল",
    "hindi": "असली"
  },
  "weak": {
    "english": "Weak",
    "bishnupriya": "আসলপা",
    "bangla": "দুর্বল",
    "hindi": "कमज़ोर"
  },
  "green": {
    "english": "Green",
    "bishnupriya": "আ'সানপা",
    "bangla": "সবুজ",
    "hindi": "हरा"
  },
  "the_accused": {
    "english": "The accused",
    "bishnupriya": "আসামি",
    "bangla": "আসামি",
    "hindi": "आरोपी"
  },
  "whole_complete_simple_person": {
    "english": "Whole, complete / simple person",
    "bishnupriya": "আসুতা",
    "bangla": "পুরো / সরল",
    "hindi": "पूरा / सादा"
  },
  "layer": {
    "english": "Layer",
    "bishnupriya": "আস্তর",
    "bangla": "স্তর",
    "hindi": "परत"
  },
  "whole_complete": {
    "english": "Whole, complete",
    "bishnupriya": "আস্তা",
    "bangla": "পুরো",
    "hindi": "पूरा"
  },
  "slowly_softly": {
    "english": "Slowly, softly",
    "bishnupriya": "আস্তে",
    "bangla": "আস্তে",
    "hindi": "धीरे-धीरे"
  },
  "hospital": {
    "english": "Hospital",
    "bishnupriya": "আসপাতাল",
    "bangla": "হাসপাতাল",
    "hindi": "अस्पताल"
  },
  "to_come": {
    "english": "To come",
    "bishnupriya": "আহ",
    "bangla": "আসা",
    "hindi": "आना"
  },
  "to_laugh": {
    "english": "To laugh",
    "bishnupriya": "আ'হ",
    "bangla": "হাসা",
    "hindi": "हँसना"
  },
  "arm": {
    "english": "Arm",
    "bishnupriya": "আহা",
    "bangla": "বাহু",
    "hindi": "बाँह"
  },
  "armpit": {
    "english": "Armpit",
    "bishnupriya": "আহাতুলি",
    "bangla": "বগল",
    "hindi": "बगल"
  },
  "coming_gerund": {
    "english": "Coming (gerund)",
    "bishnupriya": "আহানি",
    "bangla": "আসার ক্রিয়া",
    "hindi": "आने की क्रिया"
  },
  "laughing_gerund": {
    "english": "Laughing (gerund)",
    "bishnupriya": "আ'হানি",
    "bangla": "হাসার ক্রিয়া",
    "hindi": "हँसने की क्रिया"
  },
  "aged_old": {
    "english": "Aged, old",
    "bishnupriya": "আ'হাল",
    "bangla": "বুড়ো",
    "hindi": "बूढ़ा"
  },
  "eye": {
    "english": "Eye",
    "bishnupriya": "আহি",
    "bangla": "চোখ",
    "hindi": "आँख"
  },
  "coming_future_participle": {
    "english": "Coming (future participle)",
    "bishnupriya": "আহিবা",
    "bangla": "আসছে (ভবিষ্যৎ)",
    "hindi": "आने वाला"
  },
  "eye_disease_ophthalmia": {
    "english": "Eye disease, ophthalmia",
    "bishnupriya": "আহিয়াল",
    "bangla": "চোখের রোগ",
    "hindi": "आँख की बीमारी"
  },
  "joint_as_of_bamboo": {
    "english": "A joint (as of bamboo)",
    "bishnupriya": "আহিয়া",
    "bangla": "বাঁশের গিঁট",
    "hindi": "बाँस का पोर"
  },
  "causative_of_to_laugh": {
    "english": "Causative of \"to laugh\"",
    "bishnupriya": "আ'হুয়া",
    "bangla": "হাসানো",
    "hindi": "हँसाना"
  },
  "pull_attraction_alternative": {
    "english": "Pull, attraction (alternative)",
    "bishnupriya": "আ'হুল / আ'হুল",
    "bangla": "টান",
    "hindi": "खींचाव"
  },
  "pulling_attracting_gerund_2": {
    "english": "Pulling, attracting (gerund)",
    "bishnupriya": "আ'হুলানি",
    "bangla": "টানার ক্রিয়া",
    "hindi": "खींचने की क्रिया"
  },
  "i_first_person_singular": {
    "english": "I (1st person singular)",
    "bishnupriya": "ই",
    "bangla": "আমি",
    "hindi": "मैं"
  },
  "to_be_to_become": {
    "english": "To be, to become",
    "bishnupriya": "ই",
    "bangla": "হওয়া",
    "hindi": "होना"
  },
  "it_has_become": {
    "english": "It has become",
    "bishnupriya": "ইছে",
    "bangla": "হয়ে গেছে",
    "hindi": "हो गया"
  },
  "plural_suffix_go_gi": {
    "english": "Plural suffix (-go → -gi, -hän → -hi)",
    "bishnupriya": "-ই",
    "bangla": "বহুবচন প্রত্যয়",
    "hindi": "बहुवचन प्रत्यय"
  },
  "suffix_having_belonging_to_diminutive": {
    "english": "Suffix – having / belonging to / diminutive",
    "bishnupriya": "-ই",
    "bangla": "অধিকারী / সম্পর্কিত / ছোটো",
    "hindi": "वाला / संबंधित / छोटा"
  },
  "suffix_to_form_concrete_nouns_from_verbs": {
    "english": "Suffix to form concrete nouns from verbs",
    "bishnupriya": "-ই",
    "bangla": "কংক্রিট নামবাচক প্রত্যয়",
    "hindi": "क्रिया से संज्ञा बनाने वाला प्रत्यय"
  },
  "suffix_indicating_relation": {
    "english": "Suffix indicating relation",
    "bishnupriya": "-ইক / -ইকা",
    "bangla": "সম্পর্কবাচক প্রত্যয়",
    "hindi": "संबंध दर्शाने वाला प्रत्यय"
  },
  "to_write": {
    "english": "To write",
    "bishnupriya": "ইক",
    "bangla": "লেখা",
    "hindi": "लिखना"
  },
  "lower_end_of_thatch": {
    "english": "Lower end of thatch",
    "bishnupriya": "ইকাক",
    "bangla": "খড়ের নিচের দিক",
    "hindi": "छप्पर का निचला सिरा"
  },
  "to_write_another_form": {
    "english": "To write (another form)",
    "bishnupriya": "ইকার",
    "bangla": "লেখা",
    "hindi": "लिखना"
  },
  "writing_gerund": {
    "english": "Writing (gerund)",
    "bishnupriya": "ইকারানি",
    "bangla": "লেখার ক্রিয়া",
    "hindi": "लिखने की क्रिया"
  },
  "suffix_relation_another_form": {
    "english": "Suffix – relation (another form)",
    "bishnupriya": "-ইকা",
    "bangla": "সম্পর্কবাচক প্রত্যয়",
    "hindi": "संबंध सूचक प्रत्यय"
  },
  "fish_appears_at_start_of_monsoon": {
    "english": "A fish that appears at start of monsoon",
    "bishnupriya": "ইকা",
    "bangla": "বর্ষার প্রথম মাছ",
    "hindi": "बरसात की शुरुआत में आने वाली मछली"
  },
  "dirty_layer_in_hookah": {
    "english": "Dirty layer in hookah",
    "bishnupriya": "ইকান",
    "bangla": "হুকোর ময়লা",
    "hindi": "हुक्के में जमा गन्दगी"
  },
  "excess_more_than_enough": {
    "english": "Excess, more than enough",
    "bishnupriya": "আহেলপা",
    "bangla": "অতিরিক্ত",
    "hindi": "ज़्यादा"
  },
  "one_hundred": {
    "english": "One hundred",
    "bishnupriya": "আহৌ",
    "bangla": "একশো",
    "hindi": "सौ"
  },
  "indeed_so_much_really": {
    "english": "Indeed, so much, really",
    "bishnupriya": "আহৌবা",
    "bangla": "সত্যিই এতটা",
    "hindi": "सचमुच इतना"
  },
  "ah_alas": {
    "english": "Ah! Alas!",
    "bishnupriya": "আহ",
    "bangla": "আহা! দুঃখ!",
    "hindi": "आह! हाय!"
  },
  "writing_another_form": {
    "english": "Writing (another form)",
    "bishnupriya": "ইকানি",
    "bangla": "লেখালেখি",
    "hindi": "लिखाई"
  },
  "sensitive_plant": {
    "english": "Sensitive plant (lajjābatī)",
    "bishnupriya": "ইকৌতারি / ইকৌথাপি",
    "bangla": "লজ্জাবতী",
    "hindi": "छुई-मुई"
  },
  "father_in_law_address": {
    "english": "Father-in-law (address)",
    "bishnupriya": "ইকু",
    "bangla": "শ্বশুর",
    "hindi": "ससुर"
  },
  "to_hiccough": {
    "english": "To hiccough",
    "bishnupriya": "ইকুতা",
    "bangla": "হেঁচকি তোলা",
    "hindi": "हिचकी आना"
  },
  "hiccoughing": {
    "english": "Hiccoughing",
    "bishnupriya": "ইকুতানি",
    "bangla": "হেঁচকি",
    "hindi": "हिचकी"
  },
  "spot_fault": {
    "english": "Spot, fault",
    "bishnupriya": "ইখুৎ",
    "bangla": "দাগ, দোষ",
    "hindi": "दाग, खोट"
  },
  "cold": {
    "english": "Cold",
    "bishnupriya": "ইন",
    "bangla": "ঠান্ডা",
    "hindi": "ठंडा"
  },
  "reddish_layer_on_teeth_tartar": {
    "english": "Reddish layer on teeth (tartar)",
    "bishnupriya": "ইনান",
    "bangla": "দাঁতের লাল আবরণ",
    "hindi": "दाँतों पर लाल परत"
  },
  "bright_shining": {
    "english": "Bright, shining",
    "bishnupriya": "ইনালনাল",
    "bangla": "উজ্জ্বল",
    "hindi": "चमकीला"
  },
  "kind_of_flower": {
    "english": "A kind of flower",
    "bishnupriya": "ইনেলেই",
    "bangla": "এক ধরনের ফুল",
    "hindi": "एक तरह का फूल"
  },
  "english_language_person": {
    "english": "English (language/person)",
    "bishnupriya": "ইংরেজি",
    "bangla": "ইংরেজি",
    "hindi": "अंग्रेजी"
  },
  "fishing_net": {
    "english": "Fishing net",
    "bishnupriya": "ইঞ্চিল / ইঞ্চেল",
    "bangla": "মাছ ধরার জাল",
    "hindi": "मछली पकड़ने का जाल"
  },
  "cold_adjective": {
    "english": "Cold (adj.)",
    "bishnupriya": "ইনপা",
    "bangla": "ঠান্ডা",
    "hindi": "ठंडा"
  },
  "spirit_courage_courtesy": {
    "english": "Spirit / courage / courtesy",
    "bishnupriya": "ইচান",
    "bangla": "সাহস, ভদ্রতা",
    "hindi": "हिम्मत, शिष्टाचार"
  },
  "shrimp_small_prawn": {
    "english": "Shrimp / small prawn",
    "bishnupriya": "ইচা",
    "bangla": "চিংড়ি",
    "hindi": "छोटी झींगा"
  },
  "enthusiasm_active": {
    "english": "Enthusiasm / active",
    "bishnupriya": "ইচান্থৌ",
    "bangla": "উৎসাহ, সক্রিয়",
    "hindi": "जोश, सक्रिय"
  },
  "of_this_amount_measure": {
    "english": "Of this amount/measure",
    "bishnupriya": "ইচু",
    "bangla": "এই পরিমাণ",
    "hindi": "इतनी मात्रा"
  },
  "water_flowing_from_homestead": {
    "english": "Water flowing from homestead",
    "bishnupriya": "ইচুম",
    "bangla": "বাড়ির নিচু জমির জল",
    "hindi": "घर के आसपास का बहता पानी"
  },
  "watery_secretion_from_wound": {
    "english": "Watery secretion from a wound",
    "bishnupriya": "ইচুম",
    "bangla": "ঘা থেকে পানি",
    "hindi": "घाव से पानी"
  },
  "suffix_for_profession": {
    "english": "Suffix for profession",
    "bishnupriya": "-আরি",
    "bangla": "পেশার প্রত্যয়",
    "hindi": "पेशा दर्शाने वाला प्रत्यय"
  },
  "suffix_indicating_position": {
    "english": "Suffix indicating position",
    "bishnupriya": "-আরি",
    "bangla": "অবস্থানবাচক প্রত্যয়",
    "hindi": "स्थिति दर्शाने वाला प्रत्यय"
  },
  "obstinate": {
    "english": "Obstinate",
    "bishnupriya": "আরিকাল",
    "bangla": "জেদি",
    "hindi": "ज़िद्दी"
  },
  "niggardly_stingy": {
    "english": "Niggardly, stingy",
    "bishnupriya": "আরিকপা",
    "bangla": "কৃপণ",
    "hindi": "कंजूस"
  },
  "old_neighbour_old_clan_name": {
    "english": "Old / neighbour; old clan name",
    "bishnupriya": "আরিপা / আ'রিবাম",
    "bangla": "বুড়ো / প্রতিবেশী; পুরোনো বংশ",
    "hindi": "बूढ़ा / पड़ोसी; पुराना कुल"
  },
  "loss_of_appetite": {
    "english": "Loss of appetite",
    "bishnupriya": "আরুচা",
    "bangla": "অরুচি",
    "hindi": "भूख न लगना"
  },
  "secret_delicate": {
    "english": "Secret, delicate",
    "bishnupriya": "আরুপা",
    "bangla": "গোপন, সূক্ষ্ম",
    "hindi": "गुप्त, नाज़ुक"
  },
  "shade_shadow_warmth_of_fever": {
    "english": "Shade, shadow / warmth of fever",
    "bishnupriya": "আরুম",
    "bangla": "ছায়া / জ্বরের গরম",
    "hindi": "छाया / बुखार की गर्मी"
  },
  "on_account_of_because": {
    "english": "On account of, because",
    "bishnupriya": "আরো",
    "bangla": "কারণে",
    "hindi": "के कारण"
  },
  "petition": {
    "english": "Petition",
    "bishnupriya": "আর্জি",
    "bangla": "আরজি",
    "hindi": "अर्जी"
  },
  "waving_of_light_before_deity": {
    "english": "Waving of light before deity (āratī)",
    "bishnupriya": "আরতি",
    "bangla": "আরতি",
    "hindi": "आरती"
  },
  "orderly_peon": {
    "english": "Orderly (peon)",
    "bishnupriya": "আর্দালি",
    "bangla": "অর্ডার্লি",
    "hindi": "ऑर्डरली"
  },
  "bone": {
    "english": "Bone",
    "bishnupriya": "আর",
    "bangla": "হাড়",
    "hindi": "हड्डी"
  },
  "two_and_a_half": {
    "english": "Two and a half",
    "bishnupriya": "আরাই",
    "bangla": "আড়াই",
    "hindi": "साढ़े दो"
  },
  "concealment_screen": {
    "english": "Concealment, screen",
    "bishnupriya": "আরাল",
    "bangla": "আড়াল",
    "hindi": "ओट, पर्दा"
  },
  "cooking_pot": {
    "english": "Cooking pot",
    "bishnupriya": "আরি",
    "bangla": "হাঁড়ি",
    "hindi": "हांडी"
  },
  "hubbub_commotion": {
    "english": "Hubbub, commotion",
    "bishnupriya": "আরি",
    "bangla": "গোলমাল",
    "hindi": "हल्ला"
  },
  "having_less_growth_stunted": {
    "english": "Having less growth / stunted",
    "bishnupriya": "আরিয়া",
    "bangla": "খর্বকায়",
    "hindi": "बौना"
  },
  "lean_and_thin": {
    "english": "Lean and thin",
    "bishnupriya": "আরুয়া",
    "bangla": "রোগা",
    "hindi": "दुबला-पतला"
  },
  "blunt_edge": {
    "english": "Blunt (edge)",
    "bishnupriya": "আরুয়া",
    "bangla": "ভোঁতা",
    "hindi": "कुंद"
  },
  "fast_growing_paddy": {
    "english": "A fast-growing paddy (2½ months) / land for it",
    "bishnupriya": "আরেয়া",
    "bangla": "আড়াই মাসের ধান",
    "hindi": "ढाई महीने की फसल वाला धान"
  },
  "lean_and_thin_another_form": {
    "english": "Lean and thin (another form)",
    "bishnupriya": "আরকান",
    "bangla": "কৃশ",
    "hindi": "बहुत दुबला"
  },
  "cut_joint_for_joining": {
    "english": "A cut/joint for joining two pieces",
    "bishnupriya": "আল",
    "bangla": "জোড়া কাটা",
    "hindi": "जोड़ने के लिए कट"
  },
  "suffix_possessing_pertaining_to": {
    "english": "Suffix – possessing / pertaining to",
    "bishnupriya": "-আল",
    "bangla": "অধিকারী/সম্পর্কিত প্রত্যয়",
    "hindi": "\"वाला / संबंधित\" प्रत्यय"
  },
  "cultivation_ploughing_animal": {
    "english": "Cultivation / ploughing animal",
    "bishnupriya": "আল",
    "bangla": "চাষ / লাঙলের পশু",
    "hindi": "खेती / हल चलाने वाला पशु"
  },
  "jail_confined_place": {
    "english": "Jail, confined place",
    "bishnupriya": "আলান",
    "bangla": "জেল",
    "hindi": "जेल"
  },
  "path_for_cattle": {
    "english": "Path for cattle",
    "bishnupriya": "আ'লাত",
    "bangla": "গোরুর রাস্তা",
    "hindi": "गाय-भैंस का रास्ता"
  },
  "kind_of_cobra": {
    "english": "A kind of cobra",
    "bishnupriya": "আলাত",
    "bangla": "এক ধরনের গোখরো",
    "hindi": "एक तरह का कोबरा"
  },
  "suffix_connection_similarity_pleonasm": {
    "english": "Suffix – connection / similarity / pleonasm",
    "bishnupriya": "-আলা",
    "bangla": "সম্পর্ক/সাদৃশ্য প্রত্যয়",
    "hindi": "संबंध / समानता / अतिरिक्त प्रत्यय"
  },
  "ring_finger_ring": {
    "english": "Ring (finger-ring)",
    "bishnupriya": "আলা",
    "bangla": "আংটি",
    "hindi": "अंगूठी"
  },
  "handful_bundle_of_firewood": {
    "english": "A handful/bundle of firewood",
    "bishnupriya": "আ'লা",
    "bangla": "জ্বালানির মুঠো",
    "hindi": "लकड़ी का गट्ठर"
  },
  "to_throw": {
    "english": "To throw",
    "bishnupriya": "আলা",
    "bangla": "ছুড়ে ফেলা",
    "hindi": "फेंकना"
  },
  "to_bind_into_small_bundles": {
    "english": "To bind into small bundles",
    "bishnupriya": "আলা",
    "bangla": "ছোটো গোছা বাঁধা",
    "hindi": "छोटे-छोटे गट्ठर बनाना"
  },
  "to_change": {
    "english": "To change",
    "bishnupriya": "আলা",
    "bangla": "বদলানো",
    "hindi": "बदलना"
  },
  "fondling_caressing": {
    "english": "Fondling, caressing",
    "bishnupriya": "আলান-নুয়ান",
    "bangla": "আদর-সোহাগ",
    "hindi": "प्यार-दुलार"
  },
  "unpolished_incomplete_incompletely": {
    "english": "Unpolished, incomplete; incompletely",
    "bishnupriya": "আলা-জালা",
    "bangla": "আধখেঁচড়া",
    "hindi": "अधूरा, कच्चा"
  },
  "alteration_vacillation": {
    "english": "Alteration, vacillation",
    "bishnupriya": "আ'লাদুলা",
    "bangla": "ওঠানামা, দোলাচল",
    "hindi": "बदलाव, डावाँडोल"
  },
  "different_separate": {
    "english": "Different, separate",
    "bishnupriya": "আলাদা",
    "bangla": "আলাদা",
    "hindi": "अलग"
  },
  "throwing_gerund_2": {
    "english": "Throwing (gerund)",
    "bishnupriya": "আ'লানি",
    "bangla": "ছোড়ার ক্রিয়া",
    "hindi": "फेंकने की क्रिया"
  },
  "making_small_bundles_gerund": {
    "english": "Making small bundles (gerund)",
    "bishnupriya": "আলানি",
    "bangla": "গোছা বাঁধার ক্রিয়া",
    "hindi": "गट्ठर बनाने की क्रिया"
  },
  "to_pull_attract": {
    "english": "To pull, to attract",
    "bishnupriya": "ইচুল",
    "bangla": "টানা",
    "hindi": "खींचना"
  },
  "pulling_attracting_gerund": {
    "english": "Pulling, attracting (gerund)",
    "bishnupriya": "ইচুলানি",
    "bangla": "টানার ক্রিয়া",
    "hindi": "खींचने की क्रिया"
  },
  "my_elder_sister_address": {
    "english": "My elder sister (address)",
    "bishnupriya": "ইচে",
    "bangla": "দিদি",
    "hindi": "दीदी"
  },
  "my_honourable_elder_sister": {
    "english": "My honourable elder sister",
    "bishnupriya": "ইচেম",
    "bangla": "সম্মানিত দিদি",
    "hindi": "पूज्य दीदी"
  },
  "current_of_water": {
    "english": "Current (of water)",
    "bishnupriya": "ইচেল",
    "bangla": "স্রোত",
    "hindi": "धारा"
  },
  "only_just": {
    "english": "Only, just",
    "bishnupriya": "ইচ্চিল",
    "bangla": "কেবল, শুধু",
    "hindi": "केवल, सिर्फ"
  },
  "straight": {
    "english": "Straight",
    "bishnupriya": "ইচ্চু",
    "bangla": "সোজা",
    "hindi": "सीधा"
  },
  "straight_intensive": {
    "english": "Straight (intensive)",
    "bishnupriya": "ইচ্চুমচুম",
    "bangla": "টকটকে সোজা",
    "hindi": "बिलकुल सीधा"
  },
  "loudly": {
    "english": "Loudly",
    "bishnupriya": "ইচ্চুলে",
    "bangla": "জোরে",
    "hindi": "जोर से"
  },
  "kind_of_tree_on_water_sides": {
    "english": "A kind of tree on water-sides (hijal)",
    "bishnupriya": "ইজাল",
    "bangla": "হিজল গাছ",
    "hindi": "हिजल"
  },
  "complaint": {
    "english": "Complaint",
    "bishnupriya": "ইজার",
    "bangla": "অভিযোগ",
    "hindi": "शिकायत"
  },
  "lease_contract": {
    "english": "Lease, contract",
    "bishnupriya": "ইজারা",
    "bangla": "ইজারা",
    "hindi": "ठेका"
  },
  "prestige_honour": {
    "english": "Prestige, honour",
    "bishnupriya": "ইজ্জত",
    "bangla": "সম্মান",
    "hindi": "इज्जत"
  },
  "straight_another_form": {
    "english": "Straight (another form)",
    "bishnupriya": "ইজ্জু",
    "bangla": "সোজা",
    "hindi": "सीधा"
  },
  "straight_intensive_2": {
    "english": "Straight (intensive)",
    "bishnupriya": "ইজ্জুম",
    "bangla": "টকটকে সোজা",
    "hindi": "बिलकुल सीधा"
  },
  "joint_estate_property": {
    "english": "Joint estate / property",
    "bishnupriya": "ইজমালি",
    "bangla": "যৌথ সম্পত্তি",
    "hindi": "संयुक्त संपत्ति"
  },
  "lonely_quiet": {
    "english": "Lonely, quiet",
    "bishnupriya": "ইঞ্চিকচিক",
    "bangla": "নির্জন, শান্ত",
    "hindi": "एकाकी, शांत"
  },
  "big_house": {
    "english": "Big house",
    "bishnupriya": "ইঞ্চাউ / ইঞ্জাউ",
    "bangla": "বড়ো বাড়ি",
    "hindi": "बड़ा घर"
  },
  "sufficient_well_arranged": {
    "english": "Sufficient, well-arranged",
    "bishnupriya": "ইঞ্জাম",
    "bangla": "পর্যাপ্ত, ব্যবস্থিত",
    "hindi": "पर्याप्त, व्यवस्थित"
  },
  "brick": {
    "english": "Brick",
    "bishnupriya": "ইট",
    "bangla": "ইঁট",
    "hindi": "ईंट"
  },
  "to_throw": {
    "english": "To throw",
    "bishnupriya": "ইটা",
    "bangla": "ছুড়ে ফেলা",
    "hindi": "फेंकना"
  },
  "clear_bright": {
    "english": "Clear, bright",
    "bishnupriya": "ইটানটান",
    "bangla": "স্পষ্ট, উজ্জ্বল",
    "hindi": "साफ, चमकीला"
  },
  "throwing_gerund": {
    "english": "Throwing (gerund)",
    "bishnupriya": "ইটানি",
    "bangla": "ছোড়ার ক্রিয়া",
    "hindi": "फेंकने की क्रिया"
  },
  "cut_and_cleared_vanished": {
    "english": "Cut and cleared, vanished",
    "bishnupriya": "ইটুমটুম",
    "bangla": "পরিষ্কার করে ফেলা",
    "hindi": "साफ-सुथरा कर दिया"
  },
  "friend": {
    "english": "Friend",
    "bishnupriya": "ইটো",
    "bangla": "বন্ধু",
    "hindi": "मित्र"
  },
  "mean_vile": {
    "english": "Mean, vile",
    "bishnupriya": "ইতর",
    "bangla": "নীচ, হীন",
    "hindi": "नीच"
  },
  "friend_another_form": {
    "english": "Friend (another form)",
    "bishnupriya": "ইটাও",
    "bangla": "বন্ধু",
    "hindi": "दोस्त"
  },
  "tidiness_kept_secret": {
    "english": "Tidiness / kept secret",
    "bishnupriya": "ইটু",
    "bangla": "গুছানো / গোপন",
    "hindi": "व्यवस्थित / छिपाया हुआ"
  },
  "my_sister_in_law": {
    "english": "My sister-in-law (elder brother's wife)",
    "bishnupriya": "ইতেইমা",
    "bangla": "ভাইয়ের বউ (ডাক)",
    "hindi": "भाभी"
  },
  "tired_stopped_incessantly": {
    "english": "Tired, stopped / incessantly",
    "bishnupriya": "ইতেত-তেত",
    "bangla": "ক্লান্ত / থামলো / অবিরাম",
    "hindi": "थका हुआ / रुक गया / लगातार"
  },
  "water_passage_small_canal": {
    "english": "Water-passage, small canal",
    "bishnupriya": "ইথান",
    "bangla": "জলের নালা",
    "hindi": "जल-नाली"
  },
  "landing_place_in_river_pond": {
    "english": "Landing place in river/pond",
    "bishnupriya": "ইথাল",
    "bangla": "ঘাট",
    "hindi": "घाट"
  },
  "wave": {
    "english": "Wave",
    "bishnupriya": "ইঠাক",
    "bangla": "ঢেউ",
    "hindi": "लहर"
  },
  "wave_current": {
    "english": "Wave, current",
    "bishnupriya": "ইঠৈ",
    "bangla": "ঢেউ, স্রোত",
    "hindi": "लहर, धारा"
  },
  "inspiration_invigoration": {
    "english": "Inspiration, invigoration",
    "bishnupriya": "ইঠৌ",
    "bangla": "উৎসাহ, প্রেরণা",
    "hindi": "प्रेरणा, जोश"
  },
  "open_clear": {
    "english": "Open, clear",
    "bishnupriya": "ইদুমদুৱা / ইদুবিদু",
    "bangla": "খোলা, পরিষ্কার",
    "hindi": "खुला, साफ"
  },
  "tip_of_thatch": {
    "english": "The tip of thatch",
    "bishnupriya": "ইনা",
    "bangla": "খড়ের ডগা",
    "hindi": "छप्पर का सिरा"
  },
  "my_younger_brother_address": {
    "english": "My younger brother (address)",
    "bishnupriya": "ইনাও",
    "bangla": "ছোটো ভাই",
    "hindi": "छोटा भाई"
  },
  "place_where_thatch_is_tied": {
    "english": "Place where thatch is tied on roof",
    "bishnupriya": "ইনান",
    "bangla": "খড় বাঁধার জায়গা",
    "hindi": "छप्पर बाँधने की जगह"
  },
  "upper_garment_for_women": {
    "english": "An upper garment for women (phinnāphi/ināphi)",
    "bishnupriya": "ইনাফি",
    "bangla": "মহিলাদের উপরের কাপড়",
    "hindi": "महिलाओं का ऊपरी वस्त्र (इनाफी)"
  },
  "complete_strength": {
    "english": "Complete / strength",
    "bishnupriya": "ইনাম",
    "bangla": "পূর্ণ / শক্তি",
    "hindi": "पूरा / ताकत"
  },
  "totally_forcibly": {
    "english": "Totally, forcibly",
    "bishnupriya": "ইনাম্পা",
    "bangla": "পুরোপুরি, জোর করে",
    "hindi": "पूरी तरह, ज़ोर से"
  },
  "least_sound_or_hint": {
    "english": "The least sound or hint",
    "bishnupriya": "ইনিল-খনিল",
    "bangla": "আস্তে শব্দ/ইঙ্গিত",
    "hindi": "हल्की सी आवाज़ या संकेत"
  },
  "feminine_suffix": {
    "english": "Feminine suffix",
    "bishnupriya": "-ইনি",
    "bangla": "স্ত্রীলিঙ্গ প্রত্যয়",
    "hindi": "स्त्री-प्रत्यय"
  },
  "my_mother_in_law": {
    "english": "My mother-in-law",
    "bishnupriya": "ইনে",
    "bangla": "শাশুড়ি",
    "hindi": "सास"
  },
  "my_fathers_sister": {
    "english": "My father's sister",
    "bishnupriya": "ইনে",
    "bangla": "পিসি",
    "hindi": "बुआ"
  },
  "my_honourable_mother_in_law": {
    "english": "My honourable mother-in-law",
    "bishnupriya": "ইনেম",
    "bangla": "সম্মানিত শাশুড়ি",
    "hindi": "पूज्य सास"
  },
  "my_dear_fathers_sister": {
    "english": "My dear father's sister",
    "bishnupriya": "ইনেমা",
    "bangla": "প্রিয় পিসি",
    "hindi": "प्यारी बुआ"
  },
  "well_water_well": {
    "english": "Well (water well)",
    "bishnupriya": "ইন্দারা",
    "bangla": "কুয়ো",
    "hindi": "कुआँ"
  },
  "organ": {
    "english": "Organ (indriya)",
    "bishnupriya": "ইন্দিরি",
    "bangla": "ইন্দ্রিয়",
    "hindi": "इन्द्रिय"
  },
  "aunt_younger": {
    "english": "Aunt (younger)",
    "bishnupriya": "ইন্দোল",
    "bangla": "পিসি/মাসি (ছোটো)",
    "hindi": "छोटी बुआ/मौसी"
  },
  "my_fathers_elder_brother": {
    "english": "My father's elder brother",
    "bishnupriya": "ইপাল",
    "bangla": "কাকা (বড়ো)",
    "hindi": "ताऊ/बड़े पिता"
  },
  "my_grandfather": {
    "english": "My grandfather",
    "bishnupriya": "ইপু",
    "bangla": "দাদু/ঠাকুরদা",
    "hindi": "दादा/नाना"
  },
  "grandfather_of_my_grandfather": {
    "english": "Grandfather of my grandfather",
    "bishnupriya": "ইপুথৌ",
    "bangla": "প্রপিতামহ",
    "hindi": "परदादा"
  },
  "chronic_disease": {
    "english": "Chronic disease",
    "bishnupriya": "ইপেই",
    "bangla": "দীর্ঘস্থায়ী রোগ",
    "hindi": "पुरानी बीमारी"
  },
  "source_spring_mine": {
    "english": "Source, spring, mine",
    "bishnupriya": "ইফুৎ",
    "bangla": "উৎস, ঝরনা",
    "hindi": "स्रोत, झरना"
  },
  "future_tense_ending": {
    "english": "Future tense ending",
    "bishnupriya": "-ইবা",
    "bangla": "ভবিষ্যৎ কালের প্রত্যয়",
    "hindi": "भविष्य काल प्रत्यय"
  },
  "elder_sisters_husband_wifes_elder_brother": {
    "english": "My elder sister's husband / wife's elder brother",
    "bishnupriya": "ইবাই",
    "bangla": "দাদা/জা (বড়ো)",
    "hindi": "जीजा / साला (बड़ा)"
  },
  "address_to_younger_respectable_person": {
    "english": "Address to a younger respectable person",
    "bishnupriya": "ইবুঞো",
    "bangla": "সম্মানিত ছোটো ব্যক্তিকে ডাক",
    "hindi": "छोटे सम्मानित व्यक्ति को संबोधन"
  },
  "cross_shaped_bamboo_wood_support": {
    "english": "Cross-shaped bamboo/wood support",
    "bishnupriya": "ইবুন্সি",
    "bangla": "ক্রস বাঁশের সাপোর্ট",
    "hindi": "क्रॉस बाँस का सहारा"
  },
  "my_dear_lady_woman": {
    "english": "My dear (lady/woman)",
    "bishnupriya": "ইবেমা",
    "bangla": "প্রিয়জন (মহিলা)",
    "hindi": "प्यारी (स्त्री)"
  },
  "my_grandmother": {
    "english": "My grandmother",
    "bishnupriya": "ইবেল",
    "bangla": "ঠাকুরমা/দিদিমা",
    "hindi": "दादी/नानी"
  },
  "grandmother_of_my_grandmother": {
    "english": "Grandmother of my grandmother",
    "bishnupriya": "ইবেলথৌ",
    "bangla": "প্রপিতামহী",
    "hindi": "परदादी"
  },
  "contracted_form_of_ibuno": {
    "english": "Contracted form of ibuño",
    "bishnupriya": "ইবো",
    "bangla": "ছোটো ডাক",
    "hindi": "छोटा संबोधन"
  },
  "first_person_probable_future_ending": {
    "english": "1st person probable future ending (-im)",
    "bishnupriya": "-ইম",
    "bangla": "সন্তা উপভবিষ্যৎ প্রত্যয় (আমি)",
    "hindi": "संभाव्य भविष्य प्रत्यय (मैं)"
  },
  "my_mother": {
    "english": "My mother",
    "bishnupriya": "ইমা",
    "bangla": "মা",
    "hindi": "माँ"
  },
  "courtesy_discipline": {
    "english": "Courtesy, discipline",
    "bishnupriya": "ইমান",
    "bangla": "শিষ্টাচার, শৃঙ্খলা",
    "hindi": "शिष्टाचार, अनुशासन"
  },
  "wife_of_fathers_elder_brother": {
    "english": "Wife of father's elder brother",
    "bishnupriya": "ইমাচৌবি",
    "bangla": "কাকিমা",
    "hindi": "ताई/चाची"
  },
  "aunt_mothers_younger_sister": {
    "english": "Aunt (mother's younger sister or father's younger sister)",
    "bishnupriya": "ইমাতন / ইমাতাল",
    "bangla": "মাসি/পিসি (ছোটো)",
    "hindi": "मौसी/बुआ (छोटी)"
  },
  "conscience_faith": {
    "english": "Conscience, faith",
    "bishnupriya": "ইমান",
    "bangla": "বিবেক, ঈমান",
    "hindi": "अन्तरात्मा, ईमान"
  },
  "equal_in_age_or_strength": {
    "english": "Equal (in age or strength)",
    "bishnupriya": "ইমান্নাপা",
    "bangla": "সমান",
    "hindi": "बराबर"
  },
  "deep_dark": {
    "english": "Deep dark",
    "bishnupriya": "ইমাম",
    "bangla": "ঘোর অন্ধকার",
    "hindi": "गहरा अंधेरा"
  },
  "very_deep_dark": {
    "english": "Very deep dark",
    "bishnupriya": "ইমাম-মাম",
    "bangla": "ঘোরতর অন্ধকার",
    "hindi": "बहुत गहरा अंधेरा"
  },
  "in_this_way_without_any_reason": {
    "english": "In this way, without any reason",
    "bishnupriya": "ইমে",
    "bangla": "এমনি এমনি",
    "hindi": "यूँ ही"
  },
  "big_house_alternative": {
    "english": "Big house (alternative)",
    "bishnupriya": "ইমচৌ",
    "bangla": "বড়ো বাড়ি",
    "hindi": "बड़ा घर"
  },
  "quiet_calm": {
    "english": "Quiet, calm (lit. cold water)",
    "bishnupriya": "ইম্পানি",
    "bangla": "শান্ত (ঠান্ডা পানির মতো)",
    "hindi": "शांत (ठंडे पानी जैसा)"
  },
  "post_pillar_of_house": {
    "english": "Post, pillar of house",
    "bishnupriya": "ইম্পি",
    "bangla": "বাড়ির খুঁটি",
    "hindi": "घर का खंभा"
  },
  "head_of_a_family": {
    "english": "Head of a family",
    "bishnupriya": "ইম্পু",
    "bangla": "পরিবারের কর্তা",
    "hindi": "परिवार का मुखिया"
  },
  "homestead_land": {
    "english": "Homestead land",
    "bishnupriya": "ইম্ফাম",
    "bangla": "বাড়ির জমি",
    "hindi": "आँगन की जमीन"
  },
  "alternative_form_of_yumnak": {
    "english": "Alternative form of yumnak (family name)",
    "bishnupriya": "ইম্লাক",
    "bangla": "যুমনাকের বিকল্প রূপ",
    "hindi": "युमनाक का वैकल्पिक रूप"
  },
  "wednesday_traditional_name": {
    "english": "Wednesday (traditional name)",
    "bishnupriya": "ইমশাকিশা",
    "bangla": "বুধবার (ঐতিহ্যবাহী নাম)",
    "hindi": "बुधवार (पारम्परिक नाम)"
  },
  "suffix_having_belonging_to_looking_like": {
    "english": "Suffix – having / belonging to / looking like",
    "bishnupriya": "-ইয়া",
    "bangla": "অধিকারী/সাদৃশ্যবাচক প্রত্যয়",
    "hindi": "“वाला / जैसा” प्रत्यय"
  },
  "non_finite_verb_suffix": {
    "english": "Non-finite verb suffix (having done)",
    "bishnupriya": "-ইয়া",
    "bangla": "ক্রিয়া-বিশেষণ প্রত্যয় (করিয়া, গিয়া)",
    "hindi": "किया हुआ / गया हुआ (अव्यय)"
  },
  "joke_ridicule_waggery": {
    "english": "Joke, ridicule, waggery",
    "bishnupriya": "ইয়ারকি",
    "bangla": "ঠাট্টা-মশকরা, বিদ্রূপ",
    "hindi": "मज़ाक, व्यंग्य"
  },
  "expression_of_complaint_dissatisfaction": {
    "english": "Expression of complaint / dissatisfaction (āha-uhu)",
    "bishnupriya": "ইয়াহ",
    "bangla": "অভিযোগ/অসন্তোষের আওয়াজ",
    "hindi": "आह-उफ़ (शिकायत का स्वर)"
  },
  "channel_small_canal": {
    "english": "Channel, small canal",
    "bishnupriya": "ইরান",
    "bangla": "খাল",
    "hindi": "नहर"
  },
  "traditional_curry": {
    "english": "A traditional curry (āiranpā)",
    "bishnupriya": "ইরালপা",
    "bangla": "ইরনপা / শাক-মাছের ঝোল",
    "hindi": "आइरनपा / सब्जी-मछली का झोल"
  },
  "suffix_slightly_somewhat": {
    "english": "Suffix – slightly / somewhat",
    "bishnupriya": "-ইরা",
    "bangla": "সামান্য প্রত্যয় (লালিরা, কালিরা)",
    "hindi": "थोड़ा-सा (लालिमा, कालिमा)"
  },
  "keeping_bamboo_wood_under_mud_water": {
    "english": "Keeping bamboo/wood under mud/water to protect from insects",
    "bishnupriya": "ইরাইত",
    "bangla": "কাঠ-বাঁশ পানিতে ডোবানো",
    "hindi": "कीड़े से बचाने के लिए पानी में डुबोना"
  },
  "least_sound_or_hint_alternative": {
    "english": "The least sound or hint (alternative)",
    "bishnupriya": "ইরি-ইরি",
    "bangla": "আস্তে শব্দ/ইঙ্গিত",
    "hindi": "हल्की सी आवाज़"
  },
  "courtesy_subject": {
    "english": "Courtesy, subject",
    "bishnupriya": "ইরান",
    "bangla": "শিষ্টাচার, বিষয়",
    "hindi": "शिष्टाचार, विषय"
  },
  "medicinal_plant": {
    "english": "A medicinal plant (lerik thipli)",
    "bishnupriya": "ইরিকশিপি",
    "bangla": "ঔষধি গাছ",
    "hindi": "औषधीय पौधा"
  },
  "very_faint_sound": {
    "english": "A very faint sound (water + bamboo sound)",
    "bishnupriya": "ইরিনপারিন",
    "bangla": "খুব হালকা শব্দ",
    "hindi": "बहुत हल्की आवाज़"
  },
  "towel_alternative": {
    "english": "Towel (alternative)",
    "bishnupriya": "ইরিফি",
    "bangla": "গামছা",
    "hindi": "तौलिया"
  },
  "plant_used_for_dyeing": {
    "english": "A plant used for dyeing (urairam)",
    "bishnupriya": "ইরিরাম",
    "bangla": "রঙের গাছ",
    "hindi": "रंग देने वाला पौधा"
  },
  "base_bottom_of_thatch": {
    "english": "Base/bottom of thatch",
    "bishnupriya": "ইরু",
    "bangla": "খড়ের নিচের অংশ",
    "hindi": "छप्पर का तल"
  },
  "hurried_preparation_for_going_out": {
    "english": "Hurried preparation for going out",
    "bishnupriya": "ইরুইশান-বাধানি",
    "bangla": "তাড়াহুড়ো করে বেরোনোর প্রস্তুতি",
    "hindi": "जल्दबाजी में निकलने की तैयारी"
  },
  "towel": {
    "english": "Towel",
    "bishnupriya": "ইরুফি",
    "bangla": "গামছা",
    "hindi": "तौलिया"
  },
  "shadow": {
    "english": "Shadow",
    "bishnupriya": "ইরুম",
    "bangla": "ছায়া",
    "hindi": "परछाई"
  },
  "vessel_for_boiling_water": {
    "english": "Vessel for boiling water",
    "bishnupriya": "ইরুম্পি",
    "bangla": "জল ফোটানোর পাত্র",
    "hindi": "पानी उबालने का बर्तन"
  },
  "friday_traditional_name": {
    "english": "Friday (traditional name – \"blood-flood day\")",
    "bishnupriya": "ইরেই",
    "bangla": "শুক্রবার (ঐতিহ্যবাহী নাম)",
    "hindi": "शुक्रवार (पारम्परिक नाम)"
  },
  "skin_disease_caused_by_water_imps": {
    "english": "Skin disease caused by water-imps",
    "bishnupriya": "ইরেই-খনলেই",
    "bangla": "জলের ভূতের চর্মরোগ",
    "hindi": "पानी के प्रेत से होने वाली त्वचा बीमारी"
  },
  "whirlpool": {
    "english": "Whirlpool",
    "bishnupriya": "ইরেল",
    "bangla": "জলের ঘূর্ণি",
    "hindi": "भँवर"
  },
  "purpose_on_the_point_of_suffix": {
    "english": "Purpose / \"on the point of\" suffix",
    "bishnupriya": "-ইল",
    "bangla": "উদ্দেশ্য/প্রায় প্রত্যয় (করিল, খেইল)",
    "hindi": "करने के लिए / होने वाला है"
  },
  "simple_past_tense_base": {
    "english": "Simple past tense base",
    "bishnupriya": "-ইল",
    "bangla": "অতীত কালের ভিত্তি",
    "hindi": "साधारण भूतकाल आधार"
  },
  "long_time_long_ago": {
    "english": "Long time / long ago",
    "bishnupriya": "ইল",
    "bangla": "অনেক দিন / অনেক আগে",
    "hindi": "बहुत समय / बहुत पहले"
  },
  "end_limit_boundless": {
    "english": "End, limit / boundless",
    "bishnupriya": "ইলাক-বিলাক",
    "bangla": "সীমা / অসীম",
    "hindi": "सीमा / असीम"
  },
  "vast_expanse_of_water": {
    "english": "Vast expanse of water",
    "bishnupriya": "ইলান-বিলান",
    "bangla": "বিশাল জলরাশি",
    "hindi": "विशाल जलक्षेत्र"
  },
  "open_vacant_vast": {
    "english": "Open, vacant, vast",
    "bishnupriya": "ইলানলান",
    "bangla": "খোলা, বিশাল",
    "hindi": "खुला, विशाल"
  },
  "fishing_place": {
    "english": "Fishing place",
    "bishnupriya": "ইলাফাম",
    "bangla": "মাছ ধরার জায়গা",
    "hindi": "मछली पकड़ने की जगह"
  },
  "hilsa_fish": {
    "english": "Hilsa fish",
    "bishnupriya": "ইলিশ",
    "bangla": "ইলিশ",
    "hindi": "इलिश"
  },
  "conditional_non_finite_suffix": {
    "english": "Conditional non-finite suffix (when, after)",
    "bishnupriya": "-(ই)লে",
    "bangla": "শর্তসূচক অকৃত ক্রিয়া (রাতি ফুল্লে)",
    "hindi": "जब, होने पर (जैसे – रात होने पर)"
  },
  "treating_with_contempt_neglected": {
    "english": "Treating with contempt / neglected",
    "bishnupriya": "ইলেই-লেই",
    "bangla": "অবহেলা করা / তুচ্ছ",
    "hindi": "तिरस्कार करना / नगण्य"
  },
  "currency_weight_symbol": {
    "english": "Currency/weight symbol / the least amount",
    "bishnupriya": "ইলেক",
    "bangla": "টাকা/ভরির চিহ্ন / সামান্যতম",
    "hindi": "मुद्रा/वजन चिह्न / तनिक भी"
  },
  "cry_weep": {
    "english": "Cry, weep",
    "bishnupriya": "ইলৌ",
    "bangla": "কান্না",
    "hindi": "रोना"
  },
  "movement_waving_billowing": {
    "english": "Movement, waving, billowing",
    "bishnupriya": "ইলকা",
    "bangla": "দোলা, ঢেউ",
    "hindi": "हिलना-डुलना, लहराना"
  },
  "to_move_oscillate_wave": {
    "english": "To move, oscillate, wave",
    "bishnupriya": "ইলকা",
    "bangla": "নড়াচড়া করা, ঢেউ তোলা",
    "hindi": "हिलना, लहराना"
  },
  "moving_waving_gerund": {
    "english": "Moving, waving (gerund)",
    "bishnupriya": "ইলকানি",
    "bangla": "নড়াচড়া/ঢেউ তোলার ক্রিয়া",
    "hindi": "हिलने-डुलने/लहराने की क्रिया"
  },
  "cut_and_cleared_vanished": {
    "english": "Cut and cleared, vanished (alt.)",
    "bishnupriya": "ইলটুমটুম",
    "bangla": "পরিষ্কার করে ফেলা",
    "hindi": "साफ-सुथरा कर दिया"
  },
  "relatives": {
    "english": "Relatives",
    "bishnupriya": "ইষ্টিকুটুম",
    "bangla": "আত্মীয়-কুটুম্ব",
    "hindi": "रिश्तेदार"
  },
  "plough_pole": {
    "english": "Plough pole",
    "bishnupriya": "ইষ",
    "bangla": "লাঙলের দাঁড়",
    "hindi": "हल का डंडा"
  },
  "ah_oh_alas": {
    "english": "Ah!, Oh!, Alas! (surprise, regret)",
    "bishnupriya": "ইষ",
    "bangla": "ইশ!, আহ!, হায়!",
    "hindi": "अरे!, आह!, हाय!"
  },
  "to_agree": {
    "english": "To agree",
    "bishnupriya": "ইষ",
    "bangla": "রাজি হওয়া",
    "hindi": "मानना"
  },
  "satisfied_joyful_joy": {
    "english": "Satisfied, joyful / joy",
    "bishnupriya": "ইষা",
    "bangla": "তৃপ্ত, আনন্দ",
    "hindi": "संतुष्ट, खुशी"
  },
  "moss": {
    "english": "Moss",
    "bishnupriya": "ইষাং",
    "bangla": "শ্যাওলা",
    "hindi": "काई"
  },
  "open_vacant": {
    "english": "Open, vacant",
    "bishnupriya": "ইষানষাং",
    "bangla": "খোলা, ফাঁকা",
    "hindi": "खुला"
  },
  "agreeing_gerund": {
    "english": "Agreeing (gerund)",
    "bishnupriya": "ইষানি",
    "bangla": "রাজি হওয়ার ক্রিয়া",
    "hindi": "मानने की क्रिया"
  },
  "hint_sign": {
    "english": "Hint, sign",
    "bishnupriya": "ইশারা",
    "bangla": "ইঙ্গিত",
    "hindi": "इशारा"
  },
  "songster_singer": {
    "english": "Songster, singer",
    "bishnupriya": "ইশালপা",
    "bangla": "গায়ক",
    "hindi": "गायक"
  },
  "my_grandson": {
    "english": "My grandson",
    "bishnupriya": "ইষু",
    "bangla": "নাতি",
    "hindi": "पोता"
  },
  "to_make_someone_agree": {
    "english": "To make someone agree",
    "bishnupriya": "ইষুয়া",
    "bangla": "রাজি করানো",
    "hindi": "मानना सिखाना"
  },
  "address_to_younger_sisters_husband": {
    "english": "Address to younger sister's husband / wife's younger brother",
    "bishnupriya": "ইষেল",
    "bangla": "ননদাই / শালা (ছোটো)",
    "hindi": "छोटा साला / ननदोई"
  },
  "screw": {
    "english": "Screw",
    "bishnupriya": "ইস্ক্রুপ",
    "bangla": "স্ক্রু",
    "hindi": "पेंच"
  },
  "smoothing_iron": {
    "english": "Smoothing iron (clothes iron)",
    "bishnupriya": "ইস্তারি",
    "bangla": "ইস্ত্রি",
    "hindi": "इस्त्री"
  },
  "resignation": {
    "english": "Resignation",
    "bishnupriya": "ইস্তিবাদ",
    "bangla": "পদত্যাগ",
    "hindi": "इस्तीफा"
  },
  "steel": {
    "english": "Steel",
    "bishnupriya": "ইস্পাত",
    "bangla": "ইস্পাত",
    "hindi": "इस्पात"
  },
  "jointly_possessed": {
    "english": "Jointly possessed",
    "bishnupriya": "ইসমালিক",
    "bangla": "যৌথ মালিকানাধীন",
    "hindi": "संयुक्त स्वामित्व वाला"
  },
  "current_wave_force": {
    "english": "Current, wave, force",
    "bishnupriya": "ইহৌ",
    "bangla": "স্রোত, ঢেউ, শক্তি",
    "hindi": "धारा, लहर, बल"
  },
  "feminine_suffix": {
    "english": "Feminine suffix",
    "bishnupriya": "-ই",
    "bangla": "স্ত্রীলিঙ্গ প্রত্যয়",
    "hindi": "स्त्री-प्रत्यय"
  },
  "suffix_having_relating": {
    "english": "Suffix – having / relating to",
    "bishnupriya": "-ই",
    "bangla": "অধিকারী/সম্পর্কিত প্রত্যয়",
    "hindi": "वाला / संबंधित प्रत्यय"
  },
  "i_first_person_present": {
    "english": "I (1st person present tense ending)",
    "bishnupriya": "-উ",
    "bangla": "আমি (বর্তমান কাল)",
    "hindi": "मैं (वर्तमान काल)"
  },
  "to_be_alternative": {
    "english": "To be (alternative)",
    "bishnupriya": "উই",
    "bangla": "হওয়া",
    "hindi": "होना"
  },
  "rivet": {
    "english": "Rivet",
    "bishnupriya": "উই",
    "bangla": "রিভেট",
    "hindi": "कील"
  },
  "being_gerund": {
    "english": "Being (gerund)",
    "bishnupriya": "উইনা",
    "bangla": "থাকার ক্রিয়া",
    "hindi": "होने की क्रिया"
  },
  "remainders_of_food_leftover": {
    "english": "Remainders of food / leftover",
    "bishnupriya": "উইনাই",
    "bangla": "খাবারের উচ্ছিষ্ট",
    "hindi": "जूठन"
  },
  "pole_to_stir_straw": {
    "english": "Pole to stir straw while threshing",
    "bishnupriya": "উকাত",
    "bangla": "ধান ঝাড়ার লাঠি",
    "hindi": "मड़ाई में भूसा फटकने की डंडी"
  },
  "suffix_likeness_resembling": {
    "english": "Suffix – likeness / resembling",
    "bishnupriya": "-উকা",
    "bangla": "সাদৃশ্যবাচক প্রত্যয় (আন্দুকা, পানুকা)",
    "hindi": "“जैसा” प्रत्यय (पीला-सा, पानी-जैसा)"
  },
  "y_shaped_part_of_plough": {
    "english": "Y-shaped part of plough",
    "bishnupriya": "উকা",
    "bangla": "লাঙলের ‘উ’-আকৃতির অংশ",
    "hindi": "हल का यू-आकार वाला हिस्सा"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "উকাপি",
    "bangla": "এক ধরনের মাছ",
    "hindi": "एक प्रकार की मछली"
  },
  "night_watch_shed_paddy_field": {
    "english": "Night-watch shed on paddy field",
    "bishnupriya": "উকার",
    "bangla": "মাঠের উঁচু চালা",
    "hindi": "खेत में ऊँचा मचान"
  },
  "pleadership_advocacy": {
    "english": "Pleadership, advocacy",
    "bishnupriya": "উকালতি",
    "bangla": "উকালতি",
    "hindi": "वकालत"
  },
  "lawyer_advocate": {
    "english": "Lawyer, advocate",
    "bishnupriya": "উকিল",
    "bangla": "উকিল",
    "hindi": "वकील"
  },
  "harrow": {
    "english": "Harrow",
    "bishnupriya": "উকেই",
    "bangla": "দাঁতালো মই",
    "hindi": "दाँतेदार हेंगा"
  },
  "belching": {
    "english": "Belching",
    "bishnupriya": "উগার",
    "bangla": "ঢেঁকুর",
    "hindi": "डकार"
  },
  "to_belch": {
    "english": "To belch",
    "bishnupriya": "উগারা",
    "bangla": "ঢেঁকুর তোলা",
    "hindi": "डकारना"
  },
  "belching_gerund": {
    "english": "Belching (gerund)",
    "bishnupriya": "উগারানি",
    "bangla": "ঢেঁকুরের ক্রিয়া",
    "hindi": "डकारने की क्रिया"
  },
  "perplexed_confused": {
    "english": "Perplexed, confused",
    "bishnupriya": "উন / উনপা",
    "bangla": "বিহ্বল",
    "hindi": "घबराया हुआ"
  },
  "perplexity": {
    "english": "Perplexity",
    "bishnupriya": "উঙ্খাত",
    "bangla": "বিহ্বলতা",
    "hindi": "घबराहट"
  },
  "to_doze_nod": {
    "english": "To doze, nod",
    "bishnupriya": "উগনা",
    "bangla": "তন্দ্রা আসা, ঢুলা",
    "hindi": "झपकी लेना, सिर हिलाना"
  },
  "nodding_dozing_gerund": {
    "english": "Nodding, dozing (gerund)",
    "bishnupriya": "উঙ্গানি",
    "bangla": "তন্দ্রার ক্রিয়া",
    "hindi": "झपकी लेने की क्रिया"
  },
  "high": {
    "english": "High",
    "bishnupriya": "উচ",
    "bangla": "উঁচু",
    "hindi": "ऊँचा"
  },
  "just_proper_reasonable": {
    "english": "Just, proper, reasonable",
    "bishnupriya": "উচিত",
    "bangla": "উচিত",
    "hindi": "उचित"
  },
  "proportionately_befittingly": {
    "english": "Proportionately, befittingly",
    "bishnupriya": "উচিত-ডুমা",
    "bangla": "যথাযথ",
    "hindi": "उचित रूप से"
  },
  "spigot_peg": {
    "english": "Spigot, peg",
    "bishnupriya": "উচুক",
    "bangla": "খোঁচা",
    "hindi": "कील, खूँटा"
  },
  "peg": {
    "english": "Peg",
    "bishnupriya": "উচুপ",
    "bangla": "গোঁজ",
    "hindi": "खूँटी"
  },
  "wooden_piece_to_tighten": {
    "english": "Wooden piece to tighten something",
    "bishnupriya": "উচেপ",
    "bangla": "চেপে ধরার কাঠ",
    "hindi": "कसने की लकड़ी"
  },
  "frame_of_wood_bamboo": {
    "english": "Frame of wood/bamboo",
    "bishnupriya": "উচেল",
    "bangla": "কাঠের ফ্রেম",
    "hindi": "लकड़ी का चौखटा"
  },
  "narrow": {
    "english": "Narrow",
    "bishnupriya": "উচ্চিল-নচ্চিল",
    "bangla": "সংকীর্ণ",
    "hindi": "संकरा"
  },
  "straight": {
    "english": "Straight",
    "bishnupriya": "উচ্চু",
    "bangla": "সোজা",
    "hindi": "सीधा"
  },
  "suitability": {
    "english": "Suitability",
    "bishnupriya": "উচ্চেল",
    "bangla": "উপযুক্ততা",
    "hindi": "योग्यता"
  },
  "festival": {
    "english": "Festival",
    "bishnupriya": "উচ্ছাপ",
    "bangla": "উৎসব",
    "hindi": "उत्सव"
  },
  "to_brush_off_grass_weeds": {
    "english": "To brush off grass/weeds",
    "bishnupriya": "উচ",
    "bangla": "ঘাস উপড়ানো",
    "hindi": "घास निकालना"
  },
  "contempt_negligence": {
    "english": "Contempt, negligence",
    "bishnupriya": "উচাক",
    "bangla": "অবহেলা",
    "hindi": "उपेक्षा"
  },
  "deep_forest": {
    "english": "Deep forest",
    "bishnupriya": "উচাক-জঙ্গল",
    "bangla": "গভীর জঙ্গল",
    "hindi": "घना जंगल"
  },
  "brushing_off_grass_gerund": {
    "english": "Brushing off grass (gerund)",
    "bishnupriya": "উচানি",
    "bangla": "ঘাস উপড়ানোর ক্রিয়া",
    "hindi": "घास उखाड़ने की क्रिया"
  },
  "twenty": {
    "english": "Twenty",
    "bishnupriya": "কুরি",
    "bangla": "কুড়ি",
    "hindi": "बीस"
  },
  "lazy": {
    "english": "Lazy",
    "bishnupriya": "কুরিয়া",
    "bangla": "অলস",
    "hindi": "आलसी"
  },
  "to_be_sufficient": {
    "english": "To be sufficient",
    "bishnupriya": "কুল",
    "bangla": "যথেষ্ট হওয়া",
    "hindi": "काफी होना"
  },
  "to_help_to_manage": {
    "english": "To help, to manage",
    "bishnupriya": "কুলা",
    "bangla": "সাহায্য করা",
    "hindi": "मदद करना"
  },
  "winnowing_fan": {
    "english": "Winnowing fan",
    "bishnupriya": "কুলা",
    "bangla": "কুলা",
    "hindi": "सूपा"
  },
  "only": {
    "english": "Only",
    "bishnupriya": "কুলে",
    "bangla": "শুধুমাত্র",
    "hindi": "सिर्फ"
  },
  "a_kind_of_banana_kulpit": {
    "english": "A kind of banana (Kulpit)",
    "bishnupriya": "কুলপিত",
    "bangla": "কুলপিত কলা",
    "hindi": "कुलपित केला"
  },
  "labourer": {
    "english": "Labourer",
    "bishnupriya": "কুল্লি",
    "bangla": "মজুর",
    "hindi": "मजदूर"
  },
  "horoscope": {
    "english": "Horoscope",
    "bishnupriya": "কুষ্ঠি",
    "bangla": "কুষ্ঠি",
    "hindi": "कुंडली"
  },
  "wrestling": {
    "english": "Wrestling",
    "bishnupriya": "কুস্তি",
    "bangla": "কুস্তি",
    "hindi": "कुश्ती"
  },
  "cattle_pound": {
    "english": "Cattle pound",
    "bishnupriya": "কুহার",
    "bangla": "গোয়ালখানা (বেওয়ারিশ গোরুর জন্য)",
    "hindi": "बेसहारा पशु आश्रय"
  },
  "colour": {
    "english": "Colour",
    "bishnupriya": "কুহি",
    "bangla": "রং",
    "hindi": "रंग"
  },
  "why_short_form": {
    "english": "Why? (short form)",
    "bishnupriya": "কে",
    "bangla": "কেন?",
    "hindi": "क्यों?"
  },
  "dislocation": {
    "english": "Dislocation",
    "bishnupriya": "কেই",
    "bangla": "হাড় খসে যাওয়া",
    "hindi": "हड्डी खिसकना"
  },
  "market": {
    "english": "Market",
    "bishnupriya": "কেইথেল",
    "bangla": "বাজার",
    "hindi": "बाजार"
  },
  "brave_bold": {
    "english": "Brave, bold",
    "bishnupriya": "কেইফা",
    "bangla": "সাহসী",
    "hindi": "बहादुर"
  },
  "whim_hot_headedness": {
    "english": "Whim, hot-headedness",
    "bishnupriya": "কেইফু",
    "bangla": "খেয়াল",
    "hindi": "ज़िद"
  },
  "a_medicinal_plant": {
    "english": "A medicinal plant",
    "bishnupriya": "কেইফুরিয়া",
    "bangla": "ঔষধি গাছ",
    "hindi": "औषधीय पौधा"
  },
  "ladder": {
    "english": "Ladder",
    "bishnupriya": "কেইরাক",
    "bangla": "মই",
    "hindi": "सीढ़ी"
  },
  "split_bamboo_peg": {
    "english": "Split bamboo peg",
    "bishnupriya": "কেইরান",
    "bangla": "বাঁশের খুঁটি",
    "hindi": "बांस का खूंटा"
  },
  "granary_in_charge": {
    "english": "Granary-in-charge",
    "bishnupriya": "কিরুনপা",
    "bangla": "গোলার তত্ত্বাবধায়ক",
    "hindi": "अनाज भंडार का प्रभारी"
  },
  "wooden_door": {
    "english": "Wooden door",
    "bishnupriya": "কেউর",
    "bangla": "কাঠের দরজা",
    "hindi": "लकड़ी का दरवाज़ा"
  },
  "deed_of_sale_receipt": {
    "english": "Deed of sale (receipt)",
    "bishnupriya": "কেউলা",
    "bangla": "বিক্রির রসিদ",
    "hindi": "बिक्री का दस्तावेज़"
  },
  "to_groan": {
    "english": "To groan",
    "bishnupriya": "কেকা",
    "bangla": "কঁকানো",
    "hindi": "कराहना"
  },
  "a_small_medicinal_plant": {
    "english": "A small medicinal plant",
    "bishnupriya": "কেকেমালপি",
    "bangla": "ছোটো ঔষধি গাছ",
    "hindi": "छोटा औषधीय पौधा"
  },
  "gardenia_flower": {
    "english": "Gardenia flower",
    "bishnupriya": "কাপাকলেই",
    "bangla": "গন্ধরাজ ফুল",
    "hindi": "गंधराज फूल"
  },
  "a_cut_the_act_of_cutting": {
    "english": "A cut / the act of cutting",
    "bishnupriya": "কাপা",
    "bangla": "কাটা / কোপ",
    "hindi": "काट / प्रहार"
  },
  "cutting_chopping_gerund": {
    "english": "Cutting, chopping (gerund)",
    "bishnupriya": "কাপানি",
    "bangla": "কোপানোর ক্রিয়া",
    "hindi": "काटने की क्रिया"
  },
  "cutting_each_other_over_correcting": {
    "english": "Cutting each other / over-correcting",
    "bishnupriya": "কাপাকাপি",
    "bangla": "পরস্পর কাটাকাটি",
    "hindi": "एक-दूसरे को काटना"
  },
  "circumstances_situation": {
    "english": "Circumstances, situation",
    "bishnupriya": "কাফাম",
    "bangla": "অবস্থা",
    "hindi": "हालत"
  },
  "work_necessity": {
    "english": "Work / necessity",
    "bishnupriya": "কাম",
    "bangla": "কাজ / প্রয়োজন",
    "hindi": "काम / ज़रूरत"
  },
  "a_bite_mouthful": {
    "english": "A bite / mouthful",
    "bishnupriya": "কামার",
    "bangla": "কামড় / এক কামড়",
    "hindi": "काटना / एक निवाला"
  },
  "to_earn": {
    "english": "To earn",
    "bishnupriya": "কামা",
    "bangla": "উপার্জন করা",
    "hindi": "कमाना"
  },
  "income": {
    "english": "Income",
    "bishnupriya": "কামাই",
    "bangla": "আয়",
    "hindi": "कमाई"
  },
  "cannon": {
    "english": "Cannon",
    "bishnupriya": "কামান",
    "bangla": "কামান",
    "hindi": "तोप"
  },
  "blacksmith": {
    "english": "Blacksmith",
    "bishnupriya": "কামার",
    "bangla": "কামার",
    "hindi": "लोहार"
  },
  "shirt": {
    "english": "Shirt",
    "bishnupriya": "কামিজ",
    "bangla": "জামা",
    "hindi": "कमीज़"
  },
  "labourer_2": {
    "english": "Labourer",
    "bishnupriya": "কামুলা",
    "bangla": "মজুর",
    "hindi": "मजदूर"
  },
  "body": {
    "english": "Body",
    "bishnupriya": "কায়া",
    "bangla": "শরীর",
    "hindi": "शरीर"
  },
  "manner_way": {
    "english": "Manner, way",
    "bishnupriya": "কায়দা",
    "bangla": "কায়দা",
    "hindi": "तरीक़ा"
  },
  "whose": {
    "english": "Whose",
    "bishnupriya": "কার",
    "bangla": "কার (সম্বন্ধকারক)",
    "hindi": "किसका"
  },
  "arrow": {
    "english": "Arrow",
    "bishnupriya": "কা'র",
    "bangla": "তির",
    "hindi": "तीर"
  },
  "a_kind_of_cucurbit_gherkins": {
    "english": "A kind of cucurbit (gherkins)",
    "bishnupriya": "করল",
    "bangla": "করলা",
    "hindi": "करेला"
  },
  "greed": {
    "english": "Greed",
    "bishnupriya": "কারেম / কারেমনা",
    "bangla": "লোভ",
    "hindi": "लालच"
  },
  "workshop_affair": {
    "english": "Workshop / affair",
    "bishnupriya": "কারখানা",
    "bangla": "কারখানা",
    "hindi": "कारख़ाना"
  },
    "cartridge": {
    "english": "Cartridge",
    "bishnupriya": "কার্তুজ",
    "bangla": "কার্তুজ",
    "hindi": "कारतूस"
  },
  "business": {
    "english": "Business",
    "bishnupriya": "কারবার",
    "bangla": "ব্যবসা",
    "hindi": "कारोबार"
  },
  "businessman": {
    "english": "Businessman",
    "bishnupriya": "কারবারিয়া",
    "bangla": "ব্যবসায়ী",
    "hindi": "कारोबारी"
  },
  "to_snatch_to_husk_to_uproot": {
    "english": "To snatch / to husk / to uproot",
    "bishnupriya": "কাড়",
    "bangla": "ছিনিয়ে নেওয়া / খোসা ছাড়ানো / উপড়ানো",
    "hindi": "छीनना / छीलना / उखाड़ना"
  },
  "snatched_husked_man_made_canal": {
    "english": "Snatched / husked / man-made canal",
    "bishnupriya": "কাড়া",
    "bangla": "ছিনতাই করা / খোসা-ছাড়া",
    "hindi": "छीना हुआ / छिला हुआ"
  },
  "protection": {
    "english": "Protection",
    "bishnupriya": "কাড়ালি",
    "bangla": "রক্ষা",
    "hindi": "सुरक्षा"
  },
  "black": {
    "english": "Black",
    "bishnupriya": "কালা",
    "bangla": "কালো",
    "hindi": "काला"
  },
  "tomorrow": {
    "english": "Tomorrow",
    "bishnupriya": "কালি",
    "bangla": "কাল",
    "hindi": "कल"
  },
  "ink": {
    "english": "Ink",
    "bishnupriya": "কালি",
    "bangla": "কালি",
    "hindi": "स्याही"
  },
  "inkpot": {
    "english": "Inkpot",
    "bishnupriya": "কালিফু",
    "bangla": "দোয়াত",
    "hindi": "दवात"
  },
  "deaf_senseless": {
    "english": "Deaf / senseless",
    "bishnupriya": "কালুয়া",
    "bangla": "কালা / বোবা",
    "hindi": "बहरा / बेहोश"
  },
  "phlegm": {
    "english": "Phlegm",
    "bishnupriya": "কাশ",
    "bangla": "কফ",
    "hindi": "कफ"
  },
  "cough": {
    "english": "Cough",
    "bishnupriya": "কাশ",
    "bangla": "কাশি",
    "hindi": "खाँसी"
  },
  "to_cough": {
    "english": "To cough",
    "bishnupriya": "কাহ",
    "bangla": "কাশা",
    "hindi": "खाँसना"
  },
  "which": {
    "english": "Which?",
    "bishnupriya": "কুন",
    "bangla": "কোন?",
    "hindi": "कौन?"
  },
  "dog": {
    "english": "Dog",
    "bishnupriya": "কুকুর",
    "bangla": "কুকুর",
    "hindi": "कुत्ता"
  },
  "bitch": {
    "english": "Bitch",
    "bishnupriya": "কুকুরি",
    "bangla": "কুকুরী",
    "hindi": "कुतिया"
  },
  "mould_mildew": {
    "english": "Mould, mildew",
    "bishnupriya": "কূকফেই",
    "bangla": "ছত্রাক",
    "hindi": "फफूंद"
  },
  "wrinkled": {
    "english": "Wrinkled",
    "bishnupriya": "কুচ",
    "bangla": "কোঁচকানো",
    "hindi": "सिकुड़ा हुआ"
  },
  "harpoon": {
    "english": "Harpoon",
    "bishnupriya": "কুচা",
    "bangla": "বল্লম",
    "hindi": "भाला"
  },
  "small_ladle": {
    "english": "Small ladle",
    "bishnupriya": "কুচি",
    "bangla": "ছোটো হাতা",
    "hindi": "छोटी कलछी"
  },
  "eel": {
    "english": "Eel",
    "bishnupriya": "কুচিয়া",
    "bangla": "কুচিয়া",
    "hindi": "कुचिया (मछली)"
  },
  "corner": {
    "english": "Corner",
    "bishnupriya": "কুঞ্চেল",
    "bangla": "কোণ",
    "hindi": "कोना"
  },
  "to_cut_into_pieces": {
    "english": "To cut into pieces",
    "bishnupriya": "কুট",
    "bangla": "টুকরো টুকরো করা",
    "hindi": "टुकड़े करना"
  },
  "small_plot_of_land": {
    "english": "Small plot of land",
    "bishnupriya": "কুটি",
    "bangla": "ছোটো জমির টুকরো",
    "hindi": "छोटा खेत"
  },
  "relatives": {
    "english": "Relatives",
    "bishnupriya": "কুটুম",
    "bangla": "কুটুম্ব",
    "hindi": "कुटुंब"
  },
  "irritating_throat_skin": {
    "english": "Irritating (throat/skin)",
    "bishnupriya": "কুটকুটা",
    "bangla": "খচখচে",
    "hindi": "चुभने वाला"
  },
  "room": {
    "english": "Room",
    "bishnupriya": "কুঠা",
    "bangla": "ঘর",
    "hindi": "कमरा"
  },
  "corner_alt": {
    "english": "Corner (alt.)",
    "bishnupriya": "কুন",
    "bangla": "কোণ",
    "hindi": "कोना"
  },
  "diagonally": {
    "english": "Diagonally",
    "bishnupriya": "কুনাকুনি",
    "bangla": "তির্যকভাবে",
    "hindi": "तिरछा"
  },
  "to_abuse": {
    "english": "To abuse",
    "bishnupriya": "কুদা",
    "bangla": "গালাগাল দেওয়া",
    "hindi": "गाली देना"
  },
  "area_locality": {
    "english": "Area, locality",
    "bishnupriya": "কল্লক",
    "bangla": "এলাকা",
    "hindi": "इलाका"
  },
  "piece_part": {
    "english": "Piece, part",
    "bishnupriya": "কাল্লি",
    "bangla": "টুকরো",
    "hindi": "टुकड़ा"
  },
  "rust": {
    "english": "Rust",
    "bishnupriya": "কাল্লিন",
    "bangla": "মরচে",
    "hindi": "जंग"
  },
  "sticky_sap_rubber_strength": {
    "english": "Sticky sap / rubber / strength",
    "bishnupriya": "কস",
    "bangla": "আঠা / রাবার / জোর",
    "hindi": "गोंद / रबड़ / ताकत"
  },
  "oath": {
    "english": "Oath",
    "bishnupriya": "কসম",
    "bangla": "কসম",
    "hindi": "कसम"
  },
  "to_be_dislocated_bone": {
    "english": "To be dislocated (bone)",
    "bishnupriya": "কস্ক",
    "bangla": "হাড় খসে যাওয়া",
    "hindi": "हड्डी खिसकना"
  },
  "tender": {
    "english": "Tender",
    "bishnupriya": "কস্মা",
    "bangla": "কোমল",
    "hindi": "नरम"
  },
  "elbow": {
    "english": "Elbow",
    "bishnupriya": "কহনি",
    "bangla": "কনুই",
    "hindi": "कोहनी"
  },
  "well": {
    "english": "Well",
    "bishnupriya": "কহা",
    "bangla": "কুয়ো",
    "hindi": "कुआँ"
  },
  "bitter_astringent": {
    "english": "Bitter, astringent",
    "bishnupriya": "কহা",
    "bangla": "তিতা",
    "hindi": "कड़वा"
  },
  "ascent": {
    "english": "Ascent",
    "bishnupriya": "কা",
    "bangla": "চড়াই",
    "hindi": "चढ़ाई"
  },
  "apartment_room": {
    "english": "Apartment, room",
    "bishnupriya": "কা",
    "bangla": "ঘর",
    "hindi": "कमरा"
  },
  "elder_sister": {
    "english": "Elder sister",
    "bishnupriya": "কাই",
    "bangla": "দিদি",
    "hindi": "दीदी"
  },
  "a_little_gently": {
    "english": "A little, gently",
    "bishnupriya": "কাইতা-কাইতাং",
    "bangla": "একটু আস্তে",
    "hindi": "थोड़ा धीरे"
  },
  "cut_slit_in_fish_etc": {
    "english": "Cut, slit (in fish etc.)",
    "bishnupriya": "কাক",
    "bangla": "চিরা",
    "hindi": "चीरा"
  },
  "lock": {
    "english": "Lock",
    "bishnupriya": "কাঁকড়া",
    "bangla": "তালা",
    "hindi": "ताला"
  },
  "crab_rough_stone": {
    "english": "Crab / rough stone",
    "bishnupriya": "কাঁকড়া",
    "bangla": "কাঁকড়া / খসখসে পাথর",
    "hindi": "केकड़ा / खुरदुरा पत्थर"
  },
  "waist": {
    "english": "Waist",
    "bishnupriya": "কাঁকালি",
    "bangla": "কোমর",
    "hindi": "कमर"
  },
  "importunate_request": {
    "english": "Importunate request",
    "bishnupriya": "কাকুতি",
    "bangla": "মিনতি",
    "hindi": "मिन्नत"
  },
  "paper": {
    "english": "Paper",
    "bishnupriya": "কাগজ",
    "bangla": "কাগজ",
    "hindi": "कागज़"
  },
  "chariot": {
    "english": "Chariot",
    "bishnupriya": "কান",
    "bangla": "রথ",
    "hindi": "रथ"
  },
  "swan": {
    "english": "Swan",
    "bishnupriya": "কানা",
    "bangla": "রাজহাঁস",
    "hindi": "हंस"
  },
  "hockey_stick": {
    "english": "Hockey-stick",
    "bishnupriya": "কানৌ",
    "bangla": "হকি স্টিক",
    "hindi": "हॉकी स्टिक"
  },
  "dry_cough": {
    "english": "Dry cough",
    "bishnupriya": "কাংখু",
    "bangla": "শুকনো কাশি",
    "hindi": "सूखी खाँसी"
  },
  "beggar_one_who_begs_humbly": {
    "english": "Beggar, one who begs humbly",
    "bishnupriya": "কাঙ্গাল",
    "bangla": "ভিখারি",
    "hindi": "भिखारी"
  },
  "gong": {
    "english": "Gong",
    "bishnupriya": "কাংসি",
    "bangla": "ঘণ্টা",
    "hindi": "घंटा"
  },
  "bedstead": {
    "english": "Bedstead",
    "bishnupriya": "কাঁঠাল",
    "bangla": "খাট",
    "hindi": "चारपाई"
  },
  "green_unripe": {
    "english": "Green, unripe",
    "bishnupriya": "কাঁচা",
    "bangla": "কাঁচা",
    "hindi": "कच्चा"
  },
  "sickle": {
    "english": "Sickle",
    "bishnupriya": "কাঁচি",
    "bangla": "কাস্তে",
    "hindi": "हँसिया"
  },
  "court_of_justice": {
    "english": "Court of justice",
    "bishnupriya": "কাছারি",
    "bangla": "কাছারি",
    "hindi": "कचहरी"
  },
  "work_duty": {
    "english": "Work, duty",
    "bishnupriya": "কাজ",
    "bangla": "কাজ",
    "hindi": "काम"
  },
  "collyrium_kohl": {
    "english": "Collyrium, kohl",
    "bishnupriya": "কাজল",
    "bangla": "কাজল",
    "hindi": "काजल"
  },
  "for_postposition": {
    "english": "For (postposition)",
    "bishnupriya": "কাজে",
    "bangla": "জন্য",
    "hindi": "के लिए"
  },
  "dry_smoking_pipe_bamboo": {
    "english": "Dry smoking pipe (bamboo)",
    "bishnupriya": "কাঞ্চুপ",
    "bangla": "শুকনো বাঁশের চিলিম",
    "hindi": "सूखी बांस की चिलम"
  },
  "dry_sweetmeat": {
    "english": "Dry sweetmeat",
    "bishnupriya": "কাঞ্চুপি",
    "bangla": "শুকনো মিষ্টি",
    "hindi": "सूखी मिठाई"
  },
  "hockey_hockey_field": {
    "english": "Hockey / hockey field",
    "bishnupriya": "কা'ঞ্চেই / কা'ঞ্চেই-পুন",
    "bangla": "হকি / হকি মাঠ",
    "hindi": "हॉकी / हॉकी मैदान"
  },
  "to_cut_to_spin": {
    "english": "To cut / to spin",
    "bishnupriya": "কাট",
    "bangla": "কাটা / সুতো কাটা",
    "hindi": "काटना / चरखा चलाना"
  },
  "thorn": {
    "english": "Thorn",
    "bishnupriya": "কাঁটা",
    "bangla": "কাঁটা",
    "hindi": "काँटा"
  },
  "to_defy_to_strike_off": {
    "english": "To defy / to strike off",
    "bishnupriya": "কাটা",
    "bangla": "অমান্য করা / ঝেড়ে ফেলা",
    "hindi": "मानना नहीं / झाड़ना"
  },
  "killing_each_other_over_correction": {
    "english": "Killing each other / over-correction",
    "bishnupriya": "কাটাকাটি",
    "bangla": "পরস্পর খুনোখুনি / অতিরিক্ত কাটাকুটি",
    "hindi": "एक-दूसरे को मारना / ज़्यादा काट-पीट"
  },
  "pigeon_pea_plant": {
    "english": "Pigeon-pea plant",
    "bishnupriya": "কাটারি / কাটারেই",
    "bangla": "অড়হর গাছ",
    "hindi": "अरहर का पौधा"
  },
  "tortoise": {
    "english": "Tortoise",
    "bishnupriya": "কাঠুয়া",
    "bangla": "কচ্ছপ",
    "hindi": "कछुआ"
  },
  "ear": {
    "english": "Ear",
    "bishnupriya": "কান",
    "bangla": "কান",
    "hindi": "कान"
  },
  "one_who_turns_a_deaf_ear": {
    "english": "One who turns a deaf ear",
    "bishnupriya": "কান-ফেরা / কান-ফেরি",
    "bangla": "কানে না তোলা লোক",
    "hindi": "कान न देने वाला"
  },
  "blind_in_one_eye": {
    "english": "Blind in one eye",
    "bishnupriya": "কানা",
    "bangla": "কানা",
    "hindi": "काना"
  },
  "whispering_secret_talk": {
    "english": "Whispering, secret talk",
    "bishnupriya": "কানাকানি",
    "bangla": "ফিসফিসানি",
    "hindi": "कानाफूसी"
  },
  "steersman_helmsman": {
    "english": "Steersman, helmsman",
    "bishnupriya": "কান্দারি",
    "bangla": "মাঝি",
    "hindi": "माझी"
  },
  "scissors": {
    "english": "Scissors",
    "bishnupriya": "কাঁতি",
    "bangla": "কাঁচি",
    "hindi": "कैंची"
  },
  "jackfruit_alt": {
    "english": "Jackfruit (alt.)",
    "bishnupriya": "কাঠাল",
    "bangla": "কাঁঠাল",
    "hindi": "कटहल"
  },
  "to_weep": {
    "english": "To weep",
    "bishnupriya": "কাদ",
    "bangla": "কাঁদা",
    "hindi": "रोना"
  },
  "mud": {
    "english": "Mud",
    "bishnupriya": "কাদা",
    "bangla": "কাদা",
    "hindi": "कीचड़"
  },
  "slap_on_the_ear": {
    "english": "Slap on the ear",
    "bishnupriya": "কানাহা",
    "bangla": "কানের চড়",
    "hindi": "कान पर थप्पड़"
  },
  "quilt": {
    "english": "Quilt",
    "bishnupriya": "কাঁথা",
    "bangla": "কাঁথা",
    "hindi": "कांथा"
  },
    "anger_importunity": {
    "english": "Anger, importunity",
    "bishnupriya": "কান্থি",
    "bangla": "রাগ / জেদ",
    "hindi": "गुस्सा / ज़िद"
  },
  "a_bunch_of_bananas": {
    "english": "A bunch of bananas",
    "bishnupriya": "কান্দা",
    "bangla": "কলার থোকা",
    "hindi": "केले का गुच्छा"
  },
  "span_thumb_to_forefinger": {
    "english": "Span (thumb to forefinger)",
    "bishnupriya": "কাপ",
    "bangla": "বিঘত",
    "hindi": "बित्ता"
  },
  "to_chop": {
    "english": "To chop",
    "bishnupriya": "কাপ",
    "bangla": "কোপানো",
    "hindi": "काटना (कुल्हाड़ी से)"
  },
  "fried_puffed_rice_dry": {
    "english": "Fried puffed rice (dry)",
    "bishnupriya": "কাপাক",
    "bangla": "মুড়ি",
    "hindi": "मुरमुरा"
  },
  "high_platform": {
    "english": "High platform",
    "bishnupriya": "চাঙ্গা",
    "bangla": "উঁচু মাচান",
    "hindi": "ऊँचा मचान"
  },
  "wicker_basket": {
    "english": "Wicker basket",
    "bishnupriya": "চাঙ্গা / চাঙ্গি",
    "bangla": "বড়ো ঝুড়ি",
    "hindi": "बड़ी टोकरी"
  },
  "seeking_refuge": {
    "english": "Seeking refuge",
    "bishnupriya": "চানচা",
    "bangla": "আশ্রয় প্রার্থনা",
    "hindi": "शरण माँगना"
  },
  "a_kind_of_plant_seed_smallest_gold_weight": {
    "english": "A kind of plant & seed / smallest gold weight",
    "bishnupriya": "চান্নিন",
    "bangla": "এক ধরনের গাছ ও বীজ / সোনার সর্বনিম্ন ওজন",
    "hindi": "एक तरह का पौधा और बीज / सोने का सबसे छोटा वज़न"
  },
  "cooked_rice_dish": {
    "english": "Cooked rice dish",
    "bishnupriya": "চানলুক",
    "bangla": "ভাতের তরকারি",
    "hindi": "चावल का व्यंजन"
  },
  "to_scrape": {
    "english": "To scrape",
    "bishnupriya": "চাচ-",
    "bangla": "আঁচড়ানো",
    "hindi": "खुरचना"
  },
  "net_bamboo_etc": {
    "english": "Net (bamboo etc.)",
    "bishnupriya": "চাটা",
    "bangla": "জাল",
    "hindi": "जाल"
  },
  "back_kicking": {
    "english": "Back-kicking",
    "bishnupriya": "চাঠি",
    "bangla": "পিছনে লাথি",
    "hindi": "पीछे लात"
  },
  "to_back_kick_to_eat_humorous": {
    "english": "To back-kick / to eat (humorous)",
    "bishnupriya": "চাঠিয়া-",
    "bangla": "পিছনে লাথি মারা / খাওয়া (রসিকতায়)",
    "hindi": "पीछे लात मारना / खाना (मज़ाक में)"
  },
  "cheap_adjective": {
    "english": "Cheap (adj.)",
    "bishnupriya": "অ'ঙপা",
    "bangla": "সস্তা",
    "hindi": "सस्ता"
  },
  "sun_plant_kind_of_plant": {
    "english": "Sun-plant (a kind of plant)",
    "bishnupriya": "আঙ্কট",
    "bangla": "সূর্যমুখী গাছ",
    "hindi": "सूरजमुखी का पौधा"
  },
  "vanity": {
    "english": "Vanity",
    "bishnupriya": "অঙ্কুর",
    "bangla": "অহংকার",
    "hindi": "अहंकार"
  },
  "nature_appearance_gesture": {
    "english": "Nature, appearance, gesture",
    "bishnupriya": "অ'ওতা",
    "bangla": "স্বভাব, চেহারা",
    "hindi": "स्वभाव, रूप"
  },
  "filled_congested": {
    "english": "Filled, congested",
    "bishnupriya": "অঙথিল",
    "bangla": "ভর্তি, জ্যাম",
    "hindi": "भरा हुआ, जाम"
  },
  "exchange": {
    "english": "Exchange",
    "bishnupriya": "অ'ঙনাথেঙনি",
    "bangla": "বদল, আদান-প্রদান",
    "hindi": "आदान-प्रदान, बदला"
  },
  "wrapper_for_babies_alt_form": {
    "english": "Wrapper for babies (alt. form)",
    "bishnupriya": "অঙলাক",
    "bangla": "শিশুর মোড়ক",
    "hindi": "बच्चे का लपेटने वाला कपड़ा"
  },
  "partner": {
    "english": "Partner",
    "bishnupriya": "অংশীদার",
    "bangla": "অংশীদার, শরিক",
    "hindi": "साझीदार"
  },
  "unknown": {
    "english": "Unknown",
    "bishnupriya": "অচিন / অচিনা",
    "bangla": "অজানা",
    "hindi": "अज्ञात, अनजान"
  },
  "filled_up_congested": {
    "english": "Filled up, congested",
    "bishnupriya": "অজম",
    "bangla": "ভর্তি, জ্যাম",
    "hindi": "भरा हुआ"
  },
  "teacher_sir": {
    "english": "Teacher, Sir",
    "bishnupriya": "অজা",
    "bangla": "শিক্ষক, স্যার",
    "hindi": "गुरुजी, सर"
  },
  "flat_and_heavy": {
    "english": "Flat and heavy",
    "bishnupriya": "অ'জা",
    "bangla": "চ্যাপটা ও ভারী",
    "hindi": "चपटा और भारी"
  },
  "unknown_2": {
    "english": "Unknown",
    "bishnupriya": "অজানা",
    "bangla": "অজানা",
    "hindi": "अज्ञात"
  },
  "great_teachers_teachers": {
    "english": "Great teachers / Teachers",
    "bishnupriya": "অজারেল",
    "bangla": "মহাগুরু / শিক্ষকগণ",
    "hindi": "बड़े गुरु / शिक्षक"
  },
  "plea_excuse": {
    "english": "Plea, excuse",
    "bishnupriya": "অজুহাত",
    "bangla": "ওজর, অজুহাত",
    "hindi": "बहाना"
  },
  "offering_with_folded_palms": {
    "english": "Offering with folded palms",
    "bishnupriya": "অঞ্জলি / অঞ্জুলি",
    "bangla": "অঞ্জলি",
    "hindi": "अंजलि"
  },
  "lip": {
    "english": "Lip",
    "bishnupriya": "অট",
    "bangla": "ঠোঁট",
    "hindi": "होंठ"
  },
  "japa_flower_hibiscus": {
    "english": "Japa flower (Hibiscus)",
    "bishnupriya": "অট",
    "bangla": "জবা ফুল",
    "hindi": "गुड़हल का फूल"
  },
  "speechless": {
    "english": "Speechless",
    "bishnupriya": "অটমুড়া",
    "bangla": "বোবা, হতবাক",
    "hindi": "गूंगा, अवाक्"
  },
  "one_having_a_big_lip": {
    "english": "One having a big lip",
    "bishnupriya": "অটিয়া",
    "bangla": "বড়ো ঠোঁটওয়ালা",
    "hindi": "बड़े होंठ वाला"
  },
  "boundary": {
    "english": "Boundary",
    "bishnupriya": "অত্",
    "bangla": "সীমানা, হদ্দ",
    "hindi": "सीमा"
  },
  "so_much": {
    "english": "So much",
    "bishnupriya": "অতো",
    "bangla": "এত",
    "hindi": "इतना"
  },
  "therefore": {
    "english": "Therefore",
    "bishnupriya": "অতএব",
    "bangla": "অতএব",
    "hindi": "इसलिए"
  },
  "guest": {
    "english": "Guest",
    "bishnupriya": "অতিত",
    "bangla": "অতিথি",
    "hindi": "मेहमान"
  },
  "so_much_2": {
    "english": "So much",
    "bishnupriya": "অত্তামান / অত্তামাহি / অত্তামায়",
    "bangla": "এতত, এতটা",
    "hindi": "इतना"
  },
  "very_much": {
    "english": "Very much",
    "bishnupriya": "অত্যন্ত",
    "bangla": "অত্যন্ত",
    "hindi": "अत्यन्त"
  },
  "oppression_tyranny": {
    "english": "Oppression, tyranny",
    "bishnupriya": "অত্যাচার",
    "bangla": "অত্যাচার",
    "hindi": "अत्याचार"
  },
  "exchange_interchange": {
    "english": "Exchange, interchange",
    "bishnupriya": "অদল-বদল",
    "bangla": "আদল-বদল",
    "hindi": "अदल-बदल"
  },
  "now_today": {
    "english": "Now, today",
    "bishnupriya": "অদ্য",
    "bangla": "আজ",
    "hindi": "आज"
  },
  "even_now": {
    "english": "Even now",
    "bishnupriya": "অদ্যাপিও",
    "bangla": "এখনও",
    "hindi": "अब भी"
  },
  "melting": {
    "english": "Melting",
    "bishnupriya": "অনা",
    "bangla": "গলা",
    "hindi": "पिघलना"
  },
  "happening_being": {
    "english": "Happening, being",
    "bishnupriya": "অ'না / অ'নি",
    "bangla": "ঘটছে, হচ্ছে",
    "hindi": "होना, घटित होना"
  },
  "dirty_conduct": {
    "english": "Dirty conduct",
    "bishnupriya": "অনাচার",
    "bangla": "অশুচি আচরণ",
    "hindi": "दुष्चरित्र"
  },
  "fruitless_in_vain": {
    "english": "Fruitless, in vain",
    "bishnupriya": "অনাহক",
    "bangla": "বৃথা",
    "hindi": "व्यर्थ"
  },
  "many": {
    "english": "Many",
    "bishnupriya": "অনেক",
    "bangla": "অনেক",
    "hindi": "बहुत"
  },
  "at_least": {
    "english": "At least",
    "bishnupriya": "অন্ততঃ",
    "bangla": "অন্তত",
    "hindi": "कम से कम"
  },
  "heart": {
    "english": "Heart",
    "bishnupriya": "অন্তর",
    "bangla": "অন্তর, হৃদয়",
    "hindi": "हृदय"
  },
  "intimate": {
    "english": "Intimate",
    "bishnupriya": "অন্তরঙ্গ",
    "bangla": "অন্তরঙ্গ",
    "hindi": "अन्तरंग"
  },
  "blind": {
    "english": "Blind",
    "bishnupriya": "অন্ধ",
    "bangla": "অন্ধ",
    "hindi": "अंधा"
  },
  "darkness": {
    "english": "Darkness",
    "bishnupriya": "অন্ধকার",
    "bangla": "অন্ধকার",
    "hindi": "अंधेरा"
  },
  "elephant": {
    "english": "Elephant",
    "bishnupriya": "অ'ত্তি",
    "bangla": "হাতি",
    "hindi": "हाथी"
  },
  "to_be_to_become": {
    "english": "To be, to become",
    "bishnupriya": "অ'",
    "bangla": "হওয়া, হয়ে ওঠা",
    "hindi": "होना, बन जाना"
  },
  "prefix_in_sense_of_such": {
    "english": "A prefix (in the sense of 'such')",
    "bishnupriya": "অ",
    "bangla": "এমন (এ উপসর্গ)",
    "hindi": "ऐसा (उपसर्ग)"
  },
  "negative_prefix": {
    "english": "Negative prefix",
    "bishnupriya": "অ",
    "bangla": "অ-, অন- (না বোঝাতে)",
    "hindi": "नकारात्मक उपसर्ग (अ-, अन-)"
  },
  "pleonastic_prefix": {
    "english": "Pleonastic prefix",
    "bishnupriya": "অ",
    "bangla": "অতিরিক্ত/সৌন্দর্যবর্ধক উপসর্গ",
    "hindi": "सुखार्थक/अतिरिक्त उपसर्ग"
  },
  "vocative_particle_oh": {
    "english": "Vocative particle (Oh!)",
    "bishnupriya": "অ",
    "bangla": "ওহে!, অ্যাই!",
    "hindi": "हे!, ओ!"
  },
  "profit": {
    "english": "Profit",
    "bishnupriya": "অইচা",
    "bangla": "লাভ",
    "hindi": "लाभ, मुनाफा"
  },
  "restless_fickle": {
    "english": "Restless, fickle",
    "bishnupriya": "অইচ্চা",
    "bangla": "অস্থির, চঞ্চল",
    "hindi": "चंचल, अस्थिर"
  },
  "mishap_accident": {
    "english": "Mishap, accident",
    "bishnupriya": "অইথি-তামথি",
    "bangla": "বিপদ-আপদ, দুর্ঘটনা",
    "hindi": "विपत्ति, दुर्घटना"
  },
  "positive_or_negative": {
    "english": "Positive or negative",
    "bishnupriya": "অইবা-নাইবা",
    "bangla": "হইব-নাইব (হয় বা নয়)",
    "hindi": "हो या न हो"
  },
  "as_it_happened_should": {
    "english": "As it happened, should",
    "bishnupriya": "অইলো",
    "bangla": "যা হইয়া গেছে, হওয়া উচিত ছিল",
    "hindi": "जैसा हो गया, होना चाहिए था"
  },
  "efficient_befitting": {
    "english": "Efficient, befitting",
    "bishnupriya": "অ'ক",
    "bangla": "যোগ্য, উপযুক্ত",
    "hindi": "योग्य, उपयुक्त"
  },
  "female_form_of_above": {
    "english": "Female form of above",
    "bishnupriya": "অকণী",
    "bangla": "স্ত্রীলিঙ্গ রূপ",
    "hindi": "स्त्रीलिंग रूप"
  },
  "to_begin": {
    "english": "To begin",
    "bishnupriya": "অ'কর",
    "bangla": "শুরু করা",
    "hindi": "शुरू करना"
  },
  "deformed_weak": {
    "english": "Deformed, weak",
    "bishnupriya": "অকরং-বকরং",
    "bangla": "বিকৃত, দুর্বল",
    "hindi": "विकृत, कमजोर"
  },
  "beginning": {
    "english": "Beginning",
    "bishnupriya": "অ'করা",
    "bangla": "শুরু, আরম্ভ",
    "hindi": "शुरुआत"
  },
  "begun": {
    "english": "Begun",
    "bishnupriya": "অকরা",
    "bangla": "শুরু করা হয়েছে",
    "hindi": "शुरू किया हुआ"
  },
  "beginning_noun": {
    "english": "Beginning (noun)",
    "bishnupriya": "অ'করানি",
    "bangla": "শুরু (বিশেষ্য)",
    "hindi": "शुरुआत (संज्ञा)"
  },
  "to_belch": {
    "english": "To belch",
    "bishnupriya": "অকাটা",
    "bangla": "ঢেকুর তোলা",
    "hindi": "डकार लेना"
  },
  "belching": {
    "english": "Belching",
    "bishnupriya": "অকাটানি",
    "bangla": "ঢেকুর",
    "hindi": "डकार"
  },
  "unnecessarily": {
    "english": "Unnecessarily",
    "bishnupriya": "অকারণে",
    "bangla": "অকারণে, বিনা কারণে",
    "hindi": "बिना कारण, व्यर्थ"
  },
  "deficiency": {
    "english": "Deficiency",
    "bishnupriya": "অকুলান",
    "bangla": "অভাব, কমতি",
    "hindi": "कमी, अभाव"
  },
  "much": {
    "english": "Much",
    "bishnupriya": "অকখাক",
    "bangla": "অনেক, বহুত",
    "hindi": "बहुत"
  },
  "accordingly_much": {
    "english": "Accordingly, much",
    "bishnupriya": "অকথাকপা",
    "bangla": "তদনুসারে, অনেক",
    "hindi": "तदनुसार, बहुत"
  },
  "filth": {
    "english": "Filth",
    "bishnupriya": "অকচাক",
    "bangla": "ময়লা, আবর্জনা",
    "hindi": "गंदगी"
  },
  "filthy": {
    "english": "Filthy",
    "bishnupriya": "অকচাকথক",
    "bangla": "নোংরা",
    "hindi": "गन्दा"
  },
  "female_of_above": {
    "english": "Female of above",
    "bishnupriya": "অকচাকথকপী",
    "bangla": "নোংরা (স্ত্রী.)",
    "hindi": "गन्दी (स्त्री.)"
  },
  "female_cleanser_of_filth": {
    "english": "Female cleanser of filth",
    "bishnupriya": "অকচাকপী",
    "bangla": "ময়লা পরিষ্কারকারিণী",
    "hindi": "गंदगी साफ करने वाली"
  },
  "meeting": {
    "english": "Meeting",
    "bishnupriya": "অকনা",
    "bangla": "মিলন, সাক্ষাৎ",
    "hindi": "मिलन, बैठक"
  },
  "wrapper_for_babies": {
    "english": "Wrapper for babies",
    "bishnupriya": "অকলাক",
    "bangla": "শিশুর কাপড়ের মোড়ক",
    "hindi": "शिशु का लपेटने वाला कपड़ा"
  },
  "excessively": {
    "english": "Excessively",
    "bishnupriya": "অকলৌকরে",
    "bangla": "অত্যধিক",
    "hindi": "अत्यधिक"
  },
  "terrific": {
    "english": "Terrific",
    "bishnupriya": "অঘোর",
    "bangla": "ভয়ঙ্কর",
    "hindi": "भयंकर"
  },
  "indian_month_agrahayana": {
    "english": "An Indian month (Agrahayana)",
    "bishnupriya": "অঘ্রাণ",
    "bangla": "অগ্রহায়ণ",
    "hindi": "अग्रहायण मास"
  },
  "concealment_shelter": {
    "english": "Concealment, shelter",
    "bishnupriya": "আউড়",
    "bangla": "আড়াল, আশ্রয়",
    "hindi": "ओट, आश्रय"
  },
  "restless_worried_restlessness": {
    "english": "Restless, worried; restlessness",
    "bishnupriya": "আউল-জাউল",
    "bangla": "অস্থির, উদ্বিগ্ন; অস্থিরতা",
    "hindi": "बेचैन; बेचैनी"
  },
  "dishevelled_and_untidy": {
    "english": "Dishevelled and untidy",
    "bishnupriya": "আউলা-জাউলা",
    "bangla": "এলোমেলো, আলুথালু",
    "hindi": "बिखरा-बिखरा, अस्त-व्यस्त"
  },
  "early_paddy_autumn_rice": {
    "english": "Early paddy (autumn rice)",
    "bishnupriya": "আউশ",
    "bangla": "আউশ ধান",
    "hindi": "औस धान (शरदकालीन चावल)"
  },
  "disordered_dishevelled": {
    "english": "Disordered, dishevelled",
    "bishnupriya": "আওলা",
    "bangla": "এলোমেলো",
    "hindi": "अस्त-व्यस्त"
  },
  "one": {
    "english": "One",
    "bishnupriya": "আক",
    "bangla": "এক",
    "hindi": "एक"
  },
  "gap_space": {
    "english": "Gap, space",
    "bishnupriya": "আক",
    "bangla": "ফাঁক",
    "hindi": "खाली जगह, गैप"
  },
  "excess": {
    "english": "Excess",
    "bishnupriya": "আ'ক",
    "bangla": "অতিরিক্ত",
    "hindi": "अधिकता"
  },
  "sun_plant_crown_flower_giant_milkweed": {
    "english": "Sun-plant (Crown flower / Giant milkweed)",
    "bishnupriya": "আকন",
    "bangla": "আকন্দ",
    "hindi": "आक, मदार"
  },
  "gaining_in_both_ways": {
    "english": "Gaining in both ways (profit either way)",
    "bishnupriya": "আকা-আকুম",
    "bangla": "দুদিকেই লাভ",
    "hindi": "दोनों तरफ फायदा"
  },
  "dry_kneaded_dry_preparation": {
    "english": "A dry kneaded dry preparation (like lāṛu)",
    "bishnupriya": "আকা-আমেত",
    "bangla": "শুকনো ময়দার তৈরি মিষ্টি",
    "hindi": "सूखा गुँथा हुआ पकवान"
  },
  "imperfect_imperfectly": {
    "english": "Imperfect; imperfectly",
    "bishnupriya": "আকাচু-বাকাচু",
    "bangla": "অসম্পূর্ণ; অসম্পূর্ণভাবে",
    "hindi": "अधूरा; अधूरे ढंग से"
  },
  "uncut_rough_unpolished": {
    "english": "Uncut, rough, unpolished",
    "bishnupriya": "আকাটা",
    "bangla": "অকাটা, রুক্ষ",
    "hindi": "बिना कटा हुआ, खुरदरा"
  },
  "too_much_excessive": {
    "english": "Too much, excessive",
    "bishnupriya": "আকাস্থি",
    "bangla": "অত্যধিক",
    "hindi": "बहुत ज्यादा"
  },
  "obscene_vulgar": {
    "english": "Obscene, vulgar",
    "bishnupriya": "আকাম্পা",
    "bangla": "অশ্লীল",
    "hindi": "अश्लील"
  },
  "famine_hard_times": {
    "english": "Famine, hard times",
    "bishnupriya": "আকাল",
    "bangla": "অকাল, দুর্ভিক্ষ",
    "hindi": "अकाल, दुर्भिक्ष"
  },
  "protector_strong": {
    "english": "Protector; strong",
    "bishnupriya": "আকালপা",
    "bangla": "রক্ষক; বলশালী",
    "hindi": "रक्षक; ताकतवर"
  },
  "infantile_insistence_tantrum_disturbance": {
    "english": "Infantile insistence, tantrum, disturbance",
    "bishnupriya": "আকুটালি",
    "bangla": "শিশুসুলভ জেদ, গোলমাল",
    "hindi": "बच्चों जैसी जिद, उपद्रव"
  },
  "fine_and_minor_works": {
    "english": "Fine and minor works",
    "bishnupriya": "আকুপাতি",
    "bangla": "সূক্ষ্ম কাজ",
    "hindi": "बारीक काम"
  },
  "fine_small": {
    "english": "Fine, small",
    "bishnupriya": "আকুপ্পা",
    "bangla": "সরু, ছোট",
    "hindi": "बारीक, छोटा"
  },
  "at_one_time_forever": {
    "english": "At one time, forever",
    "bishnupriya": "আকুবালা",
    "bangla": "একসঙ্গে, চিরকাল",
    "hindi": "एक बार में, हमेशा के लिए"
  },
  "opportunity": {
    "english": "Opportunity",
    "bishnupriya": "আকেৎপা",
    "bangla": "সুযোগ",
    "hindi": "मौका"
  },
  "true_clean_pure": {
    "english": "True, clean, pure",
    "bishnupriya": "আকোকপ",
    "bangla": "সত্য, পরিষ্কার",
    "hindi": "सच, साफ"
  },
  "intelligence_common_sense": {
    "english": "Intelligence, common sense",
    "bishnupriya": "আক্কল",
    "bangla": "বুদ্ধি, আক্কেল",
    "hindi": "अक्ल, समझ"
  },
  "alone": {
    "english": "Alone",
    "bishnupriya": "আকখালা",
    "bangla": "একা",
    "hindi": "अकेला"
  },
  "once": {
    "english": "Once",
    "bishnupriya": "আকফির",
    "bangla": "একবার",
    "hindi": "एक बार"
  },
  "one_turn": {
    "english": "One turn",
    "bishnupriya": "আকফিরণ",
    "bangla": "এক চক্কর",
    "hindi": "एक चक्कर"
  },
  "once_2": {
    "english": "Once",
    "bishnupriya": "আকফুরুঙ",
    "bangla": "একবার",
    "hindi": "एक बार"
  },
  "once_3": {
    "english": "Once",
    "bishnupriya": "আকমাও",
    "bangla": "একবার",
    "hindi": "एक बार"
  },
  "sneeze": {
    "english": "Sneeze",
    "bishnupriya": "আ'কছি",
    "bangla": "হাঁচি",
    "hindi": "छींक"
  },
  "to_sneeze": {
    "english": "To sneeze",
    "bishnupriya": "আ'কছিয়া",
    "bangla": "হাঁচা",
    "hindi": "छींकना"
  },
  "sneezing": {
    "english": "Sneezing",
    "bishnupriya": "আ'কছিয়ানি",
    "bangla": "হাঁচির ক্রিয়া",
    "hindi": "छींकना (क्रिया)"
  },
  "one_thing": {
    "english": "One thing",
    "bishnupriya": "আকতা",
    "bangla": "একটা জিনিস",
    "hindi": "एक चीज़"
  },
  "united_simultaneous_together": {
    "english": "United, simultaneous, together",
    "bishnupriya": "আকতা",
    "bangla": "একসঙ্গে",
    "hindi": "एक साथ"
  },
  "suddenly": {
    "english": "Suddenly",
    "bishnupriya": "আকতা",
    "bangla": "হঠাৎ",
    "hindi": "अचानक"
  },
  "careful_thought_before_and_behind": {
    "english": "Careful thought (before & behind)",
    "bishnupriya": "আকপাক",
    "bangla": "আগে-পিছে ভেবে",
    "hindi": "पहले-पिछले सोचकर"
  },
  "warmth_anxiety": {
    "english": "Warmth, anxiety",
    "bishnupriya": "আলান",
    "bangla": "উত্তাপ, উদ্বেগ",
    "hindi": "गर्मी, चिन्ता"
  },
  "stick_hung_from_neck_of_animal": {
    "english": "A stick hung from the neck of an animal",
    "bishnupriya": "আ'লটান",
    "bangla": "পশুর গলায় ঝোলানো লাঠি",
    "hindi": "जानवर के गले में लटकाई लकड़ी"
  },
  "yellowish": {
    "english": "Yellowish",
    "bishnupriya": "আলদিয়া",
    "bangla": "হলদেটে",
    "hindi": "पीला-सा"
  },
  "jaundice": {
    "english": "Jaundice",
    "bishnupriya": "আলমি",
    "bangla": "জন্ডিস",
    "hindi": "पीलिया"
  },
  "piece_of_bone_taken_from_forehead_at_cremation": {
    "english": "Piece of bone taken from forehead at cremation",
    "bishnupriya": "অষ্টি",
    "bangla": "কপালের হাড় (চিতার)",
    "hindi": "माथे की हड्डी (चिता से)"
  },
  "expression_of_sympathy_sorrow": {
    "english": "Expression of sympathy / sorrow (“alas!”)",
    "bishnupriya": "আহো",
    "bangla": "আহা!, হায়!",
    "hindi": "हाय!, आह!"
  },
  "pleonastic_prefix": {
    "english": "Pleonastic prefix",
    "bishnupriya": "আ",
    "bangla": "অতিরিক্ত/সৌন্দর্যবর্ধক উপসর্গ",
    "hindi": "सुखार्थक उपसर्ग"
  },
  "negative_prefix": {
    "english": "Negative prefix",
    "bishnupriya": "আ",
    "bangla": "অ-, না- বোঝাতে",
    "hindi": "नकारात्मक उपसर्ग"
  },
  "to_come": {
    "english": "To come",
    "bishnupriya": "আ",
    "bangla": "আসা",
    "hindi": "आना"
  },
  "suffix_for_past_participle": {
    "english": "Suffix for past participle",
    "bishnupriya": "-আ",
    "bangla": "ভূতকৃদন্ত প্রত্যয়",
    "hindi": "भूतकालिक कृदंत प्रत्यय"
  },
  "suffix_for_verbal_noun": {
    "english": "Suffix for verbal noun",
    "bishnupriya": "-আ",
    "bangla": "ক্রিয়াবাচক বিশেষ্য প্রত্যয়",
    "hindi": "क्रिया-संज्ञा प्रत्यय"
  },
  "suffix_meaning_having_looking_like": {
    "english": "Suffix meaning “having / looking like”",
    "bishnupriya": "-আ",
    "bangla": "-এর মতো / সম্পর্কিত",
    "hindi": "\"वाला / जैसा\" अर्थ वाला प्रत्यय"
  },
  "suffix_to_form_causatives": {
    "english": "Suffix to form causatives",
    "bishnupriya": "-আ",
    "bangla": "সকর্মক করার প্রত্যয়",
    "hindi": "सकर्मक बनाने वाला प्रत्यय"
  },
  "great_grandmother": {
    "english": "Great-grandmother",
    "bishnupriya": "আই",
    "bangla": "প্রপিতামহী",
    "hindi": "परदादी"
  },
  "mishap_trouble": {
    "english": "Mishap, trouble",
    "bishnupriya": "আই-আপদ",
    "bangla": "বিপদ-আপদ",
    "hindi": "विपत्ति"
  },
  "cold_unboiled_food": {
    "english": "Cold, unboiled (food)",
    "bishnupriya": "আইতপা",
    "bangla": "ঠান্ডা, আনকোরা",
    "hindi": "ठंडा, कच्चा"
  },
  "chopper_knife_with_legs_stand": {
    "english": "A chopper / knife with legs/stand",
    "bishnupriya": "আইদা",
    "bangla": "পা-ওয়ালা ছুরি",
    "hindi": "पैर वाली छुरी"
  },
  "law_regulation": {
    "english": "Law, regulation",
    "bishnupriya": "আইন",
    "bangla": "আইন",
    "hindi": "कानून"
  },
  "coming_next_future": {
    "english": "Coming, next (future)",
    "bishnupriya": "আইব",
    "bangla": "আসছে",
    "hindi": "आने वाला"
  },
  "kind_of_fish": {
    "english": "A kind of fish",
    "bishnupriya": "আইর",
    "bangla": "আইড় মাছ",
    "hindi": "एक तरह की मछली"
  },
  "suffix_for_past_participle_another_form": {
    "english": "Suffix for past participle (another form)",
    "bishnupriya": "-আইল",
    "bangla": "-আইল (ভূতকৃদন্ত)",
    "hindi": "-आया हुआ"
  },
  "courtesy_lit_come_and_sit": {
    "english": "Courtesy (lit. “come and sit”)",
    "bishnupriya": "আইস-বইস",
    "bangla": "আইস-বইস (ভদ্রতা)",
    "hindi": "नमस्ते / अदब"
  },
  "sweets_sweet_food": {
    "english": "Sweets, sweet food",
    "bishnupriya": "আউ-আঠুম",
    "bangla": "মিষ্টি",
    "hindi": "मिठाई"
  },
  "disturbance_trouble_chaos": {
    "english": "Disturbance, trouble, chaos",
    "bishnupriya": "আউকাল",
    "bangla": "গণ্ডগোল, অশান্তি",
    "hindi": "उपद्रव, गड़बड़"
  },
  "area_confinement_enclosure": {
    "english": "Area, confinement, enclosure",
    "bishnupriya": "আউটা",
    "bangla": "জায়গা, ঘেরা",
    "hindi": "क्षेत्र, कैद"
  },
  "lake": {
    "english": "Lake",
    "bishnupriya": "আ'উর",
    "bangla": "হ্রদ",
    "hindi": "झील"
  },
  "season_when_animals_are_set_free_to_graze": {
    "english": "Season when animals are set free to graze",
    "bishnupriya": "আউরি",
    "bangla": "পশু ছাড়ার সময়",
    "hindi": "पशु छोड़ने का मौसम"
  },
  "present_participle_suffix": {
    "english": "Present participle suffix",
    "bishnupriya": "-",
    "bangla": "বর্তমান কৃদন্ত প্রত্যয়",
    "hindi": "वर्तमान कृदंत प्रत्यय"
  },
  "vanity": {
    "english": "Vanity",
    "bishnupriya": "অন্তু",
    "bangla": "অহংকার",
    "hindi": "अहंकार"
  },
  "queer_strange_amazing": {
    "english": "Queer, strange, amazing",
    "bishnupriya": "অন্থক / অন্থকপা",
    "bangla": "অদ্ভুত, বিচিত্র",
    "hindi": "अजीब, विचित्र"
  },
  "inner_apartment_harem": {
    "english": "Inner apartment, harem",
    "bishnupriya": "অন্দর",
    "bangla": "অন্তঃপুর",
    "hindi": "अन्तःपुर, हरम"
  },
  "temper_ill_humour_heart": {
    "english": "Temper, ill-humour, heart",
    "bishnupriya": "অন্দি",
    "bangla": "মেজাজ, রাগ",
    "hindi": "गुस्सा, मन का भाव"
  },
  "mud": {
    "english": "Mud",
    "bishnupriya": "আপ",
    "bangla": "কাদা",
    "hindi": "कीचड़"
  },
  "muddy_place": {
    "english": "Muddy place",
    "bishnupriya": "আপত",
    "bangla": "কাদার জায়গা",
    "hindi": "कीचड़ वाली जगह"
  },
  "insulted_reviled": {
    "english": "Insulted, reviled",
    "bishnupriya": "অপদস্ত",
    "bangla": "অপমানিত",
    "hindi": "अपमानित"
  },
  "wonderful_marvellous": {
    "english": "Wonderful, marvellous",
    "bishnupriya": "অপরূপ",
    "bangla": "অপরূপ, অপূর্ব",
    "hindi": "अद्भुत, अप्रतिम"
  },
  "guest": {
    "english": "Guest",
    "bishnupriya": "অপরবী",
    "bangla": "অতিথি",
    "hindi": "मेहमान"
  },
  "incomplete": {
    "english": "Incomplete",
    "bishnupriya": "অপূরণ",
    "bangla": "অসম্পূর্ণ",
    "hindi": "अधूरा"
  },
  "nymph_female": {
    "english": "Nymph (female)",
    "bishnupriya": "আপ্সরী",
    "bangla": "অপ্সরী",
    "hindi": "अप्सरा"
  },
  "limb_appearance": {
    "english": "Limb, appearance",
    "bishnupriya": "অবয়ব",
    "bangla": "অঙ্গ-প্রত্যঙ্গ, চেহারা",
    "hindi": "अंग-प्रत्यंग, रूप"
  },
  "solemn_deep_voice": {
    "english": "Solemn, deep (voice)",
    "bishnupriya": "অবলা",
    "bangla": "গম্ভীর (স্বর)",
    "hindi": "गम्भीर (आवाज़)"
  },
  "unreasonable_foolish_immature": {
    "english": "Unreasonable, foolish, immature",
    "bishnupriya": "অবুজ",
    "bangla": "অবুঝ, নির্বোধ",
    "hindi": "नासमझ, मूर्ख"
  },
  "unfortunate_male": {
    "english": "Unfortunate (male)",
    "bishnupriya": "অভাগা",
    "bangla": "ভাগ্যহীন, দুর্ভাগ্য",
    "hindi": "दुर्भाग्यशाली (पुरुष)"
  },
  "unfortunate_female": {
    "english": "Unfortunate (female)",
    "bishnupriya": "অভাগী",
    "bangla": "ভাগ্যহীনা",
    "hindi": "दुर्भाग्यशाली (स्त्री)"
  },
  "so_much": {
    "english": "So much",
    "bishnupriya": "অমাটিক",
    "bangla": "এতটা",
    "hindi": "इतना"
  },
  "discord_dissimilarity": {
    "english": "Discord, dissimilarity",
    "bishnupriya": "অমিল",
    "bangla": "অমিল, বেমানান",
    "hindi": "असमानता, फूट"
  },
  "nectar": {
    "english": "Nectar",
    "bishnupriya": "অমৃত",
    "bangla": "অমৃত",
    "hindi": "अमृत"
  },
  "restless": {
    "english": "Restless",
    "bishnupriya": "অয়মপা",
    "bangla": "অস্থির",
    "hindi": "बेचैन"
  },
  "mud_alternative": {
    "english": "Mud (alternative)",
    "bishnupriya": "আ'র",
    "bangla": "কাদা",
    "hindi": "कीचड़"
  },
  "not_tight_loose_slack": {
    "english": "Not tight, loose, slack",
    "bishnupriya": "অরণ-বরণ",
    "bangla": "ঢিলা",
    "hindi": "ढीला"
  },
  "piles_haemorrhoids": {
    "english": "Piles (haemorrhoids)",
    "bishnupriya": "আ'রিচ",
    "bangla": "অর্শ, পাইলস",
    "hindi": "बवासीर"
  },
  "ordered_from_english_order": {
    "english": "Ordered (from English “order”)",
    "bishnupriya": "অর্দারি",
    "bangla": "আদেশপ্রাপ্ত",
    "hindi": "आदेशित"
  },
  "paralysis": {
    "english": "Paralysis",
    "bishnupriya": "অর্ধাঙ্গ",
    "bangla": "অর্ধাঙ্গ রোগ",
    "hindi": "पक्षाघात"
  },
  "half": {
    "english": "Half",
    "bishnupriya": "অর্ধেক",
    "bangla": "অর্ধেক",
    "hindi": "आधा"
  },
  "arum_tuber_vegetable": {
    "english": "Arum (a tuber vegetable)",
    "bishnupriya": "আল",
    "bangla": "ওল, মানকচু",
    "hindi": "अरबी, मांकचू"
  },
  "bald_headed": {
    "english": "Bald-headed",
    "bishnupriya": "তলুতানপা / তলুতুকা",
    "bangla": "টাক মাথা",
    "hindi": "गंजा"
  },
  "rich_man": {
    "english": "Rich man",
    "bishnupriya": "তলেবর",
    "bangla": "ধনী",
    "hindi": "अमीर"
  },
  "ashes": {
    "english": "Ashes",
    "bishnupriya": "তলকৈ",
    "bangla": "ছাই",
    "hindi": "राख"
  },
  "piece": {
    "english": "Piece",
    "bishnupriya": "তলখৈ",
    "bangla": "টুকরো",
    "hindi": "टुकड़ा"
  },
  "playing_cards": {
    "english": "Playing cards",
    "bishnupriya": "তাস",
    "bangla": "তাস",
    "hindi": "ताश"
  },
  "clear": {
    "english": "Clear",
    "bishnupriya": "তাসেন",
    "bangla": "পরিষ্কার",
    "hindi": "साफ"
  },
  "spear": {
    "english": "Spear",
    "bishnupriya": "তাসেল",
    "bangla": "বর্শা",
    "hindi": "भाला"
  },
  "thou_you_sing": {
    "english": "Thou / you (sing.)",
    "bishnupriya": "তি",
    "bangla": "তুই",
    "hindi": "तू"
  },
  "present_participle_suffix": {
    "english": "Present participle suffix",
    "bishnupriya": "-তি",
    "bangla": "বর্তমান কৃদন্ত প্রত্যয়",
    "hindi": "वर्तमान कृदंत प्रत्यय"
  },
  "slightness_suffix": {
    "english": "Slightness suffix",
    "bishnupriya": "-তি",
    "bangla": "সামান্যতা প্রত্যয়",
    "hindi": "थोड़ा प्रत्यय"
  },
  "hatred_inflaming_sentiment": {
    "english": "Hatred / inflaming sentiment",
    "bishnupriya": "টিক",
    "bangla": "বিদ্বেষ / উত্তেজিত করা",
    "hindi": "नफरत / भड़काना"
  },
  "to_get_wet": {
    "english": "To get wet",
    "bishnupriya": "টিন-",
    "bangla": "ভিজে যাওয়া",
    "hindi": "भीगना"
  },
  "moistened_wet": {
    "english": "Moistened / wet",
    "bishnupriya": "টিনা",
    "bangla": "ভেজা",
    "hindi": "गीला"
  },
  "to_make_wet": {
    "english": "To make wet",
    "bishnupriya": "টিনা-",
    "bangla": "ভিজিয়ে দেওয়া",
    "hindi": "भिगोना"
  },
  "blow_with_elbow": {
    "english": "Blow with elbow",
    "bishnupriya": "টিঙ্খুল",
    "bangla": "কনুই দিয়ে ঘা",
    "hindi": "कोहनी से मारना"
  },
  "bitter": {
    "english": "Bitter",
    "bishnupriya": "টিটা",
    "bangla": "তেতো",
    "hindi": "कड़वा"
  },
  "small_bitter_fish": {
    "english": "Small bitter fish",
    "bishnupriya": "টিটুনি",
    "bangla": "তিতা ছোটো মাছ",
    "hindi": "कड़वी छोटी मछली"
  },
  "three": {
    "english": "Three",
    "bishnupriya": "টিন",
    "bangla": "তিন",
    "hindi": "तीन"
  },
  "lord_shiva": {
    "english": "Lord Shiva",
    "bishnupriya": "টিনাত",
    "bangla": "ত্রিনাথ (শিব)",
    "hindi": "त्रिनाथ (शिव)"
  },
  "desperation": {
    "english": "Desperation",
    "bishnupriya": "টিন্তাম",
    "bangla": "হতাশা",
    "hindi": "निराशा"
  },
  "renunciation": {
    "english": "Renunciation",
    "bishnupriya": "টিয়াগ",
    "bangla": "ত্যাগ",
    "hindi": "त्याग"
  },
  "ready_prepared": {
    "english": "Ready / prepared",
    "bishnupriya": "টিয়ার",
    "bangla": "তৈরি",
    "hindi": "तैयार"
  },
  "simul_cotton": {
    "english": "Simul cotton",
    "bishnupriya": "টিরা",
    "bangla": "শিমুল তুলো",
    "hindi": "शीमल रुई"
  },
  "thirst": {
    "english": "Thirst",
    "bishnupriya": "টিরাস",
    "bangla": "তৃষ্ণা",
    "hindi": "प्यास"
  },
  "thirty_points_dice": {
    "english": "Thirty points (dice)",
    "bishnupriya": "টিরিসা",
    "bangla": "ত্রিশ পয়েন্ট",
    "hindi": "तीस अंक"
  },
  "defect": {
    "english": "Defect",
    "bishnupriya": "টিরুটি",
    "bangla": "দোষ",
    "hindi": "खराबी"
  },
  "tarpaulin": {
    "english": "Tarpaulin",
    "bishnupriya": "টিরপল",
    "bangla": "ত্রিপল",
    "hindi": "तिरपाल"
  },
  "similar": {
    "english": "Similar",
    "bishnupriya": "টিল",
    "bangla": "একই রকম",
    "hindi": "एक जैसा"
  },
  "sesamum_mole": {
    "english": "Sesamum / mole",
    "bishnupriya": "টিলা",
    "bangla": "তিল / তিলক",
    "hindi": "तिल / तिल"
  },
  "sweetmeat_of_sesamum": {
    "english": "Sweetmeat of sesamum",
    "bishnupriya": "টিলকাঞ্চুপি",
    "bangla": "তিলের মিষ্টি",
    "hindi": "तिल की मिठाई"
  },
  "sweetmeat_with_sesamum": {
    "english": "Sweetmeat with sesamum",
    "bishnupriya": "টিলুয়া",
    "bangla": "তিলের মিষ্টি",
    "hindi": "तिल की मिठाई"
  },
  "little_moment": {
    "english": "Little / moment",
    "bishnupriya": "টিলেক",
    "bangla": "একটু / মুহূর্ত",
    "hindi": "थोड़ा / पल"
  },
  "fever_from_worms": {
    "english": "Fever from worms",
    "bishnupriya": "টিল-খুলৈ",
    "bangla": "পেটের কৃমির জ্বর",
    "hindi": "पेट के कीड़े का बुखार"
  },
  "small_particles": {
    "english": "Small particles",
    "bishnupriya": "টিলপুল",
    "bangla": "ছোটো ছোটো কণা",
    "hindi": "छोटे-छोटे टुकड़े"
  },
  "extremely_bitter": {
    "english": "Extremely bitter",
    "bishnupriya": "টিহালা",
    "bangla": "অত্যন্ত তেতো",
    "hindi": "बहुत कड़वा"
  },
  "to_search": {
    "english": "To search",
    "bishnupriya": "টুকা-",
    "bangla": "খোঁজা",
    "hindi": "ढूंढना"
  },
  "tobacco_leaf": {
    "english": "Tobacco leaf",
    "bishnupriya": "টুক্তা",
    "bangla": "তামাক পাতা",
    "hindi": "तंबाकू की पत्ती"
  },
  "perplexed": {
    "english": "Perplexed",
    "bishnupriya": "টুন্তামান্তা",
    "bangla": "হতবুদ্ধি",
    "hindi": "हक्का-बक्का"
  },
  "stammering": {
    "english": "Stammering",
    "bishnupriya": "টুতালা",
    "bangla": "তোতলা",
    "hindi": "हकलाना"
  },
  "beating_child_language": {
    "english": "Beating (child language)",
    "bishnupriya": "টুন",
    "bangla": "পেটানো (শিশুভাষা)",
    "hindi": "पीटना (बच्चों की भाषा)"
  },
  "piece_2": {
    "english": "Piece",
    "bishnupriya": "টুপ",
    "bangla": "টুকরো",
    "hindi": "टुकड़ा"
  },
  "short_cut": {
    "english": "Short-cut",
    "bishnupriya": "টুপাত-সাম",
    "bangla": "শর্টকাট",
    "hindi": "शॉर्टकट"
  },
  "short": {
    "english": "Short",
    "bishnupriya": "টুপ্পা",
    "bangla": "খাটো",
    "hindi": "छोटा"
  },
  "grinding_stone": {
    "english": "Grinding stone",
    "bishnupriya": "টুপ্পা",
    "bangla": "পিষার পাথর",
    "hindi": "पीसने का पत्थर"
  },
  "stored": {
    "english": "Stored",
    "bishnupriya": "টুম",
    "bangla": "জমানো",
    "hindi": "जमा"
  },
  "your_plural": {
    "english": "Your (plural)",
    "bishnupriya": "টুমার",
    "bangla": "তোমাদের",
    "hindi": "तुम्हारा"
  },
  "you_plural": {
    "english": "You (plural)",
    "bishnupriya": "টুমি",
    "bangla": "তোমরা",
    "hindi": "तुम"
  },
  "quiet_docile": {
    "english": "Quiet / docile",
    "bishnupriya": "টুমিল",
    "bangla": "শান্ত / বাধ্য",
    "hindi": "शांत / आज्ञाकारी"
  },
  "totally_perplexed": {
    "english": "Totally perplexed",
    "bishnupriya": "টুম্পিন-নাম্পিন",
    "bangla": "পুরোপুরি হতবুদ্ধি",
    "hindi": "पूरी तरह हक्का-बक्का"
  },
  "store": {
    "english": "Store",
    "bishnupriya": "টুম্ফাম",
    "bangla": "গুদাম",
    "hindi": "गोदाम"
  },
  "heap": {
    "english": "Heap",
    "bishnupriya": "টুম্বুর",
    "bangla": "গাদা",
    "hindi": "ढेर"
  },
  "care": {
    "english": "Care",
    "bishnupriya": "টুয়াক্কা",
    "bangla": "যত্ন",
    "hindi": "देखभाल"
  },
  "small_valley": {
    "english": "Small valley",
    "bishnupriya": "টুয়ার",
    "bangla": "ছোটো উপত্যকা",
    "hindi": "छोटी घाटी"
  },
  "to_form_a_line": {
    "english": "To form a line",
    "bishnupriya": "টুরিলিন",
    "bangla": "লাইন করা",
    "hindi": "लाइन बनाना"
  },
  "speedy_arrangement": {
    "english": "Speedy arrangement",
    "bishnupriya": "টুর্জুর",
    "bangla": "তাড়াতাড়ি ব্যবস্থা",
    "hindi": "जल्दी इंतज़ाम"
  },
  "to_lift_collect_copy": {
    "english": "To lift / collect / copy",
    "bishnupriya": "টুল-",
    "bangla": "তুলা / জমানো / নকল করা",
    "hindi": "उठाना / इकट्ठा करना / नकल करना"
  },
  "one_80th_of_a_seer": {
    "english": "1/80th of a seer",
    "bishnupriya": "টুলা",
    "bangla": "টোলা",
    "hindi": "तोला"
  },
  "one_after_another": {
    "english": "One after another",
    "bishnupriya": "টুলটুলি",
    "bangla": "একের পর এক",
    "hindi": "एक के बाद एक"
  },
  "to_raise": {
    "english": "To raise",
    "bishnupriya": "টুলা-",
    "bangla": "উঠানো",
    "hindi": "उठाना"
  },
  "raising_and_dashing": {
    "english": "Raising & dashing",
    "bishnupriya": "টুলেথেকানি",
    "bangla": "উঠিয়ে আছড়ানো",
    "hindi": "उठाकर पटकना"
  },
  "with": {
    "english": "With",
    "bishnupriya": "টুলো",
    "bangla": "সাথে",
    "hindi": "के साथ"
  },
  "soft_flabby": {
    "english": "Soft / flabby",
    "bishnupriya": "টুলটুল",
    "bangla": "নরম / ঝুলঝুলে",
    "hindi": "नरम / ढीला"
  },
  "to_appear_soft": {
    "english": "To appear soft",
    "bishnupriya": "টুলটুলা-",
    "bangla": "নরম দেখানো",
    "hindi": "नरम लगना"
  },
  "commotion": {
    "english": "Commotion",
    "bishnupriya": "টুলপার",
    "bangla": "গোলমাল",
    "hindi": "हंगामा"
  },
  "flattery": {
    "english": "Flattery",
    "bishnupriya": "টুসামুদি",
    "bangla": "চাটুকারিতা",
    "hindi": "चापलूसी"
  },
  "piece_of_rag": {
    "english": "Piece of rag",
    "bishnupriya": "টুসারা",
    "bangla": "ছেঁড়া কাপড়",
    "hindi": "फटी चिथड़ी"
  },
  "nap_short_sleep": {
    "english": "Nap / short sleep",
    "bishnupriya": "টুহুম",
    "bangla": "ঝিমুনি / খুব ছোটো ঘুম",
    "hindi": "झपकी"
  },
  "pores_of_skin": {
    "english": "Pores of skin",
    "bishnupriya": "টুহুম",
    "bangla": "ছিদ্র",
    "hindi": "रोमछिद्र"
  },
  "polite_request_affirmation_particle": {
    "english": "Polite request / affirmation particle",
    "bishnupriya": "-তে",
    "bangla": "অনুরোধ / জোর দেওয়ার কণা",
    "hindi": "कण (विनम्र अनुरोध)"
  },
  "then": {
    "english": "Then",
    "bishnupriya": "তে",
    "bangla": "তখন",
    "hindi": "तब"
  },
  "she": {
    "english": "She",
    "bishnupriya": "তেই",
    "bangla": "সে (মেয়ে)",
    "hindi": "वह (स्त्री)"
  },
  "stitch": {
    "english": "Stitch",
    "bishnupriya": "তেই",
    "bangla": "সেলাই",
    "hindi": "सिलाई"
  },
  "arrangement": {
    "english": "Arrangement",
    "bishnupriya": "তেইচিল",
    "bangla": "ব্যবস্থা",
    "hindi": "व्यवस्था"
  },
  "assamese_ginger": {
    "english": "Assamese ginger",
    "bishnupriya": "তেইহৌ-হৌ",
    "bangla": "অসমীয়া আদা",
    "hindi": "असमिया अदरक"
  },
  "flat_bent": {
    "english": "Flat / bent",
    "bishnupriya": "টেকপা",
    "bangla": "চ্যাপটা / বাঁকা",
    "hindi": "चपटा / मुड़ा"
  },
  "assamese_people": {
    "english": "Assamese people",
    "bishnupriya": "টেখাও",
    "bangla": "অসমীয়া",
    "hindi": "असमिया"
  },
  "consumed": {
    "english": "Consumed",
    "bishnupriya": "টেন",
    "bangla": "খাওয়া / শেষ",
    "hindi": "खाया हुआ / खत्म"
  },
  "tamingly": {
    "english": "Tamingly",
    "bishnupriya": "টেনেনে",
    "bangla": "শান্তভাবে",
    "hindi": "शांतिपूर्वक"
  },
  "army": {
    "english": "Army",
    "bishnupriya": "টেনকল",
    "bangla": "সেনাবাহিনী",
    "hindi": "सेना"
  },
  "arrow_holder": {
    "english": "Arrow-holder",
    "bishnupriya": "টেঙ্কাও",
    "bangla": "তীর ধরার থলে",
    "hindi": "तीर रखने का थैला"
  },
  "big_wicker_mat": {
    "english": "Big wicker-mat",
    "bishnupriya": "টেনকু",
    "bangla": "বড়ো চাটাই",
    "hindi": "बड़ा चटाई"
  },
  "spirit_strength": {
    "english": "Spirit / strength",
    "bishnupriya": "তেজ",
    "bangla": "তেজ",
    "hindi": "तेज"
  },
  "cassia_leaf": {
    "english": "Cassia leaf",
    "bishnupriya": "তেজপাতা",
    "bangla": "তেজপাতা",
    "hindi": "तेजपत्ता"
  },
  "aquafortis": {
    "english": "Aquafortis",
    "bishnupriya": "তেজাব",
    "bangla": "তেজাব",
    "hindi": "तेजाब"
  },
  "spirited": {
    "english": "Spirited",
    "bishnupriya": "তেজি",
    "bangla": "উদ্যমী",
    "hindi": "जोशीला"
  },
  "powerful_fresh": {
    "english": "Powerful / fresh",
    "bishnupriya": "তেজিয়ান",
    "bangla": "শক্তিশালী / তাজা",
    "hindi": "ताकतवर / ताज़ा"
  },
  "cessation": {
    "english": "Cessation",
    "bishnupriya": "টেট",
    "bangla": "বিরতি",
    "hindi": "रुकावट"
  },
  "tired": {
    "english": "Tired",
    "bishnupriya": "টেট্টা",
    "bangla": "ক্লান্ত",
    "hindi": "थका"
  },
  "obstruction": {
    "english": "Obstruction",
    "bishnupriya": "টেন্না",
    "bangla": "বাধা",
    "hindi": "रुकावट"
  },
  "competent": {
    "english": "Competent",
    "bishnupriya": "টেন্নাপা",
    "bangla": "যোগ্য",
    "hindi": "काबिल"
  },
  "yet_till_then": {
    "english": "Yet / till then",
    "bishnupriya": "টেবো",
    "bangla": "তবু",
    "hindi": "अभी तक"
  },
  "so_like_that": {
    "english": "So / like that",
    "bishnupriya": "টেমান",
    "bangla": "এমন",
    "hindi": "वैसा"
  },
  "to_be_pacified": {
    "english": "To be pacified",
    "bishnupriya": "টেমজ-",
    "bangla": "শান্ত হওয়া",
    "hindi": "शांत होना"
  },
  "festival": {
    "english": "Festival",
    "bishnupriya": "টেয়ার",
    "bangla": "উৎসব",
    "hindi": "त्योहार"
  },
  "thirteen": {
    "english": "Thirteen",
    "bishnupriya": "টেরা",
    "bangla": "তেরো",
    "hindi": "तेरह"
  },
  "thirteenth_day": {
    "english": "Thirteenth day",
    "bishnupriya": "টেরাইয়া",
    "bangla": "তেরো তারিখ",
    "hindi": "तेरहवीं"
  },
  "treasury": {
    "english": "Treasury",
    "bishnupriya": "টেরাজুরি",
    "bangla": "খাজানা",
    "hindi": "खजाना"
  },
  "simul_cotton_2": {
    "english": "Simul cotton",
    "bishnupriya": "টেরা",
    "bangla": "শিমুল তুলো",
    "hindi": "शीमल रुई"
  },
  "crooked_squint_eyed": {
    "english": "Crooked / squint-eyed",
    "bishnupriya": "টেরা",
    "bangla": "বাঁকা / তেরচা চোখ",
    "hindi": "टेढ़ा / तिरछी आँख वाला"
  },
  "star": {
    "english": "Star",
    "bishnupriya": "টেরা",
    "bangla": "তারা",
    "hindi": "तारा"
  },
  "pokingly_meaningless": {
    "english": "Pokingly / meaningless",
    "bishnupriya": "টেকিবেরি",
    "bangla": "খোঁচা / অর্থহীন",
    "hindi": "छेड़ना / बेकार"
  },
  "squint_eyed_female": {
    "english": "Squint-eyed (female)",
    "bishnupriya": "টেরি",
    "bangla": "তেরচা চোখওয়ালা মেয়ে",
    "hindi": "तिरछी आँखों वाली"
  },
  "spinning_wheel": {
    "english": "Spinning wheel",
    "bishnupriya": "টেরেণ",
    "bangla": "চরকা",
    "hindi": "चरखा"
  },
  "slant_crooked": {
    "english": "Slant / crooked",
    "bishnupriya": "টেরচা",
    "bangla": "তেরচা",
    "hindi": "तिरछा"
  },
  "tarpaulin_2": {
    "english": "Tarpaulin",
    "bishnupriya": "টেরপল",
    "bangla": "ত্রিপল",
    "hindi": "तिरपाल"
  },
  "oil": {
    "english": "Oil",
    "bishnupriya": "টেল",
    "bangla": "তেল",
    "hindi": "तेल"
  },
  "quickly": {
    "english": "Quickly",
    "bishnupriya": "টেল",
    "bangla": "তাড়াতাড়ি",
    "hindi": "जल्दी"
  },
  "to_flatter": {
    "english": "To flatter",
    "bishnupriya": "টেলা-",
    "bangla": "চাটুকারিতা করা",
    "hindi": "चापलूसी करना"
  },
  "true": {
    "english": "True",
    "bishnupriya": "হাক্কি",
    "bangla": "সত্য",
    "hindi": "सच"
  },
  "quickly_suddenly": {
    "english": "Quickly / suddenly",
    "bishnupriya": "হাক-হাক",
    "bangla": "হঠাৎ",
    "hindi": "अचानक"
  },
  "big_bamboo_fishing_trap": {
    "english": "Big bamboo fishing trap",
    "bishnupriya": "হাগরা",
    "bangla": "বড়ো বাঁশের জাল",
    "hindi": "बड़ा बांस का जाल"
  },
  "sting_pointed_tip": {
    "english": "Sting / pointed tip",
    "bishnupriya": "হান",
    "bangla": "হুল / ডগা",
    "hindi": "डंक / नोक"
  },
  "production_made": {
    "english": "Production / made",
    "bishnupriya": "হান",
    "bangla": "উৎপাদন / তৈরি",
    "hindi": "बनाना"
  },
  "cucumber": {
    "english": "Cucumber",
    "bishnupriya": "হানা",
    "bangla": "শসা",
    "hindi": "खीरा"
  },
  "back_bone": {
    "english": "Back-bone",
    "bishnupriya": "হানপিঠি",
    "bangla": "মেরুদণ্ড",
    "hindi": "रीढ़ की हड्डी"
  },
  "loose": {
    "english": "Loose",
    "bishnupriya": "হাচারত",
    "bangla": "ঢিলা",
    "hindi": "ढीला"
  },
  "digestion": {
    "english": "Digestion",
    "bishnupriya": "হাজম",
    "bangla": "হজম",
    "hindi": "पाचन"
  },
  "digestive": {
    "english": "Digestive",
    "bishnupriya": "হাজমি",
    "bangla": "হজমকারক",
    "hindi": "पाचक"
  },
  "awake_watchful": {
    "english": "Awake / watchful",
    "bishnupriya": "হাজাক",
    "bangla": "জাগ্রত",
    "hindi": "जागृत"
  },
  "greed_courage": {
    "english": "Greed / courage",
    "bishnupriya": "হাজু",
    "bangla": "লোভ / সাহস",
    "hindi": "लालच / हिम्मत"
  },
  "boss_address": {
    "english": "Boss (address)",
    "bishnupriya": "হাজুর",
    "bangla": "সাহেব",
    "hindi": "हज़ूर"
  },
  "effort": {
    "english": "Effort",
    "bishnupriya": "হাত",
    "bangla": "চেষ্টা",
    "hindi": "कोशिश"
  },
  "leaky": {
    "english": "Leaky",
    "bishnupriya": "হাতরান",
    "bangla": "ফুটো",
    "hindi": "छिद्रयुक्त"
  },
  "co_wife": {
    "english": "Co-wife",
    "bishnupriya": "হাতিনাক",
    "bangla": "সতিন",
    "hindi": "सौतन"
  },
  "enthusiasm": {
    "english": "Enthusiasm",
    "bishnupriya": "হাত-হাত",
    "bangla": "উৎসাহ",
    "hindi": "जोश"
  },
  "uselessly_important": {
    "english": "Uselessly important",
    "bishnupriya": "হাদার-বাদার",
    "bangla": "বেকার গুরুত্ব",
    "hindi": "फालतू अकड़"
  },
  "to_finish": {
    "english": "To finish",
    "bishnupriya": "হাদা-",
    "bangla": "শেষ করা",
    "hindi": "खत्म करना"
  },
  "capacity": {
    "english": "Capacity",
    "bishnupriya": "হাদ্দা",
    "bangla": "ক্ষমতা",
    "hindi": "ताकत"
  },
  "tolerating": {
    "english": "Tolerating",
    "bishnupriya": "হানা",
    "bangla": "সহ্য করা",
    "hindi": "सहना"
  },
  "endeavour": {
    "english": "Endeavour",
    "bishnupriya": "হান্না",
    "bangla": "চেষ্টা",
    "hindi": "कोशिश"
  },
  "big_hole": {
    "english": "Big hole",
    "bishnupriya": "হাপারা",
    "bangla": "বড়ো গর্ত",
    "hindi": "बड़ा गड्ढा"
  },
  "good_beautiful": {
    "english": "Good / beautiful",
    "bishnupriya": "হাবা",
    "bangla": "ভালো / সুন্দর",
    "hindi": "अच्छा / सुंदर"
  },
  "ah_what_a_strange": {
    "english": "Ah! What a strange!",
    "bishnupriya": "হাবাই",
    "bangla": "আহা! অদ্ভুত!",
    "hindi": "वाह! क्या बात!"
  },
  "food_without_salt": {
    "english": "Food without salt",
    "bishnupriya": "হাবিষ",
    "bangla": "নিরামিষ / লবণহীন",
    "hindi": "बिना नमक का खाना"
  },
  "just_now": {
    "english": "Just now",
    "bishnupriya": "হাবে",
    "bangla": "এইমাত্র",
    "hindi": "अभी-अभी"
  },
  "rush": {
    "english": "Rush",
    "bishnupriya": "হাম",
    "bangla": "ধাক্কাধাক্কি",
    "hindi": "धक्कम-धक्का"
  },
  "sleep_child_language": {
    "english": "Sleep (child language)",
    "bishnupriya": "হাম",
    "bangla": "ঘুম (শিশুভাষা)",
    "hindi": "नींद (बच्चों की भाषा)"
  },
  "middle": {
    "english": "Middle",
    "bishnupriya": "হাম",
    "bangla": "মাঝখানে",
    "hindi": "बीच में"
  },
  "faeces": {
    "english": "Faeces",
    "bishnupriya": "হামাল",
    "bangla": "মল",
    "hindi": "मल"
  },
  "salutation": {
    "english": "Salutation",
    "bishnupriya": "হামা",
    "bangla": "প্রণাম",
    "hindi": "नमस्ते"
  },
  "to_enter": {
    "english": "To enter",
    "bishnupriya": "হামা-",
    "bangla": "ঢোকা",
    "hindi": "घुसना"
  },
  "good_terms": {
    "english": "Good terms",
    "bishnupriya": "হামাহামি",
    "bangla": "ভাব",
    "hindi": "दोस्ती"
  },
  "either_with_nay": {
    "english": "Either (with nay)",
    "bishnupriya": "হয়",
    "bangla": "হয়",
    "hindi": "या"
  },
  "perhaps": {
    "english": "Perhaps",
    "bishnupriya": "হয়তো",
    "bangla": "হয়তো",
    "hindi": "शायद"
  },
  "elder_sister": {
    "english": "Elder sister",
    "bishnupriya": "হয়ো",
    "bangla": "দিদি",
    "hindi": "दीदी"
  },
  "actual_condition": {
    "english": "Actual condition",
    "bishnupriya": "হয়ো-নয়ো",
    "bangla": "আসল অবস্থা",
    "hindi": "असली हालत"
  },
  "cream_mucus": {
    "english": "Cream / mucus",
    "bishnupriya": "হার",
    "bangla": "সর / শ্লেষ্মা",
    "hindi": "मलाई / बलगम"
  },
  "recoupment": {
    "english": "Recoupment",
    "bishnupriya": "হার",
    "bangla": "পুনরুদ্ধার",
    "hindi": "भरपाई"
  },
  "broom_stick": {
    "english": "Broom-stick",
    "bishnupriya": "হারানি",
    "bangla": "ঝাড়ু",
    "hindi": "झाड़ू"
  },
  "snake": {
    "english": "Snake",
    "bishnupriya": "হারাপ",
    "bangla": "সাপ",
    "hindi": "साँप"
  },
  "incense_bowl": {
    "english": "Incense bowl",
    "bishnupriya": "হারা",
    "bangla": "ধূপদানী",
    "hindi": "धूपदान"
  },
  "to_drive_away": {
    "english": "To drive away",
    "bishnupriya": "হারা-",
    "bangla": "তাড়ানো",
    "hindi": "भगाना"
  },
  "water_fowl": {
    "english": "A water-fowl",
    "bishnupriya": "হারালি",
    "bangla": "জলপাখি",
    "hindi": "जलपक्षी"
  },
  "pulled_back_eyes": {
    "english": "Pulled back (eyes)",
    "bishnupriya": "হারা-হারা",
    "bangla": "চোখ পিছিয়ে যাওয়া",
    "hindi": "आँखें पीछे खिंच जाना"
  },
  "elephant_trunk": {
    "english": "Elephant trunk",
    "bishnupriya": "হারেই",
    "bangla": "হাতির শুঁড়",
    "hindi": "हाथी की सूंड"
  },
  "hearts_cards": {
    "english": "Hearts (cards)",
    "bishnupriya": "হার্তান",
    "bangla": "হার্ট",
    "hindi": "हुकुम का पत्ता"
  },
  "dictator": {
    "english": "Dictator",
    "bishnupriya": "হার্তা-কর্তা",
    "bangla": "একনায়ক",
    "hindi": "तानाशाह"
  },
  "strike_hartal": {
    "english": "Strike / hartal",
    "bishnupriya": "হার্তাল",
    "bangla": "হরতাল",
    "hindi": "हड़ताल"
  },
  "quickly_incessantly": {
    "english": "Quickly / incessantly",
    "bishnupriya": "হারদম",
    "bangla": "সবসময়",
    "hindi": "हरदम"
  },
  "slack_lazy": {
    "english": "Slack / lazy",
    "bishnupriya": "হালাদান",
    "bangla": "ঢিলা",
    "hindi": "सुस्त"
  },
  "rod_ball_of_thread": {
    "english": "Rod / ball of thread",
    "bishnupriya": "হালা",
    "bangla": "লাঠি / সুতোর গোলা",
    "hindi": "डंडा / धागे का गोला"
  },
  "distinct_clean_rice": {
    "english": "Distinct / clean (rice)",
    "bishnupriya": "হালা",
    "bangla": "আলাদা / পরিষ্কার",
    "hindi": "अलग / साफ"
  },
  "to_exchange": {
    "english": "To exchange",
    "bishnupriya": "হালা-",
    "bangla": "বদল করা",
    "hindi": "अदला-बदली करना"
  },
  "clean_selected": {
    "english": "Clean & selected",
    "bishnupriya": "হালা-বাচা",
    "bangla": "পরিষ্কার ও বাছাই করা",
    "hindi": "साफ और चुना हुआ"
  },
  "mutual_exchange": {
    "english": "Mutual exchange",
    "bishnupriya": "হালা-হালি",
    "bangla": "পরস্পর বদল",
    "hindi": "आपस में बदलाव"
  },
  "holi_festival": {
    "english": "Holi festival",
    "bishnupriya": "হালি",
    "bangla": "হোলি",
    "hindi": "होली"
  },
  "emptied": {
    "english": "Emptied",
    "bishnupriya": "হালি-হাতরান",
    "bangla": "খালি",
    "hindi": "खाली"
  },
  "ball_of_thread": {
    "english": "Ball of thread",
    "bishnupriya": "হালেই",
    "bangla": "সুতোর গোলা",
    "hindi": "धागे का गोला"
  },
  "instruments_weaving": {
    "english": "Instruments (weaving)",
    "bishnupriya": "হাস",
    "bangla": "তাঁতের যন্ত্র",
    "hindi": "करघे के औज़ार"
  },
  "movement_of_hands": {
    "english": "Movement of hands",
    "bishnupriya": "হাস্তাক",
    "bangla": "হাতের নড়াচড়া",
    "hindi": "हाथ की हलचल"
  },
  "cheap_liberal": {
    "english": "Cheap / liberal",
    "bishnupriya": "হাস্তা",
    "bangla": "সস্তা / উদার",
    "hindi": "सस्ता / खुला हाथ"
  },
  "joyfulness": {
    "english": "Joyfulness",
    "bishnupriya": "হা",
    "bangla": "আনন্দ",
    "hindi": "खुशी"
  },
  "alas": {
    "english": "Alas",
    "bishnupriya": "হা",
    "bangla": "হায়",
    "hindi": "हाय"
  },
  "vapour_agony": {
    "english": "Vapour / agony",
    "bishnupriya": "হা",
    "bangla": "বাষ্প / যন্ত্রণা",
    "hindi": "भाप / तकलीफ"
  },
  "to_offer_to_deity": {
    "english": "To offer to deity",
    "bishnupriya": "হা",
    "bangla": "দেবতাকে দেওয়া",
    "hindi": "देवता को चढ़ाना"
  },
  "rude_harsh": {
    "english": "Rude / harsh",
    "bishnupriya": "হা",
    "bangla": "রুক্ষ",
    "hindi": "कड़क"
  },
  "close_quarters_action": {
    "english": "Close quarters action",
    "bishnupriya": "+হা",
    "bangla": "কাছাকাছি কর্ম",
    "hindi": "पास में काम"
  },
  "becoming_changing_verb_noun": {
    "english": "Becoming, changing (verb/noun)",
    "bishnupriya": "আ'ল",
    "bangla": "হয়ে যাওয়া, পরিবর্তন",
    "hindi": "बदलना, हो जाना"
  },
  "splinter_used_in_cremation": {
    "english": "Splinter used in cremation",
    "bishnupriya": "আলন",
    "bangla": "চিতার কাঠের টুকরা",
    "hindi": "चिता में इस्तेमाल टुकड़ा"
  },
  "courtyard": {
    "english": "Courtyard",
    "bishnupriya": "চাতাল",
    "bangla": "উঠোন",
    "hindi": "आँगन"
  },
  "the_ear_of_paddy": {
    "english": "The ear of paddy",
    "bishnupriya": "চাতাল",
    "bangla": "ধানের শীষ",
    "hindi": "धान का बाल"
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