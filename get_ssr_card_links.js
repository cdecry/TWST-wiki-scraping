const STUDENTS = ["Riddle_Rosehearts", "Ace_Trappola", "Deuce_Spade", "Trey_Clover", "Cater_Diamond", "Leona_Kingscholar", "Ruggie_Bucchi", "Jack_Howl", "Azul_Ashengrotto", "Jade_Leech", "Floyd_Leech", "Kalim_Al-Asim", "Jamil_Viper", "Vil_Schoenheit", "Rook_Hunt", "Epel_Felmier", "Idia_Shroud", "Ortho_Shroud", "Malleus_Draconia", "Lilia_Vanrouge", "Silver", "Sebek_Zigvolt"];

for (i = 0; i < STUDENTS.length; i++) {
    var student_name = STUDENTS[i];
    var link = "https://twisted-wonderland.fandom.com/wiki/" + student_name + "/Cards/SSR_Dorm_Uniform";
    console.log(link);
}