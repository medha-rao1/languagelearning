import React, { useState, useEffect } from 'react';

const App = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  // For login and signup
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [cibilScore, setCibilScore] = useState('');
  const [age, setAge] = useState('');

  // Language and tutorial state
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [tutorialType, setTutorialType] = useState('');
  const [activePage, setActivePage] = useState('home');

  // Financial data and page rendering logic
  const renderLanguageContent = () => {
    switch (selectedLanguage) {
      case 'Kannada':
        return tutorialType === 'selfPaced' ? (
          <pre style={contentStyle}>
            {/* Kannada tutorial content */}
            1. **Learn the Kannada Alphabet (Varnamala)**

            The Kannada alphabet consists of **49 characters**—14 vowels and 34 consonants.

            **Vowels (Achulu)**  
            These are the basic building blocks for syllables. Each vowel has a unique pronunciation. Here are the vowels:

            1. ಅ (a)  
            2. ಆ (aa)  
            3. ಇ (i)  
            4. ಈ (ii)  
            5. ಉ (u)  
            6. ಊ (uu)  
            7. ಋ (ru)  
            8. ೠ (rū)  
            9. ೊ (e)  
            10. ೌ (ē)  
            11. ್ (ai)  
            12. ಒ (o)  
            13. ಓ (oo)  
            14. ಔ (au)

            **Consonants (Hallulu)**

            These are used to form words. Below are some of the common consonants:

            1. ಕ (ka)  
            2. ಖ (kha)  
            3. ಗ (ga)  
            4. ಘ (gha)  
            5. ಙ (nga)  
            6. ಚ (cha)  
            7. ಛ (chha)  
            8. ಜ (ja)  
            9. ಝ (jha)  
            10. ಞ (nya)  
            ...and many others.

            **Combination of Vowels and Consonants**  
            In Kannada, vowels can be combined with consonants to form syllables. For example:

            - ಕ + ಅ = ಕ (ka)  
            - ಚ + ಇ = ಚಿ (chi)

            2. **Common Kannada Words and Phrases**

            Here are some essential phrases to get you started:

            - Hello: ನಮಸ್ಕಾರ (Namaskara)  
            - How are you?: ಹೇಗಿದ್ದೀರಿ? (Hēgiddīri?)  
            - I am fine: ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ (Nānu cennāgiddēne)  
            - Thank you: ಧನ್ಯವಾದ (Dhanyavāda)  
            - Good morning: ಶುಭೋದಯ (Śubhōdaya)  
            - Good night: ಶುಭ ರಾತ್ರಿ (Śubha rātri)  
            - Yes: ಹೌದು (Haudu)  
            - No: ಇಲ್ಲ (Illa)  
            - Please: ದಯವಿಟ್ಟು (Dayaviṭṭu)  
            - Sorry: ಕ್ಷಮಿಸಿ (Kṣamisi)

            3. **Pronunciation Tips**

            - Kannada is phonetic, meaning it is read exactly as it is written.
            - The vowels are very important as they change the sound of words depending on their placement.
            - The consonants have a variety of sounds based on whether they are aspirated (with a breath) or unaspirated.

            Pronunciation Examples:
            - **ಅ** (a) sounds like the “a” in **America**.  
            - **ಕ** (ka) sounds like the “ka” in **cat**.
            - **ಖ** (kha) has an aspirated “kh” sound, similar to **'kh'** in **khaki**.

            4. **Practice Writing and Reading**

            Start practicing by writing the Kannada characters. You can practice by tracing letters, and later try writing them without help. Below is a simple exercise:

            - Write the vowel: **ಅ** (a) 10 times.
            - Write the consonant: **ಕ** (ka) 10 times.
            - Combine vowels with consonants: **ಕ + ಅ = ಕ** (ka)

            5. **Start Forming Simple Sentences**

            - **ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತೇನೆ** (Nānu kannaḍa kaliyuttēne) – I am learning Kannada.
            - **ನೀವು ಎಲ್ಲಿ ಹೋಗುತ್ತೀರಿ?** (Nīvu elli hōguttīri?) – Where are you going?

            6. **Listening Practice**

            Listen to Kannada language videos, songs, and news to familiarize yourself with the sound of the language. The more you listen, the easier it will be to pick up the pronunciation and sentence structure.

            7. **Download Kannada Language Apps**

            To complement your self-paced study, you can use language learning apps like:
            - Duolingo  
            - Kannada Dictionary  
            - Learn Kannada with KannadaPod101

            8. **Key Resources for Self-Paced Learning**

            - **YouTube Channels**: Look for YouTube channels like "Learn Kannada with KannadaPod101" or "Learn Kannada with Ravi" for basic lessons.
            - **Kannada Learning Websites**: Websites like Kannada Prabha (https://www.kannadaprabha.com) and Omniglot (https://www.omniglot.com) can offer resources on pronunciation and grammar.

            9. **Practice Daily**

            Consistency is key to learning any language. Practice reading, writing, and speaking Kannada every day. The more you expose yourself to the language, the more natural it will become.

            10. **Language Exchange**

            Find language exchange partners to practice speaking Kannada. Apps like **HelloTalk** or **Tandem** allow you to connect with native speakers for free conversations.

            Let me know if you’d like to dive deeper into any of these sections or need more specific examples!

          </pre>
        ) : (
          <div style={contentStyle}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/example1" // Replace with actual YouTube link
              title="Kannada Video Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      case 'English':
        return tutorialType === 'selfPaced' ? (
          <pre style={contentStyle}>
            {/* English tutorial content */}
            1. Learn the Alphabet and Sounds
        Focus: Learn the 26 letters of the English alphabet and the sounds each letter makes.
        Practice: Write the alphabet and say each letter aloud. Focus on correct pronunciation.
        2. Basic Greetings and Introductions
        Key Phrases:
        "Hello!" or "Hi!"
        "Good morning!"
        "How are you?"
        "I am fine, thank you."
        "What is your name?"
        "My name is [your name]."
        Practice: Have a conversation with yourself or a friend using these phrases.
        3. Basic Vocabulary (Common Nouns, Verbs, Adjectives)
        Common Nouns:
        People: man, woman, child
        Objects: book, table, chair, phone
        Places: home, school, park, store
        Common Verbs:
        Eat, go, run, jump, speak, read
        Common Adjectives:
        Big, small, happy, sad, beautiful, fast, slow
        Practice: Make simple sentences like "The man is tall." or "I eat an apple."
        4. Simple Sentence Structure
        Basic Sentence Structure:
        Subject + Verb + Object: "I eat an apple."
        Practice: Create 10 simple sentences each day.
        5. Learn Numbers (1–20)
        Numbers: Start with counting from 1 to 20. Practice saying and writing the numbers aloud.
        Practice: Count objects around you in English, like "I have five books."
        6. Days of the Week and Time
        Days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
        Telling Time: "It is 3 o'clock."
        Practice: Write the days of the week and say them aloud.
        7. Simple Questions and Answers
        Questions:
        "What is your name?"
        "Where are you from?"
        "How old are you?"
        Answers:
        "My name is [your name]."
        "I am from [your country]."
        "I am [your age] years old."
        Practice: Have conversations where you ask and answer questions.
        8. Basic Pronouns
        Personal Pronouns: I, you, he, she, it, we, they
        Practice: Use pronouns in sentences like "She is my friend." or "We are happy."
        9. Practice Listening and Speaking
        Listening: Watch beginner-level English videos or listen to podcasts designed for English learners.
        Speaking: Try to mimic the sentences you hear. Speaking regularly will improve your pronunciation.
        10. Daily Practice
        Set aside 10–20 minutes every day for practice. The more consistent you are, the faster you'll improve.

          </pre>
        ) : (
          <div style={contentStyle}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/example2" // Replace with actual YouTube link
              title="English Video Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      case 'Hindi':
        return tutorialType === 'selfPaced' ? (
          <pre style={contentStyle}>
            {/* Hindi tutorial content */}
            Phase 1: Learning the Hindi Alphabet (Devanagari Script)
        1. Introduction to the Devanagari Script
        The Hindi language uses the Devanagari script, which consists of 13 vowels and 33 consonants. Here’s an introduction to the vowels and consonants.
        
        Vowels (स्वर):
        
        अ (a)
        आ (aa)
        इ (i)
        ई (ii)
        उ (u)
        ऊ (uu)
        ऋ (ri)
        ॠ (rri)
        ऌ (li)
        ॡ (llii)
        ए (e)
        ऐ (ai)
        ओ (o)
        औ (au)
        अं (am)
        अः (ah)
        Consonants (व्यंजन):
        
        क (ka)
        ख (kha)
        ग (ga)
        घ (gha)
        ङ (nga)
        च (cha)
        छ (chha)
        ज (ja)
        झ (jha)
        ञ (nya)
        ट (ṭa)
        ठ (ṭha)
        ड (ḍa)
        ढ (ḍha)
        ण (ṇa)
        त (ta)
        थ (tha)
        द (da)
        ध (dha)
        न (na)
        प (pa)
        फ (pha)
        ब (ba)
        भ (bha)
        म (ma)
        य (ya)
        र (ra)
        ल (la)
        व (va)
        श (sha)
        ष (ṣa)
        स (sa)
        ह (ha)
        ळ (ḷa)
        क्ष (kṣa)
        त्र (tra)
        ज्ञ (jna)
        2. Practice Writing Vowels and Consonants
        Start by practicing the vowels and consonants. Write them repeatedly to get comfortable with the shapes.
        
        Step 1: Write each vowel and consonant 10 times.
        Step 2: Start combining vowels with consonants (e.g., "ka", "kā", "ki", "kī" …).
        3. Pronunciation Tips
        Vowels are short or long, and their pronunciation changes depending on the context.
        Consonants can be soft, hard, or aspirated. Try to mimic the pronunciation using online resources or videos for accurate sounds.
        Phase 2: Simple Words and Basic Sentences
        1. Words with Vowels and Consonants
        Now that you know the vowels and consonants, practice simple words. Start by combining consonants with vowels:
        
        माँ (maā) – Mother
        बिल्ली (billi) – Cat
        घर (ghar) – House
        दाल (daal) – Lentils
        पानी (pānī) – Water
        2. Basic Sentences
        Once you’re comfortable with words, try constructing simple sentences:
        
        मैं अच्छा हूँ। (Main acchā huñ) – I am good.
        तुम कहाँ जा रहे हो? (Tum kahān jā rahe ho?) – Where are you going?
        यह क्या है? (Yeh kyā hai?) – What is this?
        मुझे पानी चाहिए। (Mujhe pānī chāhiye.) – I need water.
        वह मेरा दोस्त है। (Vah merā dost hai.) – He is my friend.
        3. Focus on Pronouns and Simple Verbs
        Pronouns: मैं (I), तुम (you), वह (he/she/it), हम (we), वे (they)
        Verbs: होना (to be), करना (to do), जाना (to go), खाना (to eat), पीना (to drink).
          </pre>
        ) : (
          <div style={contentStyle}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/example3" // Replace with actual YouTube link
              title="Hindi Video Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      case 'Tamil':
        return tutorialType === 'selfPaced' ? (
          <pre style={contentStyle}>
            {/* Tamil tutorial content */}
            Combining Vowels and Consonants
        Learn how vowels and consonants combine to form syllables. These combinations form the foundation of Tamil words.
        
        க + அ = க
        க + ஆ = கா
        ச + இ = சி
        ப + உ = பு
        Phase 2: Basic Vocabulary Building
        Once you’re familiar with the letters, start building simple words by combining vowels and consonants.
        
        அன்னை (annai) – Mother
        பாடல் (paadal) – Song
        நாய் (naai) – Dog
        கோபம் (kopam) – Anger
        காலை (kaalai) – Morning
        Phase 3: Sentence Formation
        Start forming simple sentences with the vocabulary you’ve learned.
        
        நான் ஒரு மாணவன். (Nāṉ oru māṇavaṉ.) – I am a student.
        அவள் அழகானவள். (Avaḷ azhakāṉavaḷ.) – She is beautiful.
        என் பையை வீடியோ காட்டுகிறது. (En paiyai vīḍiyo kāṭṭukiṟatu.) – My bag shows a video.
        Phase 4: Practice Reading Simple Texts
        Now that you can recognize letters and form basic words and sentences, start practicing with simple stories or sentences. Here’s an example:
        
        Short Story:
        
        அம்மா மற்றும் நான்
        நான் என் அம்மாவுடன் பள்ளிக்குச் செல்வேன். அவள் என்னோடு பேசுவாள். நான் அவளுடன் நிறைய பொருட்களை சந்திப்பேன்.
        
        Translation:
        Mother and I
        I will go to school with my mother. She will talk to me. I will meet many people with her.
        
        Phase 5: Expand Vocabulary and Practice Sentences
        As you learn more, try to expand your vocabulary in different categories:
        
        Colors: சிவப்பு (red), நீலம் (blue), பச்சை (green)
        Numbers: ஒன்று (one), இரண்டு (two), மூன்று (three)
        Common verbs: செல் (to go), பார் (to see), உண்டு (to eat)
          </pre>
        ) : (
          <div style={contentStyle}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/example4" // Replace with actual YouTube link
              title="Tamil Video Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  // Authentication functions
  const handleLogin = async () => {
    const userData = { username, password };
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.status === 200) {
        setToken(data.token);
        setIsAuthenticated(true);
        localStorage.setItem('authToken', data.token);
        alert('Logged in successfully');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleSignup = async () => {
    const userData = { name, age, mobileNo, username, password, email, aadhaar, cibilScore };
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.status === 201) {
        alert('Account created successfully');
        setActivePage('login');  // After successful signup, navigate to login
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem('authToken');
  };

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  // Handle language selection
  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
    setTutorialType('');
  };

  const handleTutorialTypeSelection = (type) => {
    setTutorialType(type);
  };

  // Style for content area (used in language content rendering)
  const contentStyle = {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    fontFamily: 'Courier, monospace',
    lineHeight: '1.6',
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxHeight: '400px',
    overflowY: 'auto',
    fontSize: '16px',
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url('background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        position: 'relative',
      }}
    >
      <main
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <header style={{ marginBottom: '30px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Language Learning System</h1>
          <p style={{ fontSize: '18px' }}>Learn for a happy future</p>
        </header>

        {!isAuthenticated ? (
          <div style={{ width: '100%' }}>
            {activePage === 'login' ? (
              <>
                <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Welcome! Please Login</h2>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    padding: '12px',
                    marginBottom: '10px',
                    width: '100%',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    padding: '12px',
                    marginBottom: '20px',
                    width: '100%',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                  }}
                />
                <button
                  onClick={handleLogin}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    border: 'none',
                    fontSize: '16px',
                    width: '100%',
                  }}
                >
                  Login
                </button>

                <p style={{ marginTop: '20px' }}>
                  Don't have an account? <button onClick={() => setActivePage('signup')}>Sign Up</button>
                </p>
              </>
            ) : (
              <>
                <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Create Account</h2>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    padding: '12px',
                    marginBottom: '10px',
                    width: '100%',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                  }}
                />
                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  style={{
                    padding: '12px',
                    marginBottom: '10px',
                    width: '100%',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                  }}
                />
                <input
                  type="text"
                  placeholder="Mobile No"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  style={{
                    padding: '12px',
                    marginBottom: '10px',
                    width: '100%',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                  }}
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    padding: '12px',
                    marginBottom: '10px',
                    width: '100%',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    padding: '12px',
                    marginBottom: '10px',
                    width: '100%',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                  }}
                />
                <button
                  onClick={handleSignup}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    border: 'none',
                    fontSize: '16px',
                    width: '100%',
                  }}
                >
                  Sign Up
                </button>

                <p style={{ marginTop: '20px' }}>
                  Already have an account? <button onClick={() => setActivePage('login')}>Login</button>
                </p>
              </>
            )}
          </div>
        ) : (
          <div>
            {/* Your dashboard content here */}
            <nav>
              <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#007bff' }}>
                <li><button onClick={() => setActivePage('home')}>Home</button></li>
                <li><button onClick={() => handleLanguageSelection('Kannada')}>Kannada</button></li>
                <li><button onClick={() => handleLanguageSelection('English')}>English</button></li>
                <li><button onClick={() => handleLanguageSelection('Hindi')}>Hindi</button></li>
                <li><button onClick={() => handleLanguageSelection('Tamil')}>Tamil</button></li>
              </ul>
            </nav>

            <button onClick={handleLogout}>Logout</button>

            {selectedLanguage && (
              <div>
                <h3>{selectedLanguage} Language</h3>
                <button onClick={() => handleTutorialTypeSelection('selfPaced')}>Self Paced</button>
                <button onClick={() => handleTutorialTypeSelection('videoTutorial')}>Video Tutorial</button>
                {tutorialType && renderLanguageContent()}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
