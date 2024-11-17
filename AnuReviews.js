const reviews = [
    {
        name: "Rohan",
        date: "4 months ago",
        rating: 5.0,
        comment: "We had the pleasure of working with Anusha Sumugam for our home loan. Throughout the process, she provided clear guidance and transparent information. Anusha was attentive to our needs as first-time homebuyers, leveraging her extensive experience to explain the intricacies of the underwriting process and ensure the loan approval. Working with her was a pleasure, and we look forward to collaborating with her again in the future!"
    },
    {
        name: "Khalid Hussain",
        date: "5 months ago",
        rating: 5.0,
        comment: "I’m writing to give a big shoutout to Anusha, who has been an amazing loan officer. She made my loan application process smooth and stress-free with her professionalism, expertise, and above all, her patience. From our first meeting to the final approval, Anusha was there every step of the way. She took the time to explain all the details and options, making sure I understood everything. Her knowledge of the financial world is impressive, and she broke down complex info into easy-to-understand bits, which I really appreciated. What really stood out was Anusha's patience. No matter how many questions I had, she was always calm and ready to help. She went above and beyond to address my concerns and make sure I felt confident throughout the process. Thanks to Anusha's hard work, I got a loan that fits my needs perfectly. I highly recommend Anusha to anyone looking for a reliable, knowledgeable, and patient loan officer. She’s a real asset and a true professional."
    },
    {
        name: "Shirish",
        date: "6 months ago",
        rating: 5.0,
        comment: "We received professional and helpful service on our first home purchase. The level of care, attention to detail, and professionalism demonstrated by Anusha Sumugam and team far surpassed my expectations. Anusha was easy to talk to and made sure we understood everything that was presented to us. Anusha really knows her stuff, very helpful, responsive, but beyond that, she also suggested better options to navigate buying a house. Anusha kept the whole process easy, and we were kept informed the whole time of transaction. We will absolutely use Anusha again in the future."
    },
    {
        name: "Chakri",
        date: "10 months ago",
        rating: 5.0,
        comment: "Thanks Anusha for providing smooth and stress-free loan process. Answering the details of the process. She explained every step of the mortgage process and explaining the reason for every document requested from me. She is always friendly, and she was always available to answer every question. I will strongly recommend Anusha to anyone in the market for a mortgage needs."
    },
    {
        name: "Prashant Kumar",
        date: "1 year ago",
        rating: 5.0,
        comment: "I recently worked with Anushal Ensure Home Loans LLC. she always took the time to explain elements of the process that needed close attention to detail and maintain communication thoroughly. She provided timely information on market conditions and rates, monitored the progress of the entire process, identified potential hurdles, and offered possible solutions. She is very professional and committed. she ensured that our whole loan process went through ‘smoothly. She was always there to answer our questions. She was very patient and understanding. I'll definitely recommend her to my friends. Thank you very much Anusha and team of Ensure Home Loans Lc."
    },
    {
        name: "Vidhya Joshi",
        date: "1 year ago",
        rating: 5.0,
        comment: "We had an opportunity to connect with Anusha Sumugam for our home loan. Working with her was a very good experience. She not only suggests various different options to avail loan but also walks through each step like a true friend. There were times when we would call her late evening or late night to clarify few things and every time she would acknowledge us with ease and smile. I would highly recommend her for anyone who is actively shopping around."
    },
    {
        name: "Prashant",
        date: "1 year ago",
        rating: 5.0,
        comment: "I recently worked with Anusha. she always took the time to explain elements of the process that needed close attention to detail and maintain communication thoroughly. She provided timely information on market conditions and rates, monitored the progress of the entire process, identified potential hurdles, and offered possible solutions. She is very professional and committed. she ensured that our whole loan process went through smoothly. She was always there to answer our questions. She was very patient and understanding. I'll definitely recommend her to my friends. Thank you very much Anusha."
    },
    {
        name: "Shreyas",
        date: "1 year ago",
        rating: 5.0,
        comment: "Anusha was great to work with. She helped me close my home on time, even though there were only three weeks to close from the date of offer acceptance. Also, she is very responsive and will answer all your questions, which has helped me a lot since I was the first homebuyer. I would highly recommend her services."
    },
    {
        name: "Susheel",
        date: "1 year ago",
        rating: 5.0,
        comment: "Thank you Anusha for helping in every step of our loan process and explaining us in very minute detail. “I am very thankful for Anusha’s professional, responsive and honest assistance with the whole mortgage process from beginning to end. She made herself available to me via any method of my choice - email, business phone or cell phone, which I appreciated and took advantage of. She even stayed in touch with me during her emergency travel to India. I am grateful for all of Anusha’s work she devoted to my family's purchase of this home. I truly recommend Anusha to everyone who are willing to buy their dream home."
    },
    // Additional reviews will be added here in the same format. Only the first 10 are shown for brevity.
{
        name: "Bhavesh P",
        date: "1 year ago",
        rating: 5.0,
        comment: "Anusha is a true professional. She is very detail-oriented and guided me through the entire process step-by-step. During my transaction, Anusha had a personal emergency arise that required her full attention, and even through that, she always took the time to explain elements of the process that needed close attention to detail and maintain communication thoroughly. She provided timely information on market conditions and rates, monitored the progress of the entire process, identified potential hurdles, and offered possible solutions. Due to her diligence and transparency, the process was painless and went smoothly. I would highly recommend her for your mortgage/financing needs. She is very easy to work with and offered tailored solutions to fit my needs. Thank you for all your assistance. I truly appreciate it very much."
    },
    {
        name: "User",
        date: "1 year ago",
        rating: 5.0,
        comment: "Thank you Anusha for helping in getting our dream home. You have explained each and every step of the process very nicely as this is our first home. You are always there for any clarifications and provided at most support and guidance throughout the process. Thank you once again."
    },
    {
        name: "George H.B.",
        date: "1 year ago",
        rating: 5.0,
        comment: "We are so thankful to you Anusha for our dream home. We are enjoying every bit of it. It was a small loan but you treated us like any other million dollar home. Appreciate you being so humble and hand holding us entire process. You made us feel so comfortable with your attitude and support. Wish you well for all the good work you do."
    },
    {
        name: "Ashwini",
        date: "1 year ago",
        rating: 5.0,
        comment: "Very fortunate to have found her in our mortgage loan process. I did heavy shopping would have interviewed 7 or 8 loan officers not just for rates but matching caliber. Trust me you will never get disappointed in both. A professional who will explain what to see when shopping and so transparent on how this structure of loans work that not all the loan officers tell. We could be very confident because of her professionalism that comes from her experience and amazing work ethics. Available to answer any silly questions very patiently. Thanks for all your help, sorry if we overused your time. But worth it!"
    },
    {
        name: "Nathan",
        date: "1 year ago",
        rating: 5.0,
        comment: "Worked with Anusha Sumugam, she is a thorough professional and knows what she is doing. Always confident, calm and composed and more importantly a friendly yet professional approach. Small tips here and there she gives are very useful and helpful in expediting the process. She is brutally transparent and will only tell what she sees no sugar coated talks and no over promising. Best wishes Anusha, keep up your niche that you have created for yourself. Will definitely refer you to my friends and family."
    },
    {
        name: "Manjula Srinivasan",
        date: "1 year ago",
        rating: 5.0,
        comment: "Anusha was great in educating us and made sure communication kept flowing in every step of the process. Even though she was in a family situation, she still ensured that our loan process was proceeding smoothly. We felt at ease when we reached out for assistance because of her friendly and approachable attitude, and she always responded promptly and with genuine care. She patiently helped me comprehend the entire process and numbers, and the process was tailored to my needs and comfort level. She was literally an angel sent to us and I would highly recommend her for hassle free mortgage lending process. Her traits are: Every issue was handled with expediency and confidence. I felt like I was her only client. She was transparent and honest Proactive in educating us with the rates Prompt and Patience in responding to any queries we may have during our lending process. Thank you Anusha for your wonderful support and guidance in our mortgage lending process."
    },
    {
        name: "Kamal",
        date: "1 year ago",
        rating: 5.0,
        comment: "Anusha did a great job in guiding us through our mortgage lending process. Though she was going through a family situations, she still continued to support us in our lending process until the day of our closing. She was an angel sent to us and we highly recommend her for your hassle free lending process. Her traits Communication kept flowing in every step of the process. Transparent and honest. Every issue was handled with expediency and confidence. Thank you for your wonderful guidance and support in our lending process. Manju"
    },
    {
        name: "Vinay Madenur",
        date: "1 year ago",
        rating: 5.0,
        comment: "I recently worked with Anusha. She is very professional and committed. In spite of personal problems and various distractions, she ensured that our whole loan process went through smoothly. She was always there to answer our questions. She was very patient and understanding. I'll definitely recommend her to my friends. Thank you very much Anusha."
    },
    {
        name: "Sumit",
        date: "1 year ago",
        rating: 5.0,
        comment: "I had the pleasure of working with Anusha who played a crucial role in securing our home mortgage at a decent rate, despite the challenges of the current market. Her market knowledge and field experience were evident from the start, as she expertly navigated the intricacies of the lending landscape. She provided us with valuable insights and guidance, ensuring we made informed decisions that aligned with our financial goals. What truly set her apart was her incredible patience throughout the process. She took the time to explain complex concepts, answer our countless questions, and address any concerns we had. Her friendly and approachable attitude made us feel comfortable reaching out for assistance, and she always responded promptly and with genuine care. Her dedication to finding us the best possible mortgage terms was unwavering. She tirelessly explored various options, negotiating on our behalf and leveraging her industry connections. Her commitment to our financial well-being was evident, and we felt supported and confident in her expertise every step of the way. I wholeheartedly recommend Anusha to anyone seeking a knowledgeable, experienced, patient, and friendly professional who will go above and beyond to secure the best mortgage terms."
    },
    {
        name: "Saurab Gupta",
        date: "1 year ago",
        rating: 5.0,
        comment: "I recently got my primary loan financed with Anusha. To set the context, this was not a typical conventional loan, I had jumbo loan with me trying to figure if I can get a 3/5 year ARM or any other loan options. She had gone above and beyond to explain me all my options and what works best in my interest. At all times, it felt I had a friend and well wisher more than a white color agent who isn't interested in my condition and / or uncertainties. She not only provided me with the best loan terms but also walked with me all the way till closing to get me all set to get financed. To be honest I did revalidate my loan disclosure with a few more folks and got a thumbs up from everyone. I hope to keep working with Anusha for any future ventures but also recommend her strongly for anyone shopping around."
    },
    // Additional reviews will be added here...
 {
        name: "Arvind",
        date: "1 year ago",
        rating: 5.0,
        comment: "I have recently worked with Anusha Sumugam for my home loan and she has done an excellent job to ensure that I had a smooth and stress-free loan process. She has been in touch with me all through the process, answering all the questions and clarifications needed. She was upfront with all the costs and numbers to the dot, a level of transparency and the command on what she is doing. Anytime any question you throw she will have an answer and will have a solution with valuable suggestions. She is very patient, listens to all the questions and makes sure we understand the complete loan process. I will recommend her to all my friends and colleagues and family. Keep doing the good work. Thanks Anusha."
    },
    {
        name: "Dinesh Reddy",
        date: "1 year ago",
        rating: 5.0,
        comment: "From the moment I contacted Anusha, she was professional, friendly, and made me understand the entire lending process. Even though Anusha knew that the moment I was signing for a new build, they wouldn't allow outside lenders, she never backed off from answering my silly questions. This made me believe that she doesn't care only about money or business, but also about the customer and the service. I hope to work with her in the future and strongly recommend her to anyone who is in the market and looking for any lending service."
    },
    {
        name: "Sean",
        date: "1 year ago",
        rating: 5.0,
        comment: "I had the pleasure of working with Anusha to finance my home loan. From day one, she demonstrated a commitment to make this an easy process and get me the most optimal rates. She is prompt and thorough with her responses. She jumped in even when it’s not her responsibility to keep things moving. I was dreading the closing as I thought I may have to keep supplying documents until the last minute. But Anusha made this process a very painless and enjoyable. I am very appreciative of what Anusha did for me and my family. I would highly recommend her for any home loan needs."
    },
    {
        name: "Dhananjay",
        date: "1 year ago",
        rating: 5.0,
        comment: "Anusha Sumugam is the best mortgage professional I could find. Like everyone says, she is 'extremely transparent', no sugar-coated talks, sets expectations very well. Very clear communication and delivers what she promises most of the time its more than what she promises. I say this because I have closed multiple loans with her. Highly recommend her."
    },
    {
        name: "Sabita",
        date: "1 year ago",
        rating: 5.0,
        comment: "Anusha Sumugam has been extremely patient and very honest while structuring a loan that fits my scenario. You will find her commitment at a different level. She will explain each and every number and elements in the process with extreme professionalism. Loved working with her and would be my go to lender."
    },
    {
        name: "Ganesh",
        date: "1 year ago",
        rating: 5.0,
        comment: "I recently had the pleasure of working with Anusha Sumugam who went above and beyond to ensure that I had a smooth and stress-free loan process. From day 1 of my first interaction with her, there were no salesy talks from her. She was upfront with all the costs and numbers to the dot, a level of transparency and the command on what she is doing. She will ensure that her client has benefit out of a loan structure, not because her competitors are offering. Truly something that we miss when we shop around. Anytime any question you throw she will have an answer and will have a solution with valuable insights, I would have never known otherwise. She is very patient and so humble despite me having trust issues initially. Today I proudly recommend her to all my friends and colleagues and family. Truly the best in the business! Thanks Anusha."
    },
    {
        name: "Gayatri",
        date: "1 year ago",
        rating: 5.0,
        comment: "Being a first-time home buyer, I didn't know the loan process could be so simple. All thanks to Anusha for taking care of us throughout the whole process. I definitely recommend Anusha if you are wanting to hand over your loan process to someone reliable and forget about it, Anusha will make sure it gets done the right way."
    },
    {
        name: "Mimoh",
        date: "1 year ago",
        rating: 5.0,
        comment: "Great rates. Great responses. She will take care of all the details as if she is buying a home for herself and will make everything go smoothly. She knows what to do exactly. Leave everything in her hands and let it go until done and will not disappoint at all. Loved working with her and definitely recommend her with all my other friends of it looks for small details all over to make everything go smoothly she knows what to do exactly you feel like it's you are not doing anything you leave everything in her hands and let it go until done and will not disappoint it at all love working with her and definitely recommend her with all my other friends."
    },
    {
        name: "Anoop Jobs",
        date: "1 year ago",
        rating: 5.0,
        comment: "I worked with Anusha for my mortgage loan. Anusha was really quick and very helpful. She got me the best interest rate. Happy working with Anusha. Thanks Anusha."
    },
    {
        name: "Abhinav",
        date: "1 year ago",
        rating: 5.0,
        comment: "Anusha is one of the best mortgage officers I’ve ever worked with, unmatched knowledge and experience, ever ready to help with any questions you have, She is extremely patient and possesses great understanding of what she does, very rare to find people with that kind of knowledge. She always finds the best possible rates based on your situation and answers any questions you have. I’d highly recommend people to go with her for any loan needs. Thank you Anusha for helping us with the process, you know I’d definitely come back to you again whenever needed."
    },
    // Additional reviews will be added here...
{
        name: "Sachin Mehta",
        date: "1 year ago",
        rating: 5.0,
        comment: "Thanks Anusha for being a thorough professional and closing my loan on time and before time. With the best of everything I could ask for and your patience and due diligence that you did for my scenario with multiple properties and other challenges. The final result speaks high of your dedication and commitment towards your clients. I have already recommended you to many and I am sure everyone would feel the same."
    },
    {
        name: "Ipshita Arun",
        date: "1 year ago",
        rating: 5.0,
        comment: "Anusha, Thank you for your exceptional service during my mortgage application process. Your dedication and knowledge of the industry made you the best go-to mortgage advisor for me. You always provided the best advice and recommendations, and your guidance helped me make informed decisions. I truly appreciate your outstanding service and can confidently recommend you to anyone seeking mortgage financing. Thank you again for your hard work and dedication."
    },
    {
        name: "Arul",
        date: "1 year ago",
        rating: 5.0,
        comment: "Got my mortgage through Anusha. Surprised to see the level of detail and communication that she gives and open to any questions made me very comfortable. At the later stage of the process, I didn’t even bother about any items that I would miss in the process and she was on top of everything. The amount of knowledge and accessing the market is blended with her. Learned a lot with her and have recommended to my friends and they felt the same. My best wishes!"
    },
    {
        name: "Penusila",
        date: "2 years ago",
        rating: 5.0,
        comment: "I have zero knowledge in the lending process and Anusha helped me to understand different options and have the choice to choose and also advised me to go with the lender of my choice though she is an agent in the business. She made to understand the loan process so simple and always in touch. Thanks so much Anusha and keep up the good work!!!"
    },
    {
        name: "N R",
        date: "2 years ago",
        rating: 5.0,
        comment: "Thank you Anusha for your continued support in helping me understand about the market situations. Your thorough, patient and in-depth knowledge of the entire loan processing has been very educational. I plan to continue working with Anusha in future endeavors."
    },
    {
        name: "Pranav and Leela",
        date: "2 years ago",
        rating: 5.0,
        comment: "Thank you for making this complex process so simple with your professionalism. You are well informed. This was our second loan with you and both times our experience was simply great. You prove every time that you genuinely care for your clients."
    },
    {
        name: "Sasi and Brenda",
        date: "2 years ago",
        rating: 5.0,
        comment: "Thank you for your help. You are a thorough professional and so transparent. The best part in your approach is you do not sell anything like I have always seen with other lenders. Best advisor and you know what you are doing and you give the same confidence to anyone working with you. So me and my wife were mentally so free and knew we were with the right person. Thank you and best wishes."
    },
    {
        name: "Smita Rajput",
        date: "2 years ago",
        rating: 5.0,
        comment: "Thank you very much Anusha. Appreciate your professionalism, confidence with humility. You are the best and I have been recommending you to many of my friends. Once they work with you I am sure they would want to work with you. Wishes to you."
    },
    {
        name: "Mena A Rezkalla",
        date: "2 years ago",
        rating: 5.0,
        comment: "I would like to say more thanks for your hard work. When I wanted to know anything in my file, you texted me and called me at the same time. You have been more way to get the perfect decision. I have advice for everyone need to buy a new home or get the loan home contact with you…. Thank you so much."
    },
    {
        name: "Neha Kira Hinebaugh",
        date: "2 years ago",
        rating: 5.0,
        comment: "Anusha just helped us close on our new home on time. She has held our hands every step of the way and gone above and beyond in guiding us through this complicated process. She is kind, caring, and always promptly available when I had a question. We so recommend working with Anusha!! And we cannot thank her enough for making this all possible without delay!!"
    },
    {
        name: "Karan Chanana",
        date: "2 years ago",
        rating: 5.0,
        comment: "Buying a first home is incredibly stressful, and for someone without a financial background, securing a mortgage is the most confusing part. I am very thankful to Anusha Sumugam for her professional, responsive and honest assistance with the whole mortgage process from beginning to end. She made herself available to me all the time and during any part of the day. She helped me understanding the process in detail and answered all my question I had along the way. She helped me get the best rates with minimum cost to pocket in this difficult market situation and also provided me with all the necessary information we needed to make the right decision. I am glad we chose her service and I recommend Anusha to anyone in the market for a mortgage. I will definitely suggest everyone to talk to her at least once and see for yourself how good and transparent she is."
    },
    // Additional reviews will be added here...
 {
        name: "Balan Thangamani",
        date: "2 years ago",
        rating: 5.0,
        comment: "Anusha Sumugam is an exceptional mortgage professional. She takes the time to ensure that her clients understand the entire process of closing on a mortgage and is always willing to explain things until the client is satisfied. Patient, kind, and understanding - She explained every step of the mortgage process and explained the reason for every document requested from me. She is always friendly, and she was always available to answer every question via any method of my choice - email, chat/call. I will strongly recommend Anusha to anyone in the market for a mortgage needs and I will be certain to use Anusha's help to get a new mortgage/refinance. Thank you Anusha!! for all your help, follow up with builder to close the mortgage loan smoothly."
    },
    {
        name: "Kunal Jain",
        date: "2 years ago",
        rating: 5.0,
        comment: "Best Rate! Very fast to respond and always provided the numbers while going through each item line by line. Closing was a breeze. I am grateful that I used her services during my home purchase."
    },
    {
        name: "Rakhee Thaker",
        date: "2 years ago",
        rating: 5.0,
        comment: "Thank you so much for all your help in securing my loan for my new home here in Arizona. You were organized & thorough & professional, as well as kind which made all of the difference in my interaction with you. I put my trust in you and you most definitely came through for me. Thank you for your patience as well as for treating me as a friend rather than just a home buyer. You stand above the rest."
    },
    {
        name: "Veena Manigandan",
        date: "2 years ago",
        rating: 5.0,
        comment: "Hi Anusha! Thank you for your services to secure a mortgage loan for our home. You were very informative and quick in responding to any queries we had during the mortgage process. We got a competitive rate and professional approach in completing the documentation work. You did a quick turnaround in closing and were adaptable with all the changes we needed. We appreciate your patience, knowledge, and guidance throughout the process. Thank you for efforts it was beyond our expectations."
    },
    {
        name: "Kumar Annamalai",
        date: "2 years ago",
        rating: 5.0,
        comment: "Trusted Loan Advisor with full transparency is what defines Anusha's work. She really helped me a lot from day 1 and her intention is not to sell a loan product. She will understand the need and suggest the best options. She won't hesitate to tell an option outside even though she doesn't get anything out of that. It clearly shows her intention to get the best for the customer. Any time you have a question (Generally you will have ton of questions) she will explain the details in a calm and composed manner. I would never hesitate to recommend Anusha for any loan request and you can bet on her. Thank you so much Anusha for all your help!!!"
    },
    {
        name: "Abhinay Ramadugu",
        date: "2 years ago",
        rating: 5.0,
        comment: "Got to know about Anusha from my sister and Anusha is very professional and friendly in guiding us to the right direction. My wife and I are very happy to have her as our loan officer and thank you, Anusha. We proudly recommend Anusha as the very best loan officer that we came across."
    },
    {
        name: "Vasupradha Ramarathnam",
        date: "2 years ago",
        rating: 5.0,
        comment: "Anusha was very helpful in getting us a good rate and closing our loan on time for our house, as first time homebuyers we did not understand the process, Anusha was very clear and gave lot of details. She sent lot of graphs and figures to explain each and every detail. She was willing to answer our queries and found time in her schedule. She really cares for her clients and we recommend her services."
    },
    {
        name: "Sudheer Uppalapati",
        date: "2 years ago",
        rating: 5.0,
        comment: "Anusha Sumugam is my Loan officer for my home closing. She did a great job all through the process. She explained to me each and every thing throughout the whole process. She went all the way and Beyond in getting the best interest rate which is really a big thing in the current market. She answers the calls and texts any time and guided me very well. Thank you very easy going and highly recommend working with Anusha."
    },
    {
        name: "Shailesh",
        date: "2 years ago",
        rating: 5.0,
        comment: "Great experience and trustworthy friend in mortgage industry! I can sit and relax, thank you very much from me and my family for making this happen."
    },
    {
        name: "Vengat",
        date: "2 years ago",
        rating: 5.0,
        comment: "Your services are exceptionally awesome. Your help regarding understanding the entire process and communicating to us as first-time home buyers and making us understand all the options are admirable. I would recommend and have recommended you to all my friends. Thank you."
    },
    {
        name: "Nagarajan",
        date: "2 years ago",
        rating: 5.0,
        comment: "Everything perfect! Communication, quick response, updates, answering all my dumb questions like explaining to a 5th grader patiently and ensuring to the dot that I understand. I have worked with a couple of them before though did not close any with them but I just cannot compare. The value you provide definitely comes from your experience in the Broking industry, admire your confidence and your quality to empathize. Best wishes to you Anusha S."
    },
    {
        name: "Sai",
        date: "2 years ago",
        rating: 5.0,
        comment: "Anushaaa thank you so much for your help and staying on top of the whole mortgage process. Today when I am going through all paperwork that we did to get to the end I see the amount of documentation and work that my loan file needed. And you not once gave a feeler about the complication, you just took me along seamlessly, diligently and closed so smoothly. Tenacity, patience, knowledge, experience and last but never the least always composed and so friendly. Thank you and look forward to work with you soon."
    },
    {
        name: "Murali",
        date: "2 years ago",
        rating: 5.0,
        comment: "Smooth closing and quick closing! You know I came to you after working with another lender in a dire situation but you took it as a challenge and made it happen. You would be my go to Loan officer and currently working on my other property says it all. I will anytime recommend you. I always felt I was heard and you are so patient and friendly not once I could sense any kind of resistance from you on all my stupid questions and apprehensions. Very transparent and thorough professional. A big thank you!"
    },
    {
        name: "ATHI",
        date: "2 years ago",
        rating: 5.0,
        comment: "I would like to strongly recommend, Anusha for Mortgage in USA. Anusha is a very dedicated individual who works for her clients and follows through on every part of the process that is under her purvey. She is very extremely knowledgeable with the regulations and requirements needed to qualify a lender and also counsel them. She works her job to the convenience of the buyer and as she’s done for me, holding hours in the late evening or early morning on my schedule, to get my application entered on time. Ms. Anusha recognizes the importance of getting the loan to close and appreciates the recognition of the agents that refer clients to him. She closely follows the transaction and will call the clients and their agents promptly with information that may either require attention or to just inform of the progress. She works very closely with the mortgage brokers and the underwriters in preparing all required documents and facilitating their approvals on time. The broker that I worked with for my mortgage speaks highly of her professionalism and dedication. I strongly recommend her for any lending needs. She is reliable, prompt and diligent."
    },
    {
        name: "Kyle S",
        date: "2 years ago",
        rating: 5.0,
        comment: "Anusha is one of the best bankers I have worked with. She is very meticulous in her work. She clearly understands lender requirements and also appropriately communicates with the client. She is highly knowledgeable. Many times the lenders and their underwriters ask the same stuff again and again though we might have submitted already and Anusha takes care of that. She is such a pleasant person to work with. She is extremely fast and always available and highly reliable."
    },
    {
        name: "A. Santoshini",
        date: "2 years ago",
        rating: 5.0,
        comment: "Thank you for your assistance throughout the loan process. I will certainly recommend your services to anyone I know who needs a mortgage."
    },
    {
        name: "ANIL THOTA",
        date: "2 years ago",
        rating: 5.0,
        comment: "Anusha helped us during the craziest market time when the closing on the houses was expected to complete in 15 - 20 days. She worked diligently to ensure all the parties had documentation to move forward. She constantly communicated without overburdening to update the status of the closing process and what to expect for the next steps. I am pleased with her work ethic and commitment."
    },
    {
        name: "PRATYUSH",
        date: "2 years ago",
        rating: 5.0,
        comment: "It was a great experience working with Anusha for the Mortgage loan. She was quite helpful from the start of the process till the closing. She explained the entire process clearly step by step and answered all the queries promptly as they came. The entire process went quite smoothly and it was completed faster than my expectation. I would recommend her to everyone."
    },
    {
        name: "Ranjith Anthony Xavier",
        date: "2 years ago",
        rating: 5.0,
        comment: "I bought a house in 3 months after coming back from India (after 3 years). This could not have happened without Anusha’s help. She clearly understood my situation and suggested the proper lender. Once I locked the rate and gave all the documents she listed. That is it, she never came back and asked for extra documents. I have seen people completely stressed and messed up during their complete mortgage loan process, especially during the underwriting period. So I was also worried about that. But Anusha made sure that there are zero issues in my loan process. My case had many complications like friends gave some money as a gift, I changed the closing date, etc. Anusha handled all the complications very well. I was not even asked any single question during the understanding process. She even suggested me to shop around with other people and make sure I get the better rate. And that kind of honesty is what we need as a client. I 100% recommend Anusha for your next mortgage shopping!"
    },
    {
        name: "RUCHIRA",
        date: "2 years ago",
        rating: 5.0,
        comment: "The homebuying experience with Anusha was just phenomenal. Her quick responses and thorough explanations made sure that I was comfortable with the finances involving my home, Moreover her explanations were simple and easy to understand and gave me a sense of assurity. With her help, I was able to close my home in only 1 month. She is an absolute gem!!!"
    },
    {
        name: "AVINASH SHIV",
        date: "2 years ago",
        rating: 5.0,
        comment: "Well, I would start by thanking Anusha for helping us to close the mortgage process from one of the hard lenders one can come across. I had to mention this since the process and hiccups that we faced during my journey - the support from Anusha was fabulous. She was always up to the mark, chasing the lender and processing team every hour, tracking each stage of the loan process. The best part of Anusha’s working style, she always keeps transparency during the process and always keeps herself honest. As a buyer what we all need is closing on time and assurance from the loan officer to get the process inline. Anusha is best at this business. Anusha, I am thanking you again on behalf of my family for helping us through the process and getting us our dream house."
    },
    {
        name: "ANIL SHANKAR",
        date: "2 years ago",
        rating: 5.0,
        comment: "I would like to acknowledge the exceptional service that we received during the entire refinancing process. Anusha's professionalism and knowledge of the industry was impressive and truly appreciated. In the past, we have had experience with several others and have found the process frustrating and tedious. Anusha went above and beyond to ensure that all of our needs were met and that everything was handled thoroughly and efficiently. We have and will continue to recommend her in the future."
    },
    {
        name: "GERALD",
        date: "2 years ago",
        rating: 5.0,
        comment: "In a seller's market, to win and close a deal, we need to be very competitive while being highly cognizant of the financial. Once the loan process began, Anusha was quick to respond to questions all along the way, providing guidance and clarity. With all the support, we successfully were funded and closed our home. Thank you Anusha!"
    },
    {
        name: "NAGARJUNA",
        date: "2 years ago",
        rating: 5.0,
        comment: "I wanted to take this opportunity to thank Anusha for all the help she has done for us through the entire process of getting a new home loan. Anusha has always been patient, professional, and knowledgeable in every aspect of the loan process! I would not hesitate to recommend her service throughout the loan process to anyone that I know."
    },
    {
        name: "VASUPRADHA",
        date: "2 years ago",
        rating: 5.0,
        comment: "Your services are exceptionally awesome. Your help regarding understanding the property documents and all the necessary closing documents was excellent."
    },
    {
        name: "M ANITHA",
        date: "2 years ago",
        rating: 5.0,
        comment: "We were first-time home owners and had a lot of questions, stress and a lot of milestones to achieve in a short time. Anand and Anusha were great in responding to our questions and getting our loan processed in the given timeframe with favorable terms and conditions. Thanks for your support."
    },
    {
        name: "Anil and Shoba.",
        date: "2 years ago",
        rating: 5.0,
        comment: "We recently bought our first home. Our mortgage loan officer was Anusha. The mail reply back time from Anusha was pretty quick and since it was our first home, we had lots of questions and Anusha would answer each of them without any hassle or hesitation. Also, when the underwriter would request for additional documents, Anusha guided us on what needs to be sent and written for the explanation. Anusha made sure even after the closing that everything went well and the loan process was completed successfully. We would recommend our friends to Anusha in the future for their mortgage process."
    },
    {
        name: "CKANTH",
        date: "2 years ago",
        rating: 5.0,
        comment: "Hi Anusha I really appreciate the services you have provided to us from the day we started this process towards the closure. The level of detail and accountability you have demonstrated is commendable. The things were quite smooth for us because of the way you conducted this whole process. We are surely going to recommend you for any lending services required by our friends and family. Once again thanks for making this deal a success for us. Regards, Kamalpreet Kaur and Hiteshwar Singh Anusha was very helpful and appreciate you to help me get through home purchase."
    },
    {
        name: "Samiran DAS",
        date: "2 years ago",
        rating: 5.0,
        comment: "We really wanted to thank Anusha for the diligence and the focus she provided us while going through the purchase of our new home in Northern Atlanta area. We were running against time and buying the home remotely added a lot of complexity to the transaction. Anusha’s expertise and customer first attitude as a Mortgage Consultant was exemplary. We had a situation where we had to close within 30 days from offer date and a unique 2 loan situation (primary and heloc). All the documentation and process was seamless the way it was supported by Anusha. We highly recommend Anusha as a Mortgage Consultant and congratulate her on the great work she is doing!"
    },
    {
        name: "SATHYA",
        date: "2 years ago",
        rating: 5.0,
        comment: "Very informative, timely, answered all my questions with lots of details, clarified all my doubts. I would highly recommend Anusha to my friends and network. She is super friendly to work with."
    },
    {
        name: "VINAY A",
        date: "2 years ago",
        rating: 5.0,
        comment: "Anoosha and her team are a pleasure to work with. They were the only blessing in the otherwise stressful home buying process in 2021. Anoosha’s team is transparent, super responsive, and ensured that the mortgage process was complete ahead of the closing date."
    },
    {
        name: "DINESH",
        date: "2 years ago",
        rating: 5.0,
        comment: "It was a great experience working with Anusha during our home purchase in the crazy 2022 market. Anusha was driving our complex loan setup with great ease and brilliant control. Her clinical due diligence, timely follow-ups with lender/us, clear communication are a few things that made the whole process very smooth for me. Highly recommended."
    },
    {
        name: "ARVIND",
        date: "2 years ago",
        rating: 5.0,
        comment: "I recently bought a home and Anusha did a great job helping me out with the mortgage process. She was very informative, communicative and kept on providing updates throughout the process. She helped me get answers to the various questions I had and she did a quick turnaround in getting some of the document done before closing for a change from my side. I would definitely recommend Anusha for anyone looking for mortgage needs."
    },
    {
        name: "ANIL SHAH",
        date: "2 years ago",
        rating: 5.0,
        comment: "Anusha is very experienced and easy to work with a mortgage expert. She knows and helps with each detail that should be looked upon. She can answer about anything mentioned in the closing disclosure. If she is unsure of something, she will find it and help the customer understand it. Anusha can foresee the upcoming documents requirement from lenders and helps to keep it ready for closing on the decided date, even with aggressive closing timelines. She helped me close the conventional mortgage within 17 days, which is important to compete in this market. Thank you Anusha for your great skills and hard work!!!"
    },
    {
        name: "BRAD KIM",
        date: "2 years ago",
        rating: 5.0,
        comment: "Anusha did a diligent follow-up and guidance on document submission to ensure loan processing was completed well before the closing date. Thank you for the support. PARAS It was a pleasure to work with Anusha, she is really knowledgeable in her domain. I am pleased with the way she handled our end-to-end closing. Thanks for all her relentless efforts to get this deal done for us. We don't see any reason for not going with Anusha for any future lending plans."
    }
];

const reviewsContainer = document.getElementById('reviews-container');

let currentDisplayCount = 10; // Start by displaying 10 reviews

// Function to render reviews dynamically
const renderReviews = (count) => {
    reviewsContainer.innerHTML = ''; // Clear existing reviews
    const limitedReviews = reviews.slice(0, count);
    limitedReviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        reviewCard.innerHTML = `
            <h3>${review.name}</h3>
            <p class="date">${review.date}</p>
            <p class="rating">${'⭐'.repeat(Math.round(review.rating))}</p>
            <p>${review.comment}</p>
        `;

        reviewsContainer.appendChild(reviewCard);
    });
    renderButtons();
};

// Function to render appropriate buttons
const renderButtons = () => {
    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.innerHTML = ''; // Clear existing buttons

    if (currentDisplayCount < reviews.length) {
        const loadMoreButton = document.createElement('button');
        loadMoreButton.textContent = currentDisplayCount >= 20 ? 'View All' : 'View More';
        loadMoreButton.onclick = () => {
            if (currentDisplayCount >= 20) {
                currentDisplayCount = reviews.length; // Show all reviews
            } else {
                currentDisplayCount += 10; // Show next 10 reviews
            }
            renderReviews(currentDisplayCount);
        };
        buttonsContainer.appendChild(loadMoreButton);
    }
};

// Initial render
renderReviews(currentDisplayCount);
