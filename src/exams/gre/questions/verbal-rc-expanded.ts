import { Question } from "@/types";

// ═══════════════════════════════════════════════════════════════════════════
// Expanded Reading Comprehension — 20 questions across 6 passages
// ═══════════════════════════════════════════════════════════════════════════

// ---------------------------------------------------------------------------
// Passage constants (ensures exact text reuse across questions)
// ---------------------------------------------------------------------------

const PASSAGE_1_HISTORY = `Throughout the eighteenth century, European legal theorists debated whether codified law — statutes drafted and enacted by a sovereign legislature — could ever fully supplant the customary legal traditions that had governed local communities for centuries. Proponents of codification, most notably Jeremy Bentham, argued that written codes would bring transparency, predictability, and democratic legitimacy to legal systems that had become labyrinthine and arbitrary. It has been argued that customary law, precisely because it emerged organically from communal practice, possessed an adaptability that legislative codes could never replicate. The French Civil Code of 1804, often cited as codification's greatest triumph, illustrates the tension: while it succeeded in unifying a patchwork of regional customs under a single national framework, subsequent generations of jurists found themselves continually reinterpreting its provisions to address circumstances its drafters had never anticipated. Contrary to popular belief, the Code did not eliminate customary reasoning from French courts; rather, it displaced such reasoning from the text of the law into the interpretive practices of judges, who drew on local tradition even as they cited Napoleonic articles. The history of the French Civil Code thus suggests that the boundary between codified and customary law is far more porous than either eighteenth-century reformers or their critics supposed.`;

const PASSAGE_2_SCIENCE = `Recent research suggests that the longstanding model of memory consolidation — in which newly formed hippocampal traces are gradually transferred to the neocortex during sleep — may be considerably more nuanced than originally theorized. According to the standard model, the hippocampus serves as a temporary buffer, encoding episodic memories that are later replayed during slow-wave sleep and progressively integrated into distributed cortical networks. However, a growing body of evidence indicates that certain memories bypass this sequential process altogether. Studies of patients with hippocampal lesions have shown that some forms of semantic knowledge can be acquired without hippocampal involvement, suggesting that the neocortex possesses its own, albeit slower, encoding mechanisms. Furthermore, recent neuroimaging work has revealed that cortical traces begin forming in parallel with hippocampal encoding, rather than only after a consolidation delay. These findings do not invalidate the standard model so much as they complicate it: the hippocampus appears to accelerate and organize consolidation rather than serving as its exclusive gateway. The emerging picture is one of complementary learning systems whose relative contributions depend on the type of information being encoded, the emotional salience of the experience, and the learner's prior knowledge.`;

const PASSAGE_3_LITERARY = `Critics have long debated whether the unreliable narrator in modernist fiction represents a formal innovation or merely the explicit acknowledgment of a condition inherent in all narrative. Proponents of the former view point to the self-conscious artifice of works by authors such as Ford Madox Ford, whose narrator in "The Good Soldier" deliberately withholds and distorts information. Skeptics counter that every act of narration involves selection and emphasis, and that what modernism accomplished was not the invention of unreliability but its foregrounding — making the reader aware of interpretive instability that had always been present. This latter position implies that the distinction between "reliable" and "unreliable" narrators is one of degree rather than kind.`;

const PASSAGE_4_ARGUMENT = `A pharmaceutical company recently announced that its new analgesic drug reduced patients' self-reported pain scores by 40 percent more than a placebo in a randomized controlled trial. However, the trial's design has drawn scrutiny: subjects in the treatment group received their medication in distinctively colored capsules, whereas the placebo group received plain white tablets. Since previous research has demonstrated that patients associate brightly colored pills with greater therapeutic potency, the observed difference in pain reduction may be partly attributable to enhanced placebo expectations in the treatment group rather than to the pharmacological properties of the drug itself.`;

const PASSAGE_5_PHILOSOPHY = `Some ethicists maintain that moral obligations diminish with social distance — that individuals bear stronger duties to family members than to strangers, and stronger duties to compatriots than to foreigners. This gradualist view draws intuitive support from the observation that virtually all moral traditions assign special weight to proximate relationships. Critics of gradualism, however, argue that it conflates psychological tendency with moral justification: the fact that people naturally favor those closest to them does not establish that they are morally entitled to do so. On this universalist reading, distance is morally irrelevant, and any appearance of diminishing obligation reflects bias rather than ethical principle.`;

const PASSAGE_6_POLISCI = `Political scientists studying voter turnout have traditionally emphasized structural factors — registration requirements, polling-place accessibility, and the competitiveness of elections — as the primary determinants of participation. More recent work, however, has highlighted the role of social norms and identity. Field experiments have shown that messages informing citizens that their neighbors have already voted increase turnout more effectively than standard informational appeals, suggesting that the desire to conform to perceived community expectations can outweigh rational cost-benefit calculations. These findings complicate the canonical "rational voter" model, in which citizens participate only when the expected benefit of influencing the outcome exceeds the cost of voting.`;

export const greVerbalRCExpandedQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // PASSAGE 1 — Historical / Social Science (Long, ~200 words)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "gre-rc-exp-001",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "medium",
    passage: PASSAGE_1_HISTORY,
    text: "The primary purpose of the passage is to",
    choices: [
      "argue that the French Civil Code ultimately failed to achieve its legal objectives",
      "demonstrate that the distinction between codified and customary law is less clear-cut than theorists on either side assumed",
      "compare the legal philosophies of Jeremy Bentham and his critics in order to evaluate their respective merits",
      "chronicle the legislative history of the French Civil Code from its drafting to the present",
      "defend customary legal traditions against the criticisms of codification advocates",
    ],
    correctAnswer: 1,
    explanation:
      "The passage's final sentence states its thesis directly: 'the boundary between codified and customary law is far more porous than either eighteenth-century reformers or their critics supposed.' The entire passage builds toward this conclusion by showing how the French Civil Code, despite being codification's 'greatest triumph,' did not eliminate customary reasoning. Choice A overstates — the passage says the Code 'succeeded in unifying' regional customs; it did not 'fail.' C is too narrow — Bentham is mentioned but the passage does not compare his philosophy in detail. D mischaracterizes the passage as a chronological account. E is one-sided; the passage critiques both positions.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-002",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "easy",
    passage: PASSAGE_1_HISTORY,
    text: "According to the passage, proponents of codification such as Jeremy Bentham argued that written codes would provide all of the following EXCEPT",
    choices: [
      "greater transparency in legal proceedings",
      "predictability in the application of law",
      "democratic legitimacy for legal systems",
      "preservation of regional customary traditions",
      "relief from legal systems that had become labyrinthine",
    ],
    correctAnswer: 3,
    explanation:
      "The passage states that Bentham and other proponents argued codification would bring 'transparency, predictability, and democratic legitimacy' to legal systems described as 'labyrinthine and arbitrary.' Preservation of regional customs (D) was the goal of codification's opponents, not its proponents — in fact, the French Civil Code aimed to unify the 'patchwork of regional customs' under a single national framework.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-003",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "hard",
    passage: PASSAGE_1_HISTORY,
    text: "The passage implies that the French jurists who reinterpreted provisions of the Civil Code after 1804 most likely did so because",
    choices: [
      "they believed the Code had been drafted carelessly and required wholesale revision",
      "they wished to restore the customary legal traditions the Code had replaced",
      "real-world legal situations arose that the Code's original provisions did not adequately address",
      "the democratic legitimacy of the Code was increasingly questioned by the public",
      "Jeremy Bentham's influence on the Code had introduced internal contradictions",
    ],
    correctAnswer: 2,
    explanation:
      "The passage states that 'subsequent generations of jurists found themselves continually reinterpreting its provisions to address circumstances its drafters had never anticipated.' This directly supports C — unanticipated circumstances required reinterpretation. A is too extreme; the passage does not describe the drafting as 'careless.' B mischaracterizes the jurists' intent — they were interpreting the Code, not restoring pre-Code customs. D and E introduce claims not supported by the passage.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-004",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-select-sentence"],
    difficulty: "hard",
    passage: PASSAGE_1_HISTORY,
    text: "Select the sentence in the passage that most directly illustrates how codification failed to eliminate the influence of customary legal reasoning.",
    choices: [
      "Proponents of codification, most notably Jeremy Bentham, argued that written codes would bring transparency, predictability, and democratic legitimacy to legal systems that had become labyrinthine and arbitrary.",
      "The French Civil Code of 1804, often cited as codification's greatest triumph, illustrates the tension: while it succeeded in unifying a patchwork of regional customs under a single national framework, subsequent generations of jurists found themselves continually reinterpreting its provisions to address circumstances its drafters had never anticipated.",
      "Contrary to popular belief, the Code did not eliminate customary reasoning from French courts; rather, it displaced such reasoning from the text of the law into the interpretive practices of judges, who drew on local tradition even as they cited Napoleonic articles.",
      "The history of the French Civil Code thus suggests that the boundary between codified and customary law is far more porous than either eighteenth-century reformers or their critics supposed.",
      "It has been argued that customary law, precisely because it emerged organically from communal practice, possessed an adaptability that legislative codes could never replicate.",
    ],
    correctAnswer: 2,
    explanation:
      "The sentence beginning 'Contrary to popular belief' directly addresses how codification failed to eliminate customary reasoning: it explains that custom was merely 'displaced' from the text of the law into judges' interpretive practices. Choice B describes reinterpretation but does not explicitly connect it to customary reasoning. Choice D states the thesis but does not illustrate the mechanism. Choice A describes proponents' arguments, and Choice E describes opponents' arguments — neither illustrates the persistence of custom under the Code.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PASSAGE 2 — Science / Biology (Long, ~200 words)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "gre-rc-exp-005",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "medium",
    passage: PASSAGE_2_SCIENCE,
    text: "Which of the following best describes the main idea of the passage?",
    choices: [
      "The standard model of memory consolidation has been definitively disproved by recent neuroimaging studies.",
      "The hippocampus plays no essential role in the formation of semantic memories.",
      "Recent findings indicate that memory consolidation involves more complex and parallel processes than the standard model suggests.",
      "Sleep is less important to memory consolidation than researchers previously believed.",
      "Emotional salience is the primary factor determining how memories are consolidated.",
    ],
    correctAnswer: 2,
    explanation:
      "The passage's central claim is that the standard model 'may be considerably more nuanced than originally theorized.' It details evidence of parallel cortical encoding and hippocampus-independent learning, but explicitly notes that these findings 'do not invalidate the standard model so much as they complicate it.' Choice A overstates — the passage says the model is complicated, not disproved. B overstates the hippocampal-lesion findings. D is not addressed. E mentions one factor from the final sentence but does not capture the passage's scope.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-006",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "easy",
    passage: PASSAGE_2_SCIENCE,
    text: "According to the standard model of memory consolidation as described in the passage, the hippocampus functions primarily as",
    choices: [
      "a permanent storage site for episodic memories",
      "a temporary buffer that encodes memories later transferred to the neocortex",
      "a structure responsible exclusively for semantic knowledge acquisition",
      "the region where cortical traces are first formed during sleep",
      "a filter that determines which memories are emotionally salient",
    ],
    correctAnswer: 1,
    explanation:
      "The passage explicitly states that 'according to the standard model, the hippocampus serves as a temporary buffer, encoding episodic memories that are later replayed during slow-wave sleep and progressively integrated into distributed cortical networks.' A is wrong because the hippocampus is temporary, not permanent. C is contradicted by the finding that semantic knowledge can be acquired without hippocampal involvement. D describes cortical traces, which are formed in parallel. E is not described in the passage.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-007",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "hard",
    passage: PASSAGE_2_SCIENCE,
    text: "The passage suggests that a patient with a hippocampal lesion would most likely",
    choices: [
      "be completely unable to form any new memories",
      "retain the ability to acquire certain forms of semantic knowledge, albeit more slowly",
      "show enhanced neocortical encoding as a direct compensation for the lesion",
      "be unable to experience slow-wave sleep",
      "lose all previously consolidated episodic memories",
    ],
    correctAnswer: 1,
    explanation:
      "The passage notes that 'studies of patients with hippocampal lesions have shown that some forms of semantic knowledge can be acquired without hippocampal involvement, suggesting that the neocortex possesses its own, albeit slower, encoding mechanisms.' This supports B — such patients can still learn semantic information, but through the neocortex's slower route. A overstates the deficit. C introduces 'direct compensation,' which is not discussed. D and E are not addressed in the passage.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-008",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-vocab-in-passage"],
    difficulty: "easy",
    passage: PASSAGE_2_SCIENCE,
    text: "In the context of the passage, the word \"complicate\" most nearly means",
    choices: [
      "disprove entirely",
      "render obsolete",
      "add layers of complexity to without overturning",
      "make unnecessarily confusing",
      "call into serious doubt",
    ],
    correctAnswer: 2,
    explanation:
      "The passage states that the findings 'do not invalidate the standard model so much as they complicate it,' drawing a deliberate contrast between invalidation and complication. In this context, 'complicate' means to add nuance and complexity without wholesale rejection — exactly what Choice C captures. A and B describe invalidation, which the passage explicitly rules out. D introduces a negative connotation not present in the passage. E overstates the degree of doubt.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PASSAGE 3 — Literary Criticism (Short, ~100 words)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "gre-rc-exp-009",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "medium",
    passage: PASSAGE_3_LITERARY,
    text: "The passage is primarily concerned with",
    choices: [
      "defending the view that unreliable narration is a uniquely modernist innovation",
      "presenting a debate about whether unreliable narration is a new literary technique or a newly recognized feature of all storytelling",
      "analyzing the narrative strategies employed by Ford Madox Ford in \"The Good Soldier\"",
      "arguing that all narrators are equally unreliable regardless of literary period",
      "tracing the historical evolution of narrative technique from realism to modernism",
    ],
    correctAnswer: 1,
    explanation:
      "The passage frames a two-sided debate: one side views unreliable narration as a 'formal innovation,' the other as 'the explicit acknowledgment of a condition inherent in all narrative.' B accurately captures this structure. A is one-sided. C is too narrow — Ford is mentioned as an example, not the focus. D overstates the skeptics' position (they claim the distinction is 'one of degree,' not that all narrators are 'equally' unreliable). E introduces a historical narrative not present in the passage.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-010",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "medium",
    passage: PASSAGE_3_LITERARY,
    text: "The passage implies that the \"skeptics\" mentioned in the third sentence would be most likely to agree with which of the following statements?",
    choices: [
      "Modernist authors deserve credit for inventing a narrative device that had no precedent.",
      "The narrator of \"The Good Soldier\" is no more unreliable than narrators in pre-modernist fiction.",
      "Pre-modernist fiction also involved narrators who selected and emphasized certain details over others, even if readers were less aware of this fact.",
      "Narrative reliability is an objective property that can be measured independently of reader interpretation.",
      "Literary critics overvalue the contributions of Ford Madox Ford relative to those of later novelists.",
    ],
    correctAnswer: 2,
    explanation:
      "The skeptics argue that 'every act of narration involves selection and emphasis' and that modernism accomplished 'not the invention of unreliability but its foregrounding.' This implies that pre-modernist narrators also engaged in selection and emphasis — readers simply were not as aware of it. C captures this view precisely. B overstates: the skeptics claim the distinction is 'one of degree,' not that there is no difference at all. A contradicts their position entirely. D and E are not addressed.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-011",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-structure"],
    difficulty: "easy",
    passage: PASSAGE_3_LITERARY,
    text: "The reference to Ford Madox Ford's \"The Good Soldier\" serves primarily to",
    choices: [
      "provide an example that supports the view of unreliable narration as a deliberate modernist technique",
      "demonstrate that literary critics have misunderstood modernist fiction",
      "introduce the main argument that the passage ultimately endorses",
      "illustrate the skeptics' claim that all narration is inherently unreliable",
      "contrast modernist narrative methods with those of nineteenth-century realism",
    ],
    correctAnswer: 0,
    explanation:
      "Ford Madox Ford is cited by 'proponents of the former view' — those who see unreliable narration as a 'formal innovation.' His work, in which the narrator 'deliberately withholds and distorts information,' is offered as evidence of 'self-conscious artifice,' supporting the innovation view. A captures this function. B, C, and E mischaracterize the reference's role. D attributes it to the wrong side of the debate.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PASSAGE 4 — Argument / Strengthen-Weaken (Short, ~100 words)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "gre-rc-exp-012",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-strengthen-weaken"],
    difficulty: "hard",
    passage: PASSAGE_4_ARGUMENT,
    text: "Which of the following, if true, would most strengthen the passage's suggestion that the trial results may not reflect the drug's true pharmacological efficacy?",
    choices: [
      "The active ingredient in the drug has been shown to reduce inflammation in laboratory studies using animal models.",
      "A separate trial using identically colored capsules for both groups found no statistically significant difference in pain reduction.",
      "The patients in the treatment group reported fewer side effects than those in the placebo group.",
      "Self-reported pain scores are generally considered a reliable measure of analgesic effectiveness.",
      "The pharmaceutical company has a strong track record of producing effective analgesic medications.",
    ],
    correctAnswer: 1,
    explanation:
      "The passage argues that the color difference between the capsules may have inflated the treatment group's results due to enhanced placebo expectations. If a separate trial that controlled for capsule color (identically colored capsules) found no significant difference, this would strongly support the claim that the observed benefit was attributable to the color disparity rather than the drug itself. B directly strengthens this argument. A would weaken the argument by providing independent evidence of the drug's efficacy. C is irrelevant to the color-placebo concern. D would undermine the passage's skepticism. E is irrelevant to the specific design flaw.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-013",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-strengthen-weaken"],
    difficulty: "hard",
    passage: PASSAGE_4_ARGUMENT,
    text: "Which of the following, if true, would most weaken the argument that the trial's results may be attributable to enhanced placebo expectations?",
    choices: [
      "Patients in the trial were not informed about which group they had been assigned to.",
      "Blood tests on the treatment group revealed measurable concentrations of the drug's active metabolite correlated with the degree of pain reduction.",
      "The trial was conducted at multiple hospitals across different regions.",
      "Previous trials of analgesic drugs have sometimes produced contradictory results.",
      "Brightly colored pills are more expensive to manufacture than white tablets.",
    ],
    correctAnswer: 1,
    explanation:
      "The passage's argument rests on the possibility that the color difference inflated placebo expectations, making the observed pain reduction psychological rather than pharmacological. If blood tests showed that the active metabolite concentration correlated with the degree of pain reduction, this would provide objective physiological evidence that the drug itself — not just expectations about its color — was responsible for the benefit. B thus directly weakens the argument. A is tempting but insufficient: even blinded patients could see the capsule color. C and D are tangential. E is irrelevant to the efficacy question.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-014",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "medium",
    passage: PASSAGE_4_ARGUMENT,
    text: "The author of the passage would most likely agree with which of the following statements about the trial?",
    choices: [
      "The drug is definitively ineffective as an analgesic.",
      "The trial's design introduced a confounding variable that undermines confidence in the results.",
      "Randomized controlled trials are generally unsuitable for evaluating analgesic drugs.",
      "The pharmaceutical company deliberately designed the trial to produce misleading results.",
      "Placebo effects have no bearing on the interpretation of clinical trials.",
    ],
    correctAnswer: 1,
    explanation:
      "The passage describes how the difference in capsule appearance may have created 'enhanced placebo expectations in the treatment group,' which constitutes a confounding variable — an extraneous factor that could explain the results. The author's tone is cautious ('may be partly attributable'), so B's measured phrasing ('undermines confidence') fits. A is too strong — the author says the results 'may be partly attributable' to the design flaw, not that the drug is ineffective. C generalizes beyond the passage. D imputes intent not stated. E contradicts the passage's central concern.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PASSAGE 5 — Philosophy / Ethics (Short, ~100 words)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "gre-rc-exp-015",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "easy",
    passage: PASSAGE_5_PHILOSOPHY,
    text: "The passage is primarily concerned with",
    choices: [
      "advocating for the universalist position over the gradualist position",
      "presenting two opposing views on whether moral obligations vary with social distance",
      "providing empirical evidence that people favor family members over strangers",
      "demonstrating that moral traditions across cultures share identical principles",
      "refuting the claim that proximity affects the strength of moral duties",
    ],
    correctAnswer: 1,
    explanation:
      "The passage presents the gradualist view (obligations diminish with distance) and the universalist critique (distance is morally irrelevant) without endorsing either. B accurately captures this balanced presentation of opposing views. A and E are one-sided. C describes an observation mentioned in the passage but not the passage's purpose. D overstates — the passage says moral traditions 'assign special weight to proximate relationships,' not that they share 'identical principles.'",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-016",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "medium",
    passage: PASSAGE_5_PHILOSOPHY,
    text: "It can be inferred that the universalist critics described in the passage would most likely characterize the common tendency to prioritize the welfare of one's own family as",
    choices: [
      "a morally justified response grounded in legitimate ethical principles",
      "an admirable trait that all ethical systems should seek to cultivate",
      "a natural inclination that does not, by itself, constitute a valid moral justification",
      "an irrational behavior that serves no adaptive purpose",
      "a cultural artifact unique to Western moral traditions",
    ],
    correctAnswer: 2,
    explanation:
      "The passage states that universalist critics 'argue that it conflates psychological tendency with moral justification: the fact that people naturally favor those closest to them does not establish that they are morally entitled to do so.' This distinguishes between the tendency (natural, acknowledged) and its moral status (not justified merely by being natural). C captures this nuance precisely. A attributes the gradualist view to universalists. B overstates. D introduces 'irrational' and 'adaptive purpose,' concepts absent from the passage. E introduces a cultural claim not made in the passage.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-017",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-select-sentence"],
    difficulty: "hard",
    passage: PASSAGE_5_PHILOSOPHY,
    text: "Select the sentence in the passage that presents the core logical objection raised by critics of the gradualist view.",
    choices: [
      "Some ethicists maintain that moral obligations diminish with social distance — that individuals bear stronger duties to family members than to strangers, and stronger duties to compatriots than to foreigners.",
      "This gradualist view draws intuitive support from the observation that virtually all moral traditions assign special weight to proximate relationships.",
      "Critics of gradualism, however, argue that it conflates psychological tendency with moral justification: the fact that people naturally favor those closest to them does not establish that they are morally entitled to do so.",
      "On this universalist reading, distance is morally irrelevant, and any appearance of diminishing obligation reflects bias rather than ethical principle.",
    ],
    correctAnswer: 2,
    explanation:
      "The question asks for the 'core logical objection' raised by critics. Choice C contains the specific charge — that gradualism 'conflates psychological tendency with moral justification' — and explains the logical error: deriving a moral entitlement from a natural tendency. Choice D describes the universalist conclusion but does not articulate the logical objection itself. Choices A and B describe the gradualist view, not its critique.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PASSAGE 6 — Political Science (Short, ~100 words)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "gre-rc-exp-018",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "easy",
    passage: PASSAGE_6_POLISCI,
    text: "The primary purpose of the passage is to",
    choices: [
      "argue that structural factors have no effect on voter turnout",
      "describe how recent research on social norms challenges a purely rationalist model of voter behavior",
      "propose a new theory that fully replaces the rational voter model",
      "criticize political scientists for neglecting the study of voter turnout",
      "compare voter turnout rates across different countries",
    ],
    correctAnswer: 1,
    explanation:
      "The passage presents traditional structural explanations, then introduces research on social norms and identity that 'complicate the canonical rational voter model.' B captures this movement from traditional to recent perspectives. A overstates — the passage says structural factors were 'traditionally emphasized,' not that they are irrelevant. C overstates — the findings 'complicate' the model, not replace it. D mischaracterizes — political scientists are described as actively studying turnout. E is not discussed.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-019",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "easy",
    passage: PASSAGE_6_POLISCI,
    text: "According to the passage, which of the following is an example of a structural factor traditionally associated with voter turnout?",
    choices: [
      "Citizens' desire to conform to community expectations",
      "The competitiveness of an election",
      "Social norms regarding civic participation",
      "Messages informing citizens about their neighbors' voting behavior",
      "The expected benefit of influencing an election outcome",
    ],
    correctAnswer: 1,
    explanation:
      "The passage explicitly lists 'registration requirements, polling-place accessibility, and the competitiveness of elections' as structural factors. B matches 'the competitiveness of an election' directly. A and C relate to the social norms discussed as the newer finding. D describes the field experiments, not traditional structural factors. E describes a component of the rational voter model, not a structural factor per se.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
  {
    id: "gre-rc-exp-020",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-vocab-in-passage"],
    difficulty: "medium",
    passage: PASSAGE_6_POLISCI,
    text: "In the context of the passage, the word \"canonical\" most nearly means",
    choices: [
      "religiously inspired",
      "recently proposed",
      "widely accepted and standard",
      "empirically disproven",
      "deliberately provocative",
    ],
    correctAnswer: 2,
    explanation:
      "The passage uses 'canonical' to describe the rational voter model — a well-established framework that the new findings 'complicate.' In academic usage, 'canonical' means widely accepted and foundational, which is what Choice C captures. A takes the word's religious denotation literally. B contradicts the context — the rational voter model is the traditional one. D overstates — the passage says the model is 'complicated,' not 'disproven.' E has no support in the passage.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-verbal-rc",
  },
];
