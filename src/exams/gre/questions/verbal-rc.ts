import { Question } from "@/types";

export const greVerbalRCQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════
  // PASSAGE SET 1 — Sciences: Plate Tectonics (4 questions)
  // ═══════════════════════════════════════════════════════════
  {
    id: "gre-rc-001",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "easy",
    passage:
      "When Alfred Wegener first proposed continental drift in 1912, the geological establishment dismissed his ideas as fanciful. Wegener had marshaled compelling evidence — the jigsaw-puzzle fit of the continents, matching fossil assemblages on widely separated landmasses, and aligned geological structures across the Atlantic — yet he could not identify a plausible mechanism by which continents might move. Without such a mechanism, most geologists regarded his hypothesis as untestable speculation. It was not until the 1960s, when seafloor spreading was documented and the theory of plate tectonics emerged, that Wegener's core insight was vindicated. The intervening decades illustrate a recurring pattern in the history of science: a correct observation can be rejected for decades if it lacks a convincing causal explanation.",
    text: "Which of the following best states the main idea of the passage?",
    choices: [
      "Wegener's continental drift hypothesis was initially rejected because it lacked a convincing mechanism, illustrating how correct scientific observations can be dismissed without causal explanations.",
      "Seafloor spreading definitively disproved the criticisms made against Wegener's hypothesis of continental drift.",
      "The geological establishment was biased against innovative theories throughout the first half of the twentieth century.",
      "Wegener's evidence for continental drift was weaker than historians of science have typically claimed.",
      "Plate tectonics was developed primarily to vindicate Wegener's earlier, unfairly neglected work.",
    ],
    correctAnswer: 0,
    explanation:
      "The passage traces Wegener's proposal, its rejection due to lacking a mechanism, and its eventual vindication — concluding that correct observations can be dismissed without causal explanations. Choice A captures this arc. B overstates; the passage says Wegener was 'vindicated,' not that critics were 'disproved.' C generalizes beyond the passage's claim. D contradicts the passage (the evidence was 'compelling'). E misrepresents the motivation behind plate tectonics.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-002",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "easy",
    passage:
      "When Alfred Wegener first proposed continental drift in 1912, the geological establishment dismissed his ideas as fanciful. Wegener had marshaled compelling evidence — the jigsaw-puzzle fit of the continents, matching fossil assemblages on widely separated landmasses, and aligned geological structures across the Atlantic — yet he could not identify a plausible mechanism by which continents might move. Without such a mechanism, most geologists regarded his hypothesis as untestable speculation. It was not until the 1960s, when seafloor spreading was documented and the theory of plate tectonics emerged, that Wegener's core insight was vindicated. The intervening decades illustrate a recurring pattern in the history of science: a correct observation can be rejected for decades if it lacks a convincing causal explanation.",
    text: "According to the passage, which of the following was NOT cited as evidence Wegener used to support continental drift?",
    choices: [
      "Similarities in magnetic pole orientations across continents",
      "The complementary shapes of continental coastlines",
      "Fossil species found on widely separated landmasses",
      "Aligned geological structures on opposite sides of the Atlantic",
      "All of the above were cited in the passage",
    ],
    correctAnswer: 0,
    explanation:
      "The passage lists three pieces of evidence: the jigsaw-puzzle fit (B), matching fossil assemblages (C), and aligned geological structures (D). Magnetic pole orientations are not mentioned in the passage. Although paleomagnetism was important to the historical debate, the passage does not cite it.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-003",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "medium",
    passage:
      "When Alfred Wegener first proposed continental drift in 1912, the geological establishment dismissed his ideas as fanciful. Wegener had marshaled compelling evidence — the jigsaw-puzzle fit of the continents, matching fossil assemblages on widely separated landmasses, and aligned geological structures across the Atlantic — yet he could not identify a plausible mechanism by which continents might move. Without such a mechanism, most geologists regarded his hypothesis as untestable speculation. It was not until the 1960s, when seafloor spreading was documented and the theory of plate tectonics emerged, that Wegener's core insight was vindicated. The intervening decades illustrate a recurring pattern in the history of science: a correct observation can be rejected for decades if it lacks a convincing causal explanation.",
    text: "It can be inferred from the passage that the geologists who rejected Wegener's hypothesis would most likely have agreed with which of the following statements?",
    choices: [
      "A scientific hypothesis must propose a mechanism for the phenomena it describes in order to merit serious consideration.",
      "The fossil record is an unreliable basis for drawing conclusions about prehistoric geography.",
      "Continental drift was theoretically impossible given the laws of physics known at the time.",
      "The geographical fit of continents was merely a coincidence with no scientific significance.",
      "Hypotheses proposed by non-geologists should be held to a higher evidentiary standard.",
    ],
    correctAnswer: 0,
    explanation:
      "The passage states that geologists rejected Wegener's hypothesis because he 'could not identify a plausible mechanism,' and they regarded it as 'untestable speculation' without one. This implies they believed a mechanism was essential for a hypothesis to be taken seriously. B is not supported — they did not question the evidence itself so much as the lack of mechanism. C goes beyond the passage; it says the mechanism was missing, not that drift was 'impossible.' D contradicts the passage's characterization of the evidence as 'compelling.' E introduces professional bias not discussed in the passage.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-004",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-structure"],
    difficulty: "medium",
    passage:
      "When Alfred Wegener first proposed continental drift in 1912, the geological establishment dismissed his ideas as fanciful. Wegener had marshaled compelling evidence — the jigsaw-puzzle fit of the continents, matching fossil assemblages on widely separated landmasses, and aligned geological structures across the Atlantic — yet he could not identify a plausible mechanism by which continents might move. Without such a mechanism, most geologists regarded his hypothesis as untestable speculation. It was not until the 1960s, when seafloor spreading was documented and the theory of plate tectonics emerged, that Wegener's core insight was vindicated. The intervening decades illustrate a recurring pattern in the history of science: a correct observation can be rejected for decades if it lacks a convincing causal explanation.",
    text: "The passage is organized primarily by",
    choices: [
      "presenting a historical episode and then drawing a general lesson from it",
      "describing two opposing scientific theories and evaluating their relative merits",
      "identifying a scientific mystery and then chronicling the steps taken to solve it",
      "criticizing a flawed methodology and recommending an alternative approach",
      "surveying several examples that illustrate a common phenomenon in science",
    ],
    correctAnswer: 0,
    explanation:
      "The passage narrates the specific case of Wegener's continental drift (the historical episode) and concludes with a general principle about science: correct observations can be rejected without causal explanations. This matches A. B is inaccurate — the passage does not pit two theories against each other. C is wrong — the passage focuses on reception of a hypothesis, not solving a mystery. D does not apply — no methodology is recommended. E fails because only one example is given, not several.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════
  // PASSAGE SET 2 — Social Sciences: Bilingualism (4 questions)
  // ═══════════════════════════════════════════════════════════
  {
    id: "gre-rc-005",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "easy",
    passage:
      "For much of the twentieth century, bilingualism was viewed with suspicion by educators and psychologists in English-speaking countries. Early studies appeared to show that bilingual children lagged behind their monolingual peers on measures of verbal intelligence, and many school systems actively discouraged the maintenance of immigrant languages. By the 1960s, however, methodological critiques revealed that the early studies had failed to control for socioeconomic status: the bilingual children tested were often from impoverished immigrant families, while the monolingual comparison groups came from more affluent backgrounds. When researchers began to match subjects for social class, the supposed cognitive deficits vanished. More recent work has gone further, documenting a 'bilingual advantage' in tasks requiring attentional control. Bilingual individuals, who must constantly manage the activation of two language systems, appear to develop enhanced executive function — the set of cognitive processes involved in planning, problem-solving, and switching between tasks.",
    text: "The primary purpose of the passage is to",
    choices: [
      "trace the shift in scientific understanding of bilingualism from a perceived deficit to a recognized cognitive advantage",
      "argue that bilingual education should be mandated in all school systems",
      "demonstrate that socioeconomic status is the primary determinant of cognitive development",
      "criticize contemporary researchers for overstating the benefits of bilingualism",
      "compare the language acquisition processes of monolingual and bilingual children",
    ],
    correctAnswer: 0,
    explanation:
      "The passage moves chronologically from the suspicion of bilingualism, through the methodological critique, to the discovery of a bilingual advantage — tracing a shift from perceived deficit to recognized benefit. A captures this arc. B extends beyond the passage, which does not advocate for policy. C is too narrow — socioeconomic status is discussed as a confound, not as the passage's main point. D contradicts the passage's generally positive presentation of recent research. E misidentifies the topic — the passage does not describe acquisition processes.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-006",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-strengthen-weaken"],
    difficulty: "medium",
    passage:
      "For much of the twentieth century, bilingualism was viewed with suspicion by educators and psychologists in English-speaking countries. Early studies appeared to show that bilingual children lagged behind their monolingual peers on measures of verbal intelligence, and many school systems actively discouraged the maintenance of immigrant languages. By the 1960s, however, methodological critiques revealed that the early studies had failed to control for socioeconomic status: the bilingual children tested were often from impoverished immigrant families, while the monolingual comparison groups came from more affluent backgrounds. When researchers began to match subjects for social class, the supposed cognitive deficits vanished. More recent work has gone further, documenting a 'bilingual advantage' in tasks requiring attentional control. Bilingual individuals, who must constantly manage the activation of two language systems, appear to develop enhanced executive function — the set of cognitive processes involved in planning, problem-solving, and switching between tasks.",
    text: "Which of the following, if true, would most weaken the claim of a 'bilingual advantage' as described in the passage?",
    choices: [
      "Studies show that the bilingual advantage is more pronounced in older adults than in young children.",
      "Researchers discover that the enhanced attentional control observed in bilinguals is attributable to the higher cognitive demands of the testing environments typically used for bilingual subjects, not to bilingualism itself.",
      "Some bilingual individuals report that managing two languages is cognitively exhausting.",
      "The bilingual advantage has been replicated in studies conducted in multiple countries and languages.",
      "Monolingual individuals who regularly play complex strategy games show similar executive function advantages.",
    ],
    correctAnswer: 1,
    explanation:
      "The passage attributes the bilingual advantage to the constant management of two language systems. If the observed advantage is actually caused by the testing environment rather than bilingualism, the claim is undercut. B provides such an alternative explanation. A would merely narrow the advantage's scope, not undermine it. C is anecdotal and does not address cognitive performance. D would strengthen, not weaken, the claim. E is interesting but does not directly weaken the bilingual advantage — it only shows that other activities can also enhance executive function.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-007",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "medium",
    passage:
      "For much of the twentieth century, bilingualism was viewed with suspicion by educators and psychologists in English-speaking countries. Early studies appeared to show that bilingual children lagged behind their monolingual peers on measures of verbal intelligence, and many school systems actively discouraged the maintenance of immigrant languages. By the 1960s, however, methodological critiques revealed that the early studies had failed to control for socioeconomic status: the bilingual children tested were often from impoverished immigrant families, while the monolingual comparison groups came from more affluent backgrounds. When researchers began to match subjects for social class, the supposed cognitive deficits vanished. More recent work has gone further, documenting a 'bilingual advantage' in tasks requiring attentional control. Bilingual individuals, who must constantly manage the activation of two language systems, appear to develop enhanced executive function — the set of cognitive processes involved in planning, problem-solving, and switching between tasks.",
    text: "The passage implies that early studies on bilingualism were flawed primarily because",
    choices: [
      "researchers used inaccurate measures of verbal intelligence",
      "the bilingual and monolingual groups differed in a variable the researchers did not account for",
      "the sample sizes were too small to yield statistically significant results",
      "the studies were conducted only in English-speaking countries",
      "the researchers were biased against immigrant communities",
    ],
    correctAnswer: 1,
    explanation:
      "The passage states that early studies 'failed to control for socioeconomic status,' meaning the bilingual and monolingual groups systematically differed in wealth and social class. This is an uncontrolled confounding variable (B). A is not stated — the passage does not question the validity of the intelligence measures themselves. C is not mentioned. D identifies a real limitation but not the one the passage emphasizes. E attributes motive without textual support.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-008",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-vocab-in-passage"],
    difficulty: "easy",
    passage:
      "For much of the twentieth century, bilingualism was viewed with suspicion by educators and psychologists in English-speaking countries. Early studies appeared to show that bilingual children lagged behind their monolingual peers on measures of verbal intelligence, and many school systems actively discouraged the maintenance of immigrant languages. By the 1960s, however, methodological critiques revealed that the early studies had failed to control for socioeconomic status: the bilingual children tested were often from impoverished immigrant families, while the monolingual comparison groups came from more affluent backgrounds. When researchers began to match subjects for social class, the supposed cognitive deficits vanished. More recent work has gone further, documenting a 'bilingual advantage' in tasks requiring attentional control. Bilingual individuals, who must constantly manage the activation of two language systems, appear to develop enhanced executive function — the set of cognitive processes involved in planning, problem-solving, and switching between tasks.",
    text: "In the context of the passage, the word 'maintenance' most nearly means",
    choices: [
      "continued use and preservation",
      "financial support",
      "physical upkeep",
      "routine servicing",
      "defensive justification",
    ],
    correctAnswer: 0,
    explanation:
      "The passage refers to 'the maintenance of immigrant languages,' meaning the practice of keeping those languages in active use rather than abandoning them. 'Continued use and preservation' (A) captures this meaning. The other options correspond to different senses of 'maintenance' that do not fit this linguistic context.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════
  // PASSAGE SET 3 — Humanities: Modernism & Tradition (4 questions)
  // ═══════════════════════════════════════════════════════════
  {
    id: "gre-rc-009",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "medium",
    passage:
      "The conventional narrative of literary modernism celebrates a decisive rupture with the past: Ezra Pound's injunction to 'Make it new' is typically taken as the movement's defining ethos. Yet recent scholarship has complicated this picture considerably. Critics such as Michael North and Rebecca Walkowitz have demonstrated that many canonical modernists were deeply engaged with literary tradition, not merely rebelling against it. T.S. Eliot's 'The Waste Land,' perhaps the most famous modernist poem, is constructed almost entirely from quotations, allusions, and adaptations of earlier texts. James Joyce's 'Ulysses' is, at its structural core, a retelling of Homer's 'Odyssey.' These examples suggest that modernist innovation was less a rejection of the past than a radical recontextualization of inherited materials — a practice that depended on, rather than repudiated, deep knowledge of tradition.",
    text: "The author's main point is that",
    choices: [
      "modernist writers drew on literary tradition more deeply than the standard narrative of rupture suggests",
      "Ezra Pound's slogan 'Make it new' was not taken seriously by most modernist writers",
      "T.S. Eliot and James Joyce were the only modernists who engaged meaningfully with tradition",
      "recent scholarship has proven that modernism was not truly innovative",
      "the study of modernism has been fundamentally misguided since its inception",
    ],
    correctAnswer: 0,
    explanation:
      "The passage argues against the 'rupture' narrative by showing that modernists like Eliot and Joyce were deeply engaged with tradition, suggesting innovation was 'radical recontextualization' rather than rejection. A captures this nuanced revision. B overstates — the passage does not say Pound's slogan was ignored, only that the movement is more complex. C is too narrow — 'many canonical modernists' are mentioned. D goes too far — the passage says modernism recontextualized rather than rejected tradition, not that it lacked innovation. E is an extreme claim unsupported by the passage.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-010",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-structure"],
    difficulty: "medium",
    passage:
      "The conventional narrative of literary modernism celebrates a decisive rupture with the past: Ezra Pound's injunction to 'Make it new' is typically taken as the movement's defining ethos. Yet recent scholarship has complicated this picture considerably. Critics such as Michael North and Rebecca Walkowitz have demonstrated that many canonical modernists were deeply engaged with literary tradition, not merely rebelling against it. T.S. Eliot's 'The Waste Land,' perhaps the most famous modernist poem, is constructed almost entirely from quotations, allusions, and adaptations of earlier texts. James Joyce's 'Ulysses' is, at its structural core, a retelling of Homer's 'Odyssey.' These examples suggest that modernist innovation was less a rejection of the past than a radical recontextualization of inherited materials — a practice that depended on, rather than repudiated, deep knowledge of tradition.",
    text: "The author mentions T.S. Eliot's 'The Waste Land' and James Joyce's 'Ulysses' primarily to",
    choices: [
      "provide specific examples supporting the claim that modernists were deeply engaged with tradition",
      "argue that Eliot and Joyce were superior to other modernist writers",
      "demonstrate that modernist works are difficult for contemporary readers to understand",
      "show that allusion and quotation are the only techniques modernists employed",
      "challenge the literary reputations of two canonical modernist authors",
    ],
    correctAnswer: 0,
    explanation:
      "Eliot and Joyce are cited as evidence for the claim that modernists were 'deeply engaged with literary tradition' — 'The Waste Land' through its quotations and allusions, and 'Ulysses' through its structural debt to Homer. A correctly identifies this purpose. B is not implied. C is irrelevant to the passage's argument. D uses the absolute 'only,' which the passage does not support. E contradicts the passage, which treats these works as evidence of sophistication, not as objects of criticism.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-011",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "hard",
    passage:
      "The conventional narrative of literary modernism celebrates a decisive rupture with the past: Ezra Pound's injunction to 'Make it new' is typically taken as the movement's defining ethos. Yet recent scholarship has complicated this picture considerably. Critics such as Michael North and Rebecca Walkowitz have demonstrated that many canonical modernists were deeply engaged with literary tradition, not merely rebelling against it. T.S. Eliot's 'The Waste Land,' perhaps the most famous modernist poem, is constructed almost entirely from quotations, allusions, and adaptations of earlier texts. James Joyce's 'Ulysses' is, at its structural core, a retelling of Homer's 'Odyssey.' These examples suggest that modernist innovation was less a rejection of the past than a radical recontextualization of inherited materials — a practice that depended on, rather than repudiated, deep knowledge of tradition.",
    text: "The passage suggests that the concept of 'radical recontextualization' involves",
    choices: [
      "using traditional materials in new and transformative ways",
      "completely abandoning earlier literary forms",
      "translating ancient texts into modern languages",
      "restoring works of literature to their original historical contexts",
      "writing critical essays about literary tradition",
    ],
    correctAnswer: 0,
    explanation:
      "The passage describes 'radical recontextualization of inherited materials' as what modernists actually did — taking traditional elements (quotations, allusions, structural models like the Odyssey) and placing them in new frameworks. This is 'using traditional materials in new and transformative ways' (A). B contradicts the concept — recontextualization preserves the materials. C is too literal. D is the opposite — recontextualization moves materials to new contexts, not original ones. E conflates criticism with creative practice.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-012",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-strengthen-weaken"],
    difficulty: "hard",
    passage:
      "The conventional narrative of literary modernism celebrates a decisive rupture with the past: Ezra Pound's injunction to 'Make it new' is typically taken as the movement's defining ethos. Yet recent scholarship has complicated this picture considerably. Critics such as Michael North and Rebecca Walkowitz have demonstrated that many canonical modernists were deeply engaged with literary tradition, not merely rebelling against it. T.S. Eliot's 'The Waste Land,' perhaps the most famous modernist poem, is constructed almost entirely from quotations, allusions, and adaptations of earlier texts. James Joyce's 'Ulysses' is, at its structural core, a retelling of Homer's 'Odyssey.' These examples suggest that modernist innovation was less a rejection of the past than a radical recontextualization of inherited materials — a practice that depended on, rather than repudiated, deep knowledge of tradition.",
    text: "Which of the following, if true, would most strengthen the author's argument?",
    choices: [
      "Virginia Woolf's novels frequently incorporate and rework classical myths and Shakespearean imagery.",
      "Many modernist manifestos explicitly called for the destruction of museums and libraries.",
      "Most readers of modernist literature are unaware of the traditional sources embedded in the texts.",
      "Ezra Pound's later poetry became increasingly obscure and inaccessible to general audiences.",
      "Some postmodernist writers explicitly rejected the modernist engagement with tradition.",
    ],
    correctAnswer: 0,
    explanation:
      "The author argues that modernists were deeply engaged with tradition. Another major modernist (Woolf) incorporating classical myths and Shakespeare would provide additional evidence for this claim. A directly strengthens the argument by broadening its evidentiary base. B would actually support the 'rupture' narrative the author is challenging. C is irrelevant to the authors' creative practice. D concerns accessibility, not engagement with tradition. E is about postmodernism, not modernism.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════
  // PASSAGE SET 4 — Sciences: Epigenetics (4 questions)
  // ═══════════════════════════════════════════════════════════
  {
    id: "gre-rc-013",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "medium",
    passage:
      "Epigenetics — the study of heritable changes in gene expression that occur without alterations to the underlying DNA sequence — has transformed our understanding of how organisms respond to their environments. One of the most well-documented epigenetic mechanisms is DNA methylation, in which methyl groups attach to cytosine bases in DNA, typically silencing the genes in the affected region. Environmental factors such as diet, stress, and exposure to toxins can influence methylation patterns, effectively allowing an organism's experiences to modify which genes are active and which are dormant. Perhaps most remarkably, some of these epigenetic modifications appear to be transmissible across generations. Studies in rodents have shown that parental dietary conditions can produce methylation changes in offspring that persist even when the offspring are raised under different conditions, suggesting that certain environmental effects can be biologically 'inherited' without any change to the DNA sequence itself.",
    text: "According to the passage, DNA methylation typically results in",
    choices: [
      "the silencing of genes in the affected region",
      "the permanent alteration of the DNA sequence",
      "the activation of previously dormant genes",
      "the destruction of cytosine bases in DNA",
      "increased susceptibility to environmental toxins",
    ],
    correctAnswer: 0,
    explanation:
      "The passage directly states that methylation involves methyl groups attaching to cytosine bases, 'typically silencing the genes in the affected region.' A is a straightforward restatement of this fact. B contradicts the passage's opening definition (epigenetics involves changes 'without alterations to the underlying DNA sequence'). C is the opposite of silencing. D mischaracterizes the process — methyl groups attach to cytosine bases; they do not destroy them. E is not stated in connection with methylation.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-014",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "hard",
    passage:
      "Epigenetics — the study of heritable changes in gene expression that occur without alterations to the underlying DNA sequence — has transformed our understanding of how organisms respond to their environments. One of the most well-documented epigenetic mechanisms is DNA methylation, in which methyl groups attach to cytosine bases in DNA, typically silencing the genes in the affected region. Environmental factors such as diet, stress, and exposure to toxins can influence methylation patterns, effectively allowing an organism's experiences to modify which genes are active and which are dormant. Perhaps most remarkably, some of these epigenetic modifications appear to be transmissible across generations. Studies in rodents have shown that parental dietary conditions can produce methylation changes in offspring that persist even when the offspring are raised under different conditions, suggesting that certain environmental effects can be biologically 'inherited' without any change to the DNA sequence itself.",
    text: "The passage most strongly suggests that epigenetic research challenges which of the following assumptions?",
    choices: [
      "That biological inheritance occurs exclusively through changes in the DNA sequence",
      "That DNA methylation is a common biochemical process",
      "That environmental factors can affect an organism during its own lifetime",
      "That rodent models are useful for studying heritable traits",
      "That genes can be either active or dormant in a given cell",
    ],
    correctAnswer: 0,
    explanation:
      "The passage emphasizes that epigenetic modifications can be inherited 'without any change to the DNA sequence itself,' which challenges the traditional assumption that biological inheritance requires DNA sequence changes. A captures this implication. B is not challenged — it is presented as fact. C is a well-established principle the passage confirms, not challenges. D is assumed by the passage, not challenged. E is also accepted by the passage, not questioned.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-015",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-vocab-in-passage"],
    difficulty: "medium",
    passage:
      "Epigenetics — the study of heritable changes in gene expression that occur without alterations to the underlying DNA sequence — has transformed our understanding of how organisms respond to their environments. One of the most well-documented epigenetic mechanisms is DNA methylation, in which methyl groups attach to cytosine bases in DNA, typically silencing the genes in the affected region. Environmental factors such as diet, stress, and exposure to toxins can influence methylation patterns, effectively allowing an organism's experiences to modify which genes are active and which are dormant. Perhaps most remarkably, some of these epigenetic modifications appear to be transmissible across generations. Studies in rodents have shown that parental dietary conditions can produce methylation changes in offspring that persist even when the offspring are raised under different conditions, suggesting that certain environmental effects can be biologically 'inherited' without any change to the DNA sequence itself.",
    text: "As used in the passage, the word 'transmissible' most nearly means",
    choices: [
      "capable of being communicated through speech",
      "capable of being passed from one generation to the next",
      "capable of being translated into a different language",
      "capable of being transmitted through physical contact",
      "capable of being broadcast over a wide area",
    ],
    correctAnswer: 1,
    explanation:
      "The passage says 'some of these epigenetic modifications appear to be transmissible across generations,' and then provides evidence of methylation changes passing from parents to offspring. In this context, 'transmissible' means capable of being passed from one generation to the next (B). The other choices correspond to different senses of transmission (communication, translation, contagion, broadcasting) that do not fit the intergenerational biological context.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-016",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-select-sentence"],
    difficulty: "hard",
    passage:
      "Epigenetics — the study of heritable changes in gene expression that occur without alterations to the underlying DNA sequence — has transformed our understanding of how organisms respond to their environments. One of the most well-documented epigenetic mechanisms is DNA methylation, in which methyl groups attach to cytosine bases in DNA, typically silencing the genes in the affected region. Environmental factors such as diet, stress, and exposure to toxins can influence methylation patterns, effectively allowing an organism's experiences to modify which genes are active and which are dormant. Perhaps most remarkably, some of these epigenetic modifications appear to be transmissible across generations. Studies in rodents have shown that parental dietary conditions can produce methylation changes in offspring that persist even when the offspring are raised under different conditions, suggesting that certain environmental effects can be biologically 'inherited' without any change to the DNA sequence itself.",
    text: "Which sentence in the passage provides the most direct evidence for the claim that epigenetic changes can be inherited?",
    choices: [
      "\"Epigenetics — the study of heritable changes in gene expression that occur without alterations to the underlying DNA sequence — has transformed our understanding of how organisms respond to their environments.\"",
      "\"Environmental factors such as diet, stress, and exposure to toxins can influence methylation patterns, effectively allowing an organism's experiences to modify which genes are active and which are dormant.\"",
      "\"Studies in rodents have shown that parental dietary conditions can produce methylation changes in offspring that persist even when the offspring are raised under different conditions...\"",
      "\"One of the most well-documented epigenetic mechanisms is DNA methylation, in which methyl groups attach to cytosine bases in DNA, typically silencing the genes in the affected region.\"",
      "\"Perhaps most remarkably, some of these epigenetic modifications appear to be transmissible across generations.\"",
    ],
    correctAnswer: 2,
    explanation:
      "The question asks for the most direct evidence — not a claim or definition, but a specific finding. Choice C cites the rodent studies showing that parental diet produces methylation changes in offspring that persist across environments, which is concrete evidence of inheritance. E makes the claim but does not provide evidence. A is a definition. B describes within-lifetime effects. D describes the mechanism of methylation.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════
  // PASSAGE SET 5 — Social Sciences: Behavioral Economics (3 questions)
  // ═══════════════════════════════════════════════════════════
  {
    id: "gre-rc-017",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "medium",
    passage:
      "Classical economic theory assumes that individuals are rational agents who consistently make decisions that maximize their own utility. Behavioral economists, drawing on experimental psychology, have systematically documented departures from this assumption. Daniel Kahneman and Amos Tversky, for instance, demonstrated that people are far more sensitive to potential losses than to equivalent gains — a phenomenon they termed 'loss aversion.' A person offered a coin-flip bet that would either win them $150 or lose them $100 will typically decline, even though the expected value is positive, because the psychological pain of losing $100 outweighs the pleasure of gaining $150. This asymmetry has profound implications for fields ranging from finance to public health: understanding that people disproportionately fear losses can help policymakers design more effective interventions, such as framing a policy's benefits in terms of what citizens stand to lose by not adopting it.",
    text: "Which of the following best expresses the main idea of the passage?",
    choices: [
      "Behavioral economics has revealed that people's decision-making deviates from classical rationality assumptions, with loss aversion being a key example that has practical policy implications.",
      "Classical economic theory is entirely incorrect and should be replaced by behavioral economics.",
      "Loss aversion is the only significant departure from rational decision-making that behavioral economists have identified.",
      "Daniel Kahneman and Amos Tversky proved that all economic decision-making is irrational.",
      "Policymakers should always frame their proposals in terms of potential losses rather than gains.",
    ],
    correctAnswer: 0,
    explanation:
      "The passage introduces classical theory's rationality assumption, describes behavioral economics' departures from it (with loss aversion as a featured example), and discusses policy implications. A captures all three elements. B is too extreme — the passage does not say classical theory is 'entirely incorrect.' C uses the absolute 'only.' D overstates — 'departures from' rationality is not the same as 'all decision-making is irrational.' E is a prescriptive overstatement not supported by the passage, which says understanding loss aversion 'can help,' not that it should always be used.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-018",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "easy",
    passage:
      "Classical economic theory assumes that individuals are rational agents who consistently make decisions that maximize their own utility. Behavioral economists, drawing on experimental psychology, have systematically documented departures from this assumption. Daniel Kahneman and Amos Tversky, for instance, demonstrated that people are far more sensitive to potential losses than to equivalent gains — a phenomenon they termed 'loss aversion.' A person offered a coin-flip bet that would either win them $150 or lose them $100 will typically decline, even though the expected value is positive, because the psychological pain of losing $100 outweighs the pleasure of gaining $150. This asymmetry has profound implications for fields ranging from finance to public health: understanding that people disproportionately fear losses can help policymakers design more effective interventions, such as framing a policy's benefits in terms of what citizens stand to lose by not adopting it.",
    text: "According to the passage, a person will typically decline a coin-flip bet to win $150 or lose $100 because",
    choices: [
      "the expected value of the bet is negative",
      "the psychological impact of the potential loss exceeds that of the potential gain",
      "most people do not understand probability well enough to evaluate the bet",
      "the person lacks sufficient funds to cover the potential loss",
      "coin-flip bets are inherently unfair to one party",
    ],
    correctAnswer: 1,
    explanation:
      "The passage explicitly states that people decline because 'the psychological pain of losing $100 outweighs the pleasure of gaining $150.' B is a direct restatement. A is factually incorrect — the passage notes the expected value is positive. C is not mentioned. D introduces financial constraints not discussed. E is not stated and is also factually incorrect — the expected value favors the bettor.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-019",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "hard",
    passage:
      "Classical economic theory assumes that individuals are rational agents who consistently make decisions that maximize their own utility. Behavioral economists, drawing on experimental psychology, have systematically documented departures from this assumption. Daniel Kahneman and Amos Tversky, for instance, demonstrated that people are far more sensitive to potential losses than to equivalent gains — a phenomenon they termed 'loss aversion.' A person offered a coin-flip bet that would either win them $150 or lose them $100 will typically decline, even though the expected value is positive, because the psychological pain of losing $100 outweighs the pleasure of gaining $150. This asymmetry has profound implications for fields ranging from finance to public health: understanding that people disproportionately fear losses can help policymakers design more effective interventions, such as framing a policy's benefits in terms of what citizens stand to lose by not adopting it.",
    text: "It can be inferred from the passage that a public health campaign designed with loss aversion in mind might",
    choices: [
      "emphasize the health risks of failing to vaccinate rather than the benefits of vaccination",
      "rely exclusively on statistical data to persuade the public",
      "avoid mentioning any negative consequences associated with the health issue",
      "appeal primarily to people's rational self-interest as defined by classical economics",
      "present the campaign's costs in terms of potential financial gains for participants",
    ],
    correctAnswer: 0,
    explanation:
      "The passage states that understanding loss aversion can help policymakers by 'framing a policy's benefits in terms of what citizens stand to lose by not adopting it.' Applied to public health, this would mean emphasizing what people lose (health risks) by not acting (not vaccinating) rather than what they gain. A exemplifies this framing. B contradicts the passage's point about psychological factors. C is the opposite of the loss-framing strategy. D would ignore loss aversion entirely. E misapplies the concept — gains framing is what loss aversion tells us is less effective.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════
  // PASSAGE SET 6 — Humanities: The Novel (3 questions)
  // ═══════════════════════════════════════════════════════════
  {
    id: "gre-rc-020",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-structure"],
    difficulty: "hard",
    passage:
      "Ian Watt's influential 1957 study 'The Rise of the Novel' argued that the novel emerged in eighteenth-century England as a fundamentally new literary form, one that reflected the individualism, empiricism, and economic conditions of the burgeoning middle class. Watt located the genre's origins in the works of Defoe, Richardson, and Fielding, linking the novel's emphasis on particular individuals in specific social circumstances to the philosophical nominalism of Locke and the expanding market economy. While Watt's thesis remains widely taught, it has drawn substantial criticism. Margaret Anne Doody, in 'The True Story of the Novel,' contends that prose narratives with novelistic characteristics existed in the ancient world, making Watt's periodization a form of cultural myopia. Michael McKeon, meanwhile, accepts the eighteenth-century dating but argues that Watt's account is insufficiently dialectical: the novel, McKeon claims, did not simply reflect middle-class values but was a site where competing ideologies — aristocratic and bourgeois, religious and secular — were negotiated and transformed.",
    text: "The passage presents McKeon's criticism of Watt as differing from Doody's primarily in that McKeon",
    choices: [
      "accepts Watt's periodization but challenges his characterization of what the novel represented",
      "rejects Watt's thesis entirely and proposes a completely new theory of the novel's origins",
      "argues that the novel originated in ancient civilizations rather than in eighteenth-century England",
      "defends Watt's thesis against the criticisms of other scholars",
      "focuses on the economic conditions that gave rise to the novel rather than on its philosophical roots",
    ],
    correctAnswer: 0,
    explanation:
      "The passage explicitly states that McKeon 'accepts the eighteenth-century dating' (unlike Doody, who traces the novel to antiquity) but finds Watt's account 'insufficiently dialectical,' arguing the novel was not merely a reflection of middle-class values but a site of competing ideologies. A captures this distinction. B is wrong — McKeon does not reject the thesis entirely. C describes Doody's position, not McKeon's. D is wrong — McKeon is a critic, not a defender. E is not supported by the passage.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-021",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-vocab-in-passage"],
    difficulty: "hard",
    passage:
      "Ian Watt's influential 1957 study 'The Rise of the Novel' argued that the novel emerged in eighteenth-century England as a fundamentally new literary form, one that reflected the individualism, empiricism, and economic conditions of the burgeoning middle class. Watt located the genre's origins in the works of Defoe, Richardson, and Fielding, linking the novel's emphasis on particular individuals in specific social circumstances to the philosophical nominalism of Locke and the expanding market economy. While Watt's thesis remains widely taught, it has drawn substantial criticism. Margaret Anne Doody, in 'The True Story of the Novel,' contends that prose narratives with novelistic characteristics existed in the ancient world, making Watt's periodization a form of cultural myopia. Michael McKeon, meanwhile, accepts the eighteenth-century dating but argues that Watt's account is insufficiently dialectical: the novel, McKeon claims, did not simply reflect middle-class values but was a site where competing ideologies — aristocratic and bourgeois, religious and secular — were negotiated and transformed.",
    text: "In the context of the passage, 'cultural myopia' most nearly means",
    choices: [
      "a narrow cultural perspective that fails to see beyond its own historical context",
      "an intentional misrepresentation of historical facts",
      "a thorough examination of cultural phenomena across time periods",
      "a medical condition affecting the perception of cultural artifacts",
      "an excessive focus on popular rather than highbrow culture",
    ],
    correctAnswer: 0,
    explanation:
      "'Myopia' literally means nearsightedness. Doody uses 'cultural myopia' to criticize Watt's periodization — by locating the novel only in eighteenth-century England, Watt fails to see the broader history of prose narratives across cultures and centuries. A captures this figurative sense of limited cultural vision. B implies dishonesty, which is not suggested. C is the opposite of myopia. D takes the medical meaning too literally. E misidentifies the kind of limitation.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-022",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "hard",
    passage:
      "Ian Watt's influential 1957 study 'The Rise of the Novel' argued that the novel emerged in eighteenth-century England as a fundamentally new literary form, one that reflected the individualism, empiricism, and economic conditions of the burgeoning middle class. Watt located the genre's origins in the works of Defoe, Richardson, and Fielding, linking the novel's emphasis on particular individuals in specific social circumstances to the philosophical nominalism of Locke and the expanding market economy. While Watt's thesis remains widely taught, it has drawn substantial criticism. Margaret Anne Doody, in 'The True Story of the Novel,' contends that prose narratives with novelistic characteristics existed in the ancient world, making Watt's periodization a form of cultural myopia. Michael McKeon, meanwhile, accepts the eighteenth-century dating but argues that Watt's account is insufficiently dialectical: the novel, McKeon claims, did not simply reflect middle-class values but was a site where competing ideologies — aristocratic and bourgeois, religious and secular — were negotiated and transformed.",
    text: "It can be inferred that Doody would most likely agree with which of the following statements?",
    choices: [
      "The novel is a much older literary form than Watt's analysis acknowledges.",
      "The novel originated exclusively among the aristocratic classes of ancient Greece.",
      "Watt's analysis of the eighteenth-century English novel is factually incorrect in every respect.",
      "Michael McKeon's dialectical approach is the best way to understand the novel's origins.",
      "The philosophical nominalism of Locke was the primary driver of the novel's development.",
    ],
    correctAnswer: 0,
    explanation:
      "Doody 'contends that prose narratives with novelistic characteristics existed in the ancient world,' directly implying she believes the novel (or its precursors) is much older than Watt's eighteenth-century dating. A follows from this. B is too specific and exclusive — Doody argues for ancient origins but the passage does not specify aristocratic Greece. C is an extreme claim unsupported by the passage. D concerns McKeon's approach, and the passage does not indicate Doody's view of it. E is part of Watt's thesis, which Doody criticizes.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════
  // PASSAGE SET 7 — Sciences: Microbiome (4 questions)
  // ═══════════════════════════════════════════════════════════
  {
    id: "gre-rc-023",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "medium",
    passage:
      "The human gut microbiome — the trillions of microorganisms residing in the digestive tract — has emerged as one of the most active areas of biomedical research. Far from being passive inhabitants, these bacteria, fungi, and viruses participate actively in digestion, immune regulation, and even neurological function via the so-called gut-brain axis. Studies have linked dysbiosis, an imbalance in microbial communities, to conditions as diverse as inflammatory bowel disease, obesity, depression, and autoimmune disorders. Yet the field faces significant challenges. The sheer complexity of microbial ecosystems makes it difficult to establish causation rather than mere correlation: does dysbiosis cause a disease, or does the disease itself alter the microbiome? Moreover, the composition of a 'healthy' microbiome varies enormously between individuals and populations, complicating efforts to define normative benchmarks against which imbalance can be measured.",
    text: "The primary purpose of the passage is to",
    choices: [
      "describe the significance and promise of microbiome research while acknowledging its key challenges",
      "argue that microbiome research has been overhyped and is unlikely to yield practical treatments",
      "provide a comprehensive history of the discovery of the gut microbiome",
      "compare the microbiome's role in digestive function to its role in neurological function",
      "propose a specific methodology for resolving the causation-versus-correlation problem",
    ],
    correctAnswer: 0,
    explanation:
      "The passage first establishes the microbiome's importance (active research area, links to many conditions) and then identifies two major challenges (causation vs. correlation, defining 'healthy'). A captures both elements. B is too negative — the passage acknowledges challenges but does not dismiss the field. C is wrong — no historical account is provided. D is too narrow — the passage mentions both functions but does not focus on comparing them. E is wrong — the passage identifies the problem but does not propose a methodology.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-024",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "easy",
    passage:
      "The human gut microbiome — the trillions of microorganisms residing in the digestive tract — has emerged as one of the most active areas of biomedical research. Far from being passive inhabitants, these bacteria, fungi, and viruses participate actively in digestion, immune regulation, and even neurological function via the so-called gut-brain axis. Studies have linked dysbiosis, an imbalance in microbial communities, to conditions as diverse as inflammatory bowel disease, obesity, depression, and autoimmune disorders. Yet the field faces significant challenges. The sheer complexity of microbial ecosystems makes it difficult to establish causation rather than mere correlation: does dysbiosis cause a disease, or does the disease itself alter the microbiome? Moreover, the composition of a 'healthy' microbiome varies enormously between individuals and populations, complicating efforts to define normative benchmarks against which imbalance can be measured.",
    text: "The passage mentions all of the following as conditions linked to dysbiosis EXCEPT",
    choices: [
      "cardiovascular disease",
      "inflammatory bowel disease",
      "obesity",
      "depression",
      "autoimmune disorders",
    ],
    correctAnswer: 0,
    explanation:
      "The passage lists 'inflammatory bowel disease, obesity, depression, and autoimmune disorders' as conditions linked to dysbiosis. Cardiovascular disease (A) is not mentioned. B, C, D, and E are all explicitly stated in the passage.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-025",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "hard",
    passage:
      "The human gut microbiome — the trillions of microorganisms residing in the digestive tract — has emerged as one of the most active areas of biomedical research. Far from being passive inhabitants, these bacteria, fungi, and viruses participate actively in digestion, immune regulation, and even neurological function via the so-called gut-brain axis. Studies have linked dysbiosis, an imbalance in microbial communities, to conditions as diverse as inflammatory bowel disease, obesity, depression, and autoimmune disorders. Yet the field faces significant challenges. The sheer complexity of microbial ecosystems makes it difficult to establish causation rather than mere correlation: does dysbiosis cause a disease, or does the disease itself alter the microbiome? Moreover, the composition of a 'healthy' microbiome varies enormously between individuals and populations, complicating efforts to define normative benchmarks against which imbalance can be measured.",
    text: "The passage suggests that defining a 'healthy' microbiome is difficult because",
    choices: [
      "there is too much natural variation between individuals and populations to establish a universal standard",
      "scientists have not yet developed the technology to sequence microbial DNA",
      "most microorganisms in the gut are harmful rather than beneficial",
      "the microbiome changes completely every few days, making any measurement unreliable",
      "pharmaceutical companies have blocked research into microbial health benchmarks",
    ],
    correctAnswer: 0,
    explanation:
      "The passage states that 'the composition of a healthy microbiome varies enormously between individuals and populations, complicating efforts to define normative benchmarks.' A directly paraphrases this point. B is factually irrelevant — sequencing technology exists and is not discussed as a limitation. C contradicts the passage's characterization of microorganisms as active participants in health. D is not stated. E introduces a claim about pharmaceutical companies with no textual support.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-026",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-strengthen-weaken"],
    difficulty: "hard",
    passage:
      "The human gut microbiome — the trillions of microorganisms residing in the digestive tract — has emerged as one of the most active areas of biomedical research. Far from being passive inhabitants, these bacteria, fungi, and viruses participate actively in digestion, immune regulation, and even neurological function via the so-called gut-brain axis. Studies have linked dysbiosis, an imbalance in microbial communities, to conditions as diverse as inflammatory bowel disease, obesity, depression, and autoimmune disorders. Yet the field faces significant challenges. The sheer complexity of microbial ecosystems makes it difficult to establish causation rather than mere correlation: does dysbiosis cause a disease, or does the disease itself alter the microbiome? Moreover, the composition of a 'healthy' microbiome varies enormously between individuals and populations, complicating efforts to define normative benchmarks against which imbalance can be measured.",
    text: "Which of the following, if true, would most help to resolve the causation-versus-correlation challenge described in the passage?",
    choices: [
      "A longitudinal study showing that specific microbial changes consistently precede the onset of a disease in otherwise healthy subjects",
      "A survey demonstrating that most physicians believe the microbiome is important for health",
      "A study showing that people with a particular disease have different microbial compositions than healthy controls",
      "A meta-analysis confirming that many different conditions are associated with dysbiosis",
      "A technological advance that allows faster and cheaper sequencing of microbial DNA",
    ],
    correctAnswer: 0,
    explanation:
      "The passage asks whether dysbiosis causes disease or disease alters the microbiome. A longitudinal study showing microbial changes precede disease onset would establish temporal precedence — a key criterion for inferring causation rather than reverse causation. A addresses this directly. B is about opinion, not evidence. C only establishes correlation (the very problem). D broadens correlation evidence without resolving the causation question. E addresses methodology but not the fundamental causation-vs-correlation issue.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════
  // PASSAGE SET 8 — Short Passages (4 questions, each with its own passage)
  // ═══════════════════════════════════════════════════════════
  {
    id: "gre-rc-027",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "easy",
    passage:
      "The concept of 'emotional intelligence' — the ability to recognize, understand, and manage one's own emotions and those of others — has gained significant traction in both academic psychology and corporate training programs. Proponents argue that emotional intelligence is a better predictor of professional success than traditional IQ measures, citing studies showing that managers with high emotional intelligence foster more productive teams. Critics, however, contend that the concept is too broadly defined to be scientifically useful and that many of the studies supporting it suffer from methodological limitations.",
    text: "It can be inferred from the passage that critics of emotional intelligence would most likely agree with which of the following?",
    choices: [
      "Emotional intelligence has no relevance to workplace performance.",
      "The scientific rigor of emotional intelligence research needs improvement.",
      "Traditional IQ measures are the sole predictor of professional success.",
      "Corporate training programs should avoid all references to emotions.",
      "Emotional intelligence cannot be measured under any circumstances.",
    ],
    correctAnswer: 1,
    explanation:
      "The passage states that critics believe 'many of the studies supporting it suffer from methodological limitations,' which directly implies they think the research needs more scientific rigor (B). A is too strong — critics question the research quality, not all relevance. C is not stated — critics do not endorse IQ as the 'sole' predictor. D goes beyond the passage. E uses the absolute 'cannot ... under any circumstances,' which is not supported.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-028",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "medium",
    passage:
      "Contrary to popular belief, the Sahara Desert has not always been a barren wasteland. Geological and archaeological evidence indicates that between roughly 11,000 and 5,000 years ago, during a period known as the African Humid Period or 'Green Sahara,' the region received substantially more rainfall and supported grasslands, lakes, and diverse fauna including hippopotamuses and crocodiles. Rock art from the period depicts cattle herding and fishing, suggesting that human communities thrived across what is now one of the most inhospitable environments on Earth. The transition to the current arid conditions was driven by a gradual shift in Earth's orbital parameters, which altered monsoon patterns. Understanding this dramatic environmental transformation is valuable not only for paleoclimatology but also for anticipating how current climate changes might alter landscapes previously considered stable.",
    text: "The primary purpose of the passage is to",
    choices: [
      "describe the Sahara's dramatically different past and suggest its relevance to understanding future climate change",
      "argue that human activity was the primary cause of the Sahara's desertification",
      "prove that all deserts undergo cyclical periods of greening and aridification",
      "challenge the archaeological evidence for human habitation in the ancient Sahara",
      "compare the Sahara's climate during the African Humid Period to its current climate in precise quantitative terms",
    ],
    correctAnswer: 0,
    explanation:
      "The passage describes the Green Sahara period, the evidence for it, the cause of the transition to aridity, and concludes by noting the value for understanding future climate changes. A captures this purpose. B is wrong — orbital parameters, not human activity, caused the change. C overgeneralizes from one example to 'all deserts.' D contradicts the passage, which presents the evidence positively. E is wrong — no precise quantitative comparison is given.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-029",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-select-sentence"],
    difficulty: "medium",
    passage:
      "In recent years, the concept of 'nudging' — subtly altering the way choices are presented in order to influence behavior without restricting options — has been adopted by governments worldwide. The British government's Behavioural Insights Team, for example, increased organ donor registration rates simply by changing the default option on driver's license applications from 'opt-in' to 'opt-out.' Proponents of nudging argue that it represents a form of 'libertarian paternalism,' preserving individual freedom of choice while guiding people toward outcomes that are generally considered beneficial. Critics, however, raise concerns about the ethics of governmental manipulation, arguing that even well-intentioned nudges can undermine autonomy by exploiting cognitive biases rather than fostering genuinely informed decision-making.",
    text: "Which sentence best captures the critics' fundamental objection to nudging?",
    choices: [
      "\"In recent years, the concept of 'nudging' — subtly altering the way choices are presented in order to influence behavior without restricting options — has been adopted by governments worldwide.\"",
      "\"The British government's Behavioural Insights Team, for example, increased organ donor registration rates simply by changing the default option on driver's license applications from 'opt-in' to 'opt-out.'\"",
      "\"Proponents of nudging argue that it represents a form of 'libertarian paternalism,' preserving individual freedom of choice while guiding people toward outcomes that are generally considered beneficial.\"",
      "\"Critics, however, raise concerns about the ethics of governmental manipulation, arguing that even well-intentioned nudges can undermine autonomy by exploiting cognitive biases rather than fostering genuinely informed decision-making.\"",
    ],
    correctAnswer: 3,
    explanation:
      "The question asks for the critics' fundamental objection. D directly presents the critics' argument: nudges 'undermine autonomy by exploiting cognitive biases rather than fostering genuinely informed decision-making.' A defines nudging. B provides an example. C presents the proponents' view. Only D articulates the critics' objection.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-030",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-structure"],
    difficulty: "hard",
    passage:
      "The longstanding assumption that the universe's expansion is gradually slowing down — a natural consequence of gravitational attraction among all the matter it contains — was overturned in 1998 by two independent teams studying distant Type Ia supernovae. These 'standard candles,' whose intrinsic brightness is well established, appeared fainter than expected, indicating that the most distant supernovae were farther away than a decelerating universe would predict. The inescapable conclusion was that the expansion of the universe is accelerating. To account for this acceleration, physicists invoked 'dark energy,' a mysterious repulsive force that constitutes roughly 68 percent of the total energy content of the universe. Despite nearly three decades of research since the discovery, the fundamental nature of dark energy remains unknown. It may be a cosmological constant — an intrinsic property of space itself, as Einstein once proposed and later retracted — or it may be a dynamic field that changes over time. Resolving this question is widely regarded as one of the most important unsolved problems in physics.",
    text: "The passage is structured primarily as",
    choices: [
      "a chronological account that moves from a prior assumption, through a surprising discovery, to the current state of an unsolved problem",
      "a comparison of two competing theories about the expansion of the universe",
      "a defense of Einstein's cosmological constant against its modern critics",
      "a technical explanation of the methodology used to measure the brightness of supernovae",
      "a critique of the scientific community for failing to solve the dark energy problem",
    ],
    correctAnswer: 0,
    explanation:
      "The passage moves from the old assumption (decelerating expansion), to the 1998 discovery (accelerating expansion), to the current mystery (dark energy's unknown nature). This is a chronological narrative from assumption through discovery to unresolved problem (A). B is partially accurate — two possibilities for dark energy are mentioned — but the passage is not primarily structured as a comparison. C misrepresents the passage's stance. D is too narrow — supernovae brightness is mentioned but not the focus. E attributes a critical stance the passage does not take.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
];
