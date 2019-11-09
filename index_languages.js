// list of fields for text to be filled
var arrayElements = [
    'title_0',
    'text_0',
    'btn_0',
    'btn_1',
    'selected_language',
    'btn_login',
    'content_title_0',
    'content_title_1',
    'content_title_2',
    'content_text_0',
    'content_text_1',
    'content_text_2',
    'block_down_0',
    'footer'
];

var btn_0 = {
    English:  'Get started',
    Japanese:  'さあ、始めましょう',
    Chinese:  '开始',
    Korean:  '지금 시작해보세요',
    German:  'Leg los',
    Spanish:  'Empezar',
    Russian:  'Начать',
};

var btn_1 = {
    English:  'Get started',
    Japanese:  'さあ、始めましょう',
    Chinese:  '开始',
    Korean:  '지금 시작해보세요',
    German:  'Leg los',
    Spanish:  'Empezar',
    Russian:  'Начать',
};

var selected_language = {
    English:  'Eng',
    Japanese:  'Ja',
    Chinese:  'Chi',
    Korean:  'Kor',
    German:  'Ger',
    Spanish:  'Spa',
    Russian:  'Rus',
};

var title_0 = {
    English:  'Learn from native speakers',
    Japanese:  'ネイティブスピーカーから学ぼう',
    Chinese:  '与母语人士学习',
    Korean:  '원어민들한테서 배우세요',
    German:  'Lerne von Muttersprachlern',
    Spanish:  'Aprende de hablantes nativos',
    Russian:  'Изучай языки с носителями',
};

var text_0 = {
    English:  'Practicing writing in the language(s) you are learning, and receive feedback from native speakers.',
    Japanese:  'あなたが学びたい言語で文章を作成し、ネイティブスピーカーから感想を書いてもらいましょう。',
    Chinese:  '用您正在学习的语言练习写作，并获得母语人士的反馈。',
    Korean:  '배우시는 언어로 적는 연습을 하시고, 원어민한테 직접 피드백을 받으세요',
    German:  'Schreiben üben in den Sprachen, die du lernst und Feedback von Muttersprachlern erhalten',
    Spanish:  'Practica escribir en el(los) idioma(s) que estás aprendiendo y recibe retroalimentación de hablantes nativos.',
    Russian:  'Практикуйся в написании текстов на изучаемом языке (языках) и получай обратную связь от носителей.',
};

var btn_login = {
    English:  'Login',
    Japanese:  'ログイン',
    Chinese:  '登入',
    Korean:  '로그인',
    German:  'Login',
    Spanish:  'Ingresar',
    Russian:  'Войти',
};

var content_title_0 = {
    English:  'Journals',
    Japanese:  'ジャーナル',
    Chinese:  '文章',
    Korean:  '일기',
    German:  'Einträge',
    Spanish:  'Diarios',
    Russian:  'Журналы',
};

var content_title_1 = {
    English:  'Grammar Highlighting',
    Japanese:  '文法の添削',
    Chinese:  '重点语法',
    Korean:  '문법 하이라이팅',
    German:  'Grammatik Hervorhebung',
    Spanish:  'Resaltado gramatical',
    Russian:  'Изучение грамматики',
};

var content_title_2 = {
    English:  'Messaging',
    Japanese:  'メッセージ',
    Chinese:  '信息',
    Korean:  '메세징',
    German:  'Nachrichten schreiben',
    Spanish:  'Mensajes',
    Russian:  'Обмен сообщениями',
};

var content_text_0 = {
    English:  "Two convenient tabs to filter journals written from community members and friends. Journals written by community members are automatically filtered by language and shown to native speakers.",
    Japanese: 'コミュニティメンバーや友達が書いたジャーナルは、2つの便利なタブに分けられます。コミュニティメンバーが書いたジャーナルは、言語別に分けられネイティブが添削します。',
    Chinese:  '两个方便的标签可过滤社区成员和朋友撰写的文章。社区成员撰写的期刊会自动按语言进行过滤，并显示给母语人士。',
    Korean:   '두 개의 편리한 탭들로 커뮤니티 멤버나 친구가 적은 일기들을 필터 하세요. 커뮤니티 멤버들이 적은 일기들은 자동으로 언어에 따라 필터 되며, 원어민들한테 보입니다.',
    German:   'Zwei einfache Tabs, um Einträge von Community Mitgliedern und Freunden zu filtern. Einträge von Community Mitgliedern werden automatisch per Sprache gefiltert und Muttersprachlern angezeigt.',
    Spanish:  'Dos cómodas pestañas para filtrar diarios escritos por miembros de la comunidad y amigos. Los diarios escritos por los miembros de la comunidad son automáticamente filtrados por idioma y se muestran a los hablantes nativos.',
    Russian:  'Две удобные вкладки для фильтрации журналов, написанных членами сообщества и друзьями. Журналы, написанные членами сообщества, автоматически фильтруются по языку и показываются носителям языка.',
};

var content_text_1 = {
    English:  "Corrected sentences are automatically highlighted for your convenience. So you can spend more time learning from the mistakes than looking for them.",
    Japanese: '改善点は自動的にハイライトされるので、ミスから確実に学ぶことが出来ます。',
    Chinese:  '为了方便您的学习，更正后的句子将自动显示出来。因此，您可以花更多的时间来更正错误。',
    Korean:   '고쳐진 문장들은 여러분의 편히를 위해 자동적으로 하이라이트 됩니다. 그래서 실수하신 부분을 찾는데 시간을 허비하기 보다는 그 시간에 더 배울 수 있도록 도와드립니다.',
    German:   'Korrigierte Sätze werden automatisch zur Vereinfachung hervorgehoben. Somit kannst du mehr Zeit damit verbringen von deinen Fehlern zu lernen als nach ihnen zu suchen.',
    Spanish:  'Para tu comodidad, las frases corregidas se resaltan automáticamente. De esta manera, puedes pasar más tiempo aprendiendo de los errores, que buscándolos.',
    Russian:  'Исправленные предложения автоматически подсвечиваются для твоего удобства. Таким образом, ты можешь тратить больше времени на изучение ошибок, чем на их поиск.',
};

var content_text_2 = {
    English:  "Want to take a break and relax? Talk to each other using messages.",
    Japanese: '休憩ですか？メッセージを使って会話しましょう。',
    Chinese:  '想要休息片刻吗？发送消息互相练习交流吧。',
    Korean:   '쉬고 싶으세요? 서로에게 메시지를 통해서 얘기해 보세요.',
    German:   'Möchtest du dir eine Pause gönnen und dich entspannen? Kommuniziert über Nachrichten miteinander.',
    Spanish:  '¿Quieres tomarte un descanso y relajarte? Háblense entre ustedes usando los mensajes.',
    Russian:  'Хочешь отдохнуть и расслабиться? Общайтесь друг с другом с помощью сообщений.',
};

var block_down_0 = {
    English:  'Whether you are fluent or just starting out, you are more than welcome to join our language learning community. <br>We are all learners and we understand that in order to reach fluency, it is important to make mistakes.<br> Let our wonderful community correct those happy mistakes and help you reach the level you want to be.',
    Japanese: 'あなたの習熟度に関わらず、私たちの言語学習コミュニティへの参加を歓迎します。<br>皆が学習者であり、言語をマスターすることはミスの連続なのです。<br>言語習得に、この素晴らしいコミュニティを利用して下さい。',
    Chinese:  '无论你的语言水平是高级还是初级，都非常欢迎您加入我们的语言学习社区。 <br>我们都在相互学习，我们知道为了使语言达到流利的程度，犯些错误也很重要。<br>让我们美好的学习社区来纠正那些快乐的小错误，并帮助您达到期望的水平。',
    Korean:   '지금 막 언어를 배우기 시작하셨든, 아니면 유창하시든, 저희 언어 배움 커뮤니티에서는 모든 분을 환영합니다. <br> 우리 모두 배우는 사람으로서, 유창해지기까지 실수하는 과정이 얼마나 중요한지 이해합니다. <br> 저희의 아름다운 커뮤니티를 통해 그 실수에서 배우고 또 여러분이 원하시는 레벨까지 성장할 수 있도록 도와드리겠습니다.',
    German:   'Ob du fließend sprichst oder gerade erst anfängst, du bist mehr als willkommen unserer Sprachenlerngemeinschaft beizutreten <br> Wir sind alle Lerner und wissen, dass es wichtig ist Fehler zu machen, um fließend sprechen zu können. <br> Lass unsere wunderbare Community diese glücklichen Fehler korrigieren und dir dabei helfen dein gewünschtes Level zu erreichen.',
    Spanish:  'Tanto si hablas con fluidez, como si acabas de empezar, eres más que bienvenido(a) a unirte a nuestra comunidad de aprendizaje de idiomas. <br>Todos somos aprendices y entendemos que para alcanzar la fluidez, es importante cometer errores. <br> Deja que nuestra maravillosa comunidad corrija esos felices errores y te ayude a alcanzar el nivel que deseas.',
    Russian:  'Независимо от того, свободно ли ты владеешь языком или только начинаешь, мы будем рады принять тебя в наше сообщество по изучению языков. <br> Мы все учимся и понимаем, что для того, чтобы свободно говорить, важно совершать ошибки. <br> Пусть наше замечательное сообщество исправит эти счастливые ошибки и поможет тебе достичь желаемого уровня.',
};

var footer = {
    English:  '© 2019 LangCorrect. All rights reserved | <a href="https://langcorrect.com/privacy-policy/">Privacy Policy</a>',
    Japanese: '© 2019 LangCorrect. All rights reserved | <a href="https://langcorrect.com/privacy-policy/">Privacy Policy</a>',
    Chinese:  '© 2019 LangCorrect. All rights reserved | <a href="https://langcorrect.com/privacy-policy/">Privacy Policy</a>',
    Korean:   '© 2019 LangCorrect. All rights reserved | <a href="https://langcorrect.com/privacy-policy/">Privacy Policy</a>',
    German:   '© 2019 LangCorrect. All rights reserved | <a href="https://langcorrect.com/privacy-policy/">Privacy Policy</a>',
    Spanish:  '© 2019 LangCorrect. All rights reserved | <a href="https://langcorrect.com/privacy-policy/">Privacy Policy</a>',
    Russian:  '© 2019 LangCorrect. All rights reserved | <a href="https://langcorrect.com/privacy-policy/">Privacy Policy</a>',
}
