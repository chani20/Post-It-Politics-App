# post-it-politics

We built this project for the TechTogether Boston hackathon.

## Inspiration

**Dear Future Me,** 

The Election results are in and it shows America is more divided than ever. How will we succeed if we are divided? Isn't the proverb, **"United we stand, divided we fall"**?

Does the government make good decisions for us, our community, our country, our future? We're not sure. Post-it politics aims to make a difference, by condensing political information and bringing candidates to your living room via Augmented Reality. **We hope with more informed voters, our country can only grow stronger.**

__________________________________________________________

_As a first time voter in any election, **I found myself struggling to find reliable, concise information about the candidates, especially for local elections**. Mass media provides so much information, but it can be extremely overwhelming, conflicting, and only focused on a few candidates—most of which were running for national seats. Local elections are just as important, yet only 27% of eligible voters participate. These local leaders are people who directly impact our community and can even be referred to as our “ghost family” (they make decisions that affect our lives daily), yet as a nation, we are not taking advantage of the opportunity to have our say in this, and the media is not doing enough to make sure people are well-informed about these races. But, with so much information out there and with technology advancing every single day, we aim to create **a way to make information about candidates accessible, concise, and reliable for all elections**._

## What it does

Post-it Politics **condenses political information visually** and **brings candidates to your living room via Augmented Reality**.  We showcase a candidate’s stance on the **Top 5 topics US citizens are most concerned about**. 

#### How it works

* We start by using the **user’s address to determine their district**, which directly affects what is on their local ballot and what candidates they learn about.

* After we know their district, we **generate a ballot based on the upcoming elections for their area**. From here, the user can choose which election they’d like to view the candidates for. 

* They are then brought to a page that **lists all of the candidates and a QR code for each one**. Using a phone, the user can scan each candidate’s QR code to bring them to their living room using **AR powered by EchoAR**. 

* They can see the candidate, accompanied by **five concise, reliable sticky notes we call 'Political Platform Post-its'** focused on some of the most pressing issues to date. The information provided on the sticky notes is populated through web scraping and condensing the information on [knowyourvote.io] (knowyourvote.io). 

`NOTE:` We also provide **UI for the candidates** to directly input their information and stances as opposed to going with the web scraped data. 

Post-it Politics is **personalizing the voter’s experience** and opening ways for candidates to connect with their voters in a fair and balanced way.  

## How we built it

The votes were cast for the **election of the 46th POTUS**. This momentous event, combined with our team's wishes to condense dense information visually, create a cloud application, and to use EchoAR, gave birth to Post-It Politics.   

We story-boarded our ideas on `Figma`, built the website with `CSS`, `HTML` and `JavaScript`, web scraped knowyourvote.io (a non-partisan, factual information website that uses only primary sources) using `Node.js`, and used `EchoAR` to bring candidates to voter’s homes via Augmented Reality. 

It is important to note that some features are still in progress and that we hope to fully flesh out our idea in the months to come to make sure it is working as we envisioned. For example, we focused our attention towards **NYC's District 14** elections for the prototype that is shown; **in the future, we hope to have a fully working platform for any address in the United States**.

## Challenges we ran into

Learning new software and languages and making it work was definitely a struggle. This included needing to learn CSS Grid, EchoAR, and Unity (although Unity did not end up in our final submission). Web-scraping was also a challenging task, and we did not have enough time to fully use it in the way we wanted; we are still investigating ways to **transfer web scraped data into a 3-D model object**, and have not found an answer yet. The current state of the project is in no way fully-automated at this point, but this is our main goal for the future. 

In addition, one of our main goals was to **eliminate bias**, but this is an extremely difficult task to do. Along the way, we were introduced to  [knowyourvote.io] (knowyourvote.io), [allsides](allsides.com), [vote411](vote411.org) and [ballotpedia](ballotpedia.com) which all served to be great resources.

## Accomplishments that we're proud of

* **Building community**
A good community is a community represented and governed fairly. We believe that we achieved this by giving all candidates a voice and all users a chance to get to know the people that have the potential to greatly impact their lives. 

* **Resourcefulness**
We tried to incorporate as many of the resources available to us at this hackathon, from EchoAR, Domain.com, to the excellent mentors that volunteered!  We wanted to give a **big shout out to all the TechTogether mentors and organizers but especially mentors Jenna, Dan, Victoria, Ali, Chris and Ken** who patiently spent countless hours teaching us programs we had no clue about.  

* **Guided by build-ability**
We tried very hard to keep to the constraints of build-ability and believe we made a product that is just that.  

* **Built a product that people need**
One of our mentor’s partners, Ceylon Rowe completed her first run for Massachusetts House of Representatives 12th district seat. He remarked that Ceylon would have loved this project, as it would have **evened the playing field** as a **new candidate running against an incumbent**.  

* **Challenge the way people vote by offering new pathways**
We noted that people tend to vote like their neighbors and/or their family.  Soundbites are heard more often then real content. We wanted to challenge these voting patterns by offering a digestible new way to **meet your candidates in the privacy of your own home** and we think we came up with a viable solution to do this.  

* **Graphics**
We are proud of the overall design and UI—the hours spent learning **CSS Grid** paid off!

## What we learned

Maddie learned a whole lot of **CSS**, as our website was mainly built off this language and she had very limited experience with it. This was Maddie’s first ‘real’ hackathon.  Ishani and Anita learned a huge dose of **Unity and EchoAR**, thanks to TT’s mentors!  Ishani also picked up **web scraping, API and node.js skills**. Ayana, the team's master at **graphics** did an excellent job visualizing our concept in a modern and attractive way and also helped code our product.  Ayana also presented our product in a professional manner. However, she is terrified of speaking and presenting but took the leap to create the final video for our submission. Anita honed her **Figma** skills, assembled this team, and kept the team on track to be ahead of schedule. She also contributed to the presentation and oversaw the **EchoAR build**.

## What's next for Post-it Politics

* **Candidate Video Tutorial** A video to help candidates understand the benefits of Post-it Politics and how to use it.  

* **Back-end improvements** Writing the code to process inputted home addresses to generate a ballot for their local races. 

* **Addressing implicit bias** Reveal a candidate's image after post-its are read so bias is not made based on their looks.  

* **User Log-In Page** This will give users the capability to track and remember their vote choices.

* **Resource Post-it** Curated links to learn more on unbiased websites like [allsides] (www.allsides.com) or  [knowyourvote.io] (knowyourvote.io).

* **Link to Ballot Status Website** Points to your county's Supervisor of Election's website where you can check if your ballot has been sent, received, and/or counted in real-time; this adds easy access to increased accountability for the voting process.

* **Building relationships with related organizations** One example would be [living room conversations](https://livingroomconversations.org) where people have the opportunity to engage in civil conversations/discussions to process ideas and thoughts on important issues. 

* **To be featured on AOC’s Twitter Page!**
