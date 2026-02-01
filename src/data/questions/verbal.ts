import { Question } from "@/types";

// === Reading Comprehension Passages ===

const passageBusiness = `The concept of "first-mover advantage" has long been a staple of business strategy, suggesting that the first company to enter a market enjoys lasting benefits such as brand recognition, customer loyalty, and the ability to set industry standards. However, recent research has increasingly challenged this assumption. A comprehensive study of 500 product categories found that first movers failed at a rate of 47 percent, while "fast followers"—companies that entered the market shortly after the pioneer—failed at only 8 percent. Fast followers benefit from observing the pioneer's mistakes, refining the product based on initial consumer feedback, and entering the market when demand has already been validated. Moreover, first movers often bear the cost of educating consumers about a new product category, an investment from which later entrants benefit freely. The advantages traditionally attributed to first movers, such as switching costs and network effects, appear to be the exception rather than the rule. In most markets, the cost of pioneering exceeds the benefits, and sustainable competitive advantage derives not from market entry timing but from superior execution, continuous innovation, and the ability to adapt to changing consumer preferences. This finding has significant implications for corporate strategy: rather than racing to be first, companies may be better served by developing the organizational capabilities needed to move quickly once a market opportunity has been validated.`;

const passageScience = `The human gut microbiome—the complex community of trillions of microorganisms residing in the gastrointestinal tract—has emerged as a critical factor in human health that extends far beyond digestion. Recent research has revealed that gut bacteria produce neurotransmitters such as serotonin and gamma-aminobutyric acid (GABA), establishing a biochemical communication pathway between the gut and the brain known as the "gut-brain axis." Approximately 90 percent of the body's serotonin, a neurotransmitter central to mood regulation, is produced in the gut rather than the brain. Studies in germ-free mice—animals raised without any microorganisms—have demonstrated that the absence of gut bacteria leads to measurable changes in brain chemistry and behavior, including increased anxiety-like responses and impaired social development. When these mice are colonized with normal gut bacteria early in life, many of these behavioral abnormalities are reversed, but colonization later in life produces only partial recovery. This suggests that there exists a critical developmental window during which the microbiome shapes neural circuitry. Clinical studies in humans have found correlations between gut microbiome composition and conditions such as depression, autism spectrum disorder, and Parkinson's disease, though establishing causation remains challenging. The therapeutic potential is considerable: preliminary clinical trials of targeted probiotic interventions have shown modest but statistically significant improvements in symptoms of depression and anxiety, raising the possibility that future psychiatric treatments may include microbiome-based therapies alongside or instead of traditional pharmaceuticals.`;

const passageHistory = `The Bracero Program, a bilateral agreement between the United States and Mexico that operated from 1942 to 1964, brought approximately 4.6 million Mexican laborers to work temporarily on American farms and railroads. Initiated during World War II to address labor shortages caused by military conscription, the program was intended as a wartime emergency measure but was repeatedly extended due to pressure from agricultural interests. Under the program's terms, workers were guaranteed minimum wages, adequate housing, and return transportation to Mexico. In practice, however, these protections were frequently violated: workers often received substandard wages, lived in overcrowded and unsanitary conditions, and faced discrimination in the communities where they worked. The program had profound and contradictory effects on both nations. For Mexico, it provided an economic outlet for surplus rural labor and generated remittances that supported local economies, but it also contributed to a "brain drain" of productive workers from Mexican agriculture. For the United States, it supplied cheap labor that kept food prices low and agricultural profits high, but critics argued that it depressed wages for domestic farmworkers and created patterns of labor exploitation that persisted long after the program ended. The Bracero Program's legacy continues to shape contemporary debates about immigration policy, guest worker programs, and the rights of migrant laborers, serving as both a cautionary tale about the exploitation inherent in temporary labor schemes and a model for the potential benefits of regulated cross-border labor mobility.`;

const passageTechnology = `Quantum computing represents a fundamental departure from classical computing, leveraging the principles of quantum mechanics to process information in ways that are theoretically impossible for traditional computers. Classical computers store information as bits, each of which can exist in one of two states: 0 or 1. Quantum computers, by contrast, use quantum bits, or "qubits," which can exist in a superposition of both states simultaneously. When multiple qubits are entangled—a quantum phenomenon in which the state of one particle is intrinsically linked to the state of another—the computational capacity grows exponentially rather than linearly with each additional qubit. A quantum computer with just 300 fully stable qubits could theoretically represent more states simultaneously than there are atoms in the observable universe. However, the practical realization of quantum computing faces formidable obstacles. Qubits are extraordinarily fragile: even minor environmental disturbances, such as slight temperature fluctuations or stray electromagnetic fields, can cause "decoherence," destroying the quantum state and introducing errors. Current quantum computers require cooling to temperatures near absolute zero and extensive error-correction protocols that consume the majority of available qubits. As of now, no quantum computer has demonstrated "quantum advantage" on a commercially useful problem. Nevertheless, the potential applications—including drug discovery through molecular simulation, optimization of complex logistics networks, and the breaking of current encryption standards—have spurred billions of dollars in investment from both governments and private corporations, making quantum computing one of the most heavily funded areas of technological research worldwide.`;

const passageEnvironment = `Ocean acidification, often called "the other CO₂ problem," is a direct chemical consequence of increased atmospheric carbon dioxide that poses a severe threat to marine ecosystems independent of climate change. When CO₂ dissolves in seawater, it forms carbonic acid, which dissociates to release hydrogen ions, thereby lowering the water's pH. Since the beginning of the industrial era, ocean surface pH has decreased by approximately 0.1 units, representing a 26 percent increase in acidity. While this may seem modest, the pH scale is logarithmic, and marine organisms are adapted to remarkably stable chemical conditions that have persisted for millions of years. The most immediate biological impact is on calcifying organisms—species that build shells or skeletons from calcium carbonate, including corals, mollusks, and certain plankton. As ocean pH decreases, the saturation state of calcium carbonate minerals declines, making it energetically more costly for these organisms to build and maintain their structures. Laboratory experiments have demonstrated that under projected end-of-century pH conditions, many coral species show reduced calcification rates of 20 to 40 percent, and the shells of some pteropod species—small sea snails that form a critical base of polar food webs—begin to dissolve. The cascading ecological effects could be enormous: coral reefs support approximately 25 percent of all marine species, and pteropods are a primary food source for commercially important fish species such as salmon and herring. Unlike climate change, which can theoretically be addressed through carbon capture or solar radiation management, ocean acidification can only be mitigated by reducing CO₂ emissions at their source.`;

const passageArts = `The Harlem Renaissance, which flourished from the early 1920s through the mid-1930s, was not merely a literary and artistic movement but a profound reimagining of African American identity in the wake of the Great Migration. As hundreds of thousands of Black Americans moved from the rural South to northern cities, Harlem became an intellectual and cultural capital where writers, musicians, visual artists, and scholars forged a new aesthetic that simultaneously celebrated African heritage and claimed a distinctly American voice. Writers such as Langston Hughes and Zora Neale Hurston incorporated the rhythms and vernacular of Black folk traditions into their work, challenging the literary establishment's Eurocentric standards of artistic excellence. However, the movement was far from monolithic in its vision. A significant ideological tension existed between those who believed art should serve as a vehicle for political advocacy and racial uplift, and those who insisted that Black artists should be free to explore the full range of human experience without being constrained by the burden of representation. W.E.B. Du Bois, who championed art as propaganda, clashed with younger artists who resisted prescriptive expectations. This internal debate anticipated broader questions about the relationship between art and social justice that continue to resonate in contemporary cultural discourse. The Renaissance's impact extended beyond aesthetics: by demonstrating the richness and sophistication of African American intellectual life, it challenged the pseudoscientific racial hierarchies that had justified segregation and discrimination, laying cultural groundwork for the Civil Rights Movement that would follow decades later.`;

export const verbalQuestions: Question[] = [
  // ============================================================
  // CRITICAL REASONING (vq1–vq30)
  // ============================================================

  // --- cr-weaken (6 questions: vq1–vq6) ---

  {
    id: "vq1",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-weaken"],
    difficulty: "easy",
    text: "A city council member argues that building a new sports stadium downtown will revitalize the surrounding neighborhood. She points out that property values within a half-mile radius of newly constructed stadiums in other cities have increased by an average of 15 percent within five years of construction. She concludes that building the stadium will lead to a similar increase in property values in her city.\n\nWhich of the following, if true, most weakens the argument above?",
    choices: [
      "The proposed stadium would be funded primarily through public bonds rather than private investment.",
      "In the cities studied, the property value increases were largely attributable to concurrent urban renewal programs unrelated to the stadiums.",
      "The city council member has previously supported other large-scale construction projects in the downtown area.",
      "Property values in the city have been rising steadily over the past decade without any major new construction.",
      "Some residents near the proposed stadium site have expressed concerns about increased traffic and noise."
    ],
    correctAnswer: 1,
    explanation: "The argument concludes that a stadium will increase property values based on data from other cities. Choice B weakens this by providing an alternative explanation: the property value increases in those other cities were caused by concurrent urban renewal programs, not by the stadiums themselves. This undermines the causal link between stadium construction and property value increases. Choice A discusses funding but does not address whether values will increase. Choice D actually strengthens the claim that values are rising, though it does not directly weaken the stadium argument. Choice E raises concerns but does not challenge the evidence about property values. Choice C is irrelevant to the argument's logic.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },
  {
    id: "vq2",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-weaken"],
    difficulty: "medium",
    text: "A pharmaceutical company recently conducted a clinical trial in which patients who took its new migraine medication reported 40 percent fewer migraines per month compared to a control group that received no treatment. The company concludes that the medication is effective at reducing the frequency of migraines.\n\nWhich of the following, if true, most seriously weakens the conclusion?",
    choices: [
      "Patients in the treatment group were also encouraged to keep a detailed headache diary, while those in the control group were not.",
      "The medication causes mild side effects, including drowsiness, in approximately 10 percent of patients.",
      "Previous migraine medications have shown similar levels of efficacy in clinical trials.",
      "A separate trial showed that patients given a placebo reported 35 percent fewer migraines compared to no treatment.",
      "The clinical trial included patients with both chronic and episodic migraines."
    ],
    correctAnswer: 3,
    explanation: "The argument compares the medication group to a no-treatment control group and attributes the reduction in migraines to the medication. Choice D reveals that a placebo alone produced nearly the same reduction (35 percent vs. 40 percent), suggesting that most of the observed effect could be due to the placebo effect rather than the medication itself. This severely weakens the claim that the medication is effective. Choice A introduces a potential confound but does not directly explain the migraine reduction. Choice B discusses side effects, which are irrelevant to efficacy. Choice C, if anything, supports the plausibility of the result. Choice E is about trial composition and does not weaken the conclusion.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },
  {
    id: "vq3",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-weaken"],
    difficulty: "medium",
    text: "A national restaurant chain recently switched from disposable plastic packaging to biodegradable packaging made from plant-based materials. The company's marketing campaign claims that this switch will significantly reduce the environmental impact of its packaging waste. Company executives point out that biodegradable materials break down in composting facilities within 90 days, unlike plastic, which persists in landfills for hundreds of years.\n\nWhich of the following, if true, most weakens the company's claim?",
    choices: [
      "The biodegradable packaging costs 30 percent more to produce than the plastic packaging it replaced.",
      "Several other restaurant chains have made similar switches to biodegradable packaging in recent years.",
      "Only 5 percent of municipal waste facilities in the country have the industrial composting capability required for the packaging to biodegrade properly.",
      "The plant-based materials used in the packaging are derived from sustainably harvested crops.",
      "Consumer surveys indicate that customers prefer restaurants that use environmentally friendly packaging."
    ],
    correctAnswer: 2,
    explanation: "The company's claim rests on the assumption that the biodegradable packaging will actually biodegrade. Choice C reveals that only 5 percent of waste facilities can properly compost the packaging, meaning that in practice the vast majority of this packaging will end up in regular landfills where it may not break down as claimed. This directly weakens the environmental benefit. Choice A discusses cost, not environmental impact. Choice B is about other companies and irrelevant to the claim. Choice D actually supports the environmental claim. Choice E is about consumer preferences, not actual environmental impact.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },
  {
    id: "vq4",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-weaken"],
    difficulty: "medium",
    text: "Researchers studying employee productivity found that workers who telecommute at least three days per week produce, on average, 20 percent more output per hour than their in-office counterparts. The researchers concluded that telecommuting increases worker productivity.\n\nWhich of the following, if true, most weakens the researchers' conclusion?",
    choices: [
      "Telecommuting workers report higher job satisfaction than in-office workers.",
      "Companies that allow telecommuting tend to be in industries with higher average productivity.",
      "Managers at the companies studied were given discretion over which employees could telecommute, and they typically approved requests from their highest-performing workers.",
      "The telecommuting workers in the study had access to the same technology and tools as the in-office workers.",
      "Some telecommuting workers reported working longer hours than they did when in the office."
    ],
    correctAnswer: 2,
    explanation: "The researchers conclude that telecommuting causes higher productivity. Choice C reveals a selection bias: managers selected their best performers for telecommuting. This means the higher productivity of telecommuters may be because they were already the most productive employees, not because telecommuting made them more productive. The causation could be reversed. Choice A is about satisfaction, not the productivity claim. Choice B suggests an industry confound but is less direct than the individual selection bias in C. Choice D eliminates one alternative explanation but does not weaken the argument. Choice E could actually support an alternative explanation but is weaker than C because C directly addresses the core causal claim.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },
  {
    id: "vq5",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-weaken"],
    difficulty: "hard",
    text: "A country's health ministry has observed that regions where a greater proportion of the population regularly consumes olive oil have significantly lower rates of cardiovascular disease. The ministry is considering launching a nationwide campaign encouraging citizens to replace butter and other saturated fats with olive oil, predicting that this will reduce national cardiovascular disease rates.\n\nWhich of the following, if true, most weakens the ministry's prediction?",
    choices: [
      "Olive oil is more expensive than butter in most regions of the country.",
      "The regions with high olive oil consumption also have a Mediterranean climate that encourages outdoor physical activity year-round.",
      "Cardiovascular disease rates have been declining nationwide over the past two decades due to improved medical treatments.",
      "Some studies suggest that the health benefits of olive oil are greater when it is consumed as part of a diet rich in vegetables and whole grains.",
      "Not all types of olive oil have the same concentration of beneficial compounds."
    ],
    correctAnswer: 1,
    explanation: "The ministry assumes that olive oil consumption causes lower cardiovascular disease rates. Choice B provides a strong alternative explanation: regions with high olive oil consumption also have climates that promote physical activity, which is independently known to reduce cardiovascular disease. Simply encouraging olive oil consumption elsewhere may not replicate these benefits if the true driver is lifestyle factors associated with the climate. Choice A addresses feasibility but not whether the prediction is correct. Choice C is about treatment improvements, not diet. Choice D actually supports olive oil's benefits (as part of a broader diet). Choice E is about types of olive oil, which does not directly challenge the overall prediction.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },
  {
    id: "vq6",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-weaken"],
    difficulty: "easy",
    text: "A school district implemented a new reading program in its elementary schools last year. This year, reading test scores across the district improved by an average of 12 percent. The superintendent attributes this improvement to the new reading program and recommends expanding it to all grade levels.\n\nWhich of the following, if true, most weakens the superintendent's reasoning?",
    choices: [
      "The new reading program was more expensive to implement than the previous one.",
      "Elementary schools in neighboring districts that did not adopt the new program saw similar improvements in reading test scores this year.",
      "Some teachers in the district expressed initial skepticism about the new program's methods.",
      "The new program emphasizes phonics-based instruction, which research has shown to be effective for early readers.",
      "Reading test scores in the district had been declining for three consecutive years before the new program was introduced."
    ],
    correctAnswer: 1,
    explanation: "The superintendent concludes that the new reading program caused the test score improvement. Choice B undermines this by showing that similar improvements occurred in schools without the program, suggesting that some other factor (perhaps a change in the test, broader educational trends, or demographic shifts) is responsible for the improvement. Choice A is about cost, not effectiveness. Choice C is about teacher attitudes, which does not directly challenge the observed improvement. Choice D actually supports the program's potential. Choice E could even strengthen the argument by suggesting a rebound was overdue.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },

  // --- cr-strengthen (5 questions: vq7–vq11) ---

  {
    id: "vq7",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-strengthen"],
    difficulty: "easy",
    text: "The manager of a retail store noticed that sales increased by 25 percent during a month-long promotional campaign in which the store offered free gift wrapping for all purchases. The manager concluded that the free gift-wrapping service was responsible for the increase in sales.\n\nWhich of the following, if true, most strengthens the manager's conclusion?",
    choices: [
      "The store spent a significant amount on advertising the promotional campaign.",
      "Customer surveys conducted during the promotion indicated that gift wrapping was the primary reason they chose to shop at the store rather than at competitors.",
      "The store's sales had been declining for several months before the promotional campaign.",
      "Other stores in the same shopping mall also experienced increased sales during the same period.",
      "The store offered a wider selection of merchandise during the promotional period than it typically does."
    ],
    correctAnswer: 1,
    explanation: "The manager argues that free gift wrapping drove the sales increase. Choice B directly supports this by providing evidence that customers specifically cited gift wrapping as their reason for shopping there. Choice A suggests advertising may have played a role, which could be an alternative explanation. Choice C provides context but does not explain the cause. Choice D weakens the argument by suggesting a broader trend. Choice E provides an alternative explanation for the sales increase.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },
  {
    id: "vq8",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-strengthen"],
    difficulty: "medium",
    text: "A technology company implemented a four-day workweek for its employees on a trial basis. At the end of the six-month trial, overall productivity as measured by output per employee had not decreased, and employee turnover dropped by 35 percent. The company's CEO argues that the four-day workweek should be adopted permanently because it improves employee retention without harming productivity.\n\nWhich of the following, if true, most strengthens the CEO's argument?",
    choices: [
      "Several competing technology companies have also experimented with shortened workweeks.",
      "During the trial period, the company did not hire any new employees or change its product offerings.",
      "The cost of recruiting and training a replacement employee at the company averages 150 percent of the departing employee's annual salary.",
      "Employees worked an average of 10 hours per day during the four-day workweek, compared to 8 hours per day during the five-day workweek.",
      "The company's revenue increased by 5 percent during the trial period."
    ],
    correctAnswer: 2,
    explanation: "The CEO argues that the four-day workweek improves retention without harming productivity. Choice C strengthens this by quantifying the financial benefit of reduced turnover: since replacement costs are 150 percent of salary and turnover dropped 35 percent, the policy produces significant cost savings, making the case for permanent adoption even stronger. Choice A is about competitors and irrelevant. Choice B eliminates confounds but does not strengthen the core claim. Choice D actually weakens the argument by suggesting employees work more hours per day (essentially the same total hours). Choice E is supportive but revenue alone does not isolate the effect of the workweek change.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },
  {
    id: "vq9",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-strengthen"],
    difficulty: "medium",
    text: "Marine biologists have proposed that the recent decline in sea otter populations along the Pacific coast is primarily caused by an increase in orca predation. They note that orcas in the region have shifted their diet from large whales to smaller marine mammals, including sea otters, following the collapse of whale populations due to commercial whaling in the twentieth century.\n\nWhich of the following, if true, most strengthens the biologists' hypothesis?",
    choices: [
      "Sea otter populations in areas where orcas are not present have remained stable or increased over the same period.",
      "Orcas are known to be opportunistic predators that consume a wide variety of marine species.",
      "Commercial whaling was banned internationally in 1986, and some whale populations have begun to recover.",
      "Sea otters are a keystone species whose presence is critical for maintaining kelp forest ecosystems.",
      "Other potential causes of sea otter decline, such as disease and pollution, have been observed in some coastal regions."
    ],
    correctAnswer: 0,
    explanation: "The hypothesis is that orca predation is the primary cause of sea otter decline. Choice A provides a natural experiment: in areas without orcas, sea otter populations are stable, which is exactly what we would expect if orcas are the cause. This eliminates alternative explanations (like disease or pollution) that would affect all areas regardless of orca presence. Choice B is general background and does not specifically support this hypothesis. Choice C could actually weaken the argument by suggesting whale recovery may reduce orca predation on otters. Choice D is about ecological importance, not the cause of decline. Choice E actually raises alternative explanations.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },
  {
    id: "vq10",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-strengthen"],
    difficulty: "hard",
    text: "A city government is considering banning single-use plastic bags in grocery stores to reduce plastic waste in local waterways. Critics argue that consumers will simply switch to single-use paper bags, which require more energy to produce and transport, thereby increasing the city's overall carbon footprint. City officials respond that the ban will lead to a net reduction in environmental harm.\n\nWhich of the following, if true, most strengthens the city officials' response?",
    choices: [
      "Plastic bags account for only a small percentage of the total plastic waste found in local waterways.",
      "In other cities that have implemented similar bans, the majority of consumers switched to reusable bags rather than to single-use paper bags.",
      "The production of single-use paper bags generates fewer toxic byproducts than the production of plastic bags.",
      "The city currently has a comprehensive recycling program that accepts both plastic and paper bags.",
      "Plastic bag bans have been endorsed by several major environmental organizations."
    ],
    correctAnswer: 1,
    explanation: "The critics' objection is that consumers will switch from plastic to paper bags, increasing the carbon footprint. Choice B directly counters this by showing that in practice, consumers mostly switch to reusable bags, not paper ones. This undermines the critics' premise and supports the officials' claim that the ban will reduce environmental harm. Choice A actually weakens the officials' position by minimizing the problem. Choice C supports paper over plastic but does not address the carbon footprint concern. Choice D is about recycling, not the ban's effect. Choice E is an appeal to authority rather than evidence.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },
  {
    id: "vq11",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-strengthen"],
    difficulty: "hard",
    text: "Economists have observed that countries with higher levels of economic freedom—as measured by ease of starting a business, low trade barriers, and strong property rights—tend to have higher per capita incomes. Some economists conclude that increasing economic freedom causes economic growth.\n\nWhich of the following, if true, most strengthens the conclusion that economic freedom causes growth?",
    choices: [
      "Countries with high per capita incomes tend to have more resources to invest in institutions that promote economic freedom.",
      "The correlation between economic freedom and per capita income holds across countries of varying geographic sizes, populations, and natural resource endowments.",
      "Countries that have implemented reforms to increase economic freedom have subsequently experienced higher growth rates than similar countries that did not implement such reforms.",
      "Economic freedom indices can sometimes produce different rankings depending on the methodology used.",
      "Some countries with moderate levels of economic freedom have experienced rapid economic growth in recent decades."
    ],
    correctAnswer: 2,
    explanation: "The conclusion is that economic freedom causes growth. Choice C provides evidence of a temporal sequence consistent with causation: countries that increased economic freedom subsequently grew faster than comparable countries that did not. This before-and-after comparison with a control group is the strongest evidence for causation. Choice A suggests reverse causation (growth causes freedom), which would weaken the conclusion. Choice B strengthens the correlation but does not establish causation. Choice D raises methodological concerns. Choice E provides a counterexample that weakens the argument.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-weaken-strengthen",
  },

  // --- cr-assumption (5 questions: vq12–vq16) ---

  {
    id: "vq12",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-assumption"],
    difficulty: "easy",
    text: "A company's human resources director argues that the company should replace its annual performance reviews with quarterly feedback sessions. She reasons that more frequent feedback will allow employees to correct performance issues sooner, leading to higher overall productivity.\n\nThe argument above assumes which of the following?",
    choices: [
      "Annual performance reviews have been shown to be ineffective at all companies that use them.",
      "Employees are willing and able to modify their performance in response to feedback given quarterly.",
      "The company's current employees are underperforming relative to industry benchmarks.",
      "Quarterly feedback sessions will cost the company less than annual performance reviews.",
      "Other companies in the same industry have already switched to quarterly feedback sessions."
    ],
    correctAnswer: 1,
    explanation: "The argument claims that more frequent feedback will allow employees to correct performance issues, improving productivity. This assumes that employees can and will actually change their behavior based on quarterly feedback. If employees are unwilling or unable to adjust, then more frequent feedback would not lead to the predicted improvement. Choice A is too extreme—the argument is about this company, not all companies. Choice C is not required; even well-performing employees can improve. Choice D is about cost, which the argument does not address. Choice E is about other companies and is irrelevant to the logic.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-assumption-evaluate",
  },
  {
    id: "vq13",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-assumption"],
    difficulty: "medium",
    text: "A city's transportation authority reports that since the introduction of a new express bus route connecting the suburbs to downtown, ridership on the city's subway system has declined by 8 percent. The authority concludes that the express bus route has diverted riders away from the subway.\n\nWhich of the following is an assumption on which the argument depends?",
    choices: [
      "The express bus route is less expensive for commuters than the subway.",
      "The 8 percent decline in subway ridership is not primarily the result of factors unrelated to the introduction of the express bus route.",
      "The express bus route serves exactly the same neighborhoods as the subway lines that lost riders.",
      "The total number of public transit riders in the city has remained constant since the express bus route was introduced.",
      "Commuters who switched from the subway to the express bus route have reported shorter commute times."
    ],
    correctAnswer: 1,
    explanation: "The argument attributes the subway ridership decline to the new bus route. This reasoning assumes that other factors (such as population changes, economic downturns, increased remote work, or service quality changes on the subway) are not primarily responsible for the decline. If they were, the conclusion would not follow. Choice A is not necessary—riders might switch for convenience, not cost. Choice C is too strong; routes need not be identical for diversion to occur. Choice D is not assumed; total ridership could have grown. Choice E is about rider experience and not essential to the causal claim.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-assumption-evaluate",
  },
  {
    id: "vq14",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-assumption"],
    difficulty: "medium",
    text: "A nutritionist recommends that people who want to lose weight should eat a large breakfast and a small dinner rather than a small breakfast and a large dinner. She cites a study showing that participants who consumed most of their daily calories in the morning lost more weight over 12 weeks than those who consumed most of their calories in the evening, even though both groups consumed the same total number of calories.\n\nThe nutritionist's recommendation depends on which of the following assumptions?",
    choices: [
      "The participants in the study were representative of the general population in terms of metabolism and lifestyle.",
      "Eating a large breakfast does not cause people to consume additional calories through snacking during the day.",
      "The participants who ate large breakfasts also exercised more than those who ate large dinners.",
      "The study measured weight loss accurately and used appropriate statistical methods.",
      "People who eat large dinners typically consume more total daily calories than those who eat large breakfasts."
    ],
    correctAnswer: 0,
    explanation: "The nutritionist generalizes from the study's participants to all people wanting to lose weight. This requires assuming that the study participants are representative of the general population. If they were not—for example, if they were all young athletes or had atypical metabolisms—the recommendation might not apply broadly. Choice B is a potential concern but would actually strengthen the case if false. Choice C would undermine the study's conclusions if true. Choice D is about study validity, which is a basic assumption but less specific to the recommendation's logic. Choice E contradicts the study's design (both groups ate the same total calories).",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-assumption-evaluate",
  },
  {
    id: "vq15",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-assumption"],
    difficulty: "hard",
    text: "A museum's board of directors is considering offering free admission on weekdays to increase total annual revenue. The board reasons that free weekday admission will attract many new visitors who would not otherwise come, and that these visitors will spend money at the museum's gift shop and café, more than compensating for the lost ticket revenue.\n\nThe board's reasoning requires which of the following assumptions?",
    choices: [
      "The museum currently charges the same admission price on weekdays and weekends.",
      "Most people who currently visit the museum on weekdays would not shift their visits to weekends if weekday admission were free.",
      "The revenue generated by new weekday visitors' gift shop and café purchases will exceed the ticket revenue that the museum would have collected from both new and existing weekday visitors.",
      "The museum's gift shop and café have sufficient capacity to serve a significantly larger number of visitors.",
      "Other museums that have implemented free admission days have seen increases in total revenue."
    ],
    correctAnswer: 2,
    explanation: "The board concludes that total annual revenue will increase. For this to work, the new spending at the gift shop and café must exceed ALL lost ticket revenue—both from new visitors (who would have paid to enter) and from existing weekday visitors (who will no longer pay for tickets). Choice C captures this complete financial assumption. Choice A is not required; the argument works regardless of pricing structure. Choice B is relevant but secondary—even if some visitors shift, the core question is whether gift shop/café revenue exceeds lost tickets. Choice D is a practical concern but not a logical assumption of the argument. Choice E is about other museums and does not establish the specific assumption.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-assumption-evaluate",
  },
  {
    id: "vq16",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-assumption"],
    difficulty: "easy",
    text: "A software company's CEO argues that the company should invest in developing a mobile version of its popular desktop application. He reasons that since 70 percent of internet traffic now comes from mobile devices, a mobile version of the application will capture a significant new user base.\n\nThe CEO's argument assumes which of the following?",
    choices: [
      "The company has the technical expertise to develop a mobile application.",
      "A substantial portion of the people who use mobile devices for internet browsing would have a use for the company's application.",
      "Mobile applications are generally more profitable than desktop applications.",
      "The company's competitors do not already offer mobile versions of similar applications.",
      "The percentage of internet traffic from mobile devices will continue to increase in the future."
    ],
    correctAnswer: 1,
    explanation: "The CEO assumes that because 70 percent of internet traffic is mobile, a mobile version will attract significant new users. But this logic only works if mobile users actually need or want this specific application. If the application serves a niche that mobile users do not care about (for example, a specialized engineering tool), then the large mobile audience is irrelevant. Choice A is a practical concern, not a logical assumption of the argument. Choice C is about profitability, not user acquisition. Choice D is about competition and not essential to the argument. Choice E is about future trends, but the argument is about the current mobile audience.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-assumption-evaluate",
  },

  // --- cr-evaluate (4 questions: vq17–vq20) ---

  {
    id: "vq17",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-evaluate"],
    difficulty: "medium",
    text: "A company is deciding whether to relocate its headquarters from a major city to a smaller town 100 miles away. The CEO argues that the move will reduce operating costs by 40 percent because office space and the cost of living are much lower in the smaller town. She predicts that the savings will significantly improve the company's profitability.\n\nWhich of the following would be most useful to evaluate in assessing the CEO's prediction?",
    choices: [
      "Whether the company's current office lease expires in the next year.",
      "Whether key employees would be willing to relocate or whether the company would face significant turnover and rehiring costs.",
      "Whether other companies have recently relocated from major cities to smaller towns.",
      "Whether the CEO personally prefers living in a smaller town.",
      "Whether the company's revenue has been growing or declining over the past five years."
    ],
    correctAnswer: 1,
    explanation: "The CEO predicts improved profitability from cost savings. To evaluate this, we need to consider potential hidden costs. Choice B identifies the most critical potential cost: if key employees refuse to relocate, the company could face massive turnover and the expense of recruiting and training replacements, which could easily offset the operating cost savings. Choice A is a practical timing question but does not address profitability. Choice C is about other companies and does not directly help evaluate this specific prediction. Choice D is irrelevant personal information. Choice E provides context but does not address whether the relocation will improve profitability.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-assumption-evaluate",
  },
  {
    id: "vq18",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-evaluate"],
    difficulty: "medium",
    text: "A fitness chain claims that its members who attend group exercise classes at least three times per week lose twice as much weight over six months as members who exercise alone. The chain uses this data to market its group classes as more effective for weight loss.\n\nWhich of the following would it be most useful to know in order to evaluate the fitness chain's claim?",
    choices: [
      "Whether the fitness chain's membership fees are higher than those of competing gyms.",
      "Whether members who attend group classes are also more likely to follow a structured diet plan than those who exercise alone.",
      "Whether the fitness chain offers classes in a variety of exercise styles, such as yoga, cycling, and strength training.",
      "Whether the average age of the fitness chain's members has changed over the past five years.",
      "Whether the fitness chain has expanded the number of locations where it offers group classes."
    ],
    correctAnswer: 1,
    explanation: "The fitness chain claims group classes are more effective for weight loss. To evaluate this claim, we need to know whether other factors could explain the difference. Choice B identifies the most critical confounding variable: if group class attendees also follow stricter diets, then the weight loss difference may be due to diet rather than the exercise format. Knowing this would help determine whether the claim about group classes is valid. Choice A is about price, not effectiveness. Choice C is about variety, not the comparison. Choice D is about demographics over time. Choice E is about expansion, not class effectiveness.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-assumption-evaluate",
  },
  {
    id: "vq19",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-evaluate"],
    difficulty: "hard",
    text: "A government economist argues that raising the minimum wage by 15 percent will not lead to significant job losses. She points to data from a neighboring country that raised its minimum wage by a similar percentage and saw no measurable increase in unemployment over the following two years.\n\nWhich of the following would be most important to evaluate in determining whether the economist's analogy is valid?",
    choices: [
      "Whether the neighboring country's economy was growing during the period following the minimum wage increase.",
      "Whether the minimum wage workers in both countries are employed in similar industries with comparable labor market conditions.",
      "Whether the 15 percent increase represents the same absolute dollar amount in both countries.",
      "Whether the economist has previously advocated for minimum wage increases.",
      "Whether minimum wage workers in the neighboring country reported higher job satisfaction after the increase."
    ],
    correctAnswer: 1,
    explanation: "The economist uses an analogy from a neighboring country to predict what will happen domestically. To evaluate whether this analogy is valid, the most important factor is whether the labor markets are comparable. Choice B asks whether the industries and labor conditions are similar—if one country's minimum wage workers are primarily in industries where labor demand is elastic and the other's are not, the outcomes could differ dramatically. Choice A is relevant but less fundamental than structural comparability. Choice C addresses a detail but does not capture the broader question of whether the analogy holds. Choice D is about the economist's bias, not the argument's logic. Choice E is about satisfaction, not employment effects.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-assumption-evaluate",
  },
  {
    id: "vq20",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-evaluate"],
    difficulty: "easy",
    text: "A university administration proposes cutting funding for the arts department by 30 percent, arguing that arts graduates have lower starting salaries than graduates of science and engineering programs and therefore generate less return on the university's investment.\n\nWhich of the following would be most useful to evaluate in assessing the administration's argument?",
    choices: [
      "Whether the arts department has won any prestigious awards in recent years.",
      "Whether arts graduates' career earnings over a 20-year period are comparable to those of science and engineering graduates.",
      "Whether the university's overall budget has increased or decreased in recent years.",
      "Whether arts courses are popular electives among science and engineering students.",
      "Whether other universities have also cut funding for their arts departments."
    ],
    correctAnswer: 1,
    explanation: "The administration bases its argument on starting salaries. Choice B challenges whether this metric is appropriate by asking about long-term earnings. If arts graduates eventually earn comparable salaries over their careers, the argument based on starting salaries alone is misleading. This directly evaluates the key evidence. Choice A is about prestige, not financial return. Choice C is about the budget context but does not address the argument's logic. Choice D is interesting but does not evaluate the return-on-investment claim. Choice E is about other institutions and does not assess this argument.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-assumption-evaluate",
  },

  // --- cr-inference (4 questions: vq21–vq24) ---

  {
    id: "vq21",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-inference"],
    difficulty: "medium",
    text: "A survey of 1,000 consumers found that 80 percent of respondents said they would be willing to pay a 10 percent premium for products labeled as environmentally sustainable. However, market data from the same year shows that products with sustainability labels accounted for only 5 percent of total sales in the categories surveyed.\n\nWhich of the following can most properly be inferred from the information above?",
    choices: [
      "Products labeled as environmentally sustainable are of lower quality than conventional products.",
      "Consumers are deliberately misleading survey researchers about their purchasing intentions.",
      "For most consumers, stated willingness to pay a premium for sustainable products does not translate into actual purchasing behavior.",
      "Retailers are not making sustainable products sufficiently available to meet consumer demand.",
      "The 10 percent premium on sustainable products is too high for most consumers to afford."
    ],
    correctAnswer: 2,
    explanation: "The passage presents a gap: 80 percent say they would pay more for sustainable products, but these products constitute only 5 percent of sales. Choice C directly captures this discrepancy—what people say they will do and what they actually do are different. Choice A introduces quality, which is not mentioned. Choice B is too strong; consumers may not be lying—they may genuinely intend to buy sustainably but not follow through for various reasons. Choice D is possible but not directly inferable—the low sales could exist even if products are widely available. Choice E assumes affordability is the issue, which is not supported.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-inference-paradox-structure",
  },
  {
    id: "vq22",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-inference"],
    difficulty: "easy",
    text: "Company X's revenue grew by 15 percent last year, while its total number of employees grew by 25 percent. During the same period, the company's total operating expenses, of which employee compensation is the largest component, grew by 30 percent.\n\nIf the statements above are true, which of the following must also be true?",
    choices: [
      "Company X's profit margin declined last year.",
      "Company X hired too many employees last year.",
      "Revenue per employee at Company X decreased last year.",
      "Company X's employee compensation costs grew faster than its number of employees.",
      "Company X would have been more profitable if it had hired fewer employees."
    ],
    correctAnswer: 2,
    explanation: "Revenue grew by 15 percent while the number of employees grew by 25 percent. Since revenue grew at a slower rate than headcount, revenue per employee must have decreased. This is a mathematical certainty. Choice A is plausible but not necessarily true—we do not know about non-operating income, taxes, or other factors. Choice B is a value judgment, not an inference. Choice D may or may not be true—operating expenses grew 30 percent and employees grew 25 percent, but compensation is only a component of operating expenses, so we cannot determine compensation growth alone. Choice E involves a counterfactual that cannot be determined from the given information.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-inference-paradox-structure",
  },
  {
    id: "vq23",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-inference"],
    difficulty: "hard",
    text: "In Country Z, all prescription medications must be approved by the national drug safety agency before they can be sold. The approval process typically takes three to five years and requires extensive clinical trials demonstrating both safety and efficacy. However, the agency can grant \"expedited approval\" for medications that treat serious conditions for which no adequate treatment currently exists, reducing the approval timeline to as little as six months.\n\nWhich of the following can be properly inferred from the statements above?",
    choices: [
      "Medications that receive expedited approval are less safe than those that go through the standard process.",
      "Most prescription medications in Country Z take at least three years to reach the market after development.",
      "A new medication for a common condition that already has several effective treatments would not be eligible for expedited approval.",
      "The national drug safety agency prioritizes speed over thoroughness in its review of medications for serious conditions.",
      "Medications that treat rare diseases are more likely to receive expedited approval than those that treat common diseases."
    ],
    correctAnswer: 2,
    explanation: "Expedited approval requires two conditions: the medication treats a serious condition AND no adequate treatment currently exists. A medication for a condition that already has several effective treatments fails the second criterion—adequate treatments already exist. Therefore, it would not be eligible for expedited approval. Choice A assumes expedited approval compromises safety, which is not stated. Choice B is plausible but not necessarily true—we only know the approval process takes three to five years, not the total development-to-market timeline. Choice D overstates what is implied; expedited does not mean less thorough. Choice E conflates rarity with lack of treatment; a common condition could also lack treatments.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-inference-paradox-structure",
  },
  {
    id: "vq24",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-inference"],
    difficulty: "medium",
    text: "A recent industry report found that the average cost of manufacturing solar panels has declined by 85 percent over the past decade. During the same period, the global installed capacity of solar energy has increased twentyfold. However, solar energy still accounts for only 4 percent of global electricity generation.\n\nWhich of the following can be most reasonably inferred from the information above?",
    choices: [
      "Solar energy will eventually replace fossil fuels as the world's primary electricity source.",
      "The decline in solar panel costs is the sole reason for the increase in installed capacity.",
      "Global electricity demand has grown substantially over the past decade, partially offsetting the growth in solar capacity.",
      "Despite its rapid growth, solar energy started from a very small base relative to total electricity generation.",
      "Government subsidies are primarily responsible for the growth in solar energy capacity."
    ],
    correctAnswer: 3,
    explanation: "Solar capacity increased twentyfold but still accounts for only 4 percent of global electricity. If a twentyfold increase results in only 4 percent market share, solar energy must have started from a very small base. Choice A is a prediction not supported by the data. Choice B is too strong—the cost decline is likely a factor but may not be the sole reason. Choice C is possible but not directly inferable from the given data. Choice E introduces subsidies, which are not mentioned.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-inference-paradox-structure",
  },

  // --- cr-paradox (3 questions: vq25–vq27) ---

  {
    id: "vq25",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-paradox"],
    difficulty: "medium",
    text: "A company introduced a generous employee wellness program that includes free gym memberships, on-site healthy meals, and stress management workshops. After one year, employee healthcare costs at the company increased by 12 percent, even though employees reported significantly higher levels of physical activity and healthier eating habits.\n\nWhich of the following, if true, best explains the apparent discrepancy described above?",
    choices: [
      "The company's healthcare premiums increased due to industrywide trends unrelated to employee health.",
      "The wellness program encouraged employees to schedule preventive medical check-ups, leading to the early detection and treatment of previously undiagnosed conditions.",
      "Some employees found the wellness program's offerings inconvenient and chose not to participate.",
      "The company expanded its workforce by 20 percent during the same year.",
      "Other companies that implemented similar wellness programs also experienced increases in healthcare costs."
    ],
    correctAnswer: 1,
    explanation: "The paradox is that employees are healthier but healthcare costs went up. Choice B resolves this elegantly: the wellness program prompted employees to get check-ups, which found conditions they did not know about, leading to treatment costs. Healthcare costs increased not because people got sicker, but because hidden problems were discovered and treated. Choice A provides an explanation but ignores the connection to the wellness program. Choice C suggests low participation, which would not explain increased costs. Choice D could explain higher total costs but not higher costs per employee or the connection to the wellness program. Choice E confirms the pattern but does not explain it.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-inference-paradox-structure",
  },
  {
    id: "vq26",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-paradox"],
    difficulty: "hard",
    text: "A city installed 500 new streetlights along a historically high-crime corridor. In the year following the installation, reported crime in the corridor increased by 18 percent compared to the previous year. During the same period, crime rates in the rest of the city, where no additional streetlights were installed, remained unchanged.\n\nWhich of the following, if true, most helps to resolve the apparent paradox?",
    choices: [
      "The new streetlights used energy-efficient LED technology that was less expensive to operate than traditional streetlights.",
      "The increase in reported crime was driven almost entirely by an increase in reports of crimes that occur primarily during daytime hours.",
      "Better lighting made it easier for residents and police to observe and report criminal activity that had previously gone undetected in the dark.",
      "Some of the new streetlights malfunctioned within the first six months and had to be replaced.",
      "The city council had planned to install additional streetlights in other neighborhoods but postponed the project due to budget constraints."
    ],
    correctAnswer: 2,
    explanation: "The paradox is that more streetlights led to more crime, which is the opposite of what we would expect. Choice C resolves this by distinguishing between crime occurrence and crime reporting. The streetlights did not increase actual crime—they increased the detection and reporting of crime that was already happening but going unnoticed in the dark. Choice A is about energy efficiency, which is irrelevant. Choice B is puzzling—if the increase were in daytime crimes, the streetlights would be irrelevant, but this does not resolve the paradox because it would not explain why streetlights are connected to daytime crime. Choice D suggests some lights did not work, which would predict less crime increase, not more. Choice E is about other neighborhoods.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-inference-paradox-structure",
  },
  {
    id: "vq27",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-paradox"],
    difficulty: "easy",
    text: "A farmer switched from conventional farming methods to organic farming methods three years ago. Despite the fact that organic crops typically sell for 30 percent more per pound than conventionally grown crops, the farmer's total annual revenue has decreased every year since making the switch.\n\nWhich of the following, if true, most helps to explain the farmer's decline in revenue?",
    choices: [
      "The farmer's operating costs have increased since switching to organic methods.",
      "Consumer demand for organic produce has been growing steadily in the region.",
      "Organic farming methods result in significantly lower crop yields per acre than conventional methods, and the yield reduction more than offsets the higher per-pound price.",
      "Several other farmers in the region have also switched to organic farming methods.",
      "The farmer received a government subsidy during the first year of the transition to organic farming."
    ],
    correctAnswer: 2,
    explanation: "The paradox is that crops sell for 30 percent more per pound, yet total revenue has fallen. Choice C explains this directly: organic farming produces significantly fewer pounds per acre, so even though each pound sells for more, the total pounds sold have dropped enough to reduce total revenue (price per unit up, but quantity down by more). Choice A is about costs, not revenue. Choice B suggests demand is growing, which deepens the paradox rather than resolving it. Choice D is about other farmers but does not explain this farmer's revenue. Choice E is about a subsidy in one year only.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-inference-paradox-structure",
  },

  // --- cr-boldface (2 questions: vq28–vq29) ---

  {
    id: "vq28",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-boldface"],
    difficulty: "hard",
    text: "Some urban planners have argued that converting downtown parking lots into parks and green spaces will revitalize city centers by attracting more residents and businesses. **However, a study of 15 mid-sized cities found that such conversions led to a 20 percent decrease in downtown retail foot traffic within the first two years.** These planners respond that the study's timeframe is too short, since the benefits of green space take years to materialize. **Nevertheless, the evidence suggests that in the short term, reducing downtown parking availability imposes significant economic costs on existing businesses.**\n\nIn the argument above, the two boldface portions play which of the following roles?",
    choices: [
      "The first is evidence the argument uses to support its conclusion; the second is the argument's main conclusion.",
      "The first is a concession to an opposing view; the second is the argument's main conclusion.",
      "The first is evidence that supports the argument's conclusion; the second restates that evidence in different terms.",
      "The first is evidence cited to challenge a position; the second is the conclusion drawn from that evidence.",
      "The first is a conclusion the argument opposes; the second is an alternative conclusion the argument favors."
    ],
    correctAnswer: 3,
    explanation: "The first boldface portion presents evidence (the study finding a 20 percent decrease in foot traffic) that challenges the urban planners' position. The second boldface portion draws a conclusion from that evidence (that reducing parking imposes short-term economic costs). The overall argument structure is: planners claim X will help, but evidence shows a negative effect, planners rebut by saying the timeframe is too short, but the conclusion stands that short-term costs are real. Choice A incorrectly describes the first portion as supporting a conclusion rather than challenging a position. Choice B incorrectly labels the first portion as a concession. Choice C says the second merely restates the first, but the second draws a broader conclusion. Choice E incorrectly labels the first as a conclusion.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-inference-paradox-structure",
  },
  {
    id: "vq29",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-boldface"],
    difficulty: "hard",
    text: "Critics of remote learning argue that students learn less effectively without in-person interaction with teachers and peers. **A recent large-scale study found that students in fully remote programs scored, on average, 5 percent lower on standardized assessments than students in traditional classrooms.** Proponents of remote learning counter that standardized tests do not measure important skills such as self-discipline and digital literacy that remote students develop. **While this rebuttal has merit, it does not change the fact that remote learning, as currently implemented, produces measurably lower outcomes on the academic metrics that employers and universities most commonly use.**\n\nThe two boldface portions play which of the following roles in the argument?",
    choices: [
      "The first presents evidence used to support the argument's position; the second qualifies that position by acknowledging a limitation.",
      "The first presents a finding that the argument ultimately rejects; the second provides the basis for that rejection.",
      "The first presents evidence supporting one side of a debate; the second is the argument's conclusion, which that evidence supports.",
      "The first is the argument's main conclusion; the second provides additional evidence for that conclusion.",
      "The first and the second both provide evidence for the same conclusion."
    ],
    correctAnswer: 2,
    explanation: "The first boldface portion presents a study finding (evidence) that supports the critics' view that remote learning is less effective. The second boldface portion is the argument's conclusion: despite the proponents' rebuttal about other skills, remote learning still produces lower results on the metrics that matter most. The evidence in the first boldface directly supports the conclusion in the second. Choice A says the second qualifies the position, but it actually affirms the conclusion. Choice B says the argument rejects the finding, but it embraces it. Choice D reverses the roles—the first is evidence, not the conclusion. Choice E says both provide evidence, but the second is a conclusion, not evidence.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-inference-paradox-structure",
  },

  // --- cr-complete-passage (1 question: vq30) ---

  {
    id: "vq30",
    section: "verbal",
    type: "critical-reasoning",
    themes: ["cr-complete-passage"],
    difficulty: "medium",
    text: "The introduction of self-checkout kiosks in grocery stores was expected to reduce labor costs significantly. However, stores that have installed self-checkout kiosks report that they still require nearly the same number of staff members, because employees must now monitor the kiosks, assist customers with technical difficulties, and verify age-restricted purchases. Moreover, studies show that inventory shrinkage due to unintentional scanning errors and theft is higher at self-checkout stations than at staffed registers. Therefore, the net effect of self-checkout kiosks on grocery store profitability is likely __________.",
    choices: [
      "strongly positive, because the technology attracts younger, tech-savvy customers who spend more per visit",
      "negligible or negative, because the expected labor savings have not materialized and losses from shrinkage have increased",
      "impossible to determine, because the technology is too new to evaluate",
      "strongly positive, because self-checkout kiosks are much less expensive to install than traditional checkout lanes",
      "dependent entirely on the proportion of customers who choose to use the kiosks rather than staffed lanes"
    ],
    correctAnswer: 1,
    explanation: "The passage sets up two points: (1) labor costs have not been significantly reduced because staff are still needed, and (2) inventory shrinkage has increased. The logical completion must follow from both premises. Choice B correctly concludes that profitability effects are negligible or negative because both expected benefits (labor savings) failed to materialize and new costs (shrinkage) emerged. Choice A contradicts the passage's negative evidence. Choice C ignores the evidence already presented. Choice D introduces installation costs, which the passage does not discuss. Choice E introduces a variable not discussed in the passage.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-cr-inference-paradox-structure",
  },

  // ============================================================
  // READING COMPREHENSION (vq31–vq60)
  // ============================================================

  // --- Passage 1: Business/Economics (vq31–vq35) ---

  {
    id: "vq31",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "easy",
    passage: passageBusiness,
    text: "Which of the following best expresses the main idea of the passage?",
    choices: [
      "First-mover advantage is a myth that has been completely debunked by recent research.",
      "Fast followers always outperform first movers because they learn from pioneers' mistakes.",
      "The traditional belief in first-mover advantage is largely unsupported by evidence, and companies may benefit more from developing strong execution capabilities than from racing to enter markets first.",
      "Companies should never attempt to be the first to market because the costs of pioneering invariably outweigh the benefits.",
      "Network effects and switching costs are the only factors that determine whether a first mover succeeds."
    ],
    correctAnswer: 2,
    explanation: "The passage argues that the first-mover advantage concept is overrated, citing evidence that first movers fail at high rates while fast followers succeed more often. It concludes that sustainable advantage comes from execution and adaptability, not entry timing. Choice C captures this nuanced argument. Choice A is too extreme—the passage says first-mover advantage is the 'exception rather than the rule,' not completely debunked. Choice B uses 'always,' which is too absolute. Choice D uses 'never' and 'invariably,' which are too strong. Choice E misrepresents the passage, which mentions these factors as exceptions, not as the only determinants.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },
  {
    id: "vq32",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "easy",
    passage: passageBusiness,
    text: "According to the passage, what was the failure rate of first movers in the study of 500 product categories?",
    choices: [
      "8 percent",
      "20 percent",
      "35 percent",
      "47 percent",
      "55 percent"
    ],
    correctAnswer: 3,
    explanation: "The passage states directly: 'A comprehensive study of 500 product categories found that first movers failed at a rate of 47 percent.' Choice D (47 percent) matches this figure exactly. Choice A (8 percent) was the failure rate for fast followers, not first movers.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq33",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "medium",
    passage: passageBusiness,
    text: "The passage suggests which of the following about the cost of educating consumers about a new product category?",
    choices: [
      "It is the single greatest expense faced by first movers.",
      "It benefits later entrants, who do not have to bear that cost themselves.",
      "It can be recouped through higher initial pricing.",
      "It is negligible compared to other costs of entering a new market.",
      "It is shared equally among all companies that eventually enter the market."
    ],
    correctAnswer: 1,
    explanation: "The passage states that 'first movers often bear the cost of educating consumers about a new product category, an investment from which later entrants benefit freely.' This implies that later entrants get the benefit of consumer awareness without paying for it. Choice B captures this inference. Choice A is not supported—the passage mentions this cost but does not call it the greatest. Choice C is not discussed. Choice D contradicts the passage's implication that this cost is significant. Choice E contradicts the passage, which says later entrants benefit 'freely,' meaning they do not share the cost.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq34",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-structure"],
    difficulty: "medium",
    passage: passageBusiness,
    text: "Which of the following best describes the organization of the passage?",
    choices: [
      "A hypothesis is proposed, tested through multiple experiments, and confirmed.",
      "A widely held belief is presented, evidence challenging it is introduced, and an alternative strategic recommendation is offered.",
      "Two competing theories are presented and evaluated, with the author concluding that both have merit.",
      "A business strategy is described, its historical origins are traced, and its continued relevance is affirmed.",
      "A series of case studies is presented to illustrate a general principle about market competition."
    ],
    correctAnswer: 1,
    explanation: "The passage begins by presenting the widely held belief in first-mover advantage, then introduces research evidence that challenges this belief (high failure rates for first movers, success of fast followers), and concludes with an alternative recommendation (develop organizational capabilities rather than racing to be first). Choice B accurately describes this structure. Choice A incorrectly says the hypothesis is confirmed. Choice C does not accurately represent the passage, which clearly favors one position. Choice D incorrectly says the belief's relevance is affirmed. Choice E does not describe the passage's structure.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },
  {
    id: "vq35",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-application"],
    difficulty: "hard",
    passage: passageBusiness,
    text: "Based on the passage, the author would most likely agree with which of the following business strategies?",
    choices: [
      "A startup should rush to launch its product before competitors, even if the product is not fully developed.",
      "A company should invest in monitoring emerging markets and building the capacity to enter quickly once demand is validated.",
      "A company should avoid entering any market where a competitor has already established a presence.",
      "A large company should acquire first movers in new markets to gain their advantages.",
      "A company should focus on creating switching costs to lock in early customers."
    ],
    correctAnswer: 1,
    explanation: "The passage concludes that 'rather than racing to be first, companies may be better served by developing the organizational capabilities needed to move quickly once a market opportunity has been validated.' Choice B directly reflects this recommendation—monitoring markets and building capacity to enter once demand is validated. Choice A contradicts the passage's argument against racing to be first. Choice C is too extreme; the passage discusses fast followers who enter after pioneers. Choice D is not discussed. Choice E focuses on switching costs, which the passage treats as exceptional rather than a general strategy.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-tone-application",
  },

  // --- Passage 2: Science/Biology (vq36–vq40) ---

  {
    id: "vq36",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "medium",
    passage: passageScience,
    text: "Which of the following best states the primary purpose of the passage?",
    choices: [
      "To argue that probiotic supplements should replace traditional psychiatric medications.",
      "To describe the discovery of serotonin production in the gut and its implications for nutrition.",
      "To present evidence that the gut microbiome influences brain function and behavior, and to discuss the therapeutic potential of this connection.",
      "To compare the effectiveness of germ-free mouse studies with human clinical trials in microbiome research.",
      "To explain why approximately 90 percent of serotonin is produced in the gut rather than in the brain."
    ],
    correctAnswer: 2,
    explanation: "The passage describes the gut-brain axis, presents evidence from animal and human studies that gut bacteria affect brain chemistry and behavior, and discusses the therapeutic implications. Choice C captures all of these elements. Choice A is too extreme—the passage mentions the possibility of microbiome therapies but does not argue they should replace medications. Choice B is too narrow, focusing only on serotonin. Choice D does not reflect the main purpose; the comparison is a detail. Choice E is too narrow and the passage does not explain why serotonin is produced in the gut.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },
  {
    id: "vq37",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "easy",
    passage: passageScience,
    text: "According to the passage, what happened when germ-free mice were colonized with normal gut bacteria later in life?",
    choices: [
      "Their behavioral abnormalities were completely reversed.",
      "They showed no change in brain chemistry or behavior.",
      "They experienced only partial recovery from behavioral abnormalities.",
      "They developed new behavioral abnormalities not seen in other mice.",
      "They produced significantly more serotonin than normal mice."
    ],
    correctAnswer: 2,
    explanation: "The passage states: 'colonization later in life produces only partial recovery.' This directly corresponds to Choice C. Choice A is incorrect because complete reversal occurred only with early colonization. Choice B contradicts the passage. Choices D and E are not mentioned in the passage.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq38",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "hard",
    passage: passageScience,
    text: "The passage implies that the concept of a \"critical developmental window\" for microbiome-brain interactions is supported by which of the following observations?",
    choices: [
      "Approximately 90 percent of the body's serotonin is produced in the gut.",
      "Germ-free mice show increased anxiety-like responses compared to normal mice.",
      "Human clinical studies have found correlations between microbiome composition and depression.",
      "Early colonization of germ-free mice reverses behavioral abnormalities, but late colonization does not fully do so.",
      "Preliminary probiotic trials have shown modest improvements in depression symptoms."
    ],
    correctAnswer: 3,
    explanation: "The passage states that early colonization reverses abnormalities but late colonization produces only partial recovery, and then says 'This suggests that there exists a critical developmental window.' The 'this' refers to the difference in outcomes between early and late colonization—Choice D. Choices A, B, C, and E describe other findings but do not directly support the critical window concept.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq39",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-tone"],
    difficulty: "medium",
    passage: passageScience,
    text: "The author's attitude toward microbiome-based psychiatric therapies can best be described as:",
    choices: [
      "Unreservedly enthusiastic, predicting they will revolutionize mental health treatment.",
      "Deeply skeptical, suggesting that the evidence is too weak to warrant further research.",
      "Cautiously optimistic, acknowledging preliminary positive results while noting that significant challenges remain.",
      "Neutral and detached, presenting the evidence without expressing any opinion on therapeutic potential.",
      "Dismissive, arguing that animal studies cannot be meaningfully applied to human medicine."
    ],
    correctAnswer: 2,
    explanation: "The author describes the therapeutic potential as 'considerable' and notes 'modest but statistically significant improvements' in trials, showing optimism. However, phrases like 'establishing causation remains challenging' and 'preliminary clinical trials' signal caution. Choice C captures this balanced tone. Choice A is too positive—'unreservedly' is too strong. Choice B contradicts the positive language about potential. Choice D is incorrect because the author does express measured optimism. Choice E contradicts the passage's discussion of human clinical studies.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-tone-application",
  },
  {
    id: "vq40",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-structure"],
    difficulty: "medium",
    passage: passageScience,
    text: "The discussion of germ-free mice in the passage primarily serves to:",
    choices: [
      "Demonstrate that mice and humans have identical gut-brain connections.",
      "Provide experimental evidence that the absence of gut bacteria affects brain function and behavior.",
      "Argue that animal testing is the most reliable method for studying the gut-brain axis.",
      "Show that serotonin production is not important for normal brain function.",
      "Suggest that germ-free environments are harmful to all mammals."
    ],
    correctAnswer: 1,
    explanation: "The germ-free mice studies are cited as experimental evidence: these mice show altered brain chemistry and behavior, demonstrating that the microbiome influences neural function. This serves as proof-of-concept for the gut-brain axis. Choice B correctly identifies this function. Choice A is too strong—the passage does not claim identical connections. Choice C overstates the passage's claims about methodology. Choice D contradicts the passage, which emphasizes serotonin's importance. Choice E is far too broad a generalization.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },

  // --- Passage 3: History/Social Science (vq41–vq45) ---

  {
    id: "vq41",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "medium",
    passage: passageHistory,
    text: "The primary purpose of the passage is to:",
    choices: [
      "Argue that the Bracero Program was primarily beneficial for both the United States and Mexico.",
      "Describe the Bracero Program, analyze its complex and often contradictory effects, and note its relevance to contemporary policy debates.",
      "Criticize the United States government for exploiting Mexican laborers during the mid-twentieth century.",
      "Compare the working conditions of Bracero laborers with those of contemporary migrant workers.",
      "Explain the economic factors that led to the creation and eventual termination of the Bracero Program."
    ],
    correctAnswer: 1,
    explanation: "The passage describes the program's origins, discusses its contradictory effects on both countries, and notes its ongoing relevance to modern immigration debates. Choice B captures all three elements. Choice A is one-sided; the passage discusses both positive and negative effects. Choice C is also one-sided. Choice D is not accurate; the passage does not compare with contemporary conditions. Choice E focuses only on economic factors and does not mention termination specifics.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },
  {
    id: "vq42",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "easy",
    passage: passageHistory,
    text: "According to the passage, which of the following was a guaranteed provision of the Bracero Program that was frequently violated in practice?",
    choices: [
      "Workers would receive citizenship after completing their contracts.",
      "Workers would be provided with adequate housing.",
      "Workers could bring their families to the United States.",
      "Workers would receive training in agricultural techniques.",
      "Workers would have access to healthcare facilities."
    ],
    correctAnswer: 1,
    explanation: "The passage states that 'workers were guaranteed minimum wages, adequate housing, and return transportation to Mexico' but that 'these protections were frequently violated: workers often received substandard wages, lived in overcrowded and unsanitary conditions.' Choice B (adequate housing) is explicitly listed as a guaranteed provision that was violated. Choices A, C, D, and E are not mentioned in the passage as provisions of the program.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq43",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "hard",
    passage: passageHistory,
    text: "It can be inferred from the passage that the Bracero Program was repeatedly extended beyond its original wartime purpose primarily because:",
    choices: [
      "The Mexican government demanded its continuation to maintain remittance flows.",
      "Returning workers to Mexico would have caused a diplomatic crisis between the two nations.",
      "American agricultural businesses benefited from the continued availability of low-cost labor.",
      "The U.S. government believed the program was successfully protecting worker rights.",
      "Both countries' economies had become equally dependent on the program's continuation."
    ],
    correctAnswer: 2,
    explanation: "The passage states that the program 'was repeatedly extended due to pressure from agricultural interests' and that 'it supplied cheap labor that kept food prices low and agricultural profits high.' This implies American agricultural businesses lobbied for its continuation because they benefited from cheap labor. Choice C captures this inference. Choice A is not supported; the passage does not say Mexico demanded continuation. Choice B is not mentioned. Choice D contradicts the passage's discussion of rights violations. Choice E is not supported; the passage suggests asymmetric benefits.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq44",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-tone"],
    difficulty: "medium",
    passage: passageHistory,
    text: "The author's tone in discussing the Bracero Program can best be described as:",
    choices: [
      "Nostalgic, expressing longing for a period of effective cross-border cooperation.",
      "Analytical and balanced, acknowledging both the program's benefits and its significant shortcomings.",
      "Harshly critical, condemning all aspects of the program as exploitative.",
      "Indifferent, presenting the facts without any implied evaluation.",
      "Celebratory, praising the program as a model for international labor agreements."
    ],
    correctAnswer: 1,
    explanation: "The author presents both positive aspects (economic outlet, remittances, cheap labor, low food prices) and negative ones (rights violations, wage depression, exploitation patterns). The tone is measured and analytical throughout, using language like 'profound and contradictory effects' and describing the legacy as 'both a cautionary tale...and a model.' Choice B captures this balanced approach. Choice A, C, D, and E each describe a one-sided or extreme tone that does not match the passage.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-tone-application",
  },
  {
    id: "vq45",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-application"],
    difficulty: "hard",
    passage: passageHistory,
    text: "Based on the passage, the author would most likely view a proposed new guest worker program that includes strong enforcement mechanisms for worker protections as:",
    choices: [
      "Futile, because the Bracero Program proved that guest worker programs inevitably lead to exploitation.",
      "Unnecessary, because modern labor markets no longer require cross-border worker migration.",
      "Potentially valuable, since it would address one of the key failures of the Bracero Program while preserving the potential benefits of regulated labor mobility.",
      "Misguided, because enforcement mechanisms would make the program too costly to operate.",
      "Irrelevant to current immigration policy debates."
    ],
    correctAnswer: 2,
    explanation: "The passage describes the Bracero Program's legacy as 'both a cautionary tale about the exploitation inherent in temporary labor schemes and a model for the potential benefits of regulated cross-border labor mobility.' A new program with strong enforcement would address the exploitation (the cautionary tale) while preserving the benefits (regulated mobility). Choice C reflects this view. Choice A is too pessimistic; the author sees potential benefits. Choice B is not supported. Choice D introduces cost concerns not in the passage. Choice E contradicts the passage's final sentence about relevance to contemporary debates.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-tone-application",
  },

  // --- Passage 4: Technology/Innovation (vq46–vq50) ---

  {
    id: "vq46",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "easy",
    passage: passageTechnology,
    text: "Which of the following best describes the main point of the passage?",
    choices: [
      "Quantum computing will soon replace classical computing for all practical purposes.",
      "Quantum computing offers extraordinary theoretical potential but faces significant practical challenges that have so far prevented commercially useful applications.",
      "The primary obstacle to quantum computing is the cost of cooling qubits to near absolute zero temperatures.",
      "Governments and corporations are wasting money by investing in quantum computing research.",
      "Quantum entanglement is the most important scientific discovery of the twenty-first century."
    ],
    correctAnswer: 1,
    explanation: "The passage explains the theoretical promise of quantum computing (superposition, entanglement, exponential capacity) while detailing the practical challenges (decoherence, error correction, no demonstrated commercial quantum advantage). Choice B captures this balance. Choice A is unsupported—the passage says no commercial advantage has been demonstrated. Choice C is too narrow; cooling is one challenge among many. Choice D contradicts the passage's neutral-to-positive tone. Choice E is an overstatement not supported by the passage.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },
  {
    id: "vq47",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "medium",
    passage: passageTechnology,
    text: "According to the passage, which of the following is a consequence of \"decoherence\" in quantum computing?",
    choices: [
      "Qubits become permanently entangled with each other.",
      "The quantum state is destroyed and errors are introduced into computations.",
      "The quantum computer overheats and must be shut down.",
      "Classical bits are converted into qubits at a slower rate.",
      "The computational capacity of the quantum computer increases exponentially."
    ],
    correctAnswer: 1,
    explanation: "The passage defines decoherence as what happens when environmental disturbances occur: it 'destroy[s] the quantum state and introduc[es] errors.' Choice B directly paraphrases this definition. Choice A describes entanglement, not decoherence. Choice C is not described in the passage. Choice D is not mentioned. Choice E describes the benefit of entanglement, not the effect of decoherence.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq48",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "hard",
    passage: passageTechnology,
    text: "The passage implies that current error-correction protocols in quantum computing:",
    choices: [
      "Have been perfected to the point where decoherence is no longer a significant problem.",
      "Are unnecessary because qubits are naturally resistant to environmental disturbances.",
      "Reduce the effective computational power of quantum computers by using a large proportion of available qubits for correction rather than computation.",
      "Work by cooling the quantum computer to increasingly lower temperatures.",
      "Are borrowed directly from classical computing error-correction methods."
    ],
    correctAnswer: 2,
    explanation: "The passage states that 'extensive error-correction protocols...consume the majority of available qubits.' This implies that most qubits are used for error correction rather than actual computation, reducing effective computational power. Choice C captures this inference. Choice A contradicts the passage's description of ongoing challenges. Choice B contradicts the passage's discussion of qubit fragility. Choice D conflates cooling with error correction. Choice E is not mentioned in the passage.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq49",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-structure"],
    difficulty: "medium",
    passage: passageTechnology,
    text: "The passage is organized primarily by:",
    choices: [
      "Presenting a chronological history of quantum computing from its theoretical origins to its current state.",
      "Comparing and contrasting quantum computing and classical computing across multiple dimensions.",
      "Explaining the theoretical principles of quantum computing, describing the practical obstacles, and noting the investment driven by potential applications.",
      "Arguing for increased government funding of quantum computing research.",
      "Presenting a series of arguments against the feasibility of quantum computing."
    ],
    correctAnswer: 2,
    explanation: "The passage follows a clear three-part structure: (1) explains the theoretical principles (superposition, entanglement, exponential capacity), (2) describes practical obstacles (decoherence, cooling, error correction, lack of commercial advantage), and (3) discusses potential applications and investment. Choice C accurately describes this organization. Choice A does not accurately describe the structure—it is not primarily chronological. Choice B is partly correct but misses the obstacles and investment discussion. Choice D and E are one-sided and do not reflect the passage's balanced approach.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },
  {
    id: "vq50",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-tone"],
    difficulty: "easy",
    passage: passageTechnology,
    text: "The author's tone when discussing the potential applications of quantum computing is best described as:",
    choices: [
      "Dismissive, suggesting the applications are purely speculative.",
      "Enthusiastic and unreserved, predicting imminent breakthroughs.",
      "Measured, acknowledging significant potential while noting that practical realization remains uncertain.",
      "Alarmed, particularly regarding the implications for encryption security.",
      "Ironic, implying that the investment in quantum computing is disproportionate to its likely benefits."
    ],
    correctAnswer: 2,
    explanation: "The author acknowledges 'potential applications' like drug discovery and logistics optimization while noting that 'no quantum computer has demonstrated quantum advantage on a commercially useful problem.' The word 'Nevertheless' signals a balanced view. Choice C captures this measured tone. Choice A is too negative; the author acknowledges genuine potential. Choice B is too positive; the author emphasizes unresolved challenges. Choice D focuses too narrowly on encryption and overstates concern. Choice E implies criticism that is not present.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-tone-application",
  },

  // --- Passage 5: Environmental Science (vq51–vq55) ---

  {
    id: "vq51",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "medium",
    passage: passageEnvironment,
    text: "Which of the following most accurately expresses the main idea of the passage?",
    choices: [
      "Ocean acidification is a minor environmental issue that has received disproportionate attention from scientists.",
      "Ocean acidification, caused by increasing atmospheric CO₂, threatens marine ecosystems through its effects on calcifying organisms and can only be addressed by reducing CO₂ emissions.",
      "Coral reefs are the most important marine ecosystems and must be protected from ocean acidification at all costs.",
      "The pH of the ocean has changed so little that marine organisms will easily adapt to the new conditions.",
      "Ocean acidification and climate change are essentially the same problem with the same solutions."
    ],
    correctAnswer: 1,
    explanation: "The passage describes how increased CO₂ leads to ocean acidification, explains the threat to calcifying organisms (corals, mollusks, plankton), discusses cascading ecological effects, and concludes that reducing CO₂ emissions is the only viable mitigation. Choice B captures all these elements. Choice A contradicts the passage's serious tone. Choice C is too narrow, focusing only on corals. Choice D contradicts the passage's emphasis on organisms' sensitivity to pH changes. Choice E is incorrect; the passage explicitly distinguishes ocean acidification from climate change as having different mitigation options.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },
  {
    id: "vq52",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "easy",
    passage: passageEnvironment,
    text: "According to the passage, what percentage of all marine species do coral reefs support?",
    choices: [
      "5 percent",
      "20 percent",
      "25 percent",
      "40 percent",
      "90 percent"
    ],
    correctAnswer: 2,
    explanation: "The passage directly states: 'coral reefs support approximately 25 percent of all marine species.' Choice C matches this figure. The other percentages either refer to different facts in the passage or are not mentioned.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq53",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "medium",
    passage: passageEnvironment,
    text: "The passage implies that the significance of a 0.1 unit decrease in ocean pH is greater than it might initially appear because:",
    choices: [
      "The decrease occurred in less than a century, which is unprecedented in Earth's history.",
      "The pH scale is logarithmic, meaning this seemingly small change represents a 26 percent increase in acidity, and marine organisms require very stable chemical conditions.",
      "Scientists had predicted a much smaller decrease based on their models of CO₂ absorption.",
      "The decrease has already caused the extinction of several marine species.",
      "A 0.1 unit decrease in freshwater pH would have no measurable biological effects."
    ],
    correctAnswer: 1,
    explanation: "The passage explicitly addresses why the seemingly small change matters: 'the pH scale is logarithmic' and 'marine organisms are adapted to remarkably stable chemical conditions that have persisted for millions of years.' The 0.1 unit change translates to a 26 percent acidity increase for organisms that need stability. Choice B captures both of these points. Choice A mentions the timeframe but the passage does not characterize it as unprecedented. Choices C, D, and E are not supported by the passage.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq54",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-structure"],
    difficulty: "hard",
    passage: passageEnvironment,
    text: "The author mentions pteropods primarily in order to:",
    choices: [
      "Provide an example of a species that has already gone extinct due to ocean acidification.",
      "Illustrate how the effects of acidification on small organisms can cascade through marine food webs to affect commercially important species.",
      "Argue that polar ecosystems are more vulnerable to ocean acidification than tropical ecosystems.",
      "Demonstrate that laboratory experiments overestimate the actual effects of acidification on marine organisms.",
      "Compare the vulnerability of pteropods with that of coral species."
    ],
    correctAnswer: 1,
    explanation: "The passage introduces pteropods as 'small sea snails that form a critical base of polar food webs' whose shells dissolve under acidification, then notes they are 'a primary food source for commercially important fish species such as salmon and herring.' This illustrates the cascading effect from small calcifiers to the broader food web and ultimately to species that matter economically. Choice B captures this purpose. Choice A is incorrect; the passage does not say pteropods are extinct. Choice C is not the primary purpose of mentioning pteropods. Choice D contradicts the passage. Choice E is not the author's purpose.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },
  {
    id: "vq55",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-application"],
    difficulty: "hard",
    passage: passageEnvironment,
    text: "Based on the passage, the author would most likely regard a proposal to address ocean acidification through large-scale deployment of solar radiation management technology as:",
    choices: [
      "A promising solution that could effectively reduce the impact of acidification on marine organisms.",
      "An impractical solution due to the prohibitive costs of solar radiation management.",
      "Insufficient, because while solar radiation management may address climate change, it does not reduce the CO₂ emissions that directly cause ocean acidification.",
      "The most effective approach available given that reducing CO₂ emissions has proven politically impossible.",
      "A necessary complement to CO₂ emission reductions in addressing ocean acidification."
    ],
    correctAnswer: 2,
    explanation: "The passage's final sentence states: 'Unlike climate change, which can theoretically be addressed through carbon capture or solar radiation management, ocean acidification can only be mitigated by reducing CO₂ emissions at their source.' This explicitly separates ocean acidification from climate change in terms of solutions. Solar radiation management may help with climate change but not with acidification. Choice C directly reflects this distinction. Choices A and E contradict the passage. Choice B introduces cost, which is not discussed. Choice D contradicts the passage's clear statement about the only viable solution.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-tone-application",
  },

  // --- Passage 6: Arts/Culture (vq56–vq60) ---

  {
    id: "vq56",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-detail"],
    difficulty: "medium",
    passage: passageArts,
    text: "According to the passage, W.E.B. Du Bois believed that art should primarily serve as:",
    choices: [
      "A means of entertainment for the African American community.",
      "A vehicle for political advocacy and racial uplift.",
      "An expression of individual artistic freedom unconstrained by social expectations.",
      "A bridge between African and European artistic traditions.",
      "A tool for documenting the historical experience of African Americans in the rural South."
    ],
    correctAnswer: 1,
    explanation: "The passage states: 'W.E.B. Du Bois, who championed art as propaganda, clashed with younger artists who resisted prescriptive expectations.' The passage also describes the tension between those who saw art as a 'vehicle for political advocacy and racial uplift' and those who wanted artistic freedom. Du Bois is clearly aligned with the former group. Choice B matches this description. Choice C describes the opposing position of the younger artists. Choices A, D, and E are not attributed to Du Bois in the passage.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq57",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "medium",
    passage: passageArts,
    text: "The passage implies that the Harlem Renaissance's impact on the Civil Rights Movement was primarily:",
    choices: [
      "Direct, through the political organizing activities of Renaissance artists.",
      "Cultural, by demonstrating the intellectual sophistication of African Americans and undermining the justifications for racial discrimination.",
      "Financial, through the wealth generated by successful African American artists and writers.",
      "Negligible, because the Renaissance was primarily an artistic movement with no political implications.",
      "Negative, because the movement's internal divisions weakened the broader fight for civil rights."
    ],
    correctAnswer: 1,
    explanation: "The passage concludes by stating that the Renaissance 'challenged the pseudoscientific racial hierarchies that had justified segregation and discrimination, laying cultural groundwork for the Civil Rights Movement.' This was a cultural impact—changing perceptions of African American intellectual capacity. Choice B captures this. Choice A is not supported; the passage emphasizes cultural, not organizational, impact. Choice C is not mentioned. Choice D contradicts the passage's final sentence. Choice E is not supported.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-inference-detail",
  },
  {
    id: "vq58",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-structure"],
    difficulty: "hard",
    passage: passageArts,
    text: "The author discusses the ideological tension between Du Bois and younger artists primarily to:",
    choices: [
      "Argue that Du Bois was the most important figure of the Harlem Renaissance.",
      "Demonstrate that the movement failed to achieve its cultural objectives due to internal divisions.",
      "Show that the Harlem Renaissance contained diverse and sometimes conflicting visions of the role of African American art.",
      "Criticize the younger artists for failing to use their work to advance civil rights.",
      "Explain why the Harlem Renaissance ended in the mid-1930s."
    ],
    correctAnswer: 2,
    explanation: "The passage states the movement 'was far from monolithic in its vision' and describes the tension between art-as-advocacy and art-as-free-expression. This discussion illustrates the intellectual diversity within the movement. Choice C captures this purpose. Choice A does not reflect the passage's treatment of Du Bois as one voice among many. Choice B is too negative; the passage does not say the movement failed. Choice D does not match the passage's balanced treatment of both sides. Choice E is not supported; the passage does not connect the tension to the movement's end.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },
  {
    id: "vq59",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-tone"],
    difficulty: "easy",
    passage: passageArts,
    text: "The author's attitude toward the Harlem Renaissance is best described as:",
    choices: [
      "Critical, focusing primarily on the movement's failures and limitations.",
      "Admiring, emphasizing the movement's cultural significance and lasting impact.",
      "Neutral, simply cataloging the major figures and events without evaluation.",
      "Skeptical, questioning whether the movement deserves its reputation.",
      "Nostalgic, lamenting that no comparable artistic movement has occurred since."
    ],
    correctAnswer: 1,
    explanation: "The author describes the Harlem Renaissance as a 'profound reimagining of African American identity,' discusses its intellectual richness, and notes its lasting impact on both arts and civil rights. The tone is clearly positive and appreciative. Choice B captures this admiring stance. Choice A does not match the positive language. Choice C is incorrect because the author clearly evaluates the movement positively. Choice D contradicts the passage's positive framing. Choice E introduces nostalgia and a comparison not present in the passage.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-tone-application",
  },
  {
    id: "vq60",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-main-idea"],
    difficulty: "easy",
    passage: passageArts,
    text: "Which of the following best expresses the central theme of the passage?",
    choices: [
      "The Harlem Renaissance was primarily a musical movement that influenced jazz and blues.",
      "The Harlem Renaissance was a multifaceted cultural movement that reshaped African American identity, generated lasting debates about the purpose of art, and laid groundwork for later civil rights advances.",
      "The Great Migration caused economic hardship for African Americans who moved to northern cities.",
      "W.E.B. Du Bois was the most influential figure of the Harlem Renaissance and shaped the movement's direction.",
      "The Harlem Renaissance failed to achieve its goals because of internal disagreements among its leading figures."
    ],
    correctAnswer: 1,
    explanation: "The passage presents the Harlem Renaissance as far more than a literary movement—it was a 'profound reimagining of African American identity,' involved debates about art's purpose, and 'challenged the pseudoscientific racial hierarchies that had justified segregation,' laying groundwork for the Civil Rights Movement. Choice B captures all of these elements. Choice A is too narrow and inaccurate—the passage emphasizes writers and intellectuals, not primarily musicians. Choice C focuses on the Great Migration, which is background context, not the central theme. Choice D overstates Du Bois's role; he is presented as one voice in a debate. Choice E is not supported; the passage does not say the movement failed.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "verbal-rc-main-idea-structure",
  },
];
