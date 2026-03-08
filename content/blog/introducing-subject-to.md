+++
title = "Introducing Subject To"
date = 2026-03-08T09:18:42+00:00
draft = false
template = "blog/page.html"

[taxonomies]
authors = ["Gabriel Stechschulte"]

[extra]
lead = "A unified platform for developing and deploying policies used to solve sequential decision problems in business contexts."
math = true
+++

Every significant business decision—how much inventory to stock, what price to set, when to invest—is made sequentially under uncertainty with new information arriving after every decision. These are **sequential decision problems**. 

The tools organizations reach for to solve them are either: (a) borrowed from communities that each solve a narrow slice of a sequential decision problem in isolation—operations research, machine learning, reinforcement learning, stochastic programming, optimal control—each with its own language and assumptions, or (b) reduced to heuristics and gut instinct because no framework is accessible to practitioners.

`Subject-To` provides a standardized framework for modeling and solving sequential decision problems under uncertainty. The framework focuses on a _model first, then solve_ mentality resulting in a two layer approach to solving such problems.

1. **Modeling**. Develop models of your system and uncertainty.
2. **Policy design**. Design and identify the right type of decision rule (policy) for the problem.
