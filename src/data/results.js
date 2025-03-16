const results = {
    depression: {
      title: "Depresi",
      description: "Depresi adalah gangguan mood yang menyebabkan perasaan sedih dan kehilangan minat secara persisten. Ini lebih dari sekedar kesedihan biasa dan dapat mempengaruhi cara Anda berpikir, merasa, dan menjalani aktivitas sehari-hari.",
      facts: [
        "Depresi adalah penyebab utama disabilitas di seluruh dunia",
        "Sekitar 264 juta orang dari segala usia menderita depresi",
        "Wanita lebih rentan mengalami depresi dibandingkan pria",
        "Depresi dapat menyebabkan masalah fisik seperti sakit kepala, sakit punggung, dan masalah pencernaan"
      ],
      examples: [
        "Merasa sedih, hampa, atau putus asa hampir setiap hari",
        "Kehilangan minat pada aktivitas yang biasanya dinikmati",
        "Perubahan pola tidur dan nafsu makan",
        "Kesulitan berkonsentrasi dan membuat keputusan"
      ],
      treatment: [
        "Terapi bicara (psikoterapi) seperti Cognitive Behavioral Therapy (CBT)",
        "Obat antidepresan (harus dikonsultasikan dengan dokter)",
        "Perubahan gaya hidup seperti olahraga teratur dan pola tidur yang baik",
        "Dukungan sosial dari keluarga dan teman"
      ]
    },
    anxiety: {
      title: "Gangguan Kecemasan",
      description: "Gangguan kecemasan melibatkan rasa takut atau khawatir yang berlebihan dan persisten. Kecemasan ini lebih dari sekedar perasaan stres biasa dan dapat mengganggu aktivitas sehari-hari.",
      facts: [
        "Gangguan kecemasan adalah masalah kesehatan mental yang paling umum",
        "Sekitar 275 juta orang di dunia mengalami gangguan kecemasan",
        "Gangguan kecemasan sering muncul bersamaan dengan depresi",
        "Kecemasan kronis dapat menyebabkan masalah kesehatan fisik seperti sakit kepala dan masalah pencernaan"
      ],
      examples: [
        "Khawatir berlebihan tentang hal-hal kecil",
        "Serangan panik dengan gejala fisik seperti jantung berdebar dan sesak napas",
        "Menghindari situasi yang memicu kecemasan",
        "Kesulitan berkonsentrasi karena pikiran yang terus-menerus khawatir"
      ],
      treatment: [
        "Cognitive Behavioral Therapy (CBT)",
        "Teknik relaksasi dan pernapasan",
        "Obat anti-kecemasan (harus dikonsultasikan dengan dokter)",
        "Mindfulness dan meditasi"
      ]
    },
    bipolar: {
      title: "Gangguan Bipolar",
      description: "Gangguan bipolar ditandai dengan perubahan mood yang ekstrem, dari episode mania (energi tinggi) hingga depresi (energi rendah). Perubahan ini dapat berlangsung selama beberapa hari hingga beberapa bulan.",
      facts: [
        "Sekitar 45 juta orang di seluruh dunia hidup dengan gangguan bipolar",
        "Gangguan bipolar biasanya mulai muncul pada usia remaja atau dewasa muda",
        "Ada beberapa tipe gangguan bipolar, termasuk Bipolar I, Bipolar II, dan Cyclothymic Disorder",
        "Faktor genetik berperan penting dalam gangguan bipolar"
      ],
      examples: [
        "Episode mania dengan energi berlebih, bicara cepat, dan kurang tidur",
        "Episode depresi dengan perasaan sedih, putus asa, dan kehilangan minat",
        "Perubahan mood yang drastis tanpa pemicu yang jelas",
        "Perilaku impulsif selama episode mania"
      ],
      treatment: [
        "Obat penstabil mood seperti lithium",
        "Psikoterapi seperti terapi interpersonal dan terapi keluarga",
        "Manajemen gaya hidup termasuk pola tidur yang teratur",
        "Dukungan berkelanjutan dari profesional kesehatan mental"
      ]
    },
    schizophrenia: {
      title: "Skizofrenia",
      description: "Skizofrenia adalah gangguan mental kronis yang mempengaruhi cara seseorang berpikir, merasa, dan berperilaku. Orang dengan skizofrenia mungkin tampak kehilangan kontak dengan realitas.",
      facts: [
        "Sekitar 20 juta orang di seluruh dunia hidup dengan skizofrenia",
        "Skizofrenia biasanya mulai muncul pada usia 16-30 tahun",
        "Faktor genetik dan lingkungan berperan dalam perkembangan skizofrenia",
        "Dengan pengobatan yang tepat, banyak orang dengan skizofrenia dapat hidup produktif"
      ],
      examples: [
        "Halusinasi (melihat atau mendengar sesuatu yang tidak ada)",
        "Delusi (keyakinan kuat yang tidak sesuai dengan realitas)",
        "Pikiran dan ucapan yang tidak terorganisir",
        "Kurangnya ekspresi emosi dan penarikan sosial"
      ],
      treatment: [
        "Obat antipsikotik",
        "Terapi psikososial",
        "Rehabilitasi dan dukungan untuk keterampilan hidup sehari-hari",
        "Dukungan keluarga dan pendidikan tentang kondisi"
      ]
    },
    ptsd: {
      title: "PTSD (Gangguan Stres Pascatrauma)",
      description: "PTSD adalah kondisi kesehatan mental yang dipicu oleh pengalaman traumatis. Gejala dapat mencakup kilas balik, mimpi buruk, dan kecemasan parah.",
      facts: [
        "Sekitar 3.6% populasi dunia mengalami PTSD",
        "PTSD dapat berkembang segera setelah trauma atau muncul bertahun-tahun kemudian",
        "Tidak semua orang yang mengalami trauma akan mengembangkan PTSD",
        "PTSD dapat mempengaruhi orang dari segala usia"
      ],
      examples: [
        "Kilas balik yang mengganggu tentang kejadian traumatis",
        "Mimpi buruk dan gangguan tidur",
        "Menghindari situasi yang mengingatkan pada trauma",
        "Reaksi berlebihan terhadap suara keras atau kejutan"
      ],
      treatment: [
        "Cognitive Processing Therapy (CPT)",
        "Eye Movement Desensitization and Reprocessing (EMDR)",
        "Obat untuk mengelola gejala kecemasan dan depresi",
        "Grup dukungan dengan orang yang memiliki pengalaman serupa"
      ]
    },
    eating: {
      title: "Gangguan Makan",
      description: "Gangguan makan adalah kondisi kesehatan mental yang ditandai dengan pola makan dan pikiran yang tidak sehat tentang makanan, berat badan, dan bentuk tubuh.",
      facts: [
        "Gangguan makan memiliki tingkat kematian tertinggi di antara gangguan mental",
        "Sekitar 9% populasi dunia dipengaruhi oleh gangguan makan",
        "Gangguan makan dapat mempengaruhi orang dari segala gender, usia, dan latar belakang",
        "Gangguan makan sering terjadi bersamaan dengan depresi dan kecemasan"
      ],
      examples: [
        "Anoreksia: Pembatasan asupan makanan yang ekstrem",
        "Bulimia: Siklus makan berlebihan dan perilaku pembersihan",
        "Binge Eating Disorder: Makan dalam jumlah besar tanpa kontrol",
        "Preokupasi yang berlebihan dengan berat badan dan bentuk tubuh"
      ],
      treatment: [
        "Terapi nutrisi dengan ahli diet",
        "Cognitive Behavioral Therapy (CBT) khusus untuk gangguan makan",
        "Terapi keluarga, terutama untuk remaja",
        "Dalam kasus parah, perawatan di rumah sakit mungkin diperlukan"
      ]
    },
    personality: {
      title: "Gangguan Kepribadian",
      description: "Gangguan kepribadian adalah pola pikir, perasaan, dan perilaku yang kaku dan tidak sehat yang menyebabkan masalah dalam fungsi dan hubungan sosial. Orang dengan gangguan kepribadian sering mengalami kesulitan dalam memahami dan berhubungan dengan situasi dan orang lain.",
      facts: [
        "Gangguan kepribadian mempengaruhi sekitar 9% populasi dunia",
        "Ada beberapa tipe gangguan kepribadian, termasuk borderline, narsistik, antisosial, dan avoidant",
        "Gangguan kepribadian biasanya mulai berkembang pada masa remaja atau dewasa awal",
        "Kombinasi faktor genetik dan lingkungan berperan dalam perkembangan gangguan kepribadian"
      ],
      examples: [
        "Kesulitan mempertahankan hubungan yang stabil dan sehat",
        "Perasaan kosong atau tidak memiliki identitas diri yang jelas",
        "Perubahan mood yang cepat dan intens",
        "Perilaku impulsif dan berisiko tinggi"
      ],
      treatment: [
        "Psikoterapi, terutama Dialectical Behavior Therapy (DBT) dan Cognitive Behavioral Therapy (CBT)",
        "Terapi kelompok untuk meningkatkan keterampilan sosial",
        "Dalam beberapa kasus, obat-obatan untuk mengatasi gejala tertentu seperti kecemasan atau depresi",
        "Dukungan jangka panjang dan konsistensi dalam perawatan"
      ]
    }
  };
  
  export default results;