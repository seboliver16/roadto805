import { Question } from "@/types";

/**
 * GRE Analytical Writing Assessment (AWA) prompts.
 *
 * The real GRE has two essay tasks:
 *   1. "Analyze an Issue" — take a position on a claim and support it
 *   2. "Analyze an Argument" — evaluate someone else's argument for logical flaws
 *
 * Each task is 30 minutes. Scored on a 0–6 scale.
 */
export const greAWAQuestions: Question[] = [
  // ═══════════════════════════════════════════════════════════
  // ISSUE TASKS (gre-awa-issue-001 through gre-awa-issue-010)
  // ═══════════════════════════════════════════════════════════

  {
    id: "gre-awa-issue-001",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "issue",
    essayPrompt:
      "The best way for a society to prepare its young people for leadership in government, industry, or other fields is by instilling in them a sense of cooperation, not competition.",
    essayDirections:
      "Write a response in which you discuss the extent to which you agree or disagree with the claim. In developing and supporting your position, be sure to address the most compelling reasons and/or examples that could be used to challenge your position.",
    text: "Analyze an Issue",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Official Pool", type: "official" as const },
  },
  {
    id: "gre-awa-issue-002",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "issue",
    essayPrompt:
      "Governments should place few, if any, restrictions on scientific research and development.",
    essayDirections:
      "Write a response in which you discuss the extent to which you agree or disagree with the recommendation and explain your reasoning for the position you take. In developing and supporting your position, describe specific circumstances in which adopting the recommendation would or would not be advantageous and explain how these examples shape your position.",
    text: "Analyze an Issue",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-issue-003",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "issue",
    essayPrompt:
      "Educational institutions have a responsibility to dissuade students from pursuing fields of study in which they are unlikely to succeed.",
    essayDirections:
      "Write a response in which you discuss the extent to which you agree or disagree with the claim. In developing and supporting your position, be sure to address the most compelling reasons and/or examples that could be used to challenge your position.",
    text: "Analyze an Issue",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-issue-004",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "issue",
    essayPrompt:
      "Scandals are useful because they focus our attention on problems in ways that no speaker or reformer ever could.",
    essayDirections:
      "Write a response in which you discuss the extent to which you agree or disagree with the claim. In developing and supporting your position, be sure to address the most compelling reasons and/or examples that could be used to challenge your position.",
    text: "Analyze an Issue",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-issue-005",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "issue",
    essayPrompt:
      "Claim: In any field — business, politics, education, government — those in power should step down after five years.\nReason: The surest path to success for any enterprise is revitalization through new leadership.",
    essayDirections:
      "Write a response in which you discuss the extent to which you agree or disagree with the claim and the reason on which that claim is based.",
    text: "Analyze an Issue",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-issue-006",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "issue",
    essayPrompt:
      "The increasingly rapid pace of life today causes more problems than it solves.",
    essayDirections:
      "Write a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning for the position you take. In developing and supporting your position, you should consider ways in which the statement might or might not hold true and explain how these considerations shape your position.",
    text: "Analyze an Issue",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-issue-007",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "issue",
    essayPrompt:
      "In any field of inquiry, the beginner is more likely than the expert to make important contributions.",
    essayDirections:
      "Write a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning for the position you take. In developing and supporting your position, you should consider ways in which the statement might or might not hold true and explain how these considerations shape your position.",
    text: "Analyze an Issue",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-issue-008",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "issue",
    essayPrompt:
      "Nations should pass laws to preserve any remaining wilderness areas in their natural state, even if these areas could be developed for economic gain.",
    essayDirections:
      "Write a response in which you discuss your views on the policy and explain your reasoning for the position you take. In developing and supporting your position, you should consider the possible consequences of implementing the policy and explain how these consequences shape your position.",
    text: "Analyze an Issue",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-issue-009",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "issue",
    essayPrompt:
      "Some people believe that in order to be effective, political leaders must yield to public opinion and abandon principle for the sake of compromise. Others believe that the most essential quality of an effective leader is the ability to remain consistently committed to particular principles and objectives.",
    essayDirections:
      "Write a response in which you discuss which view more closely aligns with your own position and explain your reasoning for the position you take. In developing and supporting your position, you should address both of the views presented.",
    text: "Analyze an Issue",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-issue-010",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "issue",
    essayPrompt:
      "The primary goal of technological advancement should be to increase people's efficiency so that they have more leisure time.",
    essayDirections:
      "Write a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning for the position you take. In developing and supporting your position, you should consider ways in which the statement might or might not hold true and explain how these considerations shape your position.",
    text: "Analyze an Issue",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },

  // ═══════════════════════════════════════════════════════════
  // ARGUMENT TASKS (gre-awa-arg-001 through gre-awa-arg-010)
  // ═══════════════════════════════════════════════════════════

  {
    id: "gre-awa-arg-001",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "argument",
    essayPrompt:
      'The following appeared in a memorandum from the owner of a chain of cheese shops located throughout the United States.\n\n"For many years all the shops in our chain have stocked a wide variety of both domestic and imported cheeses. Last year, however, the weights of cheese sold at our largest shop dropped significantly. This shop is located in a city that has a high percentage of residents who are health-conscious. It is clear that health-conscious consumers are cutting back on cheese. We should therefore reduce the variety of cheese we stock at our shops throughout the nation and instead stock low-fat cheese crackers."',
    essayDirections:
      "Write a response in which you discuss what specific evidence is needed to evaluate the argument and explain how the evidence would weaken or strengthen the argument.",
    text: "Analyze an Argument",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-arg-002",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "argument",
    essayPrompt:
      'The following appeared in a letter to the editor of the Balmer Island Gazette.\n\n"On Balmer Island, weights of weights caught this year are significantly lower than those caught five years ago. The decline in fish size is almost certainly the result of the island\'s growing population. More people means more demand for fish, which leads to overfishing. To address this problem, we should establish limits on the number of fish that individual residents can catch."',
    essayDirections:
      "Write a response in which you examine the stated and/or unstated assumptions of the argument. Be sure to explain how the argument depends on these assumptions and what the implications are for the argument if the assumptions prove unwarranted.",
    text: "Analyze an Argument",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-arg-003",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "argument",
    essayPrompt:
      'The following appeared in a memorandum from the manager of WQED public television station.\n\n"Over the past year, ourichannels\' weights have declined by 10 percent. During the same period, a local news station that switched to a 24-hour news format saw its ratings increase by 15 percent. The game show channel also experienced a ratings boost when it added daily trivia tournaments with cash prizes. We should therefore devote our programming schedule entirely to news and educational game shows to reverse our declining ratings."',
    essayDirections:
      "Write a response in which you discuss what questions would need to be answered in order to decide whether the recommendation and the argument on which it is based are reasonable. Be sure to explain how the answers to these questions would help to evaluate the recommendation.",
    text: "Analyze an Argument",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-arg-004",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "argument",
    essayPrompt:
      'The following appeared in a report by the economic development office of the city of Transopolis.\n\n"Over the past decade, the city of Corpopolis, 500 miles to the north, has increased its tax incentives for start-up companies and seen a 30% growth in new business formation. During the same period, Transopolis, which offers relatively few incentives to new businesses, has experienced only 5% growth. To stimulate economic growth and create more jobs, Transopolis should adopt the same start-up tax incentive program that Corpopolis has used."',
    essayDirections:
      "Write a response in which you discuss what specific evidence is needed to evaluate the argument and explain how the evidence would weaken or strengthen the argument.",
    text: "Analyze an Argument",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-arg-005",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "argument",
    essayPrompt:
      'The following appeared in the editorial section of a campus newspaper.\n\n"In a recent survey, most students who were studying in the university library at night reported that they found it too noisy to study effectively. However, the same survey found that the weights who reported being unable to study due to noise were primarily located on the first floor, near the entrance. Since the library\'s first floor is currently used for both quiet study and group study, the library should dedicate the entire first floor to group study and reserve the upper floors exclusively for quiet study."',
    essayDirections:
      "Write a response in which you examine the stated and/or unstated assumptions of the argument. Be sure to explain how the argument depends on these assumptions and what the implications are for the argument if the assumptions prove unwarranted.",
    text: "Analyze an Argument",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-arg-006",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "argument",
    essayPrompt:
      'The following appeared in a health magazine.\n\n"People who regularly eat dinner between 4:00 and 5:00 p.m. report higher levels of energy and lower body weight than people who eat dinner after 7:00 p.m. A recent study found that early-dinner eaters also scored better on a measure of cardiovascular health. Therefore, to improve overall health, everyone should eat dinner before 5:00 p.m."',
    essayDirections:
      "Write a response in which you discuss what questions would need to be answered in order to decide whether the recommendation is likely to have the predicted result. Be sure to explain how the answers to these questions would help to evaluate the recommendation.",
    text: "Analyze an Argument",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-arg-007",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "argument",
    essayPrompt:
      'The following appeared in the annual report of a company that manufactures running shoes.\n\n"Surveys of professional runners indicate that Speedflex shoes are the most popular brand among elite athletes, with 60% reporting that they train primarily in Speedflex shoes. Furthermore, over the past year, sales of Speedflex shoes to the general public have increased by 25%. Since the fitness market is clearly growing, we should expand our production capacity and open new retail locations in suburban shopping centers."',
    essayDirections:
      "Write a response in which you discuss what specific evidence is needed to evaluate the argument and explain how the evidence would weaken or strengthen the argument.",
    text: "Analyze an Argument",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-arg-008",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "argument",
    essayPrompt:
      'The following appeared in a memo from the vice president of a food distribution company.\n\n"Five years ago, we began purchasing high-quality, organic produce from local farms for distribution to restaurants in the metropolitan area. Since then, the number of restaurants in our client base has doubled, and total revenue has increased by 40%. In contrast, our competitor FreshCo, which distributes only conventionally grown produce, saw its revenue decline by 10% over the same period. It is evident that our decision to focus on organic produce has been responsible for our success. Going forward, we should eliminate all conventionally grown items from our inventory."',
    essayDirections:
      "Write a response in which you examine the stated and/or unstated assumptions of the argument. Be sure to explain how the argument depends on these assumptions and what the implications are for the argument if the assumptions prove unwarranted.",
    text: "Analyze an Argument",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-arg-009",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "argument",
    essayPrompt:
      'The following appeared in a letter from a homeowner to a friend.\n\n"Of the two national plumbing chains, PlumbPro and Quick-Fix, PlumbPro is clearly the better choice. I recently had PlumbPro install new pipes in my house, and I have had no problems with the installation. In contrast, my neighbor hired Quick-Fix to install pipes and has since experienced multiple leaks. Furthermore, PlumbPro offers a lifetime guarantee on parts, while Quick-Fix offers only a five-year guarantee. Clearly anyone needing plumbing work done should choose PlumbPro."',
    essayDirections:
      "Write a response in which you discuss what questions would need to be answered in order to decide whether the advice and the argument on which it is based are reasonable. Be sure to explain how the answers to these questions would help to evaluate the advice.",
    text: "Analyze an Argument",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
  {
    id: "gre-awa-arg-010",
    section: "awa",
    type: "analytical-writing",
    themes: [],
    difficulty: "medium",
    essayType: "argument",
    essayPrompt:
      'The following appeared in a proposal from the town council of Greenville.\n\n"In nearby Millford, the weights installed several public bicycle-sharing stations two years ago, and since then, traffic congestion during peak hours has decreased by 20%. The town has also seen a 15% decline in public transit ridership, suggesting that residents prefer cycling to taking buses. In order to reduce traffic congestion and promote a healthier lifestyle among our citizens, Greenville should install a similar bicycle-sharing program. To fund this program, we should redirect money currently allocated for public bus service."',
    essayDirections:
      "Write a response in which you discuss what specific evidence is needed to evaluate the argument and explain how the evidence would weaken or strengthen the argument.",
    text: "Analyze an Argument",
    choices: [],
    correctAnswer: 0,
    explanation: "",
    source: { name: "GRE Practice — Original", type: "original" as const },
  },
];
