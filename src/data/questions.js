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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
      section: "G. Gangguan Makan (Anoreksia, Bulimia, Binge Eating)",
      question: "Bagaimana perasaan Anda terhadap makanan dan berat badan Anda?",
      options: [
        { value: "A", text: "Saya makan dengan normal dan tidak terlalu memikirkan berat badan." },
        { value: "B", text: "Kadang merasa khawatir tentang berat badan, tetapi tetap makan normal." },
        { value: "C", text: "Saya sering menghindari makan atau merasa sangat bersalah setelah makan." },
        { value: "D", text: "Saya sering makan berlebihan atau memuntahkan makanan setelah makan." }
      ],
      category: "eating"
    }
  ];
  
  export default questions;