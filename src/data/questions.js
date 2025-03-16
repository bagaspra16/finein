const questions = [
    {
      id: 1,
      section: "A. Gejala Umum Kesehatan Mental",
      question: "Bagaimana perasaan Anda secara umum dalam dua minggu terakhir?",
      options: [
        { value: "A", text: "Saya merasa baik-baik saja dan bahagia." },
        { value: "B", text: "Kadang merasa sedih atau cemas, tetapi masih bisa mengatasinya." },
        { value: "C", text: "Sering merasa sedih, gelisah, atau kehilangan semangat tanpa alasan yang jelas." },
        { value: "D", text: "Merasa putus asa, hampa, atau berpikir tentang kematian." }
      ],
      category: "general"
    },
    {
      id: 2,
      section: "A. Gejala Umum Kesehatan Mental",
      question: "Seberapa sering Anda merasa kesulitan untuk menikmati hidup?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang, tetapi masih bisa menikmati beberapa hal." },
        { value: "C", text: "Sering kali merasa hidup tidak bermakna." },
        { value: "D", text: "Hampir setiap hari merasa hampa dan tidak tertarik pada apa pun." }
      ],
      category: "general"
    },
    {
      id: 3,
      section: "A. Gejala Umum Kesehatan Mental",
      question: "Bagaimana kondisi energi Anda dalam melakukan aktivitas sehari-hari?",
      options: [
        { value: "A", text: "Normal dan bertenaga." },
        { value: "B", text: "Kadang lelah tetapi masih bisa beraktivitas." },
        { value: "C", text: "Sering merasa sangat lelah bahkan untuk tugas sederhana." },
        { value: "D", text: "Hampir tidak punya tenaga untuk melakukan apa pun." }
      ],
      category: "general"
    },
    {
      id: 4,
      section: "B. Depresi dan Gangguan Mood",
      question: "Apakah Anda sering kehilangan minat atau kesenangan dalam aktivitas yang biasanya Anda nikmati?",
      options: [
        { value: "A", text: "Tidak, saya tetap menikmati aktivitas saya." },
        { value: "B", text: "Kadang-kadang, tapi bisa kembali menikmati setelah beberapa waktu." },
        { value: "C", text: "Ya, hampir semua aktivitas tidak lagi terasa menyenangkan." },
        { value: "D", text: "Saya benar-benar tidak peduli terhadap apa pun yang terjadi dalam hidup saya." }
      ],
      category: "depression"
    },
    {
      id: 5,
      section: "B. Depresi dan Gangguan Mood",
      question: "Apakah Anda pernah merasa sedih secara mendalam tanpa alasan yang jelas?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang, tetapi cepat hilang." },
        { value: "C", text: "Sering merasa sedih tanpa sebab." },
        { value: "D", text: "Hampir setiap hari merasa sangat sedih dan putus asa." }
      ],
      category: "depression"
    },
    {
      id: 6,
      section: "B. Depresi dan Gangguan Mood",
      question: "Bagaimana pola tidur Anda akhir-akhir ini?",
      options: [
        { value: "A", text: "Normal dan nyenyak." },
        { value: "B", text: "Terkadang sulit tidur atau tidur berlebihan." },
        { value: "C", text: "Hampir setiap malam sulit tidur atau terbangun terlalu pagi." },
        { value: "D", text: "Tidur saya sangat buruk, dan saya sering mengalami mimpi buruk atau insomnia berat." }
      ],
      category: "depression"
    },
    {
      id: 7,
      section: "B. Depresi dan Gangguan Mood",
      question: "Bagaimana pola makan Anda dalam beberapa minggu terakhir?",
      options: [
        { value: "A", text: "Normal, tidak ada perubahan besar." },
        { value: "B", text: "Kadang kehilangan nafsu makan, tetapi bisa makan secara normal." },
        { value: "C", text: "Sering kehilangan nafsu makan atau makan berlebihan." },
        { value: "D", text: "Pola makan saya sangat tidak teratur dan memengaruhi kesehatan saya." }
      ],
      category: "depression"
    },
    {
      id: 8,
      section: "B. Depresi dan Gangguan Mood",
      question: "Apakah Anda sering merasa bersalah atau menyalahkan diri sendiri tanpa alasan yang jelas?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang merasa bersalah, tetapi masih bisa berpikir rasional." },
        { value: "C", text: "Sering merasa bersalah tanpa alasan yang kuat." },
        { value: "D", text: "Hampir selalu merasa diri saya gagal atau tidak berharga." }
      ],
      category: "depression"
    },
    {
      id: 9,
      section: "B. Depresi dan Gangguan Mood",
      question: "Apakah Anda sering merasa lelah atau kehilangan energi tanpa alasan yang jelas?",
      options: [
        { value: "A", text: "Tidak, saya merasa cukup bertenaga." },
        { value: "B", text: "Kadang-kadang merasa lelah, tetapi masih bisa beraktivitas." },
        { value: "C", text: "Sering kali merasa sangat lelah meskipun tidak melakukan aktivitas berat." },
        { value: "D", text: "Saya hampir tidak punya energi sama sekali untuk melakukan apa pun." }
      ],
      category: "depression"
    },
    {
      id: 10,
      section: "C. Gangguan Kecemasan dan Stres Berlebihan",
      question: "Apakah Anda sering merasa cemas atau khawatir berlebihan tentang hal-hal kecil?",
      options: [
        { value: "A", text: "Tidak, saya jarang merasa cemas." },
        { value: "B", text: "Kadang-kadang cemas, tetapi bisa mengendalikan perasaan itu." },
        { value: "C", text: "Sering cemas berlebihan bahkan untuk hal kecil." },
        { value: "D", text: "Saya selalu merasa cemas dan tidak bisa mengendalikan rasa takut atau panik." }
      ],
      category: "anxiety"
    },
    {
      id: 11,
      section: "C. Gangguan Kecemasan dan Stres Berlebihan",
      question: "Apakah Anda merasa sulit untuk mengendalikan pikiran negatif atau kekhawatiran?",
      options: [
        { value: "A", text: "Tidak, saya bisa mengendalikan pikiran saya." },
        { value: "B", text: "Kadang sulit mengendalikan, tetapi masih bisa berfungsi normal." },
        { value: "C", text: "Sering kali tidak bisa mengendalikan pikiran negatif." },
        { value: "D", text: "Hampir setiap hari merasa pikiran saya penuh dengan kecemasan dan ketakutan." }
      ],
      category: "anxiety"
    },
    {
      id: 12,
      section: "C. Gangguan Kecemasan dan Stres Berlebihan",
      question: "Apakah Anda sering mengalami serangan panik mendadak, seperti jantung berdebar kencang, sesak napas, atau merasa akan pingsan?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang, tetapi cepat hilang." },
        { value: "C", text: "Sering mengalami tanpa alasan jelas." },
        { value: "D", text: "Hampir setiap hari merasa panik tanpa bisa mengontrolnya." }
      ],
      category: "anxiety"
    },
    {
      id: 13,
      section: "C. Gangguan Kecemasan dan Stres Berlebihan",
      question: "Apakah Anda mengalami ketegangan otot, sakit kepala, atau masalah pencernaan akibat stres atau kecemasan?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang, tetapi tidak terlalu mengganggu." },
        { value: "C", text: "Sering mengalami gejala fisik yang berhubungan dengan stres." },
        { value: "D", text: "Hampir setiap hari merasa tubuh saya tegang dan sakit akibat kecemasan." }
      ],
      category: "anxiety"
    },
    {
      id: 14,
      section: "D. Gangguan Bipolar (Perubahan Mood Ekstrem)",
      question: "Pernahkah Anda merasa sangat berenergi, berbicara cepat, dan melakukan banyak hal tanpa merasa lelah selama beberapa hari berturut-turut?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang, tetapi saya bisa mengendalikannya." },
        { value: "C", text: "Ya, dan saat itu saya merasa sangat kuat atau hebat." },
        { value: "D", text: "Saya sering mengalami hal ini, dan setelahnya saya merasa sangat jatuh dan depresi." }
      ],
      category: "bipolar"
    },
    {
      id: 15,
      section: "D. Gangguan Bipolar (Perubahan Mood Ekstrem)",
      question: "Apakah Anda pernah mengalami periode di mana Anda merasa sangat percaya diri dan bisa melakukan apa saja?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang merasa percaya diri, tetapi masih dalam batas wajar." },
        { value: "C", text: "Ya, saya pernah merasa sangat kuat dan tidak membutuhkan istirahat." },
        { value: "D", text: "Saya sering merasa sangat berenergi, tetapi kemudian jatuh ke kondisi sangat depresi." }
      ],
      category: "bipolar"
    },
    {
      id: 16,
      section: "D. Gangguan Bipolar (Perubahan Mood Ekstrem)",
      question: "Apakah perubahan suasana hati Anda sangat ekstrem, dari sangat bahagia menjadi sangat sedih dalam waktu singkat?",
      options: [
        { value: "A", text: "Tidak, saya merasa stabil." },
        { value: "B", text: "Kadang-kadang berubah suasana hati, tetapi masih wajar." },
        { value: "C", text: "Ya, perubahan itu sering terjadi secara drastis." },
        { value: "D", text: "Suasana hati saya tidak bisa diprediksi, dan itu sangat mengganggu kehidupan saya." }
      ],
      category: "bipolar"
    },
    {
      id: 17,
      section: "D. Gangguan Bipolar (Perubahan Mood Ekstrem)",
      question: "Saat merasa sangat berenergi, apakah Anda pernah melakukan sesuatu yang impulsif, seperti belanja besar-besaran, berjudi, atau membuat keputusan berisiko?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang, tetapi masih dalam batas yang terkendali." },
        { value: "C", text: "Sering melakukan hal impulsif yang kemudian saya sesali." },
        { value: "D", text: "Saya sering kehilangan kendali atas tindakan impulsif saya." }
      ],
      category: "bipolar"
    },
    {
      id: 18,
      section: "E. Gangguan Psikotik dan Skizofrenia",
      question: "Pernahkah Anda merasa mendengar suara atau melihat sesuatu yang tidak dilihat orang lain?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang merasa mendengar suara samar, tetapi saya sadar itu tidak nyata." },
        { value: "C", text: "Ya, saya sering mendengar atau melihat hal yang orang lain tidak bisa lihat." },
        { value: "D", text: "Hal ini sering terjadi dan memengaruhi kehidupan saya sehari-hari." }
      ],
      category: "schizophrenia"
    },
    {
      id: 19,
      section: "E. Gangguan Psikotik dan Skizofrenia",
      question: "Apakah Anda pernah merasa bahwa orang lain bisa membaca pikiran Anda?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang, tetapi saya sadar itu mungkin hanya perasaan saya." },
        { value: "C", text: "Sering merasa bahwa orang lain bisa mengetahui isi pikiran saya." },
        { value: "D", text: "Saya yakin ada kekuatan atau teknologi yang dapat membaca pikiran saya." }
      ],
      category: "schizophrenia"
    },
    {
      id: 20,
      section: "E. Gangguan Psikotik dan Skizofrenia",
      question: "Apakah Anda merasa ada orang yang mengawasi atau ingin menyakiti Anda tanpa alasan yang jelas?",
      options: [
        { value: "A", text: "Tidak, saya tidak pernah merasakan itu." },
        { value: "B", text: "Kadang merasa cemas, tetapi bisa menenangkan diri." },
        { value: "C", text: "Ya, saya sering merasa ada yang memata-matai saya." },
        { value: "D", text: "Saya yakin ada orang yang ingin menyakiti saya, dan itu membuat saya takut." }
      ],
      category: "schizophrenia"
    },
    {
      id: 21,
      section: "E. Gangguan Psikotik dan Skizofrenia",
      question: "Apakah Anda merasa bahwa ada pesan tersembunyi yang dikirimkan kepada Anda melalui media atau lingkungan sekitar?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang merasa aneh, tetapi saya tahu itu tidak nyata." },
        { value: "C", text: "Sering merasa bahwa televisi, radio, atau media sosial mengirim pesan khusus untuk saya." },
        { value: "D", text: "Saya yakin ada pesan khusus yang ditujukan kepada saya, dan itu mengganggu pikiran saya." }
      ],
      category: "schizophrenia"
    },
    {
      id: 22,
      section: "F. PTSD (Gangguan Stres Pascatrauma)",
      question: "Apakah Anda pernah mengalami kejadian traumatis yang terus menghantui Anda?",
      options: [
        { value: "A", text: "Tidak, saya tidak pernah mengalami hal seperti itu." },
        { value: "B", text: "Pernah, tetapi saya sudah bisa mengatasinya." },
        { value: "C", text: "Ya, dan saya sering mengingatnya tiba-tiba." },
        { value: "D", text: "Saya selalu dihantui oleh pengalaman itu dan merasa sangat terganggu." }
      ],
      category: "ptsd"
    },
    {
      id: 23,
      section: "F. PTSD (Gangguan Stres Pascatrauma)",
      question: "Apakah Anda sering mengalami mimpi buruk atau kilas balik tentang kejadian traumatis tersebut?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang, tetapi saya bisa mengabaikannya." },
        { value: "C", text: "Sering mengalami mimpi buruk tentang kejadian itu." },
        { value: "D", text: "Hampir setiap malam saya mengalami kilas balik atau mimpi buruk tentang kejadian itu." }
      ],
      category: "ptsd"
    },
    {
      id: 24,
      section: "F. PTSD (Gangguan Stres Pascatrauma)",
      question: "Apakah Anda menghindari tempat atau situasi tertentu karena mengingat kejadian traumatis?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang-kadang, tetapi masih bisa mengatasinya." },
        { value: "C", text: "Sering menghindari tempat atau situasi tertentu karena trauma." },
        { value: "D", text: "Saya hampir tidak bisa keluar rumah karena takut mengalami trauma lagi." }
      ],
      category: "ptsd"
    },
    {
      id: 25,
      section: "F. PTSD (Gangguan Stres Pascatrauma)",
      question: "Apakah Anda mengalami kesulitan mempercayai orang lain setelah mengalami kejadian traumatis?",
      options: [
        { value: "A", text: "Tidak, saya masih bisa mempercayai orang lain." },
        { value: "B", text: "Kadang merasa sulit percaya, tetapi tidak berlebihan." },
        { value: "C", text: "Sering merasa sulit untuk mempercayai orang, bahkan orang terdekat." },
        { value: "D", text: "Saya tidak bisa mempercayai siapa pun, dan selalu merasa curiga." }
      ],
      category: "ptsd"
    },
    {
      id: 26,
      section: "G. Gangguan Makan (Anoreksia, Bulimia, Binge Eating)",
      question: "Bagaimana perasaan Anda terhadap makanan dan berat badan Anda?",
      options: [
        { value: "A", text: "Saya makan dengan normal dan tidak terlalu memikirkan berat badan." },
        { value: "B", text: "Kadang merasa khawatir tentang berat badan, tetapi tetap makan normal." },
        { value: "C", text: "Saya sering menghindari makan atau merasa sangat bersalah setelah makan." },
        { value: "D", text: "Saya sering makan berlebihan atau memuntahkan makanan setelah makan." }
      ],
      category: "eating"
    },
    {
      id: 27,
      section: "G. Gangguan Makan (Anoreksia, Bulimia, Binge Eating)",
      question: "Bagaimana perasaan Anda terhadap tubuh Anda saat bercermin?",
      options: [
        { value: "A", text: "Saya merasa baik-baik saja dengan tubuh saya." },
        { value: "B", text: "Kadang merasa tidak puas, tetapi tidak berlebihan." },
        { value: "C", text: "Sering merasa jijik atau sangat tidak puas dengan tubuh saya." },
        { value: "D", text: "Saya benci tubuh saya dan selalu merasa harus mengubahnya." }
      ],
      category: "eating"
    },
    {
      id: 28,
      section: "G. Gangguan Makan (Anoreksia, Bulimia, Binge Eating)",
      question: "Apakah Anda pernah melakukan sesuatu yang ekstrem untuk mengontrol berat badan, seperti muntah setelah makan atau menggunakan obat pencahar?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Pernah mencobanya, tetapi tidak menjadi kebiasaan." },
        { value: "C", text: "Sering melakukannya setelah makan." },
        { value: "D", text: "Hampir setiap hari saya melakukan hal ini untuk mengendalikan berat badan." }
      ],
      category: "eating"
    },
    {
      id: 29,
      section: "H. Gangguan Kepribadian dan Perilaku",
      question: "Apakah Anda sering merasa kosong atau tidak tahu siapa diri Anda sebenarnya?",
      options: [
        { value: "A", text: "Tidak pernah." },
        { value: "B", text: "Kadang merasa seperti itu, tetapi masih bisa menemukan jati diri." },
        { value: "C", text: "Sering merasa kehilangan identitas diri." },
        { value: "D", text: "Saya hampir selalu merasa kosong dan tidak tahu siapa diri saya." }
      ],
      category: "personality"
    },
    {
      id: 30,
      section: "H. Gangguan Kepribadian dan Perilaku",
      question: "Apakah Anda sering mengalami kesulitan dalam menjaga hubungan dengan orang lain?",
      options: [
        { value: "A", text: "Tidak, saya bisa menjalin hubungan dengan baik." },
        { value: "B", text: "Kadang-kadang mengalami kesulitan, tetapi masih bisa berteman." },
        { value: "C", text: "Sering merasa hubungan saya dengan orang lain tidak stabil." },
        { value: "D", text: "Saya hampir selalu memiliki hubungan yang kacau dan sulit dipertahankan." }
      ],
      category: "personality"
    }
  ];
  
  export default questions;