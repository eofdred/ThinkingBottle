---
created: 2025-08-22
tags:
  - psychology
  - artificial-intelligence
  - life
  - sociology
  - technology
---
I prepared this framework to use the features of the Gemini language model. As of late 2025, it would be quite difficult to apply this framework with an artificial intelligence tool other than Gemini. In Gemini, you can add a text editor to the knowledge base of a chatbot. This is a feature present in all alternative models anyway. But the difference with Gemini is that if the file you upload is in Google Docs format, when you edit that file, the file in the chatbot's memory is also updated. Therefore, making changes without reloading the file stops being a chore.

In this framework, I called the tasks that need to be followed sequentially "tasks" and put them into writing in a certain order. I will explain what these will be useful for later.

[](https://blogger.googleusercontent.com/img/a/AVvXsEjdsVB2WJaXFDSYWr7lZJhgqw_0wfaK3PIOVSMP5MA1WziJcUn_n1EnFLiupuVhsToiXnDw-wr3qOeeOFFRHefE7y1oiYtCTJp9NxZ0qkxyOaf418BUl1ScQWlpSKj08K50_DCGjm0bGA-FGuaYOCp83ht5aGjjbpR5vzTsqIgoPKmX2kDNxmwEZOJbT5E)![](https://blogger.googleusercontent.com/img/a/AVvXsEjdsVB2WJaXFDSYWr7lZJhgqw_0wfaK3PIOVSMP5MA1WziJcUn_n1EnFLiupuVhsToiXnDw-wr3qOeeOFFRHefE7y1oiYtCTJp9NxZ0qkxyOaf418BUl1ScQWlpSKj08K50_DCGjm0bGA-FGuaYOCp83ht5aGjjbpR5vzTsqIgoPKmX2kDNxmwEZOJbT5E)

Task 1: Copy and send the following prompt to Gemini 2.5 Pro:

> I would like to conduct a character analysis using the Big Five framework. I want you to ask the relevant questions one by one, asking follow-up questions before moving on to the next question, and demanding specific examples to ensure you have enough insight for each question. When you complete the assessment, prepare a detailed report. This report should include the assessment for each of the five domains, all details, and quote my examples where necessary.

Note: It would be easier if you ask for the report in Gemini's "Canvas" format after having enough conversation, but it's not mandatory.

Task 2: Paste the report you obtained into a Google Docs document named "Character analysis". Change the name of the tab where this pasted report is located to "Big Five Framework". After this, every different analysis added will be a new tab.

Task 3: Create a Gem named "Character Analysis" from Gemini and add the Google Docs file you prepared above to the knowledge base of this gem. Paste the text below into the prompt section of the Gem.

> You know a lot about me and you will act like a mentor, an advisor or a therapist which ever makes sense for my question. You will help me discover myself and just answer my simpler questions. Check "Character profile" document carefully and if our discussions shed light to my character profile in a meaningful way, ask me to do amendments to the document and guide what to add where. If the topic we are discussing is not about enriching the character profile, refrain from citing my character traits unless it is asked. Think about this example, If i asked you i would like a particular game, your answer might contain some core traits about my character but for the followup questions, you shouldn't repeat analysis details and cite deep character traits every single time. Structure your output to be read easily. Use horizontal lines and Hierarchical headings when necessary. Most important think is that whole conversation must be in Turkish language.

Task 4: Start a new conversation with this gem and write the following prompt as a new message:

> I would like to conduct a character analysis using the HEXACO framework. Use the "Character Analysis" document in the knowledge base to fill in the relevant fields in the HEXACO analysis and ask me questions that do not overlap with the existing information. I want you to ask the relevant questions one by one, asking follow-up questions before moving on to the next question, and demanding specific examples to ensure you have enough insight for each question. When you complete the assessment, prepare a detailed report. This report should include the assessment for each of the six domains of the HEXACO framework, contain all details, and quote my examples where necessary.

Task 5: Create a tab named HEXACO in the character analysis document and paste this report.

Task 6: Start a new conversation with this gem and write the following prompt as a new message:

> I would like to conduct a character analysis using the "Enneagram of Personality Framework". Use the "character analysis" document in the knowledge base to fill in the relevant fields in the analysis and ask me questions that do not overlap with the information you will obtain from there. If you have enough information about me to fill out a report, generate a report. This report should include all details regarding the Enneagram of Personality Framework and quote my examples where necessary.

Task 7: Create a tab named Enneagram of Personality in the character analysis document and paste this report.

Task 8: Start a new conversation with this gem and write the following prompt as a new message:

> I would like to conduct a character analysis using the MBTI Framework. Use the Character Analysis document to fill in the relevant fields in the analysis and ask me questions that do not overlap with the existing information. If you have enough information about me to fill out the report (you probably do), generate a report.

Task 9: Create a tab named MBTI in the character analysis document and paste this report.

**Congratulations! You now have solid baseline data for your character traits. You can now use the Gem you created to systematically profile your secondary traits.**

Here are some examples:

- Analyze my political profile
- Analyze my Social Ecosystem
- Analyze my daily routines
- Analyze my Personal Philosophy and Ethical Framework
- Analyze my physical - physiological - health system
- Analyze my current professional field
- Analyze my professional goals and trajectory
- Analyze my Personal Goals

Don't forget to add each report as a new tab to the character analysis document before moving on to a different analysis.

#### Utility of this approach

There are some potential benefits to having a Gem that has systematic knowledge about you. Here are some prompt examples:

- Prepare a report about my weaknesses and create a realistic action plan to overcome these weaknesses in my daily life.
- Prepare a stress and resilience handbook for me to understand my unique stress responses, leverage my innate strengths, and develop advanced resilience protocols for optimal functioning and personal growth.
- Prepare a report for my ideal collaborative environment where my unique mental operating system can truly thrive.
- What would be an interesting lifestyle change for me?

### Social ecosystem analysis

You can copy this prompt:

> Analyze my social ecosystem and prepare a report. The report should start with an introduction, followed by the detailed analysis, the conclusion section, and finally a separate report for each person in my social ecosystem.

**But before sending this prompt, write a long text about your close friends (the inner core of your social ecosystem).** Structure this text by adding the person's name and a paragraph under their name describing your relationship with that person. This paragraph should include the origin and history of your relationship, the function and nature of this relationship (their roles in your life), your interaction style (the depth or style of your conversations), and the energy dynamics (does the relationship feel productive and easy to maintain, or does it require more active social energy).

Add this report as a new tab named "Social Ecosystem Analysis" to the character profile document. This can be useful in the future when looking for new ideas or exploring specific strengths or weaknesses in your relationships.

### Art profile

Create a **Google Sheets** file and open 4 tabs in it. These tabs should be named "Movies", "Series", "Books", and "Games". In each tab, use the first column for the name of the work and the second column for the score you give it (preferably a scoring from 1 to 10).

When you are finished, you can add this to the knowledge base of the Gem you created, or without doing that, start a new conversation, add it to the conversation, and copy this prompt:

> Prepare a detailed profile about my artistic preferences. Analyze my taste in books, movies, series, and games. Establish connections between my preferences and my identity using excerpts from my personality analyses and examples of scores I gave to specific works.

You should add this report as a new tab named "Art Profile" to the character profile document. Now, when you are not sure if you will like a particular book, just ask Gemini. It will prepare a detailed analysis for you, predict whether you will like it or not, and more importantly, why you will or will not like it.

### Who would you be in such-and-such story

You might like a specific universe like Middle-earth, Dungeons and Dragons, or Warhammer 40k, and you have probably seen many simple quizzes on the internet like *"which Lord of the Rings character are you?"*. The prompts below can inspire you to generate narrative content tailored to your interests.

**Text-based prompts:**

- Imagine me as a Middle-earth character. Write a full character sheet, backstory, and current quest. Use my social ecosystem analysis to create a fellowship of companions reflecting my friends.
- Design a dystopian society based on my character profile. Detail its governing principles, social structure, and things citizens are forbidden to do. Explain why this society would be a personal hell for me and which fundamental principles of my ethical framework it violates.
- Draft my professional biography for a futuristic sci-fi setting. It should align with my job, professional trajectory, and personal goals. Use my character traits to explain how I am a respected expert in this future world.
- Design a new education system from scratch. Explain its curriculum, teaching methods, and disciplinary policies. The system's purpose and design should reflect my core values and professional trajectory.

**Image-based prompts:**

- Generate an image showing me as a DnD character in my headquarters.
- Generate an image of a city. It must be obvious that the city is ruled by me. It should reflect my political and philosophical views.
- Generate a medieval map depicting my character and my inner desires.
- Generate a top-down, detailed map of a futuristic city that is a living representation of my political and philosophical beliefs. Make sure the city's infrastructure and architecture are based on my core values.
- Generate an image of my ideal personal sanctuary, headquarters, or workshop. The design of the space and the elements within it should reflect my character profile. The image should also give hints about my core motivations and ongoing creative projects.
- Generate an image of my ideal personal sanctuary. The design of the space and the elements within it should reflect my core personality traits.
