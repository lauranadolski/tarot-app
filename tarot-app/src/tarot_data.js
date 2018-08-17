const cards = {
  majorArcana: [
    { name: 'The Fool',
      number: 0,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar00.jpg',
      meaning: {
        upright: 'innocence, new beginnings, free spirit',
        reversed: 'recklessness, taken advantage of, inconsideration'
      }
    },
    { name: "The Magician",
      number: 1,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar01.jpg',
      meaning: {
        upright: 'willpower, desire, creation, manifestation',
        reversed: 'trickery, illusions, out of touch'
      }
    },
    { name: "The High Priestess",
      number: 2,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar02.jpg',
      meaning: {
        upright: 'intuitive, unconscious, inner voice',
        reversed: 'lack of center, lost inner voice, repressed feelings'
      }
    },
    { name: "The Empress",
      number: 3,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar03.jpg',
      meaning: {
        upright: 'motherhood, fertility, nature',
        reversed: 'dependence, smothering, emptiness, nosiness'
      }
    },
    { name: "The Emperor",
      number: 4,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar04.jpg',
      meaning: {
        upright: 'authority, structure, control, fatherhood',
        reversed: 'tyranny, rigidity, coldness'
      }
    },
    { name: "The Heirophant",
      number: 5,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar05.jpg',
      meaning: {
        upright: 'tradition, conformity, morality, ethics',
        reversed: 'rebellion, subversiveness, new approaches'
      }
    },
    { name: "The Lovers",
      number: 6,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar06.jpg',
      meaning: {
        upright: 'partnerships, duality, union',
        reversed: 'loss of balance, one-sidedness, disharmony'
      }
    },
    { name: "The Chariot",
      number: 7,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar07.jpg',
      meaning: {
        upright: 'direction, control, willpower',
        reversed: 'lack of control, lack of direction, aggression'
      }
    },
    { name: "Strength",
      number: 8,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar08.jpg',
      meaning: {
        upright: 'inner strength, bravery, compassion, focus',
        reversed: 'self doubt, weakness, insecurity'
      }
    },
    { name: "The Hermit",
      number: 9,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar09.jpg',
      meaning: {
        upright: 'contemplation, search for truth, inner guidance',
        reversed: 'loneliness, isolation, lost your way'
      }
    },
    { name: "The Wheel of Fortune",
      number: 10,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar10.jpg',
      meaning: {
        upright: 'change, cycles, inevitable fate',
        reversed: 'no control, clinging to control, bad luck'
      }
    },
    { name: "Justice",
      number: 11,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar11.jpg',
      meaning: {
        upright: 'cause and effect, clarity, truth',
        reversed: 'dishonesty, unaccountability, unfairness'
      }
    },
    { name: "The Hanged Man",
      number: 12,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar12.jpg',
      meaning: {
        upright: 'sacrifice, release, martyrdom',
        reversed: 'stalling, needless sacrifice, fear of sacrifice'
      }
    },
    { name: "Death",
      number: 13,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar13.jpg',
      meaning: {
        upright: 'end of cycle, beginnings, change, metamorphosis',
        reversed: 'fear of change, holding on, stagnation, decay'
      }
    },
    { name: "Temperance",
      number: 14,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar14.jpg',
      meaning: {
        upright: 'middle path, patience, finding meaning',
        reversed: 'extremes, excess, lack of balance'
      }
    },
    { name: "The Devil",
      number: 15,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar15.jpg',
      meaning: {
        upright: 'addiction, materialism, playfulness',
        reversed: 'freedom, release, restoring control'
      }
    },
    { name: "The Tower",
      number: 16,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar16.jpg',
      meaning: {
        upright: 'sudden upheaval, broken pride, disaster',
        reversed: 'disaster avoided, delayed disaster, fear of suffering'
      }
    },
    { name: "The Star",
      number: 17,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar17.jpg',
      meaning: {
        upright: 'hope, faith, rejuvenation',
        reversed: 'faithlessness, discouragement, insecurity'
      }
    },
    { name: "The Moon",
      number: 18,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar18.jpg',
      meaning: {
        upright: 'unconscious, illusions, intuition',
        reversed: 'confusion, fear, misinterpretation'
      }
    },
    { name: "The Sun",
      number: 19,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar19.jpg',
      meaning: {
        upright: 'joy, success, celebration, positivity',
        reversed: 'negativity, depression, sadness'
      }
    },
    { name: "Judgment",
      number: 20,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar20.jpg',
      meaning: {
        upright: 'reflection, reckoning, awakening',
        reversed: ' lack of self awareness, doubt, self loathing'
      }
    },
    { name: "The World",
      number: 21,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/ar21.jpg',
      meaning: {
        upright: 'fulfillment, harmony, completion',
        reversed: 'incompletion, no closure'
      }
    }
  ],
minorArcana: {
  wands: [
    { name: "King of Wands",
      number: 22,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/waki.jpg',
      meaning: {
        upright: 'big picture, leader, overcoming challenges',
        reversed: 'impulsive, overbearing, unachievable',
      }
    },
    { name: "Queen of Wands",
      number: 23,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/waqu.jpg',
      meaning: {
        upright: 'courage, determination, joy',
        reversed: 'selfishness, jealousy, insecurities',
      }
    },
    { name: "Knight of Wands",
      number: 24,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wakn.jpg',
      meaning: {
        upright: 'action, adventure, fearlessness',
        reversed: 'anger, impulsiveness, recklessness',
      }
    },
    { name: "Page of Wands",
      number: 25,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wapa.jpg',
      meaning: {
        upright: 'exploration, excitement, freedom',
        reversed: 'lack of direction, procrastination, creating',
      }
    },
    { name: "Ten of Wands",
      number: 26,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wa10.jpg',
      meaning: {
        upright: 'accomplishment, responsibility, burden',
        reversed: 'inability to delegate, overstressed, burnt out',
      }
    },
    { name: "Nine of Wands",
      number: 27,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wa09.jpg',
      meaning: {
        upright: 'Upright: resilience, grit, last stand',
        reversed: 'exhaustion, fatigue, questioning motivations',
      }
    },
    { name: "Eight of Wands",
      number: 28,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wa08.jpg',
      meaning: {
        upright: 'rapid action, movement, quick decisions,',
        reversed: 'panic, waiting, slowdown',
      }
    },
    { name: "Seven of Wands",
      number: 29,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wa07.jpg',
      meaning: {
        upright: 'perseverance, defensive, maintaining control',
        reversed: 'give up, destroyed confidence, overwhelmed',
      }
    },
    { name: "Six of Wands",
      number: 30,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wa06.jpg',
      meaning: {
        upright: 'victory, success, public reward',
        reversed: 'excess pride, lack of recognition, punishment',
      }
    },
    { name: "Five of Wands",
      number: 31,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wa05.jpg',
      meaning: {
        upright: 'competition, rivalry, conflict',
        reversed: 'avoiding conflict, respecting differences',
      }
    },
    { name: "Four of Wands",
      number: 32,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wa04.jpg',
      meaning: {
        upright: 'community, home, celebration',
        reversed: 'lack of support, transience, home conflicts',
      }
    },
    { name: "Three of Wands",
      number: 33,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wa03.jpg',
      meaning: {
        upright: 'looking ahead, expansion, rapid growth',
        reversed: 'obstacles, delays, frustration',
      }
    },
    { name: "Two of Wands",
      number: 34,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/wa02.jpg',
      meaning: {
        upright: 'planning, making decisions, leaving home',
        reversed: 'fear of change, playing safe, bad planning',
      }
    },
    { name: "Ace of Wands",
      number: 35,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/waac.jpg',
      meaning: {
        upright: 'creation, willpower, inspiration, desire',
        reversed: 'lack of energy, lack of passion, boredom',
      }
    }
  ],
  pentacles: [
    { name: "King of Pentacles",
      number: 36,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/peki.jpg',
      meaning: {
        upright: 'abundance, prosperity, security',
        reversed: 'greed, indulgence, sensuality',
      }
    },
    { name: "Queen of Pentacles",
      number: 37,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pequ.jpg',
      meaning: {
        upright: 'practicality, creature comforts, financial security',
        reversed: 'self-centeredness, jealousy, smothering',
      }
    },
    { name: "Knight of Pentacles",
      number: 38,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pekn.jpg',
      meaning: {
        upright: 'efficiency, hard work, responsibility',
        reversed: 'laziness, obsessiveness, work without reward',
      }
    },
    { name: "Page of Pentacles",
      number: 39,
      imgURL:  'http://www.sacred-texts.com/tarot/pkt/img/pepa.jpg',
      meaning: {
        upright: 'ambition, desire, diligence',
        reversed: 'lack of commitment, greediness, laziness',
      }
    },
    { name: "Ten of Pentacles",
      number: 40,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pe10.jpg',
      meaning: {
        upright: 'legacy, culmination, inheritance',
        reversed: 'fleeting success, lack of stability, lack of resources',
      }
    },
    { name: "Nine of Pentacles",
      number: 41,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pe09.jpg',
      meaning: {
        upright: 'fruits of labor, rewards, luxury',
        reversed: 'reckless spending, living beyond means, false success',
      }
    },
    { name: "Eight of Pentacles",
      number: 42,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pe08.jpg',
      meaning: {
        upright: 'apprenticeship, passion, high standards',
        reversed: 'lack of passion, uninspired, no motivation',
      }
    },
    { name: "Seven of Pentacles",
      number: 43,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pe07.jpg',
      meaning: {
        upright: 'hard work, perseverance, diligence',
        reversed: 'work without results, distractions, lack of rewards',
      }
    },
    { name: "Six of Pentacles",
      number: 44,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pe06.jpg',
      meaning: {
        upright: 'charity, generosity, sharing',
        reversed: 'strings attached, stinginess, power and domination',
      }
    },
    { name: "Five of Pentacles",
      number: 45,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pe05.jpg',
      meaning: {
        upright: 'need, poverty, insecurity',
        reversed: 'recovery, charity, improvement',
      }
    },
    { name: "Four of Pentacles",
      number: 46,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pe04.jpg',
      meaning: {
        upright: 'conservation, frugality, security',
        reversed: 'greediness, stinginess, possessiveness',
      }
    },
    { name: "Three of Pentacles",
      number: 47,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pe03.jpg',
      meaning: {
        upright: 'teamwork, collaboration, building',
        reversed: 'lack of teamwork, disorganized, group conflict',
      }
    },
    { name: "Two of Pentacles",
      number: 48,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/pe02.jpg',
      meaning: {
        upright: 'balancing decisions, priorities, adapting to change',
        reversed: 'loss of balance, disorganized, overwhelmed',
      }
    },
    { name: "Ace of Pentacles",
      number: 49,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/peac.jpg',
      meaning: {
        upright: 'opportunity, prosperity, new venture',
        reversed: 'lost opportunity, missed chance, bad investment',
      }
    }
  ],
  cups: [
    { name: "King of Cups",
      number: 50,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cuki.jpg',
      meaning: {
        upright: 'compassion, control, balance',
        reversed: 'coldness, moodiness, bad advice',
      }
    },
    { name: "Queen of Cups",
      number: 51,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cuqu.jpg',
      meaning: {
        upright: 'compassion, calm, comfort',
        reversed: 'martyrdom, insecurity, dependence',
      }
    },
    { name: "Knight of Cups",
      number: 52,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cukn.jpg',
      meaning: {
        upright: 'following the heart, idealist, romantic',
        reversed: 'moodiness, disappointment',
      }
    },
    { name: "Page of Cups",
      number: 53,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cupa.jpg',
      meaning: {
        upright: 'happy surprise, dreamer, sensitivity',
        reversed: 'emotional immaturity, insecurity, disappointment',
      }
    },
    { name: "Ten of Cups",
      number: 54,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cu10.jpg',
      meaning: {
        upright: 'inner happiness, fulfillment, dreams coming true',
        reversed: 'shattered dreams, broken family',
      }
    },
    { name: "Nine of Cups",
      number: 55,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cu09.jpg',
      meaning: {
        upright: 'satisfaction, emotional stability, luxury',
        reversed: 'lack of inner joy, smugness, dissatisfaction',
      }
    },
    { name: "Eight of Cups",
      number: 56,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cu08.jpg',
      meaning: {
        upright: 'walking away, disillusionment, leaving behind',
        reversed: 'avoidance, fear of change, fear of loss',
      }
    },
    { name: "Seven of Cups",
      number: 57,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cu07.jpg',
      meaning: {
        upright: 'searching for purpose, choices, daydreaming',
        reversed: 'lack of purpose, diversion',
      }
    },
    { name: "Six of Cups",
      number: 58,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cu06.jpg',
      meaning: {
        upright: 'familiarity, happy memories, healing',
        reversed: 'moving forward, leaving home, independence',
      }
    },
    { name: "Five of Cups",
      number: 59,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cu05.jpg',
      meaning: {
        upright: 'loss, grief, self-pity',
        reversed: 'acceptance, moving on, finding peace',
      }
    },
    { name: "Four of Cups",
      number: 60,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cu04.jpg',
      meaning: {
        upright: 'apathy, contemplation, disconnectedness',
        reversed: 'sudden awareness',
      }
    },
    { name: "Three of Cups",
      number: 61,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cu03.jpg',
      meaning: {
        upright: 'friendship, community, happiness',
        reversed: 'overindulgence, gossip, isolation',
      }
    },
    { name: "Two of Cups",
      number: 62,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cu02.jpg',
      meaning: {
        upright: 'unity, partnership, connection',
        reversed: 'imbalance, broken communication, tension',
      }
    },
    { name: "Ace of Cups",
      number: 63,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/cuac.jpg',
      meaning: {
        upright: 'new feelings, spirituality, intuition',
        reversed: 'emotional loss, blocked creativity, emptiness',
      }
    }
  ],
  swords: [
    { name: "King of Swords",
      number: 64,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/swki.jpg',
      meaning: {
        upright: 'head over heart, discipline, truth',
        reversed: 'manipulative, cruel, weakness',
      }
    },
    { name: "Queen of Swords",
      number: 65,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/swqu.jpg',
      meaning: {
        upright: 'complexity, perceptiveness, clear mindedness',
        reversed: 'cold hearted, cruel, bitterness',
      }
    },
    { name: "Knight of Swords",
      number: 66,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/swkn.jpg',
      meaning: {
        upright: 'action, impulsiveness, defending beliefs',
        reversed: 'no direction, disregard for consequences',
      }
    },
    { name: "Page of Swords",
      number: 67,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/swpa.jpg',
      meaning: {
        upright: 'curiosity, restlessness, mental energy',
        reversed: 'deception, manipulation, all talk',
      }
    },
    { name: "Ten of Swords",
      number: 68,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/sw10.jpg',
      meaning: {
        upright: 'failure, collapse, defeat',
        reversed: 'cannot get worse, only upwards, inevitable end',
      }
    },
    { name: "Nine of Swords",
      number: 69,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/sw09.jpg',
      meaning: {
        upright: 'anxiety, hopelessness, trauma',
        reversed: 'hope, reaching out, despair',
      }
    },
    { name: "Eight of Swords",
      number: 70,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/sw08.jpg',
      meaning: {
        upright: 'imprisonment, entrapment, self-victimization',
        reversed: 'self acceptance, new perspective, freedom',
      }
    },
    { name: "Seven of Swords",
      number: 71,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/sw07.jpg',
      meaning: {
        upright: 'deception, trickery, tactics and strategy',
        reversed: 'coming clean, rethinking approach, deception',
      }
    },
    { name: "Six of Swords",
      number: 72,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/sw06.jpg',
      meaning: {
        upright: 'transition, leaving behind, moving on',
        reversed: 'emotional baggage, unresolved issues, resisting',
      }
    },
    { name: "Five of Swords",
      number: 73,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/sw05.jpg',
      meaning: {
        upright: 'unbridled ambition, win at all costs, sneakiness',
        reversed: 'lingering resentment',
      }
    },
    { name: "Four of Swords",
      number: 74,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/sw04.jpg',
      meaning: {
        upright: 'rest, restoration, contemplation',
        reversed: 'restlessness, burnout, stress',
      }
    },
    { name: "Three of Swords",
      number: 75,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/sw03.jpg',
      meaning: {
        upright: 'heartbreak, suffering, grief',
        reversed: 'recovery, forgiveness, moving on',
      }
    },
    { name: "Two of Swords",
      number: 76,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/sw02.jpg',
      meaning: {
        upright: 'difficult choices, indecision, stalemate',
        reversed: 'lesser of two evils, no right choice, confusion',
      }
    },
    { name: "Ace of Swords",
      number: 77,
      imgURL: 'http://www.sacred-texts.com/tarot/pkt/img/swac.jpg',
      meaning: {
        upright: 'breakthrough, clarity, sharp mind',
        reversed: 'confusion, brutality, chaos',
      }
    }
  ]
}

}

export default cards;
