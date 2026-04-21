import React, { useState } from 'react';

// ---------- Instruction Card Component ----------
interface InstructionCardProps {
  title: string;
  instructions: string;
  content?: string[];
}

const InstructionCard: React.FC<InstructionCardProps> = ({ title, instructions, content }) => (
  <div className="bg-blue-50 p-4 rounded-lg mb-4">
    {title && <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>}
    <p className="text-sm text-gray-700">{instructions}</p>
    {content && (
      <ul className="list-disc pl-6 text-sm text-gray-700 mt-2 space-y-1">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

// ---------- Answer Section Component ----------
interface AnswerSectionProps {
  title: string;
  content: string[];
}

const AnswerSection: React.FC<AnswerSectionProps> = ({ title, content }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// ---------- QACard Component ----------
interface QACardProps {
  question: string;
  answer1?: string;
  answer2?: string;
  answer3?: string;
}

const QACard: React.FC<QACardProps> = ({ question, answer1, answer2, answer3 }) => (
  <div className="mb-8">
    <div className="bg-blue-50 p-4 rounded-lg shadow-sm mb-4">
      <h4 className="font-semibold text-gray-800 mb-2">Examiner:</h4>
      <p className="text-sm text-gray-700">{question}</p>
    </div>
    {answer1 && (
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <p className="font-semibold text-gray-800">Answer 1: </p>
        <p className="text-sm text-gray-700">{answer1}</p>
      </div>
    )}
    {answer2 && (
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <p className="font-semibold text-gray-800">Answer 2: </p>
        <p className="text-sm text-gray-700">{answer2}</p>
      </div>
    )}
    {answer3 && (
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <p className="font-semibold text-gray-800">Answer 3: </p>
        <p className="text-sm text-gray-700">{answer3}</p>
      </div>
    )}
  </div>
);

// ---------- Expandable Card Component ----------
interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm mb-4 border border-gray-200">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-blue-500 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      {isExpanded && <div className="mt-4 text-gray-700">{children}</div>}
    </div>
  );
};

// ---------- Final Combined Component ----------
const SecondComponent: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto my-8 font-sans">
      {/* Feature Three */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          ৩. IELTS স্পিকিং প্র্যাকটিস টেস্ট নমুনা উত্তরসহ: পার্ট ২ (লং টার্ন / কিউ কার্ড)
        </h2>
        <p className="text-gray-700 mb-4">
          IELTS স্পিকিং প্র্যাকটিস টেস্টে আপনি যত বেশি অনুশীলন করবেন, আপনার দক্ষতা তত বৃদ্ধি পাবে। আপনি এই পরীক্ষাগুলোতে ভালো ফল করতে পারেন।
        </p>

        <InstructionCard
          title="Examiner:"
          instructions="You will now move on to Part 2. I'm going to give you a cue card and you'll have one minute to prepare and to take some notes. Then, you will need to speak for 1-2 minutes. Here is your cue card."
        />

        <div className="bg-white p-4 rounded-lg border-2 border-gray-300 mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Cue Card Topic: Describe a Memorable Event in Your Life</h4>
          <p className="text-sm text-gray-700 mb-2">You should say:</p>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            <li>when did the event take place?</li>
            <li>who did you share the event with?</li>
            <li>what did you experience?</li>
            <li>and explain why the event was so memorable to you.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-2">You should say, "Okay" if you are ready to move on.</p>
        </div>

        <InstructionCard title="" instructions="You can take one minute to prepare notes." />

        <h3 className="text-xl font-bold text-gray-800 mb-4">Sample Answer</h3>

        <AnswerSection
          title="Introduction (Covers: when did the event take place? When did the event take place?)"
          content={[
            "A truly memorable event in my life was my sister's wedding, which took place last year in Delhi. This grand celebration was filled with love and joy.",
            "This was not just a wedding, it was a family reunion, bringing together relatives from all over India, making it a significant occasion for us all.",
            "The wedding festivities lasted several days, creating an atmosphere of excitement and anticipation that all of us got to share and enjoy.",
          ]}
        />

        <AnswerSection
          title="Describing Your Experience/Opinion/Interest (Covers: what exactly happened?)"
          content={[
            "The wedding preparations were extensive, and I played an active role in helping with the decorations and arrangements, which was both fun and challenging.",
            "The ceremony itself was beautiful, with vibrant decorations, traditional rituals, and music that created an enchanting atmosphere for everyone present.",
            "Throughout the celebration, we enjoyed delicious food, danced to lively music, and shared countless laughs and experiences, especially with our family members.",
          ]}
        />

        <AnswerSection
          title="Key Highlights (Covers: Explain why this event was so memorable to you?)"
          content={[
            "This event was memorable because it marked a new chapter in my sister's life, and being a part of that was a truly heartwarming experience.",
            "The moments we spent with family, sharing stories and laughter during the wedding, strengthened our bonds and created lasting memories.",
            "The joy on my sister's face during the ceremony and the celebration reminded me of the importance of love and family in our lives.",
          ]}
        />

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Conclusion</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>My sister's wedding stands out as a beautiful example of the power of family and togetherness during a significant life event.</li>
            <li>It highlights the value of tradition and the happiness that comes from celebrating important moments with loved ones.</li>
            <li>I will always cherish this event as a symbol of love, joy, and the stronger bond of family we now have.</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Examiner:</h4>
          <p className="text-sm text-gray-700">Thank you. Now let's move on to Part 3.</p>
        </div>
      </div>

      {/* Feature Four */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৪. IELTS ক্যানসেলেশন ফি ২০২৫</h2>
        <p className="text-gray-700 mb-4">
         যেকোনো অবস্থায় IELTS পরীক্ষার নিবন্ধন (Academic বা General Training, যেটাই হোক) বাতিল করলে, নিবন্ধন ফিয়ের একটি নির্দিষ্ট অংশ কেটে রাখা হবে। আপনি যদি কোনো কারণে নিবন্ধন বাতিল করতে চান, তাহলে অনলাইন বা আইডিপি-তে গিয়ে একটি ফর্ম পূরণ করে বাতিল করতে পারেন। 
        </p>
        <p className="text-gray-700 mb-6">
        পরীক্ষার পাঁচ সপ্তাহের বেশি সময় থাকলে কিছু টাকা ফেরত পাওয়া যাবে, অন্যথায় পুরো টাকা কেটে নেওয়া হবে।

এই ফিটি IDP IELTS পরীক্ষার প্রতিষ্ঠান থেকে নির্ধারিত হয়। পরীক্ষা বাতিল করার কারণ এবং কখন আপনি পরীক্ষা বাতিল করছেন, তার উপর ফি নির্ভর করবে।
        </p>
        {/* <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="font-semibold text-gray-800">বি.দ্র.:</p>
          <p className="text-sm text-gray-700">IELTS স্পিকিং পরীক্ষার প্রধান প্রধান ধাপগুলো হলো: ইন্ট্রোডাকশন, কিউ কার্ড এবং ডিসকাশন।</p>
        </div> */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">ফলো-আপ প্রশ্ন ১</h2>
        <QACard
          question="In this part, we'll discuss more abstract and complex issues related to the topic. So, let's continue talking about education. What events usually become memorable in our life?"
          answer1="I'd say “memorable events” often include significant milestones like weddings, graduations, and family reunions. These occasions are significant landmarks in our lives, bringing together loved ones and creating lasting memories..."
          answer2="These events are also memorable because they remind us of the people in our lives who have supported us along the way..."
        />

        <h2 className="text-xl font-bold text-gray-800 mb-4">ফলো-আপ প্রশ্ন ২</h2>
        <QACard
          question="Discussing about education, what are the importance of family relationships for one of us?"
          answer1="Family celebrations play a vital role in strengthening relationships and creating a sense of belonging..."
          answer2="Family relationships are important because they provide a support system that we can rely on..."
        />

        <h2 className="text-xl font-bold text-gray-800 mb-4">ফলো-আপ প্রশ্ন ৩</h2>
        <QACard
          question="What do you think is important to remember all the things?"
          answer1="I think it’s not realistic to remember everything, but it is important to remember the most important things..."
          answer2="It is also important to remember to be kind to yourself. You are not perfect, and you will make mistakes..."
        />

        <h2 className="text-xl font-bold text-gray-800 mb-4">ফলো-আপ প্রশ্ন ৪</h2>
        <QACard
          question="How can a good memory help people to do their work?"
          answer1="A good memory can help you to do your work by helping you to remember important information..."
          answer2="A good memory can also help you to be more creative. When you have a good memory, you can easily access information..."
        />

        <div className="bg-blue-50 p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Examiner:</h4>
          <p className="text-sm text-gray-700">
            Thank you for sharing your thoughts. That concludes our speaking test. You'll receive your results in the mail in about two weeks. Goodbye!
          </p>
        </div>
        <p className="text-gray-700 text-center mt-6">You should say, “Thank you. Goodbye!"</p>
      </div>

      {/* Feature Five */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">৫. IELTS স্পিকিং টিপস ও স্ট্র্যাটেজি</h2>
        <p className="text-gray-700 mb-4">
          IELTS স্পিকিং টেস্টের প্রস্তুতি এবং ব্যবহারযোগ্য টিপস ও স্ট্র্যাটেজিগুলো ব্যবহার করে আপনি আপনার স্পিকিং দক্ষতা বৃদ্ধি করতে পারেন।
        </p>
        <p className="text-gray-700 mb-6">
          IELTS স্পিকিং টেস্টের একটি গুরুত্বপূর্ণ অংশ হলো, আপনার নিজের দক্ষতাগুলো সঠিকভাবে ব্যবহার করা।
        </p>

        <ExpandableCard title="IELTS স্পিকিং প্রস্তুতির টিপস">
          <p>
            IELTS স্পিকিং প্রস্তুতির জন্য আপনাকে নিয়মিত অনুশীলন করতে হবে। ইংরেজি মুভি দেখা, ইংরেজি গান শোনা, এবং ইংরেজিতে কথা বলার অভ্যাস করতে হবে।
          </p>
        </ExpandableCard>

        <ExpandableCard title="IELTS স্পিকিং পরীক্ষার দিন টিপস">
          <p>
            পরীক্ষার দিন আপনাকে শান্ত থাকতে হবে এবং স্পষ্টভাবে কথা বলতে হবে। প্রশ্নের উত্তর দেওয়ার সময়, আপনার মতামতগুলো বিস্তারিতভাবে জানাতে হবে।
          </p>
        </ExpandableCard>
      </div>
    </div>
  );
};

export default SecondComponent;
